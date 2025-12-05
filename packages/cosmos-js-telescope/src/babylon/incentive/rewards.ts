//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact, isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * FinalityProviderHistoricalRewards represents the cumulative rewards ratio of
 * the finality provider per sat in that period. The period is ommited here and
 * should be part of the key used to store this structure. Key: Prefix +
 * Finality provider bech32 address + Period.
 */
export interface FinalityProviderHistoricalRewards {
  /**
   * The cumulative rewards of that finality provider per sat until that period
   * This coins will aways increase the value, never be reduced due to keep
   * acumulation and when the cumulative rewards will be used to distribute
   * rewards, 2 periods will be loaded, calculate the difference and multiplied
   * by the total sat amount delegated
   * https://github.com/cosmos/cosmos-sdk/blob/e76102f885b71fd6e1c1efb692052173c4b3c3a3/x/distribution/keeper/delegation.go#L47
   */
  cumulativeRewardsPerSat: Coin[];
}
export interface FinalityProviderHistoricalRewardsProtoMsg {
  typeUrl: "/babylon.incentive.FinalityProviderHistoricalRewards";
  value: Uint8Array;
}
/**
 * FinalityProviderHistoricalRewards represents the cumulative rewards ratio of
 * the finality provider per sat in that period. The period is ommited here and
 * should be part of the key used to store this structure. Key: Prefix +
 * Finality provider bech32 address + Period.
 */
export interface FinalityProviderHistoricalRewardsAmino {
  /**
   * The cumulative rewards of that finality provider per sat until that period
   * This coins will aways increase the value, never be reduced due to keep
   * acumulation and when the cumulative rewards will be used to distribute
   * rewards, 2 periods will be loaded, calculate the difference and multiplied
   * by the total sat amount delegated
   * https://github.com/cosmos/cosmos-sdk/blob/e76102f885b71fd6e1c1efb692052173c4b3c3a3/x/distribution/keeper/delegation.go#L47
   */
  cumulative_rewards_per_sat?: CoinAmino[];
}
export interface FinalityProviderHistoricalRewardsAminoMsg {
  type: "/babylon.incentive.FinalityProviderHistoricalRewards";
  value: FinalityProviderHistoricalRewardsAmino;
}
/**
 * FinalityProviderHistoricalRewards represents the cumulative rewards ratio of
 * the finality provider per sat in that period. The period is ommited here and
 * should be part of the key used to store this structure. Key: Prefix +
 * Finality provider bech32 address + Period.
 */
export interface FinalityProviderHistoricalRewardsSDKType {
  cumulative_rewards_per_sat: CoinSDKType[];
}
/**
 * FinalityProviderCurrentRewards represents the current rewards of the pool of
 * BTC delegations that delegated for this finality provider is entitled to.
 * Note: This rewards are for the BTC delegators that delegated to this FP
 * the FP itself is not the owner or can withdraw this rewards.
 * If a slash event happens with this finality provider, all the delegations
 * need to withdraw to the RewardGauge and the related scrutures should be
 * deleted. Key: Prefix + Finality provider bech32 address.
 */
export interface FinalityProviderCurrentRewards {
  /**
   * CurrentRewards is the current rewards that the finality provider have and
   * it was not yet stored inside the FinalityProviderHistoricalRewards. Once
   * something happens that modifies the amount of satoshis delegated to this
   * finality provider or the delegators starting period (activation, unbonding
   * or btc rewards withdraw) a new period must be created, accumulate this
   * rewards to FinalityProviderHistoricalRewards with a new period and zero out
   * the Current Rewards.
   */
  currentRewards: Coin[];
  /**
   * Period stores the current period that serves as a reference for
   * creating new historical rewards and correlate with
   * BTCDelegationRewardsTracker StartPeriodCumulativeReward.
   */
  period: bigint;
  /**
   * TotalActiveSat is the total amount of active satoshi delegated
   * to this finality provider.
   */
  totalActiveSat: Uint8Array;
}
export interface FinalityProviderCurrentRewardsProtoMsg {
  typeUrl: "/babylon.incentive.FinalityProviderCurrentRewards";
  value: Uint8Array;
}
/**
 * FinalityProviderCurrentRewards represents the current rewards of the pool of
 * BTC delegations that delegated for this finality provider is entitled to.
 * Note: This rewards are for the BTC delegators that delegated to this FP
 * the FP itself is not the owner or can withdraw this rewards.
 * If a slash event happens with this finality provider, all the delegations
 * need to withdraw to the RewardGauge and the related scrutures should be
 * deleted. Key: Prefix + Finality provider bech32 address.
 */
