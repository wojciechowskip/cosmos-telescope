//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgStakeProvider, MsgStakeProviderResponse, MsgUnstakeProvider, MsgUnstakeProviderResponse, MsgRelayPayment, MsgRelayPaymentResponse, MsgFreezeProvider, MsgFreezeProviderResponse, MsgUnfreezeProvider, MsgUnfreezeProviderResponse, MsgMoveProviderStake, MsgMoveProviderStakeResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  stakeProvider(request: MsgStakeProvider): Promise<MsgStakeProviderResponse>;
  unstakeProvider(request: MsgUnstakeProvider): Promise<MsgUnstakeProviderResponse>;
  relayPayment(request: MsgRelayPayment): Promise<MsgRelayPaymentResponse>;
  freezeProvider(request: MsgFreezeProvider): Promise<MsgFreezeProviderResponse>;
  unfreezeProvider(request: MsgUnfreezeProvider): Promise<MsgUnfreezeProviderResponse>;
  moveProviderStake(request: MsgMoveProviderStake): Promise<MsgMoveProviderStakeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.stakeProvider = this.stakeProvider.bind(this);
    this.unstakeProvider = this.unstakeProvider.bind(this);
    this.relayPayment = this.relayPayment.bind(this);
    this.freezeProvider = this.freezeProvider.bind(this);
    this.unfreezeProvider = this.unfreezeProvider.bind(this);
    this.moveProviderStake = this.moveProviderStake.bind(this);
  }
  stakeProvider(request: MsgStakeProvider): Promise<MsgStakeProviderResponse> {
    const data = MsgStakeProvider.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "StakeProvider", data);
    return promise.then(data => MsgStakeProviderResponse.decode(new BinaryReader(data)));
  }
  unstakeProvider(request: MsgUnstakeProvider): Promise<MsgUnstakeProviderResponse> {
    const data = MsgUnstakeProvider.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "UnstakeProvider", data);
    return promise.then(data => MsgUnstakeProviderResponse.decode(new BinaryReader(data)));
  }
  relayPayment(request: MsgRelayPayment): Promise<MsgRelayPaymentResponse> {
    const data = MsgRelayPayment.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "RelayPayment", data);
    return promise.then(data => MsgRelayPaymentResponse.decode(new BinaryReader(data)));
  }
  freezeProvider(request: MsgFreezeProvider): Promise<MsgFreezeProviderResponse> {
    const data = MsgFreezeProvider.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "FreezeProvider", data);
    return promise.then(data => MsgFreezeProviderResponse.decode(new BinaryReader(data)));
  }
  unfreezeProvider(request: MsgUnfreezeProvider): Promise<MsgUnfreezeProviderResponse> {
    const data = MsgUnfreezeProvider.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "UnfreezeProvider", data);
    return promise.then(data => MsgUnfreezeProviderResponse.decode(new BinaryReader(data)));
  }
  moveProviderStake(request: MsgMoveProviderStake): Promise<MsgMoveProviderStakeResponse> {
    const data = MsgMoveProviderStake.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.pairing.Msg", "MoveProviderStake", data);
    return promise.then(data => MsgMoveProviderStakeResponse.decode(new BinaryReader(data)));
  }
}