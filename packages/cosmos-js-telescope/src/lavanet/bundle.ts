//@ts-nocheck
import * as _72 from "./lava/dualstaking/delegate";
import * as _73 from "./lava/dualstaking/delegator_reward";
import * as _74 from "./lava/dualstaking/genesis";
import * as _75 from "./lava/dualstaking/params";
import * as _76 from "./lava/dualstaking/query";
import * as _77 from "./lava/dualstaking/tx";
import * as _78 from "./lava/fixationstore/fixation";
import * as _79 from "./lava/fixationstore/query";
import * as _80 from "./lava/timerstore/query";
import * as _81 from "./lava/timerstore/timer";
import * as _139 from "./lava/dualstaking/tx.amino";
import * as _140 from "./lava/dualstaking/tx.registry";
import * as _141 from "./lava/dualstaking/query.rpc.Query";
import * as _142 from "./lava/fixationstore/query.rpc.Query";
import * as _143 from "./lava/timerstore/query.rpc.Query";
import * as _144 from "./lava/dualstaking/tx.rpc.msg";
import * as _147 from "./rpc.query";
import * as _148 from "./rpc.tx";
export namespace lavanet {
  export namespace lava {
    export const dualstaking = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._139,
      ..._140,
      ..._141,
      ..._144
    };
    export const fixationstore = {
      ..._78,
      ..._79,
      ..._142
    };
    export const timerstore = {
      ..._80,
      ..._81,
      ..._143
    };
  }
  export const ClientFactory = {
    ..._147,
    ..._148
  };
}