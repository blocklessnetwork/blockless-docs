# Blockless TypeScript SDK Overview

The Blockless Javy SDK for WebAssembly (WASM)! This SDK is designed to provide a seamless development experience for building, deploying, and interacting with WebAssembly modules using Javy, a lightweight JavaScript runtime powered by WASM.

* Lightweight and Fast: Execute JavaScript code within a minimal WASM runtime, optimized for speed and efficiency.
* Secure Execution: Run untrusted code safely in a sandboxed environment, reducing the risk of vulnerabilities.
* Cross-Platform Compatibility: Build once and run anywhere—on servers, in browsers, or on embedded systems.
* Rich API Support: Access a comprehensive set of APIs for working with WASM modules, including module loading, function invocation, and memory management.
* Developer-Friendly: Enjoy a straightforward development experience with clear documentation, examples, and tooling support.


## Vanilla JavaScript Compatibility

One of the standout features of the Javy SDK is its focus on pure, vanilla JavaScript. Javy is designed to execute standard JavaScript code without relying on Node.js-specific APIs or dependencies. This means that any JavaScript code or libraries that compile to vanilla JavaScript can be seamlessly packaged and run within the Javy runtime.

## Why Javy?

By focusing on vanilla JavaScript, Javy provides a versatile and portable environment that enables developers to:

* Package Existing Code: If you have JavaScript code that adheres to standard ECMAScript (ES) syntax and functionality, it can be easily compiled to WebAssembly and executed with Javy.
* Avoid Dependencies: Javy doesn’t require Node.js APIs, which means you can run your JavaScript code in a minimal, resource-efficient environment. This is ideal for environments where installing and managing Node.js isn’t feasible or necessary.
* Maximize Portability: Since Javy adheres strictly to vanilla JavaScript, your code can run consistently across different platforms, from browsers to edge devices, without modification.

## Getting Started

Follow this instructions to setup the Blockless CLI, the developer experience tooling for building and deploying to the Blockless Network. The setup instructions can be [found here](https://docs.blockless.network/docs/developer-tools/cli/quick-start)
