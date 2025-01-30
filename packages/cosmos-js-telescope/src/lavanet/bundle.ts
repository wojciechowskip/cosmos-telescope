//@ts-nocheck
import * as _73 from "./lava/downtime/v1/downtime";
import * as _74 from "./lava/downtime/v1/genesis";
import * as _75 from "./lava/downtime/v1/query";
import * as _76 from "./lava/dualstaking/delegate";
import * as _77 from "./lava/dualstaking/delegator_reward";
import * as _78 from "./lava/dualstaking/genesis";
import * as _79 from "./lava/dualstaking/params";
import * as _80 from "./lava/dualstaking/query";
import * as _81 from "./lava/dualstaking/tx";
import * as _82 from "./lava/epochstorage/endpoint";
import * as _83 from "./lava/epochstorage/epoch_details";
import * as _84 from "./lava/epochstorage/fixated_params";
import * as _85 from "./lava/epochstorage/genesis";
import * as _86 from "./lava/epochstorage/params";
import * as _87 from "./lava/epochstorage/provider_metadata";
import * as _88 from "./lava/epochstorage/query";
import * as _89 from "./lava/epochstorage/stake_entry";
import * as _90 from "./lava/epochstorage/stake_storage";
import * as _91 from "./lava/epochstorage/tx";
import * as _92 from "./lava/fixationstore/fixation";
import * as _93 from "./lava/fixationstore/query";
import * as _94 from "./lava/pairing/account_info";
import * as _95 from "./lava/pairing/badges";
import * as _96 from "./lava/pairing/debug_query";
import * as _97 from "./lava/pairing/epoch_cu";
import * as _98 from "./lava/pairing/genesis";
import * as _99 from "./lava/pairing/params";
import * as _100 from "./lava/pairing/query";
import * as _101 from "./lava/pairing/relay";
import * as _102 from "./lava/pairing/relayCache";
import * as _103 from "./lava/pairing/tx";
import * as _104 from "./lava/pairing/unstake_proposal";
import * as _105 from "./lava/plans/genesis";
import * as _106 from "./lava/plans/params";
import * as _107 from "./lava/plans/plan";
import * as _108 from "./lava/plans/plans_proposal";
import * as _109 from "./lava/plans/policy";
import * as _110 from "./lava/plans/query";
import * as _111 from "./lava/plans/tx";
import * as _112 from "./lava/projects/genesis";
import * as _113 from "./lava/projects/params";
import * as _114 from "./lava/projects/project";
import * as _115 from "./lava/projects/query";
import * as _116 from "./lava/projects/tx";
import * as _117 from "./lava/spec/api_collection";
import * as _118 from "./lava/spec/genesis";
import * as _119 from "./lava/spec/params";
import * as _120 from "./lava/spec/query";
import * as _121 from "./lava/spec/spec_add_proposal";
import * as _122 from "./lava/spec/spec";
import * as _123 from "./lava/spec/tx";
import * as _124 from "./lava/subscription/adjustment";
import * as _125 from "./lava/subscription/cu_tracker";
import * as _126 from "./lava/subscription/genesis";
import * as _127 from "./lava/subscription/params";
import * as _128 from "./lava/subscription/query";
import * as _129 from "./lava/subscription/subscription";
import * as _130 from "./lava/subscription/tx";
import * as _131 from "./lava/timerstore/query";
import * as _132 from "./lava/timerstore/timer";
import * as _190 from "./lava/dualstaking/tx.amino";
import * as _191 from "./lava/pairing/tx.amino";
import * as _192 from "./lava/projects/tx.amino";
import * as _193 from "./lava/subscription/tx.amino";
import * as _194 from "./lava/dualstaking/tx.registry";
import * as _195 from "./lava/pairing/tx.registry";
import * as _196 from "./lava/projects/tx.registry";
import * as _197 from "./lava/subscription/tx.registry";
import * as _198 from "./lava/downtime/v1/query.rpc.Query";
import * as _199 from "./lava/dualstaking/query.rpc.Query";
import * as _200 from "./lava/epochstorage/query.rpc.Query";
import * as _201 from "./lava/fixationstore/query.rpc.Query";
import * as _202 from "./lava/pairing/query.rpc.Query";
import * as _203 from "./lava/plans/query.rpc.Query";
import * as _204 from "./lava/projects/query.rpc.Query";
import * as _205 from "./lava/spec/query.rpc.Query";
import * as _206 from "./lava/subscription/query.rpc.Query";
import * as _207 from "./lava/timerstore/query.rpc.Query";
import * as _208 from "./lava/dualstaking/tx.rpc.msg";
import * as _209 from "./lava/pairing/tx.rpc.msg";
import * as _210 from "./lava/projects/tx.rpc.msg";
import * as _211 from "./lava/subscription/tx.rpc.msg";
import * as _214 from "./rpc.query";
import * as _215 from "./rpc.tx";
export namespace lavanet {
  export namespace lava {
    export namespace downtime {
      export const v1 = {
        ..._73,
        ..._74,
        ..._75,
        ..._198
      };
    }
    export const dualstaking = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._190,
      ..._194,
      ..._199,
      ..._208
    };
    export const epochstorage = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._200
    };
    export const fixationstore = {
      ..._92,
      ..._93,
      ..._201
    };
    export const pairing = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._191,
      ..._195,
      ..._202,
      ..._209
    };
    export const plans = {
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._203
    };
    export const projects = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._192,
      ..._196,
      ..._204,
      ..._210
    };
    export const spec = {
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._205
    };
    export const subscription = {
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._193,
      ..._197,
      ..._206,
      ..._211
    };
    export const timerstore = {
      ..._131,
      ..._132,
      ..._207
    };
  }
  export const ClientFactory = {
    ..._214,
    ..._215
  };
}