import { MsgGrant } from "../src/cosmos/authz/v1beta1/tx";
import { Grant } from "../src/cosmos/authz/v1beta1/authz";
import { AminoTypes } from "@cosmjs/stargate";
import {
  AuthorizationType,
  StakeAuthorization,
  StakeAuthorization_Validators,
} from "../src/cosmos/staking/v1beta1/authz";
import { cosmosAminoConverters } from "../src";

const GRANT = '/cosmos.authz.v1beta1.MsgGrant';
const STAKE_AUTHORIZATION = '/cosmos.staking.v1beta1.StakeAuthorization';

it('cosmos', () => {
  const expiredDate = (new Date()).getTime() + 1000 * 60 * 60 * 24 * 7;

  const message = {
    typeUrl: GRANT,
    value: MsgGrant.fromPartial({
      granter: "cosmos1v0uhfgla2fcfr4zkf02sct6m33fxjt3rru4uks",
      grantee: "cosmos1zckqq52ax0g328quqhwhht4l4n0z22rxrymxka",
      grant: Grant.fromPartial({
        expiration: new Date(expiredDate),
        authorization: {
          typeUrl: STAKE_AUTHORIZATION,
          value: StakeAuthorization.encode(
            StakeAuthorization.fromPartial({
              maxTokens: {
                amount: "28247",
                denom: "uatom"
              },
              authorizationType: AuthorizationType.AUTHORIZATION_TYPE_DELEGATE,
              allowList: StakeAuthorization_Validators.fromPartial({
                address: ["cosmosvaloper1q6d3d089hg59x6gcx92uumx70s5y5wadklue8s"],
              }),
            })
          ).finish(),
        },
      }),
    }),
  };

  const aminoTypes = new AminoTypes(cosmosAminoConverters);

  const aminoMessage = aminoTypes.toAmino(message);
  console.log('aminoMessage', JSON.stringify(aminoMessage, null, 2));



  expect(message).toMatchSnapshot();
});
