//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Spec, SpecAmino, SpecSDKType } from "./spec";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the spec module's genesis state. */
export interface GenesisState {
  params: Params;
  specList: Spec[];
  specCount: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lavanet.lava.spec.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the spec module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  specList?: SpecAmino[];
  specCount?: string;
}
export interface GenesisStateAminoMsg {
  type: "/lavanet.lava.spec.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the spec module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  specList: SpecSDKType[];
  specCount: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    specList: [],
    specCount: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.spec.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.specList) && (!o.specList.length || Spec.is(o.specList[0])) && typeof o.specCount === "bigint");
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.specList) && (!o.specList.length || Spec.isSDK(o.specList[0])) && typeof o.specCount === "bigint");
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.specList) && (!o.specList.length || Spec.isAmino(o.specList[0])) && typeof o.specCount === "bigint");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.specList) {
      Spec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.specCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.specCount);
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
          message.specList.push(Spec.decode(reader, reader.uint32()));
          break;
        case 3:
          message.specCount = reader.uint64();
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
      specList: Array.isArray(object?.specList) ? object.specList.map((e: any) => Spec.fromJSON(e)) : [],
      specCount: isSet(object.specCount) ? BigInt(object.specCount.toString()) : BigInt(0)
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.specList) {
      obj.specList = message.specList.map(e => e ? Spec.toJSON(e) : undefined);
    } else {
      obj.specList = [];
    }
    message.specCount !== undefined && (obj.specCount = (message.specCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.specList = object.specList?.map(e => Spec.fromPartial(e)) || [];
    message.specCount = object.specCount !== undefined && object.specCount !== null ? BigInt(object.specCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.specList = object.specList?.map(e => Spec.fromAmino(e)) || [];
    if (object.specCount !== undefined && object.specCount !== null) {
      message.specCount = BigInt(object.specCount);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.specList) {
      obj.specList = message.specList.map(e => e ? Spec.toAmino(e) : undefined);
    } else {
      obj.specList = message.specList;
    }
    obj.specCount = message.specCount !== BigInt(0) ? (message.specCount?.toString)() : undefined;
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
      typeUrl: "/lavanet.lava.spec.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);