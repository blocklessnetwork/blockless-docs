# Serverless To-Do App with Blockless Functions

In this tutorial, we will show you how to build a simple todo application using the Blockless Network and a variety of modules and tools. We will cover how to connect to the network using the Blockless CLI, read data from the standard input and environment variables using the memory module, interact with the InterPlanetary File System (IPFS) using the ipfs module, send HTTP requests and receive responses from servers using the http module, and store data in the cloud using the AWS s3 module.

By following the steps in this tutorial, you will learn how to use these powerful tools to build applications that can interact with the Blockless Network and make use of its unique features. You will be able to use this knowledge to create your own applications and explore the full capabilities of the Blockless ecosystem. You will learn how to:

- Connect to the Blockless Network using the Blockless CLI
- Read data from the standard input and environment variables using the memory module
- Interact with the InterPlanetary File System (IPFS) using the ipfs module
- Send HTTP requests and receive responses from servers using the http module
- Use Amazon S3 to store data in the cloud using the awss3 module
- Build the Todo Application

By the end of this tutorial, you will have a fully functional todo application that you can deploy and run on the Blockless Network. Let’s get started!

## Reading from the Standard Input

You can use the memory.Stdin class to read data from the standard input. This can be useful if you want to pass data to your application when it is run.

```tsx
let stdin = new memory.Stdin().read().toJSON();
if (stdin) {
  let results = stdin.get("results");
  if (results) {
    let newValue = Number.parseFloat(results.toString()) + 1000;
  }
}
```

## Reading Environment Variables

You can use the memory.EnvVars class to read environment variables. This can be useful if you want to access configuration data or other global values.

```tsx
let envVars = new memory.EnvVars().read().toJSON();
if (envVars) {
  let environmentValue = envVars.get("ENV_VAR_NAME");
  if (environmentValue) {
    Console.log("Hello " + environmentValue.toString());
  }
}
```

## Interacting with IPFS

The ipfs module in Blockless allows you to access and manipulate data stored on the IPFS network.

To use the ipfs module in your Blockless application, you need to import it in your main AssemblyScript file:

```tsx
import { ipfs } from "../assembly";
```

## Listing Files and Directories

You can use the ipfs.ipfsFileList function to list the files and directories in a given path. The function takes a path as an argument and returns an array of file names.

Here is an example of how to list the files and directories in the root directory:

```tsx
let files = ipfs.ipfsFileList("/");
if (files != null)
  Console.log(`Files and directories: ${files!.toString()}`);
```

## Removing Files and Directories

You can use the ipfs.ipfsFileRemove function to delete a file or directory from IPFS. The function takes a path, a flag for whether to delete recursively, and a flag for whether to force the delete as arguments. It returns a boolean indicating whether the delete was successful.

Here is an example of how to delete the file or directory at the path “/1”:

```tsx
let isDeleted = ipfs.ipfsFileRemove("/1", true, true);
Console.log(`Delete successful: ${isDeleted}`);
```

## Creating Directories

You can use the ipfs.ipfsCreateDir function to create a new directory in IPFS. The function takes a path and a flag for whether to create the directory recursively as arguments. It returns a boolean indicating whether the directory was created successfully.

Here is an example of how to create the directory at the path “/1”:

```tsx
let isCreated = ipfs.ipfsCreateDir("/1", true);
Console.log(`Directory creation successful: ${isCreated}`);
```

## Writing to Files

You can use the ipfs.ipfsFileWrite function to write data to a file in IPFS. The function takes a FileWriteOptions object and a Uint8Array of data as arguments. It returns a boolean indicating whether the write was successful.

Here is an example of how to write the data [65, 66, 67, 68, 69, 70] (representing the ASCII values for the characters ‘ABCDEF’) to a file named “/2.txt”:

```tsx
let filename = "/2.txt";
let wopts = new FileWriteOptions(filename);
let isWritten = ipfs.ipfsFileWrite(wopts, [65, 66, 67, 68, 69, 70]);
 console.log(`Write successful: ${isWritten}`);
```

