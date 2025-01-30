//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Endpoint, EndpointAmino, EndpointSDKType } from "./endpoint";
import { Description, DescriptionAmino, DescriptionSDKType } from "../../../cosmos/staking/v1beta1/staking";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface StakeEntry {
  stake: Coin;
  address: string;
  stakeAppliedBlock: bigint;
  endpoints: Endpoint[];
  geolocation: number;
  chain: string;
  moniker: string;
  /** delegation total */
  delegateTotal: Coin;
  /** delegation commission (precentage 0-100) */
  delegateCommission: bigint;
  blockReport?: BlockReport;
  vault: string;
  description: Description;
  jails: bigint;
  jailEndTime: bigint;
}
export interface StakeEntryProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.StakeEntry";
  value: Uint8Array;
}
export interface StakeEntryAmino {
  stake?: CoinAmino;
  address?: string;
  stake_applied_block?: string;
  endpoints?: EndpointAmino[];
  geolocation?: number;
  chain?: string;
  moniker?: string;
  /** delegation total */
  delegate_total?: CoinAmino;
  /** delegation commission (precentage 0-100) */
  delegate_commission?: string;
  block_report?: BlockReportAmino;
  vault?: string;
  description: DescriptionAmino;
  jails?: string;
  jail_end_time?: string;
}
export interface StakeEntryAminoMsg {
  type: "/lavanet.lava.epochstorage.StakeEntry";
  value: StakeEntryAmino;
}
export interface StakeEntrySDKType {
  stake: CoinSDKType;
  address: string;
  stake_applied_block: bigint;
  endpoints: EndpointSDKType[];
  geolocation: number;
  chain: string;
  moniker: string;
  delegate_total: CoinSDKType;
  delegate_commission: bigint;
  block_report?: BlockReportSDKType;
  vault: string;
  description: DescriptionSDKType;
  jails: bigint;
  jail_end_time: bigint;
}
/**
 * BlockReport holds the most up-to-date info regarding blocks of the provider
 * It is set in the relay payment TX logic
 * used by the consumer to calculate the provider's sync score
 */
export interface BlockReport {
  epoch: bigint;
  latestBlock: bigint;
}
export interface BlockReportProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.BlockReport";
  value: Uint8Array;
}
/**
 * BlockReport holds the most up-to-date info regarding blocks of the provider
 * It is set in the relay payment TX logic
 * used by the consumer to calculate the provider's sync score
 */
export interface BlockReportAmino {
  epoch?: string;
  latest_block?: string;
}
export interface BlockReportAminoMsg {
  type: "/lavanet.lava.epochstorage.BlockReport";
  value: BlockReportAmino;
}
/**
 * BlockReport holds the most up-to-date info regarding blocks of the provider
 * It is set in the relay payment TX logic
 * used by the consumer to calculate the provider's sync score
 */
