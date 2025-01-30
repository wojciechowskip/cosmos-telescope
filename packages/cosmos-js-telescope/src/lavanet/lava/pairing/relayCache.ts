//@ts-nocheck
import { RelayReply, RelayReplyAmino, RelayReplySDKType, Metadata, MetadataAmino, MetadataSDKType, RelayPrivateData, RelayPrivateDataAmino, RelayPrivateDataSDKType } from "./relay";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface CacheRelayReply {
  reply?: RelayReply;
  optionalMetadata: Metadata[];
  seenBlock: bigint;
  blocksHashesToHeights: BlockHashToHeight[];
}
export interface CacheRelayReplyProtoMsg {
  typeUrl: "/lavanet.lava.pairing.CacheRelayReply";
  value: Uint8Array;
}
export interface CacheRelayReplyAmino {
  reply?: RelayReplyAmino;
  optional_metadata?: MetadataAmino[];
  seen_block?: string;
  blocks_hashes_to_heights?: BlockHashToHeightAmino[];
}
export interface CacheRelayReplyAminoMsg {
  type: "/lavanet.lava.pairing.CacheRelayReply";
  value: CacheRelayReplyAmino;
}
export interface CacheRelayReplySDKType {
  reply?: RelayReplySDKType;
  optional_metadata: MetadataSDKType[];
  seen_block: bigint;
  blocks_hashes_to_heights: BlockHashToHeightSDKType[];
}
export interface CacheUsage {
  cacheHits: bigint;
  cacheMisses: bigint;
}
export interface CacheUsageProtoMsg {
  typeUrl: "/lavanet.lava.pairing.CacheUsage";
  value: Uint8Array;
}
export interface CacheUsageAmino {
  CacheHits?: string;
  CacheMisses?: string;
}
export interface CacheUsageAminoMsg {
  type: "/lavanet.lava.pairing.CacheUsage";
  value: CacheUsageAmino;
}
export interface CacheUsageSDKType {
  CacheHits: bigint;
  CacheMisses: bigint;
}
/** data containing the cache key hash */
export interface CacheHash {
  request?: RelayPrivateData;
  chainId: string;
}
export interface CacheHashProtoMsg {
  typeUrl: "/lavanet.lava.pairing.CacheHash";
  value: Uint8Array;
}
/** data containing the cache key hash */
export interface CacheHashAmino {
  request?: RelayPrivateDataAmino;
  chain_id?: string;
}
export interface CacheHashAminoMsg {
  type: "/lavanet.lava.pairing.CacheHash";
  value: CacheHashAmino;
}
/** data containing the cache key hash */
export interface CacheHashSDKType {
  request?: RelayPrivateDataSDKType;
  chain_id: string;
}
export interface RelayCacheGet {
  /** hash of the RelayPrivateData */
  requestHash: Uint8Array;
  blockHash: Uint8Array;
  finalized: boolean;
  requestedBlock: bigint;
  /** empty id for no shared state */
  sharedStateId: string;
  /** used to set latest block per chain. */
  chainId: string;
  seenBlock: bigint;
  blocksHashesToHeights: BlockHashToHeight[];
}
export interface RelayCacheGetProtoMsg {
  typeUrl: "/lavanet.lava.pairing.RelayCacheGet";
  value: Uint8Array;
}
export interface RelayCacheGetAmino {
  /** hash of the RelayPrivateData */
  request_hash?: string;
  block_hash?: string;
  finalized?: boolean;
  requested_block?: string;
  /** empty id for no shared state */
  shared_state_id?: string;
  /** used to set latest block per chain. */
  chain_id?: string;
  seen_block?: string;
  blocks_hashes_to_heights?: BlockHashToHeightAmino[];
}
export interface RelayCacheGetAminoMsg {
  type: "/lavanet.lava.pairing.RelayCacheGet";
  value: RelayCacheGetAmino;
}
export interface RelayCacheGetSDKType {
  request_hash: Uint8Array;
  block_hash: Uint8Array;
  finalized: boolean;
  requested_block: bigint;
  shared_state_id: string;
  chain_id: string;
  seen_block: bigint;
  blocks_hashes_to_heights: BlockHashToHeightSDKType[];
}
export interface RelayCacheSet {
  /** hash of the RelayPrivateData */
  requestHash: Uint8Array;
  blockHash: Uint8Array;
  response?: RelayReply;
  finalized: boolean;
  optionalMetadata: Metadata[];
  /** empty id for no shared state */
  sharedStateId: string;
  requestedBlock: bigint;
  /** used to set latest block per chain. */
  chainId: string;
  seenBlock: bigint;
  averageBlockTime: bigint;
  /** node errors wont be cached for long even if they are finalized in cases where it returns a valid response later on */
  isNodeError: boolean;
  blocksHashesToHeights: BlockHashToHeight[];
}
export interface RelayCacheSetProtoMsg {
  typeUrl: "/lavanet.lava.pairing.RelayCacheSet";
  value: Uint8Array;
}
export interface RelayCacheSetAmino {
  /** hash of the RelayPrivateData */
  request_hash?: string;
  block_hash?: string;
  response?: RelayReplyAmino;
  finalized?: boolean;
  optional_metadata?: MetadataAmino[];
  /** empty id for no shared state */
  shared_state_id?: string;
  requested_block?: string;
  /** used to set latest block per chain. */
  chain_id?: string;
  seen_block?: string;
  average_block_time?: string;
  /** node errors wont be cached for long even if they are finalized in cases where it returns a valid response later on */
  is_node_error?: boolean;
  blocks_hashes_to_heights?: BlockHashToHeightAmino[];
}
export interface RelayCacheSetAminoMsg {
  type: "/lavanet.lava.pairing.RelayCacheSet";
  value: RelayCacheSetAmino;
}
export interface RelayCacheSetSDKType {
  request_hash: Uint8Array;
  block_hash: Uint8Array;
  response?: RelayReplySDKType;
  finalized: boolean;
  optional_metadata: MetadataSDKType[];
  shared_state_id: string;
  requested_block: bigint;
  chain_id: string;
  seen_block: bigint;
  average_block_time: bigint;
  is_node_error: boolean;
  blocks_hashes_to_heights: BlockHashToHeightSDKType[];
}
export interface BlockHashToHeight {
  hash: string;
  height: bigint;
}
export interface BlockHashToHeightProtoMsg {
  typeUrl: "/lavanet.lava.pairing.BlockHashToHeight";
  value: Uint8Array;
}
export interface BlockHashToHeightAmino {
  hash?: string;
  height?: string;
}
export interface BlockHashToHeightAminoMsg {
  type: "/lavanet.lava.pairing.BlockHashToHeight";
  value: BlockHashToHeightAmino;
}
export interface BlockHashToHeightSDKType {
  hash: string;
  height: bigint;
}
function createBaseCacheRelayReply(): CacheRelayReply {
  return {
    reply: undefined,
    optionalMetadata: [],
    seenBlock: BigInt(0),
    blocksHashesToHeights: []
  };
}
export const CacheRelayReply = {
  typeUrl: "/lavanet.lava.pairing.CacheRelayReply",
  is(o: any): o is CacheRelayReply {
    return o && (o.$typeUrl === CacheRelayReply.typeUrl || Array.isArray(o.optionalMetadata) && (!o.optionalMetadata.length || Metadata.is(o.optionalMetadata[0])) && typeof o.seenBlock === "bigint" && Array.isArray(o.blocksHashesToHeights) && (!o.blocksHashesToHeights.length || BlockHashToHeight.is(o.blocksHashesToHeights[0])));
  },
  isSDK(o: any): o is CacheRelayReplySDKType {
    return o && (o.$typeUrl === CacheRelayReply.typeUrl || Array.isArray(o.optional_metadata) && (!o.optional_metadata.length || Metadata.isSDK(o.optional_metadata[0])) && typeof o.seen_block === "bigint" && Array.isArray(o.blocks_hashes_to_heights) && (!o.blocks_hashes_to_heights.length || BlockHashToHeight.isSDK(o.blocks_hashes_to_heights[0])));
  },
  isAmino(o: any): o is CacheRelayReplyAmino {
    return o && (o.$typeUrl === CacheRelayReply.typeUrl || Array.isArray(o.optional_metadata) && (!o.optional_metadata.length || Metadata.isAmino(o.optional_metadata[0])) && typeof o.seen_block === "bigint" && Array.isArray(o.blocks_hashes_to_heights) && (!o.blocks_hashes_to_heights.length || BlockHashToHeight.isAmino(o.blocks_hashes_to_heights[0])));
  },
  encode(message: CacheRelayReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reply !== undefined) {
      RelayReply.encode(message.reply, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.optionalMetadata) {
      Metadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.seenBlock !== BigInt(0)) {
      writer.uint32(24).int64(message.seenBlock);
    }
    for (const v of message.blocksHashesToHeights) {
      BlockHashToHeight.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CacheRelayReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCacheRelayReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reply = RelayReply.decode(reader, reader.uint32());
          break;
        case 2:
          message.optionalMetadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        case 3:
          message.seenBlock = reader.int64();
          break;
        case 4:
          message.blocksHashesToHeights.push(BlockHashToHeight.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CacheRelayReply {
    return {
      reply: isSet(object.reply) ? RelayReply.fromJSON(object.reply) : undefined,
      optionalMetadata: Array.isArray(object?.optionalMetadata) ? object.optionalMetadata.map((e: any) => Metadata.fromJSON(e)) : [],
      seenBlock: isSet(object.seenBlock) ? BigInt(object.seenBlock.toString()) : BigInt(0),
      blocksHashesToHeights: Array.isArray(object?.blocksHashesToHeights) ? object.blocksHashesToHeights.map((e: any) => BlockHashToHeight.fromJSON(e)) : []
    };
  },
  toJSON(message: CacheRelayReply): JsonSafe<CacheRelayReply> {
    const obj: any = {};
    message.reply !== undefined && (obj.reply = message.reply ? RelayReply.toJSON(message.reply) : undefined);
    if (message.optionalMetadata) {
      obj.optionalMetadata = message.optionalMetadata.map(e => e ? Metadata.toJSON(e) : undefined);
    } else {
      obj.optionalMetadata = [];
    }
    message.seenBlock !== undefined && (obj.seenBlock = (message.seenBlock || BigInt(0)).toString());
    if (message.blocksHashesToHeights) {
      obj.blocksHashesToHeights = message.blocksHashesToHeights.map(e => e ? BlockHashToHeight.toJSON(e) : undefined);
    } else {
      obj.blocksHashesToHeights = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CacheRelayReply>, I>>(object: I): CacheRelayReply {
    const message = createBaseCacheRelayReply();
    message.reply = object.reply !== undefined && object.reply !== null ? RelayReply.fromPartial(object.reply) : undefined;
    message.optionalMetadata = object.optionalMetadata?.map(e => Metadata.fromPartial(e)) || [];
    message.seenBlock = object.seenBlock !== undefined && object.seenBlock !== null ? BigInt(object.seenBlock.toString()) : BigInt(0);
    message.blocksHashesToHeights = object.blocksHashesToHeights?.map(e => BlockHashToHeight.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CacheRelayReplyAmino): CacheRelayReply {
    const message = createBaseCacheRelayReply();
    if (object.reply !== undefined && object.reply !== null) {
      message.reply = RelayReply.fromAmino(object.reply);
    }
    message.optionalMetadata = object.optional_metadata?.map(e => Metadata.fromAmino(e)) || [];
    if (object.seen_block !== undefined && object.seen_block !== null) {
      message.seenBlock = BigInt(object.seen_block);
    }
    message.blocksHashesToHeights = object.blocks_hashes_to_heights?.map(e => BlockHashToHeight.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CacheRelayReply): CacheRelayReplyAmino {
    const obj: any = {};
    obj.reply = message.reply ? RelayReply.toAmino(message.reply) : undefined;
    if (message.optionalMetadata) {
      obj.optional_metadata = message.optionalMetadata.map(e => e ? Metadata.toAmino(e) : undefined);
    } else {
      obj.optional_metadata = message.optionalMetadata;
    }
    obj.seen_block = message.seenBlock !== BigInt(0) ? (message.seenBlock?.toString)() : undefined;
    if (message.blocksHashesToHeights) {
      obj.blocks_hashes_to_heights = message.blocksHashesToHeights.map(e => e ? BlockHashToHeight.toAmino(e) : undefined);
    } else {
      obj.blocks_hashes_to_heights = message.blocksHashesToHeights;
    }
    return obj;
  },
  fromAminoMsg(object: CacheRelayReplyAminoMsg): CacheRelayReply {
    return CacheRelayReply.fromAmino(object.value);
  },
  fromProtoMsg(message: CacheRelayReplyProtoMsg): CacheRelayReply {
    return CacheRelayReply.decode(message.value);
  },
  toProto(message: CacheRelayReply): Uint8Array {
    return CacheRelayReply.encode(message).finish();
  },
  toProtoMsg(message: CacheRelayReply): CacheRelayReplyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.CacheRelayReply",
      value: CacheRelayReply.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CacheRelayReply.typeUrl, CacheRelayReply);
function createBaseCacheUsage(): CacheUsage {
  return {
    cacheHits: BigInt(0),
    cacheMisses: BigInt(0)
  };
}
export const CacheUsage = {
  typeUrl: "/lavanet.lava.pairing.CacheUsage",
  is(o: any): o is CacheUsage {
    return o && (o.$typeUrl === CacheUsage.typeUrl || typeof o.cacheHits === "bigint" && typeof o.cacheMisses === "bigint");
  },
  isSDK(o: any): o is CacheUsageSDKType {
    return o && (o.$typeUrl === CacheUsage.typeUrl || typeof o.CacheHits === "bigint" && typeof o.CacheMisses === "bigint");
  },
  isAmino(o: any): o is CacheUsageAmino {
    return o && (o.$typeUrl === CacheUsage.typeUrl || typeof o.CacheHits === "bigint" && typeof o.CacheMisses === "bigint");
  },
  encode(message: CacheUsage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cacheHits !== BigInt(0)) {
      writer.uint32(8).uint64(message.cacheHits);
    }
    if (message.cacheMisses !== BigInt(0)) {
      writer.uint32(16).uint64(message.cacheMisses);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CacheUsage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCacheUsage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cacheHits = reader.uint64();
          break;
        case 2:
          message.cacheMisses = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CacheUsage {
    return {
      cacheHits: isSet(object.cacheHits) ? BigInt(object.cacheHits.toString()) : BigInt(0),
      cacheMisses: isSet(object.cacheMisses) ? BigInt(object.cacheMisses.toString()) : BigInt(0)
    };
  },
  toJSON(message: CacheUsage): JsonSafe<CacheUsage> {
    const obj: any = {};
    message.cacheHits !== undefined && (obj.cacheHits = (message.cacheHits || BigInt(0)).toString());
    message.cacheMisses !== undefined && (obj.cacheMisses = (message.cacheMisses || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CacheUsage>, I>>(object: I): CacheUsage {
    const message = createBaseCacheUsage();
    message.cacheHits = object.cacheHits !== undefined && object.cacheHits !== null ? BigInt(object.cacheHits.toString()) : BigInt(0);
    message.cacheMisses = object.cacheMisses !== undefined && object.cacheMisses !== null ? BigInt(object.cacheMisses.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CacheUsageAmino): CacheUsage {
    const message = createBaseCacheUsage();
    if (object.CacheHits !== undefined && object.CacheHits !== null) {
      message.cacheHits = BigInt(object.CacheHits);
    }
    if (object.CacheMisses !== undefined && object.CacheMisses !== null) {
      message.cacheMisses = BigInt(object.CacheMisses);
    }
    return message;
  },
  toAmino(message: CacheUsage): CacheUsageAmino {
    const obj: any = {};
    obj.CacheHits = message.cacheHits !== BigInt(0) ? (message.cacheHits?.toString)() : undefined;
    obj.CacheMisses = message.cacheMisses !== BigInt(0) ? (message.cacheMisses?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: CacheUsageAminoMsg): CacheUsage {
    return CacheUsage.fromAmino(object.value);
  },
  fromProtoMsg(message: CacheUsageProtoMsg): CacheUsage {
    return CacheUsage.decode(message.value);
  },
  toProto(message: CacheUsage): Uint8Array {
    return CacheUsage.encode(message).finish();
  },
  toProtoMsg(message: CacheUsage): CacheUsageProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.CacheUsage",
      value: CacheUsage.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CacheUsage.typeUrl, CacheUsage);
function createBaseCacheHash(): CacheHash {
  return {
    request: undefined,
    chainId: ""
  };
}
export const CacheHash = {
  typeUrl: "/lavanet.lava.pairing.CacheHash",
  is(o: any): o is CacheHash {
    return o && (o.$typeUrl === CacheHash.typeUrl || typeof o.chainId === "string");
  },
  isSDK(o: any): o is CacheHashSDKType {
    return o && (o.$typeUrl === CacheHash.typeUrl || typeof o.chain_id === "string");
  },
  isAmino(o: any): o is CacheHashAmino {
    return o && (o.$typeUrl === CacheHash.typeUrl || typeof o.chain_id === "string");
  },
  encode(message: CacheHash, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.request !== undefined) {
      RelayPrivateData.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CacheHash {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCacheHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = RelayPrivateData.decode(reader, reader.uint32());
          break;
        case 2:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CacheHash {
    return {
      request: isSet(object.request) ? RelayPrivateData.fromJSON(object.request) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  toJSON(message: CacheHash): JsonSafe<CacheHash> {
    const obj: any = {};
    message.request !== undefined && (obj.request = message.request ? RelayPrivateData.toJSON(message.request) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CacheHash>, I>>(object: I): CacheHash {
    const message = createBaseCacheHash();
    message.request = object.request !== undefined && object.request !== null ? RelayPrivateData.fromPartial(object.request) : undefined;
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: CacheHashAmino): CacheHash {
    const message = createBaseCacheHash();
    if (object.request !== undefined && object.request !== null) {
      message.request = RelayPrivateData.fromAmino(object.request);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: CacheHash): CacheHashAmino {
    const obj: any = {};
    obj.request = message.request ? RelayPrivateData.toAmino(message.request) : undefined;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    return obj;
  },
  fromAminoMsg(object: CacheHashAminoMsg): CacheHash {
    return CacheHash.fromAmino(object.value);
  },
  fromProtoMsg(message: CacheHashProtoMsg): CacheHash {
    return CacheHash.decode(message.value);
  },
  toProto(message: CacheHash): Uint8Array {
    return CacheHash.encode(message).finish();
  },
  toProtoMsg(message: CacheHash): CacheHashProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.CacheHash",
      value: CacheHash.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CacheHash.typeUrl, CacheHash);
function createBaseRelayCacheGet(): RelayCacheGet {
  return {
    requestHash: new Uint8Array(),
    blockHash: new Uint8Array(),
    finalized: false,
    requestedBlock: BigInt(0),
    sharedStateId: "",
    chainId: "",
    seenBlock: BigInt(0),
    blocksHashesToHeights: []
  };
}
export const RelayCacheGet = {
  typeUrl: "/lavanet.lava.pairing.RelayCacheGet",
  is(o: any): o is RelayCacheGet {
    return o && (o.$typeUrl === RelayCacheGet.typeUrl || (o.requestHash instanceof Uint8Array || typeof o.requestHash === "string") && (o.blockHash instanceof Uint8Array || typeof o.blockHash === "string") && typeof o.finalized === "boolean" && typeof o.requestedBlock === "bigint" && typeof o.sharedStateId === "string" && typeof o.chainId === "string" && typeof o.seenBlock === "bigint" && Array.isArray(o.blocksHashesToHeights) && (!o.blocksHashesToHeights.length || BlockHashToHeight.is(o.blocksHashesToHeights[0])));
  },
  isSDK(o: any): o is RelayCacheGetSDKType {
    return o && (o.$typeUrl === RelayCacheGet.typeUrl || (o.request_hash instanceof Uint8Array || typeof o.request_hash === "string") && (o.block_hash instanceof Uint8Array || typeof o.block_hash === "string") && typeof o.finalized === "boolean" && typeof o.requested_block === "bigint" && typeof o.shared_state_id === "string" && typeof o.chain_id === "string" && typeof o.seen_block === "bigint" && Array.isArray(o.blocks_hashes_to_heights) && (!o.blocks_hashes_to_heights.length || BlockHashToHeight.isSDK(o.blocks_hashes_to_heights[0])));
  },
  isAmino(o: any): o is RelayCacheGetAmino {
    return o && (o.$typeUrl === RelayCacheGet.typeUrl || (o.request_hash instanceof Uint8Array || typeof o.request_hash === "string") && (o.block_hash instanceof Uint8Array || typeof o.block_hash === "string") && typeof o.finalized === "boolean" && typeof o.requested_block === "bigint" && typeof o.shared_state_id === "string" && typeof o.chain_id === "string" && typeof o.seen_block === "bigint" && Array.isArray(o.blocks_hashes_to_heights) && (!o.blocks_hashes_to_heights.length || BlockHashToHeight.isAmino(o.blocks_hashes_to_heights[0])));
  },
  encode(message: RelayCacheGet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestHash.length !== 0) {
      writer.uint32(10).bytes(message.requestHash);
    }
    if (message.blockHash.length !== 0) {
      writer.uint32(18).bytes(message.blockHash);
    }
    if (message.finalized === true) {
      writer.uint32(24).bool(message.finalized);
    }
    if (message.requestedBlock !== BigInt(0)) {
      writer.uint32(32).int64(message.requestedBlock);
    }
    if (message.sharedStateId !== "") {
      writer.uint32(42).string(message.sharedStateId);
    }
    if (message.chainId !== "") {
      writer.uint32(50).string(message.chainId);
    }
    if (message.seenBlock !== BigInt(0)) {
      writer.uint32(56).int64(message.seenBlock);
    }
    for (const v of message.blocksHashesToHeights) {
      BlockHashToHeight.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayCacheGet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayCacheGet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestHash = reader.bytes();
          break;
        case 2:
          message.blockHash = reader.bytes();
          break;
        case 3:
          message.finalized = reader.bool();
          break;
        case 4:
          message.requestedBlock = reader.int64();
          break;
        case 5:
          message.sharedStateId = reader.string();
          break;
        case 6:
          message.chainId = reader.string();
          break;
        case 7:
          message.seenBlock = reader.int64();
          break;
        case 8:
          message.blocksHashesToHeights.push(BlockHashToHeight.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RelayCacheGet {
    return {
      requestHash: isSet(object.requestHash) ? bytesFromBase64(object.requestHash) : new Uint8Array(),
      blockHash: isSet(object.blockHash) ? bytesFromBase64(object.blockHash) : new Uint8Array(),
      finalized: isSet(object.finalized) ? Boolean(object.finalized) : false,
      requestedBlock: isSet(object.requestedBlock) ? BigInt(object.requestedBlock.toString()) : BigInt(0),
      sharedStateId: isSet(object.sharedStateId) ? String(object.sharedStateId) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      seenBlock: isSet(object.seenBlock) ? BigInt(object.seenBlock.toString()) : BigInt(0),
      blocksHashesToHeights: Array.isArray(object?.blocksHashesToHeights) ? object.blocksHashesToHeights.map((e: any) => BlockHashToHeight.fromJSON(e)) : []
    };
  },
  toJSON(message: RelayCacheGet): JsonSafe<RelayCacheGet> {
    const obj: any = {};
    message.requestHash !== undefined && (obj.requestHash = base64FromBytes(message.requestHash !== undefined ? message.requestHash : new Uint8Array()));
    message.blockHash !== undefined && (obj.blockHash = base64FromBytes(message.blockHash !== undefined ? message.blockHash : new Uint8Array()));
    message.finalized !== undefined && (obj.finalized = message.finalized);
    message.requestedBlock !== undefined && (obj.requestedBlock = (message.requestedBlock || BigInt(0)).toString());
    message.sharedStateId !== undefined && (obj.sharedStateId = message.sharedStateId);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.seenBlock !== undefined && (obj.seenBlock = (message.seenBlock || BigInt(0)).toString());
    if (message.blocksHashesToHeights) {
      obj.blocksHashesToHeights = message.blocksHashesToHeights.map(e => e ? BlockHashToHeight.toJSON(e) : undefined);
    } else {
      obj.blocksHashesToHeights = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RelayCacheGet>, I>>(object: I): RelayCacheGet {
    const message = createBaseRelayCacheGet();
    message.requestHash = object.requestHash ?? new Uint8Array();
    message.blockHash = object.blockHash ?? new Uint8Array();
    message.finalized = object.finalized ?? false;
    message.requestedBlock = object.requestedBlock !== undefined && object.requestedBlock !== null ? BigInt(object.requestedBlock.toString()) : BigInt(0);
    message.sharedStateId = object.sharedStateId ?? "";
    message.chainId = object.chainId ?? "";
    message.seenBlock = object.seenBlock !== undefined && object.seenBlock !== null ? BigInt(object.seenBlock.toString()) : BigInt(0);
    message.blocksHashesToHeights = object.blocksHashesToHeights?.map(e => BlockHashToHeight.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RelayCacheGetAmino): RelayCacheGet {
    const message = createBaseRelayCacheGet();
    if (object.request_hash !== undefined && object.request_hash !== null) {
      message.requestHash = bytesFromBase64(object.request_hash);
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.blockHash = bytesFromBase64(object.block_hash);
    }
    if (object.finalized !== undefined && object.finalized !== null) {
      message.finalized = object.finalized;
    }
    if (object.requested_block !== undefined && object.requested_block !== null) {
      message.requestedBlock = BigInt(object.requested_block);
    }
    if (object.shared_state_id !== undefined && object.shared_state_id !== null) {
      message.sharedStateId = object.shared_state_id;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.seen_block !== undefined && object.seen_block !== null) {
      message.seenBlock = BigInt(object.seen_block);
    }
    message.blocksHashesToHeights = object.blocks_hashes_to_heights?.map(e => BlockHashToHeight.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RelayCacheGet): RelayCacheGetAmino {
    const obj: any = {};
    obj.request_hash = message.requestHash ? base64FromBytes(message.requestHash) : undefined;
    obj.block_hash = message.blockHash ? base64FromBytes(message.blockHash) : undefined;
    obj.finalized = message.finalized === false ? undefined : message.finalized;
    obj.requested_block = message.requestedBlock !== BigInt(0) ? (message.requestedBlock?.toString)() : undefined;
    obj.shared_state_id = message.sharedStateId === "" ? undefined : message.sharedStateId;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.seen_block = message.seenBlock !== BigInt(0) ? (message.seenBlock?.toString)() : undefined;
    if (message.blocksHashesToHeights) {
      obj.blocks_hashes_to_heights = message.blocksHashesToHeights.map(e => e ? BlockHashToHeight.toAmino(e) : undefined);
    } else {
      obj.blocks_hashes_to_heights = message.blocksHashesToHeights;
    }
    return obj;
  },
  fromAminoMsg(object: RelayCacheGetAminoMsg): RelayCacheGet {
    return RelayCacheGet.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayCacheGetProtoMsg): RelayCacheGet {
    return RelayCacheGet.decode(message.value);
  },
  toProto(message: RelayCacheGet): Uint8Array {
    return RelayCacheGet.encode(message).finish();
  },
  toProtoMsg(message: RelayCacheGet): RelayCacheGetProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.RelayCacheGet",
      value: RelayCacheGet.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RelayCacheGet.typeUrl, RelayCacheGet);
function createBaseRelayCacheSet(): RelayCacheSet {
  return {
    requestHash: new Uint8Array(),
    blockHash: new Uint8Array(),
    response: undefined,
    finalized: false,
    optionalMetadata: [],
    sharedStateId: "",
    requestedBlock: BigInt(0),
    chainId: "",
    seenBlock: BigInt(0),
    averageBlockTime: BigInt(0),
    isNodeError: false,
    blocksHashesToHeights: []
  };
}
export const RelayCacheSet = {
  typeUrl: "/lavanet.lava.pairing.RelayCacheSet",
  is(o: any): o is RelayCacheSet {
    return o && (o.$typeUrl === RelayCacheSet.typeUrl || (o.requestHash instanceof Uint8Array || typeof o.requestHash === "string") && (o.blockHash instanceof Uint8Array || typeof o.blockHash === "string") && typeof o.finalized === "boolean" && Array.isArray(o.optionalMetadata) && (!o.optionalMetadata.length || Metadata.is(o.optionalMetadata[0])) && typeof o.sharedStateId === "string" && typeof o.requestedBlock === "bigint" && typeof o.chainId === "string" && typeof o.seenBlock === "bigint" && typeof o.averageBlockTime === "bigint" && typeof o.isNodeError === "boolean" && Array.isArray(o.blocksHashesToHeights) && (!o.blocksHashesToHeights.length || BlockHashToHeight.is(o.blocksHashesToHeights[0])));
  },
  isSDK(o: any): o is RelayCacheSetSDKType {
    return o && (o.$typeUrl === RelayCacheSet.typeUrl || (o.request_hash instanceof Uint8Array || typeof o.request_hash === "string") && (o.block_hash instanceof Uint8Array || typeof o.block_hash === "string") && typeof o.finalized === "boolean" && Array.isArray(o.optional_metadata) && (!o.optional_metadata.length || Metadata.isSDK(o.optional_metadata[0])) && typeof o.shared_state_id === "string" && typeof o.requested_block === "bigint" && typeof o.chain_id === "string" && typeof o.seen_block === "bigint" && typeof o.average_block_time === "bigint" && typeof o.is_node_error === "boolean" && Array.isArray(o.blocks_hashes_to_heights) && (!o.blocks_hashes_to_heights.length || BlockHashToHeight.isSDK(o.blocks_hashes_to_heights[0])));
  },
  isAmino(o: any): o is RelayCacheSetAmino {
    return o && (o.$typeUrl === RelayCacheSet.typeUrl || (o.request_hash instanceof Uint8Array || typeof o.request_hash === "string") && (o.block_hash instanceof Uint8Array || typeof o.block_hash === "string") && typeof o.finalized === "boolean" && Array.isArray(o.optional_metadata) && (!o.optional_metadata.length || Metadata.isAmino(o.optional_metadata[0])) && typeof o.shared_state_id === "string" && typeof o.requested_block === "bigint" && typeof o.chain_id === "string" && typeof o.seen_block === "bigint" && typeof o.average_block_time === "bigint" && typeof o.is_node_error === "boolean" && Array.isArray(o.blocks_hashes_to_heights) && (!o.blocks_hashes_to_heights.length || BlockHashToHeight.isAmino(o.blocks_hashes_to_heights[0])));
  },
  encode(message: RelayCacheSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestHash.length !== 0) {
      writer.uint32(10).bytes(message.requestHash);
    }
    if (message.blockHash.length !== 0) {
      writer.uint32(18).bytes(message.blockHash);
    }
    if (message.response !== undefined) {
      RelayReply.encode(message.response, writer.uint32(26).fork()).ldelim();
    }
    if (message.finalized === true) {
      writer.uint32(32).bool(message.finalized);
    }
    for (const v of message.optionalMetadata) {
      Metadata.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.sharedStateId !== "") {
      writer.uint32(50).string(message.sharedStateId);
    }
    if (message.requestedBlock !== BigInt(0)) {
      writer.uint32(56).int64(message.requestedBlock);
    }
    if (message.chainId !== "") {
      writer.uint32(74).string(message.chainId);
    }
    if (message.seenBlock !== BigInt(0)) {
      writer.uint32(80).int64(message.seenBlock);
    }
    if (message.averageBlockTime !== BigInt(0)) {
      writer.uint32(88).int64(message.averageBlockTime);
    }
    if (message.isNodeError === true) {
      writer.uint32(96).bool(message.isNodeError);
    }
    for (const v of message.blocksHashesToHeights) {
      BlockHashToHeight.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayCacheSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayCacheSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestHash = reader.bytes();
          break;
        case 2:
          message.blockHash = reader.bytes();
          break;
        case 3:
          message.response = RelayReply.decode(reader, reader.uint32());
          break;
        case 4:
          message.finalized = reader.bool();
          break;
        case 5:
          message.optionalMetadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        case 6:
          message.sharedStateId = reader.string();
          break;
        case 7:
          message.requestedBlock = reader.int64();
          break;
        case 9:
          message.chainId = reader.string();
          break;
        case 10:
          message.seenBlock = reader.int64();
          break;
        case 11:
          message.averageBlockTime = reader.int64();
          break;
        case 12:
          message.isNodeError = reader.bool();
          break;
        case 13:
          message.blocksHashesToHeights.push(BlockHashToHeight.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RelayCacheSet {
    return {
      requestHash: isSet(object.requestHash) ? bytesFromBase64(object.requestHash) : new Uint8Array(),
      blockHash: isSet(object.blockHash) ? bytesFromBase64(object.blockHash) : new Uint8Array(),
      response: isSet(object.response) ? RelayReply.fromJSON(object.response) : undefined,
      finalized: isSet(object.finalized) ? Boolean(object.finalized) : false,
      optionalMetadata: Array.isArray(object?.optionalMetadata) ? object.optionalMetadata.map((e: any) => Metadata.fromJSON(e)) : [],
      sharedStateId: isSet(object.sharedStateId) ? String(object.sharedStateId) : "",
      requestedBlock: isSet(object.requestedBlock) ? BigInt(object.requestedBlock.toString()) : BigInt(0),
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      seenBlock: isSet(object.seenBlock) ? BigInt(object.seenBlock.toString()) : BigInt(0),
      averageBlockTime: isSet(object.averageBlockTime) ? BigInt(object.averageBlockTime.toString()) : BigInt(0),
      isNodeError: isSet(object.isNodeError) ? Boolean(object.isNodeError) : false,
      blocksHashesToHeights: Array.isArray(object?.blocksHashesToHeights) ? object.blocksHashesToHeights.map((e: any) => BlockHashToHeight.fromJSON(e)) : []
    };
  },
  toJSON(message: RelayCacheSet): JsonSafe<RelayCacheSet> {
    const obj: any = {};
    message.requestHash !== undefined && (obj.requestHash = base64FromBytes(message.requestHash !== undefined ? message.requestHash : new Uint8Array()));
    message.blockHash !== undefined && (obj.blockHash = base64FromBytes(message.blockHash !== undefined ? message.blockHash : new Uint8Array()));
    message.response !== undefined && (obj.response = message.response ? RelayReply.toJSON(message.response) : undefined);
    message.finalized !== undefined && (obj.finalized = message.finalized);
    if (message.optionalMetadata) {
      obj.optionalMetadata = message.optionalMetadata.map(e => e ? Metadata.toJSON(e) : undefined);
    } else {
      obj.optionalMetadata = [];
    }
    message.sharedStateId !== undefined && (obj.sharedStateId = message.sharedStateId);
    message.requestedBlock !== undefined && (obj.requestedBlock = (message.requestedBlock || BigInt(0)).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.seenBlock !== undefined && (obj.seenBlock = (message.seenBlock || BigInt(0)).toString());
    message.averageBlockTime !== undefined && (obj.averageBlockTime = (message.averageBlockTime || BigInt(0)).toString());
    message.isNodeError !== undefined && (obj.isNodeError = message.isNodeError);
    if (message.blocksHashesToHeights) {
      obj.blocksHashesToHeights = message.blocksHashesToHeights.map(e => e ? BlockHashToHeight.toJSON(e) : undefined);
    } else {
      obj.blocksHashesToHeights = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RelayCacheSet>, I>>(object: I): RelayCacheSet {
    const message = createBaseRelayCacheSet();
    message.requestHash = object.requestHash ?? new Uint8Array();
    message.blockHash = object.blockHash ?? new Uint8Array();
    message.response = object.response !== undefined && object.response !== null ? RelayReply.fromPartial(object.response) : undefined;
    message.finalized = object.finalized ?? false;
    message.optionalMetadata = object.optionalMetadata?.map(e => Metadata.fromPartial(e)) || [];
    message.sharedStateId = object.sharedStateId ?? "";
    message.requestedBlock = object.requestedBlock !== undefined && object.requestedBlock !== null ? BigInt(object.requestedBlock.toString()) : BigInt(0);
    message.chainId = object.chainId ?? "";
    message.seenBlock = object.seenBlock !== undefined && object.seenBlock !== null ? BigInt(object.seenBlock.toString()) : BigInt(0);
    message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? BigInt(object.averageBlockTime.toString()) : BigInt(0);
    message.isNodeError = object.isNodeError ?? false;
    message.blocksHashesToHeights = object.blocksHashesToHeights?.map(e => BlockHashToHeight.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RelayCacheSetAmino): RelayCacheSet {
    const message = createBaseRelayCacheSet();
    if (object.request_hash !== undefined && object.request_hash !== null) {
      message.requestHash = bytesFromBase64(object.request_hash);
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.blockHash = bytesFromBase64(object.block_hash);
    }
    if (object.response !== undefined && object.response !== null) {
      message.response = RelayReply.fromAmino(object.response);
    }
    if (object.finalized !== undefined && object.finalized !== null) {
      message.finalized = object.finalized;
    }
    message.optionalMetadata = object.optional_metadata?.map(e => Metadata.fromAmino(e)) || [];
    if (object.shared_state_id !== undefined && object.shared_state_id !== null) {
      message.sharedStateId = object.shared_state_id;
    }
    if (object.requested_block !== undefined && object.requested_block !== null) {
      message.requestedBlock = BigInt(object.requested_block);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.seen_block !== undefined && object.seen_block !== null) {
      message.seenBlock = BigInt(object.seen_block);
    }
    if (object.average_block_time !== undefined && object.average_block_time !== null) {
      message.averageBlockTime = BigInt(object.average_block_time);
    }
    if (object.is_node_error !== undefined && object.is_node_error !== null) {
      message.isNodeError = object.is_node_error;
    }
    message.blocksHashesToHeights = object.blocks_hashes_to_heights?.map(e => BlockHashToHeight.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RelayCacheSet): RelayCacheSetAmino {
    const obj: any = {};
    obj.request_hash = message.requestHash ? base64FromBytes(message.requestHash) : undefined;
    obj.block_hash = message.blockHash ? base64FromBytes(message.blockHash) : undefined;
    obj.response = message.response ? RelayReply.toAmino(message.response) : undefined;
    obj.finalized = message.finalized === false ? undefined : message.finalized;
    if (message.optionalMetadata) {
      obj.optional_metadata = message.optionalMetadata.map(e => e ? Metadata.toAmino(e) : undefined);
    } else {
      obj.optional_metadata = message.optionalMetadata;
    }
    obj.shared_state_id = message.sharedStateId === "" ? undefined : message.sharedStateId;
    obj.requested_block = message.requestedBlock !== BigInt(0) ? (message.requestedBlock?.toString)() : undefined;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.seen_block = message.seenBlock !== BigInt(0) ? (message.seenBlock?.toString)() : undefined;
    obj.average_block_time = message.averageBlockTime !== BigInt(0) ? (message.averageBlockTime?.toString)() : undefined;
    obj.is_node_error = message.isNodeError === false ? undefined : message.isNodeError;
    if (message.blocksHashesToHeights) {
      obj.blocks_hashes_to_heights = message.blocksHashesToHeights.map(e => e ? BlockHashToHeight.toAmino(e) : undefined);
    } else {
      obj.blocks_hashes_to_heights = message.blocksHashesToHeights;
    }
    return obj;
  },
  fromAminoMsg(object: RelayCacheSetAminoMsg): RelayCacheSet {
    return RelayCacheSet.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayCacheSetProtoMsg): RelayCacheSet {
    return RelayCacheSet.decode(message.value);
  },
  toProto(message: RelayCacheSet): Uint8Array {
    return RelayCacheSet.encode(message).finish();
  },
  toProtoMsg(message: RelayCacheSet): RelayCacheSetProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.RelayCacheSet",
      value: RelayCacheSet.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RelayCacheSet.typeUrl, RelayCacheSet);
function createBaseBlockHashToHeight(): BlockHashToHeight {
  return {
    hash: "",
    height: BigInt(0)
  };
}
export const BlockHashToHeight = {
  typeUrl: "/lavanet.lava.pairing.BlockHashToHeight",
  is(o: any): o is BlockHashToHeight {
    return o && (o.$typeUrl === BlockHashToHeight.typeUrl || typeof o.hash === "string" && typeof o.height === "bigint");
  },
  isSDK(o: any): o is BlockHashToHeightSDKType {
    return o && (o.$typeUrl === BlockHashToHeight.typeUrl || typeof o.hash === "string" && typeof o.height === "bigint");
  },
  isAmino(o: any): o is BlockHashToHeightAmino {
    return o && (o.$typeUrl === BlockHashToHeight.typeUrl || typeof o.hash === "string" && typeof o.height === "bigint");
  },
  encode(message: BlockHashToHeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockHashToHeight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockHashToHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockHashToHeight {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  toJSON(message: BlockHashToHeight): JsonSafe<BlockHashToHeight> {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BlockHashToHeight>, I>>(object: I): BlockHashToHeight {
    const message = createBaseBlockHashToHeight();
    message.hash = object.hash ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BlockHashToHeightAmino): BlockHashToHeight {
    const message = createBaseBlockHashToHeight();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: BlockHashToHeight): BlockHashToHeightAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    obj.height = message.height !== BigInt(0) ? (message.height?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockHashToHeightAminoMsg): BlockHashToHeight {
    return BlockHashToHeight.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockHashToHeightProtoMsg): BlockHashToHeight {
    return BlockHashToHeight.decode(message.value);
  },
  toProto(message: BlockHashToHeight): Uint8Array {
    return BlockHashToHeight.encode(message).finish();
  },
  toProtoMsg(message: BlockHashToHeight): BlockHashToHeightProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.BlockHashToHeight",
      value: BlockHashToHeight.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BlockHashToHeight.typeUrl, BlockHashToHeight);