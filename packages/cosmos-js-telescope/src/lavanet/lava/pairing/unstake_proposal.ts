//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface UnstakeProposal {
  title: string;
  description: string;
  providersInfo: ProviderUnstakeInfo[];
  delegatorsSlashing: DelegatorSlashing[];
}
export interface UnstakeProposalProtoMsg {
  typeUrl: "/lavanet.lava.pairing.UnstakeProposal";
  value: Uint8Array;
}
export interface UnstakeProposalAmino {
  title?: string;
  description?: string;
  providers_info?: ProviderUnstakeInfoAmino[];
  DelegatorsSlashing?: DelegatorSlashingAmino[];
}
export interface UnstakeProposalAminoMsg {
  type: "/lavanet.lava.pairing.UnstakeProposal";
  value: UnstakeProposalAmino;
}
export interface UnstakeProposalSDKType {
  title: string;
  description: string;
  providers_info: ProviderUnstakeInfoSDKType[];
  DelegatorsSlashing: DelegatorSlashingSDKType[];
}
export interface ProviderUnstakeInfo {
  provider: string;
  chainId: string;
}
export interface ProviderUnstakeInfoProtoMsg {
  typeUrl: "/lavanet.lava.pairing.ProviderUnstakeInfo";
  value: Uint8Array;
}
export interface ProviderUnstakeInfoAmino {
  provider?: string;
  chain_id?: string;
}
export interface ProviderUnstakeInfoAminoMsg {
  type: "/lavanet.lava.pairing.ProviderUnstakeInfo";
  value: ProviderUnstakeInfoAmino;
}
export interface ProviderUnstakeInfoSDKType {
  provider: string;
  chain_id: string;
}
export interface DelegatorSlashing {
  delegator: string;
  slashingAmount: Coin;
}
export interface DelegatorSlashingProtoMsg {
  typeUrl: "/lavanet.lava.pairing.DelegatorSlashing";
  value: Uint8Array;
}
export interface DelegatorSlashingAmino {
  delegator?: string;
  slashing_amount?: CoinAmino;
}
export interface DelegatorSlashingAminoMsg {
  type: "/lavanet.lava.pairing.DelegatorSlashing";
  value: DelegatorSlashingAmino;
}
export interface DelegatorSlashingSDKType {
  delegator: string;
  slashing_amount: CoinSDKType;
}
function createBaseUnstakeProposal(): UnstakeProposal {
  return {
    title: "",
    description: "",
    providersInfo: [],
    delegatorsSlashing: []
  };
}
export const UnstakeProposal = {
  typeUrl: "/lavanet.lava.pairing.UnstakeProposal",
  is(o: any): o is UnstakeProposal {
    return o && (o.$typeUrl === UnstakeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.providersInfo) && (!o.providersInfo.length || ProviderUnstakeInfo.is(o.providersInfo[0])) && Array.isArray(o.delegatorsSlashing) && (!o.delegatorsSlashing.length || DelegatorSlashing.is(o.delegatorsSlashing[0])));
  },
  isSDK(o: any): o is UnstakeProposalSDKType {
    return o && (o.$typeUrl === UnstakeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.providers_info) && (!o.providers_info.length || ProviderUnstakeInfo.isSDK(o.providers_info[0])) && Array.isArray(o.DelegatorsSlashing) && (!o.DelegatorsSlashing.length || DelegatorSlashing.isSDK(o.DelegatorsSlashing[0])));
  },
  isAmino(o: any): o is UnstakeProposalAmino {
    return o && (o.$typeUrl === UnstakeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.providers_info) && (!o.providers_info.length || ProviderUnstakeInfo.isAmino(o.providers_info[0])) && Array.isArray(o.DelegatorsSlashing) && (!o.DelegatorsSlashing.length || DelegatorSlashing.isAmino(o.DelegatorsSlashing[0])));
  },
  encode(message: UnstakeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.providersInfo) {
      ProviderUnstakeInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegatorsSlashing) {
      DelegatorSlashing.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnstakeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnstakeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.providersInfo.push(ProviderUnstakeInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegatorsSlashing.push(DelegatorSlashing.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnstakeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      providersInfo: Array.isArray(object?.providersInfo) ? object.providersInfo.map((e: any) => ProviderUnstakeInfo.fromJSON(e)) : [],
      delegatorsSlashing: Array.isArray(object?.delegatorsSlashing) ? object.delegatorsSlashing.map((e: any) => DelegatorSlashing.fromJSON(e)) : []
    };
  },
  toJSON(message: UnstakeProposal): JsonSafe<UnstakeProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.providersInfo) {
      obj.providersInfo = message.providersInfo.map(e => e ? ProviderUnstakeInfo.toJSON(e) : undefined);
    } else {
      obj.providersInfo = [];
    }
    if (message.delegatorsSlashing) {
      obj.delegatorsSlashing = message.delegatorsSlashing.map(e => e ? DelegatorSlashing.toJSON(e) : undefined);
    } else {
      obj.delegatorsSlashing = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UnstakeProposal>, I>>(object: I): UnstakeProposal {
    const message = createBaseUnstakeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.providersInfo = object.providersInfo?.map(e => ProviderUnstakeInfo.fromPartial(e)) || [];
    message.delegatorsSlashing = object.delegatorsSlashing?.map(e => DelegatorSlashing.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UnstakeProposalAmino): UnstakeProposal {
    const message = createBaseUnstakeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.providersInfo = object.providers_info?.map(e => ProviderUnstakeInfo.fromAmino(e)) || [];
    message.delegatorsSlashing = object.DelegatorsSlashing?.map(e => DelegatorSlashing.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UnstakeProposal): UnstakeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.providersInfo) {
      obj.providers_info = message.providersInfo.map(e => e ? ProviderUnstakeInfo.toAmino(e) : undefined);
    } else {
      obj.providers_info = message.providersInfo;
    }
    if (message.delegatorsSlashing) {
      obj.DelegatorsSlashing = message.delegatorsSlashing.map(e => e ? DelegatorSlashing.toAmino(e) : undefined);
    } else {
      obj.DelegatorsSlashing = message.delegatorsSlashing;
    }
    return obj;
  },
  fromAminoMsg(object: UnstakeProposalAminoMsg): UnstakeProposal {
    return UnstakeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UnstakeProposalProtoMsg): UnstakeProposal {
    return UnstakeProposal.decode(message.value);
  },
  toProto(message: UnstakeProposal): Uint8Array {
    return UnstakeProposal.encode(message).finish();
  },
  toProtoMsg(message: UnstakeProposal): UnstakeProposalProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.UnstakeProposal",
      value: UnstakeProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UnstakeProposal.typeUrl, UnstakeProposal);
