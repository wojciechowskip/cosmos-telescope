//@ts-nocheck
import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./auth/v1beta1/tx";
import * as _6 from "./authz/v1beta1/authz";
import * as _7 from "./authz/v1beta1/event";
import * as _8 from "./authz/v1beta1/genesis";
import * as _9 from "./authz/v1beta1/query";
import * as _10 from "./authz/v1beta1/tx";
import * as _11 from "./bank/v1beta1/authz";
import * as _12 from "./bank/v1beta1/bank";
import * as _13 from "./bank/v1beta1/genesis";
import * as _14 from "./bank/v1beta1/query";
import * as _15 from "./bank/v1beta1/tx";
import * as _16 from "./base/abci/v1beta1/abci";
import * as _17 from "./base/query/v1beta1/pagination";
import * as _18 from "./base/reflection/v2alpha1/reflection";
import * as _19 from "./base/v1beta1/coin";
import * as _20 from "./crypto/ed25519/keys";
import * as _21 from "./crypto/hd/v1/hd";
import * as _22 from "./crypto/keyring/v1/record";
import * as _23 from "./crypto/multisig/keys";
import * as _24 from "./crypto/secp256k1/keys";
import * as _25 from "./crypto/secp256r1/keys";
import * as _26 from "./distribution/v1beta1/distribution";
import * as _27 from "./distribution/v1beta1/genesis";
import * as _28 from "./distribution/v1beta1/query";
import * as _29 from "./distribution/v1beta1/tx";
import * as _30 from "./feegrant/v1beta1/feegrant";
import * as _31 from "./feegrant/v1beta1/genesis";
import * as _32 from "./feegrant/v1beta1/query";
import * as _33 from "./feegrant/v1beta1/tx";
import * as _34 from "./gov/v1/genesis";
import * as _35 from "./gov/v1/gov";
import * as _36 from "./gov/v1/query";
import * as _37 from "./gov/v1/tx";
import * as _38 from "./gov/v1beta1/genesis";
import * as _39 from "./gov/v1beta1/gov";
import * as _40 from "./gov/v1beta1/query";
import * as _41 from "./gov/v1beta1/tx";
import * as _42 from "./group/v1/events";
import * as _43 from "./group/v1/genesis";
import * as _44 from "./group/v1/query";
import * as _45 from "./group/v1/tx";
import * as _46 from "./group/v1/types";
import * as _47 from "./mint/v1beta1/genesis";
import * as _48 from "./mint/v1beta1/mint";
import * as _49 from "./mint/v1beta1/query";
import * as _50 from "./params/v1beta1/params";
import * as _51 from "./params/v1beta1/query";
import * as _52 from "./query/v1/query";
import * as _53 from "./staking/v1beta1/authz";
import * as _54 from "./staking/v1beta1/genesis";
import * as _55 from "./staking/v1beta1/query";
import * as _56 from "./staking/v1beta1/staking";
import * as _57 from "./staking/v1beta1/tx";
import * as _58 from "./tx/signing/v1beta1/signing";
import * as _59 from "./tx/v1beta1/service";
import * as _60 from "./tx/v1beta1/tx";
import * as _61 from "./upgrade/v1beta1/query";
import * as _62 from "./upgrade/v1beta1/tx";
import * as _63 from "./upgrade/v1beta1/upgrade";
import * as _64 from "./vesting/v1beta1/tx";
import * as _65 from "./vesting/v1beta1/vesting";
import * as _171 from "./auth/v1beta1/tx.amino";
import * as _172 from "./authz/v1beta1/tx.amino";
import * as _173 from "./bank/v1beta1/tx.amino";
import * as _174 from "./distribution/v1beta1/tx.amino";
import * as _175 from "./feegrant/v1beta1/tx.amino";
import * as _176 from "./gov/v1/tx.amino";
import * as _177 from "./gov/v1beta1/tx.amino";
import * as _178 from "./group/v1/tx.amino";
import * as _179 from "./staking/v1beta1/tx.amino";
import * as _180 from "./upgrade/v1beta1/tx.amino";
import * as _181 from "./vesting/v1beta1/tx.amino";
import * as _182 from "./auth/v1beta1/tx.registry";
import * as _183 from "./authz/v1beta1/tx.registry";
import * as _184 from "./bank/v1beta1/tx.registry";
import * as _185 from "./distribution/v1beta1/tx.registry";
import * as _186 from "./feegrant/v1beta1/tx.registry";
import * as _187 from "./gov/v1/tx.registry";
import * as _188 from "./gov/v1beta1/tx.registry";
import * as _189 from "./group/v1/tx.registry";
import * as _190 from "./staking/v1beta1/tx.registry";
import * as _191 from "./upgrade/v1beta1/tx.registry";
import * as _192 from "./vesting/v1beta1/tx.registry";
import * as _193 from "./auth/v1beta1/query.rpc.Query";
import * as _194 from "./authz/v1beta1/query.rpc.Query";
import * as _195 from "./bank/v1beta1/query.rpc.Query";
import * as _196 from "./distribution/v1beta1/query.rpc.Query";
import * as _197 from "./feegrant/v1beta1/query.rpc.Query";
import * as _198 from "./gov/v1/query.rpc.Query";
import * as _199 from "./gov/v1beta1/query.rpc.Query";
import * as _200 from "./group/v1/query.rpc.Query";
import * as _201 from "./mint/v1beta1/query.rpc.Query";
import * as _202 from "./params/v1beta1/query.rpc.Query";
import * as _203 from "./staking/v1beta1/query.rpc.Query";
import * as _204 from "./tx/v1beta1/service.rpc.Service";
import * as _205 from "./upgrade/v1beta1/query.rpc.Query";
import * as _206 from "./auth/v1beta1/tx.rpc.msg";
import * as _207 from "./authz/v1beta1/tx.rpc.msg";
import * as _208 from "./bank/v1beta1/tx.rpc.msg";
import * as _209 from "./distribution/v1beta1/tx.rpc.msg";
import * as _210 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _211 from "./gov/v1/tx.rpc.msg";
import * as _212 from "./gov/v1beta1/tx.rpc.msg";
import * as _213 from "./group/v1/tx.rpc.msg";
import * as _214 from "./staking/v1beta1/tx.rpc.msg";
import * as _215 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _216 from "./vesting/v1beta1/tx.rpc.msg";
import * as _266 from "./rpc.query";
import * as _267 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._171,
      ..._182,
      ..._193,
      ..._206
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._172,
      ..._183,
      ..._194,
      ..._207
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._173,
      ..._184,
      ..._195,
      ..._208
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._17
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._18
      };
    }
    export const v1beta1 = {
      ..._19
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._20
    };
    export namespace hd {
      export const v1 = {
        ..._21
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._22
      };
    }
    export const multisig = {
      ..._23
    };
    export const secp256k1 = {
      ..._24
    };
    export const secp256r1 = {
      ..._25
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._174,
      ..._185,
      ..._196,
      ..._209
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._175,
      ..._186,
      ..._197,
      ..._210
    };
  }
  export namespace gov {
    export const v1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._176,
      ..._187,
      ..._198,
      ..._211
    };
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._177,
      ..._188,
      ..._199,
      ..._212
    };
  }
  export namespace group {
    export const v1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._178,
      ..._189,
      ..._200,
      ..._213
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._201
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._202
    };
  }
  export namespace query {
    export const v1 = {
      ..._52
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._179,
      ..._190,
      ..._203,
      ..._214
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._58
      };
    }
    export const v1beta1 = {
      ..._59,
      ..._60,
      ..._204
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._180,
      ..._191,
      ..._205,
      ..._215
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._181,
      ..._192,
      ..._216
    };
  }
  export const ClientFactory = {
    ..._266,
    ..._267
  };
}