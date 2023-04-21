# **Execution Node Selection Algorithm Overview**

The central algorithm can be condensed into the following steps:

1. Calculate the suitability score for each computer based on the specified filters.
2. Execute a simulated annealing process to select computers according to their suitability scores.

The suitability score ($S$) for each computer is calculated using the formula:

$$
S_i = ∑f_k(v_(i, k))
$$

where:

$i$  denotes the index of a computer
$k$  denotes the index of a filter
$v_(i, k)$  represents the value of the k-th filter for the i-th computer
$f_k$  is a function that maps the k-th filter value to a score (either 0 or 1)

The function $f_k$  is contingent on the filter value type:

- If the filter value is a boolean,  $f_k(v_(i, k)) = 1 if v_(i, k)$ matches the filter value, and 0 otherwise.
- If the filter value is an object with "min" and "max" properties, $f_k(v_(i, k)) = 1 if v_(i, k)$ is within the specified range, and 0 otherwise.

The simulated annealing process encompasses the following formulas:

$$
ΔE = S_(i, candidate) - S_(i, current) 
$$

$$
P_accept = min(1, exp(-ΔE/T))
$$

where:

$S_(i, candidate)$  denotes the suitability score of a candidate computer
$S_(i, current)$ denotes the suitability score of the currently selected computer
$ΔE$  represents the difference in suitability scores between the candidate and the current computer
$T$  signifies the temperature, initially set to 10 and reduced by a factor of 0.99 per iteration
$P_accept$ denotes the probability of accepting the candidate computer

The algorithm iteratively selects a random candidate computer and calculates the acceptance probability. If a random number between 0 and 1 is less than the acceptance probability, the current computer is supplanted by the candidate computer. The temperature is reduced in each iteration to gradually converge toward the most suitable computer.

The algorithm integrates the concepts of suitability scores and simulated annealing to select computers based on user-defined filters. Suitability scores offer a quantitative assessment of each computer's adherence to the specified filters, while the simulated annealing process guarantees a balance between exploration (discovering diverse solutions) and exploitation (refining the best solution found thus far).

Initially, the algorithm calculates the suitability scores for all computers based on the provided filters.

The simulated annealing process then commences, involving the iterative selection of random candidate computers and comparing their suitability scores to the current computer. The candidate computer may supplant the current computer based on the acceptance probability, which is influenced by the temperature parameter.

As the temperature diminishes, the algorithm becomes increasingly inclined to accept only candidate computers with superior suitability scores, eventually converging to the most suitable computer. This methodology ensures that the algorithm can explore various computers before settling on the optimal choice according to the specified filters. This approach effectively balances the exploration and exploitation aspects of the selection process, leading to an efficient and robust computer selection algorithm.

# **Execution Node Selection Workflow Overview**

This diagram shows the process of filtering computers in the Blockless network based on selection criteria to create a list of eligible computers.

![Untitled](/docs/protocol/networking/Untitled.png)

This selection process is a method for choosing the best computer out of a list of options based on certain criteria or filters.

The process involves filtering the list of computers based on the filters (capacity requirements) provided by the user. Then, the temperature is set and a loop is initiated to select computers from the filtered list.

Within the loop, a candidate computer is randomly selected and compared to the current computer in terms of suitability score based on the filters.

The temperature affects the acceptance criteria for the candidate computer, allowing for more exploration of options at higher temperatures.

The acceptance probability of the candidate computer replacing the current computer is calculated, and if it meets the acceptance criteria, the current computer is updated to the candidate computer and added to the filtered computers list.

The suitability score of a computer is calculated based on how many filters match the computer's values, and the compareValues function checks if a value is within the range specified by the filter.

The process continues until the temperature reaches a minimum and the best computer based on the filters is selected.