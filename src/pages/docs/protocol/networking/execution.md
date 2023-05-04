# Execution Process Overview

Following the completion of the selection and distribution phases, the task is prepared for execution. This signifies the commencement of the task life cycle's second stage: execution and consensus.

## Acquiring the Execution Binary

During the selection phase, a roll call is initiated before the suitability score calculation and simulated annealing process take place. The task message, along with the task manifest containing the bundle address (IPFS CID), is broadcasted across the network using the gossip protocol. Nodes that have successfully passed the self-audit and are deemed qualified for execution proceed to join the roll call sequence.

Prior to adding the nodes to the selection and distribution queue, or the roll call queue, the presence of the execution binary cache on the node's local machine is checked. If the cache is not available, the node retrieves the execution binary from IPFS. Once completed, the node can participate in the roll call, as well as the ensuing selection and distribution processes.

## Launching the Execution Binary

Once a node is selected based on the task criteria and receives execution rights from the distribution phase, a dedicated runtime environment is established for this specific task. After the execution is finished, the runtime environment is promptly terminated.

For a comprehensive understanding of the Blockless Runtime Environment, please refer to the [Runtime Environment section](../runtime.md).
