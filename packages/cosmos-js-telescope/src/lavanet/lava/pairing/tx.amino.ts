//@ts-nocheck
import { MsgStakeProvider, MsgUnstakeProvider, MsgRelayPayment, MsgFreezeProvider, MsgUnfreezeProvider, MsgMoveProviderStake } from "./tx";
export const AminoConverter = {
  "/lavanet.lava.pairing.MsgStakeProvider": {
    aminoType: "pairing/StakeProvider",
    toAmino: MsgStakeProvider.toAmino,
    fromAmino: MsgStakeProvider.fromAmino
  },
  "/lavanet.lava.pairing.MsgUnstakeProvider": {
    aminoType: "pairing/UnstakeProvider",
    toAmino: MsgUnstakeProvider.toAmino,
    fromAmino: MsgUnstakeProvider.fromAmino
  },
  "/lavanet.lava.pairing.MsgRelayPayment": {
    aminoType: "pairing/RelayPayment",
    toAmino: MsgRelayPayment.toAmino,
    fromAmino: MsgRelayPayment.fromAmino
  },
  "/lavanet.lava.pairing.MsgFreezeProvider": {
    aminoType: "pairing/Freeze",
    toAmino: MsgFreezeProvider.toAmino,
    fromAmino: MsgFreezeProvider.fromAmino
  },
  "/lavanet.lava.pairing.MsgUnfreezeProvider": {
    aminoType: "pairing/Unfreeze",
    toAmino: MsgUnfreezeProvider.toAmino,
    fromAmino: MsgUnfreezeProvider.fromAmino
  },
  "/lavanet.lava.pairing.MsgMoveProviderStake": {
    aminoType: "pairing/MoveProviderStake",
    toAmino: MsgMoveProviderStake.toAmino,
    fromAmino: MsgMoveProviderStake.fromAmino
  }
};