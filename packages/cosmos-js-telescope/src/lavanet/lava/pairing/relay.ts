//@ts-nocheck
import { StakeEntry, StakeEntryAmino, StakeEntrySDKType } from "../epochstorage/stake_entry";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface ProbeRequest {
  guid: bigint;
  specId: string;
  apiInterface: string;
}
export interface ProbeRequestProtoMsg {
  typeUrl: "/lavanet.lava.pairing.ProbeRequest";
  value: Uint8Array;
}
export interface ProbeRequestAmino {
  guid?: string;
  spec_id?: string;
  api_interface?: string;
}
export interface ProbeRequestAminoMsg {
  type: "/lavanet.lava.pairing.ProbeRequest";
  value: ProbeRequestAmino;
}
export interface ProbeRequestSDKType {
  guid: bigint;
  spec_id: string;
  api_interface: string;
}
export interface ProbeReply {
  guid: bigint;
  latestBlock: bigint;
  finalizedBlocksHashes: Uint8Array;
  lavaEpoch: bigint;
  lavaLatestBlock: bigint;
}
export interface ProbeReplyProtoMsg {
  typeUrl: "/lavanet.lava.pairing.ProbeReply";
  value: Uint8Array;
}
export interface ProbeReplyAmino {
  guid?: string;
  latest_block?: string;
  finalized_blocks_hashes?: string;
  lava_epoch?: string;
  lava_latest_block?: string;
}
export interface ProbeReplyAminoMsg {
  type: "/lavanet.lava.pairing.ProbeReply";
  value: ProbeReplyAmino;
}
export interface ProbeReplySDKType {
  guid: bigint;
  latest_block: bigint;
  finalized_blocks_hashes: Uint8Array;
  lava_epoch: bigint;
  lava_latest_block: bigint;
}
export interface RelaySession {
  specId: string;
  contentHash: Uint8Array;
  sessionId: bigint;
  /** total compute unit used including this relay */
  cuSum: bigint;
  provider: string;
  relayNum: bigint;
  qosReport?: QualityOfServiceReport;
  epoch: bigint;
  /** sdk needs the suffix _list for repeated fields */
  unresponsiveProviders: ReportedProvider[];
  lavaChainId: string;
  sig: Uint8Array;
  badge?: Badge;
  qosExcellenceReport?: QualityOfServiceReport;
}
export interface RelaySessionProtoMsg {
  typeUrl: "/lavanet.lava.pairing.RelaySession";
  value: Uint8Array;
}
export interface RelaySessionAmino {
  spec_id?: string;
  content_hash?: string;
  session_id?: string;
  /** total compute unit used including this relay */
  cu_sum?: string;
  provider?: string;
  relay_num?: string;
  qos_report?: QualityOfServiceReportAmino;
  epoch?: string;
  /** sdk needs the suffix _list for repeated fields */
  unresponsive_providers?: ReportedProviderAmino[];
  lava_chain_id?: string;
  sig?: string;
  badge?: BadgeAmino;
  qos_excellence_report?: QualityOfServiceReportAmino;
}
export interface RelaySessionAminoMsg {
  type: "/lavanet.lava.pairing.RelaySession";
  value: RelaySessionAmino;
}
export interface RelaySessionSDKType {
  spec_id: string;
  content_hash: Uint8Array;
  session_id: bigint;
  cu_sum: bigint;
  provider: string;
  relay_num: bigint;
  qos_report?: QualityOfServiceReportSDKType;
  epoch: bigint;
  unresponsive_providers: ReportedProviderSDKType[];
  lava_chain_id: string;
  sig: Uint8Array;
  badge?: BadgeSDKType;
  qos_excellence_report?: QualityOfServiceReportSDKType;
}
export interface Badge {
  cuAllocation: bigint;
  epoch: bigint;
  address: string;
  lavaChainId: string;
  projectSig: Uint8Array;
  virtualEpoch: bigint;
}
export interface BadgeProtoMsg {
  typeUrl: "/lavanet.lava.pairing.Badge";
  value: Uint8Array;
}
export interface BadgeAmino {
  cu_allocation?: string;
  epoch?: string;
  address?: string;
  lava_chain_id?: string;
  project_sig?: string;
  virtual_epoch?: string;
}
export interface BadgeAminoMsg {
  type: "/lavanet.lava.pairing.Badge";
  value: BadgeAmino;
}
export interface BadgeSDKType {
  cu_allocation: bigint;
  epoch: bigint;
  address: string;
  lava_chain_id: string;
  project_sig: Uint8Array;
  virtual_epoch: bigint;
}
export interface RelayPrivateData {
  connectionType: string;
  /** some relays have associated urls that are filled with params ('/block/{height}') */
  apiUrl: string;
  data: Uint8Array;
  requestBlock: bigint;
  apiInterface: string;
  salt: Uint8Array;
  metadata: Metadata[];
  addon: string;
  extensions: string[];
  seenBlock: bigint;
}
export interface RelayPrivateDataProtoMsg {
  typeUrl: "/lavanet.lava.pairing.RelayPrivateData";
  value: Uint8Array;
}
export interface RelayPrivateDataAmino {
  connection_type?: string;
  /** some relays have associated urls that are filled with params ('/block/{height}') */
  api_url?: string;
  data?: string;
  request_block?: string;
  api_interface?: string;
  salt?: string;
  metadata?: MetadataAmino[];
  addon?: string;
  extensions?: string[];
  seen_block?: string;
}
export interface RelayPrivateDataAminoMsg {
  type: "/lavanet.lava.pairing.RelayPrivateData";
  value: RelayPrivateDataAmino;
}
export interface RelayPrivateDataSDKType {
  connection_type: string;
  api_url: string;
  data: Uint8Array;
  request_block: bigint;
  api_interface: string;
  salt: Uint8Array;
  metadata: MetadataSDKType[];
  addon: string;
  extensions: string[];
  seen_block: bigint;
}
export interface ReportedProvider {
  address: string;
  disconnections: bigint;
  errors: bigint;
  timestampS: bigint;
}
export interface ReportedProviderProtoMsg {
  typeUrl: "/lavanet.lava.pairing.ReportedProvider";
  value: Uint8Array;
}
export interface ReportedProviderAmino {
  address?: string;
  disconnections?: string;
  errors?: string;
  timestamp_s?: string;
}
export interface ReportedProviderAminoMsg {
  type: "/lavanet.lava.pairing.ReportedProvider";
  value: ReportedProviderAmino;
}
export interface ReportedProviderSDKType {
  address: string;
  disconnections: bigint;
  errors: bigint;
  timestamp_s: bigint;
}
export interface Metadata {
  name: string;
  value: string;
}
export interface MetadataProtoMsg {
  typeUrl: "/lavanet.lava.pairing.Metadata";
  value: Uint8Array;
}
export interface MetadataAmino {
  name?: string;
  value?: string;
}
export interface MetadataAminoMsg {
  type: "/lavanet.lava.pairing.Metadata";
  value: MetadataAmino;
}
export interface MetadataSDKType {
  name: string;
  value: string;
}
export interface RelayRequest {
  relaySession?: RelaySession;
  relayData?: RelayPrivateData;
}
export interface RelayRequestProtoMsg {
  typeUrl: "/lavanet.lava.pairing.RelayRequest";
  value: Uint8Array;
}
export interface RelayRequestAmino {
  relay_session?: RelaySessionAmino;
  relay_data?: RelayPrivateDataAmino;
}
export interface RelayRequestAminoMsg {
  type: "/lavanet.lava.pairing.RelayRequest";
  value: RelayRequestAmino;
}
export interface RelayRequestSDKType {
  relay_session?: RelaySessionSDKType;
  relay_data?: RelayPrivateDataSDKType;
}
export interface RelayReply {
  data: Uint8Array;
  sig: Uint8Array;
  latestBlock: bigint;
  finalizedBlocksHashes: Uint8Array;
  sigBlocks: Uint8Array;
  metadata: Metadata[];
}
export interface RelayReplyProtoMsg {
  typeUrl: "/lavanet.lava.pairing.RelayReply";
  value: Uint8Array;
}
export interface RelayReplyAmino {
  data?: string;
  sig?: string;
  latest_block?: string;
  finalized_blocks_hashes?: string;
  sig_blocks?: string;
  metadata?: MetadataAmino[];
}
export interface RelayReplyAminoMsg {
  type: "/lavanet.lava.pairing.RelayReply";
  value: RelayReplyAmino;
}
export interface RelayReplySDKType {
  data: Uint8Array;
  sig: Uint8Array;
  latest_block: bigint;
  finalized_blocks_hashes: Uint8Array;
  sig_blocks: Uint8Array;
  metadata: MetadataSDKType[];
}
export interface QualityOfServiceReport {
  latency: string;
  availability: string;
  sync: string;
}
export interface QualityOfServiceReportProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QualityOfServiceReport";
  value: Uint8Array;
}
export interface QualityOfServiceReportAmino {
  latency?: string;
  availability?: string;
  sync?: string;
}
export interface QualityOfServiceReportAminoMsg {
  type: "/lavanet.lava.pairing.QualityOfServiceReport";
  value: QualityOfServiceReportAmino;
}
export interface QualityOfServiceReportSDKType {
  latency: string;
  availability: string;
  sync: string;
}
export interface PairingRelayCache {
  entries: StakeEntry[];
  allowedCu: bigint;
}
export interface PairingRelayCacheProtoMsg {
  typeUrl: "/lavanet.lava.pairing.PairingRelayCache";
  value: Uint8Array;
}
export interface PairingRelayCacheAmino {
  entries?: StakeEntryAmino[];
  allowed_cu?: string;
}
export interface PairingRelayCacheAminoMsg {
  type: "/lavanet.lava.pairing.PairingRelayCache";
  value: PairingRelayCacheAmino;
}
export interface PairingRelayCacheSDKType {
  entries: StakeEntrySDKType[];
  allowed_cu: bigint;
}
function createBaseProbeRequest(): ProbeRequest {
  return {
    guid: BigInt(0),
    specId: "",
    apiInterface: ""
  };
}
export const ProbeRequest = {
  typeUrl: "/lavanet.lava.pairing.ProbeRequest",
  is(o: any): o is ProbeRequest {
    return o && (o.$typeUrl === ProbeRequest.typeUrl || typeof o.guid === "bigint" && typeof o.specId === "string" && typeof o.apiInterface === "string");
  },
  isSDK(o: any): o is ProbeRequestSDKType {
    return o && (o.$typeUrl === ProbeRequest.typeUrl || typeof o.guid === "bigint" && typeof o.spec_id === "string" && typeof o.api_interface === "string");
  },
  isAmino(o: any): o is ProbeRequestAmino {
    return o && (o.$typeUrl === ProbeRequest.typeUrl || typeof o.guid === "bigint" && typeof o.spec_id === "string" && typeof o.api_interface === "string");
  },
  encode(message: ProbeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.guid !== BigInt(0)) {
      writer.uint32(8).uint64(message.guid);
    }
    if (message.specId !== "") {
      writer.uint32(18).string(message.specId);
    }
    if (message.apiInterface !== "") {
      writer.uint32(26).string(message.apiInterface);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProbeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProbeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guid = reader.uint64();
          break;
        case 2:
          message.specId = reader.string();
          break;
        case 3:
          message.apiInterface = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProbeRequest {
    return {
      guid: isSet(object.guid) ? BigInt(object.guid.toString()) : BigInt(0),
      specId: isSet(object.specId) ? String(object.specId) : "",
      apiInterface: isSet(object.apiInterface) ? String(object.apiInterface) : ""
    };
  },
  toJSON(message: ProbeRequest): JsonSafe<ProbeRequest> {
    const obj: any = {};
    message.guid !== undefined && (obj.guid = (message.guid || BigInt(0)).toString());
    message.specId !== undefined && (obj.specId = message.specId);
    message.apiInterface !== undefined && (obj.apiInterface = message.apiInterface);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProbeRequest>, I>>(object: I): ProbeRequest {
    const message = createBaseProbeRequest();
    message.guid = object.guid !== undefined && object.guid !== null ? BigInt(object.guid.toString()) : BigInt(0);
    message.specId = object.specId ?? "";
    message.apiInterface = object.apiInterface ?? "";
    return message;
  },
  fromAmino(object: ProbeRequestAmino): ProbeRequest {
    const message = createBaseProbeRequest();
    if (object.guid !== undefined && object.guid !== null) {
      message.guid = BigInt(object.guid);
    }
    if (object.spec_id !== undefined && object.spec_id !== null) {
      message.specId = object.spec_id;
    }
    if (object.api_interface !== undefined && object.api_interface !== null) {
      message.apiInterface = object.api_interface;
    }
    return message;
  },
  toAmino(message: ProbeRequest): ProbeRequestAmino {
    const obj: any = {};
    obj.guid = message.guid !== BigInt(0) ? (message.guid?.toString)() : undefined;
    obj.spec_id = message.specId === "" ? undefined : message.specId;
    obj.api_interface = message.apiInterface === "" ? undefined : message.apiInterface;
    return obj;
  },
  fromAminoMsg(object: ProbeRequestAminoMsg): ProbeRequest {
    return ProbeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ProbeRequestProtoMsg): ProbeRequest {
    return ProbeRequest.decode(message.value);
  },
  toProto(message: ProbeRequest): Uint8Array {
    return ProbeRequest.encode(message).finish();
  },
  toProtoMsg(message: ProbeRequest): ProbeRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ProbeRequest",
      value: ProbeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProbeRequest.typeUrl, ProbeRequest);
function createBaseProbeReply(): ProbeReply {
  return {
    guid: BigInt(0),
    latestBlock: BigInt(0),
    finalizedBlocksHashes: new Uint8Array(),
    lavaEpoch: BigInt(0),
    lavaLatestBlock: BigInt(0)
  };
}
export const ProbeReply = {
  typeUrl: "/lavanet.lava.pairing.ProbeReply",
  is(o: any): o is ProbeReply {
    return o && (o.$typeUrl === ProbeReply.typeUrl || typeof o.guid === "bigint" && typeof o.latestBlock === "bigint" && (o.finalizedBlocksHashes instanceof Uint8Array || typeof o.finalizedBlocksHashes === "string") && typeof o.lavaEpoch === "bigint" && typeof o.lavaLatestBlock === "bigint");
  },
  isSDK(o: any): o is ProbeReplySDKType {
    return o && (o.$typeUrl === ProbeReply.typeUrl || typeof o.guid === "bigint" && typeof o.latest_block === "bigint" && (o.finalized_blocks_hashes instanceof Uint8Array || typeof o.finalized_blocks_hashes === "string") && typeof o.lava_epoch === "bigint" && typeof o.lava_latest_block === "bigint");
  },
  isAmino(o: any): o is ProbeReplyAmino {
    return o && (o.$typeUrl === ProbeReply.typeUrl || typeof o.guid === "bigint" && typeof o.latest_block === "bigint" && (o.finalized_blocks_hashes instanceof Uint8Array || typeof o.finalized_blocks_hashes === "string") && typeof o.lava_epoch === "bigint" && typeof o.lava_latest_block === "bigint");
  },
  encode(message: ProbeReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.guid !== BigInt(0)) {
      writer.uint32(8).uint64(message.guid);
    }
    if (message.latestBlock !== BigInt(0)) {
      writer.uint32(16).int64(message.latestBlock);
    }
    if (message.finalizedBlocksHashes.length !== 0) {
      writer.uint32(26).bytes(message.finalizedBlocksHashes);
    }
    if (message.lavaEpoch !== BigInt(0)) {
      writer.uint32(32).uint64(message.lavaEpoch);
    }
    if (message.lavaLatestBlock !== BigInt(0)) {
      writer.uint32(40).uint64(message.lavaLatestBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProbeReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProbeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guid = reader.uint64();
          break;
        case 2:
          message.latestBlock = reader.int64();
          break;
        case 3:
          message.finalizedBlocksHashes = reader.bytes();
          break;
        case 4:
          message.lavaEpoch = reader.uint64();
          break;
        case 5:
          message.lavaLatestBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProbeReply {
    return {
      guid: isSet(object.guid) ? BigInt(object.guid.toString()) : BigInt(0),
      latestBlock: isSet(object.latestBlock) ? BigInt(object.latestBlock.toString()) : BigInt(0),
      finalizedBlocksHashes: isSet(object.finalizedBlocksHashes) ? bytesFromBase64(object.finalizedBlocksHashes) : new Uint8Array(),
      lavaEpoch: isSet(object.lavaEpoch) ? BigInt(object.lavaEpoch.toString()) : BigInt(0),
      lavaLatestBlock: isSet(object.lavaLatestBlock) ? BigInt(object.lavaLatestBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: ProbeReply): JsonSafe<ProbeReply> {
    const obj: any = {};
    message.guid !== undefined && (obj.guid = (message.guid || BigInt(0)).toString());
    message.latestBlock !== undefined && (obj.latestBlock = (message.latestBlock || BigInt(0)).toString());
    message.finalizedBlocksHashes !== undefined && (obj.finalizedBlocksHashes = base64FromBytes(message.finalizedBlocksHashes !== undefined ? message.finalizedBlocksHashes : new Uint8Array()));
    message.lavaEpoch !== undefined && (obj.lavaEpoch = (message.lavaEpoch || BigInt(0)).toString());
    message.lavaLatestBlock !== undefined && (obj.lavaLatestBlock = (message.lavaLatestBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProbeReply>, I>>(object: I): ProbeReply {
    const message = createBaseProbeReply();
    message.guid = object.guid !== undefined && object.guid !== null ? BigInt(object.guid.toString()) : BigInt(0);
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? BigInt(object.latestBlock.toString()) : BigInt(0);
    message.finalizedBlocksHashes = object.finalizedBlocksHashes ?? new Uint8Array();
    message.lavaEpoch = object.lavaEpoch !== undefined && object.lavaEpoch !== null ? BigInt(object.lavaEpoch.toString()) : BigInt(0);
    message.lavaLatestBlock = object.lavaLatestBlock !== undefined && object.lavaLatestBlock !== null ? BigInt(object.lavaLatestBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProbeReplyAmino): ProbeReply {
    const message = createBaseProbeReply();
    if (object.guid !== undefined && object.guid !== null) {
      message.guid = BigInt(object.guid);
    }
    if (object.latest_block !== undefined && object.latest_block !== null) {
      message.latestBlock = BigInt(object.latest_block);
    }
    if (object.finalized_blocks_hashes !== undefined && object.finalized_blocks_hashes !== null) {
      message.finalizedBlocksHashes = bytesFromBase64(object.finalized_blocks_hashes);
    }
    if (object.lava_epoch !== undefined && object.lava_epoch !== null) {
      message.lavaEpoch = BigInt(object.lava_epoch);
    }
    if (object.lava_latest_block !== undefined && object.lava_latest_block !== null) {
      message.lavaLatestBlock = BigInt(object.lava_latest_block);
    }
    return message;
  },
  toAmino(message: ProbeReply): ProbeReplyAmino {
    const obj: any = {};
    obj.guid = message.guid !== BigInt(0) ? (message.guid?.toString)() : undefined;
    obj.latest_block = message.latestBlock !== BigInt(0) ? (message.latestBlock?.toString)() : undefined;
    obj.finalized_blocks_hashes = message.finalizedBlocksHashes ? base64FromBytes(message.finalizedBlocksHashes) : undefined;
    obj.lava_epoch = message.lavaEpoch !== BigInt(0) ? (message.lavaEpoch?.toString)() : undefined;
    obj.lava_latest_block = message.lavaLatestBlock !== BigInt(0) ? (message.lavaLatestBlock?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProbeReplyAminoMsg): ProbeReply {
    return ProbeReply.fromAmino(object.value);
  },
  fromProtoMsg(message: ProbeReplyProtoMsg): ProbeReply {
    return ProbeReply.decode(message.value);
  },
  toProto(message: ProbeReply): Uint8Array {
    return ProbeReply.encode(message).finish();
  },
  toProtoMsg(message: ProbeReply): ProbeReplyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ProbeReply",
      value: ProbeReply.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProbeReply.typeUrl, ProbeReply);
function createBaseRelaySession(): RelaySession {
  return {
    specId: "",
    contentHash: new Uint8Array(),
    sessionId: BigInt(0),
    cuSum: BigInt(0),
    provider: "",
    relayNum: BigInt(0),
    qosReport: undefined,
    epoch: BigInt(0),
    unresponsiveProviders: [],
    lavaChainId: "",
    sig: new Uint8Array(),
    badge: undefined,
    qosExcellenceReport: undefined
  };
}
export const RelaySession = {
  typeUrl: "/lavanet.lava.pairing.RelaySession",
  is(o: any): o is RelaySession {
    return o && (o.$typeUrl === RelaySession.typeUrl || typeof o.specId === "string" && (o.contentHash instanceof Uint8Array || typeof o.contentHash === "string") && typeof o.sessionId === "bigint" && typeof o.cuSum === "bigint" && typeof o.provider === "string" && typeof o.relayNum === "bigint" && typeof o.epoch === "bigint" && Array.isArray(o.unresponsiveProviders) && (!o.unresponsiveProviders.length || ReportedProvider.is(o.unresponsiveProviders[0])) && typeof o.lavaChainId === "string" && (o.sig instanceof Uint8Array || typeof o.sig === "string"));
  },
  isSDK(o: any): o is RelaySessionSDKType {
    return o && (o.$typeUrl === RelaySession.typeUrl || typeof o.spec_id === "string" && (o.content_hash instanceof Uint8Array || typeof o.content_hash === "string") && typeof o.session_id === "bigint" && typeof o.cu_sum === "bigint" && typeof o.provider === "string" && typeof o.relay_num === "bigint" && typeof o.epoch === "bigint" && Array.isArray(o.unresponsive_providers) && (!o.unresponsive_providers.length || ReportedProvider.isSDK(o.unresponsive_providers[0])) && typeof o.lava_chain_id === "string" && (o.sig instanceof Uint8Array || typeof o.sig === "string"));
  },
  isAmino(o: any): o is RelaySessionAmino {
    return o && (o.$typeUrl === RelaySession.typeUrl || typeof o.spec_id === "string" && (o.content_hash instanceof Uint8Array || typeof o.content_hash === "string") && typeof o.session_id === "bigint" && typeof o.cu_sum === "bigint" && typeof o.provider === "string" && typeof o.relay_num === "bigint" && typeof o.epoch === "bigint" && Array.isArray(o.unresponsive_providers) && (!o.unresponsive_providers.length || ReportedProvider.isAmino(o.unresponsive_providers[0])) && typeof o.lava_chain_id === "string" && (o.sig instanceof Uint8Array || typeof o.sig === "string"));
  },
  encode(message: RelaySession, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.specId !== "") {
      writer.uint32(10).string(message.specId);
    }
    if (message.contentHash.length !== 0) {
      writer.uint32(18).bytes(message.contentHash);
    }
    if (message.sessionId !== BigInt(0)) {
      writer.uint32(24).uint64(message.sessionId);
    }
    if (message.cuSum !== BigInt(0)) {
      writer.uint32(32).uint64(message.cuSum);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    if (message.relayNum !== BigInt(0)) {
      writer.uint32(48).uint64(message.relayNum);
    }
    if (message.qosReport !== undefined) {
      QualityOfServiceReport.encode(message.qosReport, writer.uint32(58).fork()).ldelim();
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(64).int64(message.epoch);
    }
    for (const v of message.unresponsiveProviders) {
      ReportedProvider.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.lavaChainId !== "") {
      writer.uint32(82).string(message.lavaChainId);
    }
    if (message.sig.length !== 0) {
      writer.uint32(90).bytes(message.sig);
    }
    if (message.badge !== undefined) {
      Badge.encode(message.badge, writer.uint32(98).fork()).ldelim();
    }
    if (message.qosExcellenceReport !== undefined) {
      QualityOfServiceReport.encode(message.qosExcellenceReport, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelaySession {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelaySession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.specId = reader.string();
          break;
        case 2:
          message.contentHash = reader.bytes();
          break;
        case 3:
          message.sessionId = reader.uint64();
          break;
        case 4:
          message.cuSum = reader.uint64();
          break;
        case 5:
          message.provider = reader.string();
          break;
        case 6:
          message.relayNum = reader.uint64();
          break;
        case 7:
          message.qosReport = QualityOfServiceReport.decode(reader, reader.uint32());
          break;
        case 8:
          message.epoch = reader.int64();
          break;
        case 9:
          message.unresponsiveProviders.push(ReportedProvider.decode(reader, reader.uint32()));
          break;
        case 10:
          message.lavaChainId = reader.string();
          break;
        case 11:
          message.sig = reader.bytes();
          break;
        case 12:
          message.badge = Badge.decode(reader, reader.uint32());
          break;
        case 13:
          message.qosExcellenceReport = QualityOfServiceReport.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RelaySession {
    return {
      specId: isSet(object.specId) ? String(object.specId) : "",
      contentHash: isSet(object.contentHash) ? bytesFromBase64(object.contentHash) : new Uint8Array(),
      sessionId: isSet(object.sessionId) ? BigInt(object.sessionId.toString()) : BigInt(0),
      cuSum: isSet(object.cuSum) ? BigInt(object.cuSum.toString()) : BigInt(0),
      provider: isSet(object.provider) ? String(object.provider) : "",
      relayNum: isSet(object.relayNum) ? BigInt(object.relayNum.toString()) : BigInt(0),
      qosReport: isSet(object.qosReport) ? QualityOfServiceReport.fromJSON(object.qosReport) : undefined,
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      unresponsiveProviders: Array.isArray(object?.unresponsiveProviders) ? object.unresponsiveProviders.map((e: any) => ReportedProvider.fromJSON(e)) : [],
      lavaChainId: isSet(object.lavaChainId) ? String(object.lavaChainId) : "",
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(),
      badge: isSet(object.badge) ? Badge.fromJSON(object.badge) : undefined,
      qosExcellenceReport: isSet(object.qosExcellenceReport) ? QualityOfServiceReport.fromJSON(object.qosExcellenceReport) : undefined
    };
  },
  toJSON(message: RelaySession): JsonSafe<RelaySession> {
    const obj: any = {};
    message.specId !== undefined && (obj.specId = message.specId);
    message.contentHash !== undefined && (obj.contentHash = base64FromBytes(message.contentHash !== undefined ? message.contentHash : new Uint8Array()));
    message.sessionId !== undefined && (obj.sessionId = (message.sessionId || BigInt(0)).toString());
    message.cuSum !== undefined && (obj.cuSum = (message.cuSum || BigInt(0)).toString());
    message.provider !== undefined && (obj.provider = message.provider);
    message.relayNum !== undefined && (obj.relayNum = (message.relayNum || BigInt(0)).toString());
    message.qosReport !== undefined && (obj.qosReport = message.qosReport ? QualityOfServiceReport.toJSON(message.qosReport) : undefined);
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    if (message.unresponsiveProviders) {
      obj.unresponsiveProviders = message.unresponsiveProviders.map(e => e ? ReportedProvider.toJSON(e) : undefined);
    } else {
      obj.unresponsiveProviders = [];
    }
    message.lavaChainId !== undefined && (obj.lavaChainId = message.lavaChainId);
    message.sig !== undefined && (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
    message.badge !== undefined && (obj.badge = message.badge ? Badge.toJSON(message.badge) : undefined);
    message.qosExcellenceReport !== undefined && (obj.qosExcellenceReport = message.qosExcellenceReport ? QualityOfServiceReport.toJSON(message.qosExcellenceReport) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RelaySession>, I>>(object: I): RelaySession {
    const message = createBaseRelaySession();
    message.specId = object.specId ?? "";
    message.contentHash = object.contentHash ?? new Uint8Array();
    message.sessionId = object.sessionId !== undefined && object.sessionId !== null ? BigInt(object.sessionId.toString()) : BigInt(0);
    message.cuSum = object.cuSum !== undefined && object.cuSum !== null ? BigInt(object.cuSum.toString()) : BigInt(0);
    message.provider = object.provider ?? "";
    message.relayNum = object.relayNum !== undefined && object.relayNum !== null ? BigInt(object.relayNum.toString()) : BigInt(0);
    message.qosReport = object.qosReport !== undefined && object.qosReport !== null ? QualityOfServiceReport.fromPartial(object.qosReport) : undefined;
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.unresponsiveProviders = object.unresponsiveProviders?.map(e => ReportedProvider.fromPartial(e)) || [];
    message.lavaChainId = object.lavaChainId ?? "";
    message.sig = object.sig ?? new Uint8Array();
    message.badge = object.badge !== undefined && object.badge !== null ? Badge.fromPartial(object.badge) : undefined;
    message.qosExcellenceReport = object.qosExcellenceReport !== undefined && object.qosExcellenceReport !== null ? QualityOfServiceReport.fromPartial(object.qosExcellenceReport) : undefined;
    return message;
  },
  fromAmino(object: RelaySessionAmino): RelaySession {
    const message = createBaseRelaySession();
    if (object.spec_id !== undefined && object.spec_id !== null) {
      message.specId = object.spec_id;
    }
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = bytesFromBase64(object.content_hash);
    }
    if (object.session_id !== undefined && object.session_id !== null) {
      message.sessionId = BigInt(object.session_id);
    }
    if (object.cu_sum !== undefined && object.cu_sum !== null) {
      message.cuSum = BigInt(object.cu_sum);
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.relay_num !== undefined && object.relay_num !== null) {
      message.relayNum = BigInt(object.relay_num);
    }
    if (object.qos_report !== undefined && object.qos_report !== null) {
      message.qosReport = QualityOfServiceReport.fromAmino(object.qos_report);
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    message.unresponsiveProviders = object.unresponsive_providers?.map(e => ReportedProvider.fromAmino(e)) || [];
    if (object.lava_chain_id !== undefined && object.lava_chain_id !== null) {
      message.lavaChainId = object.lava_chain_id;
    }
    if (object.sig !== undefined && object.sig !== null) {
      message.sig = bytesFromBase64(object.sig);
    }
    if (object.badge !== undefined && object.badge !== null) {
      message.badge = Badge.fromAmino(object.badge);
    }
    if (object.qos_excellence_report !== undefined && object.qos_excellence_report !== null) {
      message.qosExcellenceReport = QualityOfServiceReport.fromAmino(object.qos_excellence_report);
    }
    return message;
  },
  toAmino(message: RelaySession): RelaySessionAmino {
    const obj: any = {};
    obj.spec_id = message.specId === "" ? undefined : message.specId;
    obj.content_hash = message.contentHash ? base64FromBytes(message.contentHash) : undefined;
    obj.session_id = message.sessionId !== BigInt(0) ? (message.sessionId?.toString)() : undefined;
    obj.cu_sum = message.cuSum !== BigInt(0) ? (message.cuSum?.toString)() : undefined;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.relay_num = message.relayNum !== BigInt(0) ? (message.relayNum?.toString)() : undefined;
    obj.qos_report = message.qosReport ? QualityOfServiceReport.toAmino(message.qosReport) : undefined;
    obj.epoch = message.epoch !== BigInt(0) ? (message.epoch?.toString)() : undefined;
    if (message.unresponsiveProviders) {
      obj.unresponsive_providers = message.unresponsiveProviders.map(e => e ? ReportedProvider.toAmino(e) : undefined);
    } else {
      obj.unresponsive_providers = message.unresponsiveProviders;
    }
    obj.lava_chain_id = message.lavaChainId === "" ? undefined : message.lavaChainId;
    obj.sig = message.sig ? base64FromBytes(message.sig) : undefined;
    obj.badge = message.badge ? Badge.toAmino(message.badge) : undefined;
    obj.qos_excellence_report = message.qosExcellenceReport ? QualityOfServiceReport.toAmino(message.qosExcellenceReport) : undefined;
    return obj;
  },
  fromAminoMsg(object: RelaySessionAminoMsg): RelaySession {
    return RelaySession.fromAmino(object.value);
  },
  fromProtoMsg(message: RelaySessionProtoMsg): RelaySession {
    return RelaySession.decode(message.value);
  },
  toProto(message: RelaySession): Uint8Array {
    return RelaySession.encode(message).finish();
  },
  toProtoMsg(message: RelaySession): RelaySessionProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.RelaySession",
      value: RelaySession.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RelaySession.typeUrl, RelaySession);
function createBaseBadge(): Badge {
  return {
    cuAllocation: BigInt(0),
    epoch: BigInt(0),
    address: "",
    lavaChainId: "",
    projectSig: new Uint8Array(),
    virtualEpoch: BigInt(0)
  };
}
export const Badge = {
  typeUrl: "/lavanet.lava.pairing.Badge",
  is(o: any): o is Badge {
    return o && (o.$typeUrl === Badge.typeUrl || typeof o.cuAllocation === "bigint" && typeof o.epoch === "bigint" && typeof o.address === "string" && typeof o.lavaChainId === "string" && (o.projectSig instanceof Uint8Array || typeof o.projectSig === "string") && typeof o.virtualEpoch === "bigint");
  },
  isSDK(o: any): o is BadgeSDKType {
    return o && (o.$typeUrl === Badge.typeUrl || typeof o.cu_allocation === "bigint" && typeof o.epoch === "bigint" && typeof o.address === "string" && typeof o.lava_chain_id === "string" && (o.project_sig instanceof Uint8Array || typeof o.project_sig === "string") && typeof o.virtual_epoch === "bigint");
  },
  isAmino(o: any): o is BadgeAmino {
    return o && (o.$typeUrl === Badge.typeUrl || typeof o.cu_allocation === "bigint" && typeof o.epoch === "bigint" && typeof o.address === "string" && typeof o.lava_chain_id === "string" && (o.project_sig instanceof Uint8Array || typeof o.project_sig === "string") && typeof o.virtual_epoch === "bigint");
  },
  encode(message: Badge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cuAllocation !== BigInt(0)) {
      writer.uint32(8).uint64(message.cuAllocation);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.lavaChainId !== "") {
      writer.uint32(34).string(message.lavaChainId);
    }
    if (message.projectSig.length !== 0) {
      writer.uint32(42).bytes(message.projectSig);
    }
    if (message.virtualEpoch !== BigInt(0)) {
      writer.uint32(48).uint64(message.virtualEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Badge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cuAllocation = reader.uint64();
          break;
        case 2:
          message.epoch = reader.uint64();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.lavaChainId = reader.string();
          break;
        case 5:
          message.projectSig = reader.bytes();
          break;
        case 6:
          message.virtualEpoch = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Badge {
    return {
      cuAllocation: isSet(object.cuAllocation) ? BigInt(object.cuAllocation.toString()) : BigInt(0),
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      lavaChainId: isSet(object.lavaChainId) ? String(object.lavaChainId) : "",
      projectSig: isSet(object.projectSig) ? bytesFromBase64(object.projectSig) : new Uint8Array(),
      virtualEpoch: isSet(object.virtualEpoch) ? BigInt(object.virtualEpoch.toString()) : BigInt(0)
    };
  },
  toJSON(message: Badge): JsonSafe<Badge> {
    const obj: any = {};
    message.cuAllocation !== undefined && (obj.cuAllocation = (message.cuAllocation || BigInt(0)).toString());
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.lavaChainId !== undefined && (obj.lavaChainId = message.lavaChainId);
    message.projectSig !== undefined && (obj.projectSig = base64FromBytes(message.projectSig !== undefined ? message.projectSig : new Uint8Array()));
    message.virtualEpoch !== undefined && (obj.virtualEpoch = (message.virtualEpoch || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Badge>, I>>(object: I): Badge {
    const message = createBaseBadge();
    message.cuAllocation = object.cuAllocation !== undefined && object.cuAllocation !== null ? BigInt(object.cuAllocation.toString()) : BigInt(0);
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.lavaChainId = object.lavaChainId ?? "";
    message.projectSig = object.projectSig ?? new Uint8Array();
    message.virtualEpoch = object.virtualEpoch !== undefined && object.virtualEpoch !== null ? BigInt(object.virtualEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BadgeAmino): Badge {
    const message = createBaseBadge();
    if (object.cu_allocation !== undefined && object.cu_allocation !== null) {
      message.cuAllocation = BigInt(object.cu_allocation);
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.lava_chain_id !== undefined && object.lava_chain_id !== null) {
      message.lavaChainId = object.lava_chain_id;
    }
    if (object.project_sig !== undefined && object.project_sig !== null) {
      message.projectSig = bytesFromBase64(object.project_sig);
    }
    if (object.virtual_epoch !== undefined && object.virtual_epoch !== null) {
      message.virtualEpoch = BigInt(object.virtual_epoch);
    }
    return message;
  },
  toAmino(message: Badge): BadgeAmino {
    const obj: any = {};
    obj.cu_allocation = message.cuAllocation !== BigInt(0) ? (message.cuAllocation?.toString)() : undefined;
    obj.epoch = message.epoch !== BigInt(0) ? (message.epoch?.toString)() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.lava_chain_id = message.lavaChainId === "" ? undefined : message.lavaChainId;
    obj.project_sig = message.projectSig ? base64FromBytes(message.projectSig) : undefined;
    obj.virtual_epoch = message.virtualEpoch !== BigInt(0) ? (message.virtualEpoch?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: BadgeAminoMsg): Badge {
    return Badge.fromAmino(object.value);
  },
  fromProtoMsg(message: BadgeProtoMsg): Badge {
    return Badge.decode(message.value);
  },
  toProto(message: Badge): Uint8Array {
    return Badge.encode(message).finish();
  },
  toProtoMsg(message: Badge): BadgeProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.Badge",
      value: Badge.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Badge.typeUrl, Badge);
function createBaseRelayPrivateData(): RelayPrivateData {
  return {
    connectionType: "",
    apiUrl: "",
    data: new Uint8Array(),
    requestBlock: BigInt(0),
    apiInterface: "",
    salt: new Uint8Array(),
    metadata: [],
    addon: "",
    extensions: [],
    seenBlock: BigInt(0)
  };
}
export const RelayPrivateData = {
  typeUrl: "/lavanet.lava.pairing.RelayPrivateData",
  is(o: any): o is RelayPrivateData {
    return o && (o.$typeUrl === RelayPrivateData.typeUrl || typeof o.connectionType === "string" && typeof o.apiUrl === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.requestBlock === "bigint" && typeof o.apiInterface === "string" && (o.salt instanceof Uint8Array || typeof o.salt === "string") && Array.isArray(o.metadata) && (!o.metadata.length || Metadata.is(o.metadata[0])) && typeof o.addon === "string" && Array.isArray(o.extensions) && (!o.extensions.length || typeof o.extensions[0] === "string") && typeof o.seenBlock === "bigint");
  },
  isSDK(o: any): o is RelayPrivateDataSDKType {
    return o && (o.$typeUrl === RelayPrivateData.typeUrl || typeof o.connection_type === "string" && typeof o.api_url === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.request_block === "bigint" && typeof o.api_interface === "string" && (o.salt instanceof Uint8Array || typeof o.salt === "string") && Array.isArray(o.metadata) && (!o.metadata.length || Metadata.isSDK(o.metadata[0])) && typeof o.addon === "string" && Array.isArray(o.extensions) && (!o.extensions.length || typeof o.extensions[0] === "string") && typeof o.seen_block === "bigint");
  },
  isAmino(o: any): o is RelayPrivateDataAmino {
    return o && (o.$typeUrl === RelayPrivateData.typeUrl || typeof o.connection_type === "string" && typeof o.api_url === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.request_block === "bigint" && typeof o.api_interface === "string" && (o.salt instanceof Uint8Array || typeof o.salt === "string") && Array.isArray(o.metadata) && (!o.metadata.length || Metadata.isAmino(o.metadata[0])) && typeof o.addon === "string" && Array.isArray(o.extensions) && (!o.extensions.length || typeof o.extensions[0] === "string") && typeof o.seen_block === "bigint");
  },
  encode(message: RelayPrivateData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionType !== "") {
      writer.uint32(10).string(message.connectionType);
    }
    if (message.apiUrl !== "") {
      writer.uint32(18).string(message.apiUrl);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.requestBlock !== BigInt(0)) {
      writer.uint32(32).int64(message.requestBlock);
    }
    if (message.apiInterface !== "") {
      writer.uint32(42).string(message.apiInterface);
    }
    if (message.salt.length !== 0) {
      writer.uint32(50).bytes(message.salt);
    }
    for (const v of message.metadata) {
      Metadata.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.addon !== "") {
      writer.uint32(66).string(message.addon);
    }
    for (const v of message.extensions) {
      writer.uint32(74).string(v!);
    }
    if (message.seenBlock !== BigInt(0)) {
      writer.uint32(80).int64(message.seenBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayPrivateData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayPrivateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionType = reader.string();
          break;
        case 2:
          message.apiUrl = reader.string();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.requestBlock = reader.int64();
          break;
        case 5:
          message.apiInterface = reader.string();
          break;
        case 6:
          message.salt = reader.bytes();
          break;
        case 7:
          message.metadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        case 8:
          message.addon = reader.string();
          break;
        case 9:
          message.extensions.push(reader.string());
          break;
        case 10:
          message.seenBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RelayPrivateData {
    return {
      connectionType: isSet(object.connectionType) ? String(object.connectionType) : "",
      apiUrl: isSet(object.apiUrl) ? String(object.apiUrl) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      requestBlock: isSet(object.requestBlock) ? BigInt(object.requestBlock.toString()) : BigInt(0),
      apiInterface: isSet(object.apiInterface) ? String(object.apiInterface) : "",
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => Metadata.fromJSON(e)) : [],
      addon: isSet(object.addon) ? String(object.addon) : "",
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => String(e)) : [],
      seenBlock: isSet(object.seenBlock) ? BigInt(object.seenBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: RelayPrivateData): JsonSafe<RelayPrivateData> {
    const obj: any = {};
    message.connectionType !== undefined && (obj.connectionType = message.connectionType);
    message.apiUrl !== undefined && (obj.apiUrl = message.apiUrl);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.requestBlock !== undefined && (obj.requestBlock = (message.requestBlock || BigInt(0)).toString());
    message.apiInterface !== undefined && (obj.apiInterface = message.apiInterface);
    message.salt !== undefined && (obj.salt = base64FromBytes(message.salt !== undefined ? message.salt : new Uint8Array()));
    if (message.metadata) {
      obj.metadata = message.metadata.map(e => e ? Metadata.toJSON(e) : undefined);
    } else {
      obj.metadata = [];
    }
    message.addon !== undefined && (obj.addon = message.addon);
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e);
    } else {
      obj.extensions = [];
    }
    message.seenBlock !== undefined && (obj.seenBlock = (message.seenBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RelayPrivateData>, I>>(object: I): RelayPrivateData {
    const message = createBaseRelayPrivateData();
    message.connectionType = object.connectionType ?? "";
    message.apiUrl = object.apiUrl ?? "";
    message.data = object.data ?? new Uint8Array();
    message.requestBlock = object.requestBlock !== undefined && object.requestBlock !== null ? BigInt(object.requestBlock.toString()) : BigInt(0);
    message.apiInterface = object.apiInterface ?? "";
    message.salt = object.salt ?? new Uint8Array();
    message.metadata = object.metadata?.map(e => Metadata.fromPartial(e)) || [];
    message.addon = object.addon ?? "";
    message.extensions = object.extensions?.map(e => e) || [];
    message.seenBlock = object.seenBlock !== undefined && object.seenBlock !== null ? BigInt(object.seenBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RelayPrivateDataAmino): RelayPrivateData {
    const message = createBaseRelayPrivateData();
    if (object.connection_type !== undefined && object.connection_type !== null) {
      message.connectionType = object.connection_type;
    }
    if (object.api_url !== undefined && object.api_url !== null) {
      message.apiUrl = object.api_url;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.request_block !== undefined && object.request_block !== null) {
      message.requestBlock = BigInt(object.request_block);
    }
    if (object.api_interface !== undefined && object.api_interface !== null) {
      message.apiInterface = object.api_interface;
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = bytesFromBase64(object.salt);
    }
    message.metadata = object.metadata?.map(e => Metadata.fromAmino(e)) || [];
    if (object.addon !== undefined && object.addon !== null) {
      message.addon = object.addon;
    }
    message.extensions = object.extensions?.map(e => e) || [];
    if (object.seen_block !== undefined && object.seen_block !== null) {
      message.seenBlock = BigInt(object.seen_block);
    }
    return message;
  },
  toAmino(message: RelayPrivateData): RelayPrivateDataAmino {
    const obj: any = {};
    obj.connection_type = message.connectionType === "" ? undefined : message.connectionType;
    obj.api_url = message.apiUrl === "" ? undefined : message.apiUrl;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.request_block = message.requestBlock !== BigInt(0) ? (message.requestBlock?.toString)() : undefined;
    obj.api_interface = message.apiInterface === "" ? undefined : message.apiInterface;
    obj.salt = message.salt ? base64FromBytes(message.salt) : undefined;
    if (message.metadata) {
      obj.metadata = message.metadata.map(e => e ? Metadata.toAmino(e) : undefined);
    } else {
      obj.metadata = message.metadata;
    }
    obj.addon = message.addon === "" ? undefined : message.addon;
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e);
    } else {
      obj.extensions = message.extensions;
    }
    obj.seen_block = message.seenBlock !== BigInt(0) ? (message.seenBlock?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: RelayPrivateDataAminoMsg): RelayPrivateData {
    return RelayPrivateData.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayPrivateDataProtoMsg): RelayPrivateData {
    return RelayPrivateData.decode(message.value);
  },
  toProto(message: RelayPrivateData): Uint8Array {
    return RelayPrivateData.encode(message).finish();
  },
  toProtoMsg(message: RelayPrivateData): RelayPrivateDataProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.RelayPrivateData",
      value: RelayPrivateData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RelayPrivateData.typeUrl, RelayPrivateData);
function createBaseReportedProvider(): ReportedProvider {
  return {
    address: "",
    disconnections: BigInt(0),
    errors: BigInt(0),
    timestampS: BigInt(0)
  };
}
export const ReportedProvider = {
  typeUrl: "/lavanet.lava.pairing.ReportedProvider",
  is(o: any): o is ReportedProvider {
    return o && (o.$typeUrl === ReportedProvider.typeUrl || typeof o.address === "string" && typeof o.disconnections === "bigint" && typeof o.errors === "bigint" && typeof o.timestampS === "bigint");
  },
  isSDK(o: any): o is ReportedProviderSDKType {
    return o && (o.$typeUrl === ReportedProvider.typeUrl || typeof o.address === "string" && typeof o.disconnections === "bigint" && typeof o.errors === "bigint" && typeof o.timestamp_s === "bigint");
  },
  isAmino(o: any): o is ReportedProviderAmino {
    return o && (o.$typeUrl === ReportedProvider.typeUrl || typeof o.address === "string" && typeof o.disconnections === "bigint" && typeof o.errors === "bigint" && typeof o.timestamp_s === "bigint");
  },
  encode(message: ReportedProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.disconnections !== BigInt(0)) {
      writer.uint32(16).uint64(message.disconnections);
    }
    if (message.errors !== BigInt(0)) {
      writer.uint32(24).uint64(message.errors);
    }
    if (message.timestampS !== BigInt(0)) {
      writer.uint32(32).int64(message.timestampS);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReportedProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportedProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.disconnections = reader.uint64();
          break;
        case 3:
          message.errors = reader.uint64();
          break;
        case 4:
          message.timestampS = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReportedProvider {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      disconnections: isSet(object.disconnections) ? BigInt(object.disconnections.toString()) : BigInt(0),
      errors: isSet(object.errors) ? BigInt(object.errors.toString()) : BigInt(0),
      timestampS: isSet(object.timestampS) ? BigInt(object.timestampS.toString()) : BigInt(0)
    };
  },
  toJSON(message: ReportedProvider): JsonSafe<ReportedProvider> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.disconnections !== undefined && (obj.disconnections = (message.disconnections || BigInt(0)).toString());
    message.errors !== undefined && (obj.errors = (message.errors || BigInt(0)).toString());
    message.timestampS !== undefined && (obj.timestampS = (message.timestampS || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ReportedProvider>, I>>(object: I): ReportedProvider {
    const message = createBaseReportedProvider();
    message.address = object.address ?? "";
    message.disconnections = object.disconnections !== undefined && object.disconnections !== null ? BigInt(object.disconnections.toString()) : BigInt(0);
    message.errors = object.errors !== undefined && object.errors !== null ? BigInt(object.errors.toString()) : BigInt(0);
    message.timestampS = object.timestampS !== undefined && object.timestampS !== null ? BigInt(object.timestampS.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ReportedProviderAmino): ReportedProvider {
    const message = createBaseReportedProvider();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.disconnections !== undefined && object.disconnections !== null) {
      message.disconnections = BigInt(object.disconnections);
    }
    if (object.errors !== undefined && object.errors !== null) {
      message.errors = BigInt(object.errors);
    }
    if (object.timestamp_s !== undefined && object.timestamp_s !== null) {
      message.timestampS = BigInt(object.timestamp_s);
    }
    return message;
  },
  toAmino(message: ReportedProvider): ReportedProviderAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.disconnections = message.disconnections !== BigInt(0) ? (message.disconnections?.toString)() : undefined;
    obj.errors = message.errors !== BigInt(0) ? (message.errors?.toString)() : undefined;
    obj.timestamp_s = message.timestampS !== BigInt(0) ? (message.timestampS?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ReportedProviderAminoMsg): ReportedProvider {
    return ReportedProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: ReportedProviderProtoMsg): ReportedProvider {
    return ReportedProvider.decode(message.value);
  },
  toProto(message: ReportedProvider): Uint8Array {
    return ReportedProvider.encode(message).finish();
  },
  toProtoMsg(message: ReportedProvider): ReportedProviderProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ReportedProvider",
      value: ReportedProvider.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ReportedProvider.typeUrl, ReportedProvider);
function createBaseMetadata(): Metadata {
  return {
    name: "",
    value: ""
  };
}
export const Metadata = {
  typeUrl: "/lavanet.lava.pairing.Metadata",
  is(o: any): o is Metadata {
    return o && (o.$typeUrl === Metadata.typeUrl || typeof o.name === "string" && typeof o.value === "string");
  },
  isSDK(o: any): o is MetadataSDKType {
    return o && (o.$typeUrl === Metadata.typeUrl || typeof o.name === "string" && typeof o.value === "string");
  },
  isAmino(o: any): o is MetadataAmino {
    return o && (o.$typeUrl === Metadata.typeUrl || typeof o.name === "string" && typeof o.value === "string");
  },
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Metadata {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: Metadata): JsonSafe<Metadata> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
    const message = createBaseMetadata();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: MetadataAmino): Metadata {
    const message = createBaseMetadata();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Metadata.typeUrl, Metadata);
function createBaseRelayRequest(): RelayRequest {
  return {
    relaySession: undefined,
    relayData: undefined
  };
}
export const RelayRequest = {
  typeUrl: "/lavanet.lava.pairing.RelayRequest",
  is(o: any): o is RelayRequest {
    return o && o.$typeUrl === RelayRequest.typeUrl;
  },
  isSDK(o: any): o is RelayRequestSDKType {
    return o && o.$typeUrl === RelayRequest.typeUrl;
  },
  isAmino(o: any): o is RelayRequestAmino {
    return o && o.$typeUrl === RelayRequest.typeUrl;
  },
  encode(message: RelayRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.relaySession !== undefined) {
      RelaySession.encode(message.relaySession, writer.uint32(10).fork()).ldelim();
    }
    if (message.relayData !== undefined) {
      RelayPrivateData.encode(message.relayData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relaySession = RelaySession.decode(reader, reader.uint32());
          break;
        case 2:
          message.relayData = RelayPrivateData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RelayRequest {
    return {
      relaySession: isSet(object.relaySession) ? RelaySession.fromJSON(object.relaySession) : undefined,
      relayData: isSet(object.relayData) ? RelayPrivateData.fromJSON(object.relayData) : undefined
    };
  },
  toJSON(message: RelayRequest): JsonSafe<RelayRequest> {
    const obj: any = {};
    message.relaySession !== undefined && (obj.relaySession = message.relaySession ? RelaySession.toJSON(message.relaySession) : undefined);
    message.relayData !== undefined && (obj.relayData = message.relayData ? RelayPrivateData.toJSON(message.relayData) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RelayRequest>, I>>(object: I): RelayRequest {
    const message = createBaseRelayRequest();
    message.relaySession = object.relaySession !== undefined && object.relaySession !== null ? RelaySession.fromPartial(object.relaySession) : undefined;
    message.relayData = object.relayData !== undefined && object.relayData !== null ? RelayPrivateData.fromPartial(object.relayData) : undefined;
    return message;
  },
  fromAmino(object: RelayRequestAmino): RelayRequest {
    const message = createBaseRelayRequest();
    if (object.relay_session !== undefined && object.relay_session !== null) {
      message.relaySession = RelaySession.fromAmino(object.relay_session);
    }
    if (object.relay_data !== undefined && object.relay_data !== null) {
      message.relayData = RelayPrivateData.fromAmino(object.relay_data);
    }
    return message;
  },
  toAmino(message: RelayRequest): RelayRequestAmino {
    const obj: any = {};
    obj.relay_session = message.relaySession ? RelaySession.toAmino(message.relaySession) : undefined;
    obj.relay_data = message.relayData ? RelayPrivateData.toAmino(message.relayData) : undefined;
    return obj;
  },
  fromAminoMsg(object: RelayRequestAminoMsg): RelayRequest {
    return RelayRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayRequestProtoMsg): RelayRequest {
    return RelayRequest.decode(message.value);
  },
  toProto(message: RelayRequest): Uint8Array {
    return RelayRequest.encode(message).finish();
  },
  toProtoMsg(message: RelayRequest): RelayRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.RelayRequest",
      value: RelayRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RelayRequest.typeUrl, RelayRequest);
function createBaseRelayReply(): RelayReply {
  return {
    data: new Uint8Array(),
    sig: new Uint8Array(),
    latestBlock: BigInt(0),
    finalizedBlocksHashes: new Uint8Array(),
    sigBlocks: new Uint8Array(),
    metadata: []
  };
}
export const RelayReply = {
  typeUrl: "/lavanet.lava.pairing.RelayReply",
  is(o: any): o is RelayReply {
    return o && (o.$typeUrl === RelayReply.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && (o.sig instanceof Uint8Array || typeof o.sig === "string") && typeof o.latestBlock === "bigint" && (o.finalizedBlocksHashes instanceof Uint8Array || typeof o.finalizedBlocksHashes === "string") && (o.sigBlocks instanceof Uint8Array || typeof o.sigBlocks === "string") && Array.isArray(o.metadata) && (!o.metadata.length || Metadata.is(o.metadata[0])));
  },
  isSDK(o: any): o is RelayReplySDKType {
    return o && (o.$typeUrl === RelayReply.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && (o.sig instanceof Uint8Array || typeof o.sig === "string") && typeof o.latest_block === "bigint" && (o.finalized_blocks_hashes instanceof Uint8Array || typeof o.finalized_blocks_hashes === "string") && (o.sig_blocks instanceof Uint8Array || typeof o.sig_blocks === "string") && Array.isArray(o.metadata) && (!o.metadata.length || Metadata.isSDK(o.metadata[0])));
  },
  isAmino(o: any): o is RelayReplyAmino {
    return o && (o.$typeUrl === RelayReply.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && (o.sig instanceof Uint8Array || typeof o.sig === "string") && typeof o.latest_block === "bigint" && (o.finalized_blocks_hashes instanceof Uint8Array || typeof o.finalized_blocks_hashes === "string") && (o.sig_blocks instanceof Uint8Array || typeof o.sig_blocks === "string") && Array.isArray(o.metadata) && (!o.metadata.length || Metadata.isAmino(o.metadata[0])));
  },
  encode(message: RelayReply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }
    if (message.latestBlock !== BigInt(0)) {
      writer.uint32(32).int64(message.latestBlock);
    }
    if (message.finalizedBlocksHashes.length !== 0) {
      writer.uint32(42).bytes(message.finalizedBlocksHashes);
    }
    if (message.sigBlocks.length !== 0) {
      writer.uint32(50).bytes(message.sigBlocks);
    }
    for (const v of message.metadata) {
      Metadata.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RelayReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.sig = reader.bytes();
          break;
        case 4:
          message.latestBlock = reader.int64();
          break;
        case 5:
          message.finalizedBlocksHashes = reader.bytes();
          break;
        case 6:
          message.sigBlocks = reader.bytes();
          break;
        case 7:
          message.metadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RelayReply {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(),
      latestBlock: isSet(object.latestBlock) ? BigInt(object.latestBlock.toString()) : BigInt(0),
      finalizedBlocksHashes: isSet(object.finalizedBlocksHashes) ? bytesFromBase64(object.finalizedBlocksHashes) : new Uint8Array(),
      sigBlocks: isSet(object.sigBlocks) ? bytesFromBase64(object.sigBlocks) : new Uint8Array(),
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => Metadata.fromJSON(e)) : []
    };
  },
  toJSON(message: RelayReply): JsonSafe<RelayReply> {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.sig !== undefined && (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
    message.latestBlock !== undefined && (obj.latestBlock = (message.latestBlock || BigInt(0)).toString());
    message.finalizedBlocksHashes !== undefined && (obj.finalizedBlocksHashes = base64FromBytes(message.finalizedBlocksHashes !== undefined ? message.finalizedBlocksHashes : new Uint8Array()));
    message.sigBlocks !== undefined && (obj.sigBlocks = base64FromBytes(message.sigBlocks !== undefined ? message.sigBlocks : new Uint8Array()));
    if (message.metadata) {
      obj.metadata = message.metadata.map(e => e ? Metadata.toJSON(e) : undefined);
    } else {
      obj.metadata = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RelayReply>, I>>(object: I): RelayReply {
    const message = createBaseRelayReply();
    message.data = object.data ?? new Uint8Array();
    message.sig = object.sig ?? new Uint8Array();
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? BigInt(object.latestBlock.toString()) : BigInt(0);
    message.finalizedBlocksHashes = object.finalizedBlocksHashes ?? new Uint8Array();
    message.sigBlocks = object.sigBlocks ?? new Uint8Array();
    message.metadata = object.metadata?.map(e => Metadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RelayReplyAmino): RelayReply {
    const message = createBaseRelayReply();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.sig !== undefined && object.sig !== null) {
      message.sig = bytesFromBase64(object.sig);
    }
    if (object.latest_block !== undefined && object.latest_block !== null) {
      message.latestBlock = BigInt(object.latest_block);
    }
    if (object.finalized_blocks_hashes !== undefined && object.finalized_blocks_hashes !== null) {
      message.finalizedBlocksHashes = bytesFromBase64(object.finalized_blocks_hashes);
    }
    if (object.sig_blocks !== undefined && object.sig_blocks !== null) {
      message.sigBlocks = bytesFromBase64(object.sig_blocks);
    }
    message.metadata = object.metadata?.map(e => Metadata.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RelayReply): RelayReplyAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.sig = message.sig ? base64FromBytes(message.sig) : undefined;
    obj.latest_block = message.latestBlock !== BigInt(0) ? (message.latestBlock?.toString)() : undefined;
    obj.finalized_blocks_hashes = message.finalizedBlocksHashes ? base64FromBytes(message.finalizedBlocksHashes) : undefined;
    obj.sig_blocks = message.sigBlocks ? base64FromBytes(message.sigBlocks) : undefined;
    if (message.metadata) {
      obj.metadata = message.metadata.map(e => e ? Metadata.toAmino(e) : undefined);
    } else {
      obj.metadata = message.metadata;
    }
    return obj;
  },
  fromAminoMsg(object: RelayReplyAminoMsg): RelayReply {
    return RelayReply.fromAmino(object.value);
  },
  fromProtoMsg(message: RelayReplyProtoMsg): RelayReply {
    return RelayReply.decode(message.value);
  },
  toProto(message: RelayReply): Uint8Array {
    return RelayReply.encode(message).finish();
  },
  toProtoMsg(message: RelayReply): RelayReplyProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.RelayReply",
      value: RelayReply.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RelayReply.typeUrl, RelayReply);
function createBaseQualityOfServiceReport(): QualityOfServiceReport {
  return {
    latency: "",
    availability: "",
    sync: ""
  };
}
export const QualityOfServiceReport = {
  typeUrl: "/lavanet.lava.pairing.QualityOfServiceReport",
  is(o: any): o is QualityOfServiceReport {
    return o && (o.$typeUrl === QualityOfServiceReport.typeUrl || typeof o.latency === "string" && typeof o.availability === "string" && typeof o.sync === "string");
  },
  isSDK(o: any): o is QualityOfServiceReportSDKType {
    return o && (o.$typeUrl === QualityOfServiceReport.typeUrl || typeof o.latency === "string" && typeof o.availability === "string" && typeof o.sync === "string");
  },
  isAmino(o: any): o is QualityOfServiceReportAmino {
    return o && (o.$typeUrl === QualityOfServiceReport.typeUrl || typeof o.latency === "string" && typeof o.availability === "string" && typeof o.sync === "string");
  },
  encode(message: QualityOfServiceReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.latency !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.latency, 18).atomics);
    }
    if (message.availability !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.availability, 18).atomics);
    }
    if (message.sync !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.sync, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QualityOfServiceReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQualityOfServiceReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latency = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.availability = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.sync = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QualityOfServiceReport {
    return {
      latency: isSet(object.latency) ? String(object.latency) : "",
      availability: isSet(object.availability) ? String(object.availability) : "",
      sync: isSet(object.sync) ? String(object.sync) : ""
    };
  },
  toJSON(message: QualityOfServiceReport): JsonSafe<QualityOfServiceReport> {
    const obj: any = {};
    message.latency !== undefined && (obj.latency = message.latency);
    message.availability !== undefined && (obj.availability = message.availability);
    message.sync !== undefined && (obj.sync = message.sync);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QualityOfServiceReport>, I>>(object: I): QualityOfServiceReport {
    const message = createBaseQualityOfServiceReport();
    message.latency = object.latency ?? "";
    message.availability = object.availability ?? "";
    message.sync = object.sync ?? "";
    return message;
  },
  fromAmino(object: QualityOfServiceReportAmino): QualityOfServiceReport {
    const message = createBaseQualityOfServiceReport();
    if (object.latency !== undefined && object.latency !== null) {
      message.latency = object.latency;
    }
    if (object.availability !== undefined && object.availability !== null) {
      message.availability = object.availability;
    }
    if (object.sync !== undefined && object.sync !== null) {
      message.sync = object.sync;
    }
    return message;
  },
  toAmino(message: QualityOfServiceReport): QualityOfServiceReportAmino {
    const obj: any = {};
    obj.latency = message.latency === "" ? undefined : message.latency;
    obj.availability = message.availability === "" ? undefined : message.availability;
    obj.sync = message.sync === "" ? undefined : message.sync;
    return obj;
  },
  fromAminoMsg(object: QualityOfServiceReportAminoMsg): QualityOfServiceReport {
    return QualityOfServiceReport.fromAmino(object.value);
  },
  fromProtoMsg(message: QualityOfServiceReportProtoMsg): QualityOfServiceReport {
    return QualityOfServiceReport.decode(message.value);
  },
  toProto(message: QualityOfServiceReport): Uint8Array {
    return QualityOfServiceReport.encode(message).finish();
  },
  toProtoMsg(message: QualityOfServiceReport): QualityOfServiceReportProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QualityOfServiceReport",
      value: QualityOfServiceReport.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QualityOfServiceReport.typeUrl, QualityOfServiceReport);
function createBasePairingRelayCache(): PairingRelayCache {
  return {
    entries: [],
    allowedCu: BigInt(0)
  };
}
export const PairingRelayCache = {
  typeUrl: "/lavanet.lava.pairing.PairingRelayCache",
  is(o: any): o is PairingRelayCache {
    return o && (o.$typeUrl === PairingRelayCache.typeUrl || Array.isArray(o.entries) && (!o.entries.length || StakeEntry.is(o.entries[0])) && typeof o.allowedCu === "bigint");
  },
  isSDK(o: any): o is PairingRelayCacheSDKType {
    return o && (o.$typeUrl === PairingRelayCache.typeUrl || Array.isArray(o.entries) && (!o.entries.length || StakeEntry.isSDK(o.entries[0])) && typeof o.allowed_cu === "bigint");
  },
  isAmino(o: any): o is PairingRelayCacheAmino {
    return o && (o.$typeUrl === PairingRelayCache.typeUrl || Array.isArray(o.entries) && (!o.entries.length || StakeEntry.isAmino(o.entries[0])) && typeof o.allowed_cu === "bigint");
  },
  encode(message: PairingRelayCache, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      StakeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.allowedCu !== BigInt(0)) {
      writer.uint32(16).uint64(message.allowedCu);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PairingRelayCache {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairingRelayCache();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.allowedCu = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PairingRelayCache {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => StakeEntry.fromJSON(e)) : [],
      allowedCu: isSet(object.allowedCu) ? BigInt(object.allowedCu.toString()) : BigInt(0)
    };
  },
  toJSON(message: PairingRelayCache): JsonSafe<PairingRelayCache> {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    message.allowedCu !== undefined && (obj.allowedCu = (message.allowedCu || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PairingRelayCache>, I>>(object: I): PairingRelayCache {
    const message = createBasePairingRelayCache();
    message.entries = object.entries?.map(e => StakeEntry.fromPartial(e)) || [];
    message.allowedCu = object.allowedCu !== undefined && object.allowedCu !== null ? BigInt(object.allowedCu.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PairingRelayCacheAmino): PairingRelayCache {
    const message = createBasePairingRelayCache();
    message.entries = object.entries?.map(e => StakeEntry.fromAmino(e)) || [];
    if (object.allowed_cu !== undefined && object.allowed_cu !== null) {
      message.allowedCu = BigInt(object.allowed_cu);
    }
    return message;
  },
  toAmino(message: PairingRelayCache): PairingRelayCacheAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    obj.allowed_cu = message.allowedCu !== BigInt(0) ? (message.allowedCu?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: PairingRelayCacheAminoMsg): PairingRelayCache {
    return PairingRelayCache.fromAmino(object.value);
  },
  fromProtoMsg(message: PairingRelayCacheProtoMsg): PairingRelayCache {
    return PairingRelayCache.decode(message.value);
  },
  toProto(message: PairingRelayCache): Uint8Array {
    return PairingRelayCache.encode(message).finish();
  },
  toProtoMsg(message: PairingRelayCache): PairingRelayCacheProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.PairingRelayCache",
      value: PairingRelayCache.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PairingRelayCache.typeUrl, PairingRelayCache);