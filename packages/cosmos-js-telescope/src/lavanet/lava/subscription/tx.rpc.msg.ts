//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgBuy, MsgBuyResponse, MsgAddProject, MsgAddProjectResponse, MsgDelProject, MsgDelProjectResponse, MsgAutoRenewal, MsgAutoRenewalResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  buy(request: MsgBuy): Promise<MsgBuyResponse>;
  addProject(request: MsgAddProject): Promise<MsgAddProjectResponse>;
  delProject(request: MsgDelProject): Promise<MsgDelProjectResponse>;
  autoRenewal(request: MsgAutoRenewal): Promise<MsgAutoRenewalResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.buy = this.buy.bind(this);
    this.addProject = this.addProject.bind(this);
    this.delProject = this.delProject.bind(this);
    this.autoRenewal = this.autoRenewal.bind(this);
  }
  buy(request: MsgBuy): Promise<MsgBuyResponse> {
    const data = MsgBuy.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Msg", "Buy", data);
    return promise.then(data => MsgBuyResponse.decode(new BinaryReader(data)));
  }
  addProject(request: MsgAddProject): Promise<MsgAddProjectResponse> {
    const data = MsgAddProject.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Msg", "AddProject", data);
    return promise.then(data => MsgAddProjectResponse.decode(new BinaryReader(data)));
  }
  delProject(request: MsgDelProject): Promise<MsgDelProjectResponse> {
    const data = MsgDelProject.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Msg", "DelProject", data);
    return promise.then(data => MsgDelProjectResponse.decode(new BinaryReader(data)));
  }
  autoRenewal(request: MsgAutoRenewal): Promise<MsgAutoRenewalResponse> {
    const data = MsgAutoRenewal.encode(request).finish();
    const promise = this.rpc.request("lavanet.lava.subscription.Msg", "AutoRenewal", data);
    return promise.then(data => MsgAutoRenewalResponse.decode(new BinaryReader(data)));
  }
}