# Get started with the Blockless CLI

The Blockless CLI is a command line tool that makes it simple to use the Blockless Network and manage your apps.

With the Blockless CLI, you can connect to the network with your on-chain identity, quickly set up a local worker environment, and build, test, deploy, and monitor your projects right away.

## Install the Blockless CLI

With `curl`:

```bash
sudo sh -c "curl <https://raw.githubusercontent.com/BlocklessNetwork/cli/main/download.sh> | bash"
```

Or with `wget`:

```bash
sudo sh -c "wget <https://raw.githubusercontent.com/BlocklessNetwork/cli/main/download.sh> -v -O download.sh; chmod +x download.sh; ./download.sh; rm -rf download.sh"
```

To install on Windows, go to the [releases page](https://github.com/blocklessnetwork/cli/releases) on GitHub and download the x86 version of the Blockless CLI. Currently, the Windows ARM64 version is not supported.

## Usage

To use the BLS CLI, open a terminal and run `$ bls` followed by the command you want to use. The command structure is as follows:

```bash
bls [command] [subcommand]
```

For example, to connect to the Blockless Network, you can run the `$ bls login` command:

```bash
bls login
```

Alternatively, you can use the `$ bls function init` command to initialize a new local project:

```bash
bls function init
```

### Help

To see a list of available commands, you can run the `$ bls` or `$ bls help` command:

```bash
bls help
```

You can also use the `-h` or `--help` flag after any command or subcommand to display usage information. For example:

```bash
bls function -h
bls function init -h
```

## Top level commands

The Blockless CLI provides a range of commands for managing your account, local components, and projects. For detailed reference, please visit the [Blockless CLI Reference](https://blockless.network/docs/cli-reference).

Below is a list of commonly used commands:

- `bls help`: Displays information and usage instructions for the Blockless CLI and its available subcommands.
- `bls console`: Opens the Blockless console, a web-based interface for managing your deployments and projects on the Blockless Network.
- `bls login`: Authenticates and logs in to the Blockless Network using your wallet keypair.
- `bls whoami`: Shows information about your current identity on the Blockless Network, including your public key.
- `bls components`: Manages your local environment components, including the local worker agent and orchestrator agent. **Note: If this is your first time building and testing your function, you need to use the `$ bls components install` command to install the local runtime components (which include the Blockless WASM Runtime Environment and the b7s networking module)**.
- `bls function`: Build, test, and manage your projects and functions.

## Glboal flags

Other than the help (`-h` or `--help`) global flag, there are two more flags that you can use globally.

### `-yes` flag

You can use `-y` or `--yes` flag to set all options to the default value. For example:

```bash
bls function deploy -y
```

### `-version` flag

- `v` or `-version` flag can be used to verify the current version of the Blockless CLI:

```bash
bls -v
```
