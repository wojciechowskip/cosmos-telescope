//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial, Exact } from "../../../../../helpers";
import { JsonSafe } from "../../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../../registry";
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPool {
  sender: string;
  denom0: string;
  denom1: string;
  tickSpacing: bigint;
  spreadFactor: string;
}
export interface MsgCreateConcentratedPoolProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool";
  value: Uint8Array;
}
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPoolAmino {
  sender?: string;
  denom0?: string;
  denom1?: string;
  tick_spacing?: string;
  spread_factor?: string;
}
export interface MsgCreateConcentratedPoolAminoMsg {
  type: "osmosis/create-concentrated-pool";
  value: MsgCreateConcentratedPoolAmino;
}
/** ===================== MsgCreateConcentratedPool */
export interface MsgCreateConcentratedPoolSDKType {
  sender: string;
  denom0: string;
  denom1: string;
  tick_spacing: bigint;
  spread_factor: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponse {
  poolId: bigint;
}
export interface MsgCreateConcentratedPoolResponseProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPoolResponse";
  value: Uint8Array;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponseAmino {
  pool_id?: string;
}
export interface MsgCreateConcentratedPoolResponseAminoMsg {
  type: "osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool-response";
  value: MsgCreateConcentratedPoolResponseAmino;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateConcentratedPoolResponseSDKType {
  pool_id: bigint;
}
function createBaseMsgCreateConcentratedPool(): MsgCreateConcentratedPool {
  return {
    sender: "",
    denom0: "",
    denom1: "",
    tickSpacing: BigInt(0),
    spreadFactor: ""
  };
}
export const MsgCreateConcentratedPool = {
  typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool",
  aminoType: "osmosis/create-concentrated-pool",
  is(o: any): o is MsgCreateConcentratedPool {
    return o && (o.$typeUrl === MsgCreateConcentratedPool.typeUrl || typeof o.sender === "string" && typeof o.denom0 === "string" && typeof o.denom1 === "string" && typeof o.tickSpacing === "bigint" && typeof o.spreadFactor === "string");
  },
  isSDK(o: any): o is MsgCreateConcentratedPoolSDKType {
    return o && (o.$typeUrl === MsgCreateConcentratedPool.typeUrl || typeof o.sender === "string" && typeof o.denom0 === "string" && typeof o.denom1 === "string" && typeof o.tick_spacing === "bigint" && typeof o.spread_factor === "string");
  },
  isAmino(o: any): o is MsgCreateConcentratedPoolAmino {
    return o && (o.$typeUrl === MsgCreateConcentratedPool.typeUrl || typeof o.sender === "string" && typeof o.denom0 === "string" && typeof o.denom1 === "string" && typeof o.tick_spacing === "bigint" && typeof o.spread_factor === "string");
  },
  encode(message: MsgCreateConcentratedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom0 !== "") {
      writer.uint32(18).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(26).string(message.denom1);
    }
    if (message.tickSpacing !== BigInt(0)) {
      writer.uint32(32).uint64(message.tickSpacing);
    }
    if (message.spreadFactor !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.spreadFactor, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateConcentratedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConcentratedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom0 = reader.string();
          break;
        case 3:
          message.denom1 = reader.string();
          break;
        case 4:
          message.tickSpacing = reader.uint64();
          break;
        case 5:
          message.spreadFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateConcentratedPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom0: isSet(object.denom0) ? String(object.denom0) : "",
      denom1: isSet(object.denom1) ? String(object.denom1) : "",
      tickSpacing: isSet(object.tickSpacing) ? BigInt(object.tickSpacing.toString()) : BigInt(0),
      spreadFactor: isSet(object.spreadFactor) ? String(object.spreadFactor) : ""
    };
  },
  toJSON(message: MsgCreateConcentratedPool): JsonSafe<MsgCreateConcentratedPool> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.tickSpacing !== undefined && (obj.tickSpacing = (message.tickSpacing || BigInt(0)).toString());
    message.spreadFactor !== undefined && (obj.spreadFactor = message.spreadFactor);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateConcentratedPool>, I>>(object: I): MsgCreateConcentratedPool {
    const message = createBaseMsgCreateConcentratedPool();
    message.sender = object.sender ?? "";
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    message.tickSpacing = object.tickSpacing !== undefined && object.tickSpacing !== null ? BigInt(object.tickSpacing.toString()) : BigInt(0);
    message.spreadFactor = object.spreadFactor ?? "";
    return message;
  },
  fromAmino(object: MsgCreateConcentratedPoolAmino): MsgCreateConcentratedPool {
    const message = createBaseMsgCreateConcentratedPool();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.denom0 !== undefined && object.denom0 !== null) {
      message.denom0 = object.denom0;
    }
    if (object.denom1 !== undefined && object.denom1 !== null) {
      message.denom1 = object.denom1;
    }
    if (object.tick_spacing !== undefined && object.tick_spacing !== null) {
      message.tickSpacing = BigInt(object.tick_spacing);
    }
    if (object.spread_factor !== undefined && object.spread_factor !== null) {
      message.spreadFactor = object.spread_factor;
    }
    return message;
  },
  toAmino(message: MsgCreateConcentratedPool): MsgCreateConcentratedPoolAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.denom0 = message.denom0 === "" ? undefined : message.denom0;
    obj.denom1 = message.denom1 === "" ? undefined : message.denom1;
    obj.tick_spacing = message.tickSpacing !== BigInt(0) ? (message.tickSpacing?.toString)() : undefined;
    obj.spread_factor = message.spreadFactor === "" ? undefined : message.spreadFactor;
    return obj;
  },
  fromAminoMsg(object: MsgCreateConcentratedPoolAminoMsg): MsgCreateConcentratedPool {
    return MsgCreateConcentratedPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateConcentratedPool): MsgCreateConcentratedPoolAminoMsg {
    return {
      type: "osmosis/create-concentrated-pool",
      value: MsgCreateConcentratedPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateConcentratedPoolProtoMsg): MsgCreateConcentratedPool {
    return MsgCreateConcentratedPool.decode(message.value);
  },
  toProto(message: MsgCreateConcentratedPool): Uint8Array {
    return MsgCreateConcentratedPool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateConcentratedPool): MsgCreateConcentratedPoolProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool",
      value: MsgCreateConcentratedPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateConcentratedPool.typeUrl, MsgCreateConcentratedPool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateConcentratedPool.aminoType, MsgCreateConcentratedPool.typeUrl);
