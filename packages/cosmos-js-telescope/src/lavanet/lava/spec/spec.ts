//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ApiCollection, ApiCollectionAmino, ApiCollectionSDKType } from "./api_collection";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export enum Spec_ProvidersTypes {
  dynamic = 0,
  static = 1,
  UNRECOGNIZED = -1,
}
export const Spec_ProvidersTypesSDKType = Spec_ProvidersTypes;
export const Spec_ProvidersTypesAmino = Spec_ProvidersTypes;
export function spec_ProvidersTypesFromJSON(object: any): Spec_ProvidersTypes {
  switch (object) {
    case 0:
    case "dynamic":
      return Spec_ProvidersTypes.dynamic;
    case 1:
    case "static":
      return Spec_ProvidersTypes.static;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Spec_ProvidersTypes.UNRECOGNIZED;
  }
}
export function spec_ProvidersTypesToJSON(object: Spec_ProvidersTypes): string {
  switch (object) {
    case Spec_ProvidersTypes.dynamic:
      return "dynamic";
    case Spec_ProvidersTypes.static:
      return "static";
    case Spec_ProvidersTypes.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Spec {
  index: string;
  name: string;
  enabled: boolean;
  reliabilityThreshold: number;
  dataReliabilityEnabled: boolean;
  blockDistanceForFinalizedData: number;
  blocksInFinalizationProof: number;
  averageBlockTime: bigint;
  allowedBlockLagForQosSync: bigint;
  blockLastUpdated: bigint;
  minStakeProvider: Coin;
  providersTypes: Spec_ProvidersTypes;
  imports: string[];
  apiCollections: ApiCollection[];
  contributor: string[];
  contributorPercentage: string;
  shares: bigint;
  identity: string;
}
export interface SpecProtoMsg {
  typeUrl: "/lavanet.lava.spec.Spec";
  value: Uint8Array;
}
export interface SpecAmino {
  index?: string;
  name?: string;
  enabled?: boolean;
  reliability_threshold?: number;
  data_reliability_enabled?: boolean;
  block_distance_for_finalized_data?: number;
  blocks_in_finalization_proof?: number;
  average_block_time?: string;
  allowed_block_lag_for_qos_sync?: string;
  block_last_updated?: string;
  min_stake_provider?: CoinAmino;
  providers_types?: Spec_ProvidersTypes;
  imports?: string[];
  api_collections?: ApiCollectionAmino[];
  contributor?: string[];
  contributor_percentage?: string;
  shares?: string;
  identity?: string;
}
export interface SpecAminoMsg {
  type: "/lavanet.lava.spec.Spec";
  value: SpecAmino;
}
export interface SpecSDKType {
  index: string;
  name: string;
  enabled: boolean;
  reliability_threshold: number;
  data_reliability_enabled: boolean;
  block_distance_for_finalized_data: number;
  blocks_in_finalization_proof: number;
  average_block_time: bigint;
  allowed_block_lag_for_qos_sync: bigint;
  block_last_updated: bigint;
  min_stake_provider: CoinSDKType;
  providers_types: Spec_ProvidersTypes;
  imports: string[];
  api_collections: ApiCollectionSDKType[];
  contributor: string[];
  contributor_percentage: string;
  shares: bigint;
  identity: string;
}
function createBaseSpec(): Spec {
  return {
    index: "",
    name: "",
    enabled: false,
    reliabilityThreshold: 0,
    dataReliabilityEnabled: false,
    blockDistanceForFinalizedData: 0,
    blocksInFinalizationProof: 0,
    averageBlockTime: BigInt(0),
    allowedBlockLagForQosSync: BigInt(0),
    blockLastUpdated: BigInt(0),
    minStakeProvider: Coin.fromPartial({}),
    providersTypes: 0,
    imports: [],
    apiCollections: [],
    contributor: [],
    contributorPercentage: "",
    shares: BigInt(0),
    identity: ""
  };
}
export const Spec = {
  typeUrl: "/lavanet.lava.spec.Spec",
  is(o: any): o is Spec {
    return o && (o.$typeUrl === Spec.typeUrl || typeof o.index === "string" && typeof o.name === "string" && typeof o.enabled === "boolean" && typeof o.reliabilityThreshold === "number" && typeof o.dataReliabilityEnabled === "boolean" && typeof o.blockDistanceForFinalizedData === "number" && typeof o.blocksInFinalizationProof === "number" && typeof o.averageBlockTime === "bigint" && typeof o.allowedBlockLagForQosSync === "bigint" && typeof o.blockLastUpdated === "bigint" && Coin.is(o.minStakeProvider) && isSet(o.providersTypes) && Array.isArray(o.imports) && (!o.imports.length || typeof o.imports[0] === "string") && Array.isArray(o.apiCollections) && (!o.apiCollections.length || ApiCollection.is(o.apiCollections[0])) && Array.isArray(o.contributor) && (!o.contributor.length || typeof o.contributor[0] === "string") && typeof o.contributorPercentage === "string" && typeof o.shares === "bigint" && typeof o.identity === "string");
  },
  isSDK(o: any): o is SpecSDKType {
    return o && (o.$typeUrl === Spec.typeUrl || typeof o.index === "string" && typeof o.name === "string" && typeof o.enabled === "boolean" && typeof o.reliability_threshold === "number" && typeof o.data_reliability_enabled === "boolean" && typeof o.block_distance_for_finalized_data === "number" && typeof o.blocks_in_finalization_proof === "number" && typeof o.average_block_time === "bigint" && typeof o.allowed_block_lag_for_qos_sync === "bigint" && typeof o.block_last_updated === "bigint" && Coin.isSDK(o.min_stake_provider) && isSet(o.providers_types) && Array.isArray(o.imports) && (!o.imports.length || typeof o.imports[0] === "string") && Array.isArray(o.api_collections) && (!o.api_collections.length || ApiCollection.isSDK(o.api_collections[0])) && Array.isArray(o.contributor) && (!o.contributor.length || typeof o.contributor[0] === "string") && typeof o.contributor_percentage === "string" && typeof o.shares === "bigint" && typeof o.identity === "string");
  },
  isAmino(o: any): o is SpecAmino {
    return o && (o.$typeUrl === Spec.typeUrl || typeof o.index === "string" && typeof o.name === "string" && typeof o.enabled === "boolean" && typeof o.reliability_threshold === "number" && typeof o.data_reliability_enabled === "boolean" && typeof o.block_distance_for_finalized_data === "number" && typeof o.blocks_in_finalization_proof === "number" && typeof o.average_block_time === "bigint" && typeof o.allowed_block_lag_for_qos_sync === "bigint" && typeof o.block_last_updated === "bigint" && Coin.isAmino(o.min_stake_provider) && isSet(o.providers_types) && Array.isArray(o.imports) && (!o.imports.length || typeof o.imports[0] === "string") && Array.isArray(o.api_collections) && (!o.api_collections.length || ApiCollection.isAmino(o.api_collections[0])) && Array.isArray(o.contributor) && (!o.contributor.length || typeof o.contributor[0] === "string") && typeof o.contributor_percentage === "string" && typeof o.shares === "bigint" && typeof o.identity === "string");
  },
  encode(message: Spec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    if (message.reliabilityThreshold !== 0) {
      writer.uint32(40).uint32(message.reliabilityThreshold);
    }
    if (message.dataReliabilityEnabled === true) {
      writer.uint32(48).bool(message.dataReliabilityEnabled);
    }
    if (message.blockDistanceForFinalizedData !== 0) {
      writer.uint32(56).uint32(message.blockDistanceForFinalizedData);
    }
    if (message.blocksInFinalizationProof !== 0) {
      writer.uint32(64).uint32(message.blocksInFinalizationProof);
    }
    if (message.averageBlockTime !== BigInt(0)) {
      writer.uint32(72).int64(message.averageBlockTime);
    }
    if (message.allowedBlockLagForQosSync !== BigInt(0)) {
      writer.uint32(80).int64(message.allowedBlockLagForQosSync);
    }
    if (message.blockLastUpdated !== BigInt(0)) {
      writer.uint32(88).uint64(message.blockLastUpdated);
    }
    if (message.minStakeProvider !== undefined) {
      Coin.encode(message.minStakeProvider, writer.uint32(98).fork()).ldelim();
    }
    if (message.providersTypes !== 0) {
      writer.uint32(112).int32(message.providersTypes);
    }
    for (const v of message.imports) {
      writer.uint32(122).string(v!);
    }
    for (const v of message.apiCollections) {
      ApiCollection.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.contributor) {
      writer.uint32(138).string(v!);
    }
    if (message.contributorPercentage !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.contributorPercentage, 18).atomics);
    }
    if (message.shares !== BigInt(0)) {
      writer.uint32(152).uint64(message.shares);
    }
    if (message.identity !== "") {
      writer.uint32(162).string(message.identity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Spec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.reliabilityThreshold = reader.uint32();
          break;
        case 6:
          message.dataReliabilityEnabled = reader.bool();
          break;
        case 7:
          message.blockDistanceForFinalizedData = reader.uint32();
          break;
        case 8:
          message.blocksInFinalizationProof = reader.uint32();
          break;
        case 9:
          message.averageBlockTime = reader.int64();
          break;
        case 10:
          message.allowedBlockLagForQosSync = reader.int64();
          break;
        case 11:
          message.blockLastUpdated = reader.uint64();
          break;
        case 12:
          message.minStakeProvider = Coin.decode(reader, reader.uint32());
          break;
        case 14:
          message.providersTypes = reader.int32() as any;
          break;
        case 15:
          message.imports.push(reader.string());
          break;
        case 16:
          message.apiCollections.push(ApiCollection.decode(reader, reader.uint32()));
          break;
        case 17:
          message.contributor.push(reader.string());
          break;
        case 18:
          message.contributorPercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 19:
          message.shares = reader.uint64();
          break;
        case 20:
          message.identity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Spec {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      name: isSet(object.name) ? String(object.name) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      reliabilityThreshold: isSet(object.reliabilityThreshold) ? Number(object.reliabilityThreshold) : 0,
      dataReliabilityEnabled: isSet(object.dataReliabilityEnabled) ? Boolean(object.dataReliabilityEnabled) : false,
      blockDistanceForFinalizedData: isSet(object.blockDistanceForFinalizedData) ? Number(object.blockDistanceForFinalizedData) : 0,
      blocksInFinalizationProof: isSet(object.blocksInFinalizationProof) ? Number(object.blocksInFinalizationProof) : 0,
      averageBlockTime: isSet(object.averageBlockTime) ? BigInt(object.averageBlockTime.toString()) : BigInt(0),
      allowedBlockLagForQosSync: isSet(object.allowedBlockLagForQosSync) ? BigInt(object.allowedBlockLagForQosSync.toString()) : BigInt(0),
      blockLastUpdated: isSet(object.blockLastUpdated) ? BigInt(object.blockLastUpdated.toString()) : BigInt(0),
      minStakeProvider: isSet(object.minStakeProvider) ? Coin.fromJSON(object.minStakeProvider) : undefined,
      providersTypes: isSet(object.providersTypes) ? spec_ProvidersTypesFromJSON(object.providersTypes) : -1,
      imports: Array.isArray(object?.imports) ? object.imports.map((e: any) => String(e)) : [],
      apiCollections: Array.isArray(object?.apiCollections) ? object.apiCollections.map((e: any) => ApiCollection.fromJSON(e)) : [],
      contributor: Array.isArray(object?.contributor) ? object.contributor.map((e: any) => String(e)) : [],
      contributorPercentage: isSet(object.contributorPercentage) ? String(object.contributorPercentage) : "",
      shares: isSet(object.shares) ? BigInt(object.shares.toString()) : BigInt(0),
      identity: isSet(object.identity) ? String(object.identity) : ""
    };
  },
  toJSON(message: Spec): JsonSafe<Spec> {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.name !== undefined && (obj.name = message.name);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.reliabilityThreshold !== undefined && (obj.reliabilityThreshold = Math.round(message.reliabilityThreshold));
    message.dataReliabilityEnabled !== undefined && (obj.dataReliabilityEnabled = message.dataReliabilityEnabled);
    message.blockDistanceForFinalizedData !== undefined && (obj.blockDistanceForFinalizedData = Math.round(message.blockDistanceForFinalizedData));
    message.blocksInFinalizationProof !== undefined && (obj.blocksInFinalizationProof = Math.round(message.blocksInFinalizationProof));
    message.averageBlockTime !== undefined && (obj.averageBlockTime = (message.averageBlockTime || BigInt(0)).toString());
    message.allowedBlockLagForQosSync !== undefined && (obj.allowedBlockLagForQosSync = (message.allowedBlockLagForQosSync || BigInt(0)).toString());
    message.blockLastUpdated !== undefined && (obj.blockLastUpdated = (message.blockLastUpdated || BigInt(0)).toString());
    message.minStakeProvider !== undefined && (obj.minStakeProvider = message.minStakeProvider ? Coin.toJSON(message.minStakeProvider) : undefined);
    message.providersTypes !== undefined && (obj.providersTypes = spec_ProvidersTypesToJSON(message.providersTypes));
    if (message.imports) {
      obj.imports = message.imports.map(e => e);
    } else {
      obj.imports = [];
    }
    if (message.apiCollections) {
      obj.apiCollections = message.apiCollections.map(e => e ? ApiCollection.toJSON(e) : undefined);
    } else {
      obj.apiCollections = [];
    }
    if (message.contributor) {
      obj.contributor = message.contributor.map(e => e);
    } else {
      obj.contributor = [];
    }
    message.contributorPercentage !== undefined && (obj.contributorPercentage = message.contributorPercentage);
    message.shares !== undefined && (obj.shares = (message.shares || BigInt(0)).toString());
    message.identity !== undefined && (obj.identity = message.identity);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Spec>, I>>(object: I): Spec {
    const message = createBaseSpec();
    message.index = object.index ?? "";
    message.name = object.name ?? "";
    message.enabled = object.enabled ?? false;
    message.reliabilityThreshold = object.reliabilityThreshold ?? 0;
    message.dataReliabilityEnabled = object.dataReliabilityEnabled ?? false;
    message.blockDistanceForFinalizedData = object.blockDistanceForFinalizedData ?? 0;
    message.blocksInFinalizationProof = object.blocksInFinalizationProof ?? 0;
    message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? BigInt(object.averageBlockTime.toString()) : BigInt(0);
    message.allowedBlockLagForQosSync = object.allowedBlockLagForQosSync !== undefined && object.allowedBlockLagForQosSync !== null ? BigInt(object.allowedBlockLagForQosSync.toString()) : BigInt(0);
    message.blockLastUpdated = object.blockLastUpdated !== undefined && object.blockLastUpdated !== null ? BigInt(object.blockLastUpdated.toString()) : BigInt(0);
    message.minStakeProvider = object.minStakeProvider !== undefined && object.minStakeProvider !== null ? Coin.fromPartial(object.minStakeProvider) : undefined;
    message.providersTypes = object.providersTypes ?? 0;
    message.imports = object.imports?.map(e => e) || [];
    message.apiCollections = object.apiCollections?.map(e => ApiCollection.fromPartial(e)) || [];
    message.contributor = object.contributor?.map(e => e) || [];
    message.contributorPercentage = object.contributorPercentage ?? "";
    message.shares = object.shares !== undefined && object.shares !== null ? BigInt(object.shares.toString()) : BigInt(0);
    message.identity = object.identity ?? "";
    return message;
  },
  fromAmino(object: SpecAmino): Spec {
    const message = createBaseSpec();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.reliability_threshold !== undefined && object.reliability_threshold !== null) {
      message.reliabilityThreshold = object.reliability_threshold;
    }
    if (object.data_reliability_enabled !== undefined && object.data_reliability_enabled !== null) {
      message.dataReliabilityEnabled = object.data_reliability_enabled;
    }
    if (object.block_distance_for_finalized_data !== undefined && object.block_distance_for_finalized_data !== null) {
      message.blockDistanceForFinalizedData = object.block_distance_for_finalized_data;
    }
    if (object.blocks_in_finalization_proof !== undefined && object.blocks_in_finalization_proof !== null) {
      message.blocksInFinalizationProof = object.blocks_in_finalization_proof;
    }
    if (object.average_block_time !== undefined && object.average_block_time !== null) {
      message.averageBlockTime = BigInt(object.average_block_time);
    }
    if (object.allowed_block_lag_for_qos_sync !== undefined && object.allowed_block_lag_for_qos_sync !== null) {
      message.allowedBlockLagForQosSync = BigInt(object.allowed_block_lag_for_qos_sync);
    }
    if (object.block_last_updated !== undefined && object.block_last_updated !== null) {
      message.blockLastUpdated = BigInt(object.block_last_updated);
    }
    if (object.min_stake_provider !== undefined && object.min_stake_provider !== null) {
      message.minStakeProvider = Coin.fromAmino(object.min_stake_provider);
    }
    if (object.providers_types !== undefined && object.providers_types !== null) {
      message.providersTypes = object.providers_types;
    }
    message.imports = object.imports?.map(e => e) || [];
    message.apiCollections = object.api_collections?.map(e => ApiCollection.fromAmino(e)) || [];
    message.contributor = object.contributor?.map(e => e) || [];
    if (object.contributor_percentage !== undefined && object.contributor_percentage !== null) {
      message.contributorPercentage = object.contributor_percentage;
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = BigInt(object.shares);
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    }
    return message;
  },
  toAmino(message: Spec): SpecAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    obj.name = message.name === "" ? undefined : message.name;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    obj.reliability_threshold = message.reliabilityThreshold === 0 ? undefined : message.reliabilityThreshold;
    obj.data_reliability_enabled = message.dataReliabilityEnabled === false ? undefined : message.dataReliabilityEnabled;
    obj.block_distance_for_finalized_data = message.blockDistanceForFinalizedData === 0 ? undefined : message.blockDistanceForFinalizedData;
    obj.blocks_in_finalization_proof = message.blocksInFinalizationProof === 0 ? undefined : message.blocksInFinalizationProof;
    obj.average_block_time = message.averageBlockTime !== BigInt(0) ? (message.averageBlockTime?.toString)() : undefined;
    obj.allowed_block_lag_for_qos_sync = message.allowedBlockLagForQosSync !== BigInt(0) ? (message.allowedBlockLagForQosSync?.toString)() : undefined;
    obj.block_last_updated = message.blockLastUpdated !== BigInt(0) ? (message.blockLastUpdated?.toString)() : undefined;
    obj.min_stake_provider = message.minStakeProvider ? Coin.toAmino(message.minStakeProvider) : undefined;
    obj.providers_types = message.providersTypes === 0 ? undefined : message.providersTypes;
    if (message.imports) {
      obj.imports = message.imports.map(e => e);
    } else {
      obj.imports = message.imports;
    }
    if (message.apiCollections) {
      obj.api_collections = message.apiCollections.map(e => e ? ApiCollection.toAmino(e) : undefined);
    } else {
      obj.api_collections = message.apiCollections;
    }
    if (message.contributor) {
      obj.contributor = message.contributor.map(e => e);
    } else {
      obj.contributor = message.contributor;
    }
    obj.contributor_percentage = message.contributorPercentage === "" ? undefined : message.contributorPercentage;
    obj.shares = message.shares !== BigInt(0) ? (message.shares?.toString)() : undefined;
    obj.identity = message.identity === "" ? undefined : message.identity;
    return obj;
  },
  fromAminoMsg(object: SpecAminoMsg): Spec {
    return Spec.fromAmino(object.value);
  },
  fromProtoMsg(message: SpecProtoMsg): Spec {
    return Spec.decode(message.value);
  },
  toProto(message: Spec): Uint8Array {
    return Spec.encode(message).finish();
  },
  toProtoMsg(message: Spec): SpecProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.Spec",
      value: Spec.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Spec.typeUrl, Spec);