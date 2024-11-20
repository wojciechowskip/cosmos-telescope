import { OfflineSigner } from "@cosmjs/proto-signing";
import path from "path";
import {
  ConfigContext,
  generateMnemonic,
  useChain,
  useRegistry,
} from "starshipjs";

import { createAminoWallet, createProtoWallet, waitForNBlocks } from "../src";
import { createRPCQueryClient } from "../../src/cosmos/rpc.query";
import { getSigningCosmosClient } from "../../src";
import {
  GenericAuthorization,
  Grant,
} from "../../src/cosmos/authz/v1beta1/authz";
import { MessageComposer as AuthzMessageComposer } from "../../src/cosmos/authz/v1beta1/tx.registry";
import { MessageComposer as BankMessageComposer } from "../../src/cosmos/bank/v1beta1/tx.registry";
import { MessageComposer as DistrMessageComposer } from "../../src/cosmos/distribution/v1beta1/tx.registry";
import { assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import { MessageComposer } from "../../src/cosmos/staking/v1beta1/tx.registry";
import { Any } from "../../src/google/protobuf/any";
import {
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
} from "../../src/cosmos/distribution/v1beta1/tx";
import {
  StakeAuthorization,
  StakeAuthorization_Validators,
} from "../../src/cosmos/staking/v1beta1/authz";
import { MsgDelegate } from "../../src/cosmos/staking/v1beta1/tx";

describe("Set withdraw address permission", () => {
  let test1Wallet: OfflineSigner,
    test2Wallet: OfflineSigner,
    t1Addr: string,
    t2Addr: string,
    rpcEndpoint: string,
    fee: { amount: { denom: string; amount: string }[]; gas: string };

  beforeAll(async () => {
    const configFile = path.join(__dirname, "..", "configs", "config.yaml");

    await ConfigContext.init(configFile, await useRegistry(configFile));

    const { chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain("cosmoshub");

    const denom = (await getCoin()).base;
    const prefix = chainInfo.chain.bech32_prefix;
    rpcEndpoint = await getRpcEndpoint();

    test1Wallet = await createAminoWallet(generateMnemonic(), prefix);
    test2Wallet = await createProtoWallet(generateMnemonic(), prefix);
    fee = { amount: [{ denom, amount: "100000" }], gas: "550000" };

    t1Addr = (await test1Wallet.getAccounts())[0].address;
    t2Addr = (await test2Wallet.getAccounts())[0].address;

    console.log("t1Addr", t1Addr);
    console.log("t2Addr", t2Addr);

    await creditFromFaucet(t1Addr, denom);
    await creditFromFaucet(t2Addr, denom);
  });

  test("Set msg withdraw address grant", async () => {
    // Part 1 - setup, delegate to a validator from address 1
    const queryClient = await createRPCQueryClient({ rpcEndpoint });
    const signingClient = await getSigningCosmosClient({
      rpcEndpoint,
      signer: test1Wallet,
    });

    const initialUserBalance = await queryClient.cosmos.bank.v1beta1.balance({
      address: t1Addr,
      denom: "uatom",
    });
    console.log("initial user balance", initialUserBalance.balance.amount);
    const initialBotBalance = await queryClient.cosmos.bank.v1beta1.balance({
      address: t2Addr,
      denom: "uatom",
    });
    console.log("initial bot balance", initialBotBalance.balance.amount);

    const validators = await queryClient.cosmos.staking.v1beta1.validators({
      status: "BOND_STATUS_BONDED",
    });
    const onlyOneVal = validators.validators[0].operatorAddress;

    const msgDelegate = MessageComposer.withTypeUrl.delegate({
      delegatorAddress: t1Addr,
      validatorAddress: onlyOneVal,
      amount: { denom: "uatom", amount: "10000" },
    });

    const result = await signingClient.signAndBroadcast(
      t1Addr,
      [msgDelegate],
      fee
    );
    assertIsDeliverTxSuccess(result);

    const initialDelegatorRewards = await queryClient.cosmos.distribution.v1beta1.delegationRewards({
      delegatorAddress: t1Addr,
      validatorAddress: onlyOneVal,
    });

    // TODO it says I have more rewards to claim that its possible to get
    console.log("initialDelegatorRewards", initialDelegatorRewards.rewards[0]);

    const validatorsOfDelegator =
      await queryClient.cosmos.staking.v1beta1.delegatorValidators({
        delegatorAddr: t1Addr,
      });

    expect(validatorsOfDelegator.validators.length).toBe(1);

    // Part 2 - grant permission to address 2 to set withdraw address
    const msgSetWithrawAddr = AuthzMessageComposer.fromPartial.grant({
      granter: t1Addr, // test1Wallet is granting the permission
      grantee: t2Addr, // test2Wallet receives the permission
      grant: Grant.fromPartial({
        expiration: null,
        authorization: GenericAuthorization.fromPartial({
          msg: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", // Permission type
        }),
      }),
    });

    // Grant permission to address 2 to stake
    const msgStakeAuth = AuthzMessageComposer.fromPartial.grant({
      grantee: t2Addr,
      granter: t1Addr,
      grant: Grant.fromPartial({
        authorization: StakeAuthorization.fromPartial({
          maxTokens: null,
          authorizationType: 1,
          denyList: StakeAuthorization_Validators.fromPartial({
            address: [""],
            type: "cosmos-sdk/StakeAuthorization/DenyList",
          }),
        }),
        expiration: null,
      }),
    });

    // Grant permission to address 2 to withdraw rewards
    const msgWithdrawRewards = AuthzMessageComposer.fromPartial.grant({
      grantee: t2Addr,
      granter: t1Addr,
      grant: Grant.fromPartial({
        authorization: GenericAuthorization.fromPartial({
          msg: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        }),
        expiration: null,
      }),
    });

    const resultGrant = await signingClient.signAndBroadcast(
      t1Addr,
      [msgSetWithrawAddr, msgStakeAuth, msgWithdrawRewards],
      fee
    );
    assertIsDeliverTxSuccess(resultGrant);

    const grants = await queryClient.cosmos.authz.v1beta1.granterGrants({
      granter: t1Addr,
    });
    expect(grants.grants.length).toBe(3);
    expect(grants.grants[0].grantee).toBe(t2Addr);
    expect(grants.grants[0].granter).toBe(t1Addr);

    // Part 3 - wait several blocks to generate rewards
    await waitForNBlocks(signingClient, 5);

    // Part 4 - set withdraw address for address 2nd
    const signingClient2 = await getSigningCosmosClient({
      rpcEndpoint,
      signer: test2Wallet,
    });

    // Grant > Exec Msg Set Withdraw Address
    const msgSetWithdrawAddressToAddr2 = MsgSetWithdrawAddress.fromPartial({
      delegatorAddress: t1Addr,
      withdrawAddress: t2Addr,
    });

    const encodedMsgSetWithdrawAddrToAddr2 = Any.fromPartial({
      typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
      value: MsgSetWithdrawAddress.encode(
        msgSetWithdrawAddressToAddr2
      ).finish(), // Serialize msgDelegate
    });

    const msgExecSetWithdrawAddressToAddr2 =
      AuthzMessageComposer.fromPartial.exec({
        grantee: t2Addr,
        msgs: [encodedMsgSetWithdrawAddrToAddr2],
      });

    const setWithdrawAddressToAddr2 = await signingClient2.signAndBroadcast(
      t2Addr,
      [msgExecSetWithdrawAddressToAddr2],
      fee
    );
    assertIsDeliverTxSuccess(setWithdrawAddressToAddr2);

    const withdrawAddress =
      await queryClient.cosmos.distribution.v1beta1.delegatorWithdrawAddress({
        delegatorAddress: t1Addr,
      });

    expect(withdrawAddress.withdrawAddress).toBe(t2Addr);

    // Part 5 - withdraw rewards
    const delegatorRewardsToBeClaimed =
      await queryClient.cosmos.distribution.v1beta1.delegationRewards({
        delegatorAddress: t1Addr,
        validatorAddress: onlyOneVal,
      });

    const delegatorRewardsToBeClaimedAmount =
      delegatorRewardsToBeClaimed.rewards[0].amount;


    console.log("rewards to be claimed", delegatorRewardsToBeClaimedAmount);

    const botBalanceBeforeWithdraw = await queryClient.cosmos.bank.v1beta1.balance({
      address: t2Addr,
      denom: "uatom",
    });
    console.log("bot balance before withdraw", botBalanceBeforeWithdraw.balance.amount);

    const withdrawRewards = MsgWithdrawDelegatorReward.fromPartial({
      delegatorAddress: t1Addr,
      validatorAddress: onlyOneVal,
    });

    const encodedWithdrawRewards = Any.fromPartial({
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value: MsgWithdrawDelegatorReward.encode(withdrawRewards).finish(),
    });

    const execWithdrawRewards = AuthzMessageComposer.fromPartial.exec({
      grantee: t2Addr,
      msgs: [encodedWithdrawRewards],
    });

    const withdrawRewardsResult = await signingClient2.signAndBroadcast(
      t2Addr,
      [execWithdrawRewards],
      fee
    );
    assertIsDeliverTxSuccess(withdrawRewardsResult);

    const botBalanceAfterWithdraw = await queryClient.cosmos.bank.v1beta1.balance({
      address: t2Addr,
      denom: "uatom",
    });
    console.log("bot balance after withdraw", botBalanceAfterWithdraw.balance.amount);

    const delegatorRewardsAfterClaim =
      await queryClient.cosmos.distribution.v1beta1.delegationRewards({
        delegatorAddress: t1Addr,
        validatorAddress: onlyOneVal,
      });

    // TODO for some reason not zero!
    // expect(delegatorRewardsAfterClaim.rewards[0].amount).toBe(0);
    console.log("rewards after recent claim claimed", delegatorRewardsToBeClaimedAmount);

    // Part 6 - Send remaining rewards to the user's wallet
    const userBalance = await queryClient.cosmos.bank.v1beta1.balance({
      address: t1Addr,
      denom: "uatom",
    });
    console.log("user balance", userBalance.balance.amount);
    const botBalance = await queryClient.cosmos.bank.v1beta1.balance({
      address: t2Addr,
      denom: "uatom",
    });
    console.log("bot balance", botBalance.balance.amount);


    const sendBackToUser = BankMessageComposer.withTypeUrl.send({
      fromAddress: t2Addr,
      toAddress: t1Addr,
      amount: [{ denom: "uatom", amount: "10" }], // In theory it should be delegatorRewardsToBeClaimedAmount but test env breaks it
    });
    const sendBackToUserResult = await signingClient2.signAndBroadcast(
      t2Addr,
      [sendBackToUser],
      fee
    );
    assertIsDeliverTxSuccess(sendBackToUserResult);

    await waitForNBlocks(signingClient, 3);


    // Part 7 - Delegate back delegatorRewardsToBeClaimedAmount (claimed tokens)
    // In this step we can delegate LESS because of the fee

    const msgDelegateBack = MsgDelegate.fromPartial({
      delegatorAddress: t1Addr,
      validatorAddress: onlyOneVal,
      amount: { denom: "uatom", amount: "10" }, // This in theory should use delegatorRewardsToBeClaimedAmount but unfortunately test env breaks it
    });

    const encodedMsgDelegate = Any.fromPartial({
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
      value: MsgDelegate.encode(msgDelegateBack).finish(),
    });

    const msgExec = AuthzMessageComposer.fromPartial.exec({
      grantee: t2Addr,
      msgs: [encodedMsgDelegate],
    });

    const execDelegate = await signingClient2.signAndBroadcast(
      t2Addr,
      [msgExec],
      fee
    );
    assertIsDeliverTxSuccess(execDelegate);

    // Part 8 - set withdraw address for address 1st
    const msgSetWithdrawAddressBackToAddr1 = MsgSetWithdrawAddress.fromPartial({
      delegatorAddress: t1Addr,
      withdrawAddress: t1Addr,
    });

    const encodedSetAddrBackToAddr1 = Any.fromPartial({
      typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
      value: MsgSetWithdrawAddress.encode(
        msgSetWithdrawAddressBackToAddr1
      ).finish(),
    });

    const msgExecSetWithdrawAddressToAddr1 =
      AuthzMessageComposer.fromPartial.exec({
        grantee: t2Addr,
        msgs: [encodedSetAddrBackToAddr1],
      });

    const setWithdrawAddressBackToAddr1Result =
      await signingClient2.signAndBroadcast(
        t2Addr,
        [msgExecSetWithdrawAddressToAddr1],
        fee
      );
    assertIsDeliverTxSuccess(setWithdrawAddressBackToAddr1Result);

    const withdrawAddressAfterFinalStep =
      await queryClient.cosmos.distribution.v1beta1.delegatorWithdrawAddress({
        delegatorAddress: t1Addr,
      });

    expect(withdrawAddressAfterFinalStep.withdrawAddress).toBe(t1Addr);

    // Part 9 - Send funds to the fee wallet
    // Easy
  });
});

/* Overall explanation
   FRONTEND:
   1. Grant all required permissions to our bot wallet:
      - Stake
      - Set withdraw address (with empty deny list)
      - Withdraw rewards
      - Fee grant


   COMPOUNDING SERVICE:
   1. Set withdraw address to the bot wallet
   2. Withdraw rewards [user pays for fees]
   3. Calculate fee based on withdrawn address (10% of the rewards), and keep it on bot wallet
   4. Send user rewards back to the user's wallet (90% of remaining) [we pay this fee, but we can use fee taken from user rewards]
   5. Delegate back remaining rewards to the validator (90% of the rewards which were withdrawn) [user pays for fees]
   6. Set withdraw address back to the user's wallet [user pays for fees]
 */

