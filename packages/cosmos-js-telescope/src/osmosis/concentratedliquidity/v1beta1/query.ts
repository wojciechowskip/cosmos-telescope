//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullPositionBreakdown, FullPositionBreakdownAmino, FullPositionBreakdownSDKType, PositionWithPeriodLock, PositionWithPeriodLockAmino, PositionWithPeriodLockSDKType } from "./position";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsAmino, ParamsSDKType } from "../params";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { UptimeTracker, UptimeTrackerAmino, UptimeTrackerSDKType } from "./tick_info";
import { IncentiveRecord, IncentiveRecordAmino, IncentiveRecordSDKType } from "./incentive_record";
import { Pool as Pool1 } from "./pool";
import { PoolProtoMsg as Pool1ProtoMsg } from "./pool";
import { PoolSDKType as Pool1SDKType } from "./pool";
import { Pool as Pool2 } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../../gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import { Pool as Pool3 } from "../../gamm/v1beta1/balancerPool";
import { PoolProtoMsg as Pool3ProtoMsg } from "../../gamm/v1beta1/balancerPool";
import { PoolSDKType as Pool3SDKType } from "../../gamm/v1beta1/balancerPool";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
/** =============================== UserPositions */
export interface UserPositionsRequest {
  address: string;
  poolId: bigint;
  pagination?: PageRequest;
}
export interface UserPositionsRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsRequest";
  value: Uint8Array;
}
/** =============================== UserPositions */
export interface UserPositionsRequestAmino {
  address?: string;
  pool_id?: string;
  pagination?: PageRequestAmino;
}
export interface UserPositionsRequestAminoMsg {
  type: "osmosis/concentratedliquidity/user-positions-request";
  value: UserPositionsRequestAmino;
}
/** =============================== UserPositions */
export interface UserPositionsRequestSDKType {
  address: string;
  pool_id: bigint;
  pagination?: PageRequestSDKType;
}
export interface UserPositionsResponse {
  positions: FullPositionBreakdown[];
  pagination?: PageResponse;
}
export interface UserPositionsResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsResponse";
  value: Uint8Array;
}
export interface UserPositionsResponseAmino {
  positions?: FullPositionBreakdownAmino[];
  pagination?: PageResponseAmino;
}
export interface UserPositionsResponseAminoMsg {
  type: "osmosis/concentratedliquidity/user-positions-response";
  value: UserPositionsResponseAmino;
}
export interface UserPositionsResponseSDKType {
  positions: FullPositionBreakdownSDKType[];
  pagination?: PageResponseSDKType;
}
/** =============================== PositionById */
export interface PositionByIdRequest {
  positionId: bigint;
}
export interface PositionByIdRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdRequest";
  value: Uint8Array;
}
/** =============================== PositionById */
export interface PositionByIdRequestAmino {
  position_id?: string;
}
export interface PositionByIdRequestAminoMsg {
  type: "osmosis/concentratedliquidity/position-by-id-request";
  value: PositionByIdRequestAmino;
}
/** =============================== PositionById */
export interface PositionByIdRequestSDKType {
  position_id: bigint;
}
export interface PositionByIdResponse {
  position: FullPositionBreakdown;
}
export interface PositionByIdResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdResponse";
  value: Uint8Array;
}
export interface PositionByIdResponseAmino {
  position?: FullPositionBreakdownAmino;
}
export interface PositionByIdResponseAminoMsg {
  type: "osmosis/concentratedliquidity/position-by-id-response";
  value: PositionByIdResponseAmino;
}
export interface PositionByIdResponseSDKType {
  position: FullPositionBreakdownSDKType;
}
export interface NumPoolPositionsRequest {
  poolId: bigint;
}
export interface NumPoolPositionsRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsRequest";
  value: Uint8Array;
}
export interface NumPoolPositionsRequestAmino {
  pool_id?: string;
}
export interface NumPoolPositionsRequestAminoMsg {
  type: "osmosis/concentratedliquidity/num-pool-positions-request";
  value: NumPoolPositionsRequestAmino;
}
export interface NumPoolPositionsRequestSDKType {
  pool_id: bigint;
}
export interface NumPoolPositionsResponse {
  positionCount: bigint;
}
export interface NumPoolPositionsResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsResponse";
  value: Uint8Array;
}
export interface NumPoolPositionsResponseAmino {
  position_count?: string;
}
export interface NumPoolPositionsResponseAminoMsg {
  type: "osmosis/concentratedliquidity/num-pool-positions-response";
  value: NumPoolPositionsResponseAmino;
}
export interface NumPoolPositionsResponseSDKType {
  position_count: bigint;
}
/** =============================== Pools */
export interface PoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface PoolsRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsRequest";
  value: Uint8Array;
}
/** =============================== Pools */
export interface PoolsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface PoolsRequestAminoMsg {
  type: "osmosis/concentratedliquidity/pools-request";
  value: PoolsRequestAmino;
}
/** =============================== Pools */
export interface PoolsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface PoolsResponse {
  pools: (Pool1 | Pool2 | Pool3 | Any)[] | Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface PoolsResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsResponse";
  value: Uint8Array;
}
export type PoolsResponseEncoded = Omit<PoolsResponse, "pools"> & {
  pools: (Pool1ProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg)[];
};
export interface PoolsResponseAmino {
  pools?: AnyAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface PoolsResponseAminoMsg {
  type: "osmosis/concentratedliquidity/pools-response";
  value: PoolsResponseAmino;
}
export interface PoolsResponseSDKType {
  pools: (Pool1SDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
  pagination?: PageResponseSDKType;
}
/** =============================== ModuleParams */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsRequest";
  value: Uint8Array;
}
/** =============================== ModuleParams */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "osmosis/concentratedliquidity/params-request";
  value: ParamsRequestAmino;
}
/** =============================== ModuleParams */
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "osmosis/concentratedliquidity/params-response";
  value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface TickLiquidityNet {
  liquidityNet: string;
  tickIndex: bigint;
}
export interface TickLiquidityNetProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickLiquidityNet";
  value: Uint8Array;
}
export interface TickLiquidityNetAmino {
  liquidity_net?: string;
  tick_index?: string;
}
export interface TickLiquidityNetAminoMsg {
  type: "osmosis/concentratedliquidity/tick-liquidity-net";
  value: TickLiquidityNetAmino;
}
export interface TickLiquidityNetSDKType {
  liquidity_net: string;
  tick_index: bigint;
}
export interface LiquidityDepthWithRange {
  liquidityAmount: string;
  lowerTick: bigint;
  upperTick: bigint;
}
export interface LiquidityDepthWithRangeProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityDepthWithRange";
  value: Uint8Array;
}
export interface LiquidityDepthWithRangeAmino {
  liquidity_amount?: string;
  lower_tick?: string;
  upper_tick?: string;
}
export interface LiquidityDepthWithRangeAminoMsg {
  type: "osmosis/concentratedliquidity/liquidity-depth-with-range";
  value: LiquidityDepthWithRangeAmino;
}
export interface LiquidityDepthWithRangeSDKType {
  liquidity_amount: string;
  lower_tick: bigint;
  upper_tick: bigint;
}
/** =============================== LiquidityNetInDirection */
export interface LiquidityNetInDirectionRequest {
  poolId: bigint;
  tokenIn: string;
  startTick: bigint;
  useCurTick: boolean;
  boundTick: bigint;
  useNoBound: boolean;
}
export interface LiquidityNetInDirectionRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest";
  value: Uint8Array;
}
/** =============================== LiquidityNetInDirection */
export interface LiquidityNetInDirectionRequestAmino {
  pool_id?: string;
  token_in?: string;
  start_tick?: string;
  use_cur_tick?: boolean;
  bound_tick?: string;
  use_no_bound?: boolean;
}
export interface LiquidityNetInDirectionRequestAminoMsg {
  type: "osmosis/concentratedliquidity/liquidity-net-in-direction-request";
  value: LiquidityNetInDirectionRequestAmino;
}
/** =============================== LiquidityNetInDirection */
export interface LiquidityNetInDirectionRequestSDKType {
  pool_id: bigint;
  token_in: string;
  start_tick: bigint;
  use_cur_tick: boolean;
  bound_tick: bigint;
  use_no_bound: boolean;
}
export interface LiquidityNetInDirectionResponse {
  liquidityDepths: TickLiquidityNet[];
  currentTick: bigint;
  currentLiquidity: string;
  currentSqrtPrice: string;
}
export interface LiquidityNetInDirectionResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse";
  value: Uint8Array;
}
export interface LiquidityNetInDirectionResponseAmino {
  liquidity_depths?: TickLiquidityNetAmino[];
  current_tick?: string;
  current_liquidity?: string;
  current_sqrt_price?: string;
}
export interface LiquidityNetInDirectionResponseAminoMsg {
  type: "osmosis/concentratedliquidity/liquidity-net-in-direction-response";
  value: LiquidityNetInDirectionResponseAmino;
}
export interface LiquidityNetInDirectionResponseSDKType {
  liquidity_depths: TickLiquidityNetSDKType[];
  current_tick: bigint;
  current_liquidity: string;
  current_sqrt_price: string;
}
/** =============================== LiquidityPerTickRange */
export interface LiquidityPerTickRangeRequest {
  poolId: bigint;
}
export interface LiquidityPerTickRangeRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest";
  value: Uint8Array;
}
/** =============================== LiquidityPerTickRange */
export interface LiquidityPerTickRangeRequestAmino {
  pool_id?: string;
}
export interface LiquidityPerTickRangeRequestAminoMsg {
  type: "osmosis/concentratedliquidity/liquidity-per-tick-range-request";
  value: LiquidityPerTickRangeRequestAmino;
}
/** =============================== LiquidityPerTickRange */
export interface LiquidityPerTickRangeRequestSDKType {
  pool_id: bigint;
}
export interface LiquidityPerTickRangeResponse {
  liquidity: LiquidityDepthWithRange[];
  bucketIndex: bigint;
}
export interface LiquidityPerTickRangeResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse";
  value: Uint8Array;
}
export interface LiquidityPerTickRangeResponseAmino {
  liquidity?: LiquidityDepthWithRangeAmino[];
  bucket_index?: string;
}
export interface LiquidityPerTickRangeResponseAminoMsg {
  type: "osmosis/concentratedliquidity/liquidity-per-tick-range-response";
  value: LiquidityPerTickRangeResponseAmino;
}
export interface LiquidityPerTickRangeResponseSDKType {
  liquidity: LiquidityDepthWithRangeSDKType[];
  bucket_index: bigint;
}
/** ===================== QueryClaimableSpreadRewards */
export interface ClaimableSpreadRewardsRequest {
  positionId: bigint;
}
export interface ClaimableSpreadRewardsRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest";
  value: Uint8Array;
}
/** ===================== QueryClaimableSpreadRewards */
export interface ClaimableSpreadRewardsRequestAmino {
  position_id?: string;
}
export interface ClaimableSpreadRewardsRequestAminoMsg {
  type: "osmosis/concentratedliquidity/claimable-spread-rewards-request";
  value: ClaimableSpreadRewardsRequestAmino;
}
/** ===================== QueryClaimableSpreadRewards */
export interface ClaimableSpreadRewardsRequestSDKType {
  position_id: bigint;
}
export interface ClaimableSpreadRewardsResponse {
  claimableSpreadRewards: Coin[];
}
export interface ClaimableSpreadRewardsResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse";
  value: Uint8Array;
}
export interface ClaimableSpreadRewardsResponseAmino {
  claimable_spread_rewards?: CoinAmino[];
}
export interface ClaimableSpreadRewardsResponseAminoMsg {
  type: "osmosis/concentratedliquidity/claimable-spread-rewards-response";
  value: ClaimableSpreadRewardsResponseAmino;
}
export interface ClaimableSpreadRewardsResponseSDKType {
  claimable_spread_rewards: CoinSDKType[];
}
/** ===================== QueryClaimableIncentives */
export interface ClaimableIncentivesRequest {
  positionId: bigint;
}
export interface ClaimableIncentivesRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesRequest";
  value: Uint8Array;
}
/** ===================== QueryClaimableIncentives */
export interface ClaimableIncentivesRequestAmino {
  position_id?: string;
}
export interface ClaimableIncentivesRequestAminoMsg {
  type: "osmosis/concentratedliquidity/claimable-incentives-request";
  value: ClaimableIncentivesRequestAmino;
}
/** ===================== QueryClaimableIncentives */
export interface ClaimableIncentivesRequestSDKType {
  position_id: bigint;
}
export interface ClaimableIncentivesResponse {
  claimableIncentives: Coin[];
  forfeitedIncentives: Coin[];
}
export interface ClaimableIncentivesResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesResponse";
  value: Uint8Array;
}
export interface ClaimableIncentivesResponseAmino {
  claimable_incentives?: CoinAmino[];
  forfeited_incentives?: CoinAmino[];
}
export interface ClaimableIncentivesResponseAminoMsg {
  type: "osmosis/concentratedliquidity/claimable-incentives-response";
  value: ClaimableIncentivesResponseAmino;
}
export interface ClaimableIncentivesResponseSDKType {
  claimable_incentives: CoinSDKType[];
  forfeited_incentives: CoinSDKType[];
}
/** ===================== QueryPoolAccumulatorRewards */
export interface PoolAccumulatorRewardsRequest {
  poolId: bigint;
}
export interface PoolAccumulatorRewardsRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest";
  value: Uint8Array;
}
/** ===================== QueryPoolAccumulatorRewards */
export interface PoolAccumulatorRewardsRequestAmino {
  pool_id?: string;
}
export interface PoolAccumulatorRewardsRequestAminoMsg {
  type: "osmosis/concentratedliquidity/pool-accumulator-rewards-request";
  value: PoolAccumulatorRewardsRequestAmino;
}
/** ===================== QueryPoolAccumulatorRewards */
export interface PoolAccumulatorRewardsRequestSDKType {
  pool_id: bigint;
}
export interface PoolAccumulatorRewardsResponse {
  spreadRewardGrowthGlobal: DecCoin[];
  uptimeGrowthGlobal: UptimeTracker[];
}
export interface PoolAccumulatorRewardsResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse";
  value: Uint8Array;
}
export interface PoolAccumulatorRewardsResponseAmino {
  spread_reward_growth_global?: DecCoinAmino[];
  uptime_growth_global?: UptimeTrackerAmino[];
}
export interface PoolAccumulatorRewardsResponseAminoMsg {
  type: "osmosis/concentratedliquidity/pool-accumulator-rewards-response";
  value: PoolAccumulatorRewardsResponseAmino;
}
export interface PoolAccumulatorRewardsResponseSDKType {
  spread_reward_growth_global: DecCoinSDKType[];
  uptime_growth_global: UptimeTrackerSDKType[];
}
/** ===================== QueryTickAccumulatorTrackers */
export interface TickAccumulatorTrackersRequest {
  poolId: bigint;
  tickIndex: bigint;
}
export interface TickAccumulatorTrackersRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest";
  value: Uint8Array;
}
/** ===================== QueryTickAccumulatorTrackers */
export interface TickAccumulatorTrackersRequestAmino {
  pool_id?: string;
  tick_index?: string;
}
export interface TickAccumulatorTrackersRequestAminoMsg {
  type: "osmosis/concentratedliquidity/tick-accumulator-trackers-request";
  value: TickAccumulatorTrackersRequestAmino;
}
/** ===================== QueryTickAccumulatorTrackers */
export interface TickAccumulatorTrackersRequestSDKType {
  pool_id: bigint;
  tick_index: bigint;
}
export interface TickAccumulatorTrackersResponse {
  spreadRewardGrowthOppositeDirectionOfLastTraversal: DecCoin[];
  uptimeTrackers: UptimeTracker[];
}
export interface TickAccumulatorTrackersResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse";
  value: Uint8Array;
}
export interface TickAccumulatorTrackersResponseAmino {
  spread_reward_growth_opposite_direction_of_last_traversal?: DecCoinAmino[];
  uptime_trackers?: UptimeTrackerAmino[];
}
export interface TickAccumulatorTrackersResponseAminoMsg {
  type: "osmosis/concentratedliquidity/tick-accumulator-trackers-response";
  value: TickAccumulatorTrackersResponseAmino;
}
export interface TickAccumulatorTrackersResponseSDKType {
  spread_reward_growth_opposite_direction_of_last_traversal: DecCoinSDKType[];
  uptime_trackers: UptimeTrackerSDKType[];
}
/** ===================== QueryIncentiveRecords */
export interface IncentiveRecordsRequest {
  poolId: bigint;
  pagination?: PageRequest;
}
export interface IncentiveRecordsRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsRequest";
  value: Uint8Array;
}
/** ===================== QueryIncentiveRecords */
export interface IncentiveRecordsRequestAmino {
  pool_id?: string;
  pagination?: PageRequestAmino;
}
export interface IncentiveRecordsRequestAminoMsg {
  type: "osmosis/concentratedliquidity/incentive-records-request";
  value: IncentiveRecordsRequestAmino;
}
/** ===================== QueryIncentiveRecords */
export interface IncentiveRecordsRequestSDKType {
  pool_id: bigint;
  pagination?: PageRequestSDKType;
}
export interface IncentiveRecordsResponse {
  incentiveRecords: IncentiveRecord[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface IncentiveRecordsResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsResponse";
  value: Uint8Array;
}
export interface IncentiveRecordsResponseAmino {
  incentive_records?: IncentiveRecordAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface IncentiveRecordsResponseAminoMsg {
  type: "osmosis/concentratedliquidity/incentive-records-response";
  value: IncentiveRecordsResponseAmino;
}
export interface IncentiveRecordsResponseSDKType {
  incentive_records: IncentiveRecordSDKType[];
  pagination?: PageResponseSDKType;
}
/** =============================== CFMMPoolIdLinkFromConcentratedPoolId */
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequest {
  concentratedPoolId: bigint;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest";
  value: Uint8Array;
}
/** =============================== CFMMPoolIdLinkFromConcentratedPoolId */
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequestAmino {
  concentrated_pool_id?: string;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequestAminoMsg {
  type: "osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-request";
  value: CFMMPoolIdLinkFromConcentratedPoolIdRequestAmino;
}
/** =============================== CFMMPoolIdLinkFromConcentratedPoolId */
export interface CFMMPoolIdLinkFromConcentratedPoolIdRequestSDKType {
  concentrated_pool_id: bigint;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponse {
  cfmmPoolId: bigint;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse";
  value: Uint8Array;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponseAmino {
  cfmm_pool_id?: string;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponseAminoMsg {
  type: "osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-response";
  value: CFMMPoolIdLinkFromConcentratedPoolIdResponseAmino;
}
export interface CFMMPoolIdLinkFromConcentratedPoolIdResponseSDKType {
  cfmm_pool_id: bigint;
}
/** =============================== UserUnbondingPositions */
export interface UserUnbondingPositionsRequest {
  address: string;
}
export interface UserUnbondingPositionsRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest";
  value: Uint8Array;
}
/** =============================== UserUnbondingPositions */
export interface UserUnbondingPositionsRequestAmino {
  address?: string;
}
export interface UserUnbondingPositionsRequestAminoMsg {
  type: "osmosis/concentratedliquidity/user-unbonding-positions-request";
  value: UserUnbondingPositionsRequestAmino;
}
/** =============================== UserUnbondingPositions */
export interface UserUnbondingPositionsRequestSDKType {
  address: string;
}
export interface UserUnbondingPositionsResponse {
  positionsWithPeriodLock: PositionWithPeriodLock[];
}
export interface UserUnbondingPositionsResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse";
  value: Uint8Array;
}
export interface UserUnbondingPositionsResponseAmino {
  positions_with_period_lock?: PositionWithPeriodLockAmino[];
}
export interface UserUnbondingPositionsResponseAminoMsg {
  type: "osmosis/concentratedliquidity/user-unbonding-positions-response";
  value: UserUnbondingPositionsResponseAmino;
}
export interface UserUnbondingPositionsResponseSDKType {
  positions_with_period_lock: PositionWithPeriodLockSDKType[];
}
/** =============================== GetTotalLiquidity */
export interface GetTotalLiquidityRequest {}
export interface GetTotalLiquidityRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityRequest";
  value: Uint8Array;
}
/** =============================== GetTotalLiquidity */
export interface GetTotalLiquidityRequestAmino {}
export interface GetTotalLiquidityRequestAminoMsg {
  type: "osmosis/concentratedliquidity/get-total-liquidity-request";
  value: GetTotalLiquidityRequestAmino;
}
/** =============================== GetTotalLiquidity */
export interface GetTotalLiquidityRequestSDKType {}
export interface GetTotalLiquidityResponse {
  totalLiquidity: Coin[];
}
export interface GetTotalLiquidityResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityResponse";
  value: Uint8Array;
}
export interface GetTotalLiquidityResponseAmino {
  total_liquidity?: CoinAmino[];
}
export interface GetTotalLiquidityResponseAminoMsg {
  type: "osmosis/concentratedliquidity/get-total-liquidity-response";
  value: GetTotalLiquidityResponseAmino;
}
export interface GetTotalLiquidityResponseSDKType {
  total_liquidity: CoinSDKType[];
}
/** =============================== NumNextInitializedTicks */
export interface NumNextInitializedTicksRequest {
  poolId: bigint;
  tokenInDenom: string;
  numNextInitializedTicks: bigint;
}
export interface NumNextInitializedTicksRequestProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest";
  value: Uint8Array;
}
/** =============================== NumNextInitializedTicks */
export interface NumNextInitializedTicksRequestAmino {
  pool_id?: string;
  token_in_denom?: string;
  num_next_initialized_ticks?: string;
}
export interface NumNextInitializedTicksRequestAminoMsg {
  type: "osmosis/concentratedliquidity/num-next-initialized-ticks-request";
  value: NumNextInitializedTicksRequestAmino;
}
/** =============================== NumNextInitializedTicks */
export interface NumNextInitializedTicksRequestSDKType {
  pool_id: bigint;
  token_in_denom: string;
  num_next_initialized_ticks: bigint;
}
export interface NumNextInitializedTicksResponse {
  liquidityDepths: TickLiquidityNet[];
  currentTick: bigint;
  currentLiquidity: string;
}
export interface NumNextInitializedTicksResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse";
  value: Uint8Array;
}
export interface NumNextInitializedTicksResponseAmino {
  liquidity_depths?: TickLiquidityNetAmino[];
  current_tick?: string;
  current_liquidity?: string;
}
export interface NumNextInitializedTicksResponseAminoMsg {
  type: "osmosis/concentratedliquidity/num-next-initialized-ticks-response";
  value: NumNextInitializedTicksResponseAmino;
}
export interface NumNextInitializedTicksResponseSDKType {
  liquidity_depths: TickLiquidityNetSDKType[];
  current_tick: bigint;
  current_liquidity: string;
}
function createBaseUserPositionsRequest(): UserPositionsRequest {
  return {
    address: "",
    poolId: BigInt(0),
    pagination: undefined
  };
}
export const UserPositionsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsRequest",
  aminoType: "osmosis/concentratedliquidity/user-positions-request",
  is(o: any): o is UserPositionsRequest {
    return o && (o.$typeUrl === UserPositionsRequest.typeUrl || typeof o.address === "string" && typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is UserPositionsRequestSDKType {
    return o && (o.$typeUrl === UserPositionsRequest.typeUrl || typeof o.address === "string" && typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is UserPositionsRequestAmino {
    return o && (o.$typeUrl === UserPositionsRequest.typeUrl || typeof o.address === "string" && typeof o.pool_id === "bigint");
  },
  encode(message: UserPositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserPositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserPositionsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: UserPositionsRequest): JsonSafe<UserPositionsRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserPositionsRequest>, I>>(object: I): UserPositionsRequest {
    const message = createBaseUserPositionsRequest();
    message.address = object.address ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: UserPositionsRequestAmino): UserPositionsRequest {
    const message = createBaseUserPositionsRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: UserPositionsRequest): UserPositionsRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: UserPositionsRequestAminoMsg): UserPositionsRequest {
    return UserPositionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: UserPositionsRequest): UserPositionsRequestAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/user-positions-request",
      value: UserPositionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: UserPositionsRequestProtoMsg): UserPositionsRequest {
    return UserPositionsRequest.decode(message.value);
  },
  toProto(message: UserPositionsRequest): Uint8Array {
    return UserPositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: UserPositionsRequest): UserPositionsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsRequest",
      value: UserPositionsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserPositionsRequest.typeUrl, UserPositionsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(UserPositionsRequest.aminoType, UserPositionsRequest.typeUrl);
function createBaseUserPositionsResponse(): UserPositionsResponse {
  return {
    positions: [],
    pagination: undefined
  };
}
export const UserPositionsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsResponse",
  aminoType: "osmosis/concentratedliquidity/user-positions-response",
  is(o: any): o is UserPositionsResponse {
    return o && (o.$typeUrl === UserPositionsResponse.typeUrl || Array.isArray(o.positions) && (!o.positions.length || FullPositionBreakdown.is(o.positions[0])));
  },
  isSDK(o: any): o is UserPositionsResponseSDKType {
    return o && (o.$typeUrl === UserPositionsResponse.typeUrl || Array.isArray(o.positions) && (!o.positions.length || FullPositionBreakdown.isSDK(o.positions[0])));
  },
  isAmino(o: any): o is UserPositionsResponseAmino {
    return o && (o.$typeUrl === UserPositionsResponse.typeUrl || Array.isArray(o.positions) && (!o.positions.length || FullPositionBreakdown.isAmino(o.positions[0])));
  },
  encode(message: UserPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.positions) {
      FullPositionBreakdown.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(FullPositionBreakdown.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserPositionsResponse {
    return {
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => FullPositionBreakdown.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: UserPositionsResponse): JsonSafe<UserPositionsResponse> {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? FullPositionBreakdown.toJSON(e) : undefined);
    } else {
      obj.positions = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserPositionsResponse>, I>>(object: I): UserPositionsResponse {
    const message = createBaseUserPositionsResponse();
    message.positions = object.positions?.map(e => FullPositionBreakdown.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: UserPositionsResponseAmino): UserPositionsResponse {
    const message = createBaseUserPositionsResponse();
    message.positions = object.positions?.map(e => FullPositionBreakdown.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: UserPositionsResponse): UserPositionsResponseAmino {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? FullPositionBreakdown.toAmino(e) : undefined);
    } else {
      obj.positions = message.positions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: UserPositionsResponseAminoMsg): UserPositionsResponse {
    return UserPositionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: UserPositionsResponse): UserPositionsResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/user-positions-response",
      value: UserPositionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: UserPositionsResponseProtoMsg): UserPositionsResponse {
    return UserPositionsResponse.decode(message.value);
  },
  toProto(message: UserPositionsResponse): Uint8Array {
    return UserPositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: UserPositionsResponse): UserPositionsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserPositionsResponse",
      value: UserPositionsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserPositionsResponse.typeUrl, UserPositionsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(UserPositionsResponse.aminoType, UserPositionsResponse.typeUrl);
function createBasePositionByIdRequest(): PositionByIdRequest {
  return {
    positionId: BigInt(0)
  };
}
export const PositionByIdRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdRequest",
  aminoType: "osmosis/concentratedliquidity/position-by-id-request",
  is(o: any): o is PositionByIdRequest {
    return o && (o.$typeUrl === PositionByIdRequest.typeUrl || typeof o.positionId === "bigint");
  },
  isSDK(o: any): o is PositionByIdRequestSDKType {
    return o && (o.$typeUrl === PositionByIdRequest.typeUrl || typeof o.position_id === "bigint");
  },
  isAmino(o: any): o is PositionByIdRequestAmino {
    return o && (o.$typeUrl === PositionByIdRequest.typeUrl || typeof o.position_id === "bigint");
  },
  encode(message: PositionByIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionByIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PositionByIdRequest {
    return {
      positionId: isSet(object.positionId) ? BigInt(object.positionId.toString()) : BigInt(0)
    };
  },
  toJSON(message: PositionByIdRequest): JsonSafe<PositionByIdRequest> {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PositionByIdRequest>, I>>(object: I): PositionByIdRequest {
    const message = createBasePositionByIdRequest();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? BigInt(object.positionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PositionByIdRequestAmino): PositionByIdRequest {
    const message = createBasePositionByIdRequest();
    if (object.position_id !== undefined && object.position_id !== null) {
      message.positionId = BigInt(object.position_id);
    }
    return message;
  },
  toAmino(message: PositionByIdRequest): PositionByIdRequestAmino {
    const obj: any = {};
    obj.position_id = message.positionId !== BigInt(0) ? (message.positionId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionByIdRequestAminoMsg): PositionByIdRequest {
    return PositionByIdRequest.fromAmino(object.value);
  },
  toAminoMsg(message: PositionByIdRequest): PositionByIdRequestAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/position-by-id-request",
      value: PositionByIdRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: PositionByIdRequestProtoMsg): PositionByIdRequest {
    return PositionByIdRequest.decode(message.value);
  },
  toProto(message: PositionByIdRequest): Uint8Array {
    return PositionByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionByIdRequest): PositionByIdRequestProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdRequest",
      value: PositionByIdRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PositionByIdRequest.typeUrl, PositionByIdRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(PositionByIdRequest.aminoType, PositionByIdRequest.typeUrl);
function createBasePositionByIdResponse(): PositionByIdResponse {
  return {
    position: FullPositionBreakdown.fromPartial({})
  };
}
export const PositionByIdResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdResponse",
  aminoType: "osmosis/concentratedliquidity/position-by-id-response",
  is(o: any): o is PositionByIdResponse {
    return o && (o.$typeUrl === PositionByIdResponse.typeUrl || FullPositionBreakdown.is(o.position));
  },
  isSDK(o: any): o is PositionByIdResponseSDKType {
    return o && (o.$typeUrl === PositionByIdResponse.typeUrl || FullPositionBreakdown.isSDK(o.position));
  },
  isAmino(o: any): o is PositionByIdResponseAmino {
    return o && (o.$typeUrl === PositionByIdResponse.typeUrl || FullPositionBreakdown.isAmino(o.position));
  },
  encode(message: PositionByIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      FullPositionBreakdown.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionByIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = FullPositionBreakdown.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PositionByIdResponse {
    return {
      position: isSet(object.position) ? FullPositionBreakdown.fromJSON(object.position) : undefined
    };
  },
  toJSON(message: PositionByIdResponse): JsonSafe<PositionByIdResponse> {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? FullPositionBreakdown.toJSON(message.position) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PositionByIdResponse>, I>>(object: I): PositionByIdResponse {
    const message = createBasePositionByIdResponse();
    message.position = object.position !== undefined && object.position !== null ? FullPositionBreakdown.fromPartial(object.position) : undefined;
    return message;
  },
  fromAmino(object: PositionByIdResponseAmino): PositionByIdResponse {
    const message = createBasePositionByIdResponse();
    if (object.position !== undefined && object.position !== null) {
      message.position = FullPositionBreakdown.fromAmino(object.position);
    }
    return message;
  },
  toAmino(message: PositionByIdResponse): PositionByIdResponseAmino {
    const obj: any = {};
    obj.position = message.position ? FullPositionBreakdown.toAmino(message.position) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionByIdResponseAminoMsg): PositionByIdResponse {
    return PositionByIdResponse.fromAmino(object.value);
  },
  toAminoMsg(message: PositionByIdResponse): PositionByIdResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/position-by-id-response",
      value: PositionByIdResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: PositionByIdResponseProtoMsg): PositionByIdResponse {
    return PositionByIdResponse.decode(message.value);
  },
  toProto(message: PositionByIdResponse): Uint8Array {
    return PositionByIdResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionByIdResponse): PositionByIdResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PositionByIdResponse",
      value: PositionByIdResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PositionByIdResponse.typeUrl, PositionByIdResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(PositionByIdResponse.aminoType, PositionByIdResponse.typeUrl);
function createBaseNumPoolPositionsRequest(): NumPoolPositionsRequest {
  return {
    poolId: BigInt(0)
  };
}
export const NumPoolPositionsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsRequest",
  aminoType: "osmosis/concentratedliquidity/num-pool-positions-request",
  is(o: any): o is NumPoolPositionsRequest {
    return o && (o.$typeUrl === NumPoolPositionsRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is NumPoolPositionsRequestSDKType {
    return o && (o.$typeUrl === NumPoolPositionsRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is NumPoolPositionsRequestAmino {
    return o && (o.$typeUrl === NumPoolPositionsRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: NumPoolPositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumPoolPositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolPositionsRequest();
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
  fromJSON(object: any): NumPoolPositionsRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: NumPoolPositionsRequest): JsonSafe<NumPoolPositionsRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NumPoolPositionsRequest>, I>>(object: I): NumPoolPositionsRequest {
    const message = createBaseNumPoolPositionsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: NumPoolPositionsRequestAmino): NumPoolPositionsRequest {
    const message = createBaseNumPoolPositionsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: NumPoolPositionsRequest): NumPoolPositionsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: NumPoolPositionsRequestAminoMsg): NumPoolPositionsRequest {
    return NumPoolPositionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: NumPoolPositionsRequest): NumPoolPositionsRequestAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/num-pool-positions-request",
      value: NumPoolPositionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: NumPoolPositionsRequestProtoMsg): NumPoolPositionsRequest {
    return NumPoolPositionsRequest.decode(message.value);
  },
  toProto(message: NumPoolPositionsRequest): Uint8Array {
    return NumPoolPositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: NumPoolPositionsRequest): NumPoolPositionsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsRequest",
      value: NumPoolPositionsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(NumPoolPositionsRequest.typeUrl, NumPoolPositionsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(NumPoolPositionsRequest.aminoType, NumPoolPositionsRequest.typeUrl);
function createBaseNumPoolPositionsResponse(): NumPoolPositionsResponse {
  return {
    positionCount: BigInt(0)
  };
}
export const NumPoolPositionsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsResponse",
  aminoType: "osmosis/concentratedliquidity/num-pool-positions-response",
  is(o: any): o is NumPoolPositionsResponse {
    return o && (o.$typeUrl === NumPoolPositionsResponse.typeUrl || typeof o.positionCount === "bigint");
  },
  isSDK(o: any): o is NumPoolPositionsResponseSDKType {
    return o && (o.$typeUrl === NumPoolPositionsResponse.typeUrl || typeof o.position_count === "bigint");
  },
  isAmino(o: any): o is NumPoolPositionsResponseAmino {
    return o && (o.$typeUrl === NumPoolPositionsResponse.typeUrl || typeof o.position_count === "bigint");
  },
  encode(message: NumPoolPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumPoolPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NumPoolPositionsResponse {
    return {
      positionCount: isSet(object.positionCount) ? BigInt(object.positionCount.toString()) : BigInt(0)
    };
  },
  toJSON(message: NumPoolPositionsResponse): JsonSafe<NumPoolPositionsResponse> {
    const obj: any = {};
    message.positionCount !== undefined && (obj.positionCount = (message.positionCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NumPoolPositionsResponse>, I>>(object: I): NumPoolPositionsResponse {
    const message = createBaseNumPoolPositionsResponse();
    message.positionCount = object.positionCount !== undefined && object.positionCount !== null ? BigInt(object.positionCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: NumPoolPositionsResponseAmino): NumPoolPositionsResponse {
    const message = createBaseNumPoolPositionsResponse();
    if (object.position_count !== undefined && object.position_count !== null) {
      message.positionCount = BigInt(object.position_count);
    }
    return message;
  },
  toAmino(message: NumPoolPositionsResponse): NumPoolPositionsResponseAmino {
    const obj: any = {};
    obj.position_count = message.positionCount !== BigInt(0) ? (message.positionCount?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: NumPoolPositionsResponseAminoMsg): NumPoolPositionsResponse {
    return NumPoolPositionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: NumPoolPositionsResponse): NumPoolPositionsResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/num-pool-positions-response",
      value: NumPoolPositionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: NumPoolPositionsResponseProtoMsg): NumPoolPositionsResponse {
    return NumPoolPositionsResponse.decode(message.value);
  },
  toProto(message: NumPoolPositionsResponse): Uint8Array {
    return NumPoolPositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: NumPoolPositionsResponse): NumPoolPositionsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumPoolPositionsResponse",
      value: NumPoolPositionsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(NumPoolPositionsResponse.typeUrl, NumPoolPositionsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(NumPoolPositionsResponse.aminoType, NumPoolPositionsResponse.typeUrl);
function createBasePoolsRequest(): PoolsRequest {
  return {
    pagination: undefined
  };
}
export const PoolsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsRequest",
  aminoType: "osmosis/concentratedliquidity/pools-request",
  is(o: any): o is PoolsRequest {
    return o && o.$typeUrl === PoolsRequest.typeUrl;
  },
  isSDK(o: any): o is PoolsRequestSDKType {
    return o && o.$typeUrl === PoolsRequest.typeUrl;
  },
  isAmino(o: any): o is PoolsRequestAmino {
    return o && o.$typeUrl === PoolsRequest.typeUrl;
  },
  encode(message: PoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: PoolsRequest): JsonSafe<PoolsRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolsRequest>, I>>(object: I): PoolsRequest {
    const message = createBasePoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PoolsRequestAmino): PoolsRequest {
    const message = createBasePoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PoolsRequest): PoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolsRequestAminoMsg): PoolsRequest {
    return PoolsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: PoolsRequest): PoolsRequestAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/pools-request",
      value: PoolsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolsRequestProtoMsg): PoolsRequest {
    return PoolsRequest.decode(message.value);
  },
  toProto(message: PoolsRequest): Uint8Array {
    return PoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: PoolsRequest): PoolsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsRequest",
      value: PoolsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolsRequest.typeUrl, PoolsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolsRequest.aminoType, PoolsRequest.typeUrl);
function createBasePoolsResponse(): PoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const PoolsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsResponse",
  aminoType: "osmosis/concentratedliquidity/pools-response",
  is(o: any): o is PoolsResponse {
    return o && (o.$typeUrl === PoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.is(o.pools[0]) || Pool2.is(o.pools[0]) || Pool3.is(o.pools[0]) || Any.is(o.pools[0])));
  },
  isSDK(o: any): o is PoolsResponseSDKType {
    return o && (o.$typeUrl === PoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isSDK(o.pools[0]) || Pool2.isSDK(o.pools[0]) || Pool3.isSDK(o.pools[0]) || Any.isSDK(o.pools[0])));
  },
  isAmino(o: any): o is PoolsResponseAmino {
    return o && (o.$typeUrl === PoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isAmino(o.pools[0]) || Pool2.isAmino(o.pools[0]) || Pool3.isAmino(o.pools[0]) || Any.isAmino(o.pools[0])));
  },
  encode(message: PoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => GlobalDecoderRegistry.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: PoolsResponse): JsonSafe<PoolsResponse> {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolsResponse>, I>>(object: I): PoolsResponse {
    const message = createBasePoolsResponse();
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PoolsResponseAmino): PoolsResponse {
    const message = createBasePoolsResponse();
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PoolsResponse): PoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolsResponseAminoMsg): PoolsResponse {
    return PoolsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: PoolsResponse): PoolsResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/pools-response",
      value: PoolsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolsResponseProtoMsg): PoolsResponse {
    return PoolsResponse.decode(message.value);
  },
  toProto(message: PoolsResponse): Uint8Array {
    return PoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: PoolsResponse): PoolsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolsResponse",
      value: PoolsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolsResponse.typeUrl, PoolsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolsResponse.aminoType, PoolsResponse.typeUrl);
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsRequest",
  aminoType: "osmosis/concentratedliquidity/params-request",
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
      type: "osmosis/concentratedliquidity/params-request",
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
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsRequest",
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
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsResponse",
  aminoType: "osmosis/concentratedliquidity/params-response",
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
      type: "osmosis/concentratedliquidity/params-response",
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
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ParamsResponse.typeUrl, ParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsResponse.aminoType, ParamsResponse.typeUrl);
function createBaseTickLiquidityNet(): TickLiquidityNet {
  return {
    liquidityNet: "",
    tickIndex: BigInt(0)
  };
}
export const TickLiquidityNet = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickLiquidityNet",
  aminoType: "osmosis/concentratedliquidity/tick-liquidity-net",
  is(o: any): o is TickLiquidityNet {
    return o && (o.$typeUrl === TickLiquidityNet.typeUrl || typeof o.liquidityNet === "string" && typeof o.tickIndex === "bigint");
  },
  isSDK(o: any): o is TickLiquidityNetSDKType {
    return o && (o.$typeUrl === TickLiquidityNet.typeUrl || typeof o.liquidity_net === "string" && typeof o.tick_index === "bigint");
  },
  isAmino(o: any): o is TickLiquidityNetAmino {
    return o && (o.$typeUrl === TickLiquidityNet.typeUrl || typeof o.liquidity_net === "string" && typeof o.tick_index === "bigint");
  },
  encode(message: TickLiquidityNet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidityNet !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.liquidityNet, 18).atomics);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TickLiquidityNet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickLiquidityNet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityNet = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.tickIndex = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TickLiquidityNet {
    return {
      liquidityNet: isSet(object.liquidityNet) ? String(object.liquidityNet) : "",
      tickIndex: isSet(object.tickIndex) ? BigInt(object.tickIndex.toString()) : BigInt(0)
    };
  },
  toJSON(message: TickLiquidityNet): JsonSafe<TickLiquidityNet> {
    const obj: any = {};
    message.liquidityNet !== undefined && (obj.liquidityNet = message.liquidityNet);
    message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TickLiquidityNet>, I>>(object: I): TickLiquidityNet {
    const message = createBaseTickLiquidityNet();
    message.liquidityNet = object.liquidityNet ?? "";
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? BigInt(object.tickIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TickLiquidityNetAmino): TickLiquidityNet {
    const message = createBaseTickLiquidityNet();
    if (object.liquidity_net !== undefined && object.liquidity_net !== null) {
      message.liquidityNet = object.liquidity_net;
    }
    if (object.tick_index !== undefined && object.tick_index !== null) {
      message.tickIndex = BigInt(object.tick_index);
    }
    return message;
  },
  toAmino(message: TickLiquidityNet): TickLiquidityNetAmino {
    const obj: any = {};
    obj.liquidity_net = message.liquidityNet === "" ? undefined : message.liquidityNet;
    obj.tick_index = message.tickIndex !== BigInt(0) ? (message.tickIndex?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: TickLiquidityNetAminoMsg): TickLiquidityNet {
    return TickLiquidityNet.fromAmino(object.value);
  },
  toAminoMsg(message: TickLiquidityNet): TickLiquidityNetAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/tick-liquidity-net",
      value: TickLiquidityNet.toAmino(message)
    };
  },
  fromProtoMsg(message: TickLiquidityNetProtoMsg): TickLiquidityNet {
    return TickLiquidityNet.decode(message.value);
  },
  toProto(message: TickLiquidityNet): Uint8Array {
    return TickLiquidityNet.encode(message).finish();
  },
  toProtoMsg(message: TickLiquidityNet): TickLiquidityNetProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickLiquidityNet",
      value: TickLiquidityNet.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TickLiquidityNet.typeUrl, TickLiquidityNet);
GlobalDecoderRegistry.registerAminoProtoMapping(TickLiquidityNet.aminoType, TickLiquidityNet.typeUrl);
function createBaseLiquidityDepthWithRange(): LiquidityDepthWithRange {
  return {
    liquidityAmount: "",
    lowerTick: BigInt(0),
    upperTick: BigInt(0)
  };
}
export const LiquidityDepthWithRange = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityDepthWithRange",
  aminoType: "osmosis/concentratedliquidity/liquidity-depth-with-range",
  is(o: any): o is LiquidityDepthWithRange {
    return o && (o.$typeUrl === LiquidityDepthWithRange.typeUrl || typeof o.liquidityAmount === "string" && typeof o.lowerTick === "bigint" && typeof o.upperTick === "bigint");
  },
  isSDK(o: any): o is LiquidityDepthWithRangeSDKType {
    return o && (o.$typeUrl === LiquidityDepthWithRange.typeUrl || typeof o.liquidity_amount === "string" && typeof o.lower_tick === "bigint" && typeof o.upper_tick === "bigint");
  },
  isAmino(o: any): o is LiquidityDepthWithRangeAmino {
    return o && (o.$typeUrl === LiquidityDepthWithRange.typeUrl || typeof o.liquidity_amount === "string" && typeof o.lower_tick === "bigint" && typeof o.upper_tick === "bigint");
  },
  encode(message: LiquidityDepthWithRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidityAmount !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.liquidityAmount, 18).atomics);
    }
    if (message.lowerTick !== BigInt(0)) {
      writer.uint32(16).int64(message.lowerTick);
    }
    if (message.upperTick !== BigInt(0)) {
      writer.uint32(24).int64(message.upperTick);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityDepthWithRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityDepthWithRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityAmount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.lowerTick = reader.int64();
          break;
        case 3:
          message.upperTick = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidityDepthWithRange {
    return {
      liquidityAmount: isSet(object.liquidityAmount) ? String(object.liquidityAmount) : "",
      lowerTick: isSet(object.lowerTick) ? BigInt(object.lowerTick.toString()) : BigInt(0),
      upperTick: isSet(object.upperTick) ? BigInt(object.upperTick.toString()) : BigInt(0)
    };
  },
  toJSON(message: LiquidityDepthWithRange): JsonSafe<LiquidityDepthWithRange> {
    const obj: any = {};
    message.liquidityAmount !== undefined && (obj.liquidityAmount = message.liquidityAmount);
    message.lowerTick !== undefined && (obj.lowerTick = (message.lowerTick || BigInt(0)).toString());
    message.upperTick !== undefined && (obj.upperTick = (message.upperTick || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LiquidityDepthWithRange>, I>>(object: I): LiquidityDepthWithRange {
    const message = createBaseLiquidityDepthWithRange();
    message.liquidityAmount = object.liquidityAmount ?? "";
    message.lowerTick = object.lowerTick !== undefined && object.lowerTick !== null ? BigInt(object.lowerTick.toString()) : BigInt(0);
    message.upperTick = object.upperTick !== undefined && object.upperTick !== null ? BigInt(object.upperTick.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LiquidityDepthWithRangeAmino): LiquidityDepthWithRange {
    const message = createBaseLiquidityDepthWithRange();
    if (object.liquidity_amount !== undefined && object.liquidity_amount !== null) {
      message.liquidityAmount = object.liquidity_amount;
    }
    if (object.lower_tick !== undefined && object.lower_tick !== null) {
      message.lowerTick = BigInt(object.lower_tick);
    }
    if (object.upper_tick !== undefined && object.upper_tick !== null) {
      message.upperTick = BigInt(object.upper_tick);
    }
    return message;
  },
  toAmino(message: LiquidityDepthWithRange): LiquidityDepthWithRangeAmino {
    const obj: any = {};
    obj.liquidity_amount = message.liquidityAmount === "" ? undefined : message.liquidityAmount;
    obj.lower_tick = message.lowerTick !== BigInt(0) ? (message.lowerTick?.toString)() : undefined;
    obj.upper_tick = message.upperTick !== BigInt(0) ? (message.upperTick?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidityDepthWithRangeAminoMsg): LiquidityDepthWithRange {
    return LiquidityDepthWithRange.fromAmino(object.value);
  },
  toAminoMsg(message: LiquidityDepthWithRange): LiquidityDepthWithRangeAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/liquidity-depth-with-range",
      value: LiquidityDepthWithRange.toAmino(message)
    };
  },
  fromProtoMsg(message: LiquidityDepthWithRangeProtoMsg): LiquidityDepthWithRange {
    return LiquidityDepthWithRange.decode(message.value);
  },
  toProto(message: LiquidityDepthWithRange): Uint8Array {
    return LiquidityDepthWithRange.encode(message).finish();
  },
  toProtoMsg(message: LiquidityDepthWithRange): LiquidityDepthWithRangeProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityDepthWithRange",
      value: LiquidityDepthWithRange.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LiquidityDepthWithRange.typeUrl, LiquidityDepthWithRange);
GlobalDecoderRegistry.registerAminoProtoMapping(LiquidityDepthWithRange.aminoType, LiquidityDepthWithRange.typeUrl);
function createBaseLiquidityNetInDirectionRequest(): LiquidityNetInDirectionRequest {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    startTick: BigInt(0),
    useCurTick: false,
    boundTick: BigInt(0),
    useNoBound: false
  };
}
export const LiquidityNetInDirectionRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest",
  aminoType: "osmosis/concentratedliquidity/liquidity-net-in-direction-request",
  is(o: any): o is LiquidityNetInDirectionRequest {
    return o && (o.$typeUrl === LiquidityNetInDirectionRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && typeof o.startTick === "bigint" && typeof o.useCurTick === "boolean" && typeof o.boundTick === "bigint" && typeof o.useNoBound === "boolean");
  },
  isSDK(o: any): o is LiquidityNetInDirectionRequestSDKType {
    return o && (o.$typeUrl === LiquidityNetInDirectionRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.start_tick === "bigint" && typeof o.use_cur_tick === "boolean" && typeof o.bound_tick === "bigint" && typeof o.use_no_bound === "boolean");
  },
  isAmino(o: any): o is LiquidityNetInDirectionRequestAmino {
    return o && (o.$typeUrl === LiquidityNetInDirectionRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.start_tick === "bigint" && typeof o.use_cur_tick === "boolean" && typeof o.bound_tick === "bigint" && typeof o.use_no_bound === "boolean");
  },
  encode(message: LiquidityNetInDirectionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.startTick !== BigInt(0)) {
      writer.uint32(24).int64(message.startTick);
    }
    if (message.useCurTick === true) {
      writer.uint32(32).bool(message.useCurTick);
    }
    if (message.boundTick !== BigInt(0)) {
      writer.uint32(40).int64(message.boundTick);
    }
    if (message.useNoBound === true) {
      writer.uint32(48).bool(message.useNoBound);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityNetInDirectionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityNetInDirectionRequest();
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
          message.startTick = reader.int64();
          break;
        case 4:
          message.useCurTick = reader.bool();
          break;
        case 5:
          message.boundTick = reader.int64();
          break;
        case 6:
          message.useNoBound = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidityNetInDirectionRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      startTick: isSet(object.startTick) ? BigInt(object.startTick.toString()) : BigInt(0),
      useCurTick: isSet(object.useCurTick) ? Boolean(object.useCurTick) : false,
      boundTick: isSet(object.boundTick) ? BigInt(object.boundTick.toString()) : BigInt(0),
      useNoBound: isSet(object.useNoBound) ? Boolean(object.useNoBound) : false
    };
  },
  toJSON(message: LiquidityNetInDirectionRequest): JsonSafe<LiquidityNetInDirectionRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.startTick !== undefined && (obj.startTick = (message.startTick || BigInt(0)).toString());
    message.useCurTick !== undefined && (obj.useCurTick = message.useCurTick);
    message.boundTick !== undefined && (obj.boundTick = (message.boundTick || BigInt(0)).toString());
    message.useNoBound !== undefined && (obj.useNoBound = message.useNoBound);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LiquidityNetInDirectionRequest>, I>>(object: I): LiquidityNetInDirectionRequest {
    const message = createBaseLiquidityNetInDirectionRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.startTick = object.startTick !== undefined && object.startTick !== null ? BigInt(object.startTick.toString()) : BigInt(0);
    message.useCurTick = object.useCurTick ?? false;
    message.boundTick = object.boundTick !== undefined && object.boundTick !== null ? BigInt(object.boundTick.toString()) : BigInt(0);
    message.useNoBound = object.useNoBound ?? false;
    return message;
  },
  fromAmino(object: LiquidityNetInDirectionRequestAmino): LiquidityNetInDirectionRequest {
    const message = createBaseLiquidityNetInDirectionRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.start_tick !== undefined && object.start_tick !== null) {
      message.startTick = BigInt(object.start_tick);
    }
    if (object.use_cur_tick !== undefined && object.use_cur_tick !== null) {
      message.useCurTick = object.use_cur_tick;
    }
    if (object.bound_tick !== undefined && object.bound_tick !== null) {
      message.boundTick = BigInt(object.bound_tick);
    }
    if (object.use_no_bound !== undefined && object.use_no_bound !== null) {
      message.useNoBound = object.use_no_bound;
    }
    return message;
  },
  toAmino(message: LiquidityNetInDirectionRequest): LiquidityNetInDirectionRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.start_tick = message.startTick !== BigInt(0) ? (message.startTick?.toString)() : undefined;
    obj.use_cur_tick = message.useCurTick === false ? undefined : message.useCurTick;
    obj.bound_tick = message.boundTick !== BigInt(0) ? (message.boundTick?.toString)() : undefined;
    obj.use_no_bound = message.useNoBound === false ? undefined : message.useNoBound;
    return obj;
  },
  fromAminoMsg(object: LiquidityNetInDirectionRequestAminoMsg): LiquidityNetInDirectionRequest {
    return LiquidityNetInDirectionRequest.fromAmino(object.value);
  },
  toAminoMsg(message: LiquidityNetInDirectionRequest): LiquidityNetInDirectionRequestAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/liquidity-net-in-direction-request",
      value: LiquidityNetInDirectionRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: LiquidityNetInDirectionRequestProtoMsg): LiquidityNetInDirectionRequest {
    return LiquidityNetInDirectionRequest.decode(message.value);
  },
  toProto(message: LiquidityNetInDirectionRequest): Uint8Array {
    return LiquidityNetInDirectionRequest.encode(message).finish();
  },
  toProtoMsg(message: LiquidityNetInDirectionRequest): LiquidityNetInDirectionRequestProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest",
      value: LiquidityNetInDirectionRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LiquidityNetInDirectionRequest.typeUrl, LiquidityNetInDirectionRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(LiquidityNetInDirectionRequest.aminoType, LiquidityNetInDirectionRequest.typeUrl);
function createBaseLiquidityNetInDirectionResponse(): LiquidityNetInDirectionResponse {
  return {
    liquidityDepths: [],
    currentTick: BigInt(0),
    currentLiquidity: "",
    currentSqrtPrice: ""
  };
}
export const LiquidityNetInDirectionResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse",
  aminoType: "osmosis/concentratedliquidity/liquidity-net-in-direction-response",
  is(o: any): o is LiquidityNetInDirectionResponse {
    return o && (o.$typeUrl === LiquidityNetInDirectionResponse.typeUrl || Array.isArray(o.liquidityDepths) && (!o.liquidityDepths.length || TickLiquidityNet.is(o.liquidityDepths[0])) && typeof o.currentTick === "bigint" && typeof o.currentLiquidity === "string" && typeof o.currentSqrtPrice === "string");
  },
  isSDK(o: any): o is LiquidityNetInDirectionResponseSDKType {
    return o && (o.$typeUrl === LiquidityNetInDirectionResponse.typeUrl || Array.isArray(o.liquidity_depths) && (!o.liquidity_depths.length || TickLiquidityNet.isSDK(o.liquidity_depths[0])) && typeof o.current_tick === "bigint" && typeof o.current_liquidity === "string" && typeof o.current_sqrt_price === "string");
  },
  isAmino(o: any): o is LiquidityNetInDirectionResponseAmino {
    return o && (o.$typeUrl === LiquidityNetInDirectionResponse.typeUrl || Array.isArray(o.liquidity_depths) && (!o.liquidity_depths.length || TickLiquidityNet.isAmino(o.liquidity_depths[0])) && typeof o.current_tick === "bigint" && typeof o.current_liquidity === "string" && typeof o.current_sqrt_price === "string");
  },
  encode(message: LiquidityNetInDirectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidityDepths) {
      TickLiquidityNet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentTick !== BigInt(0)) {
      writer.uint32(16).int64(message.currentTick);
    }
    if (message.currentLiquidity !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.currentLiquidity, 18).atomics);
    }
    if (message.currentSqrtPrice !== "") {
      writer.uint32(34).string(message.currentSqrtPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityNetInDirectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityNetInDirectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityDepths.push(TickLiquidityNet.decode(reader, reader.uint32()));
          break;
        case 2:
          message.currentTick = reader.int64();
          break;
        case 3:
          message.currentLiquidity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.currentSqrtPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidityNetInDirectionResponse {
    return {
      liquidityDepths: Array.isArray(object?.liquidityDepths) ? object.liquidityDepths.map((e: any) => TickLiquidityNet.fromJSON(e)) : [],
      currentTick: isSet(object.currentTick) ? BigInt(object.currentTick.toString()) : BigInt(0),
      currentLiquidity: isSet(object.currentLiquidity) ? String(object.currentLiquidity) : "",
      currentSqrtPrice: isSet(object.currentSqrtPrice) ? String(object.currentSqrtPrice) : ""
    };
  },
  toJSON(message: LiquidityNetInDirectionResponse): JsonSafe<LiquidityNetInDirectionResponse> {
    const obj: any = {};
    if (message.liquidityDepths) {
      obj.liquidityDepths = message.liquidityDepths.map(e => e ? TickLiquidityNet.toJSON(e) : undefined);
    } else {
      obj.liquidityDepths = [];
    }
    message.currentTick !== undefined && (obj.currentTick = (message.currentTick || BigInt(0)).toString());
    message.currentLiquidity !== undefined && (obj.currentLiquidity = message.currentLiquidity);
    message.currentSqrtPrice !== undefined && (obj.currentSqrtPrice = message.currentSqrtPrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LiquidityNetInDirectionResponse>, I>>(object: I): LiquidityNetInDirectionResponse {
    const message = createBaseLiquidityNetInDirectionResponse();
    message.liquidityDepths = object.liquidityDepths?.map(e => TickLiquidityNet.fromPartial(e)) || [];
    message.currentTick = object.currentTick !== undefined && object.currentTick !== null ? BigInt(object.currentTick.toString()) : BigInt(0);
    message.currentLiquidity = object.currentLiquidity ?? "";
    message.currentSqrtPrice = object.currentSqrtPrice ?? "";
    return message;
  },
  fromAmino(object: LiquidityNetInDirectionResponseAmino): LiquidityNetInDirectionResponse {
    const message = createBaseLiquidityNetInDirectionResponse();
    message.liquidityDepths = object.liquidity_depths?.map(e => TickLiquidityNet.fromAmino(e)) || [];
    if (object.current_tick !== undefined && object.current_tick !== null) {
      message.currentTick = BigInt(object.current_tick);
    }
    if (object.current_liquidity !== undefined && object.current_liquidity !== null) {
      message.currentLiquidity = object.current_liquidity;
    }
    if (object.current_sqrt_price !== undefined && object.current_sqrt_price !== null) {
      message.currentSqrtPrice = object.current_sqrt_price;
    }
    return message;
  },
  toAmino(message: LiquidityNetInDirectionResponse): LiquidityNetInDirectionResponseAmino {
    const obj: any = {};
    if (message.liquidityDepths) {
      obj.liquidity_depths = message.liquidityDepths.map(e => e ? TickLiquidityNet.toAmino(e) : undefined);
    } else {
      obj.liquidity_depths = message.liquidityDepths;
    }
    obj.current_tick = message.currentTick !== BigInt(0) ? (message.currentTick?.toString)() : undefined;
    obj.current_liquidity = message.currentLiquidity === "" ? undefined : message.currentLiquidity;
    obj.current_sqrt_price = message.currentSqrtPrice === "" ? undefined : message.currentSqrtPrice;
    return obj;
  },
  fromAminoMsg(object: LiquidityNetInDirectionResponseAminoMsg): LiquidityNetInDirectionResponse {
    return LiquidityNetInDirectionResponse.fromAmino(object.value);
  },
  toAminoMsg(message: LiquidityNetInDirectionResponse): LiquidityNetInDirectionResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/liquidity-net-in-direction-response",
      value: LiquidityNetInDirectionResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: LiquidityNetInDirectionResponseProtoMsg): LiquidityNetInDirectionResponse {
    return LiquidityNetInDirectionResponse.decode(message.value);
  },
  toProto(message: LiquidityNetInDirectionResponse): Uint8Array {
    return LiquidityNetInDirectionResponse.encode(message).finish();
  },
  toProtoMsg(message: LiquidityNetInDirectionResponse): LiquidityNetInDirectionResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse",
      value: LiquidityNetInDirectionResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LiquidityNetInDirectionResponse.typeUrl, LiquidityNetInDirectionResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(LiquidityNetInDirectionResponse.aminoType, LiquidityNetInDirectionResponse.typeUrl);
function createBaseLiquidityPerTickRangeRequest(): LiquidityPerTickRangeRequest {
  return {
    poolId: BigInt(0)
  };
}
export const LiquidityPerTickRangeRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest",
  aminoType: "osmosis/concentratedliquidity/liquidity-per-tick-range-request",
  is(o: any): o is LiquidityPerTickRangeRequest {
    return o && (o.$typeUrl === LiquidityPerTickRangeRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is LiquidityPerTickRangeRequestSDKType {
    return o && (o.$typeUrl === LiquidityPerTickRangeRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is LiquidityPerTickRangeRequestAmino {
    return o && (o.$typeUrl === LiquidityPerTickRangeRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: LiquidityPerTickRangeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityPerTickRangeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityPerTickRangeRequest();
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
  fromJSON(object: any): LiquidityPerTickRangeRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: LiquidityPerTickRangeRequest): JsonSafe<LiquidityPerTickRangeRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LiquidityPerTickRangeRequest>, I>>(object: I): LiquidityPerTickRangeRequest {
    const message = createBaseLiquidityPerTickRangeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LiquidityPerTickRangeRequestAmino): LiquidityPerTickRangeRequest {
    const message = createBaseLiquidityPerTickRangeRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: LiquidityPerTickRangeRequest): LiquidityPerTickRangeRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidityPerTickRangeRequestAminoMsg): LiquidityPerTickRangeRequest {
    return LiquidityPerTickRangeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: LiquidityPerTickRangeRequest): LiquidityPerTickRangeRequestAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/liquidity-per-tick-range-request",
      value: LiquidityPerTickRangeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: LiquidityPerTickRangeRequestProtoMsg): LiquidityPerTickRangeRequest {
    return LiquidityPerTickRangeRequest.decode(message.value);
  },
  toProto(message: LiquidityPerTickRangeRequest): Uint8Array {
    return LiquidityPerTickRangeRequest.encode(message).finish();
  },
  toProtoMsg(message: LiquidityPerTickRangeRequest): LiquidityPerTickRangeRequestProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest",
      value: LiquidityPerTickRangeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LiquidityPerTickRangeRequest.typeUrl, LiquidityPerTickRangeRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(LiquidityPerTickRangeRequest.aminoType, LiquidityPerTickRangeRequest.typeUrl);
function createBaseLiquidityPerTickRangeResponse(): LiquidityPerTickRangeResponse {
  return {
    liquidity: [],
    bucketIndex: BigInt(0)
  };
}
export const LiquidityPerTickRangeResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse",
  aminoType: "osmosis/concentratedliquidity/liquidity-per-tick-range-response",
  is(o: any): o is LiquidityPerTickRangeResponse {
    return o && (o.$typeUrl === LiquidityPerTickRangeResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || LiquidityDepthWithRange.is(o.liquidity[0])) && typeof o.bucketIndex === "bigint");
  },
  isSDK(o: any): o is LiquidityPerTickRangeResponseSDKType {
    return o && (o.$typeUrl === LiquidityPerTickRangeResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || LiquidityDepthWithRange.isSDK(o.liquidity[0])) && typeof o.bucket_index === "bigint");
  },
  isAmino(o: any): o is LiquidityPerTickRangeResponseAmino {
    return o && (o.$typeUrl === LiquidityPerTickRangeResponse.typeUrl || Array.isArray(o.liquidity) && (!o.liquidity.length || LiquidityDepthWithRange.isAmino(o.liquidity[0])) && typeof o.bucket_index === "bigint");
  },
  encode(message: LiquidityPerTickRangeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      LiquidityDepthWithRange.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.bucketIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.bucketIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityPerTickRangeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityPerTickRangeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(LiquidityDepthWithRange.decode(reader, reader.uint32()));
          break;
        case 2:
          message.bucketIndex = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidityPerTickRangeResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => LiquidityDepthWithRange.fromJSON(e)) : [],
      bucketIndex: isSet(object.bucketIndex) ? BigInt(object.bucketIndex.toString()) : BigInt(0)
    };
  },
  toJSON(message: LiquidityPerTickRangeResponse): JsonSafe<LiquidityPerTickRangeResponse> {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? LiquidityDepthWithRange.toJSON(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    message.bucketIndex !== undefined && (obj.bucketIndex = (message.bucketIndex || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LiquidityPerTickRangeResponse>, I>>(object: I): LiquidityPerTickRangeResponse {
    const message = createBaseLiquidityPerTickRangeResponse();
    message.liquidity = object.liquidity?.map(e => LiquidityDepthWithRange.fromPartial(e)) || [];
    message.bucketIndex = object.bucketIndex !== undefined && object.bucketIndex !== null ? BigInt(object.bucketIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LiquidityPerTickRangeResponseAmino): LiquidityPerTickRangeResponse {
    const message = createBaseLiquidityPerTickRangeResponse();
    message.liquidity = object.liquidity?.map(e => LiquidityDepthWithRange.fromAmino(e)) || [];
    if (object.bucket_index !== undefined && object.bucket_index !== null) {
      message.bucketIndex = BigInt(object.bucket_index);
    }
    return message;
  },
  toAmino(message: LiquidityPerTickRangeResponse): LiquidityPerTickRangeResponseAmino {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? LiquidityDepthWithRange.toAmino(e) : undefined);
    } else {
      obj.liquidity = message.liquidity;
    }
    obj.bucket_index = message.bucketIndex !== BigInt(0) ? (message.bucketIndex?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidityPerTickRangeResponseAminoMsg): LiquidityPerTickRangeResponse {
    return LiquidityPerTickRangeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: LiquidityPerTickRangeResponse): LiquidityPerTickRangeResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/liquidity-per-tick-range-response",
      value: LiquidityPerTickRangeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: LiquidityPerTickRangeResponseProtoMsg): LiquidityPerTickRangeResponse {
    return LiquidityPerTickRangeResponse.decode(message.value);
  },
  toProto(message: LiquidityPerTickRangeResponse): Uint8Array {
    return LiquidityPerTickRangeResponse.encode(message).finish();
  },
  toProtoMsg(message: LiquidityPerTickRangeResponse): LiquidityPerTickRangeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse",
      value: LiquidityPerTickRangeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LiquidityPerTickRangeResponse.typeUrl, LiquidityPerTickRangeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(LiquidityPerTickRangeResponse.aminoType, LiquidityPerTickRangeResponse.typeUrl);
function createBaseClaimableSpreadRewardsRequest(): ClaimableSpreadRewardsRequest {
  return {
    positionId: BigInt(0)
  };
}
export const ClaimableSpreadRewardsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest",
  aminoType: "osmosis/concentratedliquidity/claimable-spread-rewards-request",
  is(o: any): o is ClaimableSpreadRewardsRequest {
    return o && (o.$typeUrl === ClaimableSpreadRewardsRequest.typeUrl || typeof o.positionId === "bigint");
  },
  isSDK(o: any): o is ClaimableSpreadRewardsRequestSDKType {
    return o && (o.$typeUrl === ClaimableSpreadRewardsRequest.typeUrl || typeof o.position_id === "bigint");
  },
  isAmino(o: any): o is ClaimableSpreadRewardsRequestAmino {
    return o && (o.$typeUrl === ClaimableSpreadRewardsRequest.typeUrl || typeof o.position_id === "bigint");
  },
  encode(message: ClaimableSpreadRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimableSpreadRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimableSpreadRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimableSpreadRewardsRequest {
    return {
      positionId: isSet(object.positionId) ? BigInt(object.positionId.toString()) : BigInt(0)
    };
  },
  toJSON(message: ClaimableSpreadRewardsRequest): JsonSafe<ClaimableSpreadRewardsRequest> {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ClaimableSpreadRewardsRequest>, I>>(object: I): ClaimableSpreadRewardsRequest {
    const message = createBaseClaimableSpreadRewardsRequest();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? BigInt(object.positionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ClaimableSpreadRewardsRequestAmino): ClaimableSpreadRewardsRequest {
    const message = createBaseClaimableSpreadRewardsRequest();
    if (object.position_id !== undefined && object.position_id !== null) {
      message.positionId = BigInt(object.position_id);
    }
    return message;
  },
  toAmino(message: ClaimableSpreadRewardsRequest): ClaimableSpreadRewardsRequestAmino {
    const obj: any = {};
    obj.position_id = message.positionId !== BigInt(0) ? (message.positionId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ClaimableSpreadRewardsRequestAminoMsg): ClaimableSpreadRewardsRequest {
    return ClaimableSpreadRewardsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ClaimableSpreadRewardsRequest): ClaimableSpreadRewardsRequestAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/claimable-spread-rewards-request",
      value: ClaimableSpreadRewardsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ClaimableSpreadRewardsRequestProtoMsg): ClaimableSpreadRewardsRequest {
    return ClaimableSpreadRewardsRequest.decode(message.value);
  },
  toProto(message: ClaimableSpreadRewardsRequest): Uint8Array {
    return ClaimableSpreadRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: ClaimableSpreadRewardsRequest): ClaimableSpreadRewardsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest",
      value: ClaimableSpreadRewardsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClaimableSpreadRewardsRequest.typeUrl, ClaimableSpreadRewardsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ClaimableSpreadRewardsRequest.aminoType, ClaimableSpreadRewardsRequest.typeUrl);
function createBaseClaimableSpreadRewardsResponse(): ClaimableSpreadRewardsResponse {
  return {
    claimableSpreadRewards: []
  };
}
export const ClaimableSpreadRewardsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse",
  aminoType: "osmosis/concentratedliquidity/claimable-spread-rewards-response",
  is(o: any): o is ClaimableSpreadRewardsResponse {
    return o && (o.$typeUrl === ClaimableSpreadRewardsResponse.typeUrl || Array.isArray(o.claimableSpreadRewards) && (!o.claimableSpreadRewards.length || Coin.is(o.claimableSpreadRewards[0])));
  },
  isSDK(o: any): o is ClaimableSpreadRewardsResponseSDKType {
    return o && (o.$typeUrl === ClaimableSpreadRewardsResponse.typeUrl || Array.isArray(o.claimable_spread_rewards) && (!o.claimable_spread_rewards.length || Coin.isSDK(o.claimable_spread_rewards[0])));
  },
  isAmino(o: any): o is ClaimableSpreadRewardsResponseAmino {
    return o && (o.$typeUrl === ClaimableSpreadRewardsResponse.typeUrl || Array.isArray(o.claimable_spread_rewards) && (!o.claimable_spread_rewards.length || Coin.isAmino(o.claimable_spread_rewards[0])));
  },
  encode(message: ClaimableSpreadRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claimableSpreadRewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimableSpreadRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimableSpreadRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimableSpreadRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimableSpreadRewardsResponse {
    return {
      claimableSpreadRewards: Array.isArray(object?.claimableSpreadRewards) ? object.claimableSpreadRewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: ClaimableSpreadRewardsResponse): JsonSafe<ClaimableSpreadRewardsResponse> {
    const obj: any = {};
    if (message.claimableSpreadRewards) {
      obj.claimableSpreadRewards = message.claimableSpreadRewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.claimableSpreadRewards = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ClaimableSpreadRewardsResponse>, I>>(object: I): ClaimableSpreadRewardsResponse {
    const message = createBaseClaimableSpreadRewardsResponse();
    message.claimableSpreadRewards = object.claimableSpreadRewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ClaimableSpreadRewardsResponseAmino): ClaimableSpreadRewardsResponse {
    const message = createBaseClaimableSpreadRewardsResponse();
    message.claimableSpreadRewards = object.claimable_spread_rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ClaimableSpreadRewardsResponse): ClaimableSpreadRewardsResponseAmino {
    const obj: any = {};
    if (message.claimableSpreadRewards) {
      obj.claimable_spread_rewards = message.claimableSpreadRewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimable_spread_rewards = message.claimableSpreadRewards;
    }
    return obj;
  },
  fromAminoMsg(object: ClaimableSpreadRewardsResponseAminoMsg): ClaimableSpreadRewardsResponse {
    return ClaimableSpreadRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ClaimableSpreadRewardsResponse): ClaimableSpreadRewardsResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/claimable-spread-rewards-response",
      value: ClaimableSpreadRewardsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ClaimableSpreadRewardsResponseProtoMsg): ClaimableSpreadRewardsResponse {
    return ClaimableSpreadRewardsResponse.decode(message.value);
  },
  toProto(message: ClaimableSpreadRewardsResponse): Uint8Array {
    return ClaimableSpreadRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: ClaimableSpreadRewardsResponse): ClaimableSpreadRewardsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse",
      value: ClaimableSpreadRewardsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClaimableSpreadRewardsResponse.typeUrl, ClaimableSpreadRewardsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ClaimableSpreadRewardsResponse.aminoType, ClaimableSpreadRewardsResponse.typeUrl);
function createBaseClaimableIncentivesRequest(): ClaimableIncentivesRequest {
  return {
    positionId: BigInt(0)
  };
}
export const ClaimableIncentivesRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesRequest",
  aminoType: "osmosis/concentratedliquidity/claimable-incentives-request",
  is(o: any): o is ClaimableIncentivesRequest {
    return o && (o.$typeUrl === ClaimableIncentivesRequest.typeUrl || typeof o.positionId === "bigint");
  },
  isSDK(o: any): o is ClaimableIncentivesRequestSDKType {
    return o && (o.$typeUrl === ClaimableIncentivesRequest.typeUrl || typeof o.position_id === "bigint");
  },
  isAmino(o: any): o is ClaimableIncentivesRequestAmino {
    return o && (o.$typeUrl === ClaimableIncentivesRequest.typeUrl || typeof o.position_id === "bigint");
  },
  encode(message: ClaimableIncentivesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimableIncentivesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimableIncentivesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimableIncentivesRequest {
    return {
      positionId: isSet(object.positionId) ? BigInt(object.positionId.toString()) : BigInt(0)
    };
  },
  toJSON(message: ClaimableIncentivesRequest): JsonSafe<ClaimableIncentivesRequest> {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ClaimableIncentivesRequest>, I>>(object: I): ClaimableIncentivesRequest {
    const message = createBaseClaimableIncentivesRequest();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? BigInt(object.positionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ClaimableIncentivesRequestAmino): ClaimableIncentivesRequest {
    const message = createBaseClaimableIncentivesRequest();
    if (object.position_id !== undefined && object.position_id !== null) {
      message.positionId = BigInt(object.position_id);
    }
    return message;
  },
  toAmino(message: ClaimableIncentivesRequest): ClaimableIncentivesRequestAmino {
    const obj: any = {};
    obj.position_id = message.positionId !== BigInt(0) ? (message.positionId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ClaimableIncentivesRequestAminoMsg): ClaimableIncentivesRequest {
    return ClaimableIncentivesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ClaimableIncentivesRequest): ClaimableIncentivesRequestAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/claimable-incentives-request",
      value: ClaimableIncentivesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ClaimableIncentivesRequestProtoMsg): ClaimableIncentivesRequest {
    return ClaimableIncentivesRequest.decode(message.value);
  },
  toProto(message: ClaimableIncentivesRequest): Uint8Array {
    return ClaimableIncentivesRequest.encode(message).finish();
  },
  toProtoMsg(message: ClaimableIncentivesRequest): ClaimableIncentivesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesRequest",
      value: ClaimableIncentivesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClaimableIncentivesRequest.typeUrl, ClaimableIncentivesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ClaimableIncentivesRequest.aminoType, ClaimableIncentivesRequest.typeUrl);
function createBaseClaimableIncentivesResponse(): ClaimableIncentivesResponse {
  return {
    claimableIncentives: [],
    forfeitedIncentives: []
  };
}
export const ClaimableIncentivesResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesResponse",
  aminoType: "osmosis/concentratedliquidity/claimable-incentives-response",
  is(o: any): o is ClaimableIncentivesResponse {
    return o && (o.$typeUrl === ClaimableIncentivesResponse.typeUrl || Array.isArray(o.claimableIncentives) && (!o.claimableIncentives.length || Coin.is(o.claimableIncentives[0])) && Array.isArray(o.forfeitedIncentives) && (!o.forfeitedIncentives.length || Coin.is(o.forfeitedIncentives[0])));
  },
  isSDK(o: any): o is ClaimableIncentivesResponseSDKType {
    return o && (o.$typeUrl === ClaimableIncentivesResponse.typeUrl || Array.isArray(o.claimable_incentives) && (!o.claimable_incentives.length || Coin.isSDK(o.claimable_incentives[0])) && Array.isArray(o.forfeited_incentives) && (!o.forfeited_incentives.length || Coin.isSDK(o.forfeited_incentives[0])));
  },
  isAmino(o: any): o is ClaimableIncentivesResponseAmino {
    return o && (o.$typeUrl === ClaimableIncentivesResponse.typeUrl || Array.isArray(o.claimable_incentives) && (!o.claimable_incentives.length || Coin.isAmino(o.claimable_incentives[0])) && Array.isArray(o.forfeited_incentives) && (!o.forfeited_incentives.length || Coin.isAmino(o.forfeited_incentives[0])));
  },
  encode(message: ClaimableIncentivesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claimableIncentives) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.forfeitedIncentives) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimableIncentivesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimableIncentivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimableIncentives.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.forfeitedIncentives.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimableIncentivesResponse {
    return {
      claimableIncentives: Array.isArray(object?.claimableIncentives) ? object.claimableIncentives.map((e: any) => Coin.fromJSON(e)) : [],
      forfeitedIncentives: Array.isArray(object?.forfeitedIncentives) ? object.forfeitedIncentives.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: ClaimableIncentivesResponse): JsonSafe<ClaimableIncentivesResponse> {
    const obj: any = {};
    if (message.claimableIncentives) {
      obj.claimableIncentives = message.claimableIncentives.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.claimableIncentives = [];
    }
    if (message.forfeitedIncentives) {
      obj.forfeitedIncentives = message.forfeitedIncentives.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.forfeitedIncentives = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ClaimableIncentivesResponse>, I>>(object: I): ClaimableIncentivesResponse {
    const message = createBaseClaimableIncentivesResponse();
    message.claimableIncentives = object.claimableIncentives?.map(e => Coin.fromPartial(e)) || [];
    message.forfeitedIncentives = object.forfeitedIncentives?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ClaimableIncentivesResponseAmino): ClaimableIncentivesResponse {
    const message = createBaseClaimableIncentivesResponse();
    message.claimableIncentives = object.claimable_incentives?.map(e => Coin.fromAmino(e)) || [];
    message.forfeitedIncentives = object.forfeited_incentives?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ClaimableIncentivesResponse): ClaimableIncentivesResponseAmino {
    const obj: any = {};
    if (message.claimableIncentives) {
      obj.claimable_incentives = message.claimableIncentives.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimable_incentives = message.claimableIncentives;
    }
    if (message.forfeitedIncentives) {
      obj.forfeited_incentives = message.forfeitedIncentives.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.forfeited_incentives = message.forfeitedIncentives;
    }
    return obj;
  },
  fromAminoMsg(object: ClaimableIncentivesResponseAminoMsg): ClaimableIncentivesResponse {
    return ClaimableIncentivesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ClaimableIncentivesResponse): ClaimableIncentivesResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/claimable-incentives-response",
      value: ClaimableIncentivesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ClaimableIncentivesResponseProtoMsg): ClaimableIncentivesResponse {
    return ClaimableIncentivesResponse.decode(message.value);
  },
  toProto(message: ClaimableIncentivesResponse): Uint8Array {
    return ClaimableIncentivesResponse.encode(message).finish();
  },
  toProtoMsg(message: ClaimableIncentivesResponse): ClaimableIncentivesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesResponse",
      value: ClaimableIncentivesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClaimableIncentivesResponse.typeUrl, ClaimableIncentivesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ClaimableIncentivesResponse.aminoType, ClaimableIncentivesResponse.typeUrl);
function createBasePoolAccumulatorRewardsRequest(): PoolAccumulatorRewardsRequest {
  return {
    poolId: BigInt(0)
  };
}
export const PoolAccumulatorRewardsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest",
  aminoType: "osmosis/concentratedliquidity/pool-accumulator-rewards-request",
  is(o: any): o is PoolAccumulatorRewardsRequest {
    return o && (o.$typeUrl === PoolAccumulatorRewardsRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is PoolAccumulatorRewardsRequestSDKType {
    return o && (o.$typeUrl === PoolAccumulatorRewardsRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is PoolAccumulatorRewardsRequestAmino {
    return o && (o.$typeUrl === PoolAccumulatorRewardsRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: PoolAccumulatorRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolAccumulatorRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolAccumulatorRewardsRequest();
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
  fromJSON(object: any): PoolAccumulatorRewardsRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: PoolAccumulatorRewardsRequest): JsonSafe<PoolAccumulatorRewardsRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolAccumulatorRewardsRequest>, I>>(object: I): PoolAccumulatorRewardsRequest {
    const message = createBasePoolAccumulatorRewardsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PoolAccumulatorRewardsRequestAmino): PoolAccumulatorRewardsRequest {
    const message = createBasePoolAccumulatorRewardsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: PoolAccumulatorRewardsRequest): PoolAccumulatorRewardsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolAccumulatorRewardsRequestAminoMsg): PoolAccumulatorRewardsRequest {
    return PoolAccumulatorRewardsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: PoolAccumulatorRewardsRequest): PoolAccumulatorRewardsRequestAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/pool-accumulator-rewards-request",
      value: PoolAccumulatorRewardsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolAccumulatorRewardsRequestProtoMsg): PoolAccumulatorRewardsRequest {
    return PoolAccumulatorRewardsRequest.decode(message.value);
  },
  toProto(message: PoolAccumulatorRewardsRequest): Uint8Array {
    return PoolAccumulatorRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: PoolAccumulatorRewardsRequest): PoolAccumulatorRewardsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest",
      value: PoolAccumulatorRewardsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolAccumulatorRewardsRequest.typeUrl, PoolAccumulatorRewardsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolAccumulatorRewardsRequest.aminoType, PoolAccumulatorRewardsRequest.typeUrl);
function createBasePoolAccumulatorRewardsResponse(): PoolAccumulatorRewardsResponse {
  return {
    spreadRewardGrowthGlobal: [],
    uptimeGrowthGlobal: []
  };
}
export const PoolAccumulatorRewardsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse",
  aminoType: "osmosis/concentratedliquidity/pool-accumulator-rewards-response",
  is(o: any): o is PoolAccumulatorRewardsResponse {
    return o && (o.$typeUrl === PoolAccumulatorRewardsResponse.typeUrl || Array.isArray(o.spreadRewardGrowthGlobal) && (!o.spreadRewardGrowthGlobal.length || DecCoin.is(o.spreadRewardGrowthGlobal[0])) && Array.isArray(o.uptimeGrowthGlobal) && (!o.uptimeGrowthGlobal.length || UptimeTracker.is(o.uptimeGrowthGlobal[0])));
  },
  isSDK(o: any): o is PoolAccumulatorRewardsResponseSDKType {
    return o && (o.$typeUrl === PoolAccumulatorRewardsResponse.typeUrl || Array.isArray(o.spread_reward_growth_global) && (!o.spread_reward_growth_global.length || DecCoin.isSDK(o.spread_reward_growth_global[0])) && Array.isArray(o.uptime_growth_global) && (!o.uptime_growth_global.length || UptimeTracker.isSDK(o.uptime_growth_global[0])));
  },
  isAmino(o: any): o is PoolAccumulatorRewardsResponseAmino {
    return o && (o.$typeUrl === PoolAccumulatorRewardsResponse.typeUrl || Array.isArray(o.spread_reward_growth_global) && (!o.spread_reward_growth_global.length || DecCoin.isAmino(o.spread_reward_growth_global[0])) && Array.isArray(o.uptime_growth_global) && (!o.uptime_growth_global.length || UptimeTracker.isAmino(o.uptime_growth_global[0])));
  },
  encode(message: PoolAccumulatorRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.spreadRewardGrowthGlobal) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uptimeGrowthGlobal) {
      UptimeTracker.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolAccumulatorRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolAccumulatorRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spreadRewardGrowthGlobal.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.uptimeGrowthGlobal.push(UptimeTracker.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolAccumulatorRewardsResponse {
    return {
      spreadRewardGrowthGlobal: Array.isArray(object?.spreadRewardGrowthGlobal) ? object.spreadRewardGrowthGlobal.map((e: any) => DecCoin.fromJSON(e)) : [],
      uptimeGrowthGlobal: Array.isArray(object?.uptimeGrowthGlobal) ? object.uptimeGrowthGlobal.map((e: any) => UptimeTracker.fromJSON(e)) : []
    };
  },
  toJSON(message: PoolAccumulatorRewardsResponse): JsonSafe<PoolAccumulatorRewardsResponse> {
    const obj: any = {};
    if (message.spreadRewardGrowthGlobal) {
      obj.spreadRewardGrowthGlobal = message.spreadRewardGrowthGlobal.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.spreadRewardGrowthGlobal = [];
    }
    if (message.uptimeGrowthGlobal) {
      obj.uptimeGrowthGlobal = message.uptimeGrowthGlobal.map(e => e ? UptimeTracker.toJSON(e) : undefined);
    } else {
      obj.uptimeGrowthGlobal = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolAccumulatorRewardsResponse>, I>>(object: I): PoolAccumulatorRewardsResponse {
    const message = createBasePoolAccumulatorRewardsResponse();
    message.spreadRewardGrowthGlobal = object.spreadRewardGrowthGlobal?.map(e => DecCoin.fromPartial(e)) || [];
    message.uptimeGrowthGlobal = object.uptimeGrowthGlobal?.map(e => UptimeTracker.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PoolAccumulatorRewardsResponseAmino): PoolAccumulatorRewardsResponse {
    const message = createBasePoolAccumulatorRewardsResponse();
    message.spreadRewardGrowthGlobal = object.spread_reward_growth_global?.map(e => DecCoin.fromAmino(e)) || [];
    message.uptimeGrowthGlobal = object.uptime_growth_global?.map(e => UptimeTracker.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PoolAccumulatorRewardsResponse): PoolAccumulatorRewardsResponseAmino {
    const obj: any = {};
    if (message.spreadRewardGrowthGlobal) {
      obj.spread_reward_growth_global = message.spreadRewardGrowthGlobal.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.spread_reward_growth_global = message.spreadRewardGrowthGlobal;
    }
    if (message.uptimeGrowthGlobal) {
      obj.uptime_growth_global = message.uptimeGrowthGlobal.map(e => e ? UptimeTracker.toAmino(e) : undefined);
    } else {
      obj.uptime_growth_global = message.uptimeGrowthGlobal;
    }
    return obj;
  },
  fromAminoMsg(object: PoolAccumulatorRewardsResponseAminoMsg): PoolAccumulatorRewardsResponse {
    return PoolAccumulatorRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: PoolAccumulatorRewardsResponse): PoolAccumulatorRewardsResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/pool-accumulator-rewards-response",
      value: PoolAccumulatorRewardsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolAccumulatorRewardsResponseProtoMsg): PoolAccumulatorRewardsResponse {
    return PoolAccumulatorRewardsResponse.decode(message.value);
  },
  toProto(message: PoolAccumulatorRewardsResponse): Uint8Array {
    return PoolAccumulatorRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: PoolAccumulatorRewardsResponse): PoolAccumulatorRewardsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse",
      value: PoolAccumulatorRewardsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolAccumulatorRewardsResponse.typeUrl, PoolAccumulatorRewardsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolAccumulatorRewardsResponse.aminoType, PoolAccumulatorRewardsResponse.typeUrl);
function createBaseTickAccumulatorTrackersRequest(): TickAccumulatorTrackersRequest {
  return {
    poolId: BigInt(0),
    tickIndex: BigInt(0)
  };
}
export const TickAccumulatorTrackersRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest",
  aminoType: "osmosis/concentratedliquidity/tick-accumulator-trackers-request",
  is(o: any): o is TickAccumulatorTrackersRequest {
    return o && (o.$typeUrl === TickAccumulatorTrackersRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.tickIndex === "bigint");
  },
  isSDK(o: any): o is TickAccumulatorTrackersRequestSDKType {
    return o && (o.$typeUrl === TickAccumulatorTrackersRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.tick_index === "bigint");
  },
  isAmino(o: any): o is TickAccumulatorTrackersRequestAmino {
    return o && (o.$typeUrl === TickAccumulatorTrackersRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.tick_index === "bigint");
  },
  encode(message: TickAccumulatorTrackersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TickAccumulatorTrackersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickAccumulatorTrackersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tickIndex = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TickAccumulatorTrackersRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tickIndex: isSet(object.tickIndex) ? BigInt(object.tickIndex.toString()) : BigInt(0)
    };
  },
  toJSON(message: TickAccumulatorTrackersRequest): JsonSafe<TickAccumulatorTrackersRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TickAccumulatorTrackersRequest>, I>>(object: I): TickAccumulatorTrackersRequest {
    const message = createBaseTickAccumulatorTrackersRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? BigInt(object.tickIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TickAccumulatorTrackersRequestAmino): TickAccumulatorTrackersRequest {
    const message = createBaseTickAccumulatorTrackersRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.tick_index !== undefined && object.tick_index !== null) {
      message.tickIndex = BigInt(object.tick_index);
    }
    return message;
  },
  toAmino(message: TickAccumulatorTrackersRequest): TickAccumulatorTrackersRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.tick_index = message.tickIndex !== BigInt(0) ? (message.tickIndex?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: TickAccumulatorTrackersRequestAminoMsg): TickAccumulatorTrackersRequest {
    return TickAccumulatorTrackersRequest.fromAmino(object.value);
  },
  toAminoMsg(message: TickAccumulatorTrackersRequest): TickAccumulatorTrackersRequestAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/tick-accumulator-trackers-request",
      value: TickAccumulatorTrackersRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: TickAccumulatorTrackersRequestProtoMsg): TickAccumulatorTrackersRequest {
    return TickAccumulatorTrackersRequest.decode(message.value);
  },
  toProto(message: TickAccumulatorTrackersRequest): Uint8Array {
    return TickAccumulatorTrackersRequest.encode(message).finish();
  },
  toProtoMsg(message: TickAccumulatorTrackersRequest): TickAccumulatorTrackersRequestProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest",
      value: TickAccumulatorTrackersRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TickAccumulatorTrackersRequest.typeUrl, TickAccumulatorTrackersRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(TickAccumulatorTrackersRequest.aminoType, TickAccumulatorTrackersRequest.typeUrl);
function createBaseTickAccumulatorTrackersResponse(): TickAccumulatorTrackersResponse {
  return {
    spreadRewardGrowthOppositeDirectionOfLastTraversal: [],
    uptimeTrackers: []
  };
}
export const TickAccumulatorTrackersResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse",
  aminoType: "osmosis/concentratedliquidity/tick-accumulator-trackers-response",
  is(o: any): o is TickAccumulatorTrackersResponse {
    return o && (o.$typeUrl === TickAccumulatorTrackersResponse.typeUrl || Array.isArray(o.spreadRewardGrowthOppositeDirectionOfLastTraversal) && (!o.spreadRewardGrowthOppositeDirectionOfLastTraversal.length || DecCoin.is(o.spreadRewardGrowthOppositeDirectionOfLastTraversal[0])) && Array.isArray(o.uptimeTrackers) && (!o.uptimeTrackers.length || UptimeTracker.is(o.uptimeTrackers[0])));
  },
  isSDK(o: any): o is TickAccumulatorTrackersResponseSDKType {
    return o && (o.$typeUrl === TickAccumulatorTrackersResponse.typeUrl || Array.isArray(o.spread_reward_growth_opposite_direction_of_last_traversal) && (!o.spread_reward_growth_opposite_direction_of_last_traversal.length || DecCoin.isSDK(o.spread_reward_growth_opposite_direction_of_last_traversal[0])) && Array.isArray(o.uptime_trackers) && (!o.uptime_trackers.length || UptimeTracker.isSDK(o.uptime_trackers[0])));
  },
  isAmino(o: any): o is TickAccumulatorTrackersResponseAmino {
    return o && (o.$typeUrl === TickAccumulatorTrackersResponse.typeUrl || Array.isArray(o.spread_reward_growth_opposite_direction_of_last_traversal) && (!o.spread_reward_growth_opposite_direction_of_last_traversal.length || DecCoin.isAmino(o.spread_reward_growth_opposite_direction_of_last_traversal[0])) && Array.isArray(o.uptime_trackers) && (!o.uptime_trackers.length || UptimeTracker.isAmino(o.uptime_trackers[0])));
  },
  encode(message: TickAccumulatorTrackersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uptimeTrackers) {
      UptimeTracker.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TickAccumulatorTrackersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickAccumulatorTrackersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spreadRewardGrowthOppositeDirectionOfLastTraversal.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.uptimeTrackers.push(UptimeTracker.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TickAccumulatorTrackersResponse {
    return {
      spreadRewardGrowthOppositeDirectionOfLastTraversal: Array.isArray(object?.spreadRewardGrowthOppositeDirectionOfLastTraversal) ? object.spreadRewardGrowthOppositeDirectionOfLastTraversal.map((e: any) => DecCoin.fromJSON(e)) : [],
      uptimeTrackers: Array.isArray(object?.uptimeTrackers) ? object.uptimeTrackers.map((e: any) => UptimeTracker.fromJSON(e)) : []
    };
  },
  toJSON(message: TickAccumulatorTrackersResponse): JsonSafe<TickAccumulatorTrackersResponse> {
    const obj: any = {};
    if (message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
      obj.spreadRewardGrowthOppositeDirectionOfLastTraversal = message.spreadRewardGrowthOppositeDirectionOfLastTraversal.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.spreadRewardGrowthOppositeDirectionOfLastTraversal = [];
    }
    if (message.uptimeTrackers) {
      obj.uptimeTrackers = message.uptimeTrackers.map(e => e ? UptimeTracker.toJSON(e) : undefined);
    } else {
      obj.uptimeTrackers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TickAccumulatorTrackersResponse>, I>>(object: I): TickAccumulatorTrackersResponse {
    const message = createBaseTickAccumulatorTrackersResponse();
    message.spreadRewardGrowthOppositeDirectionOfLastTraversal = object.spreadRewardGrowthOppositeDirectionOfLastTraversal?.map(e => DecCoin.fromPartial(e)) || [];
    message.uptimeTrackers = object.uptimeTrackers?.map(e => UptimeTracker.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TickAccumulatorTrackersResponseAmino): TickAccumulatorTrackersResponse {
    const message = createBaseTickAccumulatorTrackersResponse();
    message.spreadRewardGrowthOppositeDirectionOfLastTraversal = object.spread_reward_growth_opposite_direction_of_last_traversal?.map(e => DecCoin.fromAmino(e)) || [];
    message.uptimeTrackers = object.uptime_trackers?.map(e => UptimeTracker.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TickAccumulatorTrackersResponse): TickAccumulatorTrackersResponseAmino {
    const obj: any = {};
    if (message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
      obj.spread_reward_growth_opposite_direction_of_last_traversal = message.spreadRewardGrowthOppositeDirectionOfLastTraversal.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.spread_reward_growth_opposite_direction_of_last_traversal = message.spreadRewardGrowthOppositeDirectionOfLastTraversal;
    }
    if (message.uptimeTrackers) {
      obj.uptime_trackers = message.uptimeTrackers.map(e => e ? UptimeTracker.toAmino(e) : undefined);
    } else {
      obj.uptime_trackers = message.uptimeTrackers;
    }
    return obj;
  },
  fromAminoMsg(object: TickAccumulatorTrackersResponseAminoMsg): TickAccumulatorTrackersResponse {
    return TickAccumulatorTrackersResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TickAccumulatorTrackersResponse): TickAccumulatorTrackersResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/tick-accumulator-trackers-response",
      value: TickAccumulatorTrackersResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TickAccumulatorTrackersResponseProtoMsg): TickAccumulatorTrackersResponse {
    return TickAccumulatorTrackersResponse.decode(message.value);
  },
  toProto(message: TickAccumulatorTrackersResponse): Uint8Array {
    return TickAccumulatorTrackersResponse.encode(message).finish();
  },
  toProtoMsg(message: TickAccumulatorTrackersResponse): TickAccumulatorTrackersResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse",
      value: TickAccumulatorTrackersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TickAccumulatorTrackersResponse.typeUrl, TickAccumulatorTrackersResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(TickAccumulatorTrackersResponse.aminoType, TickAccumulatorTrackersResponse.typeUrl);
function createBaseIncentiveRecordsRequest(): IncentiveRecordsRequest {
  return {
    poolId: BigInt(0),
    pagination: undefined
  };
}
export const IncentiveRecordsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsRequest",
  aminoType: "osmosis/concentratedliquidity/incentive-records-request",
  is(o: any): o is IncentiveRecordsRequest {
    return o && (o.$typeUrl === IncentiveRecordsRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is IncentiveRecordsRequestSDKType {
    return o && (o.$typeUrl === IncentiveRecordsRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is IncentiveRecordsRequestAmino {
    return o && (o.$typeUrl === IncentiveRecordsRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: IncentiveRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentiveRecordsRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: IncentiveRecordsRequest): JsonSafe<IncentiveRecordsRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IncentiveRecordsRequest>, I>>(object: I): IncentiveRecordsRequest {
    const message = createBaseIncentiveRecordsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: IncentiveRecordsRequestAmino): IncentiveRecordsRequest {
    const message = createBaseIncentiveRecordsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: IncentiveRecordsRequest): IncentiveRecordsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: IncentiveRecordsRequestAminoMsg): IncentiveRecordsRequest {
    return IncentiveRecordsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: IncentiveRecordsRequest): IncentiveRecordsRequestAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/incentive-records-request",
      value: IncentiveRecordsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: IncentiveRecordsRequestProtoMsg): IncentiveRecordsRequest {
    return IncentiveRecordsRequest.decode(message.value);
  },
  toProto(message: IncentiveRecordsRequest): Uint8Array {
    return IncentiveRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: IncentiveRecordsRequest): IncentiveRecordsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsRequest",
      value: IncentiveRecordsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(IncentiveRecordsRequest.typeUrl, IncentiveRecordsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(IncentiveRecordsRequest.aminoType, IncentiveRecordsRequest.typeUrl);
function createBaseIncentiveRecordsResponse(): IncentiveRecordsResponse {
  return {
    incentiveRecords: [],
    pagination: undefined
  };
}
export const IncentiveRecordsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsResponse",
  aminoType: "osmosis/concentratedliquidity/incentive-records-response",
  is(o: any): o is IncentiveRecordsResponse {
    return o && (o.$typeUrl === IncentiveRecordsResponse.typeUrl || Array.isArray(o.incentiveRecords) && (!o.incentiveRecords.length || IncentiveRecord.is(o.incentiveRecords[0])));
  },
  isSDK(o: any): o is IncentiveRecordsResponseSDKType {
    return o && (o.$typeUrl === IncentiveRecordsResponse.typeUrl || Array.isArray(o.incentive_records) && (!o.incentive_records.length || IncentiveRecord.isSDK(o.incentive_records[0])));
  },
  isAmino(o: any): o is IncentiveRecordsResponseAmino {
    return o && (o.$typeUrl === IncentiveRecordsResponse.typeUrl || Array.isArray(o.incentive_records) && (!o.incentive_records.length || IncentiveRecord.isAmino(o.incentive_records[0])));
  },
  encode(message: IncentiveRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.incentiveRecords) {
      IncentiveRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentiveRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentiveRecords.push(IncentiveRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentiveRecordsResponse {
    return {
      incentiveRecords: Array.isArray(object?.incentiveRecords) ? object.incentiveRecords.map((e: any) => IncentiveRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: IncentiveRecordsResponse): JsonSafe<IncentiveRecordsResponse> {
    const obj: any = {};
    if (message.incentiveRecords) {
      obj.incentiveRecords = message.incentiveRecords.map(e => e ? IncentiveRecord.toJSON(e) : undefined);
    } else {
      obj.incentiveRecords = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IncentiveRecordsResponse>, I>>(object: I): IncentiveRecordsResponse {
    const message = createBaseIncentiveRecordsResponse();
    message.incentiveRecords = object.incentiveRecords?.map(e => IncentiveRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: IncentiveRecordsResponseAmino): IncentiveRecordsResponse {
    const message = createBaseIncentiveRecordsResponse();
    message.incentiveRecords = object.incentive_records?.map(e => IncentiveRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: IncentiveRecordsResponse): IncentiveRecordsResponseAmino {
    const obj: any = {};
    if (message.incentiveRecords) {
      obj.incentive_records = message.incentiveRecords.map(e => e ? IncentiveRecord.toAmino(e) : undefined);
    } else {
      obj.incentive_records = message.incentiveRecords;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: IncentiveRecordsResponseAminoMsg): IncentiveRecordsResponse {
    return IncentiveRecordsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: IncentiveRecordsResponse): IncentiveRecordsResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/incentive-records-response",
      value: IncentiveRecordsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: IncentiveRecordsResponseProtoMsg): IncentiveRecordsResponse {
    return IncentiveRecordsResponse.decode(message.value);
  },
  toProto(message: IncentiveRecordsResponse): Uint8Array {
    return IncentiveRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: IncentiveRecordsResponse): IncentiveRecordsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordsResponse",
      value: IncentiveRecordsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(IncentiveRecordsResponse.typeUrl, IncentiveRecordsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(IncentiveRecordsResponse.aminoType, IncentiveRecordsResponse.typeUrl);
function createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest(): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
  return {
    concentratedPoolId: BigInt(0)
  };
}
export const CFMMPoolIdLinkFromConcentratedPoolIdRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest",
  aminoType: "osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-request",
  is(o: any): o is CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    return o && (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl || typeof o.concentratedPoolId === "bigint");
  },
  isSDK(o: any): o is CFMMPoolIdLinkFromConcentratedPoolIdRequestSDKType {
    return o && (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl || typeof o.concentrated_pool_id === "bigint");
  },
  isAmino(o: any): o is CFMMPoolIdLinkFromConcentratedPoolIdRequestAmino {
    return o && (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl || typeof o.concentrated_pool_id === "bigint");
  },
  encode(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.concentratedPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.concentratedPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.concentratedPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    return {
      concentratedPoolId: isSet(object.concentratedPoolId) ? BigInt(object.concentratedPoolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest): JsonSafe<CFMMPoolIdLinkFromConcentratedPoolIdRequest> {
    const obj: any = {};
    message.concentratedPoolId !== undefined && (obj.concentratedPoolId = (message.concentratedPoolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CFMMPoolIdLinkFromConcentratedPoolIdRequest>, I>>(object: I): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest();
    message.concentratedPoolId = object.concentratedPoolId !== undefined && object.concentratedPoolId !== null ? BigInt(object.concentratedPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CFMMPoolIdLinkFromConcentratedPoolIdRequestAmino): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdRequest();
    if (object.concentrated_pool_id !== undefined && object.concentrated_pool_id !== null) {
      message.concentratedPoolId = BigInt(object.concentrated_pool_id);
    }
    return message;
  },
  toAmino(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest): CFMMPoolIdLinkFromConcentratedPoolIdRequestAmino {
    const obj: any = {};
    obj.concentrated_pool_id = message.concentratedPoolId !== BigInt(0) ? (message.concentratedPoolId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: CFMMPoolIdLinkFromConcentratedPoolIdRequestAminoMsg): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    return CFMMPoolIdLinkFromConcentratedPoolIdRequest.fromAmino(object.value);
  },
  toAminoMsg(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest): CFMMPoolIdLinkFromConcentratedPoolIdRequestAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-request",
      value: CFMMPoolIdLinkFromConcentratedPoolIdRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: CFMMPoolIdLinkFromConcentratedPoolIdRequestProtoMsg): CFMMPoolIdLinkFromConcentratedPoolIdRequest {
    return CFMMPoolIdLinkFromConcentratedPoolIdRequest.decode(message.value);
  },
  toProto(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest): Uint8Array {
    return CFMMPoolIdLinkFromConcentratedPoolIdRequest.encode(message).finish();
  },
  toProtoMsg(message: CFMMPoolIdLinkFromConcentratedPoolIdRequest): CFMMPoolIdLinkFromConcentratedPoolIdRequestProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest",
      value: CFMMPoolIdLinkFromConcentratedPoolIdRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl, CFMMPoolIdLinkFromConcentratedPoolIdRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(CFMMPoolIdLinkFromConcentratedPoolIdRequest.aminoType, CFMMPoolIdLinkFromConcentratedPoolIdRequest.typeUrl);
function createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse(): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
  return {
    cfmmPoolId: BigInt(0)
  };
}
export const CFMMPoolIdLinkFromConcentratedPoolIdResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse",
  aminoType: "osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-response",
  is(o: any): o is CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    return o && (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl || typeof o.cfmmPoolId === "bigint");
  },
  isSDK(o: any): o is CFMMPoolIdLinkFromConcentratedPoolIdResponseSDKType {
    return o && (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl || typeof o.cfmm_pool_id === "bigint");
  },
  isAmino(o: any): o is CFMMPoolIdLinkFromConcentratedPoolIdResponseAmino {
    return o && (o.$typeUrl === CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl || typeof o.cfmm_pool_id === "bigint");
  },
  encode(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cfmmPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.cfmmPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cfmmPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    return {
      cfmmPoolId: isSet(object.cfmmPoolId) ? BigInt(object.cfmmPoolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse): JsonSafe<CFMMPoolIdLinkFromConcentratedPoolIdResponse> {
    const obj: any = {};
    message.cfmmPoolId !== undefined && (obj.cfmmPoolId = (message.cfmmPoolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CFMMPoolIdLinkFromConcentratedPoolIdResponse>, I>>(object: I): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse();
    message.cfmmPoolId = object.cfmmPoolId !== undefined && object.cfmmPoolId !== null ? BigInt(object.cfmmPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CFMMPoolIdLinkFromConcentratedPoolIdResponseAmino): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    const message = createBaseCFMMPoolIdLinkFromConcentratedPoolIdResponse();
    if (object.cfmm_pool_id !== undefined && object.cfmm_pool_id !== null) {
      message.cfmmPoolId = BigInt(object.cfmm_pool_id);
    }
    return message;
  },
  toAmino(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse): CFMMPoolIdLinkFromConcentratedPoolIdResponseAmino {
    const obj: any = {};
    obj.cfmm_pool_id = message.cfmmPoolId !== BigInt(0) ? (message.cfmmPoolId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: CFMMPoolIdLinkFromConcentratedPoolIdResponseAminoMsg): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    return CFMMPoolIdLinkFromConcentratedPoolIdResponse.fromAmino(object.value);
  },
  toAminoMsg(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse): CFMMPoolIdLinkFromConcentratedPoolIdResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/cfmmpool-id-link-from-concentrated-pool-id-response",
      value: CFMMPoolIdLinkFromConcentratedPoolIdResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: CFMMPoolIdLinkFromConcentratedPoolIdResponseProtoMsg): CFMMPoolIdLinkFromConcentratedPoolIdResponse {
    return CFMMPoolIdLinkFromConcentratedPoolIdResponse.decode(message.value);
  },
  toProto(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse): Uint8Array {
    return CFMMPoolIdLinkFromConcentratedPoolIdResponse.encode(message).finish();
  },
  toProtoMsg(message: CFMMPoolIdLinkFromConcentratedPoolIdResponse): CFMMPoolIdLinkFromConcentratedPoolIdResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse",
      value: CFMMPoolIdLinkFromConcentratedPoolIdResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl, CFMMPoolIdLinkFromConcentratedPoolIdResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(CFMMPoolIdLinkFromConcentratedPoolIdResponse.aminoType, CFMMPoolIdLinkFromConcentratedPoolIdResponse.typeUrl);
function createBaseUserUnbondingPositionsRequest(): UserUnbondingPositionsRequest {
  return {
    address: ""
  };
}
export const UserUnbondingPositionsRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest",
  aminoType: "osmosis/concentratedliquidity/user-unbonding-positions-request",
  is(o: any): o is UserUnbondingPositionsRequest {
    return o && (o.$typeUrl === UserUnbondingPositionsRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is UserUnbondingPositionsRequestSDKType {
    return o && (o.$typeUrl === UserUnbondingPositionsRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is UserUnbondingPositionsRequestAmino {
    return o && (o.$typeUrl === UserUnbondingPositionsRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: UserUnbondingPositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserUnbondingPositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUnbondingPositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserUnbondingPositionsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: UserUnbondingPositionsRequest): JsonSafe<UserUnbondingPositionsRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserUnbondingPositionsRequest>, I>>(object: I): UserUnbondingPositionsRequest {
    const message = createBaseUserUnbondingPositionsRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: UserUnbondingPositionsRequestAmino): UserUnbondingPositionsRequest {
    const message = createBaseUserUnbondingPositionsRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: UserUnbondingPositionsRequest): UserUnbondingPositionsRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: UserUnbondingPositionsRequestAminoMsg): UserUnbondingPositionsRequest {
    return UserUnbondingPositionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: UserUnbondingPositionsRequest): UserUnbondingPositionsRequestAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/user-unbonding-positions-request",
      value: UserUnbondingPositionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: UserUnbondingPositionsRequestProtoMsg): UserUnbondingPositionsRequest {
    return UserUnbondingPositionsRequest.decode(message.value);
  },
  toProto(message: UserUnbondingPositionsRequest): Uint8Array {
    return UserUnbondingPositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: UserUnbondingPositionsRequest): UserUnbondingPositionsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest",
      value: UserUnbondingPositionsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserUnbondingPositionsRequest.typeUrl, UserUnbondingPositionsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(UserUnbondingPositionsRequest.aminoType, UserUnbondingPositionsRequest.typeUrl);
function createBaseUserUnbondingPositionsResponse(): UserUnbondingPositionsResponse {
  return {
    positionsWithPeriodLock: []
  };
}
export const UserUnbondingPositionsResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse",
  aminoType: "osmosis/concentratedliquidity/user-unbonding-positions-response",
  is(o: any): o is UserUnbondingPositionsResponse {
    return o && (o.$typeUrl === UserUnbondingPositionsResponse.typeUrl || Array.isArray(o.positionsWithPeriodLock) && (!o.positionsWithPeriodLock.length || PositionWithPeriodLock.is(o.positionsWithPeriodLock[0])));
  },
  isSDK(o: any): o is UserUnbondingPositionsResponseSDKType {
    return o && (o.$typeUrl === UserUnbondingPositionsResponse.typeUrl || Array.isArray(o.positions_with_period_lock) && (!o.positions_with_period_lock.length || PositionWithPeriodLock.isSDK(o.positions_with_period_lock[0])));
  },
  isAmino(o: any): o is UserUnbondingPositionsResponseAmino {
    return o && (o.$typeUrl === UserUnbondingPositionsResponse.typeUrl || Array.isArray(o.positions_with_period_lock) && (!o.positions_with_period_lock.length || PositionWithPeriodLock.isAmino(o.positions_with_period_lock[0])));
  },
  encode(message: UserUnbondingPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.positionsWithPeriodLock) {
      PositionWithPeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserUnbondingPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUnbondingPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionsWithPeriodLock.push(PositionWithPeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserUnbondingPositionsResponse {
    return {
      positionsWithPeriodLock: Array.isArray(object?.positionsWithPeriodLock) ? object.positionsWithPeriodLock.map((e: any) => PositionWithPeriodLock.fromJSON(e)) : []
    };
  },
  toJSON(message: UserUnbondingPositionsResponse): JsonSafe<UserUnbondingPositionsResponse> {
    const obj: any = {};
    if (message.positionsWithPeriodLock) {
      obj.positionsWithPeriodLock = message.positionsWithPeriodLock.map(e => e ? PositionWithPeriodLock.toJSON(e) : undefined);
    } else {
      obj.positionsWithPeriodLock = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserUnbondingPositionsResponse>, I>>(object: I): UserUnbondingPositionsResponse {
    const message = createBaseUserUnbondingPositionsResponse();
    message.positionsWithPeriodLock = object.positionsWithPeriodLock?.map(e => PositionWithPeriodLock.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UserUnbondingPositionsResponseAmino): UserUnbondingPositionsResponse {
    const message = createBaseUserUnbondingPositionsResponse();
    message.positionsWithPeriodLock = object.positions_with_period_lock?.map(e => PositionWithPeriodLock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UserUnbondingPositionsResponse): UserUnbondingPositionsResponseAmino {
    const obj: any = {};
    if (message.positionsWithPeriodLock) {
      obj.positions_with_period_lock = message.positionsWithPeriodLock.map(e => e ? PositionWithPeriodLock.toAmino(e) : undefined);
    } else {
      obj.positions_with_period_lock = message.positionsWithPeriodLock;
    }
    return obj;
  },
  fromAminoMsg(object: UserUnbondingPositionsResponseAminoMsg): UserUnbondingPositionsResponse {
    return UserUnbondingPositionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: UserUnbondingPositionsResponse): UserUnbondingPositionsResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/user-unbonding-positions-response",
      value: UserUnbondingPositionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: UserUnbondingPositionsResponseProtoMsg): UserUnbondingPositionsResponse {
    return UserUnbondingPositionsResponse.decode(message.value);
  },
  toProto(message: UserUnbondingPositionsResponse): Uint8Array {
    return UserUnbondingPositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: UserUnbondingPositionsResponse): UserUnbondingPositionsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse",
      value: UserUnbondingPositionsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserUnbondingPositionsResponse.typeUrl, UserUnbondingPositionsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(UserUnbondingPositionsResponse.aminoType, UserUnbondingPositionsResponse.typeUrl);
function createBaseGetTotalLiquidityRequest(): GetTotalLiquidityRequest {
  return {};
}
export const GetTotalLiquidityRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityRequest",
  aminoType: "osmosis/concentratedliquidity/get-total-liquidity-request",
  is(o: any): o is GetTotalLiquidityRequest {
    return o && o.$typeUrl === GetTotalLiquidityRequest.typeUrl;
  },
  isSDK(o: any): o is GetTotalLiquidityRequestSDKType {
    return o && o.$typeUrl === GetTotalLiquidityRequest.typeUrl;
  },
  isAmino(o: any): o is GetTotalLiquidityRequestAmino {
    return o && o.$typeUrl === GetTotalLiquidityRequest.typeUrl;
  },
  encode(_: GetTotalLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTotalLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTotalLiquidityRequest();
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
  fromJSON(_: any): GetTotalLiquidityRequest {
    return {};
  },
  toJSON(_: GetTotalLiquidityRequest): JsonSafe<GetTotalLiquidityRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetTotalLiquidityRequest>, I>>(_: I): GetTotalLiquidityRequest {
    const message = createBaseGetTotalLiquidityRequest();
    return message;
  },
  fromAmino(_: GetTotalLiquidityRequestAmino): GetTotalLiquidityRequest {
    const message = createBaseGetTotalLiquidityRequest();
    return message;
  },
  toAmino(_: GetTotalLiquidityRequest): GetTotalLiquidityRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetTotalLiquidityRequestAminoMsg): GetTotalLiquidityRequest {
    return GetTotalLiquidityRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetTotalLiquidityRequest): GetTotalLiquidityRequestAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/get-total-liquidity-request",
      value: GetTotalLiquidityRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTotalLiquidityRequestProtoMsg): GetTotalLiquidityRequest {
    return GetTotalLiquidityRequest.decode(message.value);
  },
  toProto(message: GetTotalLiquidityRequest): Uint8Array {
    return GetTotalLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: GetTotalLiquidityRequest): GetTotalLiquidityRequestProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityRequest",
      value: GetTotalLiquidityRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetTotalLiquidityRequest.typeUrl, GetTotalLiquidityRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetTotalLiquidityRequest.aminoType, GetTotalLiquidityRequest.typeUrl);
function createBaseGetTotalLiquidityResponse(): GetTotalLiquidityResponse {
  return {
    totalLiquidity: []
  };
}
export const GetTotalLiquidityResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityResponse",
  aminoType: "osmosis/concentratedliquidity/get-total-liquidity-response",
  is(o: any): o is GetTotalLiquidityResponse {
    return o && (o.$typeUrl === GetTotalLiquidityResponse.typeUrl || Array.isArray(o.totalLiquidity) && (!o.totalLiquidity.length || Coin.is(o.totalLiquidity[0])));
  },
  isSDK(o: any): o is GetTotalLiquidityResponseSDKType {
    return o && (o.$typeUrl === GetTotalLiquidityResponse.typeUrl || Array.isArray(o.total_liquidity) && (!o.total_liquidity.length || Coin.isSDK(o.total_liquidity[0])));
  },
  isAmino(o: any): o is GetTotalLiquidityResponseAmino {
    return o && (o.$typeUrl === GetTotalLiquidityResponse.typeUrl || Array.isArray(o.total_liquidity) && (!o.total_liquidity.length || Coin.isAmino(o.total_liquidity[0])));
  },
  encode(message: GetTotalLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.totalLiquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTotalLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTotalLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetTotalLiquidityResponse {
    return {
      totalLiquidity: Array.isArray(object?.totalLiquidity) ? object.totalLiquidity.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: GetTotalLiquidityResponse): JsonSafe<GetTotalLiquidityResponse> {
    const obj: any = {};
    if (message.totalLiquidity) {
      obj.totalLiquidity = message.totalLiquidity.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalLiquidity = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetTotalLiquidityResponse>, I>>(object: I): GetTotalLiquidityResponse {
    const message = createBaseGetTotalLiquidityResponse();
    message.totalLiquidity = object.totalLiquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GetTotalLiquidityResponseAmino): GetTotalLiquidityResponse {
    const message = createBaseGetTotalLiquidityResponse();
    message.totalLiquidity = object.total_liquidity?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GetTotalLiquidityResponse): GetTotalLiquidityResponseAmino {
    const obj: any = {};
    if (message.totalLiquidity) {
      obj.total_liquidity = message.totalLiquidity.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_liquidity = message.totalLiquidity;
    }
    return obj;
  },
  fromAminoMsg(object: GetTotalLiquidityResponseAminoMsg): GetTotalLiquidityResponse {
    return GetTotalLiquidityResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetTotalLiquidityResponse): GetTotalLiquidityResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/get-total-liquidity-response",
      value: GetTotalLiquidityResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTotalLiquidityResponseProtoMsg): GetTotalLiquidityResponse {
    return GetTotalLiquidityResponse.decode(message.value);
  },
  toProto(message: GetTotalLiquidityResponse): Uint8Array {
    return GetTotalLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: GetTotalLiquidityResponse): GetTotalLiquidityResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityResponse",
      value: GetTotalLiquidityResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetTotalLiquidityResponse.typeUrl, GetTotalLiquidityResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetTotalLiquidityResponse.aminoType, GetTotalLiquidityResponse.typeUrl);
function createBaseNumNextInitializedTicksRequest(): NumNextInitializedTicksRequest {
  return {
    poolId: BigInt(0),
    tokenInDenom: "",
    numNextInitializedTicks: BigInt(0)
  };
}
export const NumNextInitializedTicksRequest = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest",
  aminoType: "osmosis/concentratedliquidity/num-next-initialized-ticks-request",
  is(o: any): o is NumNextInitializedTicksRequest {
    return o && (o.$typeUrl === NumNextInitializedTicksRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenInDenom === "string" && typeof o.numNextInitializedTicks === "bigint");
  },
  isSDK(o: any): o is NumNextInitializedTicksRequestSDKType {
    return o && (o.$typeUrl === NumNextInitializedTicksRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in_denom === "string" && typeof o.num_next_initialized_ticks === "bigint");
  },
  isAmino(o: any): o is NumNextInitializedTicksRequestAmino {
    return o && (o.$typeUrl === NumNextInitializedTicksRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in_denom === "string" && typeof o.num_next_initialized_ticks === "bigint");
  },
  encode(message: NumNextInitializedTicksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    if (message.numNextInitializedTicks !== BigInt(0)) {
      writer.uint32(24).uint64(message.numNextInitializedTicks);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumNextInitializedTicksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumNextInitializedTicksRequest();
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
          message.numNextInitializedTicks = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NumNextInitializedTicksRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : "",
      numNextInitializedTicks: isSet(object.numNextInitializedTicks) ? BigInt(object.numNextInitializedTicks.toString()) : BigInt(0)
    };
  },
  toJSON(message: NumNextInitializedTicksRequest): JsonSafe<NumNextInitializedTicksRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.numNextInitializedTicks !== undefined && (obj.numNextInitializedTicks = (message.numNextInitializedTicks || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NumNextInitializedTicksRequest>, I>>(object: I): NumNextInitializedTicksRequest {
    const message = createBaseNumNextInitializedTicksRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.numNextInitializedTicks = object.numNextInitializedTicks !== undefined && object.numNextInitializedTicks !== null ? BigInt(object.numNextInitializedTicks.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: NumNextInitializedTicksRequestAmino): NumNextInitializedTicksRequest {
    const message = createBaseNumNextInitializedTicksRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
      message.tokenInDenom = object.token_in_denom;
    }
    if (object.num_next_initialized_ticks !== undefined && object.num_next_initialized_ticks !== null) {
      message.numNextInitializedTicks = BigInt(object.num_next_initialized_ticks);
    }
    return message;
  },
  toAmino(message: NumNextInitializedTicksRequest): NumNextInitializedTicksRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.token_in_denom = message.tokenInDenom === "" ? undefined : message.tokenInDenom;
    obj.num_next_initialized_ticks = message.numNextInitializedTicks !== BigInt(0) ? (message.numNextInitializedTicks?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: NumNextInitializedTicksRequestAminoMsg): NumNextInitializedTicksRequest {
    return NumNextInitializedTicksRequest.fromAmino(object.value);
  },
  toAminoMsg(message: NumNextInitializedTicksRequest): NumNextInitializedTicksRequestAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/num-next-initialized-ticks-request",
      value: NumNextInitializedTicksRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: NumNextInitializedTicksRequestProtoMsg): NumNextInitializedTicksRequest {
    return NumNextInitializedTicksRequest.decode(message.value);
  },
  toProto(message: NumNextInitializedTicksRequest): Uint8Array {
    return NumNextInitializedTicksRequest.encode(message).finish();
  },
  toProtoMsg(message: NumNextInitializedTicksRequest): NumNextInitializedTicksRequestProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest",
      value: NumNextInitializedTicksRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(NumNextInitializedTicksRequest.typeUrl, NumNextInitializedTicksRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(NumNextInitializedTicksRequest.aminoType, NumNextInitializedTicksRequest.typeUrl);
function createBaseNumNextInitializedTicksResponse(): NumNextInitializedTicksResponse {
  return {
    liquidityDepths: [],
    currentTick: BigInt(0),
    currentLiquidity: ""
  };
}
export const NumNextInitializedTicksResponse = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse",
  aminoType: "osmosis/concentratedliquidity/num-next-initialized-ticks-response",
  is(o: any): o is NumNextInitializedTicksResponse {
    return o && (o.$typeUrl === NumNextInitializedTicksResponse.typeUrl || Array.isArray(o.liquidityDepths) && (!o.liquidityDepths.length || TickLiquidityNet.is(o.liquidityDepths[0])) && typeof o.currentTick === "bigint" && typeof o.currentLiquidity === "string");
  },
  isSDK(o: any): o is NumNextInitializedTicksResponseSDKType {
    return o && (o.$typeUrl === NumNextInitializedTicksResponse.typeUrl || Array.isArray(o.liquidity_depths) && (!o.liquidity_depths.length || TickLiquidityNet.isSDK(o.liquidity_depths[0])) && typeof o.current_tick === "bigint" && typeof o.current_liquidity === "string");
  },
  isAmino(o: any): o is NumNextInitializedTicksResponseAmino {
    return o && (o.$typeUrl === NumNextInitializedTicksResponse.typeUrl || Array.isArray(o.liquidity_depths) && (!o.liquidity_depths.length || TickLiquidityNet.isAmino(o.liquidity_depths[0])) && typeof o.current_tick === "bigint" && typeof o.current_liquidity === "string");
  },
  encode(message: NumNextInitializedTicksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidityDepths) {
      TickLiquidityNet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentTick !== BigInt(0)) {
      writer.uint32(16).int64(message.currentTick);
    }
    if (message.currentLiquidity !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.currentLiquidity, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumNextInitializedTicksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumNextInitializedTicksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityDepths.push(TickLiquidityNet.decode(reader, reader.uint32()));
          break;
        case 2:
          message.currentTick = reader.int64();
          break;
        case 3:
          message.currentLiquidity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NumNextInitializedTicksResponse {
    return {
      liquidityDepths: Array.isArray(object?.liquidityDepths) ? object.liquidityDepths.map((e: any) => TickLiquidityNet.fromJSON(e)) : [],
      currentTick: isSet(object.currentTick) ? BigInt(object.currentTick.toString()) : BigInt(0),
      currentLiquidity: isSet(object.currentLiquidity) ? String(object.currentLiquidity) : ""
    };
  },
  toJSON(message: NumNextInitializedTicksResponse): JsonSafe<NumNextInitializedTicksResponse> {
    const obj: any = {};
    if (message.liquidityDepths) {
      obj.liquidityDepths = message.liquidityDepths.map(e => e ? TickLiquidityNet.toJSON(e) : undefined);
    } else {
      obj.liquidityDepths = [];
    }
    message.currentTick !== undefined && (obj.currentTick = (message.currentTick || BigInt(0)).toString());
    message.currentLiquidity !== undefined && (obj.currentLiquidity = message.currentLiquidity);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NumNextInitializedTicksResponse>, I>>(object: I): NumNextInitializedTicksResponse {
    const message = createBaseNumNextInitializedTicksResponse();
    message.liquidityDepths = object.liquidityDepths?.map(e => TickLiquidityNet.fromPartial(e)) || [];
    message.currentTick = object.currentTick !== undefined && object.currentTick !== null ? BigInt(object.currentTick.toString()) : BigInt(0);
    message.currentLiquidity = object.currentLiquidity ?? "";
    return message;
  },
  fromAmino(object: NumNextInitializedTicksResponseAmino): NumNextInitializedTicksResponse {
    const message = createBaseNumNextInitializedTicksResponse();
    message.liquidityDepths = object.liquidity_depths?.map(e => TickLiquidityNet.fromAmino(e)) || [];
    if (object.current_tick !== undefined && object.current_tick !== null) {
      message.currentTick = BigInt(object.current_tick);
    }
    if (object.current_liquidity !== undefined && object.current_liquidity !== null) {
      message.currentLiquidity = object.current_liquidity;
    }
    return message;
  },
  toAmino(message: NumNextInitializedTicksResponse): NumNextInitializedTicksResponseAmino {
    const obj: any = {};
    if (message.liquidityDepths) {
      obj.liquidity_depths = message.liquidityDepths.map(e => e ? TickLiquidityNet.toAmino(e) : undefined);
    } else {
      obj.liquidity_depths = message.liquidityDepths;
    }
    obj.current_tick = message.currentTick !== BigInt(0) ? (message.currentTick?.toString)() : undefined;
    obj.current_liquidity = message.currentLiquidity === "" ? undefined : message.currentLiquidity;
    return obj;
  },
  fromAminoMsg(object: NumNextInitializedTicksResponseAminoMsg): NumNextInitializedTicksResponse {
    return NumNextInitializedTicksResponse.fromAmino(object.value);
  },
  toAminoMsg(message: NumNextInitializedTicksResponse): NumNextInitializedTicksResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/num-next-initialized-ticks-response",
      value: NumNextInitializedTicksResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: NumNextInitializedTicksResponseProtoMsg): NumNextInitializedTicksResponse {
    return NumNextInitializedTicksResponse.decode(message.value);
  },
  toProto(message: NumNextInitializedTicksResponse): Uint8Array {
    return NumNextInitializedTicksResponse.encode(message).finish();
  },
  toProtoMsg(message: NumNextInitializedTicksResponse): NumNextInitializedTicksResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse",
      value: NumNextInitializedTicksResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(NumNextInitializedTicksResponse.typeUrl, NumNextInitializedTicksResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(NumNextInitializedTicksResponse.aminoType, NumNextInitializedTicksResponse.typeUrl);