//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateBTCDelegation, MsgCreateBTCDelegationResponse, MsgBTCUndelegate, MsgBTCUndelegateResponse, MsgAddBTCDelegationInclusionProof, MsgAddBTCDelegationInclusionProofResponse, MsgBtcStakeExpand, MsgBtcStakeExpandResponse } from "./tx";
/** Msg defines the btcstaking Msg service. */
export interface Msg {
  /** CreateBTCDelegation defines a method for creating a BTC delegation */
  createBTCDelegation(request: MsgCreateBTCDelegation): Promise<MsgCreateBTCDelegationResponse>;
  /** BTCUndelegate defines a method for undelegating a previously created BTC delegation */
  btcUndelegate(request: MsgBTCUndelegate): Promise<MsgBTCUndelegateResponse>;
  /** AddBTCDelegationInclusionProof defines a method for adding an inclusion proof for a BTC delegation */
  addBTCDelegationInclusionProof(request: MsgAddBTCDelegationInclusionProof): Promise<MsgAddBTCDelegationInclusionProofResponse>;
  /** BtcStakeExpand defines a method for expanding an existing BTC delegation with additional stake */
  btcStakeExpand(request: MsgBtcStakeExpand): Promise<MsgBtcStakeExpandResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.createBTCDelegation = this.createBTCDelegation.bind(this);
    this.btcUndelegate = this.btcUndelegate.bind(this);
    this.addBTCDelegationInclusionProof = this.addBTCDelegationInclusionProof.bind(this);
    this.btcStakeExpand = this.btcStakeExpand.bind(this);
  }
  createBTCDelegation(request: MsgCreateBTCDelegation): Promise<MsgCreateBTCDelegationResponse> {
    const data = MsgCreateBTCDelegation.encode(request).finish();
    const promise = this.rpc.request("babylon.btcstaking.v1.Msg", "CreateBTCDelegation", data);
    return promise.then(data => MsgCreateBTCDelegationResponse.decode(new BinaryReader(data)));
  }
  btcUndelegate(request: MsgBTCUndelegate): Promise<MsgBTCUndelegateResponse> {
    const data = MsgBTCUndelegate.encode(request).finish();
    const promise = this.rpc.request("babylon.btcstaking.v1.Msg", "BTCUndelegate", data);
    return promise.then(data => MsgBTCUndelegateResponse.decode(new BinaryReader(data)));
  }
  addBTCDelegationInclusionProof(request: MsgAddBTCDelegationInclusionProof): Promise<MsgAddBTCDelegationInclusionProofResponse> {
    const data = MsgAddBTCDelegationInclusionProof.encode(request).finish();
    const promise = this.rpc.request("babylon.btcstaking.v1.Msg", "AddBTCDelegationInclusionProof", data);
    return promise.then(data => MsgAddBTCDelegationInclusionProofResponse.decode(new BinaryReader(data)));
  }
  btcStakeExpand(request: MsgBtcStakeExpand): Promise<MsgBtcStakeExpandResponse> {
    const data = MsgBtcStakeExpand.encode(request).finish();
    const promise = this.rpc.request("babylon.btcstaking.v1.Msg", "BtcStakeExpand", data);
    return promise.then(data => MsgBtcStakeExpandResponse.decode(new BinaryReader(data)));
  }
}
