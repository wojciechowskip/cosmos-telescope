//@ts-nocheck
import { Plan, PlanAmino, PlanSDKType } from "./plan";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface PlansAddProposal {
  title: string;
  description: string;
  plans: Plan[];
  modify: boolean;
}
export interface PlansAddProposalProtoMsg {
  typeUrl: "/lavanet.lava.plans.PlansAddProposal";
  value: Uint8Array;
}
export interface PlansAddProposalAmino {
  title: string;
  description: string;
  plans: PlanAmino[];
  modify: boolean;
}
export interface PlansAddProposalAminoMsg {
  type: "/lavanet.lava.plans.PlansAddProposal";
  value: PlansAddProposalAmino;
}
export interface PlansAddProposalSDKType {
  title: string;
  description: string;
  plans: PlanSDKType[];
  modify: boolean;
}
export interface PlansDelProposal {
  title: string;
  description: string;
  plans: string[];
}
export interface PlansDelProposalProtoMsg {
  typeUrl: "/lavanet.lava.plans.PlansDelProposal";
  value: Uint8Array;
}
export interface PlansDelProposalAmino {
  title: string;
  description: string;
  plans: string[];
}
export interface PlansDelProposalAminoMsg {
  type: "/lavanet.lava.plans.PlansDelProposal";
  value: PlansDelProposalAmino;
}
export interface PlansDelProposalSDKType {
  title: string;
  description: string;
  plans: string[];
}
function createBasePlansAddProposal(): PlansAddProposal {
  return {
    title: "",
    description: "",
    plans: [],
    modify: false
  };
}
export const PlansAddProposal = {
  typeUrl: "/lavanet.lava.plans.PlansAddProposal",
  is(o: any): o is PlansAddProposal {
    return o && (o.$typeUrl === PlansAddProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.plans) && (!o.plans.length || Plan.is(o.plans[0])) && typeof o.modify === "boolean");
  },
  isSDK(o: any): o is PlansAddProposalSDKType {
    return o && (o.$typeUrl === PlansAddProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.plans) && (!o.plans.length || Plan.isSDK(o.plans[0])) && typeof o.modify === "boolean");
  },
  isAmino(o: any): o is PlansAddProposalAmino {
    return o && (o.$typeUrl === PlansAddProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.plans) && (!o.plans.length || Plan.isAmino(o.plans[0])) && typeof o.modify === "boolean");
  },
  encode(message: PlansAddProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.plans) {
      Plan.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.modify === true) {
      writer.uint32(32).bool(message.modify);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PlansAddProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlansAddProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.plans.push(Plan.decode(reader, reader.uint32()));
          break;
        case 4:
          message.modify = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PlansAddProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      plans: Array.isArray(object?.plans) ? object.plans.map((e: any) => Plan.fromJSON(e)) : [],
      modify: isSet(object.modify) ? Boolean(object.modify) : false
    };
  },
  toJSON(message: PlansAddProposal): JsonSafe<PlansAddProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.plans) {
      obj.plans = message.plans.map(e => e ? Plan.toJSON(e) : undefined);
    } else {
      obj.plans = [];
    }
    message.modify !== undefined && (obj.modify = message.modify);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PlansAddProposal>, I>>(object: I): PlansAddProposal {
    const message = createBasePlansAddProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.plans = object.plans?.map(e => Plan.fromPartial(e)) || [];
    message.modify = object.modify ?? false;
    return message;
  },
  fromAmino(object: PlansAddProposalAmino): PlansAddProposal {
    const message = createBasePlansAddProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.plans = object.plans?.map(e => Plan.fromAmino(e)) || [];
    if (object.modify !== undefined && object.modify !== null) {
      message.modify = object.modify;
    }
    return message;
  },
  toAmino(message: PlansAddProposal): PlansAddProposalAmino {
    const obj: any = {};
    obj.title = message.title ?? "";
    obj.description = message.description ?? "";
    if (message.plans) {
      obj.plans = message.plans.map(e => e ? Plan.toAmino(e) : undefined);
    } else {
      obj.plans = message.plans;
    }
    obj.modify = message.modify ?? false;
    return obj;
  },
  fromAminoMsg(object: PlansAddProposalAminoMsg): PlansAddProposal {
    return PlansAddProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: PlansAddProposalProtoMsg): PlansAddProposal {
    return PlansAddProposal.decode(message.value);
  },
  toProto(message: PlansAddProposal): Uint8Array {
    return PlansAddProposal.encode(message).finish();
  },
  toProtoMsg(message: PlansAddProposal): PlansAddProposalProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.PlansAddProposal",
      value: PlansAddProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PlansAddProposal.typeUrl, PlansAddProposal);
function createBasePlansDelProposal(): PlansDelProposal {
  return {
    title: "",
    description: "",
    plans: []
  };
}
export const PlansDelProposal = {
  typeUrl: "/lavanet.lava.plans.PlansDelProposal",
  is(o: any): o is PlansDelProposal {
    return o && (o.$typeUrl === PlansDelProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.plans) && (!o.plans.length || typeof o.plans[0] === "string"));
  },
  isSDK(o: any): o is PlansDelProposalSDKType {
    return o && (o.$typeUrl === PlansDelProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.plans) && (!o.plans.length || typeof o.plans[0] === "string"));
  },
  isAmino(o: any): o is PlansDelProposalAmino {
    return o && (o.$typeUrl === PlansDelProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.plans) && (!o.plans.length || typeof o.plans[0] === "string"));
  },
  encode(message: PlansDelProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.plans) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PlansDelProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlansDelProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.plans.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PlansDelProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      plans: Array.isArray(object?.plans) ? object.plans.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: PlansDelProposal): JsonSafe<PlansDelProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.plans) {
      obj.plans = message.plans.map(e => e);
    } else {
      obj.plans = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PlansDelProposal>, I>>(object: I): PlansDelProposal {
    const message = createBasePlansDelProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.plans = object.plans?.map(e => e) || [];
    return message;
  },
  fromAmino(object: PlansDelProposalAmino): PlansDelProposal {
    const message = createBasePlansDelProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.plans = object.plans?.map(e => e) || [];
    return message;
  },
  toAmino(message: PlansDelProposal): PlansDelProposalAmino {
    const obj: any = {};
    obj.title = message.title ?? "";
    obj.description = message.description ?? "";
    if (message.plans) {
      obj.plans = message.plans.map(e => e);
    } else {
      obj.plans = message.plans;
    }
    return obj;
  },
  fromAminoMsg(object: PlansDelProposalAminoMsg): PlansDelProposal {
    return PlansDelProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: PlansDelProposalProtoMsg): PlansDelProposal {
    return PlansDelProposal.decode(message.value);
  },
  toProto(message: PlansDelProposal): Uint8Array {
    return PlansDelProposal.encode(message).finish();
  },
  toProtoMsg(message: PlansDelProposal): PlansDelProposalProtoMsg {
    return {
      typeUrl: "/lavanet.lava.plans.PlansDelProposal",
      value: PlansDelProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PlansDelProposal.typeUrl, PlansDelProposal);