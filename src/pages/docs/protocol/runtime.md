# Blockless Runtime Environment

The Blockless Runtime Environment is built on WebAssembly (WASM) technology, which provides a secure and isolated sandbox for executing arbitrary tasks. It supports standard bytecode programs compiled from various programming languages, including C/C++, Rust, Swift, AssemblyScript, and Kotlin, with the ability to mix these languages. 

In addition, the runtime is built with an optimizing code generator to quickly generate high-quality machine code. It is optimized for efficient instantiation, low-overhead transitions between the embedder and WASM, and scalability of concurrent instances.

The WASM-based runtime is lightweight and can run on any device that runs a browser, allowing for a future where idle personal devices can join and serve the network at will, contributing to a self-sovereign web with ease.

The runtime also supports a configurable file, which offers various options such as additional restrictions on WebAssembly beyond its basic guarantees, including CPU and memory consumption. This allows for a customizability of the runtime to better suit the needs of the user.

The Blockless Runtime utilizes the WebAssembly System Interface (WASI), which provides a standard interface for interacting with the host operating system. WASI supports a set of system calls and extensions that allow WebAssembly modules to interact with the file system, network, and other system-level resources in a safe and controlled manner.

The WASI interface also supports a dynamic extension system, meaning that extensions can be added to the interface without requiring modifications to the WASM module. This enables the Blockless network to be extended with existing service clients using the Common Gateway Interface (CGI) technology.

For more information about the security of Blockless Runtime, find [here](https://blockless.network/docs/protocol/security/runtime-security).