## Reading from Files

You can use the ipfs.ipfsFileRead function to read data from a file in IPFS. The function takes a path, a starting position, and a Uint8Array to store the data as arguments. It returns the number of bytes read.

Here is an example of how to read the data from the file “/2.txt”:

```tsx
let buf = new Array<u8>(1024);
let numBytesRead = ipfs.ipfsFileRead("/2.txt", 0, buf);
let data = String.UTF8.decodeUnsafe(buf.dataStart, numBytesRead);
 console.log(`Read ${numBytesRead} bytes: ${data}`);
```

## Getting File Stats

You can use the ipfs.ipfsFileStat function to get information about a file in IPFS, such as its size and creation time. The function takes a path as an argument and returns a FileStat object.

Here is an example of how to get the file stats for the file “/2.txt”:

```tsx
let fstat = ipfs.ipfsFileStat("/2.txt");
if (fstat != null) {
  Console.log(`File stats for "/2.txt":`);
  Console.log(`Size: ${fstat!.size}`);
  Console.log(`Creation time: ${fstat!.ctime}`);
}
```

That concludes the tutorial section on interacting with IPFS using the ipfs module. You should now be able to list, remove, create, write to, read from, and get information about files and directories on the IPFS network.

## Sending HTTP Requests

The http module in Blockless allows you to send HTTP requests and receive responses from servers.

To use the http module in your Blockless application, you need to import it in your main AssemblyScript file:

```tsx
import { http } from "../assembly";
```

To send an HTTP request, you can use the http.HttpOpen function. This function takes a URL and an HttpOptions object as arguments and returns an HttpHandle object.

Here is an example of how to send a GET request to the URL “http://httpbin.org/json:

```tsx
let handle = http.HttpOpen(
  "http://httpbin.org/json",
  new http.HttpOptions("GET")
);
```

## Receiving HTTP Responses

Once you have sent an HTTP request and received an HttpHandle object, you can use various functions of the HttpHandle class to get information about the response.

Getting the Response Headers You can use the HttpHandle.getHeader function to get the value of a specific response header. The function takes a header name as an argument and returns the value of the header as a string.

Here is an example of how to get the “Content-Type” header from an HttpHandle object:

```tsx
let contentType = handle.getHeader("Content-Type");
```

## Getting the Response Body

You can use the HttpHandle.getAllBody function to get the entire response body as a string.

```tsx
let body = handle.getAllBody();
```

## Closing the Connection

Once you have finished using an HttpHandle object, you should close the connection to the server by calling the HttpHandle.close

```tsx
handle.close();
```

That concludes the tutorial section on sending HTTP requests and receiving responses using the http module. You should now be able to send various types of HTTP requests, get information about the responses, and properly close the connections

## Other Features

The http module also provides other features that you may find useful in your projects.

### Setting Request Headers

You can set request headers when sending an HTTP request by passing an object with header name-value pairs as the third argument to the http.HttpOpen function.

```tsx
let data = { message: "Hello, world!" };
let handle = http.HttpOpen(
  "http://httpbin.org/anything",
  new http.HttpOptions("POST"),
  { "Content-Type": "application/json" },
  json.JSON.stringify(data)
);
```

## Setting Up Amazon S3

Before you can use the awss3 module in your Blockless application, you need to set up an Amazon Web Services (AWS) account and create a bucket in Amazon S3.

- Go to the AWS website and create an account.
- Follow the instructions in the AWS documentation to create a bucket in Amazon S3.
- Make note of your AWS access key ID and secret access key, which you will need to use the awss3 module.

## Importing the Module

To use the awss3 module in your Blockless application, you need to import it in your main AssemblyScript file:

```tsx
import { Bucket, S3Configure } from "../assembly/awss3";
```

## Connecting to Amazon S3

