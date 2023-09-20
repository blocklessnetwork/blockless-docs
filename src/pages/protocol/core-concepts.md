# Core Concepts

## Modular application architecture

Blockless aims to pioneer the modular application paradigm in Web3. This architecture lets Web3 apps run on specialized networks for specific workloads, tapping into blockchain primarily for authentication, value transfer, and ensuring system trust and integrity. It offers a balanced mix of blockchain benefits and performance optimization while preserving decentralization.

## Network Neutral 

Being network neutral means to not be limited or constrained by any particular infrastructure networks. Decentralized applications are often limited by the type of workload the underlying blockchain can support, and also the amount of work the public network can process at a given time. This hinders their ability to efficiently manage tasks like intensive computations, real-time processing and collaboration.

## Network Neutral Applications (nnApps)

nnApps are decentralized applications that work across any L1/L2 blockchain network without being constrained by any particular blockchain’s limitations such as latency, cost, and smart contract capabilities.

They leverage a new modular application architecture that we’ve built to improve security and performance. Our dynamic consensus mechanism forms part of this, allowing for applications to select the most efficient consensus and/or verification algorithms for each and every workload, which was previously impossible. Our automated node orchestration forms another part of our modular application architecture, allowing for the best-suited nodes for each and every workload to be selected at random to complete any specific task.

## Specialized network

In the Blockless ecosystem, specialized networks are application-specific networks, spawned by the user, that offer a trustless and decentralized environment for executing tasks beyond the scope of smart contracts. These networks enhance the versatility and functionality of smart contract based applications, all while preserving their inherent trust and verifiability.

## WASM

WebAssembly, often abbreviated as WASM, is a low-level, binary instruction format designed for safe and efficient execution. As a compact binary format, WASM enables faster loading, parsing, and execution times compared to traditional JavaScript. It is designed as a portable target for the compilation of high-level languages like C, C++, and Rust, allowing developers to run their code at near-native performance across different platforms (CPU architecture, OS, etc.).

In the context of Blockless, WASM is a major component of our service offering. It allows for the efficient execution of complex applications in a decentralized and trustless manner. By leveraging the advantages of WASM, Blockless provides a fast, secure, and scalable platform for running a wide range of applications.


## WASI

WebAssembly System Interface, or WASI, is a system interface designed to work with WebAssembly modules. WASI provides a set of standardized APIs that allow WebAssembly applications to interact with the underlying operating system in a secure and platform-independent manner. This abstraction layer enables developers to write and run their applications on various systems without worrying about platform-specific details (type of CPU, OS, etc.).

In Blockless, WASI plays a crucial role in ensuring the seamless operation of nnApps. By providing a standardized interface for WebAssembly modules, WASI enables the interoperability of applications across different nodes in the Blockless network. Additionally, it ensures a secure execution environment by limiting access to system resources and enforcing strict security policies. 

## Blockless Runtime

The Blockless Runtime is a lightweight and efficient execution environment built on WebAssembly (WASM) technology, designed for secure and scalable serverless computing. It supports various programming languages, including C/C++, Rust, Swift, AssemblyScript, and Kotlin, and can run on any device with browser support. The runtime incorporates features such as an optimizing code generator, low-overhead transitions, and the WebAssembly System Interface (WASI) for standardized interaction with the host operating system.

To ensure the security of its sandboxed environment, Blockless Runtime employs multiple mechanisms, including WebAssembly's inherent design, linear memory and bounds checking, validation, a capability-based security model, and sandboxing. Additional security measures such as JIT compilation with Control Flow Guard (CFG) and continuous updates from the open-source community further bolster its reliability.

## Fault Tolerance

Fault tolerance is the ability of a system to continue operating correctly and maintain its functionality in the presence of failures, errors, or disruptions. In the context of operating a specialized network for a nnApp, fault tolerance ensures that the applications remain available and responsive even when individual components, nodes, or resources within the system experience failures.

In Blockless, this is achieved through redundancy, replication, load balancing, and automatic recovery, which collectively contribute to the resilience and reliability of the system.

## Distributed Orchestration

Distributed orchestration is the process of coordinating and managing the execution of tasks across multiple nodes or servers in a distributed system. In Blockless, distributed orchestration mechanisms are responsible for efficiently allocating and managing resources, executing tasks, and ensuring nnApp workloads  are executed correctly and consistently across the entire network. This involves handling aspects such as task scheduling, load balancing, resource allocation, fault tolerance, and monitoring. Distributed orchestration enables seamless scaling of a nnApp’s specialized network and helps maintain the overall performance, reliability, and consistency of the Blockless platform.

In the Blockless network, fault tolerance and distributed orchestration play vital roles in ensuring the reliable operation of nnApps in a decentralized and verifiable manner. With a set of advanced node selection, task distribution and node ranking algorithm, Blockless provides a robust platform for developers to build and deploy nnApps with the confidence that their applications will remain available and performant, even in the face of unexpected failures or disruptions.