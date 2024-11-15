//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface DelegatorReward {
  delegator: string;
  provider: string;
  amount: Coin[];
}
export interface DelegatorRewardProtoMsg {
  typeUrl: "/lavanet.lava.dualstaking.DelegatorReward";
  value: Uint8Array;
}
export interface DelegatorRewardAmino {
  delegator?: string;
  provider?: string;
  amount?: CoinAmino[];
}
export interface DelegatorRewardAminoMsg {
  type: "/lavanet.lava.dualstaking.DelegatorReward";
  value: DelegatorRewardAmino;
}
export interface DelegatorRewardSDKType {
  delegator: string;
  provider: string;
  amount: CoinSDKType[];
}
function createBaseDelegatorReward(): DelegatorReward {
  return {
    delegator: "",
    provider: "",
    amount: []
  };
}
export const DelegatorReward = {
  typeUrl: "/lavanet.lava.dualstaking.DelegatorReward",
  is(o: any): o is DelegatorReward {
    return o && (o.$typeUrl === DelegatorReward.typeUrl || typeof o.delegator === "string" && typeof o.provider === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is DelegatorRewardSDKType {
    return o && (o.$typeUrl === DelegatorReward.typeUrl || typeof o.delegator === "string" && typeof o.provider === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is DelegatorRewardAmino {
    return o && (o.$typeUrl === DelegatorReward.typeUrl || typeof o.delegator === "string" && typeof o.provider === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: DelegatorReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorReward {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: DelegatorReward): JsonSafe<DelegatorReward> {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.provider !== undefined && (obj.provider = message.provider);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DelegatorReward>, I>>(object: I): DelegatorReward {
    const message = createBaseDelegatorReward();
    message.delegator = object.delegator ?? "";
    message.provider = object.provider ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegatorRewardAmino): DelegatorReward {
    const message = createBaseDelegatorReward();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DelegatorReward): DelegatorRewardAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    obj.provider = message.provider === "" ? undefined : message.provider;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: DelegatorRewardAminoMsg): DelegatorReward {
    return DelegatorReward.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegatorRewardProtoMsg): DelegatorReward {
    return DelegatorReward.decode(message.value);
  },
  toProto(message: DelegatorReward): Uint8Array {
    return DelegatorReward.encode(message).finish();
  },
  toProtoMsg(message: DelegatorReward): DelegatorRewardProtoMsg {
    return {
      typeUrl: "/lavanet.lava.dualstaking.DelegatorReward",
      value: DelegatorReward.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DelegatorReward.typeUrl, DelegatorReward);