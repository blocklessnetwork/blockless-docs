# Deployment and Execution

Upon the conclusion of the selection and distribution phases, the task is ready for deployment and execution.

Blockless utilizes a two-stage deployment and execution process, allowing the execution binary to be efficiently installed and run on a set of randomly selected devices for a nnApp. This process first involves the notification of deployments, which initiates a pre-cache procedure. Subsequently, a runtime environment is instantiated for task execution.

## Acquiring the Execution Binary (Pre-Cache)

During the selection phase, a roll call is initiated before the suitability score calculation and simulated annealing process take place. The task message ($D_{msg}$), along with the task manifest ($A$) containing the bundle address (IPFS CID) and content ($C$), is broadcasted across the network using the GossipSub protocol.

Prior to adding the nodes to the selection and distribution process, or the roll call queue, the presence of the execution binary cache on the node's local machine is checked.

If the cache is not available, the node retrieves the execution binary from either publisher (IPFS by default) based on the task message or from the nearby nodes. Once completed, the node can participate in the roll call, as well as the ensuing selection and distribution processes.

## Launching the Execution Binary

Once a node is selected based on the task criteria and receives execution rights from the distribution phase, a dedicated runtime environment is established for this specific task. After the execution is finished, the runtime environment is promptly terminated.

For a comprehensive understanding of the Blockless Runtime Environment, please refer to the [Runtime Environment section](../runtime.md).
