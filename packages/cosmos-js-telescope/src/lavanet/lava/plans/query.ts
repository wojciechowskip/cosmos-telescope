//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Plan, PlanAmino, PlanSDKType } from "./plan";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lavanet.lava.plans.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lavanet.lava.plans.QueryParamsRequest";
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
  typeUrl: "/lavanet.lava.plans.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lavanet.lava.plans.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryListRequest {}
export interface QueryListRequestProtoMsg {
  typeUrl: "/lavanet.lava.plans.QueryListRequest";
  value: Uint8Array;
}
export interface QueryListRequestAmino {}
export interface QueryListRequestAminoMsg {
  type: "/lavanet.lava.plans.QueryListRequest";
  value: QueryListRequestAmino;
}
export interface QueryListRequestSDKType {}
export interface QueryListResponse {
  plansInfo: ListInfoStruct[];
}
export interface QueryListResponseProtoMsg {
  typeUrl: "/lavanet.lava.plans.QueryListResponse";
  value: Uint8Array;
}
export interface QueryListResponseAmino {
  plans_info?: ListInfoStructAmino[];
}
export interface QueryListResponseAminoMsg {
  type: "/lavanet.lava.plans.QueryListResponse";
  value: QueryListResponseAmino;
}
export interface QueryListResponseSDKType {
  plans_info: ListInfoStructSDKType[];
}
export interface ListInfoStruct {
  index: string;
  description: string;
  price: Coin;
}
export interface ListInfoStructProtoMsg {
  typeUrl: "/lavanet.lava.plans.ListInfoStruct";
  value: Uint8Array;
}
export interface ListInfoStructAmino {
  index?: string;
  description?: string;
  price?: CoinAmino;
}
export interface ListInfoStructAminoMsg {
  type: "/lavanet.lava.plans.ListInfoStruct";
  value: ListInfoStructAmino;
}
export interface ListInfoStructSDKType {
  index: string;
  description: string;
  price: CoinSDKType;
}
export interface QueryInfoRequest {
  planIndex: string;
}
export interface QueryInfoRequestProtoMsg {
  typeUrl: "/lavanet.lava.plans.QueryInfoRequest";
  value: Uint8Array;
}
export interface QueryInfoRequestAmino {
  plan_index?: string;
}
export interface QueryInfoRequestAminoMsg {
  type: "/lavanet.lava.plans.QueryInfoRequest";
  value: QueryInfoRequestAmino;
}
export interface QueryInfoRequestSDKType {
  plan_index: string;
}
export interface QueryInfoResponse {
  planInfo: Plan;
}
export interface QueryInfoResponseProtoMsg {
  typeUrl: "/lavanet.lava.plans.QueryInfoResponse";
  value: Uint8Array;
}
export interface QueryInfoResponseAmino {
  plan_info?: PlanAmino;
}
export interface QueryInfoResponseAminoMsg {
  type: "/lavanet.lava.plans.QueryInfoResponse";
  value: QueryInfoResponseAmino;
}
export interface QueryInfoResponseSDKType {
  plan_info: PlanSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.plans.QueryParamsRequest",
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
      typeUrl: "/lavanet.lava.plans.QueryParamsRequest",
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
  typeUrl: "/lavanet.lava.plans.QueryParamsResponse",
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
      typeUrl: "/lavanet.lava.plans.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryListRequest(): QueryListRequest {
  return {};
}
export const QueryListRequest = {
  typeUrl: "/lavanet.lava.plans.QueryListRequest",
  is(o: any): o is QueryListRequest {
    return o && o.$typeUrl === QueryListRequest.typeUrl;
  },
  isSDK(o: any): o is QueryListRequestSDKType {
    return o && o.$typeUrl === QueryListRequest.typeUrl;
  },
  isAmino(o: any): o is QueryListRequestAmino {
    return o && o.$typeUrl === QueryListRequest.typeUrl;
  },
  encode(_: QueryListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListRequest();
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
  fromJSON(_: any): QueryListRequest {
    return {};
  },
  toJSON(_: QueryListRequest): JsonSafe<QueryListRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListRequest>, I>>(_: I): QueryListRequest {
    const message = createBaseQueryListRequest();
    return message;
  },
  fromAmino(_: QueryListRequestAmino): QueryListRequest {
    const message = createBaseQueryListRequest();
    return message;
  },
  toAmino(_: QueryListRequest): QueryListRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryListRequestAminoMsg): QueryListRequest {
    return QueryListRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListRequestProtoMsg): QueryListRequest {
    return QueryListRequest.decode(message.value);
  },
  toProto(message: QueryListRequest): Uint8Array {
    return QueryListRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListRequest): QueryListRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.QueryListRequest",
      value: QueryListRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryListRequest.typeUrl, QueryListRequest);
