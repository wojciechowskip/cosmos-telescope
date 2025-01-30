//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryInfoRequest, QueryInfoResponse, QueryDeveloperRequest, QueryDeveloperResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of ShowProject items. */
  info(request: QueryInfoRequest): Promise<QueryInfoResponse>;
  /** Queries a list of ShowDevelopersProject items. */
  developer(request: QueryDeveloperRequest): Promise<QueryDeveloperResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.info = this.info.bind(this);
    this.developer = this.developer.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  info(request: QueryInfoRequest): Promise<QueryInfoResponse> {
    const data = QueryInfoRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Query", "Info", data);
    return promise.then(data => QueryInfoResponse.decode(new BinaryReader(data)));
  }
  developer(request: QueryDeveloperRequest): Promise<QueryDeveloperResponse> {
    const data = QueryDeveloperRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Query", "Developer", data);
    return promise.then(data => QueryDeveloperResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    info(request: QueryInfoRequest): Promise<QueryInfoResponse> {
      return queryService.info(request);
    },
    developer(request: QueryDeveloperRequest): Promise<QueryDeveloperResponse> {
      return queryService.developer(request);
    }
  };
};