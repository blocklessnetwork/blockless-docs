# Passing Data to Other Functions

If you need to pass your execution results to another function, you should return those results to `stdout`. This interface currently has a `1Mib` limit. If your returned results is larger than the `1024Kib`, only the first `1024Kib` will be transported over the P2P network. If this causes the message payload to be incomplete, the message may not be understood by the Network and may result in errors in your function workflow.

Here's an example of returning a results object, with the value of `1000`:

```js
import 'wasi'
import { Console } from 'as-wasi/assembly'
import { json } from '@blockless/sdk'

// create a new jsonEncoderlet jsonEncoder = new json.JSONEncoder();

// pop an object onto the stack
jsonEncoder.pushObject('')

// set a string value for the object
jsonEncoder.setString('results', '1000')

// close the object
jsonEncoder.popObject()

// send the results to stdout
Console.log(jsonEncoder.toString())
```
