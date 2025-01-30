//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAllTimersRequest, QueryAllTimersResponse, QueryStoreKeysRequest, QueryStoreKeysResponse, QueryNextRequest, QueryNextResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a timer store for all its timers. */
  allTimers(request: QueryAllTimersRequest): Promise<QueryAllTimersResponse>;
  /** Queries for all store keys. */
  storeKeys(request?: QueryStoreKeysRequest): Promise<QueryStoreKeysResponse>;
  /** Queries for next timeout of a timer. */
  next(request: QueryNextRequest): Promise<QueryNextResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.allTimers = this.allTimers.bind(this);
    this.storeKeys = this.storeKeys.bind(this);
    this.next = this.next.bind(this);
  }
  allTimers(request: QueryAllTimersRequest): Promise<QueryAllTimersResponse> {
    const data = QueryAllTimersRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.timerstore.Query", "AllTimers", data);
    return promise.then(data => QueryAllTimersResponse.decode(new BinaryReader(data)));
  }
  storeKeys(request: QueryStoreKeysRequest = {}): Promise<QueryStoreKeysResponse> {
    const data = QueryStoreKeysRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.timerstore.Query", "StoreKeys", data);
    return promise.then(data => QueryStoreKeysResponse.decode(new BinaryReader(data)));
  }
  next(request: QueryNextRequest): Promise<QueryNextResponse> {
    const data = QueryNextRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.timerstore.Query", "Next", data);
    return promise.then(data => QueryNextResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allTimers(request: QueryAllTimersRequest): Promise<QueryAllTimersResponse> {
      return queryService.allTimers(request);
    },
    storeKeys(request?: QueryStoreKeysRequest): Promise<QueryStoreKeysResponse> {
      return queryService.storeKeys(request);
    },
    next(request: QueryNextRequest): Promise<QueryNextResponse> {
      return queryService.next(request);
    }
  };
};