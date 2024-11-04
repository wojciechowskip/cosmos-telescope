//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryDelegatorProvidersRequest, QueryDelegatorProvidersResponse, QueryProviderDelegatorsRequest, QueryProviderDelegatorsResponse, QueryDelegatorRewardsRequest, QueryDelegatorRewardsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a delegator for all its providers. */
  delegatorProviders(request: QueryDelegatorProvidersRequest): Promise<QueryDelegatorProvidersResponse>;
  /** Queries a provider for all its delegators. */
  providerDelegators(request: QueryProviderDelegatorsRequest): Promise<QueryProviderDelegatorsResponse>;
  /** Queries a the unclaimed rewards of a delegator. */
  delegatorRewards(request: QueryDelegatorRewardsRequest): Promise<QueryDelegatorRewardsResponse>;
  /** Queries a the unclaimed rewards of a delegator. */
  delegatorRewardsList(request: QueryDelegatorRewardsRequest): Promise<QueryDelegatorRewardsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.delegatorProviders = this.delegatorProviders.bind(this);
    this.providerDelegators = this.providerDelegators.bind(this);
    this.delegatorRewards = this.delegatorRewards.bind(this);
    this.delegatorRewardsList = this.delegatorRewardsList.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.dualstaking.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  delegatorProviders(request: QueryDelegatorProvidersRequest): Promise<QueryDelegatorProvidersResponse> {
    const data = QueryDelegatorProvidersRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.dualstaking.Query", "DelegatorProviders", data);
    return promise.then(data => QueryDelegatorProvidersResponse.decode(new BinaryReader(data)));
  }
  providerDelegators(request: QueryProviderDelegatorsRequest): Promise<QueryProviderDelegatorsResponse> {
    const data = QueryProviderDelegatorsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.dualstaking.Query", "ProviderDelegators", data);
    return promise.then(data => QueryProviderDelegatorsResponse.decode(new BinaryReader(data)));
  }
  delegatorRewards(request: QueryDelegatorRewardsRequest): Promise<QueryDelegatorRewardsResponse> {
    const data = QueryDelegatorRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.dualstaking.Query", "DelegatorRewards", data);
    return promise.then(data => QueryDelegatorRewardsResponse.decode(new BinaryReader(data)));
  }
  delegatorRewardsList(request: QueryDelegatorRewardsRequest): Promise<QueryDelegatorRewardsResponse> {
    const data = QueryDelegatorRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.dualstaking.Query", "DelegatorRewardsList", data);
    return promise.then(data => QueryDelegatorRewardsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    delegatorProviders(request: QueryDelegatorProvidersRequest): Promise<QueryDelegatorProvidersResponse> {
      return queryService.delegatorProviders(request);
    },
    providerDelegators(request: QueryProviderDelegatorsRequest): Promise<QueryProviderDelegatorsResponse> {
      return queryService.providerDelegators(request);
    },
    delegatorRewards(request: QueryDelegatorRewardsRequest): Promise<QueryDelegatorRewardsResponse> {
      return queryService.delegatorRewards(request);
    },
    delegatorRewardsList(request: QueryDelegatorRewardsRequest): Promise<QueryDelegatorRewardsResponse> {
      return queryService.delegatorRewardsList(request);
    }
  };
};