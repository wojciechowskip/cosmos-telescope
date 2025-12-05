//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact, isSet, isObject, bytesFromBase64, base64FromBytes } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/babylon.incentive.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/babylon.incentive.QueryParamsRequest";
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
  typeUrl: "/babylon.incentive.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/babylon.incentive.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryRewardGaugesRequest is request type for the Query/RewardGauges RPC
 * method.
 */
export interface QueryRewardGaugesRequest {
  /** address is the address of the stakeholder in bech32 string */
  address: string;
}
export interface QueryRewardGaugesRequestProtoMsg {
  typeUrl: "/babylon.incentive.QueryRewardGaugesRequest";
  value: Uint8Array;
}
/**
 * QueryRewardGaugesRequest is request type for the Query/RewardGauges RPC
 * method.
 */
export interface QueryRewardGaugesRequestAmino {
  /** address is the address of the stakeholder in bech32 string */
  address?: string;
}
export interface QueryRewardGaugesRequestAminoMsg {
  type: "/babylon.incentive.QueryRewardGaugesRequest";
  value: QueryRewardGaugesRequestAmino;
}
/**
 * QueryRewardGaugesRequest is request type for the Query/RewardGauges RPC
 * method.
 */
export interface QueryRewardGaugesRequestSDKType {
  address: string;
}
/**
 * RewardGaugesResponse is an object that stores rewards distributed to a BTC
 * staking stakeholder
 */
