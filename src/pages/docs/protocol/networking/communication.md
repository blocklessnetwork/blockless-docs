# Node Communication

The Execution Network in Blockless is a vital component that facilitates task execution in the form of WebAssembly (WASM) binary bundles. This network is built upon the Gossipsub-based Peer-to-Peer (P2P) communication protocol, which enables efficient and reliable message dissemination among nodes. The general communication flow in the Blockless worker network consists of several steps:

1. **Peer discovery**: When a new node joins the network, it must discover other nodes to establish communication channels. This discovery process is achieved using the Distributed Hash Table (DHT) and additional discovery mechanisms. Upon identifying a set of peers, the node proceeds to establish connections with them.

2. **Message publishing**: Nodes in the network can publish messages, which are initially sent to their connected peers. The receiving peers then forward the message to a subset of their own connected peers, propagating the message throughout the network until it reaches all participating nodes.

3. **Message validation**: To maintain the integrity of the network, nodes validate incoming messages before forwarding them. This validation process checks the message format and verifies the sender's authorization to publish the message, effectively preventing spam and malicious content from spreading across the network.

4. **Message aggregation**: Gossipsub employs a message aggregation scheme to optimize network efficiency by reducing redundancy and conserving bandwidth. Nodes maintain a record of previously encountered messages and only forward new messages to their peers.

5. **Peer scoring**: The Blockless worker network incorporates a peer scoring system to monitor node behavior and penalize misbehaving nodes. Nodes are assigned scores based on their performance and adherence to network protocols. If a node's score falls below a specified threshold, it may be disconnected from the network to maintain overall performance and security.

6. **Fanout control**: To regulate network traffic and prevent excessive message propagation, Gossipsub utilizes a fanout mechanism. Nodes forward messages to a limited number of their connected peers, ensuring efficient message dissemination without overwhelming the network.
