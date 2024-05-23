# Slashing	

## Orchestration Node
These nodes will be penalized for double-signing, resulting in their permanent removal from the node set and a 10% penalty on their staked amount. There is no slashing for downtime, nor are rewards distributed during periods of downtime.

## Worker Node
Worker Nodes do not face slashing on their staking principal. The [Blockless Secure Runtime](../protocol/runtime) and [Fault Tolerance](../protocol/core-concepts#fault-tolerance) mechanisms are designed to maintain continuous correct operation, even in the event of malicious attacks or disruptions. 

However, slashing does occur on the service rewards if a node’s trust score, as defined in the [Node Ranking](../protocol/nodes/ranking.md), falls below the threshold level, which is determined based on historical performance aligned with the Service Level Agreement (SLA). The slashed stakes are confiscated and redistributed to the communal staking reward pool. 

Worker Nodes will not be slashed for downtime.

Worker Nodes that consistently fail in dynamic consensus or attach incorrect zero-knowledge proofs will receive low rankings, negatively impacting their trust score. This will result in their deprioritization in the selection process for future tasks.
