# Node Communication

Having outlined the overall process of the networking procedures involved in a task's life cycle, such as selection and distribution, we now introduce the fundamental component that enables all of the mechanisms described in the networking section.

Blockless Network is built upon the GossipSub Peer-to-Peer (P2P) communication protocol, which combines both gossip protocol and mesh-based routing.

This protocol involves exchanging messages between nodes within a mesh sub-network and periodically gossiping with nodes outside the mesh sub-network. This approach ensures efficient and reliable message dissemination among nodes.

## Message Propagation Model

In the Blockless Network, message propagation can be represented using a mathematical model that takes into account various factors affecting the speed and efficiency of information exchange. The equation for this model is as follows:

$Propagation_Time = Base_Delay + RTT * log(N) / log(D)$

where:

- $Propagation_Time$ represents the duration required for a message to propagate through the network.
- $Base_Delay$ accounts for the inherent delay in the GossipSub protocol, encompassing message encoding, decoding, and processing.
- $RTT$ (Round-Trip Time) denotes the average duration for a message to travel from one node to another and back, reflecting the network's latency.
- $N$ stands for the total number of nodes present in the network.
- $D$ refers to the average node degree, which is the average number of neighbors a node has in the network.

## Node Communication Implementation

Blockless' general communication implementation is comprised of several steps, each contributing to the overall efficiency, integrity, and performance of the network:

1. **Peer discovery**: As a new node joins the network, it needs to discover other nodes to establish communication channels. This discovery process relies on the Distributed Hash Table (DHT) and additional discovery mechanisms. After identifying a set of root peers, the node proceeds to establish connections with them.

2. **Message publishing**: Nodes within the network can publish messages, initially sending them to their connected peers. The recipient peers then forward the message to a subset of their own connected peers, enabling the message to propagate throughout the network until it reaches all participating nodes.

3. **Message validation**: In order to preserve the network's integrity, nodes validate incoming messages before forwarding them. This validation process examines the message format and verifies the sender's authorization to publish the message. This effectively prevents spam and malicious content from spreading throughout the network.

4. **Message aggregation**: Blockless employs a message aggregation scheme to optimize network efficiency by reducing redundancy and conserving bandwidth. Nodes maintain a record of previously encountered messages and only forward new messages to their peers.

5. **Peer scoring**: Blockless incorporates a peer scoring system to monitor node behavior and penalize misbehaving nodes. Nodes receive scores based on their performance and adherence to network protocols. If a node's score falls below a specified threshold, it may be disconnected from the network to maintain overall performance and security.

6. **Fanout control**: To manage network traffic and prevent excessive message propagation, Blockless utilizes a fanout mechanism. Nodes forward messages to a limited number of their connected peers, ensuring efficient message dissemination without overburdening the network.
