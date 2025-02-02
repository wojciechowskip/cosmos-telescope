import { OfflineSigner } from "@cosmjs/proto-signing";
import path from "path";
import {
  ConfigContext,
  generateMnemonic,
  useChain,
  useRegistry,
} from "starshipjs";

import { createAminoWallet, createProtoWallet } from "../src";
import { createRPCQueryClient } from "../../src/cosmos/rpc.query";
import { getSigningCosmosClient } from "../../src";
import { Grant } from "../../src/cosmos/authz/v1beta1/authz";
import { MessageComposer as AuthzMessageComposer } from "../../src/cosmos/authz/v1beta1/tx.registry";
import { assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import {
  StakeAuthorization,
  StakeAuthorization_Validators,
} from "../../src/cosmos/staking/v1beta1/authz";
import { Any } from "../../src/google/protobuf/any";
import { MsgDelegate } from "../../src/cosmos/staking/v1beta1/tx";

describe("Authz Stake Auth with Deny List", () => {
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

    await creditFromFaucet(t1Addr, denom);
    await creditFromFaucet(t2Addr, denom);
  });

  test("authz stake grant with deny list", async () => {
    const queryClient = await createRPCQueryClient({ rpcEndpoint });
    const signingClient = await getSigningCosmosClient({
      rpcEndpoint,
      signer: test1Wallet,
    });

    const validators = await queryClient.cosmos.staking.v1beta1.validators({
      status: "BOND_STATUS_BONDED",
    });

    const onlyOneVal = validators.validators[0].operatorAddress;

    const msg = AuthzMessageComposer.fromPartial.grant({
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

    // Debugging
    // const aminoTypes = new AminoTypes(cosmosAminoConverters);
    // const aminoMessage = aminoTypes.toAmino(msg);

    // console.log(JSON.stringify(msg));
    // console.log(JSON.stringify(aminoMessage));
    // console.log(JSON.stringify(aminoTypes.fromAmino(aminoMessage)));

    const result = await signingClient.signAndBroadcast(t1Addr, [msg], fee);
    assertIsDeliverTxSuccess(result);

    const grants = await queryClient.cosmos.authz.v1beta1.granterGrants({
      granter: t1Addr,
    });

    expect(grants.grants.length).toBe(1);
    expect(grants.grants[0].grantee).toBe(t2Addr);
    expect(grants.grants[0].granter).toBe(t1Addr);

    const msgDelegate = MsgDelegate.fromPartial({
      delegatorAddress: t1Addr,
      validatorAddress: onlyOneVal,
      amount: { denom: "uatom", amount: "100000" },
    });

    // Encode msgDelegate as an `Any` type
    const encodedMsgDelegate = Any.fromPartial({
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
      value: MsgDelegate.encode(msgDelegate).finish(), // Serialize msgDelegate
    });

    const msgExec = AuthzMessageComposer.fromPartial.exec({
      grantee: t2Addr,
      msgs: [encodedMsgDelegate]
    });

    const signingClient2 = await getSigningCosmosClient({
      rpcEndpoint,
      signer: test2Wallet,
    });

    const delegateionResult = await signingClient2.signAndBroadcast(t2Addr, [msgExec], fee);

    assertIsDeliverTxSuccess(delegateionResult);

    const validatorsOfDelegator = await queryClient.cosmos.staking.v1beta1.delegatorValidators({
      delegatorAddr: t1Addr,
    });

    expect(validatorsOfDelegator.validators.length).toBe(1);
  });
});
