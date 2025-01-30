//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * UniqueEpochSession is used to detect double spend attacks
 * It's kept in a epoch-prefixed store with a unique index: provider, project ID, chain ID and session ID
 */
export interface UniqueEpochSession {}
export interface UniqueEpochSessionProtoMsg {
  typeUrl: "/lavanet.lava.pairing.UniqueEpochSession";
  value: Uint8Array;
}
/**
 * UniqueEpochSession is used to detect double spend attacks
 * It's kept in a epoch-prefixed store with a unique index: provider, project ID, chain ID and session ID
 */
export interface UniqueEpochSessionAmino {}
export interface UniqueEpochSessionAminoMsg {
  type: "/lavanet.lava.pairing.UniqueEpochSession";
  value: UniqueEpochSessionAmino;
}
/**
 * UniqueEpochSession is used to detect double spend attacks
 * It's kept in a epoch-prefixed store with a unique index: provider, project ID, chain ID and session ID
 */
export interface UniqueEpochSessionSDKType {}
/**
 * ProviderEpochCu is used to track the CU of a specific provider in a specific epoch
 * It's kept in a epoch-prefixed store with a unique index: provider address
 */
export interface ProviderEpochCu {
  servicedCu: bigint;
}
export interface ProviderEpochCuProtoMsg {
  typeUrl: "/lavanet.lava.pairing.ProviderEpochCu";
  value: Uint8Array;
}
/**
 * ProviderEpochCu is used to track the CU of a specific provider in a specific epoch
 * It's kept in a epoch-prefixed store with a unique index: provider address
 */
export interface ProviderEpochCuAmino {
  serviced_cu?: string;
}
export interface ProviderEpochCuAminoMsg {
  type: "/lavanet.lava.pairing.ProviderEpochCu";
  value: ProviderEpochCuAmino;
}
/**
 * ProviderEpochCu is used to track the CU of a specific provider in a specific epoch
 * It's kept in a epoch-prefixed store with a unique index: provider address
 */
export interface ProviderEpochCuSDKType {
  serviced_cu: bigint;
}
/**
 * ProviderEpochComplainerCu is used to track the CU complained of a specific provider in a specific epoch
 * It's kept in a epoch-prefixed store with a unique index: provider address
 */
export interface ProviderEpochComplainerCu {
  complainersCu: bigint;
}
export interface ProviderEpochComplainerCuProtoMsg {
  typeUrl: "/lavanet.lava.pairing.ProviderEpochComplainerCu";
  value: Uint8Array;
}
/**
 * ProviderEpochComplainerCu is used to track the CU complained of a specific provider in a specific epoch
 * It's kept in a epoch-prefixed store with a unique index: provider address
 */
export interface ProviderEpochComplainerCuAmino {
  complainers_cu?: string;
}
export interface ProviderEpochComplainerCuAminoMsg {
  type: "/lavanet.lava.pairing.ProviderEpochComplainerCu";
  value: ProviderEpochComplainerCuAmino;
}
/**
 * ProviderEpochComplainerCu is used to track the CU complained of a specific provider in a specific epoch
 * It's kept in a epoch-prefixed store with a unique index: provider address
 */
export interface ProviderEpochComplainerCuSDKType {
  complainers_cu: bigint;
}
/**
 * ProviderConsumerEpochCu is used to track the CU between a specific provider and
 * consumer in a specific epoch
 * It's kept in a epoch-prefixed store with a unique index: provider and project ID
 */
export interface ProviderConsumerEpochCu {
  cu: bigint;
}
export interface ProviderConsumerEpochCuProtoMsg {
  typeUrl: "/lavanet.lava.pairing.ProviderConsumerEpochCu";
  value: Uint8Array;
}
/**
 * ProviderConsumerEpochCu is used to track the CU between a specific provider and
 * consumer in a specific epoch
 * It's kept in a epoch-prefixed store with a unique index: provider and project ID
 */
export interface ProviderConsumerEpochCuAmino {
  cu?: string;
}
export interface ProviderConsumerEpochCuAminoMsg {
  type: "/lavanet.lava.pairing.ProviderConsumerEpochCu";
  value: ProviderConsumerEpochCuAmino;
}
/**
 * ProviderConsumerEpochCu is used to track the CU between a specific provider and
 * consumer in a specific epoch
 * It's kept in a epoch-prefixed store with a unique index: provider and project ID
 */
