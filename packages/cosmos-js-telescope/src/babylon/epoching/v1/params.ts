//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the parameters for the module. */
export interface Params {
  /** epoch_interval is the number of consecutive blocks to form an epoch */
  epochInterval: bigint;
  /** execute_gas defines raw gas for different executions. */
  executeGas: ExecuteGas;
  /** minimum_amount is a minimum amount for staking message cancel_unbonding_delegation */
  minAmount: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/babylon.epoching.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** epoch_interval is the number of consecutive blocks to form an epoch */
  epoch_interval?: string;
  /** execute_gas defines raw gas for different executions. */
  execute_gas?: ExecuteGasAmino;
  /** minimum_amount is a minimum amount for staking message cancel_unbonding_delegation */
  min_amount?: string;
}
export interface ParamsAminoMsg {
  type: "/babylon.epoching.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  epoch_interval: bigint;
  execute_gas: ExecuteGasSDKType;
  min_amount: bigint;
}
/** ExecuteGas defines the raw gas for the enqueued message execution. */
export interface ExecuteGas {
  delegate: bigint;
  undelegate: bigint;
  beginRedelegate: bigint;
  cancelUnbondingDelegation: bigint;
  editValidator: bigint;
  createValidator: bigint;
}
export interface ExecuteGasProtoMsg {
  typeUrl: "/babylon.epoching.v1.ExecuteGas";
  value: Uint8Array;
}
/** ExecuteGas defines the raw gas for the enqueued message execution. */
export interface ExecuteGasAmino {
  delegate?: string;
  undelegate?: string;
  begin_redelegate?: string;
  cancel_unbonding_delegation?: string;
  edit_validator?: string;
  create_validator?: string;
}
export interface ExecuteGasAminoMsg {
  type: "/babylon.epoching.v1.ExecuteGas";
  value: ExecuteGasAmino;
}
/** ExecuteGas defines the raw gas for the enqueued message execution. */
export interface ExecuteGasSDKType {
  delegate: bigint;
  undelegate: bigint;
  begin_redelegate: bigint;
  cancel_unbonding_delegation: bigint;
  edit_validator: bigint;
  create_validator: bigint;
}
function createBaseParams(): Params {
  return {
    epochInterval: BigInt(0),
    executeGas: ExecuteGas.fromPartial({}),
    minAmount: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/babylon.epoching.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.epochInterval === "bigint" && ExecuteGas.is(o.executeGas) && typeof o.minAmount === "bigint");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.epoch_interval === "bigint" && ExecuteGas.isSDK(o.execute_gas) && typeof o.min_amount === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.epoch_interval === "bigint" && ExecuteGas.isAmino(o.execute_gas) && typeof o.min_amount === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochInterval !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochInterval);
    }
    if (message.executeGas !== undefined) {
      ExecuteGas.encode(message.executeGas, writer.uint32(18).fork()).ldelim();
    }
    if (message.minAmount !== BigInt(0)) {
      writer.uint32(24).uint64(message.minAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochInterval = reader.uint64();
          break;
        case 2:
          message.executeGas = ExecuteGas.decode(reader, reader.uint32());
          break;
        case 3:
          message.minAmount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      epochInterval: isSet(object.epochInterval) ? BigInt(object.epochInterval.toString()) : BigInt(0),
      executeGas: isSet(object.executeGas) ? ExecuteGas.fromJSON(object.executeGas) : undefined,
      minAmount: isSet(object.minAmount) ? BigInt(object.minAmount.toString()) : BigInt(0)
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.epochInterval !== undefined && (obj.epochInterval = (message.epochInterval || BigInt(0)).toString());
    message.executeGas !== undefined && (obj.executeGas = message.executeGas ? ExecuteGas.toJSON(message.executeGas) : undefined);
    message.minAmount !== undefined && (obj.minAmount = (message.minAmount || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.epochInterval = object.epochInterval !== undefined && object.epochInterval !== null ? BigInt(object.epochInterval.toString()) : BigInt(0);
    message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? ExecuteGas.fromPartial(object.executeGas) : undefined;
    message.minAmount = object.minAmount !== undefined && object.minAmount !== null ? BigInt(object.minAmount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.epoch_interval !== undefined && object.epoch_interval !== null) {
      message.epochInterval = BigInt(object.epoch_interval);
    }
    if (object.execute_gas !== undefined && object.execute_gas !== null) {
      message.executeGas = ExecuteGas.fromAmino(object.execute_gas);
    }
    if (object.min_amount !== undefined && object.min_amount !== null) {
      message.minAmount = BigInt(object.min_amount);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.epoch_interval = message.epochInterval !== BigInt(0) ? (message.epochInterval?.toString)() : undefined;
    obj.execute_gas = message.executeGas ? ExecuteGas.toAmino(message.executeGas) : undefined;
    obj.min_amount = message.minAmount !== BigInt(0) ? (message.minAmount?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
function createBaseExecuteGas(): ExecuteGas {
  return {
    delegate: BigInt(0),
    undelegate: BigInt(0),
    beginRedelegate: BigInt(0),
    cancelUnbondingDelegation: BigInt(0),
    editValidator: BigInt(0),
    createValidator: BigInt(0)
  };
}
export const ExecuteGas = {
  typeUrl: "/babylon.epoching.v1.ExecuteGas",
  is(o: any): o is ExecuteGas {
    return o && (o.$typeUrl === ExecuteGas.typeUrl || typeof o.delegate === "bigint" && typeof o.undelegate === "bigint" && typeof o.beginRedelegate === "bigint" && typeof o.cancelUnbondingDelegation === "bigint" && typeof o.editValidator === "bigint" && typeof o.createValidator === "bigint");
  },
  isSDK(o: any): o is ExecuteGasSDKType {
    return o && (o.$typeUrl === ExecuteGas.typeUrl || typeof o.delegate === "bigint" && typeof o.undelegate === "bigint" && typeof o.begin_redelegate === "bigint" && typeof o.cancel_unbonding_delegation === "bigint" && typeof o.edit_validator === "bigint" && typeof o.create_validator === "bigint");
  },
  isAmino(o: any): o is ExecuteGasAmino {
    return o && (o.$typeUrl === ExecuteGas.typeUrl || typeof o.delegate === "bigint" && typeof o.undelegate === "bigint" && typeof o.begin_redelegate === "bigint" && typeof o.cancel_unbonding_delegation === "bigint" && typeof o.edit_validator === "bigint" && typeof o.create_validator === "bigint");
  },
  encode(message: ExecuteGas, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegate !== BigInt(0)) {
      writer.uint32(8).uint64(message.delegate);
    }
    if (message.undelegate !== BigInt(0)) {
      writer.uint32(16).uint64(message.undelegate);
    }
    if (message.beginRedelegate !== BigInt(0)) {
      writer.uint32(24).uint64(message.beginRedelegate);
    }
    if (message.cancelUnbondingDelegation !== BigInt(0)) {
      writer.uint32(32).uint64(message.cancelUnbondingDelegation);
    }
    if (message.editValidator !== BigInt(0)) {
      writer.uint32(40).uint64(message.editValidator);
    }
    if (message.createValidator !== BigInt(0)) {
      writer.uint32(48).uint64(message.createValidator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExecuteGas {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteGas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegate = reader.uint64();
          break;
        case 2:
          message.undelegate = reader.uint64();
          break;
        case 3:
          message.beginRedelegate = reader.uint64();
          break;
        case 4:
          message.cancelUnbondingDelegation = reader.uint64();
          break;
        case 5:
          message.editValidator = reader.uint64();
          break;
        case 6:
          message.createValidator = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExecuteGas {
    return {
      delegate: isSet(object.delegate) ? BigInt(object.delegate.toString()) : BigInt(0),
      undelegate: isSet(object.undelegate) ? BigInt(object.undelegate.toString()) : BigInt(0),
      beginRedelegate: isSet(object.beginRedelegate) ? BigInt(object.beginRedelegate.toString()) : BigInt(0),
      cancelUnbondingDelegation: isSet(object.cancelUnbondingDelegation) ? BigInt(object.cancelUnbondingDelegation.toString()) : BigInt(0),
      editValidator: isSet(object.editValidator) ? BigInt(object.editValidator.toString()) : BigInt(0),
      createValidator: isSet(object.createValidator) ? BigInt(object.createValidator.toString()) : BigInt(0)
    };
  },
  toJSON(message: ExecuteGas): JsonSafe<ExecuteGas> {
    const obj: any = {};
    message.delegate !== undefined && (obj.delegate = (message.delegate || BigInt(0)).toString());
    message.undelegate !== undefined && (obj.undelegate = (message.undelegate || BigInt(0)).toString());
    message.beginRedelegate !== undefined && (obj.beginRedelegate = (message.beginRedelegate || BigInt(0)).toString());
    message.cancelUnbondingDelegation !== undefined && (obj.cancelUnbondingDelegation = (message.cancelUnbondingDelegation || BigInt(0)).toString());
    message.editValidator !== undefined && (obj.editValidator = (message.editValidator || BigInt(0)).toString());
    message.createValidator !== undefined && (obj.createValidator = (message.createValidator || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ExecuteGas>, I>>(object: I): ExecuteGas {
    const message = createBaseExecuteGas();
    message.delegate = object.delegate !== undefined && object.delegate !== null ? BigInt(object.delegate.toString()) : BigInt(0);
    message.undelegate = object.undelegate !== undefined && object.undelegate !== null ? BigInt(object.undelegate.toString()) : BigInt(0);
    message.beginRedelegate = object.beginRedelegate !== undefined && object.beginRedelegate !== null ? BigInt(object.beginRedelegate.toString()) : BigInt(0);
    message.cancelUnbondingDelegation = object.cancelUnbondingDelegation !== undefined && object.cancelUnbondingDelegation !== null ? BigInt(object.cancelUnbondingDelegation.toString()) : BigInt(0);
    message.editValidator = object.editValidator !== undefined && object.editValidator !== null ? BigInt(object.editValidator.toString()) : BigInt(0);
    message.createValidator = object.createValidator !== undefined && object.createValidator !== null ? BigInt(object.createValidator.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ExecuteGasAmino): ExecuteGas {
    const message = createBaseExecuteGas();
    if (object.delegate !== undefined && object.delegate !== null) {
      message.delegate = BigInt(object.delegate);
    }
    if (object.undelegate !== undefined && object.undelegate !== null) {
      message.undelegate = BigInt(object.undelegate);
    }
    if (object.begin_redelegate !== undefined && object.begin_redelegate !== null) {
      message.beginRedelegate = BigInt(object.begin_redelegate);
    }
    if (object.cancel_unbonding_delegation !== undefined && object.cancel_unbonding_delegation !== null) {
      message.cancelUnbondingDelegation = BigInt(object.cancel_unbonding_delegation);
    }
    if (object.edit_validator !== undefined && object.edit_validator !== null) {
      message.editValidator = BigInt(object.edit_validator);
    }
    if (object.create_validator !== undefined && object.create_validator !== null) {
      message.createValidator = BigInt(object.create_validator);
    }
    return message;
  },
  toAmino(message: ExecuteGas): ExecuteGasAmino {
    const obj: any = {};
    obj.delegate = message.delegate !== BigInt(0) ? (message.delegate?.toString)() : undefined;
    obj.undelegate = message.undelegate !== BigInt(0) ? (message.undelegate?.toString)() : undefined;
    obj.begin_redelegate = message.beginRedelegate !== BigInt(0) ? (message.beginRedelegate?.toString)() : undefined;
    obj.cancel_unbonding_delegation = message.cancelUnbondingDelegation !== BigInt(0) ? (message.cancelUnbondingDelegation?.toString)() : undefined;
    obj.edit_validator = message.editValidator !== BigInt(0) ? (message.editValidator?.toString)() : undefined;
    obj.create_validator = message.createValidator !== BigInt(0) ? (message.createValidator?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ExecuteGasAminoMsg): ExecuteGas {
    return ExecuteGas.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecuteGasProtoMsg): ExecuteGas {
    return ExecuteGas.decode(message.value);
  },
  toProto(message: ExecuteGas): Uint8Array {
    return ExecuteGas.encode(message).finish();
  },
  toProtoMsg(message: ExecuteGas): ExecuteGasProtoMsg {
    return {
      typeUrl: "/babylon.epoching.v1.ExecuteGas",
      value: ExecuteGas.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecuteGas.typeUrl, ExecuteGas);