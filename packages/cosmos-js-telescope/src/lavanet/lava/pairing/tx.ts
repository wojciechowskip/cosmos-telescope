//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Endpoint, EndpointAmino, EndpointSDKType } from "../epochstorage/endpoint";
import { Description, DescriptionAmino, DescriptionSDKType } from "../../../cosmos/staking/v1beta1/staking";
import { RelaySession, RelaySessionAmino, RelaySessionSDKType } from "./relay";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface MsgStakeProvider {
  creator: string;
  chainID: string;
  amount: Coin;
  endpoints: Endpoint[];
  geolocation: number;
  delegateLimit: Coin;
  /** delegation commission (precentage 0-100) */
  delegateCommission: bigint;
  validator: string;
  address: string;
  description: Description;
}
export interface MsgStakeProviderProtoMsg {
  typeUrl: "/lavanet.lava.pairing.MsgStakeProvider";
  value: Uint8Array;
}
export interface MsgStakeProviderAmino {
  creator?: string;
  chainID?: string;
  amount?: CoinAmino;
  endpoints?: EndpointAmino[];
  geolocation?: number;
  delegate_limit?: CoinAmino;
  /** delegation commission (precentage 0-100) */
  delegate_commission?: string;
  validator?: string;
  address?: string;
  description: DescriptionAmino;
}
export interface MsgStakeProviderAminoMsg {
  type: "pairing/StakeProvider";
  value: MsgStakeProviderAmino;
}
export interface MsgStakeProviderSDKType {
  creator: string;
  chainID: string;
  amount: CoinSDKType;
  endpoints: EndpointSDKType[];
  geolocation: number;
  delegate_limit: CoinSDKType;
  delegate_commission: bigint;
  validator: string;
  address: string;
  description: DescriptionSDKType;
}
export interface MsgStakeProviderResponse {}
export interface MsgStakeProviderResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.MsgStakeProviderResponse";
  value: Uint8Array;
}
export interface MsgStakeProviderResponseAmino {}
export interface MsgStakeProviderResponseAminoMsg {
  type: "/lavanet.lava.pairing.MsgStakeProviderResponse";
  value: MsgStakeProviderResponseAmino;
}
export interface MsgStakeProviderResponseSDKType {}
export interface MsgUnstakeProvider {
  creator: string;
  chainID: string;
  validator: string;
}
export interface MsgUnstakeProviderProtoMsg {
  typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider";
  value: Uint8Array;
}
export interface MsgUnstakeProviderAmino {
  creator?: string;
  chainID?: string;
  validator?: string;
}
export interface MsgUnstakeProviderAminoMsg {
  type: "pairing/UnstakeProvider";
  value: MsgUnstakeProviderAmino;
}
export interface MsgUnstakeProviderSDKType {
  creator: string;
  chainID: string;
  validator: string;
}
export interface MsgUnstakeProviderResponse {}
export interface MsgUnstakeProviderResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.MsgUnstakeProviderResponse";
  value: Uint8Array;
}
export interface MsgUnstakeProviderResponseAmino {}
export interface MsgUnstakeProviderResponseAminoMsg {
  type: "/lavanet.lava.pairing.MsgUnstakeProviderResponse";
  value: MsgUnstakeProviderResponseAmino;
}
export interface MsgUnstakeProviderResponseSDKType {}
export interface MsgRelayPayment {
  creator: string;
  relays: RelaySession[];
  descriptionString: string;
  latestBlockReports: LatestBlockReport[];
}
export interface MsgRelayPaymentProtoMsg {
  typeUrl: "/lavanet.lava.pairing.MsgRelayPayment";
  value: Uint8Array;
}
export interface MsgRelayPaymentAmino {
  creator?: string;
  relays?: RelaySessionAmino[];
  descriptionString?: string;
  latest_block_reports?: LatestBlockReportAmino[];
}
export interface MsgRelayPaymentAminoMsg {
  type: "pairing/RelayPayment";
  value: MsgRelayPaymentAmino;
}
export interface MsgRelayPaymentSDKType {
  creator: string;
  relays: RelaySessionSDKType[];
  descriptionString: string;
  latest_block_reports: LatestBlockReportSDKType[];
}
export interface LatestBlockReport {
  specId: string;
  latestBlock: bigint;
}
export interface LatestBlockReportProtoMsg {
  typeUrl: "/lavanet.lava.pairing.LatestBlockReport";
  value: Uint8Array;
}
export interface LatestBlockReportAmino {
  spec_id?: string;
  latest_block?: string;
}
export interface LatestBlockReportAminoMsg {
  type: "/lavanet.lava.pairing.LatestBlockReport";
  value: LatestBlockReportAmino;
}
export interface LatestBlockReportSDKType {
  spec_id: string;
  latest_block: bigint;
}
export interface MsgRelayPaymentResponse {
  /** true if there is any relay in the TX that was rejected */
  rejectedRelays: boolean;
}
export interface MsgRelayPaymentResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.MsgRelayPaymentResponse";
  value: Uint8Array;
}
export interface MsgRelayPaymentResponseAmino {
  /** true if there is any relay in the TX that was rejected */
  rejected_relays?: boolean;
}
export interface MsgRelayPaymentResponseAminoMsg {
  type: "/lavanet.lava.pairing.MsgRelayPaymentResponse";
  value: MsgRelayPaymentResponseAmino;
}
export interface MsgRelayPaymentResponseSDKType {
  rejected_relays: boolean;
}
export interface MsgFreezeProvider {
  creator: string;
  chainIds: string[];
  reason: string;
}
export interface MsgFreezeProviderProtoMsg {
  typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider";
  value: Uint8Array;
}
export interface MsgFreezeProviderAmino {
  creator?: string;
  chainIds?: string[];
  reason?: string;
}
export interface MsgFreezeProviderAminoMsg {
  type: "pairing/Freeze";
  value: MsgFreezeProviderAmino;
}
export interface MsgFreezeProviderSDKType {
  creator: string;
  chainIds: string[];
  reason: string;
}
export interface MsgFreezeProviderResponse {}
export interface MsgFreezeProviderResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.MsgFreezeProviderResponse";
  value: Uint8Array;
}
export interface MsgFreezeProviderResponseAmino {}
export interface MsgFreezeProviderResponseAminoMsg {
  type: "/lavanet.lava.pairing.MsgFreezeProviderResponse";
  value: MsgFreezeProviderResponseAmino;
}
export interface MsgFreezeProviderResponseSDKType {}
export interface MsgUnfreezeProvider {
  creator: string;
  chainIds: string[];
}
export interface MsgUnfreezeProviderProtoMsg {
  typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider";
  value: Uint8Array;
}
export interface MsgUnfreezeProviderAmino {
  creator?: string;
  chainIds?: string[];
}
export interface MsgUnfreezeProviderAminoMsg {
  type: "pairing/Unfreeze";
  value: MsgUnfreezeProviderAmino;
}
export interface MsgUnfreezeProviderSDKType {
  creator: string;
  chainIds: string[];
}
export interface MsgUnfreezeProviderResponse {}
export interface MsgUnfreezeProviderResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProviderResponse";
  value: Uint8Array;
}
export interface MsgUnfreezeProviderResponseAmino {}
export interface MsgUnfreezeProviderResponseAminoMsg {
  type: "/lavanet.lava.pairing.MsgUnfreezeProviderResponse";
  value: MsgUnfreezeProviderResponseAmino;
}
export interface MsgUnfreezeProviderResponseSDKType {}
export interface MsgMoveProviderStake {
  creator: string;
  srcChain: string;
  dstChain: string;
  amount: Coin;
}
export interface MsgMoveProviderStakeProtoMsg {
  typeUrl: "/lavanet.lava.pairing.MsgMoveProviderStake";
  value: Uint8Array;
}
export interface MsgMoveProviderStakeAmino {
  creator?: string;
  src_chain?: string;
  dst_chain?: string;
  amount?: CoinAmino;
}
export interface MsgMoveProviderStakeAminoMsg {
  type: "pairing/MoveProviderStake";
  value: MsgMoveProviderStakeAmino;
}
export interface MsgMoveProviderStakeSDKType {
  creator: string;
  src_chain: string;
  dst_chain: string;
  amount: CoinSDKType;
}
export interface MsgMoveProviderStakeResponse {}
export interface MsgMoveProviderStakeResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.MsgMoveProviderStakeResponse";
  value: Uint8Array;
}
export interface MsgMoveProviderStakeResponseAmino {}
export interface MsgMoveProviderStakeResponseAminoMsg {
  type: "/lavanet.lava.pairing.MsgMoveProviderStakeResponse";
  value: MsgMoveProviderStakeResponseAmino;
}
export interface MsgMoveProviderStakeResponseSDKType {}
function createBaseMsgStakeProvider(): MsgStakeProvider {
  return {
    creator: "",
    chainID: "",
    amount: Coin.fromPartial({}),
    endpoints: [],
    geolocation: 0,
    delegateLimit: Coin.fromPartial({}),
    delegateCommission: BigInt(0),
    validator: "",
    address: "",
    description: Description.fromPartial({})
  };
}
export const MsgStakeProvider = {
  typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
  aminoType: "pairing/StakeProvider",
  is(o: any): o is MsgStakeProvider {
    return o && (o.$typeUrl === MsgStakeProvider.typeUrl || typeof o.creator === "string" && typeof o.chainID === "string" && Coin.is(o.amount) && Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.is(o.endpoints[0])) && typeof o.geolocation === "number" && Coin.is(o.delegateLimit) && typeof o.delegateCommission === "bigint" && typeof o.validator === "string" && typeof o.address === "string" && Description.is(o.description));
  },
  isSDK(o: any): o is MsgStakeProviderSDKType {
    return o && (o.$typeUrl === MsgStakeProvider.typeUrl || typeof o.creator === "string" && typeof o.chainID === "string" && Coin.isSDK(o.amount) && Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.isSDK(o.endpoints[0])) && typeof o.geolocation === "number" && Coin.isSDK(o.delegate_limit) && typeof o.delegate_commission === "bigint" && typeof o.validator === "string" && typeof o.address === "string" && Description.isSDK(o.description));
  },
  isAmino(o: any): o is MsgStakeProviderAmino {
    return o && (o.$typeUrl === MsgStakeProvider.typeUrl || typeof o.creator === "string" && typeof o.chainID === "string" && Coin.isAmino(o.amount) && Array.isArray(o.endpoints) && (!o.endpoints.length || Endpoint.isAmino(o.endpoints[0])) && typeof o.geolocation === "number" && Coin.isAmino(o.delegate_limit) && typeof o.delegate_commission === "bigint" && typeof o.validator === "string" && typeof o.address === "string" && Description.isAmino(o.description));
  },
  encode(message: MsgStakeProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.geolocation !== 0) {
      writer.uint32(40).int32(message.geolocation);
    }
    if (message.delegateLimit !== undefined) {
      Coin.encode(message.delegateLimit, writer.uint32(58).fork()).ldelim();
    }
    if (message.delegateCommission !== BigInt(0)) {
      writer.uint32(64).uint64(message.delegateCommission);
    }
    if (message.validator !== "") {
      writer.uint32(74).string(message.validator);
    }
    if (message.address !== "") {
      writer.uint32(82).string(message.address);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        case 5:
          message.geolocation = reader.int32();
          break;
        case 7:
          message.delegateLimit = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.delegateCommission = reader.uint64();
          break;
        case 9:
          message.validator = reader.string();
          break;
        case 10:
          message.address = reader.string();
          break;
        case 11:
          message.description = Description.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStakeProvider {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromJSON(e)) : [],
      geolocation: isSet(object.geolocation) ? Number(object.geolocation) : 0,
      delegateLimit: isSet(object.delegateLimit) ? Coin.fromJSON(object.delegateLimit) : undefined,
      delegateCommission: isSet(object.delegateCommission) ? BigInt(object.delegateCommission.toString()) : BigInt(0),
      validator: isSet(object.validator) ? String(object.validator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined
    };
  },
  toJSON(message: MsgStakeProvider): JsonSafe<MsgStakeProvider> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    message.geolocation !== undefined && (obj.geolocation = Math.round(message.geolocation));
    message.delegateLimit !== undefined && (obj.delegateLimit = message.delegateLimit ? Coin.toJSON(message.delegateLimit) : undefined);
    message.delegateCommission !== undefined && (obj.delegateCommission = (message.delegateCommission || BigInt(0)).toString());
    message.validator !== undefined && (obj.validator = message.validator);
    message.address !== undefined && (obj.address = message.address);
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgStakeProvider>, I>>(object: I): MsgStakeProvider {
    const message = createBaseMsgStakeProvider();
    message.creator = object.creator ?? "";
    message.chainID = object.chainID ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    message.geolocation = object.geolocation ?? 0;
    message.delegateLimit = object.delegateLimit !== undefined && object.delegateLimit !== null ? Coin.fromPartial(object.delegateLimit) : undefined;
    message.delegateCommission = object.delegateCommission !== undefined && object.delegateCommission !== null ? BigInt(object.delegateCommission.toString()) : BigInt(0);
    message.validator = object.validator ?? "";
    message.address = object.address ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    return message;
  },
  fromAmino(object: MsgStakeProviderAmino): MsgStakeProvider {
    const message = createBaseMsgStakeProvider();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    message.endpoints = object.endpoints?.map(e => Endpoint.fromAmino(e)) || [];
    if (object.geolocation !== undefined && object.geolocation !== null) {
      message.geolocation = object.geolocation;
    }
    if (object.delegate_limit !== undefined && object.delegate_limit !== null) {
      message.delegateLimit = Coin.fromAmino(object.delegate_limit);
    }
    if (object.delegate_commission !== undefined && object.delegate_commission !== null) {
      message.delegateCommission = BigInt(object.delegate_commission);
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    return message;
  },
  toAmino(message: MsgStakeProvider): MsgStakeProviderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.chainID = message.chainID === "" ? undefined : message.chainID;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toAmino(e) : undefined);
    } else {
      obj.endpoints = message.endpoints;
    }
    obj.geolocation = message.geolocation === 0 ? undefined : message.geolocation;
    obj.delegate_limit = message.delegateLimit ? Coin.toAmino(message.delegateLimit) : undefined;
    obj.delegate_commission = message.delegateCommission !== BigInt(0) ? (message.delegateCommission?.toString)() : undefined;
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.address = message.address === "" ? undefined : message.address;
    obj.description = message.description ? Description.toAmino(message.description) : Description.toAmino(Description.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgStakeProviderAminoMsg): MsgStakeProvider {
    return MsgStakeProvider.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStakeProvider): MsgStakeProviderAminoMsg {
    return {
      type: "pairing/StakeProvider",
      value: MsgStakeProvider.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStakeProviderProtoMsg): MsgStakeProvider {
    return MsgStakeProvider.decode(message.value);
  },
  toProto(message: MsgStakeProvider): Uint8Array {
    return MsgStakeProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeProvider): MsgStakeProviderProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
      value: MsgStakeProvider.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStakeProvider.typeUrl, MsgStakeProvider);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStakeProvider.aminoType, MsgStakeProvider.typeUrl);
