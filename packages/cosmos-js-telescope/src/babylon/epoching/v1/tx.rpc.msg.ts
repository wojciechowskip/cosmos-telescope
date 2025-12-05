//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgWrappedDelegate, MsgWrappedDelegateResponse, MsgWrappedUndelegate, MsgWrappedUndelegateResponse, MsgWrappedBeginRedelegate, MsgWrappedBeginRedelegateResponse, MsgWrappedCancelUnbondingDelegation, MsgWrappedCancelUnbondingDelegationResponse, MsgWrappedEditValidator, MsgWrappedEditValidatorResponse, MsgWrappedStakingUpdateParams, MsgWrappedStakingUpdateParamsResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * WrappedDelegate defines a method for performing a delegation of coins from
   * a delegator to a validator.
   */
  wrappedDelegate(request: MsgWrappedDelegate): Promise<MsgWrappedDelegateResponse>;
  /**
   * WrappedUndelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  wrappedUndelegate(request: MsgWrappedUndelegate): Promise<MsgWrappedUndelegateResponse>;
  /**
   * WrappedBeginRedelegate defines a method for performing a redelegation of
   * coins from a delegator and source validator to a destination validator.
   */
  wrappedBeginRedelegate(request: MsgWrappedBeginRedelegate): Promise<MsgWrappedBeginRedelegateResponse>;
  /**
   * WrappedCancelUnbondingDelegation defines a method for cancelling unbonding of
   * coins from a delegator and source validator to a destination validator.
   */
  wrappedCancelUnbondingDelegation(request: MsgWrappedCancelUnbondingDelegation): Promise<MsgWrappedCancelUnbondingDelegationResponse>;
  /**
   * WrappedEditValidator defines a method for editing the validator
   * information.
   */
  wrappedEditValidator(request: MsgWrappedEditValidator): Promise<MsgWrappedEditValidatorResponse>;
  /**
   * WrappedStakingUpdateParams defines a method for update the parameters
   * of the x/staking module.
   */
  wrappedStakingUpdateParams(request: MsgWrappedStakingUpdateParams): Promise<MsgWrappedStakingUpdateParamsResponse>;
  /** UpdateParams defines a method for updating epoching module parameters. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.wrappedDelegate = this.wrappedDelegate.bind(this);
    this.wrappedUndelegate = this.wrappedUndelegate.bind(this);
    this.wrappedBeginRedelegate = this.wrappedBeginRedelegate.bind(this);
    this.wrappedCancelUnbondingDelegation = this.wrappedCancelUnbondingDelegation.bind(this);
    this.wrappedEditValidator = this.wrappedEditValidator.bind(this);
    this.wrappedStakingUpdateParams = this.wrappedStakingUpdateParams.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  wrappedDelegate(request: MsgWrappedDelegate): Promise<MsgWrappedDelegateResponse> {
    const data = MsgWrappedDelegate.encode(request).finish();
    const promise = this.rpc.request("babylon.epoching.v1.Msg", "WrappedDelegate", data);
    return promise.then(data => MsgWrappedDelegateResponse.decode(new BinaryReader(data)));
  }
  wrappedUndelegate(request: MsgWrappedUndelegate): Promise<MsgWrappedUndelegateResponse> {
    const data = MsgWrappedUndelegate.encode(request).finish();
    const promise = this.rpc.request("babylon.epoching.v1.Msg", "WrappedUndelegate", data);
    return promise.then(data => MsgWrappedUndelegateResponse.decode(new BinaryReader(data)));
  }
  wrappedBeginRedelegate(request: MsgWrappedBeginRedelegate): Promise<MsgWrappedBeginRedelegateResponse> {
    const data = MsgWrappedBeginRedelegate.encode(request).finish();
    const promise = this.rpc.request("babylon.epoching.v1.Msg", "WrappedBeginRedelegate", data);
    return promise.then(data => MsgWrappedBeginRedelegateResponse.decode(new BinaryReader(data)));
  }
  wrappedCancelUnbondingDelegation(request: MsgWrappedCancelUnbondingDelegation): Promise<MsgWrappedCancelUnbondingDelegationResponse> {
    const data = MsgWrappedCancelUnbondingDelegation.encode(request).finish();
    const promise = this.rpc.request("babylon.epoching.v1.Msg", "WrappedCancelUnbondingDelegation", data);
    return promise.then(data => MsgWrappedCancelUnbondingDelegationResponse.decode(new BinaryReader(data)));
  }
  wrappedEditValidator(request: MsgWrappedEditValidator): Promise<MsgWrappedEditValidatorResponse> {
    const data = MsgWrappedEditValidator.encode(request).finish();
    const promise = this.rpc.request("babylon.epoching.v1.Msg", "WrappedEditValidator", data);
    return promise.then(data => MsgWrappedEditValidatorResponse.decode(new BinaryReader(data)));
  }
  wrappedStakingUpdateParams(request: MsgWrappedStakingUpdateParams): Promise<MsgWrappedStakingUpdateParamsResponse> {
    const data = MsgWrappedStakingUpdateParams.encode(request).finish();
    const promise = this.rpc.request("babylon.epoching.v1.Msg", "WrappedStakingUpdateParams", data);
    return promise.then(data => MsgWrappedStakingUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("babylon.epoching.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}