//@ts-nocheck
import * as _133 from "./accum/v1beta1/accum";
import * as _134 from "./concentratedliquidity/params";
import * as _135 from "./gamm/poolmodels/balancer/v1beta1/tx";
import * as _136 from "./gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import * as _137 from "./gamm/poolmodels/stableswap/v1beta1/tx";
import * as _138 from "./gamm/v1beta1/balancerPool";
import * as _139 from "./gamm/v1beta1/genesis";
import * as _140 from "./gamm/v1beta1/gov";
import * as _141 from "./gamm/v1beta1/params";
import * as _142 from "./gamm/v1beta1/query";
import * as _143 from "./gamm/v1beta1/shared";
import * as _144 from "./gamm/v1beta1/tx";
import * as _145 from "./gamm/v2/query";
import * as _146 from "./lockup/genesis";
import * as _147 from "./lockup/lock";
import * as _148 from "./lockup/params";
import * as _149 from "./lockup/query";
import * as _150 from "./lockup/tx";
import * as _151 from "./poolmanager/v1beta1/genesis";
import * as _152 from "./poolmanager/v1beta1/gov";
import * as _153 from "./poolmanager/v1beta1/module_route";
import * as _154 from "./poolmanager/v1beta1/query";
import * as _155 from "./poolmanager/v1beta1/swap_route";
import * as _156 from "./poolmanager/v1beta1/taker_fee_share";
import * as _157 from "./poolmanager/v1beta1/tracked_volume";
import * as _158 from "./poolmanager/v1beta1/tx";
import * as _159 from "./poolmanager/v2/query";
import * as _239 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.amino";
import * as _240 from "./concentratedliquidity/v1beta1/tx.amino";
import * as _241 from "./gamm/poolmodels/balancer/v1beta1/tx.amino";
import * as _242 from "./gamm/poolmodels/stableswap/v1beta1/tx.amino";
import * as _243 from "./gamm/v1beta1/tx.amino";
import * as _244 from "./lockup/tx.amino";
import * as _245 from "./poolmanager/v1beta1/tx.amino";
import * as _246 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.registry";
import * as _247 from "./concentratedliquidity/v1beta1/tx.registry";
import * as _248 from "./gamm/poolmodels/balancer/v1beta1/tx.registry";
import * as _249 from "./gamm/poolmodels/stableswap/v1beta1/tx.registry";
import * as _250 from "./gamm/v1beta1/tx.registry";
import * as _251 from "./lockup/tx.registry";
import * as _252 from "./poolmanager/v1beta1/tx.registry";
import * as _253 from "./concentratedliquidity/v1beta1/query.rpc.Query";
import * as _254 from "./gamm/v1beta1/query.rpc.Query";
import * as _255 from "./gamm/v2/query.rpc.Query";
import * as _256 from "./lockup/query.rpc.Query";
import * as _257 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _258 from "./poolmanager/v2/query.rpc.Query";
import * as _259 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.rpc.msg";
import * as _260 from "./concentratedliquidity/v1beta1/tx.rpc.msg";
import * as _261 from "./gamm/poolmodels/balancer/v1beta1/tx.rpc.msg";
import * as _262 from "./gamm/poolmodels/stableswap/v1beta1/tx.rpc.msg";
import * as _263 from "./gamm/v1beta1/tx.rpc.msg";
import * as _264 from "./lockup/tx.rpc.msg";
import * as _265 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _270 from "./rpc.query";
import * as _271 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = {
      ..._133
    };
  }
  export const concentratedliquidity = {
    ..._134,
    poolmodel: {
      concentrated: {
        v1beta1: {
          ..._239,
          ..._246,
          ..._259
        }
      }
    },
    v1beta1: {
      ..._240,
      ..._247,
      ..._253,
      ..._260
    }
  };
  export namespace gamm {
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._135,
          ..._241,
          ..._248,
          ..._261
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._136,
          ..._137,
          ..._242,
          ..._249,
          ..._262
        };
      }
    }
    export const v1beta1 = {
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._243,
      ..._250,
      ..._254,
      ..._263
    };
    export const v2 = {
      ..._145,
      ..._255
    };
  }
  export const lockup = {
    ..._146,
    ..._147,
    ..._148,
    ..._149,
    ..._150,
    ..._244,
    ..._251,
    ..._256,
    ..._264
  };
  export namespace poolmanager {
    export const v1beta1 = {
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._245,
      ..._252,
      ..._257,
      ..._265
    };
    export const v2 = {
      ..._159,
      ..._258
    };
  }
  export const ClientFactory = {
    ..._270,
    ..._271
  };
}