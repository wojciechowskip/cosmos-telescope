//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface FixatedParams {
  index: string;
  parameter: Uint8Array;
  fixationBlock: bigint;
}
export interface FixatedParamsProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.FixatedParams";
  value: Uint8Array;
}
export interface FixatedParamsAmino {
  index?: string;
  parameter?: string;
  fixationBlock?: string;
}
export interface FixatedParamsAminoMsg {
  type: "/lavanet.lava.epochstorage.FixatedParams";
  value: FixatedParamsAmino;
}
export interface FixatedParamsSDKType {
  index: string;
  parameter: Uint8Array;
  fixationBlock: bigint;
}
function createBaseFixatedParams(): FixatedParams {
  return {
    index: "",
    parameter: new Uint8Array(),
    fixationBlock: BigInt(0)
  };
}
export const FixatedParams = {
  typeUrl: "/lavanet.lava.epochstorage.FixatedParams",
  is(o: any): o is FixatedParams {
    return o && (o.$typeUrl === FixatedParams.typeUrl || typeof o.index === "string" && (o.parameter instanceof Uint8Array || typeof o.parameter === "string") && typeof o.fixationBlock === "bigint");
  },
  isSDK(o: any): o is FixatedParamsSDKType {
    return o && (o.$typeUrl === FixatedParams.typeUrl || typeof o.index === "string" && (o.parameter instanceof Uint8Array || typeof o.parameter === "string") && typeof o.fixationBlock === "bigint");
  },
  isAmino(o: any): o is FixatedParamsAmino {
    return o && (o.$typeUrl === FixatedParams.typeUrl || typeof o.index === "string" && (o.parameter instanceof Uint8Array || typeof o.parameter === "string") && typeof o.fixationBlock === "bigint");
  },
  encode(message: FixatedParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.parameter.length !== 0) {
      writer.uint32(18).bytes(message.parameter);
    }
    if (message.fixationBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.fixationBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FixatedParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixatedParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.parameter = reader.bytes();
          break;
        case 3:
          message.fixationBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FixatedParams {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      parameter: isSet(object.parameter) ? bytesFromBase64(object.parameter) : new Uint8Array(),
      fixationBlock: isSet(object.fixationBlock) ? BigInt(object.fixationBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: FixatedParams): JsonSafe<FixatedParams> {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.parameter !== undefined && (obj.parameter = base64FromBytes(message.parameter !== undefined ? message.parameter : new Uint8Array()));
    message.fixationBlock !== undefined && (obj.fixationBlock = (message.fixationBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FixatedParams>, I>>(object: I): FixatedParams {
    const message = createBaseFixatedParams();
    message.index = object.index ?? "";
    message.parameter = object.parameter ?? new Uint8Array();
    message.fixationBlock = object.fixationBlock !== undefined && object.fixationBlock !== null ? BigInt(object.fixationBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FixatedParamsAmino): FixatedParams {
    const message = createBaseFixatedParams();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.parameter !== undefined && object.parameter !== null) {
      message.parameter = bytesFromBase64(object.parameter);
    }
    if (object.fixationBlock !== undefined && object.fixationBlock !== null) {
      message.fixationBlock = BigInt(object.fixationBlock);
    }
    return message;
  },
  toAmino(message: FixatedParams): FixatedParamsAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    obj.parameter = message.parameter ? base64FromBytes(message.parameter) : undefined;
    obj.fixationBlock = message.fixationBlock !== BigInt(0) ? (message.fixationBlock?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: FixatedParamsAminoMsg): FixatedParams {
    return FixatedParams.fromAmino(object.value);
  },
  fromProtoMsg(message: FixatedParamsProtoMsg): FixatedParams {
    return FixatedParams.decode(message.value);
  },
  toProto(message: FixatedParams): Uint8Array {
    return FixatedParams.encode(message).finish();
  },
  toProtoMsg(message: FixatedParams): FixatedParamsProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.FixatedParams",
      value: FixatedParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FixatedParams.typeUrl, FixatedParams);