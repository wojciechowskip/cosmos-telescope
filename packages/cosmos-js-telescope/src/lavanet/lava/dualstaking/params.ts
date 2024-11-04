//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the parameters for the module. */
export interface Params {
  /** min self delegation for provider */
  minSelfDelegation: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/lavanet.lava.dualstaking.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** min self delegation for provider */
  min_self_delegation?: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "/lavanet.lava.dualstaking.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  min_self_delegation: CoinSDKType;
}
/** SlashedValidators defines the a list of slashed validators. */
export interface SlashedValidators {
  validators: string[];
}
export interface SlashedValidatorsProtoMsg {
  typeUrl: "/lavanet.lava.dualstaking.SlashedValidators";
  value: Uint8Array;
}
/** SlashedValidators defines the a list of slashed validators. */
export interface SlashedValidatorsAmino {
  validators?: string[];
}
export interface SlashedValidatorsAminoMsg {
  type: "/lavanet.lava.dualstaking.SlashedValidators";
  value: SlashedValidatorsAmino;
}
/** SlashedValidators defines the a list of slashed validators. */
export interface SlashedValidatorsSDKType {
  validators: string[];
}
function createBaseParams(): Params {
  return {
    minSelfDelegation: Coin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/lavanet.lava.dualstaking.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Coin.is(o.minSelfDelegation));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Coin.isSDK(o.min_self_delegation));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Coin.isAmino(o.min_self_delegation));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minSelfDelegation !== undefined) {
      Coin.encode(message.minSelfDelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minSelfDelegation = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      minSelfDelegation: isSet(object.minSelfDelegation) ? Coin.fromJSON(object.minSelfDelegation) : undefined
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation ? Coin.toJSON(message.minSelfDelegation) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minSelfDelegation = object.minSelfDelegation !== undefined && object.minSelfDelegation !== null ? Coin.fromPartial(object.minSelfDelegation) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
      message.minSelfDelegation = Coin.fromAmino(object.min_self_delegation);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_self_delegation = message.minSelfDelegation ? Coin.toAmino(message.minSelfDelegation) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/lavanet.lava.dualstaking.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
function createBaseSlashedValidators(): SlashedValidators {
  return {
    validators: []
  };
}
export const SlashedValidators = {
  typeUrl: "/lavanet.lava.dualstaking.SlashedValidators",
  is(o: any): o is SlashedValidators {
    return o && (o.$typeUrl === SlashedValidators.typeUrl || Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string"));
  },
  isSDK(o: any): o is SlashedValidatorsSDKType {
    return o && (o.$typeUrl === SlashedValidators.typeUrl || Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string"));
  },
  isAmino(o: any): o is SlashedValidatorsAmino {
    return o && (o.$typeUrl === SlashedValidators.typeUrl || Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string"));
  },
  encode(message: SlashedValidators, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SlashedValidators {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlashedValidators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SlashedValidators {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: SlashedValidators): JsonSafe<SlashedValidators> {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromPartial(object: Partial<SlashedValidators>): SlashedValidators {
    const message = createBaseSlashedValidators();
    message.validators = object.validators?.map(e => e) || [];
    return message;
  },
  fromAmino(object: SlashedValidatorsAmino): SlashedValidators {
    const message = createBaseSlashedValidators();
    message.validators = object.validators?.map(e => e) || [];
    return message;
  },
  toAmino(message: SlashedValidators): SlashedValidatorsAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = message.validators;
    }
    return obj;
  },
  fromAminoMsg(object: SlashedValidatorsAminoMsg): SlashedValidators {
    return SlashedValidators.fromAmino(object.value);
  },
  fromProtoMsg(message: SlashedValidatorsProtoMsg): SlashedValidators {
    return SlashedValidators.decode(message.value);
  },
  toProto(message: SlashedValidators): Uint8Array {
    return SlashedValidators.encode(message).finish();
  },
  toProtoMsg(message: SlashedValidators): SlashedValidatorsProtoMsg {
    return {
      typeUrl: "/lavanet.lava.dualstaking.SlashedValidators",
      value: SlashedValidators.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SlashedValidators.typeUrl, SlashedValidators);