//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the parameters for the module. */
export interface Params {
  maxCU: bigint;
  allowlistedExpeditedMsgs: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/lavanet.lava.spec.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  maxCU?: string;
  allowlisted_expedited_msgs?: string[];
}
export interface ParamsAminoMsg {
  type: "/lavanet.lava.spec.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  maxCU: bigint;
  allowlisted_expedited_msgs: string[];
}
function createBaseParams(): Params {
  return {
    maxCU: BigInt(0),
    allowlistedExpeditedMsgs: []
  };
}
export const Params = {
  typeUrl: "/lavanet.lava.spec.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.maxCU === "bigint" && Array.isArray(o.allowlistedExpeditedMsgs) && (!o.allowlistedExpeditedMsgs.length || typeof o.allowlistedExpeditedMsgs[0] === "string"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.maxCU === "bigint" && Array.isArray(o.allowlisted_expedited_msgs) && (!o.allowlisted_expedited_msgs.length || typeof o.allowlisted_expedited_msgs[0] === "string"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.maxCU === "bigint" && Array.isArray(o.allowlisted_expedited_msgs) && (!o.allowlisted_expedited_msgs.length || typeof o.allowlisted_expedited_msgs[0] === "string"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxCU !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxCU);
    }
    for (const v of message.allowlistedExpeditedMsgs) {
      writer.uint32(26).string(v!);
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
          message.maxCU = reader.uint64();
          break;
        case 3:
          message.allowlistedExpeditedMsgs.push(reader.string());
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
      maxCU: isSet(object.maxCU) ? BigInt(object.maxCU.toString()) : BigInt(0),
      allowlistedExpeditedMsgs: Array.isArray(object?.allowlistedExpeditedMsgs) ? object.allowlistedExpeditedMsgs.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.maxCU !== undefined && (obj.maxCU = (message.maxCU || BigInt(0)).toString());
    if (message.allowlistedExpeditedMsgs) {
      obj.allowlistedExpeditedMsgs = message.allowlistedExpeditedMsgs.map(e => e);
    } else {
      obj.allowlistedExpeditedMsgs = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxCU = object.maxCU !== undefined && object.maxCU !== null ? BigInt(object.maxCU.toString()) : BigInt(0);
    message.allowlistedExpeditedMsgs = object.allowlistedExpeditedMsgs?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.maxCU !== undefined && object.maxCU !== null) {
      message.maxCU = BigInt(object.maxCU);
    }
    message.allowlistedExpeditedMsgs = object.allowlisted_expedited_msgs?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.maxCU = message.maxCU !== BigInt(0) ? (message.maxCU?.toString)() : undefined;
    if (message.allowlistedExpeditedMsgs) {
      obj.allowlisted_expedited_msgs = message.allowlistedExpeditedMsgs.map(e => e);
    } else {
      obj.allowlisted_expedited_msgs = message.allowlistedExpeditedMsgs;
    }
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
      typeUrl: "/lavanet.lava.spec.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);