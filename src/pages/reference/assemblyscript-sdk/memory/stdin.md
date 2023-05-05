## **Stdin**

Read data passed from the networking layer directly from host memory. Source code can be found on [GitHub](https://github.com/blocklessnetwork/sdk-assemblyscript/blob/main/assembly/memory/index.ts).

```tsx
import 'wasi'
import { Console } from 'as-wasi/assembly'
import { memory } from '../assembly'

let stdin = new memory.Stdin().read().toJSON()
if (stdin) {
	let results = stdin.get('results')
	if (results) {
		let newValue = Number.parseFloat(results.toString()) + 1000
		Console.log('Hello ' + newValue.toString())
	}
}
```

### **Constructor**

`constructor()`: Creates a new instance of the `Stdin` class.

### Properties

`buf: u8[]`: An array of bytes representing the standard input data.

### Methods

`read(): Stdin`: Reads the standard input and stores the data in the `buf` property. Returns the instance of the `Stdin` class.

`toString(): string`: Returns the standard input data as a string.

`toJSON(): JSON.Obj`: Parses the standard input data as a JSON object and returns it.
