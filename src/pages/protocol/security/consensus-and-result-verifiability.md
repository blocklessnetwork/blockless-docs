# Blockless Secret Management

![General Architecture.jpg](/docs/protocol/security/General_Architecture.jpg)

The Blockless Network uses a general MPC Network to store secrets and retrieve them for the execution of the WASM archive. A MPC Network is a decentralized network of microcontrollers that can communicate with each other and store data in a secure and tamper-proof manner. 

We use blockchain storage, such as IPFS, to store the secrets securely and ensure their integrity. The process starts with the user uploading the secret data to the blockchain storage. This data can be any confidential information, such as private keys, API keys, or other sensitive data required for the execution of the WASM archive. The secret data is then encrypted and stored on the blockchain, ensuring its confidentiality.

When the WASM archive is executed, it requests the required secrets from the MPC Network. The MPC Network retrieves the secrets from the blockchain storage and decrypts them using the appropriate encryption key. The decrypted secrets are then provided to the WASM archive for execution.

This process ensures that sensitive information is stored securely and can only be accessed by authorized parties. The decentralized nature of the MPC Network and blockchain storage ensures that the system is tamper-proof and resistant to attacks.