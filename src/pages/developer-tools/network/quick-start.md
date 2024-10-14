# How to build with Blockless 
This guide will walk you through logging in to the Blockless Network to deploying your first application.

> **Try the Blockless Dashboard**  
> The quickest way to experiment with Blockless Functions is through the [Blockless Dashboard](https://dashboard.blockless.network). The only thing you need is to link your Web3 wallet and GitHub account. After that, you can deploy a sample project to preview and test a Functions script immediately.

## Start a New Project with the Blockless CLI

The Blockless command-line interface (CLI), allows you to create, test, and deploy your Functions projects.

### Install the Blockless CLI

To install the Blockless CLI, you can either use `curl` or `wget`.

Installing Blockless CLI with `curl`:

```bash
sudo sh -c "curl <https://raw.githubusercontent.com/BlocklessNetwork/cli/main/download.sh> | bash"
```

Installing Blockless CLI with `wget`:

```bash
sudo sh -c "wget <https://raw.githubusercontent.com/BlocklessNetwork/cli/main/download.sh> -v -O download.sh; chmod +x download.sh; ./download.sh; rm -rf download.sh"
```

To install on Windows, go to the [releases page](https://github.com/blocklessnetwork/cli/releases) on GitHub and download the x86 version of the Blockless CLI.

### Get Familiar with Blockless CLI Commands

To see a list of available commands, you can run the `bls` or `bls help` command:

```bash
bls help
```

### Log In to Your Account

To log in to the Blockless Network, run:

```bash
bls login
```

A pop up window will take you to connect your Web3 wallet.

### Create a New Functions Project

To create a new Functions project, run:

```bash
bls functions init
```

In your terminal, you will be asked a series of questions related to your project.

## Test Your Project Locally

In your project directory, the `bls function init` command has generated the following files:

1. `bls.toml`: Your [Blockless configuration file](./function-manifest.md).
2. `readme.md`: Project readme file
3. `index.ts`: A minimal Hello World Function written in TypeScript.
4. `package.json`: A minimal Node dependencies configuration file.
5. `asconfig.json`: AssemblyScript configuration.

After creating your first Blockless Function, run the `bls components install` command to install the local runtime environment. This will enable you to test your function locally.

Next, execute the following command to build your function. Once the build sequence is complete, a `build` folder will appear in your project directory.

```bash
bls function build
```

To test your function, simply run the `bls function invoke` command. You will see your function result returned to the terminal after execution.

## Deploy Your Project

With your project configured, you can now deploy your Function to the Blockless Network.

```bash
bls function deploy
```

You will be able to view your deployed function either via the `bls function list` command or via the Blockless Dashboard.

## Next Steps

To do more with Blockless Functions, explore the [tutorials](./tutorials/).
