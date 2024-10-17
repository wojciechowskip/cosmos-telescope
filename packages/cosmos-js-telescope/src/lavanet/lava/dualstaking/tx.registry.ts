//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDelegate, MsgRedelegate, MsgUnbond, MsgClaimRewards } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/lavanet.lava.dualstaking.MsgDelegate", MsgDelegate], ["/lavanet.lava.dualstaking.MsgRedelegate", MsgRedelegate], ["/lavanet.lava.dualstaking.MsgUnbond", MsgUnbond], ["/lavanet.lava.dualstaking.MsgClaimRewards", MsgClaimRewards]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/lavanet.lava.dualstaking.MsgDelegate",
        value: MsgDelegate.encode(value).finish()
      };
    },
    redelegate(value: MsgRedelegate) {
      return {
        typeUrl: "/lavanet.lava.dualstaking.MsgRedelegate",
        value: MsgRedelegate.encode(value).finish()
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/lavanet.lava.dualstaking.MsgUnbond",
        value: MsgUnbond.encode(value).finish()
      };
    },
    claimRewards(value: MsgClaimRewards) {
      return {
        typeUrl: "/lavanet.lava.dualstaking.MsgClaimRewards",
        value: MsgClaimRewards.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/lavanet.lava.dualstaking.MsgDelegate",
        value
      };
    },
    redelegate(value: MsgRedelegate) {
      return {
        typeUrl: "/lavanet.lava.dualstaking.MsgRedelegate",
        value
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/lavanet.lava.dualstaking.MsgUnbond",
        value
      };
    },
    claimRewards(value: MsgClaimRewards) {
      return {
        typeUrl: "/lavanet.lava.dualstaking.MsgClaimRewards",
        value
      };
    }
  },
  fromPartial: {
    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/lavanet.lava.dualstaking.MsgDelegate",
        value: MsgDelegate.fromPartial(value)
      };
    },
    redelegate(value: MsgRedelegate) {
      return {
        typeUrl: "/lavanet.lava.dualstaking.MsgRedelegate",
        value: MsgRedelegate.fromPartial(value)
      };
    },
    unbond(value: MsgUnbond) {
      return {
        typeUrl: "/lavanet.lava.dualstaking.MsgUnbond",
        value: MsgUnbond.fromPartial(value)
      };
    },
    claimRewards(value: MsgClaimRewards) {
      return {
        typeUrl: "/lavanet.lava.dualstaking.MsgClaimRewards",
        value: MsgClaimRewards.fromPartial(value)
      };
    }
  }
};