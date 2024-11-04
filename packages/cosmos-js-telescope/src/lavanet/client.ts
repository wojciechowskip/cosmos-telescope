//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as lavanetLavaDualstakingTxRegistry from "./lava/dualstaking/tx.registry";
import * as lavanetLavaDualstakingTxAmino from "./lava/dualstaking/tx.amino";
export const lavanetAminoConverters = {
  ...lavanetLavaDualstakingTxAmino.AminoConverter
};
export const lavanetProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...lavanetLavaDualstakingTxRegistry.registry];
export const getSigningLavanetClientOptions = ({
  defaultTypes = defaultRegistryTypes
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...lavanetProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...lavanetAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningLavanetClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningLavanetClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};