//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** EventBeginEpoch is the event emitted when an epoch has started */
export interface EventBeginEpoch {
  epochNumber: bigint;
}
export interface EventBeginEpochProtoMsg {
  typeUrl: "/babylon.epoching.v1.EventBeginEpoch";
  value: Uint8Array;
}
/** EventBeginEpoch is the event emitted when an epoch has started */
export interface EventBeginEpochAmino {
  epoch_number?: string;
}
export interface EventBeginEpochAminoMsg {
  type: "/babylon.epoching.v1.EventBeginEpoch";
  value: EventBeginEpochAmino;
}
/** EventBeginEpoch is the event emitted when an epoch has started */
export interface EventBeginEpochSDKType {
  epoch_number: bigint;
}
/** EventEndEpoch is the event emitted when an epoch has ended */
export interface EventEndEpoch {
  epochNumber: bigint;
}
export interface EventEndEpochProtoMsg {
  typeUrl: "/babylon.epoching.v1.EventEndEpoch";
  value: Uint8Array;
}
/** EventEndEpoch is the event emitted when an epoch has ended */
export interface EventEndEpochAmino {
  epoch_number?: string;
}
export interface EventEndEpochAminoMsg {
  type: "/babylon.epoching.v1.EventEndEpoch";
  value: EventEndEpochAmino;
}
/** EventEndEpoch is the event emitted when an epoch has ended */
export interface EventEndEpochSDKType {
  epoch_number: bigint;
}
/**
 * EventHandleQueuedMsg is the event emitted when a queued message has been
 * handled
 */
export interface EventHandleQueuedMsg {
  originalEventType: string;
  epochNumber: bigint;
  height: bigint;
  txId: Uint8Array;
  msgId: Uint8Array;
  originalAttributes: Uint8Array[];
  error: string;
}
export interface EventHandleQueuedMsgProtoMsg {
  typeUrl: "/babylon.epoching.v1.EventHandleQueuedMsg";
  value: Uint8Array;
}
/**
 * EventHandleQueuedMsg is the event emitted when a queued message has been
 * handled
 */
export interface EventHandleQueuedMsgAmino {
  original_event_type?: string;
  epoch_number?: string;
  height?: string;
  tx_id?: string;
  msg_id?: string;
  original_attributes?: string[];
  error?: string;
}
export interface EventHandleQueuedMsgAminoMsg {
  type: "/babylon.epoching.v1.EventHandleQueuedMsg";
  value: EventHandleQueuedMsgAmino;
}
/**
 * EventHandleQueuedMsg is the event emitted when a queued message has been
 * handled
 */
export interface EventHandleQueuedMsgSDKType {
  original_event_type: string;
  epoch_number: bigint;
  height: bigint;
  tx_id: Uint8Array;
  msg_id: Uint8Array;
  original_attributes: Uint8Array[];
  error: string;
}
/**
 * EventSlashThreshold is the event emitted when a set of validators have been
 * slashed
 */
export interface EventSlashThreshold {
  slashedVotingPower: bigint;
  totalVotingPower: bigint;
  slashedValidators: Uint8Array[];
}
export interface EventSlashThresholdProtoMsg {
  typeUrl: "/babylon.epoching.v1.EventSlashThreshold";
  value: Uint8Array;
}
/**
 * EventSlashThreshold is the event emitted when a set of validators have been
 * slashed
 */
export interface EventSlashThresholdAmino {
  slashed_voting_power?: string;
  total_voting_power?: string;
  slashed_validators?: string[];
}
export interface EventSlashThresholdAminoMsg {
  type: "/babylon.epoching.v1.EventSlashThreshold";
  value: EventSlashThresholdAmino;
}
/**
 * EventSlashThreshold is the event emitted when a set of validators have been
 * slashed
 */
export interface EventSlashThresholdSDKType {
  slashed_voting_power: bigint;
  total_voting_power: bigint;
  slashed_validators: Uint8Array[];
}
/**
 * EventWrappedDelegate is the event emitted when a MsgWrappedDelegate has been
 * queued
 */
export interface EventWrappedDelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount: bigint;
  denom: string;
  epochBoundary: bigint;
}
export interface EventWrappedDelegateProtoMsg {
  typeUrl: "/babylon.epoching.v1.EventWrappedDelegate";
  value: Uint8Array;
}
/**
 * EventWrappedDelegate is the event emitted when a MsgWrappedDelegate has been
 * queued
 */
export interface EventWrappedDelegateAmino {
  delegator_address?: string;
  validator_address?: string;
  amount?: string;
  denom?: string;
  epoch_boundary?: string;
}
export interface EventWrappedDelegateAminoMsg {
  type: "/babylon.epoching.v1.EventWrappedDelegate";
  value: EventWrappedDelegateAmino;
}
/**
 * EventWrappedDelegate is the event emitted when a MsgWrappedDelegate has been
 * queued
 */
export interface EventWrappedDelegateSDKType {
  delegator_address: string;
  validator_address: string;
  amount: bigint;
  denom: string;
  epoch_boundary: bigint;
}
/**
 * EventWrappedUndelegate is the event emitted when a MsgWrappedUndelegate has
 * been queued
 */
export interface EventWrappedUndelegate {
  delegatorAddress: string;
  validatorAddress: string;
  amount: bigint;
  denom: string;
  epochBoundary: bigint;
}
export interface EventWrappedUndelegateProtoMsg {
  typeUrl: "/babylon.epoching.v1.EventWrappedUndelegate";
  value: Uint8Array;
}
/**
 * EventWrappedUndelegate is the event emitted when a MsgWrappedUndelegate has
 * been queued
 */
export interface EventWrappedUndelegateAmino {
  delegator_address?: string;
  validator_address?: string;
  amount?: string;
  denom?: string;
  epoch_boundary?: string;
}
export interface EventWrappedUndelegateAminoMsg {
  type: "/babylon.epoching.v1.EventWrappedUndelegate";
  value: EventWrappedUndelegateAmino;
}
/**
 * EventWrappedUndelegate is the event emitted when a MsgWrappedUndelegate has
 * been queued
 */
export interface EventWrappedUndelegateSDKType {
  delegator_address: string;
  validator_address: string;
  amount: bigint;
  denom: string;
  epoch_boundary: bigint;
}
/**
 * EventWrappedBeginRedelegate is the event emitted when a
 * MsgWrappedBeginRedelegate has been queued
 */
export interface EventWrappedBeginRedelegate {
  delegatorAddress: string;
  sourceValidatorAddress: string;
  destinationValidatorAddress: string;
  amount: bigint;
  denom: string;
  epochBoundary: bigint;
}
export interface EventWrappedBeginRedelegateProtoMsg {
  typeUrl: "/babylon.epoching.v1.EventWrappedBeginRedelegate";
  value: Uint8Array;
}
/**
 * EventWrappedBeginRedelegate is the event emitted when a
 * MsgWrappedBeginRedelegate has been queued
 */
export interface EventWrappedBeginRedelegateAmino {
  delegator_address?: string;
  source_validator_address?: string;
  destination_validator_address?: string;
  amount?: string;
  denom?: string;
  epoch_boundary?: string;
}
export interface EventWrappedBeginRedelegateAminoMsg {
  type: "/babylon.epoching.v1.EventWrappedBeginRedelegate";
  value: EventWrappedBeginRedelegateAmino;
}
/**
 * EventWrappedBeginRedelegate is the event emitted when a
 * MsgWrappedBeginRedelegate has been queued
 */
