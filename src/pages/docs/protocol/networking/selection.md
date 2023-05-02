# Node Selection

Node selection is a critical aspect of the Blockless Networking (b7s) module, as it determines the optimal network contributor (node) to execute tasks efficiently and effectively. The selection process aims to identify the most suitable node from a pool of devices, considering various user-defined filters, such as computational capacity, storage availability, and network latency.

The node selection algorithm in the b7s module is built upon two primary components:

1. Calculating suitability scores: This step quantifies each node's adherence to user-defined filters, providing a numerical assessment of how well the node meets the specified criteria.
2. Applying a simulated annealing process: This step facilitates a balance between exploration (discovering diverse solutions) and exploitation (refining the best solution found thus far), ensuring a robust and efficient node selection process.

By integrating these two components, the node selection algorithm effectively navigates the search space, identifying the most appropriate node to handle a given task based on the specified filters. This approach ensures that the b7s module maintains high performance, responsiveness, and adaptability, enabling users to leverage the full potential of the distributed network.

## Suitability Score Calculation

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

Here, $i$ represents the index of a computer, $k$ denotes the index of a filter, and $v_{(i, k)}$ is the value of the k-th filter for the i-th computer. The function $f_k$ maps the k-th filter value to a score (either 0 or 1), depending on the filter value type:

If the filter value is a boolean, $f_k(v_{(i, k)}) = 1$ if $v_{(i, k)}$ matches the filter value; otherwise, it equals 0.
If the filter value is an object with "min" and "max" properties, $f_k(v_{(i, k)}) = 1$ if $v_{(i, k)}$ falls within the specified range; otherwise, it equals 0.

## Simulated Annealing Process

The simulated annealing process involves the following two formulas:

$$
ΔE = S_(i, candidate) - S_(i, current)
$$

$$
P_{accept} = min(1, exp(-ΔE/T))
$$

Here, $S_{(i, candidate)}$ and $S_{(i, current)}$ represent the suitability scores of the candidate and current computers, respectively. The difference in suitability scores is denoted by $ΔE$, while $T$ signifies the temperature, which starts at 10 and decreases by a factor of 0.99 per iteration. The acceptance probability of the candidate computer is represented by $P_{accept}$.

The algorithm iteratively selects a random candidate computer and calculates the acceptance probability. If a random number between 0 and 1 is less than the acceptance probability, the current computer is replaced by the candidate computer. The temperature is reduced in each iteration to gradually converge toward the most suitable computer.

## Node Selection Workflow

1. Filter the list of computers based on user-provided filters.
2. Set the initial temperature and initiate the loop.
3. Within the loop, randomly select a candidate computer and compare its suitability score to that of the current computer.
4. Calculate the acceptance probability of the candidate computer based on the temperature.
5. If the acceptance probability is met, replace the current computer with the candidate computer.
6. Repeat the loop until the temperature reaches a minimum value.
7. Select the best computer based on the filters.

This algorithm effectively balances exploration (discovering diverse solutions) and exploitation (refining the best solution found so far), ultimately resulting in an efficient and robust computer selection process.
