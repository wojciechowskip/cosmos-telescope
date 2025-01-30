//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgAddKeys, MsgDelKeys, MsgSetPolicy, MsgSetSubscriptionPolicy } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/lavanet.lava.projects.MsgAddKeys", MsgAddKeys], ["/lavanet.lava.projects.MsgDelKeys", MsgDelKeys], ["/lavanet.lava.projects.MsgSetPolicy", MsgSetPolicy], ["/lavanet.lava.projects.MsgSetSubscriptionPolicy", MsgSetSubscriptionPolicy]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addKeys(value: MsgAddKeys) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgAddKeys",
        value: MsgAddKeys.encode(value).finish()
      };
    },
    delKeys(value: MsgDelKeys) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgDelKeys",
        value: MsgDelKeys.encode(value).finish()
      };
    },
    setPolicy(value: MsgSetPolicy) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
        value: MsgSetPolicy.encode(value).finish()
      };
    },
    setSubscriptionPolicy(value: MsgSetSubscriptionPolicy) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
        value: MsgSetSubscriptionPolicy.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addKeys(value: MsgAddKeys) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgAddKeys",
        value
      };
    },
    delKeys(value: MsgDelKeys) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgDelKeys",
        value
      };
    },
    setPolicy(value: MsgSetPolicy) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
        value
      };
    },
    setSubscriptionPolicy(value: MsgSetSubscriptionPolicy) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
        value
      };
    }
  },
  toJSON: {
    addKeys(value: MsgAddKeys) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgAddKeys",
        value: MsgAddKeys.toJSON(value)
      };
    },
    delKeys(value: MsgDelKeys) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgDelKeys",
        value: MsgDelKeys.toJSON(value)
      };
    },
    setPolicy(value: MsgSetPolicy) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
        value: MsgSetPolicy.toJSON(value)
      };
    },
    setSubscriptionPolicy(value: MsgSetSubscriptionPolicy) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
        value: MsgSetSubscriptionPolicy.toJSON(value)
      };
    }
  },
  fromJSON: {
    addKeys(value: any) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgAddKeys",
        value: MsgAddKeys.fromJSON(value)
      };
    },
    delKeys(value: any) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgDelKeys",
        value: MsgDelKeys.fromJSON(value)
      };
    },
    setPolicy(value: any) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
        value: MsgSetPolicy.fromJSON(value)
      };
    },
    setSubscriptionPolicy(value: any) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
        value: MsgSetSubscriptionPolicy.fromJSON(value)
      };
    }
  },
  fromPartial: {
    addKeys(value: MsgAddKeys) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgAddKeys",
        value: MsgAddKeys.fromPartial(value)
      };
    },
    delKeys(value: MsgDelKeys) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgDelKeys",
        value: MsgDelKeys.fromPartial(value)
      };
    },
    setPolicy(value: MsgSetPolicy) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetPolicy",
        value: MsgSetPolicy.fromPartial(value)
      };
    },
    setSubscriptionPolicy(value: MsgSetSubscriptionPolicy) {
      return {
        typeUrl: "/lavanet.lava.projects.MsgSetSubscriptionPolicy",
        value: MsgSetSubscriptionPolicy.fromPartial(value)
      };
    }
  }
};