function createBaseMsgCreateConcentratedPoolResponse(): MsgCreateConcentratedPoolResponse {
  return {
    poolId: BigInt(0)
  };
}
export const MsgCreateConcentratedPoolResponse = {
  typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPoolResponse",
  aminoType: "osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool-response",
  is(o: any): o is MsgCreateConcentratedPoolResponse {
    return o && (o.$typeUrl === MsgCreateConcentratedPoolResponse.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is MsgCreateConcentratedPoolResponseSDKType {
    return o && (o.$typeUrl === MsgCreateConcentratedPoolResponse.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is MsgCreateConcentratedPoolResponseAmino {
    return o && (o.$typeUrl === MsgCreateConcentratedPoolResponse.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: MsgCreateConcentratedPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateConcentratedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConcentratedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateConcentratedPoolResponse {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreateConcentratedPoolResponse): JsonSafe<MsgCreateConcentratedPoolResponse> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateConcentratedPoolResponse>, I>>(object: I): MsgCreateConcentratedPoolResponse {
    const message = createBaseMsgCreateConcentratedPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateConcentratedPoolResponseAmino): MsgCreateConcentratedPoolResponse {
    const message = createBaseMsgCreateConcentratedPoolResponse();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgCreateConcentratedPoolResponse): MsgCreateConcentratedPoolResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateConcentratedPoolResponseAminoMsg): MsgCreateConcentratedPoolResponse {
    return MsgCreateConcentratedPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateConcentratedPoolResponse): MsgCreateConcentratedPoolResponseAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool-response",
      value: MsgCreateConcentratedPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateConcentratedPoolResponseProtoMsg): MsgCreateConcentratedPoolResponse {
    return MsgCreateConcentratedPoolResponse.decode(message.value);
  },
  toProto(message: MsgCreateConcentratedPoolResponse): Uint8Array {
    return MsgCreateConcentratedPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateConcentratedPoolResponse): MsgCreateConcentratedPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPoolResponse",
      value: MsgCreateConcentratedPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateConcentratedPoolResponse.typeUrl, MsgCreateConcentratedPoolResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateConcentratedPoolResponse.aminoType, MsgCreateConcentratedPoolResponse.typeUrl);