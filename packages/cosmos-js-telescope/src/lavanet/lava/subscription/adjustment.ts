//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface Adjustment {
  index: string;
  adjustedUsage: bigint;
  totalUsage: bigint;
}
export interface AdjustmentProtoMsg {
  typeUrl: "/lavanet.lava.subscription.Adjustment";
  value: Uint8Array;
}
export interface AdjustmentAmino {
  index?: string;
  adjustedUsage?: string;
  totalUsage?: string;
}
export interface AdjustmentAminoMsg {
  type: "/lavanet.lava.subscription.Adjustment";
  value: AdjustmentAmino;
}
export interface AdjustmentSDKType {
  index: string;
  adjustedUsage: bigint;
  totalUsage: bigint;
}
function createBaseAdjustment(): Adjustment {
  return {
    index: "",
    adjustedUsage: BigInt(0),
    totalUsage: BigInt(0)
  };
}
export const Adjustment = {
  typeUrl: "/lavanet.lava.subscription.Adjustment",
  is(o: any): o is Adjustment {
    return o && (o.$typeUrl === Adjustment.typeUrl || typeof o.index === "string" && typeof o.adjustedUsage === "bigint" && typeof o.totalUsage === "bigint");
  },
  isSDK(o: any): o is AdjustmentSDKType {
    return o && (o.$typeUrl === Adjustment.typeUrl || typeof o.index === "string" && typeof o.adjustedUsage === "bigint" && typeof o.totalUsage === "bigint");
  },
  isAmino(o: any): o is AdjustmentAmino {
    return o && (o.$typeUrl === Adjustment.typeUrl || typeof o.index === "string" && typeof o.adjustedUsage === "bigint" && typeof o.totalUsage === "bigint");
  },
  encode(message: Adjustment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.adjustedUsage !== BigInt(0)) {
      writer.uint32(16).uint64(message.adjustedUsage);
    }
    if (message.totalUsage !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalUsage);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Adjustment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdjustment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.adjustedUsage = reader.uint64();
          break;
        case 3:
          message.totalUsage = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Adjustment {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      adjustedUsage: isSet(object.adjustedUsage) ? BigInt(object.adjustedUsage.toString()) : BigInt(0),
      totalUsage: isSet(object.totalUsage) ? BigInt(object.totalUsage.toString()) : BigInt(0)
    };
  },
  toJSON(message: Adjustment): JsonSafe<Adjustment> {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.adjustedUsage !== undefined && (obj.adjustedUsage = (message.adjustedUsage || BigInt(0)).toString());
    message.totalUsage !== undefined && (obj.totalUsage = (message.totalUsage || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Adjustment>, I>>(object: I): Adjustment {
    const message = createBaseAdjustment();
    message.index = object.index ?? "";
    message.adjustedUsage = object.adjustedUsage !== undefined && object.adjustedUsage !== null ? BigInt(object.adjustedUsage.toString()) : BigInt(0);
    message.totalUsage = object.totalUsage !== undefined && object.totalUsage !== null ? BigInt(object.totalUsage.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AdjustmentAmino): Adjustment {
    const message = createBaseAdjustment();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.adjustedUsage !== undefined && object.adjustedUsage !== null) {
      message.adjustedUsage = BigInt(object.adjustedUsage);
    }
    if (object.totalUsage !== undefined && object.totalUsage !== null) {
      message.totalUsage = BigInt(object.totalUsage);
    }
    return message;
  },
  toAmino(message: Adjustment): AdjustmentAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    obj.adjustedUsage = message.adjustedUsage !== BigInt(0) ? (message.adjustedUsage?.toString)() : undefined;
    obj.totalUsage = message.totalUsage !== BigInt(0) ? (message.totalUsage?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: AdjustmentAminoMsg): Adjustment {
    return Adjustment.fromAmino(object.value);
  },
  fromProtoMsg(message: AdjustmentProtoMsg): Adjustment {
    return Adjustment.decode(message.value);
  },
  toProto(message: Adjustment): Uint8Array {
    return Adjustment.encode(message).finish();
  },
  toProtoMsg(message: Adjustment): AdjustmentProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.Adjustment",
      value: Adjustment.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Adjustment.typeUrl, Adjustment);