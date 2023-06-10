# Getting Started with Blockless Sites

This guide will walk you through the process of logging in to the Blockless Network and deploying your first Site project.

> **Blockless Dashboard (Coming Soon)**  
> Support for Sites on the Blockless Dashboard will be released shortly.

## Create a New Sites Project

Depending on the framework you prefer, you'll need to create your project first. For this tutorial, we'll be using Next.js.

To create a Next.js project, execute the following command:

```bash
npx create-next-app@latest
```

After following the prompt, you should see your project folder along with all the relevant files.

To deploy your site to the Blockless Network, a `bls.toml` configuration file is required for the network to properly manage your site project artifact.
You can easily create a `bls.toml` file using the Blockless CLI. If you haven't installed Blockless CLI, follow [this guide](../developer-tools/cli/quick-start.md) to get started.

Once you have the Blockless CLI, navigate to your project folder and execute:

```bash
bls sites init
```

This will create a `bls.toml` configuration file in your source directory. In the `bls.toml` configuration file, make sure you set the `type` to `site` and configure the `public_dir` setting in the `[build]` section to `"out"`. Here's an example:

```toml
name = "blockless-nextjs-tutorial"
version = "1.0.0"
type = "site"
content_type = "html"

[deployment]
permission = "private"
nodes = 4

[build]
dir = ".bls"
public_dir = "out"
entry = "blockless-nextjs-tutorial_debug.wasm"
command = ""

[build_release]
dir = ".bls"
public_dir = "out"
entry = "blockless-nextjs-tutorial.wasm"
command = ""
```

### Static Exports

As we are in the process of rolling out support for dynamic sites in the near future, currently we only support static sites.

For Next.js, add `output: 'export'` to your next.config.js:

```config
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
};

module.exports = nextConfig;
```

Additionally, add `preexport` and `export` commands to your `package.json` file's `script` section:

```json
"scripts": {
    "dev": "next",
    "build": "next build",
    "preexport": "npm run build",
    "export": "next export",
    "prestart": "npm run export",
    "start": "serve out",
    "lint": "next lint"
  },
```

## Build Your Site Project

Now we are ready to build your site project. First, let's make sure all of the dependencies are installed. You can do it by running:

```bash
npm install
```

Next, export your site artifact by executing this command:

```bash
npm run export
```

Finally, build your site into a wasm bundle:

```bash
bls sites build --experimental
```

## Preview Your Deployment

You can preview and test your site project with the local Blockless worker node instance. Simply run this command:

```bash
bls sites preview --experimental
```
