//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Project, ProjectAmino, ProjectSDKType } from "./project";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lavanet.lava.projects.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lavanet.lava.projects.QueryParamsRequest";
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
  typeUrl: "/lavanet.lava.projects.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lavanet.lava.projects.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryInfoRequest {
  project: string;
}
export interface QueryInfoRequestProtoMsg {
  typeUrl: "/lavanet.lava.projects.QueryInfoRequest";
  value: Uint8Array;
}
export interface QueryInfoRequestAmino {
  project?: string;
}
export interface QueryInfoRequestAminoMsg {
  type: "/lavanet.lava.projects.QueryInfoRequest";
  value: QueryInfoRequestAmino;
}
export interface QueryInfoRequestSDKType {
  project: string;
}
export interface QueryInfoResponse {
  project?: Project;
  pendingProject?: Project;
}
export interface QueryInfoResponseProtoMsg {
  typeUrl: "/lavanet.lava.projects.QueryInfoResponse";
  value: Uint8Array;
}
export interface QueryInfoResponseAmino {
  project?: ProjectAmino;
  pending_project?: ProjectAmino;
}
export interface QueryInfoResponseAminoMsg {
  type: "/lavanet.lava.projects.QueryInfoResponse";
  value: QueryInfoResponseAmino;
}
export interface QueryInfoResponseSDKType {
  project?: ProjectSDKType;
  pending_project?: ProjectSDKType;
}
export interface QueryDeveloperRequest {
  developer: string;
}
export interface QueryDeveloperRequestProtoMsg {
  typeUrl: "/lavanet.lava.projects.QueryDeveloperRequest";
  value: Uint8Array;
}
export interface QueryDeveloperRequestAmino {
  developer?: string;
}
export interface QueryDeveloperRequestAminoMsg {
  type: "/lavanet.lava.projects.QueryDeveloperRequest";
  value: QueryDeveloperRequestAmino;
}
export interface QueryDeveloperRequestSDKType {
  developer: string;
}
export interface QueryDeveloperResponse {
  project?: Project;
  pendingProject?: Project;
}
export interface QueryDeveloperResponseProtoMsg {
  typeUrl: "/lavanet.lava.projects.QueryDeveloperResponse";
  value: Uint8Array;
}
export interface QueryDeveloperResponseAmino {
  project?: ProjectAmino;
  pending_project?: ProjectAmino;
}
export interface QueryDeveloperResponseAminoMsg {
  type: "/lavanet.lava.projects.QueryDeveloperResponse";
  value: QueryDeveloperResponseAmino;
}
export interface QueryDeveloperResponseSDKType {
  project?: ProjectSDKType;
  pending_project?: ProjectSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.projects.QueryParamsRequest",
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
      typeUrl: "/lavanet.lava.projects.QueryParamsRequest",
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
  typeUrl: "/lavanet.lava.projects.QueryParamsResponse",
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
      typeUrl: "/lavanet.lava.projects.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryInfoRequest(): QueryInfoRequest {
  return {
    project: ""
  };
}
export const QueryInfoRequest = {
  typeUrl: "/lavanet.lava.projects.QueryInfoRequest",
  is(o: any): o is QueryInfoRequest {
    return o && (o.$typeUrl === QueryInfoRequest.typeUrl || typeof o.project === "string");
  },
  isSDK(o: any): o is QueryInfoRequestSDKType {
    return o && (o.$typeUrl === QueryInfoRequest.typeUrl || typeof o.project === "string");
  },
  isAmino(o: any): o is QueryInfoRequestAmino {
    return o && (o.$typeUrl === QueryInfoRequest.typeUrl || typeof o.project === "string");
  },
  encode(message: QueryInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.project !== "") {
      writer.uint32(10).string(message.project);
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
          message.project = reader.string();
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
      project: isSet(object.project) ? String(object.project) : ""
    };
  },
  toJSON(message: QueryInfoRequest): JsonSafe<QueryInfoRequest> {
    const obj: any = {};
    message.project !== undefined && (obj.project = message.project);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInfoRequest>, I>>(object: I): QueryInfoRequest {
    const message = createBaseQueryInfoRequest();
    message.project = object.project ?? "";
    return message;
  },
  fromAmino(object: QueryInfoRequestAmino): QueryInfoRequest {
    const message = createBaseQueryInfoRequest();
    if (object.project !== undefined && object.project !== null) {
      message.project = object.project;
    }
    return message;
  },
  toAmino(message: QueryInfoRequest): QueryInfoRequestAmino {
    const obj: any = {};
    obj.project = message.project === "" ? undefined : message.project;
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
      typeUrl: "/lavanet.lava.projects.QueryInfoRequest",
      value: QueryInfoRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryInfoRequest.typeUrl, QueryInfoRequest);
function createBaseQueryInfoResponse(): QueryInfoResponse {
  return {
    project: undefined,
    pendingProject: undefined
  };
}
export const QueryInfoResponse = {
  typeUrl: "/lavanet.lava.projects.QueryInfoResponse",
  is(o: any): o is QueryInfoResponse {
    return o && o.$typeUrl === QueryInfoResponse.typeUrl;
  },
  isSDK(o: any): o is QueryInfoResponseSDKType {
    return o && o.$typeUrl === QueryInfoResponse.typeUrl;
  },
  isAmino(o: any): o is QueryInfoResponseAmino {
    return o && o.$typeUrl === QueryInfoResponse.typeUrl;
  },
  encode(message: QueryInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    if (message.pendingProject !== undefined) {
      Project.encode(message.pendingProject, writer.uint32(18).fork()).ldelim();
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
          message.project = Project.decode(reader, reader.uint32());
          break;
        case 2:
          message.pendingProject = Project.decode(reader, reader.uint32());
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
      project: isSet(object.project) ? Project.fromJSON(object.project) : undefined,
      pendingProject: isSet(object.pendingProject) ? Project.fromJSON(object.pendingProject) : undefined
    };
  },
  toJSON(message: QueryInfoResponse): JsonSafe<QueryInfoResponse> {
    const obj: any = {};
    message.project !== undefined && (obj.project = message.project ? Project.toJSON(message.project) : undefined);
    message.pendingProject !== undefined && (obj.pendingProject = message.pendingProject ? Project.toJSON(message.pendingProject) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInfoResponse>, I>>(object: I): QueryInfoResponse {
    const message = createBaseQueryInfoResponse();
    message.project = object.project !== undefined && object.project !== null ? Project.fromPartial(object.project) : undefined;
    message.pendingProject = object.pendingProject !== undefined && object.pendingProject !== null ? Project.fromPartial(object.pendingProject) : undefined;
    return message;
  },
  fromAmino(object: QueryInfoResponseAmino): QueryInfoResponse {
    const message = createBaseQueryInfoResponse();
    if (object.project !== undefined && object.project !== null) {
      message.project = Project.fromAmino(object.project);
    }
    if (object.pending_project !== undefined && object.pending_project !== null) {
      message.pendingProject = Project.fromAmino(object.pending_project);
    }
    return message;
  },
  toAmino(message: QueryInfoResponse): QueryInfoResponseAmino {
    const obj: any = {};
    obj.project = message.project ? Project.toAmino(message.project) : undefined;
    obj.pending_project = message.pendingProject ? Project.toAmino(message.pendingProject) : undefined;
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
      typeUrl: "/lavanet.lava.projects.QueryInfoResponse",
      value: QueryInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryInfoResponse.typeUrl, QueryInfoResponse);
function createBaseQueryDeveloperRequest(): QueryDeveloperRequest {
  return {
    developer: ""
  };
}
export const QueryDeveloperRequest = {
  typeUrl: "/lavanet.lava.projects.QueryDeveloperRequest",
  is(o: any): o is QueryDeveloperRequest {
    return o && (o.$typeUrl === QueryDeveloperRequest.typeUrl || typeof o.developer === "string");
  },
  isSDK(o: any): o is QueryDeveloperRequestSDKType {
    return o && (o.$typeUrl === QueryDeveloperRequest.typeUrl || typeof o.developer === "string");
  },
  isAmino(o: any): o is QueryDeveloperRequestAmino {
    return o && (o.$typeUrl === QueryDeveloperRequest.typeUrl || typeof o.developer === "string");
  },
  encode(message: QueryDeveloperRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.developer !== "") {
      writer.uint32(10).string(message.developer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeveloperRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeveloperRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.developer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeveloperRequest {
    return {
      developer: isSet(object.developer) ? String(object.developer) : ""
    };
  },
  toJSON(message: QueryDeveloperRequest): JsonSafe<QueryDeveloperRequest> {
    const obj: any = {};
    message.developer !== undefined && (obj.developer = message.developer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDeveloperRequest>, I>>(object: I): QueryDeveloperRequest {
    const message = createBaseQueryDeveloperRequest();
    message.developer = object.developer ?? "";
    return message;
  },
  fromAmino(object: QueryDeveloperRequestAmino): QueryDeveloperRequest {
    const message = createBaseQueryDeveloperRequest();
    if (object.developer !== undefined && object.developer !== null) {
      message.developer = object.developer;
    }
    return message;
  },
  toAmino(message: QueryDeveloperRequest): QueryDeveloperRequestAmino {
    const obj: any = {};
    obj.developer = message.developer === "" ? undefined : message.developer;
    return obj;
  },
  fromAminoMsg(object: QueryDeveloperRequestAminoMsg): QueryDeveloperRequest {
    return QueryDeveloperRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeveloperRequestProtoMsg): QueryDeveloperRequest {
    return QueryDeveloperRequest.decode(message.value);
  },
  toProto(message: QueryDeveloperRequest): Uint8Array {
    return QueryDeveloperRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDeveloperRequest): QueryDeveloperRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.QueryDeveloperRequest",
      value: QueryDeveloperRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDeveloperRequest.typeUrl, QueryDeveloperRequest);
function createBaseQueryDeveloperResponse(): QueryDeveloperResponse {
  return {
    project: undefined,
    pendingProject: undefined
  };
}
export const QueryDeveloperResponse = {
  typeUrl: "/lavanet.lava.projects.QueryDeveloperResponse",
  is(o: any): o is QueryDeveloperResponse {
    return o && o.$typeUrl === QueryDeveloperResponse.typeUrl;
  },
  isSDK(o: any): o is QueryDeveloperResponseSDKType {
    return o && o.$typeUrl === QueryDeveloperResponse.typeUrl;
  },
  isAmino(o: any): o is QueryDeveloperResponseAmino {
    return o && o.$typeUrl === QueryDeveloperResponse.typeUrl;
  },
  encode(message: QueryDeveloperResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    if (message.pendingProject !== undefined) {
      Project.encode(message.pendingProject, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeveloperResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeveloperResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = Project.decode(reader, reader.uint32());
          break;
        case 2:
          message.pendingProject = Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeveloperResponse {
    return {
      project: isSet(object.project) ? Project.fromJSON(object.project) : undefined,
      pendingProject: isSet(object.pendingProject) ? Project.fromJSON(object.pendingProject) : undefined
    };
  },
  toJSON(message: QueryDeveloperResponse): JsonSafe<QueryDeveloperResponse> {
    const obj: any = {};
    message.project !== undefined && (obj.project = message.project ? Project.toJSON(message.project) : undefined);
    message.pendingProject !== undefined && (obj.pendingProject = message.pendingProject ? Project.toJSON(message.pendingProject) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDeveloperResponse>, I>>(object: I): QueryDeveloperResponse {
    const message = createBaseQueryDeveloperResponse();
    message.project = object.project !== undefined && object.project !== null ? Project.fromPartial(object.project) : undefined;
    message.pendingProject = object.pendingProject !== undefined && object.pendingProject !== null ? Project.fromPartial(object.pendingProject) : undefined;
    return message;
  },
  fromAmino(object: QueryDeveloperResponseAmino): QueryDeveloperResponse {
    const message = createBaseQueryDeveloperResponse();
    if (object.project !== undefined && object.project !== null) {
      message.project = Project.fromAmino(object.project);
    }
    if (object.pending_project !== undefined && object.pending_project !== null) {
      message.pendingProject = Project.fromAmino(object.pending_project);
    }
    return message;
  },
  toAmino(message: QueryDeveloperResponse): QueryDeveloperResponseAmino {
    const obj: any = {};
    obj.project = message.project ? Project.toAmino(message.project) : undefined;
    obj.pending_project = message.pendingProject ? Project.toAmino(message.pendingProject) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeveloperResponseAminoMsg): QueryDeveloperResponse {
    return QueryDeveloperResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeveloperResponseProtoMsg): QueryDeveloperResponse {
    return QueryDeveloperResponse.decode(message.value);
  },
  toProto(message: QueryDeveloperResponse): Uint8Array {
    return QueryDeveloperResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDeveloperResponse): QueryDeveloperResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.QueryDeveloperResponse",
      value: QueryDeveloperResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDeveloperResponse.typeUrl, QueryDeveloperResponse);