function createBaseMsgStakeProviderResponse(): MsgStakeProviderResponse {
  return {};
}
export const MsgStakeProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgStakeProviderResponse",
  is(o: any): o is MsgStakeProviderResponse {
    return o && o.$typeUrl === MsgStakeProviderResponse.typeUrl;
  },
  isSDK(o: any): o is MsgStakeProviderResponseSDKType {
    return o && o.$typeUrl === MsgStakeProviderResponse.typeUrl;
  },
  isAmino(o: any): o is MsgStakeProviderResponseAmino {
    return o && o.$typeUrl === MsgStakeProviderResponse.typeUrl;
  },
  encode(_: MsgStakeProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeProviderResponse();
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
  fromJSON(_: any): MsgStakeProviderResponse {
    return {};
  },
  toJSON(_: MsgStakeProviderResponse): JsonSafe<MsgStakeProviderResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgStakeProviderResponse>, I>>(_: I): MsgStakeProviderResponse {
    const message = createBaseMsgStakeProviderResponse();
    return message;
  },
  fromAmino(_: MsgStakeProviderResponseAmino): MsgStakeProviderResponse {
    const message = createBaseMsgStakeProviderResponse();
    return message;
  },
  toAmino(_: MsgStakeProviderResponse): MsgStakeProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStakeProviderResponseAminoMsg): MsgStakeProviderResponse {
    return MsgStakeProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeProviderResponseProtoMsg): MsgStakeProviderResponse {
    return MsgStakeProviderResponse.decode(message.value);
  },
  toProto(message: MsgStakeProviderResponse): Uint8Array {
    return MsgStakeProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeProviderResponse): MsgStakeProviderResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgStakeProviderResponse",
      value: MsgStakeProviderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStakeProviderResponse.typeUrl, MsgStakeProviderResponse);
