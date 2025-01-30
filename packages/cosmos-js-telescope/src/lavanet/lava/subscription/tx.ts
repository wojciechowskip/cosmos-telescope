//@ts-nocheck
import { ProjectData, ProjectDataAmino, ProjectDataSDKType } from "../projects/project";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface MsgBuy {
  creator: string;
  consumer: string;
  index: string;
  /** in months */
  duration: bigint;
  autoRenewal: boolean;
  advancePurchase: boolean;
}
export interface MsgBuyProtoMsg {
  typeUrl: "/lavanet.lava.subscription.MsgBuy";
  value: Uint8Array;
}
export interface MsgBuyAmino {
  creator?: string;
  consumer?: string;
  index?: string;
  /** in months */
  duration?: string;
  auto_renewal?: boolean;
  advance_purchase?: boolean;
}
export interface MsgBuyAminoMsg {
  type: "subscription/Buy";
  value: MsgBuyAmino;
}
export interface MsgBuySDKType {
  creator: string;
  consumer: string;
  index: string;
  duration: bigint;
  auto_renewal: boolean;
  advance_purchase: boolean;
}
export interface MsgBuyResponse {}
export interface MsgBuyResponseProtoMsg {
  typeUrl: "/lavanet.lava.subscription.MsgBuyResponse";
  value: Uint8Array;
}
export interface MsgBuyResponseAmino {}
export interface MsgBuyResponseAminoMsg {
  type: "/lavanet.lava.subscription.MsgBuyResponse";
  value: MsgBuyResponseAmino;
}
export interface MsgBuyResponseSDKType {}
export interface MsgAddProject {
  creator: string;
  projectData: ProjectData;
}
export interface MsgAddProjectProtoMsg {
  typeUrl: "/lavanet.lava.subscription.MsgAddProject";
  value: Uint8Array;
}
export interface MsgAddProjectAmino {
  creator?: string;
  project_data?: ProjectDataAmino;
}
export interface MsgAddProjectAminoMsg {
  type: "subscription/AddProject";
  value: MsgAddProjectAmino;
}
export interface MsgAddProjectSDKType {
  creator: string;
  project_data: ProjectDataSDKType;
}
export interface MsgAddProjectResponse {}
export interface MsgAddProjectResponseProtoMsg {
  typeUrl: "/lavanet.lava.subscription.MsgAddProjectResponse";
  value: Uint8Array;
}
export interface MsgAddProjectResponseAmino {}
export interface MsgAddProjectResponseAminoMsg {
  type: "/lavanet.lava.subscription.MsgAddProjectResponse";
  value: MsgAddProjectResponseAmino;
}
export interface MsgAddProjectResponseSDKType {}
export interface MsgDelProject {
  creator: string;
  name: string;
}
export interface MsgDelProjectProtoMsg {
  typeUrl: "/lavanet.lava.subscription.MsgDelProject";
  value: Uint8Array;
}
export interface MsgDelProjectAmino {
  creator?: string;
  name?: string;
}
export interface MsgDelProjectAminoMsg {
  type: "subscription/DelProject";
  value: MsgDelProjectAmino;
}
export interface MsgDelProjectSDKType {
  creator: string;
  name: string;
}
export interface MsgDelProjectResponse {}
export interface MsgDelProjectResponseProtoMsg {
  typeUrl: "/lavanet.lava.subscription.MsgDelProjectResponse";
  value: Uint8Array;
}
export interface MsgDelProjectResponseAmino {}
export interface MsgDelProjectResponseAminoMsg {
  type: "/lavanet.lava.subscription.MsgDelProjectResponse";
  value: MsgDelProjectResponseAmino;
}
export interface MsgDelProjectResponseSDKType {}
export interface MsgAutoRenewal {
  creator: string;
  enable: boolean;
  consumer: string;
  index: string;
}
export interface MsgAutoRenewalProtoMsg {
  typeUrl: "/lavanet.lava.subscription.MsgAutoRenewal";
  value: Uint8Array;
}
export interface MsgAutoRenewalAmino {
  creator?: string;
  enable?: boolean;
  consumer?: string;
  index?: string;
}
export interface MsgAutoRenewalAminoMsg {
  type: "subscription/AutoRenewal";
  value: MsgAutoRenewalAmino;
}
export interface MsgAutoRenewalSDKType {
  creator: string;
  enable: boolean;
  consumer: string;
  index: string;
}
export interface MsgAutoRenewalResponse {}
export interface MsgAutoRenewalResponseProtoMsg {
  typeUrl: "/lavanet.lava.subscription.MsgAutoRenewalResponse";
  value: Uint8Array;
}
export interface MsgAutoRenewalResponseAmino {}
export interface MsgAutoRenewalResponseAminoMsg {
  type: "/lavanet.lava.subscription.MsgAutoRenewalResponse";
  value: MsgAutoRenewalResponseAmino;
}
export interface MsgAutoRenewalResponseSDKType {}
function createBaseMsgBuy(): MsgBuy {
  return {
    creator: "",
    consumer: "",
    index: "",
    duration: BigInt(0),
    autoRenewal: false,
    advancePurchase: false
  };
}
export const MsgBuy = {
  typeUrl: "/lavanet.lava.subscription.MsgBuy",
  aminoType: "subscription/Buy",
  is(o: any): o is MsgBuy {
    return o && (o.$typeUrl === MsgBuy.typeUrl || typeof o.creator === "string" && typeof o.consumer === "string" && typeof o.index === "string" && typeof o.duration === "bigint" && typeof o.autoRenewal === "boolean" && typeof o.advancePurchase === "boolean");
  },
  isSDK(o: any): o is MsgBuySDKType {
    return o && (o.$typeUrl === MsgBuy.typeUrl || typeof o.creator === "string" && typeof o.consumer === "string" && typeof o.index === "string" && typeof o.duration === "bigint" && typeof o.auto_renewal === "boolean" && typeof o.advance_purchase === "boolean");
  },
  isAmino(o: any): o is MsgBuyAmino {
    return o && (o.$typeUrl === MsgBuy.typeUrl || typeof o.creator === "string" && typeof o.consumer === "string" && typeof o.index === "string" && typeof o.duration === "bigint" && typeof o.auto_renewal === "boolean" && typeof o.advance_purchase === "boolean");
  },
  encode(message: MsgBuy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.consumer !== "") {
      writer.uint32(18).string(message.consumer);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    if (message.duration !== BigInt(0)) {
      writer.uint32(32).uint64(message.duration);
    }
    if (message.autoRenewal === true) {
      writer.uint32(48).bool(message.autoRenewal);
    }
    if (message.advancePurchase === true) {
      writer.uint32(56).bool(message.advancePurchase);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBuy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.consumer = reader.string();
          break;
        case 3:
          message.index = reader.string();
          break;
        case 4:
          message.duration = reader.uint64();
          break;
        case 6:
          message.autoRenewal = reader.bool();
          break;
        case 7:
          message.advancePurchase = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBuy {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
      index: isSet(object.index) ? String(object.index) : "",
      duration: isSet(object.duration) ? BigInt(object.duration.toString()) : BigInt(0),
      autoRenewal: isSet(object.autoRenewal) ? Boolean(object.autoRenewal) : false,
      advancePurchase: isSet(object.advancePurchase) ? Boolean(object.advancePurchase) : false
    };
  },
  toJSON(message: MsgBuy): JsonSafe<MsgBuy> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.index !== undefined && (obj.index = message.index);
    message.duration !== undefined && (obj.duration = (message.duration || BigInt(0)).toString());
    message.autoRenewal !== undefined && (obj.autoRenewal = message.autoRenewal);
    message.advancePurchase !== undefined && (obj.advancePurchase = message.advancePurchase);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBuy>, I>>(object: I): MsgBuy {
    const message = createBaseMsgBuy();
    message.creator = object.creator ?? "";
    message.consumer = object.consumer ?? "";
    message.index = object.index ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
    message.autoRenewal = object.autoRenewal ?? false;
    message.advancePurchase = object.advancePurchase ?? false;
    return message;
  },
  fromAmino(object: MsgBuyAmino): MsgBuy {
    const message = createBaseMsgBuy();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.consumer !== undefined && object.consumer !== null) {
      message.consumer = object.consumer;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = BigInt(object.duration);
    }
    if (object.auto_renewal !== undefined && object.auto_renewal !== null) {
      message.autoRenewal = object.auto_renewal;
    }
    if (object.advance_purchase !== undefined && object.advance_purchase !== null) {
      message.advancePurchase = object.advance_purchase;
    }
    return message;
  },
  toAmino(message: MsgBuy): MsgBuyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.consumer = message.consumer === "" ? undefined : message.consumer;
    obj.index = message.index === "" ? undefined : message.index;
    obj.duration = message.duration !== BigInt(0) ? (message.duration?.toString)() : undefined;
    obj.auto_renewal = message.autoRenewal === false ? undefined : message.autoRenewal;
    obj.advance_purchase = message.advancePurchase === false ? undefined : message.advancePurchase;
    return obj;
  },
  fromAminoMsg(object: MsgBuyAminoMsg): MsgBuy {
    return MsgBuy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBuy): MsgBuyAminoMsg {
    return {
      type: "subscription/Buy",
      value: MsgBuy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBuyProtoMsg): MsgBuy {
    return MsgBuy.decode(message.value);
  },
  toProto(message: MsgBuy): Uint8Array {
    return MsgBuy.encode(message).finish();
  },
  toProtoMsg(message: MsgBuy): MsgBuyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgBuy",
      value: MsgBuy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBuy.typeUrl, MsgBuy);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBuy.aminoType, MsgBuy.typeUrl);
