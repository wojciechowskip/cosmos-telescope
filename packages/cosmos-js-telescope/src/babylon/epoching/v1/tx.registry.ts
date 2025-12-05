//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgWrappedDelegate, MsgWrappedUndelegate, MsgWrappedBeginRedelegate, MsgWrappedCancelUnbondingDelegation, MsgWrappedEditValidator, MsgWrappedStakingUpdateParams, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/babylon.epoching.v1.MsgWrappedDelegate", MsgWrappedDelegate], ["/babylon.epoching.v1.MsgWrappedUndelegate", MsgWrappedUndelegate], ["/babylon.epoching.v1.MsgWrappedBeginRedelegate", MsgWrappedBeginRedelegate], ["/babylon.epoching.v1.MsgWrappedCancelUnbondingDelegation", MsgWrappedCancelUnbondingDelegation], ["/babylon.epoching.v1.MsgWrappedEditValidator", MsgWrappedEditValidator], ["/babylon.epoching.v1.MsgWrappedStakingUpdateParams", MsgWrappedStakingUpdateParams], ["/babylon.epoching.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    wrappedDelegate(value: MsgWrappedDelegate) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedDelegate",
        value: MsgWrappedDelegate.encode(value).finish()
      };
    },
    wrappedUndelegate(value: MsgWrappedUndelegate) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedUndelegate",
        value: MsgWrappedUndelegate.encode(value).finish()
      };
    },
    wrappedBeginRedelegate(value: MsgWrappedBeginRedelegate) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedBeginRedelegate",
        value: MsgWrappedBeginRedelegate.encode(value).finish()
      };
    },
    wrappedCancelUnbondingDelegation(value: MsgWrappedCancelUnbondingDelegation) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedCancelUnbondingDelegation",
        value: MsgWrappedCancelUnbondingDelegation.encode(value).finish()
      };
    },
    wrappedEditValidator(value: MsgWrappedEditValidator) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedEditValidator",
        value: MsgWrappedEditValidator.encode(value).finish()
      };
    },
    wrappedStakingUpdateParams(value: MsgWrappedStakingUpdateParams) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedStakingUpdateParams",
        value: MsgWrappedStakingUpdateParams.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    wrappedDelegate(value: MsgWrappedDelegate) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedDelegate",
        value
      };
    },
    wrappedUndelegate(value: MsgWrappedUndelegate) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedUndelegate",
        value
      };
    },
    wrappedBeginRedelegate(value: MsgWrappedBeginRedelegate) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedBeginRedelegate",
        value
      };
    },
    wrappedCancelUnbondingDelegation(value: MsgWrappedCancelUnbondingDelegation) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedCancelUnbondingDelegation",
        value
      };
    },
    wrappedEditValidator(value: MsgWrappedEditValidator) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedEditValidator",
        value
      };
    },
    wrappedStakingUpdateParams(value: MsgWrappedStakingUpdateParams) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedStakingUpdateParams",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgUpdateParams",
        value
      };
    }
  },
  toJSON: {
    wrappedDelegate(value: MsgWrappedDelegate) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedDelegate",
        value: MsgWrappedDelegate.toJSON(value)
      };
    },
    wrappedUndelegate(value: MsgWrappedUndelegate) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedUndelegate",
        value: MsgWrappedUndelegate.toJSON(value)
      };
    },
    wrappedBeginRedelegate(value: MsgWrappedBeginRedelegate) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedBeginRedelegate",
        value: MsgWrappedBeginRedelegate.toJSON(value)
      };
    },
    wrappedCancelUnbondingDelegation(value: MsgWrappedCancelUnbondingDelegation) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedCancelUnbondingDelegation",
        value: MsgWrappedCancelUnbondingDelegation.toJSON(value)
      };
    },
    wrappedEditValidator(value: MsgWrappedEditValidator) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedEditValidator",
        value: MsgWrappedEditValidator.toJSON(value)
      };
    },
    wrappedStakingUpdateParams(value: MsgWrappedStakingUpdateParams) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedStakingUpdateParams",
        value: MsgWrappedStakingUpdateParams.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    }
  },
  fromJSON: {
    wrappedDelegate(value: any) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedDelegate",
        value: MsgWrappedDelegate.fromJSON(value)
      };
    },
    wrappedUndelegate(value: any) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedUndelegate",
        value: MsgWrappedUndelegate.fromJSON(value)
      };
    },
    wrappedBeginRedelegate(value: any) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedBeginRedelegate",
        value: MsgWrappedBeginRedelegate.fromJSON(value)
      };
    },
    wrappedCancelUnbondingDelegation(value: any) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedCancelUnbondingDelegation",
        value: MsgWrappedCancelUnbondingDelegation.fromJSON(value)
      };
    },
    wrappedEditValidator(value: any) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedEditValidator",
        value: MsgWrappedEditValidator.fromJSON(value)
      };
    },
    wrappedStakingUpdateParams(value: any) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedStakingUpdateParams",
        value: MsgWrappedStakingUpdateParams.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    wrappedDelegate(value: MsgWrappedDelegate) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedDelegate",
        value: MsgWrappedDelegate.fromPartial(value)
      };
    },
    wrappedUndelegate(value: MsgWrappedUndelegate) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedUndelegate",
        value: MsgWrappedUndelegate.fromPartial(value)
      };
    },
    wrappedBeginRedelegate(value: MsgWrappedBeginRedelegate) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedBeginRedelegate",
        value: MsgWrappedBeginRedelegate.fromPartial(value)
      };
    },
    wrappedCancelUnbondingDelegation(value: MsgWrappedCancelUnbondingDelegation) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedCancelUnbondingDelegation",
        value: MsgWrappedCancelUnbondingDelegation.fromPartial(value)
      };
    },
    wrappedEditValidator(value: MsgWrappedEditValidator) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedEditValidator",
        value: MsgWrappedEditValidator.fromPartial(value)
      };
    },
    wrappedStakingUpdateParams(value: MsgWrappedStakingUpdateParams) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgWrappedStakingUpdateParams",
        value: MsgWrappedStakingUpdateParams.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/babylon.epoching.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};