export interface BlockReportSDKType {
  epoch: bigint;
  latest_block: bigint;
}
function createBaseStakeEntry(): StakeEntry {
  return {
    stake: Coin.fromPartial({}),
    address: "",
    stakeAppliedBlock: BigInt(0),
    endpoints: [],
    geolocation: 0,
    chain: "",
    moniker: "",
    delegateTotal: Coin.fromPartial({}),
    delegateCommission: BigInt(0),
    blockReport: undefined,
    vault: "",
    description: Description.fromPartial({}),
    jails: BigInt(0),
    jailEndTime: BigInt(0)
  };
}
export const StakeEntry = {
  typeUrl: "/lavanet.lava.epochstorage.StakeEntry",
  is(o: any): o is StakeEntry {
    return o && (o.$typeUrl === StakeEntry.typeUrl || Coin.is(o.stake) && typeof o.address === "string" && typeof o.stakeAppliedBlock === "bigint" && Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.is(o.endpoints[0])) && typeof o.geolocation === "number" && typeof o.chain === "string" && typeof o.moniker === "string" && Coin.is(o.delegateTotal) && typeof o.delegateCommission === "bigint" && typeof o.vault === "string" && Description.is(o.description) && typeof o.jails === "bigint" && typeof o.jailEndTime === "bigint");
  },
  isSDK(o: any): o is StakeEntrySDKType {
    return o && (o.$typeUrl === StakeEntry.typeUrl || Coin.isSDK(o.stake) && typeof o.address === "string" && typeof o.stake_applied_block === "bigint" && Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.isSDK(o.endpoints[0])) && typeof o.geolocation === "number" && typeof o.chain === "string" && typeof o.moniker === "string" && Coin.isSDK(o.delegate_total) && typeof o.delegate_commission === "bigint" && typeof o.vault === "string" && Description.isSDK(o.description) && typeof o.jails === "bigint" && typeof o.jail_end_time === "bigint");
  },
  isAmino(o: any): o is StakeEntryAmino {
    return o && (o.$typeUrl === StakeEntry.typeUrl || Coin.isAmino(o.stake) && typeof o.address === "string" && typeof o.stake_applied_block === "bigint" && Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.isAmino(o.endpoints[0])) && typeof o.geolocation === "number" && typeof o.chain === "string" && typeof o.moniker === "string" && Coin.isAmino(o.delegate_total) && typeof o.delegate_commission === "bigint" && typeof o.vault === "string" && Description.isAmino(o.description) && typeof o.jails === "bigint" && typeof o.jail_end_time === "bigint");
  },
  encode(message: StakeEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stake !== undefined) {
      Coin.encode(message.stake, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.stakeAppliedBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.stakeAppliedBlock);
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.geolocation !== 0) {
      writer.uint32(40).int32(message.geolocation);
    }
    if (message.chain !== "") {
      writer.uint32(50).string(message.chain);
    }
    if (message.moniker !== "") {
      writer.uint32(66).string(message.moniker);
    }
    if (message.delegateTotal !== undefined) {
      Coin.encode(message.delegateTotal, writer.uint32(74).fork()).ldelim();
    }
    if (message.delegateCommission !== BigInt(0)) {
      writer.uint32(88).uint64(message.delegateCommission);
    }
    if (message.blockReport !== undefined) {
      BlockReport.encode(message.blockReport, writer.uint32(106).fork()).ldelim();
    }
    if (message.vault !== "") {
      writer.uint32(114).string(message.vault);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(122).fork()).ldelim();
    }
    if (message.jails !== BigInt(0)) {
      writer.uint32(128).uint64(message.jails);
    }
    if (message.jailEndTime !== BigInt(0)) {
      writer.uint32(136).int64(message.jailEndTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StakeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stake = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.stakeAppliedBlock = reader.uint64();
          break;
        case 4:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        case 5:
          message.geolocation = reader.int32();
          break;
        case 6:
          message.chain = reader.string();
          break;
        case 8:
          message.moniker = reader.string();
          break;
        case 9:
          message.delegateTotal = Coin.decode(reader, reader.uint32());
          break;
        case 11:
          message.delegateCommission = reader.uint64();
          break;
        case 13:
          message.blockReport = BlockReport.decode(reader, reader.uint32());
          break;
        case 14:
          message.vault = reader.string();
          break;
        case 15:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 16:
          message.jails = reader.uint64();
          break;
        case 17:
          message.jailEndTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StakeEntry {
    return {
      stake: isSet(object.stake) ? Coin.fromJSON(object.stake) : undefined,
      address: isSet(object.address) ? String(object.address) : "",
      stakeAppliedBlock: isSet(object.stakeAppliedBlock) ? BigInt(object.stakeAppliedBlock.toString()) : BigInt(0),
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromJSON(e)) : [],
      geolocation: isSet(object.geolocation) ? Number(object.geolocation) : 0,
      chain: isSet(object.chain) ? String(object.chain) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      delegateTotal: isSet(object.delegateTotal) ? Coin.fromJSON(object.delegateTotal) : undefined,
      delegateCommission: isSet(object.delegateCommission) ? BigInt(object.delegateCommission.toString()) : BigInt(0),
      blockReport: isSet(object.blockReport) ? BlockReport.fromJSON(object.blockReport) : undefined,
      vault: isSet(object.vault) ? String(object.vault) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      jails: isSet(object.jails) ? BigInt(object.jails.toString()) : BigInt(0),
      jailEndTime: isSet(object.jailEndTime) ? BigInt(object.jailEndTime.toString()) : BigInt(0)
    };
  },
  toJSON(message: StakeEntry): JsonSafe<StakeEntry> {
    const obj: any = {};
    message.stake !== undefined && (obj.stake = message.stake ? Coin.toJSON(message.stake) : undefined);
    message.address !== undefined && (obj.address = message.address);
    message.stakeAppliedBlock !== undefined && (obj.stakeAppliedBlock = (message.stakeAppliedBlock || BigInt(0)).toString());
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    message.geolocation !== undefined && (obj.geolocation = Math.round(message.geolocation));
    message.chain !== undefined && (obj.chain = message.chain);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.delegateTotal !== undefined && (obj.delegateTotal = message.delegateTotal ? Coin.toJSON(message.delegateTotal) : undefined);
    message.delegateCommission !== undefined && (obj.delegateCommission = (message.delegateCommission || BigInt(0)).toString());
    message.blockReport !== undefined && (obj.blockReport = message.blockReport ? BlockReport.toJSON(message.blockReport) : undefined);
    message.vault !== undefined && (obj.vault = message.vault);
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.jails !== undefined && (obj.jails = (message.jails || BigInt(0)).toString());
    message.jailEndTime !== undefined && (obj.jailEndTime = (message.jailEndTime || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<StakeEntry>, I>>(object: I): StakeEntry {
    const message = createBaseStakeEntry();
    message.stake = object.stake !== undefined && object.stake !== null ? Coin.fromPartial(object.stake) : undefined;
    message.address = object.address ?? "";
    message.stakeAppliedBlock = object.stakeAppliedBlock !== undefined && object.stakeAppliedBlock !== null ? BigInt(object.stakeAppliedBlock.toString()) : BigInt(0);
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    message.geolocation = object.geolocation ?? 0;
    message.chain = object.chain ?? "";
    message.moniker = object.moniker ?? "";
    message.delegateTotal = object.delegateTotal !== undefined && object.delegateTotal !== null ? Coin.fromPartial(object.delegateTotal) : undefined;
    message.delegateCommission = object.delegateCommission !== undefined && object.delegateCommission !== null ? BigInt(object.delegateCommission.toString()) : BigInt(0);
    message.blockReport = object.blockReport !== undefined && object.blockReport !== null ? BlockReport.fromPartial(object.blockReport) : undefined;
    message.vault = object.vault ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.jails = object.jails !== undefined && object.jails !== null ? BigInt(object.jails.toString()) : BigInt(0);
    message.jailEndTime = object.jailEndTime !== undefined && object.jailEndTime !== null ? BigInt(object.jailEndTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StakeEntryAmino): StakeEntry {
    const message = createBaseStakeEntry();
    if (object.stake !== undefined && object.stake !== null) {
      message.stake = Coin.fromAmino(object.stake);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.stake_applied_block !== undefined && object.stake_applied_block !== null) {
      message.stakeAppliedBlock = BigInt(object.stake_applied_block);
    }
    message.endpoints = object.endpoints?.map(e => Endpoint.fromAmino(e)) || [];
    if (object.geolocation !== undefined && object.geolocation !== null) {
      message.geolocation = object.geolocation;
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.delegate_total !== undefined && object.delegate_total !== null) {
      message.delegateTotal = Coin.fromAmino(object.delegate_total);
    }
    if (object.delegate_commission !== undefined && object.delegate_commission !== null) {
      message.delegateCommission = BigInt(object.delegate_commission);
    }
    if (object.block_report !== undefined && object.block_report !== null) {
      message.blockReport = BlockReport.fromAmino(object.block_report);
    }
    if (object.vault !== undefined && object.vault !== null) {
      message.vault = object.vault;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    if (object.jails !== undefined && object.jails !== null) {
      message.jails = BigInt(object.jails);
    }
    if (object.jail_end_time !== undefined && object.jail_end_time !== null) {
      message.jailEndTime = BigInt(object.jail_end_time);
    }
    return message;
  },
  toAmino(message: StakeEntry): StakeEntryAmino {
    const obj: any = {};
    obj.stake = message.stake ? Coin.toAmino(message.stake) : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.stake_applied_block = message.stakeAppliedBlock !== BigInt(0) ? (message.stakeAppliedBlock?.toString)() : undefined;
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toAmino(e) : undefined);
    } else {
      obj.endpoints = message.endpoints;
    }
    obj.geolocation = message.geolocation === 0 ? undefined : message.geolocation;
    obj.chain = message.chain === "" ? undefined : message.chain;
    obj.moniker = message.moniker === "" ? undefined : message.moniker;
    obj.delegate_total = message.delegateTotal ? Coin.toAmino(message.delegateTotal) : undefined;
    obj.delegate_commission = message.delegateCommission !== BigInt(0) ? (message.delegateCommission?.toString)() : undefined;
    obj.block_report = message.blockReport ? BlockReport.toAmino(message.blockReport) : undefined;
    obj.vault = message.vault === "" ? undefined : message.vault;
    obj.description = message.description ? Description.toAmino(message.description) : Description.toAmino(Description.fromPartial({}));
    obj.jails = message.jails !== BigInt(0) ? (message.jails?.toString)() : undefined;
    obj.jail_end_time = message.jailEndTime !== BigInt(0) ? (message.jailEndTime?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: StakeEntryAminoMsg): StakeEntry {
    return StakeEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: StakeEntryProtoMsg): StakeEntry {
    return StakeEntry.decode(message.value);
  },
  toProto(message: StakeEntry): Uint8Array {
    return StakeEntry.encode(message).finish();
  },
  toProtoMsg(message: StakeEntry): StakeEntryProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.StakeEntry",
      value: StakeEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StakeEntry.typeUrl, StakeEntry);
function createBaseBlockReport(): BlockReport {
  return {
    epoch: BigInt(0),
    latestBlock: BigInt(0)
  };
}
export const BlockReport = {
  typeUrl: "/lavanet.lava.epochstorage.BlockReport",
  is(o: any): o is BlockReport {
    return o && (o.$typeUrl === BlockReport.typeUrl || typeof o.epoch === "bigint" && typeof o.latestBlock === "bigint");
  },
  isSDK(o: any): o is BlockReportSDKType {
    return o && (o.$typeUrl === BlockReport.typeUrl || typeof o.epoch === "bigint" && typeof o.latest_block === "bigint");
  },
  isAmino(o: any): o is BlockReportAmino {
    return o && (o.$typeUrl === BlockReport.typeUrl || typeof o.epoch === "bigint" && typeof o.latest_block === "bigint");
  },
  encode(message: BlockReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.latestBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.latestBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.uint64();
          break;
        case 2:
          message.latestBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockReport {
    return {
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      latestBlock: isSet(object.latestBlock) ? BigInt(object.latestBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: BlockReport): JsonSafe<BlockReport> {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    message.latestBlock !== undefined && (obj.latestBlock = (message.latestBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BlockReport>, I>>(object: I): BlockReport {
    const message = createBaseBlockReport();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? BigInt(object.latestBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BlockReportAmino): BlockReport {
    const message = createBaseBlockReport();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.latest_block !== undefined && object.latest_block !== null) {
      message.latestBlock = BigInt(object.latest_block);
    }
    return message;
  },
  toAmino(message: BlockReport): BlockReportAmino {
    const obj: any = {};
    obj.epoch = message.epoch !== BigInt(0) ? (message.epoch?.toString)() : undefined;
    obj.latest_block = message.latestBlock !== BigInt(0) ? (message.latestBlock?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockReportAminoMsg): BlockReport {
    return BlockReport.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockReportProtoMsg): BlockReport {
    return BlockReport.decode(message.value);
  },
  toProto(message: BlockReport): Uint8Array {
    return BlockReport.encode(message).finish();
  },
  toProtoMsg(message: BlockReport): BlockReportProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.BlockReport",
      value: BlockReport.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BlockReport.typeUrl, BlockReport);