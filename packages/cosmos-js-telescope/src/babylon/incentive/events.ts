//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact, isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * EventsPowerUpdateAtHeight stores a slice of events happened at
 * some specific block height, indexed by the block height.
 */
export interface EventsPowerUpdateAtHeight {
  events: EventPowerUpdate[];
}
export interface EventsPowerUpdateAtHeightProtoMsg {
  typeUrl: "/babylon.incentive.EventsPowerUpdateAtHeight";
  value: Uint8Array;
}
/**
 * EventsPowerUpdateAtHeight stores a slice of events happened at
 * some specific block height, indexed by the block height.
 */
export interface EventsPowerUpdateAtHeightAmino {
  events?: EventPowerUpdateAmino[];
}
export interface EventsPowerUpdateAtHeightAminoMsg {
  type: "/babylon.incentive.EventsPowerUpdateAtHeight";
  value: EventsPowerUpdateAtHeightAmino;
}
/**
 * EventsPowerUpdateAtHeight stores a slice of events happened at
 * some specific block height, indexed by the block height.
 */
export interface EventsPowerUpdateAtHeightSDKType {
  events: EventPowerUpdateSDKType[];
}
/**
 * EventPowerUpdate is an event that affects voting power distribution
 * of BTC rewards, it is indexed by the babylon block height which
 * they were processed at the finality voting power table.
 */
export interface EventPowerUpdate {
  /** BtcActivated means a BTC delegation becomes active. */
  btcActivated?: EventBTCDelegationActivated;
  /** BtcUnbonded means a BTC delegation becomes unbonded. */
  btcUnbonded?: EventBTCDelegationUnbonded;
}
export interface EventPowerUpdateProtoMsg {
  typeUrl: "/babylon.incentive.EventPowerUpdate";
  value: Uint8Array;
}
/**
 * EventPowerUpdate is an event that affects voting power distribution
 * of BTC rewards, it is indexed by the babylon block height which
 * they were processed at the finality voting power table.
 */
export interface EventPowerUpdateAmino {
  /** BtcActivated means a BTC delegation becomes active. */
  btc_activated?: EventBTCDelegationActivatedAmino;
  /** BtcUnbonded means a BTC delegation becomes unbonded. */
  btc_unbonded?: EventBTCDelegationUnbondedAmino;
}
export interface EventPowerUpdateAminoMsg {
  type: "/babylon.incentive.EventPowerUpdate";
  value: EventPowerUpdateAmino;
}
/**
 * EventPowerUpdate is an event that affects voting power distribution
 * of BTC rewards, it is indexed by the babylon block height which
 * they were processed at the finality voting power table.
 */