function createBaseProviderUnstakeInfo(): ProviderUnstakeInfo {
  return {
    provider: "",
    chainId: ""
  };
}
export const ProviderUnstakeInfo = {
  typeUrl: "/lavanet.lava.pairing.ProviderUnstakeInfo",
  is(o: any): o is ProviderUnstakeInfo {
    return o && (o.$typeUrl === ProviderUnstakeInfo.typeUrl || typeof o.provider === "string" && typeof o.chainId === "string");
  },
  isSDK(o: any): o is ProviderUnstakeInfoSDKType {
    return o && (o.$typeUrl === ProviderUnstakeInfo.typeUrl || typeof o.provider === "string" && typeof o.chain_id === "string");
  },
  isAmino(o: any): o is ProviderUnstakeInfoAmino {
    return o && (o.$typeUrl === ProviderUnstakeInfo.typeUrl || typeof o.provider === "string" && typeof o.chain_id === "string");
  },
  encode(message: ProviderUnstakeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderUnstakeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderUnstakeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProviderUnstakeInfo {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  toJSON(message: ProviderUnstakeInfo): JsonSafe<ProviderUnstakeInfo> {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProviderUnstakeInfo>, I>>(object: I): ProviderUnstakeInfo {
    const message = createBaseProviderUnstakeInfo();
    message.provider = object.provider ?? "";
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: ProviderUnstakeInfoAmino): ProviderUnstakeInfo {
    const message = createBaseProviderUnstakeInfo();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: ProviderUnstakeInfo): ProviderUnstakeInfoAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    return obj;
  },
  fromAminoMsg(object: ProviderUnstakeInfoAminoMsg): ProviderUnstakeInfo {
    return ProviderUnstakeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderUnstakeInfoProtoMsg): ProviderUnstakeInfo {
    return ProviderUnstakeInfo.decode(message.value);
  },
  toProto(message: ProviderUnstakeInfo): Uint8Array {
    return ProviderUnstakeInfo.encode(message).finish();
  },
  toProtoMsg(message: ProviderUnstakeInfo): ProviderUnstakeInfoProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ProviderUnstakeInfo",
      value: ProviderUnstakeInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProviderUnstakeInfo.typeUrl, ProviderUnstakeInfo);
function createBaseDelegatorSlashing(): DelegatorSlashing {
  return {
    delegator: "",
    slashingAmount: Coin.fromPartial({})
  };
}
export const DelegatorSlashing = {
  typeUrl: "/lavanet.lava.pairing.DelegatorSlashing",
  is(o: any): o is DelegatorSlashing {
    return o && (o.$typeUrl === DelegatorSlashing.typeUrl || typeof o.delegator === "string" && Coin.is(o.slashingAmount));
  },
  isSDK(o: any): o is DelegatorSlashingSDKType {
    return o && (o.$typeUrl === DelegatorSlashing.typeUrl || typeof o.delegator === "string" && Coin.isSDK(o.slashing_amount));
  },
  isAmino(o: any): o is DelegatorSlashingAmino {
    return o && (o.$typeUrl === DelegatorSlashing.typeUrl || typeof o.delegator === "string" && Coin.isAmino(o.slashing_amount));
  },
  encode(message: DelegatorSlashing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.slashingAmount !== undefined) {
      Coin.encode(message.slashingAmount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorSlashing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorSlashing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.slashingAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorSlashing {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      slashingAmount: isSet(object.slashingAmount) ? Coin.fromJSON(object.slashingAmount) : undefined
    };
  },
  toJSON(message: DelegatorSlashing): JsonSafe<DelegatorSlashing> {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.slashingAmount !== undefined && (obj.slashingAmount = message.slashingAmount ? Coin.toJSON(message.slashingAmount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DelegatorSlashing>, I>>(object: I): DelegatorSlashing {
    const message = createBaseDelegatorSlashing();
    message.delegator = object.delegator ?? "";
    message.slashingAmount = object.slashingAmount !== undefined && object.slashingAmount !== null ? Coin.fromPartial(object.slashingAmount) : undefined;
    return message;
  },
  fromAmino(object: DelegatorSlashingAmino): DelegatorSlashing {
    const message = createBaseDelegatorSlashing();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.slashing_amount !== undefined && object.slashing_amount !== null) {
      message.slashingAmount = Coin.fromAmino(object.slashing_amount);
    }
    return message;
  },
  toAmino(message: DelegatorSlashing): DelegatorSlashingAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    obj.slashing_amount = message.slashingAmount ? Coin.toAmino(message.slashingAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegatorSlashingAminoMsg): DelegatorSlashing {
    return DelegatorSlashing.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegatorSlashingProtoMsg): DelegatorSlashing {
    return DelegatorSlashing.decode(message.value);
  },
  toProto(message: DelegatorSlashing): Uint8Array {
    return DelegatorSlashing.encode(message).finish();
  },
  toProtoMsg(message: DelegatorSlashing): DelegatorSlashingProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.DelegatorSlashing",
      value: DelegatorSlashing.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelegatorSlashing.typeUrl, DelegatorSlashing);