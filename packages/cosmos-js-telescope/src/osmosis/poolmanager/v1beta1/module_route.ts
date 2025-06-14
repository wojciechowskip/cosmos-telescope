//@ts-nocheck
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** PoolType is an enumeration of all supported pool types. */
export enum PoolType {
  /** Balancer - Balancer is the standard xy=k curve. Its pool model is defined in x/gamm. */
  Balancer = 0,
  /**
   * Stableswap - Stableswap is the Solidly cfmm stable swap curve. Its pool model is defined
   * in x/gamm.
   */
  Stableswap = 1,
  /**
   * Concentrated - Concentrated is the pool model specific to concentrated liquidity. It is
   * defined in x/concentrated-liquidity.
   */
  Concentrated = 2,
  /**
   * CosmWasm - CosmWasm is the pool model specific to CosmWasm. It is defined in
   * x/cosmwasmpool.
   */
  CosmWasm = 3,
  UNRECOGNIZED = -1,
}
export const PoolTypeSDKType = PoolType;
export const PoolTypeAmino = PoolType;
export function poolTypeFromJSON(object: any): PoolType {
  switch (object) {
    case 0:
    case "Balancer":
      return PoolType.Balancer;
    case 1:
    case "Stableswap":
      return PoolType.Stableswap;
    case 2:
    case "Concentrated":
      return PoolType.Concentrated;
    case 3:
    case "CosmWasm":
      return PoolType.CosmWasm;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolType.UNRECOGNIZED;
  }
}
export function poolTypeToJSON(object: PoolType): string {
  switch (object) {
    case PoolType.Balancer:
      return "Balancer";
    case PoolType.Stableswap:
      return "Stableswap";
    case PoolType.Concentrated:
      return "Concentrated";
    case PoolType.CosmWasm:
      return "CosmWasm";
    case PoolType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRoute {
  /** pool_type specifies the type of the pool */
  poolType: PoolType;
  poolId?: bigint;
}
export interface ModuleRouteProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.ModuleRoute";
  value: Uint8Array;
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRouteAmino {
  /** pool_type specifies the type of the pool */
  pool_type?: PoolType;
  pool_id?: string;
}
export interface ModuleRouteAminoMsg {
  type: "osmosis/poolmanager/module-route";
  value: ModuleRouteAmino;
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRouteSDKType {
  pool_type: PoolType;
  pool_id?: bigint;
}
function createBaseModuleRoute(): ModuleRoute {
  return {
    poolType: 0,
    poolId: undefined
  };
}
export const ModuleRoute = {
  typeUrl: "/osmosis.poolmanager.v1beta1.ModuleRoute",
  aminoType: "osmosis/poolmanager/module-route",
  is(o: any): o is ModuleRoute {
    return o && (o.$typeUrl === ModuleRoute.typeUrl || isSet(o.poolType));
  },
  isSDK(o: any): o is ModuleRouteSDKType {
    return o && (o.$typeUrl === ModuleRoute.typeUrl || isSet(o.pool_type));
  },
  isAmino(o: any): o is ModuleRouteAmino {
    return o && (o.$typeUrl === ModuleRoute.typeUrl || isSet(o.pool_type));
  },
  encode(message: ModuleRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolType !== 0) {
      writer.uint32(8).int32(message.poolType);
    }
    if (message.poolId !== undefined) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolType = reader.int32() as any;
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleRoute {
    return {
      poolType: isSet(object.poolType) ? poolTypeFromJSON(object.poolType) : -1,
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : undefined
    };
  },
  toJSON(message: ModuleRoute): JsonSafe<ModuleRoute> {
    const obj: any = {};
    message.poolType !== undefined && (obj.poolType = poolTypeToJSON(message.poolType));
    if (message.poolId !== undefined) {
      obj.poolId = message.poolId.toString();
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ModuleRoute>, I>>(object: I): ModuleRoute {
    const message = createBaseModuleRoute();
    message.poolType = object.poolType ?? 0;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : undefined;
    return message;
  },
  fromAmino(object: ModuleRouteAmino): ModuleRoute {
    const message = createBaseModuleRoute();
    if (object.pool_type !== undefined && object.pool_type !== null) {
      message.poolType = object.pool_type;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: ModuleRoute): ModuleRouteAmino {
    const obj: any = {};
    obj.pool_type = message.poolType === 0 ? undefined : message.poolType;
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ModuleRouteAminoMsg): ModuleRoute {
    return ModuleRoute.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleRoute): ModuleRouteAminoMsg {
    return {
      type: "osmosis/poolmanager/module-route",
      value: ModuleRoute.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleRouteProtoMsg): ModuleRoute {
    return ModuleRoute.decode(message.value);
  },
  toProto(message: ModuleRoute): Uint8Array {
    return ModuleRoute.encode(message).finish();
  },
  toProtoMsg(message: ModuleRoute): ModuleRouteProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.ModuleRoute",
      value: ModuleRoute.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ModuleRoute.typeUrl, ModuleRoute);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleRoute.aminoType, ModuleRoute.typeUrl);