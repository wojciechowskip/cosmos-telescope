//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * TakerFeeShareAgreement represents the agreement between the Osmosis protocol
 * and a specific denom to share a certain percent of taker fees generated in
 * any route that contains said denom. For example, if the agreement specifies a
 * 10% skim_percent, this means 10% of the taker fees generated in a swap route
 * containing the specified denom will be sent to the address specified
 * in the skim_address field at the end of each epoch. These skim_percents are
 * additive, so if three taker fee agreements have skim percents of 10%, 20%,
 * and 30%, the total skim percent for the route will be 60%.
 */
export interface TakerFeeShareAgreement {
  /** denom is the denom that has the taker fee share agreement. */
  denom: string;
  /**
   * skim_percent is the percentage of taker fees that will be skimmed for the
   * denom, in the event that the denom is included in the swap route.
   */
  skimPercent: string;
  /**
   * skim_address is the address belonging to the respective denom
   * that the skimmed taker fees will be sent to at the end of each epoch.
   */
  skimAddress: string;
}
export interface TakerFeeShareAgreementProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeShareAgreement";
  value: Uint8Array;
}
/**
 * TakerFeeShareAgreement represents the agreement between the Osmosis protocol
 * and a specific denom to share a certain percent of taker fees generated in
 * any route that contains said denom. For example, if the agreement specifies a
 * 10% skim_percent, this means 10% of the taker fees generated in a swap route
 * containing the specified denom will be sent to the address specified
 * in the skim_address field at the end of each epoch. These skim_percents are
 * additive, so if three taker fee agreements have skim percents of 10%, 20%,
 * and 30%, the total skim percent for the route will be 60%.
 */
export interface TakerFeeShareAgreementAmino {
  /** denom is the denom that has the taker fee share agreement. */
  denom?: string;
  /**
   * skim_percent is the percentage of taker fees that will be skimmed for the
   * denom, in the event that the denom is included in the swap route.
   */
  skim_percent?: string;
  /**
   * skim_address is the address belonging to the respective denom
   * that the skimmed taker fees will be sent to at the end of each epoch.
   */
  skim_address?: string;
}
export interface TakerFeeShareAgreementAminoMsg {
  type: "osmosis/poolmanager/taker-fee-share-agreement";
  value: TakerFeeShareAgreementAmino;
}
/**
 * TakerFeeShareAgreement represents the agreement between the Osmosis protocol
 * and a specific denom to share a certain percent of taker fees generated in
 * any route that contains said denom. For example, if the agreement specifies a
 * 10% skim_percent, this means 10% of the taker fees generated in a swap route
 * containing the specified denom will be sent to the address specified
 * in the skim_address field at the end of each epoch. These skim_percents are
 * additive, so if three taker fee agreements have skim percents of 10%, 20%,
 * and 30%, the total skim percent for the route will be 60%.
 */
export interface TakerFeeShareAgreementSDKType {
  denom: string;
  skim_percent: string;
  skim_address: string;
}
/**
 * TakerFeeSkimAccumulator accumulates the total skimmed taker fees for each
 * denom that has a taker fee share agreement.
 */
export interface TakerFeeSkimAccumulator {
  /** denom is the denom that has the taker fee share agreement. */
  denom: string;
  /** skimmed_taker_fees is the total skimmed taker fees for the denom. */
  skimmedTakerFees: Coin[];
}
export interface TakerFeeSkimAccumulatorProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeSkimAccumulator";
  value: Uint8Array;
}
/**
 * TakerFeeSkimAccumulator accumulates the total skimmed taker fees for each
 * denom that has a taker fee share agreement.
 */
export interface TakerFeeSkimAccumulatorAmino {
  /** denom is the denom that has the taker fee share agreement. */
  denom?: string;
  /** skimmed_taker_fees is the total skimmed taker fees for the denom. */
  skimmed_taker_fees?: CoinAmino[];
}
export interface TakerFeeSkimAccumulatorAminoMsg {
  type: "osmosis/poolmanager/taker-fee-skim-accumulator";
  value: TakerFeeSkimAccumulatorAmino;
}
/**
 * TakerFeeSkimAccumulator accumulates the total skimmed taker fees for each
 * denom that has a taker fee share agreement.
 */