export interface FinalityProviderCurrentRewardsAmino {
  /**
   * CurrentRewards is the current rewards that the finality provider have and
   * it was not yet stored inside the FinalityProviderHistoricalRewards. Once
   * something happens that modifies the amount of satoshis delegated to this
   * finality provider or the delegators starting period (activation, unbonding
   * or btc rewards withdraw) a new period must be created, accumulate this
   * rewards to FinalityProviderHistoricalRewards with a new period and zero out
   * the Current Rewards.
   */
  current_rewards?: CoinAmino[];
  /**
   * Period stores the current period that serves as a reference for
   * creating new historical rewards and correlate with
   * BTCDelegationRewardsTracker StartPeriodCumulativeReward.
   */
  period?: string;
  /**
   * TotalActiveSat is the total amount of active satoshi delegated
   * to this finality provider.
   */
  total_active_sat?: string;
}
export interface FinalityProviderCurrentRewardsAminoMsg {
  type: "/babylon.incentive.FinalityProviderCurrentRewards";
  value: FinalityProviderCurrentRewardsAmino;
}
/**
 * FinalityProviderCurrentRewards represents the current rewards of the pool of
 * BTC delegations that delegated for this finality provider is entitled to.
 * Note: This rewards are for the BTC delegators that delegated to this FP
 * the FP itself is not the owner or can withdraw this rewards.
 * If a slash event happens with this finality provider, all the delegations
 * need to withdraw to the RewardGauge and the related scrutures should be
 * deleted. Key: Prefix + Finality provider bech32 address.
 */
export interface FinalityProviderCurrentRewardsSDKType {
  current_rewards: CoinSDKType[];
  period: bigint;
  total_active_sat: Uint8Array;
}
/**
 * BTCDelegationRewardsTracker represents the structure that holds information
 * from the last time this BTC delegator withdraw the rewards or modified his
 * active staked amount to one finality provider.
 * The finality provider address is ommitted here but should be part of the
 * key used to store this structure together with the BTC delegator address.
 */
export interface BTCDelegationRewardsTracker {
  /**
   * StartPeriodCumulativeReward the starting period the the BTC delegator
   * made his last withdraw of rewards or modified his active staking amount
   * of satoshis.
   */
  startPeriodCumulativeReward: bigint;
  /**
   * TotalActiveSat is the total amount of active satoshi delegated
   * to one specific finality provider.
   */
  totalActiveSat: Uint8Array;
}
export interface BTCDelegationRewardsTrackerProtoMsg {
  typeUrl: "/babylon.incentive.BTCDelegationRewardsTracker";
  value: Uint8Array;
}
/**
 * BTCDelegationRewardsTracker represents the structure that holds information
 * from the last time this BTC delegator withdraw the rewards or modified his
 * active staked amount to one finality provider.
 * The finality provider address is ommitted here but should be part of the
 * key used to store this structure together with the BTC delegator address.
 */
export interface BTCDelegationRewardsTrackerAmino {
  /**
   * StartPeriodCumulativeReward the starting period the the BTC delegator
   * made his last withdraw of rewards or modified his active staking amount
   * of satoshis.
   */
  start_period_cumulative_reward?: string;
  /**
   * TotalActiveSat is the total amount of active satoshi delegated
   * to one specific finality provider.
   */
  total_active_sat?: string;
}
export interface BTCDelegationRewardsTrackerAminoMsg {
  type: "/babylon.incentive.BTCDelegationRewardsTracker";
  value: BTCDelegationRewardsTrackerAmino;
}
/**
 * BTCDelegationRewardsTracker represents the structure that holds information
 * from the last time this BTC delegator withdraw the rewards or modified his
 * active staked amount to one finality provider.
 * The finality provider address is ommitted here but should be part of the
 * key used to store this structure together with the BTC delegator address.
 */
