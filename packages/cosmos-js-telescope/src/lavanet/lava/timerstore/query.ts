//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface QueryAllTimersRequest {
  storeKey: string;
  prefix: string;
}
export interface QueryAllTimersRequestProtoMsg {
  typeUrl: "/lavanet.lava.timerstore.QueryAllTimersRequest";
  value: Uint8Array;
}
export interface QueryAllTimersRequestAmino {
  store_key?: string;
  prefix?: string;
}
export interface QueryAllTimersRequestAminoMsg {
  type: "/lavanet.lava.timerstore.QueryAllTimersRequest";
  value: QueryAllTimersRequestAmino;
}
export interface QueryAllTimersRequestSDKType {
  store_key: string;
  prefix: string;
}
export interface TimerInfo {
  blockTime?: string;
  blockHeight?: bigint;
  key: string;
  data: Uint8Array;
}
export interface TimerInfoProtoMsg {
  typeUrl: "/lavanet.lava.timerstore.TimerInfo";
  value: Uint8Array;
}
export interface TimerInfoAmino {
  blockTime?: string;
  blockHeight?: string;
  key?: string;
  data?: string;
}
export interface TimerInfoAminoMsg {
  type: "/lavanet.lava.timerstore.TimerInfo";
  value: TimerInfoAmino;
}
export interface TimerInfoSDKType {
  blockTime?: string;
  blockHeight?: bigint;
  key: string;
  data: Uint8Array;
}
export interface QueryAllTimersResponse {
  blockTimeTimers: TimerInfo[];
  blockHeightTimers: TimerInfo[];
  tick: string;
}
export interface QueryAllTimersResponseProtoMsg {
  typeUrl: "/lavanet.lava.timerstore.QueryAllTimersResponse";
  value: Uint8Array;
}
export interface QueryAllTimersResponseAmino {
  blockTimeTimers?: TimerInfoAmino[];
  blockHeightTimers?: TimerInfoAmino[];
  tick?: string;
}
export interface QueryAllTimersResponseAminoMsg {
  type: "/lavanet.lava.timerstore.QueryAllTimersResponse";
  value: QueryAllTimersResponseAmino;
}
export interface QueryAllTimersResponseSDKType {
  blockTimeTimers: TimerInfoSDKType[];
  blockHeightTimers: TimerInfoSDKType[];
  tick: string;
}
export interface QueryStoreKeysRequest {}
export interface QueryStoreKeysRequestProtoMsg {
  typeUrl: "/lavanet.lava.timerstore.QueryStoreKeysRequest";
  value: Uint8Array;
}
export interface QueryStoreKeysRequestAmino {}
export interface QueryStoreKeysRequestAminoMsg {
  type: "/lavanet.lava.timerstore.QueryStoreKeysRequest";
  value: QueryStoreKeysRequestAmino;
}
export interface QueryStoreKeysRequestSDKType {}
export interface StoreKeyAndPrefix {
  storeKey: string;
  prefix: string;
}
export interface StoreKeyAndPrefixProtoMsg {
  typeUrl: "/lavanet.lava.timerstore.StoreKeyAndPrefix";
  value: Uint8Array;
}
export interface StoreKeyAndPrefixAmino {
  store_key?: string;
  prefix?: string;
}
export interface StoreKeyAndPrefixAminoMsg {
  type: "/lavanet.lava.timerstore.StoreKeyAndPrefix";
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
  typeUrl: "/lavanet.lava.timerstore.QueryStoreKeysResponse";
  value: Uint8Array;
}
export interface QueryStoreKeysResponseAmino {
  keys?: StoreKeyAndPrefixAmino[];
}
export interface QueryStoreKeysResponseAminoMsg {
  type: "/lavanet.lava.timerstore.QueryStoreKeysResponse";
  value: QueryStoreKeysResponseAmino;
}
export interface QueryStoreKeysResponseSDKType {
  keys: StoreKeyAndPrefixSDKType[];
}
export interface QueryNextRequest {
  storeKey: string;
  prefix: string;
}
export interface QueryNextRequestProtoMsg {
  typeUrl: "/lavanet.lava.timerstore.QueryNextRequest";
  value: Uint8Array;
}
export interface QueryNextRequestAmino {
  store_key?: string;
  prefix?: string;
}
export interface QueryNextRequestAminoMsg {
  type: "/lavanet.lava.timerstore.QueryNextRequest";
  value: QueryNextRequestAmino;
}
export interface QueryNextRequestSDKType {
  store_key: string;
  prefix: string;
}
export interface QueryNextResponse {
  nextBlockHeight: bigint;
  nextBlockTime: string;
  tick: string;
}
export interface QueryNextResponseProtoMsg {
  typeUrl: "/lavanet.lava.timerstore.QueryNextResponse";
  value: Uint8Array;
}
export interface QueryNextResponseAmino {
  nextBlockHeight?: string;
  nextBlockTime?: string;
  tick?: string;
}
export interface QueryNextResponseAminoMsg {
  type: "/lavanet.lava.timerstore.QueryNextResponse";
  value: QueryNextResponseAmino;
}
export interface QueryNextResponseSDKType {
  nextBlockHeight: bigint;
  nextBlockTime: string;
  tick: string;
}
function createBaseQueryAllTimersRequest(): QueryAllTimersRequest {
  return {
    storeKey: "",
    prefix: ""
  };
}
export const QueryAllTimersRequest = {
  typeUrl: "/lavanet.lava.timerstore.QueryAllTimersRequest",
  encode(message: QueryAllTimersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storeKey !== "") {
      writer.uint32(10).string(message.storeKey);
    }
    if (message.prefix !== "") {
      writer.uint32(18).string(message.prefix);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTimersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTimersRequest();
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
  fromPartial(object: Partial<QueryAllTimersRequest>): QueryAllTimersRequest {
    const message = createBaseQueryAllTimersRequest();
    message.storeKey = object.storeKey ?? "";
    message.prefix = object.prefix ?? "";
    return message;
  },
  fromAmino(object: QueryAllTimersRequestAmino): QueryAllTimersRequest {
    const message = createBaseQueryAllTimersRequest();
    if (object.store_key !== undefined && object.store_key !== null) {
      message.storeKey = object.store_key;
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    }
    return message;
  },
  toAmino(message: QueryAllTimersRequest): QueryAllTimersRequestAmino {
    const obj: any = {};
    obj.store_key = message.storeKey === "" ? undefined : message.storeKey;
    obj.prefix = message.prefix === "" ? undefined : message.prefix;
    return obj;
  },
  fromAminoMsg(object: QueryAllTimersRequestAminoMsg): QueryAllTimersRequest {
    return QueryAllTimersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTimersRequestProtoMsg): QueryAllTimersRequest {
    return QueryAllTimersRequest.decode(message.value);
  },
  toProto(message: QueryAllTimersRequest): Uint8Array {
    return QueryAllTimersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTimersRequest): QueryAllTimersRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.timerstore.QueryAllTimersRequest",
      value: QueryAllTimersRequest.encode(message).finish()
    };
  }
};
function createBaseTimerInfo(): TimerInfo {
  return {
    blockTime: undefined,
    blockHeight: undefined,
    key: "",
    data: new Uint8Array()
  };
}
export const TimerInfo = {
  typeUrl: "/lavanet.lava.timerstore.TimerInfo",
  encode(message: TimerInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockTime !== undefined) {
      writer.uint32(10).string(message.blockTime);
    }
    if (message.blockHeight !== undefined) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TimerInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockTime = reader.string();
          break;
        case 2:
          message.blockHeight = reader.uint64();
          break;
        case 3:
          message.key = reader.string();
          break;
        case 4:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TimerInfo>): TimerInfo {
    const message = createBaseTimerInfo();
    message.blockTime = object.blockTime ?? undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : undefined;
    message.key = object.key ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TimerInfoAmino): TimerInfo {
    const message = createBaseTimerInfo();
    if (object.blockTime !== undefined && object.blockTime !== null) {
      message.blockTime = object.blockTime;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = BigInt(object.blockHeight);
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: TimerInfo): TimerInfoAmino {
    const obj: any = {};
    obj.blockTime = message.blockTime === null ? undefined : message.blockTime;
    obj.blockHeight = message.blockHeight !== BigInt(0) ? (message.blockHeight?.toString)() : undefined;
    obj.key = message.key === "" ? undefined : message.key;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: TimerInfoAminoMsg): TimerInfo {
    return TimerInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: TimerInfoProtoMsg): TimerInfo {
    return TimerInfo.decode(message.value);
  },
  toProto(message: TimerInfo): Uint8Array {
    return TimerInfo.encode(message).finish();
  },
  toProtoMsg(message: TimerInfo): TimerInfoProtoMsg {
    return {
      typeUrl: "/lavanet.lava.timerstore.TimerInfo",
      value: TimerInfo.encode(message).finish()
    };
  }
};
function createBaseQueryAllTimersResponse(): QueryAllTimersResponse {
  return {
    blockTimeTimers: [],
    blockHeightTimers: [],
    tick: ""
  };
}
export const QueryAllTimersResponse = {
  typeUrl: "/lavanet.lava.timerstore.QueryAllTimersResponse",
  encode(message: QueryAllTimersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.blockTimeTimers) {
      TimerInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.blockHeightTimers) {
      TimerInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.tick !== "") {
      writer.uint32(26).string(message.tick);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTimersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTimersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockTimeTimers.push(TimerInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blockHeightTimers.push(TimerInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.tick = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllTimersResponse>): QueryAllTimersResponse {
    const message = createBaseQueryAllTimersResponse();
    message.blockTimeTimers = object.blockTimeTimers?.map(e => TimerInfo.fromPartial(e)) || [];
    message.blockHeightTimers = object.blockHeightTimers?.map(e => TimerInfo.fromPartial(e)) || [];
    message.tick = object.tick ?? "";
    return message;
  },
  fromAmino(object: QueryAllTimersResponseAmino): QueryAllTimersResponse {
    const message = createBaseQueryAllTimersResponse();
    message.blockTimeTimers = object.blockTimeTimers?.map(e => TimerInfo.fromAmino(e)) || [];
    message.blockHeightTimers = object.blockHeightTimers?.map(e => TimerInfo.fromAmino(e)) || [];
    if (object.tick !== undefined && object.tick !== null) {
      message.tick = object.tick;
    }
    return message;
  },
  toAmino(message: QueryAllTimersResponse): QueryAllTimersResponseAmino {
    const obj: any = {};
    if (message.blockTimeTimers) {
      obj.blockTimeTimers = message.blockTimeTimers.map(e => e ? TimerInfo.toAmino(e) : undefined);
    } else {
      obj.blockTimeTimers = message.blockTimeTimers;
    }
    if (message.blockHeightTimers) {
      obj.blockHeightTimers = message.blockHeightTimers.map(e => e ? TimerInfo.toAmino(e) : undefined);
    } else {
      obj.blockHeightTimers = message.blockHeightTimers;
    }
    obj.tick = message.tick === "" ? undefined : message.tick;
    return obj;
  },
  fromAminoMsg(object: QueryAllTimersResponseAminoMsg): QueryAllTimersResponse {
    return QueryAllTimersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTimersResponseProtoMsg): QueryAllTimersResponse {
    return QueryAllTimersResponse.decode(message.value);
  },
  toProto(message: QueryAllTimersResponse): Uint8Array {
    return QueryAllTimersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTimersResponse): QueryAllTimersResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.timerstore.QueryAllTimersResponse",
      value: QueryAllTimersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStoreKeysRequest(): QueryStoreKeysRequest {
  return {};
}
export const QueryStoreKeysRequest = {
  typeUrl: "/lavanet.lava.timerstore.QueryStoreKeysRequest",
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
      typeUrl: "/lavanet.lava.timerstore.QueryStoreKeysRequest",
      value: QueryStoreKeysRequest.encode(message).finish()
    };
  }
};
function createBaseStoreKeyAndPrefix(): StoreKeyAndPrefix {
  return {
    storeKey: "",
    prefix: ""
  };
}
export const StoreKeyAndPrefix = {
  typeUrl: "/lavanet.lava.timerstore.StoreKeyAndPrefix",
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
      typeUrl: "/lavanet.lava.timerstore.StoreKeyAndPrefix",
      value: StoreKeyAndPrefix.encode(message).finish()
    };
  }
};
function createBaseQueryStoreKeysResponse(): QueryStoreKeysResponse {
  return {
    keys: []
  };
}
export const QueryStoreKeysResponse = {
  typeUrl: "/lavanet.lava.timerstore.QueryStoreKeysResponse",
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
      typeUrl: "/lavanet.lava.timerstore.QueryStoreKeysResponse",
      value: QueryStoreKeysResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNextRequest(): QueryNextRequest {
  return {
    storeKey: "",
    prefix: ""
  };
}
export const QueryNextRequest = {
  typeUrl: "/lavanet.lava.timerstore.QueryNextRequest",
  encode(message: QueryNextRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storeKey !== "") {
      writer.uint32(10).string(message.storeKey);
    }
    if (message.prefix !== "") {
      writer.uint32(18).string(message.prefix);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextRequest();
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
  fromPartial(object: Partial<QueryNextRequest>): QueryNextRequest {
    const message = createBaseQueryNextRequest();
    message.storeKey = object.storeKey ?? "";
    message.prefix = object.prefix ?? "";
    return message;
  },
  fromAmino(object: QueryNextRequestAmino): QueryNextRequest {
    const message = createBaseQueryNextRequest();
    if (object.store_key !== undefined && object.store_key !== null) {
      message.storeKey = object.store_key;
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix;
    }
    return message;
  },
  toAmino(message: QueryNextRequest): QueryNextRequestAmino {
    const obj: any = {};
    obj.store_key = message.storeKey === "" ? undefined : message.storeKey;
    obj.prefix = message.prefix === "" ? undefined : message.prefix;
    return obj;
  },
  fromAminoMsg(object: QueryNextRequestAminoMsg): QueryNextRequest {
    return QueryNextRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNextRequestProtoMsg): QueryNextRequest {
    return QueryNextRequest.decode(message.value);
  },
  toProto(message: QueryNextRequest): Uint8Array {
    return QueryNextRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNextRequest): QueryNextRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.timerstore.QueryNextRequest",
      value: QueryNextRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNextResponse(): QueryNextResponse {
  return {
    nextBlockHeight: BigInt(0),
    nextBlockTime: "",
    tick: ""
  };
}
export const QueryNextResponse = {
  typeUrl: "/lavanet.lava.timerstore.QueryNextResponse",
  encode(message: QueryNextResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextBlockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.nextBlockHeight);
    }
    if (message.nextBlockTime !== "") {
      writer.uint32(18).string(message.nextBlockTime);
    }
    if (message.tick !== "") {
      writer.uint32(26).string(message.tick);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextBlockHeight = reader.uint64();
          break;
        case 2:
          message.nextBlockTime = reader.string();
          break;
        case 3:
          message.tick = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryNextResponse>): QueryNextResponse {
    const message = createBaseQueryNextResponse();
    message.nextBlockHeight = object.nextBlockHeight !== undefined && object.nextBlockHeight !== null ? BigInt(object.nextBlockHeight.toString()) : BigInt(0);
    message.nextBlockTime = object.nextBlockTime ?? "";
    message.tick = object.tick ?? "";
    return message;
  },
  fromAmino(object: QueryNextResponseAmino): QueryNextResponse {
    const message = createBaseQueryNextResponse();
    if (object.nextBlockHeight !== undefined && object.nextBlockHeight !== null) {
      message.nextBlockHeight = BigInt(object.nextBlockHeight);
    }
    if (object.nextBlockTime !== undefined && object.nextBlockTime !== null) {
      message.nextBlockTime = object.nextBlockTime;
    }
    if (object.tick !== undefined && object.tick !== null) {
      message.tick = object.tick;
    }
    return message;
  },
  toAmino(message: QueryNextResponse): QueryNextResponseAmino {
    const obj: any = {};
    obj.nextBlockHeight = message.nextBlockHeight !== BigInt(0) ? (message.nextBlockHeight?.toString)() : undefined;
    obj.nextBlockTime = message.nextBlockTime === "" ? undefined : message.nextBlockTime;
    obj.tick = message.tick === "" ? undefined : message.tick;
    return obj;
  },
  fromAminoMsg(object: QueryNextResponseAminoMsg): QueryNextResponse {
    return QueryNextResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNextResponseProtoMsg): QueryNextResponse {
    return QueryNextResponse.decode(message.value);
  },
  toProto(message: QueryNextResponse): Uint8Array {
    return QueryNextResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNextResponse): QueryNextResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.timerstore.QueryNextResponse",
      value: QueryNextResponse.encode(message).finish()
    };
  }
};