export interface TakerFeeSkimAccumulatorSDKType {
  denom: string;
  skimmed_taker_fees: CoinSDKType[];
}
/**
 * AlloyContractTakerFeeShareState contains the contract address of the alloyed
 * asset pool, along with the adjusted taker fee share agreements for any asset
 * within the alloyed asset pool that has a taker fee share agreement. If for
 * instance there are two denoms, and denomA makes up 50 percent and denomB
 * makes up 50 percent, and denom A has a taker fee share agreement with a skim
 * percent of 10%, then the adjusted taker fee share agreement for denomA will
 * be 5%.
 */
export interface AlloyContractTakerFeeShareState {
  /** contract_address is the address of the alloyed asset pool contract. */
  contractAddress: string;
  /**
   * taker_fee_share_agreements is the adjusted taker fee share agreements for
   * any asset within the alloyed asset pool that has a taker fee share
   * agreement.
   */
  takerFeeShareAgreements: TakerFeeShareAgreement[];
}
export interface AlloyContractTakerFeeShareStateProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.AlloyContractTakerFeeShareState";
  value: Uint8Array;
}
/**
 * AlloyContractTakerFeeShareState contains the contract address of the alloyed
 * asset pool, along with the adjusted taker fee share agreements for any asset
 * within the alloyed asset pool that has a taker fee share agreement. If for
 * instance there are two denoms, and denomA makes up 50 percent and denomB
 * makes up 50 percent, and denom A has a taker fee share agreement with a skim
 * percent of 10%, then the adjusted taker fee share agreement for denomA will
 * be 5%.
 */
export interface AlloyContractTakerFeeShareStateAmino {
  /** contract_address is the address of the alloyed asset pool contract. */
  contract_address?: string;
  /**
   * taker_fee_share_agreements is the adjusted taker fee share agreements for
   * any asset within the alloyed asset pool that has a taker fee share
   * agreement.
   */
  taker_fee_share_agreements?: TakerFeeShareAgreementAmino[];
}
export interface AlloyContractTakerFeeShareStateAminoMsg {
  type: "osmosis/poolmanager/alloy-contract-taker-fee-share-state";
  value: AlloyContractTakerFeeShareStateAmino;
}
/**
 * AlloyContractTakerFeeShareState contains the contract address of the alloyed
 * asset pool, along with the adjusted taker fee share agreements for any asset
 * within the alloyed asset pool that has a taker fee share agreement. If for
 * instance there are two denoms, and denomA makes up 50 percent and denomB
 * makes up 50 percent, and denom A has a taker fee share agreement with a skim
 * percent of 10%, then the adjusted taker fee share agreement for denomA will
 * be 5%.
 */
