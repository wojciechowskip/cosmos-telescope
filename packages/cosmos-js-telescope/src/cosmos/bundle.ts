//@ts-nocheck
import * as _15 from "./auth/v1beta1/auth";
import * as _16 from "./auth/v1beta1/genesis";
import * as _17 from "./auth/v1beta1/query";
import * as _18 from "./auth/v1beta1/tx";
import * as _19 from "./authz/v1beta1/authz";
import * as _20 from "./authz/v1beta1/event";
import * as _21 from "./authz/v1beta1/genesis";
import * as _22 from "./authz/v1beta1/query";
import * as _23 from "./authz/v1beta1/tx";
import * as _24 from "./bank/v1beta1/authz";
import * as _25 from "./bank/v1beta1/bank";
import * as _26 from "./bank/v1beta1/genesis";
import * as _27 from "./bank/v1beta1/query";
import * as _28 from "./bank/v1beta1/tx";
import * as _29 from "./base/abci/v1beta1/abci";
import * as _30 from "./base/query/v1beta1/pagination";
import * as _31 from "./base/reflection/v2alpha1/reflection";
import * as _32 from "./base/v1beta1/coin";
import * as _33 from "./crypto/ed25519/keys";
import * as _34 from "./crypto/hd/v1/hd";
import * as _35 from "./crypto/keyring/v1/record";
import * as _36 from "./crypto/multisig/keys";
import * as _37 from "./crypto/secp256k1/keys";
import * as _38 from "./crypto/secp256r1/keys";
import * as _39 from "./distribution/v1beta1/distribution";
import * as _40 from "./distribution/v1beta1/genesis";
import * as _41 from "./distribution/v1beta1/query";
import * as _42 from "./distribution/v1beta1/tx";
import * as _43 from "./feegrant/v1beta1/feegrant";
import * as _44 from "./feegrant/v1beta1/genesis";
import * as _45 from "./feegrant/v1beta1/query";
import * as _46 from "./feegrant/v1beta1/tx";
import * as _47 from "./gov/v1/genesis";
import * as _48 from "./gov/v1/gov";
import * as _49 from "./gov/v1/query";
import * as _50 from "./gov/v1/tx";
import * as _51 from "./gov/v1beta1/genesis";
import * as _52 from "./gov/v1beta1/gov";
import * as _53 from "./gov/v1beta1/query";
import * as _54 from "./gov/v1beta1/tx";
import * as _55 from "./group/v1/events";
import * as _56 from "./group/v1/genesis";
import * as _57 from "./group/v1/query";
import * as _58 from "./group/v1/tx";
import * as _59 from "./group/v1/types";
import * as _60 from "./mint/v1beta1/genesis";
import * as _61 from "./mint/v1beta1/mint";
import * as _62 from "./mint/v1beta1/query";
import * as _63 from "./params/v1beta1/params";
import * as _64 from "./params/v1beta1/query";
import * as _65 from "./query/v1/query";
import * as _66 from "./staking/v1beta1/authz";
import * as _67 from "./staking/v1beta1/genesis";
import * as _68 from "./staking/v1beta1/query";
import * as _69 from "./staking/v1beta1/staking";
import * as _70 from "./staking/v1beta1/tx";
import * as _71 from "./tx/signing/v1beta1/signing";
import * as _72 from "./tx/v1beta1/service";
import * as _73 from "./tx/v1beta1/tx";
import * as _74 from "./upgrade/v1beta1/query";
import * as _75 from "./upgrade/v1beta1/tx";
import * as _76 from "./upgrade/v1beta1/upgrade";
import * as _77 from "./vesting/v1beta1/tx";
import * as _78 from "./vesting/v1beta1/vesting";
import * as _192 from "./auth/v1beta1/tx.amino";
import * as _193 from "./authz/v1beta1/tx.amino";
import * as _194 from "./bank/v1beta1/tx.amino";
import * as _195 from "./distribution/v1beta1/tx.amino";
import * as _196 from "./feegrant/v1beta1/tx.amino";
import * as _197 from "./gov/v1/tx.amino";
import * as _198 from "./gov/v1beta1/tx.amino";
import * as _199 from "./group/v1/tx.amino";
import * as _200 from "./staking/v1beta1/tx.amino";
import * as _201 from "./upgrade/v1beta1/tx.amino";
import * as _202 from "./vesting/v1beta1/tx.amino";
import * as _203 from "./auth/v1beta1/tx.registry";
import * as _204 from "./authz/v1beta1/tx.registry";
import * as _205 from "./bank/v1beta1/tx.registry";
import * as _206 from "./distribution/v1beta1/tx.registry";
import * as _207 from "./feegrant/v1beta1/tx.registry";
import * as _208 from "./gov/v1/tx.registry";
import * as _209 from "./gov/v1beta1/tx.registry";
import * as _210 from "./group/v1/tx.registry";
import * as _211 from "./staking/v1beta1/tx.registry";
import * as _212 from "./upgrade/v1beta1/tx.registry";
import * as _213 from "./vesting/v1beta1/tx.registry";
import * as _214 from "./auth/v1beta1/query.rpc.Query";
import * as _215 from "./authz/v1beta1/query.rpc.Query";
import * as _216 from "./bank/v1beta1/query.rpc.Query";
import * as _217 from "./distribution/v1beta1/query.rpc.Query";
import * as _218 from "./feegrant/v1beta1/query.rpc.Query";
import * as _219 from "./gov/v1/query.rpc.Query";
import * as _220 from "./gov/v1beta1/query.rpc.Query";
import * as _221 from "./group/v1/query.rpc.Query";
import * as _222 from "./mint/v1beta1/query.rpc.Query";
import * as _223 from "./params/v1beta1/query.rpc.Query";
import * as _224 from "./staking/v1beta1/query.rpc.Query";
import * as _225 from "./tx/v1beta1/service.rpc.Service";
import * as _226 from "./upgrade/v1beta1/query.rpc.Query";
import * as _227 from "./auth/v1beta1/tx.rpc.msg";
import * as _228 from "./authz/v1beta1/tx.rpc.msg";
import * as _229 from "./bank/v1beta1/tx.rpc.msg";
import * as _230 from "./distribution/v1beta1/tx.rpc.msg";
import * as _231 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _232 from "./gov/v1/tx.rpc.msg";
import * as _233 from "./gov/v1beta1/tx.rpc.msg";
import * as _234 from "./group/v1/tx.rpc.msg";
import * as _235 from "./staking/v1beta1/tx.rpc.msg";
import * as _236 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _237 from "./vesting/v1beta1/tx.rpc.msg";
import * as _289 from "./rpc.query";
import * as _290 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._192,
      ..._203,
      ..._214,
      ..._227
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._193,
      ..._204,
      ..._215,
      ..._228
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._194,
      ..._205,
      ..._216,
      ..._229
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._29
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._30
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._31
      };
    }
    export const v1beta1 = {
      ..._32
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._33
    };
    export namespace hd {
      export const v1 = {
        ..._34
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._35
      };
    }
    export const multisig = {
      ..._36
    };
    export const secp256k1 = {
      ..._37
    };
    export const secp256r1 = {
      ..._38
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._195,
      ..._206,
      ..._217,
      ..._230
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._196,
      ..._207,
      ..._218,
      ..._231
    };
  }
  export namespace gov {
    export const v1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._197,
      ..._208,
      ..._219,
      ..._232
    };
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._198,
      ..._209,
      ..._220,
      ..._233
    };
  }
  export namespace group {
    export const v1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._199,
      ..._210,
      ..._221,
      ..._234
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._222
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._223
    };
  }
  export namespace query {
    export const v1 = {
      ..._65
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._200,
      ..._211,
      ..._224,
      ..._235
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._71
      };
    }
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._225
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._201,
      ..._212,
      ..._226,
      ..._236
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._77,
      ..._78,
      ..._202,
      ..._213,
      ..._237
    };
  }
  export const ClientFactory = {
    ..._289,
    ..._290
  };
}