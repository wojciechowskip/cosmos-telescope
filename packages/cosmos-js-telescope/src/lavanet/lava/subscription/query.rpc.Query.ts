//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentRequest, QueryCurrentResponse, QueryListProjectsRequest, QueryListProjectsResponse, QueryListRequest, QueryListResponse, QueryNextToMonthExpiryRequest, QueryNextToMonthExpiryResponse, QuerySubscriptionTrackedUsageRequest, QuerySubscriptionTrackedUsageResponse, QueryEstimatedRewardsRequest, QueryEstimatedRewardsResponse, QueryEstimatedProviderRewardsRequest, QueryEstimatedValidatorRewardsRequest, QueryEstimatedValidatorRewardsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Current items. */
  current(request: QueryCurrentRequest): Promise<QueryCurrentResponse>;
  /** Queries a list of ListProjects items. */
  listProjects(request: QueryListProjectsRequest): Promise<QueryListProjectsResponse>;
  /** Queries a list of List items. */
  list(request?: QueryListRequest): Promise<QueryListResponse>;
  /** Queries the subscription with the closest month expiry */
  nextToMonthExpiry(request?: QueryNextToMonthExpiryRequest): Promise<QueryNextToMonthExpiryResponse>;
  /** Queries a list of Current items. */
  trackedUsage(request: QuerySubscriptionTrackedUsageRequest): Promise<QuerySubscriptionTrackedUsageResponse>;
  /**
   * Queries a rewards estimation.
   * Deprecated: please use EstimatedProviderRewards
   */
  estimatedRewards(request: QueryEstimatedRewardsRequest): Promise<QueryEstimatedRewardsResponse>;
  /** Queries a rewards estimation. */
  estimatedProviderRewards(request: QueryEstimatedProviderRewardsRequest): Promise<QueryEstimatedRewardsResponse>;
  estimatedValidatorRewards(request: QueryEstimatedValidatorRewardsRequest): Promise<QueryEstimatedValidatorRewardsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.current = this.current.bind(this);
    this.listProjects = this.listProjects.bind(this);
    this.list = this.list.bind(this);
    this.nextToMonthExpiry = this.nextToMonthExpiry.bind(this);
    this.trackedUsage = this.trackedUsage.bind(this);
    this.estimatedRewards = this.estimatedRewards.bind(this);
    this.estimatedProviderRewards = this.estimatedProviderRewards.bind(this);
    this.estimatedValidatorRewards = this.estimatedValidatorRewards.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  current(request: QueryCurrentRequest): Promise<QueryCurrentResponse> {
    const data = QueryCurrentRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "Current", data);
    return promise.then(data => QueryCurrentResponse.decode(new BinaryReader(data)));
  }
  listProjects(request: QueryListProjectsRequest): Promise<QueryListProjectsResponse> {
    const data = QueryListProjectsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "ListProjects", data);
    return promise.then(data => QueryListProjectsResponse.decode(new BinaryReader(data)));
  }
  list(request: QueryListRequest = {}): Promise<QueryListResponse> {
    const data = QueryListRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "List", data);
    return promise.then(data => QueryListResponse.decode(new BinaryReader(data)));
  }
  nextToMonthExpiry(request: QueryNextToMonthExpiryRequest = {}): Promise<QueryNextToMonthExpiryResponse> {
    const data = QueryNextToMonthExpiryRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "NextToMonthExpiry", data);
    return promise.then(data => QueryNextToMonthExpiryResponse.decode(new BinaryReader(data)));
  }
  trackedUsage(request: QuerySubscriptionTrackedUsageRequest): Promise<QuerySubscriptionTrackedUsageResponse> {
    const data = QuerySubscriptionTrackedUsageRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "TrackedUsage", data);
    return promise.then(data => QuerySubscriptionTrackedUsageResponse.decode(new BinaryReader(data)));
  }
  estimatedRewards(request: QueryEstimatedRewardsRequest): Promise<QueryEstimatedRewardsResponse> {
    const data = QueryEstimatedRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "EstimatedRewards", data);
    return promise.then(data => QueryEstimatedRewardsResponse.decode(new BinaryReader(data)));
  }
  estimatedProviderRewards(request: QueryEstimatedProviderRewardsRequest): Promise<QueryEstimatedRewardsResponse> {
    const data = QueryEstimatedProviderRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "EstimatedProviderRewards", data);
    return promise.then(data => QueryEstimatedRewardsResponse.decode(new BinaryReader(data)));
  }
  estimatedValidatorRewards(request: QueryEstimatedValidatorRewardsRequest): Promise<QueryEstimatedValidatorRewardsResponse> {
    const data = QueryEstimatedValidatorRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Query", "EstimatedValidatorRewards", data);
    return promise.then(data => QueryEstimatedValidatorRewardsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    current(request: QueryCurrentRequest): Promise<QueryCurrentResponse> {
      return queryService.current(request);
    },
    listProjects(request: QueryListProjectsRequest): Promise<QueryListProjectsResponse> {
      return queryService.listProjects(request);
    },
    list(request?: QueryListRequest): Promise<QueryListResponse> {
      return queryService.list(request);
    },
    nextToMonthExpiry(request?: QueryNextToMonthExpiryRequest): Promise<QueryNextToMonthExpiryResponse> {
      return queryService.nextToMonthExpiry(request);
    },
    trackedUsage(request: QuerySubscriptionTrackedUsageRequest): Promise<QuerySubscriptionTrackedUsageResponse> {
      return queryService.trackedUsage(request);
    },
    estimatedRewards(request: QueryEstimatedRewardsRequest): Promise<QueryEstimatedRewardsResponse> {
      return queryService.estimatedRewards(request);
    },
    estimatedProviderRewards(request: QueryEstimatedProviderRewardsRequest): Promise<QueryEstimatedRewardsResponse> {
      return queryService.estimatedProviderRewards(request);
    },
    estimatedValidatorRewards(request: QueryEstimatedValidatorRewardsRequest): Promise<QueryEstimatedValidatorRewardsResponse> {
      return queryService.estimatedValidatorRewards(request);
    }
  };
};