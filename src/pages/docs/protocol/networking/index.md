# Overview

The Blockless Networking Module (b7s) is the core infrastructure that connects nodes within the Blockless Network and streamlines the distribution of work across the system. It is designed to provide a secure and verifiable execution environment for distributed computing tasks.

The Blockless Networking module (b7s) is open-sourced and can be found on [GitHub](https://github.com/blocklessnetwork/b7s).

## Goal

As a purpose-built execution network optimized for verifiability, the objective of the Blockless Networking Module is to create an efficient execution network that enables the selection of the optimal group of nodes based on task requirements, and to execute tasks securely and efficiently within the formed subnetwork.

## Networking Procedure Overview

The entire networking process, from receiving a task to delivering the result to its intended destination, can be divided into two key steps:

1. **Selection and Distribution**: Upon receiving a task, the network processes its task manifest, which outlines the execution requirements. Based on this information, the network [selects](./selection.md) a group of nodes that fulfill the specified criteria and [distributes](./distribution.md) the task randomly and evenly for execution.

2. **Execution and Consensus**: The chosen nodes form a task-specific execution subnetwork, where they carry out the assigned work according to the task setup. A modular consensus mechanism, such as data aggregation, pBFT, Raft, or zero-knowledge proofs, can be integrated into the execution subnetwork to validate the accuracy and integrity of the execution process.

These steps work cohesively to ensure that the Blockless Network can effectively handle various distributed computing tasks while maintaining high levels of security, verifiability, and performance.
