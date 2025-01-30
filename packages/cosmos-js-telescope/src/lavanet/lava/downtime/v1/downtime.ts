//@ts-nocheck
import { Duration, DurationAmino, DurationSDKType } from "../../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../registry";
/** Params defines the parameters of the downtime module. */
export interface Params {
  /**
   * downtime_duration defines the minimum time elapsed between blocks
   * that we consider the chain to be down.
   */
  downtimeDuration: Duration;
  /** epoch_duration defines an estimation of the time elapsed between epochs */
  epochDuration: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/lavanet.lava.downtime.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters of the downtime module. */
export interface ParamsAmino {
  /**
   * downtime_duration defines the minimum time elapsed between blocks
   * that we consider the chain to be down.
   */
  downtime_duration?: DurationAmino;
  /** epoch_duration defines an estimation of the time elapsed between epochs */
  epoch_duration?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "/lavanet.lava.downtime.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters of the downtime module. */
export interface ParamsSDKType {
  downtime_duration: DurationSDKType;
  epoch_duration: DurationSDKType;
}
/** Downtime defines a single downtime record. */
export interface Downtime {
  /** block defines the block that took time to produce. */
  block: bigint;
  /**
   * duration defines the time elapsed between the previous block and this one.
   * this defines the effective downtime duration.
   */
  duration: Duration;
}
export interface DowntimeProtoMsg {
  typeUrl: "/lavanet.lava.downtime.v1.Downtime";
  value: Uint8Array;
}
/** Downtime defines a single downtime record. */
export interface DowntimeAmino {
  /** block defines the block that took time to produce. */
  block?: string;
  /**
   * duration defines the time elapsed between the previous block and this one.
   * this defines the effective downtime duration.
   */
  duration?: DurationAmino;
}
export interface DowntimeAminoMsg {
  type: "/lavanet.lava.downtime.v1.Downtime";
  value: DowntimeAmino;
}
/** Downtime defines a single downtime record. */
export interface DowntimeSDKType {
  block: bigint;
  duration: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    downtimeDuration: Duration.fromPartial({}),
    epochDuration: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/lavanet.lava.downtime.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Duration.is(o.downtimeDuration) && Duration.is(o.epochDuration));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Duration.isSDK(o.downtime_duration) && Duration.isSDK(o.epoch_duration));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Duration.isAmino(o.downtime_duration) && Duration.isAmino(o.epoch_duration));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.downtimeDuration !== undefined) {
      Duration.encode(message.downtimeDuration, writer.uint32(10).fork()).ldelim();
    }
    if (message.epochDuration !== undefined) {
      Duration.encode(message.epochDuration, writer.uint32(18).fork()).ldelim();
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
          message.downtimeDuration = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.epochDuration = Duration.decode(reader, reader.uint32());
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
      downtimeDuration: isSet(object.downtimeDuration) ? Duration.fromJSON(object.downtimeDuration) : undefined,
      epochDuration: isSet(object.epochDuration) ? Duration.fromJSON(object.epochDuration) : undefined
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.downtimeDuration !== undefined && (obj.downtimeDuration = message.downtimeDuration ? Duration.toJSON(message.downtimeDuration) : undefined);
    message.epochDuration !== undefined && (obj.epochDuration = message.epochDuration ? Duration.toJSON(message.epochDuration) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.downtimeDuration = object.downtimeDuration !== undefined && object.downtimeDuration !== null ? Duration.fromPartial(object.downtimeDuration) : undefined;
    message.epochDuration = object.epochDuration !== undefined && object.epochDuration !== null ? Duration.fromPartial(object.epochDuration) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.downtime_duration !== undefined && object.downtime_duration !== null) {
      message.downtimeDuration = Duration.fromAmino(object.downtime_duration);
    }
    if (object.epoch_duration !== undefined && object.epoch_duration !== null) {
      message.epochDuration = Duration.fromAmino(object.epoch_duration);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.downtime_duration = message.downtimeDuration ? Duration.toAmino(message.downtimeDuration) : undefined;
    obj.epoch_duration = message.epochDuration ? Duration.toAmino(message.epochDuration) : undefined;
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
      typeUrl: "/lavanet.lava.downtime.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
function createBaseDowntime(): Downtime {
  return {
    block: BigInt(0),
    duration: Duration.fromPartial({})
  };
}
export const Downtime = {
  typeUrl: "/lavanet.lava.downtime.v1.Downtime",
  is(o: any): o is Downtime {
    return o && (o.$typeUrl === Downtime.typeUrl || typeof o.block === "bigint" && Duration.is(o.duration));
  },
  isSDK(o: any): o is DowntimeSDKType {
    return o && (o.$typeUrl === Downtime.typeUrl || typeof o.block === "bigint" && Duration.isSDK(o.duration));
  },
  isAmino(o: any): o is DowntimeAmino {
    return o && (o.$typeUrl === Downtime.typeUrl || typeof o.block === "bigint" && Duration.isAmino(o.duration));
  },
  encode(message: Downtime, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Downtime {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDowntime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Downtime {
    return {
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0),
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  toJSON(message: Downtime): JsonSafe<Downtime> {
    const obj: any = {};
    message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Downtime>, I>>(object: I): Downtime {
    const message = createBaseDowntime();
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },
  fromAmino(object: DowntimeAmino): Downtime {
    const message = createBaseDowntime();
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    return message;
  },
  toAmino(message: Downtime): DowntimeAmino {
    const obj: any = {};
    obj.block = message.block !== BigInt(0) ? (message.block?.toString)() : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: DowntimeAminoMsg): Downtime {
    return Downtime.fromAmino(object.value);
  },
  fromProtoMsg(message: DowntimeProtoMsg): Downtime {
    return Downtime.decode(message.value);
  },
  toProto(message: Downtime): Uint8Array {
    return Downtime.encode(message).finish();
  },
  toProtoMsg(message: Downtime): DowntimeProtoMsg {
    return {
      typeUrl: "/lavanet.lava.downtime.v1.Downtime",
      value: Downtime.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Downtime.typeUrl, Downtime);