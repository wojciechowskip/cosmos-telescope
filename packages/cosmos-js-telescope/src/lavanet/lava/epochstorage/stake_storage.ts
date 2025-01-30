//@ts-nocheck
import { StakeEntry, StakeEntryAmino, StakeEntrySDKType } from "./stake_entry";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface StakeStorage {
  index: string;
  stakeEntries: StakeEntry[];
  epochBlockHash: Uint8Array;
}
export interface StakeStorageProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.StakeStorage";
  value: Uint8Array;
}
export interface StakeStorageAmino {
  index?: string;
  stakeEntries?: StakeEntryAmino[];
  epochBlockHash?: string;
}
export interface StakeStorageAminoMsg {
  type: "/lavanet.lava.epochstorage.StakeStorage";
  value: StakeStorageAmino;
}
export interface StakeStorageSDKType {
  index: string;
  stakeEntries: StakeEntrySDKType[];
  epochBlockHash: Uint8Array;
}
function createBaseStakeStorage(): StakeStorage {
  return {
    index: "",
    stakeEntries: [],
    epochBlockHash: new Uint8Array()
  };
}
export const StakeStorage = {
  typeUrl: "/lavanet.lava.epochstorage.StakeStorage",
  is(o: any): o is StakeStorage {
    return o && (o.$typeUrl === StakeStorage.typeUrl || typeof o.index === "string" && Array.isArray(o.stakeEntries) && (!o.stakeEntries.length || StakeEntry.is(o.stakeEntries[0])) && (o.epochBlockHash instanceof Uint8Array || typeof o.epochBlockHash === "string"));
  },
  isSDK(o: any): o is StakeStorageSDKType {
    return o && (o.$typeUrl === StakeStorage.typeUrl || typeof o.index === "string" && Array.isArray(o.stakeEntries) && (!o.stakeEntries.length || StakeEntry.isSDK(o.stakeEntries[0])) && (o.epochBlockHash instanceof Uint8Array || typeof o.epochBlockHash === "string"));
  },
  isAmino(o: any): o is StakeStorageAmino {
    return o && (o.$typeUrl === StakeStorage.typeUrl || typeof o.index === "string" && Array.isArray(o.stakeEntries) && (!o.stakeEntries.length || StakeEntry.isAmino(o.stakeEntries[0])) && (o.epochBlockHash instanceof Uint8Array || typeof o.epochBlockHash === "string"));
  },
  encode(message: StakeStorage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    for (const v of message.stakeEntries) {
      StakeEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.epochBlockHash.length !== 0) {
      writer.uint32(26).bytes(message.epochBlockHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakeStorage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.stakeEntries.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.epochBlockHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StakeStorage {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      stakeEntries: Array.isArray(object?.stakeEntries) ? object.stakeEntries.map((e: any) => StakeEntry.fromJSON(e)) : [],
      epochBlockHash: isSet(object.epochBlockHash) ? bytesFromBase64(object.epochBlockHash) : new Uint8Array()
    };
  },
  toJSON(message: StakeStorage): JsonSafe<StakeStorage> {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    if (message.stakeEntries) {
      obj.stakeEntries = message.stakeEntries.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.stakeEntries = [];
    }
    message.epochBlockHash !== undefined && (obj.epochBlockHash = base64FromBytes(message.epochBlockHash !== undefined ? message.epochBlockHash : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<StakeStorage>, I>>(object: I): StakeStorage {
    const message = createBaseStakeStorage();
    message.index = object.index ?? "";
    message.stakeEntries = object.stakeEntries?.map(e => StakeEntry.fromPartial(e)) || [];
    message.epochBlockHash = object.epochBlockHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: StakeStorageAmino): StakeStorage {
    const message = createBaseStakeStorage();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    message.stakeEntries = object.stakeEntries?.map(e => StakeEntry.fromAmino(e)) || [];
    if (object.epochBlockHash !== undefined && object.epochBlockHash !== null) {
      message.epochBlockHash = bytesFromBase64(object.epochBlockHash);
    }
    return message;
  },
  toAmino(message: StakeStorage): StakeStorageAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    if (message.stakeEntries) {
      obj.stakeEntries = message.stakeEntries.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.stakeEntries = message.stakeEntries;
    }
    obj.epochBlockHash = message.epochBlockHash ? base64FromBytes(message.epochBlockHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: StakeStorageAminoMsg): StakeStorage {
    return StakeStorage.fromAmino(object.value);
  },
  fromProtoMsg(message: StakeStorageProtoMsg): StakeStorage {
    return StakeStorage.decode(message.value);
  },
  toProto(message: StakeStorage): Uint8Array {
    return StakeStorage.encode(message).finish();
  },
  toProtoMsg(message: StakeStorage): StakeStorageProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.StakeStorage",
      value: StakeStorage.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StakeStorage.typeUrl, StakeStorage);