To connect to Amazon S3, you need to create a S3Configure object with your AWS access key ID, secret access key, and the endpoint of your bucket.

```tsx
let s3Config = new S3Configure(
  "your-access-key-id",
  "your-secret-access-key",
  "your-bucket-endpoint"
);
```

Then, you can create a Bucket object with the name of your bucket and the S3Configure object.

```tsx
let bucket = new Bucket("your-bucket-name", s3Config);
```

## Storing Data in Amazon S3

With a Bucket object, you can use the Bucket.putObject function to store data in Amazon S3. The function takes a path

```tsx
let data = [65, 66, 67, 68, 69, 70]; // ASCII values for 'ABCDEF'
let success = bucket.putObject("/path/to/file.txt", data);
if (success) {
  Console.log("Data stored successfully in Amazon S3.");
} else {
  Console.log("Error storing data in Amazon S3.");
}
```

## Retrieving Data from Amazon S3

You can use the Bucket.getObject function to retrieve data from Amazon S3. The function takes a path and returns a Uint8Array with the data.

```tsx
let data = bucket.getObject("/path/to/file.txt");
if (data != null) {
  Console.log(`Data retrieved from Amazon S3: ${data}`);
} else {
  Console.log("Error retrieving data from Amazon S3.");
}
```

## Listing Objects in a Bucket

You can use the Bucket.list function to get a list of objects in a bucket. The function takes a prefix as an argument and returns a string with the names of the objects separated by newlines.

```tsx
let objects = bucket.list("/path/to/prefix");
if (objects != null) {
  Console.log(`Objects in bucket with prefix "/path/to/prefix":`);
  Console.log(objects);
```

## Deleting Objects in a Bucket

You can use the Bucket.deleteObject function to delete an object in a bucket. The function takes a path and returns a boolean indicating whether the delete was successful.

```tsx
let success = bucket.deleteObject("/path/to/file.txt");
if (success) {
  Console.log("Object deleted successfully from Amazon S3.");
} else {
  Console.log("Error deleting object from Amazon S3.");
}
```

That concludes the tutorial section on using the awss3 module to store data in Amazon S3. You should now be able to connect to your bucket, store data, retrieve data, list objects, and delete objects in your bucket.

## Building the Todo Application

Creating a New AssemblyScript Project with the Blockless CLI In this section, we will use the Blockless CLI to create a new project and set up an AssemblyScript environment. We will then install the necessary dependencies for our todo application and start building our code.

Follow these steps to create a new AssemblyScript project with the Blockless CLI and set up your development environment:

- Open a terminal and navigate to the directory where you want to create your project.
- Run the bls function init command to create a new project with a default AssemblyScript configuration.

```bash
$ bls function init
```

- The bls function init command will create a new directory with the following structure:

```
my-project/
├── package.json
├── assembly
│   └── index.ts
└── package-lock.json
```

- The package.json file contains the dependencies and scripts for your project. The assembly directory contains your AssemblyScript source code, and the package-lock.json file is used to manage the dependencies of your project.
- To add the necessary dependencies for your project, open the package.json file and add the following dependencies:

```json
"dependencies": {  "as-wasi": "^0.4.0",  "as-aws-s3": "^0.4.0",  "as-http": "^0.4.0",  "as-ipfs": "^0.4.0",  "as-memory": "^0.4.0",  "as-json": "^0.4.0"},
```

- Save the package.json file and run the npm install command to install the dependencies.

```bash
$ npm install
```

- You are now ready to start building your AssemblyScript code in the assembly/index.ts file. You can use the memory, ipfs, http, and awss3 modules to interact with the Blockless Network and build your todo application.

## Get Building!

To build the todo application, you will need to use the memory, ipfs, and http modules. You can start by importing these modules in your main AssemblyScript file:

```tsx
import { memory } from "../assembly";
import { json, ipfs } from "../assembly";
import { http } from "../assembly";
```

