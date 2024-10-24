//@ts-nocheck
import * as _78 from "./abci/types";
import * as _79 from "./crypto/keys";
import * as _80 from "./crypto/proof";
import * as _81 from "./libs/bits/types";
import * as _82 from "./p2p/types";
import * as _83 from "./types/block";
import * as _84 from "./types/evidence";
import * as _85 from "./types/params";
import * as _86 from "./types/types";
import * as _87 from "./types/validator";
import * as _88 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._78
  };
  export const crypto = {
    ..._79,
    ..._80
  };
  export namespace libs {
    export const bits = {
      ..._81
    };
  }
  export const p2p = {
    ..._82
  };
  export const types = {
    ..._83,
    ..._84,
    ..._85,
    ..._86,
    ..._87
  };
  export const version = {
    ..._88
  };
}