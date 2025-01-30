//@ts-nocheck
import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.Query")).createRpcQueryExtension(client),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      group: {
        v1: (await import("../cosmos/group/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    },
    lavanet: {
      lava: {
        downtime: {
          v1: (await import("./lava/downtime/v1/query.rpc.Query")).createRpcQueryExtension(client)
        },
        dualstaking: (await import("./lava/dualstaking/query.rpc.Query")).createRpcQueryExtension(client),
        epochstorage: (await import("./lava/epochstorage/query.rpc.Query")).createRpcQueryExtension(client),
        fixationstore: (await import("./lava/fixationstore/query.rpc.Query")).createRpcQueryExtension(client),
        pairing: (await import("./lava/pairing/query.rpc.Query")).createRpcQueryExtension(client),
        plans: (await import("./lava/plans/query.rpc.Query")).createRpcQueryExtension(client),
        projects: (await import("./lava/projects/query.rpc.Query")).createRpcQueryExtension(client),
        spec: (await import("./lava/spec/query.rpc.Query")).createRpcQueryExtension(client),
        subscription: (await import("./lava/subscription/query.rpc.Query")).createRpcQueryExtension(client),
        timerstore: (await import("./lava/timerstore/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};