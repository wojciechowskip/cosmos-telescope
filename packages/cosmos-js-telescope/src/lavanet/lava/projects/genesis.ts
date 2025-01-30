//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { GenesisState as GenesisState1 } from "../fixationstore/fixation";
import { GenesisStateAmino as GenesisState1Amino } from "../fixationstore/fixation";
import { GenesisStateSDKType as GenesisState1SDKType } from "../fixationstore/fixation";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the projects module's genesis state. */
export interface GenesisState {
  params: Params;
  projectsFS: GenesisState1;
  developerFS: GenesisState1;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lavanet.lava.projects.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the projects module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  projectsFS?: GenesisState1Amino;
  developerFS?: GenesisState1Amino;
}
export interface GenesisStateAminoMsg {
  type: "/lavanet.lava.projects.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the projects module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  projectsFS: GenesisState1SDKType;
  developerFS: GenesisState1SDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    projectsFS: GenesisState1.fromPartial({}),
    developerFS: GenesisState1.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.projects.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && GenesisState1.is(o.projectsFS) && GenesisState1.is(o.developerFS));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && GenesisState1.isSDK(o.projectsFS) && GenesisState1.isSDK(o.developerFS));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && GenesisState1.isAmino(o.projectsFS) && GenesisState1.isAmino(o.developerFS));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.projectsFS !== undefined) {
      GenesisState1.encode(message.projectsFS, writer.uint32(18).fork()).ldelim();
    }
    if (message.developerFS !== undefined) {
      GenesisState1.encode(message.developerFS, writer.uint32(26).fork()).ldelim();
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
          message.projectsFS = GenesisState1.decode(reader, reader.uint32());
          break;
        case 3:
          message.developerFS = GenesisState1.decode(reader, reader.uint32());
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
      projectsFS: isSet(object.projectsFS) ? GenesisState1.fromJSON(object.projectsFS) : undefined,
      developerFS: isSet(object.developerFS) ? GenesisState1.fromJSON(object.developerFS) : undefined
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.projectsFS !== undefined && (obj.projectsFS = message.projectsFS ? GenesisState1.toJSON(message.projectsFS) : undefined);
    message.developerFS !== undefined && (obj.developerFS = message.developerFS ? GenesisState1.toJSON(message.developerFS) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.projectsFS = object.projectsFS !== undefined && object.projectsFS !== null ? GenesisState1.fromPartial(object.projectsFS) : undefined;
    message.developerFS = object.developerFS !== undefined && object.developerFS !== null ? GenesisState1.fromPartial(object.developerFS) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.projectsFS !== undefined && object.projectsFS !== null) {
      message.projectsFS = GenesisState1.fromAmino(object.projectsFS);
    }
    if (object.developerFS !== undefined && object.developerFS !== null) {
      message.developerFS = GenesisState1.fromAmino(object.developerFS);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.projectsFS = message.projectsFS ? GenesisState1.toAmino(message.projectsFS) : undefined;
    obj.developerFS = message.developerFS ? GenesisState1.toAmino(message.developerFS) : undefined;
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
      typeUrl: "/lavanet.lava.projects.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);