function createBaseQueryListResponse(): QueryListResponse {
  return {
    plansInfo: []
  };
}
export const QueryListResponse = {
  typeUrl: "/lavanet.lava.plans.QueryListResponse",
  is(o: any): o is QueryListResponse {
    return o && (o.$typeUrl === QueryListResponse.typeUrl || Array.isArray(o.plansInfo) && (!o.plansInfo.length || ListInfoStruct.is(o.plansInfo[0])));
  },
  isSDK(o: any): o is QueryListResponseSDKType {
    return o && (o.$typeUrl === QueryListResponse.typeUrl || Array.isArray(o.plans_info) && (!o.plans_info.length || ListInfoStruct.isSDK(o.plans_info[0])));
  },
  isAmino(o: any): o is QueryListResponseAmino {
    return o && (o.$typeUrl === QueryListResponse.typeUrl || Array.isArray(o.plans_info) && (!o.plans_info.length || ListInfoStruct.isAmino(o.plans_info[0])));
  },
  encode(message: QueryListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.plansInfo) {
      ListInfoStruct.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plansInfo.push(ListInfoStruct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListResponse {
    return {
      plansInfo: Array.isArray(object?.plansInfo) ? object.plansInfo.map((e: any) => ListInfoStruct.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryListResponse): JsonSafe<QueryListResponse> {
    const obj: any = {};
    if (message.plansInfo) {
      obj.plansInfo = message.plansInfo.map(e => e ? ListInfoStruct.toJSON(e) : undefined);
    } else {
      obj.plansInfo = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListResponse>, I>>(object: I): QueryListResponse {
    const message = createBaseQueryListResponse();
    message.plansInfo = object.plansInfo?.map(e => ListInfoStruct.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryListResponseAmino): QueryListResponse {
    const message = createBaseQueryListResponse();
    message.plansInfo = object.plans_info?.map(e => ListInfoStruct.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryListResponse): QueryListResponseAmino {
    const obj: any = {};
    if (message.plansInfo) {
      obj.plans_info = message.plansInfo.map(e => e ? ListInfoStruct.toAmino(e) : undefined);
    } else {
      obj.plans_info = message.plansInfo;
    }
    return obj;
  },
  fromAminoMsg(object: QueryListResponseAminoMsg): QueryListResponse {
    return QueryListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListResponseProtoMsg): QueryListResponse {
    return QueryListResponse.decode(message.value);
  },
  toProto(message: QueryListResponse): Uint8Array {
    return QueryListResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListResponse): QueryListResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.QueryListResponse",
      value: QueryListResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryListResponse.typeUrl, QueryListResponse);
function createBaseListInfoStruct(): ListInfoStruct {
  return {
    index: "",
    description: "",
    price: Coin.fromPartial({})
  };
}
export const ListInfoStruct = {
  typeUrl: "/lavanet.lava.plans.ListInfoStruct",
  is(o: any): o is ListInfoStruct {
    return o && (o.$typeUrl === ListInfoStruct.typeUrl || typeof o.index === "string" && typeof o.description === "string" && Coin.is(o.price));
  },
  isSDK(o: any): o is ListInfoStructSDKType {
    return o && (o.$typeUrl === ListInfoStruct.typeUrl || typeof o.index === "string" && typeof o.description === "string" && Coin.isSDK(o.price));
  },
  isAmino(o: any): o is ListInfoStructAmino {
    return o && (o.$typeUrl === ListInfoStruct.typeUrl || typeof o.index === "string" && typeof o.description === "string" && Coin.isAmino(o.price));
  },
  encode(message: ListInfoStruct, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListInfoStruct {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInfoStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListInfoStruct {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      description: isSet(object.description) ? String(object.description) : "",
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined
    };
  },
  toJSON(message: ListInfoStruct): JsonSafe<ListInfoStruct> {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.description !== undefined && (obj.description = message.description);
    message.price !== undefined && (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListInfoStruct>, I>>(object: I): ListInfoStruct {
    const message = createBaseListInfoStruct();
    message.index = object.index ?? "";
    message.description = object.description ?? "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: ListInfoStructAmino): ListInfoStruct {
    const message = createBaseListInfoStruct();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: ListInfoStruct): ListInfoStructAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    obj.description = message.description === "" ? undefined : message.description;
    obj.price = message.price ? Coin.toAmino(message.price) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListInfoStructAminoMsg): ListInfoStruct {
    return ListInfoStruct.fromAmino(object.value);
  },
  fromProtoMsg(message: ListInfoStructProtoMsg): ListInfoStruct {
    return ListInfoStruct.decode(message.value);
  },
  toProto(message: ListInfoStruct): Uint8Array {
    return ListInfoStruct.encode(message).finish();
  },
  toProtoMsg(message: ListInfoStruct): ListInfoStructProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.ListInfoStruct",
      value: ListInfoStruct.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListInfoStruct.typeUrl, ListInfoStruct);
function createBaseQueryInfoRequest(): QueryInfoRequest {
  return {
    planIndex: ""
  };
}
export const QueryInfoRequest = {
  typeUrl: "/lavanet.lava.plans.QueryInfoRequest",
  is(o: any): o is QueryInfoRequest {
    return o && (o.$typeUrl === QueryInfoRequest.typeUrl || typeof o.planIndex === "string");
  },
  isSDK(o: any): o is QueryInfoRequestSDKType {
    return o && (o.$typeUrl === QueryInfoRequest.typeUrl || typeof o.plan_index === "string");
  },
  isAmino(o: any): o is QueryInfoRequestAmino {
    return o && (o.$typeUrl === QueryInfoRequest.typeUrl || typeof o.plan_index === "string");
  },
  encode(message: QueryInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.planIndex !== "") {
      writer.uint32(10).string(message.planIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInfoRequest {
    return {
      planIndex: isSet(object.planIndex) ? String(object.planIndex) : ""
    };
  },
  toJSON(message: QueryInfoRequest): JsonSafe<QueryInfoRequest> {
    const obj: any = {};
    message.planIndex !== undefined && (obj.planIndex = message.planIndex);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInfoRequest>, I>>(object: I): QueryInfoRequest {
    const message = createBaseQueryInfoRequest();
    message.planIndex = object.planIndex ?? "";
    return message;
  },
  fromAmino(object: QueryInfoRequestAmino): QueryInfoRequest {
    const message = createBaseQueryInfoRequest();
    if (object.plan_index !== undefined && object.plan_index !== null) {
      message.planIndex = object.plan_index;
    }
    return message;
  },
  toAmino(message: QueryInfoRequest): QueryInfoRequestAmino {
    const obj: any = {};
    obj.plan_index = message.planIndex === "" ? undefined : message.planIndex;
    return obj;
  },
  fromAminoMsg(object: QueryInfoRequestAminoMsg): QueryInfoRequest {
    return QueryInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInfoRequestProtoMsg): QueryInfoRequest {
    return QueryInfoRequest.decode(message.value);
  },
  toProto(message: QueryInfoRequest): Uint8Array {
    return QueryInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInfoRequest): QueryInfoRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.QueryInfoRequest",
      value: QueryInfoRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryInfoRequest.typeUrl, QueryInfoRequest);
function createBaseQueryInfoResponse(): QueryInfoResponse {
  return {
    planInfo: Plan.fromPartial({})
  };
}
export const QueryInfoResponse = {
  typeUrl: "/lavanet.lava.plans.QueryInfoResponse",
  is(o: any): o is QueryInfoResponse {
    return o && (o.$typeUrl === QueryInfoResponse.typeUrl || Plan.is(o.planInfo));
  },
  isSDK(o: any): o is QueryInfoResponseSDKType {
    return o && (o.$typeUrl === QueryInfoResponse.typeUrl || Plan.isSDK(o.plan_info));
  },
  isAmino(o: any): o is QueryInfoResponseAmino {
    return o && (o.$typeUrl === QueryInfoResponse.typeUrl || Plan.isAmino(o.plan_info));
  },
  encode(message: QueryInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.planInfo !== undefined) {
      Plan.encode(message.planInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planInfo = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInfoResponse {
    return {
      planInfo: isSet(object.planInfo) ? Plan.fromJSON(object.planInfo) : undefined
    };
  },
  toJSON(message: QueryInfoResponse): JsonSafe<QueryInfoResponse> {
    const obj: any = {};
    message.planInfo !== undefined && (obj.planInfo = message.planInfo ? Plan.toJSON(message.planInfo) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInfoResponse>, I>>(object: I): QueryInfoResponse {
    const message = createBaseQueryInfoResponse();
    message.planInfo = object.planInfo !== undefined && object.planInfo !== null ? Plan.fromPartial(object.planInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryInfoResponseAmino): QueryInfoResponse {
    const message = createBaseQueryInfoResponse();
    if (object.plan_info !== undefined && object.plan_info !== null) {
      message.planInfo = Plan.fromAmino(object.plan_info);
    }
    return message;
  },
  toAmino(message: QueryInfoResponse): QueryInfoResponseAmino {
    const obj: any = {};
    obj.plan_info = message.planInfo ? Plan.toAmino(message.planInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInfoResponseAminoMsg): QueryInfoResponse {
    return QueryInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInfoResponseProtoMsg): QueryInfoResponse {
    return QueryInfoResponse.decode(message.value);
  },
  toProto(message: QueryInfoResponse): Uint8Array {
    return QueryInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInfoResponse): QueryInfoResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.QueryInfoResponse",
      value: QueryInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryInfoResponse.typeUrl, QueryInfoResponse);