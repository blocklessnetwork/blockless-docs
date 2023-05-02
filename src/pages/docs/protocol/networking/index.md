# Overview

The Blockless Networking Module, or b7s in short, automatically orchestrate the distribution of tasks to a network of computers.

## Network Architecture

The Blockless Network comprises two important and distinct P2P networks – a Cosmos-based blockchain for job orchestration and a libp2p-based execution network for work execution.

## Network Process Overview

Once a task is received by a validator in the orchestration network, the validator network performs a selection algorithm to determine which execution node(s) will be assigned the task.

The execution network is an off-chain decentralized network that executes tasks. Each execution node instantiates a Blockless Runtime Environment to execute a unique WASM binary bundle in a secure and isolated environment.
