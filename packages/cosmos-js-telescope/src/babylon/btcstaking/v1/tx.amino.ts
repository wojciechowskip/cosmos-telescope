//@ts-nocheck
import { MsgCreateBTCDelegation, MsgBTCUndelegate, MsgAddBTCDelegationInclusionProof, MsgBtcStakeExpand } from "./tx";
export const AminoConverter = {
  "/babylon.btcstaking.v1.MsgCreateBTCDelegation": {
    aminoType: "/babylon.btcstaking.v1.MsgCreateBTCDelegation",
    toAmino: MsgCreateBTCDelegation.toAmino,
    fromAmino: MsgCreateBTCDelegation.fromAmino
  },
  "/babylon.btcstaking.v1.MsgBTCUndelegate": {
    aminoType: "/babylon.btcstaking.v1.MsgBTCUndelegate",
    toAmino: MsgBTCUndelegate.toAmino,
    fromAmino: MsgBTCUndelegate.fromAmino
  },
  "/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProof": {
    aminoType: "/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProof",
    toAmino: MsgAddBTCDelegationInclusionProof.toAmino,
    fromAmino: MsgAddBTCDelegationInclusionProof.fromAmino
  },
  "/babylon.btcstaking.v1.MsgBtcStakeExpand": {
    aminoType: "/babylon.btcstaking.v1.MsgBtcStakeExpand",
    toAmino: MsgBtcStakeExpand.toAmino,
    fromAmino: MsgBtcStakeExpand.fromAmino
  }
};
