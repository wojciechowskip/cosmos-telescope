//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgAddKeys, MsgAddKeysResponse, MsgDelKeys, MsgDelKeysResponse, MsgSetPolicy, MsgSetPolicyResponse, MsgSetSubscriptionPolicy, MsgSetSubscriptionPolicyResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  addKeys(request: MsgAddKeys): Promise<MsgAddKeysResponse>;
  delKeys(request: MsgDelKeys): Promise<MsgDelKeysResponse>;
  setPolicy(request: MsgSetPolicy): Promise<MsgSetPolicyResponse>;
  setSubscriptionPolicy(request: MsgSetSubscriptionPolicy): Promise<MsgSetSubscriptionPolicyResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.addKeys = this.addKeys.bind(this);
    this.delKeys = this.delKeys.bind(this);
    this.setPolicy = this.setPolicy.bind(this);
    this.setSubscriptionPolicy = this.setSubscriptionPolicy.bind(this);
  }
  addKeys(request: MsgAddKeys): Promise<MsgAddKeysResponse> {
    const data = MsgAddKeys.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Msg", "AddKeys", data);
    return promise.then(data => MsgAddKeysResponse.decode(new BinaryReader(data)));
  }
  delKeys(request: MsgDelKeys): Promise<MsgDelKeysResponse> {
    const data = MsgDelKeys.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Msg", "DelKeys", data);
    return promise.then(data => MsgDelKeysResponse.decode(new BinaryReader(data)));
  }
  setPolicy(request: MsgSetPolicy): Promise<MsgSetPolicyResponse> {
    const data = MsgSetPolicy.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Msg", "SetPolicy", data);
    return promise.then(data => MsgSetPolicyResponse.decode(new BinaryReader(data)));
  }
  setSubscriptionPolicy(request: MsgSetSubscriptionPolicy): Promise<MsgSetSubscriptionPolicyResponse> {
    const data = MsgSetSubscriptionPolicy.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.projects.Msg", "SetSubscriptionPolicy", data);
    return promise.then(data => MsgSetSubscriptionPolicyResponse.decode(new BinaryReader(data)));
  }
}