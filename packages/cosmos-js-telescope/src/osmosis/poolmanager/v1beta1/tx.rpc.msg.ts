//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgSplitRouteSwapExactAmountIn, MsgSplitRouteSwapExactAmountInResponse, MsgSplitRouteSwapExactAmountOut, MsgSplitRouteSwapExactAmountOutResponse, MsgSetDenomPairTakerFee, MsgSetDenomPairTakerFeeResponse, MsgSetTakerFeeShareAgreementForDenom, MsgSetTakerFeeShareAgreementForDenomResponse, MsgSetRegisteredAlloyedPool, MsgSetRegisteredAlloyedPoolResponse } from "./tx";
export interface Msg {
  swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
  swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
  splitRouteSwapExactAmountIn(request: MsgSplitRouteSwapExactAmountIn): Promise<MsgSplitRouteSwapExactAmountInResponse>;
  splitRouteSwapExactAmountOut(request: MsgSplitRouteSwapExactAmountOut): Promise<MsgSplitRouteSwapExactAmountOutResponse>;
  setDenomPairTakerFee(request: MsgSetDenomPairTakerFee): Promise<MsgSetDenomPairTakerFeeResponse>;
  setTakerFeeShareAgreementForDenom(request: MsgSetTakerFeeShareAgreementForDenom): Promise<MsgSetTakerFeeShareAgreementForDenomResponse>;
  setRegisteredAlloyedPool(request: MsgSetRegisteredAlloyedPool): Promise<MsgSetRegisteredAlloyedPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.swapExactAmountIn = this.swapExactAmountIn.bind(this);
    this.swapExactAmountOut = this.swapExactAmountOut.bind(this);
    this.splitRouteSwapExactAmountIn = this.splitRouteSwapExactAmountIn.bind(this);
    this.splitRouteSwapExactAmountOut = this.splitRouteSwapExactAmountOut.bind(this);
    this.setDenomPairTakerFee = this.setDenomPairTakerFee.bind(this);
    this.setTakerFeeShareAgreementForDenom = this.setTakerFeeShareAgreementForDenom.bind(this);
    this.setRegisteredAlloyedPool = this.setRegisteredAlloyedPool.bind(this);
  }
  swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse> {
    const data = MsgSwapExactAmountIn.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SwapExactAmountIn", data);
    return promise.then(data => MsgSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse> {
    const data = MsgSwapExactAmountOut.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SwapExactAmountOut", data);
    return promise.then(data => MsgSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
  splitRouteSwapExactAmountIn(request: MsgSplitRouteSwapExactAmountIn): Promise<MsgSplitRouteSwapExactAmountInResponse> {
    const data = MsgSplitRouteSwapExactAmountIn.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SplitRouteSwapExactAmountIn", data);
    return promise.then(data => MsgSplitRouteSwapExactAmountInResponse.decode(new BinaryReader(data)));
  }
  splitRouteSwapExactAmountOut(request: MsgSplitRouteSwapExactAmountOut): Promise<MsgSplitRouteSwapExactAmountOutResponse> {
    const data = MsgSplitRouteSwapExactAmountOut.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SplitRouteSwapExactAmountOut", data);
    return promise.then(data => MsgSplitRouteSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  }
  setDenomPairTakerFee(request: MsgSetDenomPairTakerFee): Promise<MsgSetDenomPairTakerFeeResponse> {
    const data = MsgSetDenomPairTakerFee.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SetDenomPairTakerFee", data);
    return promise.then(data => MsgSetDenomPairTakerFeeResponse.decode(new BinaryReader(data)));
  }
  setTakerFeeShareAgreementForDenom(request: MsgSetTakerFeeShareAgreementForDenom): Promise<MsgSetTakerFeeShareAgreementForDenomResponse> {
    const data = MsgSetTakerFeeShareAgreementForDenom.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SetTakerFeeShareAgreementForDenom", data);
    return promise.then(data => MsgSetTakerFeeShareAgreementForDenomResponse.decode(new BinaryReader(data)));
  }
  setRegisteredAlloyedPool(request: MsgSetRegisteredAlloyedPool): Promise<MsgSetRegisteredAlloyedPoolResponse> {
    const data = MsgSetRegisteredAlloyedPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolmanager.v1beta1.Msg", "SetRegisteredAlloyedPool", data);
    return promise.then(data => MsgSetRegisteredAlloyedPoolResponse.decode(new BinaryReader(data)));
  }
}