//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgGrant, MsgGrantResponse, MsgExec, MsgExecResponse, MsgRevoke, MsgRevokeResponse, MsgRevokeAll, MsgRevokeAllResponse, MsgPruneExpiredGrants, MsgPruneExpiredGrantsResponse } from "./tx";
/** Msg defines the authz Msg service. */
export interface Msg {
  /**
   * Grant grants the provided authorization to the grantee on the granter's
   * account with the provided expiration time. If there is already a grant
   * for the given (granter, grantee, Authorization) triple, then the grant
   * will be overwritten.
   */
  grant(request: MsgGrant): Promise<MsgGrantResponse>;
  /**
   * Exec attempts to execute the provided messages using
   * authorizations granted to the grantee. Each message should have only
   * one signer corresponding to the granter of the authorization.
   */
  exec(request: MsgExec): Promise<MsgExecResponse>;
  /**
   * Revoke revokes any authorization corresponding to the provided method name on the
   * granter's account that has been granted to the grantee.
   */
  revoke(request: MsgRevoke): Promise<MsgRevokeResponse>;
  /** RevokeAll revokes all grants issued by the specified granter. */
  revokeAll(request: MsgRevokeAll): Promise<MsgRevokeAllResponse>;
  /** PruneExpiredGrants prunes the expired grants. Currently up to 75 at a time. */
  pruneExpiredGrants(request: MsgPruneExpiredGrants): Promise<MsgPruneExpiredGrantsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.grant = this.grant.bind(this);
    this.exec = this.exec.bind(this);
    this.revoke = this.revoke.bind(this);
    this.revokeAll = this.revokeAll.bind(this);
    this.pruneExpiredGrants = this.pruneExpiredGrants.bind(this);
  }
  grant(request: MsgGrant): Promise<MsgGrantResponse> {
    const data = MsgGrant.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Grant", data);
    return promise.then(data => MsgGrantResponse.decode(new BinaryReader(data)));
  }
  exec(request: MsgExec): Promise<MsgExecResponse> {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Exec", data);
    return promise.then(data => MsgExecResponse.decode(new BinaryReader(data)));
  }
  revoke(request: MsgRevoke): Promise<MsgRevokeResponse> {
    const data = MsgRevoke.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Revoke", data);
    return promise.then(data => MsgRevokeResponse.decode(new BinaryReader(data)));
  }
  revokeAll(request: MsgRevokeAll): Promise<MsgRevokeAllResponse> {
    const data = MsgRevokeAll.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "RevokeAll", data);
    return promise.then(data => MsgRevokeAllResponse.decode(new BinaryReader(data)));
  }
  pruneExpiredGrants(request: MsgPruneExpiredGrants): Promise<MsgPruneExpiredGrantsResponse> {
    const data = MsgPruneExpiredGrants.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "PruneExpiredGrants", data);
    return promise.then(data => MsgPruneExpiredGrantsResponse.decode(new BinaryReader(data)));
  }
}