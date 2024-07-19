# Register Blockless Worker as an AVS node.

### Prerequisites 

* Docker v24 and above
* EigenLayer CLI

This guide is broken down into two parts.

1. [Setting up an EigenLayer Operator](#setting-up-an-eigenlayer-operator)
2. [Opt In / Opt Out the Operator for Blockless AVS](#opt-in--opt-out-the-operator-for-blockless-avs)

You may skip part 1 if you already have an Operator registered with EigenLayer Holskey.

## Setting up an EigenLayer Operator

* Follow EigenLayer guide and Install <a href="https://docs.eigenlayer.xyz/eigenlayer/operator-guides/operator-installation#installation-1" target="_blank">EigenLayer CLI</a>
* Generate ECDSA and BLS keypair using the following command

```bash
echo "password" | eigenlayer operator keys create --key-type ecdsa [keyname]
echo "password" | eigenlayer operator keys create --key-type bls [keyname]
```

> **Please ensure you backup your private keys to a safe location. By default, the encrypted keys will be stored in `~/.eigenlayer/operator_keys/`**

> Fund at least 0.3 ETH to the ECDSA address generated. It will be required for node registration in the later steps.
> Obtain Holskey Funds https://holesky-faucet.pk910.de/

### Register on EigenLayer as an operator

Create the configuration files needed for operator registration using the following commands. When completed, `operator.yaml` and `metadata.json` will be created.

```bash
eigenlayer operator config create
```

Edit the metadata.json, with the details of your new operator, this can be hosted on <a href="https://gist.github.com" target="_blank">gist.github.com</a>, make sure to set as a public gist. Then get the `RAW` url. https://gist.githubusercontent.com/${USER}/${HASH}/metadata.json

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
# modify these for your keys and operator
METADATA_URI=https://path/to/metadata.json
OPERATOR_BLS_KEY_PASSWORD=
OPERATOR_ECDSA_KEY_PASSWORD=

# can leave
USER_HOME=/app
EIGENLAYER_HOME=/app
NODE_ECDSA_KEY_FILE_HOST=/app/operator_keys/opr.ecdsa.key.json
NODE_BLS_KEY_FILE_HOST=/app/operator_keys/opr.bls.key.json
```

Create the operator configuration file `operator.config.yaml`, this will be used in the registration step, and later by the AVS

```yaml
production: false

# change this to your operator address
operator_address: 0x8FE5235d4c6A6c0a47FaE67E58034390a772a1da

# below can be left
avs_registry_coordinator_address: 0x2513c8b9c7c021A73F34f18DccFDA15d462d7cD7 # registryCoordinator
operator_state_retriever_address: 0x055733000064333CaDDbC92763c58BF0192fFeBf # operatorStateRetriever
eth_rpc_url: https://ethereum-holesky-rpc.publicnode.com
eth_ws_url: wss://ethereum-holesky-rpc.publicnode.com
ecdsa_private_key_store_path: /app/operator_keys/opr.ecdsa.key.json
bls_private_key_store_path: /app/operator_keys/opr.bls.key.json
aggregator_server_ip_port_address: localhost:8090
eigen_metrics_ip_port_address: localhost:9090
enable_metrics: true
node_api_ip_port_address: localhost:9010
enable_node_api: true
register_operator_on_startup: false
token_strategy_addr: 0x80528D6e9A2BAbFc766965E0E26d5aB08D9CFaF9
avs_service_manager_addr: 0xFb309198FEf7Ea7BC1c1d10c0E7A37A0549EECc1 # BlocklessAVSServiceManager
```

**Opt-In** to the Blockless AVS by running the following command, assuming `Docker` is available.

```bash
  docker run --env-file /path/to/blockless-operator.env \
  --rm \
  --volume "/path/to/opr.ecdsa.key.json":/app/operator_keys/opr.ecdsa.key.json \
  --volume "/path/to/opr.bls.key.json":/app/operator_keys/opr.bls.key.json \
  --volume "/path/to/operator.config.yaml":/app/operator.config.yaml \
  ghcr.io/blocklessnetwork/blockless-avs-tools:v0.0.3 \
  --config /app/operator.config.yaml \
  register-operator-with-avs
```

**Opt-Out** of the Blockless AVS By Running the following command, assuming `Docker` is available. 

```bash
  docker run --env-file /path/to/blockless-operator.env \
  --rm \
  --volume "/path/to/opr.ecdsa.key.json":/app/operator_keys/opr.ecdsa.key.json \
  --volume "/path/to/opr.bls.key.json":/app/operator_keys/opr.bls.key.json \
  --volume "/path/to/operator.config.yaml":/app/operator.config.yaml \
  ghcr.io/blocklessnetwork/blockless-avs-tools:v0.0.3 \
  --config /app/operator.config.yaml \
  deregister-operator-with-avs
```
