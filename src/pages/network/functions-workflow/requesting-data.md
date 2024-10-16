# Requesting Information from Host

Since the function runs inside the WASM-based runtime environment, the permission system requires you to request host information from the “Memory Extension”.

If you requested permission in the function manifest and the request is granted, host information can be retrieved by importing `memory` from Blockless SDK. Here's an example of reading the `stdin` interface from memory:

```js
import 'wasi'
import { Console } from 'as-wasi/assembly'
import { memory } from '@blockless/sdk'

// { "results": "1000" }
// cast stdin input to JSON
let stdin = new memory.Stdin().read().toJSON()

if (stdin) {
	// read the results object out of STDIN
	let results = stdin.get('results')
	if (results) {
		// convert value and add 1000 to it
		let newValue = Number.parseFloat(results.toString()) + 1000
	}
}
```
