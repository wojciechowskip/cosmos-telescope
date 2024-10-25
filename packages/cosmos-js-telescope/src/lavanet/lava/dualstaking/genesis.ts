//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { GenesisState as GenesisState1 } from "../fixationstore/fixation";
import { GenesisStateAmino as GenesisState1Amino } from "../fixationstore/fixation";
import { GenesisStateSDKType as GenesisState1SDKType } from "../fixationstore/fixation";
import { DelegatorReward, DelegatorRewardAmino, DelegatorRewardSDKType } from "./delegator_reward";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the dualstaking module's genesis state. */
export interface GenesisState {
  params: Params;
  delegationsFS: GenesisState1;
  delegatorsFS: GenesisState1;
  delegatorRewardList: DelegatorReward[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lavanet.lava.dualstaking.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the dualstaking module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  delegationsFS?: GenesisState1Amino;
  delegatorsFS?: GenesisState1Amino;
  delegator_reward_list?: DelegatorRewardAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lavanet.lava.dualstaking.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the dualstaking module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  delegationsFS: GenesisState1SDKType;
  delegatorsFS: GenesisState1SDKType;
  delegator_reward_list: DelegatorRewardSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    delegationsFS: GenesisState1.fromPartial({}),
    delegatorsFS: GenesisState1.fromPartial({}),
    delegatorRewardList: []
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.dualstaking.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.delegationsFS !== undefined) {
      GenesisState1.encode(message.delegationsFS, writer.uint32(18).fork()).ldelim();
    }
    if (message.delegatorsFS !== undefined) {
      GenesisState1.encode(message.delegatorsFS, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegatorRewardList) {
      DelegatorReward.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.delegationsFS = GenesisState1.decode(reader, reader.uint32());
          break;
        case 3:
          message.delegatorsFS = GenesisState1.decode(reader, reader.uint32());
          break;
        case 5:
          message.delegatorRewardList.push(DelegatorReward.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.delegationsFS = object.delegationsFS !== undefined && object.delegationsFS !== null ? GenesisState1.fromPartial(object.delegationsFS) : undefined;
    message.delegatorsFS = object.delegatorsFS !== undefined && object.delegatorsFS !== null ? GenesisState1.fromPartial(object.delegatorsFS) : undefined;
    message.delegatorRewardList = object.delegatorRewardList?.map(e => DelegatorReward.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.delegationsFS !== undefined && object.delegationsFS !== null) {
      message.delegationsFS = GenesisState1.fromAmino(object.delegationsFS);
    }
    if (object.delegatorsFS !== undefined && object.delegatorsFS !== null) {
      message.delegatorsFS = GenesisState1.fromAmino(object.delegatorsFS);
    }
    message.delegatorRewardList = object.delegator_reward_list?.map(e => DelegatorReward.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.delegationsFS = message.delegationsFS ? GenesisState1.toAmino(message.delegationsFS) : undefined;
    obj.delegatorsFS = message.delegatorsFS ? GenesisState1.toAmino(message.delegatorsFS) : undefined;
    if (message.delegatorRewardList) {
      obj.delegator_reward_list = message.delegatorRewardList.map(e => e ? DelegatorReward.toAmino(e) : undefined);
    } else {
      obj.delegator_reward_list = message.delegatorRewardList;
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
      typeUrl: "/lavanet.lava.dualstaking.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};