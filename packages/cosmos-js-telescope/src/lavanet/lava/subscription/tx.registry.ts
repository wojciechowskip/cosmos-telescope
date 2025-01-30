//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgBuy, MsgAddProject, MsgDelProject, MsgAutoRenewal } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/lavanet.lava.subscription.MsgBuy", MsgBuy], ["/lavanet.lava.subscription.MsgAddProject", MsgAddProject], ["/lavanet.lava.subscription.MsgDelProject", MsgDelProject], ["/lavanet.lava.subscription.MsgAutoRenewal", MsgAutoRenewal]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    buy(value: MsgBuy) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value: MsgBuy.encode(value).finish()
      };
    },
    addProject(value: MsgAddProject) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value: MsgAddProject.encode(value).finish()
      };
    },
    delProject(value: MsgDelProject) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgDelProject",
        value: MsgDelProject.encode(value).finish()
      };
    },
    autoRenewal(value: MsgAutoRenewal) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAutoRenewal",
        value: MsgAutoRenewal.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    buy(value: MsgBuy) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value
      };
    },
    addProject(value: MsgAddProject) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value
      };
    },
    delProject(value: MsgDelProject) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgDelProject",
        value
      };
    },
    autoRenewal(value: MsgAutoRenewal) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAutoRenewal",
        value
      };
    }
  },
  toJSON: {
    buy(value: MsgBuy) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value: MsgBuy.toJSON(value)
      };
    },
    addProject(value: MsgAddProject) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value: MsgAddProject.toJSON(value)
      };
    },
    delProject(value: MsgDelProject) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgDelProject",
        value: MsgDelProject.toJSON(value)
      };
    },
    autoRenewal(value: MsgAutoRenewal) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAutoRenewal",
        value: MsgAutoRenewal.toJSON(value)
      };
    }
  },
  fromJSON: {
    buy(value: any) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value: MsgBuy.fromJSON(value)
      };
    },
    addProject(value: any) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value: MsgAddProject.fromJSON(value)
      };
    },
    delProject(value: any) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgDelProject",
        value: MsgDelProject.fromJSON(value)
      };
    },
    autoRenewal(value: any) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAutoRenewal",
        value: MsgAutoRenewal.fromJSON(value)
      };
    }
  },
  fromPartial: {
    buy(value: MsgBuy) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgBuy",
        value: MsgBuy.fromPartial(value)
      };
    },
    addProject(value: MsgAddProject) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAddProject",
        value: MsgAddProject.fromPartial(value)
      };
    },
    delProject(value: MsgDelProject) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgDelProject",
        value: MsgDelProject.fromPartial(value)
      };
    },
    autoRenewal(value: MsgAutoRenewal) {
      return {
        typeUrl: "/lavanet.lava.subscription.MsgAutoRenewal",
        value: MsgAutoRenewal.fromPartial(value)
      };
    }
  }
};