function createBaseMsgUnstakeProvider(): MsgUnstakeProvider {
  return {
    creator: "",
    chainID: "",
    validator: ""
  };
}
export const MsgUnstakeProvider = {
  typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
  aminoType: "pairing/UnstakeProvider",
  is(o: any): o is MsgUnstakeProvider {
    return o && (o.$typeUrl === MsgUnstakeProvider.typeUrl || typeof o.creator === "string" && typeof o.chainID === "string" && typeof o.validator === "string");
  },
  isSDK(o: any): o is MsgUnstakeProviderSDKType {
    return o && (o.$typeUrl === MsgUnstakeProvider.typeUrl || typeof o.creator === "string" && typeof o.chainID === "string" && typeof o.validator === "string");
  },
  isAmino(o: any): o is MsgUnstakeProviderAmino {
    return o && (o.$typeUrl === MsgUnstakeProvider.typeUrl || typeof o.creator === "string" && typeof o.chainID === "string" && typeof o.validator === "string");
  },
  encode(message: MsgUnstakeProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnstakeProvider {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      validator: isSet(object.validator) ? String(object.validator) : ""
    };
  },
  toJSON(message: MsgUnstakeProvider): JsonSafe<MsgUnstakeProvider> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnstakeProvider>, I>>(object: I): MsgUnstakeProvider {
    const message = createBaseMsgUnstakeProvider();
    message.creator = object.creator ?? "";
    message.chainID = object.chainID ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object: MsgUnstakeProviderAmino): MsgUnstakeProvider {
    const message = createBaseMsgUnstakeProvider();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    return message;
  },
  toAmino(message: MsgUnstakeProvider): MsgUnstakeProviderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.chainID = message.chainID === "" ? undefined : message.chainID;
    obj.validator = message.validator === "" ? undefined : message.validator;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeProviderAminoMsg): MsgUnstakeProvider {
    return MsgUnstakeProvider.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnstakeProvider): MsgUnstakeProviderAminoMsg {
    return {
      type: "pairing/UnstakeProvider",
      value: MsgUnstakeProvider.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnstakeProviderProtoMsg): MsgUnstakeProvider {
    return MsgUnstakeProvider.decode(message.value);
  },
  toProto(message: MsgUnstakeProvider): Uint8Array {
    return MsgUnstakeProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeProvider): MsgUnstakeProviderProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
      value: MsgUnstakeProvider.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnstakeProvider.typeUrl, MsgUnstakeProvider);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnstakeProvider.aminoType, MsgUnstakeProvider.typeUrl);
