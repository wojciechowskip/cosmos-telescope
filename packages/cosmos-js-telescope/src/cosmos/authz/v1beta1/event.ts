//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** EventGrant is emitted on Msg/Grant */
export interface EventGrant {
  /** Msg type URL for which an authorization is granted */
  msgTypeUrl: string;
  /** Granter account address */
  granter: string;
  /** Grantee account address */
  grantee: string;
}
export interface EventGrantProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.EventGrant";
  value: Uint8Array;
}
/** EventGrant is emitted on Msg/Grant */
export interface EventGrantAmino {
  /** Msg type URL for which an authorization is granted */
  msg_type_url?: string;
  /** Granter account address */
  granter?: string;
  /** Grantee account address */
  grantee?: string;
}
export interface EventGrantAminoMsg {
  type: "cosmos-sdk/EventGrant";
  value: EventGrantAmino;
}
/** EventGrant is emitted on Msg/Grant */
export interface EventGrantSDKType {
  msg_type_url: string;
  granter: string;
  grantee: string;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevoke {
  /** Msg type URL for which an authorization is revoked */
  msgTypeUrl: string;
  /** Granter account address */
  granter: string;
  /** Grantee account address */
  grantee: string;
}
export interface EventRevokeProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.EventRevoke";
  value: Uint8Array;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevokeAmino {
  /** Msg type URL for which an authorization is revoked */
  msg_type_url?: string;
  /** Granter account address */
  granter?: string;
  /** Grantee account address */
  grantee?: string;
}
export interface EventRevokeAminoMsg {
  type: "cosmos-sdk/EventRevoke";
  value: EventRevokeAmino;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevokeSDKType {
  msg_type_url: string;
  granter: string;
  grantee: string;
}
/** EventRevokeAll is emitted on Msg/RevokeAll */
export interface EventRevokeAll {
  /** Msg type URL for which all authorizations are revoked */
  msgTypeUrl: string;
  /** Granter account address */
  granter: string;
}
export interface EventRevokeAllProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.EventRevokeAll";
  value: Uint8Array;
}
/** EventRevokeAll is emitted on Msg/RevokeAll */
export interface EventRevokeAllAmino {
  /** Msg type URL for which all authorizations are revoked */
  msg_type_url?: string;
  /** Granter account address */
  granter?: string;
}
export interface EventRevokeAllAminoMsg {
  type: "cosmos-sdk/EventRevokeAll";
  value: EventRevokeAllAmino;
}
/** EventRevokeAll is emitted on Msg/RevokeAll */
export interface EventRevokeAllSDKType {
  msg_type_url: string;
  granter: string;
}
/** EventPruneExpiredGrants is emitted on Msg/PruneExpiredGrants */
export interface EventPruneExpiredGrants {
  /** Address of the pruner */
  pruner: string;
}
export interface EventPruneExpiredGrantsProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.EventPruneExpiredGrants";
  value: Uint8Array;
}
/** EventPruneExpiredGrants is emitted on Msg/PruneExpiredGrants */
export interface EventPruneExpiredGrantsAmino {
  /** Address of the pruner */
  pruner?: string;
}
export interface EventPruneExpiredGrantsAminoMsg {
  type: "cosmos-sdk/EventPruneExpiredGrants";
  value: EventPruneExpiredGrantsAmino;
}
/** EventPruneExpiredGrants is emitted on Msg/PruneExpiredGrants */
export interface EventPruneExpiredGrantsSDKType {
  pruner: string;
}
function createBaseEventGrant(): EventGrant {
  return {
    msgTypeUrl: "",
    granter: "",
    grantee: ""
  };
}
export const EventGrant = {
  typeUrl: "/cosmos.authz.v1beta1.EventGrant",
  encode(message: EventGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgTypeUrl !== "") {
      writer.uint32(18).string(message.msgTypeUrl);
    }
    if (message.granter !== "") {
      writer.uint32(26).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.msgTypeUrl = reader.string();
          break;
        case 3:
          message.granter = reader.string();
          break;
        case 4:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventGrant>): EventGrant {
    const message = createBaseEventGrant();
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: EventGrantAmino): EventGrant {
    const message = createBaseEventGrant();
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: EventGrant): EventGrantAmino {
    const obj: any = {};
    obj.msg_type_url = message.msgTypeUrl === "" ? undefined : message.msgTypeUrl;
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: EventGrantAminoMsg): EventGrant {
    return EventGrant.fromAmino(object.value);
  },
  toAminoMsg(message: EventGrant): EventGrantAminoMsg {
    return {
      type: "cosmos-sdk/EventGrant",
      value: EventGrant.toAmino(message)
    };
  },
  fromProtoMsg(message: EventGrantProtoMsg): EventGrant {
    return EventGrant.decode(message.value);
  },
  toProto(message: EventGrant): Uint8Array {
    return EventGrant.encode(message).finish();
  },
  toProtoMsg(message: EventGrant): EventGrantProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.EventGrant",
      value: EventGrant.encode(message).finish()
    };
  }
};
function createBaseEventRevoke(): EventRevoke {
  return {
    msgTypeUrl: "",
    granter: "",
    grantee: ""
  };
}
export const EventRevoke = {
  typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
  encode(message: EventRevoke, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgTypeUrl !== "") {
      writer.uint32(18).string(message.msgTypeUrl);
    }
    if (message.granter !== "") {
      writer.uint32(26).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRevoke {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.msgTypeUrl = reader.string();
          break;
        case 3:
          message.granter = reader.string();
          break;
        case 4:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventRevoke>): EventRevoke {
    const message = createBaseEventRevoke();
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: EventRevokeAmino): EventRevoke {
    const message = createBaseEventRevoke();
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: EventRevoke): EventRevokeAmino {
    const obj: any = {};
    obj.msg_type_url = message.msgTypeUrl === "" ? undefined : message.msgTypeUrl;
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: EventRevokeAminoMsg): EventRevoke {
    return EventRevoke.fromAmino(object.value);
  },
  toAminoMsg(message: EventRevoke): EventRevokeAminoMsg {
    return {
      type: "cosmos-sdk/EventRevoke",
      value: EventRevoke.toAmino(message)
    };
  },
  fromProtoMsg(message: EventRevokeProtoMsg): EventRevoke {
    return EventRevoke.decode(message.value);
  },
  toProto(message: EventRevoke): Uint8Array {
    return EventRevoke.encode(message).finish();
  },
  toProtoMsg(message: EventRevoke): EventRevokeProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
      value: EventRevoke.encode(message).finish()
    };
  }
};
function createBaseEventRevokeAll(): EventRevokeAll {
  return {
    msgTypeUrl: "",
    granter: ""
  };
}
export const EventRevokeAll = {
  typeUrl: "/cosmos.authz.v1beta1.EventRevokeAll",
  encode(message: EventRevokeAll, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgTypeUrl !== "") {
      writer.uint32(18).string(message.msgTypeUrl);
    }
    if (message.granter !== "") {
      writer.uint32(26).string(message.granter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRevokeAll {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRevokeAll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.msgTypeUrl = reader.string();
          break;
        case 3:
          message.granter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventRevokeAll>): EventRevokeAll {
    const message = createBaseEventRevokeAll();
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    message.granter = object.granter ?? "";
    return message;
  },
  fromAmino(object: EventRevokeAllAmino): EventRevokeAll {
    const message = createBaseEventRevokeAll();
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    return message;
  },
  toAmino(message: EventRevokeAll): EventRevokeAllAmino {
    const obj: any = {};
    obj.msg_type_url = message.msgTypeUrl === "" ? undefined : message.msgTypeUrl;
    obj.granter = message.granter === "" ? undefined : message.granter;
    return obj;
  },
  fromAminoMsg(object: EventRevokeAllAminoMsg): EventRevokeAll {
    return EventRevokeAll.fromAmino(object.value);
  },
  toAminoMsg(message: EventRevokeAll): EventRevokeAllAminoMsg {
    return {
      type: "cosmos-sdk/EventRevokeAll",
      value: EventRevokeAll.toAmino(message)
    };
  },
  fromProtoMsg(message: EventRevokeAllProtoMsg): EventRevokeAll {
    return EventRevokeAll.decode(message.value);
  },
  toProto(message: EventRevokeAll): Uint8Array {
    return EventRevokeAll.encode(message).finish();
  },
  toProtoMsg(message: EventRevokeAll): EventRevokeAllProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.EventRevokeAll",
      value: EventRevokeAll.encode(message).finish()
    };
  }
};
function createBaseEventPruneExpiredGrants(): EventPruneExpiredGrants {
  return {
    pruner: ""
  };
}
export const EventPruneExpiredGrants = {
  typeUrl: "/cosmos.authz.v1beta1.EventPruneExpiredGrants",
  encode(message: EventPruneExpiredGrants, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pruner !== "") {
      writer.uint32(18).string(message.pruner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPruneExpiredGrants {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPruneExpiredGrants();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pruner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventPruneExpiredGrants>): EventPruneExpiredGrants {
    const message = createBaseEventPruneExpiredGrants();
    message.pruner = object.pruner ?? "";
    return message;
  },
  fromAmino(object: EventPruneExpiredGrantsAmino): EventPruneExpiredGrants {
    const message = createBaseEventPruneExpiredGrants();
    if (object.pruner !== undefined && object.pruner !== null) {
      message.pruner = object.pruner;
    }
    return message;
  },
  toAmino(message: EventPruneExpiredGrants): EventPruneExpiredGrantsAmino {
    const obj: any = {};
    obj.pruner = message.pruner === "" ? undefined : message.pruner;
    return obj;
  },
  fromAminoMsg(object: EventPruneExpiredGrantsAminoMsg): EventPruneExpiredGrants {
    return EventPruneExpiredGrants.fromAmino(object.value);
  },
  toAminoMsg(message: EventPruneExpiredGrants): EventPruneExpiredGrantsAminoMsg {
    return {
      type: "cosmos-sdk/EventPruneExpiredGrants",
      value: EventPruneExpiredGrants.toAmino(message)
    };
  },
  fromProtoMsg(message: EventPruneExpiredGrantsProtoMsg): EventPruneExpiredGrants {
    return EventPruneExpiredGrants.decode(message.value);
  },
  toProto(message: EventPruneExpiredGrants): Uint8Array {
    return EventPruneExpiredGrants.encode(message).finish();
  },
  toProtoMsg(message: EventPruneExpiredGrants): EventPruneExpiredGrantsProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.EventPruneExpiredGrants",
      value: EventPruneExpiredGrants.encode(message).finish()
    };
  }
};