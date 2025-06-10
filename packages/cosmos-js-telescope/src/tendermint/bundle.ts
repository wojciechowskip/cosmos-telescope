//@ts-nocheck
import * as _160 from "./abci/types";
import * as _161 from "./crypto/keys";
import * as _162 from "./crypto/proof";
import * as _163 from "./libs/bits/types";
import * as _164 from "./p2p/types";
import * as _165 from "./types/block";
import * as _166 from "./types/evidence";
import * as _167 from "./types/params";
import * as _168 from "./types/types";
import * as _169 from "./types/validator";
import * as _170 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._160
  };
  export const crypto = {
    ..._161,
    ..._162
  };
  export namespace libs {
    export const bits = {
      ..._163
    };
  }
  export const p2p = {
    ..._164
  };
  export const types = {
    ..._165,
    ..._166,
    ..._167,
    ..._168,
    ..._169
  };
  export const version = {
    ..._170
  };
}