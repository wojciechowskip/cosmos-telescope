import { Secp256k1HdWallet } from "@cosmjs/amino";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {
  SigningStargateClient,
} from "@cosmjs/stargate";
import { useChain } from "starshipjs";

// The POA Address is a Group address created at genesis
export const POA_GROUP_ADDRESS =
  "manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj";

// test1 key as defined in https://github.com/cosmology-tech/starship/blob/main/starship/charts/devnet/configs/keys.json
export const test1Mnemonic =
  "opinion knife other balcony surge more bamboo canoe romance ask argue teach anxiety adjust spike mystery wolf alone torch tail six decide wash alley";
// test2 key as defined in https://github.com/cosmology-tech/starship/blob/main/starship/charts/devnet/configs/keys.json
export const test2Mnemonic =
  "logic help only text door wealth hurt always remove glory viable income agent olive trial female couch old offer crash menu zero pencil thrive";
// test3 key as defined in https://github.com/cosmology-tech/starship/blob/main/starship/charts/devnet/configs/keys.json
export const test3Mnemonic =
  "middle weather hip ghost quick oxygen awful library broken chicken tackle animal crunch appear fee indoor fitness enough orphan trend tackle faint eyebrow all";

// Used for POA validator testing
export const test1Val = {
  mnemonic: test1Mnemonic,
  address: "manifestvaloper1pss7nxeh3f9md2vuxku8q99femnwdjtcjhuxjm",
  pubkey: "qS4C8i2q1orM463qxf5QA8iAwdZ+Aix7Xm+sJqr1kg4=",
};
export const test3Val = {
  mnemonic: test3Mnemonic,
  address: "manifestvaloper1pn45c2jdwfwrwva0cknfdlnfst28ucpus9qfk4",
  pubkey: "cWa/RsXD2eidssyLnc8UwZY2468DldmWBTCx2/d7L+c=",
};

// Create a Direct Signer wallet from a mnemonic
export const createProtoWallet = (mnemonic: string, prefix: string) =>
  DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix });

// Create an AMINO Signer wallet from a mnemonic
export const createAminoWallet = (mnemonic: string, prefix: string) =>
  Secp256k1HdWallet.fromMnemonic(mnemonic, { prefix });

export async function initChain(chainId: string) {
  const { chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
    useChain(chainId);

  const denom = (await getCoin()).base;
  const prefix = chainInfo.chain.bech32_prefix;
  const rpcEndpoint = await getRpcEndpoint();

  return { denom, prefix, rpcEndpoint, creditFromFaucet };
}

// Wait for a number of blocks to be produced
export const waitForNBlocks = async (
  client: SigningStargateClient,
  numBlocks: number
) => {
  const height = await client.getHeight();
  let currentHeight = height;
  while (currentHeight < height + numBlocks) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    currentHeight = await client.getHeight();
  }
};

export function generateRandomString(length: number): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}
