# Blockless AssemblyScript SDK Overview

The Blockless AssemblyScript SDK is a set of internal extensions that provides developers with a convenient way to build Blockless applications that interact with various system resources.

The SDK includes several extension modules that provide bindings to common resources, including HTTP, JSON, Memory, IPFS, AWS S3, and CGI.

## Extension Overview

1. HTTP: The `http` extension provides bindings for sending HTTP requests and receiving HTTP responses. It allows developers to make HTTP requests to remote servers and handle the resulting data in their Blockless applications.
2. JSON: The `json` extension provides bindings for encoding and decoding JSON data. It allows developers to easily serialize and deserialize JSON data in their Blockless applications.
3. Memory: The `memory` extension provides a way to access data directly from host’s memory. It allows developers to directly pass secrets via the networking layer and access the secrets within the runtime environment.
4. IPFS: The `ipfs` extension provides bindings for interacting with the InterPlanetary File System (IPFS), a peer-to-peer network for storing and sharing files. It allows developers to add and retrieve files from IPFS in their Blockless applications.
5. AWS S3: The `s3` extension provides bindings for interacting with Amazon S3, a cloud storage service. It allows developers to upload and download files from S3 in their Blockless applications.
6. CGI: The `cgi` extension provides bindings for accessing extensions written in other languages via the Common Gateway Interface (CGI).

## Usage

You can start using the Blockless AssemblyScript SDK by installing the package to your new or existing project.

### Using npm

```bash
$ npm i @blockless/sdk
```

### Using yarn

```bash
$ yarn add @blockless/sdk
```
