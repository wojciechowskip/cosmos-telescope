//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { GenesisState as GenesisState1 } from "../fixationstore/fixation";
import { GenesisStateAmino as GenesisState1Amino } from "../fixationstore/fixation";
import { GenesisStateSDKType as GenesisState1SDKType } from "../fixationstore/fixation";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the plan module's genesis state. */
export interface GenesisState {
  params: Params;
  plansFS: GenesisState1;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lavanet.lava.plans.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the plan module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  plansFS?: GenesisState1Amino;
}
export interface GenesisStateAminoMsg {
  type: "/lavanet.lava.plans.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the plan module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  plansFS: GenesisState1SDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    plansFS: GenesisState1.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.plans.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && GenesisState1.is(o.plansFS));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && GenesisState1.isSDK(o.plansFS));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && GenesisState1.isAmino(o.plansFS));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.plansFS !== undefined) {
      GenesisState1.encode(message.plansFS, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.plansFS = GenesisState1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      plansFS: isSet(object.plansFS) ? GenesisState1.fromJSON(object.plansFS) : undefined
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.plansFS !== undefined && (obj.plansFS = message.plansFS ? GenesisState1.toJSON(message.plansFS) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.plansFS = object.plansFS !== undefined && object.plansFS !== null ? GenesisState1.fromPartial(object.plansFS) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.plansFS !== undefined && object.plansFS !== null) {
      message.plansFS = GenesisState1.fromAmino(object.plansFS);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.plansFS = message.plansFS ? GenesisState1.toAmino(message.plansFS) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);