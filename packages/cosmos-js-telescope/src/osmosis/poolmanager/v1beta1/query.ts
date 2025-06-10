//@ts-nocheck
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./swap_route";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { TakerFeeShareAgreement, TakerFeeShareAgreementAmino, TakerFeeShareAgreementSDKType, TakerFeeSkimAccumulator, TakerFeeSkimAccumulatorAmino, TakerFeeSkimAccumulatorSDKType, AlloyContractTakerFeeShareState, AlloyContractTakerFeeShareStateAmino, AlloyContractTakerFeeShareStateSDKType } from "./taker_fee_share";
import { Pool as Pool1 } from "../../concentratedliquidity/v1beta1/pool";
import { PoolProtoMsg as Pool1ProtoMsg } from "../../concentratedliquidity/v1beta1/pool";
import { PoolSDKType as Pool1SDKType } from "../../concentratedliquidity/v1beta1/pool";
import { Pool as Pool2 } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { Pool as Pool3 } from "../../gamm/v1beta1/balancerPool";
import { PoolProtoMsg as Pool3ProtoMsg } from "../../gamm/v1beta1/balancerPool";
import { PoolSDKType as Pool3SDKType } from "../../gamm/v1beta1/balancerPool";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
/** =============================== Params */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.ParamsRequest";
  value: Uint8Array;
}
/** =============================== Params */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "osmosis/poolmanager/params-request";
  value: ParamsRequestAmino;
}
/** =============================== Params */
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "osmosis/poolmanager/params-response";
  value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequest {
  /** DEPRECATED */
  /** @deprecated */
  sender: string;
  /** @deprecated */
  poolId: bigint;
  tokenIn: string;
  routes: SwapAmountInRoute[];
}
export interface EstimateSwapExactAmountInRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest";
  value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequestAmino {
  /** DEPRECATED */
  /** @deprecated */
  sender?: string;
  /** @deprecated */
  pool_id?: string;
  token_in?: string;
  routes?: SwapAmountInRouteAmino[];
}
export interface EstimateSwapExactAmountInRequestAminoMsg {
  type: "osmosis/poolmanager/estimate-swap-exact-amount-in-request";
  value: EstimateSwapExactAmountInRequestAmino;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequestSDKType {
  /** @deprecated */
  sender: string;
  /** @deprecated */
  pool_id: bigint;
  token_in: string;
  routes: SwapAmountInRouteSDKType[];
}
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequest {
  /** @deprecated */
  poolId: bigint;
  tokenIn: string;
  routesPoolId: bigint[];
  routesTokenOutDenom: string[];
}
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest";
  value: Uint8Array;
}
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino {
  /** @deprecated */
  pool_id?: string;
  token_in?: string;
  routes_pool_id?: string[];
  routes_token_out_denom?: string[];
}
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequestAminoMsg {
  type: "osmosis/poolmanager/estimate-swap-exact-amount-in-with-primitive-types-request";
  value: EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino;
}
export interface EstimateSwapExactAmountInWithPrimitiveTypesRequestSDKType {
  /** @deprecated */
  pool_id: bigint;
  token_in: string;
  routes_pool_id: bigint[];
  routes_token_out_denom: string[];
}
export interface EstimateSinglePoolSwapExactAmountInRequest {
  poolId: bigint;
  tokenIn: string;
  tokenOutDenom: string;
}
export interface EstimateSinglePoolSwapExactAmountInRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest";
  value: Uint8Array;
}
export interface EstimateSinglePoolSwapExactAmountInRequestAmino {
  pool_id?: string;
  token_in?: string;
  token_out_denom?: string;
}
export interface EstimateSinglePoolSwapExactAmountInRequestAminoMsg {
  type: "osmosis/poolmanager/estimate-single-pool-swap-exact-amount-in-request";
  value: EstimateSinglePoolSwapExactAmountInRequestAmino;
}
export interface EstimateSinglePoolSwapExactAmountInRequestSDKType {
  pool_id: bigint;
  token_in: string;
  token_out_denom: string;
}
export interface EstimateSwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface EstimateSwapExactAmountInResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface EstimateSwapExactAmountInResponseAmino {
  token_out_amount?: string;
}
export interface EstimateSwapExactAmountInResponseAminoMsg {
  type: "osmosis/poolmanager/estimate-swap-exact-amount-in-response";
  value: EstimateSwapExactAmountInResponseAmino;
}
export interface EstimateSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequest {
  /** DEPRECATED */
  /** @deprecated */
  sender: string;
  /** @deprecated */
  poolId: bigint;
  routes: SwapAmountOutRoute[];
  tokenOut: string;
}
export interface EstimateSwapExactAmountOutRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest";
  value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequestAmino {
  /** DEPRECATED */
  /** @deprecated */
  sender?: string;
  /** @deprecated */
  pool_id?: string;
  routes?: SwapAmountOutRouteAmino[];
  token_out?: string;
}
export interface EstimateSwapExactAmountOutRequestAminoMsg {
  type: "osmosis/poolmanager/estimate-swap-exact-amount-out-request";
  value: EstimateSwapExactAmountOutRequestAmino;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequestSDKType {
  /** @deprecated */
  sender: string;
  /** @deprecated */
  pool_id: bigint;
  routes: SwapAmountOutRouteSDKType[];
  token_out: string;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
  /** @deprecated */
  poolId: bigint;
  routesPoolId: bigint[];
  routesTokenInDenom: string[];
  tokenOut: string;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest";
  value: Uint8Array;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino {
  /** @deprecated */
  pool_id?: string;
  routes_pool_id?: string[];
  routes_token_in_denom?: string[];
  token_out?: string;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg {
  type: "osmosis/poolmanager/estimate-swap-exact-amount-out-with-primitive-types-request";
  value: EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino;
}
export interface EstimateSwapExactAmountOutWithPrimitiveTypesRequestSDKType {
  /** @deprecated */
  pool_id: bigint;
  routes_pool_id: bigint[];
  routes_token_in_denom: string[];
  token_out: string;
}
export interface EstimateSinglePoolSwapExactAmountOutRequest {
  poolId: bigint;
  tokenInDenom: string;
  tokenOut: string;
}
export interface EstimateSinglePoolSwapExactAmountOutRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest";
  value: Uint8Array;
}
export interface EstimateSinglePoolSwapExactAmountOutRequestAmino {
  pool_id?: string;
  token_in_denom?: string;
  token_out?: string;
}
export interface EstimateSinglePoolSwapExactAmountOutRequestAminoMsg {
  type: "osmosis/poolmanager/estimate-single-pool-swap-exact-amount-out-request";
  value: EstimateSinglePoolSwapExactAmountOutRequestAmino;
}
export interface EstimateSinglePoolSwapExactAmountOutRequestSDKType {
  pool_id: bigint;
  token_in_denom: string;
  token_out: string;
}
export interface EstimateSwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface EstimateSwapExactAmountOutResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface EstimateSwapExactAmountOutResponseAmino {
  token_in_amount?: string;
}
export interface EstimateSwapExactAmountOutResponseAminoMsg {
  type: "osmosis/poolmanager/estimate-swap-exact-amount-out-response";
  value: EstimateSwapExactAmountOutResponseAmino;
}
export interface EstimateSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
/** =============================== NumPools */
export interface NumPoolsRequest {}
export interface NumPoolsRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.NumPoolsRequest";
  value: Uint8Array;
}
/** =============================== NumPools */
export interface NumPoolsRequestAmino {}
export interface NumPoolsRequestAminoMsg {
  type: "osmosis/poolmanager/num-pools-request";
  value: NumPoolsRequestAmino;
}
/** =============================== NumPools */
export interface NumPoolsRequestSDKType {}
export interface NumPoolsResponse {
  numPools: bigint;
}
export interface NumPoolsResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.NumPoolsResponse";
  value: Uint8Array;
}
export interface NumPoolsResponseAmino {
  num_pools?: string;
}
export interface NumPoolsResponseAminoMsg {
  type: "osmosis/poolmanager/num-pools-response";
  value: NumPoolsResponseAmino;
}
export interface NumPoolsResponseSDKType {
  num_pools: bigint;
}
/** =============================== Pool */
export interface PoolRequest {
  poolId: bigint;
}
export interface PoolRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.PoolRequest";
  value: Uint8Array;
}
/** =============================== Pool */
export interface PoolRequestAmino {
  pool_id?: string;
}
export interface PoolRequestAminoMsg {
  type: "osmosis/poolmanager/pool-request";
  value: PoolRequestAmino;
}
/** =============================== Pool */
export interface PoolRequestSDKType {
  pool_id: bigint;
}
export interface PoolResponse {
  pool?: Pool1 | Pool2 | Pool3 | Any | undefined;
}
export interface PoolResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.PoolResponse";
  value: Uint8Array;
}
export type PoolResponseEncoded = Omit<PoolResponse, "pool"> & {
  pool?: Pool1ProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg | undefined;
};
export interface PoolResponseAmino {
  pool?: AnyAmino;
}
export interface PoolResponseAminoMsg {
  type: "osmosis/poolmanager/pool-response";
  value: PoolResponseAmino;
}
export interface PoolResponseSDKType {
  pool?: Pool1SDKType | Pool2SDKType | Pool3SDKType | AnySDKType | undefined;
}
/** =============================== AllPools */
export interface AllPoolsRequest {}
export interface AllPoolsRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllPoolsRequest";
  value: Uint8Array;
}
/** =============================== AllPools */
export interface AllPoolsRequestAmino {}
export interface AllPoolsRequestAminoMsg {
  type: "osmosis/poolmanager/all-pools-request";
  value: AllPoolsRequestAmino;
}
/** =============================== AllPools */
export interface AllPoolsRequestSDKType {}
export interface AllPoolsResponse {
  pools: (Pool1 | Pool2 | Pool3 | Any)[] | Any[];
}
export interface AllPoolsResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllPoolsResponse";
  value: Uint8Array;
}
export type AllPoolsResponseEncoded = Omit<AllPoolsResponse, "pools"> & {
  pools: (Pool1ProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg)[];
};
export interface AllPoolsResponseAmino {
  pools?: AnyAmino[];
}
export interface AllPoolsResponseAminoMsg {
  type: "osmosis/poolmanager/all-pools-response";
  value: AllPoolsResponseAmino;
}
export interface AllPoolsResponseSDKType {
  pools: (Pool1SDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
}
/**
 * =======================================================
 * ListPoolsByDenomRequest
 */
export interface ListPoolsByDenomRequest {
  denom: string;
}
export interface ListPoolsByDenomRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.ListPoolsByDenomRequest";
  value: Uint8Array;
}
/**
 * =======================================================
 * ListPoolsByDenomRequest
 */
export interface ListPoolsByDenomRequestAmino {
  denom?: string;
}
export interface ListPoolsByDenomRequestAminoMsg {
  type: "osmosis/poolmanager/list-pools-by-denom-request";
  value: ListPoolsByDenomRequestAmino;
}
/**
 * =======================================================
 * ListPoolsByDenomRequest
 */
