//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface Endpoint {
  iPPORT: string;
  geolocation: number;
  addons: string[];
  apiInterfaces: string[];
  extensions: string[];
}
export interface EndpointProtoMsg {
  typeUrl: "/lavanet.lava.epochstorage.Endpoint";
  value: Uint8Array;
}
export interface EndpointAmino {
  iPPORT?: string;
  geolocation?: number;
  addons?: string[];
  api_interfaces?: string[];
  extensions?: string[];
}
export interface EndpointAminoMsg {
  type: "/lavanet.lava.epochstorage.Endpoint";
  value: EndpointAmino;
}
export interface EndpointSDKType {
  iPPORT: string;
  geolocation: number;
  addons: string[];
  api_interfaces: string[];
  extensions: string[];
}
function createBaseEndpoint(): Endpoint {
  return {
    iPPORT: "",
    geolocation: 0,
    addons: [],
    apiInterfaces: [],
    extensions: []
  };
}
export const Endpoint = {
  typeUrl: "/lavanet.lava.epochstorage.Endpoint",
  is(o: any): o is Endpoint {
    return o && (o.$typeUrl === Endpoint.typeUrl || typeof o.iPPORT === "string" && typeof o.geolocation === "number" && Array.isArray(o.addons) && (!o.addons.length || typeof o.addons[0] === "string") && Array.isArray(o.apiInterfaces) && (!o.apiInterfaces.length || typeof o.apiInterfaces[0] === "string") && Array.isArray(o.extensions) && (!o.extensions.length || typeof o.extensions[0] === "string"));
  },
  isSDK(o: any): o is EndpointSDKType {
    return o && (o.$typeUrl === Endpoint.typeUrl || typeof o.iPPORT === "string" && typeof o.geolocation === "number" && Array.isArray(o.addons) && (!o.addons.length || typeof o.addons[0] === "string") && Array.isArray(o.api_interfaces) && (!o.api_interfaces.length || typeof o.api_interfaces[0] === "string") && Array.isArray(o.extensions) && (!o.extensions.length || typeof o.extensions[0] === "string"));
  },
  isAmino(o: any): o is EndpointAmino {
    return o && (o.$typeUrl === Endpoint.typeUrl || typeof o.iPPORT === "string" && typeof o.geolocation === "number" && Array.isArray(o.addons) && (!o.addons.length || typeof o.addons[0] === "string") && Array.isArray(o.api_interfaces) && (!o.api_interfaces.length || typeof o.api_interfaces[0] === "string") && Array.isArray(o.extensions) && (!o.extensions.length || typeof o.extensions[0] === "string"));
  },
  encode(message: Endpoint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iPPORT !== "") {
      writer.uint32(10).string(message.iPPORT);
    }
    if (message.geolocation !== 0) {
      writer.uint32(24).int32(message.geolocation);
    }
    for (const v of message.addons) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.apiInterfaces) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.extensions) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iPPORT = reader.string();
          break;
        case 3:
          message.geolocation = reader.int32();
          break;
        case 4:
          message.addons.push(reader.string());
          break;
        case 5:
          message.apiInterfaces.push(reader.string());
          break;
        case 6:
          message.extensions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Endpoint {
    return {
      iPPORT: isSet(object.iPPORT) ? String(object.iPPORT) : "",
      geolocation: isSet(object.geolocation) ? Number(object.geolocation) : 0,
      addons: Array.isArray(object?.addons) ? object.addons.map((e: any) => String(e)) : [],
      apiInterfaces: Array.isArray(object?.apiInterfaces) ? object.apiInterfaces.map((e: any) => String(e)) : [],
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Endpoint): JsonSafe<Endpoint> {
    const obj: any = {};
    message.iPPORT !== undefined && (obj.iPPORT = message.iPPORT);
    message.geolocation !== undefined && (obj.geolocation = Math.round(message.geolocation));
    if (message.addons) {
      obj.addons = message.addons.map(e => e);
    } else {
      obj.addons = [];
    }
    if (message.apiInterfaces) {
      obj.apiInterfaces = message.apiInterfaces.map(e => e);
    } else {
      obj.apiInterfaces = [];
    }
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e);
    } else {
      obj.extensions = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Endpoint>, I>>(object: I): Endpoint {
    const message = createBaseEndpoint();
    message.iPPORT = object.iPPORT ?? "";
    message.geolocation = object.geolocation ?? 0;
    message.addons = object.addons?.map(e => e) || [];
    message.apiInterfaces = object.apiInterfaces?.map(e => e) || [];
    message.extensions = object.extensions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: EndpointAmino): Endpoint {
    const message = createBaseEndpoint();
    if (object.iPPORT !== undefined && object.iPPORT !== null) {
      message.iPPORT = object.iPPORT;
    }
    if (object.geolocation !== undefined && object.geolocation !== null) {
      message.geolocation = object.geolocation;
    }
    message.addons = object.addons?.map(e => e) || [];
    message.apiInterfaces = object.api_interfaces?.map(e => e) || [];
    message.extensions = object.extensions?.map(e => e) || [];
    return message;
  },
  toAmino(message: Endpoint): EndpointAmino {
    const obj: any = {};
    obj.iPPORT = message.iPPORT === "" ? undefined : message.iPPORT;
    obj.geolocation = message.geolocation === 0 ? undefined : message.geolocation;
    if (message.addons) {
      obj.addons = message.addons.map(e => e);
    } else {
      obj.addons = message.addons;
    }
    if (message.apiInterfaces) {
      obj.api_interfaces = message.apiInterfaces.map(e => e);
    } else {
      obj.api_interfaces = message.apiInterfaces;
    }
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e);
    } else {
      obj.extensions = message.extensions;
    }
    return obj;
  },
  fromAminoMsg(object: EndpointAminoMsg): Endpoint {
    return Endpoint.fromAmino(object.value);
  },
  fromProtoMsg(message: EndpointProtoMsg): Endpoint {
    return Endpoint.decode(message.value);
  },
  toProto(message: Endpoint): Uint8Array {
    return Endpoint.encode(message).finish();
  },
  toProtoMsg(message: Endpoint): EndpointProtoMsg {
    return {
      typeUrl: "/lavanet.lava.epochstorage.Endpoint",
      value: Endpoint.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Endpoint.typeUrl, Endpoint);