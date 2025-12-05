//@ts-nocheck
import { MsgDelegate, MsgDelegateAmino, MsgDelegateSDKType, MsgUndelegate, MsgUndelegateAmino, MsgUndelegateSDKType, MsgBeginRedelegate, MsgBeginRedelegateAmino, MsgBeginRedelegateSDKType, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationAmino, MsgCancelUnbondingDelegationSDKType, MsgEditValidator, MsgEditValidatorAmino, MsgEditValidatorSDKType } from "../../../cosmos/staking/v1beta1/tx";
import { MsgUpdateParams as MsgUpdateParams1 } from "../../../cosmos/staking/v1beta1/tx";
import { MsgUpdateParamsAmino as MsgUpdateParams1Amino } from "../../../cosmos/staking/v1beta1/tx";
import { MsgUpdateParamsSDKType as MsgUpdateParams1SDKType } from "../../../cosmos/staking/v1beta1/tx";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** MsgWrappedDelegate is the message for delegating stakes */
export interface MsgWrappedDelegate {
  msg?: MsgDelegate;
}
export interface MsgWrappedDelegateProtoMsg {
  typeUrl: "/babylon.epoching.v1.MsgWrappedDelegate";
  value: Uint8Array;
}
/** MsgWrappedDelegate is the message for delegating stakes */
export interface MsgWrappedDelegateAmino {
  msg?: MsgDelegateAmino;
}
export interface MsgWrappedDelegateAminoMsg {
  type: "/babylon.epoching.v1.MsgWrappedDelegate";
  value: MsgWrappedDelegateAmino;
}
/** MsgWrappedDelegate is the message for delegating stakes */
export interface MsgWrappedDelegateSDKType {
  msg?: MsgDelegateSDKType;
}
/** MsgWrappedDelegate is the response to the MsgWrappedDelegate message */
export interface MsgWrappedDelegateResponse {}
export interface MsgWrappedDelegateResponseProtoMsg {
  typeUrl: "/babylon.epoching.v1.MsgWrappedDelegateResponse";
  value: Uint8Array;
}
/** MsgWrappedDelegate is the response to the MsgWrappedDelegate message */
export interface MsgWrappedDelegateResponseAmino {}
export interface MsgWrappedDelegateResponseAminoMsg {
  type: "/babylon.epoching.v1.MsgWrappedDelegateResponse";
  value: MsgWrappedDelegateResponseAmino;
}
/** MsgWrappedDelegate is the response to the MsgWrappedDelegate message */
export interface MsgWrappedDelegateResponseSDKType {}
/** MsgWrappedUndelegate is the message for undelegating stakes */
export interface MsgWrappedUndelegate {
  msg?: MsgUndelegate;
}
export interface MsgWrappedUndelegateProtoMsg {
  typeUrl: "/babylon.epoching.v1.MsgWrappedUndelegate";
  value: Uint8Array;
}
/** MsgWrappedUndelegate is the message for undelegating stakes */
export interface MsgWrappedUndelegateAmino {
  msg?: MsgUndelegateAmino;
}
export interface MsgWrappedUndelegateAminoMsg {
  type: "/babylon.epoching.v1.MsgWrappedUndelegate";
  value: MsgWrappedUndelegateAmino;
}
/** MsgWrappedUndelegate is the message for undelegating stakes */
export interface MsgWrappedUndelegateSDKType {
  msg?: MsgUndelegateSDKType;
}
/**
 * MsgWrappedUndelegateResponse is the response to the MsgWrappedUndelegate
 * message
 */
export interface MsgWrappedUndelegateResponse {}
export interface MsgWrappedUndelegateResponseProtoMsg {
  typeUrl: "/babylon.epoching.v1.MsgWrappedUndelegateResponse";
  value: Uint8Array;
}
/**
 * MsgWrappedUndelegateResponse is the response to the MsgWrappedUndelegate
 * message
 */
export interface MsgWrappedUndelegateResponseAmino {}
export interface MsgWrappedUndelegateResponseAminoMsg {
  type: "/babylon.epoching.v1.MsgWrappedUndelegateResponse";
  value: MsgWrappedUndelegateResponseAmino;
}
/**
 * MsgWrappedUndelegateResponse is the response to the MsgWrappedUndelegate
 * message
 */
export interface MsgWrappedUndelegateResponseSDKType {}
/**
 * MsgWrappedDelegate is the message for moving bonded stakes from a
 * validator to another validator
 */
export interface MsgWrappedBeginRedelegate {
  msg?: MsgBeginRedelegate;
}
export interface MsgWrappedBeginRedelegateProtoMsg {
  typeUrl: "/babylon.epoching.v1.MsgWrappedBeginRedelegate";
  value: Uint8Array;
}
/**
 * MsgWrappedDelegate is the message for moving bonded stakes from a
 * validator to another validator
 */
export interface MsgWrappedBeginRedelegateAmino {
  msg?: MsgBeginRedelegateAmino;
}
export interface MsgWrappedBeginRedelegateAminoMsg {
  type: "/babylon.epoching.v1.MsgWrappedBeginRedelegate";
  value: MsgWrappedBeginRedelegateAmino;
}
/**
 * MsgWrappedDelegate is the message for moving bonded stakes from a
 * validator to another validator
 */
export interface MsgWrappedBeginRedelegateSDKType {
  msg?: MsgBeginRedelegateSDKType;
}
/**
 * MsgWrappedBeginRedelegateResponse is the response to the
 * MsgWrappedBeginRedelegate message
 */
