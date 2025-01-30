//@ts-nocheck
import { Params as Params1 } from "./params";
import { ParamsAmino as Params1Amino } from "./params";
import { ParamsSDKType as Params1SDKType } from "./params";
import { StakeEntry, StakeEntryAmino, StakeEntrySDKType } from "../epochstorage/stake_entry";
import { Policy, PolicyAmino, PolicySDKType } from "../plans/policy";
import { Spec, SpecAmino, SpecSDKType } from "../spec/spec";
import { Params as Params2 } from "../downtime/v1/downtime";
import { ParamsAmino as Params2Amino } from "../downtime/v1/downtime";
import { ParamsSDKType as Params2SDKType } from "../downtime/v1/downtime";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lavanet.lava.pairing.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params1;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: Params1Amino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lavanet.lava.pairing.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: Params1SDKType;
}
export interface QueryProvidersRequest {
  chainID: string;
  showFrozen: boolean;
}
export interface QueryProvidersRequestProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryProvidersRequest";
  value: Uint8Array;
}
export interface QueryProvidersRequestAmino {
  chainID?: string;
  showFrozen?: boolean;
}
export interface QueryProvidersRequestAminoMsg {
  type: "/lavanet.lava.pairing.QueryProvidersRequest";
  value: QueryProvidersRequestAmino;
}
export interface QueryProvidersRequestSDKType {
  chainID: string;
  showFrozen: boolean;
}
export interface QueryProvidersResponse {
  stakeEntry: StakeEntry[];
}
export interface QueryProvidersResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryProvidersResponse";
  value: Uint8Array;
}
export interface QueryProvidersResponseAmino {
  stakeEntry?: StakeEntryAmino[];
}
export interface QueryProvidersResponseAminoMsg {
  type: "/lavanet.lava.pairing.QueryProvidersResponse";
  value: QueryProvidersResponseAmino;
}
export interface QueryProvidersResponseSDKType {
  stakeEntry: StakeEntrySDKType[];
}
export interface QueryProviderRequest {
  address: string;
  chainID: string;
}
export interface QueryProviderRequestProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryProviderRequest";
  value: Uint8Array;
}
export interface QueryProviderRequestAmino {
  address?: string;
  chainID?: string;
}
export interface QueryProviderRequestAminoMsg {
  type: "/lavanet.lava.pairing.QueryProviderRequest";
  value: QueryProviderRequestAmino;
}
export interface QueryProviderRequestSDKType {
  address: string;
  chainID: string;
}
export interface QueryProviderResponse {
  stakeEntries: StakeEntry[];
}
export interface QueryProviderResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryProviderResponse";
  value: Uint8Array;
}
export interface QueryProviderResponseAmino {
  stakeEntries?: StakeEntryAmino[];
}
export interface QueryProviderResponseAminoMsg {
  type: "/lavanet.lava.pairing.QueryProviderResponse";
  value: QueryProviderResponseAmino;
}
export interface QueryProviderResponseSDKType {
  stakeEntries: StakeEntrySDKType[];
}
export interface QueryGetPairingRequest {
  chainID: string;
  client: string;
}
export interface QueryGetPairingRequestProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryGetPairingRequest";
  value: Uint8Array;
}
export interface QueryGetPairingRequestAmino {
  chainID?: string;
  client?: string;
}
export interface QueryGetPairingRequestAminoMsg {
  type: "/lavanet.lava.pairing.QueryGetPairingRequest";
  value: QueryGetPairingRequestAmino;
}
export interface QueryGetPairingRequestSDKType {
  chainID: string;
  client: string;
}
export interface QueryGetPairingResponse {
  providers: StakeEntry[];
  currentEpoch: bigint;
  timeLeftToNextPairing: bigint;
  specLastUpdatedBlock: bigint;
  blockOfNextPairing: bigint;
}
export interface QueryGetPairingResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryGetPairingResponse";
  value: Uint8Array;
}
export interface QueryGetPairingResponseAmino {
  providers?: StakeEntryAmino[];
  current_epoch?: string;
  time_left_to_next_pairing?: string;
  spec_last_updated_block?: string;
  block_of_next_pairing?: string;
}
export interface QueryGetPairingResponseAminoMsg {
  type: "/lavanet.lava.pairing.QueryGetPairingResponse";
  value: QueryGetPairingResponseAmino;
}
export interface QueryGetPairingResponseSDKType {
  providers: StakeEntrySDKType[];
  current_epoch: bigint;
  time_left_to_next_pairing: bigint;
  spec_last_updated_block: bigint;
  block_of_next_pairing: bigint;
}
export interface QueryVerifyPairingRequest {
  chainID: string;
  client: string;
  provider: string;
  block: bigint;
}
export interface QueryVerifyPairingRequestProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryVerifyPairingRequest";
  value: Uint8Array;
}
export interface QueryVerifyPairingRequestAmino {
  chainID?: string;
  client?: string;
  provider?: string;
  block?: string;
}
export interface QueryVerifyPairingRequestAminoMsg {
  type: "/lavanet.lava.pairing.QueryVerifyPairingRequest";
  value: QueryVerifyPairingRequestAmino;
}
export interface QueryVerifyPairingRequestSDKType {
  chainID: string;
  client: string;
  provider: string;
  block: bigint;
}
export interface QueryVerifyPairingResponse {
  valid: boolean;
  pairedProviders: bigint;
  cuPerEpoch: bigint;
  projectId: string;
}
export interface QueryVerifyPairingResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryVerifyPairingResponse";
  value: Uint8Array;
}
export interface QueryVerifyPairingResponseAmino {
  valid?: boolean;
  paired_providers?: string;
  cu_per_epoch?: string;
  project_id?: string;
}
export interface QueryVerifyPairingResponseAminoMsg {
  type: "/lavanet.lava.pairing.QueryVerifyPairingResponse";
  value: QueryVerifyPairingResponseAmino;
}
export interface QueryVerifyPairingResponseSDKType {
  valid: boolean;
  paired_providers: bigint;
  cu_per_epoch: bigint;
  project_id: string;
}
export interface QueryProviderPairingChanceRequest {
  provider: string;
  chainID: string;
  geolocation: number;
  cluster: string;
}
export interface QueryProviderPairingChanceRequestProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryProviderPairingChanceRequest";
  value: Uint8Array;
}
export interface QueryProviderPairingChanceRequestAmino {
  provider?: string;
  chainID?: string;
  geolocation?: number;
  cluster?: string;
}
export interface QueryProviderPairingChanceRequestAminoMsg {
  type: "/lavanet.lava.pairing.QueryProviderPairingChanceRequest";
  value: QueryProviderPairingChanceRequestAmino;
}
export interface QueryProviderPairingChanceRequestSDKType {
  provider: string;
  chainID: string;
  geolocation: number;
  cluster: string;
}
export interface QueryProviderPairingChanceResponse {
  chance: string;
}
export interface QueryProviderPairingChanceResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryProviderPairingChanceResponse";
  value: Uint8Array;
}
export interface QueryProviderPairingChanceResponseAmino {
  chance?: string;
}
export interface QueryProviderPairingChanceResponseAminoMsg {
  type: "/lavanet.lava.pairing.QueryProviderPairingChanceResponse";
  value: QueryProviderPairingChanceResponseAmino;
}
export interface QueryProviderPairingChanceResponseSDKType {
  chance: string;
}
export interface QueryUserEntryRequest {
  address: string;
  chainID: string;
  block: bigint;
}
export interface QueryUserEntryRequestProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryUserEntryRequest";
  value: Uint8Array;
}
export interface QueryUserEntryRequestAmino {
  address?: string;
  chainID?: string;
  block?: string;
}
export interface QueryUserEntryRequestAminoMsg {
  type: "/lavanet.lava.pairing.QueryUserEntryRequest";
  value: QueryUserEntryRequestAmino;
}
export interface QueryUserEntryRequestSDKType {
  address: string;
  chainID: string;
  block: bigint;
}
export interface QueryUserEntryResponse {
  consumer: StakeEntry;
  maxCU: bigint;
}
export interface QueryUserEntryResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryUserEntryResponse";
  value: Uint8Array;
}
export interface QueryUserEntryResponseAmino {
  consumer?: StakeEntryAmino;
  maxCU?: string;
}
export interface QueryUserEntryResponseAminoMsg {
  type: "/lavanet.lava.pairing.QueryUserEntryResponse";
  value: QueryUserEntryResponseAmino;
}
export interface QueryUserEntryResponseSDKType {
  consumer: StakeEntrySDKType;
  maxCU: bigint;
}
export interface QueryStaticProvidersListRequest {
  chainID: string;
}
export interface QueryStaticProvidersListRequestProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryStaticProvidersListRequest";
  value: Uint8Array;
}
export interface QueryStaticProvidersListRequestAmino {
  chainID?: string;
}
export interface QueryStaticProvidersListRequestAminoMsg {
  type: "/lavanet.lava.pairing.QueryStaticProvidersListRequest";
  value: QueryStaticProvidersListRequestAmino;
}
export interface QueryStaticProvidersListRequestSDKType {
  chainID: string;
}
export interface QueryStaticProvidersListResponse {
  providers: StakeEntry[];
}
export interface QueryStaticProvidersListResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryStaticProvidersListResponse";
  value: Uint8Array;
}
export interface QueryStaticProvidersListResponseAmino {
  providers?: StakeEntryAmino[];
}
export interface QueryStaticProvidersListResponseAminoMsg {
  type: "/lavanet.lava.pairing.QueryStaticProvidersListResponse";
  value: QueryStaticProvidersListResponseAmino;
}
export interface QueryStaticProvidersListResponseSDKType {
  providers: StakeEntrySDKType[];
}
export interface QueryEffectivePolicyRequest {
  consumer: string;
  specID: string;
}
export interface QueryEffectivePolicyRequestProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryEffectivePolicyRequest";
  value: Uint8Array;
}
export interface QueryEffectivePolicyRequestAmino {
  consumer?: string;
  specID?: string;
}
export interface QueryEffectivePolicyRequestAminoMsg {
  type: "/lavanet.lava.pairing.QueryEffectivePolicyRequest";
  value: QueryEffectivePolicyRequestAmino;
}
export interface QueryEffectivePolicyRequestSDKType {
  consumer: string;
  specID: string;
}
export interface QueryEffectivePolicyResponse {
  policy?: Policy;
  pendingPolicy?: Policy;
}
export interface QueryEffectivePolicyResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryEffectivePolicyResponse";
  value: Uint8Array;
}
export interface QueryEffectivePolicyResponseAmino {
  policy?: PolicyAmino;
  pending_policy?: PolicyAmino;
}
export interface QueryEffectivePolicyResponseAminoMsg {
  type: "/lavanet.lava.pairing.QueryEffectivePolicyResponse";
  value: QueryEffectivePolicyResponseAmino;
}
export interface QueryEffectivePolicyResponseSDKType {
  policy?: PolicySDKType;
  pending_policy?: PolicySDKType;
}
export interface QuerySdkPairingResponse {
  pairing?: QueryGetPairingResponse;
  maxCu: bigint;
  spec?: Spec;
  downtimeParams?: Params2;
}
export interface QuerySdkPairingResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QuerySdkPairingResponse";
  value: Uint8Array;
}
export interface QuerySdkPairingResponseAmino {
  pairing?: QueryGetPairingResponseAmino;
  max_cu?: string;
  spec?: SpecAmino;
  downtime_params?: Params2Amino;
}
export interface QuerySdkPairingResponseAminoMsg {
  type: "/lavanet.lava.pairing.QuerySdkPairingResponse";
  value: QuerySdkPairingResponseAmino;
}
export interface QuerySdkPairingResponseSDKType {
  pairing?: QueryGetPairingResponseSDKType;
  max_cu: bigint;
  spec?: SpecSDKType;
  downtime_params?: Params2SDKType;
}
export interface QueryProviderMonthlyPayoutRequest {
  provider: string;
}
export interface QueryProviderMonthlyPayoutRequestProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryProviderMonthlyPayoutRequest";
  value: Uint8Array;
}
export interface QueryProviderMonthlyPayoutRequestAmino {
  provider?: string;
}
export interface QueryProviderMonthlyPayoutRequestAminoMsg {
  type: "/lavanet.lava.pairing.QueryProviderMonthlyPayoutRequest";
  value: QueryProviderMonthlyPayoutRequestAmino;
}
export interface QueryProviderMonthlyPayoutRequestSDKType {
  provider: string;
}
export interface SubscriptionPayout {
  subscription: string;
  chainId: string;
  amount: bigint;
}
export interface SubscriptionPayoutProtoMsg {
  typeUrl: "/lavanet.lava.pairing.SubscriptionPayout";
  value: Uint8Array;
}
export interface SubscriptionPayoutAmino {
  subscription?: string;
  chain_id?: string;
  amount?: string;
}
export interface SubscriptionPayoutAminoMsg {
  type: "/lavanet.lava.pairing.SubscriptionPayout";
  value: SubscriptionPayoutAmino;
}
export interface SubscriptionPayoutSDKType {
  subscription: string;
  chain_id: string;
  amount: bigint;
}
export interface QueryProviderMonthlyPayoutResponse {
  total: bigint;
  details: SubscriptionPayout[];
}
export interface QueryProviderMonthlyPayoutResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryProviderMonthlyPayoutResponse";
  value: Uint8Array;
}
export interface QueryProviderMonthlyPayoutResponseAmino {
  total?: string;
  details?: SubscriptionPayoutAmino[];
}
export interface QueryProviderMonthlyPayoutResponseAminoMsg {
  type: "/lavanet.lava.pairing.QueryProviderMonthlyPayoutResponse";
  value: QueryProviderMonthlyPayoutResponseAmino;
}
export interface QueryProviderMonthlyPayoutResponseSDKType {
  total: bigint;
  details: SubscriptionPayoutSDKType[];
}
export interface ProviderPayout {
  provider: string;
  amount: bigint;
}
export interface ProviderPayoutProtoMsg {
  typeUrl: "/lavanet.lava.pairing.ProviderPayout";
  value: Uint8Array;
}
export interface ProviderPayoutAmino {
  provider?: string;
  amount?: string;
}
export interface ProviderPayoutAminoMsg {
  type: "/lavanet.lava.pairing.ProviderPayout";
  value: ProviderPayoutAmino;
}
export interface ProviderPayoutSDKType {
  provider: string;
  amount: bigint;
}
export interface ChainIDPayout {
  chainId: string;
  payouts: ProviderPayout[];
}
export interface ChainIDPayoutProtoMsg {
  typeUrl: "/lavanet.lava.pairing.ChainIDPayout";
  value: Uint8Array;
}
export interface ChainIDPayoutAmino {
  chain_id?: string;
  payouts?: ProviderPayoutAmino[];
}
export interface ChainIDPayoutAminoMsg {
  type: "/lavanet.lava.pairing.ChainIDPayout";
  value: ChainIDPayoutAmino;
}
export interface ChainIDPayoutSDKType {
  chain_id: string;
  payouts: ProviderPayoutSDKType[];
}
export interface QuerySubscriptionMonthlyPayoutRequest {
  consumer: string;
}
export interface QuerySubscriptionMonthlyPayoutRequestProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QuerySubscriptionMonthlyPayoutRequest";
  value: Uint8Array;
}
export interface QuerySubscriptionMonthlyPayoutRequestAmino {
  consumer?: string;
}
export interface QuerySubscriptionMonthlyPayoutRequestAminoMsg {
  type: "/lavanet.lava.pairing.QuerySubscriptionMonthlyPayoutRequest";
  value: QuerySubscriptionMonthlyPayoutRequestAmino;
}
export interface QuerySubscriptionMonthlyPayoutRequestSDKType {
  consumer: string;
}
export interface QuerySubscriptionMonthlyPayoutResponse {
  total: bigint;
  details: ChainIDPayout[];
}
export interface QuerySubscriptionMonthlyPayoutResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QuerySubscriptionMonthlyPayoutResponse";
  value: Uint8Array;
}
export interface QuerySubscriptionMonthlyPayoutResponseAmino {
  total?: string;
  details?: ChainIDPayoutAmino[];
}
export interface QuerySubscriptionMonthlyPayoutResponseAminoMsg {
  type: "/lavanet.lava.pairing.QuerySubscriptionMonthlyPayoutResponse";
  value: QuerySubscriptionMonthlyPayoutResponseAmino;
}
export interface QuerySubscriptionMonthlyPayoutResponseSDKType {
  total: bigint;
  details: ChainIDPayoutSDKType[];
}
export interface QueryProvidersEpochCuRequest {}
export interface QueryProvidersEpochCuRequestProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryProvidersEpochCuRequest";
  value: Uint8Array;
}
export interface QueryProvidersEpochCuRequestAmino {}
export interface QueryProvidersEpochCuRequestAminoMsg {
  type: "/lavanet.lava.pairing.QueryProvidersEpochCuRequest";
  value: QueryProvidersEpochCuRequestAmino;
}
export interface QueryProvidersEpochCuRequestSDKType {}
export interface QueryProvidersEpochCuResponse {
  info: ProviderCuInfo[];
}
export interface QueryProvidersEpochCuResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryProvidersEpochCuResponse";
  value: Uint8Array;
}
export interface QueryProvidersEpochCuResponseAmino {
  info?: ProviderCuInfoAmino[];
}
export interface QueryProvidersEpochCuResponseAminoMsg {
  type: "/lavanet.lava.pairing.QueryProvidersEpochCuResponse";
  value: QueryProvidersEpochCuResponseAmino;
}
export interface QueryProvidersEpochCuResponseSDKType {
  info: ProviderCuInfoSDKType[];
}
export interface ProviderCuInfo {
  provider: string;
  cu: bigint;
}
export interface ProviderCuInfoProtoMsg {
  typeUrl: "/lavanet.lava.pairing.ProviderCuInfo";
  value: Uint8Array;
}
export interface ProviderCuInfoAmino {
  provider?: string;
  cu?: string;
}
export interface ProviderCuInfoAminoMsg {
  type: "/lavanet.lava.pairing.ProviderCuInfo";
  value: ProviderCuInfoAmino;
}
export interface ProviderCuInfoSDKType {
  provider: string;
  cu: bigint;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params1.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params1.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params1.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params1.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params1.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params1.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params1.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params1.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params1.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params1.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryProvidersRequest(): QueryProvidersRequest {
  return {
    chainID: "",
    showFrozen: false
  };
}
export const QueryProvidersRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryProvidersRequest",
  is(o: any): o is QueryProvidersRequest {
    return o && (o.$typeUrl === QueryProvidersRequest.typeUrl || typeof o.chainID === "string" && typeof o.showFrozen === "boolean");
  },
  isSDK(o: any): o is QueryProvidersRequestSDKType {
    return o && (o.$typeUrl === QueryProvidersRequest.typeUrl || typeof o.chainID === "string" && typeof o.showFrozen === "boolean");
  },
  isAmino(o: any): o is QueryProvidersRequestAmino {
    return o && (o.$typeUrl === QueryProvidersRequest.typeUrl || typeof o.chainID === "string" && typeof o.showFrozen === "boolean");
  },
  encode(message: QueryProvidersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.showFrozen === true) {
      writer.uint32(16).bool(message.showFrozen);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProvidersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.showFrozen = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProvidersRequest {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      showFrozen: isSet(object.showFrozen) ? Boolean(object.showFrozen) : false
    };
  },
  toJSON(message: QueryProvidersRequest): JsonSafe<QueryProvidersRequest> {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.showFrozen !== undefined && (obj.showFrozen = message.showFrozen);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProvidersRequest>, I>>(object: I): QueryProvidersRequest {
    const message = createBaseQueryProvidersRequest();
    message.chainID = object.chainID ?? "";
    message.showFrozen = object.showFrozen ?? false;
    return message;
  },
  fromAmino(object: QueryProvidersRequestAmino): QueryProvidersRequest {
    const message = createBaseQueryProvidersRequest();
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID;
    }
    if (object.showFrozen !== undefined && object.showFrozen !== null) {
      message.showFrozen = object.showFrozen;
    }
    return message;
  },
  toAmino(message: QueryProvidersRequest): QueryProvidersRequestAmino {
    const obj: any = {};
    obj.chainID = message.chainID === "" ? undefined : message.chainID;
    obj.showFrozen = message.showFrozen === false ? undefined : message.showFrozen;
    return obj;
  },
  fromAminoMsg(object: QueryProvidersRequestAminoMsg): QueryProvidersRequest {
    return QueryProvidersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProvidersRequestProtoMsg): QueryProvidersRequest {
    return QueryProvidersRequest.decode(message.value);
  },
  toProto(message: QueryProvidersRequest): Uint8Array {
    return QueryProvidersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersRequest): QueryProvidersRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryProvidersRequest",
      value: QueryProvidersRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProvidersRequest.typeUrl, QueryProvidersRequest);
