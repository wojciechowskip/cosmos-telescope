//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Delegation, DelegationAmino, DelegationSDKType } from "./delegate";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lavanet.lava.dualstaking.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lavanet.lava.dualstaking.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/lavanet.lava.dualstaking.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lavanet.lava.dualstaking.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryDelegatorProvidersRequest {
  delegator: string;
  withPending: boolean;
}
export interface QueryDelegatorProvidersRequestProtoMsg {
  typeUrl: "/lavanet.lava.dualstaking.QueryDelegatorProvidersRequest";
  value: Uint8Array;
}
export interface QueryDelegatorProvidersRequestAmino {
  delegator?: string;
  with_pending?: boolean;
}
export interface QueryDelegatorProvidersRequestAminoMsg {
  type: "/lavanet.lava.dualstaking.QueryDelegatorProvidersRequest";
  value: QueryDelegatorProvidersRequestAmino;
}
export interface QueryDelegatorProvidersRequestSDKType {
  delegator: string;
  with_pending: boolean;
}
export interface QueryDelegatorProvidersResponse {
  delegations: Delegation[];
}
export interface QueryDelegatorProvidersResponseProtoMsg {
  typeUrl: "/lavanet.lava.dualstaking.QueryDelegatorProvidersResponse";
  value: Uint8Array;
}
export interface QueryDelegatorProvidersResponseAmino {
  delegations?: DelegationAmino[];
}
export interface QueryDelegatorProvidersResponseAminoMsg {
  type: "/lavanet.lava.dualstaking.QueryDelegatorProvidersResponse";
  value: QueryDelegatorProvidersResponseAmino;
}
export interface QueryDelegatorProvidersResponseSDKType {
  delegations: DelegationSDKType[];
}
export interface QueryProviderDelegatorsRequest {
  provider: string;
  withPending: boolean;
}
export interface QueryProviderDelegatorsRequestProtoMsg {
  typeUrl: "/lavanet.lava.dualstaking.QueryProviderDelegatorsRequest";
  value: Uint8Array;
}
export interface QueryProviderDelegatorsRequestAmino {
  provider?: string;
  with_pending?: boolean;
}
export interface QueryProviderDelegatorsRequestAminoMsg {
  type: "/lavanet.lava.dualstaking.QueryProviderDelegatorsRequest";
  value: QueryProviderDelegatorsRequestAmino;
}
export interface QueryProviderDelegatorsRequestSDKType {
  provider: string;
  with_pending: boolean;
}
export interface QueryProviderDelegatorsResponse {
  delegations: Delegation[];
}
export interface QueryProviderDelegatorsResponseProtoMsg {
  typeUrl: "/lavanet.lava.dualstaking.QueryProviderDelegatorsResponse";
  value: Uint8Array;
}
export interface QueryProviderDelegatorsResponseAmino {
  delegations?: DelegationAmino[];
}
export interface QueryProviderDelegatorsResponseAminoMsg {
  type: "/lavanet.lava.dualstaking.QueryProviderDelegatorsResponse";
  value: QueryProviderDelegatorsResponseAmino;
}
export interface QueryProviderDelegatorsResponseSDKType {
  delegations: DelegationSDKType[];
}
export interface QueryDelegatorRewardsRequest {
  delegator: string;
  provider: string;
  chainId: string;
}
export interface QueryDelegatorRewardsRequestProtoMsg {
  typeUrl: "/lavanet.lava.dualstaking.QueryDelegatorRewardsRequest";
  value: Uint8Array;
}
export interface QueryDelegatorRewardsRequestAmino {
  delegator?: string;
  provider?: string;
  chain_id?: string;
}
export interface QueryDelegatorRewardsRequestAminoMsg {
  type: "/lavanet.lava.dualstaking.QueryDelegatorRewardsRequest";
  value: QueryDelegatorRewardsRequestAmino;
}
export interface QueryDelegatorRewardsRequestSDKType {
  delegator: string;
  provider: string;
  chain_id: string;
}
export interface QueryDelegatorRewardsResponse {
  rewards: DelegatorRewardInfo[];
}
export interface QueryDelegatorRewardsResponseProtoMsg {
  typeUrl: "/lavanet.lava.dualstaking.QueryDelegatorRewardsResponse";
  value: Uint8Array;
}
export interface QueryDelegatorRewardsResponseAmino {
  rewards?: DelegatorRewardInfoAmino[];
}
export interface QueryDelegatorRewardsResponseAminoMsg {
  type: "/lavanet.lava.dualstaking.QueryDelegatorRewardsResponse";
  value: QueryDelegatorRewardsResponseAmino;
}
export interface QueryDelegatorRewardsResponseSDKType {
  rewards: DelegatorRewardInfoSDKType[];
}
export interface DelegatorRewardInfo {
  provider: string;
  amount: Coin[];
}
export interface DelegatorRewardInfoProtoMsg {
  typeUrl: "/lavanet.lava.dualstaking.DelegatorRewardInfo";
  value: Uint8Array;
}
export interface DelegatorRewardInfoAmino {
  provider?: string;
  amount?: CoinAmino[];
}
export interface DelegatorRewardInfoAminoMsg {
  type: "/lavanet.lava.dualstaking.DelegatorRewardInfo";
  value: DelegatorRewardInfoAmino;
}
export interface DelegatorRewardInfoSDKType {
  provider: string;
  amount: CoinSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.dualstaking.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.dualstaking.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lavanet.lava.dualstaking.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.dualstaking.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryDelegatorProvidersRequest(): QueryDelegatorProvidersRequest {
  return {
    delegator: "",
    withPending: false
  };
}
export const QueryDelegatorProvidersRequest = {
  typeUrl: "/lavanet.lava.dualstaking.QueryDelegatorProvidersRequest",
  is(o: any): o is QueryDelegatorProvidersRequest {
    return o && (o.$typeUrl === QueryDelegatorProvidersRequest.typeUrl || typeof o.delegator === "string" && typeof o.withPending === "boolean");
  },
  isSDK(o: any): o is QueryDelegatorProvidersRequestSDKType {
    return o && (o.$typeUrl === QueryDelegatorProvidersRequest.typeUrl || typeof o.delegator === "string" && typeof o.with_pending === "boolean");
  },
  isAmino(o: any): o is QueryDelegatorProvidersRequestAmino {
    return o && (o.$typeUrl === QueryDelegatorProvidersRequest.typeUrl || typeof o.delegator === "string" && typeof o.with_pending === "boolean");
  },
  encode(message: QueryDelegatorProvidersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.withPending === true) {
      writer.uint32(16).bool(message.withPending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorProvidersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorProvidersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.withPending = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorProvidersRequest {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      withPending: isSet(object.withPending) ? Boolean(object.withPending) : false
    };
  },
  toJSON(message: QueryDelegatorProvidersRequest): JsonSafe<QueryDelegatorProvidersRequest> {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.withPending !== undefined && (obj.withPending = message.withPending);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorProvidersRequest>, I>>(object: I): QueryDelegatorProvidersRequest {
    const message = createBaseQueryDelegatorProvidersRequest();
    message.delegator = object.delegator ?? "";
    message.withPending = object.withPending ?? false;
    return message;
  },
  fromAmino(object: QueryDelegatorProvidersRequestAmino): QueryDelegatorProvidersRequest {
    const message = createBaseQueryDelegatorProvidersRequest();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.with_pending !== undefined && object.with_pending !== null) {
      message.withPending = object.with_pending;
    }
    return message;
  },
  toAmino(message: QueryDelegatorProvidersRequest): QueryDelegatorProvidersRequestAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    obj.with_pending = message.withPending === false ? undefined : message.withPending;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorProvidersRequestAminoMsg): QueryDelegatorProvidersRequest {
    return QueryDelegatorProvidersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorProvidersRequestProtoMsg): QueryDelegatorProvidersRequest {
    return QueryDelegatorProvidersRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorProvidersRequest): Uint8Array {
    return QueryDelegatorProvidersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorProvidersRequest): QueryDelegatorProvidersRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.dualstaking.QueryDelegatorProvidersRequest",
      value: QueryDelegatorProvidersRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDelegatorProvidersRequest.typeUrl, QueryDelegatorProvidersRequest);
function createBaseQueryDelegatorProvidersResponse(): QueryDelegatorProvidersResponse {
  return {
    delegations: []
  };
}
export const QueryDelegatorProvidersResponse = {
  typeUrl: "/lavanet.lava.dualstaking.QueryDelegatorProvidersResponse",
  is(o: any): o is QueryDelegatorProvidersResponse {
    return o && (o.$typeUrl === QueryDelegatorProvidersResponse.typeUrl || Array.isArray(o.delegations) && (!o.delegations.length || Delegation.is(o.delegations[0])));
  },
  isSDK(o: any): o is QueryDelegatorProvidersResponseSDKType {
    return o && (o.$typeUrl === QueryDelegatorProvidersResponse.typeUrl || Array.isArray(o.delegations) && (!o.delegations.length || Delegation.isSDK(o.delegations[0])));
  },
  isAmino(o: any): o is QueryDelegatorProvidersResponseAmino {
    return o && (o.$typeUrl === QueryDelegatorProvidersResponse.typeUrl || Array.isArray(o.delegations) && (!o.delegations.length || Delegation.isAmino(o.delegations[0])));
  },
  encode(message: QueryDelegatorProvidersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorProvidersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorProvidersResponse {
    return {
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => Delegation.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryDelegatorProvidersResponse): JsonSafe<QueryDelegatorProvidersResponse> {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toJSON(e) : undefined);
    } else {
      obj.delegations = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorProvidersResponse>, I>>(object: I): QueryDelegatorProvidersResponse {
    const message = createBaseQueryDelegatorProvidersResponse();
    message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDelegatorProvidersResponseAmino): QueryDelegatorProvidersResponse {
    const message = createBaseQueryDelegatorProvidersResponse();
    message.delegations = object.delegations?.map(e => Delegation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDelegatorProvidersResponse): QueryDelegatorProvidersResponseAmino {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toAmino(e) : undefined);
    } else {
      obj.delegations = message.delegations;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorProvidersResponseAminoMsg): QueryDelegatorProvidersResponse {
    return QueryDelegatorProvidersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorProvidersResponseProtoMsg): QueryDelegatorProvidersResponse {
    return QueryDelegatorProvidersResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorProvidersResponse): Uint8Array {
    return QueryDelegatorProvidersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorProvidersResponse): QueryDelegatorProvidersResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.dualstaking.QueryDelegatorProvidersResponse",
      value: QueryDelegatorProvidersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDelegatorProvidersResponse.typeUrl, QueryDelegatorProvidersResponse);
function createBaseQueryProviderDelegatorsRequest(): QueryProviderDelegatorsRequest {
  return {
    provider: "",
    withPending: false
  };
}
export const QueryProviderDelegatorsRequest = {
  typeUrl: "/lavanet.lava.dualstaking.QueryProviderDelegatorsRequest",
  is(o: any): o is QueryProviderDelegatorsRequest {
    return o && (o.$typeUrl === QueryProviderDelegatorsRequest.typeUrl || typeof o.provider === "string" && typeof o.withPending === "boolean");
  },
  isSDK(o: any): o is QueryProviderDelegatorsRequestSDKType {
    return o && (o.$typeUrl === QueryProviderDelegatorsRequest.typeUrl || typeof o.provider === "string" && typeof o.with_pending === "boolean");
  },
  isAmino(o: any): o is QueryProviderDelegatorsRequestAmino {
    return o && (o.$typeUrl === QueryProviderDelegatorsRequest.typeUrl || typeof o.provider === "string" && typeof o.with_pending === "boolean");
  },
  encode(message: QueryProviderDelegatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.withPending === true) {
      writer.uint32(16).bool(message.withPending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderDelegatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderDelegatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.withPending = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderDelegatorsRequest {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      withPending: isSet(object.withPending) ? Boolean(object.withPending) : false
    };
  },
  toJSON(message: QueryProviderDelegatorsRequest): JsonSafe<QueryProviderDelegatorsRequest> {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.withPending !== undefined && (obj.withPending = message.withPending);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderDelegatorsRequest>, I>>(object: I): QueryProviderDelegatorsRequest {
    const message = createBaseQueryProviderDelegatorsRequest();
    message.provider = object.provider ?? "";
    message.withPending = object.withPending ?? false;
    return message;
  },
  fromAmino(object: QueryProviderDelegatorsRequestAmino): QueryProviderDelegatorsRequest {
    const message = createBaseQueryProviderDelegatorsRequest();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.with_pending !== undefined && object.with_pending !== null) {
      message.withPending = object.with_pending;
    }
    return message;
  },
  toAmino(message: QueryProviderDelegatorsRequest): QueryProviderDelegatorsRequestAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.with_pending = message.withPending === false ? undefined : message.withPending;
    return obj;
  },
  fromAminoMsg(object: QueryProviderDelegatorsRequestAminoMsg): QueryProviderDelegatorsRequest {
    return QueryProviderDelegatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderDelegatorsRequestProtoMsg): QueryProviderDelegatorsRequest {
    return QueryProviderDelegatorsRequest.decode(message.value);
  },
  toProto(message: QueryProviderDelegatorsRequest): Uint8Array {
    return QueryProviderDelegatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderDelegatorsRequest): QueryProviderDelegatorsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.dualstaking.QueryProviderDelegatorsRequest",
      value: QueryProviderDelegatorsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProviderDelegatorsRequest.typeUrl, QueryProviderDelegatorsRequest);
function createBaseQueryProviderDelegatorsResponse(): QueryProviderDelegatorsResponse {
  return {
    delegations: []
  };
}
export const QueryProviderDelegatorsResponse = {
  typeUrl: "/lavanet.lava.dualstaking.QueryProviderDelegatorsResponse",
  is(o: any): o is QueryProviderDelegatorsResponse {
    return o && (o.$typeUrl === QueryProviderDelegatorsResponse.typeUrl || Array.isArray(o.delegations) && (!o.delegations.length || Delegation.is(o.delegations[0])));
  },
  isSDK(o: any): o is QueryProviderDelegatorsResponseSDKType {
    return o && (o.$typeUrl === QueryProviderDelegatorsResponse.typeUrl || Array.isArray(o.delegations) && (!o.delegations.length || Delegation.isSDK(o.delegations[0])));
  },
  isAmino(o: any): o is QueryProviderDelegatorsResponseAmino {
    return o && (o.$typeUrl === QueryProviderDelegatorsResponse.typeUrl || Array.isArray(o.delegations) && (!o.delegations.length || Delegation.isAmino(o.delegations[0])));
  },
  encode(message: QueryProviderDelegatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderDelegatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderDelegatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderDelegatorsResponse {
    return {
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => Delegation.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryProviderDelegatorsResponse): JsonSafe<QueryProviderDelegatorsResponse> {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toJSON(e) : undefined);
    } else {
      obj.delegations = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderDelegatorsResponse>, I>>(object: I): QueryProviderDelegatorsResponse {
    const message = createBaseQueryProviderDelegatorsResponse();
    message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryProviderDelegatorsResponseAmino): QueryProviderDelegatorsResponse {
    const message = createBaseQueryProviderDelegatorsResponse();
    message.delegations = object.delegations?.map(e => Delegation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryProviderDelegatorsResponse): QueryProviderDelegatorsResponseAmino {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toAmino(e) : undefined);
    } else {
      obj.delegations = message.delegations;
    }
    return obj;
  },
  fromAminoMsg(object: QueryProviderDelegatorsResponseAminoMsg): QueryProviderDelegatorsResponse {
    return QueryProviderDelegatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderDelegatorsResponseProtoMsg): QueryProviderDelegatorsResponse {
    return QueryProviderDelegatorsResponse.decode(message.value);
  },
  toProto(message: QueryProviderDelegatorsResponse): Uint8Array {
    return QueryProviderDelegatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderDelegatorsResponse): QueryProviderDelegatorsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.dualstaking.QueryProviderDelegatorsResponse",
      value: QueryProviderDelegatorsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProviderDelegatorsResponse.typeUrl, QueryProviderDelegatorsResponse);
function createBaseQueryDelegatorRewardsRequest(): QueryDelegatorRewardsRequest {
  return {
    delegator: "",
    provider: "",
    chainId: ""
  };
}
export const QueryDelegatorRewardsRequest = {
  typeUrl: "/lavanet.lava.dualstaking.QueryDelegatorRewardsRequest",
  is(o: any): o is QueryDelegatorRewardsRequest {
    return o && (o.$typeUrl === QueryDelegatorRewardsRequest.typeUrl || typeof o.delegator === "string" && typeof o.provider === "string" && typeof o.chainId === "string");
  },
  isSDK(o: any): o is QueryDelegatorRewardsRequestSDKType {
    return o && (o.$typeUrl === QueryDelegatorRewardsRequest.typeUrl || typeof o.delegator === "string" && typeof o.provider === "string" && typeof o.chain_id === "string");
  },
  isAmino(o: any): o is QueryDelegatorRewardsRequestAmino {
    return o && (o.$typeUrl === QueryDelegatorRewardsRequest.typeUrl || typeof o.delegator === "string" && typeof o.provider === "string" && typeof o.chain_id === "string");
  },
  encode(message: QueryDelegatorRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorRewardsRequest {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  toJSON(message: QueryDelegatorRewardsRequest): JsonSafe<QueryDelegatorRewardsRequest> {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.provider !== undefined && (obj.provider = message.provider);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorRewardsRequest>, I>>(object: I): QueryDelegatorRewardsRequest {
    const message = createBaseQueryDelegatorRewardsRequest();
    message.delegator = object.delegator ?? "";
    message.provider = object.provider ?? "";
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorRewardsRequestAmino): QueryDelegatorRewardsRequest {
    const message = createBaseQueryDelegatorRewardsRequest();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: QueryDelegatorRewardsRequest): QueryDelegatorRewardsRequestAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorRewardsRequestAminoMsg): QueryDelegatorRewardsRequest {
    return QueryDelegatorRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorRewardsRequestProtoMsg): QueryDelegatorRewardsRequest {
    return QueryDelegatorRewardsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorRewardsRequest): Uint8Array {
    return QueryDelegatorRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorRewardsRequest): QueryDelegatorRewardsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.dualstaking.QueryDelegatorRewardsRequest",
      value: QueryDelegatorRewardsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDelegatorRewardsRequest.typeUrl, QueryDelegatorRewardsRequest);
function createBaseQueryDelegatorRewardsResponse(): QueryDelegatorRewardsResponse {
  return {
    rewards: []
  };
}
export const QueryDelegatorRewardsResponse = {
  typeUrl: "/lavanet.lava.dualstaking.QueryDelegatorRewardsResponse",
  is(o: any): o is QueryDelegatorRewardsResponse {
    return o && (o.$typeUrl === QueryDelegatorRewardsResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || DelegatorRewardInfo.is(o.rewards[0])));
  },
  isSDK(o: any): o is QueryDelegatorRewardsResponseSDKType {
    return o && (o.$typeUrl === QueryDelegatorRewardsResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || DelegatorRewardInfo.isSDK(o.rewards[0])));
  },
  isAmino(o: any): o is QueryDelegatorRewardsResponseAmino {
    return o && (o.$typeUrl === QueryDelegatorRewardsResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || DelegatorRewardInfo.isAmino(o.rewards[0])));
  },
  encode(message: QueryDelegatorRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DelegatorRewardInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DelegatorRewardInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DelegatorRewardInfo.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryDelegatorRewardsResponse): JsonSafe<QueryDelegatorRewardsResponse> {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DelegatorRewardInfo.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorRewardsResponse>, I>>(object: I): QueryDelegatorRewardsResponse {
    const message = createBaseQueryDelegatorRewardsResponse();
    message.rewards = object.rewards?.map(e => DelegatorRewardInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDelegatorRewardsResponseAmino): QueryDelegatorRewardsResponse {
    const message = createBaseQueryDelegatorRewardsResponse();
    message.rewards = object.rewards?.map(e => DelegatorRewardInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDelegatorRewardsResponse): QueryDelegatorRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DelegatorRewardInfo.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorRewardsResponseAminoMsg): QueryDelegatorRewardsResponse {
    return QueryDelegatorRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorRewardsResponseProtoMsg): QueryDelegatorRewardsResponse {
    return QueryDelegatorRewardsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorRewardsResponse): Uint8Array {
    return QueryDelegatorRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorRewardsResponse): QueryDelegatorRewardsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.dualstaking.QueryDelegatorRewardsResponse",
      value: QueryDelegatorRewardsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDelegatorRewardsResponse.typeUrl, QueryDelegatorRewardsResponse);
function createBaseDelegatorRewardInfo(): DelegatorRewardInfo {
  return {
    provider: "",
    amount: []
  };
}
export const DelegatorRewardInfo = {
  typeUrl: "/lavanet.lava.dualstaking.DelegatorRewardInfo",
  is(o: any): o is DelegatorRewardInfo {
    return o && (o.$typeUrl === DelegatorRewardInfo.typeUrl || typeof o.provider === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is DelegatorRewardInfoSDKType {
    return o && (o.$typeUrl === DelegatorRewardInfo.typeUrl || typeof o.provider === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is DelegatorRewardInfoAmino {
    return o && (o.$typeUrl === DelegatorRewardInfo.typeUrl || typeof o.provider === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: DelegatorRewardInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorRewardInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorRewardInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorRewardInfo {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: DelegatorRewardInfo): JsonSafe<DelegatorRewardInfo> {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DelegatorRewardInfo>, I>>(object: I): DelegatorRewardInfo {
    const message = createBaseDelegatorRewardInfo();
    message.provider = object.provider ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegatorRewardInfoAmino): DelegatorRewardInfo {
    const message = createBaseDelegatorRewardInfo();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DelegatorRewardInfo): DelegatorRewardInfoAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: DelegatorRewardInfoAminoMsg): DelegatorRewardInfo {
    return DelegatorRewardInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegatorRewardInfoProtoMsg): DelegatorRewardInfo {
    return DelegatorRewardInfo.decode(message.value);
  },
  toProto(message: DelegatorRewardInfo): Uint8Array {
    return DelegatorRewardInfo.encode(message).finish();
  },
  toProtoMsg(message: DelegatorRewardInfo): DelegatorRewardInfoProtoMsg {
    return {
      typeUrl: "/lavanet.lava.dualstaking.DelegatorRewardInfo",
      value: DelegatorRewardInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelegatorRewardInfo.typeUrl, DelegatorRewardInfo);