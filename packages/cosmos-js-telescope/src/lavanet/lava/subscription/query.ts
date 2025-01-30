//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Subscription, SubscriptionAmino, SubscriptionSDKType, FutureSubscription, FutureSubscriptionAmino, FutureSubscriptionSDKType } from "./subscription";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { TrackedCuInfo, TrackedCuInfoAmino, TrackedCuInfoSDKType } from "./cu_tracker";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lavanet.lava.subscription.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lavanet.lava.subscription.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryCurrentRequest {
  consumer: string;
}
export interface QueryCurrentRequestProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QueryCurrentRequest";
  value: Uint8Array;
}
export interface QueryCurrentRequestAmino {
  consumer?: string;
}
export interface QueryCurrentRequestAminoMsg {
  type: "/lavanet.lava.subscription.QueryCurrentRequest";
  value: QueryCurrentRequestAmino;
}
export interface QueryCurrentRequestSDKType {
  consumer: string;
}
export interface QueryCurrentResponse {
  sub?: Subscription;
}
export interface QueryCurrentResponseProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QueryCurrentResponse";
  value: Uint8Array;
}
export interface QueryCurrentResponseAmino {
  sub?: SubscriptionAmino;
}
export interface QueryCurrentResponseAminoMsg {
  type: "/lavanet.lava.subscription.QueryCurrentResponse";
  value: QueryCurrentResponseAmino;
}
export interface QueryCurrentResponseSDKType {
  sub?: SubscriptionSDKType;
}
export interface QueryListProjectsRequest {
  subscription: string;
}
export interface QueryListProjectsRequestProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QueryListProjectsRequest";
  value: Uint8Array;
}
export interface QueryListProjectsRequestAmino {
  subscription?: string;
}
export interface QueryListProjectsRequestAminoMsg {
  type: "/lavanet.lava.subscription.QueryListProjectsRequest";
  value: QueryListProjectsRequestAmino;
}
export interface QueryListProjectsRequestSDKType {
  subscription: string;
}
export interface QueryListProjectsResponse {
  projects: string[];
}
export interface QueryListProjectsResponseProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QueryListProjectsResponse";
  value: Uint8Array;
}
export interface QueryListProjectsResponseAmino {
  projects?: string[];
}
export interface QueryListProjectsResponseAminoMsg {
  type: "/lavanet.lava.subscription.QueryListProjectsResponse";
  value: QueryListProjectsResponseAmino;
}
export interface QueryListProjectsResponseSDKType {
  projects: string[];
}
export interface QueryListRequest {}
export interface QueryListRequestProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QueryListRequest";
  value: Uint8Array;
}
export interface QueryListRequestAmino {}
export interface QueryListRequestAminoMsg {
  type: "/lavanet.lava.subscription.QueryListRequest";
  value: QueryListRequestAmino;
}
export interface QueryListRequestSDKType {}
export interface QueryListResponse {
  subsInfo: ListInfoStruct[];
}
export interface QueryListResponseProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QueryListResponse";
  value: Uint8Array;
}
export interface QueryListResponseAmino {
  subs_info?: ListInfoStructAmino[];
}
export interface QueryListResponseAminoMsg {
  type: "/lavanet.lava.subscription.QueryListResponse";
  value: QueryListResponseAmino;
}
export interface QueryListResponseSDKType {
  subs_info: ListInfoStructSDKType[];
}
export interface ListInfoStruct {
  /** beneficiary consumer */
  consumer: string;
  /** plan assosiated with the subscription */
  plan: string;
  /** total duration in months (purchase/renewal) */
  durationBought: bigint;
  /** remaining duration in months */
  durationLeft: bigint;
  /** upcoming expiry (of current month) in unix time */
  monthExpiry: bigint;
  /** total CU allowance per month */
  monthCuTotal: bigint;
  /** remaining CU allowance this month */
  monthCuLeft: bigint;
  cluster: string;
  durationTotal: bigint;
  autoRenewalNextPlan: string;
  futureSubscription?: FutureSubscription;
  credit?: Coin;
}
export interface ListInfoStructProtoMsg {
  typeUrl: "/lavanet.lava.subscription.ListInfoStruct";
  value: Uint8Array;
}
export interface ListInfoStructAmino {
  /** beneficiary consumer */
  consumer?: string;
  /** plan assosiated with the subscription */
  plan?: string;
  /** total duration in months (purchase/renewal) */
  duration_bought?: string;
  /** remaining duration in months */
  duration_left?: string;
  /** upcoming expiry (of current month) in unix time */
  month_expiry?: string;
  /** total CU allowance per month */
  month_cu_total?: string;
  /** remaining CU allowance this month */
  month_cu_left?: string;
  cluster?: string;
  duration_total?: string;
  auto_renewal_next_plan?: string;
  future_subscription?: FutureSubscriptionAmino;
  credit?: CoinAmino;
}
export interface ListInfoStructAminoMsg {
  type: "/lavanet.lava.subscription.ListInfoStruct";
  value: ListInfoStructAmino;
}
export interface ListInfoStructSDKType {
  consumer: string;
  plan: string;
  duration_bought: bigint;
  duration_left: bigint;
  month_expiry: bigint;
  month_cu_total: bigint;
  month_cu_left: bigint;
  cluster: string;
  duration_total: bigint;
  auto_renewal_next_plan: string;
  future_subscription?: FutureSubscriptionSDKType;
  credit?: CoinSDKType;
}
export interface QueryNextToMonthExpiryRequest {}
export interface QueryNextToMonthExpiryRequestProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QueryNextToMonthExpiryRequest";
  value: Uint8Array;
}
export interface QueryNextToMonthExpiryRequestAmino {}
export interface QueryNextToMonthExpiryRequestAminoMsg {
  type: "/lavanet.lava.subscription.QueryNextToMonthExpiryRequest";
  value: QueryNextToMonthExpiryRequestAmino;
}
export interface QueryNextToMonthExpiryRequestSDKType {}
export interface TimerExpiryInfo {
  consumer: string;
  /** upcoming expiry (of current month) in unix time */
  monthExpiry: bigint;
}
export interface TimerExpiryInfoProtoMsg {
  typeUrl: "/lavanet.lava.subscription.TimerExpiryInfo";
  value: Uint8Array;
}
export interface TimerExpiryInfoAmino {
  consumer?: string;
  /** upcoming expiry (of current month) in unix time */
  month_expiry?: string;
}
export interface TimerExpiryInfoAminoMsg {
  type: "/lavanet.lava.subscription.TimerExpiryInfo";
  value: TimerExpiryInfoAmino;
}
export interface TimerExpiryInfoSDKType {
  consumer: string;
  month_expiry: bigint;
}
export interface QueryNextToMonthExpiryResponse {
  subscriptions: TimerExpiryInfo[];
}
export interface QueryNextToMonthExpiryResponseProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QueryNextToMonthExpiryResponse";
  value: Uint8Array;
}
export interface QueryNextToMonthExpiryResponseAmino {
  subscriptions?: TimerExpiryInfoAmino[];
}
export interface QueryNextToMonthExpiryResponseAminoMsg {
  type: "/lavanet.lava.subscription.QueryNextToMonthExpiryResponse";
  value: QueryNextToMonthExpiryResponseAmino;
}
export interface QueryNextToMonthExpiryResponseSDKType {
  subscriptions: TimerExpiryInfoSDKType[];
}
export interface QuerySubscriptionTrackedUsageRequest {
  subscription: string;
}
export interface QuerySubscriptionTrackedUsageRequestProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QuerySubscriptionTrackedUsageRequest";
  value: Uint8Array;
}
export interface QuerySubscriptionTrackedUsageRequestAmino {
  subscription?: string;
}
export interface QuerySubscriptionTrackedUsageRequestAminoMsg {
  type: "/lavanet.lava.subscription.QuerySubscriptionTrackedUsageRequest";
  value: QuerySubscriptionTrackedUsageRequestAmino;
}
export interface QuerySubscriptionTrackedUsageRequestSDKType {
  subscription: string;
}
export interface QuerySubscriptionTrackedUsageResponse {
  subscription?: Subscription;
  usage: TrackedCuInfo[];
  totalUsage: bigint;
}
export interface QuerySubscriptionTrackedUsageResponseProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QuerySubscriptionTrackedUsageResponse";
  value: Uint8Array;
}
export interface QuerySubscriptionTrackedUsageResponseAmino {
  subscription?: SubscriptionAmino;
  usage?: TrackedCuInfoAmino[];
  total_usage?: string;
}
export interface QuerySubscriptionTrackedUsageResponseAminoMsg {
  type: "/lavanet.lava.subscription.QuerySubscriptionTrackedUsageResponse";
  value: QuerySubscriptionTrackedUsageResponseAmino;
}
export interface QuerySubscriptionTrackedUsageResponseSDKType {
  subscription?: SubscriptionSDKType;
  usage: TrackedCuInfoSDKType[];
  total_usage: bigint;
}
/** @deprecated */
export interface QueryEstimatedRewardsRequest {
  provider: string;
  /** @deprecated */
  chainId: string;
  amountDelegator: string;
}
export interface QueryEstimatedRewardsRequestProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QueryEstimatedRewardsRequest";
  value: Uint8Array;
}
/** @deprecated */
export interface QueryEstimatedRewardsRequestAmino {
  provider?: string;
  /** @deprecated */
  chain_id?: string;
  amount_delegator?: string;
}
export interface QueryEstimatedRewardsRequestAminoMsg {
  type: "/lavanet.lava.subscription.QueryEstimatedRewardsRequest";
  value: QueryEstimatedRewardsRequestAmino;
}
/** @deprecated */
export interface QueryEstimatedRewardsRequestSDKType {
  provider: string;
  /** @deprecated */
  chain_id: string;
  amount_delegator: string;
}
export interface QueryEstimatedProviderRewardsRequest {
  provider: string;
  amountDelegator: string;
}
export interface QueryEstimatedProviderRewardsRequestProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QueryEstimatedProviderRewardsRequest";
  value: Uint8Array;
}
export interface QueryEstimatedProviderRewardsRequestAmino {
  provider?: string;
  amount_delegator?: string;
}
export interface QueryEstimatedProviderRewardsRequestAminoMsg {
  type: "/lavanet.lava.subscription.QueryEstimatedProviderRewardsRequest";
  value: QueryEstimatedProviderRewardsRequestAmino;
}
export interface QueryEstimatedProviderRewardsRequestSDKType {
  provider: string;
  amount_delegator: string;
}
export interface EstimatedRewardInfo {
  source: string;
  amount: DecCoin[];
}
export interface EstimatedRewardInfoProtoMsg {
  typeUrl: "/lavanet.lava.subscription.EstimatedRewardInfo";
  value: Uint8Array;
}
export interface EstimatedRewardInfoAmino {
  source?: string;
  amount: DecCoinAmino[];
}
export interface EstimatedRewardInfoAminoMsg {
  type: "/lavanet.lava.subscription.EstimatedRewardInfo";
  value: EstimatedRewardInfoAmino;
}
export interface EstimatedRewardInfoSDKType {
  source: string;
  amount: DecCoinSDKType[];
}
export interface QueryEstimatedRewardsResponse {
  info: EstimatedRewardInfo[];
  total: DecCoin[];
  /** if the query is run in the first 24H of the month, recommended_block will be non-zero. */
  recommendedBlock: bigint;
}
export interface QueryEstimatedRewardsResponseProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QueryEstimatedRewardsResponse";
  value: Uint8Array;
}
export interface QueryEstimatedRewardsResponseAmino {
  info?: EstimatedRewardInfoAmino[];
  total: DecCoinAmino[];
  /** if the query is run in the first 24H of the month, recommended_block will be non-zero. */
  recommended_block?: string;
}
export interface QueryEstimatedRewardsResponseAminoMsg {
  type: "/lavanet.lava.subscription.QueryEstimatedRewardsResponse";
  value: QueryEstimatedRewardsResponseAmino;
}
export interface QueryEstimatedRewardsResponseSDKType {
  info: EstimatedRewardInfoSDKType[];
  total: DecCoinSDKType[];
  recommended_block: bigint;
}
export interface QueryEstimatedValidatorRewardsRequest {
  validator: string;
  amountDelegator: string;
}
export interface QueryEstimatedValidatorRewardsRequestProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QueryEstimatedValidatorRewardsRequest";
  value: Uint8Array;
}
export interface QueryEstimatedValidatorRewardsRequestAmino {
  validator?: string;
  amount_delegator?: string;
}
export interface QueryEstimatedValidatorRewardsRequestAminoMsg {
  type: "/lavanet.lava.subscription.QueryEstimatedValidatorRewardsRequest";
  value: QueryEstimatedValidatorRewardsRequestAmino;
}
export interface QueryEstimatedValidatorRewardsRequestSDKType {
  validator: string;
  amount_delegator: string;
}
export interface QueryEstimatedValidatorRewardsResponse {
  info?: EstimatedRewardInfo[];
  total: DecCoin[];
}
export interface QueryEstimatedValidatorRewardsResponseProtoMsg {
  typeUrl: "/lavanet.lava.subscription.QueryEstimatedValidatorRewardsResponse";
  value: Uint8Array;
}
export interface QueryEstimatedValidatorRewardsResponseAmino {
  info?: EstimatedRewardInfoAmino[];
  total: DecCoinAmino[];
}
export interface QueryEstimatedValidatorRewardsResponseAminoMsg {
  type: "/lavanet.lava.subscription.QueryEstimatedValidatorRewardsResponse";
  value: QueryEstimatedValidatorRewardsResponseAmino;
}
export interface QueryEstimatedValidatorRewardsResponseSDKType {
  info?: EstimatedRewardInfoSDKType[];
  total: DecCoinSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryCurrentRequest(): QueryCurrentRequest {
  return {
    consumer: ""
  };
}
export const QueryCurrentRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryCurrentRequest",
  is(o: any): o is QueryCurrentRequest {
    return o && (o.$typeUrl === QueryCurrentRequest.typeUrl || typeof o.consumer === "string");
  },
  isSDK(o: any): o is QueryCurrentRequestSDKType {
    return o && (o.$typeUrl === QueryCurrentRequest.typeUrl || typeof o.consumer === "string");
  },
  isAmino(o: any): o is QueryCurrentRequestAmino {
    return o && (o.$typeUrl === QueryCurrentRequest.typeUrl || typeof o.consumer === "string");
  },
  encode(message: QueryCurrentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCurrentRequest {
    return {
      consumer: isSet(object.consumer) ? String(object.consumer) : ""
    };
  },
  toJSON(message: QueryCurrentRequest): JsonSafe<QueryCurrentRequest> {
    const obj: any = {};
    message.consumer !== undefined && (obj.consumer = message.consumer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCurrentRequest>, I>>(object: I): QueryCurrentRequest {
    const message = createBaseQueryCurrentRequest();
    message.consumer = object.consumer ?? "";
    return message;
  },
  fromAmino(object: QueryCurrentRequestAmino): QueryCurrentRequest {
    const message = createBaseQueryCurrentRequest();
    if (object.consumer !== undefined && object.consumer !== null) {
      message.consumer = object.consumer;
    }
    return message;
  },
  toAmino(message: QueryCurrentRequest): QueryCurrentRequestAmino {
    const obj: any = {};
    obj.consumer = message.consumer === "" ? undefined : message.consumer;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentRequestAminoMsg): QueryCurrentRequest {
    return QueryCurrentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentRequestProtoMsg): QueryCurrentRequest {
    return QueryCurrentRequest.decode(message.value);
  },
  toProto(message: QueryCurrentRequest): Uint8Array {
    return QueryCurrentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentRequest): QueryCurrentRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryCurrentRequest",
      value: QueryCurrentRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCurrentRequest.typeUrl, QueryCurrentRequest);
function createBaseQueryCurrentResponse(): QueryCurrentResponse {
  return {
    sub: undefined
  };
}
export const QueryCurrentResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryCurrentResponse",
  is(o: any): o is QueryCurrentResponse {
    return o && o.$typeUrl === QueryCurrentResponse.typeUrl;
  },
  isSDK(o: any): o is QueryCurrentResponseSDKType {
    return o && o.$typeUrl === QueryCurrentResponse.typeUrl;
  },
  isAmino(o: any): o is QueryCurrentResponseAmino {
    return o && o.$typeUrl === QueryCurrentResponse.typeUrl;
  },
  encode(message: QueryCurrentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sub !== undefined) {
      Subscription.encode(message.sub, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sub = Subscription.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCurrentResponse {
    return {
      sub: isSet(object.sub) ? Subscription.fromJSON(object.sub) : undefined
    };
  },
  toJSON(message: QueryCurrentResponse): JsonSafe<QueryCurrentResponse> {
    const obj: any = {};
    message.sub !== undefined && (obj.sub = message.sub ? Subscription.toJSON(message.sub) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCurrentResponse>, I>>(object: I): QueryCurrentResponse {
    const message = createBaseQueryCurrentResponse();
    message.sub = object.sub !== undefined && object.sub !== null ? Subscription.fromPartial(object.sub) : undefined;
    return message;
  },
  fromAmino(object: QueryCurrentResponseAmino): QueryCurrentResponse {
    const message = createBaseQueryCurrentResponse();
    if (object.sub !== undefined && object.sub !== null) {
      message.sub = Subscription.fromAmino(object.sub);
    }
    return message;
  },
  toAmino(message: QueryCurrentResponse): QueryCurrentResponseAmino {
    const obj: any = {};
    obj.sub = message.sub ? Subscription.toAmino(message.sub) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentResponseAminoMsg): QueryCurrentResponse {
    return QueryCurrentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentResponseProtoMsg): QueryCurrentResponse {
    return QueryCurrentResponse.decode(message.value);
  },
  toProto(message: QueryCurrentResponse): Uint8Array {
    return QueryCurrentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentResponse): QueryCurrentResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryCurrentResponse",
      value: QueryCurrentResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCurrentResponse.typeUrl, QueryCurrentResponse);
function createBaseQueryListProjectsRequest(): QueryListProjectsRequest {
  return {
    subscription: ""
  };
}
export const QueryListProjectsRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryListProjectsRequest",
  is(o: any): o is QueryListProjectsRequest {
    return o && (o.$typeUrl === QueryListProjectsRequest.typeUrl || typeof o.subscription === "string");
  },
  isSDK(o: any): o is QueryListProjectsRequestSDKType {
    return o && (o.$typeUrl === QueryListProjectsRequest.typeUrl || typeof o.subscription === "string");
  },
  isAmino(o: any): o is QueryListProjectsRequestAmino {
    return o && (o.$typeUrl === QueryListProjectsRequest.typeUrl || typeof o.subscription === "string");
  },
  encode(message: QueryListProjectsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscription !== "") {
      writer.uint32(10).string(message.subscription);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListProjectsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListProjectsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscription = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListProjectsRequest {
    return {
      subscription: isSet(object.subscription) ? String(object.subscription) : ""
    };
  },
  toJSON(message: QueryListProjectsRequest): JsonSafe<QueryListProjectsRequest> {
    const obj: any = {};
    message.subscription !== undefined && (obj.subscription = message.subscription);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListProjectsRequest>, I>>(object: I): QueryListProjectsRequest {
    const message = createBaseQueryListProjectsRequest();
    message.subscription = object.subscription ?? "";
    return message;
  },
  fromAmino(object: QueryListProjectsRequestAmino): QueryListProjectsRequest {
    const message = createBaseQueryListProjectsRequest();
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = object.subscription;
    }
    return message;
  },
  toAmino(message: QueryListProjectsRequest): QueryListProjectsRequestAmino {
    const obj: any = {};
    obj.subscription = message.subscription === "" ? undefined : message.subscription;
    return obj;
  },
  fromAminoMsg(object: QueryListProjectsRequestAminoMsg): QueryListProjectsRequest {
    return QueryListProjectsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListProjectsRequestProtoMsg): QueryListProjectsRequest {
    return QueryListProjectsRequest.decode(message.value);
  },
  toProto(message: QueryListProjectsRequest): Uint8Array {
    return QueryListProjectsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListProjectsRequest): QueryListProjectsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryListProjectsRequest",
      value: QueryListProjectsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryListProjectsRequest.typeUrl, QueryListProjectsRequest);
function createBaseQueryListProjectsResponse(): QueryListProjectsResponse {
  return {
    projects: []
  };
}
export const QueryListProjectsResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryListProjectsResponse",
  is(o: any): o is QueryListProjectsResponse {
    return o && (o.$typeUrl === QueryListProjectsResponse.typeUrl || Array.isArray(o.projects) && (!o.projects.length || typeof o.projects[0] === "string"));
  },
  isSDK(o: any): o is QueryListProjectsResponseSDKType {
    return o && (o.$typeUrl === QueryListProjectsResponse.typeUrl || Array.isArray(o.projects) && (!o.projects.length || typeof o.projects[0] === "string"));
  },
  isAmino(o: any): o is QueryListProjectsResponseAmino {
    return o && (o.$typeUrl === QueryListProjectsResponse.typeUrl || Array.isArray(o.projects) && (!o.projects.length || typeof o.projects[0] === "string"));
  },
  encode(message: QueryListProjectsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.projects) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListProjectsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListProjectsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projects.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListProjectsResponse {
    return {
      projects: Array.isArray(object?.projects) ? object.projects.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: QueryListProjectsResponse): JsonSafe<QueryListProjectsResponse> {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e => e);
    } else {
      obj.projects = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListProjectsResponse>, I>>(object: I): QueryListProjectsResponse {
    const message = createBaseQueryListProjectsResponse();
    message.projects = object.projects?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryListProjectsResponseAmino): QueryListProjectsResponse {
    const message = createBaseQueryListProjectsResponse();
    message.projects = object.projects?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryListProjectsResponse): QueryListProjectsResponseAmino {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e => e);
    } else {
      obj.projects = message.projects;
    }
    return obj;
  },
  fromAminoMsg(object: QueryListProjectsResponseAminoMsg): QueryListProjectsResponse {
    return QueryListProjectsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListProjectsResponseProtoMsg): QueryListProjectsResponse {
    return QueryListProjectsResponse.decode(message.value);
  },
  toProto(message: QueryListProjectsResponse): Uint8Array {
    return QueryListProjectsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListProjectsResponse): QueryListProjectsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryListProjectsResponse",
      value: QueryListProjectsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryListProjectsResponse.typeUrl, QueryListProjectsResponse);
function createBaseQueryListRequest(): QueryListRequest {
  return {};
}
export const QueryListRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryListRequest",
  is(o: any): o is QueryListRequest {
    return o && o.$typeUrl === QueryListRequest.typeUrl;
  },
  isSDK(o: any): o is QueryListRequestSDKType {
    return o && o.$typeUrl === QueryListRequest.typeUrl;
  },
  isAmino(o: any): o is QueryListRequestAmino {
    return o && o.$typeUrl === QueryListRequest.typeUrl;
  },
  encode(_: QueryListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListRequest();
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
  fromJSON(_: any): QueryListRequest {
    return {};
  },
  toJSON(_: QueryListRequest): JsonSafe<QueryListRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListRequest>, I>>(_: I): QueryListRequest {
    const message = createBaseQueryListRequest();
    return message;
  },
  fromAmino(_: QueryListRequestAmino): QueryListRequest {
    const message = createBaseQueryListRequest();
    return message;
  },
  toAmino(_: QueryListRequest): QueryListRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryListRequestAminoMsg): QueryListRequest {
    return QueryListRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListRequestProtoMsg): QueryListRequest {
    return QueryListRequest.decode(message.value);
  },
  toProto(message: QueryListRequest): Uint8Array {
    return QueryListRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListRequest): QueryListRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryListRequest",
      value: QueryListRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryListRequest.typeUrl, QueryListRequest);
function createBaseQueryListResponse(): QueryListResponse {
  return {
    subsInfo: []
  };
}
export const QueryListResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryListResponse",
  is(o: any): o is QueryListResponse {
    return o && (o.$typeUrl === QueryListResponse.typeUrl || Array.isArray(o.subsInfo) && (!o.subsInfo.length || ListInfoStruct.is(o.subsInfo[0])));
  },
  isSDK(o: any): o is QueryListResponseSDKType {
    return o && (o.$typeUrl === QueryListResponse.typeUrl || Array.isArray(o.subs_info) && (!o.subs_info.length || ListInfoStruct.isSDK(o.subs_info[0])));
  },
  isAmino(o: any): o is QueryListResponseAmino {
    return o && (o.$typeUrl === QueryListResponse.typeUrl || Array.isArray(o.subs_info) && (!o.subs_info.length || ListInfoStruct.isAmino(o.subs_info[0])));
  },
  encode(message: QueryListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subsInfo) {
      ListInfoStruct.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subsInfo.push(ListInfoStruct.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryListResponse {
    return {
      subsInfo: Array.isArray(object?.subsInfo) ? object.subsInfo.map((e: any) => ListInfoStruct.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryListResponse): JsonSafe<QueryListResponse> {
    const obj: any = {};
    if (message.subsInfo) {
      obj.subsInfo = message.subsInfo.map(e => e ? ListInfoStruct.toJSON(e) : undefined);
    } else {
      obj.subsInfo = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryListResponse>, I>>(object: I): QueryListResponse {
    const message = createBaseQueryListResponse();
    message.subsInfo = object.subsInfo?.map(e => ListInfoStruct.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryListResponseAmino): QueryListResponse {
    const message = createBaseQueryListResponse();
    message.subsInfo = object.subs_info?.map(e => ListInfoStruct.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryListResponse): QueryListResponseAmino {
    const obj: any = {};
    if (message.subsInfo) {
      obj.subs_info = message.subsInfo.map(e => e ? ListInfoStruct.toAmino(e) : undefined);
    } else {
      obj.subs_info = message.subsInfo;
    }
    return obj;
  },
  fromAminoMsg(object: QueryListResponseAminoMsg): QueryListResponse {
    return QueryListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListResponseProtoMsg): QueryListResponse {
    return QueryListResponse.decode(message.value);
  },
  toProto(message: QueryListResponse): Uint8Array {
    return QueryListResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListResponse): QueryListResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryListResponse",
      value: QueryListResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryListResponse.typeUrl, QueryListResponse);
function createBaseListInfoStruct(): ListInfoStruct {
  return {
    consumer: "",
    plan: "",
    durationBought: BigInt(0),
    durationLeft: BigInt(0),
    monthExpiry: BigInt(0),
    monthCuTotal: BigInt(0),
    monthCuLeft: BigInt(0),
    cluster: "",
    durationTotal: BigInt(0),
    autoRenewalNextPlan: "",
    futureSubscription: undefined,
    credit: undefined
  };
}
export const ListInfoStruct = {
  typeUrl: "/lavanet.lava.subscription.ListInfoStruct",
  is(o: any): o is ListInfoStruct {
    return o && (o.$typeUrl === ListInfoStruct.typeUrl || typeof o.consumer === "string" && typeof o.plan === "string" && typeof o.durationBought === "bigint" && typeof o.durationLeft === "bigint" && typeof o.monthExpiry === "bigint" && typeof o.monthCuTotal === "bigint" && typeof o.monthCuLeft === "bigint" && typeof o.cluster === "string" && typeof o.durationTotal === "bigint" && typeof o.autoRenewalNextPlan === "string");
  },
  isSDK(o: any): o is ListInfoStructSDKType {
    return o && (o.$typeUrl === ListInfoStruct.typeUrl || typeof o.consumer === "string" && typeof o.plan === "string" && typeof o.duration_bought === "bigint" && typeof o.duration_left === "bigint" && typeof o.month_expiry === "bigint" && typeof o.month_cu_total === "bigint" && typeof o.month_cu_left === "bigint" && typeof o.cluster === "string" && typeof o.duration_total === "bigint" && typeof o.auto_renewal_next_plan === "string");
  },
  isAmino(o: any): o is ListInfoStructAmino {
    return o && (o.$typeUrl === ListInfoStruct.typeUrl || typeof o.consumer === "string" && typeof o.plan === "string" && typeof o.duration_bought === "bigint" && typeof o.duration_left === "bigint" && typeof o.month_expiry === "bigint" && typeof o.month_cu_total === "bigint" && typeof o.month_cu_left === "bigint" && typeof o.cluster === "string" && typeof o.duration_total === "bigint" && typeof o.auto_renewal_next_plan === "string");
  },
  encode(message: ListInfoStruct, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    if (message.plan !== "") {
      writer.uint32(18).string(message.plan);
    }
    if (message.durationBought !== BigInt(0)) {
      writer.uint32(24).uint64(message.durationBought);
    }
    if (message.durationLeft !== BigInt(0)) {
      writer.uint32(32).uint64(message.durationLeft);
    }
    if (message.monthExpiry !== BigInt(0)) {
      writer.uint32(40).uint64(message.monthExpiry);
    }
    if (message.monthCuTotal !== BigInt(0)) {
      writer.uint32(48).uint64(message.monthCuTotal);
    }
    if (message.monthCuLeft !== BigInt(0)) {
      writer.uint32(56).uint64(message.monthCuLeft);
    }
    if (message.cluster !== "") {
      writer.uint32(66).string(message.cluster);
    }
    if (message.durationTotal !== BigInt(0)) {
      writer.uint32(72).uint64(message.durationTotal);
    }
    if (message.autoRenewalNextPlan !== "") {
      writer.uint32(90).string(message.autoRenewalNextPlan);
    }
    if (message.futureSubscription !== undefined) {
      FutureSubscription.encode(message.futureSubscription, writer.uint32(98).fork()).ldelim();
    }
    if (message.credit !== undefined) {
      Coin.encode(message.credit, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListInfoStruct {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInfoStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = reader.string();
          break;
        case 2:
          message.plan = reader.string();
          break;
        case 3:
          message.durationBought = reader.uint64();
          break;
        case 4:
          message.durationLeft = reader.uint64();
          break;
        case 5:
          message.monthExpiry = reader.uint64();
          break;
        case 6:
          message.monthCuTotal = reader.uint64();
          break;
        case 7:
          message.monthCuLeft = reader.uint64();
          break;
        case 8:
          message.cluster = reader.string();
          break;
        case 9:
          message.durationTotal = reader.uint64();
          break;
        case 11:
          message.autoRenewalNextPlan = reader.string();
          break;
        case 12:
          message.futureSubscription = FutureSubscription.decode(reader, reader.uint32());
          break;
        case 13:
          message.credit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListInfoStruct {
    return {
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
      plan: isSet(object.plan) ? String(object.plan) : "",
      durationBought: isSet(object.durationBought) ? BigInt(object.durationBought.toString()) : BigInt(0),
      durationLeft: isSet(object.durationLeft) ? BigInt(object.durationLeft.toString()) : BigInt(0),
      monthExpiry: isSet(object.monthExpiry) ? BigInt(object.monthExpiry.toString()) : BigInt(0),
      monthCuTotal: isSet(object.monthCuTotal) ? BigInt(object.monthCuTotal.toString()) : BigInt(0),
      monthCuLeft: isSet(object.monthCuLeft) ? BigInt(object.monthCuLeft.toString()) : BigInt(0),
      cluster: isSet(object.cluster) ? String(object.cluster) : "",
      durationTotal: isSet(object.durationTotal) ? BigInt(object.durationTotal.toString()) : BigInt(0),
      autoRenewalNextPlan: isSet(object.autoRenewalNextPlan) ? String(object.autoRenewalNextPlan) : "",
      futureSubscription: isSet(object.futureSubscription) ? FutureSubscription.fromJSON(object.futureSubscription) : undefined,
      credit: isSet(object.credit) ? Coin.fromJSON(object.credit) : undefined
    };
  },
  toJSON(message: ListInfoStruct): JsonSafe<ListInfoStruct> {
    const obj: any = {};
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.plan !== undefined && (obj.plan = message.plan);
    message.durationBought !== undefined && (obj.durationBought = (message.durationBought || BigInt(0)).toString());
    message.durationLeft !== undefined && (obj.durationLeft = (message.durationLeft || BigInt(0)).toString());
    message.monthExpiry !== undefined && (obj.monthExpiry = (message.monthExpiry || BigInt(0)).toString());
    message.monthCuTotal !== undefined && (obj.monthCuTotal = (message.monthCuTotal || BigInt(0)).toString());
    message.monthCuLeft !== undefined && (obj.monthCuLeft = (message.monthCuLeft || BigInt(0)).toString());
    message.cluster !== undefined && (obj.cluster = message.cluster);
    message.durationTotal !== undefined && (obj.durationTotal = (message.durationTotal || BigInt(0)).toString());
    message.autoRenewalNextPlan !== undefined && (obj.autoRenewalNextPlan = message.autoRenewalNextPlan);
    message.futureSubscription !== undefined && (obj.futureSubscription = message.futureSubscription ? FutureSubscription.toJSON(message.futureSubscription) : undefined);
    message.credit !== undefined && (obj.credit = message.credit ? Coin.toJSON(message.credit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListInfoStruct>, I>>(object: I): ListInfoStruct {
    const message = createBaseListInfoStruct();
    message.consumer = object.consumer ?? "";
    message.plan = object.plan ?? "";
    message.durationBought = object.durationBought !== undefined && object.durationBought !== null ? BigInt(object.durationBought.toString()) : BigInt(0);
    message.durationLeft = object.durationLeft !== undefined && object.durationLeft !== null ? BigInt(object.durationLeft.toString()) : BigInt(0);
    message.monthExpiry = object.monthExpiry !== undefined && object.monthExpiry !== null ? BigInt(object.monthExpiry.toString()) : BigInt(0);
    message.monthCuTotal = object.monthCuTotal !== undefined && object.monthCuTotal !== null ? BigInt(object.monthCuTotal.toString()) : BigInt(0);
    message.monthCuLeft = object.monthCuLeft !== undefined && object.monthCuLeft !== null ? BigInt(object.monthCuLeft.toString()) : BigInt(0);
    message.cluster = object.cluster ?? "";
    message.durationTotal = object.durationTotal !== undefined && object.durationTotal !== null ? BigInt(object.durationTotal.toString()) : BigInt(0);
    message.autoRenewalNextPlan = object.autoRenewalNextPlan ?? "";
    message.futureSubscription = object.futureSubscription !== undefined && object.futureSubscription !== null ? FutureSubscription.fromPartial(object.futureSubscription) : undefined;
    message.credit = object.credit !== undefined && object.credit !== null ? Coin.fromPartial(object.credit) : undefined;
    return message;
  },
  fromAmino(object: ListInfoStructAmino): ListInfoStruct {
    const message = createBaseListInfoStruct();
    if (object.consumer !== undefined && object.consumer !== null) {
      message.consumer = object.consumer;
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = object.plan;
    }
    if (object.duration_bought !== undefined && object.duration_bought !== null) {
      message.durationBought = BigInt(object.duration_bought);
    }
    if (object.duration_left !== undefined && object.duration_left !== null) {
      message.durationLeft = BigInt(object.duration_left);
    }
    if (object.month_expiry !== undefined && object.month_expiry !== null) {
      message.monthExpiry = BigInt(object.month_expiry);
    }
    if (object.month_cu_total !== undefined && object.month_cu_total !== null) {
      message.monthCuTotal = BigInt(object.month_cu_total);
    }
    if (object.month_cu_left !== undefined && object.month_cu_left !== null) {
      message.monthCuLeft = BigInt(object.month_cu_left);
    }
    if (object.cluster !== undefined && object.cluster !== null) {
      message.cluster = object.cluster;
    }
    if (object.duration_total !== undefined && object.duration_total !== null) {
      message.durationTotal = BigInt(object.duration_total);
    }
    if (object.auto_renewal_next_plan !== undefined && object.auto_renewal_next_plan !== null) {
      message.autoRenewalNextPlan = object.auto_renewal_next_plan;
    }
    if (object.future_subscription !== undefined && object.future_subscription !== null) {
      message.futureSubscription = FutureSubscription.fromAmino(object.future_subscription);
    }
    if (object.credit !== undefined && object.credit !== null) {
      message.credit = Coin.fromAmino(object.credit);
    }
    return message;
  },
  toAmino(message: ListInfoStruct): ListInfoStructAmino {
    const obj: any = {};
    obj.consumer = message.consumer === "" ? undefined : message.consumer;
    obj.plan = message.plan === "" ? undefined : message.plan;
    obj.duration_bought = message.durationBought !== BigInt(0) ? (message.durationBought?.toString)() : undefined;
    obj.duration_left = message.durationLeft !== BigInt(0) ? (message.durationLeft?.toString)() : undefined;
    obj.month_expiry = message.monthExpiry !== BigInt(0) ? (message.monthExpiry?.toString)() : undefined;
    obj.month_cu_total = message.monthCuTotal !== BigInt(0) ? (message.monthCuTotal?.toString)() : undefined;
    obj.month_cu_left = message.monthCuLeft !== BigInt(0) ? (message.monthCuLeft?.toString)() : undefined;
    obj.cluster = message.cluster === "" ? undefined : message.cluster;
    obj.duration_total = message.durationTotal !== BigInt(0) ? (message.durationTotal?.toString)() : undefined;
    obj.auto_renewal_next_plan = message.autoRenewalNextPlan === "" ? undefined : message.autoRenewalNextPlan;
    obj.future_subscription = message.futureSubscription ? FutureSubscription.toAmino(message.futureSubscription) : undefined;
    obj.credit = message.credit ? Coin.toAmino(message.credit) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListInfoStructAminoMsg): ListInfoStruct {
    return ListInfoStruct.fromAmino(object.value);
  },
  fromProtoMsg(message: ListInfoStructProtoMsg): ListInfoStruct {
    return ListInfoStruct.decode(message.value);
  },
  toProto(message: ListInfoStruct): Uint8Array {
    return ListInfoStruct.encode(message).finish();
  },
  toProtoMsg(message: ListInfoStruct): ListInfoStructProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.ListInfoStruct",
      value: ListInfoStruct.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListInfoStruct.typeUrl, ListInfoStruct);
function createBaseQueryNextToMonthExpiryRequest(): QueryNextToMonthExpiryRequest {
  return {};
}
export const QueryNextToMonthExpiryRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryNextToMonthExpiryRequest",
  is(o: any): o is QueryNextToMonthExpiryRequest {
    return o && o.$typeUrl === QueryNextToMonthExpiryRequest.typeUrl;
  },
  isSDK(o: any): o is QueryNextToMonthExpiryRequestSDKType {
    return o && o.$typeUrl === QueryNextToMonthExpiryRequest.typeUrl;
  },
  isAmino(o: any): o is QueryNextToMonthExpiryRequestAmino {
    return o && o.$typeUrl === QueryNextToMonthExpiryRequest.typeUrl;
  },
  encode(_: QueryNextToMonthExpiryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextToMonthExpiryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextToMonthExpiryRequest();
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
  fromJSON(_: any): QueryNextToMonthExpiryRequest {
    return {};
  },
  toJSON(_: QueryNextToMonthExpiryRequest): JsonSafe<QueryNextToMonthExpiryRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryNextToMonthExpiryRequest>, I>>(_: I): QueryNextToMonthExpiryRequest {
    const message = createBaseQueryNextToMonthExpiryRequest();
    return message;
  },
  fromAmino(_: QueryNextToMonthExpiryRequestAmino): QueryNextToMonthExpiryRequest {
    const message = createBaseQueryNextToMonthExpiryRequest();
    return message;
  },
  toAmino(_: QueryNextToMonthExpiryRequest): QueryNextToMonthExpiryRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryNextToMonthExpiryRequestAminoMsg): QueryNextToMonthExpiryRequest {
    return QueryNextToMonthExpiryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNextToMonthExpiryRequestProtoMsg): QueryNextToMonthExpiryRequest {
    return QueryNextToMonthExpiryRequest.decode(message.value);
  },
  toProto(message: QueryNextToMonthExpiryRequest): Uint8Array {
    return QueryNextToMonthExpiryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNextToMonthExpiryRequest): QueryNextToMonthExpiryRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryNextToMonthExpiryRequest",
      value: QueryNextToMonthExpiryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNextToMonthExpiryRequest.typeUrl, QueryNextToMonthExpiryRequest);
function createBaseTimerExpiryInfo(): TimerExpiryInfo {
  return {
    consumer: "",
    monthExpiry: BigInt(0)
  };
}
export const TimerExpiryInfo = {
  typeUrl: "/lavanet.lava.subscription.TimerExpiryInfo",
  is(o: any): o is TimerExpiryInfo {
    return o && (o.$typeUrl === TimerExpiryInfo.typeUrl || typeof o.consumer === "string" && typeof o.monthExpiry === "bigint");
  },
  isSDK(o: any): o is TimerExpiryInfoSDKType {
    return o && (o.$typeUrl === TimerExpiryInfo.typeUrl || typeof o.consumer === "string" && typeof o.month_expiry === "bigint");
  },
  isAmino(o: any): o is TimerExpiryInfoAmino {
    return o && (o.$typeUrl === TimerExpiryInfo.typeUrl || typeof o.consumer === "string" && typeof o.month_expiry === "bigint");
  },
  encode(message: TimerExpiryInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    if (message.monthExpiry !== BigInt(0)) {
      writer.uint32(16).uint64(message.monthExpiry);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TimerExpiryInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimerExpiryInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = reader.string();
          break;
        case 2:
          message.monthExpiry = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TimerExpiryInfo {
    return {
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
      monthExpiry: isSet(object.monthExpiry) ? BigInt(object.monthExpiry.toString()) : BigInt(0)
    };
  },
  toJSON(message: TimerExpiryInfo): JsonSafe<TimerExpiryInfo> {
    const obj: any = {};
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.monthExpiry !== undefined && (obj.monthExpiry = (message.monthExpiry || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TimerExpiryInfo>, I>>(object: I): TimerExpiryInfo {
    const message = createBaseTimerExpiryInfo();
    message.consumer = object.consumer ?? "";
    message.monthExpiry = object.monthExpiry !== undefined && object.monthExpiry !== null ? BigInt(object.monthExpiry.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TimerExpiryInfoAmino): TimerExpiryInfo {
    const message = createBaseTimerExpiryInfo();
    if (object.consumer !== undefined && object.consumer !== null) {
      message.consumer = object.consumer;
    }
    if (object.month_expiry !== undefined && object.month_expiry !== null) {
      message.monthExpiry = BigInt(object.month_expiry);
    }
    return message;
  },
  toAmino(message: TimerExpiryInfo): TimerExpiryInfoAmino {
    const obj: any = {};
    obj.consumer = message.consumer === "" ? undefined : message.consumer;
    obj.month_expiry = message.monthExpiry !== BigInt(0) ? (message.monthExpiry?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: TimerExpiryInfoAminoMsg): TimerExpiryInfo {
    return TimerExpiryInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: TimerExpiryInfoProtoMsg): TimerExpiryInfo {
    return TimerExpiryInfo.decode(message.value);
  },
  toProto(message: TimerExpiryInfo): Uint8Array {
    return TimerExpiryInfo.encode(message).finish();
  },
  toProtoMsg(message: TimerExpiryInfo): TimerExpiryInfoProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.TimerExpiryInfo",
      value: TimerExpiryInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TimerExpiryInfo.typeUrl, TimerExpiryInfo);
function createBaseQueryNextToMonthExpiryResponse(): QueryNextToMonthExpiryResponse {
  return {
    subscriptions: []
  };
}
export const QueryNextToMonthExpiryResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryNextToMonthExpiryResponse",
  is(o: any): o is QueryNextToMonthExpiryResponse {
    return o && (o.$typeUrl === QueryNextToMonthExpiryResponse.typeUrl || Array.isArray(o.subscriptions) && (!o.subscriptions.length || TimerExpiryInfo.is(o.subscriptions[0])));
  },
  isSDK(o: any): o is QueryNextToMonthExpiryResponseSDKType {
    return o && (o.$typeUrl === QueryNextToMonthExpiryResponse.typeUrl || Array.isArray(o.subscriptions) && (!o.subscriptions.length || TimerExpiryInfo.isSDK(o.subscriptions[0])));
  },
  isAmino(o: any): o is QueryNextToMonthExpiryResponseAmino {
    return o && (o.$typeUrl === QueryNextToMonthExpiryResponse.typeUrl || Array.isArray(o.subscriptions) && (!o.subscriptions.length || TimerExpiryInfo.isAmino(o.subscriptions[0])));
  },
  encode(message: QueryNextToMonthExpiryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subscriptions) {
      TimerExpiryInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextToMonthExpiryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextToMonthExpiryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptions.push(TimerExpiryInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNextToMonthExpiryResponse {
    return {
      subscriptions: Array.isArray(object?.subscriptions) ? object.subscriptions.map((e: any) => TimerExpiryInfo.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryNextToMonthExpiryResponse): JsonSafe<QueryNextToMonthExpiryResponse> {
    const obj: any = {};
    if (message.subscriptions) {
      obj.subscriptions = message.subscriptions.map(e => e ? TimerExpiryInfo.toJSON(e) : undefined);
    } else {
      obj.subscriptions = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryNextToMonthExpiryResponse>, I>>(object: I): QueryNextToMonthExpiryResponse {
    const message = createBaseQueryNextToMonthExpiryResponse();
    message.subscriptions = object.subscriptions?.map(e => TimerExpiryInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryNextToMonthExpiryResponseAmino): QueryNextToMonthExpiryResponse {
    const message = createBaseQueryNextToMonthExpiryResponse();
    message.subscriptions = object.subscriptions?.map(e => TimerExpiryInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryNextToMonthExpiryResponse): QueryNextToMonthExpiryResponseAmino {
    const obj: any = {};
    if (message.subscriptions) {
      obj.subscriptions = message.subscriptions.map(e => e ? TimerExpiryInfo.toAmino(e) : undefined);
    } else {
      obj.subscriptions = message.subscriptions;
    }
    return obj;
  },
  fromAminoMsg(object: QueryNextToMonthExpiryResponseAminoMsg): QueryNextToMonthExpiryResponse {
    return QueryNextToMonthExpiryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNextToMonthExpiryResponseProtoMsg): QueryNextToMonthExpiryResponse {
    return QueryNextToMonthExpiryResponse.decode(message.value);
  },
  toProto(message: QueryNextToMonthExpiryResponse): Uint8Array {
    return QueryNextToMonthExpiryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNextToMonthExpiryResponse): QueryNextToMonthExpiryResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryNextToMonthExpiryResponse",
      value: QueryNextToMonthExpiryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNextToMonthExpiryResponse.typeUrl, QueryNextToMonthExpiryResponse);
function createBaseQuerySubscriptionTrackedUsageRequest(): QuerySubscriptionTrackedUsageRequest {
  return {
    subscription: ""
  };
}
export const QuerySubscriptionTrackedUsageRequest = {
  typeUrl: "/lavanet.lava.subscription.QuerySubscriptionTrackedUsageRequest",
  is(o: any): o is QuerySubscriptionTrackedUsageRequest {
    return o && (o.$typeUrl === QuerySubscriptionTrackedUsageRequest.typeUrl || typeof o.subscription === "string");
  },
  isSDK(o: any): o is QuerySubscriptionTrackedUsageRequestSDKType {
    return o && (o.$typeUrl === QuerySubscriptionTrackedUsageRequest.typeUrl || typeof o.subscription === "string");
  },
  isAmino(o: any): o is QuerySubscriptionTrackedUsageRequestAmino {
    return o && (o.$typeUrl === QuerySubscriptionTrackedUsageRequest.typeUrl || typeof o.subscription === "string");
  },
  encode(message: QuerySubscriptionTrackedUsageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscription !== "") {
      writer.uint32(10).string(message.subscription);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubscriptionTrackedUsageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionTrackedUsageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscription = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubscriptionTrackedUsageRequest {
    return {
      subscription: isSet(object.subscription) ? String(object.subscription) : ""
    };
  },
  toJSON(message: QuerySubscriptionTrackedUsageRequest): JsonSafe<QuerySubscriptionTrackedUsageRequest> {
    const obj: any = {};
    message.subscription !== undefined && (obj.subscription = message.subscription);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySubscriptionTrackedUsageRequest>, I>>(object: I): QuerySubscriptionTrackedUsageRequest {
    const message = createBaseQuerySubscriptionTrackedUsageRequest();
    message.subscription = object.subscription ?? "";
    return message;
  },
  fromAmino(object: QuerySubscriptionTrackedUsageRequestAmino): QuerySubscriptionTrackedUsageRequest {
    const message = createBaseQuerySubscriptionTrackedUsageRequest();
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = object.subscription;
    }
    return message;
  },
  toAmino(message: QuerySubscriptionTrackedUsageRequest): QuerySubscriptionTrackedUsageRequestAmino {
    const obj: any = {};
    obj.subscription = message.subscription === "" ? undefined : message.subscription;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriptionTrackedUsageRequestAminoMsg): QuerySubscriptionTrackedUsageRequest {
    return QuerySubscriptionTrackedUsageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriptionTrackedUsageRequestProtoMsg): QuerySubscriptionTrackedUsageRequest {
    return QuerySubscriptionTrackedUsageRequest.decode(message.value);
  },
  toProto(message: QuerySubscriptionTrackedUsageRequest): Uint8Array {
    return QuerySubscriptionTrackedUsageRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionTrackedUsageRequest): QuerySubscriptionTrackedUsageRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QuerySubscriptionTrackedUsageRequest",
      value: QuerySubscriptionTrackedUsageRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySubscriptionTrackedUsageRequest.typeUrl, QuerySubscriptionTrackedUsageRequest);
function createBaseQuerySubscriptionTrackedUsageResponse(): QuerySubscriptionTrackedUsageResponse {
  return {
    subscription: undefined,
    usage: [],
    totalUsage: BigInt(0)
  };
}
export const QuerySubscriptionTrackedUsageResponse = {
  typeUrl: "/lavanet.lava.subscription.QuerySubscriptionTrackedUsageResponse",
  is(o: any): o is QuerySubscriptionTrackedUsageResponse {
    return o && (o.$typeUrl === QuerySubscriptionTrackedUsageResponse.typeUrl || Array.isArray(o.usage) && (!o.usage.length || TrackedCuInfo.is(o.usage[0])) && typeof o.totalUsage === "bigint");
  },
  isSDK(o: any): o is QuerySubscriptionTrackedUsageResponseSDKType {
    return o && (o.$typeUrl === QuerySubscriptionTrackedUsageResponse.typeUrl || Array.isArray(o.usage) && (!o.usage.length || TrackedCuInfo.isSDK(o.usage[0])) && typeof o.total_usage === "bigint");
  },
  isAmino(o: any): o is QuerySubscriptionTrackedUsageResponseAmino {
    return o && (o.$typeUrl === QuerySubscriptionTrackedUsageResponse.typeUrl || Array.isArray(o.usage) && (!o.usage.length || TrackedCuInfo.isAmino(o.usage[0])) && typeof o.total_usage === "bigint");
  },
  encode(message: QuerySubscriptionTrackedUsageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscription !== undefined) {
      Subscription.encode(message.subscription, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.usage) {
      TrackedCuInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalUsage !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalUsage);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubscriptionTrackedUsageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionTrackedUsageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscription = Subscription.decode(reader, reader.uint32());
          break;
        case 2:
          message.usage.push(TrackedCuInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalUsage = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubscriptionTrackedUsageResponse {
    return {
      subscription: isSet(object.subscription) ? Subscription.fromJSON(object.subscription) : undefined,
      usage: Array.isArray(object?.usage) ? object.usage.map((e: any) => TrackedCuInfo.fromJSON(e)) : [],
      totalUsage: isSet(object.totalUsage) ? BigInt(object.totalUsage.toString()) : BigInt(0)
    };
  },
  toJSON(message: QuerySubscriptionTrackedUsageResponse): JsonSafe<QuerySubscriptionTrackedUsageResponse> {
    const obj: any = {};
    message.subscription !== undefined && (obj.subscription = message.subscription ? Subscription.toJSON(message.subscription) : undefined);
    if (message.usage) {
      obj.usage = message.usage.map(e => e ? TrackedCuInfo.toJSON(e) : undefined);
    } else {
      obj.usage = [];
    }
    message.totalUsage !== undefined && (obj.totalUsage = (message.totalUsage || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySubscriptionTrackedUsageResponse>, I>>(object: I): QuerySubscriptionTrackedUsageResponse {
    const message = createBaseQuerySubscriptionTrackedUsageResponse();
    message.subscription = object.subscription !== undefined && object.subscription !== null ? Subscription.fromPartial(object.subscription) : undefined;
    message.usage = object.usage?.map(e => TrackedCuInfo.fromPartial(e)) || [];
    message.totalUsage = object.totalUsage !== undefined && object.totalUsage !== null ? BigInt(object.totalUsage.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySubscriptionTrackedUsageResponseAmino): QuerySubscriptionTrackedUsageResponse {
    const message = createBaseQuerySubscriptionTrackedUsageResponse();
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = Subscription.fromAmino(object.subscription);
    }
    message.usage = object.usage?.map(e => TrackedCuInfo.fromAmino(e)) || [];
    if (object.total_usage !== undefined && object.total_usage !== null) {
      message.totalUsage = BigInt(object.total_usage);
    }
    return message;
  },
  toAmino(message: QuerySubscriptionTrackedUsageResponse): QuerySubscriptionTrackedUsageResponseAmino {
    const obj: any = {};
    obj.subscription = message.subscription ? Subscription.toAmino(message.subscription) : undefined;
    if (message.usage) {
      obj.usage = message.usage.map(e => e ? TrackedCuInfo.toAmino(e) : undefined);
    } else {
      obj.usage = message.usage;
    }
    obj.total_usage = message.totalUsage !== BigInt(0) ? (message.totalUsage?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriptionTrackedUsageResponseAminoMsg): QuerySubscriptionTrackedUsageResponse {
    return QuerySubscriptionTrackedUsageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriptionTrackedUsageResponseProtoMsg): QuerySubscriptionTrackedUsageResponse {
    return QuerySubscriptionTrackedUsageResponse.decode(message.value);
  },
  toProto(message: QuerySubscriptionTrackedUsageResponse): Uint8Array {
    return QuerySubscriptionTrackedUsageResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionTrackedUsageResponse): QuerySubscriptionTrackedUsageResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QuerySubscriptionTrackedUsageResponse",
      value: QuerySubscriptionTrackedUsageResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySubscriptionTrackedUsageResponse.typeUrl, QuerySubscriptionTrackedUsageResponse);
function createBaseQueryEstimatedRewardsRequest(): QueryEstimatedRewardsRequest {
  return {
    provider: "",
    chainId: "",
    amountDelegator: ""
  };
}
export const QueryEstimatedRewardsRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryEstimatedRewardsRequest",
  is(o: any): o is QueryEstimatedRewardsRequest {
    return o && (o.$typeUrl === QueryEstimatedRewardsRequest.typeUrl || typeof o.provider === "string" && typeof o.chainId === "string" && typeof o.amountDelegator === "string");
  },
  isSDK(o: any): o is QueryEstimatedRewardsRequestSDKType {
    return o && (o.$typeUrl === QueryEstimatedRewardsRequest.typeUrl || typeof o.provider === "string" && typeof o.chain_id === "string" && typeof o.amount_delegator === "string");
  },
  isAmino(o: any): o is QueryEstimatedRewardsRequestAmino {
    return o && (o.$typeUrl === QueryEstimatedRewardsRequest.typeUrl || typeof o.provider === "string" && typeof o.chain_id === "string" && typeof o.amount_delegator === "string");
  },
  encode(message: QueryEstimatedRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.amountDelegator !== "") {
      writer.uint32(26).string(message.amountDelegator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimatedRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatedRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.amountDelegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimatedRewardsRequest {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      amountDelegator: isSet(object.amountDelegator) ? String(object.amountDelegator) : ""
    };
  },
  toJSON(message: QueryEstimatedRewardsRequest): JsonSafe<QueryEstimatedRewardsRequest> {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.amountDelegator !== undefined && (obj.amountDelegator = message.amountDelegator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEstimatedRewardsRequest>, I>>(object: I): QueryEstimatedRewardsRequest {
    const message = createBaseQueryEstimatedRewardsRequest();
    message.provider = object.provider ?? "";
    message.chainId = object.chainId ?? "";
    message.amountDelegator = object.amountDelegator ?? "";
    return message;
  },
  fromAmino(object: QueryEstimatedRewardsRequestAmino): QueryEstimatedRewardsRequest {
    const message = createBaseQueryEstimatedRewardsRequest();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.amount_delegator !== undefined && object.amount_delegator !== null) {
      message.amountDelegator = object.amount_delegator;
    }
    return message;
  },
  toAmino(message: QueryEstimatedRewardsRequest): QueryEstimatedRewardsRequestAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.amount_delegator = message.amountDelegator === "" ? undefined : message.amountDelegator;
    return obj;
  },
  fromAminoMsg(object: QueryEstimatedRewardsRequestAminoMsg): QueryEstimatedRewardsRequest {
    return QueryEstimatedRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimatedRewardsRequestProtoMsg): QueryEstimatedRewardsRequest {
    return QueryEstimatedRewardsRequest.decode(message.value);
  },
  toProto(message: QueryEstimatedRewardsRequest): Uint8Array {
    return QueryEstimatedRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimatedRewardsRequest): QueryEstimatedRewardsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryEstimatedRewardsRequest",
      value: QueryEstimatedRewardsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEstimatedRewardsRequest.typeUrl, QueryEstimatedRewardsRequest);
function createBaseQueryEstimatedProviderRewardsRequest(): QueryEstimatedProviderRewardsRequest {
  return {
    provider: "",
    amountDelegator: ""
  };
}
export const QueryEstimatedProviderRewardsRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryEstimatedProviderRewardsRequest",
  is(o: any): o is QueryEstimatedProviderRewardsRequest {
    return o && (o.$typeUrl === QueryEstimatedProviderRewardsRequest.typeUrl || typeof o.provider === "string" && typeof o.amountDelegator === "string");
  },
  isSDK(o: any): o is QueryEstimatedProviderRewardsRequestSDKType {
    return o && (o.$typeUrl === QueryEstimatedProviderRewardsRequest.typeUrl || typeof o.provider === "string" && typeof o.amount_delegator === "string");
  },
  isAmino(o: any): o is QueryEstimatedProviderRewardsRequestAmino {
    return o && (o.$typeUrl === QueryEstimatedProviderRewardsRequest.typeUrl || typeof o.provider === "string" && typeof o.amount_delegator === "string");
  },
  encode(message: QueryEstimatedProviderRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.amountDelegator !== "") {
      writer.uint32(18).string(message.amountDelegator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimatedProviderRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatedProviderRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.amountDelegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimatedProviderRewardsRequest {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      amountDelegator: isSet(object.amountDelegator) ? String(object.amountDelegator) : ""
    };
  },
  toJSON(message: QueryEstimatedProviderRewardsRequest): JsonSafe<QueryEstimatedProviderRewardsRequest> {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.amountDelegator !== undefined && (obj.amountDelegator = message.amountDelegator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEstimatedProviderRewardsRequest>, I>>(object: I): QueryEstimatedProviderRewardsRequest {
    const message = createBaseQueryEstimatedProviderRewardsRequest();
    message.provider = object.provider ?? "";
    message.amountDelegator = object.amountDelegator ?? "";
    return message;
  },
  fromAmino(object: QueryEstimatedProviderRewardsRequestAmino): QueryEstimatedProviderRewardsRequest {
    const message = createBaseQueryEstimatedProviderRewardsRequest();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.amount_delegator !== undefined && object.amount_delegator !== null) {
      message.amountDelegator = object.amount_delegator;
    }
    return message;
  },
  toAmino(message: QueryEstimatedProviderRewardsRequest): QueryEstimatedProviderRewardsRequestAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.amount_delegator = message.amountDelegator === "" ? undefined : message.amountDelegator;
    return obj;
  },
  fromAminoMsg(object: QueryEstimatedProviderRewardsRequestAminoMsg): QueryEstimatedProviderRewardsRequest {
    return QueryEstimatedProviderRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimatedProviderRewardsRequestProtoMsg): QueryEstimatedProviderRewardsRequest {
    return QueryEstimatedProviderRewardsRequest.decode(message.value);
  },
  toProto(message: QueryEstimatedProviderRewardsRequest): Uint8Array {
    return QueryEstimatedProviderRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimatedProviderRewardsRequest): QueryEstimatedProviderRewardsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryEstimatedProviderRewardsRequest",
      value: QueryEstimatedProviderRewardsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEstimatedProviderRewardsRequest.typeUrl, QueryEstimatedProviderRewardsRequest);
function createBaseEstimatedRewardInfo(): EstimatedRewardInfo {
  return {
    source: "",
    amount: []
  };
}
export const EstimatedRewardInfo = {
  typeUrl: "/lavanet.lava.subscription.EstimatedRewardInfo",
  is(o: any): o is EstimatedRewardInfo {
    return o && (o.$typeUrl === EstimatedRewardInfo.typeUrl || typeof o.source === "string" && Array.isArray(o.amount) && (!o.amount.length || DecCoin.is(o.amount[0])));
  },
  isSDK(o: any): o is EstimatedRewardInfoSDKType {
    return o && (o.$typeUrl === EstimatedRewardInfo.typeUrl || typeof o.source === "string" && Array.isArray(o.amount) && (!o.amount.length || DecCoin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is EstimatedRewardInfoAmino {
    return o && (o.$typeUrl === EstimatedRewardInfo.typeUrl || typeof o.source === "string" && Array.isArray(o.amount) && (!o.amount.length || DecCoin.isAmino(o.amount[0])));
  },
  encode(message: EstimatedRewardInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    for (const v of message.amount) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimatedRewardInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimatedRewardInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;
        case 2:
          message.amount.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimatedRewardInfo {
    return {
      source: isSet(object.source) ? String(object.source) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: EstimatedRewardInfo): JsonSafe<EstimatedRewardInfo> {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EstimatedRewardInfo>, I>>(object: I): EstimatedRewardInfo {
    const message = createBaseEstimatedRewardInfo();
    message.source = object.source ?? "";
    message.amount = object.amount?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EstimatedRewardInfoAmino): EstimatedRewardInfo {
    const message = createBaseEstimatedRewardInfo();
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    message.amount = object.amount?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EstimatedRewardInfo): EstimatedRewardInfoAmino {
    const obj: any = {};
    obj.source = message.source === "" ? undefined : message.source;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: EstimatedRewardInfoAminoMsg): EstimatedRewardInfo {
    return EstimatedRewardInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: EstimatedRewardInfoProtoMsg): EstimatedRewardInfo {
    return EstimatedRewardInfo.decode(message.value);
  },
  toProto(message: EstimatedRewardInfo): Uint8Array {
    return EstimatedRewardInfo.encode(message).finish();
  },
  toProtoMsg(message: EstimatedRewardInfo): EstimatedRewardInfoProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.EstimatedRewardInfo",
      value: EstimatedRewardInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EstimatedRewardInfo.typeUrl, EstimatedRewardInfo);
function createBaseQueryEstimatedRewardsResponse(): QueryEstimatedRewardsResponse {
  return {
    info: [],
    total: [],
    recommendedBlock: BigInt(0)
  };
}
export const QueryEstimatedRewardsResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryEstimatedRewardsResponse",
  is(o: any): o is QueryEstimatedRewardsResponse {
    return o && (o.$typeUrl === QueryEstimatedRewardsResponse.typeUrl || Array.isArray(o.info) && (!o.info.length || EstimatedRewardInfo.is(o.info[0])) && Array.isArray(o.total) && (!o.total.length || DecCoin.is(o.total[0])) && typeof o.recommendedBlock === "bigint");
  },
  isSDK(o: any): o is QueryEstimatedRewardsResponseSDKType {
    return o && (o.$typeUrl === QueryEstimatedRewardsResponse.typeUrl || Array.isArray(o.info) && (!o.info.length || EstimatedRewardInfo.isSDK(o.info[0])) && Array.isArray(o.total) && (!o.total.length || DecCoin.isSDK(o.total[0])) && typeof o.recommended_block === "bigint");
  },
  isAmino(o: any): o is QueryEstimatedRewardsResponseAmino {
    return o && (o.$typeUrl === QueryEstimatedRewardsResponse.typeUrl || Array.isArray(o.info) && (!o.info.length || EstimatedRewardInfo.isAmino(o.info[0])) && Array.isArray(o.total) && (!o.total.length || DecCoin.isAmino(o.total[0])) && typeof o.recommended_block === "bigint");
  },
  encode(message: QueryEstimatedRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.info) {
      EstimatedRewardInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.recommendedBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.recommendedBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimatedRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatedRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info.push(EstimatedRewardInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.recommendedBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimatedRewardsResponse {
    return {
      info: Array.isArray(object?.info) ? object.info.map((e: any) => EstimatedRewardInfo.fromJSON(e)) : [],
      total: Array.isArray(object?.total) ? object.total.map((e: any) => DecCoin.fromJSON(e)) : [],
      recommendedBlock: isSet(object.recommendedBlock) ? BigInt(object.recommendedBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryEstimatedRewardsResponse): JsonSafe<QueryEstimatedRewardsResponse> {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map(e => e ? EstimatedRewardInfo.toJSON(e) : undefined);
    } else {
      obj.info = [];
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.total = [];
    }
    message.recommendedBlock !== undefined && (obj.recommendedBlock = (message.recommendedBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEstimatedRewardsResponse>, I>>(object: I): QueryEstimatedRewardsResponse {
    const message = createBaseQueryEstimatedRewardsResponse();
    message.info = object.info?.map(e => EstimatedRewardInfo.fromPartial(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromPartial(e)) || [];
    message.recommendedBlock = object.recommendedBlock !== undefined && object.recommendedBlock !== null ? BigInt(object.recommendedBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryEstimatedRewardsResponseAmino): QueryEstimatedRewardsResponse {
    const message = createBaseQueryEstimatedRewardsResponse();
    message.info = object.info?.map(e => EstimatedRewardInfo.fromAmino(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.recommended_block !== undefined && object.recommended_block !== null) {
      message.recommendedBlock = BigInt(object.recommended_block);
    }
    return message;
  },
  toAmino(message: QueryEstimatedRewardsResponse): QueryEstimatedRewardsResponseAmino {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map(e => e ? EstimatedRewardInfo.toAmino(e) : undefined);
    } else {
      obj.info = message.info;
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.total = message.total;
    }
    obj.recommended_block = message.recommendedBlock !== BigInt(0) ? (message.recommendedBlock?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEstimatedRewardsResponseAminoMsg): QueryEstimatedRewardsResponse {
    return QueryEstimatedRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimatedRewardsResponseProtoMsg): QueryEstimatedRewardsResponse {
    return QueryEstimatedRewardsResponse.decode(message.value);
  },
  toProto(message: QueryEstimatedRewardsResponse): Uint8Array {
    return QueryEstimatedRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimatedRewardsResponse): QueryEstimatedRewardsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryEstimatedRewardsResponse",
      value: QueryEstimatedRewardsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEstimatedRewardsResponse.typeUrl, QueryEstimatedRewardsResponse);
function createBaseQueryEstimatedValidatorRewardsRequest(): QueryEstimatedValidatorRewardsRequest {
  return {
    validator: "",
    amountDelegator: ""
  };
}
export const QueryEstimatedValidatorRewardsRequest = {
  typeUrl: "/lavanet.lava.subscription.QueryEstimatedValidatorRewardsRequest",
  is(o: any): o is QueryEstimatedValidatorRewardsRequest {
    return o && (o.$typeUrl === QueryEstimatedValidatorRewardsRequest.typeUrl || typeof o.validator === "string" && typeof o.amountDelegator === "string");
  },
  isSDK(o: any): o is QueryEstimatedValidatorRewardsRequestSDKType {
    return o && (o.$typeUrl === QueryEstimatedValidatorRewardsRequest.typeUrl || typeof o.validator === "string" && typeof o.amount_delegator === "string");
  },
  isAmino(o: any): o is QueryEstimatedValidatorRewardsRequestAmino {
    return o && (o.$typeUrl === QueryEstimatedValidatorRewardsRequest.typeUrl || typeof o.validator === "string" && typeof o.amount_delegator === "string");
  },
  encode(message: QueryEstimatedValidatorRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.amountDelegator !== "") {
      writer.uint32(18).string(message.amountDelegator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimatedValidatorRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatedValidatorRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.amountDelegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimatedValidatorRewardsRequest {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      amountDelegator: isSet(object.amountDelegator) ? String(object.amountDelegator) : ""
    };
  },
  toJSON(message: QueryEstimatedValidatorRewardsRequest): JsonSafe<QueryEstimatedValidatorRewardsRequest> {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.amountDelegator !== undefined && (obj.amountDelegator = message.amountDelegator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEstimatedValidatorRewardsRequest>, I>>(object: I): QueryEstimatedValidatorRewardsRequest {
    const message = createBaseQueryEstimatedValidatorRewardsRequest();
    message.validator = object.validator ?? "";
    message.amountDelegator = object.amountDelegator ?? "";
    return message;
  },
  fromAmino(object: QueryEstimatedValidatorRewardsRequestAmino): QueryEstimatedValidatorRewardsRequest {
    const message = createBaseQueryEstimatedValidatorRewardsRequest();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.amount_delegator !== undefined && object.amount_delegator !== null) {
      message.amountDelegator = object.amount_delegator;
    }
    return message;
  },
  toAmino(message: QueryEstimatedValidatorRewardsRequest): QueryEstimatedValidatorRewardsRequestAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.amount_delegator = message.amountDelegator === "" ? undefined : message.amountDelegator;
    return obj;
  },
  fromAminoMsg(object: QueryEstimatedValidatorRewardsRequestAminoMsg): QueryEstimatedValidatorRewardsRequest {
    return QueryEstimatedValidatorRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimatedValidatorRewardsRequestProtoMsg): QueryEstimatedValidatorRewardsRequest {
    return QueryEstimatedValidatorRewardsRequest.decode(message.value);
  },
  toProto(message: QueryEstimatedValidatorRewardsRequest): Uint8Array {
    return QueryEstimatedValidatorRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimatedValidatorRewardsRequest): QueryEstimatedValidatorRewardsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryEstimatedValidatorRewardsRequest",
      value: QueryEstimatedValidatorRewardsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEstimatedValidatorRewardsRequest.typeUrl, QueryEstimatedValidatorRewardsRequest);
function createBaseQueryEstimatedValidatorRewardsResponse(): QueryEstimatedValidatorRewardsResponse {
  return {
    info: [],
    total: []
  };
}
export const QueryEstimatedValidatorRewardsResponse = {
  typeUrl: "/lavanet.lava.subscription.QueryEstimatedValidatorRewardsResponse",
  is(o: any): o is QueryEstimatedValidatorRewardsResponse {
    return o && (o.$typeUrl === QueryEstimatedValidatorRewardsResponse.typeUrl || Array.isArray(o.total) && (!o.total.length || DecCoin.is(o.total[0])));
  },
  isSDK(o: any): o is QueryEstimatedValidatorRewardsResponseSDKType {
    return o && (o.$typeUrl === QueryEstimatedValidatorRewardsResponse.typeUrl || Array.isArray(o.total) && (!o.total.length || DecCoin.isSDK(o.total[0])));
  },
  isAmino(o: any): o is QueryEstimatedValidatorRewardsResponseAmino {
    return o && (o.$typeUrl === QueryEstimatedValidatorRewardsResponse.typeUrl || Array.isArray(o.total) && (!o.total.length || DecCoin.isAmino(o.total[0])));
  },
  encode(message: QueryEstimatedValidatorRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.info) {
      EstimatedRewardInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimatedValidatorRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimatedValidatorRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info.push(EstimatedRewardInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimatedValidatorRewardsResponse {
    return {
      info: Array.isArray(object?.info) ? object.info.map((e: any) => EstimatedRewardInfo.fromJSON(e)) : [],
      total: Array.isArray(object?.total) ? object.total.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryEstimatedValidatorRewardsResponse): JsonSafe<QueryEstimatedValidatorRewardsResponse> {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map(e => e ? EstimatedRewardInfo.toJSON(e) : undefined);
    } else {
      obj.info = [];
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.total = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEstimatedValidatorRewardsResponse>, I>>(object: I): QueryEstimatedValidatorRewardsResponse {
    const message = createBaseQueryEstimatedValidatorRewardsResponse();
    message.info = object.info?.map(e => EstimatedRewardInfo.fromPartial(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryEstimatedValidatorRewardsResponseAmino): QueryEstimatedValidatorRewardsResponse {
    const message = createBaseQueryEstimatedValidatorRewardsResponse();
    message.info = object.info?.map(e => EstimatedRewardInfo.fromAmino(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryEstimatedValidatorRewardsResponse): QueryEstimatedValidatorRewardsResponseAmino {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map(e => e ? EstimatedRewardInfo.toAmino(e) : undefined);
    } else {
      obj.info = message.info;
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.total = message.total;
    }
    return obj;
  },
  fromAminoMsg(object: QueryEstimatedValidatorRewardsResponseAminoMsg): QueryEstimatedValidatorRewardsResponse {
    return QueryEstimatedValidatorRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimatedValidatorRewardsResponseProtoMsg): QueryEstimatedValidatorRewardsResponse {
    return QueryEstimatedValidatorRewardsResponse.decode(message.value);
  },
  toProto(message: QueryEstimatedValidatorRewardsResponse): Uint8Array {
    return QueryEstimatedValidatorRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimatedValidatorRewardsResponse): QueryEstimatedValidatorRewardsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.QueryEstimatedValidatorRewardsResponse",
      value: QueryEstimatedValidatorRewardsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEstimatedValidatorRewardsResponse.typeUrl, QueryEstimatedValidatorRewardsResponse);