function createBaseQueryProvidersResponse(): QueryProvidersResponse {
  return {
    stakeEntry: []
  };
}
export const QueryProvidersResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryProvidersResponse",
  is(o: any): o is QueryProvidersResponse {
    return o && (o.$typeUrl === QueryProvidersResponse.typeUrl || Array.isArray(o.stakeEntry) && (!o.stakeEntry.length || StakeEntry.is(o.stakeEntry[0])));
  },
  isSDK(o: any): o is QueryProvidersResponseSDKType {
    return o && (o.$typeUrl === QueryProvidersResponse.typeUrl || Array.isArray(o.stakeEntry) && (!o.stakeEntry.length || StakeEntry.isSDK(o.stakeEntry[0])));
  },
  isAmino(o: any): o is QueryProvidersResponseAmino {
    return o && (o.$typeUrl === QueryProvidersResponse.typeUrl || Array.isArray(o.stakeEntry) && (!o.stakeEntry.length || StakeEntry.isAmino(o.stakeEntry[0])));
  },
  encode(message: QueryProvidersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stakeEntry) {
      StakeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProvidersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeEntry.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProvidersResponse {
    return {
      stakeEntry: Array.isArray(object?.stakeEntry) ? object.stakeEntry.map((e: any) => StakeEntry.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryProvidersResponse): JsonSafe<QueryProvidersResponse> {
    const obj: any = {};
    if (message.stakeEntry) {
      obj.stakeEntry = message.stakeEntry.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.stakeEntry = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProvidersResponse>, I>>(object: I): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.stakeEntry = object.stakeEntry?.map(e => StakeEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryProvidersResponseAmino): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.stakeEntry = object.stakeEntry?.map(e => StakeEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryProvidersResponse): QueryProvidersResponseAmino {
    const obj: any = {};
    if (message.stakeEntry) {
      obj.stakeEntry = message.stakeEntry.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.stakeEntry = message.stakeEntry;
    }
    return obj;
  },
  fromAminoMsg(object: QueryProvidersResponseAminoMsg): QueryProvidersResponse {
    return QueryProvidersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProvidersResponseProtoMsg): QueryProvidersResponse {
    return QueryProvidersResponse.decode(message.value);
  },
  toProto(message: QueryProvidersResponse): Uint8Array {
    return QueryProvidersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersResponse): QueryProvidersResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryProvidersResponse",
      value: QueryProvidersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProvidersResponse.typeUrl, QueryProvidersResponse);
function createBaseQueryProviderRequest(): QueryProviderRequest {
  return {
    address: "",
    chainID: ""
  };
}
export const QueryProviderRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryProviderRequest",
  is(o: any): o is QueryProviderRequest {
    return o && (o.$typeUrl === QueryProviderRequest.typeUrl || typeof o.address === "string" && typeof o.chainID === "string");
  },
  isSDK(o: any): o is QueryProviderRequestSDKType {
    return o && (o.$typeUrl === QueryProviderRequest.typeUrl || typeof o.address === "string" && typeof o.chainID === "string");
  },
  isAmino(o: any): o is QueryProviderRequestAmino {
    return o && (o.$typeUrl === QueryProviderRequest.typeUrl || typeof o.address === "string" && typeof o.chainID === "string");
  },
  encode(message: QueryProviderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      chainID: isSet(object.chainID) ? String(object.chainID) : ""
    };
  },
  toJSON(message: QueryProviderRequest): JsonSafe<QueryProviderRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderRequest>, I>>(object: I): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    message.address = object.address ?? "";
    message.chainID = object.chainID ?? "";
    return message;
  },
  fromAmino(object: QueryProviderRequestAmino): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID;
    }
    return message;
  },
  toAmino(message: QueryProviderRequest): QueryProviderRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.chainID = message.chainID === "" ? undefined : message.chainID;
    return obj;
  },
  fromAminoMsg(object: QueryProviderRequestAminoMsg): QueryProviderRequest {
    return QueryProviderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderRequestProtoMsg): QueryProviderRequest {
    return QueryProviderRequest.decode(message.value);
  },
  toProto(message: QueryProviderRequest): Uint8Array {
    return QueryProviderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderRequest): QueryProviderRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryProviderRequest",
      value: QueryProviderRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProviderRequest.typeUrl, QueryProviderRequest);