function createBaseMsgUnstakeProviderResponse(): MsgUnstakeProviderResponse {
  return {};
}
export const MsgUnstakeProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgUnstakeProviderResponse",
  is(o: any): o is MsgUnstakeProviderResponse {
    return o && o.$typeUrl === MsgUnstakeProviderResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUnstakeProviderResponseSDKType {
    return o && o.$typeUrl === MsgUnstakeProviderResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUnstakeProviderResponseAmino {
    return o && o.$typeUrl === MsgUnstakeProviderResponse.typeUrl;
  },
  encode(_: MsgUnstakeProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeProviderResponse();
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
  fromJSON(_: any): MsgUnstakeProviderResponse {
    return {};
  },
  toJSON(_: MsgUnstakeProviderResponse): JsonSafe<MsgUnstakeProviderResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnstakeProviderResponse>, I>>(_: I): MsgUnstakeProviderResponse {
    const message = createBaseMsgUnstakeProviderResponse();
    return message;
  },
  fromAmino(_: MsgUnstakeProviderResponseAmino): MsgUnstakeProviderResponse {
    const message = createBaseMsgUnstakeProviderResponse();
    return message;
  },
  toAmino(_: MsgUnstakeProviderResponse): MsgUnstakeProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeProviderResponseAminoMsg): MsgUnstakeProviderResponse {
    return MsgUnstakeProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeProviderResponseProtoMsg): MsgUnstakeProviderResponse {
    return MsgUnstakeProviderResponse.decode(message.value);
  },
  toProto(message: MsgUnstakeProviderResponse): Uint8Array {
    return MsgUnstakeProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeProviderResponse): MsgUnstakeProviderResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgUnstakeProviderResponse",
      value: MsgUnstakeProviderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnstakeProviderResponse.typeUrl, MsgUnstakeProviderResponse);
function createBaseMsgRelayPayment(): MsgRelayPayment {
  return {
    creator: "",
    relays: [],
    descriptionString: "",
    latestBlockReports: []
  };
}
export const MsgRelayPayment = {
  typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
  aminoType: "pairing/RelayPayment",
  is(o: any): o is MsgRelayPayment {
    return o && (o.$typeUrl === MsgRelayPayment.typeUrl || typeof o.creator === "string" && Array.isArray(o.relays) && (!o.relays.length || RelaySession.is(o.relays[0])) && typeof o.descriptionString === "string" && Array.isArray(o.latestBlockReports) && (!o.latestBlockReports.length || LatestBlockReport.is(o.latestBlockReports[0])));
  },
  isSDK(o: any): o is MsgRelayPaymentSDKType {
    return o && (o.$typeUrl === MsgRelayPayment.typeUrl || typeof o.creator === "string" && Array.isArray(o.relays) && (!o.relays.length || RelaySession.isSDK(o.relays[0])) && typeof o.descriptionString === "string" && Array.isArray(o.latest_block_reports) && (!o.latest_block_reports.length || LatestBlockReport.isSDK(o.latest_block_reports[0])));
  },
  isAmino(o: any): o is MsgRelayPaymentAmino {
    return o && (o.$typeUrl === MsgRelayPayment.typeUrl || typeof o.creator === "string" && Array.isArray(o.relays) && (!o.relays.length || RelaySession.isAmino(o.relays[0])) && typeof o.descriptionString === "string" && Array.isArray(o.latest_block_reports) && (!o.latest_block_reports.length || LatestBlockReport.isAmino(o.latest_block_reports[0])));
  },
  encode(message: MsgRelayPayment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.relays) {
      RelaySession.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.descriptionString !== "") {
      writer.uint32(34).string(message.descriptionString);
    }
    for (const v of message.latestBlockReports) {
      LatestBlockReport.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayPayment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayPayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.relays.push(RelaySession.decode(reader, reader.uint32()));
          break;
        case 4:
          message.descriptionString = reader.string();
          break;
        case 5:
          message.latestBlockReports.push(LatestBlockReport.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRelayPayment {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      relays: Array.isArray(object?.relays) ? object.relays.map((e: any) => RelaySession.fromJSON(e)) : [],
      descriptionString: isSet(object.descriptionString) ? String(object.descriptionString) : "",
      latestBlockReports: Array.isArray(object?.latestBlockReports) ? object.latestBlockReports.map((e: any) => LatestBlockReport.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgRelayPayment): JsonSafe<MsgRelayPayment> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.relays) {
      obj.relays = message.relays.map(e => e ? RelaySession.toJSON(e) : undefined);
    } else {
      obj.relays = [];
    }
    message.descriptionString !== undefined && (obj.descriptionString = message.descriptionString);
    if (message.latestBlockReports) {
      obj.latestBlockReports = message.latestBlockReports.map(e => e ? LatestBlockReport.toJSON(e) : undefined);
    } else {
      obj.latestBlockReports = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRelayPayment>, I>>(object: I): MsgRelayPayment {
    const message = createBaseMsgRelayPayment();
    message.creator = object.creator ?? "";
    message.relays = object.relays?.map(e => RelaySession.fromPartial(e)) || [];
    message.descriptionString = object.descriptionString ?? "";
    message.latestBlockReports = object.latestBlockReports?.map(e => LatestBlockReport.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgRelayPaymentAmino): MsgRelayPayment {
    const message = createBaseMsgRelayPayment();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.relays = object.relays?.map(e => RelaySession.fromAmino(e)) || [];
    if (object.descriptionString !== undefined && object.descriptionString !== null) {
      message.descriptionString = object.descriptionString;
    }
    message.latestBlockReports = object.latest_block_reports?.map(e => LatestBlockReport.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRelayPayment): MsgRelayPaymentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.relays) {
      obj.relays = message.relays.map(e => e ? RelaySession.toAmino(e) : undefined);
    } else {
      obj.relays = message.relays;
    }
    obj.descriptionString = message.descriptionString === "" ? undefined : message.descriptionString;
    if (message.latestBlockReports) {
      obj.latest_block_reports = message.latestBlockReports.map(e => e ? LatestBlockReport.toAmino(e) : undefined);
    } else {
      obj.latest_block_reports = message.latestBlockReports;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRelayPaymentAminoMsg): MsgRelayPayment {
    return MsgRelayPayment.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRelayPayment): MsgRelayPaymentAminoMsg {
    return {
      type: "pairing/RelayPayment",
      value: MsgRelayPayment.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRelayPaymentProtoMsg): MsgRelayPayment {
    return MsgRelayPayment.decode(message.value);
  },
  toProto(message: MsgRelayPayment): Uint8Array {
    return MsgRelayPayment.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayPayment): MsgRelayPaymentProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
      value: MsgRelayPayment.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRelayPayment.typeUrl, MsgRelayPayment);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRelayPayment.aminoType, MsgRelayPayment.typeUrl);
function createBaseLatestBlockReport(): LatestBlockReport {
  return {
    specId: "",
    latestBlock: BigInt(0)
  };
}
export const LatestBlockReport = {
  typeUrl: "/lavanet.lava.pairing.LatestBlockReport",
  is(o: any): o is LatestBlockReport {
    return o && (o.$typeUrl === LatestBlockReport.typeUrl || typeof o.specId === "string" && typeof o.latestBlock === "bigint");
  },
  isSDK(o: any): o is LatestBlockReportSDKType {
    return o && (o.$typeUrl === LatestBlockReport.typeUrl || typeof o.spec_id === "string" && typeof o.latest_block === "bigint");
  },
  isAmino(o: any): o is LatestBlockReportAmino {
    return o && (o.$typeUrl === LatestBlockReport.typeUrl || typeof o.spec_id === "string" && typeof o.latest_block === "bigint");
  },
  encode(message: LatestBlockReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.specId !== "") {
      writer.uint32(10).string(message.specId);
    }
    if (message.latestBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.latestBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LatestBlockReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLatestBlockReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.specId = reader.string();
          break;
        case 2:
          message.latestBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LatestBlockReport {
    return {
      specId: isSet(object.specId) ? String(object.specId) : "",
      latestBlock: isSet(object.latestBlock) ? BigInt(object.latestBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: LatestBlockReport): JsonSafe<LatestBlockReport> {
    const obj: any = {};
    message.specId !== undefined && (obj.specId = message.specId);
    message.latestBlock !== undefined && (obj.latestBlock = (message.latestBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LatestBlockReport>, I>>(object: I): LatestBlockReport {
    const message = createBaseLatestBlockReport();
    message.specId = object.specId ?? "";
    message.latestBlock = object.latestBlock !== undefined && object.latestBlock !== null ? BigInt(object.latestBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LatestBlockReportAmino): LatestBlockReport {
    const message = createBaseLatestBlockReport();
    if (object.spec_id !== undefined && object.spec_id !== null) {
      message.specId = object.spec_id;
    }
    if (object.latest_block !== undefined && object.latest_block !== null) {
      message.latestBlock = BigInt(object.latest_block);
    }
    return message;
  },
  toAmino(message: LatestBlockReport): LatestBlockReportAmino {
    const obj: any = {};
    obj.spec_id = message.specId === "" ? undefined : message.specId;
    obj.latest_block = message.latestBlock !== BigInt(0) ? (message.latestBlock?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: LatestBlockReportAminoMsg): LatestBlockReport {
    return LatestBlockReport.fromAmino(object.value);
  },
  fromProtoMsg(message: LatestBlockReportProtoMsg): LatestBlockReport {
    return LatestBlockReport.decode(message.value);
  },
  toProto(message: LatestBlockReport): Uint8Array {
    return LatestBlockReport.encode(message).finish();
  },
  toProtoMsg(message: LatestBlockReport): LatestBlockReportProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.LatestBlockReport",
      value: LatestBlockReport.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LatestBlockReport.typeUrl, LatestBlockReport);
function createBaseMsgRelayPaymentResponse(): MsgRelayPaymentResponse {
  return {
    rejectedRelays: false
  };
}
export const MsgRelayPaymentResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgRelayPaymentResponse",
  is(o: any): o is MsgRelayPaymentResponse {
    return o && (o.$typeUrl === MsgRelayPaymentResponse.typeUrl || typeof o.rejectedRelays === "boolean");
  },
  isSDK(o: any): o is MsgRelayPaymentResponseSDKType {
    return o && (o.$typeUrl === MsgRelayPaymentResponse.typeUrl || typeof o.rejected_relays === "boolean");
  },
  isAmino(o: any): o is MsgRelayPaymentResponseAmino {
    return o && (o.$typeUrl === MsgRelayPaymentResponse.typeUrl || typeof o.rejected_relays === "boolean");
  },
  encode(message: MsgRelayPaymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rejectedRelays === true) {
      writer.uint32(8).bool(message.rejectedRelays);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayPaymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayPaymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rejectedRelays = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRelayPaymentResponse {
    return {
      rejectedRelays: isSet(object.rejectedRelays) ? Boolean(object.rejectedRelays) : false
    };
  },
  toJSON(message: MsgRelayPaymentResponse): JsonSafe<MsgRelayPaymentResponse> {
    const obj: any = {};
    message.rejectedRelays !== undefined && (obj.rejectedRelays = message.rejectedRelays);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRelayPaymentResponse>, I>>(object: I): MsgRelayPaymentResponse {
    const message = createBaseMsgRelayPaymentResponse();
    message.rejectedRelays = object.rejectedRelays ?? false;
    return message;
  },
  fromAmino(object: MsgRelayPaymentResponseAmino): MsgRelayPaymentResponse {
    const message = createBaseMsgRelayPaymentResponse();
    if (object.rejected_relays !== undefined && object.rejected_relays !== null) {
      message.rejectedRelays = object.rejected_relays;
    }
    return message;
  },
  toAmino(message: MsgRelayPaymentResponse): MsgRelayPaymentResponseAmino {
    const obj: any = {};
    obj.rejected_relays = message.rejectedRelays === false ? undefined : message.rejectedRelays;
    return obj;
  },
  fromAminoMsg(object: MsgRelayPaymentResponseAminoMsg): MsgRelayPaymentResponse {
    return MsgRelayPaymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayPaymentResponseProtoMsg): MsgRelayPaymentResponse {
    return MsgRelayPaymentResponse.decode(message.value);
  },
  toProto(message: MsgRelayPaymentResponse): Uint8Array {
    return MsgRelayPaymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayPaymentResponse): MsgRelayPaymentResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgRelayPaymentResponse",
      value: MsgRelayPaymentResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRelayPaymentResponse.typeUrl, MsgRelayPaymentResponse);
function createBaseMsgFreezeProvider(): MsgFreezeProvider {
  return {
    creator: "",
    chainIds: [],
    reason: ""
  };
}
export const MsgFreezeProvider = {
  typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
  aminoType: "pairing/Freeze",
  is(o: any): o is MsgFreezeProvider {
    return o && (o.$typeUrl === MsgFreezeProvider.typeUrl || typeof o.creator === "string" && Array.isArray(o.chainIds) && (!o.chainIds.length || typeof o.chainIds[0] === "string") && typeof o.reason === "string");
  },
  isSDK(o: any): o is MsgFreezeProviderSDKType {
    return o && (o.$typeUrl === MsgFreezeProvider.typeUrl || typeof o.creator === "string" && Array.isArray(o.chainIds) && (!o.chainIds.length || typeof o.chainIds[0] === "string") && typeof o.reason === "string");
  },
  isAmino(o: any): o is MsgFreezeProviderAmino {
    return o && (o.$typeUrl === MsgFreezeProvider.typeUrl || typeof o.creator === "string" && Array.isArray(o.chainIds) && (!o.chainIds.length || typeof o.chainIds[0] === "string") && typeof o.reason === "string");
  },
  encode(message: MsgFreezeProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.chainIds) {
      writer.uint32(18).string(v!);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFreezeProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreezeProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainIds.push(reader.string());
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFreezeProvider {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainIds: Array.isArray(object?.chainIds) ? object.chainIds.map((e: any) => String(e)) : [],
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },
  toJSON(message: MsgFreezeProvider): JsonSafe<MsgFreezeProvider> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.chainIds) {
      obj.chainIds = message.chainIds.map(e => e);
    } else {
      obj.chainIds = [];
    }
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFreezeProvider>, I>>(object: I): MsgFreezeProvider {
    const message = createBaseMsgFreezeProvider();
    message.creator = object.creator ?? "";
    message.chainIds = object.chainIds?.map(e => e) || [];
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgFreezeProviderAmino): MsgFreezeProvider {
    const message = createBaseMsgFreezeProvider();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.chainIds = object.chainIds?.map(e => e) || [];
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgFreezeProvider): MsgFreezeProviderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.chainIds) {
      obj.chainIds = message.chainIds.map(e => e);
    } else {
      obj.chainIds = message.chainIds;
    }
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgFreezeProviderAminoMsg): MsgFreezeProvider {
    return MsgFreezeProvider.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFreezeProvider): MsgFreezeProviderAminoMsg {
    return {
      type: "pairing/Freeze",
      value: MsgFreezeProvider.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFreezeProviderProtoMsg): MsgFreezeProvider {
    return MsgFreezeProvider.decode(message.value);
  },
  toProto(message: MsgFreezeProvider): Uint8Array {
    return MsgFreezeProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgFreezeProvider): MsgFreezeProviderProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
      value: MsgFreezeProvider.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgFreezeProvider.typeUrl, MsgFreezeProvider);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgFreezeProvider.aminoType, MsgFreezeProvider.typeUrl);
function createBaseMsgFreezeProviderResponse(): MsgFreezeProviderResponse {
  return {};
}
export const MsgFreezeProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgFreezeProviderResponse",
  is(o: any): o is MsgFreezeProviderResponse {
    return o && o.$typeUrl === MsgFreezeProviderResponse.typeUrl;
  },
  isSDK(o: any): o is MsgFreezeProviderResponseSDKType {
    return o && o.$typeUrl === MsgFreezeProviderResponse.typeUrl;
  },
  isAmino(o: any): o is MsgFreezeProviderResponseAmino {
    return o && o.$typeUrl === MsgFreezeProviderResponse.typeUrl;
  },
  encode(_: MsgFreezeProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFreezeProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFreezeProviderResponse();
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
  fromJSON(_: any): MsgFreezeProviderResponse {
    return {};
  },
  toJSON(_: MsgFreezeProviderResponse): JsonSafe<MsgFreezeProviderResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFreezeProviderResponse>, I>>(_: I): MsgFreezeProviderResponse {
    const message = createBaseMsgFreezeProviderResponse();
    return message;
  },
  fromAmino(_: MsgFreezeProviderResponseAmino): MsgFreezeProviderResponse {
    const message = createBaseMsgFreezeProviderResponse();
    return message;
  },
  toAmino(_: MsgFreezeProviderResponse): MsgFreezeProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFreezeProviderResponseAminoMsg): MsgFreezeProviderResponse {
    return MsgFreezeProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFreezeProviderResponseProtoMsg): MsgFreezeProviderResponse {
    return MsgFreezeProviderResponse.decode(message.value);
  },
  toProto(message: MsgFreezeProviderResponse): Uint8Array {
    return MsgFreezeProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFreezeProviderResponse): MsgFreezeProviderResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgFreezeProviderResponse",
      value: MsgFreezeProviderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgFreezeProviderResponse.typeUrl, MsgFreezeProviderResponse);
function createBaseMsgUnfreezeProvider(): MsgUnfreezeProvider {
  return {
    creator: "",
    chainIds: []
  };
}
export const MsgUnfreezeProvider = {
  typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
  aminoType: "pairing/Unfreeze",
  is(o: any): o is MsgUnfreezeProvider {
    return o && (o.$typeUrl === MsgUnfreezeProvider.typeUrl || typeof o.creator === "string" && Array.isArray(o.chainIds) && (!o.chainIds.length || typeof o.chainIds[0] === "string"));
  },
  isSDK(o: any): o is MsgUnfreezeProviderSDKType {
    return o && (o.$typeUrl === MsgUnfreezeProvider.typeUrl || typeof o.creator === "string" && Array.isArray(o.chainIds) && (!o.chainIds.length || typeof o.chainIds[0] === "string"));
  },
  isAmino(o: any): o is MsgUnfreezeProviderAmino {
    return o && (o.$typeUrl === MsgUnfreezeProvider.typeUrl || typeof o.creator === "string" && Array.isArray(o.chainIds) && (!o.chainIds.length || typeof o.chainIds[0] === "string"));
  },
  encode(message: MsgUnfreezeProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.chainIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnfreezeProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnfreezeProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnfreezeProvider {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainIds: Array.isArray(object?.chainIds) ? object.chainIds.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgUnfreezeProvider): JsonSafe<MsgUnfreezeProvider> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.chainIds) {
      obj.chainIds = message.chainIds.map(e => e);
    } else {
      obj.chainIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnfreezeProvider>, I>>(object: I): MsgUnfreezeProvider {
    const message = createBaseMsgUnfreezeProvider();
    message.creator = object.creator ?? "";
    message.chainIds = object.chainIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgUnfreezeProviderAmino): MsgUnfreezeProvider {
    const message = createBaseMsgUnfreezeProvider();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.chainIds = object.chainIds?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgUnfreezeProvider): MsgUnfreezeProviderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.chainIds) {
      obj.chainIds = message.chainIds.map(e => e);
    } else {
      obj.chainIds = message.chainIds;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUnfreezeProviderAminoMsg): MsgUnfreezeProvider {
    return MsgUnfreezeProvider.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnfreezeProvider): MsgUnfreezeProviderAminoMsg {
    return {
      type: "pairing/Unfreeze",
      value: MsgUnfreezeProvider.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnfreezeProviderProtoMsg): MsgUnfreezeProvider {
    return MsgUnfreezeProvider.decode(message.value);
  },
  toProto(message: MsgUnfreezeProvider): Uint8Array {
    return MsgUnfreezeProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgUnfreezeProvider): MsgUnfreezeProviderProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
      value: MsgUnfreezeProvider.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnfreezeProvider.typeUrl, MsgUnfreezeProvider);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnfreezeProvider.aminoType, MsgUnfreezeProvider.typeUrl);
function createBaseMsgUnfreezeProviderResponse(): MsgUnfreezeProviderResponse {
  return {};
}
export const MsgUnfreezeProviderResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProviderResponse",
  is(o: any): o is MsgUnfreezeProviderResponse {
    return o && o.$typeUrl === MsgUnfreezeProviderResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUnfreezeProviderResponseSDKType {
    return o && o.$typeUrl === MsgUnfreezeProviderResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUnfreezeProviderResponseAmino {
    return o && o.$typeUrl === MsgUnfreezeProviderResponse.typeUrl;
  },
  encode(_: MsgUnfreezeProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnfreezeProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnfreezeProviderResponse();
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
  fromJSON(_: any): MsgUnfreezeProviderResponse {
    return {};
  },
  toJSON(_: MsgUnfreezeProviderResponse): JsonSafe<MsgUnfreezeProviderResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnfreezeProviderResponse>, I>>(_: I): MsgUnfreezeProviderResponse {
    const message = createBaseMsgUnfreezeProviderResponse();
    return message;
  },
  fromAmino(_: MsgUnfreezeProviderResponseAmino): MsgUnfreezeProviderResponse {
    const message = createBaseMsgUnfreezeProviderResponse();
    return message;
  },
  toAmino(_: MsgUnfreezeProviderResponse): MsgUnfreezeProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnfreezeProviderResponseAminoMsg): MsgUnfreezeProviderResponse {
    return MsgUnfreezeProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnfreezeProviderResponseProtoMsg): MsgUnfreezeProviderResponse {
    return MsgUnfreezeProviderResponse.decode(message.value);
  },
  toProto(message: MsgUnfreezeProviderResponse): Uint8Array {
    return MsgUnfreezeProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnfreezeProviderResponse): MsgUnfreezeProviderResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProviderResponse",
      value: MsgUnfreezeProviderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnfreezeProviderResponse.typeUrl, MsgUnfreezeProviderResponse);
function createBaseMsgMoveProviderStake(): MsgMoveProviderStake {
  return {
    creator: "",
    srcChain: "",
    dstChain: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgMoveProviderStake = {
  typeUrl: "/lavanet.lava.pairing.MsgMoveProviderStake",
  aminoType: "pairing/MoveProviderStake",
  is(o: any): o is MsgMoveProviderStake {
    return o && (o.$typeUrl === MsgMoveProviderStake.typeUrl || typeof o.creator === "string" && typeof o.srcChain === "string" && typeof o.dstChain === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgMoveProviderStakeSDKType {
    return o && (o.$typeUrl === MsgMoveProviderStake.typeUrl || typeof o.creator === "string" && typeof o.src_chain === "string" && typeof o.dst_chain === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgMoveProviderStakeAmino {
    return o && (o.$typeUrl === MsgMoveProviderStake.typeUrl || typeof o.creator === "string" && typeof o.src_chain === "string" && typeof o.dst_chain === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgMoveProviderStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.srcChain !== "") {
      writer.uint32(18).string(message.srcChain);
    }
    if (message.dstChain !== "") {
      writer.uint32(26).string(message.dstChain);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMoveProviderStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMoveProviderStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.srcChain = reader.string();
          break;
        case 3:
          message.dstChain = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMoveProviderStake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      srcChain: isSet(object.srcChain) ? String(object.srcChain) : "",
      dstChain: isSet(object.dstChain) ? String(object.dstChain) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgMoveProviderStake): JsonSafe<MsgMoveProviderStake> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.srcChain !== undefined && (obj.srcChain = message.srcChain);
    message.dstChain !== undefined && (obj.dstChain = message.dstChain);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMoveProviderStake>, I>>(object: I): MsgMoveProviderStake {
    const message = createBaseMsgMoveProviderStake();
    message.creator = object.creator ?? "";
    message.srcChain = object.srcChain ?? "";
    message.dstChain = object.dstChain ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgMoveProviderStakeAmino): MsgMoveProviderStake {
    const message = createBaseMsgMoveProviderStake();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.src_chain !== undefined && object.src_chain !== null) {
      message.srcChain = object.src_chain;
    }
    if (object.dst_chain !== undefined && object.dst_chain !== null) {
      message.dstChain = object.dst_chain;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgMoveProviderStake): MsgMoveProviderStakeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.src_chain = message.srcChain === "" ? undefined : message.srcChain;
    obj.dst_chain = message.dstChain === "" ? undefined : message.dstChain;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMoveProviderStakeAminoMsg): MsgMoveProviderStake {
    return MsgMoveProviderStake.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMoveProviderStake): MsgMoveProviderStakeAminoMsg {
    return {
      type: "pairing/MoveProviderStake",
      value: MsgMoveProviderStake.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMoveProviderStakeProtoMsg): MsgMoveProviderStake {
    return MsgMoveProviderStake.decode(message.value);
  },
  toProto(message: MsgMoveProviderStake): Uint8Array {
    return MsgMoveProviderStake.encode(message).finish();
  },
  toProtoMsg(message: MsgMoveProviderStake): MsgMoveProviderStakeProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgMoveProviderStake",
      value: MsgMoveProviderStake.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgMoveProviderStake.typeUrl, MsgMoveProviderStake);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgMoveProviderStake.aminoType, MsgMoveProviderStake.typeUrl);
function createBaseMsgMoveProviderStakeResponse(): MsgMoveProviderStakeResponse {
  return {};
}
export const MsgMoveProviderStakeResponse = {
  typeUrl: "/lavanet.lava.pairing.MsgMoveProviderStakeResponse",
  is(o: any): o is MsgMoveProviderStakeResponse {
    return o && o.$typeUrl === MsgMoveProviderStakeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgMoveProviderStakeResponseSDKType {
    return o && o.$typeUrl === MsgMoveProviderStakeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgMoveProviderStakeResponseAmino {
    return o && o.$typeUrl === MsgMoveProviderStakeResponse.typeUrl;
  },
  encode(_: MsgMoveProviderStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMoveProviderStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMoveProviderStakeResponse();
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
  fromJSON(_: any): MsgMoveProviderStakeResponse {
    return {};
  },
  toJSON(_: MsgMoveProviderStakeResponse): JsonSafe<MsgMoveProviderStakeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMoveProviderStakeResponse>, I>>(_: I): MsgMoveProviderStakeResponse {
    const message = createBaseMsgMoveProviderStakeResponse();
    return message;
  },
  fromAmino(_: MsgMoveProviderStakeResponseAmino): MsgMoveProviderStakeResponse {
    const message = createBaseMsgMoveProviderStakeResponse();
    return message;
  },
  toAmino(_: MsgMoveProviderStakeResponse): MsgMoveProviderStakeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMoveProviderStakeResponseAminoMsg): MsgMoveProviderStakeResponse {
    return MsgMoveProviderStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMoveProviderStakeResponseProtoMsg): MsgMoveProviderStakeResponse {
    return MsgMoveProviderStakeResponse.decode(message.value);
  },
  toProto(message: MsgMoveProviderStakeResponse): Uint8Array {
    return MsgMoveProviderStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMoveProviderStakeResponse): MsgMoveProviderStakeResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.MsgMoveProviderStakeResponse",
      value: MsgMoveProviderStakeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgMoveProviderStakeResponse.typeUrl, MsgMoveProviderStakeResponse);