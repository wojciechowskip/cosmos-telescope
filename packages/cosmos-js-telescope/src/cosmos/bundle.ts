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
import * as _93 from "./auth/v1beta1/tx.amino";
import * as _94 from "./authz/v1beta1/tx.amino";
import * as _95 from "./bank/v1beta1/tx.amino";
import * as _96 from "./distribution/v1beta1/tx.amino";
import * as _97 from "./feegrant/v1beta1/tx.amino";
import * as _98 from "./gov/v1/tx.amino";
import * as _99 from "./gov/v1beta1/tx.amino";
import * as _100 from "./group/v1/tx.amino";
import * as _101 from "./staking/v1beta1/tx.amino";
import * as _102 from "./upgrade/v1beta1/tx.amino";
import * as _103 from "./vesting/v1beta1/tx.amino";
import * as _104 from "./auth/v1beta1/tx.registry";
import * as _105 from "./authz/v1beta1/tx.registry";
import * as _106 from "./bank/v1beta1/tx.registry";
import * as _107 from "./distribution/v1beta1/tx.registry";
import * as _108 from "./feegrant/v1beta1/tx.registry";
import * as _109 from "./gov/v1/tx.registry";
import * as _110 from "./gov/v1beta1/tx.registry";
import * as _111 from "./group/v1/tx.registry";
import * as _112 from "./staking/v1beta1/tx.registry";
import * as _113 from "./upgrade/v1beta1/tx.registry";
import * as _114 from "./vesting/v1beta1/tx.registry";
import * as _115 from "./auth/v1beta1/query.rpc.Query";
import * as _116 from "./authz/v1beta1/query.rpc.Query";
import * as _117 from "./bank/v1beta1/query.rpc.Query";
import * as _118 from "./distribution/v1beta1/query.rpc.Query";
import * as _119 from "./feegrant/v1beta1/query.rpc.Query";
import * as _120 from "./gov/v1/query.rpc.Query";
import * as _121 from "./gov/v1beta1/query.rpc.Query";
import * as _122 from "./group/v1/query.rpc.Query";
import * as _123 from "./mint/v1beta1/query.rpc.Query";
import * as _124 from "./params/v1beta1/query.rpc.Query";
import * as _125 from "./staking/v1beta1/query.rpc.Query";
import * as _126 from "./tx/v1beta1/service.rpc.Service";
import * as _127 from "./upgrade/v1beta1/query.rpc.Query";
import * as _128 from "./auth/v1beta1/tx.rpc.msg";
import * as _129 from "./authz/v1beta1/tx.rpc.msg";
import * as _130 from "./bank/v1beta1/tx.rpc.msg";
import * as _131 from "./distribution/v1beta1/tx.rpc.msg";
import * as _132 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _133 from "./gov/v1/tx.rpc.msg";
import * as _134 from "./gov/v1beta1/tx.rpc.msg";
import * as _135 from "./group/v1/tx.rpc.msg";
import * as _136 from "./staking/v1beta1/tx.rpc.msg";
import * as _137 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _138 from "./vesting/v1beta1/tx.rpc.msg";
import * as _145 from "./rpc.query";
import * as _146 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._93,
      ..._104,
      ..._115,
      ..._128
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._94,
      ..._105,
      ..._116,
      ..._129
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._95,
      ..._106,
      ..._117,
      ..._130
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
      ..._96,
      ..._107,
      ..._118,
      ..._131
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._97,
      ..._108,
      ..._119,
      ..._132
    };
  }
  export namespace gov {
    export const v1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._98,
      ..._109,
      ..._120,
      ..._133
    };
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._99,
      ..._110,
      ..._121,
      ..._134
    };
  }
  export namespace group {
    export const v1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._100,
      ..._111,
      ..._122,
      ..._135
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._123
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._124
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
      ..._101,
      ..._112,
      ..._125,
      ..._136
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
      ..._126
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._102,
      ..._113,
      ..._127,
      ..._137
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._103,
      ..._114,
      ..._138
    };
  }
  export const ClientFactory = {
    ..._145,
    ..._146
  };
}