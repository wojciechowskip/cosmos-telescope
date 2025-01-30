//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryDebugQueryResponse {
  blockReward: bigint;
  valDistPoolBalance: string;
  valAllocPoolBalance: string;
  providerDistPoolBalance: string;
  providerAllocPoolBalance: string;
  providerFullReward: bigint;
  providerRewardNoBonus: bigint;
  block: bigint;
  monthsLeft: bigint;
  validatorReward: bigint;
}
export interface QueryDebugQueryResponseProtoMsg {
  typeUrl: "/lavanet.lava.pairing.QueryDebugQueryResponse";
  value: Uint8Array;
}
export interface QueryDebugQueryResponseAmino {
  block_reward?: string;
  val_dist_pool_balance?: string;
  val_alloc_pool_balance?: string;
  provider_dist_pool_balance?: string;
  provider_alloc_pool_balance?: string;
  provider_full_reward?: string;
  provider_reward_no_bonus?: string;
  block?: string;
  months_left?: string;
  validator_reward?: string;
}
export interface QueryDebugQueryResponseAminoMsg {
  type: "/lavanet.lava.pairing.QueryDebugQueryResponse";
  value: QueryDebugQueryResponseAmino;
}
export interface QueryDebugQueryResponseSDKType {
  block_reward: bigint;
  val_dist_pool_balance: string;
  val_alloc_pool_balance: string;
  provider_dist_pool_balance: string;
  provider_alloc_pool_balance: string;
  provider_full_reward: bigint;
  provider_reward_no_bonus: bigint;
  block: bigint;
  months_left: bigint;
  validator_reward: bigint;
}
function createBaseQueryDebugQueryResponse(): QueryDebugQueryResponse {
  return {
    blockReward: BigInt(0),
    valDistPoolBalance: "",
    valAllocPoolBalance: "",
    providerDistPoolBalance: "",
    providerAllocPoolBalance: "",
    providerFullReward: BigInt(0),
    providerRewardNoBonus: BigInt(0),
    block: BigInt(0),
    monthsLeft: BigInt(0),
    validatorReward: BigInt(0)
  };
}
export const QueryDebugQueryResponse = {
  typeUrl: "/lavanet.lava.pairing.QueryDebugQueryResponse",
  is(o: any): o is QueryDebugQueryResponse {
    return o && (o.$typeUrl === QueryDebugQueryResponse.typeUrl || typeof o.blockReward === "bigint" && typeof o.valDistPoolBalance === "string" && typeof o.valAllocPoolBalance === "string" && typeof o.providerDistPoolBalance === "string" && typeof o.providerAllocPoolBalance === "string" && typeof o.providerFullReward === "bigint" && typeof o.providerRewardNoBonus === "bigint" && typeof o.block === "bigint" && typeof o.monthsLeft === "bigint" && typeof o.validatorReward === "bigint");
  },
  isSDK(o: any): o is QueryDebugQueryResponseSDKType {
    return o && (o.$typeUrl === QueryDebugQueryResponse.typeUrl || typeof o.block_reward === "bigint" && typeof o.val_dist_pool_balance === "string" && typeof o.val_alloc_pool_balance === "string" && typeof o.provider_dist_pool_balance === "string" && typeof o.provider_alloc_pool_balance === "string" && typeof o.provider_full_reward === "bigint" && typeof o.provider_reward_no_bonus === "bigint" && typeof o.block === "bigint" && typeof o.months_left === "bigint" && typeof o.validator_reward === "bigint");
  },
  isAmino(o: any): o is QueryDebugQueryResponseAmino {
    return o && (o.$typeUrl === QueryDebugQueryResponse.typeUrl || typeof o.block_reward === "bigint" && typeof o.val_dist_pool_balance === "string" && typeof o.val_alloc_pool_balance === "string" && typeof o.provider_dist_pool_balance === "string" && typeof o.provider_alloc_pool_balance === "string" && typeof o.provider_full_reward === "bigint" && typeof o.provider_reward_no_bonus === "bigint" && typeof o.block === "bigint" && typeof o.months_left === "bigint" && typeof o.validator_reward === "bigint");
  },
  encode(message: QueryDebugQueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockReward !== BigInt(0)) {
      writer.uint32(8).uint64(message.blockReward);
    }
    if (message.valDistPoolBalance !== "") {
      writer.uint32(18).string(message.valDistPoolBalance);
    }
    if (message.valAllocPoolBalance !== "") {
      writer.uint32(26).string(message.valAllocPoolBalance);
    }
    if (message.providerDistPoolBalance !== "") {
      writer.uint32(34).string(message.providerDistPoolBalance);
    }
    if (message.providerAllocPoolBalance !== "") {
      writer.uint32(42).string(message.providerAllocPoolBalance);
    }
    if (message.providerFullReward !== BigInt(0)) {
      writer.uint32(48).uint64(message.providerFullReward);
    }
    if (message.providerRewardNoBonus !== BigInt(0)) {
      writer.uint32(56).uint64(message.providerRewardNoBonus);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(64).uint64(message.block);
    }
    if (message.monthsLeft !== BigInt(0)) {
      writer.uint32(72).uint64(message.monthsLeft);
    }
    if (message.validatorReward !== BigInt(0)) {
      writer.uint32(80).uint64(message.validatorReward);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDebugQueryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDebugQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockReward = reader.uint64();
          break;
        case 2:
          message.valDistPoolBalance = reader.string();
          break;
        case 3:
          message.valAllocPoolBalance = reader.string();
          break;
        case 4:
          message.providerDistPoolBalance = reader.string();
          break;
        case 5:
          message.providerAllocPoolBalance = reader.string();
          break;
        case 6:
          message.providerFullReward = reader.uint64();
          break;
        case 7:
          message.providerRewardNoBonus = reader.uint64();
          break;
        case 8:
          message.block = reader.uint64();
          break;
        case 9:
          message.monthsLeft = reader.uint64();
          break;
        case 10:
          message.validatorReward = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDebugQueryResponse {
    return {
      blockReward: isSet(object.blockReward) ? BigInt(object.blockReward.toString()) : BigInt(0),
      valDistPoolBalance: isSet(object.valDistPoolBalance) ? String(object.valDistPoolBalance) : "",
      valAllocPoolBalance: isSet(object.valAllocPoolBalance) ? String(object.valAllocPoolBalance) : "",
      providerDistPoolBalance: isSet(object.providerDistPoolBalance) ? String(object.providerDistPoolBalance) : "",
      providerAllocPoolBalance: isSet(object.providerAllocPoolBalance) ? String(object.providerAllocPoolBalance) : "",
      providerFullReward: isSet(object.providerFullReward) ? BigInt(object.providerFullReward.toString()) : BigInt(0),
      providerRewardNoBonus: isSet(object.providerRewardNoBonus) ? BigInt(object.providerRewardNoBonus.toString()) : BigInt(0),
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0),
      monthsLeft: isSet(object.monthsLeft) ? BigInt(object.monthsLeft.toString()) : BigInt(0),
      validatorReward: isSet(object.validatorReward) ? BigInt(object.validatorReward.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryDebugQueryResponse): JsonSafe<QueryDebugQueryResponse> {
    const obj: any = {};
    message.blockReward !== undefined && (obj.blockReward = (message.blockReward || BigInt(0)).toString());
    message.valDistPoolBalance !== undefined && (obj.valDistPoolBalance = message.valDistPoolBalance);
    message.valAllocPoolBalance !== undefined && (obj.valAllocPoolBalance = message.valAllocPoolBalance);
    message.providerDistPoolBalance !== undefined && (obj.providerDistPoolBalance = message.providerDistPoolBalance);
    message.providerAllocPoolBalance !== undefined && (obj.providerAllocPoolBalance = message.providerAllocPoolBalance);
    message.providerFullReward !== undefined && (obj.providerFullReward = (message.providerFullReward || BigInt(0)).toString());
    message.providerRewardNoBonus !== undefined && (obj.providerRewardNoBonus = (message.providerRewardNoBonus || BigInt(0)).toString());
    message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
    message.monthsLeft !== undefined && (obj.monthsLeft = (message.monthsLeft || BigInt(0)).toString());
    message.validatorReward !== undefined && (obj.validatorReward = (message.validatorReward || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDebugQueryResponse>, I>>(object: I): QueryDebugQueryResponse {
    const message = createBaseQueryDebugQueryResponse();
    message.blockReward = object.blockReward !== undefined && object.blockReward !== null ? BigInt(object.blockReward.toString()) : BigInt(0);
    message.valDistPoolBalance = object.valDistPoolBalance ?? "";
    message.valAllocPoolBalance = object.valAllocPoolBalance ?? "";
    message.providerDistPoolBalance = object.providerDistPoolBalance ?? "";
    message.providerAllocPoolBalance = object.providerAllocPoolBalance ?? "";
    message.providerFullReward = object.providerFullReward !== undefined && object.providerFullReward !== null ? BigInt(object.providerFullReward.toString()) : BigInt(0);
    message.providerRewardNoBonus = object.providerRewardNoBonus !== undefined && object.providerRewardNoBonus !== null ? BigInt(object.providerRewardNoBonus.toString()) : BigInt(0);
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    message.monthsLeft = object.monthsLeft !== undefined && object.monthsLeft !== null ? BigInt(object.monthsLeft.toString()) : BigInt(0);
    message.validatorReward = object.validatorReward !== undefined && object.validatorReward !== null ? BigInt(object.validatorReward.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryDebugQueryResponseAmino): QueryDebugQueryResponse {
    const message = createBaseQueryDebugQueryResponse();
    if (object.block_reward !== undefined && object.block_reward !== null) {
      message.blockReward = BigInt(object.block_reward);
    }
    if (object.val_dist_pool_balance !== undefined && object.val_dist_pool_balance !== null) {
      message.valDistPoolBalance = object.val_dist_pool_balance;
    }
    if (object.val_alloc_pool_balance !== undefined && object.val_alloc_pool_balance !== null) {
      message.valAllocPoolBalance = object.val_alloc_pool_balance;
    }
    if (object.provider_dist_pool_balance !== undefined && object.provider_dist_pool_balance !== null) {
      message.providerDistPoolBalance = object.provider_dist_pool_balance;
    }
    if (object.provider_alloc_pool_balance !== undefined && object.provider_alloc_pool_balance !== null) {
      message.providerAllocPoolBalance = object.provider_alloc_pool_balance;
    }
    if (object.provider_full_reward !== undefined && object.provider_full_reward !== null) {
      message.providerFullReward = BigInt(object.provider_full_reward);
    }
    if (object.provider_reward_no_bonus !== undefined && object.provider_reward_no_bonus !== null) {
      message.providerRewardNoBonus = BigInt(object.provider_reward_no_bonus);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    if (object.months_left !== undefined && object.months_left !== null) {
      message.monthsLeft = BigInt(object.months_left);
    }
    if (object.validator_reward !== undefined && object.validator_reward !== null) {
      message.validatorReward = BigInt(object.validator_reward);
    }
    return message;
  },
  toAmino(message: QueryDebugQueryResponse): QueryDebugQueryResponseAmino {
    const obj: any = {};
    obj.block_reward = message.blockReward !== BigInt(0) ? (message.blockReward?.toString)() : undefined;
    obj.val_dist_pool_balance = message.valDistPoolBalance === "" ? undefined : message.valDistPoolBalance;
    obj.val_alloc_pool_balance = message.valAllocPoolBalance === "" ? undefined : message.valAllocPoolBalance;
    obj.provider_dist_pool_balance = message.providerDistPoolBalance === "" ? undefined : message.providerDistPoolBalance;
    obj.provider_alloc_pool_balance = message.providerAllocPoolBalance === "" ? undefined : message.providerAllocPoolBalance;
    obj.provider_full_reward = message.providerFullReward !== BigInt(0) ? (message.providerFullReward?.toString)() : undefined;
    obj.provider_reward_no_bonus = message.providerRewardNoBonus !== BigInt(0) ? (message.providerRewardNoBonus?.toString)() : undefined;
    obj.block = message.block !== BigInt(0) ? (message.block?.toString)() : undefined;
    obj.months_left = message.monthsLeft !== BigInt(0) ? (message.monthsLeft?.toString)() : undefined;
    obj.validator_reward = message.validatorReward !== BigInt(0) ? (message.validatorReward?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDebugQueryResponseAminoMsg): QueryDebugQueryResponse {
    return QueryDebugQueryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDebugQueryResponseProtoMsg): QueryDebugQueryResponse {
    return QueryDebugQueryResponse.decode(message.value);
  },
  toProto(message: QueryDebugQueryResponse): Uint8Array {
    return QueryDebugQueryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDebugQueryResponse): QueryDebugQueryResponseProtoMsg {
    return {
      typeUrl: "/lavanet.lava.pairing.QueryDebugQueryResponse",
      value: QueryDebugQueryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDebugQueryResponse.typeUrl, QueryDebugQueryResponse);