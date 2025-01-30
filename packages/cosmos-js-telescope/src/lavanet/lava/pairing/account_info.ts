//@ts-nocheck
import { StakeEntry, StakeEntryAmino, StakeEntrySDKType } from "../epochstorage/stake_entry";
import { Subscription, SubscriptionAmino, SubscriptionSDKType } from "../subscription/subscription";
import { Project, ProjectAmino, ProjectSDKType } from "../projects/project";
import { DelegationResponse, DelegationResponseAmino, DelegationResponseSDKType } from "../../../cosmos/staking/v1beta1/staking";
import { Delegation, DelegationAmino, DelegationSDKType } from "../dualstaking/delegate";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryAccountInfoResponse {
  provider: StakeEntry[];
  frozen: StakeEntry[];
  unstaked: StakeEntry[];
  subscription?: Subscription;
  project?: Project;
  delegationsValidators: DelegationResponse[];
  delegationsProviders: Delegation[];
  totalDelegations: bigint;
}
export interface QueryAccountInfoResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryAccountInfoResponse";
  value: Uint8Array;
}
export interface QueryAccountInfoResponseAmino {
  provider?: StakeEntryAmino[];
  frozen?: StakeEntryAmino[];
  unstaked?: StakeEntryAmino[];
  subscription?: SubscriptionAmino;
  project?: ProjectAmino;
  delegations_validators?: DelegationResponseAmino[];
  delegations_providers?: DelegationAmino[];
  total_delegations?: string;
}
export interface QueryAccountInfoResponseAminoMsg {
  type: "/lavanet.lava.pairing.QueryAccountInfoResponse";
  value: QueryAccountInfoResponseAmino;
}
export interface QueryAccountInfoResponseSDKType {
  provider: StakeEntrySDKType[];
  frozen: StakeEntrySDKType[];
  unstaked: StakeEntrySDKType[];
  subscription?: SubscriptionSDKType;
  project?: ProjectSDKType;
  delegations_validators: DelegationResponseSDKType[];
  delegations_providers: DelegationSDKType[];
  total_delegations: bigint;
}
function createBaseQueryAccountInfoResponse(): QueryAccountInfoResponse {
  return {
    provider: [],
    frozen: [],
    unstaked: [],
    subscription: undefined,
    project: undefined,
    delegationsValidators: [],
    delegationsProviders: [],
    totalDelegations: BigInt(0)
  };
}
export const QueryAccountInfoResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryAccountInfoResponse",
  is(o: any): o is QueryAccountInfoResponse {
    return o && (o.$typeUrl === QueryAccountInfoResponse.typeUrl || Array.isArray(o.provider) && (!o.provider.length || StakeEntry.is(o.provider[0])) && Array.isArray(o.frozen) && (!o.frozen.length || StakeEntry.is(o.frozen[0])) && Array.isArray(o.unstaked) && (!o.unstaked.length || StakeEntry.is(o.unstaked[0])) && Array.isArray(o.delegationsValidators) && (!o.delegationsValidators.length || DelegationResponse.is(o.delegationsValidators[0])) && Array.isArray(o.delegationsProviders) && (!o.delegationsProviders.length || Delegation.is(o.delegationsProviders[0])) && typeof o.totalDelegations === "bigint");
  },
  isSDK(o: any): o is QueryAccountInfoResponseSDKType {
    return o && (o.$typeUrl === QueryAccountInfoResponse.typeUrl || Array.isArray(o.provider) && (!o.provider.length || StakeEntry.isSDK(o.provider[0])) && Array.isArray(o.frozen) && (!o.frozen.length || StakeEntry.isSDK(o.frozen[0])) && Array.isArray(o.unstaked) && (!o.unstaked.length || StakeEntry.isSDK(o.unstaked[0])) && Array.isArray(o.delegations_validators) && (!o.delegations_validators.length || DelegationResponse.isSDK(o.delegations_validators[0])) && Array.isArray(o.delegations_providers) && (!o.delegations_providers.length || Delegation.isSDK(o.delegations_providers[0])) && typeof o.total_delegations === "bigint");
  },
  isAmino(o: any): o is QueryAccountInfoResponseAmino {
    return o && (o.$typeUrl === QueryAccountInfoResponse.typeUrl || Array.isArray(o.provider) && (!o.provider.length || StakeEntry.isAmino(o.provider[0])) && Array.isArray(o.frozen) && (!o.frozen.length || StakeEntry.isAmino(o.frozen[0])) && Array.isArray(o.unstaked) && (!o.unstaked.length || StakeEntry.isAmino(o.unstaked[0])) && Array.isArray(o.delegations_validators) && (!o.delegations_validators.length || DelegationResponse.isAmino(o.delegations_validators[0])) && Array.isArray(o.delegations_providers) && (!o.delegations_providers.length || Delegation.isAmino(o.delegations_providers[0])) && typeof o.total_delegations === "bigint");
  },
  encode(message: QueryAccountInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.provider) {
      StakeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.frozen) {
      StakeEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.unstaked) {
      StakeEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.subscription !== undefined) {
      Subscription.encode(message.subscription, writer.uint32(42).fork()).ldelim();
    }
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.delegationsValidators) {
      DelegationResponse.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.delegationsProviders) {
      Delegation.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.totalDelegations !== BigInt(0)) {
      writer.uint32(72).uint64(message.totalDelegations);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.frozen.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 4:
          message.unstaked.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 5:
          message.subscription = Subscription.decode(reader, reader.uint32());
          break;
        case 6:
          message.project = Project.decode(reader, reader.uint32());
          break;
        case 7:
          message.delegationsValidators.push(DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 8:
          message.delegationsProviders.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 9:
          message.totalDelegations = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountInfoResponse {
    return {
      provider: Array.isArray(object?.provider) ? object.provider.map((e: any) => StakeEntry.fromJSON(e)) : [],
      frozen: Array.isArray(object?.frozen) ? object.frozen.map((e: any) => StakeEntry.fromJSON(e)) : [],
      unstaked: Array.isArray(object?.unstaked) ? object.unstaked.map((e: any) => StakeEntry.fromJSON(e)) : [],
      subscription: isSet(object.subscription) ? Subscription.fromJSON(object.subscription) : undefined,
      project: isSet(object.project) ? Project.fromJSON(object.project) : undefined,
      delegationsValidators: Array.isArray(object?.delegationsValidators) ? object.delegationsValidators.map((e: any) => DelegationResponse.fromJSON(e)) : [],
      delegationsProviders: Array.isArray(object?.delegationsProviders) ? object.delegationsProviders.map((e: any) => Delegation.fromJSON(e)) : [],
      totalDelegations: isSet(object.totalDelegations) ? BigInt(object.totalDelegations.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryAccountInfoResponse): JsonSafe<QueryAccountInfoResponse> {
    const obj: any = {};
    if (message.provider) {
      obj.provider = message.provider.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.provider = [];
    }
    if (message.frozen) {
      obj.frozen = message.frozen.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.frozen = [];
    }
    if (message.unstaked) {
      obj.unstaked = message.unstaked.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.unstaked = [];
    }
    message.subscription !== undefined && (obj.subscription = message.subscription ? Subscription.toJSON(message.subscription) : undefined);
    message.project !== undefined && (obj.project = message.project ? Project.toJSON(message.project) : undefined);
    if (message.delegationsValidators) {
      obj.delegationsValidators = message.delegationsValidators.map(e => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationsValidators = [];
    }
    if (message.delegationsProviders) {
      obj.delegationsProviders = message.delegationsProviders.map(e => e ? Delegation.toJSON(e) : undefined);
    } else {
      obj.delegationsProviders = [];
    }
    message.totalDelegations !== undefined && (obj.totalDelegations = (message.totalDelegations || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAccountInfoResponse>, I>>(object: I): QueryAccountInfoResponse {
    const message = createBaseQueryAccountInfoResponse();
    message.provider = object.provider?.map(e => StakeEntry.fromPartial(e)) || [];
    message.frozen = object.frozen?.map(e => StakeEntry.fromPartial(e)) || [];
    message.unstaked = object.unstaked?.map(e => StakeEntry.fromPartial(e)) || [];
    message.subscription = object.subscription !== undefined && object.subscription !== null ? Subscription.fromPartial(object.subscription) : undefined;
    message.project = object.project !== undefined && object.project !== null ? Project.fromPartial(object.project) : undefined;
    message.delegationsValidators = object.delegationsValidators?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.delegationsProviders = object.delegationsProviders?.map(e => Delegation.fromPartial(e)) || [];
    message.totalDelegations = object.totalDelegations !== undefined && object.totalDelegations !== null ? BigInt(object.totalDelegations.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAccountInfoResponseAmino): QueryAccountInfoResponse {
    const message = createBaseQueryAccountInfoResponse();
    message.provider = object.provider?.map(e => StakeEntry.fromAmino(e)) || [];
    message.frozen = object.frozen?.map(e => StakeEntry.fromAmino(e)) || [];
    message.unstaked = object.unstaked?.map(e => StakeEntry.fromAmino(e)) || [];
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = Subscription.fromAmino(object.subscription);
    }
    if (object.project !== undefined && object.project !== null) {
      message.project = Project.fromAmino(object.project);
    }
    message.delegationsValidators = object.delegations_validators?.map(e => DelegationResponse.fromAmino(e)) || [];
    message.delegationsProviders = object.delegations_providers?.map(e => Delegation.fromAmino(e)) || [];
    if (object.total_delegations !== undefined && object.total_delegations !== null) {
      message.totalDelegations = BigInt(object.total_delegations);
    }
    return message;
  },
  toAmino(message: QueryAccountInfoResponse): QueryAccountInfoResponseAmino {
    const obj: any = {};
    if (message.provider) {
      obj.provider = message.provider.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.provider = message.provider;
    }
    if (message.frozen) {
      obj.frozen = message.frozen.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.frozen = message.frozen;
    }
    if (message.unstaked) {
      obj.unstaked = message.unstaked.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.unstaked = message.unstaked;
    }
    obj.subscription = message.subscription ? Subscription.toAmino(message.subscription) : undefined;
    obj.project = message.project ? Project.toAmino(message.project) : undefined;
    if (message.delegationsValidators) {
      obj.delegations_validators = message.delegationsValidators.map(e => e ? DelegationResponse.toAmino(e) : undefined);
    } else {
      obj.delegations_validators = message.delegationsValidators;
    }
    if (message.delegationsProviders) {
      obj.delegations_providers = message.delegationsProviders.map(e => e ? Delegation.toAmino(e) : undefined);
    } else {
      obj.delegations_providers = message.delegationsProviders;
    }
    obj.total_delegations = message.totalDelegations !== BigInt(0) ? (message.totalDelegations?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountInfoResponseAminoMsg): QueryAccountInfoResponse {
    return QueryAccountInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountInfoResponseProtoMsg): QueryAccountInfoResponse {
    return QueryAccountInfoResponse.decode(message.value);
  },
  toProto(message: QueryAccountInfoResponse): Uint8Array {
    return QueryAccountInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountInfoResponse): QueryAccountInfoResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryAccountInfoResponse",
      value: QueryAccountInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAccountInfoResponse.typeUrl, QueryAccountInfoResponse);