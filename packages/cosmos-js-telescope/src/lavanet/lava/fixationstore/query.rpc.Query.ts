//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAllIndicesRequest, QueryAllIndicesResponse, QueryStoreKeysRequest, QueryStoreKeysResponse, QueryVersionsRequest, QueryVersionsResponse, QueryEntryRequest, QueryEntryResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a fixation store for all its indices. */
  allIndices(request: QueryAllIndicesRequest): Promise<QueryAllIndicesResponse>;
  /** Queries for all store keys. */
  storeKeys(request?: QueryStoreKeysRequest): Promise<QueryStoreKeysResponse>;
  /** Queries for all versions of a specific entry (versions = different blocks). */
  versions(request: QueryVersionsRequest): Promise<QueryVersionsResponse>;
  /** Queries for a specific entry with detailed information. */
  entry(request: QueryEntryRequest): Promise<QueryEntryResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.allIndices = this.allIndices.bind(this);
    this.storeKeys = this.storeKeys.bind(this);
    this.versions = this.versions.bind(this);
    this.entry = this.entry.bind(this);
  }
  allIndices(request: QueryAllIndicesRequest): Promise<QueryAllIndicesResponse> {
    const data = QueryAllIndicesRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.fixationstore.Query", "AllIndices", data);
    return promise.then(data => QueryAllIndicesResponse.decode(new BinaryReader(data)));
  }
  storeKeys(request: QueryStoreKeysRequest = {}): Promise<QueryStoreKeysResponse> {
    const data = QueryStoreKeysRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.fixationstore.Query", "StoreKeys", data);
    return promise.then(data => QueryStoreKeysResponse.decode(new BinaryReader(data)));
  }
  versions(request: QueryVersionsRequest): Promise<QueryVersionsResponse> {
    const data = QueryVersionsRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.fixationstore.Query", "Versions", data);
    return promise.then(data => QueryVersionsResponse.decode(new BinaryReader(data)));
  }
  entry(request: QueryEntryRequest): Promise<QueryEntryResponse> {
    const data = QueryEntryRequest.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.fixationstore.Query", "Entry", data);
    return promise.then(data => QueryEntryResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allIndices(request: QueryAllIndicesRequest): Promise<QueryAllIndicesResponse> {
      return queryService.allIndices(request);
    },
    storeKeys(request?: QueryStoreKeysRequest): Promise<QueryStoreKeysResponse> {
      return queryService.storeKeys(request);
    },
    versions(request: QueryVersionsRequest): Promise<QueryVersionsResponse> {
      return queryService.versions(request);
    },
    entry(request: QueryEntryRequest): Promise<QueryEntryResponse> {
      return queryService.entry(request);
    }
  };
};