//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the parameters for the module. */
export interface Params {
  epochBlocks: bigint;
  epochsToSave: bigint;
  latestParamChange: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  epochBlocks?: string;
  epochsToSave?: string;
  latestParamChange?: string;
}
export interface ParamsAminoMsg {
  type: "/lavanet.lava.epochstorage.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  epochBlocks: bigint;
  epochsToSave: bigint;
  latestParamChange: bigint;
}
function createBaseParams(): Params {
  return {
    epochBlocks: BigInt(0),
    epochsToSave: BigInt(0),
    latestParamChange: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/lavanet.lava.epochstorage.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.epochBlocks === "bigint" && typeof o.epochsToSave === "bigint" && typeof o.latestParamChange === "bigint");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.epochBlocks === "bigint" && typeof o.epochsToSave === "bigint" && typeof o.latestParamChange === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.epochBlocks === "bigint" && typeof o.epochsToSave === "bigint" && typeof o.latestParamChange === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochBlocks !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochBlocks);
    }
    if (message.epochsToSave !== BigInt(0)) {
      writer.uint32(24).uint64(message.epochsToSave);
    }
    if (message.latestParamChange !== BigInt(0)) {
      writer.uint32(32).uint64(message.latestParamChange);
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
        case 2:
          message.epochBlocks = reader.uint64();
          break;
        case 3:
          message.epochsToSave = reader.uint64();
          break;
        case 4:
          message.latestParamChange = reader.uint64();
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
      epochBlocks: isSet(object.epochBlocks) ? BigInt(object.epochBlocks.toString()) : BigInt(0),
      epochsToSave: isSet(object.epochsToSave) ? BigInt(object.epochsToSave.toString()) : BigInt(0),
      latestParamChange: isSet(object.latestParamChange) ? BigInt(object.latestParamChange.toString()) : BigInt(0)
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.epochBlocks !== undefined && (obj.epochBlocks = (message.epochBlocks || BigInt(0)).toString());
    message.epochsToSave !== undefined && (obj.epochsToSave = (message.epochsToSave || BigInt(0)).toString());
    message.latestParamChange !== undefined && (obj.latestParamChange = (message.latestParamChange || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.epochBlocks = object.epochBlocks !== undefined && object.epochBlocks !== null ? BigInt(object.epochBlocks.toString()) : BigInt(0);
    message.epochsToSave = object.epochsToSave !== undefined && object.epochsToSave !== null ? BigInt(object.epochsToSave.toString()) : BigInt(0);
    message.latestParamChange = object.latestParamChange !== undefined && object.latestParamChange !== null ? BigInt(object.latestParamChange.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.epochBlocks !== undefined && object.epochBlocks !== null) {
      message.epochBlocks = BigInt(object.epochBlocks);
    }
    if (object.epochsToSave !== undefined && object.epochsToSave !== null) {
      message.epochsToSave = BigInt(object.epochsToSave);
    }
    if (object.latestParamChange !== undefined && object.latestParamChange !== null) {
      message.latestParamChange = BigInt(object.latestParamChange);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.epochBlocks = message.epochBlocks !== BigInt(0) ? (message.epochBlocks?.toString)() : undefined;
    obj.epochsToSave = message.epochsToSave !== BigInt(0) ? (message.epochsToSave?.toString)() : undefined;
    obj.latestParamChange = message.latestParamChange !== BigInt(0) ? (message.latestParamChange?.toString)() : undefined;
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
      typeUrl: "/lavanet.lava.epochstorage.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);