export interface ProviderConsumerEpochCuSDKType {
  cu: bigint;
}
function createBaseUniqueEpochSession(): UniqueEpochSession {
  return {};
}
export const UniqueEpochSession = {
  typeUrl: "/lavanet.lava.pairing.UniqueEpochSession",
  is(o: any): o is UniqueEpochSession {
    return o && o.$typeUrl === UniqueEpochSession.typeUrl;
  },
  isSDK(o: any): o is UniqueEpochSessionSDKType {
    return o && o.$typeUrl === UniqueEpochSession.typeUrl;
  },
  isAmino(o: any): o is UniqueEpochSessionAmino {
    return o && o.$typeUrl === UniqueEpochSession.typeUrl;
  },
  encode(_: UniqueEpochSession, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UniqueEpochSession {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniqueEpochSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): UniqueEpochSession {
    return {};
  },
  toJSON(_: UniqueEpochSession): JsonSafe<UniqueEpochSession> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UniqueEpochSession>, I>>(_: I): UniqueEpochSession {
    const message = createBaseUniqueEpochSession();
    return message;
  },
  fromAmino(_: UniqueEpochSessionAmino): UniqueEpochSession {
    const message = createBaseUniqueEpochSession();
    return message;
  },
  toAmino(_: UniqueEpochSession): UniqueEpochSessionAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: UniqueEpochSessionAminoMsg): UniqueEpochSession {
    return UniqueEpochSession.fromAmino(object.value);
  },
  fromProtoMsg(message: UniqueEpochSessionProtoMsg): UniqueEpochSession {
    return UniqueEpochSession.decode(message.value);
  },
  toProto(message: UniqueEpochSession): Uint8Array {
    return UniqueEpochSession.encode(message).finish();
  },
  toProtoMsg(message: UniqueEpochSession): UniqueEpochSessionProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.UniqueEpochSession",
      value: UniqueEpochSession.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UniqueEpochSession.typeUrl, UniqueEpochSession);
