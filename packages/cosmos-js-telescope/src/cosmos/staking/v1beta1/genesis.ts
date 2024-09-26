//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType, Validator, ValidatorAmino, ValidatorSDKType, Delegation, DelegationAmino, DelegationSDKType, UnbondingDelegation, UnbondingDelegationAmino, UnbondingDelegationSDKType, Redelegation, RedelegationAmino, RedelegationSDKType } from "./staking";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../../helpers";
/** GenesisState defines the staking module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to deposit. */
  params: Params;
  /**
   * last_total_power tracks the total amounts of bonded tokens recorded during
   * the previous end block.
   */
  lastTotalPower: Uint8Array;
  /**
   * last_validator_powers is a special index that provides a historical list
   * of the last-block's bonded validators.
   */
  lastValidatorPowers: LastValidatorPower[];
  /** validators defines the validator set at genesis. */
  validators: Validator[];
  /** delegations defines the delegations active at genesis. */
  delegations: Delegation[];
  /** unbonding_delegations defines the unbonding delegations active at genesis. */
  unbondingDelegations: UnbondingDelegation[];
  /** redelegations defines the redelegations active at genesis. */
  redelegations: Redelegation[];
  /** exported defines a bool to identify whether the chain dealing with exported or initialized genesis. */
  exported: boolean;
  rotationIndexRecords: RotationIndexRecord[];
  rotationQueue: RotationQueueRecord[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the staking module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of related to deposit. */
  params: ParamsAmino;
  /**
   * last_total_power tracks the total amounts of bonded tokens recorded during
   * the previous end block.
   */
  last_total_power: string;
  /**
   * last_validator_powers is a special index that provides a historical list
   * of the last-block's bonded validators.
   */
  last_validator_powers: LastValidatorPowerAmino[];
  /** validators defines the validator set at genesis. */
  validators: ValidatorAmino[];
  /** delegations defines the delegations active at genesis. */
  delegations: DelegationAmino[];
  /** unbonding_delegations defines the unbonding delegations active at genesis. */
  unbonding_delegations: UnbondingDelegationAmino[];
  /** redelegations defines the redelegations active at genesis. */
  redelegations: RedelegationAmino[];
  /** exported defines a bool to identify whether the chain dealing with exported or initialized genesis. */
  exported?: boolean;
  rotation_index_records: RotationIndexRecordAmino[];
  rotation_queue: RotationQueueRecordAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the staking module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  last_total_power: Uint8Array;
  last_validator_powers: LastValidatorPowerSDKType[];
  validators: ValidatorSDKType[];
  delegations: DelegationSDKType[];
  unbonding_delegations: UnbondingDelegationSDKType[];
  redelegations: RedelegationSDKType[];
  exported: boolean;
  rotation_index_records: RotationIndexRecordSDKType[];
  rotation_queue: RotationQueueRecordSDKType[];
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPower {
  /** address is the address of the validator. */
  address: string;
  /** power defines the power of the validator. */
  power: bigint;
}
export interface LastValidatorPowerProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower";
  value: Uint8Array;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPowerAmino {
  /** address is the address of the validator. */
  address?: string;
  /** power defines the power of the validator. */
  power?: string;
}
export interface LastValidatorPowerAminoMsg {
  type: "cosmos-sdk/LastValidatorPower";
  value: LastValidatorPowerAmino;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPowerSDKType {
  address: string;
  power: bigint;
}
export interface RotationIndexRecord {
  address: Uint8Array;
  time?: Date;
}
export interface RotationIndexRecordProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.RotationIndexRecord";
  value: Uint8Array;
}
export interface RotationIndexRecordAmino {
  address?: string;
  time?: string;
}
export interface RotationIndexRecordAminoMsg {
  type: "cosmos-sdk/RotationIndexRecord";
  value: RotationIndexRecordAmino;
}
export interface RotationIndexRecordSDKType {
  address: Uint8Array;
  time?: Date;
}
export interface RotationQueueRecord {
  time?: Date;
}
export interface RotationQueueRecordProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.RotationQueueRecord";
  value: Uint8Array;
}
export interface RotationQueueRecordAmino {
  time?: string;
}
export interface RotationQueueRecordAminoMsg {
  type: "cosmos-sdk/RotationQueueRecord";
  value: RotationQueueRecordAmino;
}
export interface RotationQueueRecordSDKType {
  time?: Date;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    lastTotalPower: new Uint8Array(),
    lastValidatorPowers: [],
    validators: [],
    delegations: [],
    unbondingDelegations: [],
    redelegations: [],
    exported: false,
    rotationIndexRecords: [],
    rotationQueue: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.staking.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastTotalPower.length !== 0) {
      writer.uint32(18).bytes(message.lastTotalPower);
    }
    for (const v of message.lastValidatorPowers) {
      LastValidatorPower.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.redelegations) {
      Redelegation.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.exported === true) {
      writer.uint32(64).bool(message.exported);
    }
    for (const v of message.rotationIndexRecords) {
      RotationIndexRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.rotationQueue) {
      RotationQueueRecord.encode(v!, writer.uint32(90).fork()).ldelim();
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
          message.lastTotalPower = reader.bytes();
          break;
        case 3:
          message.lastValidatorPowers.push(LastValidatorPower.decode(reader, reader.uint32()));
          break;
        case 4:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
          break;
        case 8:
          message.exported = reader.bool();
          break;
        case 9:
          message.rotationIndexRecords.push(RotationIndexRecord.decode(reader, reader.uint32()));
          break;
        case 11:
          message.rotationQueue.push(RotationQueueRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastTotalPower = object.lastTotalPower ?? new Uint8Array();
    message.lastValidatorPowers = object.lastValidatorPowers?.map(e => LastValidatorPower.fromPartial(e)) || [];
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
    message.unbondingDelegations = object.unbondingDelegations?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.redelegations = object.redelegations?.map(e => Redelegation.fromPartial(e)) || [];
    message.exported = object.exported ?? false;
    message.rotationIndexRecords = object.rotationIndexRecords?.map(e => RotationIndexRecord.fromPartial(e)) || [];
    message.rotationQueue = object.rotationQueue?.map(e => RotationQueueRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.last_total_power !== undefined && object.last_total_power !== null) {
      message.lastTotalPower = bytesFromBase64(object.last_total_power);
    }
    message.lastValidatorPowers = object.last_validator_powers?.map(e => LastValidatorPower.fromAmino(e)) || [];
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    message.delegations = object.delegations?.map(e => Delegation.fromAmino(e)) || [];
    message.unbondingDelegations = object.unbonding_delegations?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    message.redelegations = object.redelegations?.map(e => Redelegation.fromAmino(e)) || [];
    if (object.exported !== undefined && object.exported !== null) {
      message.exported = object.exported;
    }
    message.rotationIndexRecords = object.rotation_index_records?.map(e => RotationIndexRecord.fromAmino(e)) || [];
    message.rotationQueue = object.rotation_queue?.map(e => RotationQueueRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    obj.last_total_power = message.lastTotalPower ? base64FromBytes(message.lastTotalPower) : "";
    if (message.lastValidatorPowers) {
      obj.last_validator_powers = message.lastValidatorPowers.map(e => e ? LastValidatorPower.toAmino(e) : undefined);
    } else {
      obj.last_validator_powers = message.lastValidatorPowers;
    }
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toAmino(e) : undefined);
    } else {
      obj.delegations = message.delegations;
    }
    if (message.unbondingDelegations) {
      obj.unbonding_delegations = message.unbondingDelegations.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_delegations = message.unbondingDelegations;
    }
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map(e => e ? Redelegation.toAmino(e) : undefined);
    } else {
      obj.redelegations = message.redelegations;
    }
    obj.exported = message.exported === false ? undefined : message.exported;
    if (message.rotationIndexRecords) {
      obj.rotation_index_records = message.rotationIndexRecords.map(e => e ? RotationIndexRecord.toAmino(e) : undefined);
    } else {
      obj.rotation_index_records = message.rotationIndexRecords;
    }
    if (message.rotationQueue) {
      obj.rotation_queue = message.rotationQueue.map(e => e ? RotationQueueRecord.toAmino(e) : undefined);
    } else {
      obj.rotation_queue = message.rotationQueue;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseLastValidatorPower(): LastValidatorPower {
  return {
    address: "",
    power: BigInt(0)
  };
}
export const LastValidatorPower = {
  typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
  encode(message: LastValidatorPower, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LastValidatorPower {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastValidatorPower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial(object: Partial<LastValidatorPower>): LastValidatorPower {
    const message = createBaseLastValidatorPower();
    message.address = object.address ?? "";
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LastValidatorPowerAmino): LastValidatorPower {
    const message = createBaseLastValidatorPower();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message: LastValidatorPower): LastValidatorPowerAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.power = message.power !== BigInt(0) ? (message.power?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: LastValidatorPowerAminoMsg): LastValidatorPower {
    return LastValidatorPower.fromAmino(object.value);
  },
  toAminoMsg(message: LastValidatorPower): LastValidatorPowerAminoMsg {
    return {
      type: "cosmos-sdk/LastValidatorPower",
      value: LastValidatorPower.toAmino(message)
    };
  },
  fromProtoMsg(message: LastValidatorPowerProtoMsg): LastValidatorPower {
    return LastValidatorPower.decode(message.value);
  },
  toProto(message: LastValidatorPower): Uint8Array {
    return LastValidatorPower.encode(message).finish();
  },
  toProtoMsg(message: LastValidatorPower): LastValidatorPowerProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
      value: LastValidatorPower.encode(message).finish()
    };
  }
};
function createBaseRotationIndexRecord(): RotationIndexRecord {
  return {
    address: new Uint8Array(),
    time: undefined
  };
}
export const RotationIndexRecord = {
  typeUrl: "/cosmos.staking.v1beta1.RotationIndexRecord",
  encode(message: RotationIndexRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RotationIndexRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRotationIndexRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 6:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RotationIndexRecord>): RotationIndexRecord {
    const message = createBaseRotationIndexRecord();
    message.address = object.address ?? new Uint8Array();
    message.time = object.time ?? undefined;
    return message;
  },
  fromAmino(object: RotationIndexRecordAmino): RotationIndexRecord {
    const message = createBaseRotationIndexRecord();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    return message;
  },
  toAmino(message: RotationIndexRecord): RotationIndexRecordAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : undefined;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    return obj;
  },
  fromAminoMsg(object: RotationIndexRecordAminoMsg): RotationIndexRecord {
    return RotationIndexRecord.fromAmino(object.value);
  },
  toAminoMsg(message: RotationIndexRecord): RotationIndexRecordAminoMsg {
    return {
      type: "cosmos-sdk/RotationIndexRecord",
      value: RotationIndexRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: RotationIndexRecordProtoMsg): RotationIndexRecord {
    return RotationIndexRecord.decode(message.value);
  },
  toProto(message: RotationIndexRecord): Uint8Array {
    return RotationIndexRecord.encode(message).finish();
  },
  toProtoMsg(message: RotationIndexRecord): RotationIndexRecordProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.RotationIndexRecord",
      value: RotationIndexRecord.encode(message).finish()
    };
  }
};
function createBaseRotationQueueRecord(): RotationQueueRecord {
  return {
    time: undefined
  };
}
export const RotationQueueRecord = {
  typeUrl: "/cosmos.staking.v1beta1.RotationQueueRecord",
  encode(message: RotationQueueRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RotationQueueRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRotationQueueRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RotationQueueRecord>): RotationQueueRecord {
    const message = createBaseRotationQueueRecord();
    message.time = object.time ?? undefined;
    return message;
  },
  fromAmino(object: RotationQueueRecordAmino): RotationQueueRecord {
    const message = createBaseRotationQueueRecord();
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    return message;
  },
  toAmino(message: RotationQueueRecord): RotationQueueRecordAmino {
    const obj: any = {};
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    return obj;
  },
  fromAminoMsg(object: RotationQueueRecordAminoMsg): RotationQueueRecord {
    return RotationQueueRecord.fromAmino(object.value);
  },
  toAminoMsg(message: RotationQueueRecord): RotationQueueRecordAminoMsg {
    return {
      type: "cosmos-sdk/RotationQueueRecord",
      value: RotationQueueRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: RotationQueueRecordProtoMsg): RotationQueueRecord {
    return RotationQueueRecord.decode(message.value);
  },
  toProto(message: RotationQueueRecord): Uint8Array {
    return RotationQueueRecord.encode(message).finish();
  },
  toProtoMsg(message: RotationQueueRecord): RotationQueueRecordProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.RotationQueueRecord",
      value: RotationQueueRecord.encode(message).finish()
    };
  }
};