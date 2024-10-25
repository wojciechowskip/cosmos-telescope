//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface GenesisState {
  version: bigint;
  nextBlockHeight: bigint;
  nextBlockTime: bigint;
  timeEntries: GenesisTimerEntry[];
  blockEntries: GenesisTimerEntry[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lavanet.lava.timerstore.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  version?: string;
  next_block_height?: string;
  next_block_time?: string;
  time_entries?: GenesisTimerEntryAmino[];
  block_entries?: GenesisTimerEntryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lavanet.lava.timerstore.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  version: bigint;
  next_block_height: bigint;
  next_block_time: bigint;
  time_entries: GenesisTimerEntrySDKType[];
  block_entries: GenesisTimerEntrySDKType[];
}
export interface GenesisTimerEntry {
  /** user defined key */
  key: string;
  /** block height/timestamp */
  value: bigint;
  /** user defined data */
  data: Uint8Array;
}
export interface GenesisTimerEntryProtoMsg {
  typeUrl: "/lavanet.lava.timerstore.GenesisTimerEntry";
  value: Uint8Array;
}
export interface GenesisTimerEntryAmino {
  /** user defined key */
  key?: string;
  /** block height/timestamp */
  value?: string;
  /** user defined data */
  data?: string;
}
export interface GenesisTimerEntryAminoMsg {
  type: "/lavanet.lava.timerstore.GenesisTimerEntry";
  value: GenesisTimerEntryAmino;
}
export interface GenesisTimerEntrySDKType {
  key: string;
  value: bigint;
  data: Uint8Array;
}
function createBaseGenesisState(): GenesisState {
  return {
    version: BigInt(0),
    nextBlockHeight: BigInt(0),
    nextBlockTime: BigInt(0),
    timeEntries: [],
    blockEntries: []
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.timerstore.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== BigInt(0)) {
      writer.uint32(8).uint64(message.version);
    }
    if (message.nextBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextBlockHeight);
    }
    if (message.nextBlockTime !== BigInt(0)) {
      writer.uint32(24).uint64(message.nextBlockTime);
    }
    for (const v of message.timeEntries) {
      GenesisTimerEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.blockEntries) {
      GenesisTimerEntry.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.version = reader.uint64();
          break;
        case 2:
          message.nextBlockHeight = reader.uint64();
          break;
        case 3:
          message.nextBlockTime = reader.uint64();
          break;
        case 4:
          message.timeEntries.push(GenesisTimerEntry.decode(reader, reader.uint32()));
          break;
        case 5:
          message.blockEntries.push(GenesisTimerEntry.decode(reader, reader.uint32()));
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
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.nextBlockHeight = object.nextBlockHeight !== undefined && object.nextBlockHeight !== null ? BigInt(object.nextBlockHeight.toString()) : BigInt(0);
    message.nextBlockTime = object.nextBlockTime !== undefined && object.nextBlockTime !== null ? BigInt(object.nextBlockTime.toString()) : BigInt(0);
    message.timeEntries = object.timeEntries?.map(e => GenesisTimerEntry.fromPartial(e)) || [];
    message.blockEntries = object.blockEntries?.map(e => GenesisTimerEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    if (object.next_block_height !== undefined && object.next_block_height !== null) {
      message.nextBlockHeight = BigInt(object.next_block_height);
    }
    if (object.next_block_time !== undefined && object.next_block_time !== null) {
      message.nextBlockTime = BigInt(object.next_block_time);
    }
    message.timeEntries = object.time_entries?.map(e => GenesisTimerEntry.fromAmino(e)) || [];
    message.blockEntries = object.block_entries?.map(e => GenesisTimerEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.version = message.version !== BigInt(0) ? (message.version?.toString)() : undefined;
    obj.next_block_height = message.nextBlockHeight !== BigInt(0) ? (message.nextBlockHeight?.toString)() : undefined;
    obj.next_block_time = message.nextBlockTime !== BigInt(0) ? (message.nextBlockTime?.toString)() : undefined;
    if (message.timeEntries) {
      obj.time_entries = message.timeEntries.map(e => e ? GenesisTimerEntry.toAmino(e) : undefined);
    } else {
      obj.time_entries = message.timeEntries;
    }
    if (message.blockEntries) {
      obj.block_entries = message.blockEntries.map(e => e ? GenesisTimerEntry.toAmino(e) : undefined);
    } else {
      obj.block_entries = message.blockEntries;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/lavanet.lava.timerstore.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseGenesisTimerEntry(): GenesisTimerEntry {
  return {
    key: "",
    value: BigInt(0),
    data: new Uint8Array()
  };
}
export const GenesisTimerEntry = {
  typeUrl: "/lavanet.lava.timerstore.GenesisTimerEntry",
  encode(message: GenesisTimerEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisTimerEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisTimerEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.uint64();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisTimerEntry>): GenesisTimerEntry {
    const message = createBaseGenesisTimerEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: GenesisTimerEntryAmino): GenesisTimerEntry {
    const message = createBaseGenesisTimerEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: GenesisTimerEntry): GenesisTimerEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value !== BigInt(0) ? (message.value?.toString)() : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisTimerEntryAminoMsg): GenesisTimerEntry {
    return GenesisTimerEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisTimerEntryProtoMsg): GenesisTimerEntry {
    return GenesisTimerEntry.decode(message.value);
  },
  toProto(message: GenesisTimerEntry): Uint8Array {
    return GenesisTimerEntry.encode(message).finish();
  },
  toProtoMsg(message: GenesisTimerEntry): GenesisTimerEntryProtoMsg {
    return {
      typeUrl: "/lavanet.lava.timerstore.GenesisTimerEntry",
      value: GenesisTimerEntry.encode(message).finish()
    };
  }
};