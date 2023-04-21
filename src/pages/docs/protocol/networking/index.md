# Networking overview

Blockless has two P2P networks in the system. As the platform offers serverless computing, it requires the protocol to automatically orchestrate the distribution of tasks to a network of computers.

Blockless incorporates a Cosmos-based blockchain for task orchestration. Once a task is received by a node on the Orchestration network, the node network will perform a selection algorithm to determine which Execution Node will be assigned the task.

The Execution network is an off-chain decentralized network that executes the tasks. Each Execution Node runs Blockless Runtime (based on Wasmtime) to execute WASM binary bundles in a secure and isolated environment.