export interface BTCDelegationRewardsTrackerSDKType {
  start_period_cumulative_reward: bigint;
  total_active_sat: Uint8Array;
}
function createBaseFinalityProviderHistoricalRewards(): FinalityProviderHistoricalRewards {
  return {
    cumulativeRewardsPerSat: []
  };
}
export const FinalityProviderHistoricalRewards = {
  typeUrl: "/babylon.incentive.FinalityProviderHistoricalRewards",
  is(o: any): o is FinalityProviderHistoricalRewards {
    return o && (o.$typeUrl === FinalityProviderHistoricalRewards.typeUrl || Array.isArray(o.cumulativeRewardsPerSat) && (!o.cumulativeRewardsPerSat.length || Coin.is(o.cumulativeRewardsPerSat[0])));
  },
  isSDK(o: any): o is FinalityProviderHistoricalRewardsSDKType {
    return o && (o.$typeUrl === FinalityProviderHistoricalRewards.typeUrl || Array.isArray(o.cumulative_rewards_per_sat) && (!o.cumulative_rewards_per_sat.length || Coin.isSDK(o.cumulative_rewards_per_sat[0])));
  },
  isAmino(o: any): o is FinalityProviderHistoricalRewardsAmino {
    return o && (o.$typeUrl === FinalityProviderHistoricalRewards.typeUrl || Array.isArray(o.cumulative_rewards_per_sat) && (!o.cumulative_rewards_per_sat.length || Coin.isAmino(o.cumulative_rewards_per_sat[0])));
  },
  encode(message: FinalityProviderHistoricalRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.cumulativeRewardsPerSat) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FinalityProviderHistoricalRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalityProviderHistoricalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulativeRewardsPerSat.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FinalityProviderHistoricalRewards {
    return {
      cumulativeRewardsPerSat: Array.isArray(object?.cumulativeRewardsPerSat) ? object.cumulativeRewardsPerSat.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: FinalityProviderHistoricalRewards): JsonSafe<FinalityProviderHistoricalRewards> {
    const obj: any = {};
    if (message.cumulativeRewardsPerSat) {
      obj.cumulativeRewardsPerSat = message.cumulativeRewardsPerSat.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.cumulativeRewardsPerSat = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FinalityProviderHistoricalRewards>, I>>(object: I): FinalityProviderHistoricalRewards {
    const message = createBaseFinalityProviderHistoricalRewards();
    message.cumulativeRewardsPerSat = object.cumulativeRewardsPerSat?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FinalityProviderHistoricalRewardsAmino): FinalityProviderHistoricalRewards {
    const message = createBaseFinalityProviderHistoricalRewards();
    message.cumulativeRewardsPerSat = object.cumulative_rewards_per_sat?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FinalityProviderHistoricalRewards): FinalityProviderHistoricalRewardsAmino {
    const obj: any = {};
    if (message.cumulativeRewardsPerSat) {
      obj.cumulative_rewards_per_sat = message.cumulativeRewardsPerSat.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.cumulative_rewards_per_sat = message.cumulativeRewardsPerSat;
    }
    return obj;
  },
  fromAminoMsg(object: FinalityProviderHistoricalRewardsAminoMsg): FinalityProviderHistoricalRewards {
    return FinalityProviderHistoricalRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: FinalityProviderHistoricalRewardsProtoMsg): FinalityProviderHistoricalRewards {
    return FinalityProviderHistoricalRewards.decode(message.value);
  },
  toProto(message: FinalityProviderHistoricalRewards): Uint8Array {
    return FinalityProviderHistoricalRewards.encode(message).finish();
  },
  toProtoMsg(message: FinalityProviderHistoricalRewards): FinalityProviderHistoricalRewardsProtoMsg {
    return {
      typeUrl: "/babylon.incentive.FinalityProviderHistoricalRewards",
      value: FinalityProviderHistoricalRewards.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FinalityProviderHistoricalRewards.typeUrl, FinalityProviderHistoricalRewards);
function createBaseFinalityProviderCurrentRewards(): FinalityProviderCurrentRewards {
  return {
    currentRewards: [],
    period: BigInt(0),
    totalActiveSat: new Uint8Array()
  };
}
export const FinalityProviderCurrentRewards = {
  typeUrl: "/babylon.incentive.FinalityProviderCurrentRewards",
  is(o: any): o is FinalityProviderCurrentRewards {
    return o && (o.$typeUrl === FinalityProviderCurrentRewards.typeUrl || Array.isArray(o.currentRewards) && (!o.currentRewards.length || Coin.is(o.currentRewards[0])) && typeof o.period === "bigint" && (o.totalActiveSat instanceof Uint8Array || typeof o.totalActiveSat === "string"));
  },
  isSDK(o: any): o is FinalityProviderCurrentRewardsSDKType {
    return o && (o.$typeUrl === FinalityProviderCurrentRewards.typeUrl || Array.isArray(o.current_rewards) && (!o.current_rewards.length || Coin.isSDK(o.current_rewards[0])) && typeof o.period === "bigint" && (o.total_active_sat instanceof Uint8Array || typeof o.total_active_sat === "string"));
  },
  isAmino(o: any): o is FinalityProviderCurrentRewardsAmino {
    return o && (o.$typeUrl === FinalityProviderCurrentRewards.typeUrl || Array.isArray(o.current_rewards) && (!o.current_rewards.length || Coin.isAmino(o.current_rewards[0])) && typeof o.period === "bigint" && (o.total_active_sat instanceof Uint8Array || typeof o.total_active_sat === "string"));
  },
  encode(message: FinalityProviderCurrentRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.currentRewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.totalActiveSat.length !== 0) {
      writer.uint32(26).bytes(message.totalActiveSat);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FinalityProviderCurrentRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalityProviderCurrentRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.period = reader.uint64();
          break;
        case 3:
          message.totalActiveSat = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FinalityProviderCurrentRewards {
    return {
      currentRewards: Array.isArray(object?.currentRewards) ? object.currentRewards.map((e: any) => Coin.fromJSON(e)) : [],
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0),
      totalActiveSat: isSet(object.totalActiveSat) ? bytesFromBase64(object.totalActiveSat) : new Uint8Array()
    };
  },
  toJSON(message: FinalityProviderCurrentRewards): JsonSafe<FinalityProviderCurrentRewards> {
    const obj: any = {};
    if (message.currentRewards) {
      obj.currentRewards = message.currentRewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.currentRewards = [];
    }
    message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
    message.totalActiveSat !== undefined && (obj.totalActiveSat = base64FromBytes(message.totalActiveSat !== undefined ? message.totalActiveSat : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FinalityProviderCurrentRewards>, I>>(object: I): FinalityProviderCurrentRewards {
    const message = createBaseFinalityProviderCurrentRewards();
    message.currentRewards = object.currentRewards?.map(e => Coin.fromPartial(e)) || [];
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.totalActiveSat = object.totalActiveSat ?? new Uint8Array();
    return message;
  },
  fromAmino(object: FinalityProviderCurrentRewardsAmino): FinalityProviderCurrentRewards {
    const message = createBaseFinalityProviderCurrentRewards();
    message.currentRewards = object.current_rewards?.map(e => Coin.fromAmino(e)) || [];
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period);
    }
    if (object.total_active_sat !== undefined && object.total_active_sat !== null) {
      message.totalActiveSat = bytesFromBase64(object.total_active_sat);
    }
    return message;
  },
  toAmino(message: FinalityProviderCurrentRewards): FinalityProviderCurrentRewardsAmino {
    const obj: any = {};
    if (message.currentRewards) {
      obj.current_rewards = message.currentRewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.current_rewards = message.currentRewards;
    }
    obj.period = message.period !== BigInt(0) ? (message.period?.toString)() : undefined;
    obj.total_active_sat = message.totalActiveSat ? base64FromBytes(message.totalActiveSat) : undefined;
    return obj;
  },
  fromAminoMsg(object: FinalityProviderCurrentRewardsAminoMsg): FinalityProviderCurrentRewards {
    return FinalityProviderCurrentRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: FinalityProviderCurrentRewardsProtoMsg): FinalityProviderCurrentRewards {
    return FinalityProviderCurrentRewards.decode(message.value);
  },
  toProto(message: FinalityProviderCurrentRewards): Uint8Array {
    return FinalityProviderCurrentRewards.encode(message).finish();
  },
  toProtoMsg(message: FinalityProviderCurrentRewards): FinalityProviderCurrentRewardsProtoMsg {
    return {
      typeUrl: "/babylon.incentive.FinalityProviderCurrentRewards",
      value: FinalityProviderCurrentRewards.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FinalityProviderCurrentRewards.typeUrl, FinalityProviderCurrentRewards);
function createBaseBTCDelegationRewardsTracker(): BTCDelegationRewardsTracker {
  return {
    startPeriodCumulativeReward: BigInt(0),
    totalActiveSat: new Uint8Array()
  };
}
export const BTCDelegationRewardsTracker = {
  typeUrl: "/babylon.incentive.BTCDelegationRewardsTracker",
  is(o: any): o is BTCDelegationRewardsTracker {
    return o && (o.$typeUrl === BTCDelegationRewardsTracker.typeUrl || typeof o.startPeriodCumulativeReward === "bigint" && (o.totalActiveSat instanceof Uint8Array || typeof o.totalActiveSat === "string"));
  },
  isSDK(o: any): o is BTCDelegationRewardsTrackerSDKType {
    return o && (o.$typeUrl === BTCDelegationRewardsTracker.typeUrl || typeof o.start_period_cumulative_reward === "bigint" && (o.total_active_sat instanceof Uint8Array || typeof o.total_active_sat === "string"));
  },
  isAmino(o: any): o is BTCDelegationRewardsTrackerAmino {
    return o && (o.$typeUrl === BTCDelegationRewardsTracker.typeUrl || typeof o.start_period_cumulative_reward === "bigint" && (o.total_active_sat instanceof Uint8Array || typeof o.total_active_sat === "string"));
  },
  encode(message: BTCDelegationRewardsTracker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startPeriodCumulativeReward !== BigInt(0)) {
      writer.uint32(8).uint64(message.startPeriodCumulativeReward);
    }
    if (message.totalActiveSat.length !== 0) {
      writer.uint32(18).bytes(message.totalActiveSat);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BTCDelegationRewardsTracker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBTCDelegationRewardsTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startPeriodCumulativeReward = reader.uint64();
          break;
        case 2:
          message.totalActiveSat = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BTCDelegationRewardsTracker {
    return {
      startPeriodCumulativeReward: isSet(object.startPeriodCumulativeReward) ? BigInt(object.startPeriodCumulativeReward.toString()) : BigInt(0),
      totalActiveSat: isSet(object.totalActiveSat) ? bytesFromBase64(object.totalActiveSat) : new Uint8Array()
    };
  },
  toJSON(message: BTCDelegationRewardsTracker): JsonSafe<BTCDelegationRewardsTracker> {
    const obj: any = {};
    message.startPeriodCumulativeReward !== undefined && (obj.startPeriodCumulativeReward = (message.startPeriodCumulativeReward || BigInt(0)).toString());
    message.totalActiveSat !== undefined && (obj.totalActiveSat = base64FromBytes(message.totalActiveSat !== undefined ? message.totalActiveSat : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BTCDelegationRewardsTracker>, I>>(object: I): BTCDelegationRewardsTracker {
    const message = createBaseBTCDelegationRewardsTracker();
    message.startPeriodCumulativeReward = object.startPeriodCumulativeReward !== undefined && object.startPeriodCumulativeReward !== null ? BigInt(object.startPeriodCumulativeReward.toString()) : BigInt(0);
    message.totalActiveSat = object.totalActiveSat ?? new Uint8Array();
    return message;
  },
  fromAmino(object: BTCDelegationRewardsTrackerAmino): BTCDelegationRewardsTracker {
    const message = createBaseBTCDelegationRewardsTracker();
    if (object.start_period_cumulative_reward !== undefined && object.start_period_cumulative_reward !== null) {
      message.startPeriodCumulativeReward = BigInt(object.start_period_cumulative_reward);
    }
    if (object.total_active_sat !== undefined && object.total_active_sat !== null) {
      message.totalActiveSat = bytesFromBase64(object.total_active_sat);
    }
    return message;
  },
  toAmino(message: BTCDelegationRewardsTracker): BTCDelegationRewardsTrackerAmino {
    const obj: any = {};
    obj.start_period_cumulative_reward = message.startPeriodCumulativeReward !== BigInt(0) ? (message.startPeriodCumulativeReward?.toString)() : undefined;
    obj.total_active_sat = message.totalActiveSat ? base64FromBytes(message.totalActiveSat) : undefined;
    return obj;
  },
  fromAminoMsg(object: BTCDelegationRewardsTrackerAminoMsg): BTCDelegationRewardsTracker {
    return BTCDelegationRewardsTracker.fromAmino(object.value);
  },
  fromProtoMsg(message: BTCDelegationRewardsTrackerProtoMsg): BTCDelegationRewardsTracker {
    return BTCDelegationRewardsTracker.decode(message.value);
  },
  toProto(message: BTCDelegationRewardsTracker): Uint8Array {
    return BTCDelegationRewardsTracker.encode(message).finish();
  },
  toProtoMsg(message: BTCDelegationRewardsTracker): BTCDelegationRewardsTrackerProtoMsg {
    return {
      typeUrl: "/babylon.incentive.BTCDelegationRewardsTracker",
      value: BTCDelegationRewardsTracker.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BTCDelegationRewardsTracker.typeUrl, BTCDelegationRewardsTracker);