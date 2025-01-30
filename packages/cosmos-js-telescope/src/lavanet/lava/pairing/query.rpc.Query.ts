//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse, QueryGetPairingRequest, QueryGetPairingResponse, QueryVerifyPairingRequest, QueryVerifyPairingResponse, QueryProviderPairingChanceRequest, QueryProviderPairingChanceResponse, QueryUserEntryRequest, QueryUserEntryResponse, QueryStaticProvidersListRequest, QueryStaticProvidersListResponse, QueryEffectivePolicyRequest, QueryEffectivePolicyResponse, QueryProviderMonthlyPayoutRequest, QueryProviderMonthlyPayoutResponse, QuerySubscriptionMonthlyPayoutRequest, QuerySubscriptionMonthlyPayoutResponse, QuerySdkPairingResponse, QueryProvidersEpochCuRequest, QueryProvidersEpochCuResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Providers items. */
  providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse>;
  /** Queries a Provider item. */
  provider(request: QueryProviderRequest): Promise<QueryProviderResponse>;
  /** Queries a list of GetPairing items. */
  getPairing(request: QueryGetPairingRequest): Promise<QueryGetPairingResponse>;
  /** Queries a list of VerifyPairing items. */
  verifyPairing(request: QueryVerifyPairingRequest): Promise<QueryVerifyPairingResponse>;
  /** Queries a list of ProviderPairingChance items. */
  providerPairingChance(request: QueryProviderPairingChanceRequest): Promise<QueryProviderPairingChanceResponse>;
  /** Queries a UserEntry items. */
  userEntry(request: QueryUserEntryRequest): Promise<QueryUserEntryResponse>;
  /** Queries a list of StaticProvidersList items. */
  staticProvidersList(request: QueryStaticProvidersListRequest): Promise<QueryStaticProvidersListResponse>;
  /** Queries a list of EffectivePolicy items. */
  effectivePolicy(request: QueryEffectivePolicyRequest): Promise<QueryEffectivePolicyResponse>;
  /** Queries the expected monthly payout of a specific provider */
  providerMonthlyPayout(request: QueryProviderMonthlyPayoutRequest): Promise<QueryProviderMonthlyPayoutResponse>;
  /** Queries the expected monthly payout of a specific subscription */
  subscriptionMonthlyPayout(request: QuerySubscriptionMonthlyPayoutRequest): Promise<QuerySubscriptionMonthlyPayoutResponse>;
  /** Queries a list of SdkPairing items. */
  sdkPairing(request: QueryGetPairingRequest): Promise<QuerySdkPairingResponse>;
  /** Queries a for the aggregated CU of all ProviderEpochCu objects all the providers. */
  providersEpochCu(request?: QueryProvidersEpochCuRequest): Promise<QueryProvidersEpochCuResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.providers = this.providers.bind(this);
    this.provider = this.provider.bind(this);
    this.getPairing = this.getPairing.bind(this);
    this.verifyPairing = this.verifyPairing.bind(this);
    this.providerPairingChance = this.providerPairingChance.bind(this);
    this.userEntry = this.userEntry.bind(this);
    this.staticProvidersList = this.staticProvidersList.bind(this);
    this.effectivePolicy = this.effectivePolicy.bind(this);
    this.providerMonthlyPayout = this.providerMonthlyPayout.bind(this);
    this.subscriptionMonthlyPayout = this.subscriptionMonthlyPayout.bind(this);
    this.sdkPairing = this.sdkPairing.bind(this);
    this.providersEpochCu = this.providersEpochCu.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse> {
    const data = QueryProvidersRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "Providers", data);
    return promise.then(data => QueryProvidersResponse.decode(new BinaryReader(data)));
  }
  provider(request: QueryProviderRequest): Promise<QueryProviderResponse> {
    const data = QueryProviderRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "Provider", data);
    return promise.then(data => QueryProviderResponse.decode(new BinaryReader(data)));
  }
  getPairing(request: QueryGetPairingRequest): Promise<QueryGetPairingResponse> {
    const data = QueryGetPairingRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "GetPairing", data);
    return promise.then(data => QueryGetPairingResponse.decode(new BinaryReader(data)));
  }
  verifyPairing(request: QueryVerifyPairingRequest): Promise<QueryVerifyPairingResponse> {
    const data = QueryVerifyPairingRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "VerifyPairing", data);
    return promise.then(data => QueryVerifyPairingResponse.decode(new BinaryReader(data)));
  }
  providerPairingChance(request: QueryProviderPairingChanceRequest): Promise<QueryProviderPairingChanceResponse> {
    const data = QueryProviderPairingChanceRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "ProviderPairingChance", data);
    return promise.then(data => QueryProviderPairingChanceResponse.decode(new BinaryReader(data)));
  }
  userEntry(request: QueryUserEntryRequest): Promise<QueryUserEntryResponse> {
    const data = QueryUserEntryRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "UserEntry", data);
    return promise.then(data => QueryUserEntryResponse.decode(new BinaryReader(data)));
  }
  staticProvidersList(request: QueryStaticProvidersListRequest): Promise<QueryStaticProvidersListResponse> {
    const data = QueryStaticProvidersListRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "StaticProvidersList", data);
    return promise.then(data => QueryStaticProvidersListResponse.decode(new BinaryReader(data)));
  }
  effectivePolicy(request: QueryEffectivePolicyRequest): Promise<QueryEffectivePolicyResponse> {
    const data = QueryEffectivePolicyRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "EffectivePolicy", data);
    return promise.then(data => QueryEffectivePolicyResponse.decode(new BinaryReader(data)));
  }
  providerMonthlyPayout(request: QueryProviderMonthlyPayoutRequest): Promise<QueryProviderMonthlyPayoutResponse> {
    const data = QueryProviderMonthlyPayoutRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "ProviderMonthlyPayout", data);
    return promise.then(data => QueryProviderMonthlyPayoutResponse.decode(new BinaryReader(data)));
  }
  subscriptionMonthlyPayout(request: QuerySubscriptionMonthlyPayoutRequest): Promise<QuerySubscriptionMonthlyPayoutResponse> {
    const data = QuerySubscriptionMonthlyPayoutRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "SubscriptionMonthlyPayout", data);
    return promise.then(data => QuerySubscriptionMonthlyPayoutResponse.decode(new BinaryReader(data)));
  }
  sdkPairing(request: QueryGetPairingRequest): Promise<QuerySdkPairingResponse> {
    const data = QueryGetPairingRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "SdkPairing", data);
    return promise.then(data => QuerySdkPairingResponse.decode(new BinaryReader(data)));
  }
  providersEpochCu(request: QueryProvidersEpochCuRequest = {}): Promise<QueryProvidersEpochCuResponse> {
    const data = QueryProvidersEpochCuRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Query", "ProvidersEpochCu", data);
    return promise.then(data => QueryProvidersEpochCuResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse> {
      return queryService.providers(request);
    },
    provider(request: QueryProviderRequest): Promise<QueryProviderResponse> {
      return queryService.provider(request);
    },
    getPairing(request: QueryGetPairingRequest): Promise<QueryGetPairingResponse> {
      return queryService.getPairing(request);
    },
    verifyPairing(request: QueryVerifyPairingRequest): Promise<QueryVerifyPairingResponse> {
      return queryService.verifyPairing(request);
    },
    providerPairingChance(request: QueryProviderPairingChanceRequest): Promise<QueryProviderPairingChanceResponse> {
      return queryService.providerPairingChance(request);
    },
    userEntry(request: QueryUserEntryRequest): Promise<QueryUserEntryResponse> {
      return queryService.userEntry(request);
    },
    staticProvidersList(request: QueryStaticProvidersListRequest): Promise<QueryStaticProvidersListResponse> {
      return queryService.staticProvidersList(request);
    },
    effectivePolicy(request: QueryEffectivePolicyRequest): Promise<QueryEffectivePolicyResponse> {
      return queryService.effectivePolicy(request);
    },
    providerMonthlyPayout(request: QueryProviderMonthlyPayoutRequest): Promise<QueryProviderMonthlyPayoutResponse> {
      return queryService.providerMonthlyPayout(request);
    },
    subscriptionMonthlyPayout(request: QuerySubscriptionMonthlyPayoutRequest): Promise<QuerySubscriptionMonthlyPayoutResponse> {
      return queryService.subscriptionMonthlyPayout(request);
    },
    sdkPairing(request: QueryGetPairingRequest): Promise<QuerySdkPairingResponse> {
      return queryService.sdkPairing(request);
    },
    providersEpochCu(request?: QueryProvidersEpochCuRequest): Promise<QueryProvidersEpochCuResponse> {
      return queryService.providersEpochCu(request);
    }
  };
};