export interface EventWrappedBeginRedelegateSDKType {
  delegator_address: string;
  source_validator_address: string;
  destination_validator_address: string;
  amount: bigint;
  denom: string;
  epoch_boundary: bigint;
}
/**
 * EventWrappedCancelUnbondingDelegation is the event emitted when a
 * MsgWrappedCancelUnbondingDelegation has been queued
 */
export interface EventWrappedCancelUnbondingDelegation {
  delegatorAddress: string;
  validatorAddress: string;
  amount: bigint;
  creationHeight: bigint;
  epochBoundary: bigint;
}
export interface EventWrappedCancelUnbondingDelegationProtoMsg {
  typeUrl: "/babylon.epoching.v1.EventWrappedCancelUnbondingDelegation";
  value: Uint8Array;
}
/**
 * EventWrappedCancelUnbondingDelegation is the event emitted when a
 * MsgWrappedCancelUnbondingDelegation has been queued
 */
export interface EventWrappedCancelUnbondingDelegationAmino {
  delegator_address?: string;
  validator_address?: string;
  amount?: string;
  creation_height?: string;
  epoch_boundary?: string;
}
export interface EventWrappedCancelUnbondingDelegationAminoMsg {
  type: "/babylon.epoching.v1.EventWrappedCancelUnbondingDelegation";
  value: EventWrappedCancelUnbondingDelegationAmino;
}
/**
 * EventWrappedCancelUnbondingDelegation is the event emitted when a
 * MsgWrappedCancelUnbondingDelegation has been queued
 */
export interface EventWrappedCancelUnbondingDelegationSDKType {
  delegator_address: string;
  validator_address: string;
  amount: bigint;
  creation_height: bigint;
  epoch_boundary: bigint;
}
/**
 * EventWrappedEditValidator is the event emitted when a
 * MsgWrappedEditValidator has been queued
 */
export interface EventWrappedEditValidator {
  validatorAddress: string;
  epochBoundary: bigint;
}
export interface EventWrappedEditValidatorProtoMsg {
  typeUrl: "/babylon.epoching.v1.EventWrappedEditValidator";
  value: Uint8Array;
}
/**
 * EventWrappedEditValidator is the event emitted when a
 * MsgWrappedEditValidator has been queued
 */
export interface EventWrappedEditValidatorAmino {
  validator_address?: string;
  epoch_boundary?: string;
}
export interface EventWrappedEditValidatorAminoMsg {
  type: "/babylon.epoching.v1.EventWrappedEditValidator";
  value: EventWrappedEditValidatorAmino;
}
/**
 * EventWrappedEditValidator is the event emitted when a
 * MsgWrappedEditValidator has been queued
 */
export interface EventWrappedEditValidatorSDKType {
  validator_address: string;
  epoch_boundary: bigint;
}
/**
 * EventWrappedStakingUpdateParams is the event emitted when a
 * MsgWrappedStakingUpdateParams has been queued
 */
export interface EventWrappedStakingUpdateParams {
  /** unbonding_time is the time duration of unbonding. */
  unbondingTime: string;
  /** max_validators is the maximum number of validators. */
  maxValidators: number;
  /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
  maxEntries: number;
  /** historical_entries is the number of historical entries to persist. */
  historicalEntries: number;
  /** bond_denom defines the bondable coin denomination. */
  bondDenom: string;
  /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
  minCommissionRate: string;
  epochBoundary: bigint;
}
export interface EventWrappedStakingUpdateParamsProtoMsg {
  typeUrl: "/babylon.epoching.v1.EventWrappedStakingUpdateParams";
  value: Uint8Array;
}
/**
 * EventWrappedStakingUpdateParams is the event emitted when a
 * MsgWrappedStakingUpdateParams has been queued
 */
export interface EventWrappedStakingUpdateParamsAmino {
  /** unbonding_time is the time duration of unbonding. */
  unbonding_time?: string;
  /** max_validators is the maximum number of validators. */
  max_validators?: number;
  /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
  max_entries?: number;
  /** historical_entries is the number of historical entries to persist. */
  historical_entries?: number;
  /** bond_denom defines the bondable coin denomination. */
  bond_denom?: string;
  /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
  min_commission_rate?: string;
  epoch_boundary?: string;
}
export interface EventWrappedStakingUpdateParamsAminoMsg {
  type: "/babylon.epoching.v1.EventWrappedStakingUpdateParams";
  value: EventWrappedStakingUpdateParamsAmino;
}
/**
 * EventWrappedStakingUpdateParams is the event emitted when a
 * MsgWrappedStakingUpdateParams has been queued
 */
