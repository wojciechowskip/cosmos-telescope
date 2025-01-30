//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Description, DescriptionAmino, DescriptionSDKType } from "../../../cosmos/staking/v1beta1/staking";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface ProviderMetadata {
  provider: string;
  vault: string;
  totalDelegations: Coin;
  chains: string[];
  /** delegation commission (precentage 0-100) */
  delegateCommission: bigint;
  lastChange: bigint;
  description: Description;
}
export interface ProviderMetadataProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.ProviderMetadata";
  value: Uint8Array;
}
export interface ProviderMetadataAmino {
  provider?: string;
  vault?: string;
  total_delegations?: CoinAmino;
  chains?: string[];
  /** delegation commission (precentage 0-100) */
  delegate_commission?: string;
  last_change?: string;
  description: DescriptionAmino;
}
export interface ProviderMetadataAminoMsg {
  type: "/lavanet.lava.epochstorage.ProviderMetadata";
  value: ProviderMetadataAmino;
}
export interface ProviderMetadataSDKType {
  provider: string;
  vault: string;
  total_delegations: CoinSDKType;
  chains: string[];
  delegate_commission: bigint;
  last_change: bigint;
  description: DescriptionSDKType;
}
function createBaseProviderMetadata(): ProviderMetadata {
  return {
    provider: "",
    vault: "",
    totalDelegations: Coin.fromPartial({}),
    chains: [],
    delegateCommission: BigInt(0),
    lastChange: BigInt(0),
    description: Description.fromPartial({})
  };
}
export const ProviderMetadata = {
  typeUrl: "/lavanet.lava.epochstorage.ProviderMetadata",
  is(o: any): o is ProviderMetadata {
    return o && (o.$typeUrl === ProviderMetadata.typeUrl || typeof o.provider === "string" && typeof o.vault === "string" && Coin.is(o.totalDelegations) && Array.isArray(o.chains) && (!o.chains.length || typeof o.chains[0] === "string") && typeof o.delegateCommission === "bigint" && typeof o.lastChange === "bigint" && Description.is(o.description));
  },
  isSDK(o: any): o is ProviderMetadataSDKType {
    return o && (o.$typeUrl === ProviderMetadata.typeUrl || typeof o.provider === "string" && typeof o.vault === "string" && Coin.isSDK(o.total_delegations) && Array.isArray(o.chains) && (!o.chains.length || typeof o.chains[0] === "string") && typeof o.delegate_commission === "bigint" && typeof o.last_change === "bigint" && Description.isSDK(o.description));
  },
  isAmino(o: any): o is ProviderMetadataAmino {
    return o && (o.$typeUrl === ProviderMetadata.typeUrl || typeof o.provider === "string" && typeof o.vault === "string" && Coin.isAmino(o.total_delegations) && Array.isArray(o.chains) && (!o.chains.length || typeof o.chains[0] === "string") && typeof o.delegate_commission === "bigint" && typeof o.last_change === "bigint" && Description.isAmino(o.description));
  },
  encode(message: ProviderMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.vault !== "") {
      writer.uint32(18).string(message.vault);
    }
    if (message.totalDelegations !== undefined) {
      Coin.encode(message.totalDelegations, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.chains) {
      writer.uint32(34).string(v!);
    }
    if (message.delegateCommission !== BigInt(0)) {
      writer.uint32(40).uint64(message.delegateCommission);
    }
    if (message.lastChange !== BigInt(0)) {
      writer.uint32(48).uint64(message.lastChange);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.vault = reader.string();
          break;
        case 3:
          message.totalDelegations = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.chains.push(reader.string());
          break;
        case 5:
          message.delegateCommission = reader.uint64();
          break;
        case 6:
          message.lastChange = reader.uint64();
          break;
        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProviderMetadata {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      vault: isSet(object.vault) ? String(object.vault) : "",
      totalDelegations: isSet(object.totalDelegations) ? Coin.fromJSON(object.totalDelegations) : undefined,
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : [],
      delegateCommission: isSet(object.delegateCommission) ? BigInt(object.delegateCommission.toString()) : BigInt(0),
      lastChange: isSet(object.lastChange) ? BigInt(object.lastChange.toString()) : BigInt(0),
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined
    };
  },
  toJSON(message: ProviderMetadata): JsonSafe<ProviderMetadata> {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.vault !== undefined && (obj.vault = message.vault);
    message.totalDelegations !== undefined && (obj.totalDelegations = message.totalDelegations ? Coin.toJSON(message.totalDelegations) : undefined);
    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = [];
    }
    message.delegateCommission !== undefined && (obj.delegateCommission = (message.delegateCommission || BigInt(0)).toString());
    message.lastChange !== undefined && (obj.lastChange = (message.lastChange || BigInt(0)).toString());
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProviderMetadata>, I>>(object: I): ProviderMetadata {
    const message = createBaseProviderMetadata();
    message.provider = object.provider ?? "";
    message.vault = object.vault ?? "";
    message.totalDelegations = object.totalDelegations !== undefined && object.totalDelegations !== null ? Coin.fromPartial(object.totalDelegations) : undefined;
    message.chains = object.chains?.map(e => e) || [];
    message.delegateCommission = object.delegateCommission !== undefined && object.delegateCommission !== null ? BigInt(object.delegateCommission.toString()) : BigInt(0);
    message.lastChange = object.lastChange !== undefined && object.lastChange !== null ? BigInt(object.lastChange.toString()) : BigInt(0);
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    return message;
  },
  fromAmino(object: ProviderMetadataAmino): ProviderMetadata {
    const message = createBaseProviderMetadata();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.vault !== undefined && object.vault !== null) {
      message.vault = object.vault;
    }
    if (object.total_delegations !== undefined && object.total_delegations !== null) {
      message.totalDelegations = Coin.fromAmino(object.total_delegations);
    }
    message.chains = object.chains?.map(e => e) || [];
    if (object.delegate_commission !== undefined && object.delegate_commission !== null) {
      message.delegateCommission = BigInt(object.delegate_commission);
    }
    if (object.last_change !== undefined && object.last_change !== null) {
      message.lastChange = BigInt(object.last_change);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    return message;
  },
  toAmino(message: ProviderMetadata): ProviderMetadataAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.vault = message.vault === "" ? undefined : message.vault;
    obj.total_delegations = message.totalDelegations ? Coin.toAmino(message.totalDelegations) : undefined;
    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = message.chains;
    }
    obj.delegate_commission = message.delegateCommission !== BigInt(0) ? (message.delegateCommission?.toString)() : undefined;
    obj.last_change = message.lastChange !== BigInt(0) ? (message.lastChange?.toString)() : undefined;
    obj.description = message.description ? Description.toAmino(message.description) : Description.toAmino(Description.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ProviderMetadataAminoMsg): ProviderMetadata {
    return ProviderMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderMetadataProtoMsg): ProviderMetadata {
    return ProviderMetadata.decode(message.value);
  },
  toProto(message: ProviderMetadata): Uint8Array {
    return ProviderMetadata.encode(message).finish();
  },
  toProtoMsg(message: ProviderMetadata): ProviderMetadataProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.ProviderMetadata",
      value: ProviderMetadata.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProviderMetadata.typeUrl, ProviderMetadata);