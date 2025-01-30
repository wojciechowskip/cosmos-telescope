//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Spec, SpecAmino, SpecSDKType } from "./spec";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lavanet.lava.spec.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lavanet.lava.spec.QueryParamsRequest";
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
  typeUrl: "/lavanet.lava.spec.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lavanet.lava.spec.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetSpecRequest {
  chainID: string;
}
export interface QueryGetSpecRequestProtoMsg {
  typeUrl: "/lavanet.lava.spec.QueryGetSpecRequest";
  value: Uint8Array;
}
export interface QueryGetSpecRequestAmino {
  ChainID?: string;
}
export interface QueryGetSpecRequestAminoMsg {
  type: "/lavanet.lava.spec.QueryGetSpecRequest";
  value: QueryGetSpecRequestAmino;
}
export interface QueryGetSpecRequestSDKType {
  ChainID: string;
}
export interface QueryGetSpecResponse {
  spec: Spec;
}
export interface QueryGetSpecResponseProtoMsg {
  typeUrl: "/lavanet.lava.spec.QueryGetSpecResponse";
  value: Uint8Array;
}
export interface QueryGetSpecResponseAmino {
  Spec?: SpecAmino;
}
export interface QueryGetSpecResponseAminoMsg {
  type: "/lavanet.lava.spec.QueryGetSpecResponse";
  value: QueryGetSpecResponseAmino;
}
export interface QueryGetSpecResponseSDKType {
  Spec: SpecSDKType;
}
export interface QueryAllSpecRequest {
  pagination?: PageRequest;
}
export interface QueryAllSpecRequestProtoMsg {
  typeUrl: "/lavanet.lava.spec.QueryAllSpecRequest";
  value: Uint8Array;
}
export interface QueryAllSpecRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllSpecRequestAminoMsg {
  type: "/lavanet.lava.spec.QueryAllSpecRequest";
  value: QueryAllSpecRequestAmino;
}
export interface QueryAllSpecRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllSpecResponse {
  spec: Spec[];
  pagination?: PageResponse;
}
export interface QueryAllSpecResponseProtoMsg {
  typeUrl: "/lavanet.lava.spec.QueryAllSpecResponse";
  value: Uint8Array;
}
export interface QueryAllSpecResponseAmino {
  Spec?: SpecAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllSpecResponseAminoMsg {
  type: "/lavanet.lava.spec.QueryAllSpecResponse";
  value: QueryAllSpecResponseAmino;
}
export interface QueryAllSpecResponseSDKType {
  Spec: SpecSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryShowAllChainsRequest {}
export interface QueryShowAllChainsRequestProtoMsg {
  typeUrl: "/lavanet.lava.spec.QueryShowAllChainsRequest";
  value: Uint8Array;
}
export interface QueryShowAllChainsRequestAmino {}
export interface QueryShowAllChainsRequestAminoMsg {
  type: "/lavanet.lava.spec.QueryShowAllChainsRequest";
  value: QueryShowAllChainsRequestAmino;
}
export interface QueryShowAllChainsRequestSDKType {}
export interface QueryShowAllChainsResponse {
  chainInfoList: ShowAllChainsInfoStruct[];
}
export interface QueryShowAllChainsResponseProtoMsg {
  typeUrl: "/lavanet.lava.spec.QueryShowAllChainsResponse";
  value: Uint8Array;
}
export interface QueryShowAllChainsResponseAmino {
  chainInfoList?: ShowAllChainsInfoStructAmino[];
}
export interface QueryShowAllChainsResponseAminoMsg {
  type: "/lavanet.lava.spec.QueryShowAllChainsResponse";
  value: QueryShowAllChainsResponseAmino;
}
export interface QueryShowAllChainsResponseSDKType {
  chainInfoList: ShowAllChainsInfoStructSDKType[];
}
export interface ShowAllChainsInfoStruct {
  chainName: string;
  chainID: string;
  enabledApiInterfaces: string[];
  apiCount: bigint;
}
export interface ShowAllChainsInfoStructProtoMsg {
  typeUrl: "/lavanet.lava.spec.ShowAllChainsInfoStruct";
  value: Uint8Array;
}
export interface ShowAllChainsInfoStructAmino {
  chainName?: string;
  chainID?: string;
  enabledApiInterfaces?: string[];
  api_count?: string;
}
export interface ShowAllChainsInfoStructAminoMsg {
  type: "/lavanet.lava.spec.ShowAllChainsInfoStruct";
  value: ShowAllChainsInfoStructAmino;
}
export interface ShowAllChainsInfoStructSDKType {
  chainName: string;
  chainID: string;
  enabledApiInterfaces: string[];
  api_count: bigint;
}
export interface QueryShowChainInfoRequest {
  chainName: string;
}
export interface QueryShowChainInfoRequestProtoMsg {
  typeUrl: "/lavanet.lava.spec.QueryShowChainInfoRequest";
  value: Uint8Array;
}
export interface QueryShowChainInfoRequestAmino {
  chainName?: string;
}
export interface QueryShowChainInfoRequestAminoMsg {
  type: "/lavanet.lava.spec.QueryShowChainInfoRequest";
  value: QueryShowChainInfoRequestAmino;
}
export interface QueryShowChainInfoRequestSDKType {
  chainName: string;
}
export interface ApiList {
  interface: string;
  supportedApis: string[];
  addon: string;
}
export interface ApiListProtoMsg {
  typeUrl: "/lavanet.lava.spec.ApiList";
  value: Uint8Array;
}
export interface ApiListAmino {
  interface?: string;
  supportedApis?: string[];
  addon?: string;
}
export interface ApiListAminoMsg {
  type: "/lavanet.lava.spec.ApiList";
  value: ApiListAmino;
}
export interface ApiListSDKType {
  interface: string;
  supportedApis: string[];
  addon: string;
}
export interface QueryShowChainInfoResponse {
  chainID: string;
  interfaces: string[];
  supportedApisInterfaceList: ApiList[];
  optionalInterfaces: string[];
}
export interface QueryShowChainInfoResponseProtoMsg {
  typeUrl: "/lavanet.lava.spec.QueryShowChainInfoResponse";
  value: Uint8Array;
}
export interface QueryShowChainInfoResponseAmino {
  chainID?: string;
  interfaces?: string[];
  supportedApisInterfaceList?: ApiListAmino[];
  optional_interfaces?: string[];
}
export interface QueryShowChainInfoResponseAminoMsg {
  type: "/lavanet.lava.spec.QueryShowChainInfoResponse";
  value: QueryShowChainInfoResponseAmino;
}
export interface QueryShowChainInfoResponseSDKType {
  chainID: string;
  interfaces: string[];
  supportedApisInterfaceList: ApiListSDKType[];
  optional_interfaces: string[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.spec.QueryParamsRequest",
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
      typeUrl: "/lavanet.lava.spec.QueryParamsRequest",
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
  typeUrl: "/lavanet.lava.spec.QueryParamsResponse",
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
      typeUrl: "/lavanet.lava.spec.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryGetSpecRequest(): QueryGetSpecRequest {
  return {
    chainID: ""
  };
}
export const QueryGetSpecRequest = {
  typeUrl: "/lavanet.lava.spec.QueryGetSpecRequest",
  is(o: any): o is QueryGetSpecRequest {
    return o && (o.$typeUrl === QueryGetSpecRequest.typeUrl || typeof o.chainID === "string");
  },
  isSDK(o: any): o is QueryGetSpecRequestSDKType {
    return o && (o.$typeUrl === QueryGetSpecRequest.typeUrl || typeof o.ChainID === "string");
  },
  isAmino(o: any): o is QueryGetSpecRequestAmino {
    return o && (o.$typeUrl === QueryGetSpecRequest.typeUrl || typeof o.ChainID === "string");
  },
  encode(message: QueryGetSpecRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSpecRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSpecRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetSpecRequest {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : ""
    };
  },
  toJSON(message: QueryGetSpecRequest): JsonSafe<QueryGetSpecRequest> {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSpecRequest>, I>>(object: I): QueryGetSpecRequest {
    const message = createBaseQueryGetSpecRequest();
    message.chainID = object.chainID ?? "";
    return message;
  },
  fromAmino(object: QueryGetSpecRequestAmino): QueryGetSpecRequest {
    const message = createBaseQueryGetSpecRequest();
    if (object.ChainID !== undefined && object.ChainID !== null) {
      message.chainID = object.ChainID;
    }
    return message;
  },
  toAmino(message: QueryGetSpecRequest): QueryGetSpecRequestAmino {
    const obj: any = {};
    obj.ChainID = message.chainID === "" ? undefined : message.chainID;
    return obj;
  },
  fromAminoMsg(object: QueryGetSpecRequestAminoMsg): QueryGetSpecRequest {
    return QueryGetSpecRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSpecRequestProtoMsg): QueryGetSpecRequest {
    return QueryGetSpecRequest.decode(message.value);
  },
  toProto(message: QueryGetSpecRequest): Uint8Array {
    return QueryGetSpecRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSpecRequest): QueryGetSpecRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryGetSpecRequest",
      value: QueryGetSpecRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetSpecRequest.typeUrl, QueryGetSpecRequest);
function createBaseQueryGetSpecResponse(): QueryGetSpecResponse {
  return {
    spec: Spec.fromPartial({})
  };
}
export const QueryGetSpecResponse = {
  typeUrl: "/lavanet.lava.spec.QueryGetSpecResponse",
  is(o: any): o is QueryGetSpecResponse {
    return o && (o.$typeUrl === QueryGetSpecResponse.typeUrl || Spec.is(o.spec));
  },
  isSDK(o: any): o is QueryGetSpecResponseSDKType {
    return o && (o.$typeUrl === QueryGetSpecResponse.typeUrl || Spec.isSDK(o.Spec));
  },
  isAmino(o: any): o is QueryGetSpecResponseAmino {
    return o && (o.$typeUrl === QueryGetSpecResponse.typeUrl || Spec.isAmino(o.Spec));
  },
  encode(message: QueryGetSpecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spec !== undefined) {
      Spec.encode(message.spec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSpecResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSpecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spec = Spec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetSpecResponse {
    return {
      spec: isSet(object.spec) ? Spec.fromJSON(object.spec) : undefined
    };
  },
  toJSON(message: QueryGetSpecResponse): JsonSafe<QueryGetSpecResponse> {
    const obj: any = {};
    message.spec !== undefined && (obj.spec = message.spec ? Spec.toJSON(message.spec) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSpecResponse>, I>>(object: I): QueryGetSpecResponse {
    const message = createBaseQueryGetSpecResponse();
    message.spec = object.spec !== undefined && object.spec !== null ? Spec.fromPartial(object.spec) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSpecResponseAmino): QueryGetSpecResponse {
    const message = createBaseQueryGetSpecResponse();
    if (object.Spec !== undefined && object.Spec !== null) {
      message.spec = Spec.fromAmino(object.Spec);
    }
    return message;
  },
  toAmino(message: QueryGetSpecResponse): QueryGetSpecResponseAmino {
    const obj: any = {};
    obj.Spec = message.spec ? Spec.toAmino(message.spec) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSpecResponseAminoMsg): QueryGetSpecResponse {
    return QueryGetSpecResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSpecResponseProtoMsg): QueryGetSpecResponse {
    return QueryGetSpecResponse.decode(message.value);
  },
  toProto(message: QueryGetSpecResponse): Uint8Array {
    return QueryGetSpecResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSpecResponse): QueryGetSpecResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryGetSpecResponse",
      value: QueryGetSpecResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetSpecResponse.typeUrl, QueryGetSpecResponse);
function createBaseQueryAllSpecRequest(): QueryAllSpecRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllSpecRequest = {
  typeUrl: "/lavanet.lava.spec.QueryAllSpecRequest",
  is(o: any): o is QueryAllSpecRequest {
    return o && o.$typeUrl === QueryAllSpecRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllSpecRequestSDKType {
    return o && o.$typeUrl === QueryAllSpecRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllSpecRequestAmino {
    return o && o.$typeUrl === QueryAllSpecRequest.typeUrl;
  },
  encode(message: QueryAllSpecRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSpecRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSpecRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllSpecRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllSpecRequest): JsonSafe<QueryAllSpecRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllSpecRequest>, I>>(object: I): QueryAllSpecRequest {
    const message = createBaseQueryAllSpecRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSpecRequestAmino): QueryAllSpecRequest {
    const message = createBaseQueryAllSpecRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSpecRequest): QueryAllSpecRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSpecRequestAminoMsg): QueryAllSpecRequest {
    return QueryAllSpecRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSpecRequestProtoMsg): QueryAllSpecRequest {
    return QueryAllSpecRequest.decode(message.value);
  },
  toProto(message: QueryAllSpecRequest): Uint8Array {
    return QueryAllSpecRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSpecRequest): QueryAllSpecRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryAllSpecRequest",
      value: QueryAllSpecRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllSpecRequest.typeUrl, QueryAllSpecRequest);
function createBaseQueryAllSpecResponse(): QueryAllSpecResponse {
  return {
    spec: [],
    pagination: undefined
  };
}
export const QueryAllSpecResponse = {
  typeUrl: "/lavanet.lava.spec.QueryAllSpecResponse",
  is(o: any): o is QueryAllSpecResponse {
    return o && (o.$typeUrl === QueryAllSpecResponse.typeUrl || Array.isArray(o.spec) && (!o.spec.length || Spec.is(o.spec[0])));
  },
  isSDK(o: any): o is QueryAllSpecResponseSDKType {
    return o && (o.$typeUrl === QueryAllSpecResponse.typeUrl || Array.isArray(o.Spec) && (!o.Spec.length || Spec.isSDK(o.Spec[0])));
  },
  isAmino(o: any): o is QueryAllSpecResponseAmino {
    return o && (o.$typeUrl === QueryAllSpecResponse.typeUrl || Array.isArray(o.Spec) && (!o.Spec.length || Spec.isAmino(o.Spec[0])));
  },
  encode(message: QueryAllSpecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.spec) {
      Spec.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSpecResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSpecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spec.push(Spec.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllSpecResponse {
    return {
      spec: Array.isArray(object?.spec) ? object.spec.map((e: any) => Spec.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllSpecResponse): JsonSafe<QueryAllSpecResponse> {
    const obj: any = {};
    if (message.spec) {
      obj.spec = message.spec.map(e => e ? Spec.toJSON(e) : undefined);
    } else {
      obj.spec = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllSpecResponse>, I>>(object: I): QueryAllSpecResponse {
    const message = createBaseQueryAllSpecResponse();
    message.spec = object.spec?.map(e => Spec.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSpecResponseAmino): QueryAllSpecResponse {
    const message = createBaseQueryAllSpecResponse();
    message.spec = object.Spec?.map(e => Spec.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSpecResponse): QueryAllSpecResponseAmino {
    const obj: any = {};
    if (message.spec) {
      obj.Spec = message.spec.map(e => e ? Spec.toAmino(e) : undefined);
    } else {
      obj.Spec = message.spec;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSpecResponseAminoMsg): QueryAllSpecResponse {
    return QueryAllSpecResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSpecResponseProtoMsg): QueryAllSpecResponse {
    return QueryAllSpecResponse.decode(message.value);
  },
  toProto(message: QueryAllSpecResponse): Uint8Array {
    return QueryAllSpecResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSpecResponse): QueryAllSpecResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryAllSpecResponse",
      value: QueryAllSpecResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllSpecResponse.typeUrl, QueryAllSpecResponse);
function createBaseQueryShowAllChainsRequest(): QueryShowAllChainsRequest {
  return {};
}
export const QueryShowAllChainsRequest = {
  typeUrl: "/lavanet.lava.spec.QueryShowAllChainsRequest",
  is(o: any): o is QueryShowAllChainsRequest {
    return o && o.$typeUrl === QueryShowAllChainsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryShowAllChainsRequestSDKType {
    return o && o.$typeUrl === QueryShowAllChainsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryShowAllChainsRequestAmino {
    return o && o.$typeUrl === QueryShowAllChainsRequest.typeUrl;
  },
  encode(_: QueryShowAllChainsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowAllChainsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowAllChainsRequest();
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
  fromJSON(_: any): QueryShowAllChainsRequest {
    return {};
  },
  toJSON(_: QueryShowAllChainsRequest): JsonSafe<QueryShowAllChainsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryShowAllChainsRequest>, I>>(_: I): QueryShowAllChainsRequest {
    const message = createBaseQueryShowAllChainsRequest();
    return message;
  },
  fromAmino(_: QueryShowAllChainsRequestAmino): QueryShowAllChainsRequest {
    const message = createBaseQueryShowAllChainsRequest();
    return message;
  },
  toAmino(_: QueryShowAllChainsRequest): QueryShowAllChainsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryShowAllChainsRequestAminoMsg): QueryShowAllChainsRequest {
    return QueryShowAllChainsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowAllChainsRequestProtoMsg): QueryShowAllChainsRequest {
    return QueryShowAllChainsRequest.decode(message.value);
  },
  toProto(message: QueryShowAllChainsRequest): Uint8Array {
    return QueryShowAllChainsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowAllChainsRequest): QueryShowAllChainsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowAllChainsRequest",
      value: QueryShowAllChainsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryShowAllChainsRequest.typeUrl, QueryShowAllChainsRequest);
function createBaseQueryShowAllChainsResponse(): QueryShowAllChainsResponse {
  return {
    chainInfoList: []
  };
}
export const QueryShowAllChainsResponse = {
  typeUrl: "/lavanet.lava.spec.QueryShowAllChainsResponse",
  is(o: any): o is QueryShowAllChainsResponse {
    return o && (o.$typeUrl === QueryShowAllChainsResponse.typeUrl || Array.isArray(o.chainInfoList) && (!o.chainInfoList.length || ShowAllChainsInfoStruct.is(o.chainInfoList[0])));
  },
  isSDK(o: any): o is QueryShowAllChainsResponseSDKType {
    return o && (o.$typeUrl === QueryShowAllChainsResponse.typeUrl || Array.isArray(o.chainInfoList) && (!o.chainInfoList.length || ShowAllChainsInfoStruct.isSDK(o.chainInfoList[0])));
  },
  isAmino(o: any): o is QueryShowAllChainsResponseAmino {
    return o && (o.$typeUrl === QueryShowAllChainsResponse.typeUrl || Array.isArray(o.chainInfoList) && (!o.chainInfoList.length || ShowAllChainsInfoStruct.isAmino(o.chainInfoList[0])));
  },
  encode(message: QueryShowAllChainsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.chainInfoList) {
      ShowAllChainsInfoStruct.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowAllChainsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowAllChainsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.chainInfoList.push(ShowAllChainsInfoStruct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryShowAllChainsResponse {
    return {
      chainInfoList: Array.isArray(object?.chainInfoList) ? object.chainInfoList.map((e: any) => ShowAllChainsInfoStruct.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryShowAllChainsResponse): JsonSafe<QueryShowAllChainsResponse> {
    const obj: any = {};
    if (message.chainInfoList) {
      obj.chainInfoList = message.chainInfoList.map(e => e ? ShowAllChainsInfoStruct.toJSON(e) : undefined);
    } else {
      obj.chainInfoList = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryShowAllChainsResponse>, I>>(object: I): QueryShowAllChainsResponse {
    const message = createBaseQueryShowAllChainsResponse();
    message.chainInfoList = object.chainInfoList?.map(e => ShowAllChainsInfoStruct.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryShowAllChainsResponseAmino): QueryShowAllChainsResponse {
    const message = createBaseQueryShowAllChainsResponse();
    message.chainInfoList = object.chainInfoList?.map(e => ShowAllChainsInfoStruct.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryShowAllChainsResponse): QueryShowAllChainsResponseAmino {
    const obj: any = {};
    if (message.chainInfoList) {
      obj.chainInfoList = message.chainInfoList.map(e => e ? ShowAllChainsInfoStruct.toAmino(e) : undefined);
    } else {
      obj.chainInfoList = message.chainInfoList;
    }
    return obj;
  },
  fromAminoMsg(object: QueryShowAllChainsResponseAminoMsg): QueryShowAllChainsResponse {
    return QueryShowAllChainsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowAllChainsResponseProtoMsg): QueryShowAllChainsResponse {
    return QueryShowAllChainsResponse.decode(message.value);
  },
  toProto(message: QueryShowAllChainsResponse): Uint8Array {
    return QueryShowAllChainsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowAllChainsResponse): QueryShowAllChainsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowAllChainsResponse",
      value: QueryShowAllChainsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryShowAllChainsResponse.typeUrl, QueryShowAllChainsResponse);
function createBaseShowAllChainsInfoStruct(): ShowAllChainsInfoStruct {
  return {
    chainName: "",
    chainID: "",
    enabledApiInterfaces: [],
    apiCount: BigInt(0)
  };
}
export const ShowAllChainsInfoStruct = {
  typeUrl: "/lavanet.lava.spec.ShowAllChainsInfoStruct",
  is(o: any): o is ShowAllChainsInfoStruct {
    return o && (o.$typeUrl === ShowAllChainsInfoStruct.typeUrl || typeof o.chainName === "string" && typeof o.chainID === "string" && Array.isArray(o.enabledApiInterfaces) && (!o.enabledApiInterfaces.length || typeof o.enabledApiInterfaces[0] === "string") && typeof o.apiCount === "bigint");
  },
  isSDK(o: any): o is ShowAllChainsInfoStructSDKType {
    return o && (o.$typeUrl === ShowAllChainsInfoStruct.typeUrl || typeof o.chainName === "string" && typeof o.chainID === "string" && Array.isArray(o.enabledApiInterfaces) && (!o.enabledApiInterfaces.length || typeof o.enabledApiInterfaces[0] === "string") && typeof o.api_count === "bigint");
  },
  isAmino(o: any): o is ShowAllChainsInfoStructAmino {
    return o && (o.$typeUrl === ShowAllChainsInfoStruct.typeUrl || typeof o.chainName === "string" && typeof o.chainID === "string" && Array.isArray(o.enabledApiInterfaces) && (!o.enabledApiInterfaces.length || typeof o.enabledApiInterfaces[0] === "string") && typeof o.api_count === "bigint");
  },
  encode(message: ShowAllChainsInfoStruct, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    for (const v of message.enabledApiInterfaces) {
      writer.uint32(26).string(v!);
    }
    if (message.apiCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.apiCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ShowAllChainsInfoStruct {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShowAllChainsInfoStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.enabledApiInterfaces.push(reader.string());
          break;
        case 4:
          message.apiCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ShowAllChainsInfoStruct {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      enabledApiInterfaces: Array.isArray(object?.enabledApiInterfaces) ? object.enabledApiInterfaces.map((e: any) => String(e)) : [],
      apiCount: isSet(object.apiCount) ? BigInt(object.apiCount.toString()) : BigInt(0)
    };
  },
  toJSON(message: ShowAllChainsInfoStruct): JsonSafe<ShowAllChainsInfoStruct> {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    if (message.enabledApiInterfaces) {
      obj.enabledApiInterfaces = message.enabledApiInterfaces.map(e => e);
    } else {
      obj.enabledApiInterfaces = [];
    }
    message.apiCount !== undefined && (obj.apiCount = (message.apiCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ShowAllChainsInfoStruct>, I>>(object: I): ShowAllChainsInfoStruct {
    const message = createBaseShowAllChainsInfoStruct();
    message.chainName = object.chainName ?? "";
    message.chainID = object.chainID ?? "";
    message.enabledApiInterfaces = object.enabledApiInterfaces?.map(e => e) || [];
    message.apiCount = object.apiCount !== undefined && object.apiCount !== null ? BigInt(object.apiCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ShowAllChainsInfoStructAmino): ShowAllChainsInfoStruct {
    const message = createBaseShowAllChainsInfoStruct();
    if (object.chainName !== undefined && object.chainName !== null) {
      message.chainName = object.chainName;
    }
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID;
    }
    message.enabledApiInterfaces = object.enabledApiInterfaces?.map(e => e) || [];
    if (object.api_count !== undefined && object.api_count !== null) {
      message.apiCount = BigInt(object.api_count);
    }
    return message;
  },
  toAmino(message: ShowAllChainsInfoStruct): ShowAllChainsInfoStructAmino {
    const obj: any = {};
    obj.chainName = message.chainName === "" ? undefined : message.chainName;
    obj.chainID = message.chainID === "" ? undefined : message.chainID;
    if (message.enabledApiInterfaces) {
      obj.enabledApiInterfaces = message.enabledApiInterfaces.map(e => e);
    } else {
      obj.enabledApiInterfaces = message.enabledApiInterfaces;
    }
    obj.api_count = message.apiCount !== BigInt(0) ? (message.apiCount?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ShowAllChainsInfoStructAminoMsg): ShowAllChainsInfoStruct {
    return ShowAllChainsInfoStruct.fromAmino(object.value);
  },
  fromProtoMsg(message: ShowAllChainsInfoStructProtoMsg): ShowAllChainsInfoStruct {
    return ShowAllChainsInfoStruct.decode(message.value);
  },
  toProto(message: ShowAllChainsInfoStruct): Uint8Array {
    return ShowAllChainsInfoStruct.encode(message).finish();
  },
  toProtoMsg(message: ShowAllChainsInfoStruct): ShowAllChainsInfoStructProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.ShowAllChainsInfoStruct",
      value: ShowAllChainsInfoStruct.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ShowAllChainsInfoStruct.typeUrl, ShowAllChainsInfoStruct);
function createBaseQueryShowChainInfoRequest(): QueryShowChainInfoRequest {
  return {
    chainName: ""
  };
}
export const QueryShowChainInfoRequest = {
  typeUrl: "/lavanet.lava.spec.QueryShowChainInfoRequest",
  is(o: any): o is QueryShowChainInfoRequest {
    return o && (o.$typeUrl === QueryShowChainInfoRequest.typeUrl || typeof o.chainName === "string");
  },
  isSDK(o: any): o is QueryShowChainInfoRequestSDKType {
    return o && (o.$typeUrl === QueryShowChainInfoRequest.typeUrl || typeof o.chainName === "string");
  },
  isAmino(o: any): o is QueryShowChainInfoRequestAmino {
    return o && (o.$typeUrl === QueryShowChainInfoRequest.typeUrl || typeof o.chainName === "string");
  },
  encode(message: QueryShowChainInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowChainInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowChainInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryShowChainInfoRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : ""
    };
  },
  toJSON(message: QueryShowChainInfoRequest): JsonSafe<QueryShowChainInfoRequest> {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryShowChainInfoRequest>, I>>(object: I): QueryShowChainInfoRequest {
    const message = createBaseQueryShowChainInfoRequest();
    message.chainName = object.chainName ?? "";
    return message;
  },
  fromAmino(object: QueryShowChainInfoRequestAmino): QueryShowChainInfoRequest {
    const message = createBaseQueryShowChainInfoRequest();
    if (object.chainName !== undefined && object.chainName !== null) {
      message.chainName = object.chainName;
    }
    return message;
  },
  toAmino(message: QueryShowChainInfoRequest): QueryShowChainInfoRequestAmino {
    const obj: any = {};
    obj.chainName = message.chainName === "" ? undefined : message.chainName;
    return obj;
  },
  fromAminoMsg(object: QueryShowChainInfoRequestAminoMsg): QueryShowChainInfoRequest {
    return QueryShowChainInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowChainInfoRequestProtoMsg): QueryShowChainInfoRequest {
    return QueryShowChainInfoRequest.decode(message.value);
  },
  toProto(message: QueryShowChainInfoRequest): Uint8Array {
    return QueryShowChainInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowChainInfoRequest): QueryShowChainInfoRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowChainInfoRequest",
      value: QueryShowChainInfoRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryShowChainInfoRequest.typeUrl, QueryShowChainInfoRequest);
function createBaseApiList(): ApiList {
  return {
    interface: "",
    supportedApis: [],
    addon: ""
  };
}
export const ApiList = {
  typeUrl: "/lavanet.lava.spec.ApiList",
  is(o: any): o is ApiList {
    return o && (o.$typeUrl === ApiList.typeUrl || typeof o.interface === "string" && Array.isArray(o.supportedApis) && (!o.supportedApis.length || typeof o.supportedApis[0] === "string") && typeof o.addon === "string");
  },
  isSDK(o: any): o is ApiListSDKType {
    return o && (o.$typeUrl === ApiList.typeUrl || typeof o.interface === "string" && Array.isArray(o.supportedApis) && (!o.supportedApis.length || typeof o.supportedApis[0] === "string") && typeof o.addon === "string");
  },
  isAmino(o: any): o is ApiListAmino {
    return o && (o.$typeUrl === ApiList.typeUrl || typeof o.interface === "string" && Array.isArray(o.supportedApis) && (!o.supportedApis.length || typeof o.supportedApis[0] === "string") && typeof o.addon === "string");
  },
  encode(message: ApiList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interface !== "") {
      writer.uint32(34).string(message.interface);
    }
    for (const v of message.supportedApis) {
      writer.uint32(42).string(v!);
    }
    if (message.addon !== "") {
      writer.uint32(50).string(message.addon);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ApiList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.interface = reader.string();
          break;
        case 5:
          message.supportedApis.push(reader.string());
          break;
        case 6:
          message.addon = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ApiList {
    return {
      interface: isSet(object.interface) ? String(object.interface) : "",
      supportedApis: Array.isArray(object?.supportedApis) ? object.supportedApis.map((e: any) => String(e)) : [],
      addon: isSet(object.addon) ? String(object.addon) : ""
    };
  },
  toJSON(message: ApiList): JsonSafe<ApiList> {
    const obj: any = {};
    message.interface !== undefined && (obj.interface = message.interface);
    if (message.supportedApis) {
      obj.supportedApis = message.supportedApis.map(e => e);
    } else {
      obj.supportedApis = [];
    }
    message.addon !== undefined && (obj.addon = message.addon);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ApiList>, I>>(object: I): ApiList {
    const message = createBaseApiList();
    message.interface = object.interface ?? "";
    message.supportedApis = object.supportedApis?.map(e => e) || [];
    message.addon = object.addon ?? "";
    return message;
  },
  fromAmino(object: ApiListAmino): ApiList {
    const message = createBaseApiList();
    if (object.interface !== undefined && object.interface !== null) {
      message.interface = object.interface;
    }
    message.supportedApis = object.supportedApis?.map(e => e) || [];
    if (object.addon !== undefined && object.addon !== null) {
      message.addon = object.addon;
    }
    return message;
  },
  toAmino(message: ApiList): ApiListAmino {
    const obj: any = {};
    obj.interface = message.interface === "" ? undefined : message.interface;
    if (message.supportedApis) {
      obj.supportedApis = message.supportedApis.map(e => e);
    } else {
      obj.supportedApis = message.supportedApis;
    }
    obj.addon = message.addon === "" ? undefined : message.addon;
    return obj;
  },
  fromAminoMsg(object: ApiListAminoMsg): ApiList {
    return ApiList.fromAmino(object.value);
  },
  fromProtoMsg(message: ApiListProtoMsg): ApiList {
    return ApiList.decode(message.value);
  },
  toProto(message: ApiList): Uint8Array {
    return ApiList.encode(message).finish();
  },
  toProtoMsg(message: ApiList): ApiListProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.ApiList",
      value: ApiList.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ApiList.typeUrl, ApiList);
function createBaseQueryShowChainInfoResponse(): QueryShowChainInfoResponse {
  return {
    chainID: "",
    interfaces: [],
    supportedApisInterfaceList: [],
    optionalInterfaces: []
  };
}
export const QueryShowChainInfoResponse = {
  typeUrl: "/lavanet.lava.spec.QueryShowChainInfoResponse",
  is(o: any): o is QueryShowChainInfoResponse {
    return o && (o.$typeUrl === QueryShowChainInfoResponse.typeUrl || typeof o.chainID === "string" && Array.isArray(o.interfaces) && (!o.interfaces.length || typeof o.interfaces[0] === "string") && Array.isArray(o.supportedApisInterfaceList) && (!o.supportedApisInterfaceList.length || ApiList.is(o.supportedApisInterfaceList[0])) && Array.isArray(o.optionalInterfaces) && (!o.optionalInterfaces.length || typeof o.optionalInterfaces[0] === "string"));
  },
  isSDK(o: any): o is QueryShowChainInfoResponseSDKType {
    return o && (o.$typeUrl === QueryShowChainInfoResponse.typeUrl || typeof o.chainID === "string" && Array.isArray(o.interfaces) && (!o.interfaces.length || typeof o.interfaces[0] === "string") && Array.isArray(o.supportedApisInterfaceList) && (!o.supportedApisInterfaceList.length || ApiList.isSDK(o.supportedApisInterfaceList[0])) && Array.isArray(o.optional_interfaces) && (!o.optional_interfaces.length || typeof o.optional_interfaces[0] === "string"));
  },
  isAmino(o: any): o is QueryShowChainInfoResponseAmino {
    return o && (o.$typeUrl === QueryShowChainInfoResponse.typeUrl || typeof o.chainID === "string" && Array.isArray(o.interfaces) && (!o.interfaces.length || typeof o.interfaces[0] === "string") && Array.isArray(o.supportedApisInterfaceList) && (!o.supportedApisInterfaceList.length || ApiList.isAmino(o.supportedApisInterfaceList[0])) && Array.isArray(o.optional_interfaces) && (!o.optional_interfaces.length || typeof o.optional_interfaces[0] === "string"));
  },
  encode(message: QueryShowChainInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    for (const v of message.interfaces) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.supportedApisInterfaceList) {
      ApiList.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.optionalInterfaces) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowChainInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowChainInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.interfaces.push(reader.string());
          break;
        case 3:
          message.supportedApisInterfaceList.push(ApiList.decode(reader, reader.uint32()));
          break;
        case 4:
          message.optionalInterfaces.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryShowChainInfoResponse {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      interfaces: Array.isArray(object?.interfaces) ? object.interfaces.map((e: any) => String(e)) : [],
      supportedApisInterfaceList: Array.isArray(object?.supportedApisInterfaceList) ? object.supportedApisInterfaceList.map((e: any) => ApiList.fromJSON(e)) : [],
      optionalInterfaces: Array.isArray(object?.optionalInterfaces) ? object.optionalInterfaces.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: QueryShowChainInfoResponse): JsonSafe<QueryShowChainInfoResponse> {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map(e => e);
    } else {
      obj.interfaces = [];
    }
    if (message.supportedApisInterfaceList) {
      obj.supportedApisInterfaceList = message.supportedApisInterfaceList.map(e => e ? ApiList.toJSON(e) : undefined);
    } else {
      obj.supportedApisInterfaceList = [];
    }
    if (message.optionalInterfaces) {
      obj.optionalInterfaces = message.optionalInterfaces.map(e => e);
    } else {
      obj.optionalInterfaces = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryShowChainInfoResponse>, I>>(object: I): QueryShowChainInfoResponse {
    const message = createBaseQueryShowChainInfoResponse();
    message.chainID = object.chainID ?? "";
    message.interfaces = object.interfaces?.map(e => e) || [];
    message.supportedApisInterfaceList = object.supportedApisInterfaceList?.map(e => ApiList.fromPartial(e)) || [];
    message.optionalInterfaces = object.optionalInterfaces?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryShowChainInfoResponseAmino): QueryShowChainInfoResponse {
    const message = createBaseQueryShowChainInfoResponse();
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID;
    }
    message.interfaces = object.interfaces?.map(e => e) || [];
    message.supportedApisInterfaceList = object.supportedApisInterfaceList?.map(e => ApiList.fromAmino(e)) || [];
    message.optionalInterfaces = object.optional_interfaces?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryShowChainInfoResponse): QueryShowChainInfoResponseAmino {
    const obj: any = {};
    obj.chainID = message.chainID === "" ? undefined : message.chainID;
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map(e => e);
    } else {
      obj.interfaces = message.interfaces;
    }
    if (message.supportedApisInterfaceList) {
      obj.supportedApisInterfaceList = message.supportedApisInterfaceList.map(e => e ? ApiList.toAmino(e) : undefined);
    } else {
      obj.supportedApisInterfaceList = message.supportedApisInterfaceList;
    }
    if (message.optionalInterfaces) {
      obj.optional_interfaces = message.optionalInterfaces.map(e => e);
    } else {
      obj.optional_interfaces = message.optionalInterfaces;
    }
    return obj;
  },
  fromAminoMsg(object: QueryShowChainInfoResponseAminoMsg): QueryShowChainInfoResponse {
    return QueryShowChainInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowChainInfoResponseProtoMsg): QueryShowChainInfoResponse {
    return QueryShowChainInfoResponse.decode(message.value);
  },
  toProto(message: QueryShowChainInfoResponse): Uint8Array {
    return QueryShowChainInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowChainInfoResponse): QueryShowChainInfoResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.QueryShowChainInfoResponse",
      value: QueryShowChainInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryShowChainInfoResponse.typeUrl, QueryShowChainInfoResponse);