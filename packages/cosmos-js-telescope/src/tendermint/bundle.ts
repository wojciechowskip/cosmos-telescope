//@ts-nocheck
import * as _76 from "./abci/types";
import * as _77 from "./crypto/keys";
import * as _78 from "./crypto/proof";
import * as _79 from "./libs/bits/types";
import * as _80 from "./p2p/types";
import * as _81 from "./types/block";
import * as _82 from "./types/evidence";
import * as _83 from "./types/params";
import * as _84 from "./types/types";
import * as _85 from "./types/validator";
import * as _86 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._76
  };
  export const crypto = {
    ..._77,
    ..._78
  };
  export namespace libs {
    export const bits = {
      ..._79
    };
  }
  export const p2p = {
    ..._80
  };
  export const types = {
    ..._81,
    ..._82,
    ..._83,
    ..._84,
    ..._85
  };
  export const version = {
    ..._86
  };
}