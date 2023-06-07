# Overview

Blockless Triggers lets you easily automate both Blockless Functions or on-chain smart contracts. You can automatically trigger your functions or smart contracts based on a preset schedule, external events, or changes in smart contract states.

## Features

- Cron: Trigger your function or smart contract on a preset schedule.
- Webhook: Trigger your function or smart contract by external events.
- Keeper: Trigger your function or smart contract by smart contract state changes.

## Use Cases

1. Off-chain scheduling:
   1. Blockless Triggers allows for the scheduling of recurring tasks, such as data updates or contract state transitions, without the need for on-chain transactions.
   2. Increases efficiency and reduces the cost of these tasks.
2. External event triggering:
   1. Blockless Triggers' webhook feature allows for the creation of off-chain triggers that can be triggered by external events, such as changes in an API or a user's action on a website.
3. Automatic contract state transitions:
   1. Blockless Triggers' Keeper feature allows for the monitoring of smart contract states and the automatic triggering of state transitions based on predefined conditions.
   2. Increases automation and reduces the need for manual intervention.
4. Off-chain execution:
   1. Blockless Triggers executes the triggers off-chain, which reduces the need for expensive on-chain transactions and makes it cost-effective.
5. Flexibility:
   1. Blockless Triggers can be integrated with any smart contract platform and can be easily customized to meet the specific needs of any application.

## Use Case Scenarios

1. Update TWAP Oracles with off-chain data:
   1. Blockless Trigger allows for updates to TWAP oracles without the need for on-chain transactions, reducing gas costs and increasing the speed and efficiency of data updates.
   2. The platform uses off-chain computation to securely update oracle prices, ensuring that smart contract execution is based on the most current information.
2. Poke contracts for state check and transition to a new state if conditions are met:
   1. Blockless Trigger allows for the monitoring of smart contract states and the automatic triggering of state transitions based on predefined conditions. This can be used, for example, to close an auction contract and disburse funds at the end of the bidding period.
3. Process on-chain analytics:
   1. Blockless Trigger enables the processing and storage of on-chain analytics such as DeFi TVL data, in a database or graph protocol, without the need for on-chain transactions.
   2. This allows for faster and more cost-effective data storage and retrieval, making it possible to process large volumes of data in real-time.
4. Implement guards and protection:
   1. Blockless Trigger's off-chain execution model allows for the implementation of guards and protection mechanisms that can't be easily replicated on-chain.
   2. This can increase the security and robustness of smart contract systems.
5. Off-Chain Notifications for On-Chain events:
   1. Blockless Trigger can be configured to send off-chain notifications to users in response to specific on-chain events, such as changes in a user's borrow health or the occurrence of a liquidation.
   2. This allows for real-time updates and increases user engagement and retention.
