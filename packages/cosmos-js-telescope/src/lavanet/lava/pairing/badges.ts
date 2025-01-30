//@ts-nocheck
import { Badge, BadgeAmino, BadgeSDKType } from "./relay";
import { QueryGetPairingResponse, QueryGetPairingResponseAmino, QueryGetPairingResponseSDKType } from "./query";
import { Spec, SpecAmino, SpecSDKType } from "../spec/spec";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface GenerateBadgeRequest {
  badgeAddress: string;
  projectId: string;
  specId?: string;
}
export interface GenerateBadgeRequestProtoMsg {
  typeUrl: "/lavanet.lava.pairing.GenerateBadgeRequest";
  value: Uint8Array;
}
export interface GenerateBadgeRequestAmino {
  badge_address?: string;
  project_id?: string;
  spec_id?: string;
}
export interface GenerateBadgeRequestAminoMsg {
  type: "/lavanet.lava.pairing.GenerateBadgeRequest";
  value: GenerateBadgeRequestAmino;
}
export interface GenerateBadgeRequestSDKType {
  badge_address: string;
  project_id: string;
  spec_id?: string;
}
export interface GenerateBadgeResponse {
  badge?: Badge;
  getPairingResponse?: QueryGetPairingResponse;
  badgeSignerAddress: string;
  spec?: Spec;
}
export interface GenerateBadgeResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.GenerateBadgeResponse";
  value: Uint8Array;
}
export interface GenerateBadgeResponseAmino {
  badge?: BadgeAmino;
  get_pairing_response?: QueryGetPairingResponseAmino;
  badge_signer_address?: string;
  spec?: SpecAmino;
}
export interface GenerateBadgeResponseAminoMsg {
  type: "/lavanet.lava.pairing.GenerateBadgeResponse";
  value: GenerateBadgeResponseAmino;
}
export interface GenerateBadgeResponseSDKType {
  badge?: BadgeSDKType;
  get_pairing_response?: QueryGetPairingResponseSDKType;
  badge_signer_address: string;
  spec?: SpecSDKType;
}
function createBaseGenerateBadgeRequest(): GenerateBadgeRequest {
  return {
    badgeAddress: "",
    projectId: "",
    specId: undefined
  };
}
export const GenerateBadgeRequest = {
  typeUrl: "/lavanet.lava.pairing.GenerateBadgeRequest",
  is(o: any): o is GenerateBadgeRequest {
    return o && (o.$typeUrl === GenerateBadgeRequest.typeUrl || typeof o.badgeAddress === "string" && typeof o.projectId === "string");
  },
  isSDK(o: any): o is GenerateBadgeRequestSDKType {
    return o && (o.$typeUrl === GenerateBadgeRequest.typeUrl || typeof o.badge_address === "string" && typeof o.project_id === "string");
  },
  isAmino(o: any): o is GenerateBadgeRequestAmino {
    return o && (o.$typeUrl === GenerateBadgeRequest.typeUrl || typeof o.badge_address === "string" && typeof o.project_id === "string");
  },
  encode(message: GenerateBadgeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.badgeAddress !== "") {
      writer.uint32(10).string(message.badgeAddress);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.specId !== undefined) {
      writer.uint32(26).string(message.specId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenerateBadgeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateBadgeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badgeAddress = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.specId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenerateBadgeRequest {
    return {
      badgeAddress: isSet(object.badgeAddress) ? String(object.badgeAddress) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      specId: isSet(object.specId) ? String(object.specId) : undefined
    };
  },
  toJSON(message: GenerateBadgeRequest): JsonSafe<GenerateBadgeRequest> {
    const obj: any = {};
    message.badgeAddress !== undefined && (obj.badgeAddress = message.badgeAddress);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.specId !== undefined && (obj.specId = message.specId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenerateBadgeRequest>, I>>(object: I): GenerateBadgeRequest {
    const message = createBaseGenerateBadgeRequest();
    message.badgeAddress = object.badgeAddress ?? "";
    message.projectId = object.projectId ?? "";
    message.specId = object.specId ?? undefined;
    return message;
  },
  fromAmino(object: GenerateBadgeRequestAmino): GenerateBadgeRequest {
    const message = createBaseGenerateBadgeRequest();
    if (object.badge_address !== undefined && object.badge_address !== null) {
      message.badgeAddress = object.badge_address;
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    if (object.spec_id !== undefined && object.spec_id !== null) {
      message.specId = object.spec_id;
    }
    return message;
  },
  toAmino(message: GenerateBadgeRequest): GenerateBadgeRequestAmino {
    const obj: any = {};
    obj.badge_address = message.badgeAddress === "" ? undefined : message.badgeAddress;
    obj.project_id = message.projectId === "" ? undefined : message.projectId;
    obj.spec_id = message.specId === null ? undefined : message.specId;
    return obj;
  },
  fromAminoMsg(object: GenerateBadgeRequestAminoMsg): GenerateBadgeRequest {
    return GenerateBadgeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GenerateBadgeRequestProtoMsg): GenerateBadgeRequest {
    return GenerateBadgeRequest.decode(message.value);
  },
  toProto(message: GenerateBadgeRequest): Uint8Array {
    return GenerateBadgeRequest.encode(message).finish();
  },
  toProtoMsg(message: GenerateBadgeRequest): GenerateBadgeRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.GenerateBadgeRequest",
      value: GenerateBadgeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenerateBadgeRequest.typeUrl, GenerateBadgeRequest);
function createBaseGenerateBadgeResponse(): GenerateBadgeResponse {
  return {
    badge: undefined,
    getPairingResponse: undefined,
    badgeSignerAddress: "",
    spec: undefined
  };
}
export const GenerateBadgeResponse = {
  typeUrl: "/lavanet.lava.pairing.GenerateBadgeResponse",
  is(o: any): o is GenerateBadgeResponse {
    return o && (o.$typeUrl === GenerateBadgeResponse.typeUrl || typeof o.badgeSignerAddress === "string");
  },
  isSDK(o: any): o is GenerateBadgeResponseSDKType {
    return o && (o.$typeUrl === GenerateBadgeResponse.typeUrl || typeof o.badge_signer_address === "string");
  },
  isAmino(o: any): o is GenerateBadgeResponseAmino {
    return o && (o.$typeUrl === GenerateBadgeResponse.typeUrl || typeof o.badge_signer_address === "string");
  },
  encode(message: GenerateBadgeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.badge !== undefined) {
      Badge.encode(message.badge, writer.uint32(10).fork()).ldelim();
    }
    if (message.getPairingResponse !== undefined) {
      QueryGetPairingResponse.encode(message.getPairingResponse, writer.uint32(18).fork()).ldelim();
    }
    if (message.badgeSignerAddress !== "") {
      writer.uint32(26).string(message.badgeSignerAddress);
    }
    if (message.spec !== undefined) {
      Spec.encode(message.spec, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenerateBadgeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateBadgeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badge = Badge.decode(reader, reader.uint32());
          break;
        case 2:
          message.getPairingResponse = QueryGetPairingResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.badgeSignerAddress = reader.string();
          break;
        case 4:
          message.spec = Spec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenerateBadgeResponse {
    return {
      badge: isSet(object.badge) ? Badge.fromJSON(object.badge) : undefined,
      getPairingResponse: isSet(object.getPairingResponse) ? QueryGetPairingResponse.fromJSON(object.getPairingResponse) : undefined,
      badgeSignerAddress: isSet(object.badgeSignerAddress) ? String(object.badgeSignerAddress) : "",
      spec: isSet(object.spec) ? Spec.fromJSON(object.spec) : undefined
    };
  },
  toJSON(message: GenerateBadgeResponse): JsonSafe<GenerateBadgeResponse> {
    const obj: any = {};
    message.badge !== undefined && (obj.badge = message.badge ? Badge.toJSON(message.badge) : undefined);
    message.getPairingResponse !== undefined && (obj.getPairingResponse = message.getPairingResponse ? QueryGetPairingResponse.toJSON(message.getPairingResponse) : undefined);
    message.badgeSignerAddress !== undefined && (obj.badgeSignerAddress = message.badgeSignerAddress);
    message.spec !== undefined && (obj.spec = message.spec ? Spec.toJSON(message.spec) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenerateBadgeResponse>, I>>(object: I): GenerateBadgeResponse {
    const message = createBaseGenerateBadgeResponse();
    message.badge = object.badge !== undefined && object.badge !== null ? Badge.fromPartial(object.badge) : undefined;
    message.getPairingResponse = object.getPairingResponse !== undefined && object.getPairingResponse !== null ? QueryGetPairingResponse.fromPartial(object.getPairingResponse) : undefined;
    message.badgeSignerAddress = object.badgeSignerAddress ?? "";
    message.spec = object.spec !== undefined && object.spec !== null ? Spec.fromPartial(object.spec) : undefined;
    return message;
  },
  fromAmino(object: GenerateBadgeResponseAmino): GenerateBadgeResponse {
    const message = createBaseGenerateBadgeResponse();
    if (object.badge !== undefined && object.badge !== null) {
      message.badge = Badge.fromAmino(object.badge);
    }
    if (object.get_pairing_response !== undefined && object.get_pairing_response !== null) {
      message.getPairingResponse = QueryGetPairingResponse.fromAmino(object.get_pairing_response);
    }
    if (object.badge_signer_address !== undefined && object.badge_signer_address !== null) {
      message.badgeSignerAddress = object.badge_signer_address;
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = Spec.fromAmino(object.spec);
    }
    return message;
  },
  toAmino(message: GenerateBadgeResponse): GenerateBadgeResponseAmino {
    const obj: any = {};
    obj.badge = message.badge ? Badge.toAmino(message.badge) : undefined;
    obj.get_pairing_response = message.getPairingResponse ? QueryGetPairingResponse.toAmino(message.getPairingResponse) : undefined;
    obj.badge_signer_address = message.badgeSignerAddress === "" ? undefined : message.badgeSignerAddress;
    obj.spec = message.spec ? Spec.toAmino(message.spec) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenerateBadgeResponseAminoMsg): GenerateBadgeResponse {
    return GenerateBadgeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GenerateBadgeResponseProtoMsg): GenerateBadgeResponse {
    return GenerateBadgeResponse.decode(message.value);
  },
  toProto(message: GenerateBadgeResponse): Uint8Array {
    return GenerateBadgeResponse.encode(message).finish();
  },
  toProtoMsg(message: GenerateBadgeResponse): GenerateBadgeResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.GenerateBadgeResponse",
      value: GenerateBadgeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenerateBadgeResponse.typeUrl, GenerateBadgeResponse);