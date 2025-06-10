//@ts-nocheck
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { MigrationRecords, MigrationRecordsAmino, MigrationRecordsSDKType } from "./shared";
import { Pool as Pool1 } from "../../concentratedliquidity/v1beta1/pool";
import { PoolProtoMsg as Pool1ProtoMsg } from "../../concentratedliquidity/v1beta1/pool";
import { PoolSDKType as Pool1SDKType } from "../../concentratedliquidity/v1beta1/pool";
import { Pool as Pool2 } from "../poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../poolmodels/stableswap/v1beta1/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../poolmodels/stableswap/v1beta1/stableswap_pool";
import { Pool as Pool3 } from "./balancerPool";
import { PoolProtoMsg as Pool3ProtoMsg } from "./balancerPool";
import { PoolSDKType as Pool3SDKType } from "./balancerPool";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisState {
  pools: (Pool1 | Pool2 | Pool3 | Any)[] | Any[];
  /** will be renamed to next_pool_id in an upcoming version */
  nextPoolNumber: bigint;
  params: Params;
  migrationRecords?: MigrationRecords;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.GenesisState";
  value: Uint8Array;
}
export type GenesisStateEncoded = Omit<GenesisState, "pools"> & {
  pools: (Pool1ProtoMsg | Pool2ProtoMsg | Pool3ProtoMsg | AnyProtoMsg)[];
};
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisStateAmino {
  pools?: AnyAmino[];
  /** will be renamed to next_pool_id in an upcoming version */
  next_pool_number?: string;
  params?: ParamsAmino;
  migration_records?: MigrationRecordsAmino;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/gamm/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the gamm module's genesis state. */
export interface GenesisStateSDKType {
  pools: (Pool1SDKType | Pool2SDKType | Pool3SDKType | AnySDKType)[];
  next_pool_number: bigint;
  params: ParamsSDKType;
  migration_records?: MigrationRecordsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    pools: [],
    nextPoolNumber: BigInt(0),
    params: Params.fromPartial({}),
    migrationRecords: undefined
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.gamm.v1beta1.GenesisState",
  aminoType: "osmosis/gamm/genesis-state",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.is(o.pools[0]) || Pool2.is(o.pools[0]) || Pool3.is(o.pools[0]) || Any.is(o.pools[0])) && typeof o.nextPoolNumber === "bigint" && Params.is(o.params));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isSDK(o.pools[0]) || Pool2.isSDK(o.pools[0]) || Pool3.isSDK(o.pools[0]) || Any.isSDK(o.pools[0])) && typeof o.next_pool_number === "bigint" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.pools) && (!o.pools.length || Pool1.isAmino(o.pools[0]) || Pool2.isAmino(o.pools[0]) || Pool3.isAmino(o.pools[0]) || Any.isAmino(o.pools[0])) && typeof o.next_pool_number === "bigint" && Params.isAmino(o.params));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPoolNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextPoolNumber);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    if (message.migrationRecords !== undefined) {
      MigrationRecords.encode(message.migrationRecords, writer.uint32(34).fork()).ldelim();
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
          message.pools.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        case 2:
          message.nextPoolNumber = reader.uint64();
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 4:
          message.migrationRecords = MigrationRecords.decode(reader, reader.uint32());
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
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => GlobalDecoderRegistry.fromJSON(e)) : [],
      nextPoolNumber: isSet(object.nextPoolNumber) ? BigInt(object.nextPoolNumber.toString()) : BigInt(0),
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      migrationRecords: isSet(object.migrationRecords) ? MigrationRecords.fromJSON(object.migrationRecords) : undefined
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.nextPoolNumber !== undefined && (obj.nextPoolNumber = (message.nextPoolNumber || BigInt(0)).toString());
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.migrationRecords !== undefined && (obj.migrationRecords = message.migrationRecords ? MigrationRecords.toJSON(message.migrationRecords) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    message.nextPoolNumber = object.nextPoolNumber !== undefined && object.nextPoolNumber !== null ? BigInt(object.nextPoolNumber.toString()) : BigInt(0);
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.migrationRecords = object.migrationRecords !== undefined && object.migrationRecords !== null ? MigrationRecords.fromPartial(object.migrationRecords) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.pools = object.pools?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    if (object.next_pool_number !== undefined && object.next_pool_number !== null) {
      message.nextPoolNumber = BigInt(object.next_pool_number);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.migration_records !== undefined && object.migration_records !== null) {
      message.migrationRecords = MigrationRecords.fromAmino(object.migration_records);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.next_pool_number = message.nextPoolNumber !== BigInt(0) ? (message.nextPoolNumber?.toString)() : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.migration_records = message.migrationRecords ? MigrationRecords.toAmino(message.migrationRecords) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/gamm/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);