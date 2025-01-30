//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { GenesisState as GenesisState1 } from "../timerstore/timer";
import { GenesisStateAmino as GenesisState1Amino } from "../timerstore/timer";
import { GenesisStateSDKType as GenesisState1SDKType } from "../timerstore/timer";
import { GenesisState as GenesisState2 } from "../fixationstore/fixation";
import { GenesisStateAmino as GenesisState2Amino } from "../fixationstore/fixation";
import { GenesisStateSDKType as GenesisState2SDKType } from "../fixationstore/fixation";
import { ProviderEpochCu, ProviderEpochCuAmino, ProviderEpochCuSDKType, ProviderEpochComplainerCu, ProviderEpochComplainerCuAmino, ProviderEpochComplainerCuSDKType, ProviderConsumerEpochCu, ProviderConsumerEpochCuAmino, ProviderConsumerEpochCuSDKType } from "./epoch_cu";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface BadgeUsedCu {
  badgeUsedCuKey: Uint8Array;
  usedCu: bigint;
}
export interface BadgeUsedCuProtoMsg {
  typeUrl: "/lavanet.lava.pairing.BadgeUsedCu";
  value: Uint8Array;
}
export interface BadgeUsedCuAmino {
  badge_used_cu_key?: string;
  used_cu?: string;
}
export interface BadgeUsedCuAminoMsg {
  type: "/lavanet.lava.pairing.BadgeUsedCu";
  value: BadgeUsedCuAmino;
}
export interface BadgeUsedCuSDKType {
  badge_used_cu_key: Uint8Array;
  used_cu: bigint;
}
/** GenesisState defines the pairing module's genesis state. */
export interface GenesisState {
  params: Params;
  badgeUsedCuList: BadgeUsedCu[];
  badgesTS: GenesisState1;
  providerQosFS: GenesisState2;
  uniqueEpochSessions: UniqueEpochSessionGenesis[];
  providerEpochCus: ProviderEpochCuGenesis[];
  providerEpochComplainedCus: ProviderEpochComplainerCuGenesis[];
  providerConsumerEpochCus: ProviderConsumerEpochCuGenesis[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lavanet.lava.pairing.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the pairing module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  badgeUsedCuList?: BadgeUsedCuAmino[];
  badgesTS?: GenesisState1Amino;
  providerQosFS?: GenesisState2Amino;
  unique_epoch_sessions?: UniqueEpochSessionGenesisAmino[];
  provider_epoch_cus?: ProviderEpochCuGenesisAmino[];
  provider_epoch_complained_cus?: ProviderEpochComplainerCuGenesisAmino[];
  provider_consumer_epoch_cus?: ProviderConsumerEpochCuGenesisAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lavanet.lava.pairing.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the pairing module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  badgeUsedCuList: BadgeUsedCuSDKType[];
  badgesTS: GenesisState1SDKType;
  providerQosFS: GenesisState2SDKType;
  unique_epoch_sessions: UniqueEpochSessionGenesisSDKType[];
  provider_epoch_cus: ProviderEpochCuGenesisSDKType[];
  provider_epoch_complained_cus: ProviderEpochComplainerCuGenesisSDKType[];
  provider_consumer_epoch_cus: ProviderConsumerEpochCuGenesisSDKType[];
}
export interface UniqueEpochSessionGenesis {
  epoch: bigint;
  provider: string;
  project: string;
  chainId: string;
  sessionId: bigint;
}
export interface UniqueEpochSessionGenesisProtoMsg {
  typeUrl: "/lavanet.lava.pairing.UniqueEpochSessionGenesis";
  value: Uint8Array;
}
export interface UniqueEpochSessionGenesisAmino {
  epoch?: string;
  provider?: string;
  project?: string;
  chain_id?: string;
  session_id?: string;
}
export interface UniqueEpochSessionGenesisAminoMsg {
  type: "/lavanet.lava.pairing.UniqueEpochSessionGenesis";
  value: UniqueEpochSessionGenesisAmino;
}
export interface UniqueEpochSessionGenesisSDKType {
  epoch: bigint;
  provider: string;
  project: string;
  chain_id: string;
  session_id: bigint;
}
export interface ProviderEpochCuGenesis {
  epoch: bigint;
  provider: string;
  chainId: string;
  providerEpochCu: ProviderEpochCu;
}
export interface ProviderEpochCuGenesisProtoMsg {
  typeUrl: "/lavanet.lava.pairing.ProviderEpochCuGenesis";
  value: Uint8Array;
}
export interface ProviderEpochCuGenesisAmino {
  epoch?: string;
  provider?: string;
  chain_id?: string;
  provider_epoch_cu?: ProviderEpochCuAmino;
}
export interface ProviderEpochCuGenesisAminoMsg {
  type: "/lavanet.lava.pairing.ProviderEpochCuGenesis";
  value: ProviderEpochCuGenesisAmino;
}
export interface ProviderEpochCuGenesisSDKType {
  epoch: bigint;
  provider: string;
  chain_id: string;
  provider_epoch_cu: ProviderEpochCuSDKType;
}
export interface ProviderEpochComplainerCuGenesis {
  epoch: bigint;
  provider: string;
  chainId: string;
  providerEpochComplainerCu: ProviderEpochComplainerCu;
}
export interface ProviderEpochComplainerCuGenesisProtoMsg {
  typeUrl: "/lavanet.lava.pairing.ProviderEpochComplainerCuGenesis";
  value: Uint8Array;
}
export interface ProviderEpochComplainerCuGenesisAmino {
  epoch?: string;
  provider?: string;
  chain_id?: string;
  provider_epoch_complainer_cu?: ProviderEpochComplainerCuAmino;
}
export interface ProviderEpochComplainerCuGenesisAminoMsg {
  type: "/lavanet.lava.pairing.ProviderEpochComplainerCuGenesis";
  value: ProviderEpochComplainerCuGenesisAmino;
}
export interface ProviderEpochComplainerCuGenesisSDKType {
  epoch: bigint;
  provider: string;
  chain_id: string;
  provider_epoch_complainer_cu: ProviderEpochComplainerCuSDKType;
}
export interface ProviderConsumerEpochCuGenesis {
  epoch: bigint;
  provider: string;
  project: string;
  chainId: string;
  providerConsumerEpochCu: ProviderConsumerEpochCu;
}
export interface ProviderConsumerEpochCuGenesisProtoMsg {
  typeUrl: "/lavanet.lava.pairing.ProviderConsumerEpochCuGenesis";
  value: Uint8Array;
}
export interface ProviderConsumerEpochCuGenesisAmino {
  epoch?: string;
  provider?: string;
  project?: string;
  chain_id?: string;
  provider_consumer_epoch_cu?: ProviderConsumerEpochCuAmino;
}
export interface ProviderConsumerEpochCuGenesisAminoMsg {
  type: "/lavanet.lava.pairing.ProviderConsumerEpochCuGenesis";
  value: ProviderConsumerEpochCuGenesisAmino;
}
export interface ProviderConsumerEpochCuGenesisSDKType {
  epoch: bigint;
  provider: string;
  project: string;
  chain_id: string;
  provider_consumer_epoch_cu: ProviderConsumerEpochCuSDKType;
}
function createBaseBadgeUsedCu(): BadgeUsedCu {
  return {
    badgeUsedCuKey: new Uint8Array(),
    usedCu: BigInt(0)
  };
}
export const BadgeUsedCu = {
  typeUrl: "/lavanet.lava.pairing.BadgeUsedCu",
  is(o: any): o is BadgeUsedCu {
    return o && (o.$typeUrl === BadgeUsedCu.typeUrl || (o.badgeUsedCuKey instanceof Uint8Array || typeof o.badgeUsedCuKey === "string") && typeof o.usedCu === "bigint");
  },
  isSDK(o: any): o is BadgeUsedCuSDKType {
    return o && (o.$typeUrl === BadgeUsedCu.typeUrl || (o.badge_used_cu_key instanceof Uint8Array || typeof o.badge_used_cu_key === "string") && typeof o.used_cu === "bigint");
  },
  isAmino(o: any): o is BadgeUsedCuAmino {
    return o && (o.$typeUrl === BadgeUsedCu.typeUrl || (o.badge_used_cu_key instanceof Uint8Array || typeof o.badge_used_cu_key === "string") && typeof o.used_cu === "bigint");
  },
  encode(message: BadgeUsedCu, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.badgeUsedCuKey.length !== 0) {
      writer.uint32(10).bytes(message.badgeUsedCuKey);
    }
    if (message.usedCu !== BigInt(0)) {
      writer.uint32(16).uint64(message.usedCu);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BadgeUsedCu {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadgeUsedCu();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badgeUsedCuKey = reader.bytes();
          break;
        case 2:
          message.usedCu = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BadgeUsedCu {
    return {
      badgeUsedCuKey: isSet(object.badgeUsedCuKey) ? bytesFromBase64(object.badgeUsedCuKey) : new Uint8Array(),
      usedCu: isSet(object.usedCu) ? BigInt(object.usedCu.toString()) : BigInt(0)
    };
  },
  toJSON(message: BadgeUsedCu): JsonSafe<BadgeUsedCu> {
    const obj: any = {};
    message.badgeUsedCuKey !== undefined && (obj.badgeUsedCuKey = base64FromBytes(message.badgeUsedCuKey !== undefined ? message.badgeUsedCuKey : new Uint8Array()));
    message.usedCu !== undefined && (obj.usedCu = (message.usedCu || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BadgeUsedCu>, I>>(object: I): BadgeUsedCu {
    const message = createBaseBadgeUsedCu();
    message.badgeUsedCuKey = object.badgeUsedCuKey ?? new Uint8Array();
    message.usedCu = object.usedCu !== undefined && object.usedCu !== null ? BigInt(object.usedCu.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BadgeUsedCuAmino): BadgeUsedCu {
    const message = createBaseBadgeUsedCu();
    if (object.badge_used_cu_key !== undefined && object.badge_used_cu_key !== null) {
      message.badgeUsedCuKey = bytesFromBase64(object.badge_used_cu_key);
    }
    if (object.used_cu !== undefined && object.used_cu !== null) {
      message.usedCu = BigInt(object.used_cu);
    }
    return message;
  },
  toAmino(message: BadgeUsedCu): BadgeUsedCuAmino {
    const obj: any = {};
    obj.badge_used_cu_key = message.badgeUsedCuKey ? base64FromBytes(message.badgeUsedCuKey) : undefined;
    obj.used_cu = message.usedCu !== BigInt(0) ? (message.usedCu?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: BadgeUsedCuAminoMsg): BadgeUsedCu {
    return BadgeUsedCu.fromAmino(object.value);
  },
  fromProtoMsg(message: BadgeUsedCuProtoMsg): BadgeUsedCu {
    return BadgeUsedCu.decode(message.value);
  },
  toProto(message: BadgeUsedCu): Uint8Array {
    return BadgeUsedCu.encode(message).finish();
  },
  toProtoMsg(message: BadgeUsedCu): BadgeUsedCuProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.BadgeUsedCu",
      value: BadgeUsedCu.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BadgeUsedCu.typeUrl, BadgeUsedCu);
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    badgeUsedCuList: [],
    badgesTS: GenesisState1.fromPartial({}),
    providerQosFS: GenesisState2.fromPartial({}),
    uniqueEpochSessions: [],
    providerEpochCus: [],
    providerEpochComplainedCus: [],
    providerConsumerEpochCus: []
  };
}
export const GenesisState = {
  typeUrl: "/lavanet.lava.pairing.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.badgeUsedCuList) && (!o.badgeUsedCuList.length || BadgeUsedCu.is(o.badgeUsedCuList[0])) && GenesisState1.is(o.badgesTS) && GenesisState2.is(o.providerQosFS) && Array.isArray(o.uniqueEpochSessions) && (!o.uniqueEpochSessions.length || UniqueEpochSessionGenesis.is(o.uniqueEpochSessions[0])) && Array.isArray(o.providerEpochCus) && (!o.providerEpochCus.length || ProviderEpochCuGenesis.is(o.providerEpochCus[0])) && Array.isArray(o.providerEpochComplainedCus) && (!o.providerEpochComplainedCus.length || ProviderEpochComplainerCuGenesis.is(o.providerEpochComplainedCus[0])) && Array.isArray(o.providerConsumerEpochCus) && (!o.providerConsumerEpochCus.length || ProviderConsumerEpochCuGenesis.is(o.providerConsumerEpochCus[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.badgeUsedCuList) && (!o.badgeUsedCuList.length || BadgeUsedCu.isSDK(o.badgeUsedCuList[0])) && GenesisState1.isSDK(o.badgesTS) && GenesisState2.isSDK(o.providerQosFS) && Array.isArray(o.unique_epoch_sessions) && (!o.unique_epoch_sessions.length || UniqueEpochSessionGenesis.isSDK(o.unique_epoch_sessions[0])) && Array.isArray(o.provider_epoch_cus) && (!o.provider_epoch_cus.length || ProviderEpochCuGenesis.isSDK(o.provider_epoch_cus[0])) && Array.isArray(o.provider_epoch_complained_cus) && (!o.provider_epoch_complained_cus.length || ProviderEpochComplainerCuGenesis.isSDK(o.provider_epoch_complained_cus[0])) && Array.isArray(o.provider_consumer_epoch_cus) && (!o.provider_consumer_epoch_cus.length || ProviderConsumerEpochCuGenesis.isSDK(o.provider_consumer_epoch_cus[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.badgeUsedCuList) && (!o.badgeUsedCuList.length || BadgeUsedCu.isAmino(o.badgeUsedCuList[0])) && GenesisState1.isAmino(o.badgesTS) && GenesisState2.isAmino(o.providerQosFS) && Array.isArray(o.unique_epoch_sessions) && (!o.unique_epoch_sessions.length || UniqueEpochSessionGenesis.isAmino(o.unique_epoch_sessions[0])) && Array.isArray(o.provider_epoch_cus) && (!o.provider_epoch_cus.length || ProviderEpochCuGenesis.isAmino(o.provider_epoch_cus[0])) && Array.isArray(o.provider_epoch_complained_cus) && (!o.provider_epoch_complained_cus.length || ProviderEpochComplainerCuGenesis.isAmino(o.provider_epoch_complained_cus[0])) && Array.isArray(o.provider_consumer_epoch_cus) && (!o.provider_consumer_epoch_cus.length || ProviderConsumerEpochCuGenesis.isAmino(o.provider_consumer_epoch_cus[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.badgeUsedCuList) {
      BadgeUsedCu.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.badgesTS !== undefined) {
      GenesisState1.encode(message.badgesTS, writer.uint32(50).fork()).ldelim();
    }
    if (message.providerQosFS !== undefined) {
      GenesisState2.encode(message.providerQosFS, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.uniqueEpochSessions) {
      UniqueEpochSessionGenesis.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.providerEpochCus) {
      ProviderEpochCuGenesis.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.providerEpochComplainedCus) {
      ProviderEpochComplainerCuGenesis.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.providerConsumerEpochCus) {
      ProviderConsumerEpochCuGenesis.encode(v!, writer.uint32(90).fork()).ldelim();
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
          message.badgeUsedCuList.push(BadgeUsedCu.decode(reader, reader.uint32()));
          break;
        case 6:
          message.badgesTS = GenesisState1.decode(reader, reader.uint32());
          break;
        case 7:
          message.providerQosFS = GenesisState2.decode(reader, reader.uint32());
          break;
        case 8:
          message.uniqueEpochSessions.push(UniqueEpochSessionGenesis.decode(reader, reader.uint32()));
          break;
        case 9:
          message.providerEpochCus.push(ProviderEpochCuGenesis.decode(reader, reader.uint32()));
          break;
        case 10:
          message.providerEpochComplainedCus.push(ProviderEpochComplainerCuGenesis.decode(reader, reader.uint32()));
          break;
        case 11:
          message.providerConsumerEpochCus.push(ProviderConsumerEpochCuGenesis.decode(reader, reader.uint32()));
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
      badgeUsedCuList: Array.isArray(object?.badgeUsedCuList) ? object.badgeUsedCuList.map((e: any) => BadgeUsedCu.fromJSON(e)) : [],
      badgesTS: isSet(object.badgesTS) ? GenesisState1.fromJSON(object.badgesTS) : undefined,
      providerQosFS: isSet(object.providerQosFS) ? GenesisState2.fromJSON(object.providerQosFS) : undefined,
      uniqueEpochSessions: Array.isArray(object?.uniqueEpochSessions) ? object.uniqueEpochSessions.map((e: any) => UniqueEpochSessionGenesis.fromJSON(e)) : [],
      providerEpochCus: Array.isArray(object?.providerEpochCus) ? object.providerEpochCus.map((e: any) => ProviderEpochCuGenesis.fromJSON(e)) : [],
      providerEpochComplainedCus: Array.isArray(object?.providerEpochComplainedCus) ? object.providerEpochComplainedCus.map((e: any) => ProviderEpochComplainerCuGenesis.fromJSON(e)) : [],
      providerConsumerEpochCus: Array.isArray(object?.providerConsumerEpochCus) ? object.providerConsumerEpochCus.map((e: any) => ProviderConsumerEpochCuGenesis.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.badgeUsedCuList) {
      obj.badgeUsedCuList = message.badgeUsedCuList.map(e => e ? BadgeUsedCu.toJSON(e) : undefined);
    } else {
      obj.badgeUsedCuList = [];
    }
    message.badgesTS !== undefined && (obj.badgesTS = message.badgesTS ? GenesisState1.toJSON(message.badgesTS) : undefined);
    message.providerQosFS !== undefined && (obj.providerQosFS = message.providerQosFS ? GenesisState2.toJSON(message.providerQosFS) : undefined);
    if (message.uniqueEpochSessions) {
      obj.uniqueEpochSessions = message.uniqueEpochSessions.map(e => e ? UniqueEpochSessionGenesis.toJSON(e) : undefined);
    } else {
      obj.uniqueEpochSessions = [];
    }
    if (message.providerEpochCus) {
      obj.providerEpochCus = message.providerEpochCus.map(e => e ? ProviderEpochCuGenesis.toJSON(e) : undefined);
    } else {
      obj.providerEpochCus = [];
    }
    if (message.providerEpochComplainedCus) {
      obj.providerEpochComplainedCus = message.providerEpochComplainedCus.map(e => e ? ProviderEpochComplainerCuGenesis.toJSON(e) : undefined);
    } else {
      obj.providerEpochComplainedCus = [];
    }
    if (message.providerConsumerEpochCus) {
      obj.providerConsumerEpochCus = message.providerConsumerEpochCus.map(e => e ? ProviderConsumerEpochCuGenesis.toJSON(e) : undefined);
    } else {
      obj.providerConsumerEpochCus = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.badgeUsedCuList = object.badgeUsedCuList?.map(e => BadgeUsedCu.fromPartial(e)) || [];
    message.badgesTS = object.badgesTS !== undefined && object.badgesTS !== null ? GenesisState1.fromPartial(object.badgesTS) : undefined;
    message.providerQosFS = object.providerQosFS !== undefined && object.providerQosFS !== null ? GenesisState2.fromPartial(object.providerQosFS) : undefined;
    message.uniqueEpochSessions = object.uniqueEpochSessions?.map(e => UniqueEpochSessionGenesis.fromPartial(e)) || [];
    message.providerEpochCus = object.providerEpochCus?.map(e => ProviderEpochCuGenesis.fromPartial(e)) || [];
    message.providerEpochComplainedCus = object.providerEpochComplainedCus?.map(e => ProviderEpochComplainerCuGenesis.fromPartial(e)) || [];
    message.providerConsumerEpochCus = object.providerConsumerEpochCus?.map(e => ProviderConsumerEpochCuGenesis.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.badgeUsedCuList = object.badgeUsedCuList?.map(e => BadgeUsedCu.fromAmino(e)) || [];
    if (object.badgesTS !== undefined && object.badgesTS !== null) {
      message.badgesTS = GenesisState1.fromAmino(object.badgesTS);
    }
    if (object.providerQosFS !== undefined && object.providerQosFS !== null) {
      message.providerQosFS = GenesisState2.fromAmino(object.providerQosFS);
    }
    message.uniqueEpochSessions = object.unique_epoch_sessions?.map(e => UniqueEpochSessionGenesis.fromAmino(e)) || [];
    message.providerEpochCus = object.provider_epoch_cus?.map(e => ProviderEpochCuGenesis.fromAmino(e)) || [];
    message.providerEpochComplainedCus = object.provider_epoch_complained_cus?.map(e => ProviderEpochComplainerCuGenesis.fromAmino(e)) || [];
    message.providerConsumerEpochCus = object.provider_consumer_epoch_cus?.map(e => ProviderConsumerEpochCuGenesis.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.badgeUsedCuList) {
      obj.badgeUsedCuList = message.badgeUsedCuList.map(e => e ? BadgeUsedCu.toAmino(e) : undefined);
    } else {
      obj.badgeUsedCuList = message.badgeUsedCuList;
    }
    obj.badgesTS = message.badgesTS ? GenesisState1.toAmino(message.badgesTS) : undefined;
    obj.providerQosFS = message.providerQosFS ? GenesisState2.toAmino(message.providerQosFS) : undefined;
    if (message.uniqueEpochSessions) {
      obj.unique_epoch_sessions = message.uniqueEpochSessions.map(e => e ? UniqueEpochSessionGenesis.toAmino(e) : undefined);
    } else {
      obj.unique_epoch_sessions = message.uniqueEpochSessions;
    }
    if (message.providerEpochCus) {
      obj.provider_epoch_cus = message.providerEpochCus.map(e => e ? ProviderEpochCuGenesis.toAmino(e) : undefined);
    } else {
      obj.provider_epoch_cus = message.providerEpochCus;
    }
    if (message.providerEpochComplainedCus) {
      obj.provider_epoch_complained_cus = message.providerEpochComplainedCus.map(e => e ? ProviderEpochComplainerCuGenesis.toAmino(e) : undefined);
    } else {
      obj.provider_epoch_complained_cus = message.providerEpochComplainedCus;
    }
    if (message.providerConsumerEpochCus) {
      obj.provider_consumer_epoch_cus = message.providerConsumerEpochCus.map(e => e ? ProviderConsumerEpochCuGenesis.toAmino(e) : undefined);
    } else {
      obj.provider_consumer_epoch_cus = message.providerConsumerEpochCus;
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
      typeUrl: "/lavanet.lava.pairing.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
function createBaseUniqueEpochSessionGenesis(): UniqueEpochSessionGenesis {
  return {
    epoch: BigInt(0),
    provider: "",
    project: "",
    chainId: "",
    sessionId: BigInt(0)
  };
}
export const UniqueEpochSessionGenesis = {
  typeUrl: "/lavanet.lava.pairing.UniqueEpochSessionGenesis",
  is(o: any): o is UniqueEpochSessionGenesis {
    return o && (o.$typeUrl === UniqueEpochSessionGenesis.typeUrl || typeof o.epoch === "bigint" && typeof o.provider === "string" && typeof o.project === "string" && typeof o.chainId === "string" && typeof o.sessionId === "bigint");
  },
  isSDK(o: any): o is UniqueEpochSessionGenesisSDKType {
    return o && (o.$typeUrl === UniqueEpochSessionGenesis.typeUrl || typeof o.epoch === "bigint" && typeof o.provider === "string" && typeof o.project === "string" && typeof o.chain_id === "string" && typeof o.session_id === "bigint");
  },
  isAmino(o: any): o is UniqueEpochSessionGenesisAmino {
    return o && (o.$typeUrl === UniqueEpochSessionGenesis.typeUrl || typeof o.epoch === "bigint" && typeof o.provider === "string" && typeof o.project === "string" && typeof o.chain_id === "string" && typeof o.session_id === "bigint");
  },
  encode(message: UniqueEpochSessionGenesis, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.project !== "") {
      writer.uint32(26).string(message.project);
    }
    if (message.chainId !== "") {
      writer.uint32(34).string(message.chainId);
    }
    if (message.sessionId !== BigInt(0)) {
      writer.uint32(40).uint64(message.sessionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UniqueEpochSessionGenesis {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniqueEpochSessionGenesis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.uint64();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.project = reader.string();
          break;
        case 4:
          message.chainId = reader.string();
          break;
        case 5:
          message.sessionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UniqueEpochSessionGenesis {
    return {
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      provider: isSet(object.provider) ? String(object.provider) : "",
      project: isSet(object.project) ? String(object.project) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      sessionId: isSet(object.sessionId) ? BigInt(object.sessionId.toString()) : BigInt(0)
    };
  },
  toJSON(message: UniqueEpochSessionGenesis): JsonSafe<UniqueEpochSessionGenesis> {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    message.provider !== undefined && (obj.provider = message.provider);
    message.project !== undefined && (obj.project = message.project);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.sessionId !== undefined && (obj.sessionId = (message.sessionId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UniqueEpochSessionGenesis>, I>>(object: I): UniqueEpochSessionGenesis {
    const message = createBaseUniqueEpochSessionGenesis();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.provider = object.provider ?? "";
    message.project = object.project ?? "";
    message.chainId = object.chainId ?? "";
    message.sessionId = object.sessionId !== undefined && object.sessionId !== null ? BigInt(object.sessionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UniqueEpochSessionGenesisAmino): UniqueEpochSessionGenesis {
    const message = createBaseUniqueEpochSessionGenesis();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.project !== undefined && object.project !== null) {
      message.project = object.project;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.session_id !== undefined && object.session_id !== null) {
      message.sessionId = BigInt(object.session_id);
    }
    return message;
  },
  toAmino(message: UniqueEpochSessionGenesis): UniqueEpochSessionGenesisAmino {
    const obj: any = {};
    obj.epoch = message.epoch !== BigInt(0) ? (message.epoch?.toString)() : undefined;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.project = message.project === "" ? undefined : message.project;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.session_id = message.sessionId !== BigInt(0) ? (message.sessionId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: UniqueEpochSessionGenesisAminoMsg): UniqueEpochSessionGenesis {
    return UniqueEpochSessionGenesis.fromAmino(object.value);
  },
  fromProtoMsg(message: UniqueEpochSessionGenesisProtoMsg): UniqueEpochSessionGenesis {
    return UniqueEpochSessionGenesis.decode(message.value);
  },
  toProto(message: UniqueEpochSessionGenesis): Uint8Array {
    return UniqueEpochSessionGenesis.encode(message).finish();
  },
  toProtoMsg(message: UniqueEpochSessionGenesis): UniqueEpochSessionGenesisProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.UniqueEpochSessionGenesis",
      value: UniqueEpochSessionGenesis.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UniqueEpochSessionGenesis.typeUrl, UniqueEpochSessionGenesis);
function createBaseProviderEpochCuGenesis(): ProviderEpochCuGenesis {
  return {
    epoch: BigInt(0),
    provider: "",
    chainId: "",
    providerEpochCu: ProviderEpochCu.fromPartial({})
  };
}
export const ProviderEpochCuGenesis = {
  typeUrl: "/lavanet.lava.pairing.ProviderEpochCuGenesis",
  is(o: any): o is ProviderEpochCuGenesis {
    return o && (o.$typeUrl === ProviderEpochCuGenesis.typeUrl || typeof o.epoch === "bigint" && typeof o.provider === "string" && typeof o.chainId === "string" && ProviderEpochCu.is(o.providerEpochCu));
  },
  isSDK(o: any): o is ProviderEpochCuGenesisSDKType {
    return o && (o.$typeUrl === ProviderEpochCuGenesis.typeUrl || typeof o.epoch === "bigint" && typeof o.provider === "string" && typeof o.chain_id === "string" && ProviderEpochCu.isSDK(o.provider_epoch_cu));
  },
  isAmino(o: any): o is ProviderEpochCuGenesisAmino {
    return o && (o.$typeUrl === ProviderEpochCuGenesis.typeUrl || typeof o.epoch === "bigint" && typeof o.provider === "string" && typeof o.chain_id === "string" && ProviderEpochCu.isAmino(o.provider_epoch_cu));
  },
  encode(message: ProviderEpochCuGenesis, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.providerEpochCu !== undefined) {
      ProviderEpochCu.encode(message.providerEpochCu, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderEpochCuGenesis {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderEpochCuGenesis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.uint64();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.providerEpochCu = ProviderEpochCu.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProviderEpochCuGenesis {
    return {
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      provider: isSet(object.provider) ? String(object.provider) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      providerEpochCu: isSet(object.providerEpochCu) ? ProviderEpochCu.fromJSON(object.providerEpochCu) : undefined
    };
  },
  toJSON(message: ProviderEpochCuGenesis): JsonSafe<ProviderEpochCuGenesis> {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    message.provider !== undefined && (obj.provider = message.provider);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.providerEpochCu !== undefined && (obj.providerEpochCu = message.providerEpochCu ? ProviderEpochCu.toJSON(message.providerEpochCu) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProviderEpochCuGenesis>, I>>(object: I): ProviderEpochCuGenesis {
    const message = createBaseProviderEpochCuGenesis();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.provider = object.provider ?? "";
    message.chainId = object.chainId ?? "";
    message.providerEpochCu = object.providerEpochCu !== undefined && object.providerEpochCu !== null ? ProviderEpochCu.fromPartial(object.providerEpochCu) : undefined;
    return message;
  },
  fromAmino(object: ProviderEpochCuGenesisAmino): ProviderEpochCuGenesis {
    const message = createBaseProviderEpochCuGenesis();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.provider_epoch_cu !== undefined && object.provider_epoch_cu !== null) {
      message.providerEpochCu = ProviderEpochCu.fromAmino(object.provider_epoch_cu);
    }
    return message;
  },
  toAmino(message: ProviderEpochCuGenesis): ProviderEpochCuGenesisAmino {
    const obj: any = {};
    obj.epoch = message.epoch !== BigInt(0) ? (message.epoch?.toString)() : undefined;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.provider_epoch_cu = message.providerEpochCu ? ProviderEpochCu.toAmino(message.providerEpochCu) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderEpochCuGenesisAminoMsg): ProviderEpochCuGenesis {
    return ProviderEpochCuGenesis.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderEpochCuGenesisProtoMsg): ProviderEpochCuGenesis {
    return ProviderEpochCuGenesis.decode(message.value);
  },
  toProto(message: ProviderEpochCuGenesis): Uint8Array {
    return ProviderEpochCuGenesis.encode(message).finish();
  },
  toProtoMsg(message: ProviderEpochCuGenesis): ProviderEpochCuGenesisProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ProviderEpochCuGenesis",
      value: ProviderEpochCuGenesis.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProviderEpochCuGenesis.typeUrl, ProviderEpochCuGenesis);
function createBaseProviderEpochComplainerCuGenesis(): ProviderEpochComplainerCuGenesis {
  return {
    epoch: BigInt(0),
    provider: "",
    chainId: "",
    providerEpochComplainerCu: ProviderEpochComplainerCu.fromPartial({})
  };
}
export const ProviderEpochComplainerCuGenesis = {
  typeUrl: "/lavanet.lava.pairing.ProviderEpochComplainerCuGenesis",
  is(o: any): o is ProviderEpochComplainerCuGenesis {
    return o && (o.$typeUrl === ProviderEpochComplainerCuGenesis.typeUrl || typeof o.epoch === "bigint" && typeof o.provider === "string" && typeof o.chainId === "string" && ProviderEpochComplainerCu.is(o.providerEpochComplainerCu));
  },
  isSDK(o: any): o is ProviderEpochComplainerCuGenesisSDKType {
    return o && (o.$typeUrl === ProviderEpochComplainerCuGenesis.typeUrl || typeof o.epoch === "bigint" && typeof o.provider === "string" && typeof o.chain_id === "string" && ProviderEpochComplainerCu.isSDK(o.provider_epoch_complainer_cu));
  },
  isAmino(o: any): o is ProviderEpochComplainerCuGenesisAmino {
    return o && (o.$typeUrl === ProviderEpochComplainerCuGenesis.typeUrl || typeof o.epoch === "bigint" && typeof o.provider === "string" && typeof o.chain_id === "string" && ProviderEpochComplainerCu.isAmino(o.provider_epoch_complainer_cu));
  },
  encode(message: ProviderEpochComplainerCuGenesis, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.providerEpochComplainerCu !== undefined) {
      ProviderEpochComplainerCu.encode(message.providerEpochComplainerCu, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderEpochComplainerCuGenesis {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderEpochComplainerCuGenesis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.uint64();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.providerEpochComplainerCu = ProviderEpochComplainerCu.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProviderEpochComplainerCuGenesis {
    return {
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      provider: isSet(object.provider) ? String(object.provider) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      providerEpochComplainerCu: isSet(object.providerEpochComplainerCu) ? ProviderEpochComplainerCu.fromJSON(object.providerEpochComplainerCu) : undefined
    };
  },
  toJSON(message: ProviderEpochComplainerCuGenesis): JsonSafe<ProviderEpochComplainerCuGenesis> {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    message.provider !== undefined && (obj.provider = message.provider);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.providerEpochComplainerCu !== undefined && (obj.providerEpochComplainerCu = message.providerEpochComplainerCu ? ProviderEpochComplainerCu.toJSON(message.providerEpochComplainerCu) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProviderEpochComplainerCuGenesis>, I>>(object: I): ProviderEpochComplainerCuGenesis {
    const message = createBaseProviderEpochComplainerCuGenesis();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.provider = object.provider ?? "";
    message.chainId = object.chainId ?? "";
    message.providerEpochComplainerCu = object.providerEpochComplainerCu !== undefined && object.providerEpochComplainerCu !== null ? ProviderEpochComplainerCu.fromPartial(object.providerEpochComplainerCu) : undefined;
    return message;
  },
  fromAmino(object: ProviderEpochComplainerCuGenesisAmino): ProviderEpochComplainerCuGenesis {
    const message = createBaseProviderEpochComplainerCuGenesis();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.provider_epoch_complainer_cu !== undefined && object.provider_epoch_complainer_cu !== null) {
      message.providerEpochComplainerCu = ProviderEpochComplainerCu.fromAmino(object.provider_epoch_complainer_cu);
    }
    return message;
  },
  toAmino(message: ProviderEpochComplainerCuGenesis): ProviderEpochComplainerCuGenesisAmino {
    const obj: any = {};
    obj.epoch = message.epoch !== BigInt(0) ? (message.epoch?.toString)() : undefined;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.provider_epoch_complainer_cu = message.providerEpochComplainerCu ? ProviderEpochComplainerCu.toAmino(message.providerEpochComplainerCu) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderEpochComplainerCuGenesisAminoMsg): ProviderEpochComplainerCuGenesis {
    return ProviderEpochComplainerCuGenesis.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderEpochComplainerCuGenesisProtoMsg): ProviderEpochComplainerCuGenesis {
    return ProviderEpochComplainerCuGenesis.decode(message.value);
  },
  toProto(message: ProviderEpochComplainerCuGenesis): Uint8Array {
    return ProviderEpochComplainerCuGenesis.encode(message).finish();
  },
  toProtoMsg(message: ProviderEpochComplainerCuGenesis): ProviderEpochComplainerCuGenesisProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ProviderEpochComplainerCuGenesis",
      value: ProviderEpochComplainerCuGenesis.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProviderEpochComplainerCuGenesis.typeUrl, ProviderEpochComplainerCuGenesis);
function createBaseProviderConsumerEpochCuGenesis(): ProviderConsumerEpochCuGenesis {
  return {
    epoch: BigInt(0),
    provider: "",
    project: "",
    chainId: "",
    providerConsumerEpochCu: ProviderConsumerEpochCu.fromPartial({})
  };
}
export const ProviderConsumerEpochCuGenesis = {
  typeUrl: "/lavanet.lava.pairing.ProviderConsumerEpochCuGenesis",
  is(o: any): o is ProviderConsumerEpochCuGenesis {
    return o && (o.$typeUrl === ProviderConsumerEpochCuGenesis.typeUrl || typeof o.epoch === "bigint" && typeof o.provider === "string" && typeof o.project === "string" && typeof o.chainId === "string" && ProviderConsumerEpochCu.is(o.providerConsumerEpochCu));
  },
  isSDK(o: any): o is ProviderConsumerEpochCuGenesisSDKType {
    return o && (o.$typeUrl === ProviderConsumerEpochCuGenesis.typeUrl || typeof o.epoch === "bigint" && typeof o.provider === "string" && typeof o.project === "string" && typeof o.chain_id === "string" && ProviderConsumerEpochCu.isSDK(o.provider_consumer_epoch_cu));
  },
  isAmino(o: any): o is ProviderConsumerEpochCuGenesisAmino {
    return o && (o.$typeUrl === ProviderConsumerEpochCuGenesis.typeUrl || typeof o.epoch === "bigint" && typeof o.provider === "string" && typeof o.project === "string" && typeof o.chain_id === "string" && ProviderConsumerEpochCu.isAmino(o.provider_consumer_epoch_cu));
  },
  encode(message: ProviderConsumerEpochCuGenesis, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.project !== "") {
      writer.uint32(26).string(message.project);
    }
    if (message.chainId !== "") {
      writer.uint32(34).string(message.chainId);
    }
    if (message.providerConsumerEpochCu !== undefined) {
      ProviderConsumerEpochCu.encode(message.providerConsumerEpochCu, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderConsumerEpochCuGenesis {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderConsumerEpochCuGenesis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.uint64();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.project = reader.string();
          break;
        case 4:
          message.chainId = reader.string();
          break;
        case 5:
          message.providerConsumerEpochCu = ProviderConsumerEpochCu.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProviderConsumerEpochCuGenesis {
    return {
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      provider: isSet(object.provider) ? String(object.provider) : "",
      project: isSet(object.project) ? String(object.project) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      providerConsumerEpochCu: isSet(object.providerConsumerEpochCu) ? ProviderConsumerEpochCu.fromJSON(object.providerConsumerEpochCu) : undefined
    };
  },
  toJSON(message: ProviderConsumerEpochCuGenesis): JsonSafe<ProviderConsumerEpochCuGenesis> {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    message.provider !== undefined && (obj.provider = message.provider);
    message.project !== undefined && (obj.project = message.project);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.providerConsumerEpochCu !== undefined && (obj.providerConsumerEpochCu = message.providerConsumerEpochCu ? ProviderConsumerEpochCu.toJSON(message.providerConsumerEpochCu) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProviderConsumerEpochCuGenesis>, I>>(object: I): ProviderConsumerEpochCuGenesis {
    const message = createBaseProviderConsumerEpochCuGenesis();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.provider = object.provider ?? "";
    message.project = object.project ?? "";
    message.chainId = object.chainId ?? "";
    message.providerConsumerEpochCu = object.providerConsumerEpochCu !== undefined && object.providerConsumerEpochCu !== null ? ProviderConsumerEpochCu.fromPartial(object.providerConsumerEpochCu) : undefined;
    return message;
  },
  fromAmino(object: ProviderConsumerEpochCuGenesisAmino): ProviderConsumerEpochCuGenesis {
    const message = createBaseProviderConsumerEpochCuGenesis();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.project !== undefined && object.project !== null) {
      message.project = object.project;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.provider_consumer_epoch_cu !== undefined && object.provider_consumer_epoch_cu !== null) {
      message.providerConsumerEpochCu = ProviderConsumerEpochCu.fromAmino(object.provider_consumer_epoch_cu);
    }
    return message;
  },
  toAmino(message: ProviderConsumerEpochCuGenesis): ProviderConsumerEpochCuGenesisAmino {
    const obj: any = {};
    obj.epoch = message.epoch !== BigInt(0) ? (message.epoch?.toString)() : undefined;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.project = message.project === "" ? undefined : message.project;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.provider_consumer_epoch_cu = message.providerConsumerEpochCu ? ProviderConsumerEpochCu.toAmino(message.providerConsumerEpochCu) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderConsumerEpochCuGenesisAminoMsg): ProviderConsumerEpochCuGenesis {
    return ProviderConsumerEpochCuGenesis.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderConsumerEpochCuGenesisProtoMsg): ProviderConsumerEpochCuGenesis {
    return ProviderConsumerEpochCuGenesis.decode(message.value);
  },
  toProto(message: ProviderConsumerEpochCuGenesis): Uint8Array {
    return ProviderConsumerEpochCuGenesis.encode(message).finish();
  },
  toProtoMsg(message: ProviderConsumerEpochCuGenesis): ProviderConsumerEpochCuGenesisProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ProviderConsumerEpochCuGenesis",
      value: ProviderConsumerEpochCuGenesis.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProviderConsumerEpochCuGenesis.typeUrl, ProviderConsumerEpochCuGenesis);