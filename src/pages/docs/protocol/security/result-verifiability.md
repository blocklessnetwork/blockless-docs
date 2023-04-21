# Blockless Result Verifiability Overview

In an open and trustless system, we must ensure verifiability of the execution by each participant. In Blockless, the execution of WASM functions is verified with state-machine replication and/or zk-SNARK proofs.

Replication means to have multiple machines to execute the same task, so the user can expect the results coming from the majority of the machines can be trusted.

However, different systems and business logic they aim to support can have very different requirements. For instance, in a financial application where millions of dollars are at stake, it will likely want as much security and assurance as possible for the underlying compute and executions. The company would often sacrifice performance for security.

On the other hand, if one is to build an automation system that needs to update smart contracts based on real-world events, he might want to have extremely fast execution by directly using the result from the worker that responded the fastest. The security mechanism with hundreds of nodes performing global consensus would simply not work in this context.

With this in mind, at Blockless we allow developers to fully customize the degree of verifiability regarding how workers serve various unique applications.