export interface MsgWrappedBeginRedelegateResponse {}
export interface MsgWrappedBeginRedelegateResponseProtoMsg {
  typeUrl: "/babylon.epoching.v1.MsgWrappedBeginRedelegateResponse";
  value: Uint8Array;
}
/**
 * MsgWrappedBeginRedelegateResponse is the response to the
 * MsgWrappedBeginRedelegate message
 */
export interface MsgWrappedBeginRedelegateResponseAmino {}
export interface MsgWrappedBeginRedelegateResponseAminoMsg {
  type: "/babylon.epoching.v1.MsgWrappedBeginRedelegateResponse";
  value: MsgWrappedBeginRedelegateResponseAmino;
}
/**
 * MsgWrappedBeginRedelegateResponse is the response to the
 * MsgWrappedBeginRedelegate message
 */
export interface MsgWrappedBeginRedelegateResponseSDKType {}
/**
 * MsgWrappedCancelUnbondingDelegation is the message for cancelling
 * an unbonding delegation
 */
export interface MsgWrappedCancelUnbondingDelegation {
  msg?: MsgCancelUnbondingDelegation;
}
export interface MsgWrappedCancelUnbondingDelegationProtoMsg {
  typeUrl: "/babylon.epoching.v1.MsgWrappedCancelUnbondingDelegation";
  value: Uint8Array;
}
/**
 * MsgWrappedCancelUnbondingDelegation is the message for cancelling
 * an unbonding delegation
 */
export interface MsgWrappedCancelUnbondingDelegationAmino {
  msg?: MsgCancelUnbondingDelegationAmino;
}
export interface MsgWrappedCancelUnbondingDelegationAminoMsg {
  type: "/babylon.epoching.v1.MsgWrappedCancelUnbondingDelegation";
  value: MsgWrappedCancelUnbondingDelegationAmino;
}
/**
 * MsgWrappedCancelUnbondingDelegation is the message for cancelling
 * an unbonding delegation
 */
export interface MsgWrappedCancelUnbondingDelegationSDKType {
  msg?: MsgCancelUnbondingDelegationSDKType;
}
/**
 * MsgWrappedCancelUnbondingDelegationResponse is the response to the
 * MsgWrappedCancelUnbondingDelegation message
 */
export interface MsgWrappedCancelUnbondingDelegationResponse {}
export interface MsgWrappedCancelUnbondingDelegationResponseProtoMsg {
  typeUrl: "/babylon.epoching.v1.MsgWrappedCancelUnbondingDelegationResponse";
  value: Uint8Array;
}
/**
 * MsgWrappedCancelUnbondingDelegationResponse is the response to the
 * MsgWrappedCancelUnbondingDelegation message
 */
export interface MsgWrappedCancelUnbondingDelegationResponseAmino {}
export interface MsgWrappedCancelUnbondingDelegationResponseAminoMsg {
  type: "/babylon.epoching.v1.MsgWrappedCancelUnbondingDelegationResponse";
  value: MsgWrappedCancelUnbondingDelegationResponseAmino;
}
/**
 * MsgWrappedCancelUnbondingDelegationResponse is the response to the
 * MsgWrappedCancelUnbondingDelegation message
 */
export interface MsgWrappedCancelUnbondingDelegationResponseSDKType {}
/**
 * MsgWrappedEditValidator defines a message for updating validator description
 * and commission rate.
 */
export interface MsgWrappedEditValidator {
  msg?: MsgEditValidator;
}
export interface MsgWrappedEditValidatorProtoMsg {
  typeUrl: "/babylon.epoching.v1.MsgWrappedEditValidator";
  value: Uint8Array;
}
/**
 * MsgWrappedEditValidator defines a message for updating validator description
 * and commission rate.
 */
export interface MsgWrappedEditValidatorAmino {
  msg?: MsgEditValidatorAmino;
}
export interface MsgWrappedEditValidatorAminoMsg {
  type: "/babylon.epoching.v1.MsgWrappedEditValidator";
  value: MsgWrappedEditValidatorAmino;
}
/**
 * MsgWrappedEditValidator defines a message for updating validator description
 * and commission rate.
 */