Next, you can define a Todo class that represents a single todo item. The class should have a text field for the todo text and a completed field for the completion status. You can also define methods for reading and writing the todo from IPFS and for sending HTTP requests to update the todo status on the server.

```tsx
class Todo {
  text: string;
  completed: boolean;

  constructor(text: string, completed: boolean) {
    this.text = text;
    this.completed = completed;
  }

  // Reads the todo from IPFS
  read(): Todo | null {
    let data = ipfs.ipfsFileRead("/todo.json");
    if (data == null) {
      return null;
    }
    let jsonString = String.UTF8.decodeUnsafe(data.dataStart, data.length);
    let jsonObject = <json.JSON.Obj>json.JSON.parse(jsonString);
    let kvs = jsonObject.valueOf();
    if (kvs == null) {
      return null;
    }
    let text = kvs.get("text");
    let completed = kvs.get("completed");
    if (text == null || completed == null) {
      return null;
    }
    return new Todo(text, completed);
  }

  // Writes the todo to IPFS
  write(): boolean {
    let jsonObject = json.JSON.obj();
    jsonObject.set("text", this.text);
    jsonObject.set("completed", this.completed);
    let jsonString = json.JSON.stringify(jsonObject);
    let data = String.UTF8.encode(jsonString);
    return ipfs.ipfsFileWrite(new ipfs.FileWriteOptions("/todo.json"), data);
  }

// Sends an HTTP request to update the todo status on the server
  update(): boolean {
    let options = new http.HttpOptions("POST", "/update");
    options.setHeader("Content-Type", "application/json");
    let jsonObject = json.JSON.obj();
    jsonObject.set("text", this.text);
    jsonObject.set("completed", this.completed);
    let jsonString = json.JSON.stringify(jsonObject);
    let data = String.UTF8.encode(jsonString);
    options.setBody(data);
    let handle = http.HttpOpen("http://example.com", options);
    if (handle == null) {
      return false;
    }
    let statusCode = handle.getStatusCode();
    handle.close();
    return statusCode == 200;
  }
}

```

With the Todo class defined, you can now create the main function for your application. In this function, you can create a new Todo object and read it from IPFS. You can then display the todo text and a prompt for the user to enter a new status for the todo (either “completed” or “not completed”).

```tsx
export function main(): void {
  let todo = new Todo("Buy milk", false).read();
  if (todo == null) {
    Console.log("Error reading todo from IPFS.");
    return;
  }
  Console.log(`Current todo: ${todo.text} (${todo.completed ? "completed" : "not completed"})`);
  Console.log("Enter new status (completed/not completed):");
  let stdin = new memory.Stdin().read().toJSON();
  if (stdin == null) {
    Console.log("Error reading from standard input.");
    return;
  }
  let results = stdin.get("results");
  if (results == null) {
    Console.log("Error reading from standard input.");
    return;
  }
  let status = results.toString();
  if (status == "completed") {
    todo.completed = true;
  } else if (status == "not completed") {
    todo.completed = false;
  } else {
    Console.log("Invalid status entered.");
    return;
  }
  if (!todo.write()) {
    Console.log("Error writing todo to IPFS.");
    return;
  }
  if (!todo.update()) {
    Console.log("Error updating todo on server.");
    return;
  }
  Console.log("Todo updated successfully.");
}
```

With the main function defined, you can now build and run your todo application. You can use the Blockless CLI to compile your AssemblyScript code and deploy it to the Blockless Network.

Build

```bash
$ bls function build
```

Deploy

```bash
$ bls function deploy
```

To test your application, you can use the bls function invoke command to run the main function and interact with it via the command line.

```bash
$ bls function invokeCurrent todo: Buy milk (not completed)Enter new status (completed/not completed):completedTodo updated successfully.
```

Congratulations, you have now built a simple todo application using the Blockless Network! You can continue to build and improve your application by using other modules and features available in the Blockless ecosystem.