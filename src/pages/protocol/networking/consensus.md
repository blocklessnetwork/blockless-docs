# Dynamic Consensus

Blockless introduces a dynamic and pluggable consensus mechanism, offering a modular approach to consensus formation in P2P networks.

Simply put, nnApp developers can choose from various consensus schemes, such as data aggregation, pBFT, Raft, or ZK, and apply them to their dedicated, specialized network built with Blockless. This approach provides optimal security and flexibility for each and every particular workload a nnApp may require.

This dynamic consensus design enables developers to adapt different consensus models based on the task, network conditions, requirements, and preferences. As a result, the network maintains efficiency, security, and scalability while accommodating diverse use cases and applications.

Built on top of the [libp2p](https://docs.libp2p.io/) stack, the dynamic consensus mechanism benefits from a robust and modular foundation for P2P communication. Nodes use libp2p to establish direct connections with other nodes in the network, which facilitates efficient and secure data exchange.

Leveraging this innovative consensus mechanism, nodes can engage in dynamic consensus formation, following rules and protocols specified by the chosen consensus model. This process unfolds in several steps:

1. The nnApp developer outlines the preferred consensus model for a particular task within the configuration file.
2. Based on these specifications, nodes (based on the consensus mechanism, nodes can be execution nodes or stand-alone consensus nodes) create direct connections and ready themselves for consensus formation.
   Each node executes the consensus within a newly instantiated runtime environment, ensuring secure and efficient processing.
3. Following several rounds of interaction, the nodes reach a consensus result.

Upon reaching a consensus, nodes return the results according to the flow dictated by the consensus model. This may involve sharing results with other nodes, updating local data structures, providing consensus proof to a data availability (DA) layer, or initiating additional processes and actions.

## Advantages of the Dynamic Consensus Design

A dynamic consensus mechanism offers several benefits for nnApps:

- **Flexibility**: By enabling tasks to dynamically adopt various consensus models, the mechanism ensures optimal performance and functionality based on specific needs and network conditions of the nnApp.
- **Scalability**: The capacity for nodes to adapt consensus models dynamically contributes to the nnApp's growth and resilience, promoting overall scalability.
- **Customizability**: Thanks to its modular design, the pluggable consensus mechanism empowers nnApp developers to create and implement bespoke consensus models that cater to distinct requirements and use cases.

## Implementation of the Dynamic Consensus

Blockless takes a randomized approach for implementing dynamic consensus mechanisms for nnApps. This implementation approach offers several advantages for task execution and resilience within the Blockless Network:

- **Targeted Node Selection**: The process broadcasts a roll call message with specific attribute requirements, ensuring that only nodes possessing the necessary capabilities and resources participate in consensus formation. This optimizes network performance, particularly for resource-intensive consensus/validation protocols like zero knowledge.
- **Dynamic Cluster Formation**: The selection and roll call process allows for the dynamic creation of clusters based on execution factors, such as the number of nodes, failover and resiliency types, and consensus factors. This adaptability caters to varying task requirements and network conditions.
- **Resilience and Failover**: By accounting for failover and resiliency types, the randomized selection-based process enables the consensus subnetwork to maintain operational efficiency and recover from node failures or disruptions.
- **Customizable Consensus Topology**: During task execution, nodes adhere to the requested consensus topology, providing flexibility and adaptability for different use cases and network requirements.
