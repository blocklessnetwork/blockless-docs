# Core Concepts

Before diving into the architecture of Blockless, we'll explore some of the core concepts that make Blockless an ideal platform for developers seeking a secure, scalable, and verifiable computing environment.

We'll discuss the integral role of WebAssembly (WASM) and the WebAssembly System Interface (WASI) in enabling efficient and platform-independent execution. Furthermore, we'll delve into the unique features of zkWASM, the Blockless Runtime Environment, serverless computing, verifiable computing, fault tolerance, and distributed orchestration, which collectively contribute to the robustness and versatility of the Blockless Network.

## WASM

WebAssembly, often abbreviated as WASM, is a low-level, binary instruction format designed for safe and efficient execution. As a compact binary format, WASM enables faster loading, parsing, and execution times compared to traditional JavaScript. It is designed as a portable target for the compilation of high-level languages like C, C++, and Rust, allowing developers to run their code at near-native performance across different platforms (CPU architecture, OS, etc.).

In the context of Blockless, WASM is the backbone of the serverless computing network. It allows for the efficient execution of complex applications in a decentralized and trustless manner. By leveraging the advantages of WASM, Blockless provides a fast, secure, and scalable platform for running a wide range of applications within the network.

## WASI

WebAssembly System Interface, or WASI, is a system interface designed to work with WebAssembly modules. WASI provides a set of standardized APIs that allow WebAssembly applications to interact with the underlying operating system in a secure and platform-independent manner. This abstraction layer enables developers to write and run their applications on various systems without worrying about platform-specific details.

In Blockless, WASI plays a crucial role in ensuring the seamless operation of serverless applications. By providing a standardized interface for WebAssembly modules, WASI enables the interoperability of applications across different nodes in the Blockless network. Additionally, it ensures a secure execution environment by limiting access to system resources and enforcing strict security policies. This makes Blockless a reliable choice for developers seeking a verifiable and platform-agnostic serverless computing network.

## zkWASM

zkWASM is an innovative technology that combines the benefits of WebAssembly (WASM) with zero-knowledge proof systems. Zero-knowledge proofs are cryptographic techniques that allow one party to prove to another party that a statement is true without revealing any additional information. By integrating zero-knowledge proof systems with WebAssembly, zkWASM enables the execution of complex computations in a verifiable and privacy-preserving manner.

In the context of Blockless, zkWASM plays a crucial role in enhancing the network's capabilities by providing additional layers of privacy and security. It allows developers to build applications that can prove the correctness of their computations without disclosing sensitive information or revealing the internal details of the algorithm. This is particularly useful in scenarios where data privacy and confidentiality are of paramount importance, such as secure voting systems, private financial transactions, and confidential data analysis.

## Blockless Runtime

The Blockless Runtime is a lightweight and efficient execution environment built on WebAssembly (WASM) technology, designed for secure and scalable serverless computing. It supports various programming languages, including C/C++, Rust, Swift, AssemblyScript, and Kotlin, and can run on any device with browser support. The runtime incorporates features such as an optimizing code generator, low-overhead transitions, and the WebAssembly System Interface (WASI) for standardized interaction with the host operating system.

To ensure the security of its sandboxed environment, Blockless Runtime employs multiple mechanisms, including WebAssembly's inherent design, linear memory and bounds checking, validation, a capability-based security model, and sandboxing. Additional security measures such as JIT compilation with Control Flow Guard (CFG) and continuous updates from the open-source community further bolster its reliability, making Blockless Runtime an ideal choice for developers seeking a verifiable and platform-agnostic serverless computing network.

## Serverless Computing

Serverless computing is a cloud computing model where the cloud provider dynamically manages the allocation and execution of compute resources on-demand. In this model, developers focus on writing and deploying their code, without having to worry about the underlying infrastructure, such as servers, storage, and networking. Serverless computing enables scalable, event-driven applications with reduced operational complexity and cost, as the billing is based on the actual consumption of resources, rather than pre-allocated capacity.

In the context of Blockless, developers are able to deploy and run arbitrary functions on Blockless, without having to interact with the underlying node operators. The developers can also enjoy pay-as-you-go pricing as well as the ability to specify where he want the nodes to be for performance and regulatory considerations.

## Verifiable Computing

Verifiable computing is a cryptographic technique that enables a party to outsource the computation of a function to an untrusted third party while maintaining the ability to verify the correctness of the results. This is particularly useful in scenarios where the computation is resource-intensive or where there are concerns about data privacy and security. Verifiable computing ensures that the results of outsourced computations are correct and can be trusted, even when the computing environment or the third party performing the computation is untrusted.

In the context of Blockless, the combination of serverless computing and verifiable computing allows developers to build and deploy scalable applications that are close to the end user in a secure and privacy-preserving manner. By leveraging technologies like WebAssembly, WASI, and zkWASM, Blockless provides a platform for executing complex applications with reduced operational overhead and increased trust in the correctness and privacy of the computations.

## Fault Tolerance

Fault tolerance is the ability of a system to continue operating correctly and maintain its functionality in the presence of failures, errors, or disruptions. In the context of serverless computing, fault tolerance ensures that applications remain available and responsive even when individual components, nodes, or resources within the system experience failures.

In Blockless, this is achieved through redundancy, replication, load balancing, and automatic recovery, which collectively contribute to the resilience and reliability of the system.

## Distributed Orchestration

Distributed orchestration is the process of coordinating and managing the execution of tasks across multiple nodes or servers in a distributed system. In serverless computing, distributed orchestration is responsible for efficiently allocating and managing resources, executing tasks, and ensuring that the application logic is executed correctly and consistently across the entire network. This involves handling aspects such as task scheduling, load balancing, resource allocation, fault tolerance, and monitoring. Distributed orchestration enables seamless scaling of applications and helps maintain the overall performance, reliability, and consistency of the serverless computing environment.

In the Blockless network, fault tolerance and distributed orchestration play vital roles in ensuring the reliable execution of serverless applications in a decentralized and verifiable manner. With a set of advanced node selection, task distribution and node ranking algorithm, Blockless provides a robust platform for developers to build and deploy scalable applications with the confidence that their applications will remain available and performant, even in the face of unexpected failures or disruptions.