function createBaseProviderEpochCu(): ProviderEpochCu {
  return {
    servicedCu: BigInt(0)
  };
}
export const ProviderEpochCu = {
  typeUrl: "/lavanet.lava.pairing.ProviderEpochCu",
  is(o: any): o is ProviderEpochCu {
    return o && (o.$typeUrl === ProviderEpochCu.typeUrl || typeof o.servicedCu === "bigint");
  },
  isSDK(o: any): o is ProviderEpochCuSDKType {
    return o && (o.$typeUrl === ProviderEpochCu.typeUrl || typeof o.serviced_cu === "bigint");
  },
  isAmino(o: any): o is ProviderEpochCuAmino {
    return o && (o.$typeUrl === ProviderEpochCu.typeUrl || typeof o.serviced_cu === "bigint");
  },
  encode(message: ProviderEpochCu, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.servicedCu !== BigInt(0)) {
      writer.uint32(8).uint64(message.servicedCu);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderEpochCu {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderEpochCu();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.servicedCu = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProviderEpochCu {
    return {
      servicedCu: isSet(object.servicedCu) ? BigInt(object.servicedCu.toString()) : BigInt(0)
    };
  },
  toJSON(message: ProviderEpochCu): JsonSafe<ProviderEpochCu> {
    const obj: any = {};
    message.servicedCu !== undefined && (obj.servicedCu = (message.servicedCu || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProviderEpochCu>, I>>(object: I): ProviderEpochCu {
    const message = createBaseProviderEpochCu();
    message.servicedCu = object.servicedCu !== undefined && object.servicedCu !== null ? BigInt(object.servicedCu.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProviderEpochCuAmino): ProviderEpochCu {
    const message = createBaseProviderEpochCu();
    if (object.serviced_cu !== undefined && object.serviced_cu !== null) {
      message.servicedCu = BigInt(object.serviced_cu);
    }
    return message;
  },
  toAmino(message: ProviderEpochCu): ProviderEpochCuAmino {
    const obj: any = {};
    obj.serviced_cu = message.servicedCu !== BigInt(0) ? (message.servicedCu?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderEpochCuAminoMsg): ProviderEpochCu {
    return ProviderEpochCu.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderEpochCuProtoMsg): ProviderEpochCu {
    return ProviderEpochCu.decode(message.value);
  },
  toProto(message: ProviderEpochCu): Uint8Array {
    return ProviderEpochCu.encode(message).finish();
  },
  toProtoMsg(message: ProviderEpochCu): ProviderEpochCuProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ProviderEpochCu",
      value: ProviderEpochCu.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProviderEpochCu.typeUrl, ProviderEpochCu);
function createBaseProviderEpochComplainerCu(): ProviderEpochComplainerCu {
  return {
    complainersCu: BigInt(0)
  };
}
export const ProviderEpochComplainerCu = {
  typeUrl: "/lavanet.lava.pairing.ProviderEpochComplainerCu",
  is(o: any): o is ProviderEpochComplainerCu {
    return o && (o.$typeUrl === ProviderEpochComplainerCu.typeUrl || typeof o.complainersCu === "bigint");
  },
  isSDK(o: any): o is ProviderEpochComplainerCuSDKType {
    return o && (o.$typeUrl === ProviderEpochComplainerCu.typeUrl || typeof o.complainers_cu === "bigint");
  },
  isAmino(o: any): o is ProviderEpochComplainerCuAmino {
    return o && (o.$typeUrl === ProviderEpochComplainerCu.typeUrl || typeof o.complainers_cu === "bigint");
  },
  encode(message: ProviderEpochComplainerCu, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.complainersCu !== BigInt(0)) {
      writer.uint32(8).uint64(message.complainersCu);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderEpochComplainerCu {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderEpochComplainerCu();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.complainersCu = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProviderEpochComplainerCu {
    return {
      complainersCu: isSet(object.complainersCu) ? BigInt(object.complainersCu.toString()) : BigInt(0)
    };
  },
  toJSON(message: ProviderEpochComplainerCu): JsonSafe<ProviderEpochComplainerCu> {
    const obj: any = {};
    message.complainersCu !== undefined && (obj.complainersCu = (message.complainersCu || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProviderEpochComplainerCu>, I>>(object: I): ProviderEpochComplainerCu {
    const message = createBaseProviderEpochComplainerCu();
    message.complainersCu = object.complainersCu !== undefined && object.complainersCu !== null ? BigInt(object.complainersCu.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProviderEpochComplainerCuAmino): ProviderEpochComplainerCu {
    const message = createBaseProviderEpochComplainerCu();
    if (object.complainers_cu !== undefined && object.complainers_cu !== null) {
      message.complainersCu = BigInt(object.complainers_cu);
    }
    return message;
  },
  toAmino(message: ProviderEpochComplainerCu): ProviderEpochComplainerCuAmino {
    const obj: any = {};
    obj.complainers_cu = message.complainersCu !== BigInt(0) ? (message.complainersCu?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderEpochComplainerCuAminoMsg): ProviderEpochComplainerCu {
    return ProviderEpochComplainerCu.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderEpochComplainerCuProtoMsg): ProviderEpochComplainerCu {
    return ProviderEpochComplainerCu.decode(message.value);
  },
  toProto(message: ProviderEpochComplainerCu): Uint8Array {
    return ProviderEpochComplainerCu.encode(message).finish();
  },
  toProtoMsg(message: ProviderEpochComplainerCu): ProviderEpochComplainerCuProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ProviderEpochComplainerCu",
      value: ProviderEpochComplainerCu.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProviderEpochComplainerCu.typeUrl, ProviderEpochComplainerCu);
function createBaseProviderConsumerEpochCu(): ProviderConsumerEpochCu {
  return {
    cu: BigInt(0)
  };
}
export const ProviderConsumerEpochCu = {
  typeUrl: "/lavanet.lava.pairing.ProviderConsumerEpochCu",
  is(o: any): o is ProviderConsumerEpochCu {
    return o && (o.$typeUrl === ProviderConsumerEpochCu.typeUrl || typeof o.cu === "bigint");
  },
  isSDK(o: any): o is ProviderConsumerEpochCuSDKType {
    return o && (o.$typeUrl === ProviderConsumerEpochCu.typeUrl || typeof o.cu === "bigint");
  },
  isAmino(o: any): o is ProviderConsumerEpochCuAmino {
    return o && (o.$typeUrl === ProviderConsumerEpochCu.typeUrl || typeof o.cu === "bigint");
  },
  encode(message: ProviderConsumerEpochCu, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cu !== BigInt(0)) {
      writer.uint32(8).uint64(message.cu);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderConsumerEpochCu {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderConsumerEpochCu();
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
  fromJSON(object: any): ProviderConsumerEpochCu {
    return {
      cu: isSet(object.cu) ? BigInt(object.cu.toString()) : BigInt(0)
    };
  },
  toJSON(message: ProviderConsumerEpochCu): JsonSafe<ProviderConsumerEpochCu> {
    const obj: any = {};
    message.cu !== undefined && (obj.cu = (message.cu || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProviderConsumerEpochCu>, I>>(object: I): ProviderConsumerEpochCu {
    const message = createBaseProviderConsumerEpochCu();
    message.cu = object.cu !== undefined && object.cu !== null ? BigInt(object.cu.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ProviderConsumerEpochCuAmino): ProviderConsumerEpochCu {
    const message = createBaseProviderConsumerEpochCu();
    if (object.cu !== undefined && object.cu !== null) {
      message.cu = BigInt(object.cu);
    }
    return message;
  },
  toAmino(message: ProviderConsumerEpochCu): ProviderConsumerEpochCuAmino {
    const obj: any = {};
    obj.cu = message.cu !== BigInt(0) ? (message.cu?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderConsumerEpochCuAminoMsg): ProviderConsumerEpochCu {
    return ProviderConsumerEpochCu.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderConsumerEpochCuProtoMsg): ProviderConsumerEpochCu {
    return ProviderConsumerEpochCu.decode(message.value);
  },
  toProto(message: ProviderConsumerEpochCu): Uint8Array {
    return ProviderConsumerEpochCu.encode(message).finish();
  },
  toProtoMsg(message: ProviderConsumerEpochCu): ProviderConsumerEpochCuProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.ProviderConsumerEpochCu",
      value: ProviderConsumerEpochCu.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProviderConsumerEpochCu.typeUrl, ProviderConsumerEpochCu);