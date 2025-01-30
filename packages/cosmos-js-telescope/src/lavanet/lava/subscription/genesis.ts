//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { GenesisState as GenesisState1 } from "../fixationstore/fixation";
import { GenesisStateAmino as GenesisState1Amino } from "../fixationstore/fixation";
import { GenesisStateSDKType as GenesisState1SDKType } from "../fixationstore/fixation";
import { GenesisState as GenesisState2 } from "../timerstore/timer";
import { GenesisStateAmino as GenesisState2Amino } from "../timerstore/timer";
import { GenesisStateSDKType as GenesisState2SDKType } from "../timerstore/timer";
import { Adjustment, AdjustmentAmino, AdjustmentSDKType } from "./adjustment";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the subscription module's genesis state. */
export interface GenesisState {
  params: Params;
  subsFS: GenesisState1;
  subsTS: GenesisState2;
  cuTrackerFS: GenesisState1;
  cuTrackerTS: GenesisState2;
  adjustments: Adjustment[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lavanet.lava.subscription.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the subscription module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  subsFS?: GenesisState1Amino;
  subsTS?: GenesisState2Amino;
  cuTrackerFS?: GenesisState1Amino;
  cuTrackerTS?: GenesisState2Amino;
  adjustments?: AdjustmentAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lavanet.lava.subscription.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the subscription module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  subsFS: GenesisState1SDKType;
  subsTS: GenesisState2SDKType;
  cuTrackerFS: GenesisState1SDKType;
  cuTrackerTS: GenesisState2SDKType;
  adjustments: AdjustmentSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    subsFS: GenesisState1.fromPartial({}),
    subsTS: GenesisState2.fromPartial({}),
    cuTrackerFS: GenesisState1.fromPartial({}),
    cuTrackerTS: GenesisState2.fromPartial({}),
    adjustments: []
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.subscription.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && GenesisState1.is(o.subsFS) && GenesisState2.is(o.subsTS) && GenesisState1.is(o.cuTrackerFS) && GenesisState2.is(o.cuTrackerTS) && Array.isArray(o.adjustments) && (!o.adjustments.length || Adjustment.is(o.adjustments[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && GenesisState1.isSDK(o.subsFS) && GenesisState2.isSDK(o.subsTS) && GenesisState1.isSDK(o.cuTrackerFS) && GenesisState2.isSDK(o.cuTrackerTS) && Array.isArray(o.adjustments) && (!o.adjustments.length || Adjustment.isSDK(o.adjustments[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && GenesisState1.isAmino(o.subsFS) && GenesisState2.isAmino(o.subsTS) && GenesisState1.isAmino(o.cuTrackerFS) && GenesisState2.isAmino(o.cuTrackerTS) && Array.isArray(o.adjustments) && (!o.adjustments.length || Adjustment.isAmino(o.adjustments[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.subsFS !== undefined) {
      GenesisState1.encode(message.subsFS, writer.uint32(18).fork()).ldelim();
    }
    if (message.subsTS !== undefined) {
      GenesisState2.encode(message.subsTS, writer.uint32(26).fork()).ldelim();
    }
    if (message.cuTrackerFS !== undefined) {
      GenesisState1.encode(message.cuTrackerFS, writer.uint32(34).fork()).ldelim();
    }
    if (message.cuTrackerTS !== undefined) {
      GenesisState2.encode(message.cuTrackerTS, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.adjustments) {
      Adjustment.encode(v!, writer.uint32(50).fork()).ldelim();
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
          message.subsFS = GenesisState1.decode(reader, reader.uint32());
          break;
        case 3:
          message.subsTS = GenesisState2.decode(reader, reader.uint32());
          break;
        case 4:
          message.cuTrackerFS = GenesisState1.decode(reader, reader.uint32());
          break;
        case 5:
          message.cuTrackerTS = GenesisState2.decode(reader, reader.uint32());
          break;
        case 6:
          message.adjustments.push(Adjustment.decode(reader, reader.uint32()));
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
      subsFS: isSet(object.subsFS) ? GenesisState1.fromJSON(object.subsFS) : undefined,
      subsTS: isSet(object.subsTS) ? GenesisState2.fromJSON(object.subsTS) : undefined,
      cuTrackerFS: isSet(object.cuTrackerFS) ? GenesisState1.fromJSON(object.cuTrackerFS) : undefined,
      cuTrackerTS: isSet(object.cuTrackerTS) ? GenesisState2.fromJSON(object.cuTrackerTS) : undefined,
      adjustments: Array.isArray(object?.adjustments) ? object.adjustments.map((e: any) => Adjustment.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.subsFS !== undefined && (obj.subsFS = message.subsFS ? GenesisState1.toJSON(message.subsFS) : undefined);
    message.subsTS !== undefined && (obj.subsTS = message.subsTS ? GenesisState2.toJSON(message.subsTS) : undefined);
    message.cuTrackerFS !== undefined && (obj.cuTrackerFS = message.cuTrackerFS ? GenesisState1.toJSON(message.cuTrackerFS) : undefined);
    message.cuTrackerTS !== undefined && (obj.cuTrackerTS = message.cuTrackerTS ? GenesisState2.toJSON(message.cuTrackerTS) : undefined);
    if (message.adjustments) {
      obj.adjustments = message.adjustments.map(e => e ? Adjustment.toJSON(e) : undefined);
    } else {
      obj.adjustments = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.subsFS = object.subsFS !== undefined && object.subsFS !== null ? GenesisState1.fromPartial(object.subsFS) : undefined;
    message.subsTS = object.subsTS !== undefined && object.subsTS !== null ? GenesisState2.fromPartial(object.subsTS) : undefined;
    message.cuTrackerFS = object.cuTrackerFS !== undefined && object.cuTrackerFS !== null ? GenesisState1.fromPartial(object.cuTrackerFS) : undefined;
    message.cuTrackerTS = object.cuTrackerTS !== undefined && object.cuTrackerTS !== null ? GenesisState2.fromPartial(object.cuTrackerTS) : undefined;
    message.adjustments = object.adjustments?.map(e => Adjustment.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.subsFS !== undefined && object.subsFS !== null) {
      message.subsFS = GenesisState1.fromAmino(object.subsFS);
    }
    if (object.subsTS !== undefined && object.subsTS !== null) {
      message.subsTS = GenesisState2.fromAmino(object.subsTS);
    }
    if (object.cuTrackerFS !== undefined && object.cuTrackerFS !== null) {
      message.cuTrackerFS = GenesisState1.fromAmino(object.cuTrackerFS);
    }
    if (object.cuTrackerTS !== undefined && object.cuTrackerTS !== null) {
      message.cuTrackerTS = GenesisState2.fromAmino(object.cuTrackerTS);
    }
    message.adjustments = object.adjustments?.map(e => Adjustment.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.subsFS = message.subsFS ? GenesisState1.toAmino(message.subsFS) : undefined;
    obj.subsTS = message.subsTS ? GenesisState2.toAmino(message.subsTS) : undefined;
    obj.cuTrackerFS = message.cuTrackerFS ? GenesisState1.toAmino(message.cuTrackerFS) : undefined;
    obj.cuTrackerTS = message.cuTrackerTS ? GenesisState2.toAmino(message.cuTrackerTS) : undefined;
    if (message.adjustments) {
      obj.adjustments = message.adjustments.map(e => e ? Adjustment.toAmino(e) : undefined);
    } else {
      obj.adjustments = message.adjustments;
    }
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
      typeUrl: "/lavanet.lava.subscription.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);