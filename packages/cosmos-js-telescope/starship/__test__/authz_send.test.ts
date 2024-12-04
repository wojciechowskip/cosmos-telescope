import { OfflineSigner } from "@cosmjs/proto-signing";
import path from "path";
import {
  ConfigContext,
  generateMnemonic,
  useChain,
  useRegistry,
} from "starshipjs";

import { createAminoWallet } from "../src";
import { createRPCQueryClient } from "../../src/cosmos/rpc.query";
import { getSigningCosmosClient } from "../../src";
import { Grant } from "../../src/cosmos/authz/v1beta1/authz";
import { MessageComposer } from "../../src/cosmos/authz/v1beta1/tx.registry";
import { assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import { SendAuthorization } from "../../src/cosmos/bank/v1beta1/authz";

xdescribe("Authz Stake Auth with Deny List", () => {
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
    test2Wallet = await createAminoWallet(generateMnemonic(), prefix);
    fee = { amount: [{ denom, amount: "100000" }], gas: "550000" };

    t1Addr = (await test1Wallet.getAccounts())[0].address;
    t2Addr = (await test2Wallet.getAccounts())[0].address;

    await creditFromFaucet(t1Addr, denom);
    await creditFromFaucet(t2Addr, denom);
  });

  test("authz send grant", async () => {
    const queryClient = await createRPCQueryClient({ rpcEndpoint });
    const signingClient = await getSigningCosmosClient({
      rpcEndpoint,
      signer: test1Wallet,
    });

    const msg = MessageComposer.fromPartial.grant({
      grantee: t2Addr,
      granter: t1Addr,
      grant: Grant.fromPartial({
        authorization: SendAuthorization.fromPartial({
          spendLimit: [{ denom: "uatom", amount: "10000" }],
          allowList: [""], // The list MUST contain a value, otherwise the signed message and the message decoded by the server won't match as the field gets omitted
        }),
        expiration: null,
      }),
    });

    const result = await signingClient.signAndBroadcast(t1Addr, [msg], fee);
    assertIsDeliverTxSuccess(result);

    const grants = await queryClient.cosmos.authz.v1beta1.granterGrants({
      granter: t1Addr,
    });
    expect(grants.grants.length).toBe(1);
    expect(grants.grants[0].grantee).toBe(t2Addr);
  });
});
