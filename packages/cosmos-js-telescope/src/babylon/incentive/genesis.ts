//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Gauge, GaugeAmino, GaugeSDKType, RewardGauge, RewardGaugeAmino, RewardGaugeSDKType } from "./incentive";
import { FinalityProviderCurrentRewards, FinalityProviderCurrentRewardsAmino, FinalityProviderCurrentRewardsSDKType, FinalityProviderHistoricalRewards, FinalityProviderHistoricalRewardsAmino, FinalityProviderHistoricalRewardsSDKType, BTCDelegationRewardsTracker, BTCDelegationRewardsTrackerAmino, BTCDelegationRewardsTrackerSDKType } from "./rewards";
import { EventsPowerUpdateAtHeight, EventsPowerUpdateAtHeightAmino, EventsPowerUpdateAtHeightSDKType } from "./events";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
/** StakeholderType represents the different types of stakeholders. */
export enum StakeholderType {
  /** FINALITY_PROVIDER - Finality provider stakeholder type */
  FINALITY_PROVIDER = 0,
  /** BTC_STAKER - BTC staker stakeholder type */
  BTC_STAKER = 1,
  /** COSTAKER - Costaker stakeholder type */
  COSTAKER = 2,
  UNRECOGNIZED = -1,
}
export const StakeholderTypeSDKType = StakeholderType;
export const StakeholderTypeAmino = StakeholderType;
export function stakeholderTypeFromJSON(object: any): StakeholderType {
  switch (object) {
    case 0:
    case "FINALITY_PROVIDER":
      return StakeholderType.FINALITY_PROVIDER;
    case 1:
    case "BTC_STAKER":
      return StakeholderType.BTC_STAKER;
    case 2:
    case "COSTAKER":
      return StakeholderType.COSTAKER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StakeholderType.UNRECOGNIZED;
  }
}
export function stakeholderTypeToJSON(object: StakeholderType): string {
  switch (object) {
    case StakeholderType.FINALITY_PROVIDER:
      return "FINALITY_PROVIDER";
    case StakeholderType.BTC_STAKER:
      return "BTC_STAKER";
    case StakeholderType.COSTAKER:
      return "COSTAKER";
    case StakeholderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** GenesisState defines the incentive module's genesis state. */
export interface GenesisState {
  /** params the current params of the state. */
  params: Params;
  /** BTC staking gauge on every height */
  btcStakingGauges: BTCStakingGaugeEntry[];
  /** RewardGauges the reward gauge for each BTC staker and finality provider */
  rewardGauges: RewardGaugeEntry[];
  /** Withdraw addresses of the delegators */
  withdrawAddresses: WithdrawAddressEntry[];
  /** refundable_msg_hashes is the set of hashes of messages that can be refunded */
  refundableMsgHashes: string[];
  finalityProvidersCurrentRewards: FinalityProviderCurrentRewardsEntry[];
  finalityProvidersHistoricalRewards: FinalityProviderHistoricalRewardsEntry[];
  /**
   * btc_delegation_rewards_trackers are the btc delegation rewards trackers
   * stored by finality provider and delegator addresses
   */
  btcDelegationRewardsTrackers: BTCDelegationRewardsTrackerEntry[];
  /**
   * btc_delegators_to_fps are all the records of the delegators and the
   * finality providers to which it delegated some BTC
   */
  btcDelegatorsToFps: BTCDelegatorToFpEntry[];
  /**
   * EventRewardTracker stores the events that will be processed at the babylon
   * block height prior to the BTC reward distribution.
   */
  eventRewardTracker: EventsPowerUpdateAtHeightEntry[];
  /**
   * LastProcessedHeightEventRewardTracker is the latest block height in which
   * the reward tracker was processed.
   */
  lastProcessedHeightEventRewardTracker: bigint;
  /** FP direct rewards gauge on every height */
  fpDirectGauges: FPDirectGaugeEntry[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/babylon.incentive.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the incentive module's genesis state. */
export interface GenesisStateAmino {
  /** params the current params of the state. */
  params?: ParamsAmino;
  /** BTC staking gauge on every height */
  btc_staking_gauges?: BTCStakingGaugeEntryAmino[];
  /** RewardGauges the reward gauge for each BTC staker and finality provider */
  reward_gauges?: RewardGaugeEntryAmino[];
  /** Withdraw addresses of the delegators */
  withdraw_addresses?: WithdrawAddressEntryAmino[];
  /** refundable_msg_hashes is the set of hashes of messages that can be refunded */
  refundable_msg_hashes?: string[];
  finality_providers_current_rewards?: FinalityProviderCurrentRewardsEntryAmino[];
  finality_providers_historical_rewards?: FinalityProviderHistoricalRewardsEntryAmino[];
  /**
   * btc_delegation_rewards_trackers are the btc delegation rewards trackers
   * stored by finality provider and delegator addresses
   */
  btc_delegation_rewards_trackers?: BTCDelegationRewardsTrackerEntryAmino[];
  /**
   * btc_delegators_to_fps are all the records of the delegators and the
   * finality providers to which it delegated some BTC
   */
  btc_delegators_to_fps?: BTCDelegatorToFpEntryAmino[];
  /**
   * EventRewardTracker stores the events that will be processed at the babylon
   * block height prior to the BTC reward distribution.
   */
  event_reward_tracker?: EventsPowerUpdateAtHeightEntryAmino[];
  /**
   * LastProcessedHeightEventRewardTracker is the latest block height in which
   * the reward tracker was processed.
   */
  last_processed_height_event_reward_tracker?: string;
  /** FP direct rewards gauge on every height */
  fp_direct_gauges?: FPDirectGaugeEntryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/babylon.incentive.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the incentive module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  btc_staking_gauges: BTCStakingGaugeEntrySDKType[];
  reward_gauges: RewardGaugeEntrySDKType[];
  withdraw_addresses: WithdrawAddressEntrySDKType[];
  refundable_msg_hashes: string[];
  finality_providers_current_rewards: FinalityProviderCurrentRewardsEntrySDKType[];
  finality_providers_historical_rewards: FinalityProviderHistoricalRewardsEntrySDKType[];
  btc_delegation_rewards_trackers: BTCDelegationRewardsTrackerEntrySDKType[];
  btc_delegators_to_fps: BTCDelegatorToFpEntrySDKType[];
  event_reward_tracker: EventsPowerUpdateAtHeightEntrySDKType[];
  last_processed_height_event_reward_tracker: bigint;
  fp_direct_gauges: FPDirectGaugeEntrySDKType[];
}
/**
 * BTCStakingGaugeEntry represents a gauge for BTC staking rewards at a specific
 * height.
 */
export interface BTCStakingGaugeEntry {
  /** Block height at which this gauge is set */
  height: bigint;
  /** The gauge object storing rewards info */
  gauge?: Gauge;
}
export interface BTCStakingGaugeEntryProtoMsg {
  typeUrl: "/babylon.incentive.BTCStakingGaugeEntry";
  value: Uint8Array;
}
/**
 * BTCStakingGaugeEntry represents a gauge for BTC staking rewards at a specific
 * height.
 */
export interface BTCStakingGaugeEntryAmino {
  /** Block height at which this gauge is set */
  height?: string;
  /** The gauge object storing rewards info */
  gauge?: GaugeAmino;
}
export interface BTCStakingGaugeEntryAminoMsg {
  type: "/babylon.incentive.BTCStakingGaugeEntry";
  value: BTCStakingGaugeEntryAmino;
}
/**
 * BTCStakingGaugeEntry represents a gauge for BTC staking rewards at a specific
 * height.
 */
export interface BTCStakingGaugeEntrySDKType {
  height: bigint;
  gauge?: GaugeSDKType;
}
/**
 * FPDirectGaugeEntry represents a gauge for FP direct rewards at a specific
 * height.
 */
export interface FPDirectGaugeEntry {
  /** Block height at which this gauge is set */
  height: bigint;
  /** The gauge object storing rewards info */
  gauge?: Gauge;
}
export interface FPDirectGaugeEntryProtoMsg {
  typeUrl: "/babylon.incentive.FPDirectGaugeEntry";
  value: Uint8Array;
}
/**
 * FPDirectGaugeEntry represents a gauge for FP direct rewards at a specific
 * height.
 */
export interface FPDirectGaugeEntryAmino {
  /** Block height at which this gauge is set */
  height?: string;
  /** The gauge object storing rewards info */
  gauge?: GaugeAmino;
}
export interface FPDirectGaugeEntryAminoMsg {
  type: "/babylon.incentive.FPDirectGaugeEntry";
  value: FPDirectGaugeEntryAmino;
}
/**
 * FPDirectGaugeEntry represents a gauge for FP direct rewards at a specific
 * height.
 */
export interface FPDirectGaugeEntrySDKType {
  height: bigint;
  gauge?: GaugeSDKType;
}
/** RewardGaugeEntry represents a reward gauge for a specific stakeholder. */
export interface RewardGaugeEntry {
  /** Type of stakeholder */
  stakeholderType: StakeholderType;
  /** Address of the stakeholder */
  address: string;
  /** The reward gauge object */
  rewardGauge?: RewardGauge;
}
export interface RewardGaugeEntryProtoMsg {
  typeUrl: "/babylon.incentive.RewardGaugeEntry";
  value: Uint8Array;
}
/** RewardGaugeEntry represents a reward gauge for a specific stakeholder. */
export interface RewardGaugeEntryAmino {
  /** Type of stakeholder */
  stakeholder_type?: StakeholderType;
  /** Address of the stakeholder */
  address?: string;
  /** The reward gauge object */
  reward_gauge?: RewardGaugeAmino;
}
export interface RewardGaugeEntryAminoMsg {
  type: "/babylon.incentive.RewardGaugeEntry";
  value: RewardGaugeEntryAmino;
}
/** RewardGaugeEntry represents a reward gauge for a specific stakeholder. */
export interface RewardGaugeEntrySDKType {
  stakeholder_type: StakeholderType;
  address: string;
  reward_gauge?: RewardGaugeSDKType;
}
/**
 * WithdrawAddressEntry holds the record of a withdraw address belonging to a
 * delegator address.
 */
export interface WithdrawAddressEntry {
  /** Address of the delegator */
  delegatorAddress: string;
  /** Withdraw address */
  withdrawAddress: string;
}
export interface WithdrawAddressEntryProtoMsg {
  typeUrl: "/babylon.incentive.WithdrawAddressEntry";
  value: Uint8Array;
}
/**
 * WithdrawAddressEntry holds the record of a withdraw address belonging to a
 * delegator address.
 */
export interface WithdrawAddressEntryAmino {
  /** Address of the delegator */
  delegator_address?: string;
  /** Withdraw address */
  withdraw_address?: string;
}
export interface WithdrawAddressEntryAminoMsg {
  type: "/babylon.incentive.WithdrawAddressEntry";
  value: WithdrawAddressEntryAmino;
}
/**
 * WithdrawAddressEntry holds the record of a withdraw address belonging to a
 * delegator address.
 */
export interface WithdrawAddressEntrySDKType {
  delegator_address: string;
  withdraw_address: string;
}
/**
 * FinalityProviderCurrentRewardsEntry represents a finality provider
 * current rewards.
 */
export interface FinalityProviderCurrentRewardsEntry {
  /** Address of the finality provider */
  address: string;
  /** The finality provider current rewards */
  rewards?: FinalityProviderCurrentRewards;
}
export interface FinalityProviderCurrentRewardsEntryProtoMsg {
  typeUrl: "/babylon.incentive.FinalityProviderCurrentRewardsEntry";
  value: Uint8Array;
}
/**
 * FinalityProviderCurrentRewardsEntry represents a finality provider
 * current rewards.
 */
export interface FinalityProviderCurrentRewardsEntryAmino {
  /** Address of the finality provider */
  address?: string;
  /** The finality provider current rewards */
  rewards?: FinalityProviderCurrentRewardsAmino;
}
export interface FinalityProviderCurrentRewardsEntryAminoMsg {
  type: "/babylon.incentive.FinalityProviderCurrentRewardsEntry";
  value: FinalityProviderCurrentRewardsEntryAmino;
}
/**
 * FinalityProviderCurrentRewardsEntry represents a finality provider
 * current rewards.
 */
export interface FinalityProviderCurrentRewardsEntrySDKType {
  address: string;
  rewards?: FinalityProviderCurrentRewardsSDKType;
}
/**
 * FinalityProviderHistoricalRewardsEntry represents a finality provider
 * historical rewards by address and period.
 */
export interface FinalityProviderHistoricalRewardsEntry {
  /** Address of the finality provider */
  address: string;
  /** Period of the historical reward */
  period: bigint;
  /** The finality provider historical rewards */
  rewards?: FinalityProviderHistoricalRewards;
}
export interface FinalityProviderHistoricalRewardsEntryProtoMsg {
  typeUrl: "/babylon.incentive.FinalityProviderHistoricalRewardsEntry";
  value: Uint8Array;
}
/**
 * FinalityProviderHistoricalRewardsEntry represents a finality provider
 * historical rewards by address and period.
 */
export interface FinalityProviderHistoricalRewardsEntryAmino {
  /** Address of the finality provider */
  address?: string;
  /** Period of the historical reward */
  period?: string;
  /** The finality provider historical rewards */
  rewards?: FinalityProviderHistoricalRewardsAmino;
}
export interface FinalityProviderHistoricalRewardsEntryAminoMsg {
  type: "/babylon.incentive.FinalityProviderHistoricalRewardsEntry";
  value: FinalityProviderHistoricalRewardsEntryAmino;
}
/**
 * FinalityProviderHistoricalRewardsEntry represents a finality provider
 * historical rewards by address and period.
 */
export interface FinalityProviderHistoricalRewardsEntrySDKType {
  address: string;
  period: bigint;
  rewards?: FinalityProviderHistoricalRewardsSDKType;
}
/**
 * BTCDelegationRewardsTrackerEntry represents a BTC delegation
 * tracker entry based on the finality provider address, the delegator address
 * and a BTCDelegationTracker
 */
export interface BTCDelegationRewardsTrackerEntry {
  /** Address of the finality provider */
  finalityProviderAddress: string;
  /** Address of the delegator */
  delegatorAddress: string;
  /** BTC delegation tracking information */
  tracker?: BTCDelegationRewardsTracker;
}
export interface BTCDelegationRewardsTrackerEntryProtoMsg {
  typeUrl: "/babylon.incentive.BTCDelegationRewardsTrackerEntry";
  value: Uint8Array;
}
/**
 * BTCDelegationRewardsTrackerEntry represents a BTC delegation
 * tracker entry based on the finality provider address, the delegator address
 * and a BTCDelegationTracker
 */
export interface BTCDelegationRewardsTrackerEntryAmino {
  /** Address of the finality provider */
  finality_provider_address?: string;
  /** Address of the delegator */
  delegator_address?: string;
  /** BTC delegation tracking information */
  tracker?: BTCDelegationRewardsTrackerAmino;
}
export interface BTCDelegationRewardsTrackerEntryAminoMsg {
  type: "/babylon.incentive.BTCDelegationRewardsTrackerEntry";
  value: BTCDelegationRewardsTrackerEntryAmino;
}
/**
 * BTCDelegationRewardsTrackerEntry represents a BTC delegation
 * tracker entry based on the finality provider address, the delegator address
 * and a BTCDelegationTracker
 */
export interface BTCDelegationRewardsTrackerEntrySDKType {
  finality_provider_address: string;
  delegator_address: string;
  tracker?: BTCDelegationRewardsTrackerSDKType;
}
/**
 * BTCDelegatorToFpEntry holds an entry of a delegator
 * and a finality provider to which it delegated
 */
export interface BTCDelegatorToFpEntry {
  /** Address of the delegator */
  delegatorAddress: string;
  /** Address of the finality provider */
  finalityProviderAddress: string;
}
export interface BTCDelegatorToFpEntryProtoMsg {
  typeUrl: "/babylon.incentive.BTCDelegatorToFpEntry";
  value: Uint8Array;
}
/**
 * BTCDelegatorToFpEntry holds an entry of a delegator
 * and a finality provider to which it delegated
 */
export interface BTCDelegatorToFpEntryAmino {
  /** Address of the delegator */
  delegator_address?: string;
  /** Address of the finality provider */
  finality_provider_address?: string;
}
export interface BTCDelegatorToFpEntryAminoMsg {
  type: "/babylon.incentive.BTCDelegatorToFpEntry";
  value: BTCDelegatorToFpEntryAmino;
}
/**
 * BTCDelegatorToFpEntry holds an entry of a delegator
 * and a finality provider to which it delegated
 */
export interface BTCDelegatorToFpEntrySDKType {
  delegator_address: string;
  finality_provider_address: string;
}
/**
 * EventsPowerUpdateAtHeightEntry holds an entry of an event
 * to be processed at the BTC reward distribution of some babylon block height
 */
export interface EventsPowerUpdateAtHeightEntry {
  /** Height the babylon block height which these events refer to. */
  height: bigint;
  /** Events holds the events to be processed. */
  events?: EventsPowerUpdateAtHeight;
}
export interface EventsPowerUpdateAtHeightEntryProtoMsg {
  typeUrl: "/babylon.incentive.EventsPowerUpdateAtHeightEntry";
  value: Uint8Array;
}
/**
 * EventsPowerUpdateAtHeightEntry holds an entry of an event
 * to be processed at the BTC reward distribution of some babylon block height
 */
export interface EventsPowerUpdateAtHeightEntryAmino {
  /** Height the babylon block height which these events refer to. */
  height?: string;
  /** Events holds the events to be processed. */
  events?: EventsPowerUpdateAtHeightAmino;
}
export interface EventsPowerUpdateAtHeightEntryAminoMsg {
  type: "/babylon.incentive.EventsPowerUpdateAtHeightEntry";
  value: EventsPowerUpdateAtHeightEntryAmino;
}
/**
 * EventsPowerUpdateAtHeightEntry holds an entry of an event
 * to be processed at the BTC reward distribution of some babylon block height
 */
export interface EventsPowerUpdateAtHeightEntrySDKType {
  height: bigint;
  events?: EventsPowerUpdateAtHeightSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    btcStakingGauges: [],
    rewardGauges: [],
    withdrawAddresses: [],
    refundableMsgHashes: [],
    finalityProvidersCurrentRewards: [],
    finalityProvidersHistoricalRewards: [],
    btcDelegationRewardsTrackers: [],
    btcDelegatorsToFps: [],
    eventRewardTracker: [],
    lastProcessedHeightEventRewardTracker: BigInt(0),
    fpDirectGauges: []
  };
}
export const GenesisState = {
  typeUrl: "/babylon.incentive.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.btcStakingGauges) && (!o.btcStakingGauges.length || BTCStakingGaugeEntry.is(o.btcStakingGauges[0])) && Array.isArray(o.rewardGauges) && (!o.rewardGauges.length || RewardGaugeEntry.is(o.rewardGauges[0])) && Array.isArray(o.withdrawAddresses) && (!o.withdrawAddresses.length || WithdrawAddressEntry.is(o.withdrawAddresses[0])) && Array.isArray(o.refundableMsgHashes) && (!o.refundableMsgHashes.length || typeof o.refundableMsgHashes[0] === "string") && Array.isArray(o.finalityProvidersCurrentRewards) && (!o.finalityProvidersCurrentRewards.length || FinalityProviderCurrentRewardsEntry.is(o.finalityProvidersCurrentRewards[0])) && Array.isArray(o.finalityProvidersHistoricalRewards) && (!o.finalityProvidersHistoricalRewards.length || FinalityProviderHistoricalRewardsEntry.is(o.finalityProvidersHistoricalRewards[0])) && Array.isArray(o.btcDelegationRewardsTrackers) && (!o.btcDelegationRewardsTrackers.length || BTCDelegationRewardsTrackerEntry.is(o.btcDelegationRewardsTrackers[0])) && Array.isArray(o.btcDelegatorsToFps) && (!o.btcDelegatorsToFps.length || BTCDelegatorToFpEntry.is(o.btcDelegatorsToFps[0])) && Array.isArray(o.eventRewardTracker) && (!o.eventRewardTracker.length || EventsPowerUpdateAtHeightEntry.is(o.eventRewardTracker[0])) && typeof o.lastProcessedHeightEventRewardTracker === "bigint" && Array.isArray(o.fpDirectGauges) && (!o.fpDirectGauges.length || FPDirectGaugeEntry.is(o.fpDirectGauges[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.btc_staking_gauges) && (!o.btc_staking_gauges.length || BTCStakingGaugeEntry.isSDK(o.btc_staking_gauges[0])) && Array.isArray(o.reward_gauges) && (!o.reward_gauges.length || RewardGaugeEntry.isSDK(o.reward_gauges[0])) && Array.isArray(o.withdraw_addresses) && (!o.withdraw_addresses.length || WithdrawAddressEntry.isSDK(o.withdraw_addresses[0])) && Array.isArray(o.refundable_msg_hashes) && (!o.refundable_msg_hashes.length || typeof o.refundable_msg_hashes[0] === "string") && Array.isArray(o.finality_providers_current_rewards) && (!o.finality_providers_current_rewards.length || FinalityProviderCurrentRewardsEntry.isSDK(o.finality_providers_current_rewards[0])) && Array.isArray(o.finality_providers_historical_rewards) && (!o.finality_providers_historical_rewards.length || FinalityProviderHistoricalRewardsEntry.isSDK(o.finality_providers_historical_rewards[0])) && Array.isArray(o.btc_delegation_rewards_trackers) && (!o.btc_delegation_rewards_trackers.length || BTCDelegationRewardsTrackerEntry.isSDK(o.btc_delegation_rewards_trackers[0])) && Array.isArray(o.btc_delegators_to_fps) && (!o.btc_delegators_to_fps.length || BTCDelegatorToFpEntry.isSDK(o.btc_delegators_to_fps[0])) && Array.isArray(o.event_reward_tracker) && (!o.event_reward_tracker.length || EventsPowerUpdateAtHeightEntry.isSDK(o.event_reward_tracker[0])) && typeof o.last_processed_height_event_reward_tracker === "bigint" && Array.isArray(o.fp_direct_gauges) && (!o.fp_direct_gauges.length || FPDirectGaugeEntry.isSDK(o.fp_direct_gauges[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.btc_staking_gauges) && (!o.btc_staking_gauges.length || BTCStakingGaugeEntry.isAmino(o.btc_staking_gauges[0])) && Array.isArray(o.reward_gauges) && (!o.reward_gauges.length || RewardGaugeEntry.isAmino(o.reward_gauges[0])) && Array.isArray(o.withdraw_addresses) && (!o.withdraw_addresses.length || WithdrawAddressEntry.isAmino(o.withdraw_addresses[0])) && Array.isArray(o.refundable_msg_hashes) && (!o.refundable_msg_hashes.length || typeof o.refundable_msg_hashes[0] === "string") && Array.isArray(o.finality_providers_current_rewards) && (!o.finality_providers_current_rewards.length || FinalityProviderCurrentRewardsEntry.isAmino(o.finality_providers_current_rewards[0])) && Array.isArray(o.finality_providers_historical_rewards) && (!o.finality_providers_historical_rewards.length || FinalityProviderHistoricalRewardsEntry.isAmino(o.finality_providers_historical_rewards[0])) && Array.isArray(o.btc_delegation_rewards_trackers) && (!o.btc_delegation_rewards_trackers.length || BTCDelegationRewardsTrackerEntry.isAmino(o.btc_delegation_rewards_trackers[0])) && Array.isArray(o.btc_delegators_to_fps) && (!o.btc_delegators_to_fps.length || BTCDelegatorToFpEntry.isAmino(o.btc_delegators_to_fps[0])) && Array.isArray(o.event_reward_tracker) && (!o.event_reward_tracker.length || EventsPowerUpdateAtHeightEntry.isAmino(o.event_reward_tracker[0])) && typeof o.last_processed_height_event_reward_tracker === "bigint" && Array.isArray(o.fp_direct_gauges) && (!o.fp_direct_gauges.length || FPDirectGaugeEntry.isAmino(o.fp_direct_gauges[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.btcStakingGauges) {
      BTCStakingGaugeEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rewardGauges) {
      RewardGaugeEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.withdrawAddresses) {
      WithdrawAddressEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.refundableMsgHashes) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.finalityProvidersCurrentRewards) {
      FinalityProviderCurrentRewardsEntry.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.finalityProvidersHistoricalRewards) {
      FinalityProviderHistoricalRewardsEntry.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.btcDelegationRewardsTrackers) {
      BTCDelegationRewardsTrackerEntry.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.btcDelegatorsToFps) {
      BTCDelegatorToFpEntry.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.eventRewardTracker) {
      EventsPowerUpdateAtHeightEntry.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.lastProcessedHeightEventRewardTracker !== BigInt(0)) {
      writer.uint32(88).uint64(message.lastProcessedHeightEventRewardTracker);
    }
    for (const v of message.fpDirectGauges) {
      FPDirectGaugeEntry.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.btcStakingGauges.push(BTCStakingGaugeEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.rewardGauges.push(RewardGaugeEntry.decode(reader, reader.uint32()));
          break;
        case 4:
          message.withdrawAddresses.push(WithdrawAddressEntry.decode(reader, reader.uint32()));
          break;
        case 5:
          message.refundableMsgHashes.push(reader.string());
          break;
        case 6:
          message.finalityProvidersCurrentRewards.push(FinalityProviderCurrentRewardsEntry.decode(reader, reader.uint32()));
          break;
        case 7:
          message.finalityProvidersHistoricalRewards.push(FinalityProviderHistoricalRewardsEntry.decode(reader, reader.uint32()));
          break;
        case 8:
          message.btcDelegationRewardsTrackers.push(BTCDelegationRewardsTrackerEntry.decode(reader, reader.uint32()));
          break;
        case 9:
          message.btcDelegatorsToFps.push(BTCDelegatorToFpEntry.decode(reader, reader.uint32()));
          break;
        case 10:
          message.eventRewardTracker.push(EventsPowerUpdateAtHeightEntry.decode(reader, reader.uint32()));
          break;
        case 11:
          message.lastProcessedHeightEventRewardTracker = reader.uint64();
          break;
        case 12:
          message.fpDirectGauges.push(FPDirectGaugeEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      btcStakingGauges: Array.isArray(object?.btcStakingGauges) ? object.btcStakingGauges.map((e: any) => BTCStakingGaugeEntry.fromJSON(e)) : [],
      rewardGauges: Array.isArray(object?.rewardGauges) ? object.rewardGauges.map((e: any) => RewardGaugeEntry.fromJSON(e)) : [],
      withdrawAddresses: Array.isArray(object?.withdrawAddresses) ? object.withdrawAddresses.map((e: any) => WithdrawAddressEntry.fromJSON(e)) : [],
      refundableMsgHashes: Array.isArray(object?.refundableMsgHashes) ? object.refundableMsgHashes.map((e: any) => String(e)) : [],
      finalityProvidersCurrentRewards: Array.isArray(object?.finalityProvidersCurrentRewards) ? object.finalityProvidersCurrentRewards.map((e: any) => FinalityProviderCurrentRewardsEntry.fromJSON(e)) : [],
      finalityProvidersHistoricalRewards: Array.isArray(object?.finalityProvidersHistoricalRewards) ? object.finalityProvidersHistoricalRewards.map((e: any) => FinalityProviderHistoricalRewardsEntry.fromJSON(e)) : [],
      btcDelegationRewardsTrackers: Array.isArray(object?.btcDelegationRewardsTrackers) ? object.btcDelegationRewardsTrackers.map((e: any) => BTCDelegationRewardsTrackerEntry.fromJSON(e)) : [],
      btcDelegatorsToFps: Array.isArray(object?.btcDelegatorsToFps) ? object.btcDelegatorsToFps.map((e: any) => BTCDelegatorToFpEntry.fromJSON(e)) : [],
      eventRewardTracker: Array.isArray(object?.eventRewardTracker) ? object.eventRewardTracker.map((e: any) => EventsPowerUpdateAtHeightEntry.fromJSON(e)) : [],
      lastProcessedHeightEventRewardTracker: isSet(object.lastProcessedHeightEventRewardTracker) ? BigInt(object.lastProcessedHeightEventRewardTracker.toString()) : BigInt(0),
      fpDirectGauges: Array.isArray(object?.fpDirectGauges) ? object.fpDirectGauges.map((e: any) => FPDirectGaugeEntry.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.btcStakingGauges) {
      obj.btcStakingGauges = message.btcStakingGauges.map(e => e ? BTCStakingGaugeEntry.toJSON(e) : undefined);
    } else {
      obj.btcStakingGauges = [];
    }
    if (message.rewardGauges) {
      obj.rewardGauges = message.rewardGauges.map(e => e ? RewardGaugeEntry.toJSON(e) : undefined);
    } else {
      obj.rewardGauges = [];
    }
    if (message.withdrawAddresses) {
      obj.withdrawAddresses = message.withdrawAddresses.map(e => e ? WithdrawAddressEntry.toJSON(e) : undefined);
    } else {
      obj.withdrawAddresses = [];
    }
    if (message.refundableMsgHashes) {
      obj.refundableMsgHashes = message.refundableMsgHashes.map(e => e);
    } else {
      obj.refundableMsgHashes = [];
    }
    if (message.finalityProvidersCurrentRewards) {
      obj.finalityProvidersCurrentRewards = message.finalityProvidersCurrentRewards.map(e => e ? FinalityProviderCurrentRewardsEntry.toJSON(e) : undefined);
    } else {
      obj.finalityProvidersCurrentRewards = [];
    }
    if (message.finalityProvidersHistoricalRewards) {
      obj.finalityProvidersHistoricalRewards = message.finalityProvidersHistoricalRewards.map(e => e ? FinalityProviderHistoricalRewardsEntry.toJSON(e) : undefined);
    } else {
      obj.finalityProvidersHistoricalRewards = [];
    }
    if (message.btcDelegationRewardsTrackers) {
      obj.btcDelegationRewardsTrackers = message.btcDelegationRewardsTrackers.map(e => e ? BTCDelegationRewardsTrackerEntry.toJSON(e) : undefined);
    } else {
      obj.btcDelegationRewardsTrackers = [];
    }
    if (message.btcDelegatorsToFps) {
      obj.btcDelegatorsToFps = message.btcDelegatorsToFps.map(e => e ? BTCDelegatorToFpEntry.toJSON(e) : undefined);
    } else {
      obj.btcDelegatorsToFps = [];
    }
    if (message.eventRewardTracker) {
      obj.eventRewardTracker = message.eventRewardTracker.map(e => e ? EventsPowerUpdateAtHeightEntry.toJSON(e) : undefined);
    } else {
      obj.eventRewardTracker = [];
    }
    message.lastProcessedHeightEventRewardTracker !== undefined && (obj.lastProcessedHeightEventRewardTracker = (message.lastProcessedHeightEventRewardTracker || BigInt(0)).toString());
    if (message.fpDirectGauges) {
      obj.fpDirectGauges = message.fpDirectGauges.map(e => e ? FPDirectGaugeEntry.toJSON(e) : undefined);
    } else {
      obj.fpDirectGauges = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.btcStakingGauges = object.btcStakingGauges?.map(e => BTCStakingGaugeEntry.fromPartial(e)) || [];
    message.rewardGauges = object.rewardGauges?.map(e => RewardGaugeEntry.fromPartial(e)) || [];
    message.withdrawAddresses = object.withdrawAddresses?.map(e => WithdrawAddressEntry.fromPartial(e)) || [];
    message.refundableMsgHashes = object.refundableMsgHashes?.map(e => e) || [];
    message.finalityProvidersCurrentRewards = object.finalityProvidersCurrentRewards?.map(e => FinalityProviderCurrentRewardsEntry.fromPartial(e)) || [];
    message.finalityProvidersHistoricalRewards = object.finalityProvidersHistoricalRewards?.map(e => FinalityProviderHistoricalRewardsEntry.fromPartial(e)) || [];
    message.btcDelegationRewardsTrackers = object.btcDelegationRewardsTrackers?.map(e => BTCDelegationRewardsTrackerEntry.fromPartial(e)) || [];
    message.btcDelegatorsToFps = object.btcDelegatorsToFps?.map(e => BTCDelegatorToFpEntry.fromPartial(e)) || [];
    message.eventRewardTracker = object.eventRewardTracker?.map(e => EventsPowerUpdateAtHeightEntry.fromPartial(e)) || [];
    message.lastProcessedHeightEventRewardTracker = object.lastProcessedHeightEventRewardTracker !== undefined && object.lastProcessedHeightEventRewardTracker !== null ? BigInt(object.lastProcessedHeightEventRewardTracker.toString()) : BigInt(0);
    message.fpDirectGauges = object.fpDirectGauges?.map(e => FPDirectGaugeEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.btcStakingGauges = object.btc_staking_gauges?.map(e => BTCStakingGaugeEntry.fromAmino(e)) || [];
    message.rewardGauges = object.reward_gauges?.map(e => RewardGaugeEntry.fromAmino(e)) || [];
    message.withdrawAddresses = object.withdraw_addresses?.map(e => WithdrawAddressEntry.fromAmino(e)) || [];
    message.refundableMsgHashes = object.refundable_msg_hashes?.map(e => e) || [];
    message.finalityProvidersCurrentRewards = object.finality_providers_current_rewards?.map(e => FinalityProviderCurrentRewardsEntry.fromAmino(e)) || [];
    message.finalityProvidersHistoricalRewards = object.finality_providers_historical_rewards?.map(e => FinalityProviderHistoricalRewardsEntry.fromAmino(e)) || [];
    message.btcDelegationRewardsTrackers = object.btc_delegation_rewards_trackers?.map(e => BTCDelegationRewardsTrackerEntry.fromAmino(e)) || [];
    message.btcDelegatorsToFps = object.btc_delegators_to_fps?.map(e => BTCDelegatorToFpEntry.fromAmino(e)) || [];
    message.eventRewardTracker = object.event_reward_tracker?.map(e => EventsPowerUpdateAtHeightEntry.fromAmino(e)) || [];
    if (object.last_processed_height_event_reward_tracker !== undefined && object.last_processed_height_event_reward_tracker !== null) {
      message.lastProcessedHeightEventRewardTracker = BigInt(object.last_processed_height_event_reward_tracker);
    }
    message.fpDirectGauges = object.fp_direct_gauges?.map(e => FPDirectGaugeEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.btcStakingGauges) {
      obj.btc_staking_gauges = message.btcStakingGauges.map(e => e ? BTCStakingGaugeEntry.toAmino(e) : undefined);
    } else {
      obj.btc_staking_gauges = message.btcStakingGauges;
    }
    if (message.rewardGauges) {
      obj.reward_gauges = message.rewardGauges.map(e => e ? RewardGaugeEntry.toAmino(e) : undefined);
    } else {
      obj.reward_gauges = message.rewardGauges;
    }
    if (message.withdrawAddresses) {
      obj.withdraw_addresses = message.withdrawAddresses.map(e => e ? WithdrawAddressEntry.toAmino(e) : undefined);
    } else {
      obj.withdraw_addresses = message.withdrawAddresses;
    }
    if (message.refundableMsgHashes) {
      obj.refundable_msg_hashes = message.refundableMsgHashes.map(e => e);
    } else {
      obj.refundable_msg_hashes = message.refundableMsgHashes;
    }
    if (message.finalityProvidersCurrentRewards) {
      obj.finality_providers_current_rewards = message.finalityProvidersCurrentRewards.map(e => e ? FinalityProviderCurrentRewardsEntry.toAmino(e) : undefined);
    } else {
      obj.finality_providers_current_rewards = message.finalityProvidersCurrentRewards;
    }
    if (message.finalityProvidersHistoricalRewards) {
      obj.finality_providers_historical_rewards = message.finalityProvidersHistoricalRewards.map(e => e ? FinalityProviderHistoricalRewardsEntry.toAmino(e) : undefined);
    } else {
      obj.finality_providers_historical_rewards = message.finalityProvidersHistoricalRewards;
    }
    if (message.btcDelegationRewardsTrackers) {
      obj.btc_delegation_rewards_trackers = message.btcDelegationRewardsTrackers.map(e => e ? BTCDelegationRewardsTrackerEntry.toAmino(e) : undefined);
    } else {
      obj.btc_delegation_rewards_trackers = message.btcDelegationRewardsTrackers;
    }
    if (message.btcDelegatorsToFps) {
      obj.btc_delegators_to_fps = message.btcDelegatorsToFps.map(e => e ? BTCDelegatorToFpEntry.toAmino(e) : undefined);
    } else {
      obj.btc_delegators_to_fps = message.btcDelegatorsToFps;
    }
    if (message.eventRewardTracker) {
      obj.event_reward_tracker = message.eventRewardTracker.map(e => e ? EventsPowerUpdateAtHeightEntry.toAmino(e) : undefined);
    } else {
      obj.event_reward_tracker = message.eventRewardTracker;
    }
    obj.last_processed_height_event_reward_tracker = message.lastProcessedHeightEventRewardTracker !== BigInt(0) ? (message.lastProcessedHeightEventRewardTracker?.toString)() : undefined;
    if (message.fpDirectGauges) {
      obj.fp_direct_gauges = message.fpDirectGauges.map(e => e ? FPDirectGaugeEntry.toAmino(e) : undefined);
    } else {
      obj.fp_direct_gauges = message.fpDirectGauges;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/babylon.incentive.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
function createBaseBTCStakingGaugeEntry(): BTCStakingGaugeEntry {
  return {
    height: BigInt(0),
    gauge: undefined
  };
}
export const BTCStakingGaugeEntry = {
  typeUrl: "/babylon.incentive.BTCStakingGaugeEntry",
  is(o: any): o is BTCStakingGaugeEntry {
    return o && (o.$typeUrl === BTCStakingGaugeEntry.typeUrl || typeof o.height === "bigint");
  },
  isSDK(o: any): o is BTCStakingGaugeEntrySDKType {
    return o && (o.$typeUrl === BTCStakingGaugeEntry.typeUrl || typeof o.height === "bigint");
  },
  isAmino(o: any): o is BTCStakingGaugeEntryAmino {
    return o && (o.$typeUrl === BTCStakingGaugeEntry.typeUrl || typeof o.height === "bigint");
  },
  encode(message: BTCStakingGaugeEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BTCStakingGaugeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBTCStakingGaugeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.gauge = Gauge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BTCStakingGaugeEntry {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      gauge: isSet(object.gauge) ? Gauge.fromJSON(object.gauge) : undefined
    };
  },
  toJSON(message: BTCStakingGaugeEntry): JsonSafe<BTCStakingGaugeEntry> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.gauge !== undefined && (obj.gauge = message.gauge ? Gauge.toJSON(message.gauge) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BTCStakingGaugeEntry>, I>>(object: I): BTCStakingGaugeEntry {
    const message = createBaseBTCStakingGaugeEntry();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.gauge = object.gauge !== undefined && object.gauge !== null ? Gauge.fromPartial(object.gauge) : undefined;
    return message;
  },
  fromAmino(object: BTCStakingGaugeEntryAmino): BTCStakingGaugeEntry {
    const message = createBaseBTCStakingGaugeEntry();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.gauge !== undefined && object.gauge !== null) {
      message.gauge = Gauge.fromAmino(object.gauge);
    }
    return message;
  },
  toAmino(message: BTCStakingGaugeEntry): BTCStakingGaugeEntryAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? (message.height?.toString)() : undefined;
    obj.gauge = message.gauge ? Gauge.toAmino(message.gauge) : undefined;
    return obj;
  },
  fromAminoMsg(object: BTCStakingGaugeEntryAminoMsg): BTCStakingGaugeEntry {
    return BTCStakingGaugeEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: BTCStakingGaugeEntryProtoMsg): BTCStakingGaugeEntry {
    return BTCStakingGaugeEntry.decode(message.value);
  },
  toProto(message: BTCStakingGaugeEntry): Uint8Array {
    return BTCStakingGaugeEntry.encode(message).finish();
  },
  toProtoMsg(message: BTCStakingGaugeEntry): BTCStakingGaugeEntryProtoMsg {
    return {
      typeUrl: "/babylon.incentive.BTCStakingGaugeEntry",
      value: BTCStakingGaugeEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BTCStakingGaugeEntry.typeUrl, BTCStakingGaugeEntry);
function createBaseFPDirectGaugeEntry(): FPDirectGaugeEntry {
  return {
    height: BigInt(0),
    gauge: undefined
  };
}
export const FPDirectGaugeEntry = {
  typeUrl: "/babylon.incentive.FPDirectGaugeEntry",
  is(o: any): o is FPDirectGaugeEntry {
    return o && (o.$typeUrl === FPDirectGaugeEntry.typeUrl || typeof o.height === "bigint");
  },
  isSDK(o: any): o is FPDirectGaugeEntrySDKType {
    return o && (o.$typeUrl === FPDirectGaugeEntry.typeUrl || typeof o.height === "bigint");
  },
  isAmino(o: any): o is FPDirectGaugeEntryAmino {
    return o && (o.$typeUrl === FPDirectGaugeEntry.typeUrl || typeof o.height === "bigint");
  },
  encode(message: FPDirectGaugeEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FPDirectGaugeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFPDirectGaugeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.gauge = Gauge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FPDirectGaugeEntry {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      gauge: isSet(object.gauge) ? Gauge.fromJSON(object.gauge) : undefined
    };
  },
  toJSON(message: FPDirectGaugeEntry): JsonSafe<FPDirectGaugeEntry> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.gauge !== undefined && (obj.gauge = message.gauge ? Gauge.toJSON(message.gauge) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FPDirectGaugeEntry>, I>>(object: I): FPDirectGaugeEntry {
    const message = createBaseFPDirectGaugeEntry();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.gauge = object.gauge !== undefined && object.gauge !== null ? Gauge.fromPartial(object.gauge) : undefined;
    return message;
  },
  fromAmino(object: FPDirectGaugeEntryAmino): FPDirectGaugeEntry {
    const message = createBaseFPDirectGaugeEntry();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.gauge !== undefined && object.gauge !== null) {
      message.gauge = Gauge.fromAmino(object.gauge);
    }
    return message;
  },
  toAmino(message: FPDirectGaugeEntry): FPDirectGaugeEntryAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? (message.height?.toString)() : undefined;
    obj.gauge = message.gauge ? Gauge.toAmino(message.gauge) : undefined;
    return obj;
  },
  fromAminoMsg(object: FPDirectGaugeEntryAminoMsg): FPDirectGaugeEntry {
    return FPDirectGaugeEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: FPDirectGaugeEntryProtoMsg): FPDirectGaugeEntry {
    return FPDirectGaugeEntry.decode(message.value);
  },
  toProto(message: FPDirectGaugeEntry): Uint8Array {
    return FPDirectGaugeEntry.encode(message).finish();
  },
  toProtoMsg(message: FPDirectGaugeEntry): FPDirectGaugeEntryProtoMsg {
    return {
      typeUrl: "/babylon.incentive.FPDirectGaugeEntry",
      value: FPDirectGaugeEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FPDirectGaugeEntry.typeUrl, FPDirectGaugeEntry);
function createBaseRewardGaugeEntry(): RewardGaugeEntry {
  return {
    stakeholderType: 0,
    address: "",
    rewardGauge: undefined
  };
}
export const RewardGaugeEntry = {
  typeUrl: "/babylon.incentive.RewardGaugeEntry",
  is(o: any): o is RewardGaugeEntry {
    return o && (o.$typeUrl === RewardGaugeEntry.typeUrl || isSet(o.stakeholderType) && typeof o.address === "string");
  },
  isSDK(o: any): o is RewardGaugeEntrySDKType {
    return o && (o.$typeUrl === RewardGaugeEntry.typeUrl || isSet(o.stakeholder_type) && typeof o.address === "string");
  },
  isAmino(o: any): o is RewardGaugeEntryAmino {
    return o && (o.$typeUrl === RewardGaugeEntry.typeUrl || isSet(o.stakeholder_type) && typeof o.address === "string");
  },
  encode(message: RewardGaugeEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakeholderType !== 0) {
      writer.uint32(8).int32(message.stakeholderType);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.rewardGauge !== undefined) {
      RewardGauge.encode(message.rewardGauge, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardGaugeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardGaugeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeholderType = reader.int32() as any;
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.rewardGauge = RewardGauge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardGaugeEntry {
    return {
      stakeholderType: isSet(object.stakeholderType) ? stakeholderTypeFromJSON(object.stakeholderType) : -1,
      address: isSet(object.address) ? String(object.address) : "",
      rewardGauge: isSet(object.rewardGauge) ? RewardGauge.fromJSON(object.rewardGauge) : undefined
    };
  },
  toJSON(message: RewardGaugeEntry): JsonSafe<RewardGaugeEntry> {
    const obj: any = {};
    message.stakeholderType !== undefined && (obj.stakeholderType = stakeholderTypeToJSON(message.stakeholderType));
    message.address !== undefined && (obj.address = message.address);
    message.rewardGauge !== undefined && (obj.rewardGauge = message.rewardGauge ? RewardGauge.toJSON(message.rewardGauge) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RewardGaugeEntry>, I>>(object: I): RewardGaugeEntry {
    const message = createBaseRewardGaugeEntry();
    message.stakeholderType = object.stakeholderType ?? 0;
    message.address = object.address ?? "";
    message.rewardGauge = object.rewardGauge !== undefined && object.rewardGauge !== null ? RewardGauge.fromPartial(object.rewardGauge) : undefined;
    return message;
  },
  fromAmino(object: RewardGaugeEntryAmino): RewardGaugeEntry {
    const message = createBaseRewardGaugeEntry();
    if (object.stakeholder_type !== undefined && object.stakeholder_type !== null) {
      message.stakeholderType = object.stakeholder_type;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.reward_gauge !== undefined && object.reward_gauge !== null) {
      message.rewardGauge = RewardGauge.fromAmino(object.reward_gauge);
    }
    return message;
  },
  toAmino(message: RewardGaugeEntry): RewardGaugeEntryAmino {
    const obj: any = {};
    obj.stakeholder_type = message.stakeholderType === 0 ? undefined : message.stakeholderType;
    obj.address = message.address === "" ? undefined : message.address;
    obj.reward_gauge = message.rewardGauge ? RewardGauge.toAmino(message.rewardGauge) : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardGaugeEntryAminoMsg): RewardGaugeEntry {
    return RewardGaugeEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardGaugeEntryProtoMsg): RewardGaugeEntry {
    return RewardGaugeEntry.decode(message.value);
  },
  toProto(message: RewardGaugeEntry): Uint8Array {
    return RewardGaugeEntry.encode(message).finish();
  },
  toProtoMsg(message: RewardGaugeEntry): RewardGaugeEntryProtoMsg {
    return {
      typeUrl: "/babylon.incentive.RewardGaugeEntry",
      value: RewardGaugeEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RewardGaugeEntry.typeUrl, RewardGaugeEntry);
function createBaseWithdrawAddressEntry(): WithdrawAddressEntry {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}
export const WithdrawAddressEntry = {
  typeUrl: "/babylon.incentive.WithdrawAddressEntry",
  is(o: any): o is WithdrawAddressEntry {
    return o && (o.$typeUrl === WithdrawAddressEntry.typeUrl || typeof o.delegatorAddress === "string" && typeof o.withdrawAddress === "string");
  },
  isSDK(o: any): o is WithdrawAddressEntrySDKType {
    return o && (o.$typeUrl === WithdrawAddressEntry.typeUrl || typeof o.delegator_address === "string" && typeof o.withdraw_address === "string");
  },
  isAmino(o: any): o is WithdrawAddressEntryAmino {
    return o && (o.$typeUrl === WithdrawAddressEntry.typeUrl || typeof o.delegator_address === "string" && typeof o.withdraw_address === "string");
  },
  encode(message: WithdrawAddressEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WithdrawAddressEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawAddressEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WithdrawAddressEntry {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : ""
    };
  },
  toJSON(message: WithdrawAddressEntry): JsonSafe<WithdrawAddressEntry> {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<WithdrawAddressEntry>, I>>(object: I): WithdrawAddressEntry {
    const message = createBaseWithdrawAddressEntry();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromAmino(object: WithdrawAddressEntryAmino): WithdrawAddressEntry {
    const message = createBaseWithdrawAddressEntry();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    return message;
  },
  toAmino(message: WithdrawAddressEntry): WithdrawAddressEntryAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.withdraw_address = message.withdrawAddress === "" ? undefined : message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: WithdrawAddressEntryAminoMsg): WithdrawAddressEntry {
    return WithdrawAddressEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: WithdrawAddressEntryProtoMsg): WithdrawAddressEntry {
    return WithdrawAddressEntry.decode(message.value);
  },
  toProto(message: WithdrawAddressEntry): Uint8Array {
    return WithdrawAddressEntry.encode(message).finish();
  },
  toProtoMsg(message: WithdrawAddressEntry): WithdrawAddressEntryProtoMsg {
    return {
      typeUrl: "/babylon.incentive.WithdrawAddressEntry",
      value: WithdrawAddressEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(WithdrawAddressEntry.typeUrl, WithdrawAddressEntry);
function createBaseFinalityProviderCurrentRewardsEntry(): FinalityProviderCurrentRewardsEntry {
  return {
    address: "",
    rewards: undefined
  };
}
export const FinalityProviderCurrentRewardsEntry = {
  typeUrl: "/babylon.incentive.FinalityProviderCurrentRewardsEntry",
  is(o: any): o is FinalityProviderCurrentRewardsEntry {
    return o && (o.$typeUrl === FinalityProviderCurrentRewardsEntry.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is FinalityProviderCurrentRewardsEntrySDKType {
    return o && (o.$typeUrl === FinalityProviderCurrentRewardsEntry.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is FinalityProviderCurrentRewardsEntryAmino {
    return o && (o.$typeUrl === FinalityProviderCurrentRewardsEntry.typeUrl || typeof o.address === "string");
  },
  encode(message: FinalityProviderCurrentRewardsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.rewards !== undefined) {
      FinalityProviderCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FinalityProviderCurrentRewardsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalityProviderCurrentRewardsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.rewards = FinalityProviderCurrentRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FinalityProviderCurrentRewardsEntry {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      rewards: isSet(object.rewards) ? FinalityProviderCurrentRewards.fromJSON(object.rewards) : undefined
    };
  },
  toJSON(message: FinalityProviderCurrentRewardsEntry): JsonSafe<FinalityProviderCurrentRewardsEntry> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.rewards !== undefined && (obj.rewards = message.rewards ? FinalityProviderCurrentRewards.toJSON(message.rewards) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FinalityProviderCurrentRewardsEntry>, I>>(object: I): FinalityProviderCurrentRewardsEntry {
    const message = createBaseFinalityProviderCurrentRewardsEntry();
    message.address = object.address ?? "";
    message.rewards = object.rewards !== undefined && object.rewards !== null ? FinalityProviderCurrentRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino(object: FinalityProviderCurrentRewardsEntryAmino): FinalityProviderCurrentRewardsEntry {
    const message = createBaseFinalityProviderCurrentRewardsEntry();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = FinalityProviderCurrentRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message: FinalityProviderCurrentRewardsEntry): FinalityProviderCurrentRewardsEntryAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.rewards = message.rewards ? FinalityProviderCurrentRewards.toAmino(message.rewards) : undefined;
    return obj;
  },
  fromAminoMsg(object: FinalityProviderCurrentRewardsEntryAminoMsg): FinalityProviderCurrentRewardsEntry {
    return FinalityProviderCurrentRewardsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: FinalityProviderCurrentRewardsEntryProtoMsg): FinalityProviderCurrentRewardsEntry {
    return FinalityProviderCurrentRewardsEntry.decode(message.value);
  },
  toProto(message: FinalityProviderCurrentRewardsEntry): Uint8Array {
    return FinalityProviderCurrentRewardsEntry.encode(message).finish();
  },
  toProtoMsg(message: FinalityProviderCurrentRewardsEntry): FinalityProviderCurrentRewardsEntryProtoMsg {
    return {
      typeUrl: "/babylon.incentive.FinalityProviderCurrentRewardsEntry",
      value: FinalityProviderCurrentRewardsEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FinalityProviderCurrentRewardsEntry.typeUrl, FinalityProviderCurrentRewardsEntry);
function createBaseFinalityProviderHistoricalRewardsEntry(): FinalityProviderHistoricalRewardsEntry {
  return {
    address: "",
    period: BigInt(0),
    rewards: undefined
  };
}
export const FinalityProviderHistoricalRewardsEntry = {
  typeUrl: "/babylon.incentive.FinalityProviderHistoricalRewardsEntry",
  is(o: any): o is FinalityProviderHistoricalRewardsEntry {
    return o && (o.$typeUrl === FinalityProviderHistoricalRewardsEntry.typeUrl || typeof o.address === "string" && typeof o.period === "bigint");
  },
  isSDK(o: any): o is FinalityProviderHistoricalRewardsEntrySDKType {
    return o && (o.$typeUrl === FinalityProviderHistoricalRewardsEntry.typeUrl || typeof o.address === "string" && typeof o.period === "bigint");
  },
  isAmino(o: any): o is FinalityProviderHistoricalRewardsEntryAmino {
    return o && (o.$typeUrl === FinalityProviderHistoricalRewardsEntry.typeUrl || typeof o.address === "string" && typeof o.period === "bigint");
  },
  encode(message: FinalityProviderHistoricalRewardsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.rewards !== undefined) {
      FinalityProviderHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FinalityProviderHistoricalRewardsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalityProviderHistoricalRewardsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.period = reader.uint64();
          break;
        case 3:
          message.rewards = FinalityProviderHistoricalRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FinalityProviderHistoricalRewardsEntry {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0),
      rewards: isSet(object.rewards) ? FinalityProviderHistoricalRewards.fromJSON(object.rewards) : undefined
    };
  },
  toJSON(message: FinalityProviderHistoricalRewardsEntry): JsonSafe<FinalityProviderHistoricalRewardsEntry> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
    message.rewards !== undefined && (obj.rewards = message.rewards ? FinalityProviderHistoricalRewards.toJSON(message.rewards) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FinalityProviderHistoricalRewardsEntry>, I>>(object: I): FinalityProviderHistoricalRewardsEntry {
    const message = createBaseFinalityProviderHistoricalRewardsEntry();
    message.address = object.address ?? "";
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.rewards = object.rewards !== undefined && object.rewards !== null ? FinalityProviderHistoricalRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino(object: FinalityProviderHistoricalRewardsEntryAmino): FinalityProviderHistoricalRewardsEntry {
    const message = createBaseFinalityProviderHistoricalRewardsEntry();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period);
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = FinalityProviderHistoricalRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message: FinalityProviderHistoricalRewardsEntry): FinalityProviderHistoricalRewardsEntryAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.period = message.period !== BigInt(0) ? (message.period?.toString)() : undefined;
    obj.rewards = message.rewards ? FinalityProviderHistoricalRewards.toAmino(message.rewards) : undefined;
    return obj;
  },
  fromAminoMsg(object: FinalityProviderHistoricalRewardsEntryAminoMsg): FinalityProviderHistoricalRewardsEntry {
    return FinalityProviderHistoricalRewardsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: FinalityProviderHistoricalRewardsEntryProtoMsg): FinalityProviderHistoricalRewardsEntry {
    return FinalityProviderHistoricalRewardsEntry.decode(message.value);
  },
  toProto(message: FinalityProviderHistoricalRewardsEntry): Uint8Array {
    return FinalityProviderHistoricalRewardsEntry.encode(message).finish();
  },
  toProtoMsg(message: FinalityProviderHistoricalRewardsEntry): FinalityProviderHistoricalRewardsEntryProtoMsg {
    return {
      typeUrl: "/babylon.incentive.FinalityProviderHistoricalRewardsEntry",
      value: FinalityProviderHistoricalRewardsEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FinalityProviderHistoricalRewardsEntry.typeUrl, FinalityProviderHistoricalRewardsEntry);
function createBaseBTCDelegationRewardsTrackerEntry(): BTCDelegationRewardsTrackerEntry {
  return {
    finalityProviderAddress: "",
    delegatorAddress: "",
    tracker: undefined
  };
}
export const BTCDelegationRewardsTrackerEntry = {
  typeUrl: "/babylon.incentive.BTCDelegationRewardsTrackerEntry",
  is(o: any): o is BTCDelegationRewardsTrackerEntry {
    return o && (o.$typeUrl === BTCDelegationRewardsTrackerEntry.typeUrl || typeof o.finalityProviderAddress === "string" && typeof o.delegatorAddress === "string");
  },
  isSDK(o: any): o is BTCDelegationRewardsTrackerEntrySDKType {
    return o && (o.$typeUrl === BTCDelegationRewardsTrackerEntry.typeUrl || typeof o.finality_provider_address === "string" && typeof o.delegator_address === "string");
  },
  isAmino(o: any): o is BTCDelegationRewardsTrackerEntryAmino {
    return o && (o.$typeUrl === BTCDelegationRewardsTrackerEntry.typeUrl || typeof o.finality_provider_address === "string" && typeof o.delegator_address === "string");
  },
  encode(message: BTCDelegationRewardsTrackerEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.finalityProviderAddress !== "") {
      writer.uint32(10).string(message.finalityProviderAddress);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(18).string(message.delegatorAddress);
    }
    if (message.tracker !== undefined) {
      BTCDelegationRewardsTracker.encode(message.tracker, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BTCDelegationRewardsTrackerEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBTCDelegationRewardsTrackerEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.finalityProviderAddress = reader.string();
          break;
        case 2:
          message.delegatorAddress = reader.string();
          break;
        case 3:
          message.tracker = BTCDelegationRewardsTracker.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BTCDelegationRewardsTrackerEntry {
    return {
      finalityProviderAddress: isSet(object.finalityProviderAddress) ? String(object.finalityProviderAddress) : "",
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      tracker: isSet(object.tracker) ? BTCDelegationRewardsTracker.fromJSON(object.tracker) : undefined
    };
  },
  toJSON(message: BTCDelegationRewardsTrackerEntry): JsonSafe<BTCDelegationRewardsTrackerEntry> {
    const obj: any = {};
    message.finalityProviderAddress !== undefined && (obj.finalityProviderAddress = message.finalityProviderAddress);
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.tracker !== undefined && (obj.tracker = message.tracker ? BTCDelegationRewardsTracker.toJSON(message.tracker) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BTCDelegationRewardsTrackerEntry>, I>>(object: I): BTCDelegationRewardsTrackerEntry {
    const message = createBaseBTCDelegationRewardsTrackerEntry();
    message.finalityProviderAddress = object.finalityProviderAddress ?? "";
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.tracker = object.tracker !== undefined && object.tracker !== null ? BTCDelegationRewardsTracker.fromPartial(object.tracker) : undefined;
    return message;
  },
  fromAmino(object: BTCDelegationRewardsTrackerEntryAmino): BTCDelegationRewardsTrackerEntry {
    const message = createBaseBTCDelegationRewardsTrackerEntry();
    if (object.finality_provider_address !== undefined && object.finality_provider_address !== null) {
      message.finalityProviderAddress = object.finality_provider_address;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.tracker !== undefined && object.tracker !== null) {
      message.tracker = BTCDelegationRewardsTracker.fromAmino(object.tracker);
    }
    return message;
  },
  toAmino(message: BTCDelegationRewardsTrackerEntry): BTCDelegationRewardsTrackerEntryAmino {
    const obj: any = {};
    obj.finality_provider_address = message.finalityProviderAddress === "" ? undefined : message.finalityProviderAddress;
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.tracker = message.tracker ? BTCDelegationRewardsTracker.toAmino(message.tracker) : undefined;
    return obj;
  },
  fromAminoMsg(object: BTCDelegationRewardsTrackerEntryAminoMsg): BTCDelegationRewardsTrackerEntry {
    return BTCDelegationRewardsTrackerEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: BTCDelegationRewardsTrackerEntryProtoMsg): BTCDelegationRewardsTrackerEntry {
    return BTCDelegationRewardsTrackerEntry.decode(message.value);
  },
  toProto(message: BTCDelegationRewardsTrackerEntry): Uint8Array {
    return BTCDelegationRewardsTrackerEntry.encode(message).finish();
  },
  toProtoMsg(message: BTCDelegationRewardsTrackerEntry): BTCDelegationRewardsTrackerEntryProtoMsg {
    return {
      typeUrl: "/babylon.incentive.BTCDelegationRewardsTrackerEntry",
      value: BTCDelegationRewardsTrackerEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BTCDelegationRewardsTrackerEntry.typeUrl, BTCDelegationRewardsTrackerEntry);
function createBaseBTCDelegatorToFpEntry(): BTCDelegatorToFpEntry {
  return {
    delegatorAddress: "",
    finalityProviderAddress: ""
  };
}
export const BTCDelegatorToFpEntry = {
  typeUrl: "/babylon.incentive.BTCDelegatorToFpEntry",
  is(o: any): o is BTCDelegatorToFpEntry {
    return o && (o.$typeUrl === BTCDelegatorToFpEntry.typeUrl || typeof o.delegatorAddress === "string" && typeof o.finalityProviderAddress === "string");
  },
  isSDK(o: any): o is BTCDelegatorToFpEntrySDKType {
    return o && (o.$typeUrl === BTCDelegatorToFpEntry.typeUrl || typeof o.delegator_address === "string" && typeof o.finality_provider_address === "string");
  },
  isAmino(o: any): o is BTCDelegatorToFpEntryAmino {
    return o && (o.$typeUrl === BTCDelegatorToFpEntry.typeUrl || typeof o.delegator_address === "string" && typeof o.finality_provider_address === "string");
  },
  encode(message: BTCDelegatorToFpEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.finalityProviderAddress !== "") {
      writer.uint32(18).string(message.finalityProviderAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BTCDelegatorToFpEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBTCDelegatorToFpEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.finalityProviderAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BTCDelegatorToFpEntry {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      finalityProviderAddress: isSet(object.finalityProviderAddress) ? String(object.finalityProviderAddress) : ""
    };
  },
  toJSON(message: BTCDelegatorToFpEntry): JsonSafe<BTCDelegatorToFpEntry> {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.finalityProviderAddress !== undefined && (obj.finalityProviderAddress = message.finalityProviderAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BTCDelegatorToFpEntry>, I>>(object: I): BTCDelegatorToFpEntry {
    const message = createBaseBTCDelegatorToFpEntry();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.finalityProviderAddress = object.finalityProviderAddress ?? "";
    return message;
  },
  fromAmino(object: BTCDelegatorToFpEntryAmino): BTCDelegatorToFpEntry {
    const message = createBaseBTCDelegatorToFpEntry();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.finality_provider_address !== undefined && object.finality_provider_address !== null) {
      message.finalityProviderAddress = object.finality_provider_address;
    }
    return message;
  },
  toAmino(message: BTCDelegatorToFpEntry): BTCDelegatorToFpEntryAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.finality_provider_address = message.finalityProviderAddress === "" ? undefined : message.finalityProviderAddress;
    return obj;
  },
  fromAminoMsg(object: BTCDelegatorToFpEntryAminoMsg): BTCDelegatorToFpEntry {
    return BTCDelegatorToFpEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: BTCDelegatorToFpEntryProtoMsg): BTCDelegatorToFpEntry {
    return BTCDelegatorToFpEntry.decode(message.value);
  },
  toProto(message: BTCDelegatorToFpEntry): Uint8Array {
    return BTCDelegatorToFpEntry.encode(message).finish();
  },
  toProtoMsg(message: BTCDelegatorToFpEntry): BTCDelegatorToFpEntryProtoMsg {
    return {
      typeUrl: "/babylon.incentive.BTCDelegatorToFpEntry",
      value: BTCDelegatorToFpEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BTCDelegatorToFpEntry.typeUrl, BTCDelegatorToFpEntry);
function createBaseEventsPowerUpdateAtHeightEntry(): EventsPowerUpdateAtHeightEntry {
  return {
    height: BigInt(0),
    events: undefined
  };
}
export const EventsPowerUpdateAtHeightEntry = {
  typeUrl: "/babylon.incentive.EventsPowerUpdateAtHeightEntry",
  is(o: any): o is EventsPowerUpdateAtHeightEntry {
    return o && (o.$typeUrl === EventsPowerUpdateAtHeightEntry.typeUrl || typeof o.height === "bigint");
  },
  isSDK(o: any): o is EventsPowerUpdateAtHeightEntrySDKType {
    return o && (o.$typeUrl === EventsPowerUpdateAtHeightEntry.typeUrl || typeof o.height === "bigint");
  },
  isAmino(o: any): o is EventsPowerUpdateAtHeightEntryAmino {
    return o && (o.$typeUrl === EventsPowerUpdateAtHeightEntry.typeUrl || typeof o.height === "bigint");
  },
  encode(message: EventsPowerUpdateAtHeightEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.events !== undefined) {
      EventsPowerUpdateAtHeight.encode(message.events, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventsPowerUpdateAtHeightEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventsPowerUpdateAtHeightEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.events = EventsPowerUpdateAtHeight.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventsPowerUpdateAtHeightEntry {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      events: isSet(object.events) ? EventsPowerUpdateAtHeight.fromJSON(object.events) : undefined
    };
  },
  toJSON(message: EventsPowerUpdateAtHeightEntry): JsonSafe<EventsPowerUpdateAtHeightEntry> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.events !== undefined && (obj.events = message.events ? EventsPowerUpdateAtHeight.toJSON(message.events) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventsPowerUpdateAtHeightEntry>, I>>(object: I): EventsPowerUpdateAtHeightEntry {
    const message = createBaseEventsPowerUpdateAtHeightEntry();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.events = object.events !== undefined && object.events !== null ? EventsPowerUpdateAtHeight.fromPartial(object.events) : undefined;
    return message;
  },
  fromAmino(object: EventsPowerUpdateAtHeightEntryAmino): EventsPowerUpdateAtHeightEntry {
    const message = createBaseEventsPowerUpdateAtHeightEntry();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.events !== undefined && object.events !== null) {
      message.events = EventsPowerUpdateAtHeight.fromAmino(object.events);
    }
    return message;
  },
  toAmino(message: EventsPowerUpdateAtHeightEntry): EventsPowerUpdateAtHeightEntryAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? (message.height?.toString)() : undefined;
    obj.events = message.events ? EventsPowerUpdateAtHeight.toAmino(message.events) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventsPowerUpdateAtHeightEntryAminoMsg): EventsPowerUpdateAtHeightEntry {
    return EventsPowerUpdateAtHeightEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: EventsPowerUpdateAtHeightEntryProtoMsg): EventsPowerUpdateAtHeightEntry {
    return EventsPowerUpdateAtHeightEntry.decode(message.value);
  },
  toProto(message: EventsPowerUpdateAtHeightEntry): Uint8Array {
    return EventsPowerUpdateAtHeightEntry.encode(message).finish();
  },
  toProtoMsg(message: EventsPowerUpdateAtHeightEntry): EventsPowerUpdateAtHeightEntryProtoMsg {
    return {
      typeUrl: "/babylon.incentive.EventsPowerUpdateAtHeightEntry",
      value: EventsPowerUpdateAtHeightEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventsPowerUpdateAtHeightEntry.typeUrl, EventsPowerUpdateAtHeightEntry);