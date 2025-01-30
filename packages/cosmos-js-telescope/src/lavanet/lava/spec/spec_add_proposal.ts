//@ts-nocheck
import { Spec, SpecAmino, SpecSDKType } from "./spec";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface SpecAddProposal {
  title: string;
  description: string;
  specs: Spec[];
}
export interface SpecAddProposalProtoMsg {
  typeUrl: "/lavanet.lava.spec.SpecAddProposal";
  value: Uint8Array;
}
export interface SpecAddProposalAmino {
  title?: string;
  description?: string;
  specs?: SpecAmino[];
}
export interface SpecAddProposalAminoMsg {
  type: "/lavanet.lava.spec.SpecAddProposal";
  value: SpecAddProposalAmino;
}
export interface SpecAddProposalSDKType {
  title: string;
  description: string;
  specs: SpecSDKType[];
}
function createBaseSpecAddProposal(): SpecAddProposal {
  return {
    title: "",
    description: "",
    specs: []
  };
}
export const SpecAddProposal = {
  typeUrl: "/lavanet.lava.spec.SpecAddProposal",
  is(o: any): o is SpecAddProposal {
    return o && (o.$typeUrl === SpecAddProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.specs) && (!o.specs.length || Spec.is(o.specs[0])));
  },
  isSDK(o: any): o is SpecAddProposalSDKType {
    return o && (o.$typeUrl === SpecAddProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.specs) && (!o.specs.length || Spec.isSDK(o.specs[0])));
  },
  isAmino(o: any): o is SpecAddProposalAmino {
    return o && (o.$typeUrl === SpecAddProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.specs) && (!o.specs.length || Spec.isAmino(o.specs[0])));
  },
  encode(message: SpecAddProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.specs) {
      Spec.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpecAddProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpecAddProposal();
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
          message.specs.push(Spec.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SpecAddProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      specs: Array.isArray(object?.specs) ? object.specs.map((e: any) => Spec.fromJSON(e)) : []
    };
  },
  toJSON(message: SpecAddProposal): JsonSafe<SpecAddProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.specs) {
      obj.specs = message.specs.map(e => e ? Spec.toJSON(e) : undefined);
    } else {
      obj.specs = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SpecAddProposal>, I>>(object: I): SpecAddProposal {
    const message = createBaseSpecAddProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.specs = object.specs?.map(e => Spec.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SpecAddProposalAmino): SpecAddProposal {
    const message = createBaseSpecAddProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.specs = object.specs?.map(e => Spec.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SpecAddProposal): SpecAddProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.specs) {
      obj.specs = message.specs.map(e => e ? Spec.toAmino(e) : undefined);
    } else {
      obj.specs = message.specs;
    }
    return obj;
  },
  fromAminoMsg(object: SpecAddProposalAminoMsg): SpecAddProposal {
    return SpecAddProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: SpecAddProposalProtoMsg): SpecAddProposal {
    return SpecAddProposal.decode(message.value);
  },
  toProto(message: SpecAddProposal): Uint8Array {
    return SpecAddProposal.encode(message).finish();
  },
  toProtoMsg(message: SpecAddProposal): SpecAddProposalProtoMsg {
    return {
      typeUrl: "/lavanet.lava.spec.SpecAddProposal",
      value: SpecAddProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SpecAddProposal.typeUrl, SpecAddProposal);