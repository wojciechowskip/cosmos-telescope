//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** TransactionKey is the key of a transaction in a block */
export interface TransactionKey {
  index: number;
  hash: Uint8Array;
}
export interface TransactionKeyProtoMsg {
  typeUrl: "/babylon.btcstaking.v1.TransactionKey";
  value: Uint8Array;
}
/** TransactionKey is the key of a transaction in a block */
export interface TransactionKeyAmino {
  index?: number;
  hash?: string;
}
export interface TransactionKeyAminoMsg {
  type: "/babylon.btcstaking.v1.TransactionKey";
  value: TransactionKeyAmino;
}
/** TransactionKey is the key of a transaction in a block */
export interface TransactionKeySDKType {
  index: number;
  hash: Uint8Array;
}
/** InclusionProof proves the existence of a tx in a block */
export interface InclusionProof {
  key?: TransactionKey;
  proof: Uint8Array;
}
export interface InclusionProofProtoMsg {
  typeUrl: "/babylon.btcstaking.v1.InclusionProof";
  value: Uint8Array;
}
/** InclusionProof proves the existence of a tx in a block */
export interface InclusionProofAmino {
  key?: TransactionKeyAmino;
  proof?: string;
}
export interface InclusionProofAminoMsg {
  type: "/babylon.btcstaking.v1.InclusionProof";
  value: InclusionProofAmino;
}
/** InclusionProof proves the existence of a tx in a block */
export interface InclusionProofSDKType {
  key?: TransactionKeySDKType;
  proof: Uint8Array;
}
/** ProofOfPossessionBTC is the proof of possession that a Babylon address and a Bitcoin key pair are held by the same person */
export interface ProofOfPossessionBTC {
  btcSigType: number;
  btcSig: Uint8Array;
}
export interface ProofOfPossessionBTCProtoMsg {
  typeUrl: "/babylon.btcstaking.v1.ProofOfPossessionBTC";
  value: Uint8Array;
}
/** ProofOfPossessionBTC is the proof of possession that a Babylon address and a Bitcoin key pair are held by the same person */
export interface ProofOfPossessionBTCAmino {
  btc_sig_type?: number;
  btc_sig?: string;
}
export interface ProofOfPossessionBTCAminoMsg {
  type: "/babylon.btcstaking.v1.ProofOfPossessionBTC";
  value: ProofOfPossessionBTCAmino;
}
/** ProofOfPossessionBTC is the proof of possession that a Babylon address and a Bitcoin key pair are held by the same person */
export interface ProofOfPossessionBTCSDKType {
  btc_sig_type: number;
  btc_sig: Uint8Array;
}
function createBaseTransactionKey(): TransactionKey {
  return {
    index: 0,
    hash: new Uint8Array()
  };
}
export const TransactionKey = {
  typeUrl: "/babylon.btcstaking.v1.TransactionKey",
  is(o: any): o is TransactionKey {
    return o && (o.$typeUrl === TransactionKey.typeUrl || typeof o.index === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
  },
  isSDK(o: any): o is TransactionKeySDKType {
    return o && (o.$typeUrl === TransactionKey.typeUrl || typeof o.index === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
  },
  isAmino(o: any): o is TransactionKeyAmino {
    return o && (o.$typeUrl === TransactionKey.typeUrl || typeof o.index === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
  },
  encode(message: TransactionKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransactionKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TransactionKey {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  toJSON(message: TransactionKey): JsonSafe<TransactionKey> {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TransactionKey>, I>>(object: I): TransactionKey {
    const message = createBaseTransactionKey();
    message.index = object.index ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TransactionKeyAmino): TransactionKey {
    const message = createBaseTransactionKey();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: TransactionKey): TransactionKeyAmino {
    const obj: any = {};
    obj.index = message.index === 0 ? undefined : message.index;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransactionKeyAminoMsg): TransactionKey {
    return TransactionKey.fromAmino(object.value);
  },
  fromProtoMsg(message: TransactionKeyProtoMsg): TransactionKey {
    return TransactionKey.decode(message.value);
  },
  toProto(message: TransactionKey): Uint8Array {
    return TransactionKey.encode(message).finish();
  },
  toProtoMsg(message: TransactionKey): TransactionKeyProtoMsg {
    return {
      typeUrl: "/babylon.btcstaking.v1.TransactionKey",
      value: TransactionKey.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TransactionKey.typeUrl, TransactionKey);
function createBaseInclusionProof(): InclusionProof {
  return {
    key: undefined,
    proof: new Uint8Array()
  };
}
export const InclusionProof = {
  typeUrl: "/babylon.btcstaking.v1.InclusionProof",
  is(o: any): o is InclusionProof {
    return o && (o.$typeUrl === InclusionProof.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string"));
  },
  isSDK(o: any): o is InclusionProofSDKType {
    return o && (o.$typeUrl === InclusionProof.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string"));
  },
  isAmino(o: any): o is InclusionProofAmino {
    return o && (o.$typeUrl === InclusionProof.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string"));
  },
  encode(message: InclusionProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      TransactionKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InclusionProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInclusionProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = TransactionKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InclusionProof {
    return {
      key: isSet(object.key) ? TransactionKey.fromJSON(object.key) : undefined,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array()
    };
  },
  toJSON(message: InclusionProof): JsonSafe<InclusionProof> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key ? TransactionKey.toJSON(message.key) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<InclusionProof>, I>>(object: I): InclusionProof {
    const message = createBaseInclusionProof();
    message.key = object.key !== undefined && object.key !== null ? TransactionKey.fromPartial(object.key) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    return message;
  },
  fromAmino(object: InclusionProofAmino): InclusionProof {
    const message = createBaseInclusionProof();
    if (object.key !== undefined && object.key !== null) {
      message.key = TransactionKey.fromAmino(object.key);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    return message;
  },
  toAmino(message: InclusionProof): InclusionProofAmino {
    const obj: any = {};
    obj.key = message.key ? TransactionKey.toAmino(message.key) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    return obj;
  },
  fromAminoMsg(object: InclusionProofAminoMsg): InclusionProof {
    return InclusionProof.fromAmino(object.value);
  },
  fromProtoMsg(message: InclusionProofProtoMsg): InclusionProof {
    return InclusionProof.decode(message.value);
  },
  toProto(message: InclusionProof): Uint8Array {
    return InclusionProof.encode(message).finish();
  },
  toProtoMsg(message: InclusionProof): InclusionProofProtoMsg {
    return {
      typeUrl: "/babylon.btcstaking.v1.InclusionProof",
      value: InclusionProof.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InclusionProof.typeUrl, InclusionProof);
function createBaseProofOfPossessionBTC(): ProofOfPossessionBTC {
  return {
    btcSigType: 0,
    btcSig: new Uint8Array()
  };
}
export const ProofOfPossessionBTC = {
  typeUrl: "/babylon.btcstaking.v1.ProofOfPossessionBTC",
  is(o: any): o is ProofOfPossessionBTC {
    return o && (o.$typeUrl === ProofOfPossessionBTC.typeUrl || typeof o.btcSigType === "number" && (o.btcSig instanceof Uint8Array || typeof o.btcSig === "string"));
  },
  isSDK(o: any): o is ProofOfPossessionBTCSDKType {
    return o && (o.$typeUrl === ProofOfPossessionBTC.typeUrl || typeof o.btc_sig_type === "number" && (o.btc_sig instanceof Uint8Array || typeof o.btc_sig === "string"));
  },
  isAmino(o: any): o is ProofOfPossessionBTCAmino {
    return o && (o.$typeUrl === ProofOfPossessionBTC.typeUrl || typeof o.btc_sig_type === "number" && (o.btc_sig instanceof Uint8Array || typeof o.btc_sig === "string"));
  },
  encode(message: ProofOfPossessionBTC, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.btcSigType !== 0) {
      writer.uint32(8).int32(message.btcSigType);
    }
    if (message.btcSig.length !== 0) {
      writer.uint32(18).bytes(message.btcSig);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProofOfPossessionBTC {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOfPossessionBTC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.btcSigType = reader.int32();
          break;
        case 2:
          message.btcSig = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProofOfPossessionBTC {
    return {
      btcSigType: isSet(object.btcSigType) ? Number(object.btcSigType) : 0,
      btcSig: isSet(object.btcSig) ? bytesFromBase64(object.btcSig) : new Uint8Array()
    };
  },
  toJSON(message: ProofOfPossessionBTC): JsonSafe<ProofOfPossessionBTC> {
    const obj: any = {};
    message.btcSigType !== undefined && (obj.btcSigType = Math.round(message.btcSigType));
    message.btcSig !== undefined && (obj.btcSig = base64FromBytes(message.btcSig !== undefined ? message.btcSig : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProofOfPossessionBTC>, I>>(object: I): ProofOfPossessionBTC {
    const message = createBaseProofOfPossessionBTC();
    message.btcSigType = object.btcSigType ?? 0;
    message.btcSig = object.btcSig ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ProofOfPossessionBTCAmino): ProofOfPossessionBTC {
    const message = createBaseProofOfPossessionBTC();
    if (object.btc_sig_type !== undefined && object.btc_sig_type !== null) {
      message.btcSigType = object.btc_sig_type;
    }
    if (object.btc_sig !== undefined && object.btc_sig !== null) {
      message.btcSig = bytesFromBase64(object.btc_sig);
    }
    return message;
  },
  toAmino(message: ProofOfPossessionBTC): ProofOfPossessionBTCAmino {
    const obj: any = {};
    obj.btc_sig_type = message.btcSigType === 0 ? undefined : message.btcSigType;
    obj.btc_sig = message.btcSig ? base64FromBytes(message.btcSig) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProofOfPossessionBTCAminoMsg): ProofOfPossessionBTC {
    return ProofOfPossessionBTC.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofOfPossessionBTCProtoMsg): ProofOfPossessionBTC {
    return ProofOfPossessionBTC.decode(message.value);
  },
  toProto(message: ProofOfPossessionBTC): Uint8Array {
    return ProofOfPossessionBTC.encode(message).finish();
  },
  toProtoMsg(message: ProofOfPossessionBTC): ProofOfPossessionBTCProtoMsg {
    return {
      typeUrl: "/babylon.btcstaking.v1.ProofOfPossessionBTC",
      value: ProofOfPossessionBTC.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProofOfPossessionBTC.typeUrl, ProofOfPossessionBTC);
