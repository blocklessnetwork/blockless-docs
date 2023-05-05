# Memory Extension

Blockless Assembly Script SDK’s memory extension provides a way for you to read pre-set environment variables or any data passed from the networking layer directly from host memory.

Below is an [example](https://github.com/blocklessnetwork/sdk-assemblyscript/blob/main/examples/memory.ts) of using the memory extension with Assembly Script:

```wasm
import "wasi";
import { Console } from "as-wasi/assembly";
import { memory } from "../assembly";

let stdin = new memory.Stdin().read().toJSON();
if (stdin) {
  let results = stdin.get("results");
  if (results) {
    let newValue = Number.parseFloat(results.toString()) + 1000;
    Console.log("Hello " + newValue.toString());
  }
}

let envVars = new memory.EnvVars().read().toJSON();
if (envVars) {
  let environmentValue = envVars.get("ENV_VAR_NAME");
  if (environmentValue) {
    Console.log("Hello " + environmentValue.toString());
  }
}
```

For detailed reference, please refer to the reference section.

## Module Install

You can start using the Blockless AssemblyScript SDK by installing the package to your new or existing project.

### Using npm

```bash
$ npm i @blockless/sdk
```

### Using yarn

```bash
$ yarn add @blockless/sdk
```

## Module Import

```wasm
import { memory } from "@blockless/sdk";
```

## **Usage**

The memory extension module provides two classes, **`Stdin`** and **`EnvVars`**, to read data from host memory.

### **`Stdin` class**

`Stdin` allows you to read data passed from the networking layer directly. To read data from `Stdin`, create a new instance of the `Stdin` class and use the `read()` method followed by `toJSON()` to parse the data into a JSON object.

You can also use `toString()` method to parse the data into a string object.

```wasm
import { memory } from "@blockless/sdk";

let stdin = new memory.Stdin().read().toJSON();

if (stdin) {
  // Access data from the parsed JSON object
}
```

### **`EnvVars` class**

**`EnvVars`** provides access to pre-set environment variables. Create a new instance of the **`EnvVars`** class and use the **`read()`** method followed by **`toJSON()`** to parse the environment variables into a JSON object.

You can also use `toString()` method to parse the data into a string object.

```wasm
import { memory } from "@blockless/sdk";

let envVars = new memory.EnvVars().read().toJSON();

if (envVars) {
  // Access environment variables from the parsed JSON object
}
```
