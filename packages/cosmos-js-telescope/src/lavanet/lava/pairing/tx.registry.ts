//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgStakeProvider, MsgUnstakeProvider, MsgRelayPayment, MsgFreezeProvider, MsgUnfreezeProvider, MsgMoveProviderStake } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/lavanet.lava.pairing.MsgStakeProvider", MsgStakeProvider], ["/lavanet.lava.pairing.MsgUnstakeProvider", MsgUnstakeProvider], ["/lavanet.lava.pairing.MsgRelayPayment", MsgRelayPayment], ["/lavanet.lava.pairing.MsgFreezeProvider", MsgFreezeProvider], ["/lavanet.lava.pairing.MsgUnfreezeProvider", MsgUnfreezeProvider], ["/lavanet.lava.pairing.MsgMoveProviderStake", MsgMoveProviderStake]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    stakeProvider(value: MsgStakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: MsgStakeProvider.encode(value).finish()
      };
    },
    unstakeProvider(value: MsgUnstakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: MsgUnstakeProvider.encode(value).finish()
      };
    },
    relayPayment(value: MsgRelayPayment) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: MsgRelayPayment.encode(value).finish()
      };
    },
    freezeProvider(value: MsgFreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: MsgFreezeProvider.encode(value).finish()
      };
    },
    unfreezeProvider(value: MsgUnfreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: MsgUnfreezeProvider.encode(value).finish()
      };
    },
    moveProviderStake(value: MsgMoveProviderStake) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgMoveProviderStake",
        value: MsgMoveProviderStake.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    stakeProvider(value: MsgStakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value
      };
    },
    unstakeProvider(value: MsgUnstakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value
      };
    },
    relayPayment(value: MsgRelayPayment) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value
      };
    },
    freezeProvider(value: MsgFreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value
      };
    },
    unfreezeProvider(value: MsgUnfreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value
      };
    },
    moveProviderStake(value: MsgMoveProviderStake) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgMoveProviderStake",
        value
      };
    }
  },
  toJSON: {
    stakeProvider(value: MsgStakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: MsgStakeProvider.toJSON(value)
      };
    },
    unstakeProvider(value: MsgUnstakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: MsgUnstakeProvider.toJSON(value)
      };
    },
    relayPayment(value: MsgRelayPayment) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: MsgRelayPayment.toJSON(value)
      };
    },
    freezeProvider(value: MsgFreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: MsgFreezeProvider.toJSON(value)
      };
    },
    unfreezeProvider(value: MsgUnfreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: MsgUnfreezeProvider.toJSON(value)
      };
    },
    moveProviderStake(value: MsgMoveProviderStake) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgMoveProviderStake",
        value: MsgMoveProviderStake.toJSON(value)
      };
    }
  },
  fromJSON: {
    stakeProvider(value: any) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: MsgStakeProvider.fromJSON(value)
      };
    },
    unstakeProvider(value: any) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: MsgUnstakeProvider.fromJSON(value)
      };
    },
    relayPayment(value: any) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: MsgRelayPayment.fromJSON(value)
      };
    },
    freezeProvider(value: any) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: MsgFreezeProvider.fromJSON(value)
      };
    },
    unfreezeProvider(value: any) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: MsgUnfreezeProvider.fromJSON(value)
      };
    },
    moveProviderStake(value: any) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgMoveProviderStake",
        value: MsgMoveProviderStake.fromJSON(value)
      };
    }
  },
  fromPartial: {
    stakeProvider(value: MsgStakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgStakeProvider",
        value: MsgStakeProvider.fromPartial(value)
      };
    },
    unstakeProvider(value: MsgUnstakeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnstakeProvider",
        value: MsgUnstakeProvider.fromPartial(value)
      };
    },
    relayPayment(value: MsgRelayPayment) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgRelayPayment",
        value: MsgRelayPayment.fromPartial(value)
      };
    },
    freezeProvider(value: MsgFreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgFreezeProvider",
        value: MsgFreezeProvider.fromPartial(value)
      };
    },
    unfreezeProvider(value: MsgUnfreezeProvider) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgUnfreezeProvider",
        value: MsgUnfreezeProvider.fromPartial(value)
      };
    },
    moveProviderStake(value: MsgMoveProviderStake) {
      return {
        typeUrl: "/lavanet.lava.pairing.MsgMoveProviderStake",
        value: MsgMoveProviderStake.fromPartial(value)
      };
    }
  }
};