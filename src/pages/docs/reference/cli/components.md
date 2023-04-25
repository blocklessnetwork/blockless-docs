# Components

Components are the installable parts of the Blockless CLI. A component can be a command-line tool (for example, bls), a set of Blockless CLI commands at the Alpha or Beta release levels, or a package that contains dependencies used by a tool in the Blockless CLI, such as the local runtime components.

The local runtime components consist of the Blockless WASM Runtime Environment and the b7s networking module. With the local runtime components, you will be able to build and test your function locally.

**If this is your first time using `bls` or building and testing your function, you need to use the `bls components install` command to install the local runtime components**.

### `bls components install`

Installs the local runtime components which include the Blockless WASM Runtime Environment and the b7s networking module. These components are used when you build and test your function or project locally.

_Basic usage:_

### `bls components start [agent]`

Starts a head worker instance or a worker instance.

For version 0.0.38 and below, the `bls components start` command is for testing purposes only and has limited use cases. In future releases, you will be able to simulate how your function is being orchestrated, deployed, and executed on the the worker instance(s).

_Basic usage:_ Starting a head worker instance:

```
$ bls components start head
$
$ Off-Chain ... starting head node$ INFO[0000] starting b7s
$ INFO[0000] config path set configPath=/Users/sample_user/.bls/network/head-config.yaml
$ INFO[0000] loading private key from: /Users/sample_user/.bls/network/keys/priv.bin
$ INFO[0000] Opening database: /Users/sample_user/.bls/network/12t3KaoWN34D2J4QvRyA4EL9aiJqDqj1JFsqeneZYvnMNPduZsts_appDb
$ INFO[0000] starting rest server address=0.0.0.0 port=8081
$ INFO[0000] starting chain client service
```

Starting a worker instance:

```bash
$ bls components start worker
$
$ Off-Chain ... starting worker node$ INFO[0000] starting b7s
$ INFO[0000] config path set configPath=/Users/sample_user/.bls/network/worker-config.yaml
$ INFO[0000] Opening database: /Users/sample_user/.bls/network/12t3KaoWN34D2J4QvRyA4EL9aiJqDqj1JFsqeneZYvnMNPduZsts_appDb
$ INFO[0000] starting peer discovery
```