function createBaseQueryProviderResponse(): QueryProviderResponse {
  return {
    stakeEntries: []
  };
}
export const QueryProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryProviderResponse",
  is(o: any): o is QueryProviderResponse {
    return o && (o.$typeUrl === QueryProviderResponse.typeUrl || Array.isArray(o.stakeEntries) && (!o.stakeEntries.length || StakeEntry.is(o.stakeEntries[0])));
  },
  isSDK(o: any): o is QueryProviderResponseSDKType {
    return o && (o.$typeUrl === QueryProviderResponse.typeUrl || Array.isArray(o.stakeEntries) && (!o.stakeEntries.length || StakeEntry.isSDK(o.stakeEntries[0])));
  },
  isAmino(o: any): o is QueryProviderResponseAmino {
    return o && (o.$typeUrl === QueryProviderResponse.typeUrl || Array.isArray(o.stakeEntries) && (!o.stakeEntries.length || StakeEntry.isAmino(o.stakeEntries[0])));
  },
  encode(message: QueryProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stakeEntries) {
      StakeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeEntries.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderResponse {
    return {
      stakeEntries: Array.isArray(object?.stakeEntries) ? object.stakeEntries.map((e: any) => StakeEntry.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryProviderResponse): JsonSafe<QueryProviderResponse> {
    const obj: any = {};
    if (message.stakeEntries) {
      obj.stakeEntries = message.stakeEntries.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.stakeEntries = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderResponse>, I>>(object: I): QueryProviderResponse {
    const message = createBaseQueryProviderResponse();
    message.stakeEntries = object.stakeEntries?.map(e => StakeEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryProviderResponseAmino): QueryProviderResponse {
    const message = createBaseQueryProviderResponse();
    message.stakeEntries = object.stakeEntries?.map(e => StakeEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryProviderResponse): QueryProviderResponseAmino {
    const obj: any = {};
    if (message.stakeEntries) {
      obj.stakeEntries = message.stakeEntries.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.stakeEntries = message.stakeEntries;
    }
    return obj;
  },
  fromAminoMsg(object: QueryProviderResponseAminoMsg): QueryProviderResponse {
    return QueryProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderResponseProtoMsg): QueryProviderResponse {
    return QueryProviderResponse.decode(message.value);
  },
  toProto(message: QueryProviderResponse): Uint8Array {
    return QueryProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderResponse): QueryProviderResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryProviderResponse",
      value: QueryProviderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProviderResponse.typeUrl, QueryProviderResponse);
function createBaseQueryGetPairingRequest(): QueryGetPairingRequest {
  return {
    chainID: "",
    client: ""
  };
}
export const QueryGetPairingRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryGetPairingRequest",
  is(o: any): o is QueryGetPairingRequest {
    return o && (o.$typeUrl === QueryGetPairingRequest.typeUrl || typeof o.chainID === "string" && typeof o.client === "string");
  },
  isSDK(o: any): o is QueryGetPairingRequestSDKType {
    return o && (o.$typeUrl === QueryGetPairingRequest.typeUrl || typeof o.chainID === "string" && typeof o.client === "string");
  },
  isAmino(o: any): o is QueryGetPairingRequestAmino {
    return o && (o.$typeUrl === QueryGetPairingRequest.typeUrl || typeof o.chainID === "string" && typeof o.client === "string");
  },
  encode(message: QueryGetPairingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.client !== "") {
      writer.uint32(18).string(message.client);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPairingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPairingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.client = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPairingRequest {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      client: isSet(object.client) ? String(object.client) : ""
    };
  },
  toJSON(message: QueryGetPairingRequest): JsonSafe<QueryGetPairingRequest> {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.client !== undefined && (obj.client = message.client);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPairingRequest>, I>>(object: I): QueryGetPairingRequest {
    const message = createBaseQueryGetPairingRequest();
    message.chainID = object.chainID ?? "";
    message.client = object.client ?? "";
    return message;
  },
  fromAmino(object: QueryGetPairingRequestAmino): QueryGetPairingRequest {
    const message = createBaseQueryGetPairingRequest();
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID;
    }
    if (object.client !== undefined && object.client !== null) {
      message.client = object.client;
    }
    return message;
  },
  toAmino(message: QueryGetPairingRequest): QueryGetPairingRequestAmino {
    const obj: any = {};
    obj.chainID = message.chainID === "" ? undefined : message.chainID;
    obj.client = message.client === "" ? undefined : message.client;
    return obj;
  },
  fromAminoMsg(object: QueryGetPairingRequestAminoMsg): QueryGetPairingRequest {
    return QueryGetPairingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPairingRequestProtoMsg): QueryGetPairingRequest {
    return QueryGetPairingRequest.decode(message.value);
  },
  toProto(message: QueryGetPairingRequest): Uint8Array {
    return QueryGetPairingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPairingRequest): QueryGetPairingRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetPairingRequest",
      value: QueryGetPairingRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetPairingRequest.typeUrl, QueryGetPairingRequest);
function createBaseQueryGetPairingResponse(): QueryGetPairingResponse {
  return {
    providers: [],
    currentEpoch: BigInt(0),
    timeLeftToNextPairing: BigInt(0),
    specLastUpdatedBlock: BigInt(0),
    blockOfNextPairing: BigInt(0)
  };
}
export const QueryGetPairingResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryGetPairingResponse",
  is(o: any): o is QueryGetPairingResponse {
    return o && (o.$typeUrl === QueryGetPairingResponse.typeUrl || Array.isArray(o.providers) && (!o.providers.length || StakeEntry.is(o.providers[0])) && typeof o.currentEpoch === "bigint" && typeof o.timeLeftToNextPairing === "bigint" && typeof o.specLastUpdatedBlock === "bigint" && typeof o.blockOfNextPairing === "bigint");
  },
  isSDK(o: any): o is QueryGetPairingResponseSDKType {
    return o && (o.$typeUrl === QueryGetPairingResponse.typeUrl || Array.isArray(o.providers) && (!o.providers.length || StakeEntry.isSDK(o.providers[0])) && typeof o.current_epoch === "bigint" && typeof o.time_left_to_next_pairing === "bigint" && typeof o.spec_last_updated_block === "bigint" && typeof o.block_of_next_pairing === "bigint");
  },
  isAmino(o: any): o is QueryGetPairingResponseAmino {
    return o && (o.$typeUrl === QueryGetPairingResponse.typeUrl || Array.isArray(o.providers) && (!o.providers.length || StakeEntry.isAmino(o.providers[0])) && typeof o.current_epoch === "bigint" && typeof o.time_left_to_next_pairing === "bigint" && typeof o.spec_last_updated_block === "bigint" && typeof o.block_of_next_pairing === "bigint");
  },
  encode(message: QueryGetPairingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providers) {
      StakeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.currentEpoch);
    }
    if (message.timeLeftToNextPairing !== BigInt(0)) {
      writer.uint32(24).uint64(message.timeLeftToNextPairing);
    }
    if (message.specLastUpdatedBlock !== BigInt(0)) {
      writer.uint32(32).uint64(message.specLastUpdatedBlock);
    }
    if (message.blockOfNextPairing !== BigInt(0)) {
      writer.uint32(40).uint64(message.blockOfNextPairing);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPairingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPairingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.currentEpoch = reader.uint64();
          break;
        case 3:
          message.timeLeftToNextPairing = reader.uint64();
          break;
        case 4:
          message.specLastUpdatedBlock = reader.uint64();
          break;
        case 5:
          message.blockOfNextPairing = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPairingResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => StakeEntry.fromJSON(e)) : [],
      currentEpoch: isSet(object.currentEpoch) ? BigInt(object.currentEpoch.toString()) : BigInt(0),
      timeLeftToNextPairing: isSet(object.timeLeftToNextPairing) ? BigInt(object.timeLeftToNextPairing.toString()) : BigInt(0),
      specLastUpdatedBlock: isSet(object.specLastUpdatedBlock) ? BigInt(object.specLastUpdatedBlock.toString()) : BigInt(0),
      blockOfNextPairing: isSet(object.blockOfNextPairing) ? BigInt(object.blockOfNextPairing.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetPairingResponse): JsonSafe<QueryGetPairingResponse> {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }
    message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || BigInt(0)).toString());
    message.timeLeftToNextPairing !== undefined && (obj.timeLeftToNextPairing = (message.timeLeftToNextPairing || BigInt(0)).toString());
    message.specLastUpdatedBlock !== undefined && (obj.specLastUpdatedBlock = (message.specLastUpdatedBlock || BigInt(0)).toString());
    message.blockOfNextPairing !== undefined && (obj.blockOfNextPairing = (message.blockOfNextPairing || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPairingResponse>, I>>(object: I): QueryGetPairingResponse {
    const message = createBaseQueryGetPairingResponse();
    message.providers = object.providers?.map(e => StakeEntry.fromPartial(e)) || [];
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    message.timeLeftToNextPairing = object.timeLeftToNextPairing !== undefined && object.timeLeftToNextPairing !== null ? BigInt(object.timeLeftToNextPairing.toString()) : BigInt(0);
    message.specLastUpdatedBlock = object.specLastUpdatedBlock !== undefined && object.specLastUpdatedBlock !== null ? BigInt(object.specLastUpdatedBlock.toString()) : BigInt(0);
    message.blockOfNextPairing = object.blockOfNextPairing !== undefined && object.blockOfNextPairing !== null ? BigInt(object.blockOfNextPairing.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPairingResponseAmino): QueryGetPairingResponse {
    const message = createBaseQueryGetPairingResponse();
    message.providers = object.providers?.map(e => StakeEntry.fromAmino(e)) || [];
    if (object.current_epoch !== undefined && object.current_epoch !== null) {
      message.currentEpoch = BigInt(object.current_epoch);
    }
    if (object.time_left_to_next_pairing !== undefined && object.time_left_to_next_pairing !== null) {
      message.timeLeftToNextPairing = BigInt(object.time_left_to_next_pairing);
    }
    if (object.spec_last_updated_block !== undefined && object.spec_last_updated_block !== null) {
      message.specLastUpdatedBlock = BigInt(object.spec_last_updated_block);
    }
    if (object.block_of_next_pairing !== undefined && object.block_of_next_pairing !== null) {
      message.blockOfNextPairing = BigInt(object.block_of_next_pairing);
    }
    return message;
  },
  toAmino(message: QueryGetPairingResponse): QueryGetPairingResponseAmino {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.providers = message.providers;
    }
    obj.current_epoch = message.currentEpoch !== BigInt(0) ? (message.currentEpoch?.toString)() : undefined;
    obj.time_left_to_next_pairing = message.timeLeftToNextPairing !== BigInt(0) ? (message.timeLeftToNextPairing?.toString)() : undefined;
    obj.spec_last_updated_block = message.specLastUpdatedBlock !== BigInt(0) ? (message.specLastUpdatedBlock?.toString)() : undefined;
    obj.block_of_next_pairing = message.blockOfNextPairing !== BigInt(0) ? (message.blockOfNextPairing?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPairingResponseAminoMsg): QueryGetPairingResponse {
    return QueryGetPairingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPairingResponseProtoMsg): QueryGetPairingResponse {
    return QueryGetPairingResponse.decode(message.value);
  },
  toProto(message: QueryGetPairingResponse): Uint8Array {
    return QueryGetPairingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPairingResponse): QueryGetPairingResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryGetPairingResponse",
      value: QueryGetPairingResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetPairingResponse.typeUrl, QueryGetPairingResponse);
function createBaseQueryVerifyPairingRequest(): QueryVerifyPairingRequest {
  return {
    chainID: "",
    client: "",
    provider: "",
    block: BigInt(0)
  };
}
export const QueryVerifyPairingRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryVerifyPairingRequest",
  is(o: any): o is QueryVerifyPairingRequest {
    return o && (o.$typeUrl === QueryVerifyPairingRequest.typeUrl || typeof o.chainID === "string" && typeof o.client === "string" && typeof o.provider === "string" && typeof o.block === "bigint");
  },
  isSDK(o: any): o is QueryVerifyPairingRequestSDKType {
    return o && (o.$typeUrl === QueryVerifyPairingRequest.typeUrl || typeof o.chainID === "string" && typeof o.client === "string" && typeof o.provider === "string" && typeof o.block === "bigint");
  },
  isAmino(o: any): o is QueryVerifyPairingRequestAmino {
    return o && (o.$typeUrl === QueryVerifyPairingRequest.typeUrl || typeof o.chainID === "string" && typeof o.client === "string" && typeof o.provider === "string" && typeof o.block === "bigint");
  },
  encode(message: QueryVerifyPairingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.client !== "") {
      writer.uint32(18).string(message.client);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(32).uint64(message.block);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVerifyPairingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyPairingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.client = reader.string();
          break;
        case 3:
          message.provider = reader.string();
          break;
        case 4:
          message.block = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVerifyPairingRequest {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      client: isSet(object.client) ? String(object.client) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryVerifyPairingRequest): JsonSafe<QueryVerifyPairingRequest> {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.client !== undefined && (obj.client = message.client);
    message.provider !== undefined && (obj.provider = message.provider);
    message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVerifyPairingRequest>, I>>(object: I): QueryVerifyPairingRequest {
    const message = createBaseQueryVerifyPairingRequest();
    message.chainID = object.chainID ?? "";
    message.client = object.client ?? "";
    message.provider = object.provider ?? "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryVerifyPairingRequestAmino): QueryVerifyPairingRequest {
    const message = createBaseQueryVerifyPairingRequest();
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID;
    }
    if (object.client !== undefined && object.client !== null) {
      message.client = object.client;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    return message;
  },
  toAmino(message: QueryVerifyPairingRequest): QueryVerifyPairingRequestAmino {
    const obj: any = {};
    obj.chainID = message.chainID === "" ? undefined : message.chainID;
    obj.client = message.client === "" ? undefined : message.client;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.block = message.block !== BigInt(0) ? (message.block?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVerifyPairingRequestAminoMsg): QueryVerifyPairingRequest {
    return QueryVerifyPairingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVerifyPairingRequestProtoMsg): QueryVerifyPairingRequest {
    return QueryVerifyPairingRequest.decode(message.value);
  },
  toProto(message: QueryVerifyPairingRequest): Uint8Array {
    return QueryVerifyPairingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVerifyPairingRequest): QueryVerifyPairingRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryVerifyPairingRequest",
      value: QueryVerifyPairingRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVerifyPairingRequest.typeUrl, QueryVerifyPairingRequest);
function createBaseQueryVerifyPairingResponse(): QueryVerifyPairingResponse {
  return {
    valid: false,
    pairedProviders: BigInt(0),
    cuPerEpoch: BigInt(0),
    projectId: ""
  };
}
export const QueryVerifyPairingResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryVerifyPairingResponse",
  is(o: any): o is QueryVerifyPairingResponse {
    return o && (o.$typeUrl === QueryVerifyPairingResponse.typeUrl || typeof o.valid === "boolean" && typeof o.pairedProviders === "bigint" && typeof o.cuPerEpoch === "bigint" && typeof o.projectId === "string");
  },
  isSDK(o: any): o is QueryVerifyPairingResponseSDKType {
    return o && (o.$typeUrl === QueryVerifyPairingResponse.typeUrl || typeof o.valid === "boolean" && typeof o.paired_providers === "bigint" && typeof o.cu_per_epoch === "bigint" && typeof o.project_id === "string");
  },
  isAmino(o: any): o is QueryVerifyPairingResponseAmino {
    return o && (o.$typeUrl === QueryVerifyPairingResponse.typeUrl || typeof o.valid === "boolean" && typeof o.paired_providers === "bigint" && typeof o.cu_per_epoch === "bigint" && typeof o.project_id === "string");
  },
  encode(message: QueryVerifyPairingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    if (message.pairedProviders !== BigInt(0)) {
      writer.uint32(24).uint64(message.pairedProviders);
    }
    if (message.cuPerEpoch !== BigInt(0)) {
      writer.uint32(32).uint64(message.cuPerEpoch);
    }
    if (message.projectId !== "") {
      writer.uint32(42).string(message.projectId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVerifyPairingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyPairingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = reader.bool();
          break;
        case 3:
          message.pairedProviders = reader.uint64();
          break;
        case 4:
          message.cuPerEpoch = reader.uint64();
          break;
        case 5:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVerifyPairingResponse {
    return {
      valid: isSet(object.valid) ? Boolean(object.valid) : false,
      pairedProviders: isSet(object.pairedProviders) ? BigInt(object.pairedProviders.toString()) : BigInt(0),
      cuPerEpoch: isSet(object.cuPerEpoch) ? BigInt(object.cuPerEpoch.toString()) : BigInt(0),
      projectId: isSet(object.projectId) ? String(object.projectId) : ""
    };
  },
  toJSON(message: QueryVerifyPairingResponse): JsonSafe<QueryVerifyPairingResponse> {
    const obj: any = {};
    message.valid !== undefined && (obj.valid = message.valid);
    message.pairedProviders !== undefined && (obj.pairedProviders = (message.pairedProviders || BigInt(0)).toString());
    message.cuPerEpoch !== undefined && (obj.cuPerEpoch = (message.cuPerEpoch || BigInt(0)).toString());
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVerifyPairingResponse>, I>>(object: I): QueryVerifyPairingResponse {
    const message = createBaseQueryVerifyPairingResponse();
    message.valid = object.valid ?? false;
    message.pairedProviders = object.pairedProviders !== undefined && object.pairedProviders !== null ? BigInt(object.pairedProviders.toString()) : BigInt(0);
    message.cuPerEpoch = object.cuPerEpoch !== undefined && object.cuPerEpoch !== null ? BigInt(object.cuPerEpoch.toString()) : BigInt(0);
    message.projectId = object.projectId ?? "";
    return message;
  },
  fromAmino(object: QueryVerifyPairingResponseAmino): QueryVerifyPairingResponse {
    const message = createBaseQueryVerifyPairingResponse();
    if (object.valid !== undefined && object.valid !== null) {
      message.valid = object.valid;
    }
    if (object.paired_providers !== undefined && object.paired_providers !== null) {
      message.pairedProviders = BigInt(object.paired_providers);
    }
    if (object.cu_per_epoch !== undefined && object.cu_per_epoch !== null) {
      message.cuPerEpoch = BigInt(object.cu_per_epoch);
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    return message;
  },
  toAmino(message: QueryVerifyPairingResponse): QueryVerifyPairingResponseAmino {
    const obj: any = {};
    obj.valid = message.valid === false ? undefined : message.valid;
    obj.paired_providers = message.pairedProviders !== BigInt(0) ? (message.pairedProviders?.toString)() : undefined;
    obj.cu_per_epoch = message.cuPerEpoch !== BigInt(0) ? (message.cuPerEpoch?.toString)() : undefined;
    obj.project_id = message.projectId === "" ? undefined : message.projectId;
    return obj;
  },
  fromAminoMsg(object: QueryVerifyPairingResponseAminoMsg): QueryVerifyPairingResponse {
    return QueryVerifyPairingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVerifyPairingResponseProtoMsg): QueryVerifyPairingResponse {
    return QueryVerifyPairingResponse.decode(message.value);
  },
  toProto(message: QueryVerifyPairingResponse): Uint8Array {
    return QueryVerifyPairingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVerifyPairingResponse): QueryVerifyPairingResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryVerifyPairingResponse",
      value: QueryVerifyPairingResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVerifyPairingResponse.typeUrl, QueryVerifyPairingResponse);
function createBaseQueryProviderPairingChanceRequest(): QueryProviderPairingChanceRequest {
  return {
    provider: "",
    chainID: "",
    geolocation: 0,
    cluster: ""
  };
}
export const QueryProviderPairingChanceRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryProviderPairingChanceRequest",
  is(o: any): o is QueryProviderPairingChanceRequest {
    return o && (o.$typeUrl === QueryProviderPairingChanceRequest.typeUrl || typeof o.provider === "string" && typeof o.chainID === "string" && typeof o.geolocation === "number" && typeof o.cluster === "string");
  },
  isSDK(o: any): o is QueryProviderPairingChanceRequestSDKType {
    return o && (o.$typeUrl === QueryProviderPairingChanceRequest.typeUrl || typeof o.provider === "string" && typeof o.chainID === "string" && typeof o.geolocation === "number" && typeof o.cluster === "string");
  },
  isAmino(o: any): o is QueryProviderPairingChanceRequestAmino {
    return o && (o.$typeUrl === QueryProviderPairingChanceRequest.typeUrl || typeof o.provider === "string" && typeof o.chainID === "string" && typeof o.geolocation === "number" && typeof o.cluster === "string");
  },
  encode(message: QueryProviderPairingChanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    if (message.geolocation !== 0) {
      writer.uint32(24).int32(message.geolocation);
    }
    if (message.cluster !== "") {
      writer.uint32(34).string(message.cluster);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderPairingChanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderPairingChanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.geolocation = reader.int32();
          break;
        case 4:
          message.cluster = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderPairingChanceRequest {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      geolocation: isSet(object.geolocation) ? Number(object.geolocation) : 0,
      cluster: isSet(object.cluster) ? String(object.cluster) : ""
    };
  },
  toJSON(message: QueryProviderPairingChanceRequest): JsonSafe<QueryProviderPairingChanceRequest> {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.geolocation !== undefined && (obj.geolocation = Math.round(message.geolocation));
    message.cluster !== undefined && (obj.cluster = message.cluster);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderPairingChanceRequest>, I>>(object: I): QueryProviderPairingChanceRequest {
    const message = createBaseQueryProviderPairingChanceRequest();
    message.provider = object.provider ?? "";
    message.chainID = object.chainID ?? "";
    message.geolocation = object.geolocation ?? 0;
    message.cluster = object.cluster ?? "";
    return message;
  },
  fromAmino(object: QueryProviderPairingChanceRequestAmino): QueryProviderPairingChanceRequest {
    const message = createBaseQueryProviderPairingChanceRequest();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID;
    }
    if (object.geolocation !== undefined && object.geolocation !== null) {
      message.geolocation = object.geolocation;
    }
    if (object.cluster !== undefined && object.cluster !== null) {
      message.cluster = object.cluster;
    }
    return message;
  },
  toAmino(message: QueryProviderPairingChanceRequest): QueryProviderPairingChanceRequestAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.chainID = message.chainID === "" ? undefined : message.chainID;
    obj.geolocation = message.geolocation === 0 ? undefined : message.geolocation;
    obj.cluster = message.cluster === "" ? undefined : message.cluster;
    return obj;
  },
  fromAminoMsg(object: QueryProviderPairingChanceRequestAminoMsg): QueryProviderPairingChanceRequest {
    return QueryProviderPairingChanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderPairingChanceRequestProtoMsg): QueryProviderPairingChanceRequest {
    return QueryProviderPairingChanceRequest.decode(message.value);
  },
  toProto(message: QueryProviderPairingChanceRequest): Uint8Array {
    return QueryProviderPairingChanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderPairingChanceRequest): QueryProviderPairingChanceRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryProviderPairingChanceRequest",
      value: QueryProviderPairingChanceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProviderPairingChanceRequest.typeUrl, QueryProviderPairingChanceRequest);
function createBaseQueryProviderPairingChanceResponse(): QueryProviderPairingChanceResponse {
  return {
    chance: ""
  };
}
export const QueryProviderPairingChanceResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryProviderPairingChanceResponse",
  is(o: any): o is QueryProviderPairingChanceResponse {
    return o && (o.$typeUrl === QueryProviderPairingChanceResponse.typeUrl || typeof o.chance === "string");
  },
  isSDK(o: any): o is QueryProviderPairingChanceResponseSDKType {
    return o && (o.$typeUrl === QueryProviderPairingChanceResponse.typeUrl || typeof o.chance === "string");
  },
  isAmino(o: any): o is QueryProviderPairingChanceResponseAmino {
    return o && (o.$typeUrl === QueryProviderPairingChanceResponse.typeUrl || typeof o.chance === "string");
  },
  encode(message: QueryProviderPairingChanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chance !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.chance, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderPairingChanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderPairingChanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chance = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderPairingChanceResponse {
    return {
      chance: isSet(object.chance) ? String(object.chance) : ""
    };
  },
  toJSON(message: QueryProviderPairingChanceResponse): JsonSafe<QueryProviderPairingChanceResponse> {
    const obj: any = {};
    message.chance !== undefined && (obj.chance = message.chance);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderPairingChanceResponse>, I>>(object: I): QueryProviderPairingChanceResponse {
    const message = createBaseQueryProviderPairingChanceResponse();
    message.chance = object.chance ?? "";
    return message;
  },
  fromAmino(object: QueryProviderPairingChanceResponseAmino): QueryProviderPairingChanceResponse {
    const message = createBaseQueryProviderPairingChanceResponse();
    if (object.chance !== undefined && object.chance !== null) {
      message.chance = object.chance;
    }
    return message;
  },
  toAmino(message: QueryProviderPairingChanceResponse): QueryProviderPairingChanceResponseAmino {
    const obj: any = {};
    obj.chance = message.chance === "" ? undefined : message.chance;
    return obj;
  },
  fromAminoMsg(object: QueryProviderPairingChanceResponseAminoMsg): QueryProviderPairingChanceResponse {
    return QueryProviderPairingChanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderPairingChanceResponseProtoMsg): QueryProviderPairingChanceResponse {
    return QueryProviderPairingChanceResponse.decode(message.value);
  },
  toProto(message: QueryProviderPairingChanceResponse): Uint8Array {
    return QueryProviderPairingChanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderPairingChanceResponse): QueryProviderPairingChanceResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryProviderPairingChanceResponse",
      value: QueryProviderPairingChanceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProviderPairingChanceResponse.typeUrl, QueryProviderPairingChanceResponse);
function createBaseQueryUserEntryRequest(): QueryUserEntryRequest {
  return {
    address: "",
    chainID: "",
    block: BigInt(0)
  };
}
export const QueryUserEntryRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryUserEntryRequest",
  is(o: any): o is QueryUserEntryRequest {
    return o && (o.$typeUrl === QueryUserEntryRequest.typeUrl || typeof o.address === "string" && typeof o.chainID === "string" && typeof o.block === "bigint");
  },
  isSDK(o: any): o is QueryUserEntryRequestSDKType {
    return o && (o.$typeUrl === QueryUserEntryRequest.typeUrl || typeof o.address === "string" && typeof o.chainID === "string" && typeof o.block === "bigint");
  },
  isAmino(o: any): o is QueryUserEntryRequestAmino {
    return o && (o.$typeUrl === QueryUserEntryRequest.typeUrl || typeof o.address === "string" && typeof o.chainID === "string" && typeof o.block === "bigint");
  },
  encode(message: QueryUserEntryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(24).uint64(message.block);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserEntryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserEntryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.block = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserEntryRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryUserEntryRequest): JsonSafe<QueryUserEntryRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUserEntryRequest>, I>>(object: I): QueryUserEntryRequest {
    const message = createBaseQueryUserEntryRequest();
    message.address = object.address ?? "";
    message.chainID = object.chainID ?? "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryUserEntryRequestAmino): QueryUserEntryRequest {
    const message = createBaseQueryUserEntryRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID;
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    return message;
  },
  toAmino(message: QueryUserEntryRequest): QueryUserEntryRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.chainID = message.chainID === "" ? undefined : message.chainID;
    obj.block = message.block !== BigInt(0) ? (message.block?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserEntryRequestAminoMsg): QueryUserEntryRequest {
    return QueryUserEntryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserEntryRequestProtoMsg): QueryUserEntryRequest {
    return QueryUserEntryRequest.decode(message.value);
  },
  toProto(message: QueryUserEntryRequest): Uint8Array {
    return QueryUserEntryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserEntryRequest): QueryUserEntryRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryUserEntryRequest",
      value: QueryUserEntryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserEntryRequest.typeUrl, QueryUserEntryRequest);
function createBaseQueryUserEntryResponse(): QueryUserEntryResponse {
  return {
    consumer: StakeEntry.fromPartial({}),
    maxCU: BigInt(0)
  };
}
export const QueryUserEntryResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryUserEntryResponse",
  is(o: any): o is QueryUserEntryResponse {
    return o && (o.$typeUrl === QueryUserEntryResponse.typeUrl || StakeEntry.is(o.consumer) && typeof o.maxCU === "bigint");
  },
  isSDK(o: any): o is QueryUserEntryResponseSDKType {
    return o && (o.$typeUrl === QueryUserEntryResponse.typeUrl || StakeEntry.isSDK(o.consumer) && typeof o.maxCU === "bigint");
  },
  isAmino(o: any): o is QueryUserEntryResponseAmino {
    return o && (o.$typeUrl === QueryUserEntryResponse.typeUrl || StakeEntry.isAmino(o.consumer) && typeof o.maxCU === "bigint");
  },
  encode(message: QueryUserEntryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consumer !== undefined) {
      StakeEntry.encode(message.consumer, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxCU !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxCU);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserEntryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = StakeEntry.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxCU = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserEntryResponse {
    return {
      consumer: isSet(object.consumer) ? StakeEntry.fromJSON(object.consumer) : undefined,
      maxCU: isSet(object.maxCU) ? BigInt(object.maxCU.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryUserEntryResponse): JsonSafe<QueryUserEntryResponse> {
    const obj: any = {};
    message.consumer !== undefined && (obj.consumer = message.consumer ? StakeEntry.toJSON(message.consumer) : undefined);
    message.maxCU !== undefined && (obj.maxCU = (message.maxCU || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUserEntryResponse>, I>>(object: I): QueryUserEntryResponse {
    const message = createBaseQueryUserEntryResponse();
    message.consumer = object.consumer !== undefined && object.consumer !== null ? StakeEntry.fromPartial(object.consumer) : undefined;
    message.maxCU = object.maxCU !== undefined && object.maxCU !== null ? BigInt(object.maxCU.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryUserEntryResponseAmino): QueryUserEntryResponse {
    const message = createBaseQueryUserEntryResponse();
    if (object.consumer !== undefined && object.consumer !== null) {
      message.consumer = StakeEntry.fromAmino(object.consumer);
    }
    if (object.maxCU !== undefined && object.maxCU !== null) {
      message.maxCU = BigInt(object.maxCU);
    }
    return message;
  },
  toAmino(message: QueryUserEntryResponse): QueryUserEntryResponseAmino {
    const obj: any = {};
    obj.consumer = message.consumer ? StakeEntry.toAmino(message.consumer) : undefined;
    obj.maxCU = message.maxCU !== BigInt(0) ? (message.maxCU?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserEntryResponseAminoMsg): QueryUserEntryResponse {
    return QueryUserEntryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserEntryResponseProtoMsg): QueryUserEntryResponse {
    return QueryUserEntryResponse.decode(message.value);
  },
  toProto(message: QueryUserEntryResponse): Uint8Array {
    return QueryUserEntryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserEntryResponse): QueryUserEntryResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryUserEntryResponse",
      value: QueryUserEntryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserEntryResponse.typeUrl, QueryUserEntryResponse);
function createBaseQueryStaticProvidersListRequest(): QueryStaticProvidersListRequest {
  return {
    chainID: ""
  };
}
export const QueryStaticProvidersListRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryStaticProvidersListRequest",
  is(o: any): o is QueryStaticProvidersListRequest {
    return o && (o.$typeUrl === QueryStaticProvidersListRequest.typeUrl || typeof o.chainID === "string");
  },
  isSDK(o: any): o is QueryStaticProvidersListRequestSDKType {
    return o && (o.$typeUrl === QueryStaticProvidersListRequest.typeUrl || typeof o.chainID === "string");
  },
  isAmino(o: any): o is QueryStaticProvidersListRequestAmino {
    return o && (o.$typeUrl === QueryStaticProvidersListRequest.typeUrl || typeof o.chainID === "string");
  },
  encode(message: QueryStaticProvidersListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStaticProvidersListRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStaticProvidersListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStaticProvidersListRequest {
    return {
      chainID: isSet(object.chainID) ? String(object.chainID) : ""
    };
  },
  toJSON(message: QueryStaticProvidersListRequest): JsonSafe<QueryStaticProvidersListRequest> {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryStaticProvidersListRequest>, I>>(object: I): QueryStaticProvidersListRequest {
    const message = createBaseQueryStaticProvidersListRequest();
    message.chainID = object.chainID ?? "";
    return message;
  },
  fromAmino(object: QueryStaticProvidersListRequestAmino): QueryStaticProvidersListRequest {
    const message = createBaseQueryStaticProvidersListRequest();
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID;
    }
    return message;
  },
  toAmino(message: QueryStaticProvidersListRequest): QueryStaticProvidersListRequestAmino {
    const obj: any = {};
    obj.chainID = message.chainID === "" ? undefined : message.chainID;
    return obj;
  },
  fromAminoMsg(object: QueryStaticProvidersListRequestAminoMsg): QueryStaticProvidersListRequest {
    return QueryStaticProvidersListRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStaticProvidersListRequestProtoMsg): QueryStaticProvidersListRequest {
    return QueryStaticProvidersListRequest.decode(message.value);
  },
  toProto(message: QueryStaticProvidersListRequest): Uint8Array {
    return QueryStaticProvidersListRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStaticProvidersListRequest): QueryStaticProvidersListRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryStaticProvidersListRequest",
      value: QueryStaticProvidersListRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStaticProvidersListRequest.typeUrl, QueryStaticProvidersListRequest);
function createBaseQueryStaticProvidersListResponse(): QueryStaticProvidersListResponse {
  return {
    providers: []
  };
}
export const QueryStaticProvidersListResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryStaticProvidersListResponse",
  is(o: any): o is QueryStaticProvidersListResponse {
    return o && (o.$typeUrl === QueryStaticProvidersListResponse.typeUrl || Array.isArray(o.providers) && (!o.providers.length || StakeEntry.is(o.providers[0])));
  },
  isSDK(o: any): o is QueryStaticProvidersListResponseSDKType {
    return o && (o.$typeUrl === QueryStaticProvidersListResponse.typeUrl || Array.isArray(o.providers) && (!o.providers.length || StakeEntry.isSDK(o.providers[0])));
  },
  isAmino(o: any): o is QueryStaticProvidersListResponseAmino {
    return o && (o.$typeUrl === QueryStaticProvidersListResponse.typeUrl || Array.isArray(o.providers) && (!o.providers.length || StakeEntry.isAmino(o.providers[0])));
  },
  encode(message: QueryStaticProvidersListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providers) {
      StakeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStaticProvidersListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStaticProvidersListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(StakeEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStaticProvidersListResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => StakeEntry.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryStaticProvidersListResponse): JsonSafe<QueryStaticProvidersListResponse> {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? StakeEntry.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryStaticProvidersListResponse>, I>>(object: I): QueryStaticProvidersListResponse {
    const message = createBaseQueryStaticProvidersListResponse();
    message.providers = object.providers?.map(e => StakeEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryStaticProvidersListResponseAmino): QueryStaticProvidersListResponse {
    const message = createBaseQueryStaticProvidersListResponse();
    message.providers = object.providers?.map(e => StakeEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryStaticProvidersListResponse): QueryStaticProvidersListResponseAmino {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? StakeEntry.toAmino(e) : undefined);
    } else {
      obj.providers = message.providers;
    }
    return obj;
  },
  fromAminoMsg(object: QueryStaticProvidersListResponseAminoMsg): QueryStaticProvidersListResponse {
    return QueryStaticProvidersListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStaticProvidersListResponseProtoMsg): QueryStaticProvidersListResponse {
    return QueryStaticProvidersListResponse.decode(message.value);
  },
  toProto(message: QueryStaticProvidersListResponse): Uint8Array {
    return QueryStaticProvidersListResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStaticProvidersListResponse): QueryStaticProvidersListResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryStaticProvidersListResponse",
      value: QueryStaticProvidersListResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStaticProvidersListResponse.typeUrl, QueryStaticProvidersListResponse);
function createBaseQueryEffectivePolicyRequest(): QueryEffectivePolicyRequest {
  return {
    consumer: "",
    specID: ""
  };
}
export const QueryEffectivePolicyRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryEffectivePolicyRequest",
  is(o: any): o is QueryEffectivePolicyRequest {
    return o && (o.$typeUrl === QueryEffectivePolicyRequest.typeUrl || typeof o.consumer === "string" && typeof o.specID === "string");
  },
  isSDK(o: any): o is QueryEffectivePolicyRequestSDKType {
    return o && (o.$typeUrl === QueryEffectivePolicyRequest.typeUrl || typeof o.consumer === "string" && typeof o.specID === "string");
  },
  isAmino(o: any): o is QueryEffectivePolicyRequestAmino {
    return o && (o.$typeUrl === QueryEffectivePolicyRequest.typeUrl || typeof o.consumer === "string" && typeof o.specID === "string");
  },
  encode(message: QueryEffectivePolicyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    if (message.specID !== "") {
      writer.uint32(18).string(message.specID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEffectivePolicyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEffectivePolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = reader.string();
          break;
        case 2:
          message.specID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEffectivePolicyRequest {
    return {
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
      specID: isSet(object.specID) ? String(object.specID) : ""
    };
  },
  toJSON(message: QueryEffectivePolicyRequest): JsonSafe<QueryEffectivePolicyRequest> {
    const obj: any = {};
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.specID !== undefined && (obj.specID = message.specID);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEffectivePolicyRequest>, I>>(object: I): QueryEffectivePolicyRequest {
    const message = createBaseQueryEffectivePolicyRequest();
    message.consumer = object.consumer ?? "";
    message.specID = object.specID ?? "";
    return message;
  },
  fromAmino(object: QueryEffectivePolicyRequestAmino): QueryEffectivePolicyRequest {
    const message = createBaseQueryEffectivePolicyRequest();
    if (object.consumer !== undefined && object.consumer !== null) {
      message.consumer = object.consumer;
    }
    if (object.specID !== undefined && object.specID !== null) {
      message.specID = object.specID;
    }
    return message;
  },
  toAmino(message: QueryEffectivePolicyRequest): QueryEffectivePolicyRequestAmino {
    const obj: any = {};
    obj.consumer = message.consumer === "" ? undefined : message.consumer;
    obj.specID = message.specID === "" ? undefined : message.specID;
    return obj;
  },
  fromAminoMsg(object: QueryEffectivePolicyRequestAminoMsg): QueryEffectivePolicyRequest {
    return QueryEffectivePolicyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEffectivePolicyRequestProtoMsg): QueryEffectivePolicyRequest {
    return QueryEffectivePolicyRequest.decode(message.value);
  },
  toProto(message: QueryEffectivePolicyRequest): Uint8Array {
    return QueryEffectivePolicyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEffectivePolicyRequest): QueryEffectivePolicyRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryEffectivePolicyRequest",
      value: QueryEffectivePolicyRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEffectivePolicyRequest.typeUrl, QueryEffectivePolicyRequest);
function createBaseQueryEffectivePolicyResponse(): QueryEffectivePolicyResponse {
  return {
    policy: undefined,
    pendingPolicy: undefined
  };
}
export const QueryEffectivePolicyResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryEffectivePolicyResponse",
  is(o: any): o is QueryEffectivePolicyResponse {
    return o && o.$typeUrl === QueryEffectivePolicyResponse.typeUrl;
  },
  isSDK(o: any): o is QueryEffectivePolicyResponseSDKType {
    return o && o.$typeUrl === QueryEffectivePolicyResponse.typeUrl;
  },
  isAmino(o: any): o is QueryEffectivePolicyResponseAmino {
    return o && o.$typeUrl === QueryEffectivePolicyResponse.typeUrl;
  },
  encode(message: QueryEffectivePolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    if (message.pendingPolicy !== undefined) {
      Policy.encode(message.pendingPolicy, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEffectivePolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEffectivePolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        case 2:
          message.pendingPolicy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEffectivePolicyResponse {
    return {
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined,
      pendingPolicy: isSet(object.pendingPolicy) ? Policy.fromJSON(object.pendingPolicy) : undefined
    };
  },
  toJSON(message: QueryEffectivePolicyResponse): JsonSafe<QueryEffectivePolicyResponse> {
    const obj: any = {};
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    message.pendingPolicy !== undefined && (obj.pendingPolicy = message.pendingPolicy ? Policy.toJSON(message.pendingPolicy) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEffectivePolicyResponse>, I>>(object: I): QueryEffectivePolicyResponse {
    const message = createBaseQueryEffectivePolicyResponse();
    message.policy = object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    message.pendingPolicy = object.pendingPolicy !== undefined && object.pendingPolicy !== null ? Policy.fromPartial(object.pendingPolicy) : undefined;
    return message;
  },
  fromAmino(object: QueryEffectivePolicyResponseAmino): QueryEffectivePolicyResponse {
    const message = createBaseQueryEffectivePolicyResponse();
    if (object.policy !== undefined && object.policy !== null) {
      message.policy = Policy.fromAmino(object.policy);
    }
    if (object.pending_policy !== undefined && object.pending_policy !== null) {
      message.pendingPolicy = Policy.fromAmino(object.pending_policy);
    }
    return message;
  },
  toAmino(message: QueryEffectivePolicyResponse): QueryEffectivePolicyResponseAmino {
    const obj: any = {};
    obj.policy = message.policy ? Policy.toAmino(message.policy) : undefined;
    obj.pending_policy = message.pendingPolicy ? Policy.toAmino(message.pendingPolicy) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEffectivePolicyResponseAminoMsg): QueryEffectivePolicyResponse {
    return QueryEffectivePolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEffectivePolicyResponseProtoMsg): QueryEffectivePolicyResponse {
    return QueryEffectivePolicyResponse.decode(message.value);
  },
  toProto(message: QueryEffectivePolicyResponse): Uint8Array {
    return QueryEffectivePolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEffectivePolicyResponse): QueryEffectivePolicyResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryEffectivePolicyResponse",
      value: QueryEffectivePolicyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEffectivePolicyResponse.typeUrl, QueryEffectivePolicyResponse);
function createBaseQuerySdkPairingResponse(): QuerySdkPairingResponse {
  return {
    pairing: undefined,
    maxCu: BigInt(0),
    spec: undefined,
    downtimeParams: undefined
  };
}
export const QuerySdkPairingResponse = {
  typeUrl: "/lavanet.lava.pairing.QuerySdkPairingResponse",
  is(o: any): o is QuerySdkPairingResponse {
    return o && (o.$typeUrl === QuerySdkPairingResponse.typeUrl || typeof o.maxCu === "bigint");
  },
  isSDK(o: any): o is QuerySdkPairingResponseSDKType {
    return o && (o.$typeUrl === QuerySdkPairingResponse.typeUrl || typeof o.max_cu === "bigint");
  },
  isAmino(o: any): o is QuerySdkPairingResponseAmino {
    return o && (o.$typeUrl === QuerySdkPairingResponse.typeUrl || typeof o.max_cu === "bigint");
  },
  encode(message: QuerySdkPairingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairing !== undefined) {
      QueryGetPairingResponse.encode(message.pairing, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxCu !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxCu);
    }
    if (message.spec !== undefined) {
      Spec.encode(message.spec, writer.uint32(26).fork()).ldelim();
    }
    if (message.downtimeParams !== undefined) {
      Params2.encode(message.downtimeParams, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySdkPairingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySdkPairingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairing = QueryGetPairingResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxCu = reader.uint64();
          break;
        case 3:
          message.spec = Spec.decode(reader, reader.uint32());
          break;
        case 4:
          message.downtimeParams = Params2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySdkPairingResponse {
    return {
      pairing: isSet(object.pairing) ? QueryGetPairingResponse.fromJSON(object.pairing) : undefined,
      maxCu: isSet(object.maxCu) ? BigInt(object.maxCu.toString()) : BigInt(0),
      spec: isSet(object.spec) ? Spec.fromJSON(object.spec) : undefined,
      downtimeParams: isSet(object.downtimeParams) ? Params2.fromJSON(object.downtimeParams) : undefined
    };
  },
  toJSON(message: QuerySdkPairingResponse): JsonSafe<QuerySdkPairingResponse> {
    const obj: any = {};
    message.pairing !== undefined && (obj.pairing = message.pairing ? QueryGetPairingResponse.toJSON(message.pairing) : undefined);
    message.maxCu !== undefined && (obj.maxCu = (message.maxCu || BigInt(0)).toString());
    message.spec !== undefined && (obj.spec = message.spec ? Spec.toJSON(message.spec) : undefined);
    message.downtimeParams !== undefined && (obj.downtimeParams = message.downtimeParams ? Params2.toJSON(message.downtimeParams) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySdkPairingResponse>, I>>(object: I): QuerySdkPairingResponse {
    const message = createBaseQuerySdkPairingResponse();
    message.pairing = object.pairing !== undefined && object.pairing !== null ? QueryGetPairingResponse.fromPartial(object.pairing) : undefined;
    message.maxCu = object.maxCu !== undefined && object.maxCu !== null ? BigInt(object.maxCu.toString()) : BigInt(0);
    message.spec = object.spec !== undefined && object.spec !== null ? Spec.fromPartial(object.spec) : undefined;
    message.downtimeParams = object.downtimeParams !== undefined && object.downtimeParams !== null ? Params2.fromPartial(object.downtimeParams) : undefined;
    return message;
  },
  fromAmino(object: QuerySdkPairingResponseAmino): QuerySdkPairingResponse {
    const message = createBaseQuerySdkPairingResponse();
    if (object.pairing !== undefined && object.pairing !== null) {
      message.pairing = QueryGetPairingResponse.fromAmino(object.pairing);
    }
    if (object.max_cu !== undefined && object.max_cu !== null) {
      message.maxCu = BigInt(object.max_cu);
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = Spec.fromAmino(object.spec);
    }
    if (object.downtime_params !== undefined && object.downtime_params !== null) {
      message.downtimeParams = Params2.fromAmino(object.downtime_params);
    }
    return message;
  },
  toAmino(message: QuerySdkPairingResponse): QuerySdkPairingResponseAmino {
    const obj: any = {};
    obj.pairing = message.pairing ? QueryGetPairingResponse.toAmino(message.pairing) : undefined;
    obj.max_cu = message.maxCu !== BigInt(0) ? (message.maxCu?.toString)() : undefined;
    obj.spec = message.spec ? Spec.toAmino(message.spec) : undefined;
    obj.downtime_params = message.downtimeParams ? Params2.toAmino(message.downtimeParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySdkPairingResponseAminoMsg): QuerySdkPairingResponse {
    return QuerySdkPairingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySdkPairingResponseProtoMsg): QuerySdkPairingResponse {
    return QuerySdkPairingResponse.decode(message.value);
  },
  toProto(message: QuerySdkPairingResponse): Uint8Array {
    return QuerySdkPairingResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySdkPairingResponse): QuerySdkPairingResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QuerySdkPairingResponse",
      value: QuerySdkPairingResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySdkPairingResponse.typeUrl, QuerySdkPairingResponse);
function createBaseQueryProviderMonthlyPayoutRequest(): QueryProviderMonthlyPayoutRequest {
  return {
    provider: ""
  };
}
export const QueryProviderMonthlyPayoutRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryProviderMonthlyPayoutRequest",
  is(o: any): o is QueryProviderMonthlyPayoutRequest {
    return o && (o.$typeUrl === QueryProviderMonthlyPayoutRequest.typeUrl || typeof o.provider === "string");
  },
  isSDK(o: any): o is QueryProviderMonthlyPayoutRequestSDKType {
    return o && (o.$typeUrl === QueryProviderMonthlyPayoutRequest.typeUrl || typeof o.provider === "string");
  },
  isAmino(o: any): o is QueryProviderMonthlyPayoutRequestAmino {
    return o && (o.$typeUrl === QueryProviderMonthlyPayoutRequest.typeUrl || typeof o.provider === "string");
  },
  encode(message: QueryProviderMonthlyPayoutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderMonthlyPayoutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderMonthlyPayoutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderMonthlyPayoutRequest {
    return {
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },
  toJSON(message: QueryProviderMonthlyPayoutRequest): JsonSafe<QueryProviderMonthlyPayoutRequest> {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderMonthlyPayoutRequest>, I>>(object: I): QueryProviderMonthlyPayoutRequest {
    const message = createBaseQueryProviderMonthlyPayoutRequest();
    message.provider = object.provider ?? "";
    return message;
  },
  fromAmino(object: QueryProviderMonthlyPayoutRequestAmino): QueryProviderMonthlyPayoutRequest {
    const message = createBaseQueryProviderMonthlyPayoutRequest();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    return message;
  },
  toAmino(message: QueryProviderMonthlyPayoutRequest): QueryProviderMonthlyPayoutRequestAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    return obj;
  },
  fromAminoMsg(object: QueryProviderMonthlyPayoutRequestAminoMsg): QueryProviderMonthlyPayoutRequest {
    return QueryProviderMonthlyPayoutRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderMonthlyPayoutRequestProtoMsg): QueryProviderMonthlyPayoutRequest {
    return QueryProviderMonthlyPayoutRequest.decode(message.value);
  },
  toProto(message: QueryProviderMonthlyPayoutRequest): Uint8Array {
    return QueryProviderMonthlyPayoutRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderMonthlyPayoutRequest): QueryProviderMonthlyPayoutRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryProviderMonthlyPayoutRequest",
      value: QueryProviderMonthlyPayoutRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProviderMonthlyPayoutRequest.typeUrl, QueryProviderMonthlyPayoutRequest);
function createBaseSubscriptionPayout(): SubscriptionPayout {
  return {
    subscription: "",
    chainId: "",
    amount: BigInt(0)
  };
}
export const SubscriptionPayout = {
  typeUrl: "/lavanet.lava.pairing.SubscriptionPayout",
  is(o: any): o is SubscriptionPayout {
    return o && (o.$typeUrl === SubscriptionPayout.typeUrl || typeof o.subscription === "string" && typeof o.chainId === "string" && typeof o.amount === "bigint");
  },
  isSDK(o: any): o is SubscriptionPayoutSDKType {
    return o && (o.$typeUrl === SubscriptionPayout.typeUrl || typeof o.subscription === "string" && typeof o.chain_id === "string" && typeof o.amount === "bigint");
  },
  isAmino(o: any): o is SubscriptionPayoutAmino {
    return o && (o.$typeUrl === SubscriptionPayout.typeUrl || typeof o.subscription === "string" && typeof o.chain_id === "string" && typeof o.amount === "bigint");
  },
  encode(message: SubscriptionPayout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscription !== "") {
      writer.uint32(10).string(message.subscription);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubscriptionPayout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscriptionPayout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscription = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SubscriptionPayout {
    return {
      subscription: isSet(object.subscription) ? String(object.subscription) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  toJSON(message: SubscriptionPayout): JsonSafe<SubscriptionPayout> {
    const obj: any = {};
    message.subscription !== undefined && (obj.subscription = message.subscription);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SubscriptionPayout>, I>>(object: I): SubscriptionPayout {
    const message = createBaseSubscriptionPayout();
    message.subscription = object.subscription ?? "";
    message.chainId = object.chainId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SubscriptionPayoutAmino): SubscriptionPayout {
    const message = createBaseSubscriptionPayout();
    if (object.subscription !== undefined && object.subscription !== null) {
      message.subscription = object.subscription;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: SubscriptionPayout): SubscriptionPayoutAmino {
    const obj: any = {};
    obj.subscription = message.subscription === "" ? undefined : message.subscription;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.amount = message.amount !== BigInt(0) ? (message.amount?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: SubscriptionPayoutAminoMsg): SubscriptionPayout {
    return SubscriptionPayout.fromAmino(object.value);
  },
  fromProtoMsg(message: SubscriptionPayoutProtoMsg): SubscriptionPayout {
    return SubscriptionPayout.decode(message.value);
  },
  toProto(message: SubscriptionPayout): Uint8Array {
    return SubscriptionPayout.encode(message).finish();
  },
  toProtoMsg(message: SubscriptionPayout): SubscriptionPayoutProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.SubscriptionPayout",
      value: SubscriptionPayout.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SubscriptionPayout.typeUrl, SubscriptionPayout);
function createBaseQueryProviderMonthlyPayoutResponse(): QueryProviderMonthlyPayoutResponse {
  return {
    total: BigInt(0),
    details: []
  };
}
export const QueryProviderMonthlyPayoutResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryProviderMonthlyPayoutResponse",
  is(o: any): o is QueryProviderMonthlyPayoutResponse {
    return o && (o.$typeUrl === QueryProviderMonthlyPayoutResponse.typeUrl || typeof o.total === "bigint" && Array.isArray(o.details) && (!o.details.length || SubscriptionPayout.is(o.details[0])));
  },
  isSDK(o: any): o is QueryProviderMonthlyPayoutResponseSDKType {
    return o && (o.$typeUrl === QueryProviderMonthlyPayoutResponse.typeUrl || typeof o.total === "bigint" && Array.isArray(o.details) && (!o.details.length || SubscriptionPayout.isSDK(o.details[0])));
  },
  isAmino(o: any): o is QueryProviderMonthlyPayoutResponseAmino {
    return o && (o.$typeUrl === QueryProviderMonthlyPayoutResponse.typeUrl || typeof o.total === "bigint" && Array.isArray(o.details) && (!o.details.length || SubscriptionPayout.isAmino(o.details[0])));
  },
  encode(message: QueryProviderMonthlyPayoutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== BigInt(0)) {
      writer.uint32(8).uint64(message.total);
    }
    for (const v of message.details) {
      SubscriptionPayout.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderMonthlyPayoutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderMonthlyPayoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint64();
          break;
        case 2:
          message.details.push(SubscriptionPayout.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderMonthlyPayoutResponse {
    return {
      total: isSet(object.total) ? BigInt(object.total.toString()) : BigInt(0),
      details: Array.isArray(object?.details) ? object.details.map((e: any) => SubscriptionPayout.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryProviderMonthlyPayoutResponse): JsonSafe<QueryProviderMonthlyPayoutResponse> {
    const obj: any = {};
    message.total !== undefined && (obj.total = (message.total || BigInt(0)).toString());
    if (message.details) {
      obj.details = message.details.map(e => e ? SubscriptionPayout.toJSON(e) : undefined);
    } else {
      obj.details = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderMonthlyPayoutResponse>, I>>(object: I): QueryProviderMonthlyPayoutResponse {
    const message = createBaseQueryProviderMonthlyPayoutResponse();
    message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
    message.details = object.details?.map(e => SubscriptionPayout.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryProviderMonthlyPayoutResponseAmino): QueryProviderMonthlyPayoutResponse {
    const message = createBaseQueryProviderMonthlyPayoutResponse();
    if (object.total !== undefined && object.total !== null) {
      message.total = BigInt(object.total);
    }
    message.details = object.details?.map(e => SubscriptionPayout.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryProviderMonthlyPayoutResponse): QueryProviderMonthlyPayoutResponseAmino {
    const obj: any = {};
    obj.total = message.total !== BigInt(0) ? (message.total?.toString)() : undefined;
    if (message.details) {
      obj.details = message.details.map(e => e ? SubscriptionPayout.toAmino(e) : undefined);
    } else {
      obj.details = message.details;
    }
    return obj;
  },
  fromAminoMsg(object: QueryProviderMonthlyPayoutResponseAminoMsg): QueryProviderMonthlyPayoutResponse {
    return QueryProviderMonthlyPayoutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderMonthlyPayoutResponseProtoMsg): QueryProviderMonthlyPayoutResponse {
    return QueryProviderMonthlyPayoutResponse.decode(message.value);
  },
  toProto(message: QueryProviderMonthlyPayoutResponse): Uint8Array {
    return QueryProviderMonthlyPayoutResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderMonthlyPayoutResponse): QueryProviderMonthlyPayoutResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryProviderMonthlyPayoutResponse",
      value: QueryProviderMonthlyPayoutResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProviderMonthlyPayoutResponse.typeUrl, QueryProviderMonthlyPayoutResponse);
function createBaseProviderPayout(): ProviderPayout {
  return {
    provider: "",
    amount: BigInt(0)
  };
}
export const ProviderPayout = {
  typeUrl: "/lavanet.lava.pairing.ProviderPayout",
  is(o: any): o is ProviderPayout {
    return o && (o.$typeUrl === ProviderPayout.typeUrl || typeof o.provider === "string" && typeof o.amount === "bigint");
  },
  isSDK(o: any): o is ProviderPayoutSDKType {
    return o && (o.$typeUrl === ProviderPayout.typeUrl || typeof o.provider === "string" && typeof o.amount === "bigint");
  },
  isAmino(o: any): o is ProviderPayoutAmino {
    return o && (o.$typeUrl === ProviderPayout.typeUrl || typeof o.provider === "string" && typeof o.amount === "bigint");
  },
  encode(message: ProviderPayout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderPayout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderPayout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProviderPayout {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  toJSON(message: ProviderPayout): JsonSafe<ProviderPayout> {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProviderPayout>, I>>(object: I): ProviderPayout {
    const message = createBaseProviderPayout();
    message.provider = object.provider ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProviderPayoutAmino): ProviderPayout {
    const message = createBaseProviderPayout();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: ProviderPayout): ProviderPayoutAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.amount = message.amount !== BigInt(0) ? (message.amount?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderPayoutAminoMsg): ProviderPayout {
    return ProviderPayout.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderPayoutProtoMsg): ProviderPayout {
    return ProviderPayout.decode(message.value);
  },
  toProto(message: ProviderPayout): Uint8Array {
    return ProviderPayout.encode(message).finish();
  },
  toProtoMsg(message: ProviderPayout): ProviderPayoutProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ProviderPayout",
      value: ProviderPayout.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProviderPayout.typeUrl, ProviderPayout);
function createBaseChainIDPayout(): ChainIDPayout {
  return {
    chainId: "",
    payouts: []
  };
}
export const ChainIDPayout = {
  typeUrl: "/lavanet.lava.pairing.ChainIDPayout",
  is(o: any): o is ChainIDPayout {
    return o && (o.$typeUrl === ChainIDPayout.typeUrl || typeof o.chainId === "string" && Array.isArray(o.payouts) && (!o.payouts.length || ProviderPayout.is(o.payouts[0])));
  },
  isSDK(o: any): o is ChainIDPayoutSDKType {
    return o && (o.$typeUrl === ChainIDPayout.typeUrl || typeof o.chain_id === "string" && Array.isArray(o.payouts) && (!o.payouts.length || ProviderPayout.isSDK(o.payouts[0])));
  },
  isAmino(o: any): o is ChainIDPayoutAmino {
    return o && (o.$typeUrl === ChainIDPayout.typeUrl || typeof o.chain_id === "string" && Array.isArray(o.payouts) && (!o.payouts.length || ProviderPayout.isAmino(o.payouts[0])));
  },
  encode(message: ChainIDPayout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    for (const v of message.payouts) {
      ProviderPayout.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChainIDPayout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainIDPayout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.payouts.push(ProviderPayout.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChainIDPayout {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      payouts: Array.isArray(object?.payouts) ? object.payouts.map((e: any) => ProviderPayout.fromJSON(e)) : []
    };
  },
  toJSON(message: ChainIDPayout): JsonSafe<ChainIDPayout> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    if (message.payouts) {
      obj.payouts = message.payouts.map(e => e ? ProviderPayout.toJSON(e) : undefined);
    } else {
      obj.payouts = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ChainIDPayout>, I>>(object: I): ChainIDPayout {
    const message = createBaseChainIDPayout();
    message.chainId = object.chainId ?? "";
    message.payouts = object.payouts?.map(e => ProviderPayout.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ChainIDPayoutAmino): ChainIDPayout {
    const message = createBaseChainIDPayout();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    message.payouts = object.payouts?.map(e => ProviderPayout.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ChainIDPayout): ChainIDPayoutAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    if (message.payouts) {
      obj.payouts = message.payouts.map(e => e ? ProviderPayout.toAmino(e) : undefined);
    } else {
      obj.payouts = message.payouts;
    }
    return obj;
  },
  fromAminoMsg(object: ChainIDPayoutAminoMsg): ChainIDPayout {
    return ChainIDPayout.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainIDPayoutProtoMsg): ChainIDPayout {
    return ChainIDPayout.decode(message.value);
  },
  toProto(message: ChainIDPayout): Uint8Array {
    return ChainIDPayout.encode(message).finish();
  },
  toProtoMsg(message: ChainIDPayout): ChainIDPayoutProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ChainIDPayout",
      value: ChainIDPayout.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ChainIDPayout.typeUrl, ChainIDPayout);
function createBaseQuerySubscriptionMonthlyPayoutRequest(): QuerySubscriptionMonthlyPayoutRequest {
  return {
    consumer: ""
  };
}
export const QuerySubscriptionMonthlyPayoutRequest = {
  typeUrl: "/lavanet.lava.pairing.QuerySubscriptionMonthlyPayoutRequest",
  is(o: any): o is QuerySubscriptionMonthlyPayoutRequest {
    return o && (o.$typeUrl === QuerySubscriptionMonthlyPayoutRequest.typeUrl || typeof o.consumer === "string");
  },
  isSDK(o: any): o is QuerySubscriptionMonthlyPayoutRequestSDKType {
    return o && (o.$typeUrl === QuerySubscriptionMonthlyPayoutRequest.typeUrl || typeof o.consumer === "string");
  },
  isAmino(o: any): o is QuerySubscriptionMonthlyPayoutRequestAmino {
    return o && (o.$typeUrl === QuerySubscriptionMonthlyPayoutRequest.typeUrl || typeof o.consumer === "string");
  },
  encode(message: QuerySubscriptionMonthlyPayoutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consumer !== "") {
      writer.uint32(10).string(message.consumer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubscriptionMonthlyPayoutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionMonthlyPayoutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubscriptionMonthlyPayoutRequest {
    return {
      consumer: isSet(object.consumer) ? String(object.consumer) : ""
    };
  },
  toJSON(message: QuerySubscriptionMonthlyPayoutRequest): JsonSafe<QuerySubscriptionMonthlyPayoutRequest> {
    const obj: any = {};
    message.consumer !== undefined && (obj.consumer = message.consumer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySubscriptionMonthlyPayoutRequest>, I>>(object: I): QuerySubscriptionMonthlyPayoutRequest {
    const message = createBaseQuerySubscriptionMonthlyPayoutRequest();
    message.consumer = object.consumer ?? "";
    return message;
  },
  fromAmino(object: QuerySubscriptionMonthlyPayoutRequestAmino): QuerySubscriptionMonthlyPayoutRequest {
    const message = createBaseQuerySubscriptionMonthlyPayoutRequest();
    if (object.consumer !== undefined && object.consumer !== null) {
      message.consumer = object.consumer;
    }
    return message;
  },
  toAmino(message: QuerySubscriptionMonthlyPayoutRequest): QuerySubscriptionMonthlyPayoutRequestAmino {
    const obj: any = {};
    obj.consumer = message.consumer === "" ? undefined : message.consumer;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriptionMonthlyPayoutRequestAminoMsg): QuerySubscriptionMonthlyPayoutRequest {
    return QuerySubscriptionMonthlyPayoutRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriptionMonthlyPayoutRequestProtoMsg): QuerySubscriptionMonthlyPayoutRequest {
    return QuerySubscriptionMonthlyPayoutRequest.decode(message.value);
  },
  toProto(message: QuerySubscriptionMonthlyPayoutRequest): Uint8Array {
    return QuerySubscriptionMonthlyPayoutRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionMonthlyPayoutRequest): QuerySubscriptionMonthlyPayoutRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QuerySubscriptionMonthlyPayoutRequest",
      value: QuerySubscriptionMonthlyPayoutRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySubscriptionMonthlyPayoutRequest.typeUrl, QuerySubscriptionMonthlyPayoutRequest);
function createBaseQuerySubscriptionMonthlyPayoutResponse(): QuerySubscriptionMonthlyPayoutResponse {
  return {
    total: BigInt(0),
    details: []
  };
}
export const QuerySubscriptionMonthlyPayoutResponse = {
  typeUrl: "/lavanet.lava.pairing.QuerySubscriptionMonthlyPayoutResponse",
  is(o: any): o is QuerySubscriptionMonthlyPayoutResponse {
    return o && (o.$typeUrl === QuerySubscriptionMonthlyPayoutResponse.typeUrl || typeof o.total === "bigint" && Array.isArray(o.details) && (!o.details.length || ChainIDPayout.is(o.details[0])));
  },
  isSDK(o: any): o is QuerySubscriptionMonthlyPayoutResponseSDKType {
    return o && (o.$typeUrl === QuerySubscriptionMonthlyPayoutResponse.typeUrl || typeof o.total === "bigint" && Array.isArray(o.details) && (!o.details.length || ChainIDPayout.isSDK(o.details[0])));
  },
  isAmino(o: any): o is QuerySubscriptionMonthlyPayoutResponseAmino {
    return o && (o.$typeUrl === QuerySubscriptionMonthlyPayoutResponse.typeUrl || typeof o.total === "bigint" && Array.isArray(o.details) && (!o.details.length || ChainIDPayout.isAmino(o.details[0])));
  },
  encode(message: QuerySubscriptionMonthlyPayoutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== BigInt(0)) {
      writer.uint32(8).uint64(message.total);
    }
    for (const v of message.details) {
      ChainIDPayout.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubscriptionMonthlyPayoutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscriptionMonthlyPayoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint64();
          break;
        case 2:
          message.details.push(ChainIDPayout.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubscriptionMonthlyPayoutResponse {
    return {
      total: isSet(object.total) ? BigInt(object.total.toString()) : BigInt(0),
      details: Array.isArray(object?.details) ? object.details.map((e: any) => ChainIDPayout.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySubscriptionMonthlyPayoutResponse): JsonSafe<QuerySubscriptionMonthlyPayoutResponse> {
    const obj: any = {};
    message.total !== undefined && (obj.total = (message.total || BigInt(0)).toString());
    if (message.details) {
      obj.details = message.details.map(e => e ? ChainIDPayout.toJSON(e) : undefined);
    } else {
      obj.details = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySubscriptionMonthlyPayoutResponse>, I>>(object: I): QuerySubscriptionMonthlyPayoutResponse {
    const message = createBaseQuerySubscriptionMonthlyPayoutResponse();
    message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
    message.details = object.details?.map(e => ChainIDPayout.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySubscriptionMonthlyPayoutResponseAmino): QuerySubscriptionMonthlyPayoutResponse {
    const message = createBaseQuerySubscriptionMonthlyPayoutResponse();
    if (object.total !== undefined && object.total !== null) {
      message.total = BigInt(object.total);
    }
    message.details = object.details?.map(e => ChainIDPayout.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySubscriptionMonthlyPayoutResponse): QuerySubscriptionMonthlyPayoutResponseAmino {
    const obj: any = {};
    obj.total = message.total !== BigInt(0) ? (message.total?.toString)() : undefined;
    if (message.details) {
      obj.details = message.details.map(e => e ? ChainIDPayout.toAmino(e) : undefined);
    } else {
      obj.details = message.details;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubscriptionMonthlyPayoutResponseAminoMsg): QuerySubscriptionMonthlyPayoutResponse {
    return QuerySubscriptionMonthlyPayoutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriptionMonthlyPayoutResponseProtoMsg): QuerySubscriptionMonthlyPayoutResponse {
    return QuerySubscriptionMonthlyPayoutResponse.decode(message.value);
  },
  toProto(message: QuerySubscriptionMonthlyPayoutResponse): Uint8Array {
    return QuerySubscriptionMonthlyPayoutResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriptionMonthlyPayoutResponse): QuerySubscriptionMonthlyPayoutResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QuerySubscriptionMonthlyPayoutResponse",
      value: QuerySubscriptionMonthlyPayoutResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySubscriptionMonthlyPayoutResponse.typeUrl, QuerySubscriptionMonthlyPayoutResponse);
function createBaseQueryProvidersEpochCuRequest(): QueryProvidersEpochCuRequest {
  return {};
}
export const QueryProvidersEpochCuRequest = {
  typeUrl: "/lavanet.lava.pairing.QueryProvidersEpochCuRequest",
  is(o: any): o is QueryProvidersEpochCuRequest {
    return o && o.$typeUrl === QueryProvidersEpochCuRequest.typeUrl;
  },
  isSDK(o: any): o is QueryProvidersEpochCuRequestSDKType {
    return o && o.$typeUrl === QueryProvidersEpochCuRequest.typeUrl;
  },
  isAmino(o: any): o is QueryProvidersEpochCuRequestAmino {
    return o && o.$typeUrl === QueryProvidersEpochCuRequest.typeUrl;
  },
  encode(_: QueryProvidersEpochCuRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProvidersEpochCuRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersEpochCuRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryProvidersEpochCuRequest {
    return {};
  },
  toJSON(_: QueryProvidersEpochCuRequest): JsonSafe<QueryProvidersEpochCuRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProvidersEpochCuRequest>, I>>(_: I): QueryProvidersEpochCuRequest {
    const message = createBaseQueryProvidersEpochCuRequest();
    return message;
  },
  fromAmino(_: QueryProvidersEpochCuRequestAmino): QueryProvidersEpochCuRequest {
    const message = createBaseQueryProvidersEpochCuRequest();
    return message;
  },
  toAmino(_: QueryProvidersEpochCuRequest): QueryProvidersEpochCuRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryProvidersEpochCuRequestAminoMsg): QueryProvidersEpochCuRequest {
    return QueryProvidersEpochCuRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProvidersEpochCuRequestProtoMsg): QueryProvidersEpochCuRequest {
    return QueryProvidersEpochCuRequest.decode(message.value);
  },
  toProto(message: QueryProvidersEpochCuRequest): Uint8Array {
    return QueryProvidersEpochCuRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersEpochCuRequest): QueryProvidersEpochCuRequestProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryProvidersEpochCuRequest",
      value: QueryProvidersEpochCuRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProvidersEpochCuRequest.typeUrl, QueryProvidersEpochCuRequest);
function createBaseQueryProvidersEpochCuResponse(): QueryProvidersEpochCuResponse {
  return {
    info: []
  };
}
export const QueryProvidersEpochCuResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryProvidersEpochCuResponse",
  is(o: any): o is QueryProvidersEpochCuResponse {
    return o && (o.$typeUrl === QueryProvidersEpochCuResponse.typeUrl || Array.isArray(o.info) && (!o.info.length || ProviderCuInfo.is(o.info[0])));
  },
  isSDK(o: any): o is QueryProvidersEpochCuResponseSDKType {
    return o && (o.$typeUrl === QueryProvidersEpochCuResponse.typeUrl || Array.isArray(o.info) && (!o.info.length || ProviderCuInfo.isSDK(o.info[0])));
  },
  isAmino(o: any): o is QueryProvidersEpochCuResponseAmino {
    return o && (o.$typeUrl === QueryProvidersEpochCuResponse.typeUrl || Array.isArray(o.info) && (!o.info.length || ProviderCuInfo.isAmino(o.info[0])));
  },
  encode(message: QueryProvidersEpochCuResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.info) {
      ProviderCuInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProvidersEpochCuResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersEpochCuResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info.push(ProviderCuInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProvidersEpochCuResponse {
    return {
      info: Array.isArray(object?.info) ? object.info.map((e: any) => ProviderCuInfo.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryProvidersEpochCuResponse): JsonSafe<QueryProvidersEpochCuResponse> {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map(e => e ? ProviderCuInfo.toJSON(e) : undefined);
    } else {
      obj.info = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProvidersEpochCuResponse>, I>>(object: I): QueryProvidersEpochCuResponse {
    const message = createBaseQueryProvidersEpochCuResponse();
    message.info = object.info?.map(e => ProviderCuInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryProvidersEpochCuResponseAmino): QueryProvidersEpochCuResponse {
    const message = createBaseQueryProvidersEpochCuResponse();
    message.info = object.info?.map(e => ProviderCuInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryProvidersEpochCuResponse): QueryProvidersEpochCuResponseAmino {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map(e => e ? ProviderCuInfo.toAmino(e) : undefined);
    } else {
      obj.info = message.info;
    }
    return obj;
  },
  fromAminoMsg(object: QueryProvidersEpochCuResponseAminoMsg): QueryProvidersEpochCuResponse {
    return QueryProvidersEpochCuResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProvidersEpochCuResponseProtoMsg): QueryProvidersEpochCuResponse {
    return QueryProvidersEpochCuResponse.decode(message.value);
  },
  toProto(message: QueryProvidersEpochCuResponse): Uint8Array {
    return QueryProvidersEpochCuResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersEpochCuResponse): QueryProvidersEpochCuResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryProvidersEpochCuResponse",
      value: QueryProvidersEpochCuResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProvidersEpochCuResponse.typeUrl, QueryProvidersEpochCuResponse);
function createBaseProviderCuInfo(): ProviderCuInfo {
  return {
    provider: "",
    cu: BigInt(0)
  };
}
export const ProviderCuInfo = {
  typeUrl: "/lavanet.lava.pairing.ProviderCuInfo",
  is(o: any): o is ProviderCuInfo {
    return o && (o.$typeUrl === ProviderCuInfo.typeUrl || typeof o.provider === "string" && typeof o.cu === "bigint");
  },
  isSDK(o: any): o is ProviderCuInfoSDKType {
    return o && (o.$typeUrl === ProviderCuInfo.typeUrl || typeof o.provider === "string" && typeof o.cu === "bigint");
  },
  isAmino(o: any): o is ProviderCuInfoAmino {
    return o && (o.$typeUrl === ProviderCuInfo.typeUrl || typeof o.provider === "string" && typeof o.cu === "bigint");
  },
  encode(message: ProviderCuInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.cu !== BigInt(0)) {
      writer.uint32(16).uint64(message.cu);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderCuInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderCuInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.cu = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProviderCuInfo {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      cu: isSet(object.cu) ? BigInt(object.cu.toString()) : BigInt(0)
    };
  },
  toJSON(message: ProviderCuInfo): JsonSafe<ProviderCuInfo> {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.cu !== undefined && (obj.cu = (message.cu || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProviderCuInfo>, I>>(object: I): ProviderCuInfo {
    const message = createBaseProviderCuInfo();
    message.provider = object.provider ?? "";
    message.cu = object.cu !== undefined && object.cu !== null ? BigInt(object.cu.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProviderCuInfoAmino): ProviderCuInfo {
    const message = createBaseProviderCuInfo();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.cu !== undefined && object.cu !== null) {
      message.cu = BigInt(object.cu);
    }
    return message;
  },
  toAmino(message: ProviderCuInfo): ProviderCuInfoAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.cu = message.cu !== BigInt(0) ? (message.cu?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderCuInfoAminoMsg): ProviderCuInfo {
    return ProviderCuInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderCuInfoProtoMsg): ProviderCuInfo {
    return ProviderCuInfo.decode(message.value);
  },
  toProto(message: ProviderCuInfo): Uint8Array {
    return ProviderCuInfo.encode(message).finish();
  },
  toProtoMsg(message: ProviderCuInfo): ProviderCuInfoProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ProviderCuInfo",
      value: ProviderCuInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProviderCuInfo.typeUrl, ProviderCuInfo);