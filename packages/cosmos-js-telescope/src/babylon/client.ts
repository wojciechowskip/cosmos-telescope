// @ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as babylonEpochingV1TxRegistry from "./epoching/v1/tx.registry";
import * as babylonIncentiveTxRegistry from "./incentive/tx.registry";
import * as babylonEpochingV1TxAmino from "./epoching/v1/tx.amino";
import * as babylonIncentiveTxAmino from "./incentive/tx.amino";
export const babylonAminoConverters = {
  ...babylonEpochingV1TxAmino.AminoConverter,
  ...babylonIncentiveTxAmino.AminoConverter
};
export const babylonProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...babylonEpochingV1TxRegistry.registry, ...babylonIncentiveTxRegistry.registry];
export const getSigningBabylonClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...babylonProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...babylonAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningBabylonClient = async ({
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
  } = getSigningBabylonClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};