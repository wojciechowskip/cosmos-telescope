//@ts-nocheck
import * as _71 from "./abci/types";
import * as _72 from "./crypto/keys";
import * as _73 from "./crypto/proof";
import * as _74 from "./libs/bits/types";
import * as _75 from "./p2p/types";
import * as _76 from "./types/block";
import * as _77 from "./types/evidence";
import * as _78 from "./types/params";
import * as _79 from "./types/types";
import * as _80 from "./types/validator";
import * as _81 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._71
  };
  export const crypto = {
    ..._72,
    ..._73
  };
  export namespace libs {
    export const bits = {
      ..._74
    };
  }
  export const p2p = {
    ..._75
  };
  export const types = {
    ..._76,
    ..._77,
    ..._78,
    ..._79,
    ..._80
  };
  export const version = {
    ..._81
  };
}