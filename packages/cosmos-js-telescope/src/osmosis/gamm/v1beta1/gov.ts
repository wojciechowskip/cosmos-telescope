//@ts-nocheck
import { BalancerToConcentratedPoolLink, BalancerToConcentratedPoolLinkAmino, BalancerToConcentratedPoolLinkSDKType } from "./shared";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposal {
  $typeUrl?: "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal";
  title: string;
  description: string;
  records: BalancerToConcentratedPoolLink[];
}
export interface ReplaceMigrationRecordsProposalProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal";
  value: Uint8Array;
}
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposalAmino {
  title?: string;
  description?: string;
  records?: BalancerToConcentratedPoolLinkAmino[];
}
export interface ReplaceMigrationRecordsProposalAminoMsg {
  type: "osmosis/ReplaceMigrationRecordsProposal";
  value: ReplaceMigrationRecordsProposalAmino;
}
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposalSDKType {
  $typeUrl?: "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal";
  title: string;
  description: string;
  records: BalancerToConcentratedPoolLinkSDKType[];
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposal {
  $typeUrl?: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal";
  title: string;
  description: string;
  records: BalancerToConcentratedPoolLink[];
}
export interface UpdateMigrationRecordsProposalProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal";
  value: Uint8Array;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposalAmino {
  title?: string;
  description?: string;
  records?: BalancerToConcentratedPoolLinkAmino[];
}
export interface UpdateMigrationRecordsProposalAminoMsg {
  type: "osmosis/UpdateMigrationRecordsProposal";
  value: UpdateMigrationRecordsProposalAmino;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposalSDKType {
  $typeUrl?: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal";
  title: string;
  description: string;
  records: BalancerToConcentratedPoolLinkSDKType[];
}
export interface PoolRecordWithCFMMLink {
  denom0: string;
  denom1: string;
  tickSpacing: bigint;
  exponentAtPriceOne: string;
  spreadFactor: string;
  balancerPoolId: bigint;
}
export interface PoolRecordWithCFMMLinkProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.PoolRecordWithCFMMLink";
  value: Uint8Array;
}
export interface PoolRecordWithCFMMLinkAmino {
  denom0?: string;
  denom1?: string;
  tick_spacing?: string;
  exponent_at_price_one?: string;
  spread_factor?: string;
  balancer_pool_id?: string;
}
export interface PoolRecordWithCFMMLinkAminoMsg {
  type: "osmosis/gamm/pool-record-with-cfmm-link";
  value: PoolRecordWithCFMMLinkAmino;
}
export interface PoolRecordWithCFMMLinkSDKType {
  denom0: string;
  denom1: string;
  tick_spacing: bigint;
  exponent_at_price_one: string;
  spread_factor: string;
  balancer_pool_id: bigint;
}
/**
 * CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal is a gov Content type
 * for creating concentrated liquidity pools and linking it to a CFMM pool.
 */
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
  $typeUrl?: "/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal";
  title: string;
  description: string;
  poolRecordsWithCfmmLink: PoolRecordWithCFMMLink[];
}
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal";
  value: Uint8Array;
}
/**
 * CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal is a gov Content type
 * for creating concentrated liquidity pools and linking it to a CFMM pool.
 */
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAmino {
  title?: string;
  description?: string;
  pool_records_with_cfmm_link?: PoolRecordWithCFMMLinkAmino[];
}
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAminoMsg {
  type: "osmosis/CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal";
  value: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAmino;
}
/**
 * CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal is a gov Content type
 * for creating concentrated liquidity pools and linking it to a CFMM pool.
 */
export interface CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalSDKType {
  $typeUrl?: "/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal";
  title: string;
  description: string;
  pool_records_with_cfmm_link: PoolRecordWithCFMMLinkSDKType[];
}
/**
 * SetScalingFactorControllerProposal is a gov Content type for updating the
 * scaling factor controller address of a stableswap pool
 */
export interface SetScalingFactorControllerProposal {
  $typeUrl?: "/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal";
  title: string;
  description: string;
  poolId: bigint;
  controllerAddress: string;
}
export interface SetScalingFactorControllerProposalProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal";
  value: Uint8Array;
}
/**
 * SetScalingFactorControllerProposal is a gov Content type for updating the
 * scaling factor controller address of a stableswap pool
 */
