//@ts-nocheck
import { MsgWithdrawReward, MsgUpdateParams, MsgSetWithdrawAddress } from "./tx";
export const AminoConverter = {
  "/babylon.incentive.MsgWithdrawReward": {
    aminoType: "/babylon.incentive.MsgWithdrawReward",
    toAmino: MsgWithdrawReward.toAmino,
    fromAmino: MsgWithdrawReward.fromAmino
  },
  "/babylon.incentive.MsgUpdateParams": {
    aminoType: "/babylon.incentive.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/babylon.incentive.MsgSetWithdrawAddress": {
    aminoType: "/babylon.incentive.MsgSetWithdrawAddress",
    toAmino: MsgSetWithdrawAddress.toAmino,
    fromAmino: MsgSetWithdrawAddress.fromAmino
  }
};