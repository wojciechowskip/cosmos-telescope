//@ts-nocheck
import { TxRpc } from "../../../../../types";
import { BinaryReader } from "../../../../../binary";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolResponse } from "./tx";
export interface Msg {
  createBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.createBalancerPool = this.createBalancerPool.bind(this);
  }
  createBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponse> {
    const data = MsgCreateBalancerPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.poolmodels.balancer.v1beta1.Msg", "CreateBalancerPool", data);
    return promise.then(data => MsgCreateBalancerPoolResponse.decode(new BinaryReader(data)));
  }
}