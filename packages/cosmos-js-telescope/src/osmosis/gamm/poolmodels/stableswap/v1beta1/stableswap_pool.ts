//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial, Exact } from "../../../../../helpers";
import { JsonSafe } from "../../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../../registry";
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParams {
  swapFee: string;
  /**
   * N.B.: exit fee is disabled during pool creation in x/poolmanager. While old
   * pools can maintain a non-zero fee. No new pool can be created with non-zero
   * fee anymore
   */
  exitFee: string;
}
export interface PoolParamsProtoMsg {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams";
  value: Uint8Array;
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParamsAmino {
  swap_fee?: string;
  /**
   * N.B.: exit fee is disabled during pool creation in x/poolmanager. While old
   * pools can maintain a non-zero fee. No new pool can be created with non-zero
   * fee anymore
   */
  exit_fee?: string;
}
export interface PoolParamsAminoMsg {
  type: "osmosis/gamm/StableswapPoolParams";
  value: PoolParamsAmino;
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParamsSDKType {
  swap_fee: string;
  exit_fee: string;
}
/** Pool is the stableswap Pool struct */
export interface Pool {
  $typeUrl?: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool";
  address: string;
  id: bigint;
  poolParams: PoolParams;
  /**
   * This string specifies who will govern the pool in the future.
   * Valid forms of this are:
   * {token name},{duration}
   * {duration}
   * where {token name} if specified is the token which determines the
   * governor, and if not specified is the LP token for this pool.duration is
   * a time specified as 0w,1w,2w, etc. which specifies how long the token
   * would need to be locked up to count in governance. 0w means no lockup.
   */
  futurePoolGovernor: string;
  /** sum of all LP shares */
  totalShares: Coin;
  /** assets in the pool */
  poolLiquidity: Coin[];
  /** for calculation amongst assets with different precisions */
  scalingFactors: bigint[];
  /** scaling_factor_controller is the address can adjust pool scaling factors */
  scalingFactorController: string;
}
export interface PoolProtoMsg {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool";
  value: Uint8Array;
}
/** Pool is the stableswap Pool struct */
export interface PoolAmino {
  address?: string;
  id?: string;
  pool_params?: PoolParamsAmino;
  /**
   * This string specifies who will govern the pool in the future.
   * Valid forms of this are:
   * {token name},{duration}
   * {duration}
   * where {token name} if specified is the token which determines the
   * governor, and if not specified is the LP token for this pool.duration is
   * a time specified as 0w,1w,2w, etc. which specifies how long the token
   * would need to be locked up to count in governance. 0w means no lockup.
   */
  future_pool_governor?: string;
  /** sum of all LP shares */
  total_shares?: CoinAmino;
  /** assets in the pool */
  pool_liquidity?: CoinAmino[];
  /** for calculation amongst assets with different precisions */
  scaling_factors?: string[];
  /** scaling_factor_controller is the address can adjust pool scaling factors */
  scaling_factor_controller?: string;
}
export interface PoolAminoMsg {
  type: "osmosis/gamm/StableswapPool";
  value: PoolAmino;
}
/** Pool is the stableswap Pool struct */
export interface PoolSDKType {
  $typeUrl?: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool";
  address: string;
  id: bigint;
  pool_params: PoolParamsSDKType;
  future_pool_governor: string;
  total_shares: CoinSDKType;
  pool_liquidity: CoinSDKType[];
  scaling_factors: bigint[];
  scaling_factor_controller: string;
}
function createBasePoolParams(): PoolParams {
  return {
    swapFee: "",
    exitFee: ""
  };
}
export const PoolParams = {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams",
  aminoType: "osmosis/gamm/StableswapPoolParams",
  is(o: any): o is PoolParams {
    return o && (o.$typeUrl === PoolParams.typeUrl || typeof o.swapFee === "string" && typeof o.exitFee === "string");
  },
  isSDK(o: any): o is PoolParamsSDKType {
    return o && (o.$typeUrl === PoolParams.typeUrl || typeof o.swap_fee === "string" && typeof o.exit_fee === "string");
  },
  isAmino(o: any): o is PoolParamsAmino {
    return o && (o.$typeUrl === PoolParams.typeUrl || typeof o.swap_fee === "string" && typeof o.exit_fee === "string");
  },
  encode(message: PoolParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapFee !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.exitFee !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.exitFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.exitFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolParams {
    return {
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      exitFee: isSet(object.exitFee) ? String(object.exitFee) : ""
    };
  },
  toJSON(message: PoolParams): JsonSafe<PoolParams> {
    const obj: any = {};
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.exitFee !== undefined && (obj.exitFee = message.exitFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolParams>, I>>(object: I): PoolParams {
    const message = createBasePoolParams();
    message.swapFee = object.swapFee ?? "";
    message.exitFee = object.exitFee ?? "";
    return message;
  },
  fromAmino(object: PoolParamsAmino): PoolParams {
    const message = createBasePoolParams();
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    if (object.exit_fee !== undefined && object.exit_fee !== null) {
      message.exitFee = object.exit_fee;
    }
    return message;
  },
  toAmino(message: PoolParams): PoolParamsAmino {
    const obj: any = {};
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    obj.exit_fee = message.exitFee === "" ? undefined : message.exitFee;
    return obj;
  },
  fromAminoMsg(object: PoolParamsAminoMsg): PoolParams {
    return PoolParams.fromAmino(object.value);
  },
  toAminoMsg(message: PoolParams): PoolParamsAminoMsg {
    return {
      type: "osmosis/gamm/StableswapPoolParams",
      value: PoolParams.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolParamsProtoMsg): PoolParams {
    return PoolParams.decode(message.value);
  },
  toProto(message: PoolParams): Uint8Array {
    return PoolParams.encode(message).finish();
  },
  toProtoMsg(message: PoolParams): PoolParamsProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams",
      value: PoolParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolParams.typeUrl, PoolParams);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolParams.aminoType, PoolParams.typeUrl);
function createBasePool(): Pool {
  return {
    $typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
    address: "",
    id: BigInt(0),
    poolParams: PoolParams.fromPartial({}),
    futurePoolGovernor: "",
    totalShares: Coin.fromPartial({}),
    poolLiquidity: [],
    scalingFactors: [],
    scalingFactorController: ""
  };
}
export const Pool = {
  typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
  aminoType: "osmosis/gamm/StableswapPool",
  is(o: any): o is Pool {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.address === "string" && typeof o.id === "bigint" && PoolParams.is(o.poolParams) && typeof o.futurePoolGovernor === "string" && Coin.is(o.totalShares) && Array.isArray(o.poolLiquidity) && (!o.poolLiquidity.length || Coin.is(o.poolLiquidity[0])) && Array.isArray(o.scalingFactors) && (!o.scalingFactors.length || typeof o.scalingFactors[0] === "bigint") && typeof o.scalingFactorController === "string");
  },
  isSDK(o: any): o is PoolSDKType {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.address === "string" && typeof o.id === "bigint" && PoolParams.isSDK(o.pool_params) && typeof o.future_pool_governor === "string" && Coin.isSDK(o.total_shares) && Array.isArray(o.pool_liquidity) && (!o.pool_liquidity.length || Coin.isSDK(o.pool_liquidity[0])) && Array.isArray(o.scaling_factors) && (!o.scaling_factors.length || typeof o.scaling_factors[0] === "bigint") && typeof o.scaling_factor_controller === "string");
  },
  isAmino(o: any): o is PoolAmino {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.address === "string" && typeof o.id === "bigint" && PoolParams.isAmino(o.pool_params) && typeof o.future_pool_governor === "string" && Coin.isAmino(o.total_shares) && Array.isArray(o.pool_liquidity) && (!o.pool_liquidity.length || Coin.isAmino(o.pool_liquidity[0])) && Array.isArray(o.scaling_factors) && (!o.scaling_factors.length || typeof o.scaling_factors[0] === "bigint") && typeof o.scaling_factor_controller === "string");
  },
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.futurePoolGovernor !== "") {
      writer.uint32(34).string(message.futurePoolGovernor);
    }
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.poolLiquidity) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.scalingFactors) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.scalingFactorController !== "") {
      writer.uint32(66).string(message.scalingFactorController);
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
          message.id = reader.uint64();
          break;
        case 3:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.futurePoolGovernor = reader.string();
          break;
        case 5:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.poolLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.scalingFactors.push(reader.uint64());
            }
          } else {
            message.scalingFactors.push(reader.uint64());
          }
          break;
        case 8:
          message.scalingFactorController = reader.string();
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      poolParams: isSet(object.poolParams) ? PoolParams.fromJSON(object.poolParams) : undefined,
      futurePoolGovernor: isSet(object.futurePoolGovernor) ? String(object.futurePoolGovernor) : "",
      totalShares: isSet(object.totalShares) ? Coin.fromJSON(object.totalShares) : undefined,
      poolLiquidity: Array.isArray(object?.poolLiquidity) ? object.poolLiquidity.map((e: any) => Coin.fromJSON(e)) : [],
      scalingFactors: Array.isArray(object?.scalingFactors) ? object.scalingFactors.map((e: any) => BigInt(e.toString())) : [],
      scalingFactorController: isSet(object.scalingFactorController) ? String(object.scalingFactorController) : ""
    };
  },
  toJSON(message: Pool): JsonSafe<Pool> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.poolParams !== undefined && (obj.poolParams = message.poolParams ? PoolParams.toJSON(message.poolParams) : undefined);
    message.futurePoolGovernor !== undefined && (obj.futurePoolGovernor = message.futurePoolGovernor);
    message.totalShares !== undefined && (obj.totalShares = message.totalShares ? Coin.toJSON(message.totalShares) : undefined);
    if (message.poolLiquidity) {
      obj.poolLiquidity = message.poolLiquidity.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.poolLiquidity = [];
    }
    if (message.scalingFactors) {
      obj.scalingFactors = message.scalingFactors.map(e => (e || BigInt(0)).toString());
    } else {
      obj.scalingFactors = [];
    }
    message.scalingFactorController !== undefined && (obj.scalingFactorController = message.scalingFactorController);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.futurePoolGovernor = object.futurePoolGovernor ?? "";
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : undefined;
    message.poolLiquidity = object.poolLiquidity?.map(e => Coin.fromPartial(e)) || [];
    message.scalingFactors = object.scalingFactors?.map(e => BigInt(e.toString())) || [];
    message.scalingFactorController = object.scalingFactorController ?? "";
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.pool_params !== undefined && object.pool_params !== null) {
      message.poolParams = PoolParams.fromAmino(object.pool_params);
    }
    if (object.future_pool_governor !== undefined && object.future_pool_governor !== null) {
      message.futurePoolGovernor = object.future_pool_governor;
    }
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = Coin.fromAmino(object.total_shares);
    }
    message.poolLiquidity = object.pool_liquidity?.map(e => Coin.fromAmino(e)) || [];
    message.scalingFactors = object.scaling_factors?.map(e => BigInt(e)) || [];
    if (object.scaling_factor_controller !== undefined && object.scaling_factor_controller !== null) {
      message.scalingFactorController = object.scaling_factor_controller;
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    obj.pool_params = message.poolParams ? PoolParams.toAmino(message.poolParams) : undefined;
    obj.future_pool_governor = message.futurePoolGovernor === "" ? undefined : message.futurePoolGovernor;
    obj.total_shares = message.totalShares ? Coin.toAmino(message.totalShares) : undefined;
    if (message.poolLiquidity) {
      obj.pool_liquidity = message.poolLiquidity.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.pool_liquidity = message.poolLiquidity;
    }
    if (message.scalingFactors) {
      obj.scaling_factors = message.scalingFactors.map(e => e.toString());
    } else {
      obj.scaling_factors = message.scalingFactors;
    }
    obj.scaling_factor_controller = message.scalingFactorController === "" ? undefined : message.scalingFactorController;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  toAminoMsg(message: Pool): PoolAminoMsg {
    return {
      type: "osmosis/gamm/StableswapPool",
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
      typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Pool.typeUrl, Pool);
GlobalDecoderRegistry.registerAminoProtoMapping(Pool.aminoType, Pool.typeUrl);