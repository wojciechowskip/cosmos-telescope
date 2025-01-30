//@ts-nocheck
import { MsgBuy, MsgAddProject, MsgDelProject, MsgAutoRenewal } from "./tx";
export const AminoConverter = {
  "/lavanet.lava.subscription.MsgBuy": {
    aminoType: "subscription/Buy",
    toAmino: MsgBuy.toAmino,
    fromAmino: MsgBuy.fromAmino
  },
  "/lavanet.lava.subscription.MsgAddProject": {
    aminoType: "subscription/AddProject",
    toAmino: MsgAddProject.toAmino,
    fromAmino: MsgAddProject.fromAmino
  },
  "/lavanet.lava.subscription.MsgDelProject": {
    aminoType: "subscription/DelProject",
    toAmino: MsgDelProject.toAmino,
    fromAmino: MsgDelProject.fromAmino
  },
  "/lavanet.lava.subscription.MsgAutoRenewal": {
    aminoType: "subscription/AutoRenewal",
    toAmino: MsgAutoRenewal.toAmino,
    fromAmino: MsgAutoRenewal.fromAmino
  }
};