export interface ListPoolsByDenomRequestSDKType {
  denom: string;
}
export interface ListPoolsByDenomResponse {
  pools: (Pool1 | Pool2 | Pool3 | Any)[] | Any[];
}
export interface ListPoolsByDenomResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.ListPoolsByDenomResponse";
  value: Uint8Array;
}
export type ListPoolsByDenomResponseEncoded = Omit<ListPoolsByDenomResponse, "pools"> & {
  pools: (Pool1ProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg)[];
};
export interface ListPoolsByDenomResponseAmino {
  pools?: AnyAmino[];
}
export interface ListPoolsByDenomResponseAminoMsg {
  type: "osmosis/poolmanager/list-pools-by-denom-response";
  value: ListPoolsByDenomResponseAmino;
}
export interface ListPoolsByDenomResponseSDKType {
  pools: (Pool1SDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
}
/**
 * ==========================================================
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequest {
  poolId: bigint;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}
export interface SpotPriceRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.SpotPriceRequest";
  value: Uint8Array;
}
/**
 * ==========================================================
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequestAmino {
  pool_id?: string;
  base_asset_denom?: string;
  quote_asset_denom?: string;
}
export interface SpotPriceRequestAminoMsg {
  type: "osmosis/poolmanager/spot-price-request";
  value: SpotPriceRequestAmino;
}
/**
 * ==========================================================
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequestSDKType {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponse {
  /** String of the Dec. Ex) 10.203uatom */
  spotPrice: string;
}
export interface SpotPriceResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.SpotPriceResponse";
  value: Uint8Array;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponseAmino {
  /** String of the Dec. Ex) 10.203uatom */
  spot_price?: string;
}
export interface SpotPriceResponseAminoMsg {
  type: "osmosis/poolmanager/spot-price-response";
  value: SpotPriceResponseAmino;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponseSDKType {
  spot_price: string;
}
/** =============================== TotalPoolLiquidity */
export interface TotalPoolLiquidityRequest {
  poolId: bigint;
}
export interface TotalPoolLiquidityRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest";
  value: Uint8Array;
}
/** =============================== TotalPoolLiquidity */
export interface TotalPoolLiquidityRequestAmino {
  pool_id?: string;
}
export interface TotalPoolLiquidityRequestAminoMsg {
  type: "osmosis/poolmanager/total-pool-liquidity-request";
  value: TotalPoolLiquidityRequestAmino;
}
/** =============================== TotalPoolLiquidity */
export interface TotalPoolLiquidityRequestSDKType {
  pool_id: bigint;
}
export interface TotalPoolLiquidityResponse {
  liquidity: Coin[];
}
export interface TotalPoolLiquidityResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse";
  value: Uint8Array;
}
export interface TotalPoolLiquidityResponseAmino {
  liquidity?: CoinAmino[];
}
export interface TotalPoolLiquidityResponseAminoMsg {
  type: "osmosis/poolmanager/total-pool-liquidity-response";
  value: TotalPoolLiquidityResponseAmino;
}
export interface TotalPoolLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
/** =============================== TotalLiquidity */
export interface TotalLiquidityRequest {}
export interface TotalLiquidityRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalLiquidityRequest";
  value: Uint8Array;
}
/** =============================== TotalLiquidity */
export interface TotalLiquidityRequestAmino {}
export interface TotalLiquidityRequestAminoMsg {
  type: "osmosis/poolmanager/total-liquidity-request";
  value: TotalLiquidityRequestAmino;
}
/** =============================== TotalLiquidity */
export interface TotalLiquidityRequestSDKType {}
export interface TotalLiquidityResponse {
  liquidity: Coin[];
}
export interface TotalLiquidityResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalLiquidityResponse";
  value: Uint8Array;
}
export interface TotalLiquidityResponseAmino {
  liquidity?: CoinAmino[];
}
export interface TotalLiquidityResponseAminoMsg {
  type: "osmosis/poolmanager/total-liquidity-response";
  value: TotalLiquidityResponseAmino;
}
export interface TotalLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
/** =============================== TotalVolumeForPool */
export interface TotalVolumeForPoolRequest {
  poolId: bigint;
}
export interface TotalVolumeForPoolRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalVolumeForPoolRequest";
  value: Uint8Array;
}
/** =============================== TotalVolumeForPool */
export interface TotalVolumeForPoolRequestAmino {
  pool_id?: string;
}
export interface TotalVolumeForPoolRequestAminoMsg {
  type: "osmosis/poolmanager/total-volume-for-pool-request";
  value: TotalVolumeForPoolRequestAmino;
}
/** =============================== TotalVolumeForPool */
export interface TotalVolumeForPoolRequestSDKType {
  pool_id: bigint;
}
export interface TotalVolumeForPoolResponse {
  volume: Coin[];
}
export interface TotalVolumeForPoolResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalVolumeForPoolResponse";
  value: Uint8Array;
}
export interface TotalVolumeForPoolResponseAmino {
  volume?: CoinAmino[];
}
export interface TotalVolumeForPoolResponseAminoMsg {
  type: "osmosis/poolmanager/total-volume-for-pool-response";
  value: TotalVolumeForPoolResponseAmino;
}
export interface TotalVolumeForPoolResponseSDKType {
  volume: CoinSDKType[];
}
/** =============================== TradingPairTakerFee */
export interface TradingPairTakerFeeRequest {
  denom0: string;
  denom1: string;
}
export interface TradingPairTakerFeeRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TradingPairTakerFeeRequest";
  value: Uint8Array;
}
/** =============================== TradingPairTakerFee */
export interface TradingPairTakerFeeRequestAmino {
  denom_0?: string;
  denom_1?: string;
}
export interface TradingPairTakerFeeRequestAminoMsg {
  type: "osmosis/poolmanager/trading-pair-taker-fee-request";
  value: TradingPairTakerFeeRequestAmino;
}
/** =============================== TradingPairTakerFee */
export interface TradingPairTakerFeeRequestSDKType {
  denom_0: string;
  denom_1: string;
}
export interface TradingPairTakerFeeResponse {
  takerFee: string;
}
export interface TradingPairTakerFeeResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TradingPairTakerFeeResponse";
  value: Uint8Array;
}
export interface TradingPairTakerFeeResponseAmino {
  taker_fee?: string;
}
export interface TradingPairTakerFeeResponseAminoMsg {
  type: "osmosis/poolmanager/trading-pair-taker-fee-response";
  value: TradingPairTakerFeeResponseAmino;
}
export interface TradingPairTakerFeeResponseSDKType {
  taker_fee: string;
}
/**
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 */
export interface EstimateTradeBasedOnPriceImpactRequest {
  /** from_coin is the total amount of tokens that the user wants to sell. */
  fromCoin: Coin;
  /**
   * to_coin_denom is the denom identifier of the token that the user wants to
   * buy.
   */
  toCoinDenom: string;
  /**
   * pool_id is the identifier of the liquidity pool that the trade will occur
   * on.
   */
  poolId: bigint;
  /**
   * max_price_impact is the maximum percentage that the user is willing
   * to affect the price of the liquidity pool.
   */
  maxPriceImpact: string;
  /**
   * external_price is an optional external price that the user can enter.
   * It adjusts the MaxPriceImpact as the SpotPrice of a pool can be changed at
   * any time.
   */
  externalPrice: string;
}
export interface EstimateTradeBasedOnPriceImpactRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest";
  value: Uint8Array;
}
/**
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 */
export interface EstimateTradeBasedOnPriceImpactRequestAmino {
  /** from_coin is the total amount of tokens that the user wants to sell. */
  from_coin?: CoinAmino;
  /**
   * to_coin_denom is the denom identifier of the token that the user wants to
   * buy.
   */
  to_coin_denom?: string;
  /**
   * pool_id is the identifier of the liquidity pool that the trade will occur
   * on.
   */
  pool_id?: string;
  /**
   * max_price_impact is the maximum percentage that the user is willing
   * to affect the price of the liquidity pool.
   */
  max_price_impact?: string;
  /**
   * external_price is an optional external price that the user can enter.
   * It adjusts the MaxPriceImpact as the SpotPrice of a pool can be changed at
   * any time.
   */
  external_price?: string;
}
export interface EstimateTradeBasedOnPriceImpactRequestAminoMsg {
  type: "osmosis/poolmanager/estimate-trade-based-on-price-impact-request";
  value: EstimateTradeBasedOnPriceImpactRequestAmino;
}
/**
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 */
export interface EstimateTradeBasedOnPriceImpactRequestSDKType {
  from_coin: CoinSDKType;
  to_coin_denom: string;
  pool_id: bigint;
  max_price_impact: string;
  external_price: string;
}
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 */
export interface EstimateTradeBasedOnPriceImpactResponse {
  /**
   * input_coin is the actual input amount that would be tradeable
   * under the specified price impact.
   */
  inputCoin: Coin;
  /**
   * output_coin is the amount of tokens of the ToCoinDenom type
   * that will be received for the actual InputCoin trade.
   */
  outputCoin: Coin;
}
export interface EstimateTradeBasedOnPriceImpactResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse";
  value: Uint8Array;
}
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 */
export interface EstimateTradeBasedOnPriceImpactResponseAmino {
  /**
   * input_coin is the actual input amount that would be tradeable
   * under the specified price impact.
   */
  input_coin?: CoinAmino;
  /**
   * output_coin is the amount of tokens of the ToCoinDenom type
   * that will be received for the actual InputCoin trade.
   */
  output_coin?: CoinAmino;
}
export interface EstimateTradeBasedOnPriceImpactResponseAminoMsg {
  type: "osmosis/poolmanager/estimate-trade-based-on-price-impact-response";
  value: EstimateTradeBasedOnPriceImpactResponseAmino;
}
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 */
export interface EstimateTradeBasedOnPriceImpactResponseSDKType {
  input_coin: CoinSDKType;
  output_coin: CoinSDKType;
}
export interface AllTakerFeeShareAgreementsRequest {}
export interface AllTakerFeeShareAgreementsRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllTakerFeeShareAgreementsRequest";
  value: Uint8Array;
}
export interface AllTakerFeeShareAgreementsRequestAmino {}
export interface AllTakerFeeShareAgreementsRequestAminoMsg {
  type: "osmosis/poolmanager/all-taker-fee-share-agreements-request";
  value: AllTakerFeeShareAgreementsRequestAmino;
}
export interface AllTakerFeeShareAgreementsRequestSDKType {}
export interface AllTakerFeeShareAgreementsResponse {
  takerFeeShareAgreements: TakerFeeShareAgreement[];
}
export interface AllTakerFeeShareAgreementsResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllTakerFeeShareAgreementsResponse";
  value: Uint8Array;
}
export interface AllTakerFeeShareAgreementsResponseAmino {
  taker_fee_share_agreements?: TakerFeeShareAgreementAmino[];
}
export interface AllTakerFeeShareAgreementsResponseAminoMsg {
  type: "osmosis/poolmanager/all-taker-fee-share-agreements-response";
  value: AllTakerFeeShareAgreementsResponseAmino;
}
export interface AllTakerFeeShareAgreementsResponseSDKType {
  taker_fee_share_agreements: TakerFeeShareAgreementSDKType[];
}
export interface TakerFeeShareAgreementFromDenomRequest {
  denom: string;
}
export interface TakerFeeShareAgreementFromDenomRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomRequest";
  value: Uint8Array;
}
export interface TakerFeeShareAgreementFromDenomRequestAmino {
  denom?: string;
}
export interface TakerFeeShareAgreementFromDenomRequestAminoMsg {
  type: "osmosis/poolmanager/taker-fee-share-agreement-from-denom-request";
  value: TakerFeeShareAgreementFromDenomRequestAmino;
}
export interface TakerFeeShareAgreementFromDenomRequestSDKType {
  denom: string;
}
export interface TakerFeeShareAgreementFromDenomResponse {
  takerFeeShareAgreement: TakerFeeShareAgreement;
}
export interface TakerFeeShareAgreementFromDenomResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomResponse";
  value: Uint8Array;
}
export interface TakerFeeShareAgreementFromDenomResponseAmino {
  taker_fee_share_agreement?: TakerFeeShareAgreementAmino;
}
export interface TakerFeeShareAgreementFromDenomResponseAminoMsg {
  type: "osmosis/poolmanager/taker-fee-share-agreement-from-denom-response";
  value: TakerFeeShareAgreementFromDenomResponseAmino;
}
export interface TakerFeeShareAgreementFromDenomResponseSDKType {
  taker_fee_share_agreement: TakerFeeShareAgreementSDKType;
}
export interface TakerFeeShareDenomsToAccruedValueRequest {
  denom: string;
  takerFeeDenom: string;
}
export interface TakerFeeShareDenomsToAccruedValueRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueRequest";
  value: Uint8Array;
}
export interface TakerFeeShareDenomsToAccruedValueRequestAmino {
  denom?: string;
  takerFeeDenom?: string;
}
export interface TakerFeeShareDenomsToAccruedValueRequestAminoMsg {
  type: "osmosis/poolmanager/taker-fee-share-denoms-to-accrued-value-request";
  value: TakerFeeShareDenomsToAccruedValueRequestAmino;
}
export interface TakerFeeShareDenomsToAccruedValueRequestSDKType {
  denom: string;
  takerFeeDenom: string;
}
export interface TakerFeeShareDenomsToAccruedValueResponse {
  amount: string;
}
export interface TakerFeeShareDenomsToAccruedValueResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueResponse";
  value: Uint8Array;
}
export interface TakerFeeShareDenomsToAccruedValueResponseAmino {
  amount?: string;
}
export interface TakerFeeShareDenomsToAccruedValueResponseAminoMsg {
  type: "osmosis/poolmanager/taker-fee-share-denoms-to-accrued-value-response";
  value: TakerFeeShareDenomsToAccruedValueResponseAmino;
}
export interface TakerFeeShareDenomsToAccruedValueResponseSDKType {
  amount: string;
}
export interface AllTakerFeeShareAccumulatorsRequest {}
export interface AllTakerFeeShareAccumulatorsRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsRequest";
  value: Uint8Array;
}
export interface AllTakerFeeShareAccumulatorsRequestAmino {}
export interface AllTakerFeeShareAccumulatorsRequestAminoMsg {
  type: "osmosis/poolmanager/all-taker-fee-share-accumulators-request";
  value: AllTakerFeeShareAccumulatorsRequestAmino;
}
export interface AllTakerFeeShareAccumulatorsRequestSDKType {}
export interface AllTakerFeeShareAccumulatorsResponse {
  takerFeeSkimAccumulators: TakerFeeSkimAccumulator[];
}
export interface AllTakerFeeShareAccumulatorsResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsResponse";
  value: Uint8Array;
}
export interface AllTakerFeeShareAccumulatorsResponseAmino {
  taker_fee_skim_accumulators?: TakerFeeSkimAccumulatorAmino[];
}
export interface AllTakerFeeShareAccumulatorsResponseAminoMsg {
  type: "osmosis/poolmanager/all-taker-fee-share-accumulators-response";
  value: AllTakerFeeShareAccumulatorsResponseAmino;
}
export interface AllTakerFeeShareAccumulatorsResponseSDKType {
  taker_fee_skim_accumulators: TakerFeeSkimAccumulatorSDKType[];
}
export interface RegisteredAlloyedPoolFromDenomRequest {
  denom: string;
}
export interface RegisteredAlloyedPoolFromDenomRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomRequest";
  value: Uint8Array;
}
export interface RegisteredAlloyedPoolFromDenomRequestAmino {
  denom?: string;
}
export interface RegisteredAlloyedPoolFromDenomRequestAminoMsg {
  type: "osmosis/poolmanager/registered-alloyed-pool-from-denom-request";
  value: RegisteredAlloyedPoolFromDenomRequestAmino;
}
export interface RegisteredAlloyedPoolFromDenomRequestSDKType {
  denom: string;
}
export interface RegisteredAlloyedPoolFromDenomResponse {
  contractState: AlloyContractTakerFeeShareState;
}
export interface RegisteredAlloyedPoolFromDenomResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomResponse";
  value: Uint8Array;
}
export interface RegisteredAlloyedPoolFromDenomResponseAmino {
  contract_state?: AlloyContractTakerFeeShareStateAmino;
}
export interface RegisteredAlloyedPoolFromDenomResponseAminoMsg {
  type: "osmosis/poolmanager/registered-alloyed-pool-from-denom-response";
  value: RegisteredAlloyedPoolFromDenomResponseAmino;
}
export interface RegisteredAlloyedPoolFromDenomResponseSDKType {
  contract_state: AlloyContractTakerFeeShareStateSDKType;
}
export interface RegisteredAlloyedPoolFromPoolIdRequest {
  poolId: bigint;
}
export interface RegisteredAlloyedPoolFromPoolIdRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdRequest";
  value: Uint8Array;
}
export interface RegisteredAlloyedPoolFromPoolIdRequestAmino {
  pool_id?: string;
}
export interface RegisteredAlloyedPoolFromPoolIdRequestAminoMsg {
  type: "osmosis/poolmanager/registered-alloyed-pool-from-pool-id-request";
  value: RegisteredAlloyedPoolFromPoolIdRequestAmino;
}
export interface RegisteredAlloyedPoolFromPoolIdRequestSDKType {
  pool_id: bigint;
}
export interface RegisteredAlloyedPoolFromPoolIdResponse {
  contractState: AlloyContractTakerFeeShareState;
}
export interface RegisteredAlloyedPoolFromPoolIdResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdResponse";
  value: Uint8Array;
}
export interface RegisteredAlloyedPoolFromPoolIdResponseAmino {
  contract_state?: AlloyContractTakerFeeShareStateAmino;
}
export interface RegisteredAlloyedPoolFromPoolIdResponseAminoMsg {
  type: "osmosis/poolmanager/registered-alloyed-pool-from-pool-id-response";
  value: RegisteredAlloyedPoolFromPoolIdResponseAmino;
}
export interface RegisteredAlloyedPoolFromPoolIdResponseSDKType {
  contract_state: AlloyContractTakerFeeShareStateSDKType;
}
export interface AllRegisteredAlloyedPoolsRequest {}
export interface AllRegisteredAlloyedPoolsRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllRegisteredAlloyedPoolsRequest";
  value: Uint8Array;
}
export interface AllRegisteredAlloyedPoolsRequestAmino {}
export interface AllRegisteredAlloyedPoolsRequestAminoMsg {
  type: "osmosis/poolmanager/all-registered-alloyed-pools-request";
  value: AllRegisteredAlloyedPoolsRequestAmino;
}
export interface AllRegisteredAlloyedPoolsRequestSDKType {}
export interface AllRegisteredAlloyedPoolsResponse {
  contractStates: AlloyContractTakerFeeShareState[];
}
export interface AllRegisteredAlloyedPoolsResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllRegisteredAlloyedPoolsResponse";
  value: Uint8Array;
}
export interface AllRegisteredAlloyedPoolsResponseAmino {
  contract_states?: AlloyContractTakerFeeShareStateAmino[];
}
export interface AllRegisteredAlloyedPoolsResponseAminoMsg {
  type: "osmosis/poolmanager/all-registered-alloyed-pools-response";
  value: AllRegisteredAlloyedPoolsResponseAmino;
}
export interface AllRegisteredAlloyedPoolsResponseSDKType {
  contract_states: AlloyContractTakerFeeShareStateSDKType[];
}
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.ParamsRequest",
  aminoType: "osmosis/poolmanager/params-request",
  is(o: any): o is ParamsRequest {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  isSDK(o: any): o is ParamsRequestSDKType {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  isAmino(o: any): o is ParamsRequestAmino {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ParamsRequest {
    return {};
  },
  toJSON(_: ParamsRequest): JsonSafe<ParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ParamsRequest): ParamsRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/params-request",
      value: ParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ParamsRequest.typeUrl, ParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsRequest.aminoType, ParamsRequest.typeUrl);
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.ParamsResponse",
  aminoType: "osmosis/poolmanager/params-response",
  is(o: any): o is ParamsResponse {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is ParamsResponseSDKType {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is ParamsResponseAmino {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: ParamsResponse): JsonSafe<ParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ParamsResponse): ParamsResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/params-response",
      value: ParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ParamsResponse.typeUrl, ParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsResponse.aminoType, ParamsResponse.typeUrl);
function createBaseEstimateSwapExactAmountInRequest(): EstimateSwapExactAmountInRequest {
  return {
    sender: "",
    poolId: BigInt(0),
    tokenIn: "",
    routes: []
  };
}
export const EstimateSwapExactAmountInRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest",
  aminoType: "osmosis/poolmanager/estimate-swap-exact-amount-in-request",
  is(o: any): o is EstimateSwapExactAmountInRequest {
    return o && (o.$typeUrl === EstimateSwapExactAmountInRequest.typeUrl || typeof o.sender === "string" && typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountInRoute.is(o.routes[0])));
  },
  isSDK(o: any): o is EstimateSwapExactAmountInRequestSDKType {
    return o && (o.$typeUrl === EstimateSwapExactAmountInRequest.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && typeof o.token_in === "string" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountInRoute.isSDK(o.routes[0])));
  },
  isAmino(o: any): o is EstimateSwapExactAmountInRequestAmino {
    return o && (o.$typeUrl === EstimateSwapExactAmountInRequest.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && typeof o.token_in === "string" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountInRoute.isAmino(o.routes[0])));
  },
  encode(message: EstimateSwapExactAmountInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSwapExactAmountInRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromJSON(e)) : []
    };
  },
  toJSON(message: EstimateSwapExactAmountInRequest): JsonSafe<EstimateSwapExactAmountInRequest> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSwapExactAmountInRequest>, I>>(object: I): EstimateSwapExactAmountInRequest {
    const message = createBaseEstimateSwapExactAmountInRequest();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EstimateSwapExactAmountInRequestAmino): EstimateSwapExactAmountInRequest {
    const message = createBaseEstimateSwapExactAmountInRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    return obj;
  },
  fromAminoMsg(object: EstimateSwapExactAmountInRequestAminoMsg): EstimateSwapExactAmountInRequest {
    return EstimateSwapExactAmountInRequest.fromAmino(object.value);
  },
  toAminoMsg(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/estimate-swap-exact-amount-in-request",
      value: EstimateSwapExactAmountInRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: EstimateSwapExactAmountInRequestProtoMsg): EstimateSwapExactAmountInRequest {
    return EstimateSwapExactAmountInRequest.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountInRequest): Uint8Array {
    return EstimateSwapExactAmountInRequest.encode(message).finish();
  },
  toProtoMsg(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest",
      value: EstimateSwapExactAmountInRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EstimateSwapExactAmountInRequest.typeUrl, EstimateSwapExactAmountInRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSwapExactAmountInRequest.aminoType, EstimateSwapExactAmountInRequest.typeUrl);
function createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest(): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    routesPoolId: [],
    routesTokenOutDenom: []
  };
}
export const EstimateSwapExactAmountInWithPrimitiveTypesRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest",
  aminoType: "osmosis/poolmanager/estimate-swap-exact-amount-in-with-primitive-types-request",
  is(o: any): o is EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    return o && (o.$typeUrl === EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && Array.isArray(o.routesPoolId) && (!o.routesPoolId.length || typeof o.routesPoolId[0] === "bigint") && Array.isArray(o.routesTokenOutDenom) && (!o.routesTokenOutDenom.length || typeof o.routesTokenOutDenom[0] === "string"));
  },
  isSDK(o: any): o is EstimateSwapExactAmountInWithPrimitiveTypesRequestSDKType {
    return o && (o.$typeUrl === EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && Array.isArray(o.routes_pool_id) && (!o.routes_pool_id.length || typeof o.routes_pool_id[0] === "bigint") && Array.isArray(o.routes_token_out_denom) && (!o.routes_token_out_denom.length || typeof o.routes_token_out_denom[0] === "string"));
  },
  isAmino(o: any): o is EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino {
    return o && (o.$typeUrl === EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && Array.isArray(o.routes_pool_id) && (!o.routes_pool_id.length || typeof o.routes_pool_id[0] === "bigint") && Array.isArray(o.routes_token_out_denom) && (!o.routes_token_out_denom.length || typeof o.routes_token_out_denom[0] === "string"));
  },
  encode(message: EstimateSwapExactAmountInWithPrimitiveTypesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    writer.uint32(26).fork();
    for (const v of message.routesPoolId) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.routesTokenOutDenom) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.routesPoolId.push(reader.uint64());
            }
          } else {
            message.routesPoolId.push(reader.uint64());
          }
          break;
        case 4:
          message.routesTokenOutDenom.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      routesPoolId: Array.isArray(object?.routesPoolId) ? object.routesPoolId.map((e: any) => BigInt(e.toString())) : [],
      routesTokenOutDenom: Array.isArray(object?.routesTokenOutDenom) ? object.routesTokenOutDenom.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: EstimateSwapExactAmountInWithPrimitiveTypesRequest): JsonSafe<EstimateSwapExactAmountInWithPrimitiveTypesRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    if (message.routesPoolId) {
      obj.routesPoolId = message.routesPoolId.map(e => (e || BigInt(0)).toString());
    } else {
      obj.routesPoolId = [];
    }
    if (message.routesTokenOutDenom) {
      obj.routesTokenOutDenom = message.routesTokenOutDenom.map(e => e);
    } else {
      obj.routesTokenOutDenom = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSwapExactAmountInWithPrimitiveTypesRequest>, I>>(object: I): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    const message = createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.routesPoolId = object.routesPoolId?.map(e => BigInt(e.toString())) || [];
    message.routesTokenOutDenom = object.routesTokenOutDenom?.map(e => e) || [];
    return message;
  },
  fromAmino(object: EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    const message = createBaseEstimateSwapExactAmountInWithPrimitiveTypesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    message.routesPoolId = object.routes_pool_id?.map(e => BigInt(e)) || [];
    message.routesTokenOutDenom = object.routes_token_out_denom?.map(e => e) || [];
    return message;
  },
  toAmino(message: EstimateSwapExactAmountInWithPrimitiveTypesRequest): EstimateSwapExactAmountInWithPrimitiveTypesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    if (message.routesPoolId) {
      obj.routes_pool_id = message.routesPoolId.map(e => e.toString());
    } else {
      obj.routes_pool_id = message.routesPoolId;
    }
    if (message.routesTokenOutDenom) {
      obj.routes_token_out_denom = message.routesTokenOutDenom.map(e => e);
    } else {
      obj.routes_token_out_denom = message.routesTokenOutDenom;
    }
    return obj;
  },
  fromAminoMsg(object: EstimateSwapExactAmountInWithPrimitiveTypesRequestAminoMsg): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    return EstimateSwapExactAmountInWithPrimitiveTypesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: EstimateSwapExactAmountInWithPrimitiveTypesRequest): EstimateSwapExactAmountInWithPrimitiveTypesRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/estimate-swap-exact-amount-in-with-primitive-types-request",
      value: EstimateSwapExactAmountInWithPrimitiveTypesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: EstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    return EstimateSwapExactAmountInWithPrimitiveTypesRequest.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountInWithPrimitiveTypesRequest): Uint8Array {
    return EstimateSwapExactAmountInWithPrimitiveTypesRequest.encode(message).finish();
  },
  toProtoMsg(message: EstimateSwapExactAmountInWithPrimitiveTypesRequest): EstimateSwapExactAmountInWithPrimitiveTypesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest",
      value: EstimateSwapExactAmountInWithPrimitiveTypesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl, EstimateSwapExactAmountInWithPrimitiveTypesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSwapExactAmountInWithPrimitiveTypesRequest.aminoType, EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeUrl);
