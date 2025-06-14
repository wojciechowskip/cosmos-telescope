//@ts-nocheck
import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock, MsgSetRewardReceiverAddress } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/osmosis.lockup.MsgLockTokens", MsgLockTokens], ["/osmosis.lockup.MsgBeginUnlockingAll", MsgBeginUnlockingAll], ["/osmosis.lockup.MsgBeginUnlocking", MsgBeginUnlocking], ["/osmosis.lockup.MsgExtendLockup", MsgExtendLockup], ["/osmosis.lockup.MsgForceUnlock", MsgForceUnlock], ["/osmosis.lockup.MsgSetRewardReceiverAddress", MsgSetRewardReceiverAddress]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    lockTokens(value: MsgLockTokens) {
      return {
        typeUrl: "/osmosis.lockup.MsgLockTokens",
        value: MsgLockTokens.encode(value).finish()
      };
    },
    beginUnlockingAll(value: MsgBeginUnlockingAll) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
        value: MsgBeginUnlockingAll.encode(value).finish()
      };
    },
    beginUnlocking(value: MsgBeginUnlocking) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
        value: MsgBeginUnlocking.encode(value).finish()
      };
    },
    extendLockup(value: MsgExtendLockup) {
      return {
        typeUrl: "/osmosis.lockup.MsgExtendLockup",
        value: MsgExtendLockup.encode(value).finish()
      };
    },
    forceUnlock(value: MsgForceUnlock) {
      return {
        typeUrl: "/osmosis.lockup.MsgForceUnlock",
        value: MsgForceUnlock.encode(value).finish()
      };
    },
    setRewardReceiverAddress(value: MsgSetRewardReceiverAddress) {
      return {
        typeUrl: "/osmosis.lockup.MsgSetRewardReceiverAddress",
        value: MsgSetRewardReceiverAddress.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    lockTokens(value: MsgLockTokens) {
      return {
        typeUrl: "/osmosis.lockup.MsgLockTokens",
        value
      };
    },
    beginUnlockingAll(value: MsgBeginUnlockingAll) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
        value
      };
    },
    beginUnlocking(value: MsgBeginUnlocking) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
        value
      };
    },
    extendLockup(value: MsgExtendLockup) {
      return {
        typeUrl: "/osmosis.lockup.MsgExtendLockup",
        value
      };
    },
    forceUnlock(value: MsgForceUnlock) {
      return {
        typeUrl: "/osmosis.lockup.MsgForceUnlock",
        value
      };
    },
    setRewardReceiverAddress(value: MsgSetRewardReceiverAddress) {
      return {
        typeUrl: "/osmosis.lockup.MsgSetRewardReceiverAddress",
        value
      };
    }
  },
  toJSON: {
    lockTokens(value: MsgLockTokens) {
      return {
        typeUrl: "/osmosis.lockup.MsgLockTokens",
        value: MsgLockTokens.toJSON(value)
      };
    },
    beginUnlockingAll(value: MsgBeginUnlockingAll) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
        value: MsgBeginUnlockingAll.toJSON(value)
      };
    },
    beginUnlocking(value: MsgBeginUnlocking) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
        value: MsgBeginUnlocking.toJSON(value)
      };
    },
    extendLockup(value: MsgExtendLockup) {
      return {
        typeUrl: "/osmosis.lockup.MsgExtendLockup",
        value: MsgExtendLockup.toJSON(value)
      };
    },
    forceUnlock(value: MsgForceUnlock) {
      return {
        typeUrl: "/osmosis.lockup.MsgForceUnlock",
        value: MsgForceUnlock.toJSON(value)
      };
    },
    setRewardReceiverAddress(value: MsgSetRewardReceiverAddress) {
      return {
        typeUrl: "/osmosis.lockup.MsgSetRewardReceiverAddress",
        value: MsgSetRewardReceiverAddress.toJSON(value)
      };
    }
  },
  fromJSON: {
    lockTokens(value: any) {
      return {
        typeUrl: "/osmosis.lockup.MsgLockTokens",
        value: MsgLockTokens.fromJSON(value)
      };
    },
    beginUnlockingAll(value: any) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
        value: MsgBeginUnlockingAll.fromJSON(value)
      };
    },
    beginUnlocking(value: any) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
        value: MsgBeginUnlocking.fromJSON(value)
      };
    },
    extendLockup(value: any) {
      return {
        typeUrl: "/osmosis.lockup.MsgExtendLockup",
        value: MsgExtendLockup.fromJSON(value)
      };
    },
    forceUnlock(value: any) {
      return {
        typeUrl: "/osmosis.lockup.MsgForceUnlock",
        value: MsgForceUnlock.fromJSON(value)
      };
    },
    setRewardReceiverAddress(value: any) {
      return {
        typeUrl: "/osmosis.lockup.MsgSetRewardReceiverAddress",
        value: MsgSetRewardReceiverAddress.fromJSON(value)
      };
    }
  },
  fromPartial: {
    lockTokens(value: MsgLockTokens) {
      return {
        typeUrl: "/osmosis.lockup.MsgLockTokens",
        value: MsgLockTokens.fromPartial(value)
      };
    },
    beginUnlockingAll(value: MsgBeginUnlockingAll) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
        value: MsgBeginUnlockingAll.fromPartial(value)
      };
    },
    beginUnlocking(value: MsgBeginUnlocking) {
      return {
        typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
        value: MsgBeginUnlocking.fromPartial(value)
      };
    },
    extendLockup(value: MsgExtendLockup) {
      return {
        typeUrl: "/osmosis.lockup.MsgExtendLockup",
        value: MsgExtendLockup.fromPartial(value)
      };
    },
    forceUnlock(value: MsgForceUnlock) {
      return {
        typeUrl: "/osmosis.lockup.MsgForceUnlock",
        value: MsgForceUnlock.fromPartial(value)
      };
    },
    setRewardReceiverAddress(value: MsgSetRewardReceiverAddress) {
      return {
        typeUrl: "/osmosis.lockup.MsgSetRewardReceiverAddress",
        value: MsgSetRewardReceiverAddress.fromPartial(value)
      };
    }
  }
};