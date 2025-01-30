//@ts-nocheck
import { MsgAddKeys, MsgDelKeys, MsgSetPolicy, MsgSetSubscriptionPolicy } from "./tx";
export const AminoConverter = {
  "/lavanet.lava.projects.MsgAddKeys": {
    aminoType: "projects/AddKeys",
    toAmino: MsgAddKeys.toAmino,
    fromAmino: MsgAddKeys.fromAmino
  },
  "/lavanet.lava.projects.MsgDelKeys": {
    aminoType: "projects/DelKeys",
    toAmino: MsgDelKeys.toAmino,
    fromAmino: MsgDelKeys.fromAmino
  },
  "/lavanet.lava.projects.MsgSetPolicy": {
    aminoType: "projects/SetPolicy",
    toAmino: MsgSetPolicy.toAmino,
    fromAmino: MsgSetPolicy.fromAmino
  },
  "/lavanet.lava.projects.MsgSetSubscriptionPolicy": {
    aminoType: "projects/SetSubscriptionPolicy",
    toAmino: MsgSetSubscriptionPolicy.toAmino,
    fromAmino: MsgSetSubscriptionPolicy.fromAmino
  }
};