function createBaseEstimateSinglePoolSwapExactAmountInRequest(): EstimateSinglePoolSwapExactAmountInRequest {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    tokenOutDenom: ""
  };
}
export const EstimateSinglePoolSwapExactAmountInRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest",
  aminoType: "osmosis/poolmanager/estimate-single-pool-swap-exact-amount-in-request",
  is(o: any): o is EstimateSinglePoolSwapExactAmountInRequest {
    return o && (o.$typeUrl === EstimateSinglePoolSwapExactAmountInRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && typeof o.tokenOutDenom === "string");
  },
  isSDK(o: any): o is EstimateSinglePoolSwapExactAmountInRequestSDKType {
    return o && (o.$typeUrl === EstimateSinglePoolSwapExactAmountInRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out_denom === "string");
  },
  isAmino(o: any): o is EstimateSinglePoolSwapExactAmountInRequestAmino {
    return o && (o.$typeUrl === EstimateSinglePoolSwapExactAmountInRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out_denom === "string");
  },
  encode(message: EstimateSinglePoolSwapExactAmountInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSinglePoolSwapExactAmountInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSinglePoolSwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSinglePoolSwapExactAmountInRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : ""
    };
  },
  toJSON(message: EstimateSinglePoolSwapExactAmountInRequest): JsonSafe<EstimateSinglePoolSwapExactAmountInRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSinglePoolSwapExactAmountInRequest>, I>>(object: I): EstimateSinglePoolSwapExactAmountInRequest {
    const message = createBaseEstimateSinglePoolSwapExactAmountInRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
  fromAmino(object: EstimateSinglePoolSwapExactAmountInRequestAmino): EstimateSinglePoolSwapExactAmountInRequest {
    const message = createBaseEstimateSinglePoolSwapExactAmountInRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out_denom !== undefined && object.token_out_denom !== null) {
      message.tokenOutDenom = object.token_out_denom;
    }
    return message;
  },
  toAmino(message: EstimateSinglePoolSwapExactAmountInRequest): EstimateSinglePoolSwapExactAmountInRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out_denom = message.tokenOutDenom === "" ? undefined : message.tokenOutDenom;
    return obj;
  },
  fromAminoMsg(object: EstimateSinglePoolSwapExactAmountInRequestAminoMsg): EstimateSinglePoolSwapExactAmountInRequest {
    return EstimateSinglePoolSwapExactAmountInRequest.fromAmino(object.value);
  },
  toAminoMsg(message: EstimateSinglePoolSwapExactAmountInRequest): EstimateSinglePoolSwapExactAmountInRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/estimate-single-pool-swap-exact-amount-in-request",
      value: EstimateSinglePoolSwapExactAmountInRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: EstimateSinglePoolSwapExactAmountInRequestProtoMsg): EstimateSinglePoolSwapExactAmountInRequest {
    return EstimateSinglePoolSwapExactAmountInRequest.decode(message.value);
  },
  toProto(message: EstimateSinglePoolSwapExactAmountInRequest): Uint8Array {
    return EstimateSinglePoolSwapExactAmountInRequest.encode(message).finish();
  },
  toProtoMsg(message: EstimateSinglePoolSwapExactAmountInRequest): EstimateSinglePoolSwapExactAmountInRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest",
      value: EstimateSinglePoolSwapExactAmountInRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EstimateSinglePoolSwapExactAmountInRequest.typeUrl, EstimateSinglePoolSwapExactAmountInRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSinglePoolSwapExactAmountInRequest.aminoType, EstimateSinglePoolSwapExactAmountInRequest.typeUrl);
function createBaseEstimateSwapExactAmountInResponse(): EstimateSwapExactAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}
export const EstimateSwapExactAmountInResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse",
  aminoType: "osmosis/poolmanager/estimate-swap-exact-amount-in-response",
  is(o: any): o is EstimateSwapExactAmountInResponse {
    return o && (o.$typeUrl === EstimateSwapExactAmountInResponse.typeUrl || typeof o.tokenOutAmount === "string");
  },
  isSDK(o: any): o is EstimateSwapExactAmountInResponseSDKType {
    return o && (o.$typeUrl === EstimateSwapExactAmountInResponse.typeUrl || typeof o.token_out_amount === "string");
  },
  isAmino(o: any): o is EstimateSwapExactAmountInResponseAmino {
    return o && (o.$typeUrl === EstimateSwapExactAmountInResponse.typeUrl || typeof o.token_out_amount === "string");
  },
  encode(message: EstimateSwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSwapExactAmountInResponse {
    return {
      tokenOutAmount: isSet(object.tokenOutAmount) ? String(object.tokenOutAmount) : ""
    };
  },
  toJSON(message: EstimateSwapExactAmountInResponse): JsonSafe<EstimateSwapExactAmountInResponse> {
    const obj: any = {};
    message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSwapExactAmountInResponse>, I>>(object: I): EstimateSwapExactAmountInResponse {
    const message = createBaseEstimateSwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
  fromAmino(object: EstimateSwapExactAmountInResponseAmino): EstimateSwapExactAmountInResponse {
    const message = createBaseEstimateSwapExactAmountInResponse();
    if (object.token_out_amount !== undefined && object.token_out_amount !== null) {
      message.tokenOutAmount = object.token_out_amount;
    }
    return message;
  },
  toAmino(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount === "" ? undefined : message.tokenOutAmount;
    return obj;
  },
  fromAminoMsg(object: EstimateSwapExactAmountInResponseAminoMsg): EstimateSwapExactAmountInResponse {
    return EstimateSwapExactAmountInResponse.fromAmino(object.value);
  },
  toAminoMsg(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/estimate-swap-exact-amount-in-response",
      value: EstimateSwapExactAmountInResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: EstimateSwapExactAmountInResponseProtoMsg): EstimateSwapExactAmountInResponse {
    return EstimateSwapExactAmountInResponse.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountInResponse): Uint8Array {
    return EstimateSwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse",
      value: EstimateSwapExactAmountInResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EstimateSwapExactAmountInResponse.typeUrl, EstimateSwapExactAmountInResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSwapExactAmountInResponse.aminoType, EstimateSwapExactAmountInResponse.typeUrl);
function createBaseEstimateSwapExactAmountOutRequest(): EstimateSwapExactAmountOutRequest {
  return {
    sender: "",
    poolId: BigInt(0),
    routes: [],
    tokenOut: ""
  };
}
export const EstimateSwapExactAmountOutRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest",
  aminoType: "osmosis/poolmanager/estimate-swap-exact-amount-out-request",
  is(o: any): o is EstimateSwapExactAmountOutRequest {
    return o && (o.$typeUrl === EstimateSwapExactAmountOutRequest.typeUrl || typeof o.sender === "string" && typeof o.poolId === "bigint" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountOutRoute.is(o.routes[0])) && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is EstimateSwapExactAmountOutRequestSDKType {
    return o && (o.$typeUrl === EstimateSwapExactAmountOutRequest.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountOutRoute.isSDK(o.routes[0])) && typeof o.token_out === "string");
  },
  isAmino(o: any): o is EstimateSwapExactAmountOutRequestAmino {
    return o && (o.$typeUrl === EstimateSwapExactAmountOutRequest.typeUrl || typeof o.sender === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.routes) && (!o.routes.length || SwapAmountOutRoute.isAmino(o.routes[0])) && typeof o.token_out === "string");
  },
  encode(message: EstimateSwapExactAmountOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSwapExactAmountOutRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromJSON(e)) : [],
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: EstimateSwapExactAmountOutRequest): JsonSafe<EstimateSwapExactAmountOutRequest> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSwapExactAmountOutRequest>, I>>(object: I): EstimateSwapExactAmountOutRequest {
    const message = createBaseEstimateSwapExactAmountOutRequest();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: EstimateSwapExactAmountOutRequestAmino): EstimateSwapExactAmountOutRequest {
    const message = createBaseEstimateSwapExactAmountOutRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: EstimateSwapExactAmountOutRequestAminoMsg): EstimateSwapExactAmountOutRequest {
    return EstimateSwapExactAmountOutRequest.fromAmino(object.value);
  },
  toAminoMsg(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/estimate-swap-exact-amount-out-request",
      value: EstimateSwapExactAmountOutRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: EstimateSwapExactAmountOutRequestProtoMsg): EstimateSwapExactAmountOutRequest {
    return EstimateSwapExactAmountOutRequest.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountOutRequest): Uint8Array {
    return EstimateSwapExactAmountOutRequest.encode(message).finish();
  },
  toProtoMsg(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest",
      value: EstimateSwapExactAmountOutRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EstimateSwapExactAmountOutRequest.typeUrl, EstimateSwapExactAmountOutRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSwapExactAmountOutRequest.aminoType, EstimateSwapExactAmountOutRequest.typeUrl);
function createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest(): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
  return {
    poolId: BigInt(0),
    routesPoolId: [],
    routesTokenInDenom: [],
    tokenOut: ""
  };
}
export const EstimateSwapExactAmountOutWithPrimitiveTypesRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest",
  aminoType: "osmosis/poolmanager/estimate-swap-exact-amount-out-with-primitive-types-request",
  is(o: any): o is EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    return o && (o.$typeUrl === EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl || typeof o.poolId === "bigint" && Array.isArray(o.routesPoolId) && (!o.routesPoolId.length || typeof o.routesPoolId[0] === "bigint") && Array.isArray(o.routesTokenInDenom) && (!o.routesTokenInDenom.length || typeof o.routesTokenInDenom[0] === "string") && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is EstimateSwapExactAmountOutWithPrimitiveTypesRequestSDKType {
    return o && (o.$typeUrl === EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.routes_pool_id) && (!o.routes_pool_id.length || typeof o.routes_pool_id[0] === "bigint") && Array.isArray(o.routes_token_in_denom) && (!o.routes_token_in_denom.length || typeof o.routes_token_in_denom[0] === "string") && typeof o.token_out === "string");
  },
  isAmino(o: any): o is EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino {
    return o && (o.$typeUrl === EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.routes_pool_id) && (!o.routes_pool_id.length || typeof o.routes_pool_id[0] === "bigint") && Array.isArray(o.routes_token_in_denom) && (!o.routes_token_in_denom.length || typeof o.routes_token_in_denom[0] === "string") && typeof o.token_out === "string");
  },
  encode(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    writer.uint32(18).fork();
    for (const v of message.routesPoolId) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.routesTokenInDenom) {
      writer.uint32(26).string(v!);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.routesPoolId.push(reader.uint64());
            }
          } else {
            message.routesPoolId.push(reader.uint64());
          }
          break;
        case 3:
          message.routesTokenInDenom.push(reader.string());
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      routesPoolId: Array.isArray(object?.routesPoolId) ? object.routesPoolId.map((e: any) => BigInt(e.toString())) : [],
      routesTokenInDenom: Array.isArray(object?.routesTokenInDenom) ? object.routesTokenInDenom.map((e: any) => String(e)) : [],
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): JsonSafe<EstimateSwapExactAmountOutWithPrimitiveTypesRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.routesPoolId) {
      obj.routesPoolId = message.routesPoolId.map(e => (e || BigInt(0)).toString());
    } else {
      obj.routesPoolId = [];
    }
    if (message.routesTokenInDenom) {
      obj.routesTokenInDenom = message.routesTokenInDenom.map(e => e);
    } else {
      obj.routesTokenInDenom = [];
    }
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSwapExactAmountOutWithPrimitiveTypesRequest>, I>>(object: I): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    const message = createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.routesPoolId = object.routesPoolId?.map(e => BigInt(e.toString())) || [];
    message.routesTokenInDenom = object.routesTokenInDenom?.map(e => e) || [];
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    const message = createBaseEstimateSwapExactAmountOutWithPrimitiveTypesRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.routesPoolId = object.routes_pool_id?.map(e => BigInt(e)) || [];
    message.routesTokenInDenom = object.routes_token_in_denom?.map(e => e) || [];
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): EstimateSwapExactAmountOutWithPrimitiveTypesRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    if (message.routesPoolId) {
      obj.routes_pool_id = message.routesPoolId.map(e => e.toString());
    } else {
      obj.routes_pool_id = message.routesPoolId;
    }
    if (message.routesTokenInDenom) {
      obj.routes_token_in_denom = message.routesTokenInDenom.map(e => e);
    } else {
      obj.routes_token_in_denom = message.routesTokenInDenom;
    }
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: EstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    return EstimateSwapExactAmountOutWithPrimitiveTypesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): EstimateSwapExactAmountOutWithPrimitiveTypesRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/estimate-swap-exact-amount-out-with-primitive-types-request",
      value: EstimateSwapExactAmountOutWithPrimitiveTypesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    return EstimateSwapExactAmountOutWithPrimitiveTypesRequest.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): Uint8Array {
    return EstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(message).finish();
  },
  toProtoMsg(message: EstimateSwapExactAmountOutWithPrimitiveTypesRequest): EstimateSwapExactAmountOutWithPrimitiveTypesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest",
      value: EstimateSwapExactAmountOutWithPrimitiveTypesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl, EstimateSwapExactAmountOutWithPrimitiveTypesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSwapExactAmountOutWithPrimitiveTypesRequest.aminoType, EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeUrl);
function createBaseEstimateSinglePoolSwapExactAmountOutRequest(): EstimateSinglePoolSwapExactAmountOutRequest {
  return {
    poolId: BigInt(0),
    tokenInDenom: "",
    tokenOut: ""
  };
}
export const EstimateSinglePoolSwapExactAmountOutRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest",
  aminoType: "osmosis/poolmanager/estimate-single-pool-swap-exact-amount-out-request",
  is(o: any): o is EstimateSinglePoolSwapExactAmountOutRequest {
    return o && (o.$typeUrl === EstimateSinglePoolSwapExactAmountOutRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenInDenom === "string" && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is EstimateSinglePoolSwapExactAmountOutRequestSDKType {
    return o && (o.$typeUrl === EstimateSinglePoolSwapExactAmountOutRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in_denom === "string" && typeof o.token_out === "string");
  },
  isAmino(o: any): o is EstimateSinglePoolSwapExactAmountOutRequestAmino {
    return o && (o.$typeUrl === EstimateSinglePoolSwapExactAmountOutRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in_denom === "string" && typeof o.token_out === "string");
  },
  encode(message: EstimateSinglePoolSwapExactAmountOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSinglePoolSwapExactAmountOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSinglePoolSwapExactAmountOutRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: EstimateSinglePoolSwapExactAmountOutRequest): JsonSafe<EstimateSinglePoolSwapExactAmountOutRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSinglePoolSwapExactAmountOutRequest>, I>>(object: I): EstimateSinglePoolSwapExactAmountOutRequest {
    const message = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: EstimateSinglePoolSwapExactAmountOutRequestAmino): EstimateSinglePoolSwapExactAmountOutRequest {
    const message = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
      message.tokenInDenom = object.token_in_denom;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: EstimateSinglePoolSwapExactAmountOutRequest): EstimateSinglePoolSwapExactAmountOutRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.token_in_denom = message.tokenInDenom === "" ? undefined : message.tokenInDenom;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: EstimateSinglePoolSwapExactAmountOutRequestAminoMsg): EstimateSinglePoolSwapExactAmountOutRequest {
    return EstimateSinglePoolSwapExactAmountOutRequest.fromAmino(object.value);
  },
  toAminoMsg(message: EstimateSinglePoolSwapExactAmountOutRequest): EstimateSinglePoolSwapExactAmountOutRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/estimate-single-pool-swap-exact-amount-out-request",
      value: EstimateSinglePoolSwapExactAmountOutRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: EstimateSinglePoolSwapExactAmountOutRequestProtoMsg): EstimateSinglePoolSwapExactAmountOutRequest {
    return EstimateSinglePoolSwapExactAmountOutRequest.decode(message.value);
  },
  toProto(message: EstimateSinglePoolSwapExactAmountOutRequest): Uint8Array {
    return EstimateSinglePoolSwapExactAmountOutRequest.encode(message).finish();
  },
  toProtoMsg(message: EstimateSinglePoolSwapExactAmountOutRequest): EstimateSinglePoolSwapExactAmountOutRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest",
      value: EstimateSinglePoolSwapExactAmountOutRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EstimateSinglePoolSwapExactAmountOutRequest.typeUrl, EstimateSinglePoolSwapExactAmountOutRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSinglePoolSwapExactAmountOutRequest.aminoType, EstimateSinglePoolSwapExactAmountOutRequest.typeUrl);
