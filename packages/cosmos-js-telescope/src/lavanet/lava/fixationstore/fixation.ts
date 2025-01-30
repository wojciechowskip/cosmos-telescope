//@ts-nocheck
import { GenesisState as GenesisState1 } from "../timerstore/timer";
import { GenesisStateAmino as GenesisState1Amino } from "../timerstore/timer";
import { GenesisStateSDKType as GenesisState1SDKType } from "../timerstore/timer";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface Entry {
  /** unique entry index (i.e. list key) */
  index: string;
  /** block when the entry was created */
  block: bigint;
  /** block when the entry becomes stale */
  staleAt: bigint;
  /** reference count */
  refcount: bigint;
  /** the data saved in the entry */
  data: Uint8Array;
  /** block when the entry becomes deleted */
  deleteAt: bigint;
  /** is this entry the latest entry now? */
  isLatest: boolean;
}
export interface EntryProtoMsg {
  typeUrl: "/lavanet.lava.fixationstore.Entry";
  value: Uint8Array;
}
export interface EntryAmino {
  /** unique entry index (i.e. list key) */
  index?: string;
  /** block when the entry was created */
  block?: string;
  /** block when the entry becomes stale */
  stale_at?: string;
  /** reference count */
  refcount?: string;
  /** the data saved in the entry */
  data?: string;
  /** block when the entry becomes deleted */
  delete_at?: string;
  /** is this entry the latest entry now? */
  is_latest?: boolean;
}
export interface EntryAminoMsg {
  type: "/lavanet.lava.fixationstore.Entry";
  value: EntryAmino;
}
export interface EntrySDKType {
  index: string;
  block: bigint;
  stale_at: bigint;
  refcount: bigint;
  data: Uint8Array;
  delete_at: bigint;
  is_latest: boolean;
}
export interface GenesisEntries {
  index: string;
  isLive: boolean;
  entries: Entry[];
}
export interface GenesisEntriesProtoMsg {
  typeUrl: "/lavanet.lava.fixationstore.GenesisEntries";
  value: Uint8Array;
}
export interface GenesisEntriesAmino {
  index?: string;
  is_live?: boolean;
  entries?: EntryAmino[];
}
export interface GenesisEntriesAminoMsg {
  type: "/lavanet.lava.fixationstore.GenesisEntries";
  value: GenesisEntriesAmino;
}
export interface GenesisEntriesSDKType {
  index: string;
  is_live: boolean;
  entries: EntrySDKType[];
}
export interface GenesisState {
  version: bigint;
  entries: GenesisEntries[];
  timerstore: GenesisState1;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lavanet.lava.fixationstore.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  version?: string;
  entries?: GenesisEntriesAmino[];
  timerstore?: GenesisState1Amino;
}
export interface GenesisStateAminoMsg {
  type: "/lavanet.lava.fixationstore.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  version: bigint;
  entries: GenesisEntriesSDKType[];
  timerstore: GenesisState1SDKType;
}
function createBaseEntry(): Entry {
  return {
    index: "",
    block: BigInt(0),
    staleAt: BigInt(0),
    refcount: BigInt(0),
    data: new Uint8Array(),
    deleteAt: BigInt(0),
    isLatest: false
  };
}
export const Entry = {
  typeUrl: "/lavanet.lava.fixationstore.Entry",
  is(o: any): o is Entry {
    return o && (o.$typeUrl === Entry.typeUrl || typeof o.index === "string" && typeof o.block === "bigint" && typeof o.staleAt === "bigint" && typeof o.refcount === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.deleteAt === "bigint" && typeof o.isLatest === "boolean");
  },
  isSDK(o: any): o is EntrySDKType {
    return o && (o.$typeUrl === Entry.typeUrl || typeof o.index === "string" && typeof o.block === "bigint" && typeof o.stale_at === "bigint" && typeof o.refcount === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.delete_at === "bigint" && typeof o.is_latest === "boolean");
  },
  isAmino(o: any): o is EntryAmino {
    return o && (o.$typeUrl === Entry.typeUrl || typeof o.index === "string" && typeof o.block === "bigint" && typeof o.stale_at === "bigint" && typeof o.refcount === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.delete_at === "bigint" && typeof o.is_latest === "boolean");
  },
  encode(message: Entry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(16).uint64(message.block);
    }
    if (message.staleAt !== BigInt(0)) {
      writer.uint32(24).uint64(message.staleAt);
    }
    if (message.refcount !== BigInt(0)) {
      writer.uint32(32).uint64(message.refcount);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    if (message.deleteAt !== BigInt(0)) {
      writer.uint32(48).uint64(message.deleteAt);
    }
    if (message.isLatest === true) {
      writer.uint32(56).bool(message.isLatest);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Entry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.block = reader.uint64();
          break;
        case 3:
          message.staleAt = reader.uint64();
          break;
        case 4:
          message.refcount = reader.uint64();
          break;
        case 5:
          message.data = reader.bytes();
          break;
        case 6:
          message.deleteAt = reader.uint64();
          break;
        case 7:
          message.isLatest = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Entry {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0),
      staleAt: isSet(object.staleAt) ? BigInt(object.staleAt.toString()) : BigInt(0),
      refcount: isSet(object.refcount) ? BigInt(object.refcount.toString()) : BigInt(0),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      deleteAt: isSet(object.deleteAt) ? BigInt(object.deleteAt.toString()) : BigInt(0),
      isLatest: isSet(object.isLatest) ? Boolean(object.isLatest) : false
    };
  },
  toJSON(message: Entry): JsonSafe<Entry> {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
    message.staleAt !== undefined && (obj.staleAt = (message.staleAt || BigInt(0)).toString());
    message.refcount !== undefined && (obj.refcount = (message.refcount || BigInt(0)).toString());
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.deleteAt !== undefined && (obj.deleteAt = (message.deleteAt || BigInt(0)).toString());
    message.isLatest !== undefined && (obj.isLatest = message.isLatest);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Entry>, I>>(object: I): Entry {
    const message = createBaseEntry();
    message.index = object.index ?? "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.staleAt = object.staleAt !== undefined && object.staleAt !== null ? BigInt(object.staleAt.toString()) : BigInt(0);
    message.refcount = object.refcount !== undefined && object.refcount !== null ? BigInt(object.refcount.toString()) : BigInt(0);
    message.data = object.data ?? new Uint8Array();
    message.deleteAt = object.deleteAt !== undefined && object.deleteAt !== null ? BigInt(object.deleteAt.toString()) : BigInt(0);
    message.isLatest = object.isLatest ?? false;
    return message;
  },
  fromAmino(object: EntryAmino): Entry {
    const message = createBaseEntry();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    if (object.stale_at !== undefined && object.stale_at !== null) {
      message.staleAt = BigInt(object.stale_at);
    }
    if (object.refcount !== undefined && object.refcount !== null) {
      message.refcount = BigInt(object.refcount);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.delete_at !== undefined && object.delete_at !== null) {
      message.deleteAt = BigInt(object.delete_at);
    }
    if (object.is_latest !== undefined && object.is_latest !== null) {
      message.isLatest = object.is_latest;
    }
    return message;
  },
  toAmino(message: Entry): EntryAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    obj.block = message.block !== BigInt(0) ? (message.block?.toString)() : undefined;
    obj.stale_at = message.staleAt !== BigInt(0) ? (message.staleAt?.toString)() : undefined;
    obj.refcount = message.refcount !== BigInt(0) ? (message.refcount?.toString)() : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.delete_at = message.deleteAt !== BigInt(0) ? (message.deleteAt?.toString)() : undefined;
    obj.is_latest = message.isLatest === false ? undefined : message.isLatest;
    return obj;
  },
  fromAminoMsg(object: EntryAminoMsg): Entry {
    return Entry.fromAmino(object.value);
  },
  fromProtoMsg(message: EntryProtoMsg): Entry {
    return Entry.decode(message.value);
  },
  toProto(message: Entry): Uint8Array {
    return Entry.encode(message).finish();
  },
  toProtoMsg(message: Entry): EntryProtoMsg {
    return {
      typeUrl: "/lavanet.lava.fixationstore.Entry",
      value: Entry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Entry.typeUrl, Entry);
function createBaseGenesisEntries(): GenesisEntries {
  return {
    index: "",
    isLive: false,
    entries: []
  };
}
export const GenesisEntries = {
  typeUrl: "/lavanet.lava.fixationstore.GenesisEntries",
  is(o: any): o is GenesisEntries {
    return o && (o.$typeUrl === GenesisEntries.typeUrl || typeof o.index === "string" && typeof o.isLive === "boolean" && Array.isArray(o.entries) && (!o.entries.length || Entry.is(o.entries[0])));
  },
  isSDK(o: any): o is GenesisEntriesSDKType {
    return o && (o.$typeUrl === GenesisEntries.typeUrl || typeof o.index === "string" && typeof o.is_live === "boolean" && Array.isArray(o.entries) && (!o.entries.length || Entry.isSDK(o.entries[0])));
  },
  isAmino(o: any): o is GenesisEntriesAmino {
    return o && (o.$typeUrl === GenesisEntries.typeUrl || typeof o.index === "string" && typeof o.is_live === "boolean" && Array.isArray(o.entries) && (!o.entries.length || Entry.isAmino(o.entries[0])));
  },
  encode(message: GenesisEntries, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.isLive === true) {
      writer.uint32(16).bool(message.isLive);
    }
    for (const v of message.entries) {
      Entry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisEntries {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisEntries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.isLive = reader.bool();
          break;
        case 3:
          message.entries.push(Entry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisEntries {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      isLive: isSet(object.isLive) ? Boolean(object.isLive) : false,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Entry.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisEntries): JsonSafe<GenesisEntries> {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.isLive !== undefined && (obj.isLive = message.isLive);
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Entry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisEntries>, I>>(object: I): GenesisEntries {
    const message = createBaseGenesisEntries();
    message.index = object.index ?? "";
    message.isLive = object.isLive ?? false;
    message.entries = object.entries?.map(e => Entry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisEntriesAmino): GenesisEntries {
    const message = createBaseGenesisEntries();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.is_live !== undefined && object.is_live !== null) {
      message.isLive = object.is_live;
    }
    message.entries = object.entries?.map(e => Entry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisEntries): GenesisEntriesAmino {
    const obj: any = {};
    obj.index = message.index === "" ? undefined : message.index;
    obj.is_live = message.isLive === false ? undefined : message.isLive;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Entry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisEntriesAminoMsg): GenesisEntries {
    return GenesisEntries.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisEntriesProtoMsg): GenesisEntries {
    return GenesisEntries.decode(message.value);
  },
  toProto(message: GenesisEntries): Uint8Array {
    return GenesisEntries.encode(message).finish();
  },
  toProtoMsg(message: GenesisEntries): GenesisEntriesProtoMsg {
    return {
      typeUrl: "/lavanet.lava.fixationstore.GenesisEntries",
      value: GenesisEntries.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisEntries.typeUrl, GenesisEntries);
function createBaseGenesisState(): GenesisState {
  return {
    version: BigInt(0),
    entries: [],
    timerstore: GenesisState1.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.fixationstore.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.version === "bigint" && Array.isArray(o.entries) && (!o.entries.length || GenesisEntries.is(o.entries[0])) && GenesisState1.is(o.timerstore));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.version === "bigint" && Array.isArray(o.entries) && (!o.entries.length || GenesisEntries.isSDK(o.entries[0])) && GenesisState1.isSDK(o.timerstore));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.version === "bigint" && Array.isArray(o.entries) && (!o.entries.length || GenesisEntries.isAmino(o.entries[0])) && GenesisState1.isAmino(o.timerstore));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== BigInt(0)) {
      writer.uint32(8).uint64(message.version);
    }
    for (const v of message.entries) {
      GenesisEntries.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.timerstore !== undefined) {
      GenesisState1.encode(message.timerstore, writer.uint32(26).fork()).ldelim();
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
          message.entries.push(GenesisEntries.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timerstore = GenesisState1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => GenesisEntries.fromJSON(e)) : [],
      timerstore: isSet(object.timerstore) ? GenesisState1.fromJSON(object.timerstore) : undefined
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? GenesisEntries.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    message.timerstore !== undefined && (obj.timerstore = message.timerstore ? GenesisState1.toJSON(message.timerstore) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.entries = object.entries?.map(e => GenesisEntries.fromPartial(e)) || [];
    message.timerstore = object.timerstore !== undefined && object.timerstore !== null ? GenesisState1.fromPartial(object.timerstore) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    message.entries = object.entries?.map(e => GenesisEntries.fromAmino(e)) || [];
    if (object.timerstore !== undefined && object.timerstore !== null) {
      message.timerstore = GenesisState1.fromAmino(object.timerstore);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.version = message.version !== BigInt(0) ? (message.version?.toString)() : undefined;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? GenesisEntries.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    obj.timerstore = message.timerstore ? GenesisState1.toAmino(message.timerstore) : undefined;
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
      typeUrl: "/lavanet.lava.fixationstore.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);