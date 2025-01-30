//@ts-nocheck
import { CollectionData, CollectionDataAmino, CollectionDataSDKType } from "../spec/api_collection";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** the enum below determines the pairing algorithm's behaviour with the selected providers feature */
export enum SELECTED_PROVIDERS_MODE {
  /** ALLOWED - no providers restrictions */
  ALLOWED = 0,
  /** MIXED - use the selected providers mixed with randomly chosen providers */
  MIXED = 1,
  /** EXCLUSIVE - use only the selected providers */
  EXCLUSIVE = 2,
  /** DISABLED - selected providers feature is disabled */
  DISABLED = 3,
  UNRECOGNIZED = -1,
}
export const SELECTED_PROVIDERS_MODESDKType = SELECTED_PROVIDERS_MODE;
export const SELECTED_PROVIDERS_MODEAmino = SELECTED_PROVIDERS_MODE;
export function sELECTED_PROVIDERS_MODEFromJSON(object: any): SELECTED_PROVIDERS_MODE {
  switch (object) {
    case 0:
    case "ALLOWED":
      return SELECTED_PROVIDERS_MODE.ALLOWED;
    case 1:
    case "MIXED":
      return SELECTED_PROVIDERS_MODE.MIXED;
    case 2:
    case "EXCLUSIVE":
      return SELECTED_PROVIDERS_MODE.EXCLUSIVE;
    case 3:
    case "DISABLED":
      return SELECTED_PROVIDERS_MODE.DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SELECTED_PROVIDERS_MODE.UNRECOGNIZED;
  }
}
export function sELECTED_PROVIDERS_MODEToJSON(object: SELECTED_PROVIDERS_MODE): string {
  switch (object) {
    case SELECTED_PROVIDERS_MODE.ALLOWED:
      return "ALLOWED";
    case SELECTED_PROVIDERS_MODE.MIXED:
      return "MIXED";
    case SELECTED_PROVIDERS_MODE.EXCLUSIVE:
      return "EXCLUSIVE";
    case SELECTED_PROVIDERS_MODE.DISABLED:
      return "DISABLED";
    case SELECTED_PROVIDERS_MODE.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** protobuf expected in YAML format: used "moretags" to simplify parsing */
export interface Policy {
  chainPolicies: ChainPolicy[];
  geolocationProfile: number;
  totalCuLimit: bigint;
  epochCuLimit: bigint;
  maxProvidersToPair: bigint;
  selectedProvidersMode: SELECTED_PROVIDERS_MODE;
  selectedProviders: string[];
}
export interface PolicyProtoMsg {
  typeUrl: "/lavanet.lava.plans.Policy";
  value: Uint8Array;
}
/** protobuf expected in YAML format: used "moretags" to simplify parsing */
export interface PolicyAmino {
  chain_policies: ChainPolicyAmino[];
  geolocation_profile: number;
  total_cu_limit: string;
  epoch_cu_limit: string;
  max_providers_to_pair: string;
  selected_providers_mode: SELECTED_PROVIDERS_MODE;
  selected_providers: string[];
}
export interface PolicyAminoMsg {
  type: "/lavanet.lava.plans.Policy";
  value: PolicyAmino;
}
/** protobuf expected in YAML format: used "moretags" to simplify parsing */
export interface PolicySDKType {
  chain_policies: ChainPolicySDKType[];
  geolocation_profile: number;
  total_cu_limit: bigint;
  epoch_cu_limit: bigint;
  max_providers_to_pair: bigint;
  selected_providers_mode: SELECTED_PROVIDERS_MODE;
  selected_providers: string[];
}
export interface ChainPolicy {
  chainId: string;
  apis: string[];
  requirements: ChainRequirement[];
}
export interface ChainPolicyProtoMsg {
  typeUrl: "/lavanet.lava.plans.ChainPolicy";
  value: Uint8Array;
}
export interface ChainPolicyAmino {
  chain_id: string;
  apis: string[];
  requirements: ChainRequirementAmino[];
}
export interface ChainPolicyAminoMsg {
  type: "/lavanet.lava.plans.ChainPolicy";
  value: ChainPolicyAmino;
}
export interface ChainPolicySDKType {
  chain_id: string;
  apis: string[];
  requirements: ChainRequirementSDKType[];
}
export interface ChainRequirement {
  collection: CollectionData;
  extensions: string[];
  mixed: boolean;
}
export interface ChainRequirementProtoMsg {
  typeUrl: "/lavanet.lava.plans.ChainRequirement";
  value: Uint8Array;
}
export interface ChainRequirementAmino {
  collection: CollectionDataAmino;
  extensions: string[];
  mixed: boolean;
}
export interface ChainRequirementAminoMsg {
  type: "/lavanet.lava.plans.ChainRequirement";
  value: ChainRequirementAmino;
}
export interface ChainRequirementSDKType {
  collection: CollectionDataSDKType;
  extensions: string[];
  mixed: boolean;
}
function createBasePolicy(): Policy {
  return {
    chainPolicies: [],
    geolocationProfile: 0,
    totalCuLimit: BigInt(0),
    epochCuLimit: BigInt(0),
    maxProvidersToPair: BigInt(0),
    selectedProvidersMode: 0,
    selectedProviders: []
  };
}
export const Policy = {
  typeUrl: "/lavanet.lava.plans.Policy",
  is(o: any): o is Policy {
    return o && (o.$typeUrl === Policy.typeUrl || Array.isArray(o.chainPolicies) && (!o.chainPolicies.length || ChainPolicy.is(o.chainPolicies[0])) && typeof o.geolocationProfile === "number" && typeof o.totalCuLimit === "bigint" && typeof o.epochCuLimit === "bigint" && typeof o.maxProvidersToPair === "bigint" && isSet(o.selectedProvidersMode) && Array.isArray(o.selectedProviders) && (!o.selectedProviders.length || typeof o.selectedProviders[0] === "string"));
  },
  isSDK(o: any): o is PolicySDKType {
    return o && (o.$typeUrl === Policy.typeUrl || Array.isArray(o.chain_policies) && (!o.chain_policies.length || ChainPolicy.isSDK(o.chain_policies[0])) && typeof o.geolocation_profile === "number" && typeof o.total_cu_limit === "bigint" && typeof o.epoch_cu_limit === "bigint" && typeof o.max_providers_to_pair === "bigint" && isSet(o.selected_providers_mode) && Array.isArray(o.selected_providers) && (!o.selected_providers.length || typeof o.selected_providers[0] === "string"));
  },
  isAmino(o: any): o is PolicyAmino {
    return o && (o.$typeUrl === Policy.typeUrl || Array.isArray(o.chain_policies) && (!o.chain_policies.length || ChainPolicy.isAmino(o.chain_policies[0])) && typeof o.geolocation_profile === "number" && typeof o.total_cu_limit === "bigint" && typeof o.epoch_cu_limit === "bigint" && typeof o.max_providers_to_pair === "bigint" && isSet(o.selected_providers_mode) && Array.isArray(o.selected_providers) && (!o.selected_providers.length || typeof o.selected_providers[0] === "string"));
  },
  encode(message: Policy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.chainPolicies) {
      ChainPolicy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.geolocationProfile !== 0) {
      writer.uint32(16).int32(message.geolocationProfile);
    }
    if (message.totalCuLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalCuLimit);
    }
    if (message.epochCuLimit !== BigInt(0)) {
      writer.uint32(32).uint64(message.epochCuLimit);
    }
    if (message.maxProvidersToPair !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxProvidersToPair);
    }
    if (message.selectedProvidersMode !== 0) {
      writer.uint32(48).int32(message.selectedProvidersMode);
    }
    for (const v of message.selectedProviders) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Policy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainPolicies.push(ChainPolicy.decode(reader, reader.uint32()));
          break;
        case 2:
          message.geolocationProfile = reader.int32();
          break;
        case 3:
          message.totalCuLimit = reader.uint64();
          break;
        case 4:
          message.epochCuLimit = reader.uint64();
          break;
        case 5:
          message.maxProvidersToPair = reader.uint64();
          break;
        case 6:
          message.selectedProvidersMode = reader.int32() as any;
          break;
        case 7:
          message.selectedProviders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Policy {
    return {
      chainPolicies: Array.isArray(object?.chainPolicies) ? object.chainPolicies.map((e: any) => ChainPolicy.fromJSON(e)) : [],
      geolocationProfile: isSet(object.geolocationProfile) ? Number(object.geolocationProfile) : 0,
      totalCuLimit: isSet(object.totalCuLimit) ? BigInt(object.totalCuLimit.toString()) : BigInt(0),
      epochCuLimit: isSet(object.epochCuLimit) ? BigInt(object.epochCuLimit.toString()) : BigInt(0),
      maxProvidersToPair: isSet(object.maxProvidersToPair) ? BigInt(object.maxProvidersToPair.toString()) : BigInt(0),
      selectedProvidersMode: isSet(object.selectedProvidersMode) ? sELECTED_PROVIDERS_MODEFromJSON(object.selectedProvidersMode) : -1,
      selectedProviders: Array.isArray(object?.selectedProviders) ? object.selectedProviders.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Policy): JsonSafe<Policy> {
    const obj: any = {};
    if (message.chainPolicies) {
      obj.chainPolicies = message.chainPolicies.map(e => e ? ChainPolicy.toJSON(e) : undefined);
    } else {
      obj.chainPolicies = [];
    }
    message.geolocationProfile !== undefined && (obj.geolocationProfile = Math.round(message.geolocationProfile));
    message.totalCuLimit !== undefined && (obj.totalCuLimit = (message.totalCuLimit || BigInt(0)).toString());
    message.epochCuLimit !== undefined && (obj.epochCuLimit = (message.epochCuLimit || BigInt(0)).toString());
    message.maxProvidersToPair !== undefined && (obj.maxProvidersToPair = (message.maxProvidersToPair || BigInt(0)).toString());
    message.selectedProvidersMode !== undefined && (obj.selectedProvidersMode = sELECTED_PROVIDERS_MODEToJSON(message.selectedProvidersMode));
    if (message.selectedProviders) {
      obj.selectedProviders = message.selectedProviders.map(e => e);
    } else {
      obj.selectedProviders = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Policy>, I>>(object: I): Policy {
    const message = createBasePolicy();
    message.chainPolicies = object.chainPolicies?.map(e => ChainPolicy.fromPartial(e)) || [];
    message.geolocationProfile = object.geolocationProfile ?? 0;
    message.totalCuLimit = object.totalCuLimit !== undefined && object.totalCuLimit !== null ? BigInt(object.totalCuLimit.toString()) : BigInt(0);
    message.epochCuLimit = object.epochCuLimit !== undefined && object.epochCuLimit !== null ? BigInt(object.epochCuLimit.toString()) : BigInt(0);
    message.maxProvidersToPair = object.maxProvidersToPair !== undefined && object.maxProvidersToPair !== null ? BigInt(object.maxProvidersToPair.toString()) : BigInt(0);
    message.selectedProvidersMode = object.selectedProvidersMode ?? 0;
    message.selectedProviders = object.selectedProviders?.map(e => e) || [];
    return message;
  },
  fromAmino(object: PolicyAmino): Policy {
    const message = createBasePolicy();
    message.chainPolicies = object.chain_policies?.map(e => ChainPolicy.fromAmino(e)) || [];
    if (object.geolocation_profile !== undefined && object.geolocation_profile !== null) {
      message.geolocationProfile = object.geolocation_profile;
    }
    if (object.total_cu_limit !== undefined && object.total_cu_limit !== null) {
      message.totalCuLimit = BigInt(object.total_cu_limit);
    }
    if (object.epoch_cu_limit !== undefined && object.epoch_cu_limit !== null) {
      message.epochCuLimit = BigInt(object.epoch_cu_limit);
    }
    if (object.max_providers_to_pair !== undefined && object.max_providers_to_pair !== null) {
      message.maxProvidersToPair = BigInt(object.max_providers_to_pair);
    }
    if (object.selected_providers_mode !== undefined && object.selected_providers_mode !== null) {
      message.selectedProvidersMode = object.selected_providers_mode;
    }
    message.selectedProviders = object.selected_providers?.map(e => e) || [];
    return message;
  },
  toAmino(message: Policy): PolicyAmino {
    const obj: any = {};
    if (message.chainPolicies) {
      obj.chain_policies = message.chainPolicies.map(e => e ? ChainPolicy.toAmino(e) : undefined);
    } else {
      obj.chain_policies = message.chainPolicies;
    }
    obj.geolocation_profile = message.geolocationProfile ?? 0;
    obj.total_cu_limit = message.totalCuLimit ? (message.totalCuLimit?.toString)() : "0";
    obj.epoch_cu_limit = message.epochCuLimit ? (message.epochCuLimit?.toString)() : "0";
    obj.max_providers_to_pair = message.maxProvidersToPair ? (message.maxProvidersToPair?.toString)() : "0";
    obj.selected_providers_mode = message.selectedProvidersMode ?? 0;
    if (message.selectedProviders) {
      obj.selected_providers = message.selectedProviders.map(e => e);
    } else {
      obj.selected_providers = message.selectedProviders;
    }
    return obj;
  },
  fromAminoMsg(object: PolicyAminoMsg): Policy {
    return Policy.fromAmino(object.value);
  },
  fromProtoMsg(message: PolicyProtoMsg): Policy {
    return Policy.decode(message.value);
  },
  toProto(message: Policy): Uint8Array {
    return Policy.encode(message).finish();
  },
  toProtoMsg(message: Policy): PolicyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.Policy",
      value: Policy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Policy.typeUrl, Policy);
function createBaseChainPolicy(): ChainPolicy {
  return {
    chainId: "",
    apis: [],
    requirements: []
  };
}
export const ChainPolicy = {
  typeUrl: "/lavanet.lava.plans.ChainPolicy",
  is(o: any): o is ChainPolicy {
    return o && (o.$typeUrl === ChainPolicy.typeUrl || typeof o.chainId === "string" && Array.isArray(o.apis) && (!o.apis.length || typeof o.apis[0] === "string") && Array.isArray(o.requirements) && (!o.requirements.length || ChainRequirement.is(o.requirements[0])));
  },
  isSDK(o: any): o is ChainPolicySDKType {
    return o && (o.$typeUrl === ChainPolicy.typeUrl || typeof o.chain_id === "string" && Array.isArray(o.apis) && (!o.apis.length || typeof o.apis[0] === "string") && Array.isArray(o.requirements) && (!o.requirements.length || ChainRequirement.isSDK(o.requirements[0])));
  },
  isAmino(o: any): o is ChainPolicyAmino {
    return o && (o.$typeUrl === ChainPolicy.typeUrl || typeof o.chain_id === "string" && Array.isArray(o.apis) && (!o.apis.length || typeof o.apis[0] === "string") && Array.isArray(o.requirements) && (!o.requirements.length || ChainRequirement.isAmino(o.requirements[0])));
  },
  encode(message: ChainPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    for (const v of message.apis) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.requirements) {
      ChainRequirement.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChainPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.apis.push(reader.string());
          break;
        case 3:
          message.requirements.push(ChainRequirement.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChainPolicy {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => String(e)) : [],
      requirements: Array.isArray(object?.requirements) ? object.requirements.map((e: any) => ChainRequirement.fromJSON(e)) : []
    };
  },
  toJSON(message: ChainPolicy): JsonSafe<ChainPolicy> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    if (message.apis) {
      obj.apis = message.apis.map(e => e);
    } else {
      obj.apis = [];
    }
    if (message.requirements) {
      obj.requirements = message.requirements.map(e => e ? ChainRequirement.toJSON(e) : undefined);
    } else {
      obj.requirements = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ChainPolicy>, I>>(object: I): ChainPolicy {
    const message = createBaseChainPolicy();
    message.chainId = object.chainId ?? "";
    message.apis = object.apis?.map(e => e) || [];
    message.requirements = object.requirements?.map(e => ChainRequirement.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ChainPolicyAmino): ChainPolicy {
    const message = createBaseChainPolicy();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    message.apis = object.apis?.map(e => e) || [];
    message.requirements = object.requirements?.map(e => ChainRequirement.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ChainPolicy): ChainPolicyAmino {
    const obj: any = {};
    obj.chain_id = message.chainId ?? "";
    if (message.apis) {
      obj.apis = message.apis.map(e => e);
    } else {
      obj.apis = message.apis;
    }
    if (message.requirements) {
      obj.requirements = message.requirements.map(e => e ? ChainRequirement.toAmino(e) : undefined);
    } else {
      obj.requirements = message.requirements;
    }
    return obj;
  },
  fromAminoMsg(object: ChainPolicyAminoMsg): ChainPolicy {
    return ChainPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainPolicyProtoMsg): ChainPolicy {
    return ChainPolicy.decode(message.value);
  },
  toProto(message: ChainPolicy): Uint8Array {
    return ChainPolicy.encode(message).finish();
  },
  toProtoMsg(message: ChainPolicy): ChainPolicyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.ChainPolicy",
      value: ChainPolicy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ChainPolicy.typeUrl, ChainPolicy);
function createBaseChainRequirement(): ChainRequirement {
  return {
    collection: CollectionData.fromPartial({}),
    extensions: [],
    mixed: false
  };
}
export const ChainRequirement = {
  typeUrl: "/lavanet.lava.plans.ChainRequirement",
  is(o: any): o is ChainRequirement {
    return o && (o.$typeUrl === ChainRequirement.typeUrl || CollectionData.is(o.collection) && Array.isArray(o.extensions) && (!o.extensions.length || typeof o.extensions[0] === "string") && typeof o.mixed === "boolean");
  },
  isSDK(o: any): o is ChainRequirementSDKType {
    return o && (o.$typeUrl === ChainRequirement.typeUrl || CollectionData.isSDK(o.collection) && Array.isArray(o.extensions) && (!o.extensions.length || typeof o.extensions[0] === "string") && typeof o.mixed === "boolean");
  },
  isAmino(o: any): o is ChainRequirementAmino {
    return o && (o.$typeUrl === ChainRequirement.typeUrl || CollectionData.isAmino(o.collection) && Array.isArray(o.extensions) && (!o.extensions.length || typeof o.extensions[0] === "string") && typeof o.mixed === "boolean");
  },
  encode(message: ChainRequirement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collection !== undefined) {
      CollectionData.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.extensions) {
      writer.uint32(18).string(v!);
    }
    if (message.mixed === true) {
      writer.uint32(24).bool(message.mixed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChainRequirement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainRequirement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = CollectionData.decode(reader, reader.uint32());
          break;
        case 2:
          message.extensions.push(reader.string());
          break;
        case 3:
          message.mixed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChainRequirement {
    return {
      collection: isSet(object.collection) ? CollectionData.fromJSON(object.collection) : undefined,
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => String(e)) : [],
      mixed: isSet(object.mixed) ? Boolean(object.mixed) : false
    };
  },
  toJSON(message: ChainRequirement): JsonSafe<ChainRequirement> {
    const obj: any = {};
    message.collection !== undefined && (obj.collection = message.collection ? CollectionData.toJSON(message.collection) : undefined);
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e);
    } else {
      obj.extensions = [];
    }
    message.mixed !== undefined && (obj.mixed = message.mixed);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ChainRequirement>, I>>(object: I): ChainRequirement {
    const message = createBaseChainRequirement();
    message.collection = object.collection !== undefined && object.collection !== null ? CollectionData.fromPartial(object.collection) : undefined;
    message.extensions = object.extensions?.map(e => e) || [];
    message.mixed = object.mixed ?? false;
    return message;
  },
  fromAmino(object: ChainRequirementAmino): ChainRequirement {
    const message = createBaseChainRequirement();
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = CollectionData.fromAmino(object.collection);
    }
    message.extensions = object.extensions?.map(e => e) || [];
    if (object.mixed !== undefined && object.mixed !== null) {
      message.mixed = object.mixed;
    }
    return message;
  },
  toAmino(message: ChainRequirement): ChainRequirementAmino {
    const obj: any = {};
    obj.collection = message.collection ? CollectionData.toAmino(message.collection) : CollectionData.toAmino(CollectionData.fromPartial({}));
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e);
    } else {
      obj.extensions = message.extensions;
    }
    obj.mixed = message.mixed ?? false;
    return obj;
  },
  fromAminoMsg(object: ChainRequirementAminoMsg): ChainRequirement {
    return ChainRequirement.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainRequirementProtoMsg): ChainRequirement {
    return ChainRequirement.decode(message.value);
  },
  toProto(message: ChainRequirement): Uint8Array {
    return ChainRequirement.encode(message).finish();
  },
  toProtoMsg(message: ChainRequirement): ChainRequirementProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.ChainRequirement",
      value: ChainRequirement.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ChainRequirement.typeUrl, ChainRequirement);