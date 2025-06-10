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
import * as _217 from "./lava/dualstaking/tx.amino";
import * as _218 from "./lava/pairing/tx.amino";
import * as _219 from "./lava/projects/tx.amino";
import * as _220 from "./lava/subscription/tx.amino";
import * as _221 from "./lava/dualstaking/tx.registry";
import * as _222 from "./lava/pairing/tx.registry";
import * as _223 from "./lava/projects/tx.registry";
import * as _224 from "./lava/subscription/tx.registry";
import * as _225 from "./lava/downtime/v1/query.rpc.Query";
import * as _226 from "./lava/dualstaking/query.rpc.Query";
import * as _227 from "./lava/epochstorage/query.rpc.Query";
import * as _228 from "./lava/fixationstore/query.rpc.Query";
import * as _229 from "./lava/pairing/query.rpc.Query";
import * as _230 from "./lava/plans/query.rpc.Query";
import * as _231 from "./lava/projects/query.rpc.Query";
import * as _232 from "./lava/spec/query.rpc.Query";
import * as _233 from "./lava/subscription/query.rpc.Query";
import * as _234 from "./lava/timerstore/query.rpc.Query";
import * as _235 from "./lava/dualstaking/tx.rpc.msg";
import * as _236 from "./lava/pairing/tx.rpc.msg";
import * as _237 from "./lava/projects/tx.rpc.msg";
import * as _238 from "./lava/subscription/tx.rpc.msg";
import * as _268 from "./rpc.query";
import * as _269 from "./rpc.tx";
export namespace lavanet {
  export namespace lava {
    export namespace downtime {
      export const v1 = {
        ..._73,
        ..._74,
        ..._75,
        ..._225
      };
    }
    export const dualstaking = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._217,
      ..._221,
      ..._226,
      ..._235
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
      ..._227
    };
    export const fixationstore = {
      ..._92,
      ..._93,
      ..._228
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
      ..._218,
      ..._222,
      ..._229,
      ..._236
    };
    export const plans = {
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._230
    };
    export const projects = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._219,
      ..._223,
      ..._231,
      ..._237
    };
    export const spec = {
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._232
    };
    export const subscription = {
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._220,
      ..._224,
      ..._233,
      ..._238
    };
    export const timerstore = {
      ..._131,
      ..._132,
      ..._234
    };
  }
  export const ClientFactory = {
    ..._268,
    ..._269
  };
}