//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetSpecRequest, QueryGetSpecResponse, QueryAllSpecRequest, QueryAllSpecResponse, QueryShowAllChainsRequest, QueryShowAllChainsResponse, QueryShowChainInfoRequest, QueryShowChainInfoResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Spec by id. */
  spec(request: QueryGetSpecRequest): Promise<QueryGetSpecResponse>;
  /** Queries a list of Spec items. */
  specAll(request?: QueryAllSpecRequest): Promise<QueryAllSpecResponse>;
  /** Queries a Spec by id (raw form). */
  specRaw(request: QueryGetSpecRequest): Promise<QueryGetSpecResponse>;
  /** Queries a list of Spec items (raw form). */
  specAllRaw(request?: QueryAllSpecRequest): Promise<QueryAllSpecResponse>;
  /** Queries a list of ShowAllChains items. */
  showAllChains(request?: QueryShowAllChainsRequest): Promise<QueryShowAllChainsResponse>;
  /** Queries a list of ShowChainInfo items. */
  showChainInfo(request: QueryShowChainInfoRequest): Promise<QueryShowChainInfoResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.spec = this.spec.bind(this);
    this.specAll = this.specAll.bind(this);
    this.specRaw = this.specRaw.bind(this);
    this.specAllRaw = this.specAllRaw.bind(this);
    this.showAllChains = this.showAllChains.bind(this);
    this.showChainInfo = this.showChainInfo.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.spec.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  spec(request: QueryGetSpecRequest): Promise<QueryGetSpecResponse> {
    const data = QueryGetSpecRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.spec.Query", "Spec", data);
    return promise.then(data => QueryGetSpecResponse.decode(new BinaryReader(data)));
  }
  specAll(request: QueryAllSpecRequest = {
    pagination: undefined
  }): Promise<QueryAllSpecResponse> {
    const data = QueryAllSpecRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.spec.Query", "SpecAll", data);
    return promise.then(data => QueryAllSpecResponse.decode(new BinaryReader(data)));
  }
  specRaw(request: QueryGetSpecRequest): Promise<QueryGetSpecResponse> {
    const data = QueryGetSpecRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.spec.Query", "SpecRaw", data);
    return promise.then(data => QueryGetSpecResponse.decode(new BinaryReader(data)));
  }
  specAllRaw(request: QueryAllSpecRequest = {
    pagination: undefined
  }): Promise<QueryAllSpecResponse> {
    const data = QueryAllSpecRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.spec.Query", "SpecAllRaw", data);
    return promise.then(data => QueryAllSpecResponse.decode(new BinaryReader(data)));
  }
  showAllChains(request: QueryShowAllChainsRequest = {}): Promise<QueryShowAllChainsResponse> {
    const data = QueryShowAllChainsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.spec.Query", "ShowAllChains", data);
    return promise.then(data => QueryShowAllChainsResponse.decode(new BinaryReader(data)));
  }
  showChainInfo(request: QueryShowChainInfoRequest): Promise<QueryShowChainInfoResponse> {
    const data = QueryShowChainInfoRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.spec.Query", "ShowChainInfo", data);
    return promise.then(data => QueryShowChainInfoResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    spec(request: QueryGetSpecRequest): Promise<QueryGetSpecResponse> {
      return queryService.spec(request);
    },
    specAll(request?: QueryAllSpecRequest): Promise<QueryAllSpecResponse> {
      return queryService.specAll(request);
    },
    specRaw(request: QueryGetSpecRequest): Promise<QueryGetSpecResponse> {
      return queryService.specRaw(request);
    },
    specAllRaw(request?: QueryAllSpecRequest): Promise<QueryAllSpecResponse> {
      return queryService.specAllRaw(request);
    },
    showAllChains(request?: QueryShowAllChainsRequest): Promise<QueryShowAllChainsResponse> {
      return queryService.showAllChains(request);
    },
    showChainInfo(request: QueryShowChainInfoRequest): Promise<QueryShowChainInfoResponse> {
      return queryService.showChainInfo(request);
    }
  };
};