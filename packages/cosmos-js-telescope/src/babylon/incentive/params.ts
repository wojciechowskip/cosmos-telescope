//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * Params defines the parameters for the module, including portions of rewards
 * distributed to each type of stakeholder. Note that sum of the portions should
 * be strictly less than 1 so that the rest will go to Comet
 * validators/delegations adapted from
 * https://github.com/cosmos/cosmos-sdk/blob/release/v0.47.x/proto/cosmos/distribution/v1beta1/distribution.proto
 */
export interface Params {
  /**
   * btc_staking_portion is the portion of rewards that goes to Finality
   * Providers/delegations NOTE: the portion of each Finality
   * Provider/delegation is calculated by using its voting power and finality
   * provider's commission
   */
  btcStakingPortion: string;
  /**
   * fp_portion is the percentage of fee_collector balance to collect each block
   * and send to the finality providers reward gauge
   */
  fpPortion: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/babylon.incentive.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module, including portions of rewards
 * distributed to each type of stakeholder. Note that sum of the portions should
 * be strictly less than 1 so that the rest will go to Comet
 * validators/delegations adapted from
 * https://github.com/cosmos/cosmos-sdk/blob/release/v0.47.x/proto/cosmos/distribution/v1beta1/distribution.proto
 */
export interface ParamsAmino {
  /**
   * btc_staking_portion is the portion of rewards that goes to Finality
   * Providers/delegations NOTE: the portion of each Finality
   * Provider/delegation is calculated by using its voting power and finality
   * provider's commission
   */
  btc_staking_portion?: string;
  /**
   * fp_portion is the percentage of fee_collector balance to collect each block
   * and send to the finality providers reward gauge
   */
  fp_portion?: string;
}
export interface ParamsAminoMsg {
  type: "/babylon.incentive.Params";
  value: ParamsAmino;
}
/**
 * Params defines the parameters for the module, including portions of rewards
 * distributed to each type of stakeholder. Note that sum of the portions should
 * be strictly less than 1 so that the rest will go to Comet
 * validators/delegations adapted from
 * https://github.com/cosmos/cosmos-sdk/blob/release/v0.47.x/proto/cosmos/distribution/v1beta1/distribution.proto
 */
export interface ParamsSDKType {
  btc_staking_portion: string;
  fp_portion: string;
}
function createBaseParams(): Params {
  return {
    btcStakingPortion: "",
    fpPortion: ""
  };
}
export const Params = {
  typeUrl: "/babylon.incentive.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.btcStakingPortion === "string" && typeof o.fpPortion === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.btc_staking_portion === "string" && typeof o.fp_portion === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.btc_staking_portion === "string" && typeof o.fp_portion === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.btcStakingPortion !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.btcStakingPortion, 18).atomics);
    }
    if (message.fpPortion !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.fpPortion, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.btcStakingPortion = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.fpPortion = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      btcStakingPortion: isSet(object.btcStakingPortion) ? String(object.btcStakingPortion) : "",
      fpPortion: isSet(object.fpPortion) ? String(object.fpPortion) : ""
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.btcStakingPortion !== undefined && (obj.btcStakingPortion = message.btcStakingPortion);
    message.fpPortion !== undefined && (obj.fpPortion = message.fpPortion);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.btcStakingPortion = object.btcStakingPortion ?? "";
    message.fpPortion = object.fpPortion ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.btc_staking_portion !== undefined && object.btc_staking_portion !== null) {
      message.btcStakingPortion = object.btc_staking_portion;
    }
    if (object.fp_portion !== undefined && object.fp_portion !== null) {
      message.fpPortion = object.fp_portion;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.btc_staking_portion = message.btcStakingPortion === "" ? undefined : message.btcStakingPortion;
    obj.fp_portion = message.fpPortion === "" ? undefined : message.fpPortion;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/babylon.incentive.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);