# Register Blockless Worker as an AVS node.

This guide is broken down into two parts.

1. [Setting up an EigenLayer Operator](#setting-up-an-eigenlayer-operator)
2. [Opt In / Opt Out the Operator for Blockless AVS](#opt-in--opt-out-the-operator-for-blockless-avs)

You may skip part 1 if you already have an Operator registered with EigenLayer Holskey.

## Setting up an EigenLayer Operator

* Follow EigenLayer guide and Install EigenLayer CLI
* Generate ECDSA and BLS keypair using the following command

```bash
eigenlayer operator keys create --key-type ecdsa [keyname]
eigenlayer operator keys create --key-type bls [keyname]
```

> **Please ensure you backup your private keys to a safe location. By default, the encrypted keys will be stored in `~/.eigenlayer/operator_keys/`**

> Fund at least 0.3 ETH to the ECDSA address generated. It will be required for node registration in the later steps.

### Register on EigenLayer as an operator

Create the configuration files needed for operator registration using the following commands. When completed, `operator.yaml` and `metadata.json` will be created.

```bash
eigenlayer operator config create
```

Edit the metadata.json, with the details of your new operator

```json
{
  "name": "Example Operator",
  "website": "<https://example.com/>",
  "description": "Example description",
  "logo": "<https://example.com/logo.png>",
  "twitter": "<https://twitter.com/example>"
}
```

Upload metadata.json to a public URL. Then update the `operator.yaml` attribute `metadata_url` with the url to `metadata.json`.

Execute the following command, to register the operator.

```bash
eigenlayer operator register operator.yaml
```

If the previous command was successful the following output should be seen in the terminal

```bash
✅ Operator is registered successfully to EigenLayer
```

To update this metadata in the future you can run

```bash
eigenlayer operator update operator.yaml
```

After your operator has been registered, it will be reflected on the EigenLayer operator page.
Testnet: https://holesky.eigenlayer.xyz/operator

The status of an operator can be checked using 

```bash
eigenlayer operator status operator.yaml
```

## Opt In / Opt Out the Operator for Blockless AVS

Create the Environment File `blockless-operator.env` for `Docker`. This allows seamless passing of options for Opt-In and Opt-Out.

```env
METADATA_URI=https://path/to/metadata.json

# Modify to the Home Directory
USER_HOME=${HOME}

# Modify these if different than the default ~/.eigenlayer/
EIGENLAYER_HOME=${USER_HOME}/.eigenlayer
NODE_ECDSA_KEY_FILE_HOST=${EIGENLAYER_HOME}/operator_keys/opr.ecdsa.key.json
NODE_BLS_KEY_FILE_HOST=${EIGENLAYER_HOME}/operator_keys/opr.bls.key.json

# Provide the decryption password
OPERATOR_BLS_KEY_PASSWORD=
OPERATOR_ECDSA_KEY_PASSWORD=
```

**Opt-In** to the Blockless AVS by running the following command, assuming `Docker` is available.

```bash
  docker run --env-file blockless-operator.env \
  --rm \
  --volume "${NODE_ECDSA_KEY_FILE_HOST}":/app/operator_keys/ecdsa_key.json \
  --volume "${NODE_BLS_KEY_FILE_HOST}":/app/operator_keys/bls_key.json \
  ghcr.io/blocklessnetwork/bls-avs-tools:latest \
  register-operator-with-avs
```

**Opt-Out** of the Blockless AVS By Running the following command, assuming `Docker` is available. 

```bash
  docker run --env-file blockless-operator.env \
  --rm \
  --volume "${NODE_ECDSA_KEY_FILE_HOST}":/app/operator_keys/ecdsa_key.json \
  --volume "${NODE_BLS_KEY_FILE_HOST}":/app/operator_keys/bls_key.json \
  ghcr.io/blocklessnetwork/bls-avs-tools:latest \
  deregister-operator-with-avs
```
