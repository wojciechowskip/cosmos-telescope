//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DelegatorReward, DelegatorRewardAmino, DelegatorRewardSDKType } from "./delegator_reward";
import { Delegation, DelegationAmino, DelegationSDKType } from "./delegate";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the dualstaking module's genesis state. */
export interface GenesisState {
  params: Params;
  delegatorRewardList: DelegatorReward[];
  delegations: Delegation[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lavanet.lava.dualstaking.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the dualstaking module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  delegator_reward_list?: DelegatorRewardAmino[];
  Delegations?: DelegationAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lavanet.lava.dualstaking.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the dualstaking module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  delegator_reward_list: DelegatorRewardSDKType[];
  Delegations: DelegationSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    delegatorRewardList: [],
    delegations: []
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.dualstaking.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.delegatorRewardList) && (!o.delegatorRewardList.length || DelegatorReward.is(o.delegatorRewardList[0])) && Array.isArray(o.delegations) && (!o.delegations.length || Delegation.is(o.delegations[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.delegator_reward_list) && (!o.delegator_reward_list.length || DelegatorReward.isSDK(o.delegator_reward_list[0])) && Array.isArray(o.Delegations) && (!o.Delegations.length || Delegation.isSDK(o.Delegations[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.delegator_reward_list) && (!o.delegator_reward_list.length || DelegatorReward.isAmino(o.delegator_reward_list[0])) && Array.isArray(o.Delegations) && (!o.Delegations.length || Delegation.isAmino(o.Delegations[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.delegatorRewardList) {
      DelegatorReward.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(50).fork()).ldelim();
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
        case 5:
          message.delegatorRewardList.push(DelegatorReward.decode(reader, reader.uint32()));
          break;
        case 6:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
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
      delegatorRewardList: Array.isArray(object?.delegatorRewardList) ? object.delegatorRewardList.map((e: any) => DelegatorReward.fromJSON(e)) : [],
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => Delegation.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.delegatorRewardList) {
      obj.delegatorRewardList = message.delegatorRewardList.map(e => e ? DelegatorReward.toJSON(e) : undefined);
    } else {
      obj.delegatorRewardList = [];
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toJSON(e) : undefined);
    } else {
      obj.delegations = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.delegatorRewardList = object.delegatorRewardList?.map(e => DelegatorReward.fromPartial(e)) || [];
    message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.delegatorRewardList = object.delegator_reward_list?.map(e => DelegatorReward.fromAmino(e)) || [];
    message.delegations = object.Delegations?.map(e => Delegation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.delegatorRewardList) {
      obj.delegator_reward_list = message.delegatorRewardList.map(e => e ? DelegatorReward.toAmino(e) : undefined);
    } else {
      obj.delegator_reward_list = message.delegatorRewardList;
    }
    if (message.delegations) {
      obj.Delegations = message.delegations.map(e => e ? Delegation.toAmino(e) : undefined);
    } else {
      obj.Delegations = message.delegations;
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
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);