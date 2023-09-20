# Consensus and Result Verifiability

In an open and trustless system like Blockless, ensuring the correctness and verifiability of execution and data is paramount. To achieve this, Blockless verifies the execution of WASM code through a combination of consensus and zk-SNARK proofs.

## Consensus

However, different systems and applications may require varying levels of security and performance. To accommodate these diverse requirements in the production setting, Blockless offers several system-level consensus modules, including data aggregation (off-chain reporting), pBFT, and Raft. Developers can choose from these options based on the desired security and performance trade-offs.

For example, a financial application handling millions of dollars would prioritize security and assurance for its underlying computations and executions, often sacrificing performance. In contrast, an automation system updating smart contracts based on real-world events may require extremely fast execution, opting for the results from the quickest responding worker. In this context, a security mechanism involving global consensus among hundreds of nodes would not suffice.

## Result Verifiability

In addition to consensus, developers can choose to generate zk-SNARK proofs, which provide mathematical evidence for the validity and correctness of their execution and results. Blockless currently leverages zkWASM technology to generate zk-SNARK proofs directly from users' WASM binaries, uploading the generated zero-knowledge proofs to designated verifiers on-chain. This added layer of verifiability ensures that the integrity of the computations remains uncompromised, providing users with confidence in the accuracy and trustworthiness of the executed tasks.