export interface EventWrappedStakingUpdateParamsSDKType {
  unbonding_time: string;
  max_validators: number;
  max_entries: number;
  historical_entries: number;
  bond_denom: string;
  min_commission_rate: string;
  epoch_boundary: bigint;
}
/** EventUnlockFundsFailed is the event emitted when unlocking funds fails. */
export interface EventUnlockFundsFailed {
  /** epoch_number is the epoch number when the unlock funds operation failed */
  epochNumber: bigint;
  /** height is the block height when the message was originally submitted */
  height: bigint;
  /** tx_id is the ID of the transaction that contains the message */
  txId: Uint8Array;
  /** msg_id is the ID of the queued message */
  msgId: Uint8Array;
  /** error is the error message describing why the unlock funds operation failed */
  error: string;
  /** msg_type is the type of the message that failed to unlock funds */
  msgType: string;
}
export interface EventUnlockFundsFailedProtoMsg {
  typeUrl: "/babylon.epoching.v1.EventUnlockFundsFailed";
  value: Uint8Array;
}
/** EventUnlockFundsFailed is the event emitted when unlocking funds fails. */
export interface EventUnlockFundsFailedAmino {
  /** epoch_number is the epoch number when the unlock funds operation failed */
  epoch_number?: string;
  /** height is the block height when the message was originally submitted */
  height?: string;
  /** tx_id is the ID of the transaction that contains the message */
  tx_id?: string;
  /** msg_id is the ID of the queued message */
  msg_id?: string;
  /** error is the error message describing why the unlock funds operation failed */
  error?: string;
  /** msg_type is the type of the message that failed to unlock funds */
  msg_type?: string;
}
export interface EventUnlockFundsFailedAminoMsg {
  type: "/babylon.epoching.v1.EventUnlockFundsFailed";
  value: EventUnlockFundsFailedAmino;
}
/** EventUnlockFundsFailed is the event emitted when unlocking funds fails. */
export interface EventUnlockFundsFailedSDKType {
  epoch_number: bigint;
  height: bigint;
  tx_id: Uint8Array;
  msg_id: Uint8Array;
  error: string;
  msg_type: string;
}
function createBaseEventBeginEpoch(): EventBeginEpoch {
  return {
    epochNumber: BigInt(0)
  };
}
export const EventBeginEpoch = {
  typeUrl: "/babylon.epoching.v1.EventBeginEpoch",
  is(o: any): o is EventBeginEpoch {
    return o && (o.$typeUrl === EventBeginEpoch.typeUrl || typeof o.epochNumber === "bigint");
  },
  isSDK(o: any): o is EventBeginEpochSDKType {
    return o && (o.$typeUrl === EventBeginEpoch.typeUrl || typeof o.epoch_number === "bigint");
  },
  isAmino(o: any): o is EventBeginEpochAmino {
    return o && (o.$typeUrl === EventBeginEpoch.typeUrl || typeof o.epoch_number === "bigint");
  },
  encode(message: EventBeginEpoch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBeginEpoch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBeginEpoch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventBeginEpoch {
    return {
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventBeginEpoch): JsonSafe<EventBeginEpoch> {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventBeginEpoch>, I>>(object: I): EventBeginEpoch {
    const message = createBaseEventBeginEpoch();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventBeginEpochAmino): EventBeginEpoch {
    const message = createBaseEventBeginEpoch();
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    return message;
  },
  toAmino(message: EventBeginEpoch): EventBeginEpochAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? (message.epochNumber?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBeginEpochAminoMsg): EventBeginEpoch {
    return EventBeginEpoch.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBeginEpochProtoMsg): EventBeginEpoch {
    return EventBeginEpoch.decode(message.value);
  },
  toProto(message: EventBeginEpoch): Uint8Array {
    return EventBeginEpoch.encode(message).finish();
  },
  toProtoMsg(message: EventBeginEpoch): EventBeginEpochProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.EventBeginEpoch",
      value: EventBeginEpoch.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBeginEpoch.typeUrl, EventBeginEpoch);
function createBaseEventEndEpoch(): EventEndEpoch {
  return {
    epochNumber: BigInt(0)
  };
}
export const EventEndEpoch = {
  typeUrl: "/babylon.epoching.v1.EventEndEpoch",
  is(o: any): o is EventEndEpoch {
    return o && (o.$typeUrl === EventEndEpoch.typeUrl || typeof o.epochNumber === "bigint");
  },
  isSDK(o: any): o is EventEndEpochSDKType {
    return o && (o.$typeUrl === EventEndEpoch.typeUrl || typeof o.epoch_number === "bigint");
  },
  isAmino(o: any): o is EventEndEpochAmino {
    return o && (o.$typeUrl === EventEndEpoch.typeUrl || typeof o.epoch_number === "bigint");
  },
  encode(message: EventEndEpoch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventEndEpoch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEndEpoch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventEndEpoch {
    return {
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventEndEpoch): JsonSafe<EventEndEpoch> {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventEndEpoch>, I>>(object: I): EventEndEpoch {
    const message = createBaseEventEndEpoch();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventEndEpochAmino): EventEndEpoch {
    const message = createBaseEventEndEpoch();
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    return message;
  },
  toAmino(message: EventEndEpoch): EventEndEpochAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? (message.epochNumber?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventEndEpochAminoMsg): EventEndEpoch {
    return EventEndEpoch.fromAmino(object.value);
  },
  fromProtoMsg(message: EventEndEpochProtoMsg): EventEndEpoch {
    return EventEndEpoch.decode(message.value);
  },
  toProto(message: EventEndEpoch): Uint8Array {
    return EventEndEpoch.encode(message).finish();
  },
  toProtoMsg(message: EventEndEpoch): EventEndEpochProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.EventEndEpoch",
      value: EventEndEpoch.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventEndEpoch.typeUrl, EventEndEpoch);
function createBaseEventHandleQueuedMsg(): EventHandleQueuedMsg {
  return {
    originalEventType: "",
    epochNumber: BigInt(0),
    height: BigInt(0),
    txId: new Uint8Array(),
    msgId: new Uint8Array(),
    originalAttributes: [],
    error: ""
  };
}
export const EventHandleQueuedMsg = {
  typeUrl: "/babylon.epoching.v1.EventHandleQueuedMsg",
  is(o: any): o is EventHandleQueuedMsg {
    return o && (o.$typeUrl === EventHandleQueuedMsg.typeUrl || typeof o.originalEventType === "string" && typeof o.epochNumber === "bigint" && typeof o.height === "bigint" && (o.txId instanceof Uint8Array || typeof o.txId === "string") && (o.msgId instanceof Uint8Array || typeof o.msgId === "string") && Array.isArray(o.originalAttributes) && (!o.originalAttributes.length || o.originalAttributes[0] instanceof Uint8Array || typeof o.originalAttributes[0] === "string") && typeof o.error === "string");
  },
  isSDK(o: any): o is EventHandleQueuedMsgSDKType {
    return o && (o.$typeUrl === EventHandleQueuedMsg.typeUrl || typeof o.original_event_type === "string" && typeof o.epoch_number === "bigint" && typeof o.height === "bigint" && (o.tx_id instanceof Uint8Array || typeof o.tx_id === "string") && (o.msg_id instanceof Uint8Array || typeof o.msg_id === "string") && Array.isArray(o.original_attributes) && (!o.original_attributes.length || o.original_attributes[0] instanceof Uint8Array || typeof o.original_attributes[0] === "string") && typeof o.error === "string");
  },
  isAmino(o: any): o is EventHandleQueuedMsgAmino {
    return o && (o.$typeUrl === EventHandleQueuedMsg.typeUrl || typeof o.original_event_type === "string" && typeof o.epoch_number === "bigint" && typeof o.height === "bigint" && (o.tx_id instanceof Uint8Array || typeof o.tx_id === "string") && (o.msg_id instanceof Uint8Array || typeof o.msg_id === "string") && Array.isArray(o.original_attributes) && (!o.original_attributes.length || o.original_attributes[0] instanceof Uint8Array || typeof o.original_attributes[0] === "string") && typeof o.error === "string");
  },
  encode(message: EventHandleQueuedMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.originalEventType !== "") {
      writer.uint32(10).string(message.originalEventType);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochNumber);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.txId.length !== 0) {
      writer.uint32(34).bytes(message.txId);
    }
    if (message.msgId.length !== 0) {
      writer.uint32(42).bytes(message.msgId);
    }
    for (const v of message.originalAttributes) {
      writer.uint32(50).bytes(v!);
    }
    if (message.error !== "") {
      writer.uint32(58).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventHandleQueuedMsg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventHandleQueuedMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originalEventType = reader.string();
          break;
        case 2:
          message.epochNumber = reader.uint64();
          break;
        case 3:
          message.height = reader.uint64();
          break;
        case 4:
          message.txId = reader.bytes();
          break;
        case 5:
          message.msgId = reader.bytes();
          break;
        case 6:
          message.originalAttributes.push(reader.bytes());
          break;
        case 7:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventHandleQueuedMsg {
    return {
      originalEventType: isSet(object.originalEventType) ? String(object.originalEventType) : "",
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0),
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      msgId: isSet(object.msgId) ? bytesFromBase64(object.msgId) : new Uint8Array(),
      originalAttributes: Array.isArray(object?.originalAttributes) ? object.originalAttributes.map((e: any) => bytesFromBase64(e)) : [],
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: EventHandleQueuedMsg): JsonSafe<EventHandleQueuedMsg> {
    const obj: any = {};
    message.originalEventType !== undefined && (obj.originalEventType = message.originalEventType);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.txId !== undefined && (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    message.msgId !== undefined && (obj.msgId = base64FromBytes(message.msgId !== undefined ? message.msgId : new Uint8Array()));
    if (message.originalAttributes) {
      obj.originalAttributes = message.originalAttributes.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.originalAttributes = [];
    }
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventHandleQueuedMsg>, I>>(object: I): EventHandleQueuedMsg {
    const message = createBaseEventHandleQueuedMsg();
    message.originalEventType = object.originalEventType ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.txId = object.txId ?? new Uint8Array();
    message.msgId = object.msgId ?? new Uint8Array();
    message.originalAttributes = object.originalAttributes?.map(e => e) || [];
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: EventHandleQueuedMsgAmino): EventHandleQueuedMsg {
    const message = createBaseEventHandleQueuedMsg();
    if (object.original_event_type !== undefined && object.original_event_type !== null) {
      message.originalEventType = object.original_event_type;
    }
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    if (object.msg_id !== undefined && object.msg_id !== null) {
      message.msgId = bytesFromBase64(object.msg_id);
    }
    message.originalAttributes = object.original_attributes?.map(e => bytesFromBase64(e)) || [];
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: EventHandleQueuedMsg): EventHandleQueuedMsgAmino {
    const obj: any = {};
    obj.original_event_type = message.originalEventType === "" ? undefined : message.originalEventType;
    obj.epoch_number = message.epochNumber !== BigInt(0) ? (message.epochNumber?.toString)() : undefined;
    obj.height = message.height !== BigInt(0) ? (message.height?.toString)() : undefined;
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    obj.msg_id = message.msgId ? base64FromBytes(message.msgId) : undefined;
    if (message.originalAttributes) {
      obj.original_attributes = message.originalAttributes.map(e => base64FromBytes(e));
    } else {
      obj.original_attributes = message.originalAttributes;
    }
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: EventHandleQueuedMsgAminoMsg): EventHandleQueuedMsg {
    return EventHandleQueuedMsg.fromAmino(object.value);
  },
  fromProtoMsg(message: EventHandleQueuedMsgProtoMsg): EventHandleQueuedMsg {
    return EventHandleQueuedMsg.decode(message.value);
  },
  toProto(message: EventHandleQueuedMsg): Uint8Array {
    return EventHandleQueuedMsg.encode(message).finish();
  },
  toProtoMsg(message: EventHandleQueuedMsg): EventHandleQueuedMsgProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.EventHandleQueuedMsg",
      value: EventHandleQueuedMsg.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventHandleQueuedMsg.typeUrl, EventHandleQueuedMsg);
function createBaseEventSlashThreshold(): EventSlashThreshold {
  return {
    slashedVotingPower: BigInt(0),
    totalVotingPower: BigInt(0),
    slashedValidators: []
  };
}
export const EventSlashThreshold = {
  typeUrl: "/babylon.epoching.v1.EventSlashThreshold",
  is(o: any): o is EventSlashThreshold {
    return o && (o.$typeUrl === EventSlashThreshold.typeUrl || typeof o.slashedVotingPower === "bigint" && typeof o.totalVotingPower === "bigint" && Array.isArray(o.slashedValidators) && (!o.slashedValidators.length || o.slashedValidators[0] instanceof Uint8Array || typeof o.slashedValidators[0] === "string"));
  },
  isSDK(o: any): o is EventSlashThresholdSDKType {
    return o && (o.$typeUrl === EventSlashThreshold.typeUrl || typeof o.slashed_voting_power === "bigint" && typeof o.total_voting_power === "bigint" && Array.isArray(o.slashed_validators) && (!o.slashed_validators.length || o.slashed_validators[0] instanceof Uint8Array || typeof o.slashed_validators[0] === "string"));
  },
  isAmino(o: any): o is EventSlashThresholdAmino {
    return o && (o.$typeUrl === EventSlashThreshold.typeUrl || typeof o.slashed_voting_power === "bigint" && typeof o.total_voting_power === "bigint" && Array.isArray(o.slashed_validators) && (!o.slashed_validators.length || o.slashed_validators[0] instanceof Uint8Array || typeof o.slashed_validators[0] === "string"));
  },
  encode(message: EventSlashThreshold, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.slashedVotingPower !== BigInt(0)) {
      writer.uint32(8).int64(message.slashedVotingPower);
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(16).int64(message.totalVotingPower);
    }
    for (const v of message.slashedValidators) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSlashThreshold {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSlashThreshold();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashedVotingPower = reader.int64();
          break;
        case 2:
          message.totalVotingPower = reader.int64();
          break;
        case 3:
          message.slashedValidators.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSlashThreshold {
    return {
      slashedVotingPower: isSet(object.slashedVotingPower) ? BigInt(object.slashedVotingPower.toString()) : BigInt(0),
      totalVotingPower: isSet(object.totalVotingPower) ? BigInt(object.totalVotingPower.toString()) : BigInt(0),
      slashedValidators: Array.isArray(object?.slashedValidators) ? object.slashedValidators.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: EventSlashThreshold): JsonSafe<EventSlashThreshold> {
    const obj: any = {};
    message.slashedVotingPower !== undefined && (obj.slashedVotingPower = (message.slashedVotingPower || BigInt(0)).toString());
    message.totalVotingPower !== undefined && (obj.totalVotingPower = (message.totalVotingPower || BigInt(0)).toString());
    if (message.slashedValidators) {
      obj.slashedValidators = message.slashedValidators.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.slashedValidators = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventSlashThreshold>, I>>(object: I): EventSlashThreshold {
    const message = createBaseEventSlashThreshold();
    message.slashedVotingPower = object.slashedVotingPower !== undefined && object.slashedVotingPower !== null ? BigInt(object.slashedVotingPower.toString()) : BigInt(0);
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
    message.slashedValidators = object.slashedValidators?.map(e => e) || [];
    return message;
  },
  fromAmino(object: EventSlashThresholdAmino): EventSlashThreshold {
    const message = createBaseEventSlashThreshold();
    if (object.slashed_voting_power !== undefined && object.slashed_voting_power !== null) {
      message.slashedVotingPower = BigInt(object.slashed_voting_power);
    }
    if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
      message.totalVotingPower = BigInt(object.total_voting_power);
    }
    message.slashedValidators = object.slashed_validators?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: EventSlashThreshold): EventSlashThresholdAmino {
    const obj: any = {};
    obj.slashed_voting_power = message.slashedVotingPower !== BigInt(0) ? (message.slashedVotingPower?.toString)() : undefined;
    obj.total_voting_power = message.totalVotingPower !== BigInt(0) ? (message.totalVotingPower?.toString)() : undefined;
    if (message.slashedValidators) {
      obj.slashed_validators = message.slashedValidators.map(e => base64FromBytes(e));
    } else {
      obj.slashed_validators = message.slashedValidators;
    }
    return obj;
  },
  fromAminoMsg(object: EventSlashThresholdAminoMsg): EventSlashThreshold {
    return EventSlashThreshold.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSlashThresholdProtoMsg): EventSlashThreshold {
    return EventSlashThreshold.decode(message.value);
  },
  toProto(message: EventSlashThreshold): Uint8Array {
    return EventSlashThreshold.encode(message).finish();
  },
  toProtoMsg(message: EventSlashThreshold): EventSlashThresholdProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.EventSlashThreshold",
      value: EventSlashThreshold.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSlashThreshold.typeUrl, EventSlashThreshold);
function createBaseEventWrappedDelegate(): EventWrappedDelegate {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: BigInt(0),
    denom: "",
    epochBoundary: BigInt(0)
  };
}
export const EventWrappedDelegate = {
  typeUrl: "/babylon.epoching.v1.EventWrappedDelegate",
  is(o: any): o is EventWrappedDelegate {
    return o && (o.$typeUrl === EventWrappedDelegate.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && typeof o.amount === "bigint" && typeof o.denom === "string" && typeof o.epochBoundary === "bigint");
  },
  isSDK(o: any): o is EventWrappedDelegateSDKType {
    return o && (o.$typeUrl === EventWrappedDelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.amount === "bigint" && typeof o.denom === "string" && typeof o.epoch_boundary === "bigint");
  },
  isAmino(o: any): o is EventWrappedDelegateAmino {
    return o && (o.$typeUrl === EventWrappedDelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.amount === "bigint" && typeof o.denom === "string" && typeof o.epoch_boundary === "bigint");
  },
  encode(message: EventWrappedDelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.epochBoundary !== BigInt(0)) {
      writer.uint32(40).uint64(message.epochBoundary);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventWrappedDelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWrappedDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = reader.uint64();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.epochBoundary = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventWrappedDelegate {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : "",
      epochBoundary: isSet(object.epochBoundary) ? BigInt(object.epochBoundary.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventWrappedDelegate): JsonSafe<EventWrappedDelegate> {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.epochBoundary !== undefined && (obj.epochBoundary = (message.epochBoundary || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventWrappedDelegate>, I>>(object: I): EventWrappedDelegate {
    const message = createBaseEventWrappedDelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.epochBoundary = object.epochBoundary !== undefined && object.epochBoundary !== null ? BigInt(object.epochBoundary.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventWrappedDelegateAmino): EventWrappedDelegate {
    const message = createBaseEventWrappedDelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.epoch_boundary !== undefined && object.epoch_boundary !== null) {
      message.epochBoundary = BigInt(object.epoch_boundary);
    }
    return message;
  },
  toAmino(message: EventWrappedDelegate): EventWrappedDelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.amount = message.amount !== BigInt(0) ? (message.amount?.toString)() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.epoch_boundary = message.epochBoundary !== BigInt(0) ? (message.epochBoundary?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventWrappedDelegateAminoMsg): EventWrappedDelegate {
    return EventWrappedDelegate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWrappedDelegateProtoMsg): EventWrappedDelegate {
    return EventWrappedDelegate.decode(message.value);
  },
  toProto(message: EventWrappedDelegate): Uint8Array {
    return EventWrappedDelegate.encode(message).finish();
  },
  toProtoMsg(message: EventWrappedDelegate): EventWrappedDelegateProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.EventWrappedDelegate",
      value: EventWrappedDelegate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventWrappedDelegate.typeUrl, EventWrappedDelegate);
function createBaseEventWrappedUndelegate(): EventWrappedUndelegate {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: BigInt(0),
    denom: "",
    epochBoundary: BigInt(0)
  };
}
export const EventWrappedUndelegate = {
  typeUrl: "/babylon.epoching.v1.EventWrappedUndelegate",
  is(o: any): o is EventWrappedUndelegate {
    return o && (o.$typeUrl === EventWrappedUndelegate.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && typeof o.amount === "bigint" && typeof o.denom === "string" && typeof o.epochBoundary === "bigint");
  },
  isSDK(o: any): o is EventWrappedUndelegateSDKType {
    return o && (o.$typeUrl === EventWrappedUndelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.amount === "bigint" && typeof o.denom === "string" && typeof o.epoch_boundary === "bigint");
  },
  isAmino(o: any): o is EventWrappedUndelegateAmino {
    return o && (o.$typeUrl === EventWrappedUndelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.amount === "bigint" && typeof o.denom === "string" && typeof o.epoch_boundary === "bigint");
  },
  encode(message: EventWrappedUndelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.epochBoundary !== BigInt(0)) {
      writer.uint32(40).uint64(message.epochBoundary);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventWrappedUndelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWrappedUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = reader.uint64();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.epochBoundary = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventWrappedUndelegate {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : "",
      epochBoundary: isSet(object.epochBoundary) ? BigInt(object.epochBoundary.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventWrappedUndelegate): JsonSafe<EventWrappedUndelegate> {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.epochBoundary !== undefined && (obj.epochBoundary = (message.epochBoundary || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventWrappedUndelegate>, I>>(object: I): EventWrappedUndelegate {
    const message = createBaseEventWrappedUndelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.epochBoundary = object.epochBoundary !== undefined && object.epochBoundary !== null ? BigInt(object.epochBoundary.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventWrappedUndelegateAmino): EventWrappedUndelegate {
    const message = createBaseEventWrappedUndelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.epoch_boundary !== undefined && object.epoch_boundary !== null) {
      message.epochBoundary = BigInt(object.epoch_boundary);
    }
    return message;
  },
  toAmino(message: EventWrappedUndelegate): EventWrappedUndelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.amount = message.amount !== BigInt(0) ? (message.amount?.toString)() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.epoch_boundary = message.epochBoundary !== BigInt(0) ? (message.epochBoundary?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventWrappedUndelegateAminoMsg): EventWrappedUndelegate {
    return EventWrappedUndelegate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWrappedUndelegateProtoMsg): EventWrappedUndelegate {
    return EventWrappedUndelegate.decode(message.value);
  },
  toProto(message: EventWrappedUndelegate): Uint8Array {
    return EventWrappedUndelegate.encode(message).finish();
  },
  toProtoMsg(message: EventWrappedUndelegate): EventWrappedUndelegateProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.EventWrappedUndelegate",
      value: EventWrappedUndelegate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventWrappedUndelegate.typeUrl, EventWrappedUndelegate);
function createBaseEventWrappedBeginRedelegate(): EventWrappedBeginRedelegate {
  return {
    delegatorAddress: "",
    sourceValidatorAddress: "",
    destinationValidatorAddress: "",
    amount: BigInt(0),
    denom: "",
    epochBoundary: BigInt(0)
  };
}
export const EventWrappedBeginRedelegate = {
  typeUrl: "/babylon.epoching.v1.EventWrappedBeginRedelegate",
  is(o: any): o is EventWrappedBeginRedelegate {
    return o && (o.$typeUrl === EventWrappedBeginRedelegate.typeUrl || typeof o.delegatorAddress === "string" && typeof o.sourceValidatorAddress === "string" && typeof o.destinationValidatorAddress === "string" && typeof o.amount === "bigint" && typeof o.denom === "string" && typeof o.epochBoundary === "bigint");
  },
  isSDK(o: any): o is EventWrappedBeginRedelegateSDKType {
    return o && (o.$typeUrl === EventWrappedBeginRedelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.source_validator_address === "string" && typeof o.destination_validator_address === "string" && typeof o.amount === "bigint" && typeof o.denom === "string" && typeof o.epoch_boundary === "bigint");
  },
  isAmino(o: any): o is EventWrappedBeginRedelegateAmino {
    return o && (o.$typeUrl === EventWrappedBeginRedelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.source_validator_address === "string" && typeof o.destination_validator_address === "string" && typeof o.amount === "bigint" && typeof o.denom === "string" && typeof o.epoch_boundary === "bigint");
  },
  encode(message: EventWrappedBeginRedelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.sourceValidatorAddress !== "") {
      writer.uint32(18).string(message.sourceValidatorAddress);
    }
    if (message.destinationValidatorAddress !== "") {
      writer.uint32(26).string(message.destinationValidatorAddress);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(32).uint64(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    if (message.epochBoundary !== BigInt(0)) {
      writer.uint32(48).uint64(message.epochBoundary);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventWrappedBeginRedelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWrappedBeginRedelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.sourceValidatorAddress = reader.string();
          break;
        case 3:
          message.destinationValidatorAddress = reader.string();
          break;
        case 4:
          message.amount = reader.uint64();
          break;
        case 5:
          message.denom = reader.string();
          break;
        case 6:
          message.epochBoundary = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventWrappedBeginRedelegate {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      sourceValidatorAddress: isSet(object.sourceValidatorAddress) ? String(object.sourceValidatorAddress) : "",
      destinationValidatorAddress: isSet(object.destinationValidatorAddress) ? String(object.destinationValidatorAddress) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : "",
      epochBoundary: isSet(object.epochBoundary) ? BigInt(object.epochBoundary.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventWrappedBeginRedelegate): JsonSafe<EventWrappedBeginRedelegate> {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.sourceValidatorAddress !== undefined && (obj.sourceValidatorAddress = message.sourceValidatorAddress);
    message.destinationValidatorAddress !== undefined && (obj.destinationValidatorAddress = message.destinationValidatorAddress);
    message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.epochBoundary !== undefined && (obj.epochBoundary = (message.epochBoundary || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventWrappedBeginRedelegate>, I>>(object: I): EventWrappedBeginRedelegate {
    const message = createBaseEventWrappedBeginRedelegate();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.sourceValidatorAddress = object.sourceValidatorAddress ?? "";
    message.destinationValidatorAddress = object.destinationValidatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.epochBoundary = object.epochBoundary !== undefined && object.epochBoundary !== null ? BigInt(object.epochBoundary.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventWrappedBeginRedelegateAmino): EventWrappedBeginRedelegate {
    const message = createBaseEventWrappedBeginRedelegate();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.source_validator_address !== undefined && object.source_validator_address !== null) {
      message.sourceValidatorAddress = object.source_validator_address;
    }
    if (object.destination_validator_address !== undefined && object.destination_validator_address !== null) {
      message.destinationValidatorAddress = object.destination_validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.epoch_boundary !== undefined && object.epoch_boundary !== null) {
      message.epochBoundary = BigInt(object.epoch_boundary);
    }
    return message;
  },
  toAmino(message: EventWrappedBeginRedelegate): EventWrappedBeginRedelegateAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.source_validator_address = message.sourceValidatorAddress === "" ? undefined : message.sourceValidatorAddress;
    obj.destination_validator_address = message.destinationValidatorAddress === "" ? undefined : message.destinationValidatorAddress;
    obj.amount = message.amount !== BigInt(0) ? (message.amount?.toString)() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.epoch_boundary = message.epochBoundary !== BigInt(0) ? (message.epochBoundary?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventWrappedBeginRedelegateAminoMsg): EventWrappedBeginRedelegate {
    return EventWrappedBeginRedelegate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWrappedBeginRedelegateProtoMsg): EventWrappedBeginRedelegate {
    return EventWrappedBeginRedelegate.decode(message.value);
  },
  toProto(message: EventWrappedBeginRedelegate): Uint8Array {
    return EventWrappedBeginRedelegate.encode(message).finish();
  },
  toProtoMsg(message: EventWrappedBeginRedelegate): EventWrappedBeginRedelegateProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.EventWrappedBeginRedelegate",
      value: EventWrappedBeginRedelegate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventWrappedBeginRedelegate.typeUrl, EventWrappedBeginRedelegate);
function createBaseEventWrappedCancelUnbondingDelegation(): EventWrappedCancelUnbondingDelegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: BigInt(0),
    creationHeight: BigInt(0),
    epochBoundary: BigInt(0)
  };
}
export const EventWrappedCancelUnbondingDelegation = {
  typeUrl: "/babylon.epoching.v1.EventWrappedCancelUnbondingDelegation",
  is(o: any): o is EventWrappedCancelUnbondingDelegation {
    return o && (o.$typeUrl === EventWrappedCancelUnbondingDelegation.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && typeof o.amount === "bigint" && typeof o.creationHeight === "bigint" && typeof o.epochBoundary === "bigint");
  },
  isSDK(o: any): o is EventWrappedCancelUnbondingDelegationSDKType {
    return o && (o.$typeUrl === EventWrappedCancelUnbondingDelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.amount === "bigint" && typeof o.creation_height === "bigint" && typeof o.epoch_boundary === "bigint");
  },
  isAmino(o: any): o is EventWrappedCancelUnbondingDelegationAmino {
    return o && (o.$typeUrl === EventWrappedCancelUnbondingDelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.amount === "bigint" && typeof o.creation_height === "bigint" && typeof o.epoch_boundary === "bigint");
  },
  encode(message: EventWrappedCancelUnbondingDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.creationHeight);
    }
    if (message.epochBoundary !== BigInt(0)) {
      writer.uint32(40).uint64(message.epochBoundary);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventWrappedCancelUnbondingDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWrappedCancelUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = reader.uint64();
          break;
        case 4:
          message.creationHeight = reader.int64();
          break;
        case 5:
          message.epochBoundary = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventWrappedCancelUnbondingDelegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      creationHeight: isSet(object.creationHeight) ? BigInt(object.creationHeight.toString()) : BigInt(0),
      epochBoundary: isSet(object.epochBoundary) ? BigInt(object.epochBoundary.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventWrappedCancelUnbondingDelegation): JsonSafe<EventWrappedCancelUnbondingDelegation> {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
    message.creationHeight !== undefined && (obj.creationHeight = (message.creationHeight || BigInt(0)).toString());
    message.epochBoundary !== undefined && (obj.epochBoundary = (message.epochBoundary || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventWrappedCancelUnbondingDelegation>, I>>(object: I): EventWrappedCancelUnbondingDelegation {
    const message = createBaseEventWrappedCancelUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
    message.epochBoundary = object.epochBoundary !== undefined && object.epochBoundary !== null ? BigInt(object.epochBoundary.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventWrappedCancelUnbondingDelegationAmino): EventWrappedCancelUnbondingDelegation {
    const message = createBaseEventWrappedCancelUnbondingDelegation();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.creation_height !== undefined && object.creation_height !== null) {
      message.creationHeight = BigInt(object.creation_height);
    }
    if (object.epoch_boundary !== undefined && object.epoch_boundary !== null) {
      message.epochBoundary = BigInt(object.epoch_boundary);
    }
    return message;
  },
  toAmino(message: EventWrappedCancelUnbondingDelegation): EventWrappedCancelUnbondingDelegationAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.amount = message.amount !== BigInt(0) ? (message.amount?.toString)() : undefined;
    obj.creation_height = message.creationHeight !== BigInt(0) ? (message.creationHeight?.toString)() : undefined;
    obj.epoch_boundary = message.epochBoundary !== BigInt(0) ? (message.epochBoundary?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventWrappedCancelUnbondingDelegationAminoMsg): EventWrappedCancelUnbondingDelegation {
    return EventWrappedCancelUnbondingDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWrappedCancelUnbondingDelegationProtoMsg): EventWrappedCancelUnbondingDelegation {
    return EventWrappedCancelUnbondingDelegation.decode(message.value);
  },
  toProto(message: EventWrappedCancelUnbondingDelegation): Uint8Array {
    return EventWrappedCancelUnbondingDelegation.encode(message).finish();
  },
  toProtoMsg(message: EventWrappedCancelUnbondingDelegation): EventWrappedCancelUnbondingDelegationProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.EventWrappedCancelUnbondingDelegation",
      value: EventWrappedCancelUnbondingDelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventWrappedCancelUnbondingDelegation.typeUrl, EventWrappedCancelUnbondingDelegation);
function createBaseEventWrappedEditValidator(): EventWrappedEditValidator {
  return {
    validatorAddress: "",
    epochBoundary: BigInt(0)
  };
}
export const EventWrappedEditValidator = {
  typeUrl: "/babylon.epoching.v1.EventWrappedEditValidator",
  is(o: any): o is EventWrappedEditValidator {
    return o && (o.$typeUrl === EventWrappedEditValidator.typeUrl || typeof o.validatorAddress === "string" && typeof o.epochBoundary === "bigint");
  },
  isSDK(o: any): o is EventWrappedEditValidatorSDKType {
    return o && (o.$typeUrl === EventWrappedEditValidator.typeUrl || typeof o.validator_address === "string" && typeof o.epoch_boundary === "bigint");
  },
  isAmino(o: any): o is EventWrappedEditValidatorAmino {
    return o && (o.$typeUrl === EventWrappedEditValidator.typeUrl || typeof o.validator_address === "string" && typeof o.epoch_boundary === "bigint");
  },
  encode(message: EventWrappedEditValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.epochBoundary !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochBoundary);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventWrappedEditValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWrappedEditValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.epochBoundary = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventWrappedEditValidator {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      epochBoundary: isSet(object.epochBoundary) ? BigInt(object.epochBoundary.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventWrappedEditValidator): JsonSafe<EventWrappedEditValidator> {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.epochBoundary !== undefined && (obj.epochBoundary = (message.epochBoundary || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventWrappedEditValidator>, I>>(object: I): EventWrappedEditValidator {
    const message = createBaseEventWrappedEditValidator();
    message.validatorAddress = object.validatorAddress ?? "";
    message.epochBoundary = object.epochBoundary !== undefined && object.epochBoundary !== null ? BigInt(object.epochBoundary.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventWrappedEditValidatorAmino): EventWrappedEditValidator {
    const message = createBaseEventWrappedEditValidator();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.epoch_boundary !== undefined && object.epoch_boundary !== null) {
      message.epochBoundary = BigInt(object.epoch_boundary);
    }
    return message;
  },
  toAmino(message: EventWrappedEditValidator): EventWrappedEditValidatorAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.epoch_boundary = message.epochBoundary !== BigInt(0) ? (message.epochBoundary?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventWrappedEditValidatorAminoMsg): EventWrappedEditValidator {
    return EventWrappedEditValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWrappedEditValidatorProtoMsg): EventWrappedEditValidator {
    return EventWrappedEditValidator.decode(message.value);
  },
  toProto(message: EventWrappedEditValidator): Uint8Array {
    return EventWrappedEditValidator.encode(message).finish();
  },
  toProtoMsg(message: EventWrappedEditValidator): EventWrappedEditValidatorProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.EventWrappedEditValidator",
      value: EventWrappedEditValidator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventWrappedEditValidator.typeUrl, EventWrappedEditValidator);
function createBaseEventWrappedStakingUpdateParams(): EventWrappedStakingUpdateParams {
  return {
    unbondingTime: "",
    maxValidators: 0,
    maxEntries: 0,
    historicalEntries: 0,
    bondDenom: "",
    minCommissionRate: "",
    epochBoundary: BigInt(0)
  };
}
export const EventWrappedStakingUpdateParams = {
  typeUrl: "/babylon.epoching.v1.EventWrappedStakingUpdateParams",
  is(o: any): o is EventWrappedStakingUpdateParams {
    return o && (o.$typeUrl === EventWrappedStakingUpdateParams.typeUrl || typeof o.unbondingTime === "string" && typeof o.maxValidators === "number" && typeof o.maxEntries === "number" && typeof o.historicalEntries === "number" && typeof o.bondDenom === "string" && typeof o.minCommissionRate === "string" && typeof o.epochBoundary === "bigint");
  },
  isSDK(o: any): o is EventWrappedStakingUpdateParamsSDKType {
    return o && (o.$typeUrl === EventWrappedStakingUpdateParams.typeUrl || typeof o.unbonding_time === "string" && typeof o.max_validators === "number" && typeof o.max_entries === "number" && typeof o.historical_entries === "number" && typeof o.bond_denom === "string" && typeof o.min_commission_rate === "string" && typeof o.epoch_boundary === "bigint");
  },
  isAmino(o: any): o is EventWrappedStakingUpdateParamsAmino {
    return o && (o.$typeUrl === EventWrappedStakingUpdateParams.typeUrl || typeof o.unbonding_time === "string" && typeof o.max_validators === "number" && typeof o.max_entries === "number" && typeof o.historical_entries === "number" && typeof o.bond_denom === "string" && typeof o.min_commission_rate === "string" && typeof o.epoch_boundary === "bigint");
  },
  encode(message: EventWrappedStakingUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbondingTime !== "") {
      writer.uint32(10).string(message.unbondingTime);
    }
    if (message.maxValidators !== 0) {
      writer.uint32(16).uint32(message.maxValidators);
    }
    if (message.maxEntries !== 0) {
      writer.uint32(24).uint32(message.maxEntries);
    }
    if (message.historicalEntries !== 0) {
      writer.uint32(32).uint32(message.historicalEntries);
    }
    if (message.bondDenom !== "") {
      writer.uint32(42).string(message.bondDenom);
    }
    if (message.minCommissionRate !== "") {
      writer.uint32(50).string(message.minCommissionRate);
    }
    if (message.epochBoundary !== BigInt(0)) {
      writer.uint32(56).uint64(message.epochBoundary);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventWrappedStakingUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWrappedStakingUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingTime = reader.string();
          break;
        case 2:
          message.maxValidators = reader.uint32();
          break;
        case 3:
          message.maxEntries = reader.uint32();
          break;
        case 4:
          message.historicalEntries = reader.uint32();
          break;
        case 5:
          message.bondDenom = reader.string();
          break;
        case 6:
          message.minCommissionRate = reader.string();
          break;
        case 7:
          message.epochBoundary = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventWrappedStakingUpdateParams {
    return {
      unbondingTime: isSet(object.unbondingTime) ? String(object.unbondingTime) : "",
      maxValidators: isSet(object.maxValidators) ? Number(object.maxValidators) : 0,
      maxEntries: isSet(object.maxEntries) ? Number(object.maxEntries) : 0,
      historicalEntries: isSet(object.historicalEntries) ? Number(object.historicalEntries) : 0,
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      minCommissionRate: isSet(object.minCommissionRate) ? String(object.minCommissionRate) : "",
      epochBoundary: isSet(object.epochBoundary) ? BigInt(object.epochBoundary.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventWrappedStakingUpdateParams): JsonSafe<EventWrappedStakingUpdateParams> {
    const obj: any = {};
    message.unbondingTime !== undefined && (obj.unbondingTime = message.unbondingTime);
    message.maxValidators !== undefined && (obj.maxValidators = Math.round(message.maxValidators));
    message.maxEntries !== undefined && (obj.maxEntries = Math.round(message.maxEntries));
    message.historicalEntries !== undefined && (obj.historicalEntries = Math.round(message.historicalEntries));
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.minCommissionRate !== undefined && (obj.minCommissionRate = message.minCommissionRate);
    message.epochBoundary !== undefined && (obj.epochBoundary = (message.epochBoundary || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventWrappedStakingUpdateParams>, I>>(object: I): EventWrappedStakingUpdateParams {
    const message = createBaseEventWrappedStakingUpdateParams();
    message.unbondingTime = object.unbondingTime ?? "";
    message.maxValidators = object.maxValidators ?? 0;
    message.maxEntries = object.maxEntries ?? 0;
    message.historicalEntries = object.historicalEntries ?? 0;
    message.bondDenom = object.bondDenom ?? "";
    message.minCommissionRate = object.minCommissionRate ?? "";
    message.epochBoundary = object.epochBoundary !== undefined && object.epochBoundary !== null ? BigInt(object.epochBoundary.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventWrappedStakingUpdateParamsAmino): EventWrappedStakingUpdateParams {
    const message = createBaseEventWrappedStakingUpdateParams();
    if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
      message.unbondingTime = object.unbonding_time;
    }
    if (object.max_validators !== undefined && object.max_validators !== null) {
      message.maxValidators = object.max_validators;
    }
    if (object.max_entries !== undefined && object.max_entries !== null) {
      message.maxEntries = object.max_entries;
    }
    if (object.historical_entries !== undefined && object.historical_entries !== null) {
      message.historicalEntries = object.historical_entries;
    }
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    if (object.min_commission_rate !== undefined && object.min_commission_rate !== null) {
      message.minCommissionRate = object.min_commission_rate;
    }
    if (object.epoch_boundary !== undefined && object.epoch_boundary !== null) {
      message.epochBoundary = BigInt(object.epoch_boundary);
    }
    return message;
  },
  toAmino(message: EventWrappedStakingUpdateParams): EventWrappedStakingUpdateParamsAmino {
    const obj: any = {};
    obj.unbonding_time = message.unbondingTime === "" ? undefined : message.unbondingTime;
    obj.max_validators = message.maxValidators === 0 ? undefined : message.maxValidators;
    obj.max_entries = message.maxEntries === 0 ? undefined : message.maxEntries;
    obj.historical_entries = message.historicalEntries === 0 ? undefined : message.historicalEntries;
    obj.bond_denom = message.bondDenom === "" ? undefined : message.bondDenom;
    obj.min_commission_rate = message.minCommissionRate === "" ? undefined : message.minCommissionRate;
    obj.epoch_boundary = message.epochBoundary !== BigInt(0) ? (message.epochBoundary?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventWrappedStakingUpdateParamsAminoMsg): EventWrappedStakingUpdateParams {
    return EventWrappedStakingUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWrappedStakingUpdateParamsProtoMsg): EventWrappedStakingUpdateParams {
    return EventWrappedStakingUpdateParams.decode(message.value);
  },
  toProto(message: EventWrappedStakingUpdateParams): Uint8Array {
    return EventWrappedStakingUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: EventWrappedStakingUpdateParams): EventWrappedStakingUpdateParamsProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.EventWrappedStakingUpdateParams",
      value: EventWrappedStakingUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventWrappedStakingUpdateParams.typeUrl, EventWrappedStakingUpdateParams);
function createBaseEventUnlockFundsFailed(): EventUnlockFundsFailed {
  return {
    epochNumber: BigInt(0),
    height: BigInt(0),
    txId: new Uint8Array(),
    msgId: new Uint8Array(),
    error: "",
    msgType: ""
  };
}
export const EventUnlockFundsFailed = {
  typeUrl: "/babylon.epoching.v1.EventUnlockFundsFailed",
  is(o: any): o is EventUnlockFundsFailed {
    return o && (o.$typeUrl === EventUnlockFundsFailed.typeUrl || typeof o.epochNumber === "bigint" && typeof o.height === "bigint" && (o.txId instanceof Uint8Array || typeof o.txId === "string") && (o.msgId instanceof Uint8Array || typeof o.msgId === "string") && typeof o.error === "string" && typeof o.msgType === "string");
  },
  isSDK(o: any): o is EventUnlockFundsFailedSDKType {
    return o && (o.$typeUrl === EventUnlockFundsFailed.typeUrl || typeof o.epoch_number === "bigint" && typeof o.height === "bigint" && (o.tx_id instanceof Uint8Array || typeof o.tx_id === "string") && (o.msg_id instanceof Uint8Array || typeof o.msg_id === "string") && typeof o.error === "string" && typeof o.msg_type === "string");
  },
  isAmino(o: any): o is EventUnlockFundsFailedAmino {
    return o && (o.$typeUrl === EventUnlockFundsFailed.typeUrl || typeof o.epoch_number === "bigint" && typeof o.height === "bigint" && (o.tx_id instanceof Uint8Array || typeof o.tx_id === "string") && (o.msg_id instanceof Uint8Array || typeof o.msg_id === "string") && typeof o.error === "string" && typeof o.msg_type === "string");
  },
  encode(message: EventUnlockFundsFailed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.txId.length !== 0) {
      writer.uint32(26).bytes(message.txId);
    }
    if (message.msgId.length !== 0) {
      writer.uint32(34).bytes(message.msgId);
    }
    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }
    if (message.msgType !== "") {
      writer.uint32(50).string(message.msgType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUnlockFundsFailed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnlockFundsFailed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.uint64();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.txId = reader.bytes();
          break;
        case 4:
          message.msgId = reader.bytes();
          break;
        case 5:
          message.error = reader.string();
          break;
        case 6:
          message.msgType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUnlockFundsFailed {
    return {
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0),
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      msgId: isSet(object.msgId) ? bytesFromBase64(object.msgId) : new Uint8Array(),
      error: isSet(object.error) ? String(object.error) : "",
      msgType: isSet(object.msgType) ? String(object.msgType) : ""
    };
  },
  toJSON(message: EventUnlockFundsFailed): JsonSafe<EventUnlockFundsFailed> {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.txId !== undefined && (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    message.msgId !== undefined && (obj.msgId = base64FromBytes(message.msgId !== undefined ? message.msgId : new Uint8Array()));
    message.error !== undefined && (obj.error = message.error);
    message.msgType !== undefined && (obj.msgType = message.msgType);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUnlockFundsFailed>, I>>(object: I): EventUnlockFundsFailed {
    const message = createBaseEventUnlockFundsFailed();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.txId = object.txId ?? new Uint8Array();
    message.msgId = object.msgId ?? new Uint8Array();
    message.error = object.error ?? "";
    message.msgType = object.msgType ?? "";
    return message;
  },
  fromAmino(object: EventUnlockFundsFailedAmino): EventUnlockFundsFailed {
    const message = createBaseEventUnlockFundsFailed();
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    if (object.msg_id !== undefined && object.msg_id !== null) {
      message.msgId = bytesFromBase64(object.msg_id);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    if (object.msg_type !== undefined && object.msg_type !== null) {
      message.msgType = object.msg_type;
    }
    return message;
  },
  toAmino(message: EventUnlockFundsFailed): EventUnlockFundsFailedAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? (message.epochNumber?.toString)() : undefined;
    obj.height = message.height !== BigInt(0) ? (message.height?.toString)() : undefined;
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    obj.msg_id = message.msgId ? base64FromBytes(message.msgId) : undefined;
    obj.error = message.error === "" ? undefined : message.error;
    obj.msg_type = message.msgType === "" ? undefined : message.msgType;
    return obj;
  },
  fromAminoMsg(object: EventUnlockFundsFailedAminoMsg): EventUnlockFundsFailed {
    return EventUnlockFundsFailed.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUnlockFundsFailedProtoMsg): EventUnlockFundsFailed {
    return EventUnlockFundsFailed.decode(message.value);
  },
  toProto(message: EventUnlockFundsFailed): Uint8Array {
    return EventUnlockFundsFailed.encode(message).finish();
  },
  toProtoMsg(message: EventUnlockFundsFailed): EventUnlockFundsFailedProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.EventUnlockFundsFailed",
      value: EventUnlockFundsFailed.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventUnlockFundsFailed.typeUrl, EventUnlockFundsFailed);