## EnvVar

Read data passed from the networking layer directly from host memory. Source code can be found on [GitHub](https://github.com/blocklessnetwork/sdk-assemblyscript/blob/main/assembly/memory/index.ts).

```tsx
import 'wasi'
import { Console } from 'as-wasi/assembly'
import { memory } from '@blockless/sdk'

let envVars = new memory.EnvVars().read().toJSON()
if (envVars) {
	let environmentValue = envVars.get('ENV_VAR_NAME')
	if (environmentValue) {
		Console.log('Hello ' + environmentValue.toString())
	}
}
```

### Constructor

`constructor()`: Creates a new instance of the `EnvVar` class.

### Properties

`buf: u8[]`: An array of bytes representing the environment variables data.

`private static vars: Map<string, string> | null`: A map of environment variable keys and values. Initialized when the `initialize()` method is called.

### Methods

`read(): EnvVars`: Reads the environment variables and stores the data in the `buf` property. Returns the instance of the `EnvVars` class.

`toString(): string`: Returns the environment variables data as a string.

`toJSON(): JSON.Obj`: Parses the environment variables data as a JSON object and returns it.

`static initialize(): void`: Initializes the `vars` property with environment variable key-value pairs.

`static get(key: string): string`: Retrieves the value of an environment variable with the specified key. If the `vars` property is not initialized, it calls the `initialize()` method to initialize it. Returns the value of the environment variable, or an empty string if the key is not found.