export interface EventPowerUpdateSDKType {
  btc_activated?: EventBTCDelegationActivatedSDKType;
  btc_unbonded?: EventBTCDelegationUnbondedSDKType;
}
/** EventBTCDelegationActivated event that activated a BTC delegation. */
export interface EventBTCDelegationActivated {
  /** FpAddr is the bbn address of the finality provider */
  fpAddr: string;
  /** BtcDelAddr is the bbn address of the BTC delegator */
  btcDelAddr: string;
  /** TotalSat the number of satoshis delegated */
  totalSat: Uint8Array;
}
export interface EventBTCDelegationActivatedProtoMsg {
  typeUrl: "/babylon.incentive.EventBTCDelegationActivated";
  value: Uint8Array;
}
/** EventBTCDelegationActivated event that activated a BTC delegation. */
export interface EventBTCDelegationActivatedAmino {
  /** FpAddr is the bbn address of the finality provider */
  fp_addr?: string;
  /** BtcDelAddr is the bbn address of the BTC delegator */
  btc_del_addr?: string;
  /** TotalSat the number of satoshis delegated */
  total_sat?: string;
}
export interface EventBTCDelegationActivatedAminoMsg {
  type: "/babylon.incentive.EventBTCDelegationActivated";
  value: EventBTCDelegationActivatedAmino;
}
/** EventBTCDelegationActivated event that activated a BTC delegation. */
export interface EventBTCDelegationActivatedSDKType {
  fp_addr: string;
  btc_del_addr: string;
  total_sat: Uint8Array;
}
/** EventBTCDelegationUnbonded event that unbonded a BTC delegation. */
export interface EventBTCDelegationUnbonded {
  /** FpAddr is the bbn address of the finality provider */
  fpAddr: string;
  /** BtcDelAddr is the bbn address of the BTC delegator */
  btcDelAddr: string;
  /** TotalSat the number of satoshis unbonded withdraw */
  totalSat: Uint8Array;
}
export interface EventBTCDelegationUnbondedProtoMsg {
  typeUrl: "/babylon.incentive.EventBTCDelegationUnbonded";
  value: Uint8Array;
}
/** EventBTCDelegationUnbonded event that unbonded a BTC delegation. */
export interface EventBTCDelegationUnbondedAmino {
  /** FpAddr is the bbn address of the finality provider */
  fp_addr?: string;
  /** BtcDelAddr is the bbn address of the BTC delegator */
  btc_del_addr?: string;
  /** TotalSat the number of satoshis unbonded withdraw */
  total_sat?: string;
}
export interface EventBTCDelegationUnbondedAminoMsg {
  type: "/babylon.incentive.EventBTCDelegationUnbonded";
  value: EventBTCDelegationUnbondedAmino;
}
/** EventBTCDelegationUnbonded event that unbonded a BTC delegation. */
export interface EventBTCDelegationUnbondedSDKType {
  fp_addr: string;
  btc_del_addr: string;
  total_sat: Uint8Array;
}
function createBaseEventsPowerUpdateAtHeight(): EventsPowerUpdateAtHeight {
  return {
    events: []
  };
}
export const EventsPowerUpdateAtHeight = {
  typeUrl: "/babylon.incentive.EventsPowerUpdateAtHeight",
  is(o: any): o is EventsPowerUpdateAtHeight {
    return o && (o.$typeUrl === EventsPowerUpdateAtHeight.typeUrl || Array.isArray(o.events) && (!o.events.length || EventPowerUpdate.is(o.events[0])));
  },
  isSDK(o: any): o is EventsPowerUpdateAtHeightSDKType {
    return o && (o.$typeUrl === EventsPowerUpdateAtHeight.typeUrl || Array.isArray(o.events) && (!o.events.length || EventPowerUpdate.isSDK(o.events[0])));
  },
  isAmino(o: any): o is EventsPowerUpdateAtHeightAmino {
    return o && (o.$typeUrl === EventsPowerUpdateAtHeight.typeUrl || Array.isArray(o.events) && (!o.events.length || EventPowerUpdate.isAmino(o.events[0])));
  },
  encode(message: EventsPowerUpdateAtHeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.events) {
      EventPowerUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventsPowerUpdateAtHeight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventsPowerUpdateAtHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(EventPowerUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventsPowerUpdateAtHeight {
    return {
      events: Array.isArray(object?.events) ? object.events.map((e: any) => EventPowerUpdate.fromJSON(e)) : []
    };
  },
  toJSON(message: EventsPowerUpdateAtHeight): JsonSafe<EventsPowerUpdateAtHeight> {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e ? EventPowerUpdate.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventsPowerUpdateAtHeight>, I>>(object: I): EventsPowerUpdateAtHeight {
    const message = createBaseEventsPowerUpdateAtHeight();
    message.events = object.events?.map(e => EventPowerUpdate.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventsPowerUpdateAtHeightAmino): EventsPowerUpdateAtHeight {
    const message = createBaseEventsPowerUpdateAtHeight();
    message.events = object.events?.map(e => EventPowerUpdate.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventsPowerUpdateAtHeight): EventsPowerUpdateAtHeightAmino {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e ? EventPowerUpdate.toAmino(e) : undefined);
    } else {
      obj.events = message.events;
    }
    return obj;
  },
  fromAminoMsg(object: EventsPowerUpdateAtHeightAminoMsg): EventsPowerUpdateAtHeight {
    return EventsPowerUpdateAtHeight.fromAmino(object.value);
  },
  fromProtoMsg(message: EventsPowerUpdateAtHeightProtoMsg): EventsPowerUpdateAtHeight {
    return EventsPowerUpdateAtHeight.decode(message.value);
  },
  toProto(message: EventsPowerUpdateAtHeight): Uint8Array {
    return EventsPowerUpdateAtHeight.encode(message).finish();
  },
  toProtoMsg(message: EventsPowerUpdateAtHeight): EventsPowerUpdateAtHeightProtoMsg {
    return {
      typeUrl: "/babylon.incentive.EventsPowerUpdateAtHeight",
      value: EventsPowerUpdateAtHeight.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventsPowerUpdateAtHeight.typeUrl, EventsPowerUpdateAtHeight);
function createBaseEventPowerUpdate(): EventPowerUpdate {
  return {
    btcActivated: undefined,
    btcUnbonded: undefined
  };
}
export const EventPowerUpdate = {
  typeUrl: "/babylon.incentive.EventPowerUpdate",
  is(o: any): o is EventPowerUpdate {
    return o && o.$typeUrl === EventPowerUpdate.typeUrl;
  },
  isSDK(o: any): o is EventPowerUpdateSDKType {
    return o && o.$typeUrl === EventPowerUpdate.typeUrl;
  },
  isAmino(o: any): o is EventPowerUpdateAmino {
    return o && o.$typeUrl === EventPowerUpdate.typeUrl;
  },
  encode(message: EventPowerUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.btcActivated !== undefined) {
      EventBTCDelegationActivated.encode(message.btcActivated, writer.uint32(10).fork()).ldelim();
    }
    if (message.btcUnbonded !== undefined) {
      EventBTCDelegationUnbonded.encode(message.btcUnbonded, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPowerUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPowerUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.btcActivated = EventBTCDelegationActivated.decode(reader, reader.uint32());
          break;
        case 2:
          message.btcUnbonded = EventBTCDelegationUnbonded.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventPowerUpdate {
    return {
      btcActivated: isSet(object.btcActivated) ? EventBTCDelegationActivated.fromJSON(object.btcActivated) : undefined,
      btcUnbonded: isSet(object.btcUnbonded) ? EventBTCDelegationUnbonded.fromJSON(object.btcUnbonded) : undefined
    };
  },
  toJSON(message: EventPowerUpdate): JsonSafe<EventPowerUpdate> {
    const obj: any = {};
    message.btcActivated !== undefined && (obj.btcActivated = message.btcActivated ? EventBTCDelegationActivated.toJSON(message.btcActivated) : undefined);
    message.btcUnbonded !== undefined && (obj.btcUnbonded = message.btcUnbonded ? EventBTCDelegationUnbonded.toJSON(message.btcUnbonded) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventPowerUpdate>, I>>(object: I): EventPowerUpdate {
    const message = createBaseEventPowerUpdate();
    message.btcActivated = object.btcActivated !== undefined && object.btcActivated !== null ? EventBTCDelegationActivated.fromPartial(object.btcActivated) : undefined;
    message.btcUnbonded = object.btcUnbonded !== undefined && object.btcUnbonded !== null ? EventBTCDelegationUnbonded.fromPartial(object.btcUnbonded) : undefined;
    return message;
  },
  fromAmino(object: EventPowerUpdateAmino): EventPowerUpdate {
    const message = createBaseEventPowerUpdate();
    if (object.btc_activated !== undefined && object.btc_activated !== null) {
      message.btcActivated = EventBTCDelegationActivated.fromAmino(object.btc_activated);
    }
    if (object.btc_unbonded !== undefined && object.btc_unbonded !== null) {
      message.btcUnbonded = EventBTCDelegationUnbonded.fromAmino(object.btc_unbonded);
    }
    return message;
  },
  toAmino(message: EventPowerUpdate): EventPowerUpdateAmino {
    const obj: any = {};
    obj.btc_activated = message.btcActivated ? EventBTCDelegationActivated.toAmino(message.btcActivated) : undefined;
    obj.btc_unbonded = message.btcUnbonded ? EventBTCDelegationUnbonded.toAmino(message.btcUnbonded) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventPowerUpdateAminoMsg): EventPowerUpdate {
    return EventPowerUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPowerUpdateProtoMsg): EventPowerUpdate {
    return EventPowerUpdate.decode(message.value);
  },
  toProto(message: EventPowerUpdate): Uint8Array {
    return EventPowerUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventPowerUpdate): EventPowerUpdateProtoMsg {
    return {
      typeUrl: "/babylon.incentive.EventPowerUpdate",
      value: EventPowerUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventPowerUpdate.typeUrl, EventPowerUpdate);
function createBaseEventBTCDelegationActivated(): EventBTCDelegationActivated {
  return {
    fpAddr: "",
    btcDelAddr: "",
    totalSat: new Uint8Array()
  };
}
export const EventBTCDelegationActivated = {
  typeUrl: "/babylon.incentive.EventBTCDelegationActivated",
  is(o: any): o is EventBTCDelegationActivated {
    return o && (o.$typeUrl === EventBTCDelegationActivated.typeUrl || typeof o.fpAddr === "string" && typeof o.btcDelAddr === "string" && (o.totalSat instanceof Uint8Array || typeof o.totalSat === "string"));
  },
  isSDK(o: any): o is EventBTCDelegationActivatedSDKType {
    return o && (o.$typeUrl === EventBTCDelegationActivated.typeUrl || typeof o.fp_addr === "string" && typeof o.btc_del_addr === "string" && (o.total_sat instanceof Uint8Array || typeof o.total_sat === "string"));
  },
  isAmino(o: any): o is EventBTCDelegationActivatedAmino {
    return o && (o.$typeUrl === EventBTCDelegationActivated.typeUrl || typeof o.fp_addr === "string" && typeof o.btc_del_addr === "string" && (o.total_sat instanceof Uint8Array || typeof o.total_sat === "string"));
  },
  encode(message: EventBTCDelegationActivated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fpAddr !== "") {
      writer.uint32(10).string(message.fpAddr);
    }
    if (message.btcDelAddr !== "") {
      writer.uint32(18).string(message.btcDelAddr);
    }
    if (message.totalSat.length !== 0) {
      writer.uint32(26).bytes(message.totalSat);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBTCDelegationActivated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBTCDelegationActivated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fpAddr = reader.string();
          break;
        case 2:
          message.btcDelAddr = reader.string();
          break;
        case 3:
          message.totalSat = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventBTCDelegationActivated {
    return {
      fpAddr: isSet(object.fpAddr) ? String(object.fpAddr) : "",
      btcDelAddr: isSet(object.btcDelAddr) ? String(object.btcDelAddr) : "",
      totalSat: isSet(object.totalSat) ? bytesFromBase64(object.totalSat) : new Uint8Array()
    };
  },
  toJSON(message: EventBTCDelegationActivated): JsonSafe<EventBTCDelegationActivated> {
    const obj: any = {};
    message.fpAddr !== undefined && (obj.fpAddr = message.fpAddr);
    message.btcDelAddr !== undefined && (obj.btcDelAddr = message.btcDelAddr);
    message.totalSat !== undefined && (obj.totalSat = base64FromBytes(message.totalSat !== undefined ? message.totalSat : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventBTCDelegationActivated>, I>>(object: I): EventBTCDelegationActivated {
    const message = createBaseEventBTCDelegationActivated();
    message.fpAddr = object.fpAddr ?? "";
    message.btcDelAddr = object.btcDelAddr ?? "";
    message.totalSat = object.totalSat ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EventBTCDelegationActivatedAmino): EventBTCDelegationActivated {
    const message = createBaseEventBTCDelegationActivated();
    if (object.fp_addr !== undefined && object.fp_addr !== null) {
      message.fpAddr = object.fp_addr;
    }
    if (object.btc_del_addr !== undefined && object.btc_del_addr !== null) {
      message.btcDelAddr = object.btc_del_addr;
    }
    if (object.total_sat !== undefined && object.total_sat !== null) {
      message.totalSat = bytesFromBase64(object.total_sat);
    }
    return message;
  },
  toAmino(message: EventBTCDelegationActivated): EventBTCDelegationActivatedAmino {
    const obj: any = {};
    obj.fp_addr = message.fpAddr === "" ? undefined : message.fpAddr;
    obj.btc_del_addr = message.btcDelAddr === "" ? undefined : message.btcDelAddr;
    obj.total_sat = message.totalSat ? base64FromBytes(message.totalSat) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBTCDelegationActivatedAminoMsg): EventBTCDelegationActivated {
    return EventBTCDelegationActivated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBTCDelegationActivatedProtoMsg): EventBTCDelegationActivated {
    return EventBTCDelegationActivated.decode(message.value);
  },
  toProto(message: EventBTCDelegationActivated): Uint8Array {
    return EventBTCDelegationActivated.encode(message).finish();
  },
  toProtoMsg(message: EventBTCDelegationActivated): EventBTCDelegationActivatedProtoMsg {
    return {
      typeUrl: "/babylon.incentive.EventBTCDelegationActivated",
      value: EventBTCDelegationActivated.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBTCDelegationActivated.typeUrl, EventBTCDelegationActivated);
function createBaseEventBTCDelegationUnbonded(): EventBTCDelegationUnbonded {
  return {
    fpAddr: "",
    btcDelAddr: "",
    totalSat: new Uint8Array()
  };
}
export const EventBTCDelegationUnbonded = {
  typeUrl: "/babylon.incentive.EventBTCDelegationUnbonded",
  is(o: any): o is EventBTCDelegationUnbonded {
    return o && (o.$typeUrl === EventBTCDelegationUnbonded.typeUrl || typeof o.fpAddr === "string" && typeof o.btcDelAddr === "string" && (o.totalSat instanceof Uint8Array || typeof o.totalSat === "string"));
  },
  isSDK(o: any): o is EventBTCDelegationUnbondedSDKType {
    return o && (o.$typeUrl === EventBTCDelegationUnbonded.typeUrl || typeof o.fp_addr === "string" && typeof o.btc_del_addr === "string" && (o.total_sat instanceof Uint8Array || typeof o.total_sat === "string"));
  },
  isAmino(o: any): o is EventBTCDelegationUnbondedAmino {
    return o && (o.$typeUrl === EventBTCDelegationUnbonded.typeUrl || typeof o.fp_addr === "string" && typeof o.btc_del_addr === "string" && (o.total_sat instanceof Uint8Array || typeof o.total_sat === "string"));
  },
  encode(message: EventBTCDelegationUnbonded, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fpAddr !== "") {
      writer.uint32(10).string(message.fpAddr);
    }
    if (message.btcDelAddr !== "") {
      writer.uint32(18).string(message.btcDelAddr);
    }
    if (message.totalSat.length !== 0) {
      writer.uint32(26).bytes(message.totalSat);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBTCDelegationUnbonded {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBTCDelegationUnbonded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fpAddr = reader.string();
          break;
        case 2:
          message.btcDelAddr = reader.string();
          break;
        case 3:
          message.totalSat = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventBTCDelegationUnbonded {
    return {
      fpAddr: isSet(object.fpAddr) ? String(object.fpAddr) : "",
      btcDelAddr: isSet(object.btcDelAddr) ? String(object.btcDelAddr) : "",
      totalSat: isSet(object.totalSat) ? bytesFromBase64(object.totalSat) : new Uint8Array()
    };
  },
  toJSON(message: EventBTCDelegationUnbonded): JsonSafe<EventBTCDelegationUnbonded> {
    const obj: any = {};
    message.fpAddr !== undefined && (obj.fpAddr = message.fpAddr);
    message.btcDelAddr !== undefined && (obj.btcDelAddr = message.btcDelAddr);
    message.totalSat !== undefined && (obj.totalSat = base64FromBytes(message.totalSat !== undefined ? message.totalSat : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventBTCDelegationUnbonded>, I>>(object: I): EventBTCDelegationUnbonded {
    const message = createBaseEventBTCDelegationUnbonded();
    message.fpAddr = object.fpAddr ?? "";
    message.btcDelAddr = object.btcDelAddr ?? "";
    message.totalSat = object.totalSat ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EventBTCDelegationUnbondedAmino): EventBTCDelegationUnbonded {
    const message = createBaseEventBTCDelegationUnbonded();
    if (object.fp_addr !== undefined && object.fp_addr !== null) {
      message.fpAddr = object.fp_addr;
    }
    if (object.btc_del_addr !== undefined && object.btc_del_addr !== null) {
      message.btcDelAddr = object.btc_del_addr;
    }
    if (object.total_sat !== undefined && object.total_sat !== null) {
      message.totalSat = bytesFromBase64(object.total_sat);
    }
    return message;
  },
  toAmino(message: EventBTCDelegationUnbonded): EventBTCDelegationUnbondedAmino {
    const obj: any = {};
    obj.fp_addr = message.fpAddr === "" ? undefined : message.fpAddr;
    obj.btc_del_addr = message.btcDelAddr === "" ? undefined : message.btcDelAddr;
    obj.total_sat = message.totalSat ? base64FromBytes(message.totalSat) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBTCDelegationUnbondedAminoMsg): EventBTCDelegationUnbonded {
    return EventBTCDelegationUnbonded.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBTCDelegationUnbondedProtoMsg): EventBTCDelegationUnbonded {
    return EventBTCDelegationUnbonded.decode(message.value);
  },
  toProto(message: EventBTCDelegationUnbonded): Uint8Array {
    return EventBTCDelegationUnbonded.encode(message).finish();
  },
  toProtoMsg(message: EventBTCDelegationUnbonded): EventBTCDelegationUnbondedProtoMsg {
    return {
      typeUrl: "/babylon.incentive.EventBTCDelegationUnbonded",
      value: EventBTCDelegationUnbonded.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBTCDelegationUnbonded.typeUrl, EventBTCDelegationUnbonded);