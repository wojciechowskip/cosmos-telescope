//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface Pool {
  $typeUrl?: "/osmosis.concentratedliquidity.v1beta1.Pool";
  /** pool's address holding all liquidity tokens. */
  address: string;
  /** address holding the incentives liquidity. */
  incentivesAddress: string;
  /** address holding spread rewards from swaps. */
  spreadRewardsAddress: string;
  id: bigint;
  /** Amount of total liquidity */
  currentTickLiquidity: string;
  token0: string;
  token1: string;
  currentSqrtPrice: string;
  currentTick: bigint;
  /**
   * tick_spacing must be one of the authorized_tick_spacing values set in the
   * concentrated-liquidity parameters
   */
  tickSpacing: bigint;
  exponentAtPriceOne: bigint;
  /** spread_factor is the ratio that is charged on the amount of token in. */
  spreadFactor: string;
  /**
   * last_liquidity_update is the last time either the pool liquidity or the
   * active tick changed
   */
  lastLiquidityUpdate: Date;
}
export interface PoolProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  /** pool's address holding all liquidity tokens. */
  address?: string;
  /** address holding the incentives liquidity. */
  incentives_address?: string;
  /** address holding spread rewards from swaps. */
  spread_rewards_address?: string;
  id?: string;
  /** Amount of total liquidity */
  current_tick_liquidity?: string;
  token0?: string;
  token1?: string;
  current_sqrt_price?: string;
  current_tick?: string;
  /**
   * tick_spacing must be one of the authorized_tick_spacing values set in the
   * concentrated-liquidity parameters
   */
  tick_spacing?: string;
  exponent_at_price_one?: string;
  /** spread_factor is the ratio that is charged on the amount of token in. */
  spread_factor?: string;
  /**
   * last_liquidity_update is the last time either the pool liquidity or the
   * active tick changed
   */
  last_liquidity_update?: string;
}
export interface PoolAminoMsg {
  type: "osmosis/concentratedliquidity/pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  $typeUrl?: "/osmosis.concentratedliquidity.v1beta1.Pool";
  address: string;
  incentives_address: string;
  spread_rewards_address: string;
  id: bigint;
  current_tick_liquidity: string;
  token0: string;
  token1: string;
  current_sqrt_price: string;
  current_tick: bigint;
  tick_spacing: bigint;
  exponent_at_price_one: bigint;
  spread_factor: string;
  last_liquidity_update: Date;
}
function createBasePool(): Pool {
  return {
    $typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool",
    address: "",
    incentivesAddress: "",
    spreadRewardsAddress: "",
    id: BigInt(0),
    currentTickLiquidity: "",
    token0: "",
    token1: "",
    currentSqrtPrice: "",
    currentTick: BigInt(0),
    tickSpacing: BigInt(0),
    exponentAtPriceOne: BigInt(0),
    spreadFactor: "",
    lastLiquidityUpdate: new Date()
  };
}
export const Pool = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool",
  aminoType: "osmosis/concentratedliquidity/pool",
  is(o: any): o is Pool {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.address === "string" && typeof o.incentivesAddress === "string" && typeof o.spreadRewardsAddress === "string" && typeof o.id === "bigint" && typeof o.currentTickLiquidity === "string" && typeof o.token0 === "string" && typeof o.token1 === "string" && typeof o.currentSqrtPrice === "string" && typeof o.currentTick === "bigint" && typeof o.tickSpacing === "bigint" && typeof o.exponentAtPriceOne === "bigint" && typeof o.spreadFactor === "string" && Timestamp.is(o.lastLiquidityUpdate));
  },
  isSDK(o: any): o is PoolSDKType {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.address === "string" && typeof o.incentives_address === "string" && typeof o.spread_rewards_address === "string" && typeof o.id === "bigint" && typeof o.current_tick_liquidity === "string" && typeof o.token0 === "string" && typeof o.token1 === "string" && typeof o.current_sqrt_price === "string" && typeof o.current_tick === "bigint" && typeof o.tick_spacing === "bigint" && typeof o.exponent_at_price_one === "bigint" && typeof o.spread_factor === "string" && Timestamp.isSDK(o.last_liquidity_update));
  },
  isAmino(o: any): o is PoolAmino {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.address === "string" && typeof o.incentives_address === "string" && typeof o.spread_rewards_address === "string" && typeof o.id === "bigint" && typeof o.current_tick_liquidity === "string" && typeof o.token0 === "string" && typeof o.token1 === "string" && typeof o.current_sqrt_price === "string" && typeof o.current_tick === "bigint" && typeof o.tick_spacing === "bigint" && typeof o.exponent_at_price_one === "bigint" && typeof o.spread_factor === "string" && Timestamp.isAmino(o.last_liquidity_update));
  },
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.incentivesAddress !== "") {
      writer.uint32(18).string(message.incentivesAddress);
    }
    if (message.spreadRewardsAddress !== "") {
      writer.uint32(26).string(message.spreadRewardsAddress);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(32).uint64(message.id);
    }
    if (message.currentTickLiquidity !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.currentTickLiquidity, 18).atomics);
    }
    if (message.token0 !== "") {
      writer.uint32(50).string(message.token0);
    }
    if (message.token1 !== "") {
      writer.uint32(58).string(message.token1);
    }
    if (message.currentSqrtPrice !== "") {
      writer.uint32(66).string(message.currentSqrtPrice);
    }
    if (message.currentTick !== BigInt(0)) {
      writer.uint32(72).int64(message.currentTick);
    }
    if (message.tickSpacing !== BigInt(0)) {
      writer.uint32(80).uint64(message.tickSpacing);
    }
    if (message.exponentAtPriceOne !== BigInt(0)) {
      writer.uint32(88).int64(message.exponentAtPriceOne);
    }
    if (message.spreadFactor !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.spreadFactor, 18).atomics);
    }
    if (message.lastLiquidityUpdate !== undefined) {
      Timestamp.encode(toTimestamp(message.lastLiquidityUpdate), writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.incentivesAddress = reader.string();
          break;
        case 3:
          message.spreadRewardsAddress = reader.string();
          break;
        case 4:
          message.id = reader.uint64();
          break;
        case 5:
          message.currentTickLiquidity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.token0 = reader.string();
          break;
        case 7:
          message.token1 = reader.string();
          break;
        case 8:
          message.currentSqrtPrice = reader.string();
          break;
        case 9:
          message.currentTick = reader.int64();
          break;
        case 10:
          message.tickSpacing = reader.uint64();
          break;
        case 11:
          message.exponentAtPriceOne = reader.int64();
          break;
        case 12:
          message.spreadFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.lastLiquidityUpdate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      incentivesAddress: isSet(object.incentivesAddress) ? String(object.incentivesAddress) : "",
      spreadRewardsAddress: isSet(object.spreadRewardsAddress) ? String(object.spreadRewardsAddress) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      currentTickLiquidity: isSet(object.currentTickLiquidity) ? String(object.currentTickLiquidity) : "",
      token0: isSet(object.token0) ? String(object.token0) : "",
      token1: isSet(object.token1) ? String(object.token1) : "",
      currentSqrtPrice: isSet(object.currentSqrtPrice) ? String(object.currentSqrtPrice) : "",
      currentTick: isSet(object.currentTick) ? BigInt(object.currentTick.toString()) : BigInt(0),
      tickSpacing: isSet(object.tickSpacing) ? BigInt(object.tickSpacing.toString()) : BigInt(0),
      exponentAtPriceOne: isSet(object.exponentAtPriceOne) ? BigInt(object.exponentAtPriceOne.toString()) : BigInt(0),
      spreadFactor: isSet(object.spreadFactor) ? String(object.spreadFactor) : "",
      lastLiquidityUpdate: isSet(object.lastLiquidityUpdate) ? fromJsonTimestamp(object.lastLiquidityUpdate) : undefined
    };
  },
  toJSON(message: Pool): JsonSafe<Pool> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.incentivesAddress !== undefined && (obj.incentivesAddress = message.incentivesAddress);
    message.spreadRewardsAddress !== undefined && (obj.spreadRewardsAddress = message.spreadRewardsAddress);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.currentTickLiquidity !== undefined && (obj.currentTickLiquidity = message.currentTickLiquidity);
    message.token0 !== undefined && (obj.token0 = message.token0);
    message.token1 !== undefined && (obj.token1 = message.token1);
    message.currentSqrtPrice !== undefined && (obj.currentSqrtPrice = message.currentSqrtPrice);
    message.currentTick !== undefined && (obj.currentTick = (message.currentTick || BigInt(0)).toString());
    message.tickSpacing !== undefined && (obj.tickSpacing = (message.tickSpacing || BigInt(0)).toString());
    message.exponentAtPriceOne !== undefined && (obj.exponentAtPriceOne = (message.exponentAtPriceOne || BigInt(0)).toString());
    message.spreadFactor !== undefined && (obj.spreadFactor = message.spreadFactor);
    message.lastLiquidityUpdate !== undefined && (obj.lastLiquidityUpdate = message.lastLiquidityUpdate.toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.address = object.address ?? "";
    message.incentivesAddress = object.incentivesAddress ?? "";
    message.spreadRewardsAddress = object.spreadRewardsAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.currentTickLiquidity = object.currentTickLiquidity ?? "";
    message.token0 = object.token0 ?? "";
    message.token1 = object.token1 ?? "";
    message.currentSqrtPrice = object.currentSqrtPrice ?? "";
    message.currentTick = object.currentTick !== undefined && object.currentTick !== null ? BigInt(object.currentTick.toString()) : BigInt(0);
    message.tickSpacing = object.tickSpacing !== undefined && object.tickSpacing !== null ? BigInt(object.tickSpacing.toString()) : BigInt(0);
    message.exponentAtPriceOne = object.exponentAtPriceOne !== undefined && object.exponentAtPriceOne !== null ? BigInt(object.exponentAtPriceOne.toString()) : BigInt(0);
    message.spreadFactor = object.spreadFactor ?? "";
    message.lastLiquidityUpdate = object.lastLiquidityUpdate ?? undefined;
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.incentives_address !== undefined && object.incentives_address !== null) {
      message.incentivesAddress = object.incentives_address;
    }
    if (object.spread_rewards_address !== undefined && object.spread_rewards_address !== null) {
      message.spreadRewardsAddress = object.spread_rewards_address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.current_tick_liquidity !== undefined && object.current_tick_liquidity !== null) {
      message.currentTickLiquidity = object.current_tick_liquidity;
    }
    if (object.token0 !== undefined && object.token0 !== null) {
      message.token0 = object.token0;
    }
    if (object.token1 !== undefined && object.token1 !== null) {
      message.token1 = object.token1;
    }
    if (object.current_sqrt_price !== undefined && object.current_sqrt_price !== null) {
      message.currentSqrtPrice = object.current_sqrt_price;
    }
    if (object.current_tick !== undefined && object.current_tick !== null) {
      message.currentTick = BigInt(object.current_tick);
    }
    if (object.tick_spacing !== undefined && object.tick_spacing !== null) {
      message.tickSpacing = BigInt(object.tick_spacing);
    }
    if (object.exponent_at_price_one !== undefined && object.exponent_at_price_one !== null) {
      message.exponentAtPriceOne = BigInt(object.exponent_at_price_one);
    }
    if (object.spread_factor !== undefined && object.spread_factor !== null) {
      message.spreadFactor = object.spread_factor;
    }
    if (object.last_liquidity_update !== undefined && object.last_liquidity_update !== null) {
      message.lastLiquidityUpdate = fromTimestamp(Timestamp.fromAmino(object.last_liquidity_update));
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.incentives_address = message.incentivesAddress === "" ? undefined : message.incentivesAddress;
    obj.spread_rewards_address = message.spreadRewardsAddress === "" ? undefined : message.spreadRewardsAddress;
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    obj.current_tick_liquidity = message.currentTickLiquidity === "" ? undefined : message.currentTickLiquidity;
    obj.token0 = message.token0 === "" ? undefined : message.token0;
    obj.token1 = message.token1 === "" ? undefined : message.token1;
    obj.current_sqrt_price = message.currentSqrtPrice === "" ? undefined : message.currentSqrtPrice;
    obj.current_tick = message.currentTick !== BigInt(0) ? (message.currentTick?.toString)() : undefined;
    obj.tick_spacing = message.tickSpacing !== BigInt(0) ? (message.tickSpacing?.toString)() : undefined;
    obj.exponent_at_price_one = message.exponentAtPriceOne !== BigInt(0) ? (message.exponentAtPriceOne?.toString)() : undefined;
    obj.spread_factor = message.spreadFactor === "" ? undefined : message.spreadFactor;
    obj.last_liquidity_update = message.lastLiquidityUpdate ? Timestamp.toAmino(toTimestamp(message.lastLiquidityUpdate)) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  toAminoMsg(message: Pool): PoolAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/pool",
      value: Pool.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Pool.typeUrl, Pool);
GlobalDecoderRegistry.registerAminoProtoMapping(Pool.aminoType, Pool.typeUrl);