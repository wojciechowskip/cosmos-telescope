//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the parameters for the module. */
export interface Params {
  epochBlocksOverlap: bigint;
  qoSWeight: string;
  recommendedEpochNumToCollectPayment: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/lavanet.lava.pairing.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  epochBlocksOverlap?: string;
  QoSWeight?: string;
  recommendedEpochNumToCollectPayment?: string;
}
export interface ParamsAminoMsg {
  type: "/lavanet.lava.pairing.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  epochBlocksOverlap: bigint;
  QoSWeight: string;
  recommendedEpochNumToCollectPayment: bigint;
}
function createBaseParams(): Params {
  return {
    epochBlocksOverlap: BigInt(0),
    qoSWeight: "",
    recommendedEpochNumToCollectPayment: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/lavanet.lava.pairing.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.epochBlocksOverlap === "bigint" && typeof o.qoSWeight === "string" && typeof o.recommendedEpochNumToCollectPayment === "bigint");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.epochBlocksOverlap === "bigint" && typeof o.QoSWeight === "string" && typeof o.recommendedEpochNumToCollectPayment === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.epochBlocksOverlap === "bigint" && typeof o.QoSWeight === "string" && typeof o.recommendedEpochNumToCollectPayment === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochBlocksOverlap !== BigInt(0)) {
      writer.uint32(64).uint64(message.epochBlocksOverlap);
    }
    if (message.qoSWeight !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.qoSWeight, 18).atomics);
    }
    if (message.recommendedEpochNumToCollectPayment !== BigInt(0)) {
      writer.uint32(112).uint64(message.recommendedEpochNumToCollectPayment);
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
        case 8:
          message.epochBlocksOverlap = reader.uint64();
          break;
        case 13:
          message.qoSWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.recommendedEpochNumToCollectPayment = reader.uint64();
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
      epochBlocksOverlap: isSet(object.epochBlocksOverlap) ? BigInt(object.epochBlocksOverlap.toString()) : BigInt(0),
      qoSWeight: isSet(object.qoSWeight) ? String(object.qoSWeight) : "",
      recommendedEpochNumToCollectPayment: isSet(object.recommendedEpochNumToCollectPayment) ? BigInt(object.recommendedEpochNumToCollectPayment.toString()) : BigInt(0)
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.epochBlocksOverlap !== undefined && (obj.epochBlocksOverlap = (message.epochBlocksOverlap || BigInt(0)).toString());
    message.qoSWeight !== undefined && (obj.qoSWeight = message.qoSWeight);
    message.recommendedEpochNumToCollectPayment !== undefined && (obj.recommendedEpochNumToCollectPayment = (message.recommendedEpochNumToCollectPayment || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.epochBlocksOverlap = object.epochBlocksOverlap !== undefined && object.epochBlocksOverlap !== null ? BigInt(object.epochBlocksOverlap.toString()) : BigInt(0);
    message.qoSWeight = object.qoSWeight ?? "";
    message.recommendedEpochNumToCollectPayment = object.recommendedEpochNumToCollectPayment !== undefined && object.recommendedEpochNumToCollectPayment !== null ? BigInt(object.recommendedEpochNumToCollectPayment.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.epochBlocksOverlap !== undefined && object.epochBlocksOverlap !== null) {
      message.epochBlocksOverlap = BigInt(object.epochBlocksOverlap);
    }
    if (object.QoSWeight !== undefined && object.QoSWeight !== null) {
      message.qoSWeight = object.QoSWeight;
    }
    if (object.recommendedEpochNumToCollectPayment !== undefined && object.recommendedEpochNumToCollectPayment !== null) {
      message.recommendedEpochNumToCollectPayment = BigInt(object.recommendedEpochNumToCollectPayment);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.epochBlocksOverlap = message.epochBlocksOverlap !== BigInt(0) ? (message.epochBlocksOverlap?.toString)() : undefined;
    obj.QoSWeight = message.qoSWeight === "" ? undefined : message.qoSWeight;
    obj.recommendedEpochNumToCollectPayment = message.recommendedEpochNumToCollectPayment !== BigInt(0) ? (message.recommendedEpochNumToCollectPayment?.toString)() : undefined;
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
      typeUrl: "/lavanet.lava.pairing.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);