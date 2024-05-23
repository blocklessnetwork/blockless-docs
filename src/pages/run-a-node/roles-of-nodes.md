# Roles of Nodes
There are two types of nodes that power the Blockless Network:

- **Orchestration Node**: These nodes run the orchestration algorithm, which automates the matchmaking between workloads and Worker Nodes, ensuring execution security and efficiency across the network. The number of Orchestration Nodes is limited to 70.
- **Worker Node**: These nodes contribute their available hardware resources to execute workloads, based on the automatic orchestration task distribution from the orchestration algorithm. The number of Worker Nodes is uncapped.

Distinct from traditional Proof-of-Stake blockchain networks, the Blockless Network does not depend on validator nodes for ledger-wide global consensus. Instead, it utilizes modular consensus modules. Only the Worker Nodes involved in executing a specific workload form a task-specific dynamic consensus or perform verification using zero-knowledge proof when a single Worker Node executes, to validate the accuracy and integrity of the execution process.