//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface TrackedCu {
  /** CU counter for CU after QoS consideration */
  cu: bigint;
}
export interface TrackedCuProtoMsg {
  typeUrl: "/lavanet.lava.subscription.TrackedCu";
  value: Uint8Array;
}
export interface TrackedCuAmino {
  /** CU counter for CU after QoS consideration */
  cu?: string;
}
export interface TrackedCuAminoMsg {
  type: "/lavanet.lava.subscription.TrackedCu";
  value: TrackedCuAmino;
}
export interface TrackedCuSDKType {
  cu: bigint;
}
export interface CuTrackerTimerData {
  /** sub block */
  block: bigint;
  /** credit to be used for rewards */
  credit: Coin;
}
export interface CuTrackerTimerDataProtoMsg {
  typeUrl: "/lavanet.lava.subscription.CuTrackerTimerData";
  value: Uint8Array;
}
export interface CuTrackerTimerDataAmino {
  /** sub block */
  block?: string;
  /** credit to be used for rewards */
  credit?: CoinAmino;
}
export interface CuTrackerTimerDataAminoMsg {
  type: "/lavanet.lava.subscription.CuTrackerTimerData";
  value: CuTrackerTimerDataAmino;
}
export interface CuTrackerTimerDataSDKType {
  block: bigint;
  credit: CoinSDKType;
}
export interface TrackedCuInfo {
  provider: string;
  chainID: string;
  trackedCu: bigint;
  block: bigint;
}
export interface TrackedCuInfoProtoMsg {
  typeUrl: "/lavanet.lava.subscription.TrackedCuInfo";
  value: Uint8Array;
}
export interface TrackedCuInfoAmino {
  provider?: string;
  chainID?: string;
  trackedCu?: string;
  block?: string;
}
export interface TrackedCuInfoAminoMsg {
  type: "/lavanet.lava.subscription.TrackedCuInfo";
  value: TrackedCuInfoAmino;
}
export interface TrackedCuInfoSDKType {
  provider: string;
  chainID: string;
  trackedCu: bigint;
  block: bigint;
}
function createBaseTrackedCu(): TrackedCu {
  return {
    cu: BigInt(0)
  };
}
export const TrackedCu = {
  typeUrl: "/lavanet.lava.subscription.TrackedCu",
  is(o: any): o is TrackedCu {
    return o && (o.$typeUrl === TrackedCu.typeUrl || typeof o.cu === "bigint");
  },
  isSDK(o: any): o is TrackedCuSDKType {
    return o && (o.$typeUrl === TrackedCu.typeUrl || typeof o.cu === "bigint");
  },
  isAmino(o: any): o is TrackedCuAmino {
    return o && (o.$typeUrl === TrackedCu.typeUrl || typeof o.cu === "bigint");
  },
  encode(message: TrackedCu, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cu !== BigInt(0)) {
      writer.uint32(8).uint64(message.cu);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TrackedCu {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrackedCu();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cu = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TrackedCu {
    return {
      cu: isSet(object.cu) ? BigInt(object.cu.toString()) : BigInt(0)
    };
  },
  toJSON(message: TrackedCu): JsonSafe<TrackedCu> {
    const obj: any = {};
    message.cu !== undefined && (obj.cu = (message.cu || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TrackedCu>, I>>(object: I): TrackedCu {
    const message = createBaseTrackedCu();
    message.cu = object.cu !== undefined && object.cu !== null ? BigInt(object.cu.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TrackedCuAmino): TrackedCu {
    const message = createBaseTrackedCu();
    if (object.cu !== undefined && object.cu !== null) {
      message.cu = BigInt(object.cu);
    }
    return message;
  },
  toAmino(message: TrackedCu): TrackedCuAmino {
    const obj: any = {};
    obj.cu = message.cu !== BigInt(0) ? (message.cu?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: TrackedCuAminoMsg): TrackedCu {
    return TrackedCu.fromAmino(object.value);
  },
  fromProtoMsg(message: TrackedCuProtoMsg): TrackedCu {
    return TrackedCu.decode(message.value);
  },
  toProto(message: TrackedCu): Uint8Array {
    return TrackedCu.encode(message).finish();
  },
  toProtoMsg(message: TrackedCu): TrackedCuProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.TrackedCu",
      value: TrackedCu.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TrackedCu.typeUrl, TrackedCu);
function createBaseCuTrackerTimerData(): CuTrackerTimerData {
  return {
    block: BigInt(0),
    credit: Coin.fromPartial({})
  };
}
export const CuTrackerTimerData = {
  typeUrl: "/lavanet.lava.subscription.CuTrackerTimerData",
  is(o: any): o is CuTrackerTimerData {
    return o && (o.$typeUrl === CuTrackerTimerData.typeUrl || typeof o.block === "bigint" && Coin.is(o.credit));
  },
  isSDK(o: any): o is CuTrackerTimerDataSDKType {
    return o && (o.$typeUrl === CuTrackerTimerData.typeUrl || typeof o.block === "bigint" && Coin.isSDK(o.credit));
  },
  isAmino(o: any): o is CuTrackerTimerDataAmino {
    return o && (o.$typeUrl === CuTrackerTimerData.typeUrl || typeof o.block === "bigint" && Coin.isAmino(o.credit));
  },
  encode(message: CuTrackerTimerData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block !== BigInt(0)) {
      writer.uint32(8).uint64(message.block);
    }
    if (message.credit !== undefined) {
      Coin.encode(message.credit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CuTrackerTimerData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCuTrackerTimerData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;
        case 2:
          message.credit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CuTrackerTimerData {
    return {
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0),
      credit: isSet(object.credit) ? Coin.fromJSON(object.credit) : undefined
    };
  },
  toJSON(message: CuTrackerTimerData): JsonSafe<CuTrackerTimerData> {
    const obj: any = {};
    message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
    message.credit !== undefined && (obj.credit = message.credit ? Coin.toJSON(message.credit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CuTrackerTimerData>, I>>(object: I): CuTrackerTimerData {
    const message = createBaseCuTrackerTimerData();
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.credit = object.credit !== undefined && object.credit !== null ? Coin.fromPartial(object.credit) : undefined;
    return message;
  },
  fromAmino(object: CuTrackerTimerDataAmino): CuTrackerTimerData {
    const message = createBaseCuTrackerTimerData();
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    if (object.credit !== undefined && object.credit !== null) {
      message.credit = Coin.fromAmino(object.credit);
    }
    return message;
  },
  toAmino(message: CuTrackerTimerData): CuTrackerTimerDataAmino {
    const obj: any = {};
    obj.block = message.block !== BigInt(0) ? (message.block?.toString)() : undefined;
    obj.credit = message.credit ? Coin.toAmino(message.credit) : undefined;
    return obj;
  },
  fromAminoMsg(object: CuTrackerTimerDataAminoMsg): CuTrackerTimerData {
    return CuTrackerTimerData.fromAmino(object.value);
  },
  fromProtoMsg(message: CuTrackerTimerDataProtoMsg): CuTrackerTimerData {
    return CuTrackerTimerData.decode(message.value);
  },
  toProto(message: CuTrackerTimerData): Uint8Array {
    return CuTrackerTimerData.encode(message).finish();
  },
  toProtoMsg(message: CuTrackerTimerData): CuTrackerTimerDataProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.CuTrackerTimerData",
      value: CuTrackerTimerData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CuTrackerTimerData.typeUrl, CuTrackerTimerData);
function createBaseTrackedCuInfo(): TrackedCuInfo {
  return {
    provider: "",
    chainID: "",
    trackedCu: BigInt(0),
    block: BigInt(0)
  };
}
export const TrackedCuInfo = {
  typeUrl: "/lavanet.lava.subscription.TrackedCuInfo",
  is(o: any): o is TrackedCuInfo {
    return o && (o.$typeUrl === TrackedCuInfo.typeUrl || typeof o.provider === "string" && typeof o.chainID === "string" && typeof o.trackedCu === "bigint" && typeof o.block === "bigint");
  },
  isSDK(o: any): o is TrackedCuInfoSDKType {
    return o && (o.$typeUrl === TrackedCuInfo.typeUrl || typeof o.provider === "string" && typeof o.chainID === "string" && typeof o.trackedCu === "bigint" && typeof o.block === "bigint");
  },
  isAmino(o: any): o is TrackedCuInfoAmino {
    return o && (o.$typeUrl === TrackedCuInfo.typeUrl || typeof o.provider === "string" && typeof o.chainID === "string" && typeof o.trackedCu === "bigint" && typeof o.block === "bigint");
  },
  encode(message: TrackedCuInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.chainID !== "") {
      writer.uint32(18).string(message.chainID);
    }
    if (message.trackedCu !== BigInt(0)) {
      writer.uint32(24).uint64(message.trackedCu);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(32).uint64(message.block);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TrackedCuInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrackedCuInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.chainID = reader.string();
          break;
        case 3:
          message.trackedCu = reader.uint64();
          break;
        case 4:
          message.block = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TrackedCuInfo {
    return {
      provider: isSet(object.provider) ? String(object.provider) : "",
      chainID: isSet(object.chainID) ? String(object.chainID) : "",
      trackedCu: isSet(object.trackedCu) ? BigInt(object.trackedCu.toString()) : BigInt(0),
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0)
    };
  },
  toJSON(message: TrackedCuInfo): JsonSafe<TrackedCuInfo> {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.trackedCu !== undefined && (obj.trackedCu = (message.trackedCu || BigInt(0)).toString());
    message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TrackedCuInfo>, I>>(object: I): TrackedCuInfo {
    const message = createBaseTrackedCuInfo();
    message.provider = object.provider ?? "";
    message.chainID = object.chainID ?? "";
    message.trackedCu = object.trackedCu !== undefined && object.trackedCu !== null ? BigInt(object.trackedCu.toString()) : BigInt(0);
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TrackedCuInfoAmino): TrackedCuInfo {
    const message = createBaseTrackedCuInfo();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID;
    }
    if (object.trackedCu !== undefined && object.trackedCu !== null) {
      message.trackedCu = BigInt(object.trackedCu);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    return message;
  },
  toAmino(message: TrackedCuInfo): TrackedCuInfoAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.chainID = message.chainID === "" ? undefined : message.chainID;
    obj.trackedCu = message.trackedCu !== BigInt(0) ? (message.trackedCu?.toString)() : undefined;
    obj.block = message.block !== BigInt(0) ? (message.block?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: TrackedCuInfoAminoMsg): TrackedCuInfo {
    return TrackedCuInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: TrackedCuInfoProtoMsg): TrackedCuInfo {
    return TrackedCuInfo.decode(message.value);
  },
  toProto(message: TrackedCuInfo): Uint8Array {
    return TrackedCuInfo.encode(message).finish();
  },
  toProtoMsg(message: TrackedCuInfo): TrackedCuInfoProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.TrackedCuInfo",
      value: TrackedCuInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TrackedCuInfo.typeUrl, TrackedCuInfo);