function createBaseEstimateSwapExactAmountOutResponse(): EstimateSwapExactAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}
export const EstimateSwapExactAmountOutResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse",
  aminoType: "osmosis/poolmanager/estimate-swap-exact-amount-out-response",
  is(o: any): o is EstimateSwapExactAmountOutResponse {
    return o && (o.$typeUrl === EstimateSwapExactAmountOutResponse.typeUrl || typeof o.tokenInAmount === "string");
  },
  isSDK(o: any): o is EstimateSwapExactAmountOutResponseSDKType {
    return o && (o.$typeUrl === EstimateSwapExactAmountOutResponse.typeUrl || typeof o.token_in_amount === "string");
  },
  isAmino(o: any): o is EstimateSwapExactAmountOutResponseAmino {
    return o && (o.$typeUrl === EstimateSwapExactAmountOutResponse.typeUrl || typeof o.token_in_amount === "string");
  },
  encode(message: EstimateSwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSwapExactAmountOutResponse {
    return {
      tokenInAmount: isSet(object.tokenInAmount) ? String(object.tokenInAmount) : ""
    };
  },
  toJSON(message: EstimateSwapExactAmountOutResponse): JsonSafe<EstimateSwapExactAmountOutResponse> {
    const obj: any = {};
    message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateSwapExactAmountOutResponse>, I>>(object: I): EstimateSwapExactAmountOutResponse {
    const message = createBaseEstimateSwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
  fromAmino(object: EstimateSwapExactAmountOutResponseAmino): EstimateSwapExactAmountOutResponse {
    const message = createBaseEstimateSwapExactAmountOutResponse();
    if (object.token_in_amount !== undefined && object.token_in_amount !== null) {
      message.tokenInAmount = object.token_in_amount;
    }
    return message;
  },
  toAmino(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount === "" ? undefined : message.tokenInAmount;
    return obj;
  },
  fromAminoMsg(object: EstimateSwapExactAmountOutResponseAminoMsg): EstimateSwapExactAmountOutResponse {
    return EstimateSwapExactAmountOutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/estimate-swap-exact-amount-out-response",
      value: EstimateSwapExactAmountOutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: EstimateSwapExactAmountOutResponseProtoMsg): EstimateSwapExactAmountOutResponse {
    return EstimateSwapExactAmountOutResponse.decode(message.value);
  },
  toProto(message: EstimateSwapExactAmountOutResponse): Uint8Array {
    return EstimateSwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse",
      value: EstimateSwapExactAmountOutResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EstimateSwapExactAmountOutResponse.typeUrl, EstimateSwapExactAmountOutResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateSwapExactAmountOutResponse.aminoType, EstimateSwapExactAmountOutResponse.typeUrl);
function createBaseNumPoolsRequest(): NumPoolsRequest {
  return {};
}
export const NumPoolsRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.NumPoolsRequest",
  aminoType: "osmosis/poolmanager/num-pools-request",
  is(o: any): o is NumPoolsRequest {
    return o && o.$typeUrl === NumPoolsRequest.typeUrl;
  },
  isSDK(o: any): o is NumPoolsRequestSDKType {
    return o && o.$typeUrl === NumPoolsRequest.typeUrl;
  },
  isAmino(o: any): o is NumPoolsRequestAmino {
    return o && o.$typeUrl === NumPoolsRequest.typeUrl;
  },
  encode(_: NumPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): NumPoolsRequest {
    return {};
  },
  toJSON(_: NumPoolsRequest): JsonSafe<NumPoolsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NumPoolsRequest>, I>>(_: I): NumPoolsRequest {
    const message = createBaseNumPoolsRequest();
    return message;
  },
  fromAmino(_: NumPoolsRequestAmino): NumPoolsRequest {
    const message = createBaseNumPoolsRequest();
    return message;
  },
  toAmino(_: NumPoolsRequest): NumPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: NumPoolsRequestAminoMsg): NumPoolsRequest {
    return NumPoolsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: NumPoolsRequest): NumPoolsRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/num-pools-request",
      value: NumPoolsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: NumPoolsRequestProtoMsg): NumPoolsRequest {
    return NumPoolsRequest.decode(message.value);
  },
  toProto(message: NumPoolsRequest): Uint8Array {
    return NumPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: NumPoolsRequest): NumPoolsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.NumPoolsRequest",
      value: NumPoolsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(NumPoolsRequest.typeUrl, NumPoolsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(NumPoolsRequest.aminoType, NumPoolsRequest.typeUrl);
function createBaseNumPoolsResponse(): NumPoolsResponse {
  return {
    numPools: BigInt(0)
  };
}
export const NumPoolsResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.NumPoolsResponse",
  aminoType: "osmosis/poolmanager/num-pools-response",
  is(o: any): o is NumPoolsResponse {
    return o && (o.$typeUrl === NumPoolsResponse.typeUrl || typeof o.numPools === "bigint");
  },
  isSDK(o: any): o is NumPoolsResponseSDKType {
    return o && (o.$typeUrl === NumPoolsResponse.typeUrl || typeof o.num_pools === "bigint");
  },
  isAmino(o: any): o is NumPoolsResponseAmino {
    return o && (o.$typeUrl === NumPoolsResponse.typeUrl || typeof o.num_pools === "bigint");
  },
  encode(message: NumPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numPools !== BigInt(0)) {
      writer.uint32(8).uint64(message.numPools);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numPools = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NumPoolsResponse {
    return {
      numPools: isSet(object.numPools) ? BigInt(object.numPools.toString()) : BigInt(0)
    };
  },
  toJSON(message: NumPoolsResponse): JsonSafe<NumPoolsResponse> {
    const obj: any = {};
    message.numPools !== undefined && (obj.numPools = (message.numPools || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NumPoolsResponse>, I>>(object: I): NumPoolsResponse {
    const message = createBaseNumPoolsResponse();
    message.numPools = object.numPools !== undefined && object.numPools !== null ? BigInt(object.numPools.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: NumPoolsResponseAmino): NumPoolsResponse {
    const message = createBaseNumPoolsResponse();
    if (object.num_pools !== undefined && object.num_pools !== null) {
      message.numPools = BigInt(object.num_pools);
    }
    return message;
  },
  toAmino(message: NumPoolsResponse): NumPoolsResponseAmino {
    const obj: any = {};
    obj.num_pools = message.numPools !== BigInt(0) ? (message.numPools?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: NumPoolsResponseAminoMsg): NumPoolsResponse {
    return NumPoolsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: NumPoolsResponse): NumPoolsResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/num-pools-response",
      value: NumPoolsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: NumPoolsResponseProtoMsg): NumPoolsResponse {
    return NumPoolsResponse.decode(message.value);
  },
  toProto(message: NumPoolsResponse): Uint8Array {
    return NumPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: NumPoolsResponse): NumPoolsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.NumPoolsResponse",
      value: NumPoolsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(NumPoolsResponse.typeUrl, NumPoolsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(NumPoolsResponse.aminoType, NumPoolsResponse.typeUrl);
function createBasePoolRequest(): PoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const PoolRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.PoolRequest",
  aminoType: "osmosis/poolmanager/pool-request",
  is(o: any): o is PoolRequest {
    return o && (o.$typeUrl === PoolRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is PoolRequestSDKType {
    return o && (o.$typeUrl === PoolRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is PoolRequestAmino {
    return o && (o.$typeUrl === PoolRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: PoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: PoolRequest): JsonSafe<PoolRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolRequest>, I>>(object: I): PoolRequest {
    const message = createBasePoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PoolRequestAmino): PoolRequest {
    const message = createBasePoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: PoolRequest): PoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolRequestAminoMsg): PoolRequest {
    return PoolRequest.fromAmino(object.value);
  },
  toAminoMsg(message: PoolRequest): PoolRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/pool-request",
      value: PoolRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolRequestProtoMsg): PoolRequest {
    return PoolRequest.decode(message.value);
  },
  toProto(message: PoolRequest): Uint8Array {
    return PoolRequest.encode(message).finish();
  },
  toProtoMsg(message: PoolRequest): PoolRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.PoolRequest",
      value: PoolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolRequest.typeUrl, PoolRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolRequest.aminoType, PoolRequest.typeUrl);
function createBasePoolResponse(): PoolResponse {
  return {
    pool: undefined
  };
}
export const PoolResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.PoolResponse",
  aminoType: "osmosis/poolmanager/pool-response",
  is(o: any): o is PoolResponse {
    return o && o.$typeUrl === PoolResponse.typeUrl;
  },
  isSDK(o: any): o is PoolResponseSDKType {
    return o && o.$typeUrl === PoolResponse.typeUrl;
  },
  isAmino(o: any): o is PoolResponseAmino {
    return o && o.$typeUrl === PoolResponse.typeUrl;
  },
  encode(message: PoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.pool), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolResponse {
    return {
      pool: isSet(object.pool) ? GlobalDecoderRegistry.fromJSON(object.pool) : undefined
    };
  },
  toJSON(message: PoolResponse): JsonSafe<PoolResponse> {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? GlobalDecoderRegistry.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolResponse>, I>>(object: I): PoolResponse {
    const message = createBasePoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? GlobalDecoderRegistry.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: PoolResponseAmino): PoolResponse {
    const message = createBasePoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = GlobalDecoderRegistry.fromAminoMsg(object.pool);
    }
    return message;
  },
  toAmino(message: PoolResponse): PoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? GlobalDecoderRegistry.toAminoMsg(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolResponseAminoMsg): PoolResponse {
    return PoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: PoolResponse): PoolResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/pool-response",
      value: PoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolResponseProtoMsg): PoolResponse {
    return PoolResponse.decode(message.value);
  },
  toProto(message: PoolResponse): Uint8Array {
    return PoolResponse.encode(message).finish();
  },
  toProtoMsg(message: PoolResponse): PoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.PoolResponse",
      value: PoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolResponse.typeUrl, PoolResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolResponse.aminoType, PoolResponse.typeUrl);
function createBaseAllPoolsRequest(): AllPoolsRequest {
  return {};
}
export const AllPoolsRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllPoolsRequest",
  aminoType: "osmosis/poolmanager/all-pools-request",
  is(o: any): o is AllPoolsRequest {
    return o && o.$typeUrl === AllPoolsRequest.typeUrl;
  },
  isSDK(o: any): o is AllPoolsRequestSDKType {
    return o && o.$typeUrl === AllPoolsRequest.typeUrl;
  },
  isAmino(o: any): o is AllPoolsRequestAmino {
    return o && o.$typeUrl === AllPoolsRequest.typeUrl;
  },
  encode(_: AllPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): AllPoolsRequest {
    return {};
  },
  toJSON(_: AllPoolsRequest): JsonSafe<AllPoolsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllPoolsRequest>, I>>(_: I): AllPoolsRequest {
    const message = createBaseAllPoolsRequest();
    return message;
  },
  fromAmino(_: AllPoolsRequestAmino): AllPoolsRequest {
    const message = createBaseAllPoolsRequest();
    return message;
  },
  toAmino(_: AllPoolsRequest): AllPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: AllPoolsRequestAminoMsg): AllPoolsRequest {
    return AllPoolsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AllPoolsRequest): AllPoolsRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/all-pools-request",
      value: AllPoolsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AllPoolsRequestProtoMsg): AllPoolsRequest {
    return AllPoolsRequest.decode(message.value);
  },
  toProto(message: AllPoolsRequest): Uint8Array {
    return AllPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: AllPoolsRequest): AllPoolsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.AllPoolsRequest",
      value: AllPoolsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AllPoolsRequest.typeUrl, AllPoolsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AllPoolsRequest.aminoType, AllPoolsRequest.typeUrl);
function createBaseAllPoolsResponse(): AllPoolsResponse {
  return {
    pools: []
  };
}
export const AllPoolsResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllPoolsResponse",
  aminoType: "osmosis/poolmanager/all-pools-response",
  is(o: any): o is AllPoolsResponse {
    return o && (o.$typeUrl === AllPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.is(o.pools[0]) || Pool2.is(o.pools[0]) || Pool3.is(o.pools[0]) || Any.is(o.pools[0])));
  },
  isSDK(o: any): o is AllPoolsResponseSDKType {
    return o && (o.$typeUrl === AllPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isSDK(o.pools[0]) || Pool2.isSDK(o.pools[0]) || Pool3.isSDK(o.pools[0]) || Any.isSDK(o.pools[0])));
  },
  isAmino(o: any): o is AllPoolsResponseAmino {
    return o && (o.$typeUrl === AllPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isAmino(o.pools[0]) || Pool2.isAmino(o.pools[0]) || Pool3.isAmino(o.pools[0]) || Any.isAmino(o.pools[0])));
  },
  encode(message: AllPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => GlobalDecoderRegistry.fromJSON(e)) : []
    };
  },
  toJSON(message: AllPoolsResponse): JsonSafe<AllPoolsResponse> {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllPoolsResponse>, I>>(object: I): AllPoolsResponse {
    const message = createBaseAllPoolsResponse();
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    return message;
  },
  fromAmino(object: AllPoolsResponseAmino): AllPoolsResponse {
    const message = createBaseAllPoolsResponse();
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    return message;
  },
  toAmino(message: AllPoolsResponse): AllPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    return obj;
  },
  fromAminoMsg(object: AllPoolsResponseAminoMsg): AllPoolsResponse {
    return AllPoolsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AllPoolsResponse): AllPoolsResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/all-pools-response",
      value: AllPoolsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AllPoolsResponseProtoMsg): AllPoolsResponse {
    return AllPoolsResponse.decode(message.value);
  },
  toProto(message: AllPoolsResponse): Uint8Array {
    return AllPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: AllPoolsResponse): AllPoolsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.AllPoolsResponse",
      value: AllPoolsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AllPoolsResponse.typeUrl, AllPoolsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AllPoolsResponse.aminoType, AllPoolsResponse.typeUrl);
function createBaseListPoolsByDenomRequest(): ListPoolsByDenomRequest {
  return {
    denom: ""
  };
}
export const ListPoolsByDenomRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.ListPoolsByDenomRequest",
  aminoType: "osmosis/poolmanager/list-pools-by-denom-request",
  is(o: any): o is ListPoolsByDenomRequest {
    return o && (o.$typeUrl === ListPoolsByDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is ListPoolsByDenomRequestSDKType {
    return o && (o.$typeUrl === ListPoolsByDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is ListPoolsByDenomRequestAmino {
    return o && (o.$typeUrl === ListPoolsByDenomRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: ListPoolsByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListPoolsByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPoolsByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListPoolsByDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: ListPoolsByDenomRequest): JsonSafe<ListPoolsByDenomRequest> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListPoolsByDenomRequest>, I>>(object: I): ListPoolsByDenomRequest {
    const message = createBaseListPoolsByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: ListPoolsByDenomRequestAmino): ListPoolsByDenomRequest {
    const message = createBaseListPoolsByDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: ListPoolsByDenomRequest): ListPoolsByDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: ListPoolsByDenomRequestAminoMsg): ListPoolsByDenomRequest {
    return ListPoolsByDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListPoolsByDenomRequest): ListPoolsByDenomRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/list-pools-by-denom-request",
      value: ListPoolsByDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListPoolsByDenomRequestProtoMsg): ListPoolsByDenomRequest {
    return ListPoolsByDenomRequest.decode(message.value);
  },
  toProto(message: ListPoolsByDenomRequest): Uint8Array {
    return ListPoolsByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: ListPoolsByDenomRequest): ListPoolsByDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.ListPoolsByDenomRequest",
      value: ListPoolsByDenomRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListPoolsByDenomRequest.typeUrl, ListPoolsByDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ListPoolsByDenomRequest.aminoType, ListPoolsByDenomRequest.typeUrl);
function createBaseListPoolsByDenomResponse(): ListPoolsByDenomResponse {
  return {
    pools: []
  };
}
export const ListPoolsByDenomResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.ListPoolsByDenomResponse",
  aminoType: "osmosis/poolmanager/list-pools-by-denom-response",
  is(o: any): o is ListPoolsByDenomResponse {
    return o && (o.$typeUrl === ListPoolsByDenomResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.is(o.pools[0]) || Pool2.is(o.pools[0]) || Pool3.is(o.pools[0]) || Any.is(o.pools[0])));
  },
  isSDK(o: any): o is ListPoolsByDenomResponseSDKType {
    return o && (o.$typeUrl === ListPoolsByDenomResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isSDK(o.pools[0]) || Pool2.isSDK(o.pools[0]) || Pool3.isSDK(o.pools[0]) || Any.isSDK(o.pools[0])));
  },
  isAmino(o: any): o is ListPoolsByDenomResponseAmino {
    return o && (o.$typeUrl === ListPoolsByDenomResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isAmino(o.pools[0]) || Pool2.isAmino(o.pools[0]) || Pool3.isAmino(o.pools[0]) || Any.isAmino(o.pools[0])));
  },
  encode(message: ListPoolsByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListPoolsByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPoolsByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListPoolsByDenomResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => GlobalDecoderRegistry.fromJSON(e)) : []
    };
  },
  toJSON(message: ListPoolsByDenomResponse): JsonSafe<ListPoolsByDenomResponse> {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListPoolsByDenomResponse>, I>>(object: I): ListPoolsByDenomResponse {
    const message = createBaseListPoolsByDenomResponse();
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    return message;
  },
  fromAmino(object: ListPoolsByDenomResponseAmino): ListPoolsByDenomResponse {
    const message = createBaseListPoolsByDenomResponse();
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    return message;
  },
  toAmino(message: ListPoolsByDenomResponse): ListPoolsByDenomResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    return obj;
  },
  fromAminoMsg(object: ListPoolsByDenomResponseAminoMsg): ListPoolsByDenomResponse {
    return ListPoolsByDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListPoolsByDenomResponse): ListPoolsByDenomResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/list-pools-by-denom-response",
      value: ListPoolsByDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListPoolsByDenomResponseProtoMsg): ListPoolsByDenomResponse {
    return ListPoolsByDenomResponse.decode(message.value);
  },
  toProto(message: ListPoolsByDenomResponse): Uint8Array {
    return ListPoolsByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: ListPoolsByDenomResponse): ListPoolsByDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.ListPoolsByDenomResponse",
      value: ListPoolsByDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListPoolsByDenomResponse.typeUrl, ListPoolsByDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ListPoolsByDenomResponse.aminoType, ListPoolsByDenomResponse.typeUrl);
function createBaseSpotPriceRequest(): SpotPriceRequest {
  return {
    poolId: BigInt(0),
    baseAssetDenom: "",
    quoteAssetDenom: ""
  };
}
export const SpotPriceRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.SpotPriceRequest",
  aminoType: "osmosis/poolmanager/spot-price-request",
  is(o: any): o is SpotPriceRequest {
    return o && (o.$typeUrl === SpotPriceRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.baseAssetDenom === "string" && typeof o.quoteAssetDenom === "string");
  },
  isSDK(o: any): o is SpotPriceRequestSDKType {
    return o && (o.$typeUrl === SpotPriceRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.base_asset_denom === "string" && typeof o.quote_asset_denom === "string");
  },
  isAmino(o: any): o is SpotPriceRequestAmino {
    return o && (o.$typeUrl === SpotPriceRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.base_asset_denom === "string" && typeof o.quote_asset_denom === "string");
  },
  encode(message: SpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(26).string(message.quoteAssetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAssetDenom = reader.string();
          break;
        case 3:
          message.quoteAssetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SpotPriceRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      baseAssetDenom: isSet(object.baseAssetDenom) ? String(object.baseAssetDenom) : "",
      quoteAssetDenom: isSet(object.quoteAssetDenom) ? String(object.quoteAssetDenom) : ""
    };
  },
  toJSON(message: SpotPriceRequest): JsonSafe<SpotPriceRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.baseAssetDenom !== undefined && (obj.baseAssetDenom = message.baseAssetDenom);
    message.quoteAssetDenom !== undefined && (obj.quoteAssetDenom = message.quoteAssetDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SpotPriceRequest>, I>>(object: I): SpotPriceRequest {
    const message = createBaseSpotPriceRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    return message;
  },
  fromAmino(object: SpotPriceRequestAmino): SpotPriceRequest {
    const message = createBaseSpotPriceRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset_denom !== undefined && object.base_asset_denom !== null) {
      message.baseAssetDenom = object.base_asset_denom;
    }
    if (object.quote_asset_denom !== undefined && object.quote_asset_denom !== null) {
      message.quoteAssetDenom = object.quote_asset_denom;
    }
    return message;
  },
  toAmino(message: SpotPriceRequest): SpotPriceRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.base_asset_denom = message.baseAssetDenom === "" ? undefined : message.baseAssetDenom;
    obj.quote_asset_denom = message.quoteAssetDenom === "" ? undefined : message.quoteAssetDenom;
    return obj;
  },
  fromAminoMsg(object: SpotPriceRequestAminoMsg): SpotPriceRequest {
    return SpotPriceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: SpotPriceRequest): SpotPriceRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/spot-price-request",
      value: SpotPriceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: SpotPriceRequestProtoMsg): SpotPriceRequest {
    return SpotPriceRequest.decode(message.value);
  },
  toProto(message: SpotPriceRequest): Uint8Array {
    return SpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: SpotPriceRequest): SpotPriceRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.SpotPriceRequest",
      value: SpotPriceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SpotPriceRequest.typeUrl, SpotPriceRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(SpotPriceRequest.aminoType, SpotPriceRequest.typeUrl);
function createBaseSpotPriceResponse(): SpotPriceResponse {
  return {
    spotPrice: ""
  };
}
export const SpotPriceResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.SpotPriceResponse",
  aminoType: "osmosis/poolmanager/spot-price-response",
  is(o: any): o is SpotPriceResponse {
    return o && (o.$typeUrl === SpotPriceResponse.typeUrl || typeof o.spotPrice === "string");
  },
  isSDK(o: any): o is SpotPriceResponseSDKType {
    return o && (o.$typeUrl === SpotPriceResponse.typeUrl || typeof o.spot_price === "string");
  },
  isAmino(o: any): o is SpotPriceResponseAmino {
    return o && (o.$typeUrl === SpotPriceResponse.typeUrl || typeof o.spot_price === "string");
  },
  encode(message: SpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SpotPriceResponse {
    return {
      spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : ""
    };
  },
  toJSON(message: SpotPriceResponse): JsonSafe<SpotPriceResponse> {
    const obj: any = {};
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SpotPriceResponse>, I>>(object: I): SpotPriceResponse {
    const message = createBaseSpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
  fromAmino(object: SpotPriceResponseAmino): SpotPriceResponse {
    const message = createBaseSpotPriceResponse();
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    return message;
  },
  toAmino(message: SpotPriceResponse): SpotPriceResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    return obj;
  },
  fromAminoMsg(object: SpotPriceResponseAminoMsg): SpotPriceResponse {
    return SpotPriceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: SpotPriceResponse): SpotPriceResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/spot-price-response",
      value: SpotPriceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: SpotPriceResponseProtoMsg): SpotPriceResponse {
    return SpotPriceResponse.decode(message.value);
  },
  toProto(message: SpotPriceResponse): Uint8Array {
    return SpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: SpotPriceResponse): SpotPriceResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.SpotPriceResponse",
      value: SpotPriceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SpotPriceResponse.typeUrl, SpotPriceResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(SpotPriceResponse.aminoType, SpotPriceResponse.typeUrl);
function createBaseTotalPoolLiquidityRequest(): TotalPoolLiquidityRequest {
  return {
    poolId: BigInt(0)
  };
}
export const TotalPoolLiquidityRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest",
  aminoType: "osmosis/poolmanager/total-pool-liquidity-request",
  is(o: any): o is TotalPoolLiquidityRequest {
    return o && (o.$typeUrl === TotalPoolLiquidityRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is TotalPoolLiquidityRequestSDKType {
    return o && (o.$typeUrl === TotalPoolLiquidityRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is TotalPoolLiquidityRequestAmino {
    return o && (o.$typeUrl === TotalPoolLiquidityRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: TotalPoolLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalPoolLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalPoolLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalPoolLiquidityRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: TotalPoolLiquidityRequest): JsonSafe<TotalPoolLiquidityRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalPoolLiquidityRequest>, I>>(object: I): TotalPoolLiquidityRequest {
    const message = createBaseTotalPoolLiquidityRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TotalPoolLiquidityRequestAmino): TotalPoolLiquidityRequest {
    const message = createBaseTotalPoolLiquidityRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: TotalPoolLiquidityRequest): TotalPoolLiquidityRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: TotalPoolLiquidityRequestAminoMsg): TotalPoolLiquidityRequest {
    return TotalPoolLiquidityRequest.fromAmino(object.value);
  },
  toAminoMsg(message: TotalPoolLiquidityRequest): TotalPoolLiquidityRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/total-pool-liquidity-request",
      value: TotalPoolLiquidityRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: TotalPoolLiquidityRequestProtoMsg): TotalPoolLiquidityRequest {
    return TotalPoolLiquidityRequest.decode(message.value);
  },
  toProto(message: TotalPoolLiquidityRequest): Uint8Array {
    return TotalPoolLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: TotalPoolLiquidityRequest): TotalPoolLiquidityRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest",
      value: TotalPoolLiquidityRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TotalPoolLiquidityRequest.typeUrl, TotalPoolLiquidityRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(TotalPoolLiquidityRequest.aminoType, TotalPoolLiquidityRequest.typeUrl);
function createBaseTotalPoolLiquidityResponse(): TotalPoolLiquidityResponse {
  return {
    liquidity: []
  };
}
export const TotalPoolLiquidityResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse",
  aminoType: "osmosis/poolmanager/total-pool-liquidity-response",
  is(o: any): o is TotalPoolLiquidityResponse {
    return o && (o.$typeUrl === TotalPoolLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.is(o.liquidity[0])));
  },
  isSDK(o: any): o is TotalPoolLiquidityResponseSDKType {
    return o && (o.$typeUrl === TotalPoolLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.isSDK(o.liquidity[0])));
  },
  isAmino(o: any): o is TotalPoolLiquidityResponseAmino {
    return o && (o.$typeUrl === TotalPoolLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.isAmino(o.liquidity[0])));
  },
  encode(message: TotalPoolLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalPoolLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalPoolLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalPoolLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: TotalPoolLiquidityResponse): JsonSafe<TotalPoolLiquidityResponse> {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalPoolLiquidityResponse>, I>>(object: I): TotalPoolLiquidityResponse {
    const message = createBaseTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TotalPoolLiquidityResponseAmino): TotalPoolLiquidityResponse {
    const message = createBaseTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TotalPoolLiquidityResponse): TotalPoolLiquidityResponseAmino {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.liquidity = message.liquidity;
    }
    return obj;
  },
  fromAminoMsg(object: TotalPoolLiquidityResponseAminoMsg): TotalPoolLiquidityResponse {
    return TotalPoolLiquidityResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TotalPoolLiquidityResponse): TotalPoolLiquidityResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/total-pool-liquidity-response",
      value: TotalPoolLiquidityResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TotalPoolLiquidityResponseProtoMsg): TotalPoolLiquidityResponse {
    return TotalPoolLiquidityResponse.decode(message.value);
  },
  toProto(message: TotalPoolLiquidityResponse): Uint8Array {
    return TotalPoolLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: TotalPoolLiquidityResponse): TotalPoolLiquidityResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse",
      value: TotalPoolLiquidityResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TotalPoolLiquidityResponse.typeUrl, TotalPoolLiquidityResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(TotalPoolLiquidityResponse.aminoType, TotalPoolLiquidityResponse.typeUrl);
