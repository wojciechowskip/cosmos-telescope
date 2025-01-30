//@ts-nocheck
import { Duration, DurationAmino, DurationSDKType } from "../../../../google/protobuf/duration";
import { Params, ParamsAmino, ParamsSDKType } from "./downtime";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../registry";
/** QueryDowntimeRequest is the request type for the Query/QueryDowntime RPC method. */
export interface QueryDowntimeRequest {
  epochStartBlock: bigint;
}
export interface QueryDowntimeRequestProtoMsg {
  typeUrl: "/lavanet.lava.downtime.v1.QueryDowntimeRequest";
  value: Uint8Array;
}
/** QueryDowntimeRequest is the request type for the Query/QueryDowntime RPC method. */
export interface QueryDowntimeRequestAmino {
  epoch_start_block?: string;
}
export interface QueryDowntimeRequestAminoMsg {
  type: "/lavanet.lava.downtime.v1.QueryDowntimeRequest";
  value: QueryDowntimeRequestAmino;
}
/** QueryDowntimeRequest is the request type for the Query/QueryDowntime RPC method. */
export interface QueryDowntimeRequestSDKType {
  epoch_start_block: bigint;
}
/** QueryDowntimeResponse is the response type for the Query/QueryDowntime RPC method. */
export interface QueryDowntimeResponse {
  cumulativeDowntimeDuration: Duration;
}
export interface QueryDowntimeResponseProtoMsg {
  typeUrl: "/lavanet.lava.downtime.v1.QueryDowntimeResponse";
  value: Uint8Array;
}
/** QueryDowntimeResponse is the response type for the Query/QueryDowntime RPC method. */
export interface QueryDowntimeResponseAmino {
  cumulative_downtime_duration?: DurationAmino;
}
export interface QueryDowntimeResponseAminoMsg {
  type: "/lavanet.lava.downtime.v1.QueryDowntimeResponse";
  value: QueryDowntimeResponseAmino;
}
/** QueryDowntimeResponse is the response type for the Query/QueryDowntime RPC method. */
export interface QueryDowntimeResponseSDKType {
  cumulative_downtime_duration: DurationSDKType;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lavanet.lava.downtime.v1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lavanet.lava.downtime.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/lavanet.lava.downtime.v1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lavanet.lava.downtime.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseQueryDowntimeRequest(): QueryDowntimeRequest {
  return {
    epochStartBlock: BigInt(0)
  };
}
export const QueryDowntimeRequest = {
  typeUrl: "/lavanet.lava.downtime.v1.QueryDowntimeRequest",
  is(o: any): o is QueryDowntimeRequest {
    return o && (o.$typeUrl === QueryDowntimeRequest.typeUrl || typeof o.epochStartBlock === "bigint");
  },
  isSDK(o: any): o is QueryDowntimeRequestSDKType {
    return o && (o.$typeUrl === QueryDowntimeRequest.typeUrl || typeof o.epoch_start_block === "bigint");
  },
  isAmino(o: any): o is QueryDowntimeRequestAmino {
    return o && (o.$typeUrl === QueryDowntimeRequest.typeUrl || typeof o.epoch_start_block === "bigint");
  },
  encode(message: QueryDowntimeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochStartBlock !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochStartBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDowntimeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDowntimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochStartBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDowntimeRequest {
    return {
      epochStartBlock: isSet(object.epochStartBlock) ? BigInt(object.epochStartBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryDowntimeRequest): JsonSafe<QueryDowntimeRequest> {
    const obj: any = {};
    message.epochStartBlock !== undefined && (obj.epochStartBlock = (message.epochStartBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDowntimeRequest>, I>>(object: I): QueryDowntimeRequest {
    const message = createBaseQueryDowntimeRequest();
    message.epochStartBlock = object.epochStartBlock !== undefined && object.epochStartBlock !== null ? BigInt(object.epochStartBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryDowntimeRequestAmino): QueryDowntimeRequest {
    const message = createBaseQueryDowntimeRequest();
    if (object.epoch_start_block !== undefined && object.epoch_start_block !== null) {
      message.epochStartBlock = BigInt(object.epoch_start_block);
    }
    return message;
  },
  toAmino(message: QueryDowntimeRequest): QueryDowntimeRequestAmino {
    const obj: any = {};
    obj.epoch_start_block = message.epochStartBlock !== BigInt(0) ? (message.epochStartBlock?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDowntimeRequestAminoMsg): QueryDowntimeRequest {
    return QueryDowntimeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDowntimeRequestProtoMsg): QueryDowntimeRequest {
    return QueryDowntimeRequest.decode(message.value);
  },
  toProto(message: QueryDowntimeRequest): Uint8Array {
    return QueryDowntimeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDowntimeRequest): QueryDowntimeRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.QueryDowntimeRequest",
      value: QueryDowntimeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDowntimeRequest.typeUrl, QueryDowntimeRequest);
function createBaseQueryDowntimeResponse(): QueryDowntimeResponse {
  return {
    cumulativeDowntimeDuration: Duration.fromPartial({})
  };
}
export const QueryDowntimeResponse = {
  typeUrl: "/lavanet.lava.downtime.v1.QueryDowntimeResponse",
  is(o: any): o is QueryDowntimeResponse {
    return o && (o.$typeUrl === QueryDowntimeResponse.typeUrl || Duration.is(o.cumulativeDowntimeDuration));
  },
  isSDK(o: any): o is QueryDowntimeResponseSDKType {
    return o && (o.$typeUrl === QueryDowntimeResponse.typeUrl || Duration.isSDK(o.cumulative_downtime_duration));
  },
  isAmino(o: any): o is QueryDowntimeResponseAmino {
    return o && (o.$typeUrl === QueryDowntimeResponse.typeUrl || Duration.isAmino(o.cumulative_downtime_duration));
  },
  encode(message: QueryDowntimeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cumulativeDowntimeDuration !== undefined) {
      Duration.encode(message.cumulativeDowntimeDuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDowntimeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDowntimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.cumulativeDowntimeDuration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDowntimeResponse {
    return {
      cumulativeDowntimeDuration: isSet(object.cumulativeDowntimeDuration) ? Duration.fromJSON(object.cumulativeDowntimeDuration) : undefined
    };
  },
  toJSON(message: QueryDowntimeResponse): JsonSafe<QueryDowntimeResponse> {
    const obj: any = {};
    message.cumulativeDowntimeDuration !== undefined && (obj.cumulativeDowntimeDuration = message.cumulativeDowntimeDuration ? Duration.toJSON(message.cumulativeDowntimeDuration) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDowntimeResponse>, I>>(object: I): QueryDowntimeResponse {
    const message = createBaseQueryDowntimeResponse();
    message.cumulativeDowntimeDuration = object.cumulativeDowntimeDuration !== undefined && object.cumulativeDowntimeDuration !== null ? Duration.fromPartial(object.cumulativeDowntimeDuration) : undefined;
    return message;
  },
  fromAmino(object: QueryDowntimeResponseAmino): QueryDowntimeResponse {
    const message = createBaseQueryDowntimeResponse();
    if (object.cumulative_downtime_duration !== undefined && object.cumulative_downtime_duration !== null) {
      message.cumulativeDowntimeDuration = Duration.fromAmino(object.cumulative_downtime_duration);
    }
    return message;
  },
  toAmino(message: QueryDowntimeResponse): QueryDowntimeResponseAmino {
    const obj: any = {};
    obj.cumulative_downtime_duration = message.cumulativeDowntimeDuration ? Duration.toAmino(message.cumulativeDowntimeDuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDowntimeResponseAminoMsg): QueryDowntimeResponse {
    return QueryDowntimeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDowntimeResponseProtoMsg): QueryDowntimeResponse {
    return QueryDowntimeResponse.decode(message.value);
  },
  toProto(message: QueryDowntimeResponse): Uint8Array {
    return QueryDowntimeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDowntimeResponse): QueryDowntimeResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.QueryDowntimeResponse",
      value: QueryDowntimeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDowntimeResponse.typeUrl, QueryDowntimeResponse);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.downtime.v1.QueryParamsRequest",
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
      typeUrl: "/lavanet.lava.downtime.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lavanet.lava.downtime.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
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
      typeUrl: "/lavanet.lava.downtime.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);