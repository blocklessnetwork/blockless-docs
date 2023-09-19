# Node Selection

In the Blockless Networking (b7s) module, node selection is a crucial step that ensures the efficient and effective operation of nnApps. The selection process aims to identify the optimal network contributors from a pool of devices, taking into account various user-defined filters such as computational capacity, storage availability, and network latency.

Once the selection process is complete, a group of optimal nodes is obtained. This node group serves as the input for the [distribution algorithm](./distribution.md), which randomly selects the requested number of nodes from the node group for the formation of a nnApp’s network.

In this section, we will focus on the node selection step, exploring the criteria and considerations involved in determining the most suitable nodes for a specific nnApp.

## Node Selection Algorithm

The node selection algorithm in the b7s module is built upon two primary components:

1. Calculating suitability scores: This step quantifies each node's adherence to user-defined filters, providing a numerical assessment of how well the node meets the specified criteria.
2. Applying a simulated annealing process: This step facilitates a balance between exploration (discovering diverse solutions) and exploitation (refining the best solution found thus far), ensuring a robust and efficient node selection process.

By integrating these two components, the node selection algorithm effectively navigates the search space, identifying the most appropriate node to handle a given task based on the specified filters. This approach ensures that the b7s module maintains high performance, responsiveness, and adaptability, enabling users to leverage the full potential of the distributed network.

### Suitability Score Calculation

The suitability score is a crucial component in the node selection algorithm, as it provides a quantitative measure of how well each computer in the pool aligns with the user-defined filters. This numerical assessment enables the algorithm to compare and rank computers based on their adherence to the specified criteria.

To calculate the suitability score ($S$) for each computer, the following formula is employed:

$$
S_i = ∑f_k(v_{(i, k)})
$$

In this formula:

- $i$ represents the index of a computer in the pool.
- $k$ denotes the index of a filter applied by the user (e.g., computational power, memory, or network latency).
- $v_{(i, k)}$ is the value of the k-th filter for the i-th computer, indicating how well the computer meets that particular filter's requirements.

The function $f_k$ maps the k-th filter value to a score, which can be either 0 or 1, depending on the filter value type:

1. **Boolean filters**: If the filter value is a boolean (e.g., whether a computer has a specific feature), the score is calculated as follows: $f_k(v_{(i, k)})=1$ if $v_{(i, k)}$ matches the filter value (i.e., the computer has the desired feature); otherwise, the score is 0.

2. **Range filters**: If the filter value is an object with "min" and "max" properties (e.g., a specified range for computational power), the score is calculated as follows: $f_k(v_{(i, k)})=1$ if $v_{(i, k)}$ falls within the specified range (i.e., the computer meets the minimum and maximum requirements); otherwise, the score is 0.

The suitability score calculation enables the node selection algorithm to assign a numerical value to each device based on how closely it adheres to the user's (nnApp’s) requirements. This quantitative assessment forms the foundation for the subsequent simulated annealing process, which searches for the most suitable device by balancing exploration and exploitation.

### Simulated Annealing Process

The simulated annealing process serves as an essential aspect of the node selection algorithm, facilitating the search for the most appropriate device in the pool while maintaining a balance between exploration and exploitation. This technique is grounded in two main formulas:

$$
ΔE = S_(i, candidate) - S_(i, current)
$$

$$
P_{accept} = min(1, exp(-ΔE/T))
$$

In these two formulas:

- $S_{(i, candidate)}$ denotes the suitability score of a randomly chosen candidate device.
- $S_{(i, current)}$ represents the suitability score of the currently selected device.
- $ΔE$ signifies the difference in suitability scores between the candidate and the current device.
- $T$ represents the temperature parameter, which begins at 10 and is reduced by a factor of 0.99 per iteration.
- $P_{accept}$ is the probability of accepting the candidate device as the new current device.

During the simulated annealing process, the algorithm iteratively selects a random candidate device and calculates its acceptance probability based on the difference in suitability scores and the current temperature. If a random number between 0 and 1 is less than the acceptance probability, the current device is replaced by the candidate device.

As the temperature decreases with each iteration, the algorithm becomes more inclined to accept candidate devices with higher suitability scores, eventually converging towards the most suitable device in the pool. This method ensures that the node selection algorithm can explore various devices before settling on the optimal choice according to the specified filters. The simulated annealing process effectively balances the exploration and exploitation aspects of the selection process, resulting in an efficient and robust device selection algorithm.

## Node Selection Process

Given the node selection algorithm, the network operates through the following stages to identify the most suitable device based on user-defined filters:

1. **Filtering**: Apply user-provided filters, such as computational power, storage, or network latency, to create a list of eligible devices that meet the specific requirements.

2. **Initial temperature**: Set the initial temperature (control) parameter and begin the loop. The temperature plays a crucial role in controlling the balance between exploration and exploitation in the simulated annealing process.

3. **Candidate selection**: Within the loop, randomly choose a candidate device and compare its suitability score with the current device's score. This comparison helps in evaluating the devices' adherence to the user-defined filters.

4. **Acceptance probability calculation**: Compute the acceptance probability for the candidate device, taking into account the temperature. The acceptance probability determines whether the candidate device is likely to replace the current device.

5. **Candidate acceptance**: If the acceptance criteria are met, meaning the candidate device has a higher probability of being suitable based on the user-provided filters, replace the current device with the candidate device.

6. **Loop repetition**: Continue the loop, gradually decreasing the temperature until it reaches a minimum value. As the temperature decreases, the algorithm becomes more selective, focusing on devices with higher suitability scores.

7. **Best device selection**: Upon reaching the minimum temperature, select the best device based on the user-defined filters, ensuring an optimal choice for the task at hand.

This algorithm effectively balances exploration (discovering a variety of potential solutions) and exploitation (refining the best solution identified thus far) to create an efficient and robust device selection process tailored to the user's specific requirements.
