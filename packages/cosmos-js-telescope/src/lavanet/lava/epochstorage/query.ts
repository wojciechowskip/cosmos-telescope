//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StakeStorage, StakeStorageAmino, StakeStorageSDKType } from "./stake_storage";
import { EpochDetails, EpochDetailsAmino, EpochDetailsSDKType } from "./epoch_details";
import { FixatedParams, FixatedParamsAmino, FixatedParamsSDKType } from "./fixated_params";
import { ProviderMetadata, ProviderMetadataAmino, ProviderMetadataSDKType } from "./provider_metadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lavanet.lava.epochstorage.QueryParamsRequest";
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
  typeUrl: "/lavanet.lava.epochstorage.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lavanet.lava.epochstorage.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetStakeStorageRequest {
  index: string;
}
export interface QueryGetStakeStorageRequestProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageRequest";
  value: Uint8Array;
}
export interface QueryGetStakeStorageRequestAmino {
  index?: string;
}
export interface QueryGetStakeStorageRequestAminoMsg {
  type: "/lavanet.lava.epochstorage.QueryGetStakeStorageRequest";
  value: QueryGetStakeStorageRequestAmino;
}
export interface QueryGetStakeStorageRequestSDKType {
  index: string;
}
export interface QueryGetStakeStorageResponse {
  stakeStorage: StakeStorage;
}
export interface QueryGetStakeStorageResponseProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageResponse";
  value: Uint8Array;
}
export interface QueryGetStakeStorageResponseAmino {
  stakeStorage?: StakeStorageAmino;
}
export interface QueryGetStakeStorageResponseAminoMsg {
  type: "/lavanet.lava.epochstorage.QueryGetStakeStorageResponse";
  value: QueryGetStakeStorageResponseAmino;
}
export interface QueryGetStakeStorageResponseSDKType {
  stakeStorage: StakeStorageSDKType;
}
export interface QueryAllStakeStorageRequest {
  pagination?: PageRequest;
}
export interface QueryAllStakeStorageRequestProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageRequest";
  value: Uint8Array;
}
export interface QueryAllStakeStorageRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllStakeStorageRequestAminoMsg {
  type: "/lavanet.lava.epochstorage.QueryAllStakeStorageRequest";
  value: QueryAllStakeStorageRequestAmino;
}
export interface QueryAllStakeStorageRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllStakeStorageResponse {
  stakeStorage: StakeStorage[];
  pagination?: PageResponse;
}
export interface QueryAllStakeStorageResponseProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageResponse";
  value: Uint8Array;
}
export interface QueryAllStakeStorageResponseAmino {
  stakeStorage?: StakeStorageAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllStakeStorageResponseAminoMsg {
  type: "/lavanet.lava.epochstorage.QueryAllStakeStorageResponse";
  value: QueryAllStakeStorageResponseAmino;
}
export interface QueryAllStakeStorageResponseSDKType {
  stakeStorage: StakeStorageSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetEpochDetailsRequest {}
export interface QueryGetEpochDetailsRequestProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsRequest";
  value: Uint8Array;
}
export interface QueryGetEpochDetailsRequestAmino {}
export interface QueryGetEpochDetailsRequestAminoMsg {
  type: "/lavanet.lava.epochstorage.QueryGetEpochDetailsRequest";
  value: QueryGetEpochDetailsRequestAmino;
}
export interface QueryGetEpochDetailsRequestSDKType {}
export interface QueryGetEpochDetailsResponse {
  epochDetails: EpochDetails;
}
export interface QueryGetEpochDetailsResponseProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsResponse";
  value: Uint8Array;
}
export interface QueryGetEpochDetailsResponseAmino {
  EpochDetails?: EpochDetailsAmino;
}
export interface QueryGetEpochDetailsResponseAminoMsg {
  type: "/lavanet.lava.epochstorage.QueryGetEpochDetailsResponse";
  value: QueryGetEpochDetailsResponseAmino;
}
export interface QueryGetEpochDetailsResponseSDKType {
  EpochDetails: EpochDetailsSDKType;
}
export interface QueryGetFixatedParamsRequest {
  index: string;
}
export interface QueryGetFixatedParamsRequestProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsRequest";
  value: Uint8Array;
}
export interface QueryGetFixatedParamsRequestAmino {
  index?: string;
}
export interface QueryGetFixatedParamsRequestAminoMsg {
  type: "/lavanet.lava.epochstorage.QueryGetFixatedParamsRequest";
  value: QueryGetFixatedParamsRequestAmino;
}
export interface QueryGetFixatedParamsRequestSDKType {
  index: string;
}
export interface QueryGetFixatedParamsResponse {
  fixatedParams: FixatedParams;
}
export interface QueryGetFixatedParamsResponseProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsResponse";
  value: Uint8Array;
}
export interface QueryGetFixatedParamsResponseAmino {
  fixatedParams?: FixatedParamsAmino;
}
export interface QueryGetFixatedParamsResponseAminoMsg {
  type: "/lavanet.lava.epochstorage.QueryGetFixatedParamsResponse";
  value: QueryGetFixatedParamsResponseAmino;
}
export interface QueryGetFixatedParamsResponseSDKType {
  fixatedParams: FixatedParamsSDKType;
}
export interface QueryAllFixatedParamsRequest {
  pagination?: PageRequest;
}
export interface QueryAllFixatedParamsRequestProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsRequest";
  value: Uint8Array;
}
export interface QueryAllFixatedParamsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllFixatedParamsRequestAminoMsg {
  type: "/lavanet.lava.epochstorage.QueryAllFixatedParamsRequest";
  value: QueryAllFixatedParamsRequestAmino;
}
export interface QueryAllFixatedParamsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllFixatedParamsResponse {
  fixatedParams: FixatedParams[];
  pagination?: PageResponse;
}
export interface QueryAllFixatedParamsResponseProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsResponse";
  value: Uint8Array;
}
export interface QueryAllFixatedParamsResponseAmino {
  fixatedParams?: FixatedParamsAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllFixatedParamsResponseAminoMsg {
  type: "/lavanet.lava.epochstorage.QueryAllFixatedParamsResponse";
  value: QueryAllFixatedParamsResponseAmino;
}
export interface QueryAllFixatedParamsResponseSDKType {
  fixatedParams: FixatedParamsSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryProviderMetaDataRequest {
  provider: string;
}
export interface QueryProviderMetaDataRequestProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.QueryProviderMetaDataRequest";
  value: Uint8Array;
}
export interface QueryProviderMetaDataRequestAmino {
  provider?: string;
}
export interface QueryProviderMetaDataRequestAminoMsg {
  type: "/lavanet.lava.epochstorage.QueryProviderMetaDataRequest";
  value: QueryProviderMetaDataRequestAmino;
}
export interface QueryProviderMetaDataRequestSDKType {
  provider: string;
}
export interface QueryProviderMetaDataResponse {
  metaData: ProviderMetadata[];
}
export interface QueryProviderMetaDataResponseProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.QueryProviderMetaDataResponse";
  value: Uint8Array;
}
export interface QueryProviderMetaDataResponseAmino {
  MetaData?: ProviderMetadataAmino[];
}
export interface QueryProviderMetaDataResponseAminoMsg {
  type: "/lavanet.lava.epochstorage.QueryProviderMetaDataResponse";
  value: QueryProviderMetaDataResponseAmino;
}
export interface QueryProviderMetaDataResponseSDKType {
  MetaData: ProviderMetadataSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryParamsRequest",
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
      typeUrl: "/lavanet.lava.epochstorage.QueryParamsRequest",
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
  typeUrl: "/lavanet.lava.epochstorage.QueryParamsResponse",
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
      typeUrl: "/lavanet.lava.epochstorage.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryGetStakeStorageRequest(): QueryGetStakeStorageRequest {
  return {
    index: ""
  };
}
export const QueryGetStakeStorageRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageRequest",
  is(o: any): o is QueryGetStakeStorageRequest {
    return o && (o.$typeUrl === QueryGetStakeStorageRequest.typeUrl || typeof o.index === "string");
  },
  isSDK(o: any): o is QueryGetStakeStorageRequestSDKType {
    return o && (o.$typeUrl === QueryGetStakeStorageRequest.typeUrl || typeof o.index === "string");
  },
  isAmino(o: any): o is QueryGetStakeStorageRequestAmino {
    return o && (o.$typeUrl === QueryGetStakeStorageRequest.typeUrl || typeof o.index === "string");
  },
  encode(message: QueryGetStakeStorageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStakeStorageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakeStorageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetStakeStorageRequest {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message: QueryGetStakeStorageRequest): JsonSafe<QueryGetStakeStorageRequest> {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetStakeStorageRequest>, I>>(object: I): QueryGetStakeStorageRequest {
    const message = createBaseQueryGetStakeStorageRequest();
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: QueryGetStakeStorageRequestAmino): QueryGetStakeStorageRequest {
    const message = createBaseQueryGetStakeStorageRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: QueryGetStakeStorageRequest): QueryGetStakeStorageRequestAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    return obj;
  },
  fromAminoMsg(object: QueryGetStakeStorageRequestAminoMsg): QueryGetStakeStorageRequest {
    return QueryGetStakeStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStakeStorageRequestProtoMsg): QueryGetStakeStorageRequest {
    return QueryGetStakeStorageRequest.decode(message.value);
  },
  toProto(message: QueryGetStakeStorageRequest): Uint8Array {
    return QueryGetStakeStorageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStakeStorageRequest): QueryGetStakeStorageRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageRequest",
      value: QueryGetStakeStorageRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetStakeStorageRequest.typeUrl, QueryGetStakeStorageRequest);
