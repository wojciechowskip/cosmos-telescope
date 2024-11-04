//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgDelegate, MsgDelegateResponse, MsgRedelegate, MsgRedelegateResponse, MsgUnbond, MsgUnbondResponse, MsgClaimRewards, MsgClaimRewardsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse>;
  unbond(request: MsgUnbond): Promise<MsgUnbondResponse>;
  claimRewards(request: MsgClaimRewards): Promise<MsgClaimRewardsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.delegate = this.delegate.bind(this);
    this.redelegate = this.redelegate.bind(this);
    this.unbond = this.unbond.bind(this);
    this.claimRewards = this.claimRewards.bind(this);
  }
  delegate(request: MsgDelegate): Promise<MsgDelegateResponse> {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.dualstaking.Msg", "Delegate", data);
    return promise.then(data => MsgDelegateResponse.decode(new BinaryReader(data)));
  }
  redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse> {
    const data = MsgRedelegate.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.dualstaking.Msg", "Redelegate", data);
    return promise.then(data => MsgRedelegateResponse.decode(new BinaryReader(data)));
  }
  unbond(request: MsgUnbond): Promise<MsgUnbondResponse> {
    const data = MsgUnbond.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.dualstaking.Msg", "Unbond", data);
    return promise.then(data => MsgUnbondResponse.decode(new BinaryReader(data)));
  }
  claimRewards(request: MsgClaimRewards): Promise<MsgClaimRewardsResponse> {
    const data = MsgClaimRewards.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.dualstaking.Msg", "ClaimRewards", data);
    return promise.then(data => MsgClaimRewardsResponse.decode(new BinaryReader(data)));
  }
}