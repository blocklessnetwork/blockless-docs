# Update

### `bls self-update [flag]`

Automatically fetches and updates the CLI. The CLI will update to the latest release by default if you haven’t specified the version tag.

_Basic usage:_

```bash
$ bls self-update
$
$ Installing bls latest.....
$ ############################################################################################## 100.0%
$ Installed bls latest at /usr/local/bin/bls
```

_Flag:_ `-t` or `--tag`: updates the CLI to a specific release version using its release tag (version number). You can access all of the available releases and their tags via the [releases page](https://github.com/blocklessnetwork/cli/releases) on GitHub. For example:

```bash
$ bls self-update -t v0.0.37
$
$ Password:$ Installing bls v0.0.37.....
$ ############################################################################################## 100.0%
$ Installed bls v0.0.37 at /usr/local/bin/bls
```
