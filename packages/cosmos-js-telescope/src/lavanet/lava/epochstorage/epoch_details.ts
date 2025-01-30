//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface EpochDetails {
  startBlock: bigint;
  earliestStart: bigint;
  deletedEpochs: bigint[];
}
export interface EpochDetailsProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.EpochDetails";
  value: Uint8Array;
}
export interface EpochDetailsAmino {
  startBlock?: string;
  earliestStart?: string;
  deletedEpochs?: string[];
}
export interface EpochDetailsAminoMsg {
  type: "/lavanet.lava.epochstorage.EpochDetails";
  value: EpochDetailsAmino;
}
export interface EpochDetailsSDKType {
  startBlock: bigint;
  earliestStart: bigint;
  deletedEpochs: bigint[];
}
function createBaseEpochDetails(): EpochDetails {
  return {
    startBlock: BigInt(0),
    earliestStart: BigInt(0),
    deletedEpochs: []
  };
}
export const EpochDetails = {
  typeUrl: "/lavanet.lava.epochstorage.EpochDetails",
  is(o: any): o is EpochDetails {
    return o && (o.$typeUrl === EpochDetails.typeUrl || typeof o.startBlock === "bigint" && typeof o.earliestStart === "bigint" && Array.isArray(o.deletedEpochs) && (!o.deletedEpochs.length || typeof o.deletedEpochs[0] === "bigint"));
  },
  isSDK(o: any): o is EpochDetailsSDKType {
    return o && (o.$typeUrl === EpochDetails.typeUrl || typeof o.startBlock === "bigint" && typeof o.earliestStart === "bigint" && Array.isArray(o.deletedEpochs) && (!o.deletedEpochs.length || typeof o.deletedEpochs[0] === "bigint"));
  },
  isAmino(o: any): o is EpochDetailsAmino {
    return o && (o.$typeUrl === EpochDetails.typeUrl || typeof o.startBlock === "bigint" && typeof o.earliestStart === "bigint" && Array.isArray(o.deletedEpochs) && (!o.deletedEpochs.length || typeof o.deletedEpochs[0] === "bigint"));
  },
  encode(message: EpochDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(8).uint64(message.startBlock);
    }
    if (message.earliestStart !== BigInt(0)) {
      writer.uint32(16).uint64(message.earliestStart);
    }
    writer.uint32(26).fork();
    for (const v of message.deletedEpochs) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startBlock = reader.uint64();
          break;
        case 2:
          message.earliestStart = reader.uint64();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.deletedEpochs.push(reader.uint64());
            }
          } else {
            message.deletedEpochs.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EpochDetails {
    return {
      startBlock: isSet(object.startBlock) ? BigInt(object.startBlock.toString()) : BigInt(0),
      earliestStart: isSet(object.earliestStart) ? BigInt(object.earliestStart.toString()) : BigInt(0),
      deletedEpochs: Array.isArray(object?.deletedEpochs) ? object.deletedEpochs.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: EpochDetails): JsonSafe<EpochDetails> {
    const obj: any = {};
    message.startBlock !== undefined && (obj.startBlock = (message.startBlock || BigInt(0)).toString());
    message.earliestStart !== undefined && (obj.earliestStart = (message.earliestStart || BigInt(0)).toString());
    if (message.deletedEpochs) {
      obj.deletedEpochs = message.deletedEpochs.map(e => (e || BigInt(0)).toString());
    } else {
      obj.deletedEpochs = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EpochDetails>, I>>(object: I): EpochDetails {
    const message = createBaseEpochDetails();
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    message.earliestStart = object.earliestStart !== undefined && object.earliestStart !== null ? BigInt(object.earliestStart.toString()) : BigInt(0);
    message.deletedEpochs = object.deletedEpochs?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: EpochDetailsAmino): EpochDetails {
    const message = createBaseEpochDetails();
    if (object.startBlock !== undefined && object.startBlock !== null) {
      message.startBlock = BigInt(object.startBlock);
    }
    if (object.earliestStart !== undefined && object.earliestStart !== null) {
      message.earliestStart = BigInt(object.earliestStart);
    }
    message.deletedEpochs = object.deletedEpochs?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: EpochDetails): EpochDetailsAmino {
    const obj: any = {};
    obj.startBlock = message.startBlock !== BigInt(0) ? (message.startBlock?.toString)() : undefined;
    obj.earliestStart = message.earliestStart !== BigInt(0) ? (message.earliestStart?.toString)() : undefined;
    if (message.deletedEpochs) {
      obj.deletedEpochs = message.deletedEpochs.map(e => e.toString());
    } else {
      obj.deletedEpochs = message.deletedEpochs;
    }
    return obj;
  },
  fromAminoMsg(object: EpochDetailsAminoMsg): EpochDetails {
    return EpochDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochDetailsProtoMsg): EpochDetails {
    return EpochDetails.decode(message.value);
  },
  toProto(message: EpochDetails): Uint8Array {
    return EpochDetails.encode(message).finish();
  },
  toProtoMsg(message: EpochDetails): EpochDetailsProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.EpochDetails",
      value: EpochDetails.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EpochDetails.typeUrl, EpochDetails);