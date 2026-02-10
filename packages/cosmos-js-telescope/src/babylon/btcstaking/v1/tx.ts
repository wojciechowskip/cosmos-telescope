//@ts-nocheck
import { ProofOfPossessionBTC, ProofOfPossessionBTCAmino, ProofOfPossessionBTCSDKType, InclusionProof, InclusionProofAmino, InclusionProofSDKType } from "./btcstaking";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/** MsgCreateBTCDelegation defines a message for creating a BTC delegation */
export interface MsgCreateBTCDelegation {
  stakerAddr: string;
  pop?: ProofOfPossessionBTC;
  btcPk: Uint8Array;
  fpBtcPkList: Uint8Array[];
  stakingTime: number;
  stakingValue: bigint;
  stakingTx: Uint8Array;
  stakingTxInclusionProof?: InclusionProof;
  slashingTx: Uint8Array;
  delegatorSlashingSig: Uint8Array;
  unbondingTime: number;
  unbondingTx: Uint8Array;
  unbondingValue: bigint;
  unbondingSlashingTx: Uint8Array;
  delegatorUnbondingSlashingSig: Uint8Array;
}
export interface MsgCreateBTCDelegationProtoMsg {
  typeUrl: "/babylon.btcstaking.v1.MsgCreateBTCDelegation";
  value: Uint8Array;
}
/** MsgCreateBTCDelegation defines a message for creating a BTC delegation */
export interface MsgCreateBTCDelegationAmino {
  staker_addr?: string;
  pop?: ProofOfPossessionBTCAmino;
  btc_pk?: string;
  fp_btc_pk_list?: string[];
  staking_time?: number;
  staking_value?: string;
  staking_tx?: string;
  staking_tx_inclusion_proof?: InclusionProofAmino;
  slashing_tx?: string;
  delegator_slashing_sig?: string;
  unbonding_time?: number;
  unbonding_tx?: string;
  unbonding_value?: string;
  unbonding_slashing_tx?: string;
  delegator_unbonding_slashing_sig?: string;
}
export interface MsgCreateBTCDelegationAminoMsg {
  type: "/babylon.btcstaking.v1.MsgCreateBTCDelegation";
  value: MsgCreateBTCDelegationAmino;
}
/** MsgCreateBTCDelegation defines a message for creating a BTC delegation */
export interface MsgCreateBTCDelegationSDKType {
  staker_addr: string;
  pop?: ProofOfPossessionBTCSDKType;
  btc_pk: Uint8Array;
  fp_btc_pk_list: Uint8Array[];
  staking_time: number;
  staking_value: bigint;
  staking_tx: Uint8Array;
  staking_tx_inclusion_proof?: InclusionProofSDKType;
  slashing_tx: Uint8Array;
  delegator_slashing_sig: Uint8Array;
  unbonding_time: number;
  unbonding_tx: Uint8Array;
  unbonding_value: bigint;
  unbonding_slashing_tx: Uint8Array;
  delegator_unbonding_slashing_sig: Uint8Array;
}
/** MsgCreateBTCDelegationResponse is the response to the MsgCreateBTCDelegation message */
export interface MsgCreateBTCDelegationResponse {}
export interface MsgCreateBTCDelegationResponseProtoMsg {
  typeUrl: "/babylon.btcstaking.v1.MsgCreateBTCDelegationResponse";
  value: Uint8Array;
}
/** MsgCreateBTCDelegationResponse is the response to the MsgCreateBTCDelegation message */
export interface MsgCreateBTCDelegationResponseAmino {}
export interface MsgCreateBTCDelegationResponseAminoMsg {
  type: "/babylon.btcstaking.v1.MsgCreateBTCDelegationResponse";
  value: MsgCreateBTCDelegationResponseAmino;
}
/** MsgCreateBTCDelegationResponse is the response to the MsgCreateBTCDelegation message */
export interface MsgCreateBTCDelegationResponseSDKType {}
function createBaseMsgCreateBTCDelegation(): MsgCreateBTCDelegation {
  return {
    stakerAddr: "",
    pop: undefined,
    btcPk: new Uint8Array(),
    fpBtcPkList: [],
    stakingTime: 0,
    stakingValue: BigInt(0),
    stakingTx: new Uint8Array(),
    stakingTxInclusionProof: undefined,
    slashingTx: new Uint8Array(),
    delegatorSlashingSig: new Uint8Array(),
    unbondingTime: 0,
    unbondingTx: new Uint8Array(),
    unbondingValue: BigInt(0),
    unbondingSlashingTx: new Uint8Array(),
    delegatorUnbondingSlashingSig: new Uint8Array()
  };
}
export const MsgCreateBTCDelegation = {
  typeUrl: "/babylon.btcstaking.v1.MsgCreateBTCDelegation",
  is(o: any): o is MsgCreateBTCDelegation {
    return o && (o.$typeUrl === MsgCreateBTCDelegation.typeUrl || typeof o.stakerAddr === "string" && (o.btcPk instanceof Uint8Array || typeof o.btcPk === "string") && Array.isArray(o.fpBtcPkList) && typeof o.stakingTime === "number" && typeof o.stakingValue === "bigint" && (o.stakingTx instanceof Uint8Array || typeof o.stakingTx === "string") && (o.slashingTx instanceof Uint8Array || typeof o.slashingTx === "string") && (o.delegatorSlashingSig instanceof Uint8Array || typeof o.delegatorSlashingSig === "string") && typeof o.unbondingTime === "number" && (o.unbondingTx instanceof Uint8Array || typeof o.unbondingTx === "string") && typeof o.unbondingValue === "bigint" && (o.unbondingSlashingTx instanceof Uint8Array || typeof o.unbondingSlashingTx === "string") && (o.delegatorUnbondingSlashingSig instanceof Uint8Array || typeof o.delegatorUnbondingSlashingSig === "string"));
  },
  isSDK(o: any): o is MsgCreateBTCDelegationSDKType {
    return o && (o.$typeUrl === MsgCreateBTCDelegation.typeUrl || typeof o.staker_addr === "string" && (o.btc_pk instanceof Uint8Array || typeof o.btc_pk === "string") && Array.isArray(o.fp_btc_pk_list) && typeof o.staking_time === "number" && typeof o.staking_value === "bigint" && (o.staking_tx instanceof Uint8Array || typeof o.staking_tx === "string") && (o.slashing_tx instanceof Uint8Array || typeof o.slashing_tx === "string") && (o.delegator_slashing_sig instanceof Uint8Array || typeof o.delegator_slashing_sig === "string") && typeof o.unbonding_time === "number" && (o.unbonding_tx instanceof Uint8Array || typeof o.unbonding_tx === "string") && typeof o.unbonding_value === "bigint" && (o.unbonding_slashing_tx instanceof Uint8Array || typeof o.unbonding_slashing_tx === "string") && (o.delegator_unbonding_slashing_sig instanceof Uint8Array || typeof o.delegator_unbonding_slashing_sig === "string"));
  },
  isAmino(o: any): o is MsgCreateBTCDelegationAmino {
    return o && (o.$typeUrl === MsgCreateBTCDelegation.typeUrl || typeof o.staker_addr === "string" && (o.btc_pk instanceof Uint8Array || typeof o.btc_pk === "string") && Array.isArray(o.fp_btc_pk_list) && typeof o.staking_time === "number" && typeof o.staking_value === "bigint" && (o.staking_tx instanceof Uint8Array || typeof o.staking_tx === "string") && (o.slashing_tx instanceof Uint8Array || typeof o.slashing_tx === "string") && (o.delegator_slashing_sig instanceof Uint8Array || typeof o.delegator_slashing_sig === "string") && typeof o.unbonding_time === "number" && (o.unbonding_tx instanceof Uint8Array || typeof o.unbonding_tx === "string") && typeof o.unbonding_value === "bigint" && (o.unbonding_slashing_tx instanceof Uint8Array || typeof o.unbonding_slashing_tx === "string") && (o.delegator_unbonding_slashing_sig instanceof Uint8Array || typeof o.delegator_unbonding_slashing_sig === "string"));
  },
  encode(message: MsgCreateBTCDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakerAddr !== "") {
      writer.uint32(10).string(message.stakerAddr);
    }
    if (message.pop !== undefined) {
      ProofOfPossessionBTC.encode(message.pop, writer.uint32(18).fork()).ldelim();
    }
    if (message.btcPk.length !== 0) {
      writer.uint32(26).bytes(message.btcPk);
    }
    for (const v of message.fpBtcPkList) {
      writer.uint32(34).bytes(v!);
    }
    if (message.stakingTime !== 0) {
      writer.uint32(40).uint32(message.stakingTime);
    }
    if (message.stakingValue !== BigInt(0)) {
      writer.uint32(48).int64(message.stakingValue);
    }
    if (message.stakingTx.length !== 0) {
      writer.uint32(58).bytes(message.stakingTx);
    }
    if (message.stakingTxInclusionProof !== undefined) {
      InclusionProof.encode(message.stakingTxInclusionProof, writer.uint32(66).fork()).ldelim();
    }
    if (message.slashingTx.length !== 0) {
      writer.uint32(74).bytes(message.slashingTx);
    }
    if (message.delegatorSlashingSig.length !== 0) {
      writer.uint32(82).bytes(message.delegatorSlashingSig);
    }
    if (message.unbondingTime !== 0) {
      writer.uint32(88).uint32(message.unbondingTime);
    }
    if (message.unbondingTx.length !== 0) {
      writer.uint32(98).bytes(message.unbondingTx);
    }
    if (message.unbondingValue !== BigInt(0)) {
      writer.uint32(104).int64(message.unbondingValue);
    }
    if (message.unbondingSlashingTx.length !== 0) {
      writer.uint32(114).bytes(message.unbondingSlashingTx);
    }
    if (message.delegatorUnbondingSlashingSig.length !== 0) {
      writer.uint32(122).bytes(message.delegatorUnbondingSlashingSig);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBTCDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBTCDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakerAddr = reader.string();
          break;
        case 2:
          message.pop = ProofOfPossessionBTC.decode(reader, reader.uint32());
          break;
        case 3:
          message.btcPk = reader.bytes();
          break;
        case 4:
          message.fpBtcPkList.push(reader.bytes());
          break;
        case 5:
          message.stakingTime = reader.uint32();
          break;
        case 6:
          message.stakingValue = reader.int64();
          break;
        case 7:
          message.stakingTx = reader.bytes();
          break;
        case 8:
          message.stakingTxInclusionProof = InclusionProof.decode(reader, reader.uint32());
          break;
        case 9:
          message.slashingTx = reader.bytes();
          break;
        case 10:
          message.delegatorSlashingSig = reader.bytes();
          break;
        case 11:
          message.unbondingTime = reader.uint32();
          break;
        case 12:
          message.unbondingTx = reader.bytes();
          break;
        case 13:
          message.unbondingValue = reader.int64();
          break;
        case 14:
          message.unbondingSlashingTx = reader.bytes();
          break;
        case 15:
          message.delegatorUnbondingSlashingSig = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateBTCDelegation {
    return {
      stakerAddr: isSet(object.stakerAddr) ? String(object.stakerAddr) : "",
      pop: isSet(object.pop) ? ProofOfPossessionBTC.fromJSON(object.pop) : undefined,
      btcPk: isSet(object.btcPk) ? bytesFromBase64(object.btcPk) : new Uint8Array(),
      fpBtcPkList: Array.isArray(object?.fpBtcPkList) ? object.fpBtcPkList.map((e: any) => bytesFromBase64(e)) : [],
      stakingTime: isSet(object.stakingTime) ? Number(object.stakingTime) : 0,
      stakingValue: isSet(object.stakingValue) ? BigInt(object.stakingValue.toString()) : BigInt(0),
      stakingTx: isSet(object.stakingTx) ? bytesFromBase64(object.stakingTx) : new Uint8Array(),
      stakingTxInclusionProof: isSet(object.stakingTxInclusionProof) ? InclusionProof.fromJSON(object.stakingTxInclusionProof) : undefined,
      slashingTx: isSet(object.slashingTx) ? bytesFromBase64(object.slashingTx) : new Uint8Array(),
      delegatorSlashingSig: isSet(object.delegatorSlashingSig) ? bytesFromBase64(object.delegatorSlashingSig) : new Uint8Array(),
      unbondingTime: isSet(object.unbondingTime) ? Number(object.unbondingTime) : 0,
      unbondingTx: isSet(object.unbondingTx) ? bytesFromBase64(object.unbondingTx) : new Uint8Array(),
      unbondingValue: isSet(object.unbondingValue) ? BigInt(object.unbondingValue.toString()) : BigInt(0),
      unbondingSlashingTx: isSet(object.unbondingSlashingTx) ? bytesFromBase64(object.unbondingSlashingTx) : new Uint8Array(),
      delegatorUnbondingSlashingSig: isSet(object.delegatorUnbondingSlashingSig) ? bytesFromBase64(object.delegatorUnbondingSlashingSig) : new Uint8Array()
    };
  },
  toJSON(message: MsgCreateBTCDelegation): JsonSafe<MsgCreateBTCDelegation> {
    const obj: any = {};
    message.stakerAddr !== undefined && (obj.stakerAddr = message.stakerAddr);
    message.pop !== undefined && (obj.pop = message.pop ? ProofOfPossessionBTC.toJSON(message.pop) : undefined);
    message.btcPk !== undefined && (obj.btcPk = base64FromBytes(message.btcPk !== undefined ? message.btcPk : new Uint8Array()));
    if (message.fpBtcPkList) {
      obj.fpBtcPkList = message.fpBtcPkList.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.fpBtcPkList = [];
    }
    message.stakingTime !== undefined && (obj.stakingTime = Math.round(message.stakingTime));
    message.stakingValue !== undefined && (obj.stakingValue = (message.stakingValue || BigInt(0)).toString());
    message.stakingTx !== undefined && (obj.stakingTx = base64FromBytes(message.stakingTx !== undefined ? message.stakingTx : new Uint8Array()));
    message.stakingTxInclusionProof !== undefined && (obj.stakingTxInclusionProof = message.stakingTxInclusionProof ? InclusionProof.toJSON(message.stakingTxInclusionProof) : undefined);
    message.slashingTx !== undefined && (obj.slashingTx = base64FromBytes(message.slashingTx !== undefined ? message.slashingTx : new Uint8Array()));
    message.delegatorSlashingSig !== undefined && (obj.delegatorSlashingSig = base64FromBytes(message.delegatorSlashingSig !== undefined ? message.delegatorSlashingSig : new Uint8Array()));
    message.unbondingTime !== undefined && (obj.unbondingTime = Math.round(message.unbondingTime));
    message.unbondingTx !== undefined && (obj.unbondingTx = base64FromBytes(message.unbondingTx !== undefined ? message.unbondingTx : new Uint8Array()));
    message.unbondingValue !== undefined && (obj.unbondingValue = (message.unbondingValue || BigInt(0)).toString());
    message.unbondingSlashingTx !== undefined && (obj.unbondingSlashingTx = base64FromBytes(message.unbondingSlashingTx !== undefined ? message.unbondingSlashingTx : new Uint8Array()));
    message.delegatorUnbondingSlashingSig !== undefined && (obj.delegatorUnbondingSlashingSig = base64FromBytes(message.delegatorUnbondingSlashingSig !== undefined ? message.delegatorUnbondingSlashingSig : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateBTCDelegation>, I>>(object: I): MsgCreateBTCDelegation {
    const message = createBaseMsgCreateBTCDelegation();
    message.stakerAddr = object.stakerAddr ?? "";
    message.pop = object.pop !== undefined && object.pop !== null ? ProofOfPossessionBTC.fromPartial(object.pop) : undefined;
    message.btcPk = object.btcPk ?? new Uint8Array();
    message.fpBtcPkList = object.fpBtcPkList?.map(e => e) || [];
    message.stakingTime = object.stakingTime ?? 0;
    message.stakingValue = object.stakingValue !== undefined && object.stakingValue !== null ? BigInt(object.stakingValue.toString()) : BigInt(0);
    message.stakingTx = object.stakingTx ?? new Uint8Array();
    message.stakingTxInclusionProof = object.stakingTxInclusionProof !== undefined && object.stakingTxInclusionProof !== null ? InclusionProof.fromPartial(object.stakingTxInclusionProof) : undefined;
    message.slashingTx = object.slashingTx ?? new Uint8Array();
    message.delegatorSlashingSig = object.delegatorSlashingSig ?? new Uint8Array();
    message.unbondingTime = object.unbondingTime ?? 0;
    message.unbondingTx = object.unbondingTx ?? new Uint8Array();
    message.unbondingValue = object.unbondingValue !== undefined && object.unbondingValue !== null ? BigInt(object.unbondingValue.toString()) : BigInt(0);
    message.unbondingSlashingTx = object.unbondingSlashingTx ?? new Uint8Array();
    message.delegatorUnbondingSlashingSig = object.delegatorUnbondingSlashingSig ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgCreateBTCDelegationAmino): MsgCreateBTCDelegation {
    const message = createBaseMsgCreateBTCDelegation();
    if (object.staker_addr !== undefined && object.staker_addr !== null) {
      message.stakerAddr = object.staker_addr;
    }
    if (object.pop !== undefined && object.pop !== null) {
      message.pop = ProofOfPossessionBTC.fromAmino(object.pop);
    }
    if (object.btc_pk !== undefined && object.btc_pk !== null) {
      message.btcPk = bytesFromBase64(object.btc_pk);
    }
    message.fpBtcPkList = object.fp_btc_pk_list?.map(e => bytesFromBase64(e)) || [];
    if (object.staking_time !== undefined && object.staking_time !== null) {
      message.stakingTime = object.staking_time;
    }
    if (object.staking_value !== undefined && object.staking_value !== null) {
      message.stakingValue = BigInt(object.staking_value);
    }
    if (object.staking_tx !== undefined && object.staking_tx !== null) {
      message.stakingTx = bytesFromBase64(object.staking_tx);
    }
    if (object.staking_tx_inclusion_proof !== undefined && object.staking_tx_inclusion_proof !== null) {
      message.stakingTxInclusionProof = InclusionProof.fromAmino(object.staking_tx_inclusion_proof);
    }
    if (object.slashing_tx !== undefined && object.slashing_tx !== null) {
      message.slashingTx = bytesFromBase64(object.slashing_tx);
    }
    if (object.delegator_slashing_sig !== undefined && object.delegator_slashing_sig !== null) {
      message.delegatorSlashingSig = bytesFromBase64(object.delegator_slashing_sig);
    }
    if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
      message.unbondingTime = object.unbonding_time;
    }
    if (object.unbonding_tx !== undefined && object.unbonding_tx !== null) {
      message.unbondingTx = bytesFromBase64(object.unbonding_tx);
    }
    if (object.unbonding_value !== undefined && object.unbonding_value !== null) {
      message.unbondingValue = BigInt(object.unbonding_value);
    }
    if (object.unbonding_slashing_tx !== undefined && object.unbonding_slashing_tx !== null) {
      message.unbondingSlashingTx = bytesFromBase64(object.unbonding_slashing_tx);
    }
    if (object.delegator_unbonding_slashing_sig !== undefined && object.delegator_unbonding_slashing_sig !== null) {
      message.delegatorUnbondingSlashingSig = bytesFromBase64(object.delegator_unbonding_slashing_sig);
    }
    return message;
  },
  toAmino(message: MsgCreateBTCDelegation): MsgCreateBTCDelegationAmino {
    const obj: any = {};
    obj.staker_addr = message.stakerAddr === "" ? undefined : message.stakerAddr;
    obj.pop = message.pop ? ProofOfPossessionBTC.toAmino(message.pop) : undefined;
    obj.btc_pk = message.btcPk ? base64FromBytes(message.btcPk) : undefined;
    if (message.fpBtcPkList) {
      obj.fp_btc_pk_list = message.fpBtcPkList.map(e => base64FromBytes(e));
    } else {
      obj.fp_btc_pk_list = message.fpBtcPkList;
    }
    obj.staking_time = message.stakingTime === 0 ? undefined : message.stakingTime;
    obj.staking_value = message.stakingValue !== BigInt(0) ? (message.stakingValue?.toString)() : undefined;
    obj.staking_tx = message.stakingTx ? base64FromBytes(message.stakingTx) : undefined;
    obj.staking_tx_inclusion_proof = message.stakingTxInclusionProof ? InclusionProof.toAmino(message.stakingTxInclusionProof) : undefined;
    obj.slashing_tx = message.slashingTx ? base64FromBytes(message.slashingTx) : undefined;
    obj.delegator_slashing_sig = message.delegatorSlashingSig ? base64FromBytes(message.delegatorSlashingSig) : undefined;
    obj.unbonding_time = message.unbondingTime === 0 ? undefined : message.unbondingTime;
    obj.unbonding_tx = message.unbondingTx ? base64FromBytes(message.unbondingTx) : undefined;
    obj.unbonding_value = message.unbondingValue !== BigInt(0) ? (message.unbondingValue?.toString)() : undefined;
    obj.unbonding_slashing_tx = message.unbondingSlashingTx ? base64FromBytes(message.unbondingSlashingTx) : undefined;
    obj.delegator_unbonding_slashing_sig = message.delegatorUnbondingSlashingSig ? base64FromBytes(message.delegatorUnbondingSlashingSig) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBTCDelegationAminoMsg): MsgCreateBTCDelegation {
    return MsgCreateBTCDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBTCDelegationProtoMsg): MsgCreateBTCDelegation {
    return MsgCreateBTCDelegation.decode(message.value);
  },
  toProto(message: MsgCreateBTCDelegation): Uint8Array {
    return MsgCreateBTCDelegation.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBTCDelegation): MsgCreateBTCDelegationProtoMsg {
    return {
      typeUrl: "/babylon.btcstaking.v1.MsgCreateBTCDelegation",
      value: MsgCreateBTCDelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateBTCDelegation.typeUrl, MsgCreateBTCDelegation);
function createBaseMsgCreateBTCDelegationResponse(): MsgCreateBTCDelegationResponse {
  return {};
}
export const MsgCreateBTCDelegationResponse = {
  typeUrl: "/babylon.btcstaking.v1.MsgCreateBTCDelegationResponse",
  is(o: any): o is MsgCreateBTCDelegationResponse {
    return o && o.$typeUrl === MsgCreateBTCDelegationResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateBTCDelegationResponseSDKType {
    return o && o.$typeUrl === MsgCreateBTCDelegationResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateBTCDelegationResponseAmino {
    return o && o.$typeUrl === MsgCreateBTCDelegationResponse.typeUrl;
  },
  encode(_: MsgCreateBTCDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBTCDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBTCDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateBTCDelegationResponse {
    return {};
  },
  toJSON(_: MsgCreateBTCDelegationResponse): JsonSafe<MsgCreateBTCDelegationResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateBTCDelegationResponse>, I>>(_: I): MsgCreateBTCDelegationResponse {
    const message = createBaseMsgCreateBTCDelegationResponse();
    return message;
  },
  fromAmino(_: MsgCreateBTCDelegationResponseAmino): MsgCreateBTCDelegationResponse {
    const message = createBaseMsgCreateBTCDelegationResponse();
    return message;
  },
  toAmino(_: MsgCreateBTCDelegationResponse): MsgCreateBTCDelegationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateBTCDelegationResponseAminoMsg): MsgCreateBTCDelegationResponse {
    return MsgCreateBTCDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBTCDelegationResponseProtoMsg): MsgCreateBTCDelegationResponse {
    return MsgCreateBTCDelegationResponse.decode(message.value);
  },
  toProto(message: MsgCreateBTCDelegationResponse): Uint8Array {
    return MsgCreateBTCDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBTCDelegationResponse): MsgCreateBTCDelegationResponseProtoMsg {
    return {
      typeUrl: "/babylon.btcstaking.v1.MsgCreateBTCDelegationResponse",
      value: MsgCreateBTCDelegationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateBTCDelegationResponse.typeUrl, MsgCreateBTCDelegationResponse);
/** MsgBTCUndelegate defines a message for undelegating a previously created BTC delegation */
export interface MsgBTCUndelegate {
  signer: string;
  stakingTxHash: string;
  stakeSpendingTx: Uint8Array;
  stakeSpendingTxInclusionProof?: InclusionProof;
  fundingTransactions: Uint8Array[];
}
export interface MsgBTCUndelegateProtoMsg {
  typeUrl: "/babylon.btcstaking.v1.MsgBTCUndelegate";
  value: Uint8Array;
}
/** MsgBTCUndelegate defines a message for undelegating a previously created BTC delegation */
export interface MsgBTCUndelegateAmino {
  signer?: string;
  staking_tx_hash?: string;
  stake_spending_tx?: string;
  stake_spending_tx_inclusion_proof?: InclusionProofAmino;
  funding_transactions?: string[];
}
export interface MsgBTCUndelegateAminoMsg {
  type: "/babylon.btcstaking.v1.MsgBTCUndelegate";
  value: MsgBTCUndelegateAmino;
}
/** MsgBTCUndelegate defines a message for undelegating a previously created BTC delegation */
export interface MsgBTCUndelegateSDKType {
  signer: string;
  staking_tx_hash: string;
  stake_spending_tx: Uint8Array;
  stake_spending_tx_inclusion_proof?: InclusionProofSDKType;
  funding_transactions: Uint8Array[];
}
/** MsgBTCUndelegateResponse is the response to the MsgBTCUndelegate message */
export interface MsgBTCUndelegateResponse {}
export interface MsgBTCUndelegateResponseProtoMsg {
  typeUrl: "/babylon.btcstaking.v1.MsgBTCUndelegateResponse";
  value: Uint8Array;
}
/** MsgBTCUndelegateResponse is the response to the MsgBTCUndelegate message */
export interface MsgBTCUndelegateResponseAmino {}
export interface MsgBTCUndelegateResponseAminoMsg {
  type: "/babylon.btcstaking.v1.MsgBTCUndelegateResponse";
  value: MsgBTCUndelegateResponseAmino;
}
/** MsgBTCUndelegateResponse is the response to the MsgBTCUndelegate message */
export interface MsgBTCUndelegateResponseSDKType {}
/** MsgAddBTCDelegationInclusionProof defines a message for adding an inclusion proof for a BTC delegation */
export interface MsgAddBTCDelegationInclusionProof {
  signer: string;
  stakingTxHash: string;
  stakingTxInclusionProof?: InclusionProof;
}
export interface MsgAddBTCDelegationInclusionProofProtoMsg {
  typeUrl: "/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProof";
  value: Uint8Array;
}
/** MsgAddBTCDelegationInclusionProof defines a message for adding an inclusion proof for a BTC delegation */
export interface MsgAddBTCDelegationInclusionProofAmino {
  signer?: string;
  staking_tx_hash?: string;
  staking_tx_inclusion_proof?: InclusionProofAmino;
}
export interface MsgAddBTCDelegationInclusionProofAminoMsg {
  type: "/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProof";
  value: MsgAddBTCDelegationInclusionProofAmino;
}
/** MsgAddBTCDelegationInclusionProof defines a message for adding an inclusion proof for a BTC delegation */
export interface MsgAddBTCDelegationInclusionProofSDKType {
  signer: string;
  staking_tx_hash: string;
  staking_tx_inclusion_proof?: InclusionProofSDKType;
}
/** MsgAddBTCDelegationInclusionProofResponse is the response to the MsgAddBTCDelegationInclusionProof message */
export interface MsgAddBTCDelegationInclusionProofResponse {}
export interface MsgAddBTCDelegationInclusionProofResponseProtoMsg {
  typeUrl: "/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProofResponse";
  value: Uint8Array;
}
/** MsgAddBTCDelegationInclusionProofResponse is the response to the MsgAddBTCDelegationInclusionProof message */
export interface MsgAddBTCDelegationInclusionProofResponseAmino {}
export interface MsgAddBTCDelegationInclusionProofResponseAminoMsg {
  type: "/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProofResponse";
  value: MsgAddBTCDelegationInclusionProofResponseAmino;
}
/** MsgAddBTCDelegationInclusionProofResponse is the response to the MsgAddBTCDelegationInclusionProof message */
export interface MsgAddBTCDelegationInclusionProofResponseSDKType {}
/** MsgBtcStakeExpand defines a message for expanding an existing BTC delegation with additional stake */
export interface MsgBtcStakeExpand {
  stakerAddr: string;
  pop?: ProofOfPossessionBTC;
  btcPk: Uint8Array;
  fpBtcPkList: Uint8Array[];
  stakingTime: number;
  stakingValue: bigint;
  stakingTx: Uint8Array;
  slashingTx: Uint8Array;
  delegatorSlashingSig: Uint8Array;
  unbondingTime: number;
  unbondingTx: Uint8Array;
  unbondingValue: bigint;
  unbondingSlashingTx: Uint8Array;
  delegatorUnbondingSlashingSig: Uint8Array;
  previousStakingTxHash: string;
  fundingTx: Uint8Array;
}
export interface MsgBtcStakeExpandProtoMsg {
  typeUrl: "/babylon.btcstaking.v1.MsgBtcStakeExpand";
  value: Uint8Array;
}
/** MsgBtcStakeExpand defines a message for expanding an existing BTC delegation with additional stake */
export interface MsgBtcStakeExpandAmino {
  staker_addr?: string;
  pop?: ProofOfPossessionBTCAmino;
  btc_pk?: string;
  fp_btc_pk_list?: string[];
  staking_time?: number;
  staking_value?: string;
  staking_tx?: string;
  slashing_tx?: string;
  delegator_slashing_sig?: string;
  unbonding_time?: number;
  unbonding_tx?: string;
  unbonding_value?: string;
  unbonding_slashing_tx?: string;
  delegator_unbonding_slashing_sig?: string;
  previous_staking_tx_hash?: string;
  funding_tx?: string;
}
export interface MsgBtcStakeExpandAminoMsg {
  type: "/babylon.btcstaking.v1.MsgBtcStakeExpand";
  value: MsgBtcStakeExpandAmino;
}
/** MsgBtcStakeExpand defines a message for expanding an existing BTC delegation with additional stake */
export interface MsgBtcStakeExpandSDKType {
  staker_addr: string;
  pop?: ProofOfPossessionBTCSDKType;
  btc_pk: Uint8Array;
  fp_btc_pk_list: Uint8Array[];
  staking_time: number;
  staking_value: bigint;
  staking_tx: Uint8Array;
  slashing_tx: Uint8Array;
  delegator_slashing_sig: Uint8Array;
  unbonding_time: number;
  unbonding_tx: Uint8Array;
  unbonding_value: bigint;
  unbonding_slashing_tx: Uint8Array;
  delegator_unbonding_slashing_sig: Uint8Array;
  previous_staking_tx_hash: string;
  funding_tx: Uint8Array;
}
/** MsgBtcStakeExpandResponse is the response to the MsgBtcStakeExpand message */
export interface MsgBtcStakeExpandResponse {}
export interface MsgBtcStakeExpandResponseProtoMsg {
  typeUrl: "/babylon.btcstaking.v1.MsgBtcStakeExpandResponse";
  value: Uint8Array;
}
/** MsgBtcStakeExpandResponse is the response to the MsgBtcStakeExpand message */
export interface MsgBtcStakeExpandResponseAmino {}
export interface MsgBtcStakeExpandResponseAminoMsg {
  type: "/babylon.btcstaking.v1.MsgBtcStakeExpandResponse";
  value: MsgBtcStakeExpandResponseAmino;
}
/** MsgBtcStakeExpandResponse is the response to the MsgBtcStakeExpand message */
export interface MsgBtcStakeExpandResponseSDKType {}
function createBaseMsgBTCUndelegate(): MsgBTCUndelegate {
  return {
    signer: "",
    stakingTxHash: "",
    stakeSpendingTx: new Uint8Array(),
    stakeSpendingTxInclusionProof: undefined,
    fundingTransactions: []
  };
}
export const MsgBTCUndelegate = {
  typeUrl: "/babylon.btcstaking.v1.MsgBTCUndelegate",
  is(o: any): o is MsgBTCUndelegate {
    return o && (o.$typeUrl === MsgBTCUndelegate.typeUrl || typeof o.signer === "string" && typeof o.stakingTxHash === "string" && (o.stakeSpendingTx instanceof Uint8Array || typeof o.stakeSpendingTx === "string") && Array.isArray(o.fundingTransactions));
  },
  isSDK(o: any): o is MsgBTCUndelegateSDKType {
    return o && (o.$typeUrl === MsgBTCUndelegate.typeUrl || typeof o.signer === "string" && typeof o.staking_tx_hash === "string" && (o.stake_spending_tx instanceof Uint8Array || typeof o.stake_spending_tx === "string") && Array.isArray(o.funding_transactions));
  },
  isAmino(o: any): o is MsgBTCUndelegateAmino {
    return o && (o.$typeUrl === MsgBTCUndelegate.typeUrl || typeof o.signer === "string" && typeof o.staking_tx_hash === "string" && (o.stake_spending_tx instanceof Uint8Array || typeof o.stake_spending_tx === "string") && Array.isArray(o.funding_transactions));
  },
  encode(message: MsgBTCUndelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.stakingTxHash !== "") {
      writer.uint32(18).string(message.stakingTxHash);
    }
    if (message.stakeSpendingTx.length !== 0) {
      writer.uint32(26).bytes(message.stakeSpendingTx);
    }
    if (message.stakeSpendingTxInclusionProof !== undefined) {
      InclusionProof.encode(message.stakeSpendingTxInclusionProof, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.fundingTransactions) {
      writer.uint32(42).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBTCUndelegate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBTCUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.stakingTxHash = reader.string();
          break;
        case 3:
          message.stakeSpendingTx = reader.bytes();
          break;
        case 4:
          message.stakeSpendingTxInclusionProof = InclusionProof.decode(reader, reader.uint32());
          break;
        case 5:
          message.fundingTransactions.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBTCUndelegate {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      stakingTxHash: isSet(object.stakingTxHash) ? String(object.stakingTxHash) : "",
      stakeSpendingTx: isSet(object.stakeSpendingTx) ? bytesFromBase64(object.stakeSpendingTx) : new Uint8Array(),
      stakeSpendingTxInclusionProof: isSet(object.stakeSpendingTxInclusionProof) ? InclusionProof.fromJSON(object.stakeSpendingTxInclusionProof) : undefined,
      fundingTransactions: Array.isArray(object?.fundingTransactions) ? object.fundingTransactions.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: MsgBTCUndelegate): JsonSafe<MsgBTCUndelegate> {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.stakingTxHash !== undefined && (obj.stakingTxHash = message.stakingTxHash);
    message.stakeSpendingTx !== undefined && (obj.stakeSpendingTx = base64FromBytes(message.stakeSpendingTx !== undefined ? message.stakeSpendingTx : new Uint8Array()));
    message.stakeSpendingTxInclusionProof !== undefined && (obj.stakeSpendingTxInclusionProof = message.stakeSpendingTxInclusionProof ? InclusionProof.toJSON(message.stakeSpendingTxInclusionProof) : undefined);
    if (message.fundingTransactions) {
      obj.fundingTransactions = message.fundingTransactions.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.fundingTransactions = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBTCUndelegate>, I>>(object: I): MsgBTCUndelegate {
    const message = createBaseMsgBTCUndelegate();
    message.signer = object.signer ?? "";
    message.stakingTxHash = object.stakingTxHash ?? "";
    message.stakeSpendingTx = object.stakeSpendingTx ?? new Uint8Array();
    message.stakeSpendingTxInclusionProof = object.stakeSpendingTxInclusionProof !== undefined && object.stakeSpendingTxInclusionProof !== null ? InclusionProof.fromPartial(object.stakeSpendingTxInclusionProof) : undefined;
    message.fundingTransactions = object.fundingTransactions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgBTCUndelegateAmino): MsgBTCUndelegate {
    const message = createBaseMsgBTCUndelegate();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.staking_tx_hash !== undefined && object.staking_tx_hash !== null) {
      message.stakingTxHash = object.staking_tx_hash;
    }
    if (object.stake_spending_tx !== undefined && object.stake_spending_tx !== null) {
      message.stakeSpendingTx = bytesFromBase64(object.stake_spending_tx);
    }
    if (object.stake_spending_tx_inclusion_proof !== undefined && object.stake_spending_tx_inclusion_proof !== null) {
      message.stakeSpendingTxInclusionProof = InclusionProof.fromAmino(object.stake_spending_tx_inclusion_proof);
    }
    message.fundingTransactions = object.funding_transactions?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgBTCUndelegate): MsgBTCUndelegateAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.staking_tx_hash = message.stakingTxHash === "" ? undefined : message.stakingTxHash;
    obj.stake_spending_tx = message.stakeSpendingTx ? base64FromBytes(message.stakeSpendingTx) : undefined;
    obj.stake_spending_tx_inclusion_proof = message.stakeSpendingTxInclusionProof ? InclusionProof.toAmino(message.stakeSpendingTxInclusionProof) : undefined;
    if (message.fundingTransactions) {
      obj.funding_transactions = message.fundingTransactions.map(e => base64FromBytes(e));
    } else {
      obj.funding_transactions = message.fundingTransactions;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBTCUndelegateAminoMsg): MsgBTCUndelegate {
    return MsgBTCUndelegate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBTCUndelegateProtoMsg): MsgBTCUndelegate {
    return MsgBTCUndelegate.decode(message.value);
  },
  toProto(message: MsgBTCUndelegate): Uint8Array {
    return MsgBTCUndelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgBTCUndelegate): MsgBTCUndelegateProtoMsg {
    return {
      typeUrl: "/babylon.btcstaking.v1.MsgBTCUndelegate",
      value: MsgBTCUndelegate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBTCUndelegate.typeUrl, MsgBTCUndelegate);
function createBaseMsgBTCUndelegateResponse(): MsgBTCUndelegateResponse {
  return {};
}
export const MsgBTCUndelegateResponse = {
  typeUrl: "/babylon.btcstaking.v1.MsgBTCUndelegateResponse",
  is(o: any): o is MsgBTCUndelegateResponse {
    return o && o.$typeUrl === MsgBTCUndelegateResponse.typeUrl;
  },
  isSDK(o: any): o is MsgBTCUndelegateResponseSDKType {
    return o && o.$typeUrl === MsgBTCUndelegateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgBTCUndelegateResponseAmino {
    return o && o.$typeUrl === MsgBTCUndelegateResponse.typeUrl;
  },
  encode(_: MsgBTCUndelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBTCUndelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBTCUndelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgBTCUndelegateResponse {
    return {};
  },
  toJSON(_: MsgBTCUndelegateResponse): JsonSafe<MsgBTCUndelegateResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBTCUndelegateResponse>, I>>(_: I): MsgBTCUndelegateResponse {
    const message = createBaseMsgBTCUndelegateResponse();
    return message;
  },
  fromAmino(_: MsgBTCUndelegateResponseAmino): MsgBTCUndelegateResponse {
    const message = createBaseMsgBTCUndelegateResponse();
    return message;
  },
  toAmino(_: MsgBTCUndelegateResponse): MsgBTCUndelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBTCUndelegateResponseAminoMsg): MsgBTCUndelegateResponse {
    return MsgBTCUndelegateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBTCUndelegateResponseProtoMsg): MsgBTCUndelegateResponse {
    return MsgBTCUndelegateResponse.decode(message.value);
  },
  toProto(message: MsgBTCUndelegateResponse): Uint8Array {
    return MsgBTCUndelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBTCUndelegateResponse): MsgBTCUndelegateResponseProtoMsg {
    return {
      typeUrl: "/babylon.btcstaking.v1.MsgBTCUndelegateResponse",
      value: MsgBTCUndelegateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBTCUndelegateResponse.typeUrl, MsgBTCUndelegateResponse);
function createBaseMsgAddBTCDelegationInclusionProof(): MsgAddBTCDelegationInclusionProof {
  return {
    signer: "",
    stakingTxHash: "",
    stakingTxInclusionProof: undefined
  };
}
export const MsgAddBTCDelegationInclusionProof = {
  typeUrl: "/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProof",
  is(o: any): o is MsgAddBTCDelegationInclusionProof {
    return o && (o.$typeUrl === MsgAddBTCDelegationInclusionProof.typeUrl || typeof o.signer === "string" && typeof o.stakingTxHash === "string");
  },
  isSDK(o: any): o is MsgAddBTCDelegationInclusionProofSDKType {
    return o && (o.$typeUrl === MsgAddBTCDelegationInclusionProof.typeUrl || typeof o.signer === "string" && typeof o.staking_tx_hash === "string");
  },
  isAmino(o: any): o is MsgAddBTCDelegationInclusionProofAmino {
    return o && (o.$typeUrl === MsgAddBTCDelegationInclusionProof.typeUrl || typeof o.signer === "string" && typeof o.staking_tx_hash === "string");
  },
  encode(message: MsgAddBTCDelegationInclusionProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.stakingTxHash !== "") {
      writer.uint32(18).string(message.stakingTxHash);
    }
    if (message.stakingTxInclusionProof !== undefined) {
      InclusionProof.encode(message.stakingTxInclusionProof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddBTCDelegationInclusionProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddBTCDelegationInclusionProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.stakingTxHash = reader.string();
          break;
        case 3:
          message.stakingTxInclusionProof = InclusionProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddBTCDelegationInclusionProof {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      stakingTxHash: isSet(object.stakingTxHash) ? String(object.stakingTxHash) : "",
      stakingTxInclusionProof: isSet(object.stakingTxInclusionProof) ? InclusionProof.fromJSON(object.stakingTxInclusionProof) : undefined
    };
  },
  toJSON(message: MsgAddBTCDelegationInclusionProof): JsonSafe<MsgAddBTCDelegationInclusionProof> {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.stakingTxHash !== undefined && (obj.stakingTxHash = message.stakingTxHash);
    message.stakingTxInclusionProof !== undefined && (obj.stakingTxInclusionProof = message.stakingTxInclusionProof ? InclusionProof.toJSON(message.stakingTxInclusionProof) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddBTCDelegationInclusionProof>, I>>(object: I): MsgAddBTCDelegationInclusionProof {
    const message = createBaseMsgAddBTCDelegationInclusionProof();
    message.signer = object.signer ?? "";
    message.stakingTxHash = object.stakingTxHash ?? "";
    message.stakingTxInclusionProof = object.stakingTxInclusionProof !== undefined && object.stakingTxInclusionProof !== null ? InclusionProof.fromPartial(object.stakingTxInclusionProof) : undefined;
    return message;
  },
  fromAmino(object: MsgAddBTCDelegationInclusionProofAmino): MsgAddBTCDelegationInclusionProof {
    const message = createBaseMsgAddBTCDelegationInclusionProof();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.staking_tx_hash !== undefined && object.staking_tx_hash !== null) {
      message.stakingTxHash = object.staking_tx_hash;
    }
    if (object.staking_tx_inclusion_proof !== undefined && object.staking_tx_inclusion_proof !== null) {
      message.stakingTxInclusionProof = InclusionProof.fromAmino(object.staking_tx_inclusion_proof);
    }
    return message;
  },
  toAmino(message: MsgAddBTCDelegationInclusionProof): MsgAddBTCDelegationInclusionProofAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.staking_tx_hash = message.stakingTxHash === "" ? undefined : message.stakingTxHash;
    obj.staking_tx_inclusion_proof = message.stakingTxInclusionProof ? InclusionProof.toAmino(message.stakingTxInclusionProof) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddBTCDelegationInclusionProofAminoMsg): MsgAddBTCDelegationInclusionProof {
    return MsgAddBTCDelegationInclusionProof.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddBTCDelegationInclusionProofProtoMsg): MsgAddBTCDelegationInclusionProof {
    return MsgAddBTCDelegationInclusionProof.decode(message.value);
  },
  toProto(message: MsgAddBTCDelegationInclusionProof): Uint8Array {
    return MsgAddBTCDelegationInclusionProof.encode(message).finish();
  },
  toProtoMsg(message: MsgAddBTCDelegationInclusionProof): MsgAddBTCDelegationInclusionProofProtoMsg {
    return {
      typeUrl: "/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProof",
      value: MsgAddBTCDelegationInclusionProof.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddBTCDelegationInclusionProof.typeUrl, MsgAddBTCDelegationInclusionProof);
function createBaseMsgAddBTCDelegationInclusionProofResponse(): MsgAddBTCDelegationInclusionProofResponse {
  return {};
}
export const MsgAddBTCDelegationInclusionProofResponse = {
  typeUrl: "/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProofResponse",
  is(o: any): o is MsgAddBTCDelegationInclusionProofResponse {
    return o && o.$typeUrl === MsgAddBTCDelegationInclusionProofResponse.typeUrl;
  },
  isSDK(o: any): o is MsgAddBTCDelegationInclusionProofResponseSDKType {
    return o && o.$typeUrl === MsgAddBTCDelegationInclusionProofResponse.typeUrl;
  },
  isAmino(o: any): o is MsgAddBTCDelegationInclusionProofResponseAmino {
    return o && o.$typeUrl === MsgAddBTCDelegationInclusionProofResponse.typeUrl;
  },
  encode(_: MsgAddBTCDelegationInclusionProofResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddBTCDelegationInclusionProofResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddBTCDelegationInclusionProofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgAddBTCDelegationInclusionProofResponse {
    return {};
  },
  toJSON(_: MsgAddBTCDelegationInclusionProofResponse): JsonSafe<MsgAddBTCDelegationInclusionProofResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddBTCDelegationInclusionProofResponse>, I>>(_: I): MsgAddBTCDelegationInclusionProofResponse {
    const message = createBaseMsgAddBTCDelegationInclusionProofResponse();
    return message;
  },
  fromAmino(_: MsgAddBTCDelegationInclusionProofResponseAmino): MsgAddBTCDelegationInclusionProofResponse {
    const message = createBaseMsgAddBTCDelegationInclusionProofResponse();
    return message;
  },
  toAmino(_: MsgAddBTCDelegationInclusionProofResponse): MsgAddBTCDelegationInclusionProofResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddBTCDelegationInclusionProofResponseAminoMsg): MsgAddBTCDelegationInclusionProofResponse {
    return MsgAddBTCDelegationInclusionProofResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddBTCDelegationInclusionProofResponseProtoMsg): MsgAddBTCDelegationInclusionProofResponse {
    return MsgAddBTCDelegationInclusionProofResponse.decode(message.value);
  },
  toProto(message: MsgAddBTCDelegationInclusionProofResponse): Uint8Array {
    return MsgAddBTCDelegationInclusionProofResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddBTCDelegationInclusionProofResponse): MsgAddBTCDelegationInclusionProofResponseProtoMsg {
    return {
      typeUrl: "/babylon.btcstaking.v1.MsgAddBTCDelegationInclusionProofResponse",
      value: MsgAddBTCDelegationInclusionProofResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddBTCDelegationInclusionProofResponse.typeUrl, MsgAddBTCDelegationInclusionProofResponse);
function createBaseMsgBtcStakeExpand(): MsgBtcStakeExpand {
  return {
    stakerAddr: "",
    pop: undefined,
    btcPk: new Uint8Array(),
    fpBtcPkList: [],
    stakingTime: 0,
    stakingValue: BigInt(0),
    stakingTx: new Uint8Array(),
    slashingTx: new Uint8Array(),
    delegatorSlashingSig: new Uint8Array(),
    unbondingTime: 0,
    unbondingTx: new Uint8Array(),
    unbondingValue: BigInt(0),
    unbondingSlashingTx: new Uint8Array(),
    delegatorUnbondingSlashingSig: new Uint8Array(),
    previousStakingTxHash: "",
    fundingTx: new Uint8Array()
  };
}
export const MsgBtcStakeExpand = {
  typeUrl: "/babylon.btcstaking.v1.MsgBtcStakeExpand",
  is(o: any): o is MsgBtcStakeExpand {
    return o && (o.$typeUrl === MsgBtcStakeExpand.typeUrl || typeof o.stakerAddr === "string" && (o.btcPk instanceof Uint8Array || typeof o.btcPk === "string") && Array.isArray(o.fpBtcPkList) && typeof o.stakingTime === "number" && typeof o.stakingValue === "bigint" && (o.stakingTx instanceof Uint8Array || typeof o.stakingTx === "string") && (o.slashingTx instanceof Uint8Array || typeof o.slashingTx === "string") && (o.delegatorSlashingSig instanceof Uint8Array || typeof o.delegatorSlashingSig === "string") && typeof o.unbondingTime === "number" && (o.unbondingTx instanceof Uint8Array || typeof o.unbondingTx === "string") && typeof o.unbondingValue === "bigint" && (o.unbondingSlashingTx instanceof Uint8Array || typeof o.unbondingSlashingTx === "string") && (o.delegatorUnbondingSlashingSig instanceof Uint8Array || typeof o.delegatorUnbondingSlashingSig === "string") && typeof o.previousStakingTxHash === "string" && (o.fundingTx instanceof Uint8Array || typeof o.fundingTx === "string"));
  },
  isSDK(o: any): o is MsgBtcStakeExpandSDKType {
    return o && (o.$typeUrl === MsgBtcStakeExpand.typeUrl || typeof o.staker_addr === "string" && (o.btc_pk instanceof Uint8Array || typeof o.btc_pk === "string") && Array.isArray(o.fp_btc_pk_list) && typeof o.staking_time === "number" && typeof o.staking_value === "bigint" && (o.staking_tx instanceof Uint8Array || typeof o.staking_tx === "string") && (o.slashing_tx instanceof Uint8Array || typeof o.slashing_tx === "string") && (o.delegator_slashing_sig instanceof Uint8Array || typeof o.delegator_slashing_sig === "string") && typeof o.unbonding_time === "number" && (o.unbonding_tx instanceof Uint8Array || typeof o.unbonding_tx === "string") && typeof o.unbonding_value === "bigint" && (o.unbonding_slashing_tx instanceof Uint8Array || typeof o.unbonding_slashing_tx === "string") && (o.delegator_unbonding_slashing_sig instanceof Uint8Array || typeof o.delegator_unbonding_slashing_sig === "string") && typeof o.previous_staking_tx_hash === "string" && (o.funding_tx instanceof Uint8Array || typeof o.funding_tx === "string"));
  },
  isAmino(o: any): o is MsgBtcStakeExpandAmino {
    return o && (o.$typeUrl === MsgBtcStakeExpand.typeUrl || typeof o.staker_addr === "string" && (o.btc_pk instanceof Uint8Array || typeof o.btc_pk === "string") && Array.isArray(o.fp_btc_pk_list) && typeof o.staking_time === "number" && typeof o.staking_value === "bigint" && (o.staking_tx instanceof Uint8Array || typeof o.staking_tx === "string") && (o.slashing_tx instanceof Uint8Array || typeof o.slashing_tx === "string") && (o.delegator_slashing_sig instanceof Uint8Array || typeof o.delegator_slashing_sig === "string") && typeof o.unbonding_time === "number" && (o.unbonding_tx instanceof Uint8Array || typeof o.unbonding_tx === "string") && typeof o.unbonding_value === "bigint" && (o.unbonding_slashing_tx instanceof Uint8Array || typeof o.unbonding_slashing_tx === "string") && (o.delegator_unbonding_slashing_sig instanceof Uint8Array || typeof o.delegator_unbonding_slashing_sig === "string") && typeof o.previous_staking_tx_hash === "string" && (o.funding_tx instanceof Uint8Array || typeof o.funding_tx === "string"));
  },
  encode(message: MsgBtcStakeExpand, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakerAddr !== "") {
      writer.uint32(10).string(message.stakerAddr);
    }
    if (message.pop !== undefined) {
      ProofOfPossessionBTC.encode(message.pop, writer.uint32(18).fork()).ldelim();
    }
    if (message.btcPk.length !== 0) {
      writer.uint32(26).bytes(message.btcPk);
    }
    for (const v of message.fpBtcPkList) {
      writer.uint32(34).bytes(v!);
    }
    if (message.stakingTime !== 0) {
      writer.uint32(40).uint32(message.stakingTime);
    }
    if (message.stakingValue !== BigInt(0)) {
      writer.uint32(48).int64(message.stakingValue);
    }
    if (message.stakingTx.length !== 0) {
      writer.uint32(58).bytes(message.stakingTx);
    }
    if (message.slashingTx.length !== 0) {
      writer.uint32(66).bytes(message.slashingTx);
    }
    if (message.delegatorSlashingSig.length !== 0) {
      writer.uint32(74).bytes(message.delegatorSlashingSig);
    }
    if (message.unbondingTime !== 0) {
      writer.uint32(80).uint32(message.unbondingTime);
    }
    if (message.unbondingTx.length !== 0) {
      writer.uint32(90).bytes(message.unbondingTx);
    }
    if (message.unbondingValue !== BigInt(0)) {
      writer.uint32(96).int64(message.unbondingValue);
    }
    if (message.unbondingSlashingTx.length !== 0) {
      writer.uint32(106).bytes(message.unbondingSlashingTx);
    }
    if (message.delegatorUnbondingSlashingSig.length !== 0) {
      writer.uint32(114).bytes(message.delegatorUnbondingSlashingSig);
    }
    if (message.previousStakingTxHash !== "") {
      writer.uint32(122).string(message.previousStakingTxHash);
    }
    if (message.fundingTx.length !== 0) {
      writer.uint32(130).bytes(message.fundingTx);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBtcStakeExpand {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBtcStakeExpand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakerAddr = reader.string();
          break;
        case 2:
          message.pop = ProofOfPossessionBTC.decode(reader, reader.uint32());
          break;
        case 3:
          message.btcPk = reader.bytes();
          break;
        case 4:
          message.fpBtcPkList.push(reader.bytes());
          break;
        case 5:
          message.stakingTime = reader.uint32();
          break;
        case 6:
          message.stakingValue = reader.int64();
          break;
        case 7:
          message.stakingTx = reader.bytes();
          break;
        case 8:
          message.slashingTx = reader.bytes();
          break;
        case 9:
          message.delegatorSlashingSig = reader.bytes();
          break;
        case 10:
          message.unbondingTime = reader.uint32();
          break;
        case 11:
          message.unbondingTx = reader.bytes();
          break;
        case 12:
          message.unbondingValue = reader.int64();
          break;
        case 13:
          message.unbondingSlashingTx = reader.bytes();
          break;
        case 14:
          message.delegatorUnbondingSlashingSig = reader.bytes();
          break;
        case 15:
          message.previousStakingTxHash = reader.string();
          break;
        case 16:
          message.fundingTx = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBtcStakeExpand {
    return {
      stakerAddr: isSet(object.stakerAddr) ? String(object.stakerAddr) : "",
      pop: isSet(object.pop) ? ProofOfPossessionBTC.fromJSON(object.pop) : undefined,
      btcPk: isSet(object.btcPk) ? bytesFromBase64(object.btcPk) : new Uint8Array(),
      fpBtcPkList: Array.isArray(object?.fpBtcPkList) ? object.fpBtcPkList.map((e: any) => bytesFromBase64(e)) : [],
      stakingTime: isSet(object.stakingTime) ? Number(object.stakingTime) : 0,
      stakingValue: isSet(object.stakingValue) ? BigInt(object.stakingValue.toString()) : BigInt(0),
      stakingTx: isSet(object.stakingTx) ? bytesFromBase64(object.stakingTx) : new Uint8Array(),
      slashingTx: isSet(object.slashingTx) ? bytesFromBase64(object.slashingTx) : new Uint8Array(),
      delegatorSlashingSig: isSet(object.delegatorSlashingSig) ? bytesFromBase64(object.delegatorSlashingSig) : new Uint8Array(),
      unbondingTime: isSet(object.unbondingTime) ? Number(object.unbondingTime) : 0,
      unbondingTx: isSet(object.unbondingTx) ? bytesFromBase64(object.unbondingTx) : new Uint8Array(),
      unbondingValue: isSet(object.unbondingValue) ? BigInt(object.unbondingValue.toString()) : BigInt(0),
      unbondingSlashingTx: isSet(object.unbondingSlashingTx) ? bytesFromBase64(object.unbondingSlashingTx) : new Uint8Array(),
      delegatorUnbondingSlashingSig: isSet(object.delegatorUnbondingSlashingSig) ? bytesFromBase64(object.delegatorUnbondingSlashingSig) : new Uint8Array(),
      previousStakingTxHash: isSet(object.previousStakingTxHash) ? String(object.previousStakingTxHash) : "",
      fundingTx: isSet(object.fundingTx) ? bytesFromBase64(object.fundingTx) : new Uint8Array()
    };
  },
  toJSON(message: MsgBtcStakeExpand): JsonSafe<MsgBtcStakeExpand> {
    const obj: any = {};
    message.stakerAddr !== undefined && (obj.stakerAddr = message.stakerAddr);
    message.pop !== undefined && (obj.pop = message.pop ? ProofOfPossessionBTC.toJSON(message.pop) : undefined);
    message.btcPk !== undefined && (obj.btcPk = base64FromBytes(message.btcPk !== undefined ? message.btcPk : new Uint8Array()));
    if (message.fpBtcPkList) {
      obj.fpBtcPkList = message.fpBtcPkList.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.fpBtcPkList = [];
    }
    message.stakingTime !== undefined && (obj.stakingTime = Math.round(message.stakingTime));
    message.stakingValue !== undefined && (obj.stakingValue = (message.stakingValue || BigInt(0)).toString());
    message.stakingTx !== undefined && (obj.stakingTx = base64FromBytes(message.stakingTx !== undefined ? message.stakingTx : new Uint8Array()));
    message.slashingTx !== undefined && (obj.slashingTx = base64FromBytes(message.slashingTx !== undefined ? message.slashingTx : new Uint8Array()));
    message.delegatorSlashingSig !== undefined && (obj.delegatorSlashingSig = base64FromBytes(message.delegatorSlashingSig !== undefined ? message.delegatorSlashingSig : new Uint8Array()));
    message.unbondingTime !== undefined && (obj.unbondingTime = Math.round(message.unbondingTime));
    message.unbondingTx !== undefined && (obj.unbondingTx = base64FromBytes(message.unbondingTx !== undefined ? message.unbondingTx : new Uint8Array()));
    message.unbondingValue !== undefined && (obj.unbondingValue = (message.unbondingValue || BigInt(0)).toString());
    message.unbondingSlashingTx !== undefined && (obj.unbondingSlashingTx = base64FromBytes(message.unbondingSlashingTx !== undefined ? message.unbondingSlashingTx : new Uint8Array()));
    message.delegatorUnbondingSlashingSig !== undefined && (obj.delegatorUnbondingSlashingSig = base64FromBytes(message.delegatorUnbondingSlashingSig !== undefined ? message.delegatorUnbondingSlashingSig : new Uint8Array()));
    message.previousStakingTxHash !== undefined && (obj.previousStakingTxHash = message.previousStakingTxHash);
    message.fundingTx !== undefined && (obj.fundingTx = base64FromBytes(message.fundingTx !== undefined ? message.fundingTx : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBtcStakeExpand>, I>>(object: I): MsgBtcStakeExpand {
    const message = createBaseMsgBtcStakeExpand();
    message.stakerAddr = object.stakerAddr ?? "";
    message.pop = object.pop !== undefined && object.pop !== null ? ProofOfPossessionBTC.fromPartial(object.pop) : undefined;
    message.btcPk = object.btcPk ?? new Uint8Array();
    message.fpBtcPkList = object.fpBtcPkList?.map(e => e) || [];
    message.stakingTime = object.stakingTime ?? 0;
    message.stakingValue = object.stakingValue !== undefined && object.stakingValue !== null ? BigInt(object.stakingValue.toString()) : BigInt(0);
    message.stakingTx = object.stakingTx ?? new Uint8Array();
    message.slashingTx = object.slashingTx ?? new Uint8Array();
    message.delegatorSlashingSig = object.delegatorSlashingSig ?? new Uint8Array();
    message.unbondingTime = object.unbondingTime ?? 0;
    message.unbondingTx = object.unbondingTx ?? new Uint8Array();
    message.unbondingValue = object.unbondingValue !== undefined && object.unbondingValue !== null ? BigInt(object.unbondingValue.toString()) : BigInt(0);
    message.unbondingSlashingTx = object.unbondingSlashingTx ?? new Uint8Array();
    message.delegatorUnbondingSlashingSig = object.delegatorUnbondingSlashingSig ?? new Uint8Array();
    message.previousStakingTxHash = object.previousStakingTxHash ?? "";
    message.fundingTx = object.fundingTx ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgBtcStakeExpandAmino): MsgBtcStakeExpand {
    const message = createBaseMsgBtcStakeExpand();
    if (object.staker_addr !== undefined && object.staker_addr !== null) {
      message.stakerAddr = object.staker_addr;
    }
    if (object.pop !== undefined && object.pop !== null) {
      message.pop = ProofOfPossessionBTC.fromAmino(object.pop);
    }
    if (object.btc_pk !== undefined && object.btc_pk !== null) {
      message.btcPk = bytesFromBase64(object.btc_pk);
    }
    message.fpBtcPkList = object.fp_btc_pk_list?.map(e => bytesFromBase64(e)) || [];
    if (object.staking_time !== undefined && object.staking_time !== null) {
      message.stakingTime = object.staking_time;
    }
    if (object.staking_value !== undefined && object.staking_value !== null) {
      message.stakingValue = BigInt(object.staking_value);
    }
    if (object.staking_tx !== undefined && object.staking_tx !== null) {
      message.stakingTx = bytesFromBase64(object.staking_tx);
    }
    if (object.slashing_tx !== undefined && object.slashing_tx !== null) {
      message.slashingTx = bytesFromBase64(object.slashing_tx);
    }
    if (object.delegator_slashing_sig !== undefined && object.delegator_slashing_sig !== null) {
      message.delegatorSlashingSig = bytesFromBase64(object.delegator_slashing_sig);
    }
    if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
      message.unbondingTime = object.unbonding_time;
    }
    if (object.unbonding_tx !== undefined && object.unbonding_tx !== null) {
      message.unbondingTx = bytesFromBase64(object.unbonding_tx);
    }
    if (object.unbonding_value !== undefined && object.unbonding_value !== null) {
      message.unbondingValue = BigInt(object.unbonding_value);
    }
    if (object.unbonding_slashing_tx !== undefined && object.unbonding_slashing_tx !== null) {
      message.unbondingSlashingTx = bytesFromBase64(object.unbonding_slashing_tx);
    }
    if (object.delegator_unbonding_slashing_sig !== undefined && object.delegator_unbonding_slashing_sig !== null) {
      message.delegatorUnbondingSlashingSig = bytesFromBase64(object.delegator_unbonding_slashing_sig);
    }
    if (object.previous_staking_tx_hash !== undefined && object.previous_staking_tx_hash !== null) {
      message.previousStakingTxHash = object.previous_staking_tx_hash;
    }
    if (object.funding_tx !== undefined && object.funding_tx !== null) {
      message.fundingTx = bytesFromBase64(object.funding_tx);
    }
    return message;
  },
  toAmino(message: MsgBtcStakeExpand): MsgBtcStakeExpandAmino {
    const obj: any = {};
    obj.staker_addr = message.stakerAddr === "" ? undefined : message.stakerAddr;
    obj.pop = message.pop ? ProofOfPossessionBTC.toAmino(message.pop) : undefined;
    obj.btc_pk = message.btcPk ? base64FromBytes(message.btcPk) : undefined;
    if (message.fpBtcPkList) {
      obj.fp_btc_pk_list = message.fpBtcPkList.map(e => base64FromBytes(e));
    } else {
      obj.fp_btc_pk_list = message.fpBtcPkList;
    }
    obj.staking_time = message.stakingTime === 0 ? undefined : message.stakingTime;
    obj.staking_value = message.stakingValue !== BigInt(0) ? (message.stakingValue?.toString)() : undefined;
    obj.staking_tx = message.stakingTx ? base64FromBytes(message.stakingTx) : undefined;
    obj.slashing_tx = message.slashingTx ? base64FromBytes(message.slashingTx) : undefined;
    obj.delegator_slashing_sig = message.delegatorSlashingSig ? base64FromBytes(message.delegatorSlashingSig) : undefined;
    obj.unbonding_time = message.unbondingTime === 0 ? undefined : message.unbondingTime;
    obj.unbonding_tx = message.unbondingTx ? base64FromBytes(message.unbondingTx) : undefined;
    obj.unbonding_value = message.unbondingValue !== BigInt(0) ? (message.unbondingValue?.toString)() : undefined;
    obj.unbonding_slashing_tx = message.unbondingSlashingTx ? base64FromBytes(message.unbondingSlashingTx) : undefined;
    obj.delegator_unbonding_slashing_sig = message.delegatorUnbondingSlashingSig ? base64FromBytes(message.delegatorUnbondingSlashingSig) : undefined;
    obj.previous_staking_tx_hash = message.previousStakingTxHash === "" ? undefined : message.previousStakingTxHash;
    obj.funding_tx = message.fundingTx ? base64FromBytes(message.fundingTx) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBtcStakeExpandAminoMsg): MsgBtcStakeExpand {
    return MsgBtcStakeExpand.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBtcStakeExpandProtoMsg): MsgBtcStakeExpand {
    return MsgBtcStakeExpand.decode(message.value);
  },
  toProto(message: MsgBtcStakeExpand): Uint8Array {
    return MsgBtcStakeExpand.encode(message).finish();
  },
  toProtoMsg(message: MsgBtcStakeExpand): MsgBtcStakeExpandProtoMsg {
    return {
      typeUrl: "/babylon.btcstaking.v1.MsgBtcStakeExpand",
      value: MsgBtcStakeExpand.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBtcStakeExpand.typeUrl, MsgBtcStakeExpand);
function createBaseMsgBtcStakeExpandResponse(): MsgBtcStakeExpandResponse {
  return {};
}
export const MsgBtcStakeExpandResponse = {
  typeUrl: "/babylon.btcstaking.v1.MsgBtcStakeExpandResponse",
  is(o: any): o is MsgBtcStakeExpandResponse {
    return o && o.$typeUrl === MsgBtcStakeExpandResponse.typeUrl;
  },
  isSDK(o: any): o is MsgBtcStakeExpandResponseSDKType {
    return o && o.$typeUrl === MsgBtcStakeExpandResponse.typeUrl;
  },
  isAmino(o: any): o is MsgBtcStakeExpandResponseAmino {
    return o && o.$typeUrl === MsgBtcStakeExpandResponse.typeUrl;
  },
  encode(_: MsgBtcStakeExpandResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBtcStakeExpandResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBtcStakeExpandResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgBtcStakeExpandResponse {
    return {};
  },
  toJSON(_: MsgBtcStakeExpandResponse): JsonSafe<MsgBtcStakeExpandResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBtcStakeExpandResponse>, I>>(_: I): MsgBtcStakeExpandResponse {
    const message = createBaseMsgBtcStakeExpandResponse();
    return message;
  },
  fromAmino(_: MsgBtcStakeExpandResponseAmino): MsgBtcStakeExpandResponse {
    const message = createBaseMsgBtcStakeExpandResponse();
    return message;
  },
  toAmino(_: MsgBtcStakeExpandResponse): MsgBtcStakeExpandResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBtcStakeExpandResponseAminoMsg): MsgBtcStakeExpandResponse {
    return MsgBtcStakeExpandResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBtcStakeExpandResponseProtoMsg): MsgBtcStakeExpandResponse {
    return MsgBtcStakeExpandResponse.decode(message.value);
  },
  toProto(message: MsgBtcStakeExpandResponse): Uint8Array {
    return MsgBtcStakeExpandResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBtcStakeExpandResponse): MsgBtcStakeExpandResponseProtoMsg {
    return {
      typeUrl: "/babylon.btcstaking.v1.MsgBtcStakeExpandResponse",
      value: MsgBtcStakeExpandResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBtcStakeExpandResponse.typeUrl, MsgBtcStakeExpandResponse);
