# cosmos-js-telescope

<p align="center">
  <img src="https://user-images.githubusercontent.com/545047/188804067-28e67e5e-0214-4449-ab04-2e0c564a6885.svg" width="80"><br />
    cosmos-js-telescope
</p>

<p align="center" width="100%">
  <a href="https://github.com/wojciechowskip/cosmos-js-telescope/actions/workflows/run-tests.yml">
    
  </a>
   <a href="https://github.com/wojciechowskip/cosmos-js-telescope/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>

## Overview

Library for querying the cosmos based networks, sending, and broadcasting transactions.
Built using up-to-date proto files from Cosmoshub (gaia) and Lava Network with Telescope.
Includes a fix for the Authz module, enabling the use of MsgGrant and StakeAuthorization with AllowList.

## Install

```sh
npm install cosmos-js-telescope
```
## Table of contents



- [cosmos-js-telescope](#cosmos-js-telescope)
  - [Install](#install)
  - [Table of contents](#table-of-contents)
- [Usage](#usage)
    - [RPC Clients](#rpc-clients)
    - [Composing Messages](#composing-messages)
- [Wallets and Signers](#connecting-with-wallets-and-signing-messages)
    - [Stargate Client](#initializing-the-stargate-client)
    - [Creating Signers](#creating-signers)
    - [Broadcasting Messages](#broadcasting-messages)
- [Advanced Usage](#advanced-usage)
- [Codegen](#codegen)

## Usage
### RPC Clients

```js
import { cosmos } from 'cosmos-js-telescope';

const { createRPCQueryClient } = cosmos.ClientFactory; 
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

// now you can query the cosmos modules
const balance = await client.cosmos.bank.v1beta1
    .allBalances({ address: 'cosmos1addresshere' });

// you can also query the cosmos modules
const balances = await client.cosmos.exchange.v1beta1
    .exchangeBalances()
```

### Composing Messages

Import the `cosmos` object from `cosmos-js-telescope`. 

```js
import { cosmos } from 'cosmos-js-telescope';

const {
    createSpotLimitOrder,
    createSpotMarketOrder,
    deposit
} = cosmos.exchange.v1beta1.MessageComposer.withTypeUrl;
```

#### Cosmos Messages

```js
import { cosmos } from 'cosmos-js-telescope';

const {
    fundCommunityPool,
    setWithdrawAddress,
    withdrawDelegatorReward,
    withdrawValidatorCommission
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const {
    multiSend,
    send
} = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
    beginRedelegate,
    createValidator,
    delegate,
    editValidator,
    undelegate
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const {
    deposit,
    submitProposal,
    vote,
    voteWeighted
} = cosmos.gov.v1beta1.MessageComposer.fromPartial;
```

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.

Here are the docs on [creating signers](https://docs.cosmology.zone/cosmos-kit) in cosmos-kit that can be used with Keplr and other wallets.

### Initializing the Stargate Client

Use `getSigningCosmosClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningCosmosClient } from 'cosmos-js-telescope';

const stargateClient = await getSigningCosmosClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```
### Creating Signers

To broadcast messages, you can create signers with a variety of options:

* [cosmos-kit](https://docs.cosmology.zone/cosmos-kit) (recommended)
* [keplr](https://docs.keplr.app/api/cosmjs.html)
* [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)
### Amino Signer

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```js
import { getOfflineSignerAmino as getOfflineSigner } from 'cosmjs-utils';
```
### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from 'chain-registry';

const mnemonic =
  'unfold client turtle either pilot stock floor glow toward bullet car science';
  const chain = chains.find(({ chain_name }) => chain_name === 'cosmos');
  const signer = await getOfflineSigner({
    mnemonic,
    chain
  });
```
### Broadcasting Messages

Now that you have your `stargateClient`, you can broadcast messages:

```js
const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

const msg = send({
    amount: [
    {
        denom: 'coin',
        amount: '1000'
    }
    ],
    toAddress: address,
    fromAddress: address
});

const fee: StdFee = {
    amount: [
    {
        denom: 'coin',
        amount: '864'
    }
    ],
    gas: '86364'
};
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
```

## Advanced Usage


If you want to manually construct a stargate client

```js
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import { 
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    cosmosAminoConverters,
    cosmosProtoRegistry
} from 'cosmos-js-telescope';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpint = 'https://rpc.cosmos.directory/cosmos'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...cosmosProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...cosmosAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
});
```

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
