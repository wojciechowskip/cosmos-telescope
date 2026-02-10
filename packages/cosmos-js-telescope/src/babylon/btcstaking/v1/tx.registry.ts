//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgCreateBTCDelegation, MsgBTCUndelegate, MsgAddBTCDelegationInclusionProof, MsgBtcStakeExpand } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/babylon.btcstaking.v1.MsgCreateBTCDelegation", MsgCreateBTCDelegation], ["/babylon.btcstaking.v1.MsgBTCUndelegate", MsgBTCUndelegate], ["/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProof", MsgAddBTCDelegationInclusionProof], ["/babylon.btcstaking.v1.MsgBtcStakeExpand", MsgBtcStakeExpand]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createBTCDelegation(value: MsgCreateBTCDelegation) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgCreateBTCDelegation",
        value: MsgCreateBTCDelegation.encode(value).finish()
      };
    },
    btcUndelegate(value: MsgBTCUndelegate) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgBTCUndelegate",
        value: MsgBTCUndelegate.encode(value).finish()
      };
    },
    addBTCDelegationInclusionProof(value: MsgAddBTCDelegationInclusionProof) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProof",
        value: MsgAddBTCDelegationInclusionProof.encode(value).finish()
      };
    },
    btcStakeExpand(value: MsgBtcStakeExpand) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgBtcStakeExpand",
        value: MsgBtcStakeExpand.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createBTCDelegation(value: MsgCreateBTCDelegation) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgCreateBTCDelegation",
        value
      };
    },
    btcUndelegate(value: MsgBTCUndelegate) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgBTCUndelegate",
        value
      };
    },
    addBTCDelegationInclusionProof(value: MsgAddBTCDelegationInclusionProof) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProof",
        value
      };
    },
    btcStakeExpand(value: MsgBtcStakeExpand) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgBtcStakeExpand",
        value
      };
    }
  },
  toJSON: {
    createBTCDelegation(value: MsgCreateBTCDelegation) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgCreateBTCDelegation",
        value: MsgCreateBTCDelegation.toJSON(value)
      };
    },
    btcUndelegate(value: MsgBTCUndelegate) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgBTCUndelegate",
        value: MsgBTCUndelegate.toJSON(value)
      };
    },
    addBTCDelegationInclusionProof(value: MsgAddBTCDelegationInclusionProof) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProof",
        value: MsgAddBTCDelegationInclusionProof.toJSON(value)
      };
    },
    btcStakeExpand(value: MsgBtcStakeExpand) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgBtcStakeExpand",
        value: MsgBtcStakeExpand.toJSON(value)
      };
    }
  },
  fromJSON: {
    createBTCDelegation(value: any) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgCreateBTCDelegation",
        value: MsgCreateBTCDelegation.fromJSON(value)
      };
    },
    btcUndelegate(value: any) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgBTCUndelegate",
        value: MsgBTCUndelegate.fromJSON(value)
      };
    },
    addBTCDelegationInclusionProof(value: any) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProof",
        value: MsgAddBTCDelegationInclusionProof.fromJSON(value)
      };
    },
    btcStakeExpand(value: any) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgBtcStakeExpand",
        value: MsgBtcStakeExpand.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createBTCDelegation(value: MsgCreateBTCDelegation) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgCreateBTCDelegation",
        value: MsgCreateBTCDelegation.fromPartial(value)
      };
    },
    btcUndelegate(value: MsgBTCUndelegate) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgBTCUndelegate",
        value: MsgBTCUndelegate.fromPartial(value)
      };
    },
    addBTCDelegationInclusionProof(value: MsgAddBTCDelegationInclusionProof) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProof",
        value: MsgAddBTCDelegationInclusionProof.fromPartial(value)
      };
    },
    btcStakeExpand(value: MsgBtcStakeExpand) {
      return {
        typeUrl: "/babylon.btcstaking.v1.MsgBtcStakeExpand",
        value: MsgBtcStakeExpand.fromPartial(value)
      };
    }
  }
};
