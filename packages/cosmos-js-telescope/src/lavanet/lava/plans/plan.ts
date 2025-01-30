//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Policy, PolicyAmino, PolicySDKType } from "./policy";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * The geolocation values are encoded as bits in a bitmask, with two special values:
 * GLS is set to 0 so it will be restrictive with the AND operator.
 * GL is set to -1 so it will be permissive with the AND operator.
 */
export enum Geolocation {
  /** GLS - Global-strict */
  GLS = 0,
  /** USC - US-Center */
  USC = 1,
  EU = 2,
  /** USE - US-East */
  USE = 4,
  /** USW - US-West */
  USW = 8,
  AF = 16,
  AS = 32,
  /** AU - (includes NZ) */
  AU = 64,
  /** GL - Global */
  GL = 65535,
  UNRECOGNIZED = -1,
}
export const GeolocationSDKType = Geolocation;
export const GeolocationAmino = Geolocation;
export function geolocationFromJSON(object: any): Geolocation {
  switch (object) {
    case 0:
    case "GLS":
      return Geolocation.GLS;
    case 1:
    case "USC":
      return Geolocation.USC;
    case 2:
    case "EU":
      return Geolocation.EU;
    case 4:
    case "USE":
      return Geolocation.USE;
    case 8:
    case "USW":
      return Geolocation.USW;
    case 16:
    case "AF":
      return Geolocation.AF;
    case 32:
    case "AS":
      return Geolocation.AS;
    case 64:
    case "AU":
      return Geolocation.AU;
    case 65535:
    case "GL":
      return Geolocation.GL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Geolocation.UNRECOGNIZED;
  }
}
export function geolocationToJSON(object: Geolocation): string {
  switch (object) {
    case Geolocation.GLS:
      return "GLS";
    case Geolocation.USC:
      return "USC";
    case Geolocation.EU:
      return "EU";
    case Geolocation.USE:
      return "USE";
    case Geolocation.USW:
      return "USW";
    case Geolocation.AF:
      return "AF";
    case Geolocation.AS:
      return "AS";
    case Geolocation.AU:
      return "AU";
    case Geolocation.GL:
      return "GL";
    case Geolocation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Plan {
  index: string;
  /** the epoch that this plan was created */
  block: bigint;
  /** plan price (in ulava) */
  price: Coin;
  /** allow CU overuse flag */
  allowOveruse: boolean;
  /** price of CU overuse */
  overuseRate: bigint;
  /** plan description (for humans) */
  description: string;
  /** plan type */
  type: string;
  /** discount for buying the plan for a year */
  annualDiscountPercentage: bigint;
  planPolicy: Policy;
  /** number of allowed projects */
  projectsLimit: bigint;
  /** set of addresses that are the only allowed buyers for the plan (empty list = everyone is allowed) */
  allowedBuyers: string[];
}
export interface PlanProtoMsg {
  typeUrl: "/lavanet.lava.plans.Plan";
  value: Uint8Array;
}
export interface PlanAmino {
  index: string;
  /** the epoch that this plan was created */
  block: string;
  /** plan price (in ulava) */
  price: CoinAmino;
  /** allow CU overuse flag */
  allow_overuse: boolean;
  /** price of CU overuse */
  overuse_rate: string;
  /** plan description (for humans) */
  description: string;
  /** plan type */
  type: string;
  /** discount for buying the plan for a year */
  annual_discount_percentage: string;
  plan_policy: PolicyAmino;
  /** number of allowed projects */
  projects_limit: string;
  /** set of addresses that are the only allowed buyers for the plan (empty list = everyone is allowed) */
  allowed_buyers: string[];
}
export interface PlanAminoMsg {
  type: "/lavanet.lava.plans.Plan";
  value: PlanAmino;
}
export interface PlanSDKType {
  index: string;
  block: bigint;
  price: CoinSDKType;
  allow_overuse: boolean;
  overuse_rate: bigint;
  description: string;
  type: string;
  annual_discount_percentage: bigint;
  plan_policy: PolicySDKType;
  projects_limit: bigint;
  allowed_buyers: string[];
}
function createBasePlan(): Plan {
  return {
    index: "",
    block: BigInt(0),
    price: Coin.fromPartial({}),
    allowOveruse: false,
    overuseRate: BigInt(0),
    description: "",
    type: "",
    annualDiscountPercentage: BigInt(0),
    planPolicy: Policy.fromPartial({}),
    projectsLimit: BigInt(0),
    allowedBuyers: []
  };
}
export const Plan = {
  typeUrl: "/lavanet.lava.plans.Plan",
  is(o: any): o is Plan {
    return o && (o.$typeUrl === Plan.typeUrl || typeof o.index === "string" && typeof o.block === "bigint" && Coin.is(o.price) && typeof o.allowOveruse === "boolean" && typeof o.overuseRate === "bigint" && typeof o.description === "string" && typeof o.type === "string" && typeof o.annualDiscountPercentage === "bigint" && Policy.is(o.planPolicy) && typeof o.projectsLimit === "bigint" && Array.isArray(o.allowedBuyers) && (!o.allowedBuyers.length || typeof o.allowedBuyers[0] === "string"));
  },
  isSDK(o: any): o is PlanSDKType {
    return o && (o.$typeUrl === Plan.typeUrl || typeof o.index === "string" && typeof o.block === "bigint" && Coin.isSDK(o.price) && typeof o.allow_overuse === "boolean" && typeof o.overuse_rate === "bigint" && typeof o.description === "string" && typeof o.type === "string" && typeof o.annual_discount_percentage === "bigint" && Policy.isSDK(o.plan_policy) && typeof o.projects_limit === "bigint" && Array.isArray(o.allowed_buyers) && (!o.allowed_buyers.length || typeof o.allowed_buyers[0] === "string"));
  },
  isAmino(o: any): o is PlanAmino {
    return o && (o.$typeUrl === Plan.typeUrl || typeof o.index === "string" && typeof o.block === "bigint" && Coin.isAmino(o.price) && typeof o.allow_overuse === "boolean" && typeof o.overuse_rate === "bigint" && typeof o.description === "string" && typeof o.type === "string" && typeof o.annual_discount_percentage === "bigint" && Policy.isAmino(o.plan_policy) && typeof o.projects_limit === "bigint" && Array.isArray(o.allowed_buyers) && (!o.allowed_buyers.length || typeof o.allowed_buyers[0] === "string"));
  },
  encode(message: Plan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(24).uint64(message.block);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.allowOveruse === true) {
      writer.uint32(64).bool(message.allowOveruse);
    }
    if (message.overuseRate !== BigInt(0)) {
      writer.uint32(72).uint64(message.overuseRate);
    }
    if (message.description !== "") {
      writer.uint32(90).string(message.description);
    }
    if (message.type !== "") {
      writer.uint32(98).string(message.type);
    }
    if (message.annualDiscountPercentage !== BigInt(0)) {
      writer.uint32(104).uint64(message.annualDiscountPercentage);
    }
    if (message.planPolicy !== undefined) {
      Policy.encode(message.planPolicy, writer.uint32(114).fork()).ldelim();
    }
    if (message.projectsLimit !== BigInt(0)) {
      writer.uint32(120).uint64(message.projectsLimit);
    }
    for (const v of message.allowedBuyers) {
      writer.uint32(130).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Plan {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 3:
          message.block = reader.uint64();
          break;
        case 4:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.allowOveruse = reader.bool();
          break;
        case 9:
          message.overuseRate = reader.uint64();
          break;
        case 11:
          message.description = reader.string();
          break;
        case 12:
          message.type = reader.string();
          break;
        case 13:
          message.annualDiscountPercentage = reader.uint64();
          break;
        case 14:
          message.planPolicy = Policy.decode(reader, reader.uint32());
          break;
        case 15:
          message.projectsLimit = reader.uint64();
          break;
        case 16:
          message.allowedBuyers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Plan {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0),
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined,
      allowOveruse: isSet(object.allowOveruse) ? Boolean(object.allowOveruse) : false,
      overuseRate: isSet(object.overuseRate) ? BigInt(object.overuseRate.toString()) : BigInt(0),
      description: isSet(object.description) ? String(object.description) : "",
      type: isSet(object.type) ? String(object.type) : "",
      annualDiscountPercentage: isSet(object.annualDiscountPercentage) ? BigInt(object.annualDiscountPercentage.toString()) : BigInt(0),
      planPolicy: isSet(object.planPolicy) ? Policy.fromJSON(object.planPolicy) : undefined,
      projectsLimit: isSet(object.projectsLimit) ? BigInt(object.projectsLimit.toString()) : BigInt(0),
      allowedBuyers: Array.isArray(object?.allowedBuyers) ? object.allowedBuyers.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Plan): JsonSafe<Plan> {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
    message.price !== undefined && (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    message.allowOveruse !== undefined && (obj.allowOveruse = message.allowOveruse);
    message.overuseRate !== undefined && (obj.overuseRate = (message.overuseRate || BigInt(0)).toString());
    message.description !== undefined && (obj.description = message.description);
    message.type !== undefined && (obj.type = message.type);
    message.annualDiscountPercentage !== undefined && (obj.annualDiscountPercentage = (message.annualDiscountPercentage || BigInt(0)).toString());
    message.planPolicy !== undefined && (obj.planPolicy = message.planPolicy ? Policy.toJSON(message.planPolicy) : undefined);
    message.projectsLimit !== undefined && (obj.projectsLimit = (message.projectsLimit || BigInt(0)).toString());
    if (message.allowedBuyers) {
      obj.allowedBuyers = message.allowedBuyers.map(e => e);
    } else {
      obj.allowedBuyers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Plan>, I>>(object: I): Plan {
    const message = createBasePlan();
    message.index = object.index ?? "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.allowOveruse = object.allowOveruse ?? false;
    message.overuseRate = object.overuseRate !== undefined && object.overuseRate !== null ? BigInt(object.overuseRate.toString()) : BigInt(0);
    message.description = object.description ?? "";
    message.type = object.type ?? "";
    message.annualDiscountPercentage = object.annualDiscountPercentage !== undefined && object.annualDiscountPercentage !== null ? BigInt(object.annualDiscountPercentage.toString()) : BigInt(0);
    message.planPolicy = object.planPolicy !== undefined && object.planPolicy !== null ? Policy.fromPartial(object.planPolicy) : undefined;
    message.projectsLimit = object.projectsLimit !== undefined && object.projectsLimit !== null ? BigInt(object.projectsLimit.toString()) : BigInt(0);
    message.allowedBuyers = object.allowedBuyers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: PlanAmino): Plan {
    const message = createBasePlan();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    if (object.allow_overuse !== undefined && object.allow_overuse !== null) {
      message.allowOveruse = object.allow_overuse;
    }
    if (object.overuse_rate !== undefined && object.overuse_rate !== null) {
      message.overuseRate = BigInt(object.overuse_rate);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.annual_discount_percentage !== undefined && object.annual_discount_percentage !== null) {
      message.annualDiscountPercentage = BigInt(object.annual_discount_percentage);
    }
    if (object.plan_policy !== undefined && object.plan_policy !== null) {
      message.planPolicy = Policy.fromAmino(object.plan_policy);
    }
    if (object.projects_limit !== undefined && object.projects_limit !== null) {
      message.projectsLimit = BigInt(object.projects_limit);
    }
    message.allowedBuyers = object.allowed_buyers?.map(e => e) || [];
    return message;
  },
  toAmino(message: Plan): PlanAmino {
    const obj: any = {};
    obj.index = message.index ?? "";
    obj.block = message.block ? (message.block?.toString)() : "0";
    obj.price = message.price ? Coin.toAmino(message.price) : Coin.toAmino(Coin.fromPartial({}));
    obj.allow_overuse = message.allowOveruse ?? false;
    obj.overuse_rate = message.overuseRate ? (message.overuseRate?.toString)() : "0";
    obj.description = message.description ?? "";
    obj.type = message.type ?? "";
    obj.annual_discount_percentage = message.annualDiscountPercentage ? (message.annualDiscountPercentage?.toString)() : "0";
    obj.plan_policy = message.planPolicy ? Policy.toAmino(message.planPolicy) : Policy.toAmino(Policy.fromPartial({}));
    obj.projects_limit = message.projectsLimit ? (message.projectsLimit?.toString)() : "0";
    if (message.allowedBuyers) {
      obj.allowed_buyers = message.allowedBuyers.map(e => e);
    } else {
      obj.allowed_buyers = message.allowedBuyers;
    }
    return obj;
  },
  fromAminoMsg(object: PlanAminoMsg): Plan {
    return Plan.fromAmino(object.value);
  },
  fromProtoMsg(message: PlanProtoMsg): Plan {
    return Plan.decode(message.value);
  },
  toProto(message: Plan): Uint8Array {
    return Plan.encode(message).finish();
  },
  toProtoMsg(message: Plan): PlanProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.Plan",
      value: Plan.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Plan.typeUrl, Plan);