export interface RewardGaugesResponse {
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
export interface RewardGaugesResponseProtoMsg {
  typeUrl: "/babylon.incentive.RewardGaugesResponse";
  value: Uint8Array;
}
/**
 * RewardGaugesResponse is an object that stores rewards distributed to a BTC
 * staking stakeholder
 */
export interface RewardGaugesResponseAmino {
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
export interface RewardGaugesResponseAminoMsg {
  type: "/babylon.incentive.RewardGaugesResponse";
  value: RewardGaugesResponseAmino;
}
/**
 * RewardGaugesResponse is an object that stores rewards distributed to a BTC
 * staking stakeholder
 */
export interface RewardGaugesResponseSDKType {
  coins: CoinSDKType[];
  withdrawn_coins: CoinSDKType[];
}
export interface QueryRewardGaugesResponse_RewardGaugesEntry {
  key: string;
  value?: RewardGaugesResponse;
}
export interface QueryRewardGaugesResponse_RewardGaugesEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface QueryRewardGaugesResponse_RewardGaugesEntryAmino {
  key?: string;
  value?: RewardGaugesResponseAmino;
}
export interface QueryRewardGaugesResponse_RewardGaugesEntryAminoMsg {
  type: string;
  value: QueryRewardGaugesResponse_RewardGaugesEntryAmino;
}
export interface QueryRewardGaugesResponse_RewardGaugesEntrySDKType {
  key: string;
  value?: RewardGaugesResponseSDKType;
}
/**
 * QueryRewardGaugesResponse is response type for the Query/RewardGauges RPC
 * method.
 */
export interface QueryRewardGaugesResponse {
  /**
   * reward_gauges is the map of reward gauges, where key is the stakeholder
   * type and value is the reward gauge holding all rewards for the stakeholder
   * in that type
   */
  rewardGauges: {
    [key: string]: RewardGaugesResponse;
  };
}
export interface QueryRewardGaugesResponseProtoMsg {
  typeUrl: "/babylon.incentive.QueryRewardGaugesResponse";
  value: Uint8Array;
}
/**
 * QueryRewardGaugesResponse is response type for the Query/RewardGauges RPC
 * method.
 */
export interface QueryRewardGaugesResponseAmino {
  /**
   * reward_gauges is the map of reward gauges, where key is the stakeholder
   * type and value is the reward gauge holding all rewards for the stakeholder
   * in that type
   */
  reward_gauges?: {
    [key: string]: RewardGaugesResponseAmino;
  };
}
export interface QueryRewardGaugesResponseAminoMsg {
  type: "/babylon.incentive.QueryRewardGaugesResponse";
  value: QueryRewardGaugesResponseAmino;
}
/**
 * QueryRewardGaugesResponse is response type for the Query/RewardGauges RPC
 * method.
 */
export interface QueryRewardGaugesResponseSDKType {
  reward_gauges: {
    [key: string]: RewardGaugesResponseSDKType;
  };
}
/**
 * QueryBTCStakingGaugeRequest is request type for the Query/BTCStakingGauge RPC
 * method.
 */
export interface QueryBTCStakingGaugeRequest {
  /** height is the queried Babylon height */
  height: bigint;
}
export interface QueryBTCStakingGaugeRequestProtoMsg {
  typeUrl: "/babylon.incentive.QueryBTCStakingGaugeRequest";
  value: Uint8Array;
}
/**
 * QueryBTCStakingGaugeRequest is request type for the Query/BTCStakingGauge RPC
 * method.
 */
export interface QueryBTCStakingGaugeRequestAmino {
  /** height is the queried Babylon height */
  height?: string;
}
export interface QueryBTCStakingGaugeRequestAminoMsg {
  type: "/babylon.incentive.QueryBTCStakingGaugeRequest";
  value: QueryBTCStakingGaugeRequestAmino;
}
/**
 * QueryBTCStakingGaugeRequest is request type for the Query/BTCStakingGauge RPC
 * method.
 */
export interface QueryBTCStakingGaugeRequestSDKType {
  height: bigint;
}
/**
 * BTCStakingGaugeResponse is response type for the Query/BTCStakingGauge RPC
 * method.
 */
export interface BTCStakingGaugeResponse {
  /**
   * coins that have been in the gauge
   * can have multiple coin denoms
   */
  coins: Coin[];
}
export interface BTCStakingGaugeResponseProtoMsg {
  typeUrl: "/babylon.incentive.BTCStakingGaugeResponse";
  value: Uint8Array;
}
/**
 * BTCStakingGaugeResponse is response type for the Query/BTCStakingGauge RPC
 * method.
 */
export interface BTCStakingGaugeResponseAmino {
  /**
   * coins that have been in the gauge
   * can have multiple coin denoms
   */
  coins?: CoinAmino[];
}
export interface BTCStakingGaugeResponseAminoMsg {
  type: "/babylon.incentive.BTCStakingGaugeResponse";
  value: BTCStakingGaugeResponseAmino;
}
/**
 * BTCStakingGaugeResponse is response type for the Query/BTCStakingGauge RPC
 * method.
 */
export interface BTCStakingGaugeResponseSDKType {
  coins: CoinSDKType[];
}
/**
 * QueryBTCStakingGaugeResponse is response type for the Query/BTCStakingGauge
 * RPC method.
 */
export interface QueryBTCStakingGaugeResponse {
  /** gauge is the BTC staking gauge at the queried height */
  gauge?: BTCStakingGaugeResponse;
}
export interface QueryBTCStakingGaugeResponseProtoMsg {
  typeUrl: "/babylon.incentive.QueryBTCStakingGaugeResponse";
  value: Uint8Array;
}
/**
 * QueryBTCStakingGaugeResponse is response type for the Query/BTCStakingGauge
 * RPC method.
 */
export interface QueryBTCStakingGaugeResponseAmino {
  /** gauge is the BTC staking gauge at the queried height */
  gauge?: BTCStakingGaugeResponseAmino;
}
export interface QueryBTCStakingGaugeResponseAminoMsg {
  type: "/babylon.incentive.QueryBTCStakingGaugeResponse";
  value: QueryBTCStakingGaugeResponseAmino;
}
/**
 * QueryBTCStakingGaugeResponse is response type for the Query/BTCStakingGauge
 * RPC method.
 */
export interface QueryBTCStakingGaugeResponseSDKType {
  gauge?: BTCStakingGaugeResponseSDKType;
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
export interface QueryDelegatorWithdrawAddressRequestProtoMsg {
  typeUrl: "/babylon.incentive.QueryDelegatorWithdrawAddressRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequestAmino {
  /** delegator_address defines the delegator address to query for. */
  delegator_address?: string;
}
export interface QueryDelegatorWithdrawAddressRequestAminoMsg {
  type: "/babylon.incentive.QueryDelegatorWithdrawAddressRequest";
  value: QueryDelegatorWithdrawAddressRequestAmino;
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequestSDKType {
  delegator_address: string;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
  /** withdraw_address defines the delegator address to query for. */
  withdrawAddress: string;
}
export interface QueryDelegatorWithdrawAddressResponseProtoMsg {
  typeUrl: "/babylon.incentive.QueryDelegatorWithdrawAddressResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponseAmino {
  /** withdraw_address defines the delegator address to query for. */
  withdraw_address?: string;
}
export interface QueryDelegatorWithdrawAddressResponseAminoMsg {
  type: "/babylon.incentive.QueryDelegatorWithdrawAddressResponse";
  value: QueryDelegatorWithdrawAddressResponseAmino;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponseSDKType {
  withdraw_address: string;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
  /**
   * finality_provider_address defines the finality provider address of the
   * delegation.
   */
  finalityProviderAddress: string;
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
export interface QueryDelegationRewardsRequestProtoMsg {
  typeUrl: "/babylon.incentive.QueryDelegationRewardsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequestAmino {
  /**
   * finality_provider_address defines the finality provider address of the
   * delegation.
   */
  finality_provider_address?: string;
  /** delegator_address defines the delegator address to query for. */
  delegator_address?: string;
}
export interface QueryDelegationRewardsRequestAminoMsg {
  type: "/babylon.incentive.QueryDelegationRewardsRequest";
  value: QueryDelegationRewardsRequestAmino;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequestSDKType {
  finality_provider_address: string;
  delegator_address: string;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
  /**
   * rewards are the delegation reward coins
   * Can have multiple coin denoms
   */
  rewards: Coin[];
}
export interface QueryDelegationRewardsResponseProtoMsg {
  typeUrl: "/babylon.incentive.QueryDelegationRewardsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponseAmino {
  /**
   * rewards are the delegation reward coins
   * Can have multiple coin denoms
   */
  rewards?: CoinAmino[];
}
export interface QueryDelegationRewardsResponseAminoMsg {
  type: "/babylon.incentive.QueryDelegationRewardsResponse";
  value: QueryDelegationRewardsResponseAmino;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponseSDKType {
  rewards: CoinSDKType[];
}
/**
 * QueryFpCurrentRewardsRequest is the request type for the
 * Query/FpCurrentRewards RPC method.
 */
export interface QueryFpCurrentRewardsRequest {
  /**
   * finality_provider_address defines the finality provider address of the
   * delegation.
   */
  finalityProviderAddress: string;
}
export interface QueryFpCurrentRewardsRequestProtoMsg {
  typeUrl: "/babylon.incentive.QueryFpCurrentRewardsRequest";
  value: Uint8Array;
}
/**
 * QueryFpCurrentRewardsRequest is the request type for the
 * Query/FpCurrentRewards RPC method.
 */
export interface QueryFpCurrentRewardsRequestAmino {
  /**
   * finality_provider_address defines the finality provider address of the
   * delegation.
   */
  finality_provider_address?: string;
}
export interface QueryFpCurrentRewardsRequestAminoMsg {
  type: "/babylon.incentive.QueryFpCurrentRewardsRequest";
  value: QueryFpCurrentRewardsRequestAmino;
}
/**
 * QueryFpCurrentRewardsRequest is the request type for the
 * Query/FpCurrentRewards RPC method.
 */
export interface QueryFpCurrentRewardsRequestSDKType {
  finality_provider_address: string;
}
/**
 * QueryFpCurrentRewardsResponse is the response type for the
 * Query/FpCurrentRewards RPC method.
 */
export interface QueryFpCurrentRewardsResponse {
  /**
   * CurrentRewards is the current rewards that the finality provider have
   * to be distributed for his BTC stakers.
   */
  currentRewards: Coin[];
  /**
   * Period is the current period that serves as a reference for
   * creating new historical rewards.
   */
  period: bigint;
  /**
   * TotalActiveSat is the total amount of active satoshi delegated
   * to this finality provider.
   */
  totalActiveSat: Uint8Array;
}
export interface QueryFpCurrentRewardsResponseProtoMsg {
  typeUrl: "/babylon.incentive.QueryFpCurrentRewardsResponse";
  value: Uint8Array;
}
/**
 * QueryFpCurrentRewardsResponse is the response type for the
 * Query/FpCurrentRewards RPC method.
 */
export interface QueryFpCurrentRewardsResponseAmino {
  /**
   * CurrentRewards is the current rewards that the finality provider have
   * to be distributed for his BTC stakers.
   */
  current_rewards?: CoinAmino[];
  /**
   * Period is the current period that serves as a reference for
   * creating new historical rewards.
   */
  period?: string;
  /**
   * TotalActiveSat is the total amount of active satoshi delegated
   * to this finality provider.
   */
  total_active_sat?: string;
}
export interface QueryFpCurrentRewardsResponseAminoMsg {
  type: "/babylon.incentive.QueryFpCurrentRewardsResponse";
  value: QueryFpCurrentRewardsResponseAmino;
}
/**
 * QueryFpCurrentRewardsResponse is the response type for the
 * Query/FpCurrentRewards RPC method.
 */
export interface QueryFpCurrentRewardsResponseSDKType {
  current_rewards: CoinSDKType[];
  period: bigint;
  total_active_sat: Uint8Array;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/babylon.incentive.QueryParamsRequest",
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
      typeUrl: "/babylon.incentive.QueryParamsRequest",
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
  typeUrl: "/babylon.incentive.QueryParamsResponse",
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
      typeUrl: "/babylon.incentive.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryRewardGaugesRequest(): QueryRewardGaugesRequest {
  return {
    address: ""
  };
}
export const QueryRewardGaugesRequest = {
  typeUrl: "/babylon.incentive.QueryRewardGaugesRequest",
  is(o: any): o is QueryRewardGaugesRequest {
    return o && (o.$typeUrl === QueryRewardGaugesRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryRewardGaugesRequestSDKType {
    return o && (o.$typeUrl === QueryRewardGaugesRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryRewardGaugesRequestAmino {
    return o && (o.$typeUrl === QueryRewardGaugesRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryRewardGaugesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardGaugesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardGaugesRequest();
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
  fromJSON(object: any): QueryRewardGaugesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryRewardGaugesRequest): JsonSafe<QueryRewardGaugesRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardGaugesRequest>, I>>(object: I): QueryRewardGaugesRequest {
    const message = createBaseQueryRewardGaugesRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryRewardGaugesRequestAmino): QueryRewardGaugesRequest {
    const message = createBaseQueryRewardGaugesRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryRewardGaugesRequest): QueryRewardGaugesRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryRewardGaugesRequestAminoMsg): QueryRewardGaugesRequest {
    return QueryRewardGaugesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardGaugesRequestProtoMsg): QueryRewardGaugesRequest {
    return QueryRewardGaugesRequest.decode(message.value);
  },
  toProto(message: QueryRewardGaugesRequest): Uint8Array {
    return QueryRewardGaugesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardGaugesRequest): QueryRewardGaugesRequestProtoMsg {
    return {
      typeUrl: "/babylon.incentive.QueryRewardGaugesRequest",
      value: QueryRewardGaugesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryRewardGaugesRequest.typeUrl, QueryRewardGaugesRequest);
function createBaseRewardGaugesResponse(): RewardGaugesResponse {
  return {
    coins: [],
    withdrawnCoins: []
  };
}
export const RewardGaugesResponse = {
  typeUrl: "/babylon.incentive.RewardGaugesResponse",
  is(o: any): o is RewardGaugesResponse {
    return o && (o.$typeUrl === RewardGaugesResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])) && Array.isArray(o.withdrawnCoins) && (!o.withdrawnCoins.length || Coin.is(o.withdrawnCoins[0])));
  },
  isSDK(o: any): o is RewardGaugesResponseSDKType {
    return o && (o.$typeUrl === RewardGaugesResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])) && Array.isArray(o.withdrawn_coins) && (!o.withdrawn_coins.length || Coin.isSDK(o.withdrawn_coins[0])));
  },
  isAmino(o: any): o is RewardGaugesResponseAmino {
    return o && (o.$typeUrl === RewardGaugesResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])) && Array.isArray(o.withdrawn_coins) && (!o.withdrawn_coins.length || Coin.isAmino(o.withdrawn_coins[0])));
  },
  encode(message: RewardGaugesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.withdrawnCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardGaugesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardGaugesResponse();
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
  fromJSON(object: any): RewardGaugesResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      withdrawnCoins: Array.isArray(object?.withdrawnCoins) ? object.withdrawnCoins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: RewardGaugesResponse): JsonSafe<RewardGaugesResponse> {
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
  fromPartial<I extends Exact<DeepPartial<RewardGaugesResponse>, I>>(object: I): RewardGaugesResponse {
    const message = createBaseRewardGaugesResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.withdrawnCoins = object.withdrawnCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RewardGaugesResponseAmino): RewardGaugesResponse {
    const message = createBaseRewardGaugesResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    message.withdrawnCoins = object.withdrawn_coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RewardGaugesResponse): RewardGaugesResponseAmino {
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
  fromAminoMsg(object: RewardGaugesResponseAminoMsg): RewardGaugesResponse {
    return RewardGaugesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardGaugesResponseProtoMsg): RewardGaugesResponse {
    return RewardGaugesResponse.decode(message.value);
  },
  toProto(message: RewardGaugesResponse): Uint8Array {
    return RewardGaugesResponse.encode(message).finish();
  },
  toProtoMsg(message: RewardGaugesResponse): RewardGaugesResponseProtoMsg {
    return {
      typeUrl: "/babylon.incentive.RewardGaugesResponse",
      value: RewardGaugesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RewardGaugesResponse.typeUrl, RewardGaugesResponse);
function createBaseQueryRewardGaugesResponse_RewardGaugesEntry(): QueryRewardGaugesResponse_RewardGaugesEntry {
  return {
    key: "",
    value: undefined
  };
}
export const QueryRewardGaugesResponse_RewardGaugesEntry = {
  encode(message: QueryRewardGaugesResponse_RewardGaugesEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      RewardGaugesResponse.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardGaugesResponse_RewardGaugesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardGaugesResponse_RewardGaugesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = RewardGaugesResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardGaugesResponse_RewardGaugesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? RewardGaugesResponse.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: QueryRewardGaugesResponse_RewardGaugesEntry): JsonSafe<QueryRewardGaugesResponse_RewardGaugesEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? RewardGaugesResponse.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardGaugesResponse_RewardGaugesEntry>, I>>(object: I): QueryRewardGaugesResponse_RewardGaugesEntry {
    const message = createBaseQueryRewardGaugesResponse_RewardGaugesEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? RewardGaugesResponse.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: QueryRewardGaugesResponse_RewardGaugesEntryAmino): QueryRewardGaugesResponse_RewardGaugesEntry {
    const message = createBaseQueryRewardGaugesResponse_RewardGaugesEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = RewardGaugesResponse.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: QueryRewardGaugesResponse_RewardGaugesEntry): QueryRewardGaugesResponse_RewardGaugesEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value ? RewardGaugesResponse.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRewardGaugesResponse_RewardGaugesEntryAminoMsg): QueryRewardGaugesResponse_RewardGaugesEntry {
    return QueryRewardGaugesResponse_RewardGaugesEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardGaugesResponse_RewardGaugesEntryProtoMsg): QueryRewardGaugesResponse_RewardGaugesEntry {
    return QueryRewardGaugesResponse_RewardGaugesEntry.decode(message.value);
  },
  toProto(message: QueryRewardGaugesResponse_RewardGaugesEntry): Uint8Array {
    return QueryRewardGaugesResponse_RewardGaugesEntry.encode(message).finish();
  }
};
function createBaseQueryRewardGaugesResponse(): QueryRewardGaugesResponse {
  return {
    rewardGauges: {}
  };
}
export const QueryRewardGaugesResponse = {
  typeUrl: "/babylon.incentive.QueryRewardGaugesResponse",
  is(o: any): o is QueryRewardGaugesResponse {
    return o && (o.$typeUrl === QueryRewardGaugesResponse.typeUrl || isSet(o.rewardGauges));
  },
  isSDK(o: any): o is QueryRewardGaugesResponseSDKType {
    return o && (o.$typeUrl === QueryRewardGaugesResponse.typeUrl || isSet(o.reward_gauges));
  },
  isAmino(o: any): o is QueryRewardGaugesResponseAmino {
    return o && (o.$typeUrl === QueryRewardGaugesResponse.typeUrl || isSet(o.reward_gauges));
  },
  encode(message: QueryRewardGaugesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.rewardGauges).forEach(([key, value]) => {
      QueryRewardGaugesResponse_RewardGaugesEntry.encode({
        key: key as any,
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardGaugesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryRewardGaugesResponse_RewardGaugesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.rewardGauges[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardGaugesResponse {
    return {
      rewardGauges: isObject(object.rewardGauges) ? Object.entries(object.rewardGauges).reduce<{
        [key: string]: RewardGaugesResponse;
      }>((acc, [key, value]) => {
        acc[key] = RewardGaugesResponse.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message: QueryRewardGaugesResponse): JsonSafe<QueryRewardGaugesResponse> {
    const obj: any = {};
    obj.rewardGauges = {};
    if (message.rewardGauges) {
      Object.entries(message.rewardGauges).forEach(([k, v]) => {
        obj.rewardGauges[k] = RewardGaugesResponse.toJSON(v);
      });
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardGaugesResponse>, I>>(object: I): QueryRewardGaugesResponse {
    const message = createBaseQueryRewardGaugesResponse();
    message.rewardGauges = Object.entries(object.rewardGauges ?? {}).reduce<{
      [key: string]: RewardGaugesResponse;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = RewardGaugesResponse.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: QueryRewardGaugesResponseAmino): QueryRewardGaugesResponse {
    const message = createBaseQueryRewardGaugesResponse();
    message.rewardGauges = Object.entries(object.reward_gauges ?? {}).reduce<{
      [key: string]: RewardGaugesResponse;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = RewardGaugesResponse.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: QueryRewardGaugesResponse): QueryRewardGaugesResponseAmino {
    const obj: any = {};
    obj.reward_gauges = {};
    if (message.rewardGauges) {
      Object.entries(message.rewardGauges).forEach(([k, v]) => {
        obj.reward_gauges[k] = RewardGaugesResponse.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: QueryRewardGaugesResponseAminoMsg): QueryRewardGaugesResponse {
    return QueryRewardGaugesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardGaugesResponseProtoMsg): QueryRewardGaugesResponse {
    return QueryRewardGaugesResponse.decode(message.value);
  },
  toProto(message: QueryRewardGaugesResponse): Uint8Array {
    return QueryRewardGaugesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardGaugesResponse): QueryRewardGaugesResponseProtoMsg {
    return {
      typeUrl: "/babylon.incentive.QueryRewardGaugesResponse",
      value: QueryRewardGaugesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryRewardGaugesResponse.typeUrl, QueryRewardGaugesResponse);
function createBaseQueryBTCStakingGaugeRequest(): QueryBTCStakingGaugeRequest {
  return {
    height: BigInt(0)
  };
}
export const QueryBTCStakingGaugeRequest = {
  typeUrl: "/babylon.incentive.QueryBTCStakingGaugeRequest",
  is(o: any): o is QueryBTCStakingGaugeRequest {
    return o && (o.$typeUrl === QueryBTCStakingGaugeRequest.typeUrl || typeof o.height === "bigint");
  },
  isSDK(o: any): o is QueryBTCStakingGaugeRequestSDKType {
    return o && (o.$typeUrl === QueryBTCStakingGaugeRequest.typeUrl || typeof o.height === "bigint");
  },
  isAmino(o: any): o is QueryBTCStakingGaugeRequestAmino {
    return o && (o.$typeUrl === QueryBTCStakingGaugeRequest.typeUrl || typeof o.height === "bigint");
  },
  encode(message: QueryBTCStakingGaugeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBTCStakingGaugeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBTCStakingGaugeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBTCStakingGaugeRequest {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryBTCStakingGaugeRequest): JsonSafe<QueryBTCStakingGaugeRequest> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBTCStakingGaugeRequest>, I>>(object: I): QueryBTCStakingGaugeRequest {
    const message = createBaseQueryBTCStakingGaugeRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryBTCStakingGaugeRequestAmino): QueryBTCStakingGaugeRequest {
    const message = createBaseQueryBTCStakingGaugeRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: QueryBTCStakingGaugeRequest): QueryBTCStakingGaugeRequestAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? (message.height?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBTCStakingGaugeRequestAminoMsg): QueryBTCStakingGaugeRequest {
    return QueryBTCStakingGaugeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBTCStakingGaugeRequestProtoMsg): QueryBTCStakingGaugeRequest {
    return QueryBTCStakingGaugeRequest.decode(message.value);
  },
  toProto(message: QueryBTCStakingGaugeRequest): Uint8Array {
    return QueryBTCStakingGaugeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBTCStakingGaugeRequest): QueryBTCStakingGaugeRequestProtoMsg {
    return {
      typeUrl: "/babylon.incentive.QueryBTCStakingGaugeRequest",
      value: QueryBTCStakingGaugeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBTCStakingGaugeRequest.typeUrl, QueryBTCStakingGaugeRequest);
function createBaseBTCStakingGaugeResponse(): BTCStakingGaugeResponse {
  return {
    coins: []
  };
}
export const BTCStakingGaugeResponse = {
  typeUrl: "/babylon.incentive.BTCStakingGaugeResponse",
  is(o: any): o is BTCStakingGaugeResponse {
    return o && (o.$typeUrl === BTCStakingGaugeResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isSDK(o: any): o is BTCStakingGaugeResponseSDKType {
    return o && (o.$typeUrl === BTCStakingGaugeResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isSDK(o.coins[0])));
  },
  isAmino(o: any): o is BTCStakingGaugeResponseAmino {
    return o && (o.$typeUrl === BTCStakingGaugeResponse.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: BTCStakingGaugeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BTCStakingGaugeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBTCStakingGaugeResponse();
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
  fromJSON(object: any): BTCStakingGaugeResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: BTCStakingGaugeResponse): JsonSafe<BTCStakingGaugeResponse> {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BTCStakingGaugeResponse>, I>>(object: I): BTCStakingGaugeResponse {
    const message = createBaseBTCStakingGaugeResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BTCStakingGaugeResponseAmino): BTCStakingGaugeResponse {
    const message = createBaseBTCStakingGaugeResponse();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BTCStakingGaugeResponse): BTCStakingGaugeResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: BTCStakingGaugeResponseAminoMsg): BTCStakingGaugeResponse {
    return BTCStakingGaugeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: BTCStakingGaugeResponseProtoMsg): BTCStakingGaugeResponse {
    return BTCStakingGaugeResponse.decode(message.value);
  },
  toProto(message: BTCStakingGaugeResponse): Uint8Array {
    return BTCStakingGaugeResponse.encode(message).finish();
  },
  toProtoMsg(message: BTCStakingGaugeResponse): BTCStakingGaugeResponseProtoMsg {
    return {
      typeUrl: "/babylon.incentive.BTCStakingGaugeResponse",
      value: BTCStakingGaugeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BTCStakingGaugeResponse.typeUrl, BTCStakingGaugeResponse);
function createBaseQueryBTCStakingGaugeResponse(): QueryBTCStakingGaugeResponse {
  return {
    gauge: undefined
  };
}
export const QueryBTCStakingGaugeResponse = {
  typeUrl: "/babylon.incentive.QueryBTCStakingGaugeResponse",
  is(o: any): o is QueryBTCStakingGaugeResponse {
    return o && o.$typeUrl === QueryBTCStakingGaugeResponse.typeUrl;
  },
  isSDK(o: any): o is QueryBTCStakingGaugeResponseSDKType {
    return o && o.$typeUrl === QueryBTCStakingGaugeResponse.typeUrl;
  },
  isAmino(o: any): o is QueryBTCStakingGaugeResponseAmino {
    return o && o.$typeUrl === QueryBTCStakingGaugeResponse.typeUrl;
  },
  encode(message: QueryBTCStakingGaugeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gauge !== undefined) {
      BTCStakingGaugeResponse.encode(message.gauge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBTCStakingGaugeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBTCStakingGaugeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauge = BTCStakingGaugeResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBTCStakingGaugeResponse {
    return {
      gauge: isSet(object.gauge) ? BTCStakingGaugeResponse.fromJSON(object.gauge) : undefined
    };
  },
  toJSON(message: QueryBTCStakingGaugeResponse): JsonSafe<QueryBTCStakingGaugeResponse> {
    const obj: any = {};
    message.gauge !== undefined && (obj.gauge = message.gauge ? BTCStakingGaugeResponse.toJSON(message.gauge) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBTCStakingGaugeResponse>, I>>(object: I): QueryBTCStakingGaugeResponse {
    const message = createBaseQueryBTCStakingGaugeResponse();
    message.gauge = object.gauge !== undefined && object.gauge !== null ? BTCStakingGaugeResponse.fromPartial(object.gauge) : undefined;
    return message;
  },
  fromAmino(object: QueryBTCStakingGaugeResponseAmino): QueryBTCStakingGaugeResponse {
    const message = createBaseQueryBTCStakingGaugeResponse();
    if (object.gauge !== undefined && object.gauge !== null) {
      message.gauge = BTCStakingGaugeResponse.fromAmino(object.gauge);
    }
    return message;
  },
  toAmino(message: QueryBTCStakingGaugeResponse): QueryBTCStakingGaugeResponseAmino {
    const obj: any = {};
    obj.gauge = message.gauge ? BTCStakingGaugeResponse.toAmino(message.gauge) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBTCStakingGaugeResponseAminoMsg): QueryBTCStakingGaugeResponse {
    return QueryBTCStakingGaugeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBTCStakingGaugeResponseProtoMsg): QueryBTCStakingGaugeResponse {
    return QueryBTCStakingGaugeResponse.decode(message.value);
  },
  toProto(message: QueryBTCStakingGaugeResponse): Uint8Array {
    return QueryBTCStakingGaugeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBTCStakingGaugeResponse): QueryBTCStakingGaugeResponseProtoMsg {
    return {
      typeUrl: "/babylon.incentive.QueryBTCStakingGaugeResponse",
      value: QueryBTCStakingGaugeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBTCStakingGaugeResponse.typeUrl, QueryBTCStakingGaugeResponse);
function createBaseQueryDelegatorWithdrawAddressRequest(): QueryDelegatorWithdrawAddressRequest {
  return {
    delegatorAddress: ""
  };
}
export const QueryDelegatorWithdrawAddressRequest = {
  typeUrl: "/babylon.incentive.QueryDelegatorWithdrawAddressRequest",
  is(o: any): o is QueryDelegatorWithdrawAddressRequest {
    return o && (o.$typeUrl === QueryDelegatorWithdrawAddressRequest.typeUrl || typeof o.delegatorAddress === "string");
  },
  isSDK(o: any): o is QueryDelegatorWithdrawAddressRequestSDKType {
    return o && (o.$typeUrl === QueryDelegatorWithdrawAddressRequest.typeUrl || typeof o.delegator_address === "string");
  },
  isAmino(o: any): o is QueryDelegatorWithdrawAddressRequestAmino {
    return o && (o.$typeUrl === QueryDelegatorWithdrawAddressRequest.typeUrl || typeof o.delegator_address === "string");
  },
  encode(message: QueryDelegatorWithdrawAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorWithdrawAddressRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },
  toJSON(message: QueryDelegatorWithdrawAddressRequest): JsonSafe<QueryDelegatorWithdrawAddressRequest> {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorWithdrawAddressRequest>, I>>(object: I): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorWithdrawAddressRequestAmino): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorWithdrawAddressRequestAminoMsg): QueryDelegatorWithdrawAddressRequest {
    return QueryDelegatorWithdrawAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorWithdrawAddressRequestProtoMsg): QueryDelegatorWithdrawAddressRequest {
    return QueryDelegatorWithdrawAddressRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorWithdrawAddressRequest): Uint8Array {
    return QueryDelegatorWithdrawAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestProtoMsg {
    return {
      typeUrl: "/babylon.incentive.QueryDelegatorWithdrawAddressRequest",
      value: QueryDelegatorWithdrawAddressRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDelegatorWithdrawAddressRequest.typeUrl, QueryDelegatorWithdrawAddressRequest);
function createBaseQueryDelegatorWithdrawAddressResponse(): QueryDelegatorWithdrawAddressResponse {
  return {
    withdrawAddress: ""
  };
}
export const QueryDelegatorWithdrawAddressResponse = {
  typeUrl: "/babylon.incentive.QueryDelegatorWithdrawAddressResponse",
  is(o: any): o is QueryDelegatorWithdrawAddressResponse {
    return o && (o.$typeUrl === QueryDelegatorWithdrawAddressResponse.typeUrl || typeof o.withdrawAddress === "string");
  },
  isSDK(o: any): o is QueryDelegatorWithdrawAddressResponseSDKType {
    return o && (o.$typeUrl === QueryDelegatorWithdrawAddressResponse.typeUrl || typeof o.withdraw_address === "string");
  },
  isAmino(o: any): o is QueryDelegatorWithdrawAddressResponseAmino {
    return o && (o.$typeUrl === QueryDelegatorWithdrawAddressResponse.typeUrl || typeof o.withdraw_address === "string");
  },
  encode(message: QueryDelegatorWithdrawAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorWithdrawAddressResponse {
    return {
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : ""
    };
  },
  toJSON(message: QueryDelegatorWithdrawAddressResponse): JsonSafe<QueryDelegatorWithdrawAddressResponse> {
    const obj: any = {};
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorWithdrawAddressResponse>, I>>(object: I): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorWithdrawAddressResponseAmino): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseAmino {
    const obj: any = {};
    obj.withdraw_address = message.withdrawAddress === "" ? undefined : message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorWithdrawAddressResponseAminoMsg): QueryDelegatorWithdrawAddressResponse {
    return QueryDelegatorWithdrawAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorWithdrawAddressResponseProtoMsg): QueryDelegatorWithdrawAddressResponse {
    return QueryDelegatorWithdrawAddressResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorWithdrawAddressResponse): Uint8Array {
    return QueryDelegatorWithdrawAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseProtoMsg {
    return {
      typeUrl: "/babylon.incentive.QueryDelegatorWithdrawAddressResponse",
      value: QueryDelegatorWithdrawAddressResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDelegatorWithdrawAddressResponse.typeUrl, QueryDelegatorWithdrawAddressResponse);
function createBaseQueryDelegationRewardsRequest(): QueryDelegationRewardsRequest {
  return {
    finalityProviderAddress: "",
    delegatorAddress: ""
  };
}
export const QueryDelegationRewardsRequest = {
  typeUrl: "/babylon.incentive.QueryDelegationRewardsRequest",
  is(o: any): o is QueryDelegationRewardsRequest {
    return o && (o.$typeUrl === QueryDelegationRewardsRequest.typeUrl || typeof o.finalityProviderAddress === "string" && typeof o.delegatorAddress === "string");
  },
  isSDK(o: any): o is QueryDelegationRewardsRequestSDKType {
    return o && (o.$typeUrl === QueryDelegationRewardsRequest.typeUrl || typeof o.finality_provider_address === "string" && typeof o.delegator_address === "string");
  },
  isAmino(o: any): o is QueryDelegationRewardsRequestAmino {
    return o && (o.$typeUrl === QueryDelegationRewardsRequest.typeUrl || typeof o.finality_provider_address === "string" && typeof o.delegator_address === "string");
  },
  encode(message: QueryDelegationRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.finalityProviderAddress !== "") {
      writer.uint32(10).string(message.finalityProviderAddress);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(18).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.finalityProviderAddress = reader.string();
          break;
        case 2:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationRewardsRequest {
    return {
      finalityProviderAddress: isSet(object.finalityProviderAddress) ? String(object.finalityProviderAddress) : "",
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },
  toJSON(message: QueryDelegationRewardsRequest): JsonSafe<QueryDelegationRewardsRequest> {
    const obj: any = {};
    message.finalityProviderAddress !== undefined && (obj.finalityProviderAddress = message.finalityProviderAddress);
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegationRewardsRequest>, I>>(object: I): QueryDelegationRewardsRequest {
    const message = createBaseQueryDelegationRewardsRequest();
    message.finalityProviderAddress = object.finalityProviderAddress ?? "";
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegationRewardsRequestAmino): QueryDelegationRewardsRequest {
    const message = createBaseQueryDelegationRewardsRequest();
    if (object.finality_provider_address !== undefined && object.finality_provider_address !== null) {
      message.finalityProviderAddress = object.finality_provider_address;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegationRewardsRequest): QueryDelegationRewardsRequestAmino {
    const obj: any = {};
    obj.finality_provider_address = message.finalityProviderAddress === "" ? undefined : message.finalityProviderAddress;
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationRewardsRequestAminoMsg): QueryDelegationRewardsRequest {
    return QueryDelegationRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegationRewardsRequestProtoMsg): QueryDelegationRewardsRequest {
    return QueryDelegationRewardsRequest.decode(message.value);
  },
  toProto(message: QueryDelegationRewardsRequest): Uint8Array {
    return QueryDelegationRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationRewardsRequest): QueryDelegationRewardsRequestProtoMsg {
    return {
      typeUrl: "/babylon.incentive.QueryDelegationRewardsRequest",
      value: QueryDelegationRewardsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDelegationRewardsRequest.typeUrl, QueryDelegationRewardsRequest);
function createBaseQueryDelegationRewardsResponse(): QueryDelegationRewardsResponse {
  return {
    rewards: []
  };
}
export const QueryDelegationRewardsResponse = {
  typeUrl: "/babylon.incentive.QueryDelegationRewardsResponse",
  is(o: any): o is QueryDelegationRewardsResponse {
    return o && (o.$typeUrl === QueryDelegationRewardsResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || Coin.is(o.rewards[0])));
  },
  isSDK(o: any): o is QueryDelegationRewardsResponseSDKType {
    return o && (o.$typeUrl === QueryDelegationRewardsResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || Coin.isSDK(o.rewards[0])));
  },
  isAmino(o: any): o is QueryDelegationRewardsResponseAmino {
    return o && (o.$typeUrl === QueryDelegationRewardsResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || Coin.isAmino(o.rewards[0])));
  },
  encode(message: QueryDelegationRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryDelegationRewardsResponse): JsonSafe<QueryDelegationRewardsResponse> {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegationRewardsResponse>, I>>(object: I): QueryDelegationRewardsResponse {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDelegationRewardsResponseAmino): QueryDelegationRewardsResponse {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDelegationRewardsResponse): QueryDelegationRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegationRewardsResponseAminoMsg): QueryDelegationRewardsResponse {
    return QueryDelegationRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegationRewardsResponseProtoMsg): QueryDelegationRewardsResponse {
    return QueryDelegationRewardsResponse.decode(message.value);
  },
  toProto(message: QueryDelegationRewardsResponse): Uint8Array {
    return QueryDelegationRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationRewardsResponse): QueryDelegationRewardsResponseProtoMsg {
    return {
      typeUrl: "/babylon.incentive.QueryDelegationRewardsResponse",
      value: QueryDelegationRewardsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDelegationRewardsResponse.typeUrl, QueryDelegationRewardsResponse);
function createBaseQueryFpCurrentRewardsRequest(): QueryFpCurrentRewardsRequest {
  return {
    finalityProviderAddress: ""
  };
}
export const QueryFpCurrentRewardsRequest = {
  typeUrl: "/babylon.incentive.QueryFpCurrentRewardsRequest",
  is(o: any): o is QueryFpCurrentRewardsRequest {
    return o && (o.$typeUrl === QueryFpCurrentRewardsRequest.typeUrl || typeof o.finalityProviderAddress === "string");
  },
  isSDK(o: any): o is QueryFpCurrentRewardsRequestSDKType {
    return o && (o.$typeUrl === QueryFpCurrentRewardsRequest.typeUrl || typeof o.finality_provider_address === "string");
  },
  isAmino(o: any): o is QueryFpCurrentRewardsRequestAmino {
    return o && (o.$typeUrl === QueryFpCurrentRewardsRequest.typeUrl || typeof o.finality_provider_address === "string");
  },
  encode(message: QueryFpCurrentRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.finalityProviderAddress !== "") {
      writer.uint32(10).string(message.finalityProviderAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFpCurrentRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFpCurrentRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.finalityProviderAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFpCurrentRewardsRequest {
    return {
      finalityProviderAddress: isSet(object.finalityProviderAddress) ? String(object.finalityProviderAddress) : ""
    };
  },
  toJSON(message: QueryFpCurrentRewardsRequest): JsonSafe<QueryFpCurrentRewardsRequest> {
    const obj: any = {};
    message.finalityProviderAddress !== undefined && (obj.finalityProviderAddress = message.finalityProviderAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFpCurrentRewardsRequest>, I>>(object: I): QueryFpCurrentRewardsRequest {
    const message = createBaseQueryFpCurrentRewardsRequest();
    message.finalityProviderAddress = object.finalityProviderAddress ?? "";
    return message;
  },
  fromAmino(object: QueryFpCurrentRewardsRequestAmino): QueryFpCurrentRewardsRequest {
    const message = createBaseQueryFpCurrentRewardsRequest();
    if (object.finality_provider_address !== undefined && object.finality_provider_address !== null) {
      message.finalityProviderAddress = object.finality_provider_address;
    }
    return message;
  },
  toAmino(message: QueryFpCurrentRewardsRequest): QueryFpCurrentRewardsRequestAmino {
    const obj: any = {};
    obj.finality_provider_address = message.finalityProviderAddress === "" ? undefined : message.finalityProviderAddress;
    return obj;
  },
  fromAminoMsg(object: QueryFpCurrentRewardsRequestAminoMsg): QueryFpCurrentRewardsRequest {
    return QueryFpCurrentRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFpCurrentRewardsRequestProtoMsg): QueryFpCurrentRewardsRequest {
    return QueryFpCurrentRewardsRequest.decode(message.value);
  },
  toProto(message: QueryFpCurrentRewardsRequest): Uint8Array {
    return QueryFpCurrentRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFpCurrentRewardsRequest): QueryFpCurrentRewardsRequestProtoMsg {
    return {
      typeUrl: "/babylon.incentive.QueryFpCurrentRewardsRequest",
      value: QueryFpCurrentRewardsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFpCurrentRewardsRequest.typeUrl, QueryFpCurrentRewardsRequest);
function createBaseQueryFpCurrentRewardsResponse(): QueryFpCurrentRewardsResponse {
  return {
    currentRewards: [],
    period: BigInt(0),
    totalActiveSat: new Uint8Array()
  };
}
export const QueryFpCurrentRewardsResponse = {
  typeUrl: "/babylon.incentive.QueryFpCurrentRewardsResponse",
  is(o: any): o is QueryFpCurrentRewardsResponse {
    return o && (o.$typeUrl === QueryFpCurrentRewardsResponse.typeUrl || Array.isArray(o.currentRewards) && (!o.currentRewards.length || Coin.is(o.currentRewards[0])) && typeof o.period === "bigint" && (o.totalActiveSat instanceof Uint8Array || typeof o.totalActiveSat === "string"));
  },
  isSDK(o: any): o is QueryFpCurrentRewardsResponseSDKType {
    return o && (o.$typeUrl === QueryFpCurrentRewardsResponse.typeUrl || Array.isArray(o.current_rewards) && (!o.current_rewards.length || Coin.isSDK(o.current_rewards[0])) && typeof o.period === "bigint" && (o.total_active_sat instanceof Uint8Array || typeof o.total_active_sat === "string"));
  },
  isAmino(o: any): o is QueryFpCurrentRewardsResponseAmino {
    return o && (o.$typeUrl === QueryFpCurrentRewardsResponse.typeUrl || Array.isArray(o.current_rewards) && (!o.current_rewards.length || Coin.isAmino(o.current_rewards[0])) && typeof o.period === "bigint" && (o.total_active_sat instanceof Uint8Array || typeof o.total_active_sat === "string"));
  },
  encode(message: QueryFpCurrentRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFpCurrentRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFpCurrentRewardsResponse();
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
  fromJSON(object: any): QueryFpCurrentRewardsResponse {
    return {
      currentRewards: Array.isArray(object?.currentRewards) ? object.currentRewards.map((e: any) => Coin.fromJSON(e)) : [],
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0),
      totalActiveSat: isSet(object.totalActiveSat) ? bytesFromBase64(object.totalActiveSat) : new Uint8Array()
    };
  },
  toJSON(message: QueryFpCurrentRewardsResponse): JsonSafe<QueryFpCurrentRewardsResponse> {
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
  fromPartial<I extends Exact<DeepPartial<QueryFpCurrentRewardsResponse>, I>>(object: I): QueryFpCurrentRewardsResponse {
    const message = createBaseQueryFpCurrentRewardsResponse();
    message.currentRewards = object.currentRewards?.map(e => Coin.fromPartial(e)) || [];
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.totalActiveSat = object.totalActiveSat ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryFpCurrentRewardsResponseAmino): QueryFpCurrentRewardsResponse {
    const message = createBaseQueryFpCurrentRewardsResponse();
    message.currentRewards = object.current_rewards?.map(e => Coin.fromAmino(e)) || [];
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period);
    }
    if (object.total_active_sat !== undefined && object.total_active_sat !== null) {
      message.totalActiveSat = bytesFromBase64(object.total_active_sat);
    }
    return message;
  },
  toAmino(message: QueryFpCurrentRewardsResponse): QueryFpCurrentRewardsResponseAmino {
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
  fromAminoMsg(object: QueryFpCurrentRewardsResponseAminoMsg): QueryFpCurrentRewardsResponse {
    return QueryFpCurrentRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFpCurrentRewardsResponseProtoMsg): QueryFpCurrentRewardsResponse {
    return QueryFpCurrentRewardsResponse.decode(message.value);
  },
  toProto(message: QueryFpCurrentRewardsResponse): Uint8Array {
    return QueryFpCurrentRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFpCurrentRewardsResponse): QueryFpCurrentRewardsResponseProtoMsg {
    return {
      typeUrl: "/babylon.incentive.QueryFpCurrentRewardsResponse",
      value: QueryFpCurrentRewardsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFpCurrentRewardsResponse.typeUrl, QueryFpCurrentRewardsResponse);