export interface MsgWrappedEditValidatorSDKType {
  msg?: MsgEditValidatorSDKType;
}
/** MsgWrappedEditValidatorResponse is the response to the MsgWrappedEditValidator message. */
export interface MsgWrappedEditValidatorResponse {}
export interface MsgWrappedEditValidatorResponseProtoMsg {
  typeUrl: "/babylon.epoching.v1.MsgWrappedEditValidatorResponse";
  value: Uint8Array;
}
/** MsgWrappedEditValidatorResponse is the response to the MsgWrappedEditValidator message. */
export interface MsgWrappedEditValidatorResponseAmino {}
export interface MsgWrappedEditValidatorResponseAminoMsg {
  type: "/babylon.epoching.v1.MsgWrappedEditValidatorResponse";
  value: MsgWrappedEditValidatorResponseAmino;
}
/** MsgWrappedEditValidatorResponse is the response to the MsgWrappedEditValidator message. */
export interface MsgWrappedEditValidatorResponseSDKType {}
/** MsgWrappedStakingUpdateParams defines a message for updating x/staking module parameters. */
export interface MsgWrappedStakingUpdateParams {
  msg?: MsgUpdateParams1;
}
export interface MsgWrappedStakingUpdateParamsProtoMsg {
  typeUrl: "/babylon.epoching.v1.MsgWrappedStakingUpdateParams";
  value: Uint8Array;
}
/** MsgWrappedStakingUpdateParams defines a message for updating x/staking module parameters. */
export interface MsgWrappedStakingUpdateParamsAmino {
  msg?: MsgUpdateParams1Amino;
}
export interface MsgWrappedStakingUpdateParamsAminoMsg {
  type: "/babylon.epoching.v1.MsgWrappedStakingUpdateParams";
  value: MsgWrappedStakingUpdateParamsAmino;
}
/** MsgWrappedStakingUpdateParams defines a message for updating x/staking module parameters. */
export interface MsgWrappedStakingUpdateParamsSDKType {
  msg?: MsgUpdateParams1SDKType;
}
/** MsgWrappedStakingUpdateParamsResponse is the response to the MsgWrappedStakingUpdateParams message. */
export interface MsgWrappedStakingUpdateParamsResponse {}
export interface MsgWrappedStakingUpdateParamsResponseProtoMsg {
  typeUrl: "/babylon.epoching.v1.MsgWrappedStakingUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgWrappedStakingUpdateParamsResponse is the response to the MsgWrappedStakingUpdateParams message. */
export interface MsgWrappedStakingUpdateParamsResponseAmino {}
export interface MsgWrappedStakingUpdateParamsResponseAminoMsg {
  type: "/babylon.epoching.v1.MsgWrappedStakingUpdateParamsResponse";
  value: MsgWrappedStakingUpdateParamsResponseAmino;
}
/** MsgWrappedStakingUpdateParamsResponse is the response to the MsgWrappedStakingUpdateParams message. */
export interface MsgWrappedStakingUpdateParamsResponseSDKType {}
/** MsgUpdateParams defines a message for updating epoching module parameters. */
export interface MsgUpdateParams {
  /**
   * authority is the address of the governance account.
   * just FYI: cosmos.AddressString marks that this field should use type alias
   * for AddressString instead of string, but the functionality is not yet implemented
   * in cosmos-proto
   */
  authority: string;
  /**
   * params defines the epoching parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/babylon.epoching.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams defines a message for updating epoching module parameters. */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address of the governance account.
   * just FYI: cosmos.AddressString marks that this field should use type alias
   * for AddressString instead of string, but the functionality is not yet implemented
   * in cosmos-proto
   */
  authority?: string;
  /**
   * params defines the epoching parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/babylon.epoching.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines a message for updating epoching module parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse is the response to the MsgUpdateParams message. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/babylon.epoching.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse is the response to the MsgUpdateParams message. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/babylon.epoching.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the response to the MsgUpdateParams message. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgWrappedDelegate(): MsgWrappedDelegate {
  return {
    msg: undefined
  };
}
export const MsgWrappedDelegate = {
  typeUrl: "/babylon.epoching.v1.MsgWrappedDelegate",
  is(o: any): o is MsgWrappedDelegate {
    return o && o.$typeUrl === MsgWrappedDelegate.typeUrl;
  },
  isSDK(o: any): o is MsgWrappedDelegateSDKType {
    return o && o.$typeUrl === MsgWrappedDelegate.typeUrl;
  },
  isAmino(o: any): o is MsgWrappedDelegateAmino {
    return o && o.$typeUrl === MsgWrappedDelegate.typeUrl;
  },
  encode(message: MsgWrappedDelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== undefined) {
      MsgDelegate.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWrappedDelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWrappedDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgDelegate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWrappedDelegate {
    return {
      msg: isSet(object.msg) ? MsgDelegate.fromJSON(object.msg) : undefined
    };
  },
  toJSON(message: MsgWrappedDelegate): JsonSafe<MsgWrappedDelegate> {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? MsgDelegate.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWrappedDelegate>, I>>(object: I): MsgWrappedDelegate {
    const message = createBaseMsgWrappedDelegate();
    message.msg = object.msg !== undefined && object.msg !== null ? MsgDelegate.fromPartial(object.msg) : undefined;
    return message;
  },
  fromAmino(object: MsgWrappedDelegateAmino): MsgWrappedDelegate {
    const message = createBaseMsgWrappedDelegate();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgDelegate.fromAmino(object.msg);
    }
    return message;
  },
  toAmino(message: MsgWrappedDelegate): MsgWrappedDelegateAmino {
    const obj: any = {};
    obj.msg = message.msg ? MsgDelegate.toAmino(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWrappedDelegateAminoMsg): MsgWrappedDelegate {
    return MsgWrappedDelegate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWrappedDelegateProtoMsg): MsgWrappedDelegate {
    return MsgWrappedDelegate.decode(message.value);
  },
  toProto(message: MsgWrappedDelegate): Uint8Array {
    return MsgWrappedDelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgWrappedDelegate): MsgWrappedDelegateProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.MsgWrappedDelegate",
      value: MsgWrappedDelegate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWrappedDelegate.typeUrl, MsgWrappedDelegate);
function createBaseMsgWrappedDelegateResponse(): MsgWrappedDelegateResponse {
  return {};
}
export const MsgWrappedDelegateResponse = {
  typeUrl: "/babylon.epoching.v1.MsgWrappedDelegateResponse",
  is(o: any): o is MsgWrappedDelegateResponse {
    return o && o.$typeUrl === MsgWrappedDelegateResponse.typeUrl;
  },
  isSDK(o: any): o is MsgWrappedDelegateResponseSDKType {
    return o && o.$typeUrl === MsgWrappedDelegateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWrappedDelegateResponseAmino {
    return o && o.$typeUrl === MsgWrappedDelegateResponse.typeUrl;
  },
  encode(_: MsgWrappedDelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWrappedDelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWrappedDelegateResponse();
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
  fromJSON(_: any): MsgWrappedDelegateResponse {
    return {};
  },
  toJSON(_: MsgWrappedDelegateResponse): JsonSafe<MsgWrappedDelegateResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWrappedDelegateResponse>, I>>(_: I): MsgWrappedDelegateResponse {
    const message = createBaseMsgWrappedDelegateResponse();
    return message;
  },
  fromAmino(_: MsgWrappedDelegateResponseAmino): MsgWrappedDelegateResponse {
    const message = createBaseMsgWrappedDelegateResponse();
    return message;
  },
  toAmino(_: MsgWrappedDelegateResponse): MsgWrappedDelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWrappedDelegateResponseAminoMsg): MsgWrappedDelegateResponse {
    return MsgWrappedDelegateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWrappedDelegateResponseProtoMsg): MsgWrappedDelegateResponse {
    return MsgWrappedDelegateResponse.decode(message.value);
  },
  toProto(message: MsgWrappedDelegateResponse): Uint8Array {
    return MsgWrappedDelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWrappedDelegateResponse): MsgWrappedDelegateResponseProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.MsgWrappedDelegateResponse",
      value: MsgWrappedDelegateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWrappedDelegateResponse.typeUrl, MsgWrappedDelegateResponse);
function createBaseMsgWrappedUndelegate(): MsgWrappedUndelegate {
  return {
    msg: undefined
  };
}
export const MsgWrappedUndelegate = {
  typeUrl: "/babylon.epoching.v1.MsgWrappedUndelegate",
  is(o: any): o is MsgWrappedUndelegate {
    return o && o.$typeUrl === MsgWrappedUndelegate.typeUrl;
  },
  isSDK(o: any): o is MsgWrappedUndelegateSDKType {
    return o && o.$typeUrl === MsgWrappedUndelegate.typeUrl;
  },
  isAmino(o: any): o is MsgWrappedUndelegateAmino {
    return o && o.$typeUrl === MsgWrappedUndelegate.typeUrl;
  },
  encode(message: MsgWrappedUndelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== undefined) {
      MsgUndelegate.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWrappedUndelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWrappedUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgUndelegate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWrappedUndelegate {
    return {
      msg: isSet(object.msg) ? MsgUndelegate.fromJSON(object.msg) : undefined
    };
  },
  toJSON(message: MsgWrappedUndelegate): JsonSafe<MsgWrappedUndelegate> {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? MsgUndelegate.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWrappedUndelegate>, I>>(object: I): MsgWrappedUndelegate {
    const message = createBaseMsgWrappedUndelegate();
    message.msg = object.msg !== undefined && object.msg !== null ? MsgUndelegate.fromPartial(object.msg) : undefined;
    return message;
  },
  fromAmino(object: MsgWrappedUndelegateAmino): MsgWrappedUndelegate {
    const message = createBaseMsgWrappedUndelegate();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgUndelegate.fromAmino(object.msg);
    }
    return message;
  },
  toAmino(message: MsgWrappedUndelegate): MsgWrappedUndelegateAmino {
    const obj: any = {};
    obj.msg = message.msg ? MsgUndelegate.toAmino(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWrappedUndelegateAminoMsg): MsgWrappedUndelegate {
    return MsgWrappedUndelegate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWrappedUndelegateProtoMsg): MsgWrappedUndelegate {
    return MsgWrappedUndelegate.decode(message.value);
  },
  toProto(message: MsgWrappedUndelegate): Uint8Array {
    return MsgWrappedUndelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgWrappedUndelegate): MsgWrappedUndelegateProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.MsgWrappedUndelegate",
      value: MsgWrappedUndelegate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWrappedUndelegate.typeUrl, MsgWrappedUndelegate);
function createBaseMsgWrappedUndelegateResponse(): MsgWrappedUndelegateResponse {
  return {};
}
export const MsgWrappedUndelegateResponse = {
  typeUrl: "/babylon.epoching.v1.MsgWrappedUndelegateResponse",
  is(o: any): o is MsgWrappedUndelegateResponse {
    return o && o.$typeUrl === MsgWrappedUndelegateResponse.typeUrl;
  },
  isSDK(o: any): o is MsgWrappedUndelegateResponseSDKType {
    return o && o.$typeUrl === MsgWrappedUndelegateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWrappedUndelegateResponseAmino {
    return o && o.$typeUrl === MsgWrappedUndelegateResponse.typeUrl;
  },
  encode(_: MsgWrappedUndelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWrappedUndelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWrappedUndelegateResponse();
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
  fromJSON(_: any): MsgWrappedUndelegateResponse {
    return {};
  },
  toJSON(_: MsgWrappedUndelegateResponse): JsonSafe<MsgWrappedUndelegateResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWrappedUndelegateResponse>, I>>(_: I): MsgWrappedUndelegateResponse {
    const message = createBaseMsgWrappedUndelegateResponse();
    return message;
  },
  fromAmino(_: MsgWrappedUndelegateResponseAmino): MsgWrappedUndelegateResponse {
    const message = createBaseMsgWrappedUndelegateResponse();
    return message;
  },
  toAmino(_: MsgWrappedUndelegateResponse): MsgWrappedUndelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWrappedUndelegateResponseAminoMsg): MsgWrappedUndelegateResponse {
    return MsgWrappedUndelegateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWrappedUndelegateResponseProtoMsg): MsgWrappedUndelegateResponse {
    return MsgWrappedUndelegateResponse.decode(message.value);
  },
  toProto(message: MsgWrappedUndelegateResponse): Uint8Array {
    return MsgWrappedUndelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWrappedUndelegateResponse): MsgWrappedUndelegateResponseProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.MsgWrappedUndelegateResponse",
      value: MsgWrappedUndelegateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWrappedUndelegateResponse.typeUrl, MsgWrappedUndelegateResponse);
function createBaseMsgWrappedBeginRedelegate(): MsgWrappedBeginRedelegate {
  return {
    msg: undefined
  };
}
export const MsgWrappedBeginRedelegate = {
  typeUrl: "/babylon.epoching.v1.MsgWrappedBeginRedelegate",
  is(o: any): o is MsgWrappedBeginRedelegate {
    return o && o.$typeUrl === MsgWrappedBeginRedelegate.typeUrl;
  },
  isSDK(o: any): o is MsgWrappedBeginRedelegateSDKType {
    return o && o.$typeUrl === MsgWrappedBeginRedelegate.typeUrl;
  },
  isAmino(o: any): o is MsgWrappedBeginRedelegateAmino {
    return o && o.$typeUrl === MsgWrappedBeginRedelegate.typeUrl;
  },
  encode(message: MsgWrappedBeginRedelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== undefined) {
      MsgBeginRedelegate.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWrappedBeginRedelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWrappedBeginRedelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgBeginRedelegate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWrappedBeginRedelegate {
    return {
      msg: isSet(object.msg) ? MsgBeginRedelegate.fromJSON(object.msg) : undefined
    };
  },
  toJSON(message: MsgWrappedBeginRedelegate): JsonSafe<MsgWrappedBeginRedelegate> {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? MsgBeginRedelegate.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWrappedBeginRedelegate>, I>>(object: I): MsgWrappedBeginRedelegate {
    const message = createBaseMsgWrappedBeginRedelegate();
    message.msg = object.msg !== undefined && object.msg !== null ? MsgBeginRedelegate.fromPartial(object.msg) : undefined;
    return message;
  },
  fromAmino(object: MsgWrappedBeginRedelegateAmino): MsgWrappedBeginRedelegate {
    const message = createBaseMsgWrappedBeginRedelegate();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgBeginRedelegate.fromAmino(object.msg);
    }
    return message;
  },
  toAmino(message: MsgWrappedBeginRedelegate): MsgWrappedBeginRedelegateAmino {
    const obj: any = {};
    obj.msg = message.msg ? MsgBeginRedelegate.toAmino(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWrappedBeginRedelegateAminoMsg): MsgWrappedBeginRedelegate {
    return MsgWrappedBeginRedelegate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWrappedBeginRedelegateProtoMsg): MsgWrappedBeginRedelegate {
    return MsgWrappedBeginRedelegate.decode(message.value);
  },
  toProto(message: MsgWrappedBeginRedelegate): Uint8Array {
    return MsgWrappedBeginRedelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgWrappedBeginRedelegate): MsgWrappedBeginRedelegateProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.MsgWrappedBeginRedelegate",
      value: MsgWrappedBeginRedelegate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWrappedBeginRedelegate.typeUrl, MsgWrappedBeginRedelegate);
function createBaseMsgWrappedBeginRedelegateResponse(): MsgWrappedBeginRedelegateResponse {
  return {};
}
export const MsgWrappedBeginRedelegateResponse = {
  typeUrl: "/babylon.epoching.v1.MsgWrappedBeginRedelegateResponse",
  is(o: any): o is MsgWrappedBeginRedelegateResponse {
    return o && o.$typeUrl === MsgWrappedBeginRedelegateResponse.typeUrl;
  },
  isSDK(o: any): o is MsgWrappedBeginRedelegateResponseSDKType {
    return o && o.$typeUrl === MsgWrappedBeginRedelegateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWrappedBeginRedelegateResponseAmino {
    return o && o.$typeUrl === MsgWrappedBeginRedelegateResponse.typeUrl;
  },
  encode(_: MsgWrappedBeginRedelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWrappedBeginRedelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWrappedBeginRedelegateResponse();
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
  fromJSON(_: any): MsgWrappedBeginRedelegateResponse {
    return {};
  },
  toJSON(_: MsgWrappedBeginRedelegateResponse): JsonSafe<MsgWrappedBeginRedelegateResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWrappedBeginRedelegateResponse>, I>>(_: I): MsgWrappedBeginRedelegateResponse {
    const message = createBaseMsgWrappedBeginRedelegateResponse();
    return message;
  },
  fromAmino(_: MsgWrappedBeginRedelegateResponseAmino): MsgWrappedBeginRedelegateResponse {
    const message = createBaseMsgWrappedBeginRedelegateResponse();
    return message;
  },
  toAmino(_: MsgWrappedBeginRedelegateResponse): MsgWrappedBeginRedelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWrappedBeginRedelegateResponseAminoMsg): MsgWrappedBeginRedelegateResponse {
    return MsgWrappedBeginRedelegateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWrappedBeginRedelegateResponseProtoMsg): MsgWrappedBeginRedelegateResponse {
    return MsgWrappedBeginRedelegateResponse.decode(message.value);
  },
  toProto(message: MsgWrappedBeginRedelegateResponse): Uint8Array {
    return MsgWrappedBeginRedelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWrappedBeginRedelegateResponse): MsgWrappedBeginRedelegateResponseProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.MsgWrappedBeginRedelegateResponse",
      value: MsgWrappedBeginRedelegateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWrappedBeginRedelegateResponse.typeUrl, MsgWrappedBeginRedelegateResponse);
function createBaseMsgWrappedCancelUnbondingDelegation(): MsgWrappedCancelUnbondingDelegation {
  return {
    msg: undefined
  };
}
export const MsgWrappedCancelUnbondingDelegation = {
  typeUrl: "/babylon.epoching.v1.MsgWrappedCancelUnbondingDelegation",
  is(o: any): o is MsgWrappedCancelUnbondingDelegation {
    return o && o.$typeUrl === MsgWrappedCancelUnbondingDelegation.typeUrl;
  },
  isSDK(o: any): o is MsgWrappedCancelUnbondingDelegationSDKType {
    return o && o.$typeUrl === MsgWrappedCancelUnbondingDelegation.typeUrl;
  },
  isAmino(o: any): o is MsgWrappedCancelUnbondingDelegationAmino {
    return o && o.$typeUrl === MsgWrappedCancelUnbondingDelegation.typeUrl;
  },
  encode(message: MsgWrappedCancelUnbondingDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== undefined) {
      MsgCancelUnbondingDelegation.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWrappedCancelUnbondingDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWrappedCancelUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgCancelUnbondingDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWrappedCancelUnbondingDelegation {
    return {
      msg: isSet(object.msg) ? MsgCancelUnbondingDelegation.fromJSON(object.msg) : undefined
    };
  },
  toJSON(message: MsgWrappedCancelUnbondingDelegation): JsonSafe<MsgWrappedCancelUnbondingDelegation> {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? MsgCancelUnbondingDelegation.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWrappedCancelUnbondingDelegation>, I>>(object: I): MsgWrappedCancelUnbondingDelegation {
    const message = createBaseMsgWrappedCancelUnbondingDelegation();
    message.msg = object.msg !== undefined && object.msg !== null ? MsgCancelUnbondingDelegation.fromPartial(object.msg) : undefined;
    return message;
  },
  fromAmino(object: MsgWrappedCancelUnbondingDelegationAmino): MsgWrappedCancelUnbondingDelegation {
    const message = createBaseMsgWrappedCancelUnbondingDelegation();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgCancelUnbondingDelegation.fromAmino(object.msg);
    }
    return message;
  },
  toAmino(message: MsgWrappedCancelUnbondingDelegation): MsgWrappedCancelUnbondingDelegationAmino {
    const obj: any = {};
    obj.msg = message.msg ? MsgCancelUnbondingDelegation.toAmino(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWrappedCancelUnbondingDelegationAminoMsg): MsgWrappedCancelUnbondingDelegation {
    return MsgWrappedCancelUnbondingDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWrappedCancelUnbondingDelegationProtoMsg): MsgWrappedCancelUnbondingDelegation {
    return MsgWrappedCancelUnbondingDelegation.decode(message.value);
  },
  toProto(message: MsgWrappedCancelUnbondingDelegation): Uint8Array {
    return MsgWrappedCancelUnbondingDelegation.encode(message).finish();
  },
  toProtoMsg(message: MsgWrappedCancelUnbondingDelegation): MsgWrappedCancelUnbondingDelegationProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.MsgWrappedCancelUnbondingDelegation",
      value: MsgWrappedCancelUnbondingDelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWrappedCancelUnbondingDelegation.typeUrl, MsgWrappedCancelUnbondingDelegation);
function createBaseMsgWrappedCancelUnbondingDelegationResponse(): MsgWrappedCancelUnbondingDelegationResponse {
  return {};
}
export const MsgWrappedCancelUnbondingDelegationResponse = {
  typeUrl: "/babylon.epoching.v1.MsgWrappedCancelUnbondingDelegationResponse",
  is(o: any): o is MsgWrappedCancelUnbondingDelegationResponse {
    return o && o.$typeUrl === MsgWrappedCancelUnbondingDelegationResponse.typeUrl;
  },
  isSDK(o: any): o is MsgWrappedCancelUnbondingDelegationResponseSDKType {
    return o && o.$typeUrl === MsgWrappedCancelUnbondingDelegationResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWrappedCancelUnbondingDelegationResponseAmino {
    return o && o.$typeUrl === MsgWrappedCancelUnbondingDelegationResponse.typeUrl;
  },
  encode(_: MsgWrappedCancelUnbondingDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWrappedCancelUnbondingDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWrappedCancelUnbondingDelegationResponse();
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
  fromJSON(_: any): MsgWrappedCancelUnbondingDelegationResponse {
    return {};
  },
  toJSON(_: MsgWrappedCancelUnbondingDelegationResponse): JsonSafe<MsgWrappedCancelUnbondingDelegationResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWrappedCancelUnbondingDelegationResponse>, I>>(_: I): MsgWrappedCancelUnbondingDelegationResponse {
    const message = createBaseMsgWrappedCancelUnbondingDelegationResponse();
    return message;
  },
  fromAmino(_: MsgWrappedCancelUnbondingDelegationResponseAmino): MsgWrappedCancelUnbondingDelegationResponse {
    const message = createBaseMsgWrappedCancelUnbondingDelegationResponse();
    return message;
  },
  toAmino(_: MsgWrappedCancelUnbondingDelegationResponse): MsgWrappedCancelUnbondingDelegationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWrappedCancelUnbondingDelegationResponseAminoMsg): MsgWrappedCancelUnbondingDelegationResponse {
    return MsgWrappedCancelUnbondingDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWrappedCancelUnbondingDelegationResponseProtoMsg): MsgWrappedCancelUnbondingDelegationResponse {
    return MsgWrappedCancelUnbondingDelegationResponse.decode(message.value);
  },
  toProto(message: MsgWrappedCancelUnbondingDelegationResponse): Uint8Array {
    return MsgWrappedCancelUnbondingDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWrappedCancelUnbondingDelegationResponse): MsgWrappedCancelUnbondingDelegationResponseProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.MsgWrappedCancelUnbondingDelegationResponse",
      value: MsgWrappedCancelUnbondingDelegationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWrappedCancelUnbondingDelegationResponse.typeUrl, MsgWrappedCancelUnbondingDelegationResponse);
function createBaseMsgWrappedEditValidator(): MsgWrappedEditValidator {
  return {
    msg: undefined
  };
}
export const MsgWrappedEditValidator = {
  typeUrl: "/babylon.epoching.v1.MsgWrappedEditValidator",
  is(o: any): o is MsgWrappedEditValidator {
    return o && o.$typeUrl === MsgWrappedEditValidator.typeUrl;
  },
  isSDK(o: any): o is MsgWrappedEditValidatorSDKType {
    return o && o.$typeUrl === MsgWrappedEditValidator.typeUrl;
  },
  isAmino(o: any): o is MsgWrappedEditValidatorAmino {
    return o && o.$typeUrl === MsgWrappedEditValidator.typeUrl;
  },
  encode(message: MsgWrappedEditValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== undefined) {
      MsgEditValidator.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWrappedEditValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWrappedEditValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgEditValidator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWrappedEditValidator {
    return {
      msg: isSet(object.msg) ? MsgEditValidator.fromJSON(object.msg) : undefined
    };
  },
  toJSON(message: MsgWrappedEditValidator): JsonSafe<MsgWrappedEditValidator> {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? MsgEditValidator.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWrappedEditValidator>, I>>(object: I): MsgWrappedEditValidator {
    const message = createBaseMsgWrappedEditValidator();
    message.msg = object.msg !== undefined && object.msg !== null ? MsgEditValidator.fromPartial(object.msg) : undefined;
    return message;
  },
  fromAmino(object: MsgWrappedEditValidatorAmino): MsgWrappedEditValidator {
    const message = createBaseMsgWrappedEditValidator();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgEditValidator.fromAmino(object.msg);
    }
    return message;
  },
  toAmino(message: MsgWrappedEditValidator): MsgWrappedEditValidatorAmino {
    const obj: any = {};
    obj.msg = message.msg ? MsgEditValidator.toAmino(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWrappedEditValidatorAminoMsg): MsgWrappedEditValidator {
    return MsgWrappedEditValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWrappedEditValidatorProtoMsg): MsgWrappedEditValidator {
    return MsgWrappedEditValidator.decode(message.value);
  },
  toProto(message: MsgWrappedEditValidator): Uint8Array {
    return MsgWrappedEditValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgWrappedEditValidator): MsgWrappedEditValidatorProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.MsgWrappedEditValidator",
      value: MsgWrappedEditValidator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWrappedEditValidator.typeUrl, MsgWrappedEditValidator);
function createBaseMsgWrappedEditValidatorResponse(): MsgWrappedEditValidatorResponse {
  return {};
}
export const MsgWrappedEditValidatorResponse = {
  typeUrl: "/babylon.epoching.v1.MsgWrappedEditValidatorResponse",
  is(o: any): o is MsgWrappedEditValidatorResponse {
    return o && o.$typeUrl === MsgWrappedEditValidatorResponse.typeUrl;
  },
  isSDK(o: any): o is MsgWrappedEditValidatorResponseSDKType {
    return o && o.$typeUrl === MsgWrappedEditValidatorResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWrappedEditValidatorResponseAmino {
    return o && o.$typeUrl === MsgWrappedEditValidatorResponse.typeUrl;
  },
  encode(_: MsgWrappedEditValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWrappedEditValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWrappedEditValidatorResponse();
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
  fromJSON(_: any): MsgWrappedEditValidatorResponse {
    return {};
  },
  toJSON(_: MsgWrappedEditValidatorResponse): JsonSafe<MsgWrappedEditValidatorResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWrappedEditValidatorResponse>, I>>(_: I): MsgWrappedEditValidatorResponse {
    const message = createBaseMsgWrappedEditValidatorResponse();
    return message;
  },
  fromAmino(_: MsgWrappedEditValidatorResponseAmino): MsgWrappedEditValidatorResponse {
    const message = createBaseMsgWrappedEditValidatorResponse();
    return message;
  },
  toAmino(_: MsgWrappedEditValidatorResponse): MsgWrappedEditValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWrappedEditValidatorResponseAminoMsg): MsgWrappedEditValidatorResponse {
    return MsgWrappedEditValidatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWrappedEditValidatorResponseProtoMsg): MsgWrappedEditValidatorResponse {
    return MsgWrappedEditValidatorResponse.decode(message.value);
  },
  toProto(message: MsgWrappedEditValidatorResponse): Uint8Array {
    return MsgWrappedEditValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWrappedEditValidatorResponse): MsgWrappedEditValidatorResponseProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.MsgWrappedEditValidatorResponse",
      value: MsgWrappedEditValidatorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWrappedEditValidatorResponse.typeUrl, MsgWrappedEditValidatorResponse);
function createBaseMsgWrappedStakingUpdateParams(): MsgWrappedStakingUpdateParams {
  return {
    msg: undefined
  };
}
export const MsgWrappedStakingUpdateParams = {
  typeUrl: "/babylon.epoching.v1.MsgWrappedStakingUpdateParams",
  is(o: any): o is MsgWrappedStakingUpdateParams {
    return o && o.$typeUrl === MsgWrappedStakingUpdateParams.typeUrl;
  },
  isSDK(o: any): o is MsgWrappedStakingUpdateParamsSDKType {
    return o && o.$typeUrl === MsgWrappedStakingUpdateParams.typeUrl;
  },
  isAmino(o: any): o is MsgWrappedStakingUpdateParamsAmino {
    return o && o.$typeUrl === MsgWrappedStakingUpdateParams.typeUrl;
  },
  encode(message: MsgWrappedStakingUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== undefined) {
      MsgUpdateParams1.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWrappedStakingUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWrappedStakingUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = MsgUpdateParams1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWrappedStakingUpdateParams {
    return {
      msg: isSet(object.msg) ? MsgUpdateParams1.fromJSON(object.msg) : undefined
    };
  },
  toJSON(message: MsgWrappedStakingUpdateParams): JsonSafe<MsgWrappedStakingUpdateParams> {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? MsgUpdateParams1.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWrappedStakingUpdateParams>, I>>(object: I): MsgWrappedStakingUpdateParams {
    const message = createBaseMsgWrappedStakingUpdateParams();
    message.msg = object.msg !== undefined && object.msg !== null ? MsgUpdateParams1.fromPartial(object.msg) : undefined;
    return message;
  },
  fromAmino(object: MsgWrappedStakingUpdateParamsAmino): MsgWrappedStakingUpdateParams {
    const message = createBaseMsgWrappedStakingUpdateParams();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgUpdateParams1.fromAmino(object.msg);
    }
    return message;
  },
  toAmino(message: MsgWrappedStakingUpdateParams): MsgWrappedStakingUpdateParamsAmino {
    const obj: any = {};
    obj.msg = message.msg ? MsgUpdateParams1.toAmino(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWrappedStakingUpdateParamsAminoMsg): MsgWrappedStakingUpdateParams {
    return MsgWrappedStakingUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWrappedStakingUpdateParamsProtoMsg): MsgWrappedStakingUpdateParams {
    return MsgWrappedStakingUpdateParams.decode(message.value);
  },
  toProto(message: MsgWrappedStakingUpdateParams): Uint8Array {
    return MsgWrappedStakingUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgWrappedStakingUpdateParams): MsgWrappedStakingUpdateParamsProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.MsgWrappedStakingUpdateParams",
      value: MsgWrappedStakingUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWrappedStakingUpdateParams.typeUrl, MsgWrappedStakingUpdateParams);
function createBaseMsgWrappedStakingUpdateParamsResponse(): MsgWrappedStakingUpdateParamsResponse {
  return {};
}
export const MsgWrappedStakingUpdateParamsResponse = {
  typeUrl: "/babylon.epoching.v1.MsgWrappedStakingUpdateParamsResponse",
  is(o: any): o is MsgWrappedStakingUpdateParamsResponse {
    return o && o.$typeUrl === MsgWrappedStakingUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgWrappedStakingUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgWrappedStakingUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWrappedStakingUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgWrappedStakingUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgWrappedStakingUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWrappedStakingUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWrappedStakingUpdateParamsResponse();
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
  fromJSON(_: any): MsgWrappedStakingUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgWrappedStakingUpdateParamsResponse): JsonSafe<MsgWrappedStakingUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWrappedStakingUpdateParamsResponse>, I>>(_: I): MsgWrappedStakingUpdateParamsResponse {
    const message = createBaseMsgWrappedStakingUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgWrappedStakingUpdateParamsResponseAmino): MsgWrappedStakingUpdateParamsResponse {
    const message = createBaseMsgWrappedStakingUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgWrappedStakingUpdateParamsResponse): MsgWrappedStakingUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWrappedStakingUpdateParamsResponseAminoMsg): MsgWrappedStakingUpdateParamsResponse {
    return MsgWrappedStakingUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWrappedStakingUpdateParamsResponseProtoMsg): MsgWrappedStakingUpdateParamsResponse {
    return MsgWrappedStakingUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgWrappedStakingUpdateParamsResponse): Uint8Array {
    return MsgWrappedStakingUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWrappedStakingUpdateParamsResponse): MsgWrappedStakingUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.MsgWrappedStakingUpdateParamsResponse",
      value: MsgWrappedStakingUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWrappedStakingUpdateParamsResponse.typeUrl, MsgWrappedStakingUpdateParamsResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/babylon.epoching.v1.MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/babylon.epoching.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);