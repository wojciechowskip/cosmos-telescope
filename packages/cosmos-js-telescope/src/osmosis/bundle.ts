//@ts-nocheck
import * as _146 from "./accum/v1beta1/accum";
import * as _147 from "./concentratedliquidity/params";
import * as _148 from "./gamm/poolmodels/balancer/v1beta1/tx";
import * as _149 from "./gamm/poolmodels/stableswap/v1beta1/stableswap_pool";
import * as _150 from "./gamm/poolmodels/stableswap/v1beta1/tx";
import * as _151 from "./gamm/v1beta1/balancerPool";
import * as _152 from "./gamm/v1beta1/genesis";
import * as _153 from "./gamm/v1beta1/gov";
import * as _154 from "./gamm/v1beta1/params";
import * as _155 from "./gamm/v1beta1/query";
import * as _156 from "./gamm/v1beta1/shared";
import * as _157 from "./gamm/v1beta1/tx";
import * as _158 from "./gamm/v2/query";
import * as _159 from "./lockup/genesis";
import * as _160 from "./lockup/lock";
import * as _161 from "./lockup/params";
import * as _162 from "./lockup/query";
import * as _163 from "./lockup/tx";
import * as _164 from "./poolmanager/v1beta1/genesis";
import * as _165 from "./poolmanager/v1beta1/gov";
import * as _166 from "./poolmanager/v1beta1/module_route";
import * as _167 from "./poolmanager/v1beta1/query";
import * as _168 from "./poolmanager/v1beta1/swap_route";
import * as _169 from "./poolmanager/v1beta1/taker_fee_share";
import * as _170 from "./poolmanager/v1beta1/tracked_volume";
import * as _171 from "./poolmanager/v1beta1/tx";
import * as _172 from "./poolmanager/v2/query";
import * as _260 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.amino";
import * as _261 from "./concentratedliquidity/v1beta1/tx.amino";
import * as _262 from "./gamm/poolmodels/balancer/v1beta1/tx.amino";
import * as _263 from "./gamm/poolmodels/stableswap/v1beta1/tx.amino";
import * as _264 from "./gamm/v1beta1/tx.amino";
import * as _265 from "./lockup/tx.amino";
import * as _266 from "./poolmanager/v1beta1/tx.amino";
import * as _267 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.registry";
import * as _268 from "./concentratedliquidity/v1beta1/tx.registry";
import * as _269 from "./gamm/poolmodels/balancer/v1beta1/tx.registry";
import * as _270 from "./gamm/poolmodels/stableswap/v1beta1/tx.registry";
import * as _271 from "./gamm/v1beta1/tx.registry";
import * as _272 from "./lockup/tx.registry";
import * as _273 from "./poolmanager/v1beta1/tx.registry";
import * as _274 from "./concentratedliquidity/v1beta1/query.rpc.Query";
import * as _275 from "./gamm/v1beta1/query.rpc.Query";
import * as _276 from "./gamm/v2/query.rpc.Query";
import * as _277 from "./lockup/query.rpc.Query";
import * as _278 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _279 from "./poolmanager/v2/query.rpc.Query";
import * as _280 from "./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.rpc.msg";
import * as _281 from "./concentratedliquidity/v1beta1/tx.rpc.msg";
import * as _282 from "./gamm/poolmodels/balancer/v1beta1/tx.rpc.msg";
import * as _283 from "./gamm/poolmodels/stableswap/v1beta1/tx.rpc.msg";
import * as _284 from "./gamm/v1beta1/tx.rpc.msg";
import * as _285 from "./lockup/tx.rpc.msg";
import * as _286 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _293 from "./rpc.query";
import * as _294 from "./rpc.tx";
export namespace osmosis {
  export namespace accum {
    export const v1beta1 = {
      ..._146
    };
  }
  export const concentratedliquidity = {
    ..._147,
    poolmodel: {
      concentrated: {
        v1beta1: {
          ..._260,
          ..._267,
          ..._280
        }
      }
    },
    v1beta1: {
      ..._261,
      ..._268,
      ..._274,
      ..._281
    }
  };
  export namespace gamm {
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._148,
          ..._262,
          ..._269,
          ..._282
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._149,
          ..._150,
          ..._263,
          ..._270,
          ..._283
        };
      }
    }
    export const v1beta1 = {
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._264,
      ..._271,
      ..._275,
      ..._284
    };
    export const v2 = {
      ..._158,
      ..._276
    };
  }
  export const lockup = {
    ..._159,
    ..._160,
    ..._161,
    ..._162,
    ..._163,
    ..._265,
    ..._272,
    ..._277,
    ..._285
  };
  export namespace poolmanager {
    export const v1beta1 = {
      ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._266,
      ..._273,
      ..._278,
      ..._286
    };
    export const v2 = {
      ..._172,
      ..._279
    };
  }
  export const ClientFactory = {
    ..._293,
    ..._294
  };
}