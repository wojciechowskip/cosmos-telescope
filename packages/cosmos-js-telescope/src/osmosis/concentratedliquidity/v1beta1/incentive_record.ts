//@ts-nocheck
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecord {
  /** incentive_id is the id uniquely identifying this incentive record. */
  incentiveId: bigint;
  poolId: bigint;
  /** incentive record body holds necessary */
  incentiveRecordBody: IncentiveRecordBody;
  /**
   * min_uptime is the minimum uptime required for liquidity to qualify for this
   * incentive. It should be always be one of the supported uptimes in
   * types.SupportedUptimes
   */
  minUptime: Duration;
}
export interface IncentiveRecordProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecord";
  value: Uint8Array;
}
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecordAmino {
  /** incentive_id is the id uniquely identifying this incentive record. */
  incentive_id?: string;
  pool_id?: string;
  /** incentive record body holds necessary */
  incentive_record_body?: IncentiveRecordBodyAmino;
  /**
   * min_uptime is the minimum uptime required for liquidity to qualify for this
   * incentive. It should be always be one of the supported uptimes in
   * types.SupportedUptimes
   */
  min_uptime?: DurationAmino;
}
export interface IncentiveRecordAminoMsg {
  type: "osmosis/concentratedliquidity/incentive-record";
  value: IncentiveRecordAmino;
}
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecordSDKType {
  incentive_id: bigint;
  pool_id: bigint;
  incentive_record_body: IncentiveRecordBodySDKType;
  min_uptime: DurationSDKType;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBody {
  /** remaining_coin is the total amount of incentives to be distributed */
  remainingCoin: DecCoin;
  /** emission_rate is the incentive emission rate per second */
  emissionRate: string;
  /** start_time is the time when the incentive starts distributing */
  startTime: Date;
}
export interface IncentiveRecordBodyProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody";
  value: Uint8Array;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBodyAmino {
  /** remaining_coin is the total amount of incentives to be distributed */
  remaining_coin?: DecCoinAmino;
  /** emission_rate is the incentive emission rate per second */
  emission_rate?: string;
  /** start_time is the time when the incentive starts distributing */
  start_time?: string;
}
export interface IncentiveRecordBodyAminoMsg {
  type: "osmosis/concentratedliquidity/incentive-record-body";
  value: IncentiveRecordBodyAmino;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBodySDKType {
  remaining_coin: DecCoinSDKType;
  emission_rate: string;
  start_time: Date;
}
function createBaseIncentiveRecord(): IncentiveRecord {
  return {
    incentiveId: BigInt(0),
    poolId: BigInt(0),
    incentiveRecordBody: IncentiveRecordBody.fromPartial({}),
    minUptime: Duration.fromPartial({})
  };
}
export const IncentiveRecord = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecord",
  aminoType: "osmosis/concentratedliquidity/incentive-record",
  is(o: any): o is IncentiveRecord {
    return o && (o.$typeUrl === IncentiveRecord.typeUrl || typeof o.incentiveId === "bigint" && typeof o.poolId === "bigint" && IncentiveRecordBody.is(o.incentiveRecordBody) && Duration.is(o.minUptime));
  },
  isSDK(o: any): o is IncentiveRecordSDKType {
    return o && (o.$typeUrl === IncentiveRecord.typeUrl || typeof o.incentive_id === "bigint" && typeof o.pool_id === "bigint" && IncentiveRecordBody.isSDK(o.incentive_record_body) && Duration.isSDK(o.min_uptime));
  },
  isAmino(o: any): o is IncentiveRecordAmino {
    return o && (o.$typeUrl === IncentiveRecord.typeUrl || typeof o.incentive_id === "bigint" && typeof o.pool_id === "bigint" && IncentiveRecordBody.isAmino(o.incentive_record_body) && Duration.isAmino(o.min_uptime));
  },
  encode(message: IncentiveRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.incentiveId !== BigInt(0)) {
      writer.uint32(8).uint64(message.incentiveId);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.incentiveRecordBody !== undefined) {
      IncentiveRecordBody.encode(message.incentiveRecordBody, writer.uint32(34).fork()).ldelim();
    }
    if (message.minUptime !== undefined) {
      Duration.encode(message.minUptime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentiveId = reader.uint64();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.incentiveRecordBody = IncentiveRecordBody.decode(reader, reader.uint32());
          break;
        case 5:
          message.minUptime = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentiveRecord {
    return {
      incentiveId: isSet(object.incentiveId) ? BigInt(object.incentiveId.toString()) : BigInt(0),
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      incentiveRecordBody: isSet(object.incentiveRecordBody) ? IncentiveRecordBody.fromJSON(object.incentiveRecordBody) : undefined,
      minUptime: isSet(object.minUptime) ? Duration.fromJSON(object.minUptime) : undefined
    };
  },
  toJSON(message: IncentiveRecord): JsonSafe<IncentiveRecord> {
    const obj: any = {};
    message.incentiveId !== undefined && (obj.incentiveId = (message.incentiveId || BigInt(0)).toString());
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.incentiveRecordBody !== undefined && (obj.incentiveRecordBody = message.incentiveRecordBody ? IncentiveRecordBody.toJSON(message.incentiveRecordBody) : undefined);
    message.minUptime !== undefined && (obj.minUptime = message.minUptime ? Duration.toJSON(message.minUptime) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IncentiveRecord>, I>>(object: I): IncentiveRecord {
    const message = createBaseIncentiveRecord();
    message.incentiveId = object.incentiveId !== undefined && object.incentiveId !== null ? BigInt(object.incentiveId.toString()) : BigInt(0);
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.incentiveRecordBody = object.incentiveRecordBody !== undefined && object.incentiveRecordBody !== null ? IncentiveRecordBody.fromPartial(object.incentiveRecordBody) : undefined;
    message.minUptime = object.minUptime !== undefined && object.minUptime !== null ? Duration.fromPartial(object.minUptime) : undefined;
    return message;
  },
  fromAmino(object: IncentiveRecordAmino): IncentiveRecord {
    const message = createBaseIncentiveRecord();
    if (object.incentive_id !== undefined && object.incentive_id !== null) {
      message.incentiveId = BigInt(object.incentive_id);
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.incentive_record_body !== undefined && object.incentive_record_body !== null) {
      message.incentiveRecordBody = IncentiveRecordBody.fromAmino(object.incentive_record_body);
    }
    if (object.min_uptime !== undefined && object.min_uptime !== null) {
      message.minUptime = Duration.fromAmino(object.min_uptime);
    }
    return message;
  },
  toAmino(message: IncentiveRecord): IncentiveRecordAmino {
    const obj: any = {};
    obj.incentive_id = message.incentiveId !== BigInt(0) ? (message.incentiveId?.toString)() : undefined;
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.incentive_record_body = message.incentiveRecordBody ? IncentiveRecordBody.toAmino(message.incentiveRecordBody) : undefined;
    obj.min_uptime = message.minUptime ? Duration.toAmino(message.minUptime) : undefined;
    return obj;
  },
  fromAminoMsg(object: IncentiveRecordAminoMsg): IncentiveRecord {
    return IncentiveRecord.fromAmino(object.value);
  },
  toAminoMsg(message: IncentiveRecord): IncentiveRecordAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/incentive-record",
      value: IncentiveRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: IncentiveRecordProtoMsg): IncentiveRecord {
    return IncentiveRecord.decode(message.value);
  },
  toProto(message: IncentiveRecord): Uint8Array {
    return IncentiveRecord.encode(message).finish();
  },
  toProtoMsg(message: IncentiveRecord): IncentiveRecordProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecord",
      value: IncentiveRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(IncentiveRecord.typeUrl, IncentiveRecord);
GlobalDecoderRegistry.registerAminoProtoMapping(IncentiveRecord.aminoType, IncentiveRecord.typeUrl);
function createBaseIncentiveRecordBody(): IncentiveRecordBody {
  return {
    remainingCoin: DecCoin.fromPartial({}),
    emissionRate: "",
    startTime: new Date()
  };
}
export const IncentiveRecordBody = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody",
  aminoType: "osmosis/concentratedliquidity/incentive-record-body",
  is(o: any): o is IncentiveRecordBody {
    return o && (o.$typeUrl === IncentiveRecordBody.typeUrl || DecCoin.is(o.remainingCoin) && typeof o.emissionRate === "string" && Timestamp.is(o.startTime));
  },
  isSDK(o: any): o is IncentiveRecordBodySDKType {
    return o && (o.$typeUrl === IncentiveRecordBody.typeUrl || DecCoin.isSDK(o.remaining_coin) && typeof o.emission_rate === "string" && Timestamp.isSDK(o.start_time));
  },
  isAmino(o: any): o is IncentiveRecordBodyAmino {
    return o && (o.$typeUrl === IncentiveRecordBody.typeUrl || DecCoin.isAmino(o.remaining_coin) && typeof o.emission_rate === "string" && Timestamp.isAmino(o.start_time));
  },
  encode(message: IncentiveRecordBody, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.remainingCoin !== undefined) {
      DecCoin.encode(message.remainingCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.emissionRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.emissionRate, 18).atomics);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecordBody {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveRecordBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remainingCoin = DecCoin.decode(reader, reader.uint32());
          break;
        case 2:
          message.emissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentiveRecordBody {
    return {
      remainingCoin: isSet(object.remainingCoin) ? DecCoin.fromJSON(object.remainingCoin) : undefined,
      emissionRate: isSet(object.emissionRate) ? String(object.emissionRate) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined
    };
  },
  toJSON(message: IncentiveRecordBody): JsonSafe<IncentiveRecordBody> {
    const obj: any = {};
    message.remainingCoin !== undefined && (obj.remainingCoin = message.remainingCoin ? DecCoin.toJSON(message.remainingCoin) : undefined);
    message.emissionRate !== undefined && (obj.emissionRate = message.emissionRate);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IncentiveRecordBody>, I>>(object: I): IncentiveRecordBody {
    const message = createBaseIncentiveRecordBody();
    message.remainingCoin = object.remainingCoin !== undefined && object.remainingCoin !== null ? DecCoin.fromPartial(object.remainingCoin) : undefined;
    message.emissionRate = object.emissionRate ?? "";
    message.startTime = object.startTime ?? undefined;
    return message;
  },
  fromAmino(object: IncentiveRecordBodyAmino): IncentiveRecordBody {
    const message = createBaseIncentiveRecordBody();
    if (object.remaining_coin !== undefined && object.remaining_coin !== null) {
      message.remainingCoin = DecCoin.fromAmino(object.remaining_coin);
    }
    if (object.emission_rate !== undefined && object.emission_rate !== null) {
      message.emissionRate = object.emission_rate;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    return message;
  },
  toAmino(message: IncentiveRecordBody): IncentiveRecordBodyAmino {
    const obj: any = {};
    obj.remaining_coin = message.remainingCoin ? DecCoin.toAmino(message.remainingCoin) : undefined;
    obj.emission_rate = message.emissionRate === "" ? undefined : message.emissionRate;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: IncentiveRecordBodyAminoMsg): IncentiveRecordBody {
    return IncentiveRecordBody.fromAmino(object.value);
  },
  toAminoMsg(message: IncentiveRecordBody): IncentiveRecordBodyAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/incentive-record-body",
      value: IncentiveRecordBody.toAmino(message)
    };
  },
  fromProtoMsg(message: IncentiveRecordBodyProtoMsg): IncentiveRecordBody {
    return IncentiveRecordBody.decode(message.value);
  },
  toProto(message: IncentiveRecordBody): Uint8Array {
    return IncentiveRecordBody.encode(message).finish();
  },
  toProtoMsg(message: IncentiveRecordBody): IncentiveRecordBodyProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody",
      value: IncentiveRecordBody.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(IncentiveRecordBody.typeUrl, IncentiveRecordBody);
GlobalDecoderRegistry.registerAminoProtoMapping(IncentiveRecordBody.aminoType, IncentiveRecordBody.typeUrl);