export interface AlloyContractTakerFeeShareStateSDKType {
  contract_address: string;
  taker_fee_share_agreements: TakerFeeShareAgreementSDKType[];
}
function createBaseTakerFeeShareAgreement(): TakerFeeShareAgreement {
  return {
    denom: "",
    skimPercent: "",
    skimAddress: ""
  };
}
export const TakerFeeShareAgreement = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeShareAgreement",
  aminoType: "osmosis/poolmanager/taker-fee-share-agreement",
  is(o: any): o is TakerFeeShareAgreement {
    return o && (o.$typeUrl === TakerFeeShareAgreement.typeUrl || typeof o.denom === "string" && typeof o.skimPercent === "string" && typeof o.skimAddress === "string");
  },
  isSDK(o: any): o is TakerFeeShareAgreementSDKType {
    return o && (o.$typeUrl === TakerFeeShareAgreement.typeUrl || typeof o.denom === "string" && typeof o.skim_percent === "string" && typeof o.skim_address === "string");
  },
  isAmino(o: any): o is TakerFeeShareAgreementAmino {
    return o && (o.$typeUrl === TakerFeeShareAgreement.typeUrl || typeof o.denom === "string" && typeof o.skim_percent === "string" && typeof o.skim_address === "string");
  },
  encode(message: TakerFeeShareAgreement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.skimPercent !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.skimPercent, 18).atomics);
    }
    if (message.skimAddress !== "") {
      writer.uint32(26).string(message.skimAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TakerFeeShareAgreement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTakerFeeShareAgreement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.skimPercent = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.skimAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TakerFeeShareAgreement {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      skimPercent: isSet(object.skimPercent) ? String(object.skimPercent) : "",
      skimAddress: isSet(object.skimAddress) ? String(object.skimAddress) : ""
    };
  },
  toJSON(message: TakerFeeShareAgreement): JsonSafe<TakerFeeShareAgreement> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.skimPercent !== undefined && (obj.skimPercent = message.skimPercent);
    message.skimAddress !== undefined && (obj.skimAddress = message.skimAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TakerFeeShareAgreement>, I>>(object: I): TakerFeeShareAgreement {
    const message = createBaseTakerFeeShareAgreement();
    message.denom = object.denom ?? "";
    message.skimPercent = object.skimPercent ?? "";
    message.skimAddress = object.skimAddress ?? "";
    return message;
  },
  fromAmino(object: TakerFeeShareAgreementAmino): TakerFeeShareAgreement {
    const message = createBaseTakerFeeShareAgreement();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.skim_percent !== undefined && object.skim_percent !== null) {
      message.skimPercent = object.skim_percent;
    }
    if (object.skim_address !== undefined && object.skim_address !== null) {
      message.skimAddress = object.skim_address;
    }
    return message;
  },
  toAmino(message: TakerFeeShareAgreement): TakerFeeShareAgreementAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.skim_percent = message.skimPercent === "" ? undefined : message.skimPercent;
    obj.skim_address = message.skimAddress === "" ? undefined : message.skimAddress;
    return obj;
  },
  fromAminoMsg(object: TakerFeeShareAgreementAminoMsg): TakerFeeShareAgreement {
    return TakerFeeShareAgreement.fromAmino(object.value);
  },
  toAminoMsg(message: TakerFeeShareAgreement): TakerFeeShareAgreementAminoMsg {
    return {
      type: "osmosis/poolmanager/taker-fee-share-agreement",
      value: TakerFeeShareAgreement.toAmino(message)
    };
  },
  fromProtoMsg(message: TakerFeeShareAgreementProtoMsg): TakerFeeShareAgreement {
    return TakerFeeShareAgreement.decode(message.value);
  },
  toProto(message: TakerFeeShareAgreement): Uint8Array {
    return TakerFeeShareAgreement.encode(message).finish();
  },
  toProtoMsg(message: TakerFeeShareAgreement): TakerFeeShareAgreementProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeShareAgreement",
      value: TakerFeeShareAgreement.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TakerFeeShareAgreement.typeUrl, TakerFeeShareAgreement);
