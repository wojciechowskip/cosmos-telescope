//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StakeStorage, StakeStorageAmino, StakeStorageSDKType } from "./stake_storage";
import { EpochDetails, EpochDetailsAmino, EpochDetailsSDKType } from "./epoch_details";
import { FixatedParams, FixatedParamsAmino, FixatedParamsSDKType } from "./fixated_params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the epochstorage module's genesis state. */
export interface GenesisState {
  params: Params;
  stakeStorageList: StakeStorage[];
  epochDetails?: EpochDetails;
  fixatedParamsList: FixatedParams[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the epochstorage module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  stakeStorageList?: StakeStorageAmino[];
  epochDetails?: EpochDetailsAmino;
  fixatedParamsList?: FixatedParamsAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lavanet.lava.epochstorage.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the epochstorage module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  stakeStorageList: StakeStorageSDKType[];
  epochDetails?: EpochDetailsSDKType;
  fixatedParamsList: FixatedParamsSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    stakeStorageList: [],
    epochDetails: undefined,
    fixatedParamsList: []
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.epochstorage.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.stakeStorageList) && (!o.stakeStorageList.length || StakeStorage.is(o.stakeStorageList[0])) && Array.isArray(o.fixatedParamsList) && (!o.fixatedParamsList.length || FixatedParams.is(o.fixatedParamsList[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.stakeStorageList) && (!o.stakeStorageList.length || StakeStorage.isSDK(o.stakeStorageList[0])) && Array.isArray(o.fixatedParamsList) && (!o.fixatedParamsList.length || FixatedParams.isSDK(o.fixatedParamsList[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.stakeStorageList) && (!o.stakeStorageList.length || StakeStorage.isAmino(o.stakeStorageList[0])) && Array.isArray(o.fixatedParamsList) && (!o.fixatedParamsList.length || FixatedParams.isAmino(o.fixatedParamsList[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stakeStorageList) {
      StakeStorage.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.epochDetails !== undefined) {
      EpochDetails.encode(message.epochDetails, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.fixatedParamsList) {
      FixatedParams.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.stakeStorageList.push(StakeStorage.decode(reader, reader.uint32()));
          break;
        case 3:
          message.epochDetails = EpochDetails.decode(reader, reader.uint32());
          break;
        case 4:
          message.fixatedParamsList.push(FixatedParams.decode(reader, reader.uint32()));
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
      stakeStorageList: Array.isArray(object?.stakeStorageList) ? object.stakeStorageList.map((e: any) => StakeStorage.fromJSON(e)) : [],
      epochDetails: isSet(object.epochDetails) ? EpochDetails.fromJSON(object.epochDetails) : undefined,
      fixatedParamsList: Array.isArray(object?.fixatedParamsList) ? object.fixatedParamsList.map((e: any) => FixatedParams.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.stakeStorageList) {
      obj.stakeStorageList = message.stakeStorageList.map(e => e ? StakeStorage.toJSON(e) : undefined);
    } else {
      obj.stakeStorageList = [];
    }
    message.epochDetails !== undefined && (obj.epochDetails = message.epochDetails ? EpochDetails.toJSON(message.epochDetails) : undefined);
    if (message.fixatedParamsList) {
      obj.fixatedParamsList = message.fixatedParamsList.map(e => e ? FixatedParams.toJSON(e) : undefined);
    } else {
      obj.fixatedParamsList = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.stakeStorageList = object.stakeStorageList?.map(e => StakeStorage.fromPartial(e)) || [];
    message.epochDetails = object.epochDetails !== undefined && object.epochDetails !== null ? EpochDetails.fromPartial(object.epochDetails) : undefined;
    message.fixatedParamsList = object.fixatedParamsList?.map(e => FixatedParams.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.stakeStorageList = object.stakeStorageList?.map(e => StakeStorage.fromAmino(e)) || [];
    if (object.epochDetails !== undefined && object.epochDetails !== null) {
      message.epochDetails = EpochDetails.fromAmino(object.epochDetails);
    }
    message.fixatedParamsList = object.fixatedParamsList?.map(e => FixatedParams.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.stakeStorageList) {
      obj.stakeStorageList = message.stakeStorageList.map(e => e ? StakeStorage.toAmino(e) : undefined);
    } else {
      obj.stakeStorageList = message.stakeStorageList;
    }
    obj.epochDetails = message.epochDetails ? EpochDetails.toAmino(message.epochDetails) : undefined;
    if (message.fixatedParamsList) {
      obj.fixatedParamsList = message.fixatedParamsList.map(e => e ? FixatedParams.toAmino(e) : undefined);
    } else {
      obj.fixatedParamsList = message.fixatedParamsList;
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
      typeUrl: "/lavanet.lava.epochstorage.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);