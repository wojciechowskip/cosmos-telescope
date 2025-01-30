//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface Subscription {
  /** creator pays for the subscription */
  creator: string;
  /** consumer uses the subscription */
  consumer: string;
  /** when the subscription was last recharged */
  block: bigint;
  /** index (name) of plan */
  planIndex: string;
  /** when the plan was created */
  planBlock: bigint;
  /** total requested duration in months */
  durationBought: bigint;
  /** remaining duration in months */
  durationLeft: bigint;
  /** expiry time of current month */
  monthExpiryTime: bigint;
  /** CU allowance during current month */
  monthCuTotal: bigint;
  /** CU remaining during current month */
  monthCuLeft: bigint;
  /** cluster key */
  cluster: string;
  /** continous subscription usage */
  durationTotal: bigint;
  /** future subscription made with buy --advance-purchase */
  futureSubscription?: FutureSubscription;
  /** the next plan to subscribe to. If none is set, then auto renewal is disabled */
  autoRenewalNextPlan: string;
  /** credit = funds paid for the subscription which are used to pay to providers. reduced after paying providers */
  credit: Coin;
}
export interface SubscriptionProtoMsg {
  typeUrl: "/lavanet.lava.subscription.Subscription";
  value: Uint8Array;
}
export interface SubscriptionAmino {
  /** creator pays for the subscription */
  creator?: string;
  /** consumer uses the subscription */
  consumer?: string;
  /** when the subscription was last recharged */
  block?: string;
  /** index (name) of plan */
  plan_index?: string;
  /** when the plan was created */
  plan_block?: string;
  /** total requested duration in months */
  duration_bought?: string;
  /** remaining duration in months */
  duration_left?: string;
  /** expiry time of current month */
  month_expiry_time?: string;
  /** CU allowance during current month */
  month_cu_total?: string;
  /** CU remaining during current month */
  month_cu_left?: string;
  /** cluster key */
  cluster?: string;
  /** continous subscription usage */
  duration_total?: string;
  /** future subscription made with buy --advance-purchase */
  future_subscription?: FutureSubscriptionAmino;
  /** the next plan to subscribe to. If none is set, then auto renewal is disabled */
  auto_renewal_next_plan?: string;
  /** credit = funds paid for the subscription which are used to pay to providers. reduced after paying providers */
  credit?: CoinAmino;
}
export interface SubscriptionAminoMsg {
  type: "/lavanet.lava.subscription.Subscription";
  value: SubscriptionAmino;
}
export interface SubscriptionSDKType {
  creator: string;
  consumer: string;
  block: bigint;
  plan_index: string;
  plan_block: bigint;
  duration_bought: bigint;
  duration_left: bigint;
  month_expiry_time: bigint;
  month_cu_total: bigint;
  month_cu_left: bigint;
  cluster: string;
  duration_total: bigint;
  future_subscription?: FutureSubscriptionSDKType;
  auto_renewal_next_plan: string;
  credit: CoinSDKType;
}
export interface FutureSubscription {
  /** creator pays for the future subscription. Will replace the original one once activated */
  creator: string;
  /** index (name) of plan */
  planIndex: string;
  /** when the plan was created */
  planBlock: bigint;
  /** total requested duration in months */
  durationBought: bigint;
  /** credit = funds paid for the subscription which are used to pay to providers. reduced after paying providers */
  credit: Coin;
}
export interface FutureSubscriptionProtoMsg {
  typeUrl: "/lavanet.lava.subscription.FutureSubscription";
  value: Uint8Array;
}
export interface FutureSubscriptionAmino {
  /** creator pays for the future subscription. Will replace the original one once activated */
  creator?: string;
  /** index (name) of plan */
  plan_index?: string;
  /** when the plan was created */
  plan_block?: string;
  /** total requested duration in months */
  duration_bought?: string;
  /** credit = funds paid for the subscription which are used to pay to providers. reduced after paying providers */
  credit?: CoinAmino;
}
export interface FutureSubscriptionAminoMsg {
  type: "/lavanet.lava.subscription.FutureSubscription";
  value: FutureSubscriptionAmino;
}
export interface FutureSubscriptionSDKType {
  creator: string;
  plan_index: string;
  plan_block: bigint;
  duration_bought: bigint;
  credit: CoinSDKType;
}
function createBaseSubscription(): Subscription {
  return {
    creator: "",
    consumer: "",
    block: BigInt(0),
    planIndex: "",
    planBlock: BigInt(0),
    durationBought: BigInt(0),
    durationLeft: BigInt(0),
    monthExpiryTime: BigInt(0),
    monthCuTotal: BigInt(0),
    monthCuLeft: BigInt(0),
    cluster: "",
    durationTotal: BigInt(0),
    futureSubscription: undefined,
    autoRenewalNextPlan: "",
    credit: Coin.fromPartial({})
  };
}
export const Subscription = {
  typeUrl: "/lavanet.lava.subscription.Subscription",
  is(o: any): o is Subscription {
    return o && (o.$typeUrl === Subscription.typeUrl || typeof o.creator === "string" && typeof o.consumer === "string" && typeof o.block === "bigint" && typeof o.planIndex === "string" && typeof o.planBlock === "bigint" && typeof o.durationBought === "bigint" && typeof o.durationLeft === "bigint" && typeof o.monthExpiryTime === "bigint" && typeof o.monthCuTotal === "bigint" && typeof o.monthCuLeft === "bigint" && typeof o.cluster === "string" && typeof o.durationTotal === "bigint" && typeof o.autoRenewalNextPlan === "string" && Coin.is(o.credit));
  },
  isSDK(o: any): o is SubscriptionSDKType {
    return o && (o.$typeUrl === Subscription.typeUrl || typeof o.creator === "string" && typeof o.consumer === "string" && typeof o.block === "bigint" && typeof o.plan_index === "string" && typeof o.plan_block === "bigint" && typeof o.duration_bought === "bigint" && typeof o.duration_left === "bigint" && typeof o.month_expiry_time === "bigint" && typeof o.month_cu_total === "bigint" && typeof o.month_cu_left === "bigint" && typeof o.cluster === "string" && typeof o.duration_total === "bigint" && typeof o.auto_renewal_next_plan === "string" && Coin.isSDK(o.credit));
  },
  isAmino(o: any): o is SubscriptionAmino {
    return o && (o.$typeUrl === Subscription.typeUrl || typeof o.creator === "string" && typeof o.consumer === "string" && typeof o.block === "bigint" && typeof o.plan_index === "string" && typeof o.plan_block === "bigint" && typeof o.duration_bought === "bigint" && typeof o.duration_left === "bigint" && typeof o.month_expiry_time === "bigint" && typeof o.month_cu_total === "bigint" && typeof o.month_cu_left === "bigint" && typeof o.cluster === "string" && typeof o.duration_total === "bigint" && typeof o.auto_renewal_next_plan === "string" && Coin.isAmino(o.credit));
  },
  encode(message: Subscription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.consumer !== "") {
      writer.uint32(18).string(message.consumer);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(24).uint64(message.block);
    }
    if (message.planIndex !== "") {
      writer.uint32(34).string(message.planIndex);
    }
    if (message.planBlock !== BigInt(0)) {
      writer.uint32(40).uint64(message.planBlock);
    }
    if (message.durationBought !== BigInt(0)) {
      writer.uint32(48).uint64(message.durationBought);
    }
    if (message.durationLeft !== BigInt(0)) {
      writer.uint32(56).uint64(message.durationLeft);
    }
    if (message.monthExpiryTime !== BigInt(0)) {
      writer.uint32(64).uint64(message.monthExpiryTime);
    }
    if (message.monthCuTotal !== BigInt(0)) {
      writer.uint32(80).uint64(message.monthCuTotal);
    }
    if (message.monthCuLeft !== BigInt(0)) {
      writer.uint32(88).uint64(message.monthCuLeft);
    }
    if (message.cluster !== "") {
      writer.uint32(106).string(message.cluster);
    }
    if (message.durationTotal !== BigInt(0)) {
      writer.uint32(112).uint64(message.durationTotal);
    }
    if (message.futureSubscription !== undefined) {
      FutureSubscription.encode(message.futureSubscription, writer.uint32(130).fork()).ldelim();
    }
    if (message.autoRenewalNextPlan !== "") {
      writer.uint32(138).string(message.autoRenewalNextPlan);
    }
    if (message.credit !== undefined) {
      Coin.encode(message.credit, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Subscription {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.consumer = reader.string();
          break;
        case 3:
          message.block = reader.uint64();
          break;
        case 4:
          message.planIndex = reader.string();
          break;
        case 5:
          message.planBlock = reader.uint64();
          break;
        case 6:
          message.durationBought = reader.uint64();
          break;
        case 7:
          message.durationLeft = reader.uint64();
          break;
        case 8:
          message.monthExpiryTime = reader.uint64();
          break;
        case 10:
          message.monthCuTotal = reader.uint64();
          break;
        case 11:
          message.monthCuLeft = reader.uint64();
          break;
        case 13:
          message.cluster = reader.string();
          break;
        case 14:
          message.durationTotal = reader.uint64();
          break;
        case 16:
          message.futureSubscription = FutureSubscription.decode(reader, reader.uint32());
          break;
        case 17:
          message.autoRenewalNextPlan = reader.string();
          break;
        case 18:
          message.credit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Subscription {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      consumer: isSet(object.consumer) ? String(object.consumer) : "",
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0),
      planIndex: isSet(object.planIndex) ? String(object.planIndex) : "",
      planBlock: isSet(object.planBlock) ? BigInt(object.planBlock.toString()) : BigInt(0),
      durationBought: isSet(object.durationBought) ? BigInt(object.durationBought.toString()) : BigInt(0),
      durationLeft: isSet(object.durationLeft) ? BigInt(object.durationLeft.toString()) : BigInt(0),
      monthExpiryTime: isSet(object.monthExpiryTime) ? BigInt(object.monthExpiryTime.toString()) : BigInt(0),
      monthCuTotal: isSet(object.monthCuTotal) ? BigInt(object.monthCuTotal.toString()) : BigInt(0),
      monthCuLeft: isSet(object.monthCuLeft) ? BigInt(object.monthCuLeft.toString()) : BigInt(0),
      cluster: isSet(object.cluster) ? String(object.cluster) : "",
      durationTotal: isSet(object.durationTotal) ? BigInt(object.durationTotal.toString()) : BigInt(0),
      futureSubscription: isSet(object.futureSubscription) ? FutureSubscription.fromJSON(object.futureSubscription) : undefined,
      autoRenewalNextPlan: isSet(object.autoRenewalNextPlan) ? String(object.autoRenewalNextPlan) : "",
      credit: isSet(object.credit) ? Coin.fromJSON(object.credit) : undefined
    };
  },
  toJSON(message: Subscription): JsonSafe<Subscription> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.consumer !== undefined && (obj.consumer = message.consumer);
    message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
    message.planIndex !== undefined && (obj.planIndex = message.planIndex);
    message.planBlock !== undefined && (obj.planBlock = (message.planBlock || BigInt(0)).toString());
    message.durationBought !== undefined && (obj.durationBought = (message.durationBought || BigInt(0)).toString());
    message.durationLeft !== undefined && (obj.durationLeft = (message.durationLeft || BigInt(0)).toString());
    message.monthExpiryTime !== undefined && (obj.monthExpiryTime = (message.monthExpiryTime || BigInt(0)).toString());
    message.monthCuTotal !== undefined && (obj.monthCuTotal = (message.monthCuTotal || BigInt(0)).toString());
    message.monthCuLeft !== undefined && (obj.monthCuLeft = (message.monthCuLeft || BigInt(0)).toString());
    message.cluster !== undefined && (obj.cluster = message.cluster);
    message.durationTotal !== undefined && (obj.durationTotal = (message.durationTotal || BigInt(0)).toString());
    message.futureSubscription !== undefined && (obj.futureSubscription = message.futureSubscription ? FutureSubscription.toJSON(message.futureSubscription) : undefined);
    message.autoRenewalNextPlan !== undefined && (obj.autoRenewalNextPlan = message.autoRenewalNextPlan);
    message.credit !== undefined && (obj.credit = message.credit ? Coin.toJSON(message.credit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Subscription>, I>>(object: I): Subscription {
    const message = createBaseSubscription();
    message.creator = object.creator ?? "";
    message.consumer = object.consumer ?? "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.planIndex = object.planIndex ?? "";
    message.planBlock = object.planBlock !== undefined && object.planBlock !== null ? BigInt(object.planBlock.toString()) : BigInt(0);
    message.durationBought = object.durationBought !== undefined && object.durationBought !== null ? BigInt(object.durationBought.toString()) : BigInt(0);
    message.durationLeft = object.durationLeft !== undefined && object.durationLeft !== null ? BigInt(object.durationLeft.toString()) : BigInt(0);
    message.monthExpiryTime = object.monthExpiryTime !== undefined && object.monthExpiryTime !== null ? BigInt(object.monthExpiryTime.toString()) : BigInt(0);
    message.monthCuTotal = object.monthCuTotal !== undefined && object.monthCuTotal !== null ? BigInt(object.monthCuTotal.toString()) : BigInt(0);
    message.monthCuLeft = object.monthCuLeft !== undefined && object.monthCuLeft !== null ? BigInt(object.monthCuLeft.toString()) : BigInt(0);
    message.cluster = object.cluster ?? "";
    message.durationTotal = object.durationTotal !== undefined && object.durationTotal !== null ? BigInt(object.durationTotal.toString()) : BigInt(0);
    message.futureSubscription = object.futureSubscription !== undefined && object.futureSubscription !== null ? FutureSubscription.fromPartial(object.futureSubscription) : undefined;
    message.autoRenewalNextPlan = object.autoRenewalNextPlan ?? "";
    message.credit = object.credit !== undefined && object.credit !== null ? Coin.fromPartial(object.credit) : undefined;
    return message;
  },
  fromAmino(object: SubscriptionAmino): Subscription {
    const message = createBaseSubscription();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.consumer !== undefined && object.consumer !== null) {
      message.consumer = object.consumer;
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    if (object.plan_index !== undefined && object.plan_index !== null) {
      message.planIndex = object.plan_index;
    }
    if (object.plan_block !== undefined && object.plan_block !== null) {
      message.planBlock = BigInt(object.plan_block);
    }
    if (object.duration_bought !== undefined && object.duration_bought !== null) {
      message.durationBought = BigInt(object.duration_bought);
    }
    if (object.duration_left !== undefined && object.duration_left !== null) {
      message.durationLeft = BigInt(object.duration_left);
    }
    if (object.month_expiry_time !== undefined && object.month_expiry_time !== null) {
      message.monthExpiryTime = BigInt(object.month_expiry_time);
    }
    if (object.month_cu_total !== undefined && object.month_cu_total !== null) {
      message.monthCuTotal = BigInt(object.month_cu_total);
    }
    if (object.month_cu_left !== undefined && object.month_cu_left !== null) {
      message.monthCuLeft = BigInt(object.month_cu_left);
    }
    if (object.cluster !== undefined && object.cluster !== null) {
      message.cluster = object.cluster;
    }
    if (object.duration_total !== undefined && object.duration_total !== null) {
      message.durationTotal = BigInt(object.duration_total);
    }
    if (object.future_subscription !== undefined && object.future_subscription !== null) {
      message.futureSubscription = FutureSubscription.fromAmino(object.future_subscription);
    }
    if (object.auto_renewal_next_plan !== undefined && object.auto_renewal_next_plan !== null) {
      message.autoRenewalNextPlan = object.auto_renewal_next_plan;
    }
    if (object.credit !== undefined && object.credit !== null) {
      message.credit = Coin.fromAmino(object.credit);
    }
    return message;
  },
  toAmino(message: Subscription): SubscriptionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.consumer = message.consumer === "" ? undefined : message.consumer;
    obj.block = message.block !== BigInt(0) ? (message.block?.toString)() : undefined;
    obj.plan_index = message.planIndex === "" ? undefined : message.planIndex;
    obj.plan_block = message.planBlock !== BigInt(0) ? (message.planBlock?.toString)() : undefined;
    obj.duration_bought = message.durationBought !== BigInt(0) ? (message.durationBought?.toString)() : undefined;
    obj.duration_left = message.durationLeft !== BigInt(0) ? (message.durationLeft?.toString)() : undefined;
    obj.month_expiry_time = message.monthExpiryTime !== BigInt(0) ? (message.monthExpiryTime?.toString)() : undefined;
    obj.month_cu_total = message.monthCuTotal !== BigInt(0) ? (message.monthCuTotal?.toString)() : undefined;
    obj.month_cu_left = message.monthCuLeft !== BigInt(0) ? (message.monthCuLeft?.toString)() : undefined;
    obj.cluster = message.cluster === "" ? undefined : message.cluster;
    obj.duration_total = message.durationTotal !== BigInt(0) ? (message.durationTotal?.toString)() : undefined;
    obj.future_subscription = message.futureSubscription ? FutureSubscription.toAmino(message.futureSubscription) : undefined;
    obj.auto_renewal_next_plan = message.autoRenewalNextPlan === "" ? undefined : message.autoRenewalNextPlan;
    obj.credit = message.credit ? Coin.toAmino(message.credit) : undefined;
    return obj;
  },
  fromAminoMsg(object: SubscriptionAminoMsg): Subscription {
    return Subscription.fromAmino(object.value);
  },
  fromProtoMsg(message: SubscriptionProtoMsg): Subscription {
    return Subscription.decode(message.value);
  },
  toProto(message: Subscription): Uint8Array {
    return Subscription.encode(message).finish();
  },
  toProtoMsg(message: Subscription): SubscriptionProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.Subscription",
      value: Subscription.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Subscription.typeUrl, Subscription);
function createBaseFutureSubscription(): FutureSubscription {
  return {
    creator: "",
    planIndex: "",
    planBlock: BigInt(0),
    durationBought: BigInt(0),
    credit: Coin.fromPartial({})
  };
}
export const FutureSubscription = {
  typeUrl: "/lavanet.lava.subscription.FutureSubscription",
  is(o: any): o is FutureSubscription {
    return o && (o.$typeUrl === FutureSubscription.typeUrl || typeof o.creator === "string" && typeof o.planIndex === "string" && typeof o.planBlock === "bigint" && typeof o.durationBought === "bigint" && Coin.is(o.credit));
  },
  isSDK(o: any): o is FutureSubscriptionSDKType {
    return o && (o.$typeUrl === FutureSubscription.typeUrl || typeof o.creator === "string" && typeof o.plan_index === "string" && typeof o.plan_block === "bigint" && typeof o.duration_bought === "bigint" && Coin.isSDK(o.credit));
  },
  isAmino(o: any): o is FutureSubscriptionAmino {
    return o && (o.$typeUrl === FutureSubscription.typeUrl || typeof o.creator === "string" && typeof o.plan_index === "string" && typeof o.plan_block === "bigint" && typeof o.duration_bought === "bigint" && Coin.isAmino(o.credit));
  },
  encode(message: FutureSubscription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.planIndex !== "") {
      writer.uint32(18).string(message.planIndex);
    }
    if (message.planBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.planBlock);
    }
    if (message.durationBought !== BigInt(0)) {
      writer.uint32(32).uint64(message.durationBought);
    }
    if (message.credit !== undefined) {
      Coin.encode(message.credit, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FutureSubscription {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFutureSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.planIndex = reader.string();
          break;
        case 3:
          message.planBlock = reader.uint64();
          break;
        case 4:
          message.durationBought = reader.uint64();
          break;
        case 5:
          message.credit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FutureSubscription {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      planIndex: isSet(object.planIndex) ? String(object.planIndex) : "",
      planBlock: isSet(object.planBlock) ? BigInt(object.planBlock.toString()) : BigInt(0),
      durationBought: isSet(object.durationBought) ? BigInt(object.durationBought.toString()) : BigInt(0),
      credit: isSet(object.credit) ? Coin.fromJSON(object.credit) : undefined
    };
  },
  toJSON(message: FutureSubscription): JsonSafe<FutureSubscription> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.planIndex !== undefined && (obj.planIndex = message.planIndex);
    message.planBlock !== undefined && (obj.planBlock = (message.planBlock || BigInt(0)).toString());
    message.durationBought !== undefined && (obj.durationBought = (message.durationBought || BigInt(0)).toString());
    message.credit !== undefined && (obj.credit = message.credit ? Coin.toJSON(message.credit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FutureSubscription>, I>>(object: I): FutureSubscription {
    const message = createBaseFutureSubscription();
    message.creator = object.creator ?? "";
    message.planIndex = object.planIndex ?? "";
    message.planBlock = object.planBlock !== undefined && object.planBlock !== null ? BigInt(object.planBlock.toString()) : BigInt(0);
    message.durationBought = object.durationBought !== undefined && object.durationBought !== null ? BigInt(object.durationBought.toString()) : BigInt(0);
    message.credit = object.credit !== undefined && object.credit !== null ? Coin.fromPartial(object.credit) : undefined;
    return message;
  },
  fromAmino(object: FutureSubscriptionAmino): FutureSubscription {
    const message = createBaseFutureSubscription();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.plan_index !== undefined && object.plan_index !== null) {
      message.planIndex = object.plan_index;
    }
    if (object.plan_block !== undefined && object.plan_block !== null) {
      message.planBlock = BigInt(object.plan_block);
    }
    if (object.duration_bought !== undefined && object.duration_bought !== null) {
      message.durationBought = BigInt(object.duration_bought);
    }
    if (object.credit !== undefined && object.credit !== null) {
      message.credit = Coin.fromAmino(object.credit);
    }
    return message;
  },
  toAmino(message: FutureSubscription): FutureSubscriptionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.plan_index = message.planIndex === "" ? undefined : message.planIndex;
    obj.plan_block = message.planBlock !== BigInt(0) ? (message.planBlock?.toString)() : undefined;
    obj.duration_bought = message.durationBought !== BigInt(0) ? (message.durationBought?.toString)() : undefined;
    obj.credit = message.credit ? Coin.toAmino(message.credit) : undefined;
    return obj;
  },
  fromAminoMsg(object: FutureSubscriptionAminoMsg): FutureSubscription {
    return FutureSubscription.fromAmino(object.value);
  },
  fromProtoMsg(message: FutureSubscriptionProtoMsg): FutureSubscription {
    return FutureSubscription.decode(message.value);
  },
  toProto(message: FutureSubscription): Uint8Array {
    return FutureSubscription.encode(message).finish();
  },
  toProtoMsg(message: FutureSubscription): FutureSubscriptionProtoMsg {
    return {
      typeUrl: "/lavanet.lava.subscription.FutureSubscription",
      value: FutureSubscription.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FutureSubscription.typeUrl, FutureSubscription);