//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgSplitRouteSwapExactAmountIn, MsgSplitRouteSwapExactAmountOut, MsgSetDenomPairTakerFee, MsgSetTakerFeeShareAgreementForDenom, MsgSetRegisteredAlloyedPool } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn", MsgSwapExactAmountIn], ["/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut", MsgSwapExactAmountOut], ["/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn", MsgSplitRouteSwapExactAmountIn], ["/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut", MsgSplitRouteSwapExactAmountOut], ["/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee", MsgSetDenomPairTakerFee], ["/osmosis.poolmanager.v1beta1.MsgSetTakerFeeShareAgreementForDenom", MsgSetTakerFeeShareAgreementForDenom], ["/osmosis.poolmanager.v1beta1.MsgSetRegisteredAlloyedPool", MsgSetRegisteredAlloyedPool]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.encode(value).finish()
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.encode(value).finish()
      };
    },
    splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn",
        value: MsgSplitRouteSwapExactAmountIn.encode(value).finish()
      };
    },
    splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut",
        value: MsgSplitRouteSwapExactAmountOut.encode(value).finish()
      };
    },
    setDenomPairTakerFee(value: MsgSetDenomPairTakerFee) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee",
        value: MsgSetDenomPairTakerFee.encode(value).finish()
      };
    },
    setTakerFeeShareAgreementForDenom(value: MsgSetTakerFeeShareAgreementForDenom) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetTakerFeeShareAgreementForDenom",
        value: MsgSetTakerFeeShareAgreementForDenom.encode(value).finish()
      };
    },
    setRegisteredAlloyedPool(value: MsgSetRegisteredAlloyedPool) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetRegisteredAlloyedPool",
        value: MsgSetRegisteredAlloyedPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn",
        value
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut",
        value
      };
    },
    splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn",
        value
      };
    },
    splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut",
        value
      };
    },
    setDenomPairTakerFee(value: MsgSetDenomPairTakerFee) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee",
        value
      };
    },
    setTakerFeeShareAgreementForDenom(value: MsgSetTakerFeeShareAgreementForDenom) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetTakerFeeShareAgreementForDenom",
        value
      };
    },
    setRegisteredAlloyedPool(value: MsgSetRegisteredAlloyedPool) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetRegisteredAlloyedPool",
        value
      };
    }
  },
  toJSON: {
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.toJSON(value)
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.toJSON(value)
      };
    },
    splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn",
        value: MsgSplitRouteSwapExactAmountIn.toJSON(value)
      };
    },
    splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut",
        value: MsgSplitRouteSwapExactAmountOut.toJSON(value)
      };
    },
    setDenomPairTakerFee(value: MsgSetDenomPairTakerFee) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee",
        value: MsgSetDenomPairTakerFee.toJSON(value)
      };
    },
    setTakerFeeShareAgreementForDenom(value: MsgSetTakerFeeShareAgreementForDenom) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetTakerFeeShareAgreementForDenom",
        value: MsgSetTakerFeeShareAgreementForDenom.toJSON(value)
      };
    },
    setRegisteredAlloyedPool(value: MsgSetRegisteredAlloyedPool) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetRegisteredAlloyedPool",
        value: MsgSetRegisteredAlloyedPool.toJSON(value)
      };
    }
  },
  fromJSON: {
    swapExactAmountIn(value: any) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.fromJSON(value)
      };
    },
    swapExactAmountOut(value: any) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.fromJSON(value)
      };
    },
    splitRouteSwapExactAmountIn(value: any) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn",
        value: MsgSplitRouteSwapExactAmountIn.fromJSON(value)
      };
    },
    splitRouteSwapExactAmountOut(value: any) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut",
        value: MsgSplitRouteSwapExactAmountOut.fromJSON(value)
      };
    },
    setDenomPairTakerFee(value: any) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee",
        value: MsgSetDenomPairTakerFee.fromJSON(value)
      };
    },
    setTakerFeeShareAgreementForDenom(value: any) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetTakerFeeShareAgreementForDenom",
        value: MsgSetTakerFeeShareAgreementForDenom.fromJSON(value)
      };
    },
    setRegisteredAlloyedPool(value: any) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetRegisteredAlloyedPool",
        value: MsgSetRegisteredAlloyedPool.fromJSON(value)
      };
    }
  },
  fromPartial: {
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.fromPartial(value)
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.fromPartial(value)
      };
    },
    splitRouteSwapExactAmountIn(value: MsgSplitRouteSwapExactAmountIn) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn",
        value: MsgSplitRouteSwapExactAmountIn.fromPartial(value)
      };
    },
    splitRouteSwapExactAmountOut(value: MsgSplitRouteSwapExactAmountOut) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut",
        value: MsgSplitRouteSwapExactAmountOut.fromPartial(value)
      };
    },
    setDenomPairTakerFee(value: MsgSetDenomPairTakerFee) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee",
        value: MsgSetDenomPairTakerFee.fromPartial(value)
      };
    },
    setTakerFeeShareAgreementForDenom(value: MsgSetTakerFeeShareAgreementForDenom) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetTakerFeeShareAgreementForDenom",
        value: MsgSetTakerFeeShareAgreementForDenom.fromPartial(value)
      };
    },
    setRegisteredAlloyedPool(value: MsgSetRegisteredAlloyedPool) {
      return {
        typeUrl: "/osmosis.poolmanager.v1beta1.MsgSetRegisteredAlloyedPool",
        value: MsgSetRegisteredAlloyedPool.fromPartial(value)
      };
    }
  }
};