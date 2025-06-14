//@ts-nocheck
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 */
export enum LockQueryType {
  ByDuration = 0,
  ByTime = 1,
  NoLock = 2,
  ByGroup = 3,
  UNRECOGNIZED = -1,
}
export const LockQueryTypeSDKType = LockQueryType;
export const LockQueryTypeAmino = LockQueryType;
export function lockQueryTypeFromJSON(object: any): LockQueryType {
  switch (object) {
    case 0:
    case "ByDuration":
      return LockQueryType.ByDuration;
    case 1:
    case "ByTime":
      return LockQueryType.ByTime;
    case 2:
    case "NoLock":
      return LockQueryType.NoLock;
    case 3:
    case "ByGroup":
      return LockQueryType.ByGroup;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LockQueryType.UNRECOGNIZED;
  }
}
export function lockQueryTypeToJSON(object: LockQueryType): string {
  switch (object) {
    case LockQueryType.ByDuration:
      return "ByDuration";
    case LockQueryType.ByTime:
      return "ByTime";
    case LockQueryType.NoLock:
      return "NoLock";
    case LockQueryType.ByGroup:
      return "ByGroup";
    case LockQueryType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */
export interface PeriodLock {
  /**
   * ID is the unique id of the lock.
   * The ID of the lock is decided upon lock creation, incrementing by 1 for
   * every lock.
   */
  iD: bigint;
  /**
   * Owner is the account address of the lock owner.
   * Only the owner can modify the state of the lock.
   */
  owner: string;
  /**
   * Duration is the time needed for a lock to mature after unlocking has
   * started.
   */
  duration: Duration;
  /**
   * EndTime refers to the time at which the lock would mature and get deleted.
   * This value is first initialized when an unlock has started for the lock,
   * end time being block time + duration.
   */
  endTime: Date;
  /** Coins are the tokens locked within the lock, kept in the module account. */
  coins: Coin[];
  /**
   * Reward Receiver Address is the address that would be receiving rewards for
   * the incentives for the lock. This is set to owner by default and can be
   * changed via separate msg.
   */
  rewardReceiverAddress: string;
}
export interface PeriodLockProtoMsg {
  typeUrl: "/osmosis.lockup.PeriodLock";
  value: Uint8Array;
}
/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */
export interface PeriodLockAmino {
  /**
   * ID is the unique id of the lock.
   * The ID of the lock is decided upon lock creation, incrementing by 1 for
   * every lock.
   */
  ID?: string;
  /**
   * Owner is the account address of the lock owner.
   * Only the owner can modify the state of the lock.
   */
  owner?: string;
  /**
   * Duration is the time needed for a lock to mature after unlocking has
   * started.
   */
  duration?: DurationAmino;
  /**
   * EndTime refers to the time at which the lock would mature and get deleted.
   * This value is first initialized when an unlock has started for the lock,
   * end time being block time + duration.
   */
  end_time?: string;
  /** Coins are the tokens locked within the lock, kept in the module account. */
  coins?: CoinAmino[];
  /**
   * Reward Receiver Address is the address that would be receiving rewards for
   * the incentives for the lock. This is set to owner by default and can be
   * changed via separate msg.
   */
  reward_receiver_address?: string;
}
export interface PeriodLockAminoMsg {
  type: "osmosis/lockup/period-lock";
  value: PeriodLockAmino;
}
/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */
export interface PeriodLockSDKType {
  ID: bigint;
  owner: string;
  duration: DurationSDKType;
  end_time: Date;
  coins: CoinSDKType[];
  reward_receiver_address: string;
}
/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */
export interface QueryCondition {
  /** LockQueryType is a type of lock query, ByLockDuration | ByLockTime */
  lockQueryType: LockQueryType;
  /** Denom represents the token denomination we are looking to lock up */
  denom: string;
  /**
   * Duration is used to query locks with longer duration than the specified
   * duration. Duration field must not be nil when the lock query type is
   * `ByLockDuration`.
   */
  duration: Duration;
  /**
   * Timestamp is used by locks started before the specified duration.
   * Timestamp field must not be nil when the lock query type is `ByLockTime`.
   * Querying locks with timestamp is currently not implemented.
   */
  timestamp: Date;
}
export interface QueryConditionProtoMsg {
  typeUrl: "/osmosis.lockup.QueryCondition";
  value: Uint8Array;
}
/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */
export interface QueryConditionAmino {
  /** LockQueryType is a type of lock query, ByLockDuration | ByLockTime */
  lock_query_type?: LockQueryType;
  /** Denom represents the token denomination we are looking to lock up */
  denom?: string;
  /**
   * Duration is used to query locks with longer duration than the specified
   * duration. Duration field must not be nil when the lock query type is
   * `ByLockDuration`.
   */
  duration?: DurationAmino;
  /**
   * Timestamp is used by locks started before the specified duration.
   * Timestamp field must not be nil when the lock query type is `ByLockTime`.
   * Querying locks with timestamp is currently not implemented.
   */
  timestamp?: string;
}
export interface QueryConditionAminoMsg {
  type: "osmosis/lockup/query-condition";
  value: QueryConditionAmino;
}
/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */
export interface QueryConditionSDKType {
  lock_query_type: LockQueryType;
  denom: string;
  duration: DurationSDKType;
  timestamp: Date;
}
/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */
export interface SyntheticLock {
  /**
   * Underlying Lock ID is the underlying native lock's id for this synthetic
   * lockup. A synthetic lock MUST have an underlying lock.
   */
  underlyingLockId: bigint;
  /**
   * SynthDenom is the synthetic denom that is a combination of
   * gamm share + bonding status + validator address.
   */
  synthDenom: string;
  /**
   * used for unbonding synthetic lockups, for active synthetic lockups, this
   * value is set to uninitialized value
   */
  endTime: Date;
  /**
   * Duration is the duration for a synthetic lock to mature
   * at the point of unbonding has started.
   */
  duration: Duration;
}
export interface SyntheticLockProtoMsg {
  typeUrl: "/osmosis.lockup.SyntheticLock";
  value: Uint8Array;
}
/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */
export interface SyntheticLockAmino {
  /**
   * Underlying Lock ID is the underlying native lock's id for this synthetic
   * lockup. A synthetic lock MUST have an underlying lock.
   */
  underlying_lock_id?: string;
  /**
   * SynthDenom is the synthetic denom that is a combination of
   * gamm share + bonding status + validator address.
   */
  synth_denom?: string;
  /**
   * used for unbonding synthetic lockups, for active synthetic lockups, this
   * value is set to uninitialized value
   */
  end_time?: string;
  /**
   * Duration is the duration for a synthetic lock to mature
   * at the point of unbonding has started.
   */
  duration?: DurationAmino;
}
export interface SyntheticLockAminoMsg {
  type: "osmosis/lockup/synthetic-lock";
  value: SyntheticLockAmino;
}
/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */
export interface SyntheticLockSDKType {
  underlying_lock_id: bigint;
  synth_denom: string;
  end_time: Date;
  duration: DurationSDKType;
}
function createBasePeriodLock(): PeriodLock {
  return {
    iD: BigInt(0),
    owner: "",
    duration: Duration.fromPartial({}),
    endTime: new Date(),
    coins: [],
    rewardReceiverAddress: ""
  };
}
export const PeriodLock = {
  typeUrl: "/osmosis.lockup.PeriodLock",
  aminoType: "osmosis/lockup/period-lock",
  is(o: any): o is PeriodLock {
    return o && (o.$typeUrl === PeriodLock.typeUrl || typeof o.iD === "bigint" && typeof o.owner === "string" && Duration.is(o.duration) && Timestamp.is(o.endTime) && Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])) && typeof o.rewardReceiverAddress === "string");
  },
  isSDK(o: any): o is PeriodLockSDKType {
    return o && (o.$typeUrl === PeriodLock.typeUrl || typeof o.ID === "bigint" && typeof o.owner === "string" && Duration.isSDK(o.duration) && Timestamp.isSDK(o.end_time) && Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])) && typeof o.reward_receiver_address === "string");
  },
  isAmino(o: any): o is PeriodLockAmino {
    return o && (o.$typeUrl === PeriodLock.typeUrl || typeof o.ID === "bigint" && typeof o.owner === "string" && Duration.isAmino(o.duration) && Timestamp.isAmino(o.end_time) && Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])) && typeof o.reward_receiver_address === "string");
  },
  encode(message: PeriodLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iD !== BigInt(0)) {
      writer.uint32(8).uint64(message.iD);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.rewardReceiverAddress !== "") {
      writer.uint32(50).string(message.rewardReceiverAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeriodLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iD = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.rewardReceiverAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PeriodLock {
    return {
      iD: isSet(object.iD) ? BigInt(object.iD.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      rewardReceiverAddress: isSet(object.rewardReceiverAddress) ? String(object.rewardReceiverAddress) : ""
    };
  },
  toJSON(message: PeriodLock): JsonSafe<PeriodLock> {
    const obj: any = {};
    message.iD !== undefined && (obj.iD = (message.iD || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    message.rewardReceiverAddress !== undefined && (obj.rewardReceiverAddress = message.rewardReceiverAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PeriodLock>, I>>(object: I): PeriodLock {
    const message = createBasePeriodLock();
    message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.endTime = object.endTime ?? undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.rewardReceiverAddress = object.rewardReceiverAddress ?? "";
    return message;
  },
  fromAmino(object: PeriodLockAmino): PeriodLock {
    const message = createBasePeriodLock();
    if (object.ID !== undefined && object.ID !== null) {
      message.iD = BigInt(object.ID);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    if (object.reward_receiver_address !== undefined && object.reward_receiver_address !== null) {
      message.rewardReceiverAddress = object.reward_receiver_address;
    }
    return message;
  },
  toAmino(message: PeriodLock): PeriodLockAmino {
    const obj: any = {};
    obj.ID = message.iD !== BigInt(0) ? (message.iD?.toString)() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    obj.reward_receiver_address = message.rewardReceiverAddress === "" ? undefined : message.rewardReceiverAddress;
    return obj;
  },
  fromAminoMsg(object: PeriodLockAminoMsg): PeriodLock {
    return PeriodLock.fromAmino(object.value);
  },
  toAminoMsg(message: PeriodLock): PeriodLockAminoMsg {
    return {
      type: "osmosis/lockup/period-lock",
      value: PeriodLock.toAmino(message)
    };
  },
  fromProtoMsg(message: PeriodLockProtoMsg): PeriodLock {
    return PeriodLock.decode(message.value);
  },
  toProto(message: PeriodLock): Uint8Array {
    return PeriodLock.encode(message).finish();
  },
  toProtoMsg(message: PeriodLock): PeriodLockProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.PeriodLock",
      value: PeriodLock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PeriodLock.typeUrl, PeriodLock);
GlobalDecoderRegistry.registerAminoProtoMapping(PeriodLock.aminoType, PeriodLock.typeUrl);
function createBaseQueryCondition(): QueryCondition {
  return {
    lockQueryType: 0,
    denom: "",
    duration: Duration.fromPartial({}),
    timestamp: new Date()
  };
}
export const QueryCondition = {
  typeUrl: "/osmosis.lockup.QueryCondition",
  aminoType: "osmosis/lockup/query-condition",
  is(o: any): o is QueryCondition {
    return o && (o.$typeUrl === QueryCondition.typeUrl || isSet(o.lockQueryType) && typeof o.denom === "string" && Duration.is(o.duration) && Timestamp.is(o.timestamp));
  },
  isSDK(o: any): o is QueryConditionSDKType {
    return o && (o.$typeUrl === QueryCondition.typeUrl || isSet(o.lock_query_type) && typeof o.denom === "string" && Duration.isSDK(o.duration) && Timestamp.isSDK(o.timestamp));
  },
  isAmino(o: any): o is QueryConditionAmino {
    return o && (o.$typeUrl === QueryCondition.typeUrl || isSet(o.lock_query_type) && typeof o.denom === "string" && Duration.isAmino(o.duration) && Timestamp.isAmino(o.timestamp));
  },
  encode(message: QueryCondition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lockQueryType !== 0) {
      writer.uint32(8).int32(message.lockQueryType);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCondition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockQueryType = reader.int32() as any;
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCondition {
    return {
      lockQueryType: isSet(object.lockQueryType) ? lockQueryTypeFromJSON(object.lockQueryType) : -1,
      denom: isSet(object.denom) ? String(object.denom) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  toJSON(message: QueryCondition): JsonSafe<QueryCondition> {
    const obj: any = {};
    message.lockQueryType !== undefined && (obj.lockQueryType = lockQueryTypeToJSON(message.lockQueryType));
    message.denom !== undefined && (obj.denom = message.denom);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCondition>, I>>(object: I): QueryCondition {
    const message = createBaseQueryCondition();
    message.lockQueryType = object.lockQueryType ?? 0;
    message.denom = object.denom ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromAmino(object: QueryConditionAmino): QueryCondition {
    const message = createBaseQueryCondition();
    if (object.lock_query_type !== undefined && object.lock_query_type !== null) {
      message.lockQueryType = object.lock_query_type;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: QueryCondition): QueryConditionAmino {
    const obj: any = {};
    obj.lock_query_type = message.lockQueryType === 0 ? undefined : message.lockQueryType;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConditionAminoMsg): QueryCondition {
    return QueryCondition.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCondition): QueryConditionAminoMsg {
    return {
      type: "osmosis/lockup/query-condition",
      value: QueryCondition.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConditionProtoMsg): QueryCondition {
    return QueryCondition.decode(message.value);
  },
  toProto(message: QueryCondition): Uint8Array {
    return QueryCondition.encode(message).finish();
  },
  toProtoMsg(message: QueryCondition): QueryConditionProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.QueryCondition",
      value: QueryCondition.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCondition.typeUrl, QueryCondition);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryCondition.aminoType, QueryCondition.typeUrl);
function createBaseSyntheticLock(): SyntheticLock {
  return {
    underlyingLockId: BigInt(0),
    synthDenom: "",
    endTime: new Date(),
    duration: Duration.fromPartial({})
  };
}
export const SyntheticLock = {
  typeUrl: "/osmosis.lockup.SyntheticLock",
  aminoType: "osmosis/lockup/synthetic-lock",
  is(o: any): o is SyntheticLock {
    return o && (o.$typeUrl === SyntheticLock.typeUrl || typeof o.underlyingLockId === "bigint" && typeof o.synthDenom === "string" && Timestamp.is(o.endTime) && Duration.is(o.duration));
  },
  isSDK(o: any): o is SyntheticLockSDKType {
    return o && (o.$typeUrl === SyntheticLock.typeUrl || typeof o.underlying_lock_id === "bigint" && typeof o.synth_denom === "string" && Timestamp.isSDK(o.end_time) && Duration.isSDK(o.duration));
  },
  isAmino(o: any): o is SyntheticLockAmino {
    return o && (o.$typeUrl === SyntheticLock.typeUrl || typeof o.underlying_lock_id === "bigint" && typeof o.synth_denom === "string" && Timestamp.isAmino(o.end_time) && Duration.isAmino(o.duration));
  },
  encode(message: SyntheticLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.underlyingLockId !== BigInt(0)) {
      writer.uint32(8).uint64(message.underlyingLockId);
    }
    if (message.synthDenom !== "") {
      writer.uint32(18).string(message.synthDenom);
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SyntheticLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.underlyingLockId = reader.uint64();
          break;
        case 2:
          message.synthDenom = reader.string();
          break;
        case 3:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SyntheticLock {
    return {
      underlyingLockId: isSet(object.underlyingLockId) ? BigInt(object.underlyingLockId.toString()) : BigInt(0),
      synthDenom: isSet(object.synthDenom) ? String(object.synthDenom) : "",
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  toJSON(message: SyntheticLock): JsonSafe<SyntheticLock> {
    const obj: any = {};
    message.underlyingLockId !== undefined && (obj.underlyingLockId = (message.underlyingLockId || BigInt(0)).toString());
    message.synthDenom !== undefined && (obj.synthDenom = message.synthDenom);
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SyntheticLock>, I>>(object: I): SyntheticLock {
    const message = createBaseSyntheticLock();
    message.underlyingLockId = object.underlyingLockId !== undefined && object.underlyingLockId !== null ? BigInt(object.underlyingLockId.toString()) : BigInt(0);
    message.synthDenom = object.synthDenom ?? "";
    message.endTime = object.endTime ?? undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },
  fromAmino(object: SyntheticLockAmino): SyntheticLock {
    const message = createBaseSyntheticLock();
    if (object.underlying_lock_id !== undefined && object.underlying_lock_id !== null) {
      message.underlyingLockId = BigInt(object.underlying_lock_id);
    }
    if (object.synth_denom !== undefined && object.synth_denom !== null) {
      message.synthDenom = object.synth_denom;
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    return message;
  },
  toAmino(message: SyntheticLock): SyntheticLockAmino {
    const obj: any = {};
    obj.underlying_lock_id = message.underlyingLockId !== BigInt(0) ? (message.underlyingLockId?.toString)() : undefined;
    obj.synth_denom = message.synthDenom === "" ? undefined : message.synthDenom;
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: SyntheticLockAminoMsg): SyntheticLock {
    return SyntheticLock.fromAmino(object.value);
  },
  toAminoMsg(message: SyntheticLock): SyntheticLockAminoMsg {
    return {
      type: "osmosis/lockup/synthetic-lock",
      value: SyntheticLock.toAmino(message)
    };
  },
  fromProtoMsg(message: SyntheticLockProtoMsg): SyntheticLock {
    return SyntheticLock.decode(message.value);
  },
  toProto(message: SyntheticLock): Uint8Array {
    return SyntheticLock.encode(message).finish();
  },
  toProtoMsg(message: SyntheticLock): SyntheticLockProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.SyntheticLock",
      value: SyntheticLock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SyntheticLock.typeUrl, SyntheticLock);
GlobalDecoderRegistry.registerAminoProtoMapping(SyntheticLock.aminoType, SyntheticLock.typeUrl);