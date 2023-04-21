# Configure Your Function Manifest

Blockless utilizes a configuration file called `bls.toml` to enable customization of the development and publishing setup for your Blockless Function.

Here, you can find a sample `bls.toml` file that is generated when you run the `bls function init` command to create a new `Hello World` project.

```toml
name = "yodelling-coffee-pony"
type = "function"
version = "1.0.0"
content_type = "json"

[deployment]
nodes = 4 
permissions = [
  "https://bsc-dataseed.binance.org",
  "https://api.coingecko.com",
  "https://redis-domain:port"
]

[build]
dir = "build"
entry = "yodelling-coffee-pony_debug.wasm"
command = "npm run build:debug"

[build_release]
dir = "build"
entry = "yodelling-coffee-pony.wasm"
command = "npm run build:release"
```

## Top-Level Configuration

In the top-level configuration, you can define your function’s name and version.

```jsx
name = "yodelling-coffee-pony"
type = "function"
version = "1.0.0"
content_type = "json"
```

### name `string`  `Required`

The `name` property is a string that represents the unique identifier for your function or site.

### version `string`  `Optional`

The `version` property is an optional string that represents the version of your function or site.

### type `string`  `Optional`

The `type` property is an optional string that determines the type of deployment. Currently, the type field can be either `"function"` or `"site"`. If not provided, it defaults to `"function"`.

### content_type `string`  `Optional`

The `content_type` property is an optional string that defines the content type for the response returned by your function or site. Some type examples are: `"json"`, `"html"`, or `"text"`. If not provided, it defaults to `"text"`.

## Deployment Configuration `[deployment]`

The deployment section is used to specify the deployment settings for the application.

```toml
[deployment]
nodes = 4 
permissions = [
  "https://bsc-dataseed.binance.org",
  "https://api.coingecko.com",
  "https://redis-domain:port"
]
```

### **nodes `integer` `Optional`**

The `nodes` property is an optional integer that represents the number of nodes to be deployed for your function or site. If not provided, it defaults to `1`.

### **permissions `array of strings` `Conditional`**

The `permissions` property is an array of strings that represents the list of extension (and subsequent URL) your function or site is allowed to make requests to. This property is required only if your function or site makes external requests.

## Build Configuration `[build]`

The build configuration is used to specify the build settings for the application.

```toml
[build]
dir = "build"
entry = "yodelling-coffee-pony_debug.wasm"
command = "npm run build:debug"

[build_release]
dir = "build"
entry = "yodelling-coffee-pony.wasm"
command = "npm run build:release"
```

### [build] `Optional`

The optional build `[build]` section contains the settings for building the function in `—-debug` mode.

### [build_release] required

The build_release `[build_release]` section is used to specify the build settings for the release or production version of your function.

### dir `string` `required`

The dir field specifies the directory where the build files will be stored.

### entry `string` `required`

The entry field specifies the name of the entry point for your function. The entry point is the main function that is executed when the application is run.

### command `string` `required`

The command field specifies the command that will be used to build the application. This field is used to specify the build command for the debug and release versions of the application.