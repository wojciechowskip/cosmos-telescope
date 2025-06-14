//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgCreatePosition, MsgWithdrawPosition, MsgAddToPosition, MsgCollectSpreadRewards, MsgCollectIncentives, MsgTransferPositions } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition", MsgCreatePosition], ["/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition", MsgWithdrawPosition], ["/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition", MsgAddToPosition], ["/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards", MsgCollectSpreadRewards], ["/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives", MsgCollectIncentives], ["/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions", MsgTransferPositions]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPosition(value: MsgCreatePosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition",
        value: MsgCreatePosition.encode(value).finish()
      };
    },
    withdrawPosition(value: MsgWithdrawPosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value: MsgWithdrawPosition.encode(value).finish()
      };
    },
    addToPosition(value: MsgAddToPosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition",
        value: MsgAddToPosition.encode(value).finish()
      };
    },
    collectSpreadRewards(value: MsgCollectSpreadRewards) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards",
        value: MsgCollectSpreadRewards.encode(value).finish()
      };
    },
    collectIncentives(value: MsgCollectIncentives) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives",
        value: MsgCollectIncentives.encode(value).finish()
      };
    },
    transferPositions(value: MsgTransferPositions) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions",
        value: MsgTransferPositions.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createPosition(value: MsgCreatePosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition",
        value
      };
    },
    withdrawPosition(value: MsgWithdrawPosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value
      };
    },
    addToPosition(value: MsgAddToPosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition",
        value
      };
    },
    collectSpreadRewards(value: MsgCollectSpreadRewards) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards",
        value
      };
    },
    collectIncentives(value: MsgCollectIncentives) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives",
        value
      };
    },
    transferPositions(value: MsgTransferPositions) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions",
        value
      };
    }
  },
  toJSON: {
    createPosition(value: MsgCreatePosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition",
        value: MsgCreatePosition.toJSON(value)
      };
    },
    withdrawPosition(value: MsgWithdrawPosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value: MsgWithdrawPosition.toJSON(value)
      };
    },
    addToPosition(value: MsgAddToPosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition",
        value: MsgAddToPosition.toJSON(value)
      };
    },
    collectSpreadRewards(value: MsgCollectSpreadRewards) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards",
        value: MsgCollectSpreadRewards.toJSON(value)
      };
    },
    collectIncentives(value: MsgCollectIncentives) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives",
        value: MsgCollectIncentives.toJSON(value)
      };
    },
    transferPositions(value: MsgTransferPositions) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions",
        value: MsgTransferPositions.toJSON(value)
      };
    }
  },
  fromJSON: {
    createPosition(value: any) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition",
        value: MsgCreatePosition.fromJSON(value)
      };
    },
    withdrawPosition(value: any) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value: MsgWithdrawPosition.fromJSON(value)
      };
    },
    addToPosition(value: any) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition",
        value: MsgAddToPosition.fromJSON(value)
      };
    },
    collectSpreadRewards(value: any) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards",
        value: MsgCollectSpreadRewards.fromJSON(value)
      };
    },
    collectIncentives(value: any) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives",
        value: MsgCollectIncentives.fromJSON(value)
      };
    },
    transferPositions(value: any) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions",
        value: MsgTransferPositions.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createPosition(value: MsgCreatePosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition",
        value: MsgCreatePosition.fromPartial(value)
      };
    },
    withdrawPosition(value: MsgWithdrawPosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition",
        value: MsgWithdrawPosition.fromPartial(value)
      };
    },
    addToPosition(value: MsgAddToPosition) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition",
        value: MsgAddToPosition.fromPartial(value)
      };
    },
    collectSpreadRewards(value: MsgCollectSpreadRewards) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards",
        value: MsgCollectSpreadRewards.fromPartial(value)
      };
    },
    collectIncentives(value: MsgCollectIncentives) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives",
        value: MsgCollectIncentives.fromPartial(value)
      };
    },
    transferPositions(value: MsgTransferPositions) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions",
        value: MsgTransferPositions.fromPartial(value)
      };
    }
  }
};