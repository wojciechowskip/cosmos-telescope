//@ts-nocheck
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockAmino, PeriodLockSDKType } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export interface MsgLockTokens {
  owner: string;
  duration: Duration;
  coins: Coin[];
}
export interface MsgLockTokensProtoMsg {
  typeUrl: "/osmosis.lockup.MsgLockTokens";
  value: Uint8Array;
}
export interface MsgLockTokensAmino {
  owner?: string;
  duration?: DurationAmino;
  coins?: CoinAmino[];
}
export interface MsgLockTokensAminoMsg {
  type: "osmosis/lockup/lock-tokens";
  value: MsgLockTokensAmino;
}
export interface MsgLockTokensSDKType {
  owner: string;
  duration: DurationSDKType;
  coins: CoinSDKType[];
}
export interface MsgLockTokensResponse {
  iD: bigint;
}
export interface MsgLockTokensResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgLockTokensResponse";
  value: Uint8Array;
}
export interface MsgLockTokensResponseAmino {
  ID?: string;
}
export interface MsgLockTokensResponseAminoMsg {
  type: "osmosis/lockup/lock-tokens-response";
  value: MsgLockTokensResponseAmino;
}
export interface MsgLockTokensResponseSDKType {
  ID: bigint;
}
export interface MsgBeginUnlockingAll {
  owner: string;
}
export interface MsgBeginUnlockingAllProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll";
  value: Uint8Array;
}
export interface MsgBeginUnlockingAllAmino {
  owner?: string;
}
export interface MsgBeginUnlockingAllAminoMsg {
  type: "osmosis/lockup/begin-unlock-tokens";
  value: MsgBeginUnlockingAllAmino;
}
export interface MsgBeginUnlockingAllSDKType {
  owner: string;
}
export interface MsgBeginUnlockingAllResponse {
  unlocks: PeriodLock[];
}
export interface MsgBeginUnlockingAllResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse";
  value: Uint8Array;
}
export interface MsgBeginUnlockingAllResponseAmino {
  unlocks?: PeriodLockAmino[];
}
export interface MsgBeginUnlockingAllResponseAminoMsg {
  type: "osmosis/lockup/begin-unlocking-all-response";
  value: MsgBeginUnlockingAllResponseAmino;
}
export interface MsgBeginUnlockingAllResponseSDKType {
  unlocks: PeriodLockSDKType[];
}
export interface MsgBeginUnlocking {
  owner: string;
  iD: bigint;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: Coin[];
}
export interface MsgBeginUnlockingProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlocking";
  value: Uint8Array;
}
export interface MsgBeginUnlockingAmino {
  owner?: string;
  ID?: string;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins?: CoinAmino[];
}
export interface MsgBeginUnlockingAminoMsg {
  type: "osmosis/lockup/begin-unlock-period-lock";
  value: MsgBeginUnlockingAmino;
}
export interface MsgBeginUnlockingSDKType {
  owner: string;
  ID: bigint;
  coins: CoinSDKType[];
}
export interface MsgBeginUnlockingResponse {
  success: boolean;
  unlockingLockID: bigint;
}
export interface MsgBeginUnlockingResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse";
  value: Uint8Array;
}
export interface MsgBeginUnlockingResponseAmino {
  success?: boolean;
  unlockingLockID?: string;
}
export interface MsgBeginUnlockingResponseAminoMsg {
  type: "osmosis/lockup/begin-unlocking-response";
  value: MsgBeginUnlockingResponseAmino;
}
export interface MsgBeginUnlockingResponseSDKType {
  success: boolean;
  unlockingLockID: bigint;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockup {
  owner: string;
  iD: bigint;
  /**
   * duration to be set. fails if lower than the current duration, or is
   * unlocking
   */
  duration: Duration;
}
export interface MsgExtendLockupProtoMsg {
  typeUrl: "/osmosis.lockup.MsgExtendLockup";
  value: Uint8Array;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockupAmino {
  owner?: string;
  ID?: string;
  /**
   * duration to be set. fails if lower than the current duration, or is
   * unlocking
   */
  duration?: DurationAmino;
}
export interface MsgExtendLockupAminoMsg {
  type: "osmosis/lockup/extend-lockup";
  value: MsgExtendLockupAmino;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockupSDKType {
  owner: string;
  ID: bigint;
  duration: DurationSDKType;
}
export interface MsgExtendLockupResponse {
  success: boolean;
}
export interface MsgExtendLockupResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgExtendLockupResponse";
  value: Uint8Array;
}
export interface MsgExtendLockupResponseAmino {
  success?: boolean;
}
export interface MsgExtendLockupResponseAminoMsg {
  type: "osmosis/lockup/extend-lockup-response";
  value: MsgExtendLockupResponseAmino;
}
export interface MsgExtendLockupResponseSDKType {
  success: boolean;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlock {
  owner: string;
  iD: bigint;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: Coin[];
}
export interface MsgForceUnlockProtoMsg {
  typeUrl: "/osmosis.lockup.MsgForceUnlock";
  value: Uint8Array;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlockAmino {
  owner?: string;
  ID?: string;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins?: CoinAmino[];
}
export interface MsgForceUnlockAminoMsg {
  type: "osmosis/lockup/force-unlock-tokens";
  value: MsgForceUnlockAmino;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlockSDKType {
  owner: string;
  ID: bigint;
  coins: CoinSDKType[];
}
export interface MsgForceUnlockResponse {
  success: boolean;
}
export interface MsgForceUnlockResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgForceUnlockResponse";
  value: Uint8Array;
}
export interface MsgForceUnlockResponseAmino {
  success?: boolean;
}
export interface MsgForceUnlockResponseAminoMsg {
  type: "osmosis/lockup/force-unlock-response";
  value: MsgForceUnlockResponseAmino;
}
export interface MsgForceUnlockResponseSDKType {
  success: boolean;
}
export interface MsgSetRewardReceiverAddress {
  owner: string;
  lockID: bigint;
  rewardReceiver: string;
}
export interface MsgSetRewardReceiverAddressProtoMsg {
  typeUrl: "/osmosis.lockup.MsgSetRewardReceiverAddress";
  value: Uint8Array;
}
export interface MsgSetRewardReceiverAddressAmino {
  owner?: string;
  lockID?: string;
  reward_receiver?: string;
}
export interface MsgSetRewardReceiverAddressAminoMsg {
  type: "osmosis/lockup/set-reward-receiver-address";
  value: MsgSetRewardReceiverAddressAmino;
}
export interface MsgSetRewardReceiverAddressSDKType {
  owner: string;
  lockID: bigint;
  reward_receiver: string;
}
export interface MsgSetRewardReceiverAddressResponse {
  success: boolean;
}
export interface MsgSetRewardReceiverAddressResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgSetRewardReceiverAddressResponse";
  value: Uint8Array;
}
export interface MsgSetRewardReceiverAddressResponseAmino {
  success?: boolean;
}
export interface MsgSetRewardReceiverAddressResponseAminoMsg {
  type: "osmosis/lockup/set-reward-receiver-address-response";
  value: MsgSetRewardReceiverAddressResponseAmino;
}
export interface MsgSetRewardReceiverAddressResponseSDKType {
  success: boolean;
}
/**
 * DEPRECATED
 * Following messages are deprecated but kept to support indexing.
 */
export interface MsgUnlockPeriodLock {
  owner: string;
  iD: bigint;
}
export interface MsgUnlockPeriodLockProtoMsg {
  typeUrl: "/osmosis.lockup.MsgUnlockPeriodLock";
  value: Uint8Array;
}
/**
 * DEPRECATED
 * Following messages are deprecated but kept to support indexing.
 */
export interface MsgUnlockPeriodLockAmino {
  owner?: string;
  ID?: string;
}
export interface MsgUnlockPeriodLockAminoMsg {
  type: "osmosis/lockup/unlock-period-lock";
  value: MsgUnlockPeriodLockAmino;
}
/**
 * DEPRECATED
 * Following messages are deprecated but kept to support indexing.
 */
export interface MsgUnlockPeriodLockSDKType {
  owner: string;
  ID: bigint;
}
export interface MsgUnlockTokens {
  owner: string;
}
export interface MsgUnlockTokensProtoMsg {
  typeUrl: "/osmosis.lockup.MsgUnlockTokens";
  value: Uint8Array;
}
export interface MsgUnlockTokensAmino {
  owner?: string;
}
export interface MsgUnlockTokensAminoMsg {
  type: "osmosis/lockup/unlock-tokens";
  value: MsgUnlockTokensAmino;
}
export interface MsgUnlockTokensSDKType {
  owner: string;
}
function createBaseMsgLockTokens(): MsgLockTokens {
  return {
    owner: "",
    duration: Duration.fromPartial({}),
    coins: []
  };
}
export const MsgLockTokens = {
  typeUrl: "/osmosis.lockup.MsgLockTokens",
  aminoType: "osmosis/lockup/lock-tokens",
  is(o: any): o is MsgLockTokens {
    return o && (o.$typeUrl === MsgLockTokens.typeUrl || typeof o.owner === "string" && Duration.is(o.duration) && Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is MsgLockTokensSDKType {
    return o && (o.$typeUrl === MsgLockTokens.typeUrl || typeof o.owner === "string" && Duration.isSDK(o.duration) && Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is MsgLockTokensAmino {
    return o && (o.$typeUrl === MsgLockTokens.typeUrl || typeof o.owner === "string" && Duration.isAmino(o.duration) && Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: MsgLockTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLockTokens {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgLockTokens): JsonSafe<MsgLockTokens> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLockTokens>, I>>(object: I): MsgLockTokens {
    const message = createBaseMsgLockTokens();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgLockTokensAmino): MsgLockTokens {
    const message = createBaseMsgLockTokens();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgLockTokens): MsgLockTokensAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgLockTokensAminoMsg): MsgLockTokens {
    return MsgLockTokens.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLockTokens): MsgLockTokensAminoMsg {
    return {
      type: "osmosis/lockup/lock-tokens",
      value: MsgLockTokens.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLockTokensProtoMsg): MsgLockTokens {
    return MsgLockTokens.decode(message.value);
  },
  toProto(message: MsgLockTokens): Uint8Array {
    return MsgLockTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgLockTokens): MsgLockTokensProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgLockTokens",
      value: MsgLockTokens.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgLockTokens.typeUrl, MsgLockTokens);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgLockTokens.aminoType, MsgLockTokens.typeUrl);
function createBaseMsgLockTokensResponse(): MsgLockTokensResponse {
  return {
    iD: BigInt(0)
  };
}
export const MsgLockTokensResponse = {
  typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
  aminoType: "osmosis/lockup/lock-tokens-response",
  is(o: any): o is MsgLockTokensResponse {
    return o && (o.$typeUrl === MsgLockTokensResponse.typeUrl || typeof o.iD === "bigint");
  },
  isSDK(o: any): o is MsgLockTokensResponseSDKType {
    return o && (o.$typeUrl === MsgLockTokensResponse.typeUrl || typeof o.ID === "bigint");
  },
  isAmino(o: any): o is MsgLockTokensResponseAmino {
    return o && (o.$typeUrl === MsgLockTokensResponse.typeUrl || typeof o.ID === "bigint");
  },
  encode(message: MsgLockTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iD !== BigInt(0)) {
      writer.uint32(8).uint64(message.iD);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iD = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLockTokensResponse {
    return {
      iD: isSet(object.iD) ? BigInt(object.iD.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgLockTokensResponse): JsonSafe<MsgLockTokensResponse> {
    const obj: any = {};
    message.iD !== undefined && (obj.iD = (message.iD || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLockTokensResponse>, I>>(object: I): MsgLockTokensResponse {
    const message = createBaseMsgLockTokensResponse();
    message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgLockTokensResponseAmino): MsgLockTokensResponse {
    const message = createBaseMsgLockTokensResponse();
    if (object.ID !== undefined && object.ID !== null) {
      message.iD = BigInt(object.ID);
    }
    return message;
  },
  toAmino(message: MsgLockTokensResponse): MsgLockTokensResponseAmino {
    const obj: any = {};
    obj.ID = message.iD !== BigInt(0) ? (message.iD?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLockTokensResponseAminoMsg): MsgLockTokensResponse {
    return MsgLockTokensResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLockTokensResponse): MsgLockTokensResponseAminoMsg {
    return {
      type: "osmosis/lockup/lock-tokens-response",
      value: MsgLockTokensResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLockTokensResponseProtoMsg): MsgLockTokensResponse {
    return MsgLockTokensResponse.decode(message.value);
  },
  toProto(message: MsgLockTokensResponse): Uint8Array {
    return MsgLockTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLockTokensResponse): MsgLockTokensResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
      value: MsgLockTokensResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgLockTokensResponse.typeUrl, MsgLockTokensResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgLockTokensResponse.aminoType, MsgLockTokensResponse.typeUrl);
function createBaseMsgBeginUnlockingAll(): MsgBeginUnlockingAll {
  return {
    owner: ""
  };
}
export const MsgBeginUnlockingAll = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
  aminoType: "osmosis/lockup/begin-unlock-tokens",
  is(o: any): o is MsgBeginUnlockingAll {
    return o && (o.$typeUrl === MsgBeginUnlockingAll.typeUrl || typeof o.owner === "string");
  },
  isSDK(o: any): o is MsgBeginUnlockingAllSDKType {
    return o && (o.$typeUrl === MsgBeginUnlockingAll.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is MsgBeginUnlockingAllAmino {
    return o && (o.$typeUrl === MsgBeginUnlockingAll.typeUrl || typeof o.owner === "string");
  },
  encode(message: MsgBeginUnlockingAll, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingAll {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingAll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlockingAll {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message: MsgBeginUnlockingAll): JsonSafe<MsgBeginUnlockingAll> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBeginUnlockingAll>, I>>(object: I): MsgBeginUnlockingAll {
    const message = createBaseMsgBeginUnlockingAll();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgBeginUnlockingAllAmino): MsgBeginUnlockingAll {
    const message = createBaseMsgBeginUnlockingAll();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgBeginUnlockingAllAminoMsg): MsgBeginUnlockingAll {
    return MsgBeginUnlockingAll.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllAminoMsg {
    return {
      type: "osmosis/lockup/begin-unlock-tokens",
      value: MsgBeginUnlockingAll.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginUnlockingAllProtoMsg): MsgBeginUnlockingAll {
    return MsgBeginUnlockingAll.decode(message.value);
  },
  toProto(message: MsgBeginUnlockingAll): Uint8Array {
    return MsgBeginUnlockingAll.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
      value: MsgBeginUnlockingAll.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBeginUnlockingAll.typeUrl, MsgBeginUnlockingAll);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBeginUnlockingAll.aminoType, MsgBeginUnlockingAll.typeUrl);
function createBaseMsgBeginUnlockingAllResponse(): MsgBeginUnlockingAllResponse {
  return {
    unlocks: []
  };
}
export const MsgBeginUnlockingAllResponse = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
  aminoType: "osmosis/lockup/begin-unlocking-all-response",
  is(o: any): o is MsgBeginUnlockingAllResponse {
    return o && (o.$typeUrl === MsgBeginUnlockingAllResponse.typeUrl || Array.isArray(o.unlocks) && (!o.unlocks.length || PeriodLock.is(o.unlocks[0])));
  },
  isSDK(o: any): o is MsgBeginUnlockingAllResponseSDKType {
    return o && (o.$typeUrl === MsgBeginUnlockingAllResponse.typeUrl || Array.isArray(o.unlocks) && (!o.unlocks.length || PeriodLock.isSDK(o.unlocks[0])));
  },
  isAmino(o: any): o is MsgBeginUnlockingAllResponseAmino {
    return o && (o.$typeUrl === MsgBeginUnlockingAllResponse.typeUrl || Array.isArray(o.unlocks) && (!o.unlocks.length || PeriodLock.isAmino(o.unlocks[0])));
  },
  encode(message: MsgBeginUnlockingAllResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unlocks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingAllResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unlocks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlockingAllResponse {
    return {
      unlocks: Array.isArray(object?.unlocks) ? object.unlocks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgBeginUnlockingAllResponse): JsonSafe<MsgBeginUnlockingAllResponse> {
    const obj: any = {};
    if (message.unlocks) {
      obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.unlocks = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBeginUnlockingAllResponse>, I>>(object: I): MsgBeginUnlockingAllResponse {
    const message = createBaseMsgBeginUnlockingAllResponse();
    message.unlocks = object.unlocks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBeginUnlockingAllResponseAmino): MsgBeginUnlockingAllResponse {
    const message = createBaseMsgBeginUnlockingAllResponse();
    message.unlocks = object.unlocks?.map(e => PeriodLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseAmino {
    const obj: any = {};
    if (message.unlocks) {
      obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.unlocks = message.unlocks;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBeginUnlockingAllResponseAminoMsg): MsgBeginUnlockingAllResponse {
    return MsgBeginUnlockingAllResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseAminoMsg {
    return {
      type: "osmosis/lockup/begin-unlocking-all-response",
      value: MsgBeginUnlockingAllResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginUnlockingAllResponseProtoMsg): MsgBeginUnlockingAllResponse {
    return MsgBeginUnlockingAllResponse.decode(message.value);
  },
  toProto(message: MsgBeginUnlockingAllResponse): Uint8Array {
    return MsgBeginUnlockingAllResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
      value: MsgBeginUnlockingAllResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBeginUnlockingAllResponse.typeUrl, MsgBeginUnlockingAllResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBeginUnlockingAllResponse.aminoType, MsgBeginUnlockingAllResponse.typeUrl);
function createBaseMsgBeginUnlocking(): MsgBeginUnlocking {
  return {
    owner: "",
    iD: BigInt(0),
    coins: []
  };
}
export const MsgBeginUnlocking = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
  aminoType: "osmosis/lockup/begin-unlock-period-lock",
  is(o: any): o is MsgBeginUnlocking {
    return o && (o.$typeUrl === MsgBeginUnlocking.typeUrl || typeof o.owner === "string" && typeof o.iD === "bigint" && Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is MsgBeginUnlockingSDKType {
    return o && (o.$typeUrl === MsgBeginUnlocking.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint" && Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is MsgBeginUnlockingAmino {
    return o && (o.$typeUrl === MsgBeginUnlocking.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint" && Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: MsgBeginUnlocking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.iD !== BigInt(0)) {
      writer.uint32(16).uint64(message.iD);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlocking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlocking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.iD = reader.uint64();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlocking {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      iD: isSet(object.iD) ? BigInt(object.iD.toString()) : BigInt(0),
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgBeginUnlocking): JsonSafe<MsgBeginUnlocking> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.iD !== undefined && (obj.iD = (message.iD || BigInt(0)).toString());
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBeginUnlocking>, I>>(object: I): MsgBeginUnlocking {
    const message = createBaseMsgBeginUnlocking();
    message.owner = object.owner ?? "";
    message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBeginUnlockingAmino): MsgBeginUnlocking {
    const message = createBaseMsgBeginUnlocking();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.iD = BigInt(object.ID);
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBeginUnlocking): MsgBeginUnlockingAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.ID = message.iD !== BigInt(0) ? (message.iD?.toString)() : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBeginUnlockingAminoMsg): MsgBeginUnlocking {
    return MsgBeginUnlocking.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginUnlocking): MsgBeginUnlockingAminoMsg {
    return {
      type: "osmosis/lockup/begin-unlock-period-lock",
      value: MsgBeginUnlocking.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginUnlockingProtoMsg): MsgBeginUnlocking {
    return MsgBeginUnlocking.decode(message.value);
  },
  toProto(message: MsgBeginUnlocking): Uint8Array {
    return MsgBeginUnlocking.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlocking): MsgBeginUnlockingProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
      value: MsgBeginUnlocking.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBeginUnlocking.typeUrl, MsgBeginUnlocking);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBeginUnlocking.aminoType, MsgBeginUnlocking.typeUrl);
function createBaseMsgBeginUnlockingResponse(): MsgBeginUnlockingResponse {
  return {
    success: false,
    unlockingLockID: BigInt(0)
  };
}
export const MsgBeginUnlockingResponse = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
  aminoType: "osmosis/lockup/begin-unlocking-response",
  is(o: any): o is MsgBeginUnlockingResponse {
    return o && (o.$typeUrl === MsgBeginUnlockingResponse.typeUrl || typeof o.success === "boolean" && typeof o.unlockingLockID === "bigint");
  },
  isSDK(o: any): o is MsgBeginUnlockingResponseSDKType {
    return o && (o.$typeUrl === MsgBeginUnlockingResponse.typeUrl || typeof o.success === "boolean" && typeof o.unlockingLockID === "bigint");
  },
  isAmino(o: any): o is MsgBeginUnlockingResponseAmino {
    return o && (o.$typeUrl === MsgBeginUnlockingResponse.typeUrl || typeof o.success === "boolean" && typeof o.unlockingLockID === "bigint");
  },
  encode(message: MsgBeginUnlockingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.unlockingLockID !== BigInt(0)) {
      writer.uint32(16).uint64(message.unlockingLockID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.unlockingLockID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlockingResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      unlockingLockID: isSet(object.unlockingLockID) ? BigInt(object.unlockingLockID.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgBeginUnlockingResponse): JsonSafe<MsgBeginUnlockingResponse> {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.unlockingLockID !== undefined && (obj.unlockingLockID = (message.unlockingLockID || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBeginUnlockingResponse>, I>>(object: I): MsgBeginUnlockingResponse {
    const message = createBaseMsgBeginUnlockingResponse();
    message.success = object.success ?? false;
    message.unlockingLockID = object.unlockingLockID !== undefined && object.unlockingLockID !== null ? BigInt(object.unlockingLockID.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgBeginUnlockingResponseAmino): MsgBeginUnlockingResponse {
    const message = createBaseMsgBeginUnlockingResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    if (object.unlockingLockID !== undefined && object.unlockingLockID !== null) {
      message.unlockingLockID = BigInt(object.unlockingLockID);
    }
    return message;
  },
  toAmino(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    obj.unlockingLockID = message.unlockingLockID !== BigInt(0) ? (message.unlockingLockID?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBeginUnlockingResponseAminoMsg): MsgBeginUnlockingResponse {
    return MsgBeginUnlockingResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseAminoMsg {
    return {
      type: "osmosis/lockup/begin-unlocking-response",
      value: MsgBeginUnlockingResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBeginUnlockingResponseProtoMsg): MsgBeginUnlockingResponse {
    return MsgBeginUnlockingResponse.decode(message.value);
  },
  toProto(message: MsgBeginUnlockingResponse): Uint8Array {
    return MsgBeginUnlockingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
      value: MsgBeginUnlockingResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBeginUnlockingResponse.typeUrl, MsgBeginUnlockingResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBeginUnlockingResponse.aminoType, MsgBeginUnlockingResponse.typeUrl);
function createBaseMsgExtendLockup(): MsgExtendLockup {
  return {
    owner: "",
    iD: BigInt(0),
    duration: Duration.fromPartial({})
  };
}
export const MsgExtendLockup = {
  typeUrl: "/osmosis.lockup.MsgExtendLockup",
  aminoType: "osmosis/lockup/extend-lockup",
  is(o: any): o is MsgExtendLockup {
    return o && (o.$typeUrl === MsgExtendLockup.typeUrl || typeof o.owner === "string" && typeof o.iD === "bigint" && Duration.is(o.duration));
  },
  isSDK(o: any): o is MsgExtendLockupSDKType {
    return o && (o.$typeUrl === MsgExtendLockup.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint" && Duration.isSDK(o.duration));
  },
  isAmino(o: any): o is MsgExtendLockupAmino {
    return o && (o.$typeUrl === MsgExtendLockup.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint" && Duration.isAmino(o.duration));
  },
  encode(message: MsgExtendLockup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.iD !== BigInt(0)) {
      writer.uint32(16).uint64(message.iD);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendLockup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendLockup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.iD = reader.uint64();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExtendLockup {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      iD: isSet(object.iD) ? BigInt(object.iD.toString()) : BigInt(0),
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  toJSON(message: MsgExtendLockup): JsonSafe<MsgExtendLockup> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.iD !== undefined && (obj.iD = (message.iD || BigInt(0)).toString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgExtendLockup>, I>>(object: I): MsgExtendLockup {
    const message = createBaseMsgExtendLockup();
    message.owner = object.owner ?? "";
    message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },
  fromAmino(object: MsgExtendLockupAmino): MsgExtendLockup {
    const message = createBaseMsgExtendLockup();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.iD = BigInt(object.ID);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    return message;
  },
  toAmino(message: MsgExtendLockup): MsgExtendLockupAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.ID = message.iD !== BigInt(0) ? (message.iD?.toString)() : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExtendLockupAminoMsg): MsgExtendLockup {
    return MsgExtendLockup.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExtendLockup): MsgExtendLockupAminoMsg {
    return {
      type: "osmosis/lockup/extend-lockup",
      value: MsgExtendLockup.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExtendLockupProtoMsg): MsgExtendLockup {
    return MsgExtendLockup.decode(message.value);
  },
  toProto(message: MsgExtendLockup): Uint8Array {
    return MsgExtendLockup.encode(message).finish();
  },
  toProtoMsg(message: MsgExtendLockup): MsgExtendLockupProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgExtendLockup",
      value: MsgExtendLockup.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExtendLockup.typeUrl, MsgExtendLockup);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExtendLockup.aminoType, MsgExtendLockup.typeUrl);
function createBaseMsgExtendLockupResponse(): MsgExtendLockupResponse {
  return {
    success: false
  };
}
export const MsgExtendLockupResponse = {
  typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
  aminoType: "osmosis/lockup/extend-lockup-response",
  is(o: any): o is MsgExtendLockupResponse {
    return o && (o.$typeUrl === MsgExtendLockupResponse.typeUrl || typeof o.success === "boolean");
  },
  isSDK(o: any): o is MsgExtendLockupResponseSDKType {
    return o && (o.$typeUrl === MsgExtendLockupResponse.typeUrl || typeof o.success === "boolean");
  },
  isAmino(o: any): o is MsgExtendLockupResponseAmino {
    return o && (o.$typeUrl === MsgExtendLockupResponse.typeUrl || typeof o.success === "boolean");
  },
  encode(message: MsgExtendLockupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendLockupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendLockupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExtendLockupResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  toJSON(message: MsgExtendLockupResponse): JsonSafe<MsgExtendLockupResponse> {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgExtendLockupResponse>, I>>(object: I): MsgExtendLockupResponse {
    const message = createBaseMsgExtendLockupResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object: MsgExtendLockupResponseAmino): MsgExtendLockupResponse {
    const message = createBaseMsgExtendLockupResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgExtendLockupResponse): MsgExtendLockupResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: MsgExtendLockupResponseAminoMsg): MsgExtendLockupResponse {
    return MsgExtendLockupResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExtendLockupResponse): MsgExtendLockupResponseAminoMsg {
    return {
      type: "osmosis/lockup/extend-lockup-response",
      value: MsgExtendLockupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExtendLockupResponseProtoMsg): MsgExtendLockupResponse {
    return MsgExtendLockupResponse.decode(message.value);
  },
  toProto(message: MsgExtendLockupResponse): Uint8Array {
    return MsgExtendLockupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExtendLockupResponse): MsgExtendLockupResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
      value: MsgExtendLockupResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExtendLockupResponse.typeUrl, MsgExtendLockupResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExtendLockupResponse.aminoType, MsgExtendLockupResponse.typeUrl);
function createBaseMsgForceUnlock(): MsgForceUnlock {
  return {
    owner: "",
    iD: BigInt(0),
    coins: []
  };
}
export const MsgForceUnlock = {
  typeUrl: "/osmosis.lockup.MsgForceUnlock",
  aminoType: "osmosis/lockup/force-unlock-tokens",
  is(o: any): o is MsgForceUnlock {
    return o && (o.$typeUrl === MsgForceUnlock.typeUrl || typeof o.owner === "string" && typeof o.iD === "bigint" && Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is MsgForceUnlockSDKType {
    return o && (o.$typeUrl === MsgForceUnlock.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint" && Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is MsgForceUnlockAmino {
    return o && (o.$typeUrl === MsgForceUnlock.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint" && Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: MsgForceUnlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.iD !== BigInt(0)) {
      writer.uint32(16).uint64(message.iD);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUnlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceUnlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.iD = reader.uint64();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgForceUnlock {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      iD: isSet(object.iD) ? BigInt(object.iD.toString()) : BigInt(0),
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgForceUnlock): JsonSafe<MsgForceUnlock> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.iD !== undefined && (obj.iD = (message.iD || BigInt(0)).toString());
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgForceUnlock>, I>>(object: I): MsgForceUnlock {
    const message = createBaseMsgForceUnlock();
    message.owner = object.owner ?? "";
    message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgForceUnlockAmino): MsgForceUnlock {
    const message = createBaseMsgForceUnlock();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.iD = BigInt(object.ID);
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgForceUnlock): MsgForceUnlockAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.ID = message.iD !== BigInt(0) ? (message.iD?.toString)() : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgForceUnlockAminoMsg): MsgForceUnlock {
    return MsgForceUnlock.fromAmino(object.value);
  },
  toAminoMsg(message: MsgForceUnlock): MsgForceUnlockAminoMsg {
    return {
      type: "osmosis/lockup/force-unlock-tokens",
      value: MsgForceUnlock.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgForceUnlockProtoMsg): MsgForceUnlock {
    return MsgForceUnlock.decode(message.value);
  },
  toProto(message: MsgForceUnlock): Uint8Array {
    return MsgForceUnlock.encode(message).finish();
  },
  toProtoMsg(message: MsgForceUnlock): MsgForceUnlockProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgForceUnlock",
      value: MsgForceUnlock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgForceUnlock.typeUrl, MsgForceUnlock);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgForceUnlock.aminoType, MsgForceUnlock.typeUrl);
function createBaseMsgForceUnlockResponse(): MsgForceUnlockResponse {
  return {
    success: false
  };
}
export const MsgForceUnlockResponse = {
  typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
  aminoType: "osmosis/lockup/force-unlock-response",
  is(o: any): o is MsgForceUnlockResponse {
    return o && (o.$typeUrl === MsgForceUnlockResponse.typeUrl || typeof o.success === "boolean");
  },
  isSDK(o: any): o is MsgForceUnlockResponseSDKType {
    return o && (o.$typeUrl === MsgForceUnlockResponse.typeUrl || typeof o.success === "boolean");
  },
  isAmino(o: any): o is MsgForceUnlockResponseAmino {
    return o && (o.$typeUrl === MsgForceUnlockResponse.typeUrl || typeof o.success === "boolean");
  },
  encode(message: MsgForceUnlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUnlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceUnlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgForceUnlockResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  toJSON(message: MsgForceUnlockResponse): JsonSafe<MsgForceUnlockResponse> {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgForceUnlockResponse>, I>>(object: I): MsgForceUnlockResponse {
    const message = createBaseMsgForceUnlockResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object: MsgForceUnlockResponseAmino): MsgForceUnlockResponse {
    const message = createBaseMsgForceUnlockResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgForceUnlockResponse): MsgForceUnlockResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: MsgForceUnlockResponseAminoMsg): MsgForceUnlockResponse {
    return MsgForceUnlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgForceUnlockResponse): MsgForceUnlockResponseAminoMsg {
    return {
      type: "osmosis/lockup/force-unlock-response",
      value: MsgForceUnlockResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgForceUnlockResponseProtoMsg): MsgForceUnlockResponse {
    return MsgForceUnlockResponse.decode(message.value);
  },
  toProto(message: MsgForceUnlockResponse): Uint8Array {
    return MsgForceUnlockResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgForceUnlockResponse): MsgForceUnlockResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
      value: MsgForceUnlockResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgForceUnlockResponse.typeUrl, MsgForceUnlockResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgForceUnlockResponse.aminoType, MsgForceUnlockResponse.typeUrl);
function createBaseMsgSetRewardReceiverAddress(): MsgSetRewardReceiverAddress {
  return {
    owner: "",
    lockID: BigInt(0),
    rewardReceiver: ""
  };
}
export const MsgSetRewardReceiverAddress = {
  typeUrl: "/osmosis.lockup.MsgSetRewardReceiverAddress",
  aminoType: "osmosis/lockup/set-reward-receiver-address",
  is(o: any): o is MsgSetRewardReceiverAddress {
    return o && (o.$typeUrl === MsgSetRewardReceiverAddress.typeUrl || typeof o.owner === "string" && typeof o.lockID === "bigint" && typeof o.rewardReceiver === "string");
  },
  isSDK(o: any): o is MsgSetRewardReceiverAddressSDKType {
    return o && (o.$typeUrl === MsgSetRewardReceiverAddress.typeUrl || typeof o.owner === "string" && typeof o.lockID === "bigint" && typeof o.reward_receiver === "string");
  },
  isAmino(o: any): o is MsgSetRewardReceiverAddressAmino {
    return o && (o.$typeUrl === MsgSetRewardReceiverAddress.typeUrl || typeof o.owner === "string" && typeof o.lockID === "bigint" && typeof o.reward_receiver === "string");
  },
  encode(message: MsgSetRewardReceiverAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.lockID !== BigInt(0)) {
      writer.uint32(16).uint64(message.lockID);
    }
    if (message.rewardReceiver !== "") {
      writer.uint32(26).string(message.rewardReceiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRewardReceiverAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRewardReceiverAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.lockID = reader.uint64();
          break;
        case 3:
          message.rewardReceiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetRewardReceiverAddress {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      lockID: isSet(object.lockID) ? BigInt(object.lockID.toString()) : BigInt(0),
      rewardReceiver: isSet(object.rewardReceiver) ? String(object.rewardReceiver) : ""
    };
  },
  toJSON(message: MsgSetRewardReceiverAddress): JsonSafe<MsgSetRewardReceiverAddress> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.lockID !== undefined && (obj.lockID = (message.lockID || BigInt(0)).toString());
    message.rewardReceiver !== undefined && (obj.rewardReceiver = message.rewardReceiver);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetRewardReceiverAddress>, I>>(object: I): MsgSetRewardReceiverAddress {
    const message = createBaseMsgSetRewardReceiverAddress();
    message.owner = object.owner ?? "";
    message.lockID = object.lockID !== undefined && object.lockID !== null ? BigInt(object.lockID.toString()) : BigInt(0);
    message.rewardReceiver = object.rewardReceiver ?? "";
    return message;
  },
  fromAmino(object: MsgSetRewardReceiverAddressAmino): MsgSetRewardReceiverAddress {
    const message = createBaseMsgSetRewardReceiverAddress();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.lockID !== undefined && object.lockID !== null) {
      message.lockID = BigInt(object.lockID);
    }
    if (object.reward_receiver !== undefined && object.reward_receiver !== null) {
      message.rewardReceiver = object.reward_receiver;
    }
    return message;
  },
  toAmino(message: MsgSetRewardReceiverAddress): MsgSetRewardReceiverAddressAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.lockID = message.lockID !== BigInt(0) ? (message.lockID?.toString)() : undefined;
    obj.reward_receiver = message.rewardReceiver === "" ? undefined : message.rewardReceiver;
    return obj;
  },
  fromAminoMsg(object: MsgSetRewardReceiverAddressAminoMsg): MsgSetRewardReceiverAddress {
    return MsgSetRewardReceiverAddress.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetRewardReceiverAddress): MsgSetRewardReceiverAddressAminoMsg {
    return {
      type: "osmosis/lockup/set-reward-receiver-address",
      value: MsgSetRewardReceiverAddress.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetRewardReceiverAddressProtoMsg): MsgSetRewardReceiverAddress {
    return MsgSetRewardReceiverAddress.decode(message.value);
  },
  toProto(message: MsgSetRewardReceiverAddress): Uint8Array {
    return MsgSetRewardReceiverAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRewardReceiverAddress): MsgSetRewardReceiverAddressProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgSetRewardReceiverAddress",
      value: MsgSetRewardReceiverAddress.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetRewardReceiverAddress.typeUrl, MsgSetRewardReceiverAddress);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetRewardReceiverAddress.aminoType, MsgSetRewardReceiverAddress.typeUrl);
function createBaseMsgSetRewardReceiverAddressResponse(): MsgSetRewardReceiverAddressResponse {
  return {
    success: false
  };
}
export const MsgSetRewardReceiverAddressResponse = {
  typeUrl: "/osmosis.lockup.MsgSetRewardReceiverAddressResponse",
  aminoType: "osmosis/lockup/set-reward-receiver-address-response",
  is(o: any): o is MsgSetRewardReceiverAddressResponse {
    return o && (o.$typeUrl === MsgSetRewardReceiverAddressResponse.typeUrl || typeof o.success === "boolean");
  },
  isSDK(o: any): o is MsgSetRewardReceiverAddressResponseSDKType {
    return o && (o.$typeUrl === MsgSetRewardReceiverAddressResponse.typeUrl || typeof o.success === "boolean");
  },
  isAmino(o: any): o is MsgSetRewardReceiverAddressResponseAmino {
    return o && (o.$typeUrl === MsgSetRewardReceiverAddressResponse.typeUrl || typeof o.success === "boolean");
  },
  encode(message: MsgSetRewardReceiverAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRewardReceiverAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRewardReceiverAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetRewardReceiverAddressResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },
  toJSON(message: MsgSetRewardReceiverAddressResponse): JsonSafe<MsgSetRewardReceiverAddressResponse> {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetRewardReceiverAddressResponse>, I>>(object: I): MsgSetRewardReceiverAddressResponse {
    const message = createBaseMsgSetRewardReceiverAddressResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object: MsgSetRewardReceiverAddressResponseAmino): MsgSetRewardReceiverAddressResponse {
    const message = createBaseMsgSetRewardReceiverAddressResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgSetRewardReceiverAddressResponse): MsgSetRewardReceiverAddressResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: MsgSetRewardReceiverAddressResponseAminoMsg): MsgSetRewardReceiverAddressResponse {
    return MsgSetRewardReceiverAddressResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetRewardReceiverAddressResponse): MsgSetRewardReceiverAddressResponseAminoMsg {
    return {
      type: "osmosis/lockup/set-reward-receiver-address-response",
      value: MsgSetRewardReceiverAddressResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetRewardReceiverAddressResponseProtoMsg): MsgSetRewardReceiverAddressResponse {
    return MsgSetRewardReceiverAddressResponse.decode(message.value);
  },
  toProto(message: MsgSetRewardReceiverAddressResponse): Uint8Array {
    return MsgSetRewardReceiverAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRewardReceiverAddressResponse): MsgSetRewardReceiverAddressResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgSetRewardReceiverAddressResponse",
      value: MsgSetRewardReceiverAddressResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetRewardReceiverAddressResponse.typeUrl, MsgSetRewardReceiverAddressResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetRewardReceiverAddressResponse.aminoType, MsgSetRewardReceiverAddressResponse.typeUrl);
function createBaseMsgUnlockPeriodLock(): MsgUnlockPeriodLock {
  return {
    owner: "",
    iD: BigInt(0)
  };
}
export const MsgUnlockPeriodLock = {
  typeUrl: "/osmosis.lockup.MsgUnlockPeriodLock",
  aminoType: "osmosis/lockup/unlock-period-lock",
  is(o: any): o is MsgUnlockPeriodLock {
    return o && (o.$typeUrl === MsgUnlockPeriodLock.typeUrl || typeof o.owner === "string" && typeof o.iD === "bigint");
  },
  isSDK(o: any): o is MsgUnlockPeriodLockSDKType {
    return o && (o.$typeUrl === MsgUnlockPeriodLock.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint");
  },
  isAmino(o: any): o is MsgUnlockPeriodLockAmino {
    return o && (o.$typeUrl === MsgUnlockPeriodLock.typeUrl || typeof o.owner === "string" && typeof o.ID === "bigint");
  },
  encode(message: MsgUnlockPeriodLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.iD !== BigInt(0)) {
      writer.uint32(16).uint64(message.iD);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnlockPeriodLock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlockPeriodLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.iD = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnlockPeriodLock {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      iD: isSet(object.iD) ? BigInt(object.iD.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgUnlockPeriodLock): JsonSafe<MsgUnlockPeriodLock> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.iD !== undefined && (obj.iD = (message.iD || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnlockPeriodLock>, I>>(object: I): MsgUnlockPeriodLock {
    const message = createBaseMsgUnlockPeriodLock();
    message.owner = object.owner ?? "";
    message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnlockPeriodLockAmino): MsgUnlockPeriodLock {
    const message = createBaseMsgUnlockPeriodLock();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.iD = BigInt(object.ID);
    }
    return message;
  },
  toAmino(message: MsgUnlockPeriodLock): MsgUnlockPeriodLockAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.ID = message.iD !== BigInt(0) ? (message.iD?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnlockPeriodLockAminoMsg): MsgUnlockPeriodLock {
    return MsgUnlockPeriodLock.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnlockPeriodLock): MsgUnlockPeriodLockAminoMsg {
    return {
      type: "osmosis/lockup/unlock-period-lock",
      value: MsgUnlockPeriodLock.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnlockPeriodLockProtoMsg): MsgUnlockPeriodLock {
    return MsgUnlockPeriodLock.decode(message.value);
  },
  toProto(message: MsgUnlockPeriodLock): Uint8Array {
    return MsgUnlockPeriodLock.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlockPeriodLock): MsgUnlockPeriodLockProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgUnlockPeriodLock",
      value: MsgUnlockPeriodLock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnlockPeriodLock.typeUrl, MsgUnlockPeriodLock);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnlockPeriodLock.aminoType, MsgUnlockPeriodLock.typeUrl);
function createBaseMsgUnlockTokens(): MsgUnlockTokens {
  return {
    owner: ""
  };
}
export const MsgUnlockTokens = {
  typeUrl: "/osmosis.lockup.MsgUnlockTokens",
  aminoType: "osmosis/lockup/unlock-tokens",
  is(o: any): o is MsgUnlockTokens {
    return o && (o.$typeUrl === MsgUnlockTokens.typeUrl || typeof o.owner === "string");
  },
  isSDK(o: any): o is MsgUnlockTokensSDKType {
    return o && (o.$typeUrl === MsgUnlockTokens.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is MsgUnlockTokensAmino {
    return o && (o.$typeUrl === MsgUnlockTokens.typeUrl || typeof o.owner === "string");
  },
  encode(message: MsgUnlockTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnlockTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlockTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnlockTokens {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message: MsgUnlockTokens): JsonSafe<MsgUnlockTokens> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnlockTokens>, I>>(object: I): MsgUnlockTokens {
    const message = createBaseMsgUnlockTokens();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgUnlockTokensAmino): MsgUnlockTokens {
    const message = createBaseMsgUnlockTokens();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgUnlockTokens): MsgUnlockTokensAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgUnlockTokensAminoMsg): MsgUnlockTokens {
    return MsgUnlockTokens.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnlockTokens): MsgUnlockTokensAminoMsg {
    return {
      type: "osmosis/lockup/unlock-tokens",
      value: MsgUnlockTokens.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnlockTokensProtoMsg): MsgUnlockTokens {
    return MsgUnlockTokens.decode(message.value);
  },
  toProto(message: MsgUnlockTokens): Uint8Array {
    return MsgUnlockTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlockTokens): MsgUnlockTokensProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgUnlockTokens",
      value: MsgUnlockTokens.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnlockTokens.typeUrl, MsgUnlockTokens);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnlockTokens.aminoType, MsgUnlockTokens.typeUrl);