function createBaseTotalLiquidityRequest(): TotalLiquidityRequest {
  return {};
}
export const TotalLiquidityRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalLiquidityRequest",
  aminoType: "osmosis/poolmanager/total-liquidity-request",
  is(o: any): o is TotalLiquidityRequest {
    return o && o.$typeUrl === TotalLiquidityRequest.typeUrl;
  },
  isSDK(o: any): o is TotalLiquidityRequestSDKType {
    return o && o.$typeUrl === TotalLiquidityRequest.typeUrl;
  },
  isAmino(o: any): o is TotalLiquidityRequestAmino {
    return o && o.$typeUrl === TotalLiquidityRequest.typeUrl;
  },
  encode(_: TotalLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): TotalLiquidityRequest {
    return {};
  },
  toJSON(_: TotalLiquidityRequest): JsonSafe<TotalLiquidityRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalLiquidityRequest>, I>>(_: I): TotalLiquidityRequest {
    const message = createBaseTotalLiquidityRequest();
    return message;
  },
  fromAmino(_: TotalLiquidityRequestAmino): TotalLiquidityRequest {
    const message = createBaseTotalLiquidityRequest();
    return message;
  },
  toAmino(_: TotalLiquidityRequest): TotalLiquidityRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: TotalLiquidityRequestAminoMsg): TotalLiquidityRequest {
    return TotalLiquidityRequest.fromAmino(object.value);
  },
  toAminoMsg(message: TotalLiquidityRequest): TotalLiquidityRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/total-liquidity-request",
      value: TotalLiquidityRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: TotalLiquidityRequestProtoMsg): TotalLiquidityRequest {
    return TotalLiquidityRequest.decode(message.value);
  },
  toProto(message: TotalLiquidityRequest): Uint8Array {
    return TotalLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: TotalLiquidityRequest): TotalLiquidityRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TotalLiquidityRequest",
      value: TotalLiquidityRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TotalLiquidityRequest.typeUrl, TotalLiquidityRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(TotalLiquidityRequest.aminoType, TotalLiquidityRequest.typeUrl);
function createBaseTotalLiquidityResponse(): TotalLiquidityResponse {
  return {
    liquidity: []
  };
}
export const TotalLiquidityResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalLiquidityResponse",
  aminoType: "osmosis/poolmanager/total-liquidity-response",
  is(o: any): o is TotalLiquidityResponse {
    return o && (o.$typeUrl === TotalLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.is(o.liquidity[0])));
  },
  isSDK(o: any): o is TotalLiquidityResponseSDKType {
    return o && (o.$typeUrl === TotalLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.isSDK(o.liquidity[0])));
  },
  isAmino(o: any): o is TotalLiquidityResponseAmino {
    return o && (o.$typeUrl === TotalLiquidityResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || Coin.isAmino(o.liquidity[0])));
  },
  encode(message: TotalLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: TotalLiquidityResponse): JsonSafe<TotalLiquidityResponse> {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalLiquidityResponse>, I>>(object: I): TotalLiquidityResponse {
    const message = createBaseTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TotalLiquidityResponseAmino): TotalLiquidityResponse {
    const message = createBaseTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TotalLiquidityResponse): TotalLiquidityResponseAmino {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.liquidity = message.liquidity;
    }
    return obj;
  },
  fromAminoMsg(object: TotalLiquidityResponseAminoMsg): TotalLiquidityResponse {
    return TotalLiquidityResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TotalLiquidityResponse): TotalLiquidityResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/total-liquidity-response",
      value: TotalLiquidityResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TotalLiquidityResponseProtoMsg): TotalLiquidityResponse {
    return TotalLiquidityResponse.decode(message.value);
  },
  toProto(message: TotalLiquidityResponse): Uint8Array {
    return TotalLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: TotalLiquidityResponse): TotalLiquidityResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TotalLiquidityResponse",
      value: TotalLiquidityResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TotalLiquidityResponse.typeUrl, TotalLiquidityResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(TotalLiquidityResponse.aminoType, TotalLiquidityResponse.typeUrl);
