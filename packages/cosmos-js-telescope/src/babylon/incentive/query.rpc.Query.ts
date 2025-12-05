//@ts-nocheck
import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryRewardGaugesRequest, QueryRewardGaugesResponse, QueryBTCStakingGaugeRequest, QueryBTCStakingGaugeResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryFpCurrentRewardsRequest, QueryFpCurrentRewardsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** RewardGauge queries the reward gauge of a given stakeholder address */
  rewardGauges(request: QueryRewardGaugesRequest): Promise<QueryRewardGaugesResponse>;
  /** BTCStakingGauge queries the BTC staking gauge of a given height */
  bTCStakingGauge(request: QueryBTCStakingGaugeRequest): Promise<QueryBTCStakingGaugeResponse>;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
  /**
   * DelegationRewards queries the delegation rewards of given finality provider
   * and delegator addresses
   */
  delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
  /** FpCurrentRewards queries the finality provider pool of rewards */
  fpCurrentRewards(request: QueryFpCurrentRewardsRequest): Promise<QueryFpCurrentRewardsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.rewardGauges = this.rewardGauges.bind(this);
    this.bTCStakingGauge = this.bTCStakingGauge.bind(this);
    this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
    this.delegationRewards = this.delegationRewards.bind(this);
    this.fpCurrentRewards = this.fpCurrentRewards.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("babylon.incentive.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  rewardGauges(request: QueryRewardGaugesRequest): Promise<QueryRewardGaugesResponse> {
    const data = QueryRewardGaugesRequest.encode(request).finish();
    const promise = this.rpc.request("babylon.incentive.Query", "RewardGauges", data);
    return promise.then(data => QueryRewardGaugesResponse.decode(new BinaryReader(data)));
  }
  bTCStakingGauge(request: QueryBTCStakingGaugeRequest): Promise<QueryBTCStakingGaugeResponse> {
    const data = QueryBTCStakingGaugeRequest.encode(request).finish();
    const promise = this.rpc.request("babylon.incentive.Query", "BTCStakingGauge", data);
    return promise.then(data => QueryBTCStakingGaugeResponse.decode(new BinaryReader(data)));
  }
  delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("babylon.incentive.Query", "DelegatorWithdrawAddress", data);
    return promise.then(data => QueryDelegatorWithdrawAddressResponse.decode(new BinaryReader(data)));
  }
  delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("babylon.incentive.Query", "DelegationRewards", data);
    return promise.then(data => QueryDelegationRewardsResponse.decode(new BinaryReader(data)));
  }
  fpCurrentRewards(request: QueryFpCurrentRewardsRequest): Promise<QueryFpCurrentRewardsResponse> {
    const data = QueryFpCurrentRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("babylon.incentive.Query", "FpCurrentRewards", data);
    return promise.then(data => QueryFpCurrentRewardsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    rewardGauges(request: QueryRewardGaugesRequest): Promise<QueryRewardGaugesResponse> {
      return queryService.rewardGauges(request);
    },
    bTCStakingGauge(request: QueryBTCStakingGaugeRequest): Promise<QueryBTCStakingGaugeResponse> {
      return queryService.bTCStakingGauge(request);
    },
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> {
      return queryService.delegatorWithdrawAddress(request);
    },
    delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
      return queryService.delegationRewards(request);
    },
    fpCurrentRewards(request: QueryFpCurrentRewardsRequest): Promise<QueryFpCurrentRewardsResponse> {
      return queryService.fpCurrentRewards(request);
    }
  };
};