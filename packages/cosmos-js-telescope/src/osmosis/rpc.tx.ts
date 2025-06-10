//@ts-nocheck
import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    auth: {
      v1beta1: new (await import("../cosmos/auth/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  osmosis: {
    concentratedliquidity: {
      poolmodel: {
        concentrated: {
          v1beta1: new (await import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        }
      },
      v1beta1: new (await import("./concentratedliquidity/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gamm: {
      poolmodels: {
        balancer: {
          v1beta1: new (await import("./gamm/poolmodels/balancer/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        stableswap: {
          v1beta1: new (await import("./gamm/poolmodels/stableswap/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        }
      },
      v1beta1: new (await import("./gamm/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    lockup: new (await import("./lockup/tx.rpc.msg")).MsgClientImpl(rpc),
    poolmanager: {
      v1beta1: new (await import("./poolmanager/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});