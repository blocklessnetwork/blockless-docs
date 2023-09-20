# Secret Management

Blockless employs a robust secret management system to securely store and retrieve sensitive data required for nnApps. This system is built on a combination of threshold signature Multi-Party Computation (MPC) networks and decentralized storage technologies, ensuring both confidentiality and integrity.

## Multi-Party Computation Network

A threshold signatures Multi-Party Computation (MPC) Network is a decentralized network of microcontrollers that communicate with each other and store data securely in a tamper-proof manner. The MPC Network facilitates the secure storage and retrieval of sensitive information, ensuring that only authorized parties can access this data during WASM archive execution. This network leverages the power of threshold signatures to protect the sensitive data, requiring a minimum number of participants to cooperate and produce a valid signature or decrypt the data. This approach further enhances the security and resilience of the system against attacks and unauthorized access.

## Decentralized Storage

Blockless incorporates decentralized storage solutions like the InterPlanetary File System (IPFS) to securely store secrets while preserving their integrity. When users upload confidential information—such as private keys, API keys, or other sensitive data necessary for WASM archive execution—the data is encrypted and uploaded to the designated decentralized storage location. This approach ensures secure storage of sensitive information, providing enhanced protection against data breaches, tampering, and unauthorized access.

## Secret Retrieval and Execution

When the user’s WASM binary is executed, it requests the necessary secrets from the MPC network. The MPC network retrieves the encrypted secrets from the decentralized storage and decrypts them using the appropriate encryption key. The decrypted secrets are then provided to the WASM binary for execution.

## Security and Tamper-Proofing

Blockless's secret management system ensures that sensitive information is stored securely and can only be accessed by authorized parties. The decentralized nature of the MPC Network and decentralized storage guarantees a tamper-proof system resistant to attacks, providing users with confidence in the secure handling of their sensitive data.
