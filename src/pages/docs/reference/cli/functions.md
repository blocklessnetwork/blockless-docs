# Functions

The function command allows you to manage, build, test, and deploy your Blockless Functions using the command line interface.

### `bls function list`

Lists both deployed and stopped functions that are associated with your wallet account.

You have to be logged in to your account before you can use this command and view the function list.

_Basic usage:_

```bash
$ bls function list
$
$ List of Functions:
$ -----------------------------------
$
$ Name:   sample_func_1
$ CID:    bafybeigusomerandomnumbersandletterskb7gvf7ybidn2wofg7fjitu
$ Status: deployed
$
$
$ Name:   sample_func_2
$ CID:    bafybeifsomerandomnumbersandlettersfc2myf743f7lm6uwpkbsbutm
$ Status: stopped
```

### `bls function init [framework] [project name]`

Initializes a local starter project or template.

Framework and project name are optional positional arguments. If you omit the positional arguments, you’ll be asked to provide your choice interactively with prompts.

Currently we support both Assembly Script (`assemblyscript`) and Rust (`rust`) for your starter project. Additionally, we also provide a Price Oracle template written in Assembly Script that you can directly test and deploy.

_Basic usage:_

```bash
$ bls function init
$
$ ✔ What would you like to name your function? … my_first_func
$ ✔ Pick a framework › Assembly Script
$ ✔ Pick a starter template › Hello World
$
$ Creating: new function in /Users/sample_user/my_first_func
$ Success: function created at /Users/sample_user/my_first_func
$
$ Change into the directory /Users/sample_user/my_first_func to get started
```

With `framework` and `project name` positional arguments:

```bash
$ bls function init assemblyscript my_first_func
$
$ ✔ Pick a starter template › Hello World$ Creating: new function in /Users/sample_user/my_first_func
$ Success: function created at /Users/sample_user/my_first_func
$
$ Change into the directory /Users/sample_user/my_first_func to get started
```

### `bls function build [flag]`

Build your function locally using the build command specified in the function manifest (bls.toml). By default, this build command uses the `npm run build` command and creates a wasm function bundle that can be deployed to the Blockless Network.

Currently, you must be in the function’s root directory (./) and have a function manifest file (bls.toml) in order to build the function. Otherwise, an error will be thrown.

_Basic usage:_

```bash
$ bls function build
$
$ Building: function sample_func_1.wasm in /Users/sample_user/sample_func_1/build...
$
$ > small_jade_ox@1.0.0 build:debug$ > npm run clean; asc index.ts --target debug
$
$
$ > small_jade_ox@1.0.0 clean$ > rm -rf build
$
$ Creating Archive: sample_func_1.tar.gz in /Users/sample_user/sample_func_1/build$ Build successful!
```

### `bls function deploy`

Deploys your function to the Blockless network. Once deployed, you will be able to view your function status using `$ bls function list` command or via the Blockless console.

Currently, you have to be in the function’s root directory (./) in order to deploy the function. Otherwise, an error will be thrown.

The deployment process is broken down into three stages. First, the command will automatically build or rebuild the project with a final function bundle. Next, the command will publish the function bundle to the default storage option, IPFS, via the Blockless Gateway service. Finally, using the returned CID, the function will be deployed to the Blockless Network.

_Basic usage:_

```bash
$ bls function deploy
$
$ Building: function sample_func_1.wasm in /Users/sample_user/sample_func_1/build...
$
$ > sample_func_1@1.0.0 build:release$ > npm run clean; asc index.ts --target release
$
$
$ > sample_func_1@1.0.0 clean$ > rm -rf build
$
$ Creating Archive: sample_func_1.tar.gz in /Users/sample_user/sample_func_1/build
$ Build successful!
$
$ Publishing: function located in /Users/sample_user/sample_func_1/build$ Publish successful!
$
$ Deploying sample_func_1 ...$ Successfully deployed sample_func_1 with id bafybeyd6eiyyjrandomnumbersandlettersli5tlpa7q3qxiifuphba2q
```