GlobalDecoderRegistry.registerAminoProtoMapping(TakerFeeShareAgreement.aminoType, TakerFeeShareAgreement.typeUrl);
function createBaseTakerFeeSkimAccumulator(): TakerFeeSkimAccumulator {
  return {
    denom: "",
    skimmedTakerFees: []
  };
}
export const TakerFeeSkimAccumulator = {
  typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeSkimAccumulator",
  aminoType: "osmosis/poolmanager/taker-fee-skim-accumulator",
  is(o: any): o is TakerFeeSkimAccumulator {
    return o && (o.$typeUrl === TakerFeeSkimAccumulator.typeUrl || typeof o.denom === "string" && Array.isArray(o.skimmedTakerFees) && (!o.skimmedTakerFees.length || Coin.is(o.skimmedTakerFees[0])));
  },
  isSDK(o: any): o is TakerFeeSkimAccumulatorSDKType {
    return o && (o.$typeUrl === TakerFeeSkimAccumulator.typeUrl || typeof o.denom === "string" && Array.isArray(o.skimmed_taker_fees) && (!o.skimmed_taker_fees.length || Coin.isSDK(o.skimmed_taker_fees[0])));
  },
  isAmino(o: any): o is TakerFeeSkimAccumulatorAmino {
    return o && (o.$typeUrl === TakerFeeSkimAccumulator.typeUrl || typeof o.denom === "string" && Array.isArray(o.skimmed_taker_fees) && (!o.skimmed_taker_fees.length || Coin.isAmino(o.skimmed_taker_fees[0])));
  },
  encode(message: TakerFeeSkimAccumulator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    for (const v of message.skimmedTakerFees) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TakerFeeSkimAccumulator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTakerFeeSkimAccumulator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.skimmedTakerFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TakerFeeSkimAccumulator {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      skimmedTakerFees: Array.isArray(object?.skimmedTakerFees) ? object.skimmedTakerFees.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: TakerFeeSkimAccumulator): JsonSafe<TakerFeeSkimAccumulator> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    if (message.skimmedTakerFees) {
      obj.skimmedTakerFees = message.skimmedTakerFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.skimmedTakerFees = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TakerFeeSkimAccumulator>, I>>(object: I): TakerFeeSkimAccumulator {
    const message = createBaseTakerFeeSkimAccumulator();
    message.denom = object.denom ?? "";
    message.skimmedTakerFees = object.skimmedTakerFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TakerFeeSkimAccumulatorAmino): TakerFeeSkimAccumulator {
    const message = createBaseTakerFeeSkimAccumulator();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    message.skimmedTakerFees = object.skimmed_taker_fees?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TakerFeeSkimAccumulator): TakerFeeSkimAccumulatorAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    if (message.skimmedTakerFees) {
      obj.skimmed_taker_fees = message.skimmedTakerFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.skimmed_taker_fees = message.skimmedTakerFees;
    }
    return obj;
  },
  fromAminoMsg(object: TakerFeeSkimAccumulatorAminoMsg): TakerFeeSkimAccumulator {
    return TakerFeeSkimAccumulator.fromAmino(object.value);
  },
  toAminoMsg(message: TakerFeeSkimAccumulator): TakerFeeSkimAccumulatorAminoMsg {
    return {
      type: "osmosis/poolmanager/taker-fee-skim-accumulator",
      value: TakerFeeSkimAccumulator.toAmino(message)
    };
  },
  fromProtoMsg(message: TakerFeeSkimAccumulatorProtoMsg): TakerFeeSkimAccumulator {
    return TakerFeeSkimAccumulator.decode(message.value);
  },
  toProto(message: TakerFeeSkimAccumulator): Uint8Array {
    return TakerFeeSkimAccumulator.encode(message).finish();
  },
  toProtoMsg(message: TakerFeeSkimAccumulator): TakerFeeSkimAccumulatorProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.TakerFeeSkimAccumulator",
      value: TakerFeeSkimAccumulator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TakerFeeSkimAccumulator.typeUrl, TakerFeeSkimAccumulator);
GlobalDecoderRegistry.registerAminoProtoMapping(TakerFeeSkimAccumulator.aminoType, TakerFeeSkimAccumulator.typeUrl);
function createBaseAlloyContractTakerFeeShareState(): AlloyContractTakerFeeShareState {
  return {
    contractAddress: "",
    takerFeeShareAgreements: []
  };
}
export const AlloyContractTakerFeeShareState = {
  typeUrl: "/osmosis.poolmanager.v1beta1.AlloyContractTakerFeeShareState",
  aminoType: "osmosis/poolmanager/alloy-contract-taker-fee-share-state",
  is(o: any): o is AlloyContractTakerFeeShareState {
    return o && (o.$typeUrl === AlloyContractTakerFeeShareState.typeUrl || typeof o.contractAddress === "string" && Array.isArray(o.takerFeeShareAgreements) && (!o.takerFeeShareAgreements.length || TakerFeeShareAgreement.is(o.takerFeeShareAgreements[0])));
  },
  isSDK(o: any): o is AlloyContractTakerFeeShareStateSDKType {
    return o && (o.$typeUrl === AlloyContractTakerFeeShareState.typeUrl || typeof o.contract_address === "string" && Array.isArray(o.taker_fee_share_agreements) && (!o.taker_fee_share_agreements.length || TakerFeeShareAgreement.isSDK(o.taker_fee_share_agreements[0])));
  },
  isAmino(o: any): o is AlloyContractTakerFeeShareStateAmino {
    return o && (o.$typeUrl === AlloyContractTakerFeeShareState.typeUrl || typeof o.contract_address === "string" && Array.isArray(o.taker_fee_share_agreements) && (!o.taker_fee_share_agreements.length || TakerFeeShareAgreement.isAmino(o.taker_fee_share_agreements[0])));
  },
  encode(message: AlloyContractTakerFeeShareState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    for (const v of message.takerFeeShareAgreements) {
      TakerFeeShareAgreement.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AlloyContractTakerFeeShareState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlloyContractTakerFeeShareState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.takerFeeShareAgreements.push(TakerFeeShareAgreement.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AlloyContractTakerFeeShareState {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      takerFeeShareAgreements: Array.isArray(object?.takerFeeShareAgreements) ? object.takerFeeShareAgreements.map((e: any) => TakerFeeShareAgreement.fromJSON(e)) : []
    };
  },
  toJSON(message: AlloyContractTakerFeeShareState): JsonSafe<AlloyContractTakerFeeShareState> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    if (message.takerFeeShareAgreements) {
      obj.takerFeeShareAgreements = message.takerFeeShareAgreements.map(e => e ? TakerFeeShareAgreement.toJSON(e) : undefined);
    } else {
      obj.takerFeeShareAgreements = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AlloyContractTakerFeeShareState>, I>>(object: I): AlloyContractTakerFeeShareState {
    const message = createBaseAlloyContractTakerFeeShareState();
    message.contractAddress = object.contractAddress ?? "";
    message.takerFeeShareAgreements = object.takerFeeShareAgreements?.map(e => TakerFeeShareAgreement.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AlloyContractTakerFeeShareStateAmino): AlloyContractTakerFeeShareState {
    const message = createBaseAlloyContractTakerFeeShareState();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    message.takerFeeShareAgreements = object.taker_fee_share_agreements?.map(e => TakerFeeShareAgreement.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AlloyContractTakerFeeShareState): AlloyContractTakerFeeShareStateAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    if (message.takerFeeShareAgreements) {
      obj.taker_fee_share_agreements = message.takerFeeShareAgreements.map(e => e ? TakerFeeShareAgreement.toAmino(e) : undefined);
    } else {
      obj.taker_fee_share_agreements = message.takerFeeShareAgreements;
    }
    return obj;
  },
  fromAminoMsg(object: AlloyContractTakerFeeShareStateAminoMsg): AlloyContractTakerFeeShareState {
    return AlloyContractTakerFeeShareState.fromAmino(object.value);
  },
  toAminoMsg(message: AlloyContractTakerFeeShareState): AlloyContractTakerFeeShareStateAminoMsg {
    return {
      type: "osmosis/poolmanager/alloy-contract-taker-fee-share-state",
      value: AlloyContractTakerFeeShareState.toAmino(message)
    };
  },
  fromProtoMsg(message: AlloyContractTakerFeeShareStateProtoMsg): AlloyContractTakerFeeShareState {
    return AlloyContractTakerFeeShareState.decode(message.value);
  },
  toProto(message: AlloyContractTakerFeeShareState): Uint8Array {
    return AlloyContractTakerFeeShareState.encode(message).finish();
  },
  toProtoMsg(message: AlloyContractTakerFeeShareState): AlloyContractTakerFeeShareStateProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.AlloyContractTakerFeeShareState",
      value: AlloyContractTakerFeeShareState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AlloyContractTakerFeeShareState.typeUrl, AlloyContractTakerFeeShareState);
GlobalDecoderRegistry.registerAminoProtoMapping(AlloyContractTakerFeeShareState.aminoType, AlloyContractTakerFeeShareState.typeUrl);