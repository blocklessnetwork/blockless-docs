# Blockless Runtime Environment

The Blockless Runtime Environment is a powerful and versatile system built on WebAssembly (WASM) technology. It offers a secure and isolated sandbox for executing arbitrary tasks using various programming languages, such as C/C++, Rust, Swift, AssemblyScript, and Kotlin. The Blockless Runtime Environment also supports mixing these languages, enabling flexibility and interoperability in software development.

## Key Features and Benefits

### Optimized Code Generation and Execution

The Blockless Runtime Environment includes a code generator designed to quickly produce high-quality machine code. It is optimized for efficient instantiation, low-overhead transitions between the embedder and WASM, and the scalability of concurrent instances.

### Lightweight and Universal Compatibility

The Blockless Runtime Environment is lightweight and capable of running on any device that supports a browser. This feature enables idle personal devices to join and serve the network effortlessly, contributing to the creation of a self-sovereign web.

### Customizable Configurations

Users can configure the runtime using a customizable file, which allows for additional restrictions on WebAssembly beyond its basic guarantees. These restrictions can include limitations on CPU and memory consumption, tailoring the runtime to better suit the user's requirements.

## WebAssembly System Interface (WASI) Support

The Blockless Runtime utilizes the WebAssembly System Interface (WASI), providing a standardized method for interacting with the host operating system. WASI supports system calls and extensions that allow WebAssembly modules to interact safely and efficiently with the file system, network, and other system or service level resources.

### Dynamic Extension System

The WASI interface also features a dynamic extension system, enabling extensions to be added to the interface without modifying the WASM module. This functionality allows the Blockless Network to integrate existing service clients using Common Gateway Interface (CGI) technology.

## Security

The Blockless Runtime Environment is designed with security-first principle. For further details, please refer to the [security](./security/runtime-security.md) section.
