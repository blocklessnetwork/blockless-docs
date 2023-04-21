# Blockless Network Node Types

## Orchestration Nodes

Orchestration Nodes maintain a blockchain ledger and achieve consensus on the ranking and selection of Execution Nodes for various tasks. They decide which group of Execution Nodes should perform each task based on user requirements and past performance.

## Execution Nodes

Execution Nodes are computers that contribute hardware resources and perform computations. Devices with better internet connections and more hardware resources receive more tasks and rewards over time. Thanks to the lightweight nature of the Blockless Run software (powered by WASM+WASI), any device connected to the internet and capable of running a web browser can become a Blockless Node.

However, not all devices will be consistently online as some users may disconnect from the network when they close their laptops. To ensure service stability, Blockless Execution Nodes are further classified into Full Nodes and Lite Nodes.

Full Nodes are expected to serve the network under a timed service level agreement (SLA), or they will be penalized. Lite Nodes can join and leave the network freely. Full Nodes are prioritized for task assignments to ensure service quality, while Light Nodes provide redundancy and enhance the network's robustness.