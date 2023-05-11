# Overview

Blockless Protocol revolutionizes decentralized networks by providing an optimized platform for verifiable computation, enabling the next generation of distributed systems.

You can start using Blockless Protocol and deploying your first function via [Blockless Functions](../functions). 

## Vision

The goal for the Blockless Network is to create a global edge network that offers low-latency and high-availability computing, empowering developers to better serve regional users while minimizing trust within the network.

We envision the Blockless Network as a central hub that seamlessly connects various decentralized infrastructures, including blockchain, storage, and MPC networks.

## Technical Features

### Randomized Node Orchestration

Function deployments are matched and distributed to their unique node sub-network with pseudo-randomness via our advanced [selection](./protocol/networking/selection) and [distribution](./protocol/networking/distribution.md) algorithms, ensuring the most efficient execution of your program.

### Customizable and Dynamic Consensus

Select the ideal [consensus](./protocol/networking/consensus.md) mechanism for your dApp logic, with customizable options such as data aggregation, pBFT, or Raft.

The Blockless Network further enhances security and transparency by offering optional computation verifiability through zero-knowledge proofs.

## Other Notable Features

- **Ultra-portable node software**: Utilizing WebAssembly (WASM) and the WebAssembly System Interface (WASI), the Blockless Protocol enables effortless network contributions using personal computers.

- **Fully extendable runtime**: The Blockless Runtime is highly adaptable, supporting internal, external, and CGI extensions. This flexibility allows developers to seamlessly integrate existing packages or libraries within the project binary or directly on the host. With CGI extensions, developers can also harness capabilities written in different languages.

- **Hands-free scaling**: Experience a serverless development environment with the Blockless Protocol, as it dynamically allocates resources to accommodate fluctuating workloads, allowing developers to focus on building innovative applications.
