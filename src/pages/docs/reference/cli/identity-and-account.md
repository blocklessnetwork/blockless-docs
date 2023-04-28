# Identity & Account

In order to interact with the Blockless Network, you will need to first login with your on-chain identity.

## `bls login`

Connects the CLI to the Blockless Network (via the Blockless Gateway with a JWT token) and logs in via your on-chain identities. Currently you can use Metamask, Keplr, or Martian Wallet to log in to the network.

_Basic usage:_

```bash
$ bls login
$
$ Open Browser at http://0.0.0.0:8427 to complete login
$ # Your default browser with the authentication page will pop up.
$ # Alternatively, manually enter the URL in your browser to log in.
$ Sending user to https://console.bls.dev:443 to authenticate
$ User returned from https://console.bls.dev:443 authenticated
```

## `bls logout`

Disconnects the CLI to the Blockless Network. All of your function deployments and information are still accessible when you log back in.

_Basic usage:_

```
$ bls logout
$
$ disconnecting wallet
$ user logged out
```

## `bls whoami`

Shows the information (public key address) about your current identity on the Blockless Network.

If you are not logged in, a prompt will guide you to use the `bls login` command to log in to the Blockless Network.

_Basic usage:_

```bash
$ bls whoami
$
$ You are connected with a JWT token to the Blockless console!
$ ┌──────────┬────────────────────────────────────────────┐
$ │ Wallet   │ Address                                    │
$ ├──────────┼────────────────────────────────────────────┤
$ │ metamask │ 0xda625c8ac3468143abe40d5ba2d4e1846417a5t4 │
$ └──────────┴────────────────────────────────────────────┘
```
