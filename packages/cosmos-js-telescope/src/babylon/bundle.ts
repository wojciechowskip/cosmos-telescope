//@ts-nocheck
import * as _1 from "./epoching/v1/epoching";
import * as _2 from "./epoching/v1/events";
import * as _3 from "./epoching/v1/genesis";
import * as _4 from "./epoching/v1/params";
import * as _5 from "./epoching/v1/query";
import * as _6 from "./epoching/v1/tx";
import * as _7 from "./incentive/events";
import * as _8 from "./incentive/genesis";
import * as _9 from "./incentive/incentive";
import * as _10 from "./incentive/params";
import * as _11 from "./incentive/query";
import * as _12 from "./incentive/rewards";
import * as _13 from "./incentive/tx";
import * as _184 from "./epoching/v1/tx.amino";
import * as _185 from "./incentive/tx.amino";
import * as _186 from "./epoching/v1/tx.registry";
import * as _187 from "./incentive/tx.registry";
import * as _188 from "./epoching/v1/query.rpc.Query";
import * as _189 from "./incentive/query.rpc.Query";
import * as _190 from "./epoching/v1/tx.rpc.msg";
import * as _191 from "./incentive/tx.rpc.msg";
import * as _287 from "./rpc.query";
import * as _288 from "./rpc.tx";
export namespace babylon {
  export namespace epoching {
    export const v1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._184,
      ..._186,
      ..._188,
      ..._190
    };
  }
  export const incentive = {
    ..._7,
    ..._8,
    ..._9,
    ..._10,
    ..._11,
    ..._12,
    ..._13,
    ..._185,
    ..._187,
    ..._189,
    ..._191
  };
  export const ClientFactory = {
    ..._287,
    ..._288
  };
}