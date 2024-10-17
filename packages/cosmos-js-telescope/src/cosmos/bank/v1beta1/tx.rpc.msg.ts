//@ts-nocheck
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType, MsgMultiSend, MsgMultiSendSDKType, MsgMultiSendResponse, MsgMultiSendResponseSDKType } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /** Send defines a method for sending coins from one account to another account. */
  send(request: MsgSend): Promise<MsgSendResponse>;
  /** MultiSend defines a method for sending coins from some accounts to other accounts. */
  multiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Send defines a method for sending coins from one account to another account. */
  send = async (request: MsgSend): Promise<MsgSendResponse> => {
    const data = MsgSend.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "Send", data);
    return promise.then(data => MsgSendResponse.decode(new BinaryReader(data)));
  };
  /* MultiSend defines a method for sending coins from some accounts to other accounts. */
  multiSend = async (request: MsgMultiSend): Promise<MsgMultiSendResponse> => {
    const data = MsgMultiSend.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "MultiSend", data);
    return promise.then(data => MsgMultiSendResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};