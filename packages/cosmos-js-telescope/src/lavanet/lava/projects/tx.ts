//@ts-nocheck
import { ProjectKey, ProjectKeyAmino, ProjectKeySDKType } from "./project";
import { Policy, PolicyAmino, PolicySDKType } from "../plans/policy";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface MsgAddKeys {
  creator: string;
  project: string;
  projectKeys: ProjectKey[];
}
export interface MsgAddKeysProtoMsg {
  typeUrl: "/lavanet.lava.projects.MsgAddKeys";
  value: Uint8Array;
}
export interface MsgAddKeysAmino {
  creator?: string;
  project?: string;
  project_keys?: ProjectKeyAmino[];
}
export interface MsgAddKeysAminoMsg {
  type: "projects/AddKeys";
  value: MsgAddKeysAmino;
}
export interface MsgAddKeysSDKType {
  creator: string;
  project: string;
  project_keys: ProjectKeySDKType[];
}
export interface MsgAddKeysResponse {}
export interface MsgAddKeysResponseProtoMsg {
  typeUrl: "/lavanet.lava.projects.MsgAddKeysResponse";
  value: Uint8Array;
}
export interface MsgAddKeysResponseAmino {}
export interface MsgAddKeysResponseAminoMsg {
  type: "/lavanet.lava.projects.MsgAddKeysResponse";
  value: MsgAddKeysResponseAmino;
}
export interface MsgAddKeysResponseSDKType {}
export interface MsgDelKeys {
  creator: string;
  project: string;
  projectKeys: ProjectKey[];
}
export interface MsgDelKeysProtoMsg {
  typeUrl: "/lavanet.lava.projects.MsgDelKeys";
  value: Uint8Array;
}
export interface MsgDelKeysAmino {
  creator?: string;
  project?: string;
  project_keys?: ProjectKeyAmino[];
}
export interface MsgDelKeysAminoMsg {
  type: "projects/DelKeys";
  value: MsgDelKeysAmino;
}
export interface MsgDelKeysSDKType {
  creator: string;
  project: string;
  project_keys: ProjectKeySDKType[];
}
export interface MsgDelKeysResponse {}
export interface MsgDelKeysResponseProtoMsg {
  typeUrl: "/lavanet.lava.projects.MsgDelKeysResponse";
  value: Uint8Array;
}
export interface MsgDelKeysResponseAmino {}
export interface MsgDelKeysResponseAminoMsg {
  type: "/lavanet.lava.projects.MsgDelKeysResponse";
  value: MsgDelKeysResponseAmino;
}
export interface MsgDelKeysResponseSDKType {}
export interface MsgSetPolicy {
  creator: string;
  project: string;
  policy?: Policy;
}
export interface MsgSetPolicyProtoMsg {
  typeUrl: "/lavanet.lava.projects.MsgSetPolicy";
  value: Uint8Array;
}
export interface MsgSetPolicyAmino {
  creator?: string;
  project?: string;
  policy?: PolicyAmino;
}
export interface MsgSetPolicyAminoMsg {
  type: "projects/SetPolicy";
  value: MsgSetPolicyAmino;
}
export interface MsgSetPolicySDKType {
  creator: string;
  project: string;
  policy?: PolicySDKType;
}
export interface MsgSetPolicyResponse {}
export interface MsgSetPolicyResponseProtoMsg {
  typeUrl: "/lavanet.lava.projects.MsgSetPolicyResponse";
  value: Uint8Array;
}
export interface MsgSetPolicyResponseAmino {}
export interface MsgSetPolicyResponseAminoMsg {
  type: "/lavanet.lava.projects.MsgSetPolicyResponse";
  value: MsgSetPolicyResponseAmino;
}
export interface MsgSetPolicyResponseSDKType {}
export interface MsgSetSubscriptionPolicy {
  creator: string;
  projects: string[];
  policy?: Policy;
}
export interface MsgSetSubscriptionPolicyProtoMsg {
  typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy";
  value: Uint8Array;
}
export interface MsgSetSubscriptionPolicyAmino {
  creator?: string;
  projects?: string[];
  policy?: PolicyAmino;
}
export interface MsgSetSubscriptionPolicyAminoMsg {
  type: "projects/SetSubscriptionPolicy";
  value: MsgSetSubscriptionPolicyAmino;
}
export interface MsgSetSubscriptionPolicySDKType {
  creator: string;
  projects: string[];
  policy?: PolicySDKType;
}
export interface MsgSetSubscriptionPolicyResponse {}
export interface MsgSetSubscriptionPolicyResponseProtoMsg {
  typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicyResponse";
  value: Uint8Array;
}
export interface MsgSetSubscriptionPolicyResponseAmino {}
export interface MsgSetSubscriptionPolicyResponseAminoMsg {
  type: "/lavanet.lava.projects.MsgSetSubscriptionPolicyResponse";
  value: MsgSetSubscriptionPolicyResponseAmino;
}
export interface MsgSetSubscriptionPolicyResponseSDKType {}
function createBaseMsgAddKeys(): MsgAddKeys {
  return {
    creator: "",
    project: "",
    projectKeys: []
  };
}
export const MsgAddKeys = {
  typeUrl: "/lavanet.lava.projects.MsgAddKeys",
  aminoType: "projects/AddKeys",
  is(o: any): o is MsgAddKeys {
    return o && (o.$typeUrl === MsgAddKeys.typeUrl || typeof o.creator === "string" && typeof o.project === "string" && Array.isArray(o.projectKeys) && (!o.projectKeys.length || ProjectKey.is(o.projectKeys[0])));
  },
  isSDK(o: any): o is MsgAddKeysSDKType {
    return o && (o.$typeUrl === MsgAddKeys.typeUrl || typeof o.creator === "string" && typeof o.project === "string" && Array.isArray(o.project_keys) && (!o.project_keys.length || ProjectKey.isSDK(o.project_keys[0])));
  },
  isAmino(o: any): o is MsgAddKeysAmino {
    return o && (o.$typeUrl === MsgAddKeys.typeUrl || typeof o.creator === "string" && typeof o.project === "string" && Array.isArray(o.project_keys) && (!o.project_keys.length || ProjectKey.isAmino(o.project_keys[0])));
  },
  encode(message: MsgAddKeys, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    for (const v of message.projectKeys) {
      ProjectKey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddKeys {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.project = reader.string();
          break;
        case 3:
          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddKeys {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      project: isSet(object.project) ? String(object.project) : "",
      projectKeys: Array.isArray(object?.projectKeys) ? object.projectKeys.map((e: any) => ProjectKey.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgAddKeys): JsonSafe<MsgAddKeys> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.project !== undefined && (obj.project = message.project);
    if (message.projectKeys) {
      obj.projectKeys = message.projectKeys.map(e => e ? ProjectKey.toJSON(e) : undefined);
    } else {
      obj.projectKeys = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddKeys>, I>>(object: I): MsgAddKeys {
    const message = createBaseMsgAddKeys();
    message.creator = object.creator ?? "";
    message.project = object.project ?? "";
    message.projectKeys = object.projectKeys?.map(e => ProjectKey.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgAddKeysAmino): MsgAddKeys {
    const message = createBaseMsgAddKeys();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.project !== undefined && object.project !== null) {
      message.project = object.project;
    }
    message.projectKeys = object.project_keys?.map(e => ProjectKey.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgAddKeys): MsgAddKeysAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.project = message.project === "" ? undefined : message.project;
    if (message.projectKeys) {
      obj.project_keys = message.projectKeys.map(e => e ? ProjectKey.toAmino(e) : undefined);
    } else {
      obj.project_keys = message.projectKeys;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddKeysAminoMsg): MsgAddKeys {
    return MsgAddKeys.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddKeys): MsgAddKeysAminoMsg {
    return {
      type: "projects/AddKeys",
      value: MsgAddKeys.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddKeysProtoMsg): MsgAddKeys {
    return MsgAddKeys.decode(message.value);
  },
  toProto(message: MsgAddKeys): Uint8Array {
    return MsgAddKeys.encode(message).finish();
  },
  toProtoMsg(message: MsgAddKeys): MsgAddKeysProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgAddKeys",
      value: MsgAddKeys.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddKeys.typeUrl, MsgAddKeys);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAddKeys.aminoType, MsgAddKeys.typeUrl);
function createBaseMsgAddKeysResponse(): MsgAddKeysResponse {
  return {};
}
export const MsgAddKeysResponse = {
  typeUrl: "/lavanet.lava.projects.MsgAddKeysResponse",
  is(o: any): o is MsgAddKeysResponse {
    return o && o.$typeUrl === MsgAddKeysResponse.typeUrl;
  },
  isSDK(o: any): o is MsgAddKeysResponseSDKType {
    return o && o.$typeUrl === MsgAddKeysResponse.typeUrl;
  },
  isAmino(o: any): o is MsgAddKeysResponseAmino {
    return o && o.$typeUrl === MsgAddKeysResponse.typeUrl;
  },
  encode(_: MsgAddKeysResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddKeysResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddKeysResponse();
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
  fromJSON(_: any): MsgAddKeysResponse {
    return {};
  },
  toJSON(_: MsgAddKeysResponse): JsonSafe<MsgAddKeysResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddKeysResponse>, I>>(_: I): MsgAddKeysResponse {
    const message = createBaseMsgAddKeysResponse();
    return message;
  },
  fromAmino(_: MsgAddKeysResponseAmino): MsgAddKeysResponse {
    const message = createBaseMsgAddKeysResponse();
    return message;
  },
  toAmino(_: MsgAddKeysResponse): MsgAddKeysResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddKeysResponseAminoMsg): MsgAddKeysResponse {
    return MsgAddKeysResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddKeysResponseProtoMsg): MsgAddKeysResponse {
    return MsgAddKeysResponse.decode(message.value);
  },
  toProto(message: MsgAddKeysResponse): Uint8Array {
    return MsgAddKeysResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddKeysResponse): MsgAddKeysResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgAddKeysResponse",
      value: MsgAddKeysResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddKeysResponse.typeUrl, MsgAddKeysResponse);
function createBaseMsgDelKeys(): MsgDelKeys {
  return {
    creator: "",
    project: "",
    projectKeys: []
  };
}
export const MsgDelKeys = {
  typeUrl: "/lavanet.lava.projects.MsgDelKeys",
  aminoType: "projects/DelKeys",
  is(o: any): o is MsgDelKeys {
    return o && (o.$typeUrl === MsgDelKeys.typeUrl || typeof o.creator === "string" && typeof o.project === "string" && Array.isArray(o.projectKeys) && (!o.projectKeys.length || ProjectKey.is(o.projectKeys[0])));
  },
  isSDK(o: any): o is MsgDelKeysSDKType {
    return o && (o.$typeUrl === MsgDelKeys.typeUrl || typeof o.creator === "string" && typeof o.project === "string" && Array.isArray(o.project_keys) && (!o.project_keys.length || ProjectKey.isSDK(o.project_keys[0])));
  },
  isAmino(o: any): o is MsgDelKeysAmino {
    return o && (o.$typeUrl === MsgDelKeys.typeUrl || typeof o.creator === "string" && typeof o.project === "string" && Array.isArray(o.project_keys) && (!o.project_keys.length || ProjectKey.isAmino(o.project_keys[0])));
  },
  encode(message: MsgDelKeys, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    for (const v of message.projectKeys) {
      ProjectKey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelKeys {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.project = reader.string();
          break;
        case 3:
          message.projectKeys.push(ProjectKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelKeys {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      project: isSet(object.project) ? String(object.project) : "",
      projectKeys: Array.isArray(object?.projectKeys) ? object.projectKeys.map((e: any) => ProjectKey.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgDelKeys): JsonSafe<MsgDelKeys> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.project !== undefined && (obj.project = message.project);
    if (message.projectKeys) {
      obj.projectKeys = message.projectKeys.map(e => e ? ProjectKey.toJSON(e) : undefined);
    } else {
      obj.projectKeys = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDelKeys>, I>>(object: I): MsgDelKeys {
    const message = createBaseMsgDelKeys();
    message.creator = object.creator ?? "";
    message.project = object.project ?? "";
    message.projectKeys = object.projectKeys?.map(e => ProjectKey.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDelKeysAmino): MsgDelKeys {
    const message = createBaseMsgDelKeys();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.project !== undefined && object.project !== null) {
      message.project = object.project;
    }
    message.projectKeys = object.project_keys?.map(e => ProjectKey.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgDelKeys): MsgDelKeysAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.project = message.project === "" ? undefined : message.project;
    if (message.projectKeys) {
      obj.project_keys = message.projectKeys.map(e => e ? ProjectKey.toAmino(e) : undefined);
    } else {
      obj.project_keys = message.projectKeys;
    }
    return obj;
  },
  fromAminoMsg(object: MsgDelKeysAminoMsg): MsgDelKeys {
    return MsgDelKeys.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelKeys): MsgDelKeysAminoMsg {
    return {
      type: "projects/DelKeys",
      value: MsgDelKeys.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelKeysProtoMsg): MsgDelKeys {
    return MsgDelKeys.decode(message.value);
  },
  toProto(message: MsgDelKeys): Uint8Array {
    return MsgDelKeys.encode(message).finish();
  },
  toProtoMsg(message: MsgDelKeys): MsgDelKeysProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgDelKeys",
      value: MsgDelKeys.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDelKeys.typeUrl, MsgDelKeys);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgDelKeys.aminoType, MsgDelKeys.typeUrl);
function createBaseMsgDelKeysResponse(): MsgDelKeysResponse {
  return {};
}
export const MsgDelKeysResponse = {
  typeUrl: "/lavanet.lava.projects.MsgDelKeysResponse",
  is(o: any): o is MsgDelKeysResponse {
    return o && o.$typeUrl === MsgDelKeysResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDelKeysResponseSDKType {
    return o && o.$typeUrl === MsgDelKeysResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDelKeysResponseAmino {
    return o && o.$typeUrl === MsgDelKeysResponse.typeUrl;
  },
  encode(_: MsgDelKeysResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelKeysResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelKeysResponse();
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
  fromJSON(_: any): MsgDelKeysResponse {
    return {};
  },
  toJSON(_: MsgDelKeysResponse): JsonSafe<MsgDelKeysResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDelKeysResponse>, I>>(_: I): MsgDelKeysResponse {
    const message = createBaseMsgDelKeysResponse();
    return message;
  },
  fromAmino(_: MsgDelKeysResponseAmino): MsgDelKeysResponse {
    const message = createBaseMsgDelKeysResponse();
    return message;
  },
  toAmino(_: MsgDelKeysResponse): MsgDelKeysResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelKeysResponseAminoMsg): MsgDelKeysResponse {
    return MsgDelKeysResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelKeysResponseProtoMsg): MsgDelKeysResponse {
    return MsgDelKeysResponse.decode(message.value);
  },
  toProto(message: MsgDelKeysResponse): Uint8Array {
    return MsgDelKeysResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelKeysResponse): MsgDelKeysResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgDelKeysResponse",
      value: MsgDelKeysResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDelKeysResponse.typeUrl, MsgDelKeysResponse);
function createBaseMsgSetPolicy(): MsgSetPolicy {
  return {
    creator: "",
    project: "",
    policy: undefined
  };
}
export const MsgSetPolicy = {
  typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
  aminoType: "projects/SetPolicy",
  is(o: any): o is MsgSetPolicy {
    return o && (o.$typeUrl === MsgSetPolicy.typeUrl || typeof o.creator === "string" && typeof o.project === "string");
  },
  isSDK(o: any): o is MsgSetPolicySDKType {
    return o && (o.$typeUrl === MsgSetPolicy.typeUrl || typeof o.creator === "string" && typeof o.project === "string");
  },
  isAmino(o: any): o is MsgSetPolicyAmino {
    return o && (o.$typeUrl === MsgSetPolicy.typeUrl || typeof o.creator === "string" && typeof o.project === "string");
  },
  encode(message: MsgSetPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.project !== "") {
      writer.uint32(18).string(message.project);
    }
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.project = reader.string();
          break;
        case 3:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetPolicy {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      project: isSet(object.project) ? String(object.project) : "",
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined
    };
  },
  toJSON(message: MsgSetPolicy): JsonSafe<MsgSetPolicy> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.project !== undefined && (obj.project = message.project);
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetPolicy>, I>>(object: I): MsgSetPolicy {
    const message = createBaseMsgSetPolicy();
    message.creator = object.creator ?? "";
    message.project = object.project ?? "";
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromAmino(object: MsgSetPolicyAmino): MsgSetPolicy {
    const message = createBaseMsgSetPolicy();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.project !== undefined && object.project !== null) {
      message.project = object.project;
    }
    if (object.policy !== undefined && object.policy !== null) {
      message.policy = Policy.fromAmino(object.policy);
    }
    return message;
  },
  toAmino(message: MsgSetPolicy): MsgSetPolicyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.project = message.project === "" ? undefined : message.project;
    obj.policy = message.policy ? Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetPolicyAminoMsg): MsgSetPolicy {
    return MsgSetPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetPolicy): MsgSetPolicyAminoMsg {
    return {
      type: "projects/SetPolicy",
      value: MsgSetPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetPolicyProtoMsg): MsgSetPolicy {
    return MsgSetPolicy.decode(message.value);
  },
  toProto(message: MsgSetPolicy): Uint8Array {
    return MsgSetPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPolicy): MsgSetPolicyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
      value: MsgSetPolicy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetPolicy.typeUrl, MsgSetPolicy);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetPolicy.aminoType, MsgSetPolicy.typeUrl);
function createBaseMsgSetPolicyResponse(): MsgSetPolicyResponse {
  return {};
}
export const MsgSetPolicyResponse = {
  typeUrl: "/lavanet.lava.projects.MsgSetPolicyResponse",
  is(o: any): o is MsgSetPolicyResponse {
    return o && o.$typeUrl === MsgSetPolicyResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetPolicyResponseSDKType {
    return o && o.$typeUrl === MsgSetPolicyResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetPolicyResponseAmino {
    return o && o.$typeUrl === MsgSetPolicyResponse.typeUrl;
  },
  encode(_: MsgSetPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPolicyResponse();
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
  fromJSON(_: any): MsgSetPolicyResponse {
    return {};
  },
  toJSON(_: MsgSetPolicyResponse): JsonSafe<MsgSetPolicyResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetPolicyResponse>, I>>(_: I): MsgSetPolicyResponse {
    const message = createBaseMsgSetPolicyResponse();
    return message;
  },
  fromAmino(_: MsgSetPolicyResponseAmino): MsgSetPolicyResponse {
    const message = createBaseMsgSetPolicyResponse();
    return message;
  },
  toAmino(_: MsgSetPolicyResponse): MsgSetPolicyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPolicyResponseAminoMsg): MsgSetPolicyResponse {
    return MsgSetPolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPolicyResponseProtoMsg): MsgSetPolicyResponse {
    return MsgSetPolicyResponse.decode(message.value);
  },
  toProto(message: MsgSetPolicyResponse): Uint8Array {
    return MsgSetPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPolicyResponse): MsgSetPolicyResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetPolicyResponse",
      value: MsgSetPolicyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetPolicyResponse.typeUrl, MsgSetPolicyResponse);
function createBaseMsgSetSubscriptionPolicy(): MsgSetSubscriptionPolicy {
  return {
    creator: "",
    projects: [],
    policy: undefined
  };
}
export const MsgSetSubscriptionPolicy = {
  typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
  aminoType: "projects/SetSubscriptionPolicy",
  is(o: any): o is MsgSetSubscriptionPolicy {
    return o && (o.$typeUrl === MsgSetSubscriptionPolicy.typeUrl || typeof o.creator === "string" && Array.isArray(o.projects) && (!o.projects.length || typeof o.projects[0] === "string"));
  },
  isSDK(o: any): o is MsgSetSubscriptionPolicySDKType {
    return o && (o.$typeUrl === MsgSetSubscriptionPolicy.typeUrl || typeof o.creator === "string" && Array.isArray(o.projects) && (!o.projects.length || typeof o.projects[0] === "string"));
  },
  isAmino(o: any): o is MsgSetSubscriptionPolicyAmino {
    return o && (o.$typeUrl === MsgSetSubscriptionPolicy.typeUrl || typeof o.creator === "string" && Array.isArray(o.projects) && (!o.projects.length || typeof o.projects[0] === "string"));
  },
  encode(message: MsgSetSubscriptionPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.projects) {
      writer.uint32(18).string(v!);
    }
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetSubscriptionPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSubscriptionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projects.push(reader.string());
          break;
        case 3:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetSubscriptionPolicy {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => String(e)) : [],
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined
    };
  },
  toJSON(message: MsgSetSubscriptionPolicy): JsonSafe<MsgSetSubscriptionPolicy> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.projects) {
      obj.projects = message.projects.map(e => e);
    } else {
      obj.projects = [];
    }
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetSubscriptionPolicy>, I>>(object: I): MsgSetSubscriptionPolicy {
    const message = createBaseMsgSetSubscriptionPolicy();
    message.creator = object.creator ?? "";
    message.projects = object.projects?.map(e => e) || [];
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromAmino(object: MsgSetSubscriptionPolicyAmino): MsgSetSubscriptionPolicy {
    const message = createBaseMsgSetSubscriptionPolicy();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.projects = object.projects?.map(e => e) || [];
    if (object.policy !== undefined && object.policy !== null) {
      message.policy = Policy.fromAmino(object.policy);
    }
    return message;
  },
  toAmino(message: MsgSetSubscriptionPolicy): MsgSetSubscriptionPolicyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.projects) {
      obj.projects = message.projects.map(e => e);
    } else {
      obj.projects = message.projects;
    }
    obj.policy = message.policy ? Policy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetSubscriptionPolicyAminoMsg): MsgSetSubscriptionPolicy {
    return MsgSetSubscriptionPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetSubscriptionPolicy): MsgSetSubscriptionPolicyAminoMsg {
    return {
      type: "projects/SetSubscriptionPolicy",
      value: MsgSetSubscriptionPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetSubscriptionPolicyProtoMsg): MsgSetSubscriptionPolicy {
    return MsgSetSubscriptionPolicy.decode(message.value);
  },
  toProto(message: MsgSetSubscriptionPolicy): Uint8Array {
    return MsgSetSubscriptionPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgSetSubscriptionPolicy): MsgSetSubscriptionPolicyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
      value: MsgSetSubscriptionPolicy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetSubscriptionPolicy.typeUrl, MsgSetSubscriptionPolicy);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetSubscriptionPolicy.aminoType, MsgSetSubscriptionPolicy.typeUrl);
function createBaseMsgSetSubscriptionPolicyResponse(): MsgSetSubscriptionPolicyResponse {
  return {};
}
export const MsgSetSubscriptionPolicyResponse = {
  typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicyResponse",
  is(o: any): o is MsgSetSubscriptionPolicyResponse {
    return o && o.$typeUrl === MsgSetSubscriptionPolicyResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetSubscriptionPolicyResponseSDKType {
    return o && o.$typeUrl === MsgSetSubscriptionPolicyResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetSubscriptionPolicyResponseAmino {
    return o && o.$typeUrl === MsgSetSubscriptionPolicyResponse.typeUrl;
  },
  encode(_: MsgSetSubscriptionPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetSubscriptionPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSubscriptionPolicyResponse();
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
  fromJSON(_: any): MsgSetSubscriptionPolicyResponse {
    return {};
  },
  toJSON(_: MsgSetSubscriptionPolicyResponse): JsonSafe<MsgSetSubscriptionPolicyResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetSubscriptionPolicyResponse>, I>>(_: I): MsgSetSubscriptionPolicyResponse {
    const message = createBaseMsgSetSubscriptionPolicyResponse();
    return message;
  },
  fromAmino(_: MsgSetSubscriptionPolicyResponseAmino): MsgSetSubscriptionPolicyResponse {
    const message = createBaseMsgSetSubscriptionPolicyResponse();
    return message;
  },
  toAmino(_: MsgSetSubscriptionPolicyResponse): MsgSetSubscriptionPolicyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetSubscriptionPolicyResponseAminoMsg): MsgSetSubscriptionPolicyResponse {
    return MsgSetSubscriptionPolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetSubscriptionPolicyResponseProtoMsg): MsgSetSubscriptionPolicyResponse {
    return MsgSetSubscriptionPolicyResponse.decode(message.value);
  },
  toProto(message: MsgSetSubscriptionPolicyResponse): Uint8Array {
    return MsgSetSubscriptionPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetSubscriptionPolicyResponse): MsgSetSubscriptionPolicyResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicyResponse",
      value: MsgSetSubscriptionPolicyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetSubscriptionPolicyResponse.typeUrl, MsgSetSubscriptionPolicyResponse);