function createBaseQueryGetStakeStorageResponse(): QueryGetStakeStorageResponse {
  return {
    stakeStorage: StakeStorage.fromPartial({})
  };
}
export const QueryGetStakeStorageResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageResponse",
  is(o: any): o is QueryGetStakeStorageResponse {
    return o && (o.$typeUrl === QueryGetStakeStorageResponse.typeUrl || StakeStorage.is(o.stakeStorage));
  },
  isSDK(o: any): o is QueryGetStakeStorageResponseSDKType {
    return o && (o.$typeUrl === QueryGetStakeStorageResponse.typeUrl || StakeStorage.isSDK(o.stakeStorage));
  },
  isAmino(o: any): o is QueryGetStakeStorageResponseAmino {
    return o && (o.$typeUrl === QueryGetStakeStorageResponse.typeUrl || StakeStorage.isAmino(o.stakeStorage));
  },
  encode(message: QueryGetStakeStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakeStorage !== undefined) {
      StakeStorage.encode(message.stakeStorage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStakeStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakeStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeStorage = StakeStorage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetStakeStorageResponse {
    return {
      stakeStorage: isSet(object.stakeStorage) ? StakeStorage.fromJSON(object.stakeStorage) : undefined
    };
  },
  toJSON(message: QueryGetStakeStorageResponse): JsonSafe<QueryGetStakeStorageResponse> {
    const obj: any = {};
    message.stakeStorage !== undefined && (obj.stakeStorage = message.stakeStorage ? StakeStorage.toJSON(message.stakeStorage) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetStakeStorageResponse>, I>>(object: I): QueryGetStakeStorageResponse {
    const message = createBaseQueryGetStakeStorageResponse();
    message.stakeStorage = object.stakeStorage !== undefined && object.stakeStorage !== null ? StakeStorage.fromPartial(object.stakeStorage) : undefined;
    return message;
  },
  fromAmino(object: QueryGetStakeStorageResponseAmino): QueryGetStakeStorageResponse {
    const message = createBaseQueryGetStakeStorageResponse();
    if (object.stakeStorage !== undefined && object.stakeStorage !== null) {
      message.stakeStorage = StakeStorage.fromAmino(object.stakeStorage);
    }
    return message;
  },
  toAmino(message: QueryGetStakeStorageResponse): QueryGetStakeStorageResponseAmino {
    const obj: any = {};
    obj.stakeStorage = message.stakeStorage ? StakeStorage.toAmino(message.stakeStorage) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetStakeStorageResponseAminoMsg): QueryGetStakeStorageResponse {
    return QueryGetStakeStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStakeStorageResponseProtoMsg): QueryGetStakeStorageResponse {
    return QueryGetStakeStorageResponse.decode(message.value);
  },
  toProto(message: QueryGetStakeStorageResponse): Uint8Array {
    return QueryGetStakeStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStakeStorageResponse): QueryGetStakeStorageResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetStakeStorageResponse",
      value: QueryGetStakeStorageResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetStakeStorageResponse.typeUrl, QueryGetStakeStorageResponse);
function createBaseQueryAllStakeStorageRequest(): QueryAllStakeStorageRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllStakeStorageRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageRequest",
  is(o: any): o is QueryAllStakeStorageRequest {
    return o && o.$typeUrl === QueryAllStakeStorageRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllStakeStorageRequestSDKType {
    return o && o.$typeUrl === QueryAllStakeStorageRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllStakeStorageRequestAmino {
    return o && o.$typeUrl === QueryAllStakeStorageRequest.typeUrl;
  },
  encode(message: QueryAllStakeStorageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStakeStorageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakeStorageRequest();
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
  fromJSON(object: any): QueryAllStakeStorageRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllStakeStorageRequest): JsonSafe<QueryAllStakeStorageRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllStakeStorageRequest>, I>>(object: I): QueryAllStakeStorageRequest {
    const message = createBaseQueryAllStakeStorageRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStakeStorageRequestAmino): QueryAllStakeStorageRequest {
    const message = createBaseQueryAllStakeStorageRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStakeStorageRequest): QueryAllStakeStorageRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStakeStorageRequestAminoMsg): QueryAllStakeStorageRequest {
    return QueryAllStakeStorageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStakeStorageRequestProtoMsg): QueryAllStakeStorageRequest {
    return QueryAllStakeStorageRequest.decode(message.value);
  },
  toProto(message: QueryAllStakeStorageRequest): Uint8Array {
    return QueryAllStakeStorageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStakeStorageRequest): QueryAllStakeStorageRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageRequest",
      value: QueryAllStakeStorageRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllStakeStorageRequest.typeUrl, QueryAllStakeStorageRequest);
function createBaseQueryAllStakeStorageResponse(): QueryAllStakeStorageResponse {
  return {
    stakeStorage: [],
    pagination: undefined
  };
}
export const QueryAllStakeStorageResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageResponse",
  is(o: any): o is QueryAllStakeStorageResponse {
    return o && (o.$typeUrl === QueryAllStakeStorageResponse.typeUrl || Array.isArray(o.stakeStorage) && (!o.stakeStorage.length || StakeStorage.is(o.stakeStorage[0])));
  },
  isSDK(o: any): o is QueryAllStakeStorageResponseSDKType {
    return o && (o.$typeUrl === QueryAllStakeStorageResponse.typeUrl || Array.isArray(o.stakeStorage) && (!o.stakeStorage.length || StakeStorage.isSDK(o.stakeStorage[0])));
  },
  isAmino(o: any): o is QueryAllStakeStorageResponseAmino {
    return o && (o.$typeUrl === QueryAllStakeStorageResponse.typeUrl || Array.isArray(o.stakeStorage) && (!o.stakeStorage.length || StakeStorage.isAmino(o.stakeStorage[0])));
  },
  encode(message: QueryAllStakeStorageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stakeStorage) {
      StakeStorage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStakeStorageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakeStorageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeStorage.push(StakeStorage.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllStakeStorageResponse {
    return {
      stakeStorage: Array.isArray(object?.stakeStorage) ? object.stakeStorage.map((e: any) => StakeStorage.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllStakeStorageResponse): JsonSafe<QueryAllStakeStorageResponse> {
    const obj: any = {};
    if (message.stakeStorage) {
      obj.stakeStorage = message.stakeStorage.map(e => e ? StakeStorage.toJSON(e) : undefined);
    } else {
      obj.stakeStorage = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllStakeStorageResponse>, I>>(object: I): QueryAllStakeStorageResponse {
    const message = createBaseQueryAllStakeStorageResponse();
    message.stakeStorage = object.stakeStorage?.map(e => StakeStorage.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStakeStorageResponseAmino): QueryAllStakeStorageResponse {
    const message = createBaseQueryAllStakeStorageResponse();
    message.stakeStorage = object.stakeStorage?.map(e => StakeStorage.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStakeStorageResponse): QueryAllStakeStorageResponseAmino {
    const obj: any = {};
    if (message.stakeStorage) {
      obj.stakeStorage = message.stakeStorage.map(e => e ? StakeStorage.toAmino(e) : undefined);
    } else {
      obj.stakeStorage = message.stakeStorage;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStakeStorageResponseAminoMsg): QueryAllStakeStorageResponse {
    return QueryAllStakeStorageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStakeStorageResponseProtoMsg): QueryAllStakeStorageResponse {
    return QueryAllStakeStorageResponse.decode(message.value);
  },
  toProto(message: QueryAllStakeStorageResponse): Uint8Array {
    return QueryAllStakeStorageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStakeStorageResponse): QueryAllStakeStorageResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllStakeStorageResponse",
      value: QueryAllStakeStorageResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllStakeStorageResponse.typeUrl, QueryAllStakeStorageResponse);
function createBaseQueryGetEpochDetailsRequest(): QueryGetEpochDetailsRequest {
  return {};
}
export const QueryGetEpochDetailsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsRequest",
  is(o: any): o is QueryGetEpochDetailsRequest {
    return o && o.$typeUrl === QueryGetEpochDetailsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryGetEpochDetailsRequestSDKType {
    return o && o.$typeUrl === QueryGetEpochDetailsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGetEpochDetailsRequestAmino {
    return o && o.$typeUrl === QueryGetEpochDetailsRequest.typeUrl;
  },
  encode(_: QueryGetEpochDetailsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEpochDetailsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochDetailsRequest();
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
  fromJSON(_: any): QueryGetEpochDetailsRequest {
    return {};
  },
  toJSON(_: QueryGetEpochDetailsRequest): JsonSafe<QueryGetEpochDetailsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetEpochDetailsRequest>, I>>(_: I): QueryGetEpochDetailsRequest {
    const message = createBaseQueryGetEpochDetailsRequest();
    return message;
  },
  fromAmino(_: QueryGetEpochDetailsRequestAmino): QueryGetEpochDetailsRequest {
    const message = createBaseQueryGetEpochDetailsRequest();
    return message;
  },
  toAmino(_: QueryGetEpochDetailsRequest): QueryGetEpochDetailsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetEpochDetailsRequestAminoMsg): QueryGetEpochDetailsRequest {
    return QueryGetEpochDetailsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEpochDetailsRequestProtoMsg): QueryGetEpochDetailsRequest {
    return QueryGetEpochDetailsRequest.decode(message.value);
  },
  toProto(message: QueryGetEpochDetailsRequest): Uint8Array {
    return QueryGetEpochDetailsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEpochDetailsRequest): QueryGetEpochDetailsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsRequest",
      value: QueryGetEpochDetailsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetEpochDetailsRequest.typeUrl, QueryGetEpochDetailsRequest);
function createBaseQueryGetEpochDetailsResponse(): QueryGetEpochDetailsResponse {
  return {
    epochDetails: EpochDetails.fromPartial({})
  };
}
export const QueryGetEpochDetailsResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsResponse",
  is(o: any): o is QueryGetEpochDetailsResponse {
    return o && (o.$typeUrl === QueryGetEpochDetailsResponse.typeUrl || EpochDetails.is(o.epochDetails));
  },
  isSDK(o: any): o is QueryGetEpochDetailsResponseSDKType {
    return o && (o.$typeUrl === QueryGetEpochDetailsResponse.typeUrl || EpochDetails.isSDK(o.EpochDetails));
  },
  isAmino(o: any): o is QueryGetEpochDetailsResponseAmino {
    return o && (o.$typeUrl === QueryGetEpochDetailsResponse.typeUrl || EpochDetails.isAmino(o.EpochDetails));
  },
  encode(message: QueryGetEpochDetailsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochDetails !== undefined) {
      EpochDetails.encode(message.epochDetails, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEpochDetailsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochDetails = EpochDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetEpochDetailsResponse {
    return {
      epochDetails: isSet(object.epochDetails) ? EpochDetails.fromJSON(object.epochDetails) : undefined
    };
  },
  toJSON(message: QueryGetEpochDetailsResponse): JsonSafe<QueryGetEpochDetailsResponse> {
    const obj: any = {};
    message.epochDetails !== undefined && (obj.epochDetails = message.epochDetails ? EpochDetails.toJSON(message.epochDetails) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetEpochDetailsResponse>, I>>(object: I): QueryGetEpochDetailsResponse {
    const message = createBaseQueryGetEpochDetailsResponse();
    message.epochDetails = object.epochDetails !== undefined && object.epochDetails !== null ? EpochDetails.fromPartial(object.epochDetails) : undefined;
    return message;
  },
  fromAmino(object: QueryGetEpochDetailsResponseAmino): QueryGetEpochDetailsResponse {
    const message = createBaseQueryGetEpochDetailsResponse();
    if (object.EpochDetails !== undefined && object.EpochDetails !== null) {
      message.epochDetails = EpochDetails.fromAmino(object.EpochDetails);
    }
    return message;
  },
  toAmino(message: QueryGetEpochDetailsResponse): QueryGetEpochDetailsResponseAmino {
    const obj: any = {};
    obj.EpochDetails = message.epochDetails ? EpochDetails.toAmino(message.epochDetails) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetEpochDetailsResponseAminoMsg): QueryGetEpochDetailsResponse {
    return QueryGetEpochDetailsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEpochDetailsResponseProtoMsg): QueryGetEpochDetailsResponse {
    return QueryGetEpochDetailsResponse.decode(message.value);
  },
  toProto(message: QueryGetEpochDetailsResponse): Uint8Array {
    return QueryGetEpochDetailsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEpochDetailsResponse): QueryGetEpochDetailsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetEpochDetailsResponse",
      value: QueryGetEpochDetailsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetEpochDetailsResponse.typeUrl, QueryGetEpochDetailsResponse);
function createBaseQueryGetFixatedParamsRequest(): QueryGetFixatedParamsRequest {
  return {
    index: ""
  };
}
export const QueryGetFixatedParamsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsRequest",
  is(o: any): o is QueryGetFixatedParamsRequest {
    return o && (o.$typeUrl === QueryGetFixatedParamsRequest.typeUrl || typeof o.index === "string");
  },
  isSDK(o: any): o is QueryGetFixatedParamsRequestSDKType {
    return o && (o.$typeUrl === QueryGetFixatedParamsRequest.typeUrl || typeof o.index === "string");
  },
  isAmino(o: any): o is QueryGetFixatedParamsRequestAmino {
    return o && (o.$typeUrl === QueryGetFixatedParamsRequest.typeUrl || typeof o.index === "string");
  },
  encode(message: QueryGetFixatedParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetFixatedParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFixatedParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetFixatedParamsRequest {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message: QueryGetFixatedParamsRequest): JsonSafe<QueryGetFixatedParamsRequest> {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetFixatedParamsRequest>, I>>(object: I): QueryGetFixatedParamsRequest {
    const message = createBaseQueryGetFixatedParamsRequest();
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: QueryGetFixatedParamsRequestAmino): QueryGetFixatedParamsRequest {
    const message = createBaseQueryGetFixatedParamsRequest();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: QueryGetFixatedParamsRequest): QueryGetFixatedParamsRequestAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    return obj;
  },
  fromAminoMsg(object: QueryGetFixatedParamsRequestAminoMsg): QueryGetFixatedParamsRequest {
    return QueryGetFixatedParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetFixatedParamsRequestProtoMsg): QueryGetFixatedParamsRequest {
    return QueryGetFixatedParamsRequest.decode(message.value);
  },
  toProto(message: QueryGetFixatedParamsRequest): Uint8Array {
    return QueryGetFixatedParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetFixatedParamsRequest): QueryGetFixatedParamsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsRequest",
      value: QueryGetFixatedParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetFixatedParamsRequest.typeUrl, QueryGetFixatedParamsRequest);
function createBaseQueryGetFixatedParamsResponse(): QueryGetFixatedParamsResponse {
  return {
    fixatedParams: FixatedParams.fromPartial({})
  };
}
export const QueryGetFixatedParamsResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsResponse",
  is(o: any): o is QueryGetFixatedParamsResponse {
    return o && (o.$typeUrl === QueryGetFixatedParamsResponse.typeUrl || FixatedParams.is(o.fixatedParams));
  },
  isSDK(o: any): o is QueryGetFixatedParamsResponseSDKType {
    return o && (o.$typeUrl === QueryGetFixatedParamsResponse.typeUrl || FixatedParams.isSDK(o.fixatedParams));
  },
  isAmino(o: any): o is QueryGetFixatedParamsResponseAmino {
    return o && (o.$typeUrl === QueryGetFixatedParamsResponse.typeUrl || FixatedParams.isAmino(o.fixatedParams));
  },
  encode(message: QueryGetFixatedParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fixatedParams !== undefined) {
      FixatedParams.encode(message.fixatedParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetFixatedParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFixatedParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixatedParams = FixatedParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetFixatedParamsResponse {
    return {
      fixatedParams: isSet(object.fixatedParams) ? FixatedParams.fromJSON(object.fixatedParams) : undefined
    };
  },
  toJSON(message: QueryGetFixatedParamsResponse): JsonSafe<QueryGetFixatedParamsResponse> {
    const obj: any = {};
    message.fixatedParams !== undefined && (obj.fixatedParams = message.fixatedParams ? FixatedParams.toJSON(message.fixatedParams) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetFixatedParamsResponse>, I>>(object: I): QueryGetFixatedParamsResponse {
    const message = createBaseQueryGetFixatedParamsResponse();
    message.fixatedParams = object.fixatedParams !== undefined && object.fixatedParams !== null ? FixatedParams.fromPartial(object.fixatedParams) : undefined;
    return message;
  },
  fromAmino(object: QueryGetFixatedParamsResponseAmino): QueryGetFixatedParamsResponse {
    const message = createBaseQueryGetFixatedParamsResponse();
    if (object.fixatedParams !== undefined && object.fixatedParams !== null) {
      message.fixatedParams = FixatedParams.fromAmino(object.fixatedParams);
    }
    return message;
  },
  toAmino(message: QueryGetFixatedParamsResponse): QueryGetFixatedParamsResponseAmino {
    const obj: any = {};
    obj.fixatedParams = message.fixatedParams ? FixatedParams.toAmino(message.fixatedParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetFixatedParamsResponseAminoMsg): QueryGetFixatedParamsResponse {
    return QueryGetFixatedParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetFixatedParamsResponseProtoMsg): QueryGetFixatedParamsResponse {
    return QueryGetFixatedParamsResponse.decode(message.value);
  },
  toProto(message: QueryGetFixatedParamsResponse): Uint8Array {
    return QueryGetFixatedParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetFixatedParamsResponse): QueryGetFixatedParamsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryGetFixatedParamsResponse",
      value: QueryGetFixatedParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetFixatedParamsResponse.typeUrl, QueryGetFixatedParamsResponse);
function createBaseQueryAllFixatedParamsRequest(): QueryAllFixatedParamsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllFixatedParamsRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsRequest",
  is(o: any): o is QueryAllFixatedParamsRequest {
    return o && o.$typeUrl === QueryAllFixatedParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllFixatedParamsRequestSDKType {
    return o && o.$typeUrl === QueryAllFixatedParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllFixatedParamsRequestAmino {
    return o && o.$typeUrl === QueryAllFixatedParamsRequest.typeUrl;
  },
  encode(message: QueryAllFixatedParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllFixatedParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFixatedParamsRequest();
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
  fromJSON(object: any): QueryAllFixatedParamsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFixatedParamsRequest): JsonSafe<QueryAllFixatedParamsRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllFixatedParamsRequest>, I>>(object: I): QueryAllFixatedParamsRequest {
    const message = createBaseQueryAllFixatedParamsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllFixatedParamsRequestAmino): QueryAllFixatedParamsRequest {
    const message = createBaseQueryAllFixatedParamsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllFixatedParamsRequest): QueryAllFixatedParamsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllFixatedParamsRequestAminoMsg): QueryAllFixatedParamsRequest {
    return QueryAllFixatedParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllFixatedParamsRequestProtoMsg): QueryAllFixatedParamsRequest {
    return QueryAllFixatedParamsRequest.decode(message.value);
  },
  toProto(message: QueryAllFixatedParamsRequest): Uint8Array {
    return QueryAllFixatedParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllFixatedParamsRequest): QueryAllFixatedParamsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsRequest",
      value: QueryAllFixatedParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllFixatedParamsRequest.typeUrl, QueryAllFixatedParamsRequest);
function createBaseQueryAllFixatedParamsResponse(): QueryAllFixatedParamsResponse {
  return {
    fixatedParams: [],
    pagination: undefined
  };
}
export const QueryAllFixatedParamsResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsResponse",
  is(o: any): o is QueryAllFixatedParamsResponse {
    return o && (o.$typeUrl === QueryAllFixatedParamsResponse.typeUrl || Array.isArray(o.fixatedParams) && (!o.fixatedParams.length || FixatedParams.is(o.fixatedParams[0])));
  },
  isSDK(o: any): o is QueryAllFixatedParamsResponseSDKType {
    return o && (o.$typeUrl === QueryAllFixatedParamsResponse.typeUrl || Array.isArray(o.fixatedParams) && (!o.fixatedParams.length || FixatedParams.isSDK(o.fixatedParams[0])));
  },
  isAmino(o: any): o is QueryAllFixatedParamsResponseAmino {
    return o && (o.$typeUrl === QueryAllFixatedParamsResponse.typeUrl || Array.isArray(o.fixatedParams) && (!o.fixatedParams.length || FixatedParams.isAmino(o.fixatedParams[0])));
  },
  encode(message: QueryAllFixatedParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.fixatedParams) {
      FixatedParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllFixatedParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFixatedParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixatedParams.push(FixatedParams.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllFixatedParamsResponse {
    return {
      fixatedParams: Array.isArray(object?.fixatedParams) ? object.fixatedParams.map((e: any) => FixatedParams.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFixatedParamsResponse): JsonSafe<QueryAllFixatedParamsResponse> {
    const obj: any = {};
    if (message.fixatedParams) {
      obj.fixatedParams = message.fixatedParams.map(e => e ? FixatedParams.toJSON(e) : undefined);
    } else {
      obj.fixatedParams = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllFixatedParamsResponse>, I>>(object: I): QueryAllFixatedParamsResponse {
    const message = createBaseQueryAllFixatedParamsResponse();
    message.fixatedParams = object.fixatedParams?.map(e => FixatedParams.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllFixatedParamsResponseAmino): QueryAllFixatedParamsResponse {
    const message = createBaseQueryAllFixatedParamsResponse();
    message.fixatedParams = object.fixatedParams?.map(e => FixatedParams.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllFixatedParamsResponse): QueryAllFixatedParamsResponseAmino {
    const obj: any = {};
    if (message.fixatedParams) {
      obj.fixatedParams = message.fixatedParams.map(e => e ? FixatedParams.toAmino(e) : undefined);
    } else {
      obj.fixatedParams = message.fixatedParams;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllFixatedParamsResponseAminoMsg): QueryAllFixatedParamsResponse {
    return QueryAllFixatedParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllFixatedParamsResponseProtoMsg): QueryAllFixatedParamsResponse {
    return QueryAllFixatedParamsResponse.decode(message.value);
  },
  toProto(message: QueryAllFixatedParamsResponse): Uint8Array {
    return QueryAllFixatedParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllFixatedParamsResponse): QueryAllFixatedParamsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryAllFixatedParamsResponse",
      value: QueryAllFixatedParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllFixatedParamsResponse.typeUrl, QueryAllFixatedParamsResponse);
function createBaseQueryProviderMetaDataRequest(): QueryProviderMetaDataRequest {
  return {
    provider: ""
  };
}
export const QueryProviderMetaDataRequest = {
  typeUrl: "/lavanet.lava.epochstorage.QueryProviderMetaDataRequest",
  is(o: any): o is QueryProviderMetaDataRequest {
    return o && (o.$typeUrl === QueryProviderMetaDataRequest.typeUrl || typeof o.provider === "string");
  },
  isSDK(o: any): o is QueryProviderMetaDataRequestSDKType {
    return o && (o.$typeUrl === QueryProviderMetaDataRequest.typeUrl || typeof o.provider === "string");
  },
  isAmino(o: any): o is QueryProviderMetaDataRequestAmino {
    return o && (o.$typeUrl === QueryProviderMetaDataRequest.typeUrl || typeof o.provider === "string");
  },
  encode(message: QueryProviderMetaDataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderMetaDataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderMetaDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderMetaDataRequest {
    return {
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },
  toJSON(message: QueryProviderMetaDataRequest): JsonSafe<QueryProviderMetaDataRequest> {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderMetaDataRequest>, I>>(object: I): QueryProviderMetaDataRequest {
    const message = createBaseQueryProviderMetaDataRequest();
    message.provider = object.provider ?? "";
    return message;
  },
  fromAmino(object: QueryProviderMetaDataRequestAmino): QueryProviderMetaDataRequest {
    const message = createBaseQueryProviderMetaDataRequest();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    return message;
  },
  toAmino(message: QueryProviderMetaDataRequest): QueryProviderMetaDataRequestAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    return obj;
  },
  fromAminoMsg(object: QueryProviderMetaDataRequestAminoMsg): QueryProviderMetaDataRequest {
    return QueryProviderMetaDataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderMetaDataRequestProtoMsg): QueryProviderMetaDataRequest {
    return QueryProviderMetaDataRequest.decode(message.value);
  },
  toProto(message: QueryProviderMetaDataRequest): Uint8Array {
    return QueryProviderMetaDataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderMetaDataRequest): QueryProviderMetaDataRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryProviderMetaDataRequest",
      value: QueryProviderMetaDataRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProviderMetaDataRequest.typeUrl, QueryProviderMetaDataRequest);
function createBaseQueryProviderMetaDataResponse(): QueryProviderMetaDataResponse {
  return {
    metaData: []
  };
}
export const QueryProviderMetaDataResponse = {
  typeUrl: "/lavanet.lava.epochstorage.QueryProviderMetaDataResponse",
  is(o: any): o is QueryProviderMetaDataResponse {
    return o && (o.$typeUrl === QueryProviderMetaDataResponse.typeUrl || Array.isArray(o.metaData) && (!o.metaData.length || ProviderMetadata.is(o.metaData[0])));
  },
  isSDK(o: any): o is QueryProviderMetaDataResponseSDKType {
    return o && (o.$typeUrl === QueryProviderMetaDataResponse.typeUrl || Array.isArray(o.MetaData) && (!o.MetaData.length || ProviderMetadata.isSDK(o.MetaData[0])));
  },
  isAmino(o: any): o is QueryProviderMetaDataResponseAmino {
    return o && (o.$typeUrl === QueryProviderMetaDataResponse.typeUrl || Array.isArray(o.MetaData) && (!o.MetaData.length || ProviderMetadata.isAmino(o.MetaData[0])));
  },
  encode(message: QueryProviderMetaDataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.metaData) {
      ProviderMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderMetaDataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderMetaDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metaData.push(ProviderMetadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderMetaDataResponse {
    return {
      metaData: Array.isArray(object?.metaData) ? object.metaData.map((e: any) => ProviderMetadata.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryProviderMetaDataResponse): JsonSafe<QueryProviderMetaDataResponse> {
    const obj: any = {};
    if (message.metaData) {
      obj.metaData = message.metaData.map(e => e ? ProviderMetadata.toJSON(e) : undefined);
    } else {
      obj.metaData = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderMetaDataResponse>, I>>(object: I): QueryProviderMetaDataResponse {
    const message = createBaseQueryProviderMetaDataResponse();
    message.metaData = object.metaData?.map(e => ProviderMetadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryProviderMetaDataResponseAmino): QueryProviderMetaDataResponse {
    const message = createBaseQueryProviderMetaDataResponse();
    message.metaData = object.MetaData?.map(e => ProviderMetadata.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryProviderMetaDataResponse): QueryProviderMetaDataResponseAmino {
    const obj: any = {};
    if (message.metaData) {
      obj.MetaData = message.metaData.map(e => e ? ProviderMetadata.toAmino(e) : undefined);
    } else {
      obj.MetaData = message.metaData;
    }
    return obj;
  },
  fromAminoMsg(object: QueryProviderMetaDataResponseAminoMsg): QueryProviderMetaDataResponse {
    return QueryProviderMetaDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderMetaDataResponseProtoMsg): QueryProviderMetaDataResponse {
    return QueryProviderMetaDataResponse.decode(message.value);
  },
  toProto(message: QueryProviderMetaDataResponse): Uint8Array {
    return QueryProviderMetaDataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderMetaDataResponse): QueryProviderMetaDataResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.QueryProviderMetaDataResponse",
      value: QueryProviderMetaDataResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProviderMetaDataResponse.typeUrl, QueryProviderMetaDataResponse);