function createBaseMsgBuyResponse(): MsgBuyResponse {
  return {};
}
export const MsgBuyResponse = {
  typeUrl: "/lavanet.lava.subscription.MsgBuyResponse",
  is(o: any): o is MsgBuyResponse {
    return o && o.$typeUrl === MsgBuyResponse.typeUrl;
  },
  isSDK(o: any): o is MsgBuyResponseSDKType {
    return o && o.$typeUrl === MsgBuyResponse.typeUrl;
  },
  isAmino(o: any): o is MsgBuyResponseAmino {
    return o && o.$typeUrl === MsgBuyResponse.typeUrl;
  },
  encode(_: MsgBuyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBuyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyResponse();
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
  fromJSON(_: any): MsgBuyResponse {
    return {};
  },
  toJSON(_: MsgBuyResponse): JsonSafe<MsgBuyResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBuyResponse>, I>>(_: I): MsgBuyResponse {
    const message = createBaseMsgBuyResponse();
    return message;
  },
  fromAmino(_: MsgBuyResponseAmino): MsgBuyResponse {
    const message = createBaseMsgBuyResponse();
    return message;
  },
  toAmino(_: MsgBuyResponse): MsgBuyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBuyResponseAminoMsg): MsgBuyResponse {
    return MsgBuyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBuyResponseProtoMsg): MsgBuyResponse {
    return MsgBuyResponse.decode(message.value);
  },
  toProto(message: MsgBuyResponse): Uint8Array {
    return MsgBuyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBuyResponse): MsgBuyResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgBuyResponse",
      value: MsgBuyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBuyResponse.typeUrl, MsgBuyResponse);
