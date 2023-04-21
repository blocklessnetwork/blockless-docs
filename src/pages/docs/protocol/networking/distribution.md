# Blockless **Task Distribution Algorithm**

The algorithm employs a Greco-Latin square distribution approach to evenly distribute tasks across computers while respecting resource constraints. By arranging tasks in an n x n matrix, the algorithm ensures that each computer receives a balanced workload.

Upon receiving a set of tasks, the algorithm iteratively evaluates their compatibility with each computer based on the available resources. Compatible tasks are assigned to the corresponding computer, while incompatible tasks are queued for future assignment.

Finally, the algorithm flattens the distribution matrix into a result object, returning both the assigned tasks and any remaining queued tasks. This approach allows for efficient allocation of tasks to computers, ensuring a balanced workload while accounting for resource constraints.

The core algorithm can be summarized into the following steps:

1. Initialize the result object and a queued tasks list.
2. Create a distribution matrix of size n x n, where n is the number of computers.
3. Fill the matrix with compatible tasks while keeping track of resource constraints.
4. Flatten the matrix and return the distributed tasks and queued tasks.

## Matrix Construction and Task Distribution:

Given n computers, let M be an n x n matrix such that:

$M = [m_ij], where i = 1, ..., n and j = 1, ..., n$

where each element m_ij is a list of tasks.Algorithm Application:

1. For each task T in the tasks list, determine if it is compatible with the current computer $(C_i)$. A task is compatible if, for all attributes ($A$) and corresponding values ($V$), the computer's attribute value is greater than or equal to the task's attribute value:
    
    isCompatible$(T, C_i) = ∀(A, V) ∈ T: C_i[A] ≥ V$
    
2. If the task is compatible, add it to the matrix's corresponding row and column based on the current row index: 
    
    $M[currentRow][(currentRow n)].push(T)$
    
3. If the task is not compatible, add it to the queued tasks list.
4. Increment the current row index:
    
    $currentRow = (currentRow + 1) % n$
    
5. Flatten the matrix and return the distributed tasks and queued tasks as a tuple.

# **Task Distribution Flow Overview**

Distribution Diagram - this diagram shows how the list of tasks is distributed to the list of eligible computers.

![Untitled](/docs/protocol/networking/distributionUntitled.png)

The task distribution process is a way to allocate a list of tasks to a set of computers based on certain attributes associated with each computer. The inputs to this process are the list of tasks and a list of computers, along with their associated attributes.

The process initializes an empty array for each computer to store the tasks it will perform. Then, it shuffles the list of tasks to ensure that they are distributed randomly.

Next, it enters a loop where it selects the next task in the shuffled list and a computer to assign it to. The computer is chosen randomly based on its index and a random number.

Once a computer is selected, the process checks whether the task's attribute requirement is less than or equal to the selected computer's attribute. If the computer's attribute meets the requirement, the task is added to that computer's array of tasks to perform.

This loop continues until all tasks have been assigned to a computer. Finally, the process returns the mapping of each computer to the tasks it will perform.