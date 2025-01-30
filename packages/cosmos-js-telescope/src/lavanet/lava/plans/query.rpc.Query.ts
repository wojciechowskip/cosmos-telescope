//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryListRequest, QueryListResponse, QueryInfoRequest, QueryInfoResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of List items. */
  list(request?: QueryListRequest): Promise<QueryListResponse>;
  /** Queries an Info item. */
  info(request: QueryInfoRequest): Promise<QueryInfoResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.list = this.list.bind(this);
    this.info = this.info.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.plans.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  list(request: QueryListRequest = {}): Promise<QueryListResponse> {
    const data = QueryListRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.plans.Query", "List", data);
    return promise.then(data => QueryListResponse.decode(new BinaryReader(data)));
  }
  info(request: QueryInfoRequest): Promise<QueryInfoResponse> {
    const data = QueryInfoRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.plans.Query", "Info", data);
    return promise.then(data => QueryInfoResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    list(request?: QueryListRequest): Promise<QueryListResponse> {
      return queryService.list(request);
    },
    info(request: QueryInfoRequest): Promise<QueryInfoResponse> {
      return queryService.info(request);
    }
  };
};