export interface SetScalingFactorControllerProposalAmino {
  title?: string;
  description?: string;
  pool_id?: string;
  controller_address?: string;
}
export interface SetScalingFactorControllerProposalAminoMsg {
  type: "osmosis/SetScalingFactorControllerProposal";
  value: SetScalingFactorControllerProposalAmino;
}
/**
 * SetScalingFactorControllerProposal is a gov Content type for updating the
 * scaling factor controller address of a stableswap pool
 */
export interface SetScalingFactorControllerProposalSDKType {
  $typeUrl?: "/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal";
  title: string;
  description: string;
  pool_id: bigint;
  controller_address: string;
}
function createBaseReplaceMigrationRecordsProposal(): ReplaceMigrationRecordsProposal {
  return {
    $typeUrl: "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal",
    title: "",
    description: "",
    records: []
  };
}
export const ReplaceMigrationRecordsProposal = {
  typeUrl: "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal",
  aminoType: "osmosis/ReplaceMigrationRecordsProposal",
  is(o: any): o is ReplaceMigrationRecordsProposal {
    return o && (o.$typeUrl === ReplaceMigrationRecordsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.records) && (!o.records.length || BalancerToConcentratedPoolLink.is(o.records[0])));
  },
  isSDK(o: any): o is ReplaceMigrationRecordsProposalSDKType {
    return o && (o.$typeUrl === ReplaceMigrationRecordsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.records) && (!o.records.length || BalancerToConcentratedPoolLink.isSDK(o.records[0])));
  },
  isAmino(o: any): o is ReplaceMigrationRecordsProposalAmino {
    return o && (o.$typeUrl === ReplaceMigrationRecordsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.records) && (!o.records.length || BalancerToConcentratedPoolLink.isAmino(o.records[0])));
  },
  encode(message: ReplaceMigrationRecordsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.records) {
      BalancerToConcentratedPoolLink.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReplaceMigrationRecordsProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReplaceMigrationRecordsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.records.push(BalancerToConcentratedPoolLink.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReplaceMigrationRecordsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => BalancerToConcentratedPoolLink.fromJSON(e)) : []
    };
  },
  toJSON(message: ReplaceMigrationRecordsProposal): JsonSafe<ReplaceMigrationRecordsProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.records) {
      obj.records = message.records.map(e => e ? BalancerToConcentratedPoolLink.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ReplaceMigrationRecordsProposal>, I>>(object: I): ReplaceMigrationRecordsProposal {
    const message = createBaseReplaceMigrationRecordsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.records = object.records?.map(e => BalancerToConcentratedPoolLink.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ReplaceMigrationRecordsProposalAmino): ReplaceMigrationRecordsProposal {
    const message = createBaseReplaceMigrationRecordsProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.records = object.records?.map(e => BalancerToConcentratedPoolLink.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ReplaceMigrationRecordsProposal): ReplaceMigrationRecordsProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.records) {
      obj.records = message.records.map(e => e ? BalancerToConcentratedPoolLink.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
    }
    return obj;
  },
  fromAminoMsg(object: ReplaceMigrationRecordsProposalAminoMsg): ReplaceMigrationRecordsProposal {
    return ReplaceMigrationRecordsProposal.fromAmino(object.value);
  },
  toAminoMsg(message: ReplaceMigrationRecordsProposal): ReplaceMigrationRecordsProposalAminoMsg {
    return {
      type: "osmosis/ReplaceMigrationRecordsProposal",
      value: ReplaceMigrationRecordsProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: ReplaceMigrationRecordsProposalProtoMsg): ReplaceMigrationRecordsProposal {
    return ReplaceMigrationRecordsProposal.decode(message.value);
  },
  toProto(message: ReplaceMigrationRecordsProposal): Uint8Array {
    return ReplaceMigrationRecordsProposal.encode(message).finish();
  },
  toProtoMsg(message: ReplaceMigrationRecordsProposal): ReplaceMigrationRecordsProposalProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal",
      value: ReplaceMigrationRecordsProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ReplaceMigrationRecordsProposal.typeUrl, ReplaceMigrationRecordsProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(ReplaceMigrationRecordsProposal.aminoType, ReplaceMigrationRecordsProposal.typeUrl);
function createBaseUpdateMigrationRecordsProposal(): UpdateMigrationRecordsProposal {
  return {
    $typeUrl: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal",
    title: "",
    description: "",
    records: []
  };
}
export const UpdateMigrationRecordsProposal = {
  typeUrl: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal",
  aminoType: "osmosis/UpdateMigrationRecordsProposal",
  is(o: any): o is UpdateMigrationRecordsProposal {
    return o && (o.$typeUrl === UpdateMigrationRecordsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.records) && (!o.records.length || BalancerToConcentratedPoolLink.is(o.records[0])));
  },
  isSDK(o: any): o is UpdateMigrationRecordsProposalSDKType {
    return o && (o.$typeUrl === UpdateMigrationRecordsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.records) && (!o.records.length || BalancerToConcentratedPoolLink.isSDK(o.records[0])));
  },
  isAmino(o: any): o is UpdateMigrationRecordsProposalAmino {
    return o && (o.$typeUrl === UpdateMigrationRecordsProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.records) && (!o.records.length || BalancerToConcentratedPoolLink.isAmino(o.records[0])));
  },
  encode(message: UpdateMigrationRecordsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.records) {
      BalancerToConcentratedPoolLink.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateMigrationRecordsProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMigrationRecordsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.records.push(BalancerToConcentratedPoolLink.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateMigrationRecordsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => BalancerToConcentratedPoolLink.fromJSON(e)) : []
    };
  },
  toJSON(message: UpdateMigrationRecordsProposal): JsonSafe<UpdateMigrationRecordsProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.records) {
      obj.records = message.records.map(e => e ? BalancerToConcentratedPoolLink.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UpdateMigrationRecordsProposal>, I>>(object: I): UpdateMigrationRecordsProposal {
    const message = createBaseUpdateMigrationRecordsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.records = object.records?.map(e => BalancerToConcentratedPoolLink.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UpdateMigrationRecordsProposalAmino): UpdateMigrationRecordsProposal {
    const message = createBaseUpdateMigrationRecordsProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.records = object.records?.map(e => BalancerToConcentratedPoolLink.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UpdateMigrationRecordsProposal): UpdateMigrationRecordsProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.records) {
      obj.records = message.records.map(e => e ? BalancerToConcentratedPoolLink.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
    }
    return obj;
  },
  fromAminoMsg(object: UpdateMigrationRecordsProposalAminoMsg): UpdateMigrationRecordsProposal {
    return UpdateMigrationRecordsProposal.fromAmino(object.value);
  },
  toAminoMsg(message: UpdateMigrationRecordsProposal): UpdateMigrationRecordsProposalAminoMsg {
    return {
      type: "osmosis/UpdateMigrationRecordsProposal",
      value: UpdateMigrationRecordsProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: UpdateMigrationRecordsProposalProtoMsg): UpdateMigrationRecordsProposal {
    return UpdateMigrationRecordsProposal.decode(message.value);
  },
  toProto(message: UpdateMigrationRecordsProposal): Uint8Array {
    return UpdateMigrationRecordsProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateMigrationRecordsProposal): UpdateMigrationRecordsProposalProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal",
      value: UpdateMigrationRecordsProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UpdateMigrationRecordsProposal.typeUrl, UpdateMigrationRecordsProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UpdateMigrationRecordsProposal.aminoType, UpdateMigrationRecordsProposal.typeUrl);
function createBasePoolRecordWithCFMMLink(): PoolRecordWithCFMMLink {
  return {
    denom0: "",
    denom1: "",
    tickSpacing: BigInt(0),
    exponentAtPriceOne: "",
    spreadFactor: "",
    balancerPoolId: BigInt(0)
  };
}
export const PoolRecordWithCFMMLink = {
  typeUrl: "/osmosis.gamm.v1beta1.PoolRecordWithCFMMLink",
  aminoType: "osmosis/gamm/pool-record-with-cfmm-link",
  is(o: any): o is PoolRecordWithCFMMLink {
    return o && (o.$typeUrl === PoolRecordWithCFMMLink.typeUrl || typeof o.denom0 === "string" && typeof o.denom1 === "string" && typeof o.tickSpacing === "bigint" && typeof o.exponentAtPriceOne === "string" && typeof o.spreadFactor === "string" && typeof o.balancerPoolId === "bigint");
  },
  isSDK(o: any): o is PoolRecordWithCFMMLinkSDKType {
    return o && (o.$typeUrl === PoolRecordWithCFMMLink.typeUrl || typeof o.denom0 === "string" && typeof o.denom1 === "string" && typeof o.tick_spacing === "bigint" && typeof o.exponent_at_price_one === "string" && typeof o.spread_factor === "string" && typeof o.balancer_pool_id === "bigint");
  },
  isAmino(o: any): o is PoolRecordWithCFMMLinkAmino {
    return o && (o.$typeUrl === PoolRecordWithCFMMLink.typeUrl || typeof o.denom0 === "string" && typeof o.denom1 === "string" && typeof o.tick_spacing === "bigint" && typeof o.exponent_at_price_one === "string" && typeof o.spread_factor === "string" && typeof o.balancer_pool_id === "bigint");
  },
  encode(message: PoolRecordWithCFMMLink, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom0 !== "") {
      writer.uint32(10).string(message.denom0);
    }
    if (message.denom1 !== "") {
      writer.uint32(18).string(message.denom1);
    }
    if (message.tickSpacing !== BigInt(0)) {
      writer.uint32(24).uint64(message.tickSpacing);
    }
    if (message.exponentAtPriceOne !== "") {
      writer.uint32(34).string(message.exponentAtPriceOne);
    }
    if (message.spreadFactor !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.spreadFactor, 18).atomics);
    }
    if (message.balancerPoolId !== BigInt(0)) {
      writer.uint32(48).uint64(message.balancerPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolRecordWithCFMMLink {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRecordWithCFMMLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom0 = reader.string();
          break;
        case 2:
          message.denom1 = reader.string();
          break;
        case 3:
          message.tickSpacing = reader.uint64();
          break;
        case 4:
          message.exponentAtPriceOne = reader.string();
          break;
        case 5:
          message.spreadFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.balancerPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolRecordWithCFMMLink {
    return {
      denom0: isSet(object.denom0) ? String(object.denom0) : "",
      denom1: isSet(object.denom1) ? String(object.denom1) : "",
      tickSpacing: isSet(object.tickSpacing) ? BigInt(object.tickSpacing.toString()) : BigInt(0),
      exponentAtPriceOne: isSet(object.exponentAtPriceOne) ? String(object.exponentAtPriceOne) : "",
      spreadFactor: isSet(object.spreadFactor) ? String(object.spreadFactor) : "",
      balancerPoolId: isSet(object.balancerPoolId) ? BigInt(object.balancerPoolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: PoolRecordWithCFMMLink): JsonSafe<PoolRecordWithCFMMLink> {
    const obj: any = {};
    message.denom0 !== undefined && (obj.denom0 = message.denom0);
    message.denom1 !== undefined && (obj.denom1 = message.denom1);
    message.tickSpacing !== undefined && (obj.tickSpacing = (message.tickSpacing || BigInt(0)).toString());
    message.exponentAtPriceOne !== undefined && (obj.exponentAtPriceOne = message.exponentAtPriceOne);
    message.spreadFactor !== undefined && (obj.spreadFactor = message.spreadFactor);
    message.balancerPoolId !== undefined && (obj.balancerPoolId = (message.balancerPoolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolRecordWithCFMMLink>, I>>(object: I): PoolRecordWithCFMMLink {
    const message = createBasePoolRecordWithCFMMLink();
    message.denom0 = object.denom0 ?? "";
    message.denom1 = object.denom1 ?? "";
    message.tickSpacing = object.tickSpacing !== undefined && object.tickSpacing !== null ? BigInt(object.tickSpacing.toString()) : BigInt(0);
    message.exponentAtPriceOne = object.exponentAtPriceOne ?? "";
    message.spreadFactor = object.spreadFactor ?? "";
    message.balancerPoolId = object.balancerPoolId !== undefined && object.balancerPoolId !== null ? BigInt(object.balancerPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PoolRecordWithCFMMLinkAmino): PoolRecordWithCFMMLink {
    const message = createBasePoolRecordWithCFMMLink();
    if (object.denom0 !== undefined && object.denom0 !== null) {
      message.denom0 = object.denom0;
    }
    if (object.denom1 !== undefined && object.denom1 !== null) {
      message.denom1 = object.denom1;
    }
    if (object.tick_spacing !== undefined && object.tick_spacing !== null) {
      message.tickSpacing = BigInt(object.tick_spacing);
    }
    if (object.exponent_at_price_one !== undefined && object.exponent_at_price_one !== null) {
      message.exponentAtPriceOne = object.exponent_at_price_one;
    }
    if (object.spread_factor !== undefined && object.spread_factor !== null) {
      message.spreadFactor = object.spread_factor;
    }
    if (object.balancer_pool_id !== undefined && object.balancer_pool_id !== null) {
      message.balancerPoolId = BigInt(object.balancer_pool_id);
    }
    return message;
  },
  toAmino(message: PoolRecordWithCFMMLink): PoolRecordWithCFMMLinkAmino {
    const obj: any = {};
    obj.denom0 = message.denom0 === "" ? undefined : message.denom0;
    obj.denom1 = message.denom1 === "" ? undefined : message.denom1;
    obj.tick_spacing = message.tickSpacing !== BigInt(0) ? (message.tickSpacing?.toString)() : undefined;
    obj.exponent_at_price_one = message.exponentAtPriceOne === "" ? undefined : message.exponentAtPriceOne;
    obj.spread_factor = message.spreadFactor === "" ? undefined : message.spreadFactor;
    obj.balancer_pool_id = message.balancerPoolId !== BigInt(0) ? (message.balancerPoolId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolRecordWithCFMMLinkAminoMsg): PoolRecordWithCFMMLink {
    return PoolRecordWithCFMMLink.fromAmino(object.value);
  },
  toAminoMsg(message: PoolRecordWithCFMMLink): PoolRecordWithCFMMLinkAminoMsg {
    return {
      type: "osmosis/gamm/pool-record-with-cfmm-link",
      value: PoolRecordWithCFMMLink.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolRecordWithCFMMLinkProtoMsg): PoolRecordWithCFMMLink {
    return PoolRecordWithCFMMLink.decode(message.value);
  },
  toProto(message: PoolRecordWithCFMMLink): Uint8Array {
    return PoolRecordWithCFMMLink.encode(message).finish();
  },
  toProtoMsg(message: PoolRecordWithCFMMLink): PoolRecordWithCFMMLinkProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.PoolRecordWithCFMMLink",
      value: PoolRecordWithCFMMLink.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolRecordWithCFMMLink.typeUrl, PoolRecordWithCFMMLink);
GlobalDecoderRegistry.registerAminoProtoMapping(PoolRecordWithCFMMLink.aminoType, PoolRecordWithCFMMLink.typeUrl);
function createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal(): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
  return {
    $typeUrl: "/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal",
    title: "",
    description: "",
    poolRecordsWithCfmmLink: []
  };
}
export const CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal = {
  typeUrl: "/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal",
  aminoType: "osmosis/CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal",
  is(o: any): o is CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
    return o && (o.$typeUrl === CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.poolRecordsWithCfmmLink) && (!o.poolRecordsWithCfmmLink.length || PoolRecordWithCFMMLink.is(o.poolRecordsWithCfmmLink[0])));
  },
  isSDK(o: any): o is CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalSDKType {
    return o && (o.$typeUrl === CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.pool_records_with_cfmm_link) && (!o.pool_records_with_cfmm_link.length || PoolRecordWithCFMMLink.isSDK(o.pool_records_with_cfmm_link[0])));
  },
  isAmino(o: any): o is CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAmino {
    return o && (o.$typeUrl === CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.pool_records_with_cfmm_link) && (!o.pool_records_with_cfmm_link.length || PoolRecordWithCFMMLink.isAmino(o.pool_records_with_cfmm_link[0])));
  },
  encode(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.poolRecordsWithCfmmLink) {
      PoolRecordWithCFMMLink.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.poolRecordsWithCfmmLink.push(PoolRecordWithCFMMLink.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      poolRecordsWithCfmmLink: Array.isArray(object?.poolRecordsWithCfmmLink) ? object.poolRecordsWithCfmmLink.map((e: any) => PoolRecordWithCFMMLink.fromJSON(e)) : []
    };
  },
  toJSON(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): JsonSafe<CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.poolRecordsWithCfmmLink) {
      obj.poolRecordsWithCfmmLink = message.poolRecordsWithCfmmLink.map(e => e ? PoolRecordWithCFMMLink.toJSON(e) : undefined);
    } else {
      obj.poolRecordsWithCfmmLink = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal>, I>>(object: I): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
    const message = createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolRecordsWithCfmmLink = object.poolRecordsWithCfmmLink?.map(e => PoolRecordWithCFMMLink.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAmino): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
    const message = createBaseCreateConcentratedLiquidityPoolsAndLinktoCFMMProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.poolRecordsWithCfmmLink = object.pool_records_with_cfmm_link?.map(e => PoolRecordWithCFMMLink.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.poolRecordsWithCfmmLink) {
      obj.pool_records_with_cfmm_link = message.poolRecordsWithCfmmLink.map(e => e ? PoolRecordWithCFMMLink.toAmino(e) : undefined);
    } else {
      obj.pool_records_with_cfmm_link = message.poolRecordsWithCfmmLink;
    }
    return obj;
  },
  fromAminoMsg(object: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAminoMsg): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
    return CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.fromAmino(object.value);
  },
  toAminoMsg(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalAminoMsg {
    return {
      type: "osmosis/CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal",
      value: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalProtoMsg): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal {
    return CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.decode(message.value);
  },
  toProto(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): Uint8Array {
    return CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.encode(message).finish();
  },
  toProtoMsg(message: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal",
      value: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.typeUrl, CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.aminoType, CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.typeUrl);
function createBaseSetScalingFactorControllerProposal(): SetScalingFactorControllerProposal {
  return {
    $typeUrl: "/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal",
    title: "",
    description: "",
    poolId: BigInt(0),
    controllerAddress: ""
  };
}
export const SetScalingFactorControllerProposal = {
  typeUrl: "/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal",
  aminoType: "osmosis/SetScalingFactorControllerProposal",
  is(o: any): o is SetScalingFactorControllerProposal {
    return o && (o.$typeUrl === SetScalingFactorControllerProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.poolId === "bigint" && typeof o.controllerAddress === "string");
  },
  isSDK(o: any): o is SetScalingFactorControllerProposalSDKType {
    return o && (o.$typeUrl === SetScalingFactorControllerProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.pool_id === "bigint" && typeof o.controller_address === "string");
  },
  isAmino(o: any): o is SetScalingFactorControllerProposalAmino {
    return o && (o.$typeUrl === SetScalingFactorControllerProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.pool_id === "bigint" && typeof o.controller_address === "string");
  },
  encode(message: SetScalingFactorControllerProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.controllerAddress !== "") {
      writer.uint32(34).string(message.controllerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetScalingFactorControllerProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetScalingFactorControllerProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.controllerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SetScalingFactorControllerProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      controllerAddress: isSet(object.controllerAddress) ? String(object.controllerAddress) : ""
    };
  },
  toJSON(message: SetScalingFactorControllerProposal): JsonSafe<SetScalingFactorControllerProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.controllerAddress !== undefined && (obj.controllerAddress = message.controllerAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SetScalingFactorControllerProposal>, I>>(object: I): SetScalingFactorControllerProposal {
    const message = createBaseSetScalingFactorControllerProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.controllerAddress = object.controllerAddress ?? "";
    return message;
  },
  fromAmino(object: SetScalingFactorControllerProposalAmino): SetScalingFactorControllerProposal {
    const message = createBaseSetScalingFactorControllerProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.controller_address !== undefined && object.controller_address !== null) {
      message.controllerAddress = object.controller_address;
    }
    return message;
  },
  toAmino(message: SetScalingFactorControllerProposal): SetScalingFactorControllerProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
    obj.controller_address = message.controllerAddress === "" ? undefined : message.controllerAddress;
    return obj;
  },
  fromAminoMsg(object: SetScalingFactorControllerProposalAminoMsg): SetScalingFactorControllerProposal {
    return SetScalingFactorControllerProposal.fromAmino(object.value);
  },
  toAminoMsg(message: SetScalingFactorControllerProposal): SetScalingFactorControllerProposalAminoMsg {
    return {
      type: "osmosis/SetScalingFactorControllerProposal",
      value: SetScalingFactorControllerProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: SetScalingFactorControllerProposalProtoMsg): SetScalingFactorControllerProposal {
    return SetScalingFactorControllerProposal.decode(message.value);
  },
  toProto(message: SetScalingFactorControllerProposal): Uint8Array {
    return SetScalingFactorControllerProposal.encode(message).finish();
  },
  toProtoMsg(message: SetScalingFactorControllerProposal): SetScalingFactorControllerProposalProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal",
      value: SetScalingFactorControllerProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SetScalingFactorControllerProposal.typeUrl, SetScalingFactorControllerProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(SetScalingFactorControllerProposal.aminoType, SetScalingFactorControllerProposal.typeUrl);