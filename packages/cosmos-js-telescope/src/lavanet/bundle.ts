//@ts-nocheck
import * as _70 from "./lava/dualstaking/delegate";
import * as _71 from "./lava/dualstaking/delegator_reward";
import * as _72 from "./lava/dualstaking/genesis";
import * as _73 from "./lava/dualstaking/params";
import * as _74 from "./lava/dualstaking/query";
import * as _75 from "./lava/dualstaking/tx";
import * as _130 from "./lava/dualstaking/tx.amino";
import * as _131 from "./lava/dualstaking/tx.registry";
import * as _132 from "./lava/dualstaking/query.rpc.Query";
import * as _133 from "./lava/dualstaking/tx.rpc.msg";
import * as _136 from "./rpc.query";
import * as _137 from "./rpc.tx";
export namespace lavanet {
  export namespace lava {
    export const dualstaking = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._130,
      ..._131,
      ..._132,
      ..._133
    };
  }
  export const ClientFactory = {
    ..._136,
    ..._137
  };
}