//@ts-nocheck
import { Grant, GrantAmino, GrantSDKType } from "./authz";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrant {
  granter: string;
  grantee: string;
  grant: Grant;
}
export interface MsgGrantProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrant";
  value: Uint8Array;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrantAmino {
  granter?: string;
  grantee?: string;
  grant: GrantAmino;
}
export interface MsgGrantAminoMsg {
  type: "cosmos-sdk/MsgGrant";
  value: MsgGrantAmino;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrantSDKType {
  granter: string;
  grantee: string;
  grant: GrantSDKType;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponse {}
export interface MsgGrantResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse";
  value: Uint8Array;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponseAmino {}
export interface MsgGrantResponseAminoMsg {
  type: "cosmos-sdk/MsgGrantResponse";
  value: MsgGrantResponseAmino;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponseSDKType {}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExec {
  grantee: string;
  /**
   * Execute Msg.
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs: (Any)[] | Any[];
}
export interface MsgExecProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgExec";
  value: Uint8Array;
}
export type MsgExecEncoded = Omit<MsgExec, "msgs"> & {
  /**
   * Execute Msg.
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs: (AnyProtoMsg)[];
};
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExecAmino {
  grantee?: string;
  /**
   * Execute Msg.
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs?: AnyAmino[];
}
export interface MsgExecAminoMsg {
  type: "cosmos-sdk/MsgExec";
  value: MsgExecAmino;
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExecSDKType {
  grantee: string;
  msgs: (AnySDKType)[];
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponse {
  results: Uint8Array[];
}
export interface MsgExecResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse";
  value: Uint8Array;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponseAmino {
  results?: string[];
}
export interface MsgExecResponseAminoMsg {
  type: "cosmos-sdk/MsgExecResponse";
  value: MsgExecResponseAmino;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponseSDKType {
  results: Uint8Array[];
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevoke {
  granter: string;
  grantee: string;
  msgTypeUrl: string;
}
export interface MsgRevokeProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevoke";
  value: Uint8Array;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevokeAmino {
  granter?: string;
  grantee?: string;
  msg_type_url?: string;
}
export interface MsgRevokeAminoMsg {
  type: "cosmos-sdk/MsgRevoke";
  value: MsgRevokeAmino;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevokeSDKType {
  granter: string;
  grantee: string;
  msg_type_url: string;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponse {}
export interface MsgRevokeResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse";
  value: Uint8Array;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponseAmino {}
export interface MsgRevokeResponseAminoMsg {
  type: "cosmos-sdk/MsgRevokeResponse";
  value: MsgRevokeResponseAmino;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponseSDKType {}
/** MsgRevokeAll revokes all grants issued by the specified granter. */
export interface MsgRevokeAll {
  granter: string;
}
export interface MsgRevokeAllProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeAll";
  value: Uint8Array;
}
/** MsgRevokeAll revokes all grants issued by the specified granter. */
export interface MsgRevokeAllAmino {
  granter?: string;
}
export interface MsgRevokeAllAminoMsg {
  type: "cosmos-sdk/MsgRevokeAll";
  value: MsgRevokeAllAmino;
}
/** MsgRevokeAll revokes all grants issued by the specified granter. */
export interface MsgRevokeAllSDKType {
  granter: string;
}
/** MsgRevokeAllResponse defines the Msg/MsgRevokeAllResponse response type. */
export interface MsgRevokeAllResponse {}
export interface MsgRevokeAllResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeAllResponse";
  value: Uint8Array;
}
/** MsgRevokeAllResponse defines the Msg/MsgRevokeAllResponse response type. */
export interface MsgRevokeAllResponseAmino {}
export interface MsgRevokeAllResponseAminoMsg {
  type: "cosmos-sdk/MsgRevokeAllResponse";
  value: MsgRevokeAllResponseAmino;
}
/** MsgRevokeAllResponse defines the Msg/MsgRevokeAllResponse response type. */
export interface MsgRevokeAllResponseSDKType {}
/** MsgPruneExpiredGrants prunes the expired grants. */
export interface MsgPruneExpiredGrants {
  pruner: string;
}
export interface MsgPruneExpiredGrantsProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgPruneExpiredGrants";
  value: Uint8Array;
}
/** MsgPruneExpiredGrants prunes the expired grants. */
export interface MsgPruneExpiredGrantsAmino {
  pruner?: string;
}
export interface MsgPruneExpiredGrantsAminoMsg {
  type: "cosmos-sdk/MsgPruneExpiredGrants";
  value: MsgPruneExpiredGrantsAmino;
}
/** MsgPruneExpiredGrants prunes the expired grants. */
export interface MsgPruneExpiredGrantsSDKType {
  pruner: string;
}
/** MsgPruneExpiredGrantsResponse defines the Msg/MsgPruneExpiredGrantsResponse response type. */
export interface MsgPruneExpiredGrantsResponse {}
export interface MsgPruneExpiredGrantsResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgPruneExpiredGrantsResponse";
  value: Uint8Array;
}
/** MsgPruneExpiredGrantsResponse defines the Msg/MsgPruneExpiredGrantsResponse response type. */
export interface MsgPruneExpiredGrantsResponseAmino {}
export interface MsgPruneExpiredGrantsResponseAminoMsg {
  type: "cosmos-sdk/MsgPruneExpiredGrantsResponse";
  value: MsgPruneExpiredGrantsResponseAmino;
}
/** MsgPruneExpiredGrantsResponse defines the Msg/MsgPruneExpiredGrantsResponse response type. */
export interface MsgPruneExpiredGrantsResponseSDKType {}
function createBaseMsgGrant(): MsgGrant {
  return {
    granter: "",
    grantee: "",
    grant: Grant.fromPartial({})
  };
}
export const MsgGrant = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
  encode(message: MsgGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.grant !== undefined) {
      Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.grant = Grant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgGrant>): MsgGrant {
    const message = createBaseMsgGrant();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.grant = object.grant !== undefined && object.grant !== null ? Grant.fromPartial(object.grant) : undefined;
    return message;
  },
  fromAmino(object: MsgGrantAmino): MsgGrant {
    const message = createBaseMsgGrant();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.grant !== undefined && object.grant !== null) {
      message.grant = Grant.fromAmino(object.grant);
    }
    return message;
  },
  toAmino(message: MsgGrant): MsgGrantAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.grant = message.grant ? Grant.toAmino(message.grant) : Grant.toAmino(Grant.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgGrantAminoMsg): MsgGrant {
    return MsgGrant.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrant): MsgGrantAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrant",
      value: MsgGrant.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgGrantProtoMsg): MsgGrant {
    return MsgGrant.decode(message.value);
  },
  toProto(message: MsgGrant): Uint8Array {
    return MsgGrant.encode(message).finish();
  },
  toProtoMsg(message: MsgGrant): MsgGrantProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
      value: MsgGrant.encode(message).finish()
    };
  }
};
function createBaseMsgGrantResponse(): MsgGrantResponse {
  return {};
}
export const MsgGrantResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
  encode(_: MsgGrantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantResponse();
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
  fromPartial(_: Partial<MsgGrantResponse>): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  },
  fromAmino(_: MsgGrantResponseAmino): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  },
  toAmino(_: MsgGrantResponse): MsgGrantResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGrantResponseAminoMsg): MsgGrantResponse {
    return MsgGrantResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrantResponse): MsgGrantResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrantResponse",
      value: MsgGrantResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgGrantResponseProtoMsg): MsgGrantResponse {
    return MsgGrantResponse.decode(message.value);
  },
  toProto(message: MsgGrantResponse): Uint8Array {
    return MsgGrantResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantResponse): MsgGrantResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
      value: MsgGrantResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExec(): MsgExec {
  return {
    grantee: "",
    msgs: []
  };
}
export const MsgExec = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExec",
  encode(message: MsgExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    for (const v of message.msgs) {
      Any.encode(v! as Any, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.msgs.push(Any.decode(reader, reader.uint32()) as Any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgExec>): MsgExec {
    const message = createBaseMsgExec();
    message.grantee = object.grantee ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgExecAmino): MsgExec {
    const message = createBaseMsgExec();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    message.msgs = object.msgs?.map(e => Cosmos_basev1beta1Msg_FromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgExec): MsgExecAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Cosmos_basev1beta1Msg_ToAmino(e as Any) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecAminoMsg): MsgExec {
    return MsgExec.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExec): MsgExecAminoMsg {
    return {
      type: "cosmos-sdk/MsgExec",
      value: MsgExec.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecProtoMsg): MsgExec {
    return MsgExec.decode(message.value);
  },
  toProto(message: MsgExec): Uint8Array {
    return MsgExec.encode(message).finish();
  },
  toProtoMsg(message: MsgExec): MsgExecProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgExec",
      value: MsgExec.encode(message).finish()
    };
  }
};
function createBaseMsgExecResponse(): MsgExecResponse {
  return {
    results: []
  };
}
export const MsgExecResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
  encode(message: MsgExecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgExecResponse>): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.results = object.results?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgExecResponseAmino): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.results = object.results?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgExecResponse): MsgExecResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => base64FromBytes(e));
    } else {
      obj.results = message.results;
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecResponseAminoMsg): MsgExecResponse {
    return MsgExecResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecResponse): MsgExecResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgExecResponse",
      value: MsgExecResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecResponseProtoMsg): MsgExecResponse {
    return MsgExecResponse.decode(message.value);
  },
  toProto(message: MsgExecResponse): Uint8Array {
    return MsgExecResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecResponse): MsgExecResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
      value: MsgExecResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevoke(): MsgRevoke {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: ""
  };
}
export const MsgRevoke = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
  encode(message: MsgRevoke, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevoke {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRevoke>): MsgRevoke {
    const message = createBaseMsgRevoke();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    return message;
  },
  fromAmino(object: MsgRevokeAmino): MsgRevoke {
    const message = createBaseMsgRevoke();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    return message;
  },
  toAmino(message: MsgRevoke): MsgRevokeAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.msg_type_url = message.msgTypeUrl === "" ? undefined : message.msgTypeUrl;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAminoMsg): MsgRevoke {
    return MsgRevoke.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevoke): MsgRevokeAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevoke",
      value: MsgRevoke.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeProtoMsg): MsgRevoke {
    return MsgRevoke.decode(message.value);
  },
  toProto(message: MsgRevoke): Uint8Array {
    return MsgRevoke.encode(message).finish();
  },
  toProtoMsg(message: MsgRevoke): MsgRevokeProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
      value: MsgRevoke.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeResponse(): MsgRevokeResponse {
  return {};
}
export const MsgRevokeResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
  encode(_: MsgRevokeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeResponse();
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
  fromPartial(_: Partial<MsgRevokeResponse>): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
  fromAmino(_: MsgRevokeResponseAmino): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
  toAmino(_: MsgRevokeResponse): MsgRevokeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeResponseAminoMsg): MsgRevokeResponse {
    return MsgRevokeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeResponse): MsgRevokeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevokeResponse",
      value: MsgRevokeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeResponseProtoMsg): MsgRevokeResponse {
    return MsgRevokeResponse.decode(message.value);
  },
  toProto(message: MsgRevokeResponse): Uint8Array {
    return MsgRevokeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeResponse): MsgRevokeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
      value: MsgRevokeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeAll(): MsgRevokeAll {
  return {
    granter: ""
  };
}
export const MsgRevokeAll = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeAll",
  encode(message: MsgRevokeAll, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAll {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRevokeAll>): MsgRevokeAll {
    const message = createBaseMsgRevokeAll();
    message.granter = object.granter ?? "";
    return message;
  },
  fromAmino(object: MsgRevokeAllAmino): MsgRevokeAll {
    const message = createBaseMsgRevokeAll();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    return message;
  },
  toAmino(message: MsgRevokeAll): MsgRevokeAllAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAllAminoMsg): MsgRevokeAll {
    return MsgRevokeAll.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeAll): MsgRevokeAllAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevokeAll",
      value: MsgRevokeAll.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeAllProtoMsg): MsgRevokeAll {
    return MsgRevokeAll.decode(message.value);
  },
  toProto(message: MsgRevokeAll): Uint8Array {
    return MsgRevokeAll.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeAll): MsgRevokeAllProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevokeAll",
      value: MsgRevokeAll.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeAllResponse(): MsgRevokeAllResponse {
  return {};
}
export const MsgRevokeAllResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeAllResponse",
  encode(_: MsgRevokeAllResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllResponse();
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
  fromPartial(_: Partial<MsgRevokeAllResponse>): MsgRevokeAllResponse {
    const message = createBaseMsgRevokeAllResponse();
    return message;
  },
  fromAmino(_: MsgRevokeAllResponseAmino): MsgRevokeAllResponse {
    const message = createBaseMsgRevokeAllResponse();
    return message;
  },
  toAmino(_: MsgRevokeAllResponse): MsgRevokeAllResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAllResponseAminoMsg): MsgRevokeAllResponse {
    return MsgRevokeAllResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeAllResponse): MsgRevokeAllResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevokeAllResponse",
      value: MsgRevokeAllResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeAllResponseProtoMsg): MsgRevokeAllResponse {
    return MsgRevokeAllResponse.decode(message.value);
  },
  toProto(message: MsgRevokeAllResponse): Uint8Array {
    return MsgRevokeAllResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeAllResponse): MsgRevokeAllResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevokeAllResponse",
      value: MsgRevokeAllResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPruneExpiredGrants(): MsgPruneExpiredGrants {
  return {
    pruner: ""
  };
}
export const MsgPruneExpiredGrants = {
  typeUrl: "/cosmos.authz.v1beta1.MsgPruneExpiredGrants",
  encode(message: MsgPruneExpiredGrants, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pruner !== "") {
      writer.uint32(10).string(message.pruner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneExpiredGrants {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneExpiredGrants();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pruner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPruneExpiredGrants>): MsgPruneExpiredGrants {
    const message = createBaseMsgPruneExpiredGrants();
    message.pruner = object.pruner ?? "";
    return message;
  },
  fromAmino(object: MsgPruneExpiredGrantsAmino): MsgPruneExpiredGrants {
    const message = createBaseMsgPruneExpiredGrants();
    if (object.pruner !== undefined && object.pruner !== null) {
      message.pruner = object.pruner;
    }
    return message;
  },
  toAmino(message: MsgPruneExpiredGrants): MsgPruneExpiredGrantsAmino {
    const obj: any = {};
    obj.pruner = message.pruner === "" ? undefined : message.pruner;
    return obj;
  },
  fromAminoMsg(object: MsgPruneExpiredGrantsAminoMsg): MsgPruneExpiredGrants {
    return MsgPruneExpiredGrants.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPruneExpiredGrants): MsgPruneExpiredGrantsAminoMsg {
    return {
      type: "cosmos-sdk/MsgPruneExpiredGrants",
      value: MsgPruneExpiredGrants.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPruneExpiredGrantsProtoMsg): MsgPruneExpiredGrants {
    return MsgPruneExpiredGrants.decode(message.value);
  },
  toProto(message: MsgPruneExpiredGrants): Uint8Array {
    return MsgPruneExpiredGrants.encode(message).finish();
  },
  toProtoMsg(message: MsgPruneExpiredGrants): MsgPruneExpiredGrantsProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgPruneExpiredGrants",
      value: MsgPruneExpiredGrants.encode(message).finish()
    };
  }
};
function createBaseMsgPruneExpiredGrantsResponse(): MsgPruneExpiredGrantsResponse {
  return {};
}
export const MsgPruneExpiredGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgPruneExpiredGrantsResponse",
  encode(_: MsgPruneExpiredGrantsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneExpiredGrantsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneExpiredGrantsResponse();
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
  fromPartial(_: Partial<MsgPruneExpiredGrantsResponse>): MsgPruneExpiredGrantsResponse {
    const message = createBaseMsgPruneExpiredGrantsResponse();
    return message;
  },
  fromAmino(_: MsgPruneExpiredGrantsResponseAmino): MsgPruneExpiredGrantsResponse {
    const message = createBaseMsgPruneExpiredGrantsResponse();
    return message;
  },
  toAmino(_: MsgPruneExpiredGrantsResponse): MsgPruneExpiredGrantsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPruneExpiredGrantsResponseAminoMsg): MsgPruneExpiredGrantsResponse {
    return MsgPruneExpiredGrantsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPruneExpiredGrantsResponse): MsgPruneExpiredGrantsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPruneExpiredGrantsResponse",
      value: MsgPruneExpiredGrantsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPruneExpiredGrantsResponseProtoMsg): MsgPruneExpiredGrantsResponse {
    return MsgPruneExpiredGrantsResponse.decode(message.value);
  },
  toProto(message: MsgPruneExpiredGrantsResponse): Uint8Array {
    return MsgPruneExpiredGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPruneExpiredGrantsResponse): MsgPruneExpiredGrantsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgPruneExpiredGrantsResponse",
      value: MsgPruneExpiredGrantsResponse.encode(message).finish()
    };
  }
};
export const Cosmos_basev1beta1Msg_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Cosmos_basev1beta1Msg_FromAmino = (content: AnyAmino): Any => {
  return Any.fromAmino(content);
};
export const Cosmos_basev1beta1Msg_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};