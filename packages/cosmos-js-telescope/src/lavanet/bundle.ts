//@ts-nocheck
import * as _72 from "./lava/dualstaking/delegate";
import * as _73 from "./lava/dualstaking/delegator_reward";
import * as _74 from "./lava/dualstaking/genesis";
import * as _75 from "./lava/dualstaking/params";
import * as _76 from "./lava/dualstaking/query";
import * as _77 from "./lava/dualstaking/tx";
import * as _135 from "./lava/dualstaking/tx.amino";
import * as _136 from "./lava/dualstaking/tx.registry";
import * as _137 from "./lava/dualstaking/query.rpc.Query";
import * as _138 from "./lava/dualstaking/tx.rpc.msg";
import * as _141 from "./rpc.query";
import * as _142 from "./rpc.tx";
export namespace lavanet {
  export namespace lava {
    export const dualstaking = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._135,
      ..._136,
      ..._137,
      ..._138
    };
  }
  export const ClientFactory = {
    ..._141,
    ..._142
  };
}