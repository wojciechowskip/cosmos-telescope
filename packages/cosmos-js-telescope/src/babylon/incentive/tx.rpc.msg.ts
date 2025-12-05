//@ts-nocheck
import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgWithdrawReward, MsgWithdrawRewardResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** WithdrawReward defines a method to withdraw rewards of a stakeholder */
  withdrawReward(request: MsgWithdrawReward): Promise<MsgWithdrawRewardResponse>;
  /** UpdateParams updates the incentive module parameters. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * SetWithdrawAddress defines a method to change the withdraw address of a
   * stakeholder
   */
  setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.withdrawReward = this.withdrawReward.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.setWithdrawAddress = this.setWithdrawAddress.bind(this);
  }
  withdrawReward(request: MsgWithdrawReward): Promise<MsgWithdrawRewardResponse> {
    const data = MsgWithdrawReward.encode(request).finish();
    const promise = this.rpc.request("babylon.incentive.Msg", "WithdrawReward", data);
    return promise.then(data => MsgWithdrawRewardResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("babylon.incentive.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse> {
    const data = MsgSetWithdrawAddress.encode(request).finish();
    const promise = this.rpc.request("babylon.incentive.Msg", "SetWithdrawAddress", data);
    return promise.then(data => MsgSetWithdrawAddressResponse.decode(new BinaryReader(data)));
  }
}