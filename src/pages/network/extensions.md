# Extending Your Function Capabilities

This document provides an overview of the different types of extensions available for use in your projects. Extensions can be thought of as tools or additional functionality that you can integrate into your code to enhance its capabilities. These extensions can either be internal, external, or CGI-based. In this documentation, we will discuss each of these extension types, their use cases, and examples.

## Internal Extensions

Internal extensions are similar to packages or libraries that you can import into your code. They are compiled together with your WebAssembly (WASM) binary at build time, which means they are part of your final compiled project. This provides the advantage of having all the necessary components and dependencies bundled together, ensuring the proper functioning of your code.

### Use Cases

- When you need specific functionality that is available in a package or library.
- When you want to reduce the number of external dependencies.
- When you need to optimize your project for speed and performance.

### Example

If you are developing a project in Rust and you need to use a JSON parsing library, you can include the `serde_json` crate as an internal extension. This will compile the library with your project, allowing you to use its features within your code.

```rust
use serde_json::{Value, Error};

fn parse_json(json_str: &str) -> Result<Value, Error> {
    serde_json::from_str(json_str)
}
```

## External Extensions

External extensions, or on-demand extensions, are extensions that are installed and managed by the host. They can be accessed by your function as needed. These extensions are not compiled with your project but are instead provided by the host machine. This can be helpful in situations where you need access to resources or functionality that is not feasible to include in your binary.

### Use Cases

- When you need access to resources provided by the host machine.
- When you need to use functionality that cannot be compiled into your WASM binary.
- When you want to leverage existing system resources or tools.

### Example

The GETH extension is an example of an external extension. This extension allows you to access an Ethereum node that is present on the host machine. You can use this extension to interact with the Ethereum blockchain, perform transactions, or query data from smart contracts.

## CGI Extensions

Common Gateway Interface (CGI) extensions allow you to access packages or libraries that are written in other programming languages. This is useful when you need to use functions or features that are not available in your primary language or when you want to integrate with existing codebases or libraries. CGI extensions essentially export the functions you need and enable you to use them in your own code.

### Use Cases

- When you need to use a library or package that is written in another programming language
- When you want to integrate with existing codebases or tools
- When you need access to features or functions that are not available in your primary language

### Example

Use the LIT CGI extension to check the validity of a given JWT token:

```js
import 'wasi'

import { Console } from 'as-wasi/assembly'
import { cgi } from '@blockless/sdk'

// Check whether the extension is available
function isExtensionAvailable(alias: string): boolean {
	let extensions = cgi.cgiExtendsList()
	let isMatch = false

	if (extensions && extensions.length > 0) {
		for (let i = 0; i < extensions.length; i++) {
			const extension = extensions[i]
			if (alias === extension.alias) {
				isMatch = true
			}
		}
	}

	return isMatch
}

// Run the extension
function testLitProtocol(): void {
	let command = new cgi.CgiCommand('lit-extension', [], [])
	let rs = command.exec()

	if (rs === true) {
		Console.log(`Verify JWT`)
		const verifyJwtResponse = command.callMethod('verifyJWT', [
			'eyJhbGciOiJCTFMxMi0zODEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJMSVQiLCJzdWIiOiIweGZmZjE3NWMxNGEyOTllZjcwMjdkYTBkMzQ4ZjQzOGUxNTQ4ODBjY2QiLCJjaGFpbiI6ImV0aGVyZXVtIiwiaWF0IjoxNjc2NDQ0NTcwLCJleHAiOjE2NzY0ODc3NzAsImJhc2VVcmwiOiJsaXQtdGVzdC5ibHMuZGV2IiwicGF0aCI6Ii81Ym9uanB4NHE2Nmoxbng2c2ZoZjEiLCJvcmdJZCI6IiIsInJvbGUiOiIiLCJleHRyYURhdGEiOiIifQ.puWAqp82-1OM-jiHwl2jFroforAU7A5DY_4u9lXZ9KbuPHFcXQB-ovWN9DWfD7DGBf-KxT5_6f5Ii0cHmWi3TAFv-KAVkIYPAX-r_6tV6_ot2mle8pU7f43O_I_mjxwi'
		])
		Console.log(verifyJwtResponse)
	}
}

if (isExtensionAvailable('lit-extension')) {
	testLitProtocol()
} else {
	Console.log('Extension not available.')
}
```
