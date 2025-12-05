//@ts-nocheck
import * as _86 from "./lava/downtime/v1/downtime";
import * as _87 from "./lava/downtime/v1/genesis";
import * as _88 from "./lava/downtime/v1/query";
import * as _89 from "./lava/dualstaking/delegate";
import * as _90 from "./lava/dualstaking/delegator_reward";
import * as _91 from "./lava/dualstaking/genesis";
import * as _92 from "./lava/dualstaking/params";
import * as _93 from "./lava/dualstaking/query";
import * as _94 from "./lava/dualstaking/tx";
import * as _95 from "./lava/epochstorage/endpoint";
import * as _96 from "./lava/epochstorage/epoch_details";
import * as _97 from "./lava/epochstorage/fixated_params";
import * as _98 from "./lava/epochstorage/genesis";
import * as _99 from "./lava/epochstorage/params";
import * as _100 from "./lava/epochstorage/provider_metadata";
import * as _101 from "./lava/epochstorage/query";
import * as _102 from "./lava/epochstorage/stake_entry";
import * as _103 from "./lava/epochstorage/stake_storage";
import * as _104 from "./lava/epochstorage/tx";
import * as _105 from "./lava/fixationstore/fixation";
import * as _106 from "./lava/fixationstore/query";
import * as _107 from "./lava/pairing/account_info";
import * as _108 from "./lava/pairing/badges";
import * as _109 from "./lava/pairing/debug_query";
import * as _110 from "./lava/pairing/epoch_cu";
import * as _111 from "./lava/pairing/genesis";
import * as _112 from "./lava/pairing/params";
import * as _113 from "./lava/pairing/query";
import * as _114 from "./lava/pairing/relay";
import * as _115 from "./lava/pairing/relayCache";
import * as _116 from "./lava/pairing/tx";
import * as _117 from "./lava/pairing/unstake_proposal";
import * as _118 from "./lava/plans/genesis";
import * as _119 from "./lava/plans/params";
import * as _120 from "./lava/plans/plan";
import * as _121 from "./lava/plans/plans_proposal";
import * as _122 from "./lava/plans/policy";
import * as _123 from "./lava/plans/query";
import * as _124 from "./lava/plans/tx";
import * as _125 from "./lava/projects/genesis";
import * as _126 from "./lava/projects/params";
import * as _127 from "./lava/projects/project";
import * as _128 from "./lava/projects/query";
import * as _129 from "./lava/projects/tx";
import * as _130 from "./lava/spec/api_collection";
import * as _131 from "./lava/spec/genesis";
import * as _132 from "./lava/spec/params";
import * as _133 from "./lava/spec/query";
import * as _134 from "./lava/spec/spec_add_proposal";
import * as _135 from "./lava/spec/spec";
import * as _136 from "./lava/spec/tx";
import * as _137 from "./lava/subscription/adjustment";
import * as _138 from "./lava/subscription/cu_tracker";
import * as _139 from "./lava/subscription/genesis";
import * as _140 from "./lava/subscription/params";
import * as _141 from "./lava/subscription/query";
import * as _142 from "./lava/subscription/subscription";
import * as _143 from "./lava/subscription/tx";
import * as _144 from "./lava/timerstore/query";
import * as _145 from "./lava/timerstore/timer";
import * as _238 from "./lava/dualstaking/tx.amino";
import * as _239 from "./lava/pairing/tx.amino";
import * as _240 from "./lava/projects/tx.amino";
import * as _241 from "./lava/subscription/tx.amino";
import * as _242 from "./lava/dualstaking/tx.registry";
import * as _243 from "./lava/pairing/tx.registry";
import * as _244 from "./lava/projects/tx.registry";
import * as _245 from "./lava/subscription/tx.registry";
import * as _246 from "./lava/downtime/v1/query.rpc.Query";
import * as _247 from "./lava/dualstaking/query.rpc.Query";
import * as _248 from "./lava/epochstorage/query.rpc.Query";
import * as _249 from "./lava/fixationstore/query.rpc.Query";
import * as _250 from "./lava/pairing/query.rpc.Query";
import * as _251 from "./lava/plans/query.rpc.Query";
import * as _252 from "./lava/projects/query.rpc.Query";
import * as _253 from "./lava/spec/query.rpc.Query";
import * as _254 from "./lava/subscription/query.rpc.Query";
import * as _255 from "./lava/timerstore/query.rpc.Query";
import * as _256 from "./lava/dualstaking/tx.rpc.msg";
import * as _257 from "./lava/pairing/tx.rpc.msg";
import * as _258 from "./lava/projects/tx.rpc.msg";
import * as _259 from "./lava/subscription/tx.rpc.msg";
import * as _291 from "./rpc.query";
import * as _292 from "./rpc.tx";
export namespace lavanet {
  export namespace lava {
    export namespace downtime {
      export const v1 = {
        ..._86,
        ..._87,
        ..._88,
        ..._246
      };
    }
    export const dualstaking = {
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._238,
      ..._242,
      ..._247,
      ..._256
    };
    export const epochstorage = {
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
      ..._248
    };
    export const fixationstore = {
      ..._105,
      ..._106,
      ..._249
    };
    export const pairing = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._239,
      ..._243,
      ..._250,
      ..._257
    };
    export const plans = {
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._251
    };
    export const projects = {
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._240,
      ..._244,
      ..._252,
      ..._258
    };
    export const spec = {
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._253
    };
    export const subscription = {
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._241,
      ..._245,
      ..._254,
      ..._259
    };
    export const timerstore = {
      ..._144,
      ..._145,
      ..._255
    };
  }
  export const ClientFactory = {
    ..._291,
    ..._292
  };
}