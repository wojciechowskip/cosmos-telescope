//@ts-nocheck
import { MsgGrant, MsgExec, MsgRevoke, MsgRevokeAll, MsgPruneExpiredGrants } from "./tx";
export const AminoConverter = {
  "/cosmos.authz.v1beta1.MsgGrant": {
    aminoType: "cosmos-sdk/MsgGrant",
    toAmino: MsgGrant.toAmino,
    fromAmino: MsgGrant.fromAmino
  },
  "/cosmos.authz.v1beta1.MsgExec": {
    aminoType: "cosmos-sdk/MsgExec",
    toAmino: MsgExec.toAmino,
    fromAmino: MsgExec.fromAmino
  },
  "/cosmos.authz.v1beta1.MsgRevoke": {
    aminoType: "cosmos-sdk/MsgRevoke",
    toAmino: MsgRevoke.toAmino,
    fromAmino: MsgRevoke.fromAmino
  },
  "/cosmos.authz.v1beta1.MsgRevokeAll": {
    aminoType: "cosmos-sdk/MsgRevokeAll",
    toAmino: MsgRevokeAll.toAmino,
    fromAmino: MsgRevokeAll.fromAmino
  },
  "/cosmos.authz.v1beta1.MsgPruneExpiredGrants": {
    aminoType: "cosmos-sdk/MsgPruneExpiredGrants",
    toAmino: MsgPruneExpiredGrants.toAmino,
    fromAmino: MsgPruneExpiredGrants.fromAmino
  }
};