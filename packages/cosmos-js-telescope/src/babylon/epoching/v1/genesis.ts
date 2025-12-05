//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Epoch, EpochAmino, EpochSDKType, ValidatorLifecycle, ValidatorLifecycleAmino, ValidatorLifecycleSDKType, DelegationLifecycle, DelegationLifecycleAmino, DelegationLifecycleSDKType, QueuedMessage, QueuedMessageAmino, QueuedMessageSDKType, Validator, ValidatorAmino, ValidatorSDKType } from "./epoching";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the epoching module's genesis state. */
export interface GenesisState {
  /** params are the current params of the state. */
  params: Params;
  /** epochs contains all the epochs info */
  epochs: Epoch[];
  /** queues contains all the epochs' queue */
  queues: EpochQueue[];
  /**
   * validator_sets is a slice containing all the
   * stored epochs' validator sets
   */
  validatorSets: EpochValidatorSet[];
  /**
   * slashed_validator_sets is a slice containing all the
   * stored epochs' slashed validator sets
   */
  slashedValidatorSets: EpochValidatorSet[];
  /** validators_lifecycle contains the lifecyle of all validators */
  validatorsLifecycle: ValidatorLifecycle[];
  /** delegations_lifecycle contains the lifecyle of all delegations */
  delegationsLifecycle: DelegationLifecycle[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/babylon.epoching.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the epoching module's genesis state. */
export interface GenesisStateAmino {
  /** params are the current params of the state. */
  params?: ParamsAmino;
  /** epochs contains all the epochs info */
  epochs?: EpochAmino[];
  /** queues contains all the epochs' queue */
  queues?: EpochQueueAmino[];
  /**
   * validator_sets is a slice containing all the
   * stored epochs' validator sets
   */
  validator_sets?: EpochValidatorSetAmino[];
  /**
   * slashed_validator_sets is a slice containing all the
   * stored epochs' slashed validator sets
   */
  slashed_validator_sets?: EpochValidatorSetAmino[];
  /** validators_lifecycle contains the lifecyle of all validators */
  validators_lifecycle?: ValidatorLifecycleAmino[];
  /** delegations_lifecycle contains the lifecyle of all delegations */
  delegations_lifecycle?: DelegationLifecycleAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/babylon.epoching.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the epoching module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  epochs: EpochSDKType[];
  queues: EpochQueueSDKType[];
  validator_sets: EpochValidatorSetSDKType[];
  slashed_validator_sets: EpochValidatorSetSDKType[];
  validators_lifecycle: ValidatorLifecycleSDKType[];
  delegations_lifecycle: DelegationLifecycleSDKType[];
}
/**
 * EpochQueue defines a genesis state entry for
 * the epochs' message queue
 */
export interface EpochQueue {
  /** epoch_number is the epoch's identifier */
  epochNumber: bigint;
  /** msgs is a slice containing all the epochs' queued messages */
  msgs: QueuedMessage[];
}
export interface EpochQueueProtoMsg {
  typeUrl: "/babylon.epoching.v1.EpochQueue";
  value: Uint8Array;
}
/**
 * EpochQueue defines a genesis state entry for
 * the epochs' message queue
 */
export interface EpochQueueAmino {
  /** epoch_number is the epoch's identifier */
  epoch_number?: string;
  /** msgs is a slice containing all the epochs' queued messages */
  msgs?: QueuedMessageAmino[];
}
export interface EpochQueueAminoMsg {
  type: "/babylon.epoching.v1.EpochQueue";
  value: EpochQueueAmino;
}
/**
 * EpochQueue defines a genesis state entry for
 * the epochs' message queue
 */
export interface EpochQueueSDKType {
  epoch_number: bigint;
  msgs: QueuedMessageSDKType[];
}
/**
 * EpochValidatorSet contains the epoch number and the validators corresponding
 * to that epoch number
 */
export interface EpochValidatorSet {
  /** epoch_number is the epoch's identifier */
  epochNumber: bigint;
  /**
   * validators is a slice containing the validators of the
   * epoch's validator set
   */
  validators: Validator[];
}
export interface EpochValidatorSetProtoMsg {
  typeUrl: "/babylon.epoching.v1.EpochValidatorSet";
  value: Uint8Array;
}
/**
 * EpochValidatorSet contains the epoch number and the validators corresponding
 * to that epoch number
 */
export interface EpochValidatorSetAmino {
  /** epoch_number is the epoch's identifier */
  epoch_number?: string;
  /**
   * validators is a slice containing the validators of the
   * epoch's validator set
   */
  validators?: ValidatorAmino[];
}
export interface EpochValidatorSetAminoMsg {
  type: "/babylon.epoching.v1.EpochValidatorSet";
  value: EpochValidatorSetAmino;
}
/**
 * EpochValidatorSet contains the epoch number and the validators corresponding
 * to that epoch number
 */
export interface EpochValidatorSetSDKType {
  epoch_number: bigint;
  validators: ValidatorSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    epochs: [],
    queues: [],
    validatorSets: [],
    slashedValidatorSets: [],
    validatorsLifecycle: [],
    delegationsLifecycle: []
  };
}
export const GenesisState = {
  typeUrl: "/babylon.epoching.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.epochs) && (!o.epochs.length || Epoch.is(o.epochs[0])) && Array.isArray(o.queues) && (!o.queues.length || EpochQueue.is(o.queues[0])) && Array.isArray(o.validatorSets) && (!o.validatorSets.length || EpochValidatorSet.is(o.validatorSets[0])) && Array.isArray(o.slashedValidatorSets) && (!o.slashedValidatorSets.length || EpochValidatorSet.is(o.slashedValidatorSets[0])) && Array.isArray(o.validatorsLifecycle) && (!o.validatorsLifecycle.length || ValidatorLifecycle.is(o.validatorsLifecycle[0])) && Array.isArray(o.delegationsLifecycle) && (!o.delegationsLifecycle.length || DelegationLifecycle.is(o.delegationsLifecycle[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.epochs) && (!o.epochs.length || Epoch.isSDK(o.epochs[0])) && Array.isArray(o.queues) && (!o.queues.length || EpochQueue.isSDK(o.queues[0])) && Array.isArray(o.validator_sets) && (!o.validator_sets.length || EpochValidatorSet.isSDK(o.validator_sets[0])) && Array.isArray(o.slashed_validator_sets) && (!o.slashed_validator_sets.length || EpochValidatorSet.isSDK(o.slashed_validator_sets[0])) && Array.isArray(o.validators_lifecycle) && (!o.validators_lifecycle.length || ValidatorLifecycle.isSDK(o.validators_lifecycle[0])) && Array.isArray(o.delegations_lifecycle) && (!o.delegations_lifecycle.length || DelegationLifecycle.isSDK(o.delegations_lifecycle[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.epochs) && (!o.epochs.length || Epoch.isAmino(o.epochs[0])) && Array.isArray(o.queues) && (!o.queues.length || EpochQueue.isAmino(o.queues[0])) && Array.isArray(o.validator_sets) && (!o.validator_sets.length || EpochValidatorSet.isAmino(o.validator_sets[0])) && Array.isArray(o.slashed_validator_sets) && (!o.slashed_validator_sets.length || EpochValidatorSet.isAmino(o.slashed_validator_sets[0])) && Array.isArray(o.validators_lifecycle) && (!o.validators_lifecycle.length || ValidatorLifecycle.isAmino(o.validators_lifecycle[0])) && Array.isArray(o.delegations_lifecycle) && (!o.delegations_lifecycle.length || DelegationLifecycle.isAmino(o.delegations_lifecycle[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.epochs) {
      Epoch.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.queues) {
      EpochQueue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validatorSets) {
      EpochValidatorSet.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.slashedValidatorSets) {
      EpochValidatorSet.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.validatorsLifecycle) {
      ValidatorLifecycle.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.delegationsLifecycle) {
      DelegationLifecycle.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.epochs.push(Epoch.decode(reader, reader.uint32()));
          break;
        case 3:
          message.queues.push(EpochQueue.decode(reader, reader.uint32()));
          break;
        case 4:
          message.validatorSets.push(EpochValidatorSet.decode(reader, reader.uint32()));
          break;
        case 5:
          message.slashedValidatorSets.push(EpochValidatorSet.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validatorsLifecycle.push(ValidatorLifecycle.decode(reader, reader.uint32()));
          break;
        case 7:
          message.delegationsLifecycle.push(DelegationLifecycle.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => Epoch.fromJSON(e)) : [],
      queues: Array.isArray(object?.queues) ? object.queues.map((e: any) => EpochQueue.fromJSON(e)) : [],
      validatorSets: Array.isArray(object?.validatorSets) ? object.validatorSets.map((e: any) => EpochValidatorSet.fromJSON(e)) : [],
      slashedValidatorSets: Array.isArray(object?.slashedValidatorSets) ? object.slashedValidatorSets.map((e: any) => EpochValidatorSet.fromJSON(e)) : [],
      validatorsLifecycle: Array.isArray(object?.validatorsLifecycle) ? object.validatorsLifecycle.map((e: any) => ValidatorLifecycle.fromJSON(e)) : [],
      delegationsLifecycle: Array.isArray(object?.delegationsLifecycle) ? object.delegationsLifecycle.map((e: any) => DelegationLifecycle.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? Epoch.toJSON(e) : undefined);
    } else {
      obj.epochs = [];
    }
    if (message.queues) {
      obj.queues = message.queues.map(e => e ? EpochQueue.toJSON(e) : undefined);
    } else {
      obj.queues = [];
    }
    if (message.validatorSets) {
      obj.validatorSets = message.validatorSets.map(e => e ? EpochValidatorSet.toJSON(e) : undefined);
    } else {
      obj.validatorSets = [];
    }
    if (message.slashedValidatorSets) {
      obj.slashedValidatorSets = message.slashedValidatorSets.map(e => e ? EpochValidatorSet.toJSON(e) : undefined);
    } else {
      obj.slashedValidatorSets = [];
    }
    if (message.validatorsLifecycle) {
      obj.validatorsLifecycle = message.validatorsLifecycle.map(e => e ? ValidatorLifecycle.toJSON(e) : undefined);
    } else {
      obj.validatorsLifecycle = [];
    }
    if (message.delegationsLifecycle) {
      obj.delegationsLifecycle = message.delegationsLifecycle.map(e => e ? DelegationLifecycle.toJSON(e) : undefined);
    } else {
      obj.delegationsLifecycle = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.epochs = object.epochs?.map(e => Epoch.fromPartial(e)) || [];
    message.queues = object.queues?.map(e => EpochQueue.fromPartial(e)) || [];
    message.validatorSets = object.validatorSets?.map(e => EpochValidatorSet.fromPartial(e)) || [];
    message.slashedValidatorSets = object.slashedValidatorSets?.map(e => EpochValidatorSet.fromPartial(e)) || [];
    message.validatorsLifecycle = object.validatorsLifecycle?.map(e => ValidatorLifecycle.fromPartial(e)) || [];
    message.delegationsLifecycle = object.delegationsLifecycle?.map(e => DelegationLifecycle.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.epochs = object.epochs?.map(e => Epoch.fromAmino(e)) || [];
    message.queues = object.queues?.map(e => EpochQueue.fromAmino(e)) || [];
    message.validatorSets = object.validator_sets?.map(e => EpochValidatorSet.fromAmino(e)) || [];
    message.slashedValidatorSets = object.slashed_validator_sets?.map(e => EpochValidatorSet.fromAmino(e)) || [];
    message.validatorsLifecycle = object.validators_lifecycle?.map(e => ValidatorLifecycle.fromAmino(e)) || [];
    message.delegationsLifecycle = object.delegations_lifecycle?.map(e => DelegationLifecycle.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? Epoch.toAmino(e) : undefined);
    } else {
      obj.epochs = message.epochs;
    }
    if (message.queues) {
      obj.queues = message.queues.map(e => e ? EpochQueue.toAmino(e) : undefined);
    } else {
      obj.queues = message.queues;
    }
    if (message.validatorSets) {
      obj.validator_sets = message.validatorSets.map(e => e ? EpochValidatorSet.toAmino(e) : undefined);
    } else {
      obj.validator_sets = message.validatorSets;
    }
    if (message.slashedValidatorSets) {
      obj.slashed_validator_sets = message.slashedValidatorSets.map(e => e ? EpochValidatorSet.toAmino(e) : undefined);
    } else {
      obj.slashed_validator_sets = message.slashedValidatorSets;
    }
    if (message.validatorsLifecycle) {
      obj.validators_lifecycle = message.validatorsLifecycle.map(e => e ? ValidatorLifecycle.toAmino(e) : undefined);
    } else {
      obj.validators_lifecycle = message.validatorsLifecycle;
    }
    if (message.delegationsLifecycle) {
      obj.delegations_lifecycle = message.delegationsLifecycle.map(e => e ? DelegationLifecycle.toAmino(e) : undefined);
    } else {
      obj.delegations_lifecycle = message.delegationsLifecycle;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
function createBaseEpochQueue(): EpochQueue {
  return {
    epochNumber: BigInt(0),
    msgs: []
  };
}
export const EpochQueue = {
  typeUrl: "/babylon.epoching.v1.EpochQueue",
  is(o: any): o is EpochQueue {
    return o && (o.$typeUrl === EpochQueue.typeUrl || typeof o.epochNumber === "bigint" && Array.isArray(o.msgs) && (!o.msgs.length || QueuedMessage.is(o.msgs[0])));
  },
  isSDK(o: any): o is EpochQueueSDKType {
    return o && (o.$typeUrl === EpochQueue.typeUrl || typeof o.epoch_number === "bigint" && Array.isArray(o.msgs) && (!o.msgs.length || QueuedMessage.isSDK(o.msgs[0])));
  },
  isAmino(o: any): o is EpochQueueAmino {
    return o && (o.$typeUrl === EpochQueue.typeUrl || typeof o.epoch_number === "bigint" && Array.isArray(o.msgs) && (!o.msgs.length || QueuedMessage.isAmino(o.msgs[0])));
  },
  encode(message: EpochQueue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    for (const v of message.msgs) {
      QueuedMessage.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochQueue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.uint64();
          break;
        case 2:
          message.msgs.push(QueuedMessage.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EpochQueue {
    return {
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0),
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => QueuedMessage.fromJSON(e)) : []
    };
  },
  toJSON(message: EpochQueue): JsonSafe<EpochQueue> {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? QueuedMessage.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EpochQueue>, I>>(object: I): EpochQueue {
    const message = createBaseEpochQueue();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.msgs = object.msgs?.map(e => QueuedMessage.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EpochQueueAmino): EpochQueue {
    const message = createBaseEpochQueue();
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    message.msgs = object.msgs?.map(e => QueuedMessage.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EpochQueue): EpochQueueAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? (message.epochNumber?.toString)() : undefined;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? QueuedMessage.toAmino(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    return obj;
  },
  fromAminoMsg(object: EpochQueueAminoMsg): EpochQueue {
    return EpochQueue.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochQueueProtoMsg): EpochQueue {
    return EpochQueue.decode(message.value);
  },
  toProto(message: EpochQueue): Uint8Array {
    return EpochQueue.encode(message).finish();
  },
  toProtoMsg(message: EpochQueue): EpochQueueProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.EpochQueue",
      value: EpochQueue.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EpochQueue.typeUrl, EpochQueue);
function createBaseEpochValidatorSet(): EpochValidatorSet {
  return {
    epochNumber: BigInt(0),
    validators: []
  };
}
export const EpochValidatorSet = {
  typeUrl: "/babylon.epoching.v1.EpochValidatorSet",
  is(o: any): o is EpochValidatorSet {
    return o && (o.$typeUrl === EpochValidatorSet.typeUrl || typeof o.epochNumber === "bigint" && Array.isArray(o.validators) && (!o.validators.length || Validator.is(o.validators[0])));
  },
  isSDK(o: any): o is EpochValidatorSetSDKType {
    return o && (o.$typeUrl === EpochValidatorSet.typeUrl || typeof o.epoch_number === "bigint" && Array.isArray(o.validators) && (!o.validators.length || Validator.isSDK(o.validators[0])));
  },
  isAmino(o: any): o is EpochValidatorSetAmino {
    return o && (o.$typeUrl === EpochValidatorSet.typeUrl || typeof o.epoch_number === "bigint" && Array.isArray(o.validators) && (!o.validators.length || Validator.isAmino(o.validators[0])));
  },
  encode(message: EpochValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = reader.uint64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EpochValidatorSet {
    return {
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0),
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : []
    };
  },
  toJSON(message: EpochValidatorSet): JsonSafe<EpochValidatorSet> {
    const obj: any = {};
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EpochValidatorSet>, I>>(object: I): EpochValidatorSet {
    const message = createBaseEpochValidatorSet();
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EpochValidatorSetAmino): EpochValidatorSet {
    const message = createBaseEpochValidatorSet();
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EpochValidatorSet): EpochValidatorSetAmino {
    const obj: any = {};
    obj.epoch_number = message.epochNumber !== BigInt(0) ? (message.epochNumber?.toString)() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    return obj;
  },
  fromAminoMsg(object: EpochValidatorSetAminoMsg): EpochValidatorSet {
    return EpochValidatorSet.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochValidatorSetProtoMsg): EpochValidatorSet {
    return EpochValidatorSet.decode(message.value);
  },
  toProto(message: EpochValidatorSet): Uint8Array {
    return EpochValidatorSet.encode(message).finish();
  },
  toProtoMsg(message: EpochValidatorSet): EpochValidatorSetProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.EpochValidatorSet",
      value: EpochValidatorSet.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EpochValidatorSet.typeUrl, EpochValidatorSet);