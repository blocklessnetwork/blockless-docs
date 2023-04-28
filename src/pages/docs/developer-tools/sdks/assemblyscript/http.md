# **HTTP Extension**

The Blockless Assembly Script SDK's HTTP extension allows you to make HTTP requests and handle HTTP responses directly from your AssemblyScript code. It provides a convenient way to communicate with external APIs and services.

Here is an **[example](https://github.com/blocklessnetwork/sdk-assemblyscript/blob/main/examples/http.ts)** of using the HTTP extension with AssemblyScript:

```tsx
import 'wasi'
import { Console } from 'as-wasi/assembly'
import { json, http } from '@blockless/sdk'

let handle: http.HttpHandle | null = http.HttpOpen(
	'http://httpbin.org/anything',
	new http.HttpHandleOptions('GET')
)

if (handle != null) {
	Console.log(`code:${handle!}`)
	Console.log(handle!.getHeader('Content-ype')!)
	let body = handle!.getAllBody()!
	Console.log(`${body}`)

	let jsonObj = <json.JSON.Obj>json.JSON.parse(body)
	let kvs = jsonObj.valueOf()
	if (kvs != null) {
		let keys = kvs.keys()
		for (let i = 0; i < keys.length; i++) {
			let key = keys[i]
			Console.log(`${key}: ${kvs.get(key)}`)
		}
	}
	handle!.close()
}
```

## **Module Install**

You can start using the Blockless AssemblyScript SDK by installing the package to your new or existing project.

### **Using npm**

```bash
$ npm i @blockless/sdk
```

### **Using yarn**

```bash
$ yarn add @blockless/sdk
```

## **Module Import**

To import the HTTP extension, add the following line to your AssemblyScript file:

```tsx
import { http } from '@blockless/sdk'
```
