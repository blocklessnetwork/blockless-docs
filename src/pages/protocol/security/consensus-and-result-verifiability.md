# Consensus and Result Verifiability

In an open and trustless system like Blockless, ensuring the correctness and verifiability of execution and data is paramount. To achieve this, Blockless verifies the execution of WASM functions through a combination of state-machine replication (consensus) and zk-SNARK proofs.

## State-machine Replication

State-machine replication involves multiple machines executing the same task, allowing users to trust the results produced by the majority of machines. This is a common design used in the majority of blockchain networks.

However, different systems and applications may require varying levels of security and performance. To accommodate these diverse requirements in the production setting, Blockless Protocol offers several system-level consensus modules, including data aggregation (off-chain reporting), pBFT, and Raft. Developers can choose from these options based on the desired security and performance trade-offs.

For example, a financial application handling millions of dollars would prioritize security and assurance for its underlying computations and executions, often sacrificing performance. In contrast, an automation system updating smart contracts based on real-world events may require extremely fast execution, opting for the results from the quickest responding worker. In this context, a security mechanism involving global consensus among hundreds of nodes would not suffice.

## Result Verifiability

In addition to state-machine replication, developers can choose to generate zk-SNARK proofs, which provide mathematical evidence for the validity and correctness of their execution and results. Blockless leverages zkWASM technology to generate zk-SNARK proofs directly from users' WASM binaries, uploading the generated zero-knowledge proofs to designated verifiers on-chain. This added layer of verifiability ensures that the integrity of the computations remains uncompromised, providing users with confidence in the accuracy and trustworthiness of the executed tasks.
