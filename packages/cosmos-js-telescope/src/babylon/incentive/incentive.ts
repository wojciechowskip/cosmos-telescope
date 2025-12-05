//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * Gauge is an object that stores rewards to be distributed
 * code adapted from
 * https://github.com/osmosis-labs/osmosis/blob/v18.0.0/proto/osmosis/incentives/gauge.proto
 */
export interface Gauge {
  /**
   * coins are coins that have been in the gauge
   * Can have multiple coin denoms
   */
  coins: Coin[];
}
export interface GaugeProtoMsg {
  typeUrl: "/babylon.incentive.Gauge";
  value: Uint8Array;
}
/**
 * Gauge is an object that stores rewards to be distributed
 * code adapted from
 * https://github.com/osmosis-labs/osmosis/blob/v18.0.0/proto/osmosis/incentives/gauge.proto
 */
export interface GaugeAmino {
  /**
   * coins are coins that have been in the gauge
   * Can have multiple coin denoms
   */
  coins?: CoinAmino[];
}
export interface GaugeAminoMsg {
  type: "/babylon.incentive.Gauge";
  value: GaugeAmino;
}
/**
 * Gauge is an object that stores rewards to be distributed
 * code adapted from
 * https://github.com/osmosis-labs/osmosis/blob/v18.0.0/proto/osmosis/incentives/gauge.proto
 */
export interface GaugeSDKType {
  coins: CoinSDKType[];
}
/**
 * RewardGauge is an object that stores rewards distributed to a BTC staking
 * stakeholder code adapted from
 * https://github.com/osmosis-labs/osmosis/blob/v18.0.0/proto/osmosis/incentives/gauge.proto
 */
export interface RewardGauge {
  /**
   * coins are coins that have been in the gauge
   * Can have multiple coin denoms
   */
  coins: Coin[];
  /**
   * withdrawn_coins are coins that have been withdrawn by the stakeholder
   * already
   */
  withdrawnCoins: Coin[];
}
export interface RewardGaugeProtoMsg {
  typeUrl: "/babylon.incentive.RewardGauge";
  value: Uint8Array;
}
/**
 * RewardGauge is an object that stores rewards distributed to a BTC staking
 * stakeholder code adapted from
 * https://github.com/osmosis-labs/osmosis/blob/v18.0.0/proto/osmosis/incentives/gauge.proto
 */
export interface RewardGaugeAmino {
  /**
   * coins are coins that have been in the gauge
   * Can have multiple coin denoms
   */
  coins?: CoinAmino[];
  /**
   * withdrawn_coins are coins that have been withdrawn by the stakeholder
   * already
   */
  withdrawn_coins?: CoinAmino[];
}
export interface RewardGaugeAminoMsg {
  type: "/babylon.incentive.RewardGauge";
  value: RewardGaugeAmino;
}
/**
 * RewardGauge is an object that stores rewards distributed to a BTC staking
 * stakeholder code adapted from
 * https://github.com/osmosis-labs/osmosis/blob/v18.0.0/proto/osmosis/incentives/gauge.proto
 */
export interface RewardGaugeSDKType {
  coins: CoinSDKType[];
  withdrawn_coins: CoinSDKType[];
}
function createBaseGauge(): Gauge {
  return {
    coins: []
  };
}
export const Gauge = {
  typeUrl: "/babylon.incentive.Gauge",
  is(o: any): o is Gauge {
    return o && (o.$typeUrl === Gauge.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is GaugeSDKType {
    return o && (o.$typeUrl === Gauge.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is GaugeAmino {
    return o && (o.$typeUrl === Gauge.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: Gauge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Gauge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Gauge {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: Gauge): JsonSafe<Gauge> {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Gauge>, I>>(object: I): Gauge {
    const message = createBaseGauge();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GaugeAmino): Gauge {
    const message = createBaseGauge();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Gauge): GaugeAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: GaugeAminoMsg): Gauge {
    return Gauge.fromAmino(object.value);
  },
  fromProtoMsg(message: GaugeProtoMsg): Gauge {
    return Gauge.decode(message.value);
  },
  toProto(message: Gauge): Uint8Array {
    return Gauge.encode(message).finish();
  },
  toProtoMsg(message: Gauge): GaugeProtoMsg {
    return {
      typeUrl: "/babylon.incentive.Gauge",
      value: Gauge.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Gauge.typeUrl, Gauge);
function createBaseRewardGauge(): RewardGauge {
  return {
    coins: [],
    withdrawnCoins: []
  };
}
export const RewardGauge = {
  typeUrl: "/babylon.incentive.RewardGauge",
  is(o: any): o is RewardGauge {
    return o && (o.$typeUrl === RewardGauge.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])) && Array.isArray(o.withdrawnCoins) && (!o.withdrawnCoins.length || Coin.is(o.withdrawnCoins[0])));
  },
  isSDK(o: any): o is RewardGaugeSDKType {
    return o && (o.$typeUrl === RewardGauge.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])) && Array.isArray(o.withdrawn_coins) && (!o.withdrawn_coins.length || Coin.isSDK(o.withdrawn_coins[0])));
  },
  isAmino(o: any): o is RewardGaugeAmino {
    return o && (o.$typeUrl === RewardGauge.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])) && Array.isArray(o.withdrawn_coins) && (!o.withdrawn_coins.length || Coin.isAmino(o.withdrawn_coins[0])));
  },
  encode(message: RewardGauge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.withdrawnCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardGauge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.withdrawnCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardGauge {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      withdrawnCoins: Array.isArray(object?.withdrawnCoins) ? object.withdrawnCoins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: RewardGauge): JsonSafe<RewardGauge> {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    if (message.withdrawnCoins) {
      obj.withdrawnCoins = message.withdrawnCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.withdrawnCoins = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RewardGauge>, I>>(object: I): RewardGauge {
    const message = createBaseRewardGauge();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.withdrawnCoins = object.withdrawnCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RewardGaugeAmino): RewardGauge {
    const message = createBaseRewardGauge();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    message.withdrawnCoins = object.withdrawn_coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RewardGauge): RewardGaugeAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    if (message.withdrawnCoins) {
      obj.withdrawn_coins = message.withdrawnCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.withdrawn_coins = message.withdrawnCoins;
    }
    return obj;
  },
  fromAminoMsg(object: RewardGaugeAminoMsg): RewardGauge {
    return RewardGauge.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardGaugeProtoMsg): RewardGauge {
    return RewardGauge.decode(message.value);
  },
  toProto(message: RewardGauge): Uint8Array {
    return RewardGauge.encode(message).finish();
  },
  toProtoMsg(message: RewardGauge): RewardGaugeProtoMsg {
    return {
      typeUrl: "/babylon.incentive.RewardGauge",
      value: RewardGauge.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RewardGauge.typeUrl, RewardGauge);