# Blockless Deployment Flow Overview

Blockless incorporates a two-stage deployment process for assemblies onto a network that uses the IPFS GossipSub protocol. This process involves notifying the network of deployments through the protocol, allowing nodes to pre-cache distributable images, and finally executing the assembly through a separate mechanism. We will also present an equation from the GossipSub protocol to illustrate the propagation of deployment messages.

## Two-Stage Deployment Process:

### **Stage 1: Alerting the Network and Pre-Caching Distributable images**

1. Publish a deployment message (D_msg) to the GossipSub network, containing metadata about the assembly (A) and its distributable content (C).
2. The network nodes receive the deployment message and decide whether to pre-cache the distributable content based on their resource availability and relevance.
3. Nodes that choose to pre-cache the content will fetch it from the publisher or other nodes that have already cached it.

### **Stage 2: Assembly Execution**

Publish an execution message (E_msg) to the GossipSub network, containing instructions for executing the assembly.

Nodes that have pre-cached the assembly's distributable content will execute the assembly following the instructions provided in the execution message.

The GossipSub protocol is based on a combination of gossip and mesh-based routing. The protocol involves exchanging messages between nodes within a mesh network and periodically gossiping with nodes outside the mesh network.

Message propagation in GossipSub can be modeled using the following equation:

$Propagation_Time = Base_Delay + RTT * log(N) / log(D)$

where:

- $Propagation_Time$ is the time it takes for a message to propagate through the network.
- $Base_Delay$ is the inherent delay in the GossipSub protocol, including message encoding, decoding, and processing.
- $RTT$ (Round-Trip Time) is the average time it takes for a message to travel from one node to another and back.
- $N$ is the total number of nodes in the network.
- $D$ is the average node degree (i.e., the average number of neighbors a node has in the network).

## Deploying Assemblies Using GossipSub for Optimized Network Distribution

The two-stage deployment process leverages the IPFS GossipSub protocol to efficiently distribute assemblies across the network. By initially alerting the network of the deployment and allowing nodes to pre-cache the distributable content, the process reduces the load on the network during the actual execution phase. This approach enables a more efficient and scalable distribution of assemblies in a decentralized network environment.

The GossipSub protocol's message propagation properties, as modeled by the equation provided, ensure that deployment and execution messages are disseminated quickly and reliably across the network. This allows nodes to make informed decisions regarding pre-caching and executing assemblies based on their resource availability and relevance.

The deployment process and GossipSub-based message propagation can be applied in various decentralized systems, such as distributed computing platforms, content delivery networks, and other peer-to-peer applications that require efficient and scalable distribution of resources and tasks.