### `bls function update`

Updates an existing deployed function under the current working directory on the Blockless Network.

With the `update` command, the function project will go through the first two stages of the deployment cycle, including building and publishing. Then, using the newly generated CID, the function will be updated on the Blockless Network accordingly.

If your function has not been deployed before, an error will be thrown and you will be directed to deploy your function instead.

_Basic usage:_

```bash
$ bls function update
$
$ Building: function my_first_func.wasm in /Users/sample_user/my_first_func/build...
$
$ > my_first_func@1.0.0 build:release$ > npm run clean; asc index.ts --target release
$
$
$ > my_first_func@1.0.0 clean$ > rm -rf build
$
$ Creating Archive: my_first_func.tar.gz in /Users/sample_user/my_first_func/build$ Build successful!
$
$ Publishing: function located in /Users/sample_user/my_first_func/build$ Publish successful!
$
$ Updating my_first_func ...
$ Deploying my_first_func ...
$ Successfully deployed my_first_func with id bafybe7sckpzx3mrandomnumbersandlettersrd2tf6thmsz4cf7vxlr5a
```

### `bls function stop [target name]`

Stops or un-deploys the function from the Blockless network. The `target` positional argument is an optional field for the currently-deployed function name on the Blockless network. If not specified, the command will stop the function in the current directory by default.

_Basic usage:_

```bash
$ bls function stop
$ Stopping sample_func_1 ...
$
$ Successfully stopped function sample_func_1!
```

With the `target` positional argument:

```bash
$ bls function stop sample_func_1
$ Stopping sample_func_1 ...
$
$ Successfully stopped function sample_func_1!
```

### `bls function delete [target name]`

Stops or un-deploys the function from the Blockless network and removes the function executable bundle from the default storage (IPFS). The `target` positional argument is an optional field for the currently-deployed function name on the Blockless network. If not specified, the command will stop the function in the current directory by default.

_Basic usage:_

```bash
$ bls function delete
$
$ Deleting sample_func_1 ...
$
$ Successfully deleted function sample_func_1!
```

With the `target` positional argument:

```bash
$ bls function stop sample_func_1
$
$ Deleting sample_func_1 ...
$
$ Successfully deleted function sample_func_1!
```

### `bls function invoke [--flags]`

Invokes your local function at the current working directory.

Currently, you must be in the function’s root directory (./) in order to invoke the function. Otherwise, an error will be thrown.

The command will automatically detect the build file in the directory. If the function’s build file is not detected, the function will be built then invoked. A result will be returned in the terminal afterward.

**\*\*\*\***Options:**\*\*\*\***

`-d`, `--debug` Add a debug flag to the function build [default: false]

`--rebuild` Rebuilds the function before invoking [default: false]

`-s`, `--stdin` Add stdin arguments to the local function. Eg. --stdin arg1 arg2 [array]

`--serve` Server the invoke result through a web server [default: false]

`-e`, `--env` Includes environment variables. Eg. --env MY_ENV_VAR=value [string]

_Basic usage:_

```bash
$ bls function invoke
$
$ Building: function my_first_func_debug.wasm in /Users/sample_user/my_first_func/build...
$
$ > my_first_func@1.0.0 build:debug
$ > npm run clean; asc index.ts --target debug
$
$
$ > my_first_func@1.0.0 cleanv> rm -rf build
$
$ Creating Archive: my_first_func_debug.tar.gz in /Users/sample_user/my_first_func/build$ Build successful!
$
$ Hello, world!
```

**\*\*\*\***Examples**\*\*\*\***

```bash
$ bls function invoke --debug
#=> Generate a debug build based on the bls.toml config

$ bls function invoke --rebuild
#=> Rebuilds the function before invoking

$ bls function invoke --serve
#=> Serves the response through a local web server

$ bls function invoke --stdin ARG1=VAL1 --env ENV1=VAL2
#=> Passes stdin variables and environment variables to the function being invoked
```
