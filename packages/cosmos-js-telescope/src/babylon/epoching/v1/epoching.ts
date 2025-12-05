//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { MsgCreateValidator, MsgCreateValidatorAmino, MsgCreateValidatorSDKType, MsgDelegate, MsgDelegateAmino, MsgDelegateSDKType, MsgUndelegate, MsgUndelegateAmino, MsgUndelegateSDKType, MsgBeginRedelegate, MsgBeginRedelegateAmino, MsgBeginRedelegateSDKType, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationAmino, MsgCancelUnbondingDelegationSDKType, MsgEditValidator, MsgEditValidatorAmino, MsgEditValidatorSDKType, MsgUpdateParams, MsgUpdateParamsAmino, MsgUpdateParamsSDKType } from "../../../cosmos/staking/v1beta1/tx";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** BondState is the bond state of a validator or delegation */
export enum BondState {
  /** CREATED - CREATED is when the validator/delegation has been created */
  CREATED = 0,
  /** BONDED - CREATED is when the validator/delegation has become bonded */
  BONDED = 1,
  /** UNBONDING - CREATED is when the validator/delegation has become unbonding */
  UNBONDING = 2,
  /** UNBONDED - CREATED is when the validator/delegation has become unbonded */
  UNBONDED = 3,
  /** REMOVED - CREATED is when the validator/delegation has been removed */
  REMOVED = 4,
  UNRECOGNIZED = -1,
}
export const BondStateSDKType = BondState;
export const BondStateAmino = BondState;
export function bondStateFromJSON(object: any): BondState {
  switch (object) {
    case 0:
    case "CREATED":
      return BondState.CREATED;
    case 1:
    case "BONDED":
      return BondState.BONDED;
    case 2:
    case "UNBONDING":
      return BondState.UNBONDING;
    case 3:
    case "UNBONDED":
      return BondState.UNBONDED;
    case 4:
    case "REMOVED":
      return BondState.REMOVED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BondState.UNRECOGNIZED;
  }
}
export function bondStateToJSON(object: BondState): string {
  switch (object) {
    case BondState.CREATED:
      return "CREATED";
    case BondState.BONDED:
      return "BONDED";
    case BondState.UNBONDING:
      return "UNBONDING";
    case BondState.UNBONDED:
      return "UNBONDED";
    case BondState.REMOVED:
      return "REMOVED";
    case BondState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Epoch is a structure that contains the metadata of an epoch */
export interface Epoch {
  /** epoch_number is the number of this epoch */
  epochNumber: bigint;
  /** current_epoch_interval is the epoch interval at the time of this epoch */
  currentEpochInterval: bigint;
  /** first_block_height is the height of the first block in this epoch */
  firstBlockHeight: bigint;
  /**
   * last_block_time is the time of the last block in this epoch.
   * Babylon needs to remember the last header's time of each epoch to complete
   * unbonding validators/delegations when a previous epoch's checkpoint is
   * finalised. The last_block_time field is nil in the epoch's beginning, and
   * is set upon the end of this epoch.
   */
  lastBlockTime?: Date;
  /**
   * sealer is the last block of the sealed epoch
   * sealer_app_hash points to the sealer but stored in the 1st header
   * of the next epoch
   */
  sealerAppHash: Uint8Array;
  /**
   * sealer_block_hash is the hash of the sealer
   * the validator set has generated a BLS multisig on the hash,
   * i.e., hash of the last block in the epoch
   */
  sealerBlockHash: Uint8Array;
}
export interface EpochProtoMsg {
  typeUrl: "/babylon.epoching.v1.Epoch";
  value: Uint8Array;
}
/** Epoch is a structure that contains the metadata of an epoch */
export interface EpochAmino {
  /** epoch_number is the number of this epoch */
  epoch_number?: string;
  /** current_epoch_interval is the epoch interval at the time of this epoch */
  current_epoch_interval?: string;
  /** first_block_height is the height of the first block in this epoch */
  first_block_height?: string;
  /**
   * last_block_time is the time of the last block in this epoch.
   * Babylon needs to remember the last header's time of each epoch to complete
   * unbonding validators/delegations when a previous epoch's checkpoint is
   * finalised. The last_block_time field is nil in the epoch's beginning, and
   * is set upon the end of this epoch.
   */
  last_block_time?: string;
  /**
   * sealer is the last block of the sealed epoch
   * sealer_app_hash points to the sealer but stored in the 1st header
   * of the next epoch
   */
  sealer_app_hash?: string;
  /**
   * sealer_block_hash is the hash of the sealer
   * the validator set has generated a BLS multisig on the hash,
   * i.e., hash of the last block in the epoch
   */
  sealer_block_hash?: string;
}
export interface EpochAminoMsg {
  type: "/babylon.epoching.v1.Epoch";
  value: EpochAmino;
}
/** Epoch is a structure that contains the metadata of an epoch */
export interface EpochSDKType {
  epoch_number: bigint;
  current_epoch_interval: bigint;
  first_block_height: bigint;
  last_block_time?: Date;
  sealer_app_hash: Uint8Array;
  sealer_block_hash: Uint8Array;
}
/**
 * QueuedMessage is a message that can change the validator set and is delayed
 * to the end of an epoch
 */
export interface QueuedMessage {
  /** tx_id is the ID of the tx that contains the message */
  txId: Uint8Array;
  /** msg_id is the original message ID, i.e., hash of the marshaled message */
  msgId: Uint8Array;
  /** block_height is the height when this msg is submitted to Babylon */
  blockHeight: bigint;
  /** block_time is the timestamp when this msg is submitted to Babylon */
  blockTime?: Date;
  msgCreateValidator?: MsgCreateValidator;
  msgDelegate?: MsgDelegate;
  msgUndelegate?: MsgUndelegate;
  msgBeginRedelegate?: MsgBeginRedelegate;
  msgCancelUnbondingDelegation?: MsgCancelUnbondingDelegation;
  msgEditValidator?: MsgEditValidator;
  msgUpdateParams?: MsgUpdateParams;
}
export interface QueuedMessageProtoMsg {
  typeUrl: "/babylon.epoching.v1.QueuedMessage";
  value: Uint8Array;
}
/**
 * QueuedMessage is a message that can change the validator set and is delayed
 * to the end of an epoch
 */
export interface QueuedMessageAmino {
  /** tx_id is the ID of the tx that contains the message */
  tx_id?: string;
  /** msg_id is the original message ID, i.e., hash of the marshaled message */
  msg_id?: string;
  /** block_height is the height when this msg is submitted to Babylon */
  block_height?: string;
  /** block_time is the timestamp when this msg is submitted to Babylon */
  block_time?: string;
  msg_create_validator?: MsgCreateValidatorAmino;
  msg_delegate?: MsgDelegateAmino;
  msg_undelegate?: MsgUndelegateAmino;
  msg_begin_redelegate?: MsgBeginRedelegateAmino;
  msg_cancel_unbonding_delegation?: MsgCancelUnbondingDelegationAmino;
  msg_edit_validator?: MsgEditValidatorAmino;
  msg_update_params?: MsgUpdateParamsAmino;
}
export interface QueuedMessageAminoMsg {
  type: "/babylon.epoching.v1.QueuedMessage";
  value: QueuedMessageAmino;
}
/**
 * QueuedMessage is a message that can change the validator set and is delayed
 * to the end of an epoch
 */
export interface QueuedMessageSDKType {
  tx_id: Uint8Array;
  msg_id: Uint8Array;
  block_height: bigint;
  block_time?: Date;
  msg_create_validator?: MsgCreateValidatorSDKType;
  msg_delegate?: MsgDelegateSDKType;
  msg_undelegate?: MsgUndelegateSDKType;
  msg_begin_redelegate?: MsgBeginRedelegateSDKType;
  msg_cancel_unbonding_delegation?: MsgCancelUnbondingDelegationSDKType;
  msg_edit_validator?: MsgEditValidatorSDKType;
  msg_update_params?: MsgUpdateParamsSDKType;
}
/** ValStateUpdate is a message that records a state update of a validator */
export interface ValStateUpdate {
  state: BondState;
  blockHeight: bigint;
  blockTime?: Date;
}
export interface ValStateUpdateProtoMsg {
  typeUrl: "/babylon.epoching.v1.ValStateUpdate";
  value: Uint8Array;
}
/** ValStateUpdate is a message that records a state update of a validator */
export interface ValStateUpdateAmino {
  state?: BondState;
  block_height?: string;
  block_time?: string;
}
export interface ValStateUpdateAminoMsg {
  type: "/babylon.epoching.v1.ValStateUpdate";
  value: ValStateUpdateAmino;
}
/** ValStateUpdate is a message that records a state update of a validator */
export interface ValStateUpdateSDKType {
  state: BondState;
  block_height: bigint;
  block_time?: Date;
}
/**
 * ValidatorLifecycle is a message that records the lifecycle of
 * a validator
 */
export interface ValidatorLifecycle {
  valAddr: string;
  valLife: ValStateUpdate[];
}
export interface ValidatorLifecycleProtoMsg {
  typeUrl: "/babylon.epoching.v1.ValidatorLifecycle";
  value: Uint8Array;
}
/**
 * ValidatorLifecycle is a message that records the lifecycle of
 * a validator
 */
export interface ValidatorLifecycleAmino {
  val_addr?: string;
  val_life?: ValStateUpdateAmino[];
}
export interface ValidatorLifecycleAminoMsg {
  type: "/babylon.epoching.v1.ValidatorLifecycle";
  value: ValidatorLifecycleAmino;
}
/**
 * ValidatorLifecycle is a message that records the lifecycle of
 * a validator
 */
export interface ValidatorLifecycleSDKType {
  val_addr: string;
  val_life: ValStateUpdateSDKType[];
}
/**
 * DelegationStateUpdate is the message that records a state update of a
 * delegation
 */
export interface DelegationStateUpdate {
  state: BondState;
  valAddr: string;
  amount?: Coin;
  blockHeight: bigint;
  blockTime?: Date;
}
export interface DelegationStateUpdateProtoMsg {
  typeUrl: "/babylon.epoching.v1.DelegationStateUpdate";
  value: Uint8Array;
}
/**
 * DelegationStateUpdate is the message that records a state update of a
 * delegation
 */
export interface DelegationStateUpdateAmino {
  state?: BondState;
  val_addr?: string;
  amount?: CoinAmino;
  block_height?: string;
  block_time?: string;
}
export interface DelegationStateUpdateAminoMsg {
  type: "/babylon.epoching.v1.DelegationStateUpdate";
  value: DelegationStateUpdateAmino;
}
/**
 * DelegationStateUpdate is the message that records a state update of a
 * delegation
 */
export interface DelegationStateUpdateSDKType {
  state: BondState;
  val_addr: string;
  amount?: CoinSDKType;
  block_height: bigint;
  block_time?: Date;
}
/**
 * ValidatorLifecycle is a message that records the lifecycle of
 * a delegation
 */
export interface DelegationLifecycle {
  delAddr: string;
  delLife: DelegationStateUpdate[];
}
export interface DelegationLifecycleProtoMsg {
  typeUrl: "/babylon.epoching.v1.DelegationLifecycle";
  value: Uint8Array;
}
/**
 * ValidatorLifecycle is a message that records the lifecycle of
 * a delegation
 */
export interface DelegationLifecycleAmino {
  del_addr?: string;
  del_life?: DelegationStateUpdateAmino[];
}
export interface DelegationLifecycleAminoMsg {
  type: "/babylon.epoching.v1.DelegationLifecycle";
  value: DelegationLifecycleAmino;
}
/**
 * ValidatorLifecycle is a message that records the lifecycle of
 * a delegation
 */
export interface DelegationLifecycleSDKType {
  del_addr: string;
  del_life: DelegationStateUpdateSDKType[];
}
/** Validator is a message that denotes a validator */
export interface Validator {
  /** addr is the validator's address (in sdk.ValAddress) */
  addr: Uint8Array;
  /** power is the validator's voting power */
  power: bigint;
}
export interface ValidatorProtoMsg {
  typeUrl: "/babylon.epoching.v1.Validator";
  value: Uint8Array;
}
/** Validator is a message that denotes a validator */
export interface ValidatorAmino {
  /** addr is the validator's address (in sdk.ValAddress) */
  addr?: string;
  /** power is the validator's voting power */
  power?: string;
}
export interface ValidatorAminoMsg {
  type: "/babylon.epoching.v1.Validator";
  value: ValidatorAmino;
}
/** Validator is a message that denotes a validator */
export interface ValidatorSDKType {
  addr: Uint8Array;
  power: bigint;
}
function createBaseEpoch(): Epoch {
  return {
    epochNumber: BigInt(0),
    currentEpochInterval: BigInt(0),
    firstBlockHeight: BigInt(0),
    lastBlockTime: undefined,
    sealerAppHash: new Uint8Array(),
    sealerBlockHash: new Uint8Array()
  };
}
export const Epoch = {
  typeUrl: "/babylon.epoching.v1.Epoch",
  is(o: any): o is Epoch {
    return o && (o.$typeUrl === Epoch.typeUrl || typeof o.epochNumber === "bigint" && typeof o.currentEpochInterval === "bigint" && typeof o.firstBlockHeight === "bigint" && (o.sealerAppHash instanceof Uint8Array || typeof o.sealerAppHash === "string") && (o.sealerBlockHash instanceof Uint8Array || typeof o.sealerBlockHash === "string"));
  },
  isSDK(o: any): o is EpochSDKType {
    return o && (o.$typeUrl === Epoch.typeUrl || typeof o.epoch_number === "bigint" && typeof o.current_epoch_interval === "bigint" && typeof o.first_block_height === "bigint" && (o.sealer_app_hash instanceof Uint8Array || typeof o.sealer_app_hash === "string") && (o.sealer_block_hash instanceof Uint8Array || typeof o.sealer_block_hash === "string"));
  },
  isAmino(o: any): o is EpochAmino {
    return o && (o.$typeUrl === Epoch.typeUrl || typeof o.epoch_number === "bigint" && typeof o.current_epoch_interval === "bigint" && typeof o.first_block_height === "bigint" && (o.sealer_app_hash instanceof Uint8Array || typeof o.sealer_app_hash === "string") && (o.sealer_block_hash instanceof Uint8Array || typeof o.sealer_block_hash === "string"));
  },
  encode(message: Epoch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    if (message.currentEpochInterval !== BigInt(0)) {
      writer.uint32(16).uint64(message.currentEpochInterval);
    }
    if (message.firstBlockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.firstBlockHeight);
    }
    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.sealerAppHash.length !== 0) {
      writer.uint32(42).bytes(message.sealerAppHash);
    }
    if (message.sealerBlockHash.length !== 0) {
      writer.uint32(50).bytes(message.sealerBlockHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Epoch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpoch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.uint64();
          break;
        case 2:
          message.currentEpochInterval = reader.uint64();
          break;
        case 3:
          message.firstBlockHeight = reader.uint64();
          break;
        case 4:
          message.lastBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sealerAppHash = reader.bytes();
          break;
        case 6:
          message.sealerBlockHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Epoch {
    return {
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0),
      currentEpochInterval: isSet(object.currentEpochInterval) ? BigInt(object.currentEpochInterval.toString()) : BigInt(0),
      firstBlockHeight: isSet(object.firstBlockHeight) ? BigInt(object.firstBlockHeight.toString()) : BigInt(0),
      lastBlockTime: isSet(object.lastBlockTime) ? fromJsonTimestamp(object.lastBlockTime) : undefined,
      sealerAppHash: isSet(object.sealerAppHash) ? bytesFromBase64(object.sealerAppHash) : new Uint8Array(),
      sealerBlockHash: isSet(object.sealerBlockHash) ? bytesFromBase64(object.sealerBlockHash) : new Uint8Array()
    };
  },
  toJSON(message: Epoch): JsonSafe<Epoch> {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    message.currentEpochInterval !== undefined && (obj.currentEpochInterval = (message.currentEpochInterval || BigInt(0)).toString());
    message.firstBlockHeight !== undefined && (obj.firstBlockHeight = (message.firstBlockHeight || BigInt(0)).toString());
    message.lastBlockTime !== undefined && (obj.lastBlockTime = message.lastBlockTime.toISOString());
    message.sealerAppHash !== undefined && (obj.sealerAppHash = base64FromBytes(message.sealerAppHash !== undefined ? message.sealerAppHash : new Uint8Array()));
    message.sealerBlockHash !== undefined && (obj.sealerBlockHash = base64FromBytes(message.sealerBlockHash !== undefined ? message.sealerBlockHash : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Epoch>, I>>(object: I): Epoch {
    const message = createBaseEpoch();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.currentEpochInterval = object.currentEpochInterval !== undefined && object.currentEpochInterval !== null ? BigInt(object.currentEpochInterval.toString()) : BigInt(0);
    message.firstBlockHeight = object.firstBlockHeight !== undefined && object.firstBlockHeight !== null ? BigInt(object.firstBlockHeight.toString()) : BigInt(0);
    message.lastBlockTime = object.lastBlockTime ?? undefined;
    message.sealerAppHash = object.sealerAppHash ?? new Uint8Array();
    message.sealerBlockHash = object.sealerBlockHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EpochAmino): Epoch {
    const message = createBaseEpoch();
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    if (object.current_epoch_interval !== undefined && object.current_epoch_interval !== null) {
      message.currentEpochInterval = BigInt(object.current_epoch_interval);
    }
    if (object.first_block_height !== undefined && object.first_block_height !== null) {
      message.firstBlockHeight = BigInt(object.first_block_height);
    }
    if (object.last_block_time !== undefined && object.last_block_time !== null) {
      message.lastBlockTime = fromTimestamp(Timestamp.fromAmino(object.last_block_time));
    }
    if (object.sealer_app_hash !== undefined && object.sealer_app_hash !== null) {
      message.sealerAppHash = bytesFromBase64(object.sealer_app_hash);
    }
    if (object.sealer_block_hash !== undefined && object.sealer_block_hash !== null) {
      message.sealerBlockHash = bytesFromBase64(object.sealer_block_hash);
    }
    return message;
  },
  toAmino(message: Epoch): EpochAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? (message.epochNumber?.toString)() : undefined;
    obj.current_epoch_interval = message.currentEpochInterval !== BigInt(0) ? (message.currentEpochInterval?.toString)() : undefined;
    obj.first_block_height = message.firstBlockHeight !== BigInt(0) ? (message.firstBlockHeight?.toString)() : undefined;
    obj.last_block_time = message.lastBlockTime ? Timestamp.toAmino(toTimestamp(message.lastBlockTime)) : undefined;
    obj.sealer_app_hash = message.sealerAppHash ? base64FromBytes(message.sealerAppHash) : undefined;
    obj.sealer_block_hash = message.sealerBlockHash ? base64FromBytes(message.sealerBlockHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: EpochAminoMsg): Epoch {
    return Epoch.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochProtoMsg): Epoch {
    return Epoch.decode(message.value);
  },
  toProto(message: Epoch): Uint8Array {
    return Epoch.encode(message).finish();
  },
  toProtoMsg(message: Epoch): EpochProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.Epoch",
      value: Epoch.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Epoch.typeUrl, Epoch);
function createBaseQueuedMessage(): QueuedMessage {
  return {
    txId: new Uint8Array(),
    msgId: new Uint8Array(),
    blockHeight: BigInt(0),
    blockTime: undefined,
    msgCreateValidator: undefined,
    msgDelegate: undefined,
    msgUndelegate: undefined,
    msgBeginRedelegate: undefined,
    msgCancelUnbondingDelegation: undefined,
    msgEditValidator: undefined,
    msgUpdateParams: undefined
  };
}
export const QueuedMessage = {
  typeUrl: "/babylon.epoching.v1.QueuedMessage",
  is(o: any): o is QueuedMessage {
    return o && (o.$typeUrl === QueuedMessage.typeUrl || (o.txId instanceof Uint8Array || typeof o.txId === "string") && (o.msgId instanceof Uint8Array || typeof o.msgId === "string") && typeof o.blockHeight === "bigint");
  },
  isSDK(o: any): o is QueuedMessageSDKType {
    return o && (o.$typeUrl === QueuedMessage.typeUrl || (o.tx_id instanceof Uint8Array || typeof o.tx_id === "string") && (o.msg_id instanceof Uint8Array || typeof o.msg_id === "string") && typeof o.block_height === "bigint");
  },
  isAmino(o: any): o is QueuedMessageAmino {
    return o && (o.$typeUrl === QueuedMessage.typeUrl || (o.tx_id instanceof Uint8Array || typeof o.tx_id === "string") && (o.msg_id instanceof Uint8Array || typeof o.msg_id === "string") && typeof o.block_height === "bigint");
  },
  encode(message: QueuedMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.msgId.length !== 0) {
      writer.uint32(18).bytes(message.msgId);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.msgCreateValidator !== undefined) {
      MsgCreateValidator.encode(message.msgCreateValidator, writer.uint32(42).fork()).ldelim();
    }
    if (message.msgDelegate !== undefined) {
      MsgDelegate.encode(message.msgDelegate, writer.uint32(50).fork()).ldelim();
    }
    if (message.msgUndelegate !== undefined) {
      MsgUndelegate.encode(message.msgUndelegate, writer.uint32(58).fork()).ldelim();
    }
    if (message.msgBeginRedelegate !== undefined) {
      MsgBeginRedelegate.encode(message.msgBeginRedelegate, writer.uint32(66).fork()).ldelim();
    }
    if (message.msgCancelUnbondingDelegation !== undefined) {
      MsgCancelUnbondingDelegation.encode(message.msgCancelUnbondingDelegation, writer.uint32(74).fork()).ldelim();
    }
    if (message.msgEditValidator !== undefined) {
      MsgEditValidator.encode(message.msgEditValidator, writer.uint32(82).fork()).ldelim();
    }
    if (message.msgUpdateParams !== undefined) {
      MsgUpdateParams.encode(message.msgUpdateParams, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueuedMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueuedMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.bytes();
          break;
        case 2:
          message.msgId = reader.bytes();
          break;
        case 3:
          message.blockHeight = reader.uint64();
          break;
        case 4:
          message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.msgCreateValidator = MsgCreateValidator.decode(reader, reader.uint32());
          break;
        case 6:
          message.msgDelegate = MsgDelegate.decode(reader, reader.uint32());
          break;
        case 7:
          message.msgUndelegate = MsgUndelegate.decode(reader, reader.uint32());
          break;
        case 8:
          message.msgBeginRedelegate = MsgBeginRedelegate.decode(reader, reader.uint32());
          break;
        case 9:
          message.msgCancelUnbondingDelegation = MsgCancelUnbondingDelegation.decode(reader, reader.uint32());
          break;
        case 10:
          message.msgEditValidator = MsgEditValidator.decode(reader, reader.uint32());
          break;
        case 11:
          message.msgUpdateParams = MsgUpdateParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueuedMessage {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      msgId: isSet(object.msgId) ? bytesFromBase64(object.msgId) : new Uint8Array(),
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      msgCreateValidator: isSet(object.msgCreateValidator) ? MsgCreateValidator.fromJSON(object.msgCreateValidator) : undefined,
      msgDelegate: isSet(object.msgDelegate) ? MsgDelegate.fromJSON(object.msgDelegate) : undefined,
      msgUndelegate: isSet(object.msgUndelegate) ? MsgUndelegate.fromJSON(object.msgUndelegate) : undefined,
      msgBeginRedelegate: isSet(object.msgBeginRedelegate) ? MsgBeginRedelegate.fromJSON(object.msgBeginRedelegate) : undefined,
      msgCancelUnbondingDelegation: isSet(object.msgCancelUnbondingDelegation) ? MsgCancelUnbondingDelegation.fromJSON(object.msgCancelUnbondingDelegation) : undefined,
      msgEditValidator: isSet(object.msgEditValidator) ? MsgEditValidator.fromJSON(object.msgEditValidator) : undefined,
      msgUpdateParams: isSet(object.msgUpdateParams) ? MsgUpdateParams.fromJSON(object.msgUpdateParams) : undefined
    };
  },
  toJSON(message: QueuedMessage): JsonSafe<QueuedMessage> {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    message.msgId !== undefined && (obj.msgId = base64FromBytes(message.msgId !== undefined ? message.msgId : new Uint8Array()));
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
    message.msgCreateValidator !== undefined && (obj.msgCreateValidator = message.msgCreateValidator ? MsgCreateValidator.toJSON(message.msgCreateValidator) : undefined);
    message.msgDelegate !== undefined && (obj.msgDelegate = message.msgDelegate ? MsgDelegate.toJSON(message.msgDelegate) : undefined);
    message.msgUndelegate !== undefined && (obj.msgUndelegate = message.msgUndelegate ? MsgUndelegate.toJSON(message.msgUndelegate) : undefined);
    message.msgBeginRedelegate !== undefined && (obj.msgBeginRedelegate = message.msgBeginRedelegate ? MsgBeginRedelegate.toJSON(message.msgBeginRedelegate) : undefined);
    message.msgCancelUnbondingDelegation !== undefined && (obj.msgCancelUnbondingDelegation = message.msgCancelUnbondingDelegation ? MsgCancelUnbondingDelegation.toJSON(message.msgCancelUnbondingDelegation) : undefined);
    message.msgEditValidator !== undefined && (obj.msgEditValidator = message.msgEditValidator ? MsgEditValidator.toJSON(message.msgEditValidator) : undefined);
    message.msgUpdateParams !== undefined && (obj.msgUpdateParams = message.msgUpdateParams ? MsgUpdateParams.toJSON(message.msgUpdateParams) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueuedMessage>, I>>(object: I): QueuedMessage {
    const message = createBaseQueuedMessage();
    message.txId = object.txId ?? new Uint8Array();
    message.msgId = object.msgId ?? new Uint8Array();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.blockTime = object.blockTime ?? undefined;
    message.msgCreateValidator = object.msgCreateValidator !== undefined && object.msgCreateValidator !== null ? MsgCreateValidator.fromPartial(object.msgCreateValidator) : undefined;
    message.msgDelegate = object.msgDelegate !== undefined && object.msgDelegate !== null ? MsgDelegate.fromPartial(object.msgDelegate) : undefined;
    message.msgUndelegate = object.msgUndelegate !== undefined && object.msgUndelegate !== null ? MsgUndelegate.fromPartial(object.msgUndelegate) : undefined;
    message.msgBeginRedelegate = object.msgBeginRedelegate !== undefined && object.msgBeginRedelegate !== null ? MsgBeginRedelegate.fromPartial(object.msgBeginRedelegate) : undefined;
    message.msgCancelUnbondingDelegation = object.msgCancelUnbondingDelegation !== undefined && object.msgCancelUnbondingDelegation !== null ? MsgCancelUnbondingDelegation.fromPartial(object.msgCancelUnbondingDelegation) : undefined;
    message.msgEditValidator = object.msgEditValidator !== undefined && object.msgEditValidator !== null ? MsgEditValidator.fromPartial(object.msgEditValidator) : undefined;
    message.msgUpdateParams = object.msgUpdateParams !== undefined && object.msgUpdateParams !== null ? MsgUpdateParams.fromPartial(object.msgUpdateParams) : undefined;
    return message;
  },
  fromAmino(object: QueuedMessageAmino): QueuedMessage {
    const message = createBaseQueuedMessage();
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    if (object.msg_id !== undefined && object.msg_id !== null) {
      message.msgId = bytesFromBase64(object.msg_id);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = fromTimestamp(Timestamp.fromAmino(object.block_time));
    }
    if (object.msg_create_validator !== undefined && object.msg_create_validator !== null) {
      message.msgCreateValidator = MsgCreateValidator.fromAmino(object.msg_create_validator);
    }
    if (object.msg_delegate !== undefined && object.msg_delegate !== null) {
      message.msgDelegate = MsgDelegate.fromAmino(object.msg_delegate);
    }
    if (object.msg_undelegate !== undefined && object.msg_undelegate !== null) {
      message.msgUndelegate = MsgUndelegate.fromAmino(object.msg_undelegate);
    }
    if (object.msg_begin_redelegate !== undefined && object.msg_begin_redelegate !== null) {
      message.msgBeginRedelegate = MsgBeginRedelegate.fromAmino(object.msg_begin_redelegate);
    }
    if (object.msg_cancel_unbonding_delegation !== undefined && object.msg_cancel_unbonding_delegation !== null) {
      message.msgCancelUnbondingDelegation = MsgCancelUnbondingDelegation.fromAmino(object.msg_cancel_unbonding_delegation);
    }
    if (object.msg_edit_validator !== undefined && object.msg_edit_validator !== null) {
      message.msgEditValidator = MsgEditValidator.fromAmino(object.msg_edit_validator);
    }
    if (object.msg_update_params !== undefined && object.msg_update_params !== null) {
      message.msgUpdateParams = MsgUpdateParams.fromAmino(object.msg_update_params);
    }
    return message;
  },
  toAmino(message: QueuedMessage): QueuedMessageAmino {
    const obj: any = {};
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    obj.msg_id = message.msgId ? base64FromBytes(message.msgId) : undefined;
    obj.block_height = message.blockHeight !== BigInt(0) ? (message.blockHeight?.toString)() : undefined;
    obj.block_time = message.blockTime ? Timestamp.toAmino(toTimestamp(message.blockTime)) : undefined;
    obj.msg_create_validator = message.msgCreateValidator ? MsgCreateValidator.toAmino(message.msgCreateValidator) : undefined;
    obj.msg_delegate = message.msgDelegate ? MsgDelegate.toAmino(message.msgDelegate) : undefined;
    obj.msg_undelegate = message.msgUndelegate ? MsgUndelegate.toAmino(message.msgUndelegate) : undefined;
    obj.msg_begin_redelegate = message.msgBeginRedelegate ? MsgBeginRedelegate.toAmino(message.msgBeginRedelegate) : undefined;
    obj.msg_cancel_unbonding_delegation = message.msgCancelUnbondingDelegation ? MsgCancelUnbondingDelegation.toAmino(message.msgCancelUnbondingDelegation) : undefined;
    obj.msg_edit_validator = message.msgEditValidator ? MsgEditValidator.toAmino(message.msgEditValidator) : undefined;
    obj.msg_update_params = message.msgUpdateParams ? MsgUpdateParams.toAmino(message.msgUpdateParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueuedMessageAminoMsg): QueuedMessage {
    return QueuedMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: QueuedMessageProtoMsg): QueuedMessage {
    return QueuedMessage.decode(message.value);
  },
  toProto(message: QueuedMessage): Uint8Array {
    return QueuedMessage.encode(message).finish();
  },
  toProtoMsg(message: QueuedMessage): QueuedMessageProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.QueuedMessage",
      value: QueuedMessage.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueuedMessage.typeUrl, QueuedMessage);
function createBaseValStateUpdate(): ValStateUpdate {
  return {
    state: 0,
    blockHeight: BigInt(0),
    blockTime: undefined
  };
}
export const ValStateUpdate = {
  typeUrl: "/babylon.epoching.v1.ValStateUpdate",
  is(o: any): o is ValStateUpdate {
    return o && (o.$typeUrl === ValStateUpdate.typeUrl || isSet(o.state) && typeof o.blockHeight === "bigint");
  },
  isSDK(o: any): o is ValStateUpdateSDKType {
    return o && (o.$typeUrl === ValStateUpdate.typeUrl || isSet(o.state) && typeof o.block_height === "bigint");
  },
  isAmino(o: any): o is ValStateUpdateAmino {
    return o && (o.$typeUrl === ValStateUpdate.typeUrl || isSet(o.state) && typeof o.block_height === "bigint");
  },
  encode(message: ValStateUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValStateUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValStateUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        case 2:
          message.blockHeight = reader.uint64();
          break;
        case 3:
          message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValStateUpdate {
    return {
      state: isSet(object.state) ? bondStateFromJSON(object.state) : -1,
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined
    };
  },
  toJSON(message: ValStateUpdate): JsonSafe<ValStateUpdate> {
    const obj: any = {};
    message.state !== undefined && (obj.state = bondStateToJSON(message.state));
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValStateUpdate>, I>>(object: I): ValStateUpdate {
    const message = createBaseValStateUpdate();
    message.state = object.state ?? 0;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.blockTime = object.blockTime ?? undefined;
    return message;
  },
  fromAmino(object: ValStateUpdateAmino): ValStateUpdate {
    const message = createBaseValStateUpdate();
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = fromTimestamp(Timestamp.fromAmino(object.block_time));
    }
    return message;
  },
  toAmino(message: ValStateUpdate): ValStateUpdateAmino {
    const obj: any = {};
    obj.state = message.state === 0 ? undefined : message.state;
    obj.block_height = message.blockHeight !== BigInt(0) ? (message.blockHeight?.toString)() : undefined;
    obj.block_time = message.blockTime ? Timestamp.toAmino(toTimestamp(message.blockTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValStateUpdateAminoMsg): ValStateUpdate {
    return ValStateUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: ValStateUpdateProtoMsg): ValStateUpdate {
    return ValStateUpdate.decode(message.value);
  },
  toProto(message: ValStateUpdate): Uint8Array {
    return ValStateUpdate.encode(message).finish();
  },
  toProtoMsg(message: ValStateUpdate): ValStateUpdateProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.ValStateUpdate",
      value: ValStateUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValStateUpdate.typeUrl, ValStateUpdate);
function createBaseValidatorLifecycle(): ValidatorLifecycle {
  return {
    valAddr: "",
    valLife: []
  };
}
export const ValidatorLifecycle = {
  typeUrl: "/babylon.epoching.v1.ValidatorLifecycle",
  is(o: any): o is ValidatorLifecycle {
    return o && (o.$typeUrl === ValidatorLifecycle.typeUrl || typeof o.valAddr === "string" && Array.isArray(o.valLife) && (!o.valLife.length || ValStateUpdate.is(o.valLife[0])));
  },
  isSDK(o: any): o is ValidatorLifecycleSDKType {
    return o && (o.$typeUrl === ValidatorLifecycle.typeUrl || typeof o.val_addr === "string" && Array.isArray(o.val_life) && (!o.val_life.length || ValStateUpdate.isSDK(o.val_life[0])));
  },
  isAmino(o: any): o is ValidatorLifecycleAmino {
    return o && (o.$typeUrl === ValidatorLifecycle.typeUrl || typeof o.val_addr === "string" && Array.isArray(o.val_life) && (!o.val_life.length || ValStateUpdate.isAmino(o.val_life[0])));
  },
  encode(message: ValidatorLifecycle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valAddr !== "") {
      writer.uint32(10).string(message.valAddr);
    }
    for (const v of message.valLife) {
      ValStateUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorLifecycle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorLifecycle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valAddr = reader.string();
          break;
        case 2:
          message.valLife.push(ValStateUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorLifecycle {
    return {
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      valLife: Array.isArray(object?.valLife) ? object.valLife.map((e: any) => ValStateUpdate.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorLifecycle): JsonSafe<ValidatorLifecycle> {
    const obj: any = {};
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    if (message.valLife) {
      obj.valLife = message.valLife.map(e => e ? ValStateUpdate.toJSON(e) : undefined);
    } else {
      obj.valLife = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorLifecycle>, I>>(object: I): ValidatorLifecycle {
    const message = createBaseValidatorLifecycle();
    message.valAddr = object.valAddr ?? "";
    message.valLife = object.valLife?.map(e => ValStateUpdate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorLifecycleAmino): ValidatorLifecycle {
    const message = createBaseValidatorLifecycle();
    if (object.val_addr !== undefined && object.val_addr !== null) {
      message.valAddr = object.val_addr;
    }
    message.valLife = object.val_life?.map(e => ValStateUpdate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ValidatorLifecycle): ValidatorLifecycleAmino {
    const obj: any = {};
    obj.val_addr = message.valAddr === "" ? undefined : message.valAddr;
    if (message.valLife) {
      obj.val_life = message.valLife.map(e => e ? ValStateUpdate.toAmino(e) : undefined);
    } else {
      obj.val_life = message.valLife;
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorLifecycleAminoMsg): ValidatorLifecycle {
    return ValidatorLifecycle.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorLifecycleProtoMsg): ValidatorLifecycle {
    return ValidatorLifecycle.decode(message.value);
  },
  toProto(message: ValidatorLifecycle): Uint8Array {
    return ValidatorLifecycle.encode(message).finish();
  },
  toProtoMsg(message: ValidatorLifecycle): ValidatorLifecycleProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.ValidatorLifecycle",
      value: ValidatorLifecycle.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorLifecycle.typeUrl, ValidatorLifecycle);
function createBaseDelegationStateUpdate(): DelegationStateUpdate {
  return {
    state: 0,
    valAddr: "",
    amount: undefined,
    blockHeight: BigInt(0),
    blockTime: undefined
  };
}
export const DelegationStateUpdate = {
  typeUrl: "/babylon.epoching.v1.DelegationStateUpdate",
  is(o: any): o is DelegationStateUpdate {
    return o && (o.$typeUrl === DelegationStateUpdate.typeUrl || isSet(o.state) && typeof o.valAddr === "string" && typeof o.blockHeight === "bigint");
  },
  isSDK(o: any): o is DelegationStateUpdateSDKType {
    return o && (o.$typeUrl === DelegationStateUpdate.typeUrl || isSet(o.state) && typeof o.val_addr === "string" && typeof o.block_height === "bigint");
  },
  isAmino(o: any): o is DelegationStateUpdateAmino {
    return o && (o.$typeUrl === DelegationStateUpdate.typeUrl || isSet(o.state) && typeof o.val_addr === "string" && typeof o.block_height === "bigint");
  },
  encode(message: DelegationStateUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.valAddr !== "") {
      writer.uint32(18).string(message.valAddr);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegationStateUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationStateUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        case 2:
          message.valAddr = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.blockHeight = reader.uint64();
          break;
        case 5:
          message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegationStateUpdate {
    return {
      state: isSet(object.state) ? bondStateFromJSON(object.state) : -1,
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined
    };
  },
  toJSON(message: DelegationStateUpdate): JsonSafe<DelegationStateUpdate> {
    const obj: any = {};
    message.state !== undefined && (obj.state = bondStateToJSON(message.state));
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DelegationStateUpdate>, I>>(object: I): DelegationStateUpdate {
    const message = createBaseDelegationStateUpdate();
    message.state = object.state ?? 0;
    message.valAddr = object.valAddr ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.blockTime = object.blockTime ?? undefined;
    return message;
  },
  fromAmino(object: DelegationStateUpdateAmino): DelegationStateUpdate {
    const message = createBaseDelegationStateUpdate();
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.val_addr !== undefined && object.val_addr !== null) {
      message.valAddr = object.val_addr;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = fromTimestamp(Timestamp.fromAmino(object.block_time));
    }
    return message;
  },
  toAmino(message: DelegationStateUpdate): DelegationStateUpdateAmino {
    const obj: any = {};
    obj.state = message.state === 0 ? undefined : message.state;
    obj.val_addr = message.valAddr === "" ? undefined : message.valAddr;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.block_height = message.blockHeight !== BigInt(0) ? (message.blockHeight?.toString)() : undefined;
    obj.block_time = message.blockTime ? Timestamp.toAmino(toTimestamp(message.blockTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegationStateUpdateAminoMsg): DelegationStateUpdate {
    return DelegationStateUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationStateUpdateProtoMsg): DelegationStateUpdate {
    return DelegationStateUpdate.decode(message.value);
  },
  toProto(message: DelegationStateUpdate): Uint8Array {
    return DelegationStateUpdate.encode(message).finish();
  },
  toProtoMsg(message: DelegationStateUpdate): DelegationStateUpdateProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.DelegationStateUpdate",
      value: DelegationStateUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelegationStateUpdate.typeUrl, DelegationStateUpdate);
function createBaseDelegationLifecycle(): DelegationLifecycle {
  return {
    delAddr: "",
    delLife: []
  };
}
export const DelegationLifecycle = {
  typeUrl: "/babylon.epoching.v1.DelegationLifecycle",
  is(o: any): o is DelegationLifecycle {
    return o && (o.$typeUrl === DelegationLifecycle.typeUrl || typeof o.delAddr === "string" && Array.isArray(o.delLife) && (!o.delLife.length || DelegationStateUpdate.is(o.delLife[0])));
  },
  isSDK(o: any): o is DelegationLifecycleSDKType {
    return o && (o.$typeUrl === DelegationLifecycle.typeUrl || typeof o.del_addr === "string" && Array.isArray(o.del_life) && (!o.del_life.length || DelegationStateUpdate.isSDK(o.del_life[0])));
  },
  isAmino(o: any): o is DelegationLifecycleAmino {
    return o && (o.$typeUrl === DelegationLifecycle.typeUrl || typeof o.del_addr === "string" && Array.isArray(o.del_life) && (!o.del_life.length || DelegationStateUpdate.isAmino(o.del_life[0])));
  },
  encode(message: DelegationLifecycle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delAddr !== "") {
      writer.uint32(10).string(message.delAddr);
    }
    for (const v of message.delLife) {
      DelegationStateUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegationLifecycle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationLifecycle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delAddr = reader.string();
          break;
        case 2:
          message.delLife.push(DelegationStateUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegationLifecycle {
    return {
      delAddr: isSet(object.delAddr) ? String(object.delAddr) : "",
      delLife: Array.isArray(object?.delLife) ? object.delLife.map((e: any) => DelegationStateUpdate.fromJSON(e)) : []
    };
  },
  toJSON(message: DelegationLifecycle): JsonSafe<DelegationLifecycle> {
    const obj: any = {};
    message.delAddr !== undefined && (obj.delAddr = message.delAddr);
    if (message.delLife) {
      obj.delLife = message.delLife.map(e => e ? DelegationStateUpdate.toJSON(e) : undefined);
    } else {
      obj.delLife = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DelegationLifecycle>, I>>(object: I): DelegationLifecycle {
    const message = createBaseDelegationLifecycle();
    message.delAddr = object.delAddr ?? "";
    message.delLife = object.delLife?.map(e => DelegationStateUpdate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegationLifecycleAmino): DelegationLifecycle {
    const message = createBaseDelegationLifecycle();
    if (object.del_addr !== undefined && object.del_addr !== null) {
      message.delAddr = object.del_addr;
    }
    message.delLife = object.del_life?.map(e => DelegationStateUpdate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DelegationLifecycle): DelegationLifecycleAmino {
    const obj: any = {};
    obj.del_addr = message.delAddr === "" ? undefined : message.delAddr;
    if (message.delLife) {
      obj.del_life = message.delLife.map(e => e ? DelegationStateUpdate.toAmino(e) : undefined);
    } else {
      obj.del_life = message.delLife;
    }
    return obj;
  },
  fromAminoMsg(object: DelegationLifecycleAminoMsg): DelegationLifecycle {
    return DelegationLifecycle.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationLifecycleProtoMsg): DelegationLifecycle {
    return DelegationLifecycle.decode(message.value);
  },
  toProto(message: DelegationLifecycle): Uint8Array {
    return DelegationLifecycle.encode(message).finish();
  },
  toProtoMsg(message: DelegationLifecycle): DelegationLifecycleProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.DelegationLifecycle",
      value: DelegationLifecycle.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelegationLifecycle.typeUrl, DelegationLifecycle);
function createBaseValidator(): Validator {
  return {
    addr: new Uint8Array(),
    power: BigInt(0)
  };
}
export const Validator = {
  typeUrl: "/babylon.epoching.v1.Validator",
  is(o: any): o is Validator {
    return o && (o.$typeUrl === Validator.typeUrl || (o.addr instanceof Uint8Array || typeof o.addr === "string") && typeof o.power === "bigint");
  },
  isSDK(o: any): o is ValidatorSDKType {
    return o && (o.$typeUrl === Validator.typeUrl || (o.addr instanceof Uint8Array || typeof o.addr === "string") && typeof o.power === "bigint");
  },
  isAmino(o: any): o is ValidatorAmino {
    return o && (o.$typeUrl === Validator.typeUrl || (o.addr instanceof Uint8Array || typeof o.addr === "string") && typeof o.power === "bigint");
  },
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addr.length !== 0) {
      writer.uint32(10).bytes(message.addr);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.bytes();
          break;
        case 2:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    return {
      addr: isSet(object.addr) ? bytesFromBase64(object.addr) : new Uint8Array(),
      power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0)
    };
  },
  toJSON(message: Validator): JsonSafe<Validator> {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = base64FromBytes(message.addr !== undefined ? message.addr : new Uint8Array()));
    message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
    const message = createBaseValidator();
    message.addr = object.addr ?? new Uint8Array();
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = bytesFromBase64(object.addr);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.addr = message.addr ? base64FromBytes(message.addr) : undefined;
    obj.power = message.power !== BigInt(0) ? (message.power?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Validator.typeUrl, Validator);