function createBaseMsgAddProject(): MsgAddProject {
  return {
    creator: "",
    projectData: ProjectData.fromPartial({})
  };
}
export const MsgAddProject = {
  typeUrl: "/lavanet.lava.subscription.MsgAddProject",
  aminoType: "subscription/AddProject",
  is(o: any): o is MsgAddProject {
    return o && (o.$typeUrl === MsgAddProject.typeUrl || typeof o.creator === "string" && ProjectData.is(o.projectData));
  },
  isSDK(o: any): o is MsgAddProjectSDKType {
    return o && (o.$typeUrl === MsgAddProject.typeUrl || typeof o.creator === "string" && ProjectData.isSDK(o.project_data));
  },
  isAmino(o: any): o is MsgAddProjectAmino {
    return o && (o.$typeUrl === MsgAddProject.typeUrl || typeof o.creator === "string" && ProjectData.isAmino(o.project_data));
  },
  encode(message: MsgAddProject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.projectData !== undefined) {
      ProjectData.encode(message.projectData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddProject {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projectData = ProjectData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddProject {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      projectData: isSet(object.projectData) ? ProjectData.fromJSON(object.projectData) : undefined
    };
  },
  toJSON(message: MsgAddProject): JsonSafe<MsgAddProject> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.projectData !== undefined && (obj.projectData = message.projectData ? ProjectData.toJSON(message.projectData) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddProject>, I>>(object: I): MsgAddProject {
    const message = createBaseMsgAddProject();
    message.creator = object.creator ?? "";
    message.projectData = object.projectData !== undefined && object.projectData !== null ? ProjectData.fromPartial(object.projectData) : undefined;
    return message;
  },
  fromAmino(object: MsgAddProjectAmino): MsgAddProject {
    const message = createBaseMsgAddProject();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.project_data !== undefined && object.project_data !== null) {
      message.projectData = ProjectData.fromAmino(object.project_data);
    }
    return message;
  },
  toAmino(message: MsgAddProject): MsgAddProjectAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.project_data = message.projectData ? ProjectData.toAmino(message.projectData) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddProjectAminoMsg): MsgAddProject {
    return MsgAddProject.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddProject): MsgAddProjectAminoMsg {
    return {
      type: "subscription/AddProject",
      value: MsgAddProject.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddProjectProtoMsg): MsgAddProject {
    return MsgAddProject.decode(message.value);
  },
  toProto(message: MsgAddProject): Uint8Array {
    return MsgAddProject.encode(message).finish();
  },
  toProtoMsg(message: MsgAddProject): MsgAddProjectProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgAddProject",
      value: MsgAddProject.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddProject.typeUrl, MsgAddProject);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAddProject.aminoType, MsgAddProject.typeUrl);
function createBaseMsgAddProjectResponse(): MsgAddProjectResponse {
  return {};
}
export const MsgAddProjectResponse = {
  typeUrl: "/lavanet.lava.subscription.MsgAddProjectResponse",
  is(o: any): o is MsgAddProjectResponse {
    return o && o.$typeUrl === MsgAddProjectResponse.typeUrl;
  },
  isSDK(o: any): o is MsgAddProjectResponseSDKType {
    return o && o.$typeUrl === MsgAddProjectResponse.typeUrl;
  },
  isAmino(o: any): o is MsgAddProjectResponseAmino {
    return o && o.$typeUrl === MsgAddProjectResponse.typeUrl;
  },
  encode(_: MsgAddProjectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddProjectResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddProjectResponse();
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
  fromJSON(_: any): MsgAddProjectResponse {
    return {};
  },
  toJSON(_: MsgAddProjectResponse): JsonSafe<MsgAddProjectResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddProjectResponse>, I>>(_: I): MsgAddProjectResponse {
    const message = createBaseMsgAddProjectResponse();
    return message;
  },
  fromAmino(_: MsgAddProjectResponseAmino): MsgAddProjectResponse {
    const message = createBaseMsgAddProjectResponse();
    return message;
  },
  toAmino(_: MsgAddProjectResponse): MsgAddProjectResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddProjectResponseAminoMsg): MsgAddProjectResponse {
    return MsgAddProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddProjectResponseProtoMsg): MsgAddProjectResponse {
    return MsgAddProjectResponse.decode(message.value);
  },
  toProto(message: MsgAddProjectResponse): Uint8Array {
    return MsgAddProjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddProjectResponse): MsgAddProjectResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgAddProjectResponse",
      value: MsgAddProjectResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddProjectResponse.typeUrl, MsgAddProjectResponse);
function createBaseMsgDelProject(): MsgDelProject {
  return {
    creator: "",
    name: ""
  };
}
export const MsgDelProject = {
  typeUrl: "/lavanet.lava.subscription.MsgDelProject",
  aminoType: "subscription/DelProject",
  is(o: any): o is MsgDelProject {
    return o && (o.$typeUrl === MsgDelProject.typeUrl || typeof o.creator === "string" && typeof o.name === "string");
  },
  isSDK(o: any): o is MsgDelProjectSDKType {
    return o && (o.$typeUrl === MsgDelProject.typeUrl || typeof o.creator === "string" && typeof o.name === "string");
  },
  isAmino(o: any): o is MsgDelProjectAmino {
    return o && (o.$typeUrl === MsgDelProject.typeUrl || typeof o.creator === "string" && typeof o.name === "string");
  },
  encode(message: MsgDelProject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelProject {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelProject {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: MsgDelProject): JsonSafe<MsgDelProject> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDelProject>, I>>(object: I): MsgDelProject {
    const message = createBaseMsgDelProject();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgDelProjectAmino): MsgDelProject {
    const message = createBaseMsgDelProject();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgDelProject): MsgDelProjectAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgDelProjectAminoMsg): MsgDelProject {
    return MsgDelProject.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelProject): MsgDelProjectAminoMsg {
    return {
      type: "subscription/DelProject",
      value: MsgDelProject.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelProjectProtoMsg): MsgDelProject {
    return MsgDelProject.decode(message.value);
  },
  toProto(message: MsgDelProject): Uint8Array {
    return MsgDelProject.encode(message).finish();
  },
  toProtoMsg(message: MsgDelProject): MsgDelProjectProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgDelProject",
      value: MsgDelProject.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDelProject.typeUrl, MsgDelProject);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgDelProject.aminoType, MsgDelProject.typeUrl);
function createBaseMsgDelProjectResponse(): MsgDelProjectResponse {
  return {};
}
export const MsgDelProjectResponse = {
  typeUrl: "/lavanet.lava.subscription.MsgDelProjectResponse",
  is(o: any): o is MsgDelProjectResponse {
    return o && o.$typeUrl === MsgDelProjectResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDelProjectResponseSDKType {
    return o && o.$typeUrl === MsgDelProjectResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDelProjectResponseAmino {
    return o && o.$typeUrl === MsgDelProjectResponse.typeUrl;
  },
  encode(_: MsgDelProjectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelProjectResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelProjectResponse();
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
  fromJSON(_: any): MsgDelProjectResponse {
    return {};
  },
  toJSON(_: MsgDelProjectResponse): JsonSafe<MsgDelProjectResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDelProjectResponse>, I>>(_: I): MsgDelProjectResponse {
    const message = createBaseMsgDelProjectResponse();
    return message;
  },
  fromAmino(_: MsgDelProjectResponseAmino): MsgDelProjectResponse {
    const message = createBaseMsgDelProjectResponse();
    return message;
  },
  toAmino(_: MsgDelProjectResponse): MsgDelProjectResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelProjectResponseAminoMsg): MsgDelProjectResponse {
    return MsgDelProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelProjectResponseProtoMsg): MsgDelProjectResponse {
    return MsgDelProjectResponse.decode(message.value);
  },
  toProto(message: MsgDelProjectResponse): Uint8Array {
    return MsgDelProjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelProjectResponse): MsgDelProjectResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgDelProjectResponse",
      value: MsgDelProjectResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDelProjectResponse.typeUrl, MsgDelProjectResponse);
function createBaseMsgAutoRenewal(): MsgAutoRenewal {
  return {
    creator: "",
    enable: false,
    consumer: "",
    index: ""
  };
}
export const MsgAutoRenewal = {
  typeUrl: "/lavanet.lava.subscription.MsgAutoRenewal",
  aminoType: "subscription/AutoRenewal",
  is(o: any): o is MsgAutoRenewal {
    return o && (o.$typeUrl === MsgAutoRenewal.typeUrl || typeof o.creator === "string" && typeof o.enable === "boolean" && typeof o.consumer === "string" && typeof o.index === "string");
  },
  isSDK(o: any): o is MsgAutoRenewalSDKType {
    return o && (o.$typeUrl === MsgAutoRenewal.typeUrl || typeof o.creator === "string" && typeof o.enable === "boolean" && typeof o.consumer === "string" && typeof o.index === "string");
  },
  isAmino(o: any): o is MsgAutoRenewalAmino {
    return o && (o.$typeUrl === MsgAutoRenewal.typeUrl || typeof o.creator === "string" && typeof o.enable === "boolean" && typeof o.consumer === "string" && typeof o.index === "string");
  },
  encode(message: MsgAutoRenewal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.enable === true) {
      writer.uint32(16).bool(message.enable);
    }
    if (message.consumer !== "") {
      writer.uint32(26).string(message.consumer);
    }
    if (message.index !== "") {
      writer.uint32(34).string(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAutoRenewal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAutoRenewal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.enable = reader.bool();
          break;
        case 3:
          message.consumer = reader.string();
          break;
        case 4:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAutoRenewal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      enable: isSet(object.enable) ? Boolean(object.enable) : false,
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
      index: isSet(object.index) ? String(object.index) : ""
    };
  },
  toJSON(message: MsgAutoRenewal): JsonSafe<MsgAutoRenewal> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.enable !== undefined && (obj.enable = message.enable);
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAutoRenewal>, I>>(object: I): MsgAutoRenewal {
    const message = createBaseMsgAutoRenewal();
    message.creator = object.creator ?? "";
    message.enable = object.enable ?? false;
    message.consumer = object.consumer ?? "";
    message.index = object.index ?? "";
    return message;
  },
  fromAmino(object: MsgAutoRenewalAmino): MsgAutoRenewal {
    const message = createBaseMsgAutoRenewal();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.enable !== undefined && object.enable !== null) {
      message.enable = object.enable;
    }
    if (object.consumer !== undefined && object.consumer !== null) {
      message.consumer = object.consumer;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: MsgAutoRenewal): MsgAutoRenewalAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.enable = message.enable === false ? undefined : message.enable;
    obj.consumer = message.consumer === "" ? undefined : message.consumer;
    obj.index = message.index === "" ? undefined : message.index;
    return obj;
  },
  fromAminoMsg(object: MsgAutoRenewalAminoMsg): MsgAutoRenewal {
    return MsgAutoRenewal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAutoRenewal): MsgAutoRenewalAminoMsg {
    return {
      type: "subscription/AutoRenewal",
      value: MsgAutoRenewal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAutoRenewalProtoMsg): MsgAutoRenewal {
    return MsgAutoRenewal.decode(message.value);
  },
  toProto(message: MsgAutoRenewal): Uint8Array {
    return MsgAutoRenewal.encode(message).finish();
  },
  toProtoMsg(message: MsgAutoRenewal): MsgAutoRenewalProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgAutoRenewal",
      value: MsgAutoRenewal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAutoRenewal.typeUrl, MsgAutoRenewal);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAutoRenewal.aminoType, MsgAutoRenewal.typeUrl);
function createBaseMsgAutoRenewalResponse(): MsgAutoRenewalResponse {
  return {};
}
export const MsgAutoRenewalResponse = {
  typeUrl: "/lavanet.lava.subscription.MsgAutoRenewalResponse",
  is(o: any): o is MsgAutoRenewalResponse {
    return o && o.$typeUrl === MsgAutoRenewalResponse.typeUrl;
  },
  isSDK(o: any): o is MsgAutoRenewalResponseSDKType {
    return o && o.$typeUrl === MsgAutoRenewalResponse.typeUrl;
  },
  isAmino(o: any): o is MsgAutoRenewalResponseAmino {
    return o && o.$typeUrl === MsgAutoRenewalResponse.typeUrl;
  },
  encode(_: MsgAutoRenewalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAutoRenewalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAutoRenewalResponse();
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
  fromJSON(_: any): MsgAutoRenewalResponse {
    return {};
  },
  toJSON(_: MsgAutoRenewalResponse): JsonSafe<MsgAutoRenewalResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAutoRenewalResponse>, I>>(_: I): MsgAutoRenewalResponse {
    const message = createBaseMsgAutoRenewalResponse();
    return message;
  },
  fromAmino(_: MsgAutoRenewalResponseAmino): MsgAutoRenewalResponse {
    const message = createBaseMsgAutoRenewalResponse();
    return message;
  },
  toAmino(_: MsgAutoRenewalResponse): MsgAutoRenewalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAutoRenewalResponseAminoMsg): MsgAutoRenewalResponse {
    return MsgAutoRenewalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAutoRenewalResponseProtoMsg): MsgAutoRenewalResponse {
    return MsgAutoRenewalResponse.decode(message.value);
  },
  toProto(message: MsgAutoRenewalResponse): Uint8Array {
    return MsgAutoRenewalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAutoRenewalResponse): MsgAutoRenewalResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.MsgAutoRenewalResponse",
      value: MsgAutoRenewalResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAutoRenewalResponse.typeUrl, MsgAutoRenewalResponse);