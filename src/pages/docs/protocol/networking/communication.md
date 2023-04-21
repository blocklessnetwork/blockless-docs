# Execution Node Communication

The Execution Network in Blockless is a Gossipsub-based P2P network that executes tasks in WASM
binary bundles. A general communication flow in the Blockless worker network operates
as follows:

1. Peer discovery: When a node joins the network, it needs to discover other nodes
in the network to communicate with. This is accomplished using the Distributed
Hash Table (DHT) and other discovery mechanisms. Once a node has
discovered a set of peers, it establishes connections with them.
2. Message publishing: When a node wants to publish a message, it first sends it to
its connected peers. Each peer then forwards the message to a subset of its own
connected peers. This process continues until the message has been forwarded
to all nodes in the network.
3. Message validation: Before forwarding a message, a node first validates it to
ensure that it conforms to the expected format and that the sender is authorized
to publish it. This is done to prevent spam and malicious content from spreading
through the network.
4. Message aggregation: To reduce redundancy and bandwidth usage, Gossipsub
uses a message aggregation scheme. Nodes keep track of which messages they
have already seen and only forward new messages to their peers.
5. Peer scoring: The Worker network has a peer scoring system to identify and
penalize nodes that are misbehaving. Nodes are assigned a score based on their
behavior, and if their score falls below a certain threshold, they may be
disconnected from the network.
6. Fanout: Gossipsub uses a fanout mechanism to control the number of peers a
message is forwarded to. Nodes only forward messages to a limited number of
their connected peers, which helps to prevent excessive network traffic.