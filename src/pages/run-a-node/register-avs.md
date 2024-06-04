# Register Blockless Worker as an AVS node.

This guide is broken down into two parts.

1. Setting up an EigenLayer Operator
2. Registering the Operator for Blockless AVS

You may skip part 1 if you already have an Operator registered with EigenLayer Holskey.

## From Scratch Operator setup

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

