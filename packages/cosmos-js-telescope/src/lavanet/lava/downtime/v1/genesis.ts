//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType, Downtime, DowntimeAmino, DowntimeSDKType } from "./downtime";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../registry";
/** GenesisState is the genesis state of the downtime module. */
export interface GenesisState {
  params: Params;
  downtimes: Downtime[];
  /**
   * last_block_time keeps track of when the last block time was set.
   * it's nullable because we might want it to be non existent.
   * we want it to exist when we have a genesis export-import migration scenario.
   */
  lastBlockTime?: Date;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lavanet.lava.downtime.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState is the genesis state of the downtime module. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  downtimes?: DowntimeAmino[];
  /**
   * last_block_time keeps track of when the last block time was set.
   * it's nullable because we might want it to be non existent.
   * we want it to exist when we have a genesis export-import migration scenario.
   */
  last_block_time?: string;
}
export interface GenesisStateAminoMsg {
  type: "/lavanet.lava.downtime.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState is the genesis state of the downtime module. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  downtimes: DowntimeSDKType[];
  last_block_time?: Date;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    downtimes: [],
    lastBlockTime: undefined
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.downtime.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.downtimes) && (!o.downtimes.length || Downtime.is(o.downtimes[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.downtimes) && (!o.downtimes.length || Downtime.isSDK(o.downtimes[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.downtimes) && (!o.downtimes.length || Downtime.isAmino(o.downtimes[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.downtimes) {
      Downtime.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(26).fork()).ldelim();
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
          message.downtimes.push(Downtime.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lastBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e: any) => Downtime.fromJSON(e)) : [],
      lastBlockTime: isSet(object.lastBlockTime) ? fromJsonTimestamp(object.lastBlockTime) : undefined
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map(e => e ? Downtime.toJSON(e) : undefined);
    } else {
      obj.downtimes = [];
    }
    message.lastBlockTime !== undefined && (obj.lastBlockTime = message.lastBlockTime.toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.downtimes = object.downtimes?.map(e => Downtime.fromPartial(e)) || [];
    message.lastBlockTime = object.lastBlockTime ?? undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.downtimes = object.downtimes?.map(e => Downtime.fromAmino(e)) || [];
    if (object.last_block_time !== undefined && object.last_block_time !== null) {
      message.lastBlockTime = fromTimestamp(Timestamp.fromAmino(object.last_block_time));
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map(e => e ? Downtime.toAmino(e) : undefined);
    } else {
      obj.downtimes = message.downtimes;
    }
    obj.last_block_time = message.lastBlockTime ? Timestamp.toAmino(toTimestamp(message.lastBlockTime)) : undefined;
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
      typeUrl: "/lavanet.lava.downtime.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);