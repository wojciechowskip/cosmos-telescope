//@ts-nocheck
import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgWithdrawReward, MsgUpdateParams, MsgSetWithdrawAddress } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/babylon.incentive.MsgWithdrawReward", MsgWithdrawReward], ["/babylon.incentive.MsgUpdateParams", MsgUpdateParams], ["/babylon.incentive.MsgSetWithdrawAddress", MsgSetWithdrawAddress]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    withdrawReward(value: MsgWithdrawReward) {
      return {
        typeUrl: "/babylon.incentive.MsgWithdrawReward",
        value: MsgWithdrawReward.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/babylon.incentive.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/babylon.incentive.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    withdrawReward(value: MsgWithdrawReward) {
      return {
        typeUrl: "/babylon.incentive.MsgWithdrawReward",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/babylon.incentive.MsgUpdateParams",
        value
      };
    },
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/babylon.incentive.MsgSetWithdrawAddress",
        value
      };
    }
  },
  toJSON: {
    withdrawReward(value: MsgWithdrawReward) {
      return {
        typeUrl: "/babylon.incentive.MsgWithdrawReward",
        value: MsgWithdrawReward.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/babylon.incentive.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/babylon.incentive.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.toJSON(value)
      };
    }
  },
  fromJSON: {
    withdrawReward(value: any) {
      return {
        typeUrl: "/babylon.incentive.MsgWithdrawReward",
        value: MsgWithdrawReward.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/babylon.incentive.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    setWithdrawAddress(value: any) {
      return {
        typeUrl: "/babylon.incentive.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.fromJSON(value)
      };
    }
  },
  fromPartial: {
    withdrawReward(value: MsgWithdrawReward) {
      return {
        typeUrl: "/babylon.incentive.MsgWithdrawReward",
        value: MsgWithdrawReward.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/babylon.incentive.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/babylon.incentive.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.fromPartial(value)
      };
    }
  }
};