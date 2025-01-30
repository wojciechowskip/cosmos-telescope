//@ts-nocheck
import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryDowntimeRequest, QueryDowntimeResponse } from "./query";
/** Query represents the query service API for the downtime module. */
export interface Query {
  queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  queryDowntime(request: QueryDowntimeRequest): Promise<QueryDowntimeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.queryParams = this.queryParams.bind(this);
    this.queryDowntime = this.queryDowntime.bind(this);
  }
  queryParams(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.downtime.v1.Query", "QueryParams", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  queryDowntime(request: QueryDowntimeRequest): Promise<QueryDowntimeResponse> {
    const data = QueryDowntimeRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.downtime.v1.Query", "QueryDowntime", data);
    return promise.then(data => QueryDowntimeResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.queryParams(request);
    },
    queryDowntime(request: QueryDowntimeRequest): Promise<QueryDowntimeResponse> {
      return queryService.queryDowntime(request);
    }
  };
};