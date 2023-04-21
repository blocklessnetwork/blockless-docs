Functions in the Blockless network can be easily integrated with each other. Whether you are writing a private function for your own stack or a public function for the entire community, there are a few important principles to remember for easier function workflow and composability.

# **Requesting Information from Host**

Since the function runs inside the WASM-based runtime environment, the permission system requires you to request host information from the “Memory Extension”.

If you requested permission in the function manifest and the request is granted, host information can be retrieved by importing `memory` from Blockless SDK. Here's an example of reading the `stdin` interface from memory:

```tsx
import "wasi";
import { Console } from "as-wasi/assembly";
import { memory } from "@blockless/sdk";

// { "results": "1000" }
// cast stdin input to JSON
let stdin = new memory.Stdin().read().toJSON();

if (stdin) {
	// read the results object out of STDIN
	let results = stdin.get("results");
  if (results) {
		// convert value and add 1000 to it
		let newValue = Number.parseFloat(results.toString()) + 1000;
  }
}
```

# **Passing Function Results**

If you need to pass your execution results to another function, you should return those results to `stdout`. This interface currently has a `1Mib` limit. If your returned results is larger than the `1024Kib`, only the first `1024Kib` will be transported over the P2P network. If this causes the message payload to be incomplete, the message may not be understood by the Network and may result in errors in your function workflow.

Here's an example of returning a results object, with the value of `1000`:

```tsx
import "wasi";
import { Console } from "as-wasi/assembly";
import { json } from "@blockless/sdk";

// create a new jsonEncoderlet jsonEncoder = new json.JSONEncoder();

// pop an object onto the stack
jsonEncoder.pushObject("");

// set a string value for the object
jsonEncoder.setString("results", "1000");

// close the object
jsonEncoder.popObject();

// send the results to stdout
Console.log(jsonEncoder.toString());
```