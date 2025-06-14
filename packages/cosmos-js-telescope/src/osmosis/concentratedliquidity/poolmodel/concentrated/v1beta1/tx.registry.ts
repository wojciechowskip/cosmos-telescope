//@ts-nocheck
import { TelescopeGeneratedType } from "../../../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgCreateConcentratedPool } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool", MsgCreateConcentratedPool]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createConcentratedPool(value: MsgCreateConcentratedPool) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool",
        value: MsgCreateConcentratedPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createConcentratedPool(value: MsgCreateConcentratedPool) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool",
        value
      };
    }
  },
  toJSON: {
    createConcentratedPool(value: MsgCreateConcentratedPool) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool",
        value: MsgCreateConcentratedPool.toJSON(value)
      };
    }
  },
  fromJSON: {
    createConcentratedPool(value: any) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool",
        value: MsgCreateConcentratedPool.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createConcentratedPool(value: MsgCreateConcentratedPool) {
      return {
        typeUrl: "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool",
        value: MsgCreateConcentratedPool.fromPartial(value)
      };
    }
  }
};