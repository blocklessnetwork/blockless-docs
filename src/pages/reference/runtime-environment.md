# Blockless Runtime Environment

The Blockless Runtime Environment leverages WebAssembly (Wasm) technology to deliver fast, compatible, and customizable features. This environment supports a variety of programming languages, such as C/C++, Rust, Swift, AssemblyScript, and Kotlin, while also allowing for the integration of these languages (e.g., using Rust to implement a JavaScript API).

## **Key Features**

The Blockless runtime environment provides the following standout features:

- **Speed**: Utilizes an optimized code generator for rapid generation of high-quality machine code. The runtime environment is designed for efficient instantiation, low-overhead transitions between the embedder and Wasm, and scalability of concurrent instances.
- **Compatibility**: Supports running standard bytecode programs compiled from various programming languages, such as C/C++, Rust, Swift, AssemblyScript, or Kotlin. It also facilitates the mixing of these languages (e.g., using Rust to implement a JavaScript API).
- **Customizability**: Offers a configurable file with a range of options, including additional restrictions on WebAssembly beyond its basic guarantees, such as CPU and memory consumption.

## Building the Project

To build the project, follow these steps:

1. Install Rust by visiting the [Rust official website](https://rustup.rs/).
2. Clone the [git repository](https://github.com/blocklessnetwork/runtime).
3. Go to your project folder and execute the following command to build the project:

```bash
$ cargo build
```

## Supported Languages

Blockless Runtime Environment supports an array of programming languages, including but not limited to:

- TinyGo
- Rust
- AssemblyScript

## Runtime Environment Configuration

Below is an example of the runtime environment configuration file:

```bash
{
    "fs_root_path": "/Users/user_name/Downloads",
    "drivers_root_path": "/Users/user_name/Downloads",
    "runtime_logger": "runtime.log",
    "limited_fuel": 200000000,
    "limited_memory": 30,
    "entry": "main",
    "modules": [
        {
            "file": "/Users/user_name/Downloads/test1.wasm",
            "name": "linking2",
            "type": "module",
            "md5": "d41d8cd98f00b204e9800998ecf8427e"
        }
    ],
    "permissions": [
        "http://httpbin.org/anything",
        "file://a.go"
    ]
}
```

### Parameters

`fs_root_path`: The root file system path of the app. When the app is opened, it will use this file system as its "/".

`limited_fuel`: The limit of instructions the app can execute. In the example, the limit is 200,000,000.

`limited_memory`: The maximum size of memory that the app can use. In the example, the maximum is 20 pages, where each page is 64k. So, the app can only use 20 \* 64k of physical memory.

`entry`: The entry is the function name. Please refer to the app example for more information.

`permissions`: A list of resources that the app is allowed to access. If the app tries to access a resource not in this list, it will receive a "Permission Denied" error.

`modules`: These are the app's WebAssembly (Wasm) files. The Wasm files have 2 types defined by the `type` node: `module` and `entry`. `module` is a library in the app, while `entry` is the entry Wasm, which normally contains the entry function.

- `type`: The Wasm files have 2 types defined by the `type` node.
- `file`: The Wasm file.
- `name`: This is used to define the linker name, which the app can use for the caller.
- `md5`: The checksum of the file.

`runtime_logger`: Specifies the path to the log file for the runtime environment.

`drivers_root_path`: Specifies the root path for the drivers used by the runtime environment.

## **Command Line Interface**

The runtime requires input from stdin and also accepts environment variables passed as a list separated by a semicolon through the BLS_LIST_VARS variable. Here's an example of how to run the app:

```bash
$ "echo "FOO" | env THIS_IS_MY_VAR=FOO BLS_LIST_VARS=THIS_IS_MY_VAR ~/.bls/runtime/blockless-cli ./build/manifest.json"
```

[data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2738%27%20height=%2738%27/%3e](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2738%27%20height=%2738%27/%3e)

## Exit Code

| Code          | Description                                   |
| ------------- | --------------------------------------------- |
| Exit Code 1   | Fuel ran out                                  |
| Exit Code 2   | Call stack exhausted                          |
| Exit Code 3   | Out of bounds memory access                   |
| Exit Code 4   | Misaligned memory access                      |
| Exit Code 5   | Undefined element: out of bounds table access |
| Exit Code 6   | Uninitialized element                         |
| Exit Code 7   | Indirect call type mismatch                   |
| Exit Code 8   | Integer overflow                              |
| Exit Code 9   | Integer divide by zero                        |
| Exit Code 10  | Invalid conversion to integer                 |
| Exit Code 11  | Wasm unreachable instruction executed         |
| Exit Code 12  | Interrupt                                     |
| Exit Code 13  | Degenerate component adapter called           |
| Exit Code 15  | App timeout                                   |
| Exit Code 128 | Configure error                               |
