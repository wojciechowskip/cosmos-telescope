//@ts-nocheck
import { Entry, EntryAmino, EntrySDKType } from "./fixation";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryAllIndicesRequest {
  storeKey: string;
  prefix: string;
}
export interface QueryAllIndicesRequestProtoMsg {
  typeUrl: "/lavanet.lava.fixationstore.QueryAllIndicesRequest";
  value: Uint8Array;
}
export interface QueryAllIndicesRequestAmino {
  store_key?: string;
  prefix?: string;
}
export interface QueryAllIndicesRequestAminoMsg {
  type: "/lavanet.lava.fixationstore.QueryAllIndicesRequest";
  value: QueryAllIndicesRequestAmino;
}
export interface QueryAllIndicesRequestSDKType {
  store_key: string;
  prefix: string;
}
export interface QueryAllIndicesResponse {
  indices: string[];
}
export interface QueryAllIndicesResponseProtoMsg {
  typeUrl: "/lavanet.lava.fixationstore.QueryAllIndicesResponse";
  value: Uint8Array;
}
export interface QueryAllIndicesResponseAmino {
  indices?: string[];
}
export interface QueryAllIndicesResponseAminoMsg {
  type: "/lavanet.lava.fixationstore.QueryAllIndicesResponse";
  value: QueryAllIndicesResponseAmino;
}
export interface QueryAllIndicesResponseSDKType {
  indices: string[];
}
export interface QueryStoreKeysRequest {}
export interface QueryStoreKeysRequestProtoMsg {
  typeUrl: "/lavanet.lava.fixationstore.QueryStoreKeysRequest";
  value: Uint8Array;
}
export interface QueryStoreKeysRequestAmino {}
export interface QueryStoreKeysRequestAminoMsg {
  type: "/lavanet.lava.fixationstore.QueryStoreKeysRequest";
  value: QueryStoreKeysRequestAmino;
}
export interface QueryStoreKeysRequestSDKType {}
export interface StoreKeyAndPrefix {
  storeKey: string;
  prefix: string;
}
export interface StoreKeyAndPrefixProtoMsg {
  typeUrl: "/lavanet.lava.fixationstore.StoreKeyAndPrefix";
  value: Uint8Array;
}
export interface StoreKeyAndPrefixAmino {
  store_key?: string;
  prefix?: string;
}
export interface StoreKeyAndPrefixAminoMsg {
  type: "/lavanet.lava.fixationstore.StoreKeyAndPrefix";
  value: StoreKeyAndPrefixAmino;
}
export interface StoreKeyAndPrefixSDKType {
  store_key: string;
  prefix: string;
}
export interface QueryStoreKeysResponse {
  keys: StoreKeyAndPrefix[];
}
export interface QueryStoreKeysResponseProtoMsg {
  typeUrl: "/lavanet.lava.fixationstore.QueryStoreKeysResponse";
  value: Uint8Array;
}
export interface QueryStoreKeysResponseAmino {
  keys?: StoreKeyAndPrefixAmino[];
}
export interface QueryStoreKeysResponseAminoMsg {
  type: "/lavanet.lava.fixationstore.QueryStoreKeysResponse";
  value: QueryStoreKeysResponseAmino;
}
export interface QueryStoreKeysResponseSDKType {
  keys: StoreKeyAndPrefixSDKType[];
}
export interface QueryVersionsRequest {
  storeKey: string;
  prefix: string;
  key: string;
}
export interface QueryVersionsRequestProtoMsg {
  typeUrl: "/lavanet.lava.fixationstore.QueryVersionsRequest";
  value: Uint8Array;
}
export interface QueryVersionsRequestAmino {
  store_key?: string;
  prefix?: string;
  key?: string;
}
export interface QueryVersionsRequestAminoMsg {
  type: "/lavanet.lava.fixationstore.QueryVersionsRequest";
  value: QueryVersionsRequestAmino;
}
export interface QueryVersionsRequestSDKType {
  store_key: string;
  prefix: string;
  key: string;
}
export interface QueryVersionsResponse {
  entries: Entry[];
}
export interface QueryVersionsResponseProtoMsg {
  typeUrl: "/lavanet.lava.fixationstore.QueryVersionsResponse";
  value: Uint8Array;
}
export interface QueryVersionsResponseAmino {
  entries?: EntryAmino[];
}
export interface QueryVersionsResponseAminoMsg {
  type: "/lavanet.lava.fixationstore.QueryVersionsResponse";
  value: QueryVersionsResponseAmino;
}
export interface QueryVersionsResponseSDKType {
  entries: EntrySDKType[];
}
export interface QueryEntryRequest {
  storeKey: string;
  prefix: string;
  key: string;
  block: bigint;
  hideData: boolean;
  stringData: boolean;
}
export interface QueryEntryRequestProtoMsg {
  typeUrl: "/lavanet.lava.fixationstore.QueryEntryRequest";
  value: Uint8Array;
}
export interface QueryEntryRequestAmino {
  store_key?: string;
  prefix?: string;
  key?: string;
  block?: string;
  hide_data?: boolean;
  string_data?: boolean;
}
export interface QueryEntryRequestAminoMsg {
  type: "/lavanet.lava.fixationstore.QueryEntryRequest";
  value: QueryEntryRequestAmino;
}
export interface QueryEntryRequestSDKType {
  store_key: string;
  prefix: string;
  key: string;
  block: bigint;
  hide_data: boolean;
  string_data: boolean;
}
export interface QueryEntryResponse {
  entry?: Entry;
  /** optional: entry data as a string */
  stringData: string;
}
export interface QueryEntryResponseProtoMsg {
  typeUrl: "/lavanet.lava.fixationstore.QueryEntryResponse";
  value: Uint8Array;
}
export interface QueryEntryResponseAmino {
  entry?: EntryAmino;
  /** optional: entry data as a string */
  string_data?: string;
}
export interface QueryEntryResponseAminoMsg {
  type: "/lavanet.lava.fixationstore.QueryEntryResponse";
  value: QueryEntryResponseAmino;
}
export interface QueryEntryResponseSDKType {
  entry?: EntrySDKType;
  string_data: string;
}
function createBaseQueryAllIndicesRequest(): QueryAllIndicesRequest {
  return {
    storeKey: "",
    prefix: ""
  };
}
export const QueryAllIndicesRequest = {
  typeUrl: "/lavanet.lava.fixationstore.QueryAllIndicesRequest",
  is(o: any): o is QueryAllIndicesRequest {
    return o && (o.$typeUrl === QueryAllIndicesRequest.typeUrl || typeof o.storeKey === "string" && typeof o.prefix === "string");
  },
  isSDK(o: any): o is QueryAllIndicesRequestSDKType {
    return o && (o.$typeUrl === QueryAllIndicesRequest.typeUrl || typeof o.store_key === "string" && typeof o.prefix === "string");
  },
  isAmino(o: any): o is QueryAllIndicesRequestAmino {
    return o && (o.$typeUrl === QueryAllIndicesRequest.typeUrl || typeof o.store_key === "string" && typeof o.prefix === "string");
  },
  encode(message: QueryAllIndicesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storeKey !== "") {
      writer.uint32(10).string(message.storeKey);
    }
    if (message.prefix !== "") {
      writer.uint32(18).string(message.prefix);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllIndicesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllIndicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeKey = reader.string();
          break;
        case 2:
          message.prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllIndicesRequest {
    return {
      storeKey: isSet(object.storeKey) ? String(object.storeKey) : "",
      prefix: isSet(object.prefix) ? String(object.prefix) : ""
    };
  },
  toJSON(message: QueryAllIndicesRequest): JsonSafe<QueryAllIndicesRequest> {
    const obj: any = {};
    message.storeKey !== undefined && (obj.storeKey = message.storeKey);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    return obj;
  },
  fromPartial(object: Partial<QueryAllIndicesRequest>): QueryAllIndicesRequest {
    const message = createBaseQueryAllIndicesRequest();
    message.storeKey = object.storeKey ?? "";
    message.prefix = object.prefix ?? "";
    return message;
  },
  fromAmino(object: QueryAllIndicesRequestAmino): QueryAllIndicesRequest {
    const message = createBaseQueryAllIndicesRequest();
    if (object.store_key !== undefined && object.store_key !== null) {
      message.storeKey = object.store_key;
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    }
    return message;
  },
  toAmino(message: QueryAllIndicesRequest): QueryAllIndicesRequestAmino {
    const obj: any = {};
    obj.store_key = message.storeKey === "" ? undefined : message.storeKey;
    obj.prefix = message.prefix === "" ? undefined : message.prefix;
    return obj;
  },
  fromAminoMsg(object: QueryAllIndicesRequestAminoMsg): QueryAllIndicesRequest {
    return QueryAllIndicesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllIndicesRequestProtoMsg): QueryAllIndicesRequest {
    return QueryAllIndicesRequest.decode(message.value);
  },
  toProto(message: QueryAllIndicesRequest): Uint8Array {
    return QueryAllIndicesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllIndicesRequest): QueryAllIndicesRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.fixationstore.QueryAllIndicesRequest",
      value: QueryAllIndicesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllIndicesRequest.typeUrl, QueryAllIndicesRequest);
function createBaseQueryAllIndicesResponse(): QueryAllIndicesResponse {
  return {
    indices: []
  };
}
export const QueryAllIndicesResponse = {
  typeUrl: "/lavanet.lava.fixationstore.QueryAllIndicesResponse",
  is(o: any): o is QueryAllIndicesResponse {
    return o && (o.$typeUrl === QueryAllIndicesResponse.typeUrl || Array.isArray(o.indices) && (!o.indices.length || typeof o.indices[0] === "string"));
  },
  isSDK(o: any): o is QueryAllIndicesResponseSDKType {
    return o && (o.$typeUrl === QueryAllIndicesResponse.typeUrl || Array.isArray(o.indices) && (!o.indices.length || typeof o.indices[0] === "string"));
  },
  isAmino(o: any): o is QueryAllIndicesResponseAmino {
    return o && (o.$typeUrl === QueryAllIndicesResponse.typeUrl || Array.isArray(o.indices) && (!o.indices.length || typeof o.indices[0] === "string"));
  },
  encode(message: QueryAllIndicesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.indices) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllIndicesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllIndicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.indices.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllIndicesResponse {
    return {
      indices: Array.isArray(object?.indices) ? object.indices.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: QueryAllIndicesResponse): JsonSafe<QueryAllIndicesResponse> {
    const obj: any = {};
    if (message.indices) {
      obj.indices = message.indices.map(e => e);
    } else {
      obj.indices = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAllIndicesResponse>): QueryAllIndicesResponse {
    const message = createBaseQueryAllIndicesResponse();
    message.indices = object.indices?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryAllIndicesResponseAmino): QueryAllIndicesResponse {
    const message = createBaseQueryAllIndicesResponse();
    message.indices = object.indices?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryAllIndicesResponse): QueryAllIndicesResponseAmino {
    const obj: any = {};
    if (message.indices) {
      obj.indices = message.indices.map(e => e);
    } else {
      obj.indices = message.indices;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllIndicesResponseAminoMsg): QueryAllIndicesResponse {
    return QueryAllIndicesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllIndicesResponseProtoMsg): QueryAllIndicesResponse {
    return QueryAllIndicesResponse.decode(message.value);
  },
  toProto(message: QueryAllIndicesResponse): Uint8Array {
    return QueryAllIndicesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllIndicesResponse): QueryAllIndicesResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.fixationstore.QueryAllIndicesResponse",
      value: QueryAllIndicesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllIndicesResponse.typeUrl, QueryAllIndicesResponse);
function createBaseQueryStoreKeysRequest(): QueryStoreKeysRequest {
  return {};
}
export const QueryStoreKeysRequest = {
  typeUrl: "/lavanet.lava.fixationstore.QueryStoreKeysRequest",
  is(o: any): o is QueryStoreKeysRequest {
    return o && o.$typeUrl === QueryStoreKeysRequest.typeUrl;
  },
  isSDK(o: any): o is QueryStoreKeysRequestSDKType {
    return o && o.$typeUrl === QueryStoreKeysRequest.typeUrl;
  },
  isAmino(o: any): o is QueryStoreKeysRequestAmino {
    return o && o.$typeUrl === QueryStoreKeysRequest.typeUrl;
  },
  encode(_: QueryStoreKeysRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStoreKeysRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStoreKeysRequest();
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
  fromJSON(_: any): QueryStoreKeysRequest {
    return {};
  },
  toJSON(_: QueryStoreKeysRequest): JsonSafe<QueryStoreKeysRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryStoreKeysRequest>): QueryStoreKeysRequest {
    const message = createBaseQueryStoreKeysRequest();
    return message;
  },
  fromAmino(_: QueryStoreKeysRequestAmino): QueryStoreKeysRequest {
    const message = createBaseQueryStoreKeysRequest();
    return message;
  },
  toAmino(_: QueryStoreKeysRequest): QueryStoreKeysRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryStoreKeysRequestAminoMsg): QueryStoreKeysRequest {
    return QueryStoreKeysRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStoreKeysRequestProtoMsg): QueryStoreKeysRequest {
    return QueryStoreKeysRequest.decode(message.value);
  },
  toProto(message: QueryStoreKeysRequest): Uint8Array {
    return QueryStoreKeysRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStoreKeysRequest): QueryStoreKeysRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.fixationstore.QueryStoreKeysRequest",
      value: QueryStoreKeysRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStoreKeysRequest.typeUrl, QueryStoreKeysRequest);
function createBaseStoreKeyAndPrefix(): StoreKeyAndPrefix {
  return {
    storeKey: "",
    prefix: ""
  };
}
export const StoreKeyAndPrefix = {
  typeUrl: "/lavanet.lava.fixationstore.StoreKeyAndPrefix",
  is(o: any): o is StoreKeyAndPrefix {
    return o && (o.$typeUrl === StoreKeyAndPrefix.typeUrl || typeof o.storeKey === "string" && typeof o.prefix === "string");
  },
  isSDK(o: any): o is StoreKeyAndPrefixSDKType {
    return o && (o.$typeUrl === StoreKeyAndPrefix.typeUrl || typeof o.store_key === "string" && typeof o.prefix === "string");
  },
  isAmino(o: any): o is StoreKeyAndPrefixAmino {
    return o && (o.$typeUrl === StoreKeyAndPrefix.typeUrl || typeof o.store_key === "string" && typeof o.prefix === "string");
  },
  encode(message: StoreKeyAndPrefix, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storeKey !== "") {
      writer.uint32(10).string(message.storeKey);
    }
    if (message.prefix !== "") {
      writer.uint32(18).string(message.prefix);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreKeyAndPrefix {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKeyAndPrefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeKey = reader.string();
          break;
        case 2:
          message.prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreKeyAndPrefix {
    return {
      storeKey: isSet(object.storeKey) ? String(object.storeKey) : "",
      prefix: isSet(object.prefix) ? String(object.prefix) : ""
    };
  },
  toJSON(message: StoreKeyAndPrefix): JsonSafe<StoreKeyAndPrefix> {
    const obj: any = {};
    message.storeKey !== undefined && (obj.storeKey = message.storeKey);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    return obj;
  },
  fromPartial(object: Partial<StoreKeyAndPrefix>): StoreKeyAndPrefix {
    const message = createBaseStoreKeyAndPrefix();
    message.storeKey = object.storeKey ?? "";
    message.prefix = object.prefix ?? "";
    return message;
  },
  fromAmino(object: StoreKeyAndPrefixAmino): StoreKeyAndPrefix {
    const message = createBaseStoreKeyAndPrefix();
    if (object.store_key !== undefined && object.store_key !== null) {
      message.storeKey = object.store_key;
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    }
    return message;
  },
  toAmino(message: StoreKeyAndPrefix): StoreKeyAndPrefixAmino {
    const obj: any = {};
    obj.store_key = message.storeKey === "" ? undefined : message.storeKey;
    obj.prefix = message.prefix === "" ? undefined : message.prefix;
    return obj;
  },
  fromAminoMsg(object: StoreKeyAndPrefixAminoMsg): StoreKeyAndPrefix {
    return StoreKeyAndPrefix.fromAmino(object.value);
  },
  fromProtoMsg(message: StoreKeyAndPrefixProtoMsg): StoreKeyAndPrefix {
    return StoreKeyAndPrefix.decode(message.value);
  },
  toProto(message: StoreKeyAndPrefix): Uint8Array {
    return StoreKeyAndPrefix.encode(message).finish();
  },
  toProtoMsg(message: StoreKeyAndPrefix): StoreKeyAndPrefixProtoMsg {
    return {
      typeUrl: "/lavanet.lava.fixationstore.StoreKeyAndPrefix",
      value: StoreKeyAndPrefix.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StoreKeyAndPrefix.typeUrl, StoreKeyAndPrefix);
function createBaseQueryStoreKeysResponse(): QueryStoreKeysResponse {
  return {
    keys: []
  };
}
export const QueryStoreKeysResponse = {
  typeUrl: "/lavanet.lava.fixationstore.QueryStoreKeysResponse",
  is(o: any): o is QueryStoreKeysResponse {
    return o && (o.$typeUrl === QueryStoreKeysResponse.typeUrl || Array.isArray(o.keys) && (!o.keys.length || StoreKeyAndPrefix.is(o.keys[0])));
  },
  isSDK(o: any): o is QueryStoreKeysResponseSDKType {
    return o && (o.$typeUrl === QueryStoreKeysResponse.typeUrl || Array.isArray(o.keys) && (!o.keys.length || StoreKeyAndPrefix.isSDK(o.keys[0])));
  },
  isAmino(o: any): o is QueryStoreKeysResponseAmino {
    return o && (o.$typeUrl === QueryStoreKeysResponse.typeUrl || Array.isArray(o.keys) && (!o.keys.length || StoreKeyAndPrefix.isAmino(o.keys[0])));
  },
  encode(message: QueryStoreKeysResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.keys) {
      StoreKeyAndPrefix.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStoreKeysResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStoreKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(StoreKeyAndPrefix.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStoreKeysResponse {
    return {
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => StoreKeyAndPrefix.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryStoreKeysResponse): JsonSafe<QueryStoreKeysResponse> {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map(e => e ? StoreKeyAndPrefix.toJSON(e) : undefined);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryStoreKeysResponse>): QueryStoreKeysResponse {
    const message = createBaseQueryStoreKeysResponse();
    message.keys = object.keys?.map(e => StoreKeyAndPrefix.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryStoreKeysResponseAmino): QueryStoreKeysResponse {
    const message = createBaseQueryStoreKeysResponse();
    message.keys = object.keys?.map(e => StoreKeyAndPrefix.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryStoreKeysResponse): QueryStoreKeysResponseAmino {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map(e => e ? StoreKeyAndPrefix.toAmino(e) : undefined);
    } else {
      obj.keys = message.keys;
    }
    return obj;
  },
  fromAminoMsg(object: QueryStoreKeysResponseAminoMsg): QueryStoreKeysResponse {
    return QueryStoreKeysResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStoreKeysResponseProtoMsg): QueryStoreKeysResponse {
    return QueryStoreKeysResponse.decode(message.value);
  },
  toProto(message: QueryStoreKeysResponse): Uint8Array {
    return QueryStoreKeysResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStoreKeysResponse): QueryStoreKeysResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.fixationstore.QueryStoreKeysResponse",
      value: QueryStoreKeysResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStoreKeysResponse.typeUrl, QueryStoreKeysResponse);
function createBaseQueryVersionsRequest(): QueryVersionsRequest {
  return {
    storeKey: "",
    prefix: "",
    key: ""
  };
}
export const QueryVersionsRequest = {
  typeUrl: "/lavanet.lava.fixationstore.QueryVersionsRequest",
  is(o: any): o is QueryVersionsRequest {
    return o && (o.$typeUrl === QueryVersionsRequest.typeUrl || typeof o.storeKey === "string" && typeof o.prefix === "string" && typeof o.key === "string");
  },
  isSDK(o: any): o is QueryVersionsRequestSDKType {
    return o && (o.$typeUrl === QueryVersionsRequest.typeUrl || typeof o.store_key === "string" && typeof o.prefix === "string" && typeof o.key === "string");
  },
  isAmino(o: any): o is QueryVersionsRequestAmino {
    return o && (o.$typeUrl === QueryVersionsRequest.typeUrl || typeof o.store_key === "string" && typeof o.prefix === "string" && typeof o.key === "string");
  },
  encode(message: QueryVersionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storeKey !== "") {
      writer.uint32(10).string(message.storeKey);
    }
    if (message.prefix !== "") {
      writer.uint32(18).string(message.prefix);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVersionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVersionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeKey = reader.string();
          break;
        case 2:
          message.prefix = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVersionsRequest {
    return {
      storeKey: isSet(object.storeKey) ? String(object.storeKey) : "",
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
      key: isSet(object.key) ? String(object.key) : ""
    };
  },
  toJSON(message: QueryVersionsRequest): JsonSafe<QueryVersionsRequest> {
    const obj: any = {};
    message.storeKey !== undefined && (obj.storeKey = message.storeKey);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },
  fromPartial(object: Partial<QueryVersionsRequest>): QueryVersionsRequest {
    const message = createBaseQueryVersionsRequest();
    message.storeKey = object.storeKey ?? "";
    message.prefix = object.prefix ?? "";
    message.key = object.key ?? "";
    return message;
  },
  fromAmino(object: QueryVersionsRequestAmino): QueryVersionsRequest {
    const message = createBaseQueryVersionsRequest();
    if (object.store_key !== undefined && object.store_key !== null) {
      message.storeKey = object.store_key;
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message: QueryVersionsRequest): QueryVersionsRequestAmino {
    const obj: any = {};
    obj.store_key = message.storeKey === "" ? undefined : message.storeKey;
    obj.prefix = message.prefix === "" ? undefined : message.prefix;
    obj.key = message.key === "" ? undefined : message.key;
    return obj;
  },
  fromAminoMsg(object: QueryVersionsRequestAminoMsg): QueryVersionsRequest {
    return QueryVersionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVersionsRequestProtoMsg): QueryVersionsRequest {
    return QueryVersionsRequest.decode(message.value);
  },
  toProto(message: QueryVersionsRequest): Uint8Array {
    return QueryVersionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVersionsRequest): QueryVersionsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.fixationstore.QueryVersionsRequest",
      value: QueryVersionsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVersionsRequest.typeUrl, QueryVersionsRequest);
function createBaseQueryVersionsResponse(): QueryVersionsResponse {
  return {
    entries: []
  };
}
export const QueryVersionsResponse = {
  typeUrl: "/lavanet.lava.fixationstore.QueryVersionsResponse",
  is(o: any): o is QueryVersionsResponse {
    return o && (o.$typeUrl === QueryVersionsResponse.typeUrl || Array.isArray(o.entries) && (!o.entries.length || Entry.is(o.entries[0])));
  },
  isSDK(o: any): o is QueryVersionsResponseSDKType {
    return o && (o.$typeUrl === QueryVersionsResponse.typeUrl || Array.isArray(o.entries) && (!o.entries.length || Entry.isSDK(o.entries[0])));
  },
  isAmino(o: any): o is QueryVersionsResponseAmino {
    return o && (o.$typeUrl === QueryVersionsResponse.typeUrl || Array.isArray(o.entries) && (!o.entries.length || Entry.isAmino(o.entries[0])));
  },
  encode(message: QueryVersionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      Entry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVersionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVersionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(Entry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVersionsResponse {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Entry.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryVersionsResponse): JsonSafe<QueryVersionsResponse> {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Entry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryVersionsResponse>): QueryVersionsResponse {
    const message = createBaseQueryVersionsResponse();
    message.entries = object.entries?.map(e => Entry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryVersionsResponseAmino): QueryVersionsResponse {
    const message = createBaseQueryVersionsResponse();
    message.entries = object.entries?.map(e => Entry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryVersionsResponse): QueryVersionsResponseAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Entry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: QueryVersionsResponseAminoMsg): QueryVersionsResponse {
    return QueryVersionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVersionsResponseProtoMsg): QueryVersionsResponse {
    return QueryVersionsResponse.decode(message.value);
  },
  toProto(message: QueryVersionsResponse): Uint8Array {
    return QueryVersionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVersionsResponse): QueryVersionsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.fixationstore.QueryVersionsResponse",
      value: QueryVersionsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVersionsResponse.typeUrl, QueryVersionsResponse);
function createBaseQueryEntryRequest(): QueryEntryRequest {
  return {
    storeKey: "",
    prefix: "",
    key: "",
    block: BigInt(0),
    hideData: false,
    stringData: false
  };
}
export const QueryEntryRequest = {
  typeUrl: "/lavanet.lava.fixationstore.QueryEntryRequest",
  is(o: any): o is QueryEntryRequest {
    return o && (o.$typeUrl === QueryEntryRequest.typeUrl || typeof o.storeKey === "string" && typeof o.prefix === "string" && typeof o.key === "string" && typeof o.block === "bigint" && typeof o.hideData === "boolean" && typeof o.stringData === "boolean");
  },
  isSDK(o: any): o is QueryEntryRequestSDKType {
    return o && (o.$typeUrl === QueryEntryRequest.typeUrl || typeof o.store_key === "string" && typeof o.prefix === "string" && typeof o.key === "string" && typeof o.block === "bigint" && typeof o.hide_data === "boolean" && typeof o.string_data === "boolean");
  },
  isAmino(o: any): o is QueryEntryRequestAmino {
    return o && (o.$typeUrl === QueryEntryRequest.typeUrl || typeof o.store_key === "string" && typeof o.prefix === "string" && typeof o.key === "string" && typeof o.block === "bigint" && typeof o.hide_data === "boolean" && typeof o.string_data === "boolean");
  },
  encode(message: QueryEntryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storeKey !== "") {
      writer.uint32(10).string(message.storeKey);
    }
    if (message.prefix !== "") {
      writer.uint32(18).string(message.prefix);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(32).uint64(message.block);
    }
    if (message.hideData === true) {
      writer.uint32(40).bool(message.hideData);
    }
    if (message.stringData === true) {
      writer.uint32(48).bool(message.stringData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEntryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeKey = reader.string();
          break;
        case 2:
          message.prefix = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        case 4:
          message.block = reader.uint64();
          break;
        case 5:
          message.hideData = reader.bool();
          break;
        case 6:
          message.stringData = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEntryRequest {
    return {
      storeKey: isSet(object.storeKey) ? String(object.storeKey) : "",
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
      key: isSet(object.key) ? String(object.key) : "",
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0),
      hideData: isSet(object.hideData) ? Boolean(object.hideData) : false,
      stringData: isSet(object.stringData) ? Boolean(object.stringData) : false
    };
  },
  toJSON(message: QueryEntryRequest): JsonSafe<QueryEntryRequest> {
    const obj: any = {};
    message.storeKey !== undefined && (obj.storeKey = message.storeKey);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.key !== undefined && (obj.key = message.key);
    message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
    message.hideData !== undefined && (obj.hideData = message.hideData);
    message.stringData !== undefined && (obj.stringData = message.stringData);
    return obj;
  },
  fromPartial(object: Partial<QueryEntryRequest>): QueryEntryRequest {
    const message = createBaseQueryEntryRequest();
    message.storeKey = object.storeKey ?? "";
    message.prefix = object.prefix ?? "";
    message.key = object.key ?? "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.hideData = object.hideData ?? false;
    message.stringData = object.stringData ?? false;
    return message;
  },
  fromAmino(object: QueryEntryRequestAmino): QueryEntryRequest {
    const message = createBaseQueryEntryRequest();
    if (object.store_key !== undefined && object.store_key !== null) {
      message.storeKey = object.store_key;
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    if (object.hide_data !== undefined && object.hide_data !== null) {
      message.hideData = object.hide_data;
    }
    if (object.string_data !== undefined && object.string_data !== null) {
      message.stringData = object.string_data;
    }
    return message;
  },
  toAmino(message: QueryEntryRequest): QueryEntryRequestAmino {
    const obj: any = {};
    obj.store_key = message.storeKey === "" ? undefined : message.storeKey;
    obj.prefix = message.prefix === "" ? undefined : message.prefix;
    obj.key = message.key === "" ? undefined : message.key;
    obj.block = message.block !== BigInt(0) ? (message.block?.toString)() : undefined;
    obj.hide_data = message.hideData === false ? undefined : message.hideData;
    obj.string_data = message.stringData === false ? undefined : message.stringData;
    return obj;
  },
  fromAminoMsg(object: QueryEntryRequestAminoMsg): QueryEntryRequest {
    return QueryEntryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEntryRequestProtoMsg): QueryEntryRequest {
    return QueryEntryRequest.decode(message.value);
  },
  toProto(message: QueryEntryRequest): Uint8Array {
    return QueryEntryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEntryRequest): QueryEntryRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.fixationstore.QueryEntryRequest",
      value: QueryEntryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEntryRequest.typeUrl, QueryEntryRequest);
function createBaseQueryEntryResponse(): QueryEntryResponse {
  return {
    entry: undefined,
    stringData: ""
  };
}
export const QueryEntryResponse = {
  typeUrl: "/lavanet.lava.fixationstore.QueryEntryResponse",
  is(o: any): o is QueryEntryResponse {
    return o && (o.$typeUrl === QueryEntryResponse.typeUrl || typeof o.stringData === "string");
  },
  isSDK(o: any): o is QueryEntryResponseSDKType {
    return o && (o.$typeUrl === QueryEntryResponse.typeUrl || typeof o.string_data === "string");
  },
  isAmino(o: any): o is QueryEntryResponseAmino {
    return o && (o.$typeUrl === QueryEntryResponse.typeUrl || typeof o.string_data === "string");
  },
  encode(message: QueryEntryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.entry !== undefined) {
      Entry.encode(message.entry, writer.uint32(10).fork()).ldelim();
    }
    if (message.stringData !== "") {
      writer.uint32(18).string(message.stringData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEntryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entry = Entry.decode(reader, reader.uint32());
          break;
        case 2:
          message.stringData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEntryResponse {
    return {
      entry: isSet(object.entry) ? Entry.fromJSON(object.entry) : undefined,
      stringData: isSet(object.stringData) ? String(object.stringData) : ""
    };
  },
  toJSON(message: QueryEntryResponse): JsonSafe<QueryEntryResponse> {
    const obj: any = {};
    message.entry !== undefined && (obj.entry = message.entry ? Entry.toJSON(message.entry) : undefined);
    message.stringData !== undefined && (obj.stringData = message.stringData);
    return obj;
  },
  fromPartial(object: Partial<QueryEntryResponse>): QueryEntryResponse {
    const message = createBaseQueryEntryResponse();
    message.entry = object.entry !== undefined && object.entry !== null ? Entry.fromPartial(object.entry) : undefined;
    message.stringData = object.stringData ?? "";
    return message;
  },
  fromAmino(object: QueryEntryResponseAmino): QueryEntryResponse {
    const message = createBaseQueryEntryResponse();
    if (object.entry !== undefined && object.entry !== null) {
      message.entry = Entry.fromAmino(object.entry);
    }
    if (object.string_data !== undefined && object.string_data !== null) {
      message.stringData = object.string_data;
    }
    return message;
  },
  toAmino(message: QueryEntryResponse): QueryEntryResponseAmino {
    const obj: any = {};
    obj.entry = message.entry ? Entry.toAmino(message.entry) : undefined;
    obj.string_data = message.stringData === "" ? undefined : message.stringData;
    return obj;
  },
  fromAminoMsg(object: QueryEntryResponseAminoMsg): QueryEntryResponse {
    return QueryEntryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEntryResponseProtoMsg): QueryEntryResponse {
    return QueryEntryResponse.decode(message.value);
  },
  toProto(message: QueryEntryResponse): Uint8Array {
    return QueryEntryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEntryResponse): QueryEntryResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.fixationstore.QueryEntryResponse",
      value: QueryEntryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEntryResponse.typeUrl, QueryEntryResponse);