function createBaseTotalVolumeForPoolRequest(): TotalVolumeForPoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const TotalVolumeForPoolRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalVolumeForPoolRequest",
  aminoType: "osmosis/poolmanager/total-volume-for-pool-request",
  is(o: any): o is TotalVolumeForPoolRequest {
    return o && (o.$typeUrl === TotalVolumeForPoolRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is TotalVolumeForPoolRequestSDKType {
    return o && (o.$typeUrl === TotalVolumeForPoolRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is TotalVolumeForPoolRequestAmino {
    return o && (o.$typeUrl === TotalVolumeForPoolRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: TotalVolumeForPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalVolumeForPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalVolumeForPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalVolumeForPoolRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: TotalVolumeForPoolRequest): JsonSafe<TotalVolumeForPoolRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalVolumeForPoolRequest>, I>>(object: I): TotalVolumeForPoolRequest {
    const message = createBaseTotalVolumeForPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TotalVolumeForPoolRequestAmino): TotalVolumeForPoolRequest {
    const message = createBaseTotalVolumeForPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: TotalVolumeForPoolRequest): TotalVolumeForPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: TotalVolumeForPoolRequestAminoMsg): TotalVolumeForPoolRequest {
    return TotalVolumeForPoolRequest.fromAmino(object.value);
  },
  toAminoMsg(message: TotalVolumeForPoolRequest): TotalVolumeForPoolRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/total-volume-for-pool-request",
      value: TotalVolumeForPoolRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: TotalVolumeForPoolRequestProtoMsg): TotalVolumeForPoolRequest {
    return TotalVolumeForPoolRequest.decode(message.value);
  },
  toProto(message: TotalVolumeForPoolRequest): Uint8Array {
    return TotalVolumeForPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: TotalVolumeForPoolRequest): TotalVolumeForPoolRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TotalVolumeForPoolRequest",
      value: TotalVolumeForPoolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TotalVolumeForPoolRequest.typeUrl, TotalVolumeForPoolRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(TotalVolumeForPoolRequest.aminoType, TotalVolumeForPoolRequest.typeUrl);
function createBaseTotalVolumeForPoolResponse(): TotalVolumeForPoolResponse {
  return {
    volume: []
  };
}
export const TotalVolumeForPoolResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TotalVolumeForPoolResponse",
  aminoType: "osmosis/poolmanager/total-volume-for-pool-response",
  is(o: any): o is TotalVolumeForPoolResponse {
    return o && (o.$typeUrl === TotalVolumeForPoolResponse.typeUrl || Array.isArray(o.volume) && (!o.volume.length || Coin.is(o.volume[0])));
  },
  isSDK(o: any): o is TotalVolumeForPoolResponseSDKType {
    return o && (o.$typeUrl === TotalVolumeForPoolResponse.typeUrl || Array.isArray(o.volume) && (!o.volume.length || Coin.isSDK(o.volume[0])));
  },
  isAmino(o: any): o is TotalVolumeForPoolResponseAmino {
    return o && (o.$typeUrl === TotalVolumeForPoolResponse.typeUrl || Array.isArray(o.volume) && (!o.volume.length || Coin.isAmino(o.volume[0])));
  },
  encode(message: TotalVolumeForPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.volume) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalVolumeForPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalVolumeForPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalVolumeForPoolResponse {
    return {
      volume: Array.isArray(object?.volume) ? object.volume.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: TotalVolumeForPoolResponse): JsonSafe<TotalVolumeForPoolResponse> {
    const obj: any = {};
    if (message.volume) {
      obj.volume = message.volume.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.volume = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalVolumeForPoolResponse>, I>>(object: I): TotalVolumeForPoolResponse {
    const message = createBaseTotalVolumeForPoolResponse();
    message.volume = object.volume?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TotalVolumeForPoolResponseAmino): TotalVolumeForPoolResponse {
    const message = createBaseTotalVolumeForPoolResponse();
    message.volume = object.volume?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TotalVolumeForPoolResponse): TotalVolumeForPoolResponseAmino {
    const obj: any = {};
    if (message.volume) {
      obj.volume = message.volume.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.volume = message.volume;
    }
    return obj;
  },
  fromAminoMsg(object: TotalVolumeForPoolResponseAminoMsg): TotalVolumeForPoolResponse {
    return TotalVolumeForPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TotalVolumeForPoolResponse): TotalVolumeForPoolResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/total-volume-for-pool-response",
      value: TotalVolumeForPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TotalVolumeForPoolResponseProtoMsg): TotalVolumeForPoolResponse {
    return TotalVolumeForPoolResponse.decode(message.value);
  },
  toProto(message: TotalVolumeForPoolResponse): Uint8Array {
    return TotalVolumeForPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: TotalVolumeForPoolResponse): TotalVolumeForPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TotalVolumeForPoolResponse",
      value: TotalVolumeForPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TotalVolumeForPoolResponse.typeUrl, TotalVolumeForPoolResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(TotalVolumeForPoolResponse.aminoType, TotalVolumeForPoolResponse.typeUrl);
function createBaseTradingPairTakerFeeRequest(): TradingPairTakerFeeRequest {
  return {
    denom0: "",
    denom1: ""
  };
}
export const TradingPairTakerFeeRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TradingPairTakerFeeRequest",
  aminoType: "osmosis/poolmanager/trading-pair-taker-fee-request",
  is(o: any): o is TradingPairTakerFeeRequest {
    return o && (o.$typeUrl === TradingPairTakerFeeRequest.typeUrl || typeof o.denom0 === "string" && typeof o.denom1 === "string");
  },
  isSDK(o: any): o is TradingPairTakerFeeRequestSDKType {
    return o && (o.$typeUrl === TradingPairTakerFeeRequest.typeUrl || typeof o.denom_0 === "string" && typeof o.denom_1 === "string");
  },
  isAmino(o: any): o is TradingPairTakerFeeRequestAmino {
    return o && (o.$typeUrl === TradingPairTakerFeeRequest.typeUrl || typeof o.denom_0 === "string" && typeof o.denom_1 === "string");
  },
  encode(message: TradingPairTakerFeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom0 !== "") {
      writer.uint32(10).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(18).string(message.denom1);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingPairTakerFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingPairTakerFeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom0 = reader.string();
          break;
        case 2:
          message.denom1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TradingPairTakerFeeRequest {
    return {
      denom0: isSet(object.denom0) ? String(object.denom0) : "",
      denom1: isSet(object.denom1) ? String(object.denom1) : ""
    };
  },
  toJSON(message: TradingPairTakerFeeRequest): JsonSafe<TradingPairTakerFeeRequest> {
    const obj: any = {};
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TradingPairTakerFeeRequest>, I>>(object: I): TradingPairTakerFeeRequest {
    const message = createBaseTradingPairTakerFeeRequest();
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    return message;
  },
  fromAmino(object: TradingPairTakerFeeRequestAmino): TradingPairTakerFeeRequest {
    const message = createBaseTradingPairTakerFeeRequest();
    if (object.denom_0 !== undefined && object.denom_0 !== null) {
      message.denom0 = object.denom_0;
    }
    if (object.denom_1 !== undefined && object.denom_1 !== null) {
      message.denom1 = object.denom_1;
    }
    return message;
  },
  toAmino(message: TradingPairTakerFeeRequest): TradingPairTakerFeeRequestAmino {
    const obj: any = {};
    obj.denom_0 = message.denom0 === "" ? undefined : message.denom0;
    obj.denom_1 = message.denom1 === "" ? undefined : message.denom1;
    return obj;
  },
  fromAminoMsg(object: TradingPairTakerFeeRequestAminoMsg): TradingPairTakerFeeRequest {
    return TradingPairTakerFeeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: TradingPairTakerFeeRequest): TradingPairTakerFeeRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/trading-pair-taker-fee-request",
      value: TradingPairTakerFeeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: TradingPairTakerFeeRequestProtoMsg): TradingPairTakerFeeRequest {
    return TradingPairTakerFeeRequest.decode(message.value);
  },
  toProto(message: TradingPairTakerFeeRequest): Uint8Array {
    return TradingPairTakerFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: TradingPairTakerFeeRequest): TradingPairTakerFeeRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TradingPairTakerFeeRequest",
      value: TradingPairTakerFeeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TradingPairTakerFeeRequest.typeUrl, TradingPairTakerFeeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(TradingPairTakerFeeRequest.aminoType, TradingPairTakerFeeRequest.typeUrl);
function createBaseTradingPairTakerFeeResponse(): TradingPairTakerFeeResponse {
  return {
    takerFee: ""
  };
}
export const TradingPairTakerFeeResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TradingPairTakerFeeResponse",
  aminoType: "osmosis/poolmanager/trading-pair-taker-fee-response",
  is(o: any): o is TradingPairTakerFeeResponse {
    return o && (o.$typeUrl === TradingPairTakerFeeResponse.typeUrl || typeof o.takerFee === "string");
  },
  isSDK(o: any): o is TradingPairTakerFeeResponseSDKType {
    return o && (o.$typeUrl === TradingPairTakerFeeResponse.typeUrl || typeof o.taker_fee === "string");
  },
  isAmino(o: any): o is TradingPairTakerFeeResponseAmino {
    return o && (o.$typeUrl === TradingPairTakerFeeResponse.typeUrl || typeof o.taker_fee === "string");
  },
  encode(message: TradingPairTakerFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.takerFee !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.takerFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingPairTakerFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingPairTakerFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TradingPairTakerFeeResponse {
    return {
      takerFee: isSet(object.takerFee) ? String(object.takerFee) : ""
    };
  },
  toJSON(message: TradingPairTakerFeeResponse): JsonSafe<TradingPairTakerFeeResponse> {
    const obj: any = {};
    message.takerFee !== undefined && (obj.takerFee = message.takerFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TradingPairTakerFeeResponse>, I>>(object: I): TradingPairTakerFeeResponse {
    const message = createBaseTradingPairTakerFeeResponse();
    message.takerFee = object.takerFee ?? "";
    return message;
  },
  fromAmino(object: TradingPairTakerFeeResponseAmino): TradingPairTakerFeeResponse {
    const message = createBaseTradingPairTakerFeeResponse();
    if (object.taker_fee !== undefined && object.taker_fee !== null) {
      message.takerFee = object.taker_fee;
    }
    return message;
  },
  toAmino(message: TradingPairTakerFeeResponse): TradingPairTakerFeeResponseAmino {
    const obj: any = {};
    obj.taker_fee = message.takerFee === "" ? undefined : message.takerFee;
    return obj;
  },
  fromAminoMsg(object: TradingPairTakerFeeResponseAminoMsg): TradingPairTakerFeeResponse {
    return TradingPairTakerFeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TradingPairTakerFeeResponse): TradingPairTakerFeeResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/trading-pair-taker-fee-response",
      value: TradingPairTakerFeeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TradingPairTakerFeeResponseProtoMsg): TradingPairTakerFeeResponse {
    return TradingPairTakerFeeResponse.decode(message.value);
  },
  toProto(message: TradingPairTakerFeeResponse): Uint8Array {
    return TradingPairTakerFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: TradingPairTakerFeeResponse): TradingPairTakerFeeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TradingPairTakerFeeResponse",
      value: TradingPairTakerFeeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TradingPairTakerFeeResponse.typeUrl, TradingPairTakerFeeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(TradingPairTakerFeeResponse.aminoType, TradingPairTakerFeeResponse.typeUrl);
function createBaseEstimateTradeBasedOnPriceImpactRequest(): EstimateTradeBasedOnPriceImpactRequest {
  return {
    fromCoin: Coin.fromPartial({}),
    toCoinDenom: "",
    poolId: BigInt(0),
    maxPriceImpact: "",
    externalPrice: ""
  };
}
export const EstimateTradeBasedOnPriceImpactRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest",
  aminoType: "osmosis/poolmanager/estimate-trade-based-on-price-impact-request",
  is(o: any): o is EstimateTradeBasedOnPriceImpactRequest {
    return o && (o.$typeUrl === EstimateTradeBasedOnPriceImpactRequest.typeUrl || Coin.is(o.fromCoin) && typeof o.toCoinDenom === "string" && typeof o.poolId === "bigint" && typeof o.maxPriceImpact === "string" && typeof o.externalPrice === "string");
  },
  isSDK(o: any): o is EstimateTradeBasedOnPriceImpactRequestSDKType {
    return o && (o.$typeUrl === EstimateTradeBasedOnPriceImpactRequest.typeUrl || Coin.isSDK(o.from_coin) && typeof o.to_coin_denom === "string" && typeof o.pool_id === "bigint" && typeof o.max_price_impact === "string" && typeof o.external_price === "string");
  },
  isAmino(o: any): o is EstimateTradeBasedOnPriceImpactRequestAmino {
    return o && (o.$typeUrl === EstimateTradeBasedOnPriceImpactRequest.typeUrl || Coin.isAmino(o.from_coin) && typeof o.to_coin_denom === "string" && typeof o.pool_id === "bigint" && typeof o.max_price_impact === "string" && typeof o.external_price === "string");
  },
  encode(message: EstimateTradeBasedOnPriceImpactRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromCoin !== undefined) {
      Coin.encode(message.fromCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.toCoinDenom !== "") {
      writer.uint32(18).string(message.toCoinDenom);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.maxPriceImpact !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.maxPriceImpact, 18).atomics);
    }
    if (message.externalPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.externalPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateTradeBasedOnPriceImpactRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.toCoinDenom = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.maxPriceImpact = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.externalPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateTradeBasedOnPriceImpactRequest {
    return {
      fromCoin: isSet(object.fromCoin) ? Coin.fromJSON(object.fromCoin) : undefined,
      toCoinDenom: isSet(object.toCoinDenom) ? String(object.toCoinDenom) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      maxPriceImpact: isSet(object.maxPriceImpact) ? String(object.maxPriceImpact) : "",
      externalPrice: isSet(object.externalPrice) ? String(object.externalPrice) : ""
    };
  },
  toJSON(message: EstimateTradeBasedOnPriceImpactRequest): JsonSafe<EstimateTradeBasedOnPriceImpactRequest> {
    const obj: any = {};
    message.fromCoin !== undefined && (obj.fromCoin = message.fromCoin ? Coin.toJSON(message.fromCoin) : undefined);
    message.toCoinDenom !== undefined && (obj.toCoinDenom = message.toCoinDenom);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.maxPriceImpact !== undefined && (obj.maxPriceImpact = message.maxPriceImpact);
    message.externalPrice !== undefined && (obj.externalPrice = message.externalPrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateTradeBasedOnPriceImpactRequest>, I>>(object: I): EstimateTradeBasedOnPriceImpactRequest {
    const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
    message.fromCoin = object.fromCoin !== undefined && object.fromCoin !== null ? Coin.fromPartial(object.fromCoin) : undefined;
    message.toCoinDenom = object.toCoinDenom ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.maxPriceImpact = object.maxPriceImpact ?? "";
    message.externalPrice = object.externalPrice ?? "";
    return message;
  },
  fromAmino(object: EstimateTradeBasedOnPriceImpactRequestAmino): EstimateTradeBasedOnPriceImpactRequest {
    const message = createBaseEstimateTradeBasedOnPriceImpactRequest();
    if (object.from_coin !== undefined && object.from_coin !== null) {
      message.fromCoin = Coin.fromAmino(object.from_coin);
    }
    if (object.to_coin_denom !== undefined && object.to_coin_denom !== null) {
      message.toCoinDenom = object.to_coin_denom;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.max_price_impact !== undefined && object.max_price_impact !== null) {
      message.maxPriceImpact = object.max_price_impact;
    }
    if (object.external_price !== undefined && object.external_price !== null) {
      message.externalPrice = object.external_price;
    }
    return message;
  },
  toAmino(message: EstimateTradeBasedOnPriceImpactRequest): EstimateTradeBasedOnPriceImpactRequestAmino {
    const obj: any = {};
    obj.from_coin = message.fromCoin ? Coin.toAmino(message.fromCoin) : undefined;
    obj.to_coin_denom = message.toCoinDenom === "" ? undefined : message.toCoinDenom;
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.max_price_impact = message.maxPriceImpact === "" ? undefined : message.maxPriceImpact;
    obj.external_price = message.externalPrice === "" ? undefined : message.externalPrice;
    return obj;
  },
  fromAminoMsg(object: EstimateTradeBasedOnPriceImpactRequestAminoMsg): EstimateTradeBasedOnPriceImpactRequest {
    return EstimateTradeBasedOnPriceImpactRequest.fromAmino(object.value);
  },
  toAminoMsg(message: EstimateTradeBasedOnPriceImpactRequest): EstimateTradeBasedOnPriceImpactRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/estimate-trade-based-on-price-impact-request",
      value: EstimateTradeBasedOnPriceImpactRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: EstimateTradeBasedOnPriceImpactRequestProtoMsg): EstimateTradeBasedOnPriceImpactRequest {
    return EstimateTradeBasedOnPriceImpactRequest.decode(message.value);
  },
  toProto(message: EstimateTradeBasedOnPriceImpactRequest): Uint8Array {
    return EstimateTradeBasedOnPriceImpactRequest.encode(message).finish();
  },
  toProtoMsg(message: EstimateTradeBasedOnPriceImpactRequest): EstimateTradeBasedOnPriceImpactRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest",
      value: EstimateTradeBasedOnPriceImpactRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EstimateTradeBasedOnPriceImpactRequest.typeUrl, EstimateTradeBasedOnPriceImpactRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateTradeBasedOnPriceImpactRequest.aminoType, EstimateTradeBasedOnPriceImpactRequest.typeUrl);
function createBaseEstimateTradeBasedOnPriceImpactResponse(): EstimateTradeBasedOnPriceImpactResponse {
  return {
    inputCoin: Coin.fromPartial({}),
    outputCoin: Coin.fromPartial({})
  };
}
export const EstimateTradeBasedOnPriceImpactResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse",
  aminoType: "osmosis/poolmanager/estimate-trade-based-on-price-impact-response",
  is(o: any): o is EstimateTradeBasedOnPriceImpactResponse {
    return o && (o.$typeUrl === EstimateTradeBasedOnPriceImpactResponse.typeUrl || Coin.is(o.inputCoin) && Coin.is(o.outputCoin));
  },
  isSDK(o: any): o is EstimateTradeBasedOnPriceImpactResponseSDKType {
    return o && (o.$typeUrl === EstimateTradeBasedOnPriceImpactResponse.typeUrl || Coin.isSDK(o.input_coin) && Coin.isSDK(o.output_coin));
  },
  isAmino(o: any): o is EstimateTradeBasedOnPriceImpactResponseAmino {
    return o && (o.$typeUrl === EstimateTradeBasedOnPriceImpactResponse.typeUrl || Coin.isAmino(o.input_coin) && Coin.isAmino(o.output_coin));
  },
  encode(message: EstimateTradeBasedOnPriceImpactResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inputCoin !== undefined) {
      Coin.encode(message.inputCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.outputCoin !== undefined) {
      Coin.encode(message.outputCoin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateTradeBasedOnPriceImpactResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.outputCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateTradeBasedOnPriceImpactResponse {
    return {
      inputCoin: isSet(object.inputCoin) ? Coin.fromJSON(object.inputCoin) : undefined,
      outputCoin: isSet(object.outputCoin) ? Coin.fromJSON(object.outputCoin) : undefined
    };
  },
  toJSON(message: EstimateTradeBasedOnPriceImpactResponse): JsonSafe<EstimateTradeBasedOnPriceImpactResponse> {
    const obj: any = {};
    message.inputCoin !== undefined && (obj.inputCoin = message.inputCoin ? Coin.toJSON(message.inputCoin) : undefined);
    message.outputCoin !== undefined && (obj.outputCoin = message.outputCoin ? Coin.toJSON(message.outputCoin) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimateTradeBasedOnPriceImpactResponse>, I>>(object: I): EstimateTradeBasedOnPriceImpactResponse {
    const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
    message.inputCoin = object.inputCoin !== undefined && object.inputCoin !== null ? Coin.fromPartial(object.inputCoin) : undefined;
    message.outputCoin = object.outputCoin !== undefined && object.outputCoin !== null ? Coin.fromPartial(object.outputCoin) : undefined;
    return message;
  },
  fromAmino(object: EstimateTradeBasedOnPriceImpactResponseAmino): EstimateTradeBasedOnPriceImpactResponse {
    const message = createBaseEstimateTradeBasedOnPriceImpactResponse();
    if (object.input_coin !== undefined && object.input_coin !== null) {
      message.inputCoin = Coin.fromAmino(object.input_coin);
    }
    if (object.output_coin !== undefined && object.output_coin !== null) {
      message.outputCoin = Coin.fromAmino(object.output_coin);
    }
    return message;
  },
  toAmino(message: EstimateTradeBasedOnPriceImpactResponse): EstimateTradeBasedOnPriceImpactResponseAmino {
    const obj: any = {};
    obj.input_coin = message.inputCoin ? Coin.toAmino(message.inputCoin) : undefined;
    obj.output_coin = message.outputCoin ? Coin.toAmino(message.outputCoin) : undefined;
    return obj;
  },
  fromAminoMsg(object: EstimateTradeBasedOnPriceImpactResponseAminoMsg): EstimateTradeBasedOnPriceImpactResponse {
    return EstimateTradeBasedOnPriceImpactResponse.fromAmino(object.value);
  },
  toAminoMsg(message: EstimateTradeBasedOnPriceImpactResponse): EstimateTradeBasedOnPriceImpactResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/estimate-trade-based-on-price-impact-response",
      value: EstimateTradeBasedOnPriceImpactResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: EstimateTradeBasedOnPriceImpactResponseProtoMsg): EstimateTradeBasedOnPriceImpactResponse {
    return EstimateTradeBasedOnPriceImpactResponse.decode(message.value);
  },
  toProto(message: EstimateTradeBasedOnPriceImpactResponse): Uint8Array {
    return EstimateTradeBasedOnPriceImpactResponse.encode(message).finish();
  },
  toProtoMsg(message: EstimateTradeBasedOnPriceImpactResponse): EstimateTradeBasedOnPriceImpactResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse",
      value: EstimateTradeBasedOnPriceImpactResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EstimateTradeBasedOnPriceImpactResponse.typeUrl, EstimateTradeBasedOnPriceImpactResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(EstimateTradeBasedOnPriceImpactResponse.aminoType, EstimateTradeBasedOnPriceImpactResponse.typeUrl);
function createBaseAllTakerFeeShareAgreementsRequest(): AllTakerFeeShareAgreementsRequest {
  return {};
}
export const AllTakerFeeShareAgreementsRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllTakerFeeShareAgreementsRequest",
  aminoType: "osmosis/poolmanager/all-taker-fee-share-agreements-request",
  is(o: any): o is AllTakerFeeShareAgreementsRequest {
    return o && o.$typeUrl === AllTakerFeeShareAgreementsRequest.typeUrl;
  },
  isSDK(o: any): o is AllTakerFeeShareAgreementsRequestSDKType {
    return o && o.$typeUrl === AllTakerFeeShareAgreementsRequest.typeUrl;
  },
  isAmino(o: any): o is AllTakerFeeShareAgreementsRequestAmino {
    return o && o.$typeUrl === AllTakerFeeShareAgreementsRequest.typeUrl;
  },
  encode(_: AllTakerFeeShareAgreementsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllTakerFeeShareAgreementsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllTakerFeeShareAgreementsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): AllTakerFeeShareAgreementsRequest {
    return {};
  },
  toJSON(_: AllTakerFeeShareAgreementsRequest): JsonSafe<AllTakerFeeShareAgreementsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllTakerFeeShareAgreementsRequest>, I>>(_: I): AllTakerFeeShareAgreementsRequest {
    const message = createBaseAllTakerFeeShareAgreementsRequest();
    return message;
  },
  fromAmino(_: AllTakerFeeShareAgreementsRequestAmino): AllTakerFeeShareAgreementsRequest {
    const message = createBaseAllTakerFeeShareAgreementsRequest();
    return message;
  },
  toAmino(_: AllTakerFeeShareAgreementsRequest): AllTakerFeeShareAgreementsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: AllTakerFeeShareAgreementsRequestAminoMsg): AllTakerFeeShareAgreementsRequest {
    return AllTakerFeeShareAgreementsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AllTakerFeeShareAgreementsRequest): AllTakerFeeShareAgreementsRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/all-taker-fee-share-agreements-request",
      value: AllTakerFeeShareAgreementsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AllTakerFeeShareAgreementsRequestProtoMsg): AllTakerFeeShareAgreementsRequest {
    return AllTakerFeeShareAgreementsRequest.decode(message.value);
  },
  toProto(message: AllTakerFeeShareAgreementsRequest): Uint8Array {
    return AllTakerFeeShareAgreementsRequest.encode(message).finish();
  },
  toProtoMsg(message: AllTakerFeeShareAgreementsRequest): AllTakerFeeShareAgreementsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.AllTakerFeeShareAgreementsRequest",
      value: AllTakerFeeShareAgreementsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AllTakerFeeShareAgreementsRequest.typeUrl, AllTakerFeeShareAgreementsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AllTakerFeeShareAgreementsRequest.aminoType, AllTakerFeeShareAgreementsRequest.typeUrl);
function createBaseAllTakerFeeShareAgreementsResponse(): AllTakerFeeShareAgreementsResponse {
  return {
    takerFeeShareAgreements: []
  };
}
export const AllTakerFeeShareAgreementsResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllTakerFeeShareAgreementsResponse",
  aminoType: "osmosis/poolmanager/all-taker-fee-share-agreements-response",
  is(o: any): o is AllTakerFeeShareAgreementsResponse {
    return o && (o.$typeUrl === AllTakerFeeShareAgreementsResponse.typeUrl || Array.isArray(o.takerFeeShareAgreements) && (!o.takerFeeShareAgreements.length || TakerFeeShareAgreement.is(o.takerFeeShareAgreements[0])));
  },
  isSDK(o: any): o is AllTakerFeeShareAgreementsResponseSDKType {
    return o && (o.$typeUrl === AllTakerFeeShareAgreementsResponse.typeUrl || Array.isArray(o.taker_fee_share_agreements) && (!o.taker_fee_share_agreements.length || TakerFeeShareAgreement.isSDK(o.taker_fee_share_agreements[0])));
  },
  isAmino(o: any): o is AllTakerFeeShareAgreementsResponseAmino {
    return o && (o.$typeUrl === AllTakerFeeShareAgreementsResponse.typeUrl || Array.isArray(o.taker_fee_share_agreements) && (!o.taker_fee_share_agreements.length || TakerFeeShareAgreement.isAmino(o.taker_fee_share_agreements[0])));
  },
  encode(message: AllTakerFeeShareAgreementsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.takerFeeShareAgreements) {
      TakerFeeShareAgreement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllTakerFeeShareAgreementsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllTakerFeeShareAgreementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFeeShareAgreements.push(TakerFeeShareAgreement.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllTakerFeeShareAgreementsResponse {
    return {
      takerFeeShareAgreements: Array.isArray(object?.takerFeeShareAgreements) ? object.takerFeeShareAgreements.map((e: any) => TakerFeeShareAgreement.fromJSON(e)) : []
    };
  },
  toJSON(message: AllTakerFeeShareAgreementsResponse): JsonSafe<AllTakerFeeShareAgreementsResponse> {
    const obj: any = {};
    if (message.takerFeeShareAgreements) {
      obj.takerFeeShareAgreements = message.takerFeeShareAgreements.map(e => e ? TakerFeeShareAgreement.toJSON(e) : undefined);
    } else {
      obj.takerFeeShareAgreements = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllTakerFeeShareAgreementsResponse>, I>>(object: I): AllTakerFeeShareAgreementsResponse {
    const message = createBaseAllTakerFeeShareAgreementsResponse();
    message.takerFeeShareAgreements = object.takerFeeShareAgreements?.map(e => TakerFeeShareAgreement.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AllTakerFeeShareAgreementsResponseAmino): AllTakerFeeShareAgreementsResponse {
    const message = createBaseAllTakerFeeShareAgreementsResponse();
    message.takerFeeShareAgreements = object.taker_fee_share_agreements?.map(e => TakerFeeShareAgreement.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AllTakerFeeShareAgreementsResponse): AllTakerFeeShareAgreementsResponseAmino {
    const obj: any = {};
    if (message.takerFeeShareAgreements) {
      obj.taker_fee_share_agreements = message.takerFeeShareAgreements.map(e => e ? TakerFeeShareAgreement.toAmino(e) : undefined);
    } else {
      obj.taker_fee_share_agreements = message.takerFeeShareAgreements;
    }
    return obj;
  },
  fromAminoMsg(object: AllTakerFeeShareAgreementsResponseAminoMsg): AllTakerFeeShareAgreementsResponse {
    return AllTakerFeeShareAgreementsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AllTakerFeeShareAgreementsResponse): AllTakerFeeShareAgreementsResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/all-taker-fee-share-agreements-response",
      value: AllTakerFeeShareAgreementsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AllTakerFeeShareAgreementsResponseProtoMsg): AllTakerFeeShareAgreementsResponse {
    return AllTakerFeeShareAgreementsResponse.decode(message.value);
  },
  toProto(message: AllTakerFeeShareAgreementsResponse): Uint8Array {
    return AllTakerFeeShareAgreementsResponse.encode(message).finish();
  },
  toProtoMsg(message: AllTakerFeeShareAgreementsResponse): AllTakerFeeShareAgreementsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.AllTakerFeeShareAgreementsResponse",
      value: AllTakerFeeShareAgreementsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AllTakerFeeShareAgreementsResponse.typeUrl, AllTakerFeeShareAgreementsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AllTakerFeeShareAgreementsResponse.aminoType, AllTakerFeeShareAgreementsResponse.typeUrl);
function createBaseTakerFeeShareAgreementFromDenomRequest(): TakerFeeShareAgreementFromDenomRequest {
  return {
    denom: ""
  };
}
export const TakerFeeShareAgreementFromDenomRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomRequest",
  aminoType: "osmosis/poolmanager/taker-fee-share-agreement-from-denom-request",
  is(o: any): o is TakerFeeShareAgreementFromDenomRequest {
    return o && (o.$typeUrl === TakerFeeShareAgreementFromDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is TakerFeeShareAgreementFromDenomRequestSDKType {
    return o && (o.$typeUrl === TakerFeeShareAgreementFromDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is TakerFeeShareAgreementFromDenomRequestAmino {
    return o && (o.$typeUrl === TakerFeeShareAgreementFromDenomRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: TakerFeeShareAgreementFromDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TakerFeeShareAgreementFromDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTakerFeeShareAgreementFromDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TakerFeeShareAgreementFromDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: TakerFeeShareAgreementFromDenomRequest): JsonSafe<TakerFeeShareAgreementFromDenomRequest> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TakerFeeShareAgreementFromDenomRequest>, I>>(object: I): TakerFeeShareAgreementFromDenomRequest {
    const message = createBaseTakerFeeShareAgreementFromDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: TakerFeeShareAgreementFromDenomRequestAmino): TakerFeeShareAgreementFromDenomRequest {
    const message = createBaseTakerFeeShareAgreementFromDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: TakerFeeShareAgreementFromDenomRequest): TakerFeeShareAgreementFromDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: TakerFeeShareAgreementFromDenomRequestAminoMsg): TakerFeeShareAgreementFromDenomRequest {
    return TakerFeeShareAgreementFromDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: TakerFeeShareAgreementFromDenomRequest): TakerFeeShareAgreementFromDenomRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/taker-fee-share-agreement-from-denom-request",
      value: TakerFeeShareAgreementFromDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: TakerFeeShareAgreementFromDenomRequestProtoMsg): TakerFeeShareAgreementFromDenomRequest {
    return TakerFeeShareAgreementFromDenomRequest.decode(message.value);
  },
  toProto(message: TakerFeeShareAgreementFromDenomRequest): Uint8Array {
    return TakerFeeShareAgreementFromDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: TakerFeeShareAgreementFromDenomRequest): TakerFeeShareAgreementFromDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomRequest",
      value: TakerFeeShareAgreementFromDenomRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TakerFeeShareAgreementFromDenomRequest.typeUrl, TakerFeeShareAgreementFromDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(TakerFeeShareAgreementFromDenomRequest.aminoType, TakerFeeShareAgreementFromDenomRequest.typeUrl);
function createBaseTakerFeeShareAgreementFromDenomResponse(): TakerFeeShareAgreementFromDenomResponse {
  return {
    takerFeeShareAgreement: TakerFeeShareAgreement.fromPartial({})
  };
}
export const TakerFeeShareAgreementFromDenomResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomResponse",
  aminoType: "osmosis/poolmanager/taker-fee-share-agreement-from-denom-response",
  is(o: any): o is TakerFeeShareAgreementFromDenomResponse {
    return o && (o.$typeUrl === TakerFeeShareAgreementFromDenomResponse.typeUrl || TakerFeeShareAgreement.is(o.takerFeeShareAgreement));
  },
  isSDK(o: any): o is TakerFeeShareAgreementFromDenomResponseSDKType {
    return o && (o.$typeUrl === TakerFeeShareAgreementFromDenomResponse.typeUrl || TakerFeeShareAgreement.isSDK(o.taker_fee_share_agreement));
  },
  isAmino(o: any): o is TakerFeeShareAgreementFromDenomResponseAmino {
    return o && (o.$typeUrl === TakerFeeShareAgreementFromDenomResponse.typeUrl || TakerFeeShareAgreement.isAmino(o.taker_fee_share_agreement));
  },
  encode(message: TakerFeeShareAgreementFromDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.takerFeeShareAgreement !== undefined) {
      TakerFeeShareAgreement.encode(message.takerFeeShareAgreement, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TakerFeeShareAgreementFromDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTakerFeeShareAgreementFromDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFeeShareAgreement = TakerFeeShareAgreement.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TakerFeeShareAgreementFromDenomResponse {
    return {
      takerFeeShareAgreement: isSet(object.takerFeeShareAgreement) ? TakerFeeShareAgreement.fromJSON(object.takerFeeShareAgreement) : undefined
    };
  },
  toJSON(message: TakerFeeShareAgreementFromDenomResponse): JsonSafe<TakerFeeShareAgreementFromDenomResponse> {
    const obj: any = {};
    message.takerFeeShareAgreement !== undefined && (obj.takerFeeShareAgreement = message.takerFeeShareAgreement ? TakerFeeShareAgreement.toJSON(message.takerFeeShareAgreement) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TakerFeeShareAgreementFromDenomResponse>, I>>(object: I): TakerFeeShareAgreementFromDenomResponse {
    const message = createBaseTakerFeeShareAgreementFromDenomResponse();
    message.takerFeeShareAgreement = object.takerFeeShareAgreement !== undefined && object.takerFeeShareAgreement !== null ? TakerFeeShareAgreement.fromPartial(object.takerFeeShareAgreement) : undefined;
    return message;
  },
  fromAmino(object: TakerFeeShareAgreementFromDenomResponseAmino): TakerFeeShareAgreementFromDenomResponse {
    const message = createBaseTakerFeeShareAgreementFromDenomResponse();
    if (object.taker_fee_share_agreement !== undefined && object.taker_fee_share_agreement !== null) {
      message.takerFeeShareAgreement = TakerFeeShareAgreement.fromAmino(object.taker_fee_share_agreement);
    }
    return message;
  },
  toAmino(message: TakerFeeShareAgreementFromDenomResponse): TakerFeeShareAgreementFromDenomResponseAmino {
    const obj: any = {};
    obj.taker_fee_share_agreement = message.takerFeeShareAgreement ? TakerFeeShareAgreement.toAmino(message.takerFeeShareAgreement) : undefined;
    return obj;
  },
  fromAminoMsg(object: TakerFeeShareAgreementFromDenomResponseAminoMsg): TakerFeeShareAgreementFromDenomResponse {
    return TakerFeeShareAgreementFromDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TakerFeeShareAgreementFromDenomResponse): TakerFeeShareAgreementFromDenomResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/taker-fee-share-agreement-from-denom-response",
      value: TakerFeeShareAgreementFromDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TakerFeeShareAgreementFromDenomResponseProtoMsg): TakerFeeShareAgreementFromDenomResponse {
    return TakerFeeShareAgreementFromDenomResponse.decode(message.value);
  },
  toProto(message: TakerFeeShareAgreementFromDenomResponse): Uint8Array {
    return TakerFeeShareAgreementFromDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: TakerFeeShareAgreementFromDenomResponse): TakerFeeShareAgreementFromDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeShareAgreementFromDenomResponse",
      value: TakerFeeShareAgreementFromDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TakerFeeShareAgreementFromDenomResponse.typeUrl, TakerFeeShareAgreementFromDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(TakerFeeShareAgreementFromDenomResponse.aminoType, TakerFeeShareAgreementFromDenomResponse.typeUrl);
function createBaseTakerFeeShareDenomsToAccruedValueRequest(): TakerFeeShareDenomsToAccruedValueRequest {
  return {
    denom: "",
    takerFeeDenom: ""
  };
}
export const TakerFeeShareDenomsToAccruedValueRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueRequest",
  aminoType: "osmosis/poolmanager/taker-fee-share-denoms-to-accrued-value-request",
  is(o: any): o is TakerFeeShareDenomsToAccruedValueRequest {
    return o && (o.$typeUrl === TakerFeeShareDenomsToAccruedValueRequest.typeUrl || typeof o.denom === "string" && typeof o.takerFeeDenom === "string");
  },
  isSDK(o: any): o is TakerFeeShareDenomsToAccruedValueRequestSDKType {
    return o && (o.$typeUrl === TakerFeeShareDenomsToAccruedValueRequest.typeUrl || typeof o.denom === "string" && typeof o.takerFeeDenom === "string");
  },
  isAmino(o: any): o is TakerFeeShareDenomsToAccruedValueRequestAmino {
    return o && (o.$typeUrl === TakerFeeShareDenomsToAccruedValueRequest.typeUrl || typeof o.denom === "string" && typeof o.takerFeeDenom === "string");
  },
  encode(message: TakerFeeShareDenomsToAccruedValueRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.takerFeeDenom !== "") {
      writer.uint32(18).string(message.takerFeeDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TakerFeeShareDenomsToAccruedValueRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTakerFeeShareDenomsToAccruedValueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.takerFeeDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TakerFeeShareDenomsToAccruedValueRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      takerFeeDenom: isSet(object.takerFeeDenom) ? String(object.takerFeeDenom) : ""
    };
  },
  toJSON(message: TakerFeeShareDenomsToAccruedValueRequest): JsonSafe<TakerFeeShareDenomsToAccruedValueRequest> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.takerFeeDenom !== undefined && (obj.takerFeeDenom = message.takerFeeDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TakerFeeShareDenomsToAccruedValueRequest>, I>>(object: I): TakerFeeShareDenomsToAccruedValueRequest {
    const message = createBaseTakerFeeShareDenomsToAccruedValueRequest();
    message.denom = object.denom ?? "";
    message.takerFeeDenom = object.takerFeeDenom ?? "";
    return message;
  },
  fromAmino(object: TakerFeeShareDenomsToAccruedValueRequestAmino): TakerFeeShareDenomsToAccruedValueRequest {
    const message = createBaseTakerFeeShareDenomsToAccruedValueRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.takerFeeDenom !== undefined && object.takerFeeDenom !== null) {
      message.takerFeeDenom = object.takerFeeDenom;
    }
    return message;
  },
  toAmino(message: TakerFeeShareDenomsToAccruedValueRequest): TakerFeeShareDenomsToAccruedValueRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.takerFeeDenom = message.takerFeeDenom === "" ? undefined : message.takerFeeDenom;
    return obj;
  },
  fromAminoMsg(object: TakerFeeShareDenomsToAccruedValueRequestAminoMsg): TakerFeeShareDenomsToAccruedValueRequest {
    return TakerFeeShareDenomsToAccruedValueRequest.fromAmino(object.value);
  },
  toAminoMsg(message: TakerFeeShareDenomsToAccruedValueRequest): TakerFeeShareDenomsToAccruedValueRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/taker-fee-share-denoms-to-accrued-value-request",
      value: TakerFeeShareDenomsToAccruedValueRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: TakerFeeShareDenomsToAccruedValueRequestProtoMsg): TakerFeeShareDenomsToAccruedValueRequest {
    return TakerFeeShareDenomsToAccruedValueRequest.decode(message.value);
  },
  toProto(message: TakerFeeShareDenomsToAccruedValueRequest): Uint8Array {
    return TakerFeeShareDenomsToAccruedValueRequest.encode(message).finish();
  },
  toProtoMsg(message: TakerFeeShareDenomsToAccruedValueRequest): TakerFeeShareDenomsToAccruedValueRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueRequest",
      value: TakerFeeShareDenomsToAccruedValueRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TakerFeeShareDenomsToAccruedValueRequest.typeUrl, TakerFeeShareDenomsToAccruedValueRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(TakerFeeShareDenomsToAccruedValueRequest.aminoType, TakerFeeShareDenomsToAccruedValueRequest.typeUrl);
function createBaseTakerFeeShareDenomsToAccruedValueResponse(): TakerFeeShareDenomsToAccruedValueResponse {
  return {
    amount: ""
  };
}
export const TakerFeeShareDenomsToAccruedValueResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueResponse",
  aminoType: "osmosis/poolmanager/taker-fee-share-denoms-to-accrued-value-response",
  is(o: any): o is TakerFeeShareDenomsToAccruedValueResponse {
    return o && (o.$typeUrl === TakerFeeShareDenomsToAccruedValueResponse.typeUrl || typeof o.amount === "string");
  },
  isSDK(o: any): o is TakerFeeShareDenomsToAccruedValueResponseSDKType {
    return o && (o.$typeUrl === TakerFeeShareDenomsToAccruedValueResponse.typeUrl || typeof o.amount === "string");
  },
  isAmino(o: any): o is TakerFeeShareDenomsToAccruedValueResponseAmino {
    return o && (o.$typeUrl === TakerFeeShareDenomsToAccruedValueResponse.typeUrl || typeof o.amount === "string");
  },
  encode(message: TakerFeeShareDenomsToAccruedValueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TakerFeeShareDenomsToAccruedValueResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTakerFeeShareDenomsToAccruedValueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TakerFeeShareDenomsToAccruedValueResponse {
    return {
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: TakerFeeShareDenomsToAccruedValueResponse): JsonSafe<TakerFeeShareDenomsToAccruedValueResponse> {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TakerFeeShareDenomsToAccruedValueResponse>, I>>(object: I): TakerFeeShareDenomsToAccruedValueResponse {
    const message = createBaseTakerFeeShareDenomsToAccruedValueResponse();
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: TakerFeeShareDenomsToAccruedValueResponseAmino): TakerFeeShareDenomsToAccruedValueResponse {
    const message = createBaseTakerFeeShareDenomsToAccruedValueResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: TakerFeeShareDenomsToAccruedValueResponse): TakerFeeShareDenomsToAccruedValueResponseAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: TakerFeeShareDenomsToAccruedValueResponseAminoMsg): TakerFeeShareDenomsToAccruedValueResponse {
    return TakerFeeShareDenomsToAccruedValueResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TakerFeeShareDenomsToAccruedValueResponse): TakerFeeShareDenomsToAccruedValueResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/taker-fee-share-denoms-to-accrued-value-response",
      value: TakerFeeShareDenomsToAccruedValueResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TakerFeeShareDenomsToAccruedValueResponseProtoMsg): TakerFeeShareDenomsToAccruedValueResponse {
    return TakerFeeShareDenomsToAccruedValueResponse.decode(message.value);
  },
  toProto(message: TakerFeeShareDenomsToAccruedValueResponse): Uint8Array {
    return TakerFeeShareDenomsToAccruedValueResponse.encode(message).finish();
  },
  toProtoMsg(message: TakerFeeShareDenomsToAccruedValueResponse): TakerFeeShareDenomsToAccruedValueResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeShareDenomsToAccruedValueResponse",
      value: TakerFeeShareDenomsToAccruedValueResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TakerFeeShareDenomsToAccruedValueResponse.typeUrl, TakerFeeShareDenomsToAccruedValueResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(TakerFeeShareDenomsToAccruedValueResponse.aminoType, TakerFeeShareDenomsToAccruedValueResponse.typeUrl);
function createBaseAllTakerFeeShareAccumulatorsRequest(): AllTakerFeeShareAccumulatorsRequest {
  return {};
}
export const AllTakerFeeShareAccumulatorsRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsRequest",
  aminoType: "osmosis/poolmanager/all-taker-fee-share-accumulators-request",
  is(o: any): o is AllTakerFeeShareAccumulatorsRequest {
    return o && o.$typeUrl === AllTakerFeeShareAccumulatorsRequest.typeUrl;
  },
  isSDK(o: any): o is AllTakerFeeShareAccumulatorsRequestSDKType {
    return o && o.$typeUrl === AllTakerFeeShareAccumulatorsRequest.typeUrl;
  },
  isAmino(o: any): o is AllTakerFeeShareAccumulatorsRequestAmino {
    return o && o.$typeUrl === AllTakerFeeShareAccumulatorsRequest.typeUrl;
  },
  encode(_: AllTakerFeeShareAccumulatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllTakerFeeShareAccumulatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllTakerFeeShareAccumulatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): AllTakerFeeShareAccumulatorsRequest {
    return {};
  },
  toJSON(_: AllTakerFeeShareAccumulatorsRequest): JsonSafe<AllTakerFeeShareAccumulatorsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllTakerFeeShareAccumulatorsRequest>, I>>(_: I): AllTakerFeeShareAccumulatorsRequest {
    const message = createBaseAllTakerFeeShareAccumulatorsRequest();
    return message;
  },
  fromAmino(_: AllTakerFeeShareAccumulatorsRequestAmino): AllTakerFeeShareAccumulatorsRequest {
    const message = createBaseAllTakerFeeShareAccumulatorsRequest();
    return message;
  },
  toAmino(_: AllTakerFeeShareAccumulatorsRequest): AllTakerFeeShareAccumulatorsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: AllTakerFeeShareAccumulatorsRequestAminoMsg): AllTakerFeeShareAccumulatorsRequest {
    return AllTakerFeeShareAccumulatorsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AllTakerFeeShareAccumulatorsRequest): AllTakerFeeShareAccumulatorsRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/all-taker-fee-share-accumulators-request",
      value: AllTakerFeeShareAccumulatorsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AllTakerFeeShareAccumulatorsRequestProtoMsg): AllTakerFeeShareAccumulatorsRequest {
    return AllTakerFeeShareAccumulatorsRequest.decode(message.value);
  },
  toProto(message: AllTakerFeeShareAccumulatorsRequest): Uint8Array {
    return AllTakerFeeShareAccumulatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: AllTakerFeeShareAccumulatorsRequest): AllTakerFeeShareAccumulatorsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsRequest",
      value: AllTakerFeeShareAccumulatorsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AllTakerFeeShareAccumulatorsRequest.typeUrl, AllTakerFeeShareAccumulatorsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AllTakerFeeShareAccumulatorsRequest.aminoType, AllTakerFeeShareAccumulatorsRequest.typeUrl);
function createBaseAllTakerFeeShareAccumulatorsResponse(): AllTakerFeeShareAccumulatorsResponse {
  return {
    takerFeeSkimAccumulators: []
  };
}
export const AllTakerFeeShareAccumulatorsResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsResponse",
  aminoType: "osmosis/poolmanager/all-taker-fee-share-accumulators-response",
  is(o: any): o is AllTakerFeeShareAccumulatorsResponse {
    return o && (o.$typeUrl === AllTakerFeeShareAccumulatorsResponse.typeUrl || Array.isArray(o.takerFeeSkimAccumulators) && (!o.takerFeeSkimAccumulators.length || TakerFeeSkimAccumulator.is(o.takerFeeSkimAccumulators[0])));
  },
  isSDK(o: any): o is AllTakerFeeShareAccumulatorsResponseSDKType {
    return o && (o.$typeUrl === AllTakerFeeShareAccumulatorsResponse.typeUrl || Array.isArray(o.taker_fee_skim_accumulators) && (!o.taker_fee_skim_accumulators.length || TakerFeeSkimAccumulator.isSDK(o.taker_fee_skim_accumulators[0])));
  },
  isAmino(o: any): o is AllTakerFeeShareAccumulatorsResponseAmino {
    return o && (o.$typeUrl === AllTakerFeeShareAccumulatorsResponse.typeUrl || Array.isArray(o.taker_fee_skim_accumulators) && (!o.taker_fee_skim_accumulators.length || TakerFeeSkimAccumulator.isAmino(o.taker_fee_skim_accumulators[0])));
  },
  encode(message: AllTakerFeeShareAccumulatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.takerFeeSkimAccumulators) {
      TakerFeeSkimAccumulator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllTakerFeeShareAccumulatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllTakerFeeShareAccumulatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.takerFeeSkimAccumulators.push(TakerFeeSkimAccumulator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllTakerFeeShareAccumulatorsResponse {
    return {
      takerFeeSkimAccumulators: Array.isArray(object?.takerFeeSkimAccumulators) ? object.takerFeeSkimAccumulators.map((e: any) => TakerFeeSkimAccumulator.fromJSON(e)) : []
    };
  },
  toJSON(message: AllTakerFeeShareAccumulatorsResponse): JsonSafe<AllTakerFeeShareAccumulatorsResponse> {
    const obj: any = {};
    if (message.takerFeeSkimAccumulators) {
      obj.takerFeeSkimAccumulators = message.takerFeeSkimAccumulators.map(e => e ? TakerFeeSkimAccumulator.toJSON(e) : undefined);
    } else {
      obj.takerFeeSkimAccumulators = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllTakerFeeShareAccumulatorsResponse>, I>>(object: I): AllTakerFeeShareAccumulatorsResponse {
    const message = createBaseAllTakerFeeShareAccumulatorsResponse();
    message.takerFeeSkimAccumulators = object.takerFeeSkimAccumulators?.map(e => TakerFeeSkimAccumulator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AllTakerFeeShareAccumulatorsResponseAmino): AllTakerFeeShareAccumulatorsResponse {
    const message = createBaseAllTakerFeeShareAccumulatorsResponse();
    message.takerFeeSkimAccumulators = object.taker_fee_skim_accumulators?.map(e => TakerFeeSkimAccumulator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AllTakerFeeShareAccumulatorsResponse): AllTakerFeeShareAccumulatorsResponseAmino {
    const obj: any = {};
    if (message.takerFeeSkimAccumulators) {
      obj.taker_fee_skim_accumulators = message.takerFeeSkimAccumulators.map(e => e ? TakerFeeSkimAccumulator.toAmino(e) : undefined);
    } else {
      obj.taker_fee_skim_accumulators = message.takerFeeSkimAccumulators;
    }
    return obj;
  },
  fromAminoMsg(object: AllTakerFeeShareAccumulatorsResponseAminoMsg): AllTakerFeeShareAccumulatorsResponse {
    return AllTakerFeeShareAccumulatorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AllTakerFeeShareAccumulatorsResponse): AllTakerFeeShareAccumulatorsResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/all-taker-fee-share-accumulators-response",
      value: AllTakerFeeShareAccumulatorsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AllTakerFeeShareAccumulatorsResponseProtoMsg): AllTakerFeeShareAccumulatorsResponse {
    return AllTakerFeeShareAccumulatorsResponse.decode(message.value);
  },
  toProto(message: AllTakerFeeShareAccumulatorsResponse): Uint8Array {
    return AllTakerFeeShareAccumulatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: AllTakerFeeShareAccumulatorsResponse): AllTakerFeeShareAccumulatorsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.AllTakerFeeShareAccumulatorsResponse",
      value: AllTakerFeeShareAccumulatorsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AllTakerFeeShareAccumulatorsResponse.typeUrl, AllTakerFeeShareAccumulatorsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AllTakerFeeShareAccumulatorsResponse.aminoType, AllTakerFeeShareAccumulatorsResponse.typeUrl);
function createBaseRegisteredAlloyedPoolFromDenomRequest(): RegisteredAlloyedPoolFromDenomRequest {
  return {
    denom: ""
  };
}
export const RegisteredAlloyedPoolFromDenomRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomRequest",
  aminoType: "osmosis/poolmanager/registered-alloyed-pool-from-denom-request",
  is(o: any): o is RegisteredAlloyedPoolFromDenomRequest {
    return o && (o.$typeUrl === RegisteredAlloyedPoolFromDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is RegisteredAlloyedPoolFromDenomRequestSDKType {
    return o && (o.$typeUrl === RegisteredAlloyedPoolFromDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is RegisteredAlloyedPoolFromDenomRequestAmino {
    return o && (o.$typeUrl === RegisteredAlloyedPoolFromDenomRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: RegisteredAlloyedPoolFromDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredAlloyedPoolFromDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredAlloyedPoolFromDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredAlloyedPoolFromDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: RegisteredAlloyedPoolFromDenomRequest): JsonSafe<RegisteredAlloyedPoolFromDenomRequest> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RegisteredAlloyedPoolFromDenomRequest>, I>>(object: I): RegisteredAlloyedPoolFromDenomRequest {
    const message = createBaseRegisteredAlloyedPoolFromDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: RegisteredAlloyedPoolFromDenomRequestAmino): RegisteredAlloyedPoolFromDenomRequest {
    const message = createBaseRegisteredAlloyedPoolFromDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: RegisteredAlloyedPoolFromDenomRequest): RegisteredAlloyedPoolFromDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: RegisteredAlloyedPoolFromDenomRequestAminoMsg): RegisteredAlloyedPoolFromDenomRequest {
    return RegisteredAlloyedPoolFromDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredAlloyedPoolFromDenomRequest): RegisteredAlloyedPoolFromDenomRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/registered-alloyed-pool-from-denom-request",
      value: RegisteredAlloyedPoolFromDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: RegisteredAlloyedPoolFromDenomRequestProtoMsg): RegisteredAlloyedPoolFromDenomRequest {
    return RegisteredAlloyedPoolFromDenomRequest.decode(message.value);
  },
  toProto(message: RegisteredAlloyedPoolFromDenomRequest): Uint8Array {
    return RegisteredAlloyedPoolFromDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: RegisteredAlloyedPoolFromDenomRequest): RegisteredAlloyedPoolFromDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomRequest",
      value: RegisteredAlloyedPoolFromDenomRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RegisteredAlloyedPoolFromDenomRequest.typeUrl, RegisteredAlloyedPoolFromDenomRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(RegisteredAlloyedPoolFromDenomRequest.aminoType, RegisteredAlloyedPoolFromDenomRequest.typeUrl);
function createBaseRegisteredAlloyedPoolFromDenomResponse(): RegisteredAlloyedPoolFromDenomResponse {
  return {
    contractState: AlloyContractTakerFeeShareState.fromPartial({})
  };
}
export const RegisteredAlloyedPoolFromDenomResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomResponse",
  aminoType: "osmosis/poolmanager/registered-alloyed-pool-from-denom-response",
  is(o: any): o is RegisteredAlloyedPoolFromDenomResponse {
    return o && (o.$typeUrl === RegisteredAlloyedPoolFromDenomResponse.typeUrl || AlloyContractTakerFeeShareState.is(o.contractState));
  },
  isSDK(o: any): o is RegisteredAlloyedPoolFromDenomResponseSDKType {
    return o && (o.$typeUrl === RegisteredAlloyedPoolFromDenomResponse.typeUrl || AlloyContractTakerFeeShareState.isSDK(o.contract_state));
  },
  isAmino(o: any): o is RegisteredAlloyedPoolFromDenomResponseAmino {
    return o && (o.$typeUrl === RegisteredAlloyedPoolFromDenomResponse.typeUrl || AlloyContractTakerFeeShareState.isAmino(o.contract_state));
  },
  encode(message: RegisteredAlloyedPoolFromDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractState !== undefined) {
      AlloyContractTakerFeeShareState.encode(message.contractState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredAlloyedPoolFromDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredAlloyedPoolFromDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractState = AlloyContractTakerFeeShareState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredAlloyedPoolFromDenomResponse {
    return {
      contractState: isSet(object.contractState) ? AlloyContractTakerFeeShareState.fromJSON(object.contractState) : undefined
    };
  },
  toJSON(message: RegisteredAlloyedPoolFromDenomResponse): JsonSafe<RegisteredAlloyedPoolFromDenomResponse> {
    const obj: any = {};
    message.contractState !== undefined && (obj.contractState = message.contractState ? AlloyContractTakerFeeShareState.toJSON(message.contractState) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RegisteredAlloyedPoolFromDenomResponse>, I>>(object: I): RegisteredAlloyedPoolFromDenomResponse {
    const message = createBaseRegisteredAlloyedPoolFromDenomResponse();
    message.contractState = object.contractState !== undefined && object.contractState !== null ? AlloyContractTakerFeeShareState.fromPartial(object.contractState) : undefined;
    return message;
  },
  fromAmino(object: RegisteredAlloyedPoolFromDenomResponseAmino): RegisteredAlloyedPoolFromDenomResponse {
    const message = createBaseRegisteredAlloyedPoolFromDenomResponse();
    if (object.contract_state !== undefined && object.contract_state !== null) {
      message.contractState = AlloyContractTakerFeeShareState.fromAmino(object.contract_state);
    }
    return message;
  },
  toAmino(message: RegisteredAlloyedPoolFromDenomResponse): RegisteredAlloyedPoolFromDenomResponseAmino {
    const obj: any = {};
    obj.contract_state = message.contractState ? AlloyContractTakerFeeShareState.toAmino(message.contractState) : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisteredAlloyedPoolFromDenomResponseAminoMsg): RegisteredAlloyedPoolFromDenomResponse {
    return RegisteredAlloyedPoolFromDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredAlloyedPoolFromDenomResponse): RegisteredAlloyedPoolFromDenomResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/registered-alloyed-pool-from-denom-response",
      value: RegisteredAlloyedPoolFromDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: RegisteredAlloyedPoolFromDenomResponseProtoMsg): RegisteredAlloyedPoolFromDenomResponse {
    return RegisteredAlloyedPoolFromDenomResponse.decode(message.value);
  },
  toProto(message: RegisteredAlloyedPoolFromDenomResponse): Uint8Array {
    return RegisteredAlloyedPoolFromDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: RegisteredAlloyedPoolFromDenomResponse): RegisteredAlloyedPoolFromDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.RegisteredAlloyedPoolFromDenomResponse",
      value: RegisteredAlloyedPoolFromDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RegisteredAlloyedPoolFromDenomResponse.typeUrl, RegisteredAlloyedPoolFromDenomResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(RegisteredAlloyedPoolFromDenomResponse.aminoType, RegisteredAlloyedPoolFromDenomResponse.typeUrl);
function createBaseRegisteredAlloyedPoolFromPoolIdRequest(): RegisteredAlloyedPoolFromPoolIdRequest {
  return {
    poolId: BigInt(0)
  };
}
export const RegisteredAlloyedPoolFromPoolIdRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdRequest",
  aminoType: "osmosis/poolmanager/registered-alloyed-pool-from-pool-id-request",
  is(o: any): o is RegisteredAlloyedPoolFromPoolIdRequest {
    return o && (o.$typeUrl === RegisteredAlloyedPoolFromPoolIdRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is RegisteredAlloyedPoolFromPoolIdRequestSDKType {
    return o && (o.$typeUrl === RegisteredAlloyedPoolFromPoolIdRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is RegisteredAlloyedPoolFromPoolIdRequestAmino {
    return o && (o.$typeUrl === RegisteredAlloyedPoolFromPoolIdRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: RegisteredAlloyedPoolFromPoolIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredAlloyedPoolFromPoolIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredAlloyedPoolFromPoolIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredAlloyedPoolFromPoolIdRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: RegisteredAlloyedPoolFromPoolIdRequest): JsonSafe<RegisteredAlloyedPoolFromPoolIdRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RegisteredAlloyedPoolFromPoolIdRequest>, I>>(object: I): RegisteredAlloyedPoolFromPoolIdRequest {
    const message = createBaseRegisteredAlloyedPoolFromPoolIdRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RegisteredAlloyedPoolFromPoolIdRequestAmino): RegisteredAlloyedPoolFromPoolIdRequest {
    const message = createBaseRegisteredAlloyedPoolFromPoolIdRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: RegisteredAlloyedPoolFromPoolIdRequest): RegisteredAlloyedPoolFromPoolIdRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisteredAlloyedPoolFromPoolIdRequestAminoMsg): RegisteredAlloyedPoolFromPoolIdRequest {
    return RegisteredAlloyedPoolFromPoolIdRequest.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredAlloyedPoolFromPoolIdRequest): RegisteredAlloyedPoolFromPoolIdRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/registered-alloyed-pool-from-pool-id-request",
      value: RegisteredAlloyedPoolFromPoolIdRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: RegisteredAlloyedPoolFromPoolIdRequestProtoMsg): RegisteredAlloyedPoolFromPoolIdRequest {
    return RegisteredAlloyedPoolFromPoolIdRequest.decode(message.value);
  },
  toProto(message: RegisteredAlloyedPoolFromPoolIdRequest): Uint8Array {
    return RegisteredAlloyedPoolFromPoolIdRequest.encode(message).finish();
  },
  toProtoMsg(message: RegisteredAlloyedPoolFromPoolIdRequest): RegisteredAlloyedPoolFromPoolIdRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdRequest",
      value: RegisteredAlloyedPoolFromPoolIdRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RegisteredAlloyedPoolFromPoolIdRequest.typeUrl, RegisteredAlloyedPoolFromPoolIdRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(RegisteredAlloyedPoolFromPoolIdRequest.aminoType, RegisteredAlloyedPoolFromPoolIdRequest.typeUrl);
function createBaseRegisteredAlloyedPoolFromPoolIdResponse(): RegisteredAlloyedPoolFromPoolIdResponse {
  return {
    contractState: AlloyContractTakerFeeShareState.fromPartial({})
  };
}
export const RegisteredAlloyedPoolFromPoolIdResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdResponse",
  aminoType: "osmosis/poolmanager/registered-alloyed-pool-from-pool-id-response",
  is(o: any): o is RegisteredAlloyedPoolFromPoolIdResponse {
    return o && (o.$typeUrl === RegisteredAlloyedPoolFromPoolIdResponse.typeUrl || AlloyContractTakerFeeShareState.is(o.contractState));
  },
  isSDK(o: any): o is RegisteredAlloyedPoolFromPoolIdResponseSDKType {
    return o && (o.$typeUrl === RegisteredAlloyedPoolFromPoolIdResponse.typeUrl || AlloyContractTakerFeeShareState.isSDK(o.contract_state));
  },
  isAmino(o: any): o is RegisteredAlloyedPoolFromPoolIdResponseAmino {
    return o && (o.$typeUrl === RegisteredAlloyedPoolFromPoolIdResponse.typeUrl || AlloyContractTakerFeeShareState.isAmino(o.contract_state));
  },
  encode(message: RegisteredAlloyedPoolFromPoolIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractState !== undefined) {
      AlloyContractTakerFeeShareState.encode(message.contractState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredAlloyedPoolFromPoolIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredAlloyedPoolFromPoolIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractState = AlloyContractTakerFeeShareState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredAlloyedPoolFromPoolIdResponse {
    return {
      contractState: isSet(object.contractState) ? AlloyContractTakerFeeShareState.fromJSON(object.contractState) : undefined
    };
  },
  toJSON(message: RegisteredAlloyedPoolFromPoolIdResponse): JsonSafe<RegisteredAlloyedPoolFromPoolIdResponse> {
    const obj: any = {};
    message.contractState !== undefined && (obj.contractState = message.contractState ? AlloyContractTakerFeeShareState.toJSON(message.contractState) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RegisteredAlloyedPoolFromPoolIdResponse>, I>>(object: I): RegisteredAlloyedPoolFromPoolIdResponse {
    const message = createBaseRegisteredAlloyedPoolFromPoolIdResponse();
    message.contractState = object.contractState !== undefined && object.contractState !== null ? AlloyContractTakerFeeShareState.fromPartial(object.contractState) : undefined;
    return message;
  },
  fromAmino(object: RegisteredAlloyedPoolFromPoolIdResponseAmino): RegisteredAlloyedPoolFromPoolIdResponse {
    const message = createBaseRegisteredAlloyedPoolFromPoolIdResponse();
    if (object.contract_state !== undefined && object.contract_state !== null) {
      message.contractState = AlloyContractTakerFeeShareState.fromAmino(object.contract_state);
    }
    return message;
  },
  toAmino(message: RegisteredAlloyedPoolFromPoolIdResponse): RegisteredAlloyedPoolFromPoolIdResponseAmino {
    const obj: any = {};
    obj.contract_state = message.contractState ? AlloyContractTakerFeeShareState.toAmino(message.contractState) : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisteredAlloyedPoolFromPoolIdResponseAminoMsg): RegisteredAlloyedPoolFromPoolIdResponse {
    return RegisteredAlloyedPoolFromPoolIdResponse.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredAlloyedPoolFromPoolIdResponse): RegisteredAlloyedPoolFromPoolIdResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/registered-alloyed-pool-from-pool-id-response",
      value: RegisteredAlloyedPoolFromPoolIdResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: RegisteredAlloyedPoolFromPoolIdResponseProtoMsg): RegisteredAlloyedPoolFromPoolIdResponse {
    return RegisteredAlloyedPoolFromPoolIdResponse.decode(message.value);
  },
  toProto(message: RegisteredAlloyedPoolFromPoolIdResponse): Uint8Array {
    return RegisteredAlloyedPoolFromPoolIdResponse.encode(message).finish();
  },
  toProtoMsg(message: RegisteredAlloyedPoolFromPoolIdResponse): RegisteredAlloyedPoolFromPoolIdResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.RegisteredAlloyedPoolFromPoolIdResponse",
      value: RegisteredAlloyedPoolFromPoolIdResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RegisteredAlloyedPoolFromPoolIdResponse.typeUrl, RegisteredAlloyedPoolFromPoolIdResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(RegisteredAlloyedPoolFromPoolIdResponse.aminoType, RegisteredAlloyedPoolFromPoolIdResponse.typeUrl);
function createBaseAllRegisteredAlloyedPoolsRequest(): AllRegisteredAlloyedPoolsRequest {
  return {};
}
export const AllRegisteredAlloyedPoolsRequest = {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllRegisteredAlloyedPoolsRequest",
  aminoType: "osmosis/poolmanager/all-registered-alloyed-pools-request",
  is(o: any): o is AllRegisteredAlloyedPoolsRequest {
    return o && o.$typeUrl === AllRegisteredAlloyedPoolsRequest.typeUrl;
  },
  isSDK(o: any): o is AllRegisteredAlloyedPoolsRequestSDKType {
    return o && o.$typeUrl === AllRegisteredAlloyedPoolsRequest.typeUrl;
  },
  isAmino(o: any): o is AllRegisteredAlloyedPoolsRequestAmino {
    return o && o.$typeUrl === AllRegisteredAlloyedPoolsRequest.typeUrl;
  },
  encode(_: AllRegisteredAlloyedPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllRegisteredAlloyedPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllRegisteredAlloyedPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): AllRegisteredAlloyedPoolsRequest {
    return {};
  },
  toJSON(_: AllRegisteredAlloyedPoolsRequest): JsonSafe<AllRegisteredAlloyedPoolsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllRegisteredAlloyedPoolsRequest>, I>>(_: I): AllRegisteredAlloyedPoolsRequest {
    const message = createBaseAllRegisteredAlloyedPoolsRequest();
    return message;
  },
  fromAmino(_: AllRegisteredAlloyedPoolsRequestAmino): AllRegisteredAlloyedPoolsRequest {
    const message = createBaseAllRegisteredAlloyedPoolsRequest();
    return message;
  },
  toAmino(_: AllRegisteredAlloyedPoolsRequest): AllRegisteredAlloyedPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: AllRegisteredAlloyedPoolsRequestAminoMsg): AllRegisteredAlloyedPoolsRequest {
    return AllRegisteredAlloyedPoolsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AllRegisteredAlloyedPoolsRequest): AllRegisteredAlloyedPoolsRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/all-registered-alloyed-pools-request",
      value: AllRegisteredAlloyedPoolsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AllRegisteredAlloyedPoolsRequestProtoMsg): AllRegisteredAlloyedPoolsRequest {
    return AllRegisteredAlloyedPoolsRequest.decode(message.value);
  },
  toProto(message: AllRegisteredAlloyedPoolsRequest): Uint8Array {
    return AllRegisteredAlloyedPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: AllRegisteredAlloyedPoolsRequest): AllRegisteredAlloyedPoolsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.AllRegisteredAlloyedPoolsRequest",
      value: AllRegisteredAlloyedPoolsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AllRegisteredAlloyedPoolsRequest.typeUrl, AllRegisteredAlloyedPoolsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(AllRegisteredAlloyedPoolsRequest.aminoType, AllRegisteredAlloyedPoolsRequest.typeUrl);
function createBaseAllRegisteredAlloyedPoolsResponse(): AllRegisteredAlloyedPoolsResponse {
  return {
    contractStates: []
  };
}
export const AllRegisteredAlloyedPoolsResponse = {
  typeUrl: "/osmosis.poolmanager.v1beta1.AllRegisteredAlloyedPoolsResponse",
  aminoType: "osmosis/poolmanager/all-registered-alloyed-pools-response",
  is(o: any): o is AllRegisteredAlloyedPoolsResponse {
    return o && (o.$typeUrl === AllRegisteredAlloyedPoolsResponse.typeUrl || Array.isArray(o.contractStates) && (!o.contractStates.length || AlloyContractTakerFeeShareState.is(o.contractStates[0])));
  },
  isSDK(o: any): o is AllRegisteredAlloyedPoolsResponseSDKType {
    return o && (o.$typeUrl === AllRegisteredAlloyedPoolsResponse.typeUrl || Array.isArray(o.contract_states) && (!o.contract_states.length || AlloyContractTakerFeeShareState.isSDK(o.contract_states[0])));
  },
  isAmino(o: any): o is AllRegisteredAlloyedPoolsResponseAmino {
    return o && (o.$typeUrl === AllRegisteredAlloyedPoolsResponse.typeUrl || Array.isArray(o.contract_states) && (!o.contract_states.length || AlloyContractTakerFeeShareState.isAmino(o.contract_states[0])));
  },
  encode(message: AllRegisteredAlloyedPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contractStates) {
      AlloyContractTakerFeeShareState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllRegisteredAlloyedPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllRegisteredAlloyedPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractStates.push(AlloyContractTakerFeeShareState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllRegisteredAlloyedPoolsResponse {
    return {
      contractStates: Array.isArray(object?.contractStates) ? object.contractStates.map((e: any) => AlloyContractTakerFeeShareState.fromJSON(e)) : []
    };
  },
  toJSON(message: AllRegisteredAlloyedPoolsResponse): JsonSafe<AllRegisteredAlloyedPoolsResponse> {
    const obj: any = {};
    if (message.contractStates) {
      obj.contractStates = message.contractStates.map(e => e ? AlloyContractTakerFeeShareState.toJSON(e) : undefined);
    } else {
      obj.contractStates = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AllRegisteredAlloyedPoolsResponse>, I>>(object: I): AllRegisteredAlloyedPoolsResponse {
    const message = createBaseAllRegisteredAlloyedPoolsResponse();
    message.contractStates = object.contractStates?.map(e => AlloyContractTakerFeeShareState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AllRegisteredAlloyedPoolsResponseAmino): AllRegisteredAlloyedPoolsResponse {
    const message = createBaseAllRegisteredAlloyedPoolsResponse();
    message.contractStates = object.contract_states?.map(e => AlloyContractTakerFeeShareState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AllRegisteredAlloyedPoolsResponse): AllRegisteredAlloyedPoolsResponseAmino {
    const obj: any = {};
    if (message.contractStates) {
      obj.contract_states = message.contractStates.map(e => e ? AlloyContractTakerFeeShareState.toAmino(e) : undefined);
    } else {
      obj.contract_states = message.contractStates;
    }
    return obj;
  },
  fromAminoMsg(object: AllRegisteredAlloyedPoolsResponseAminoMsg): AllRegisteredAlloyedPoolsResponse {
    return AllRegisteredAlloyedPoolsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AllRegisteredAlloyedPoolsResponse): AllRegisteredAlloyedPoolsResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/all-registered-alloyed-pools-response",
      value: AllRegisteredAlloyedPoolsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AllRegisteredAlloyedPoolsResponseProtoMsg): AllRegisteredAlloyedPoolsResponse {
    return AllRegisteredAlloyedPoolsResponse.decode(message.value);
  },
  toProto(message: AllRegisteredAlloyedPoolsResponse): Uint8Array {
    return AllRegisteredAlloyedPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: AllRegisteredAlloyedPoolsResponse): AllRegisteredAlloyedPoolsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.AllRegisteredAlloyedPoolsResponse",
      value: AllRegisteredAlloyedPoolsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AllRegisteredAlloyedPoolsResponse.typeUrl, AllRegisteredAlloyedPoolsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(AllRegisteredAlloyedPoolsResponse.aminoType, AllRegisteredAlloyedPoolsResponse.typeUrl);