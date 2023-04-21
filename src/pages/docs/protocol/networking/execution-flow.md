# **Execution Flow**

The execution flow is the process of how the distributed system executes the code across the different machines. There are different types of execution flow that developers can use, including:

● Sequential: Different functions to be executed on different machines in

sequential order.

● Concurrent: Different functions to be executed on different machines at the same time.

● Parallel: The same function to be executed on different machines at the same time.

● Sequential + Parallel: Sequentially execute methods on different machines, while some or all methods are horizontally scaled to be executed on multiple machines at the same time.

## **Basic**

### **Sequential:**

Different methods to be executed on different workers in sequential order.

![Screen Shot 2022-10-10 at 9.03.41 PM.png](/docs/protocol/networking/Screen_Shot_2022-10-10_at_9.03.41_PM.png)

Proposed definition in execution flow manifest:

{

method_1, method_2, method_3 {

execution_flow: sequential;

// data I/O flow is defined in each method

}

}

### **Parallel:**

Executing the same method on multiple workers at the same time.

![Screen Shot 2022-10-10 at 9.17.46 PM.png](/docs/protocol/networking/Screen_Shot_2022-10-10_at_9.17.46_PM.png)

Definition in execution flow manifest:

{

method_1 {

execution_flow: parallel;

min_worker_count: num; //if the network has redundant resources, then the network can proactively scale up the shard.

}

}

## **Extended**

### **Sequential + Parallel**

: Sequentially execute methods on different workers, while some or all methods are horizontally scaled to be executed on multiple workers at the same time.

![Screen Shot 2022-10-10 at 9.23.04 PM.png](/docs/protocol/networking/Screen_Shot_2022-10-10_at_9.23.04_PM.png)

Definition of execution flow manifest:

{

method_1, method_2, method_3 {

execution_flow: sequential;

}

method_2 {

execution_flow: parallel;

min_worker_count: num;

}

}

### **Concurrent Execution**:

Similar to Parallel Execution Flow, except that multiple methods will be executed on multiple workers at the same time.

![Screen Shot 2022-10-10 at 9.27.04 PM.png](/docs/protocol/networking/Screen_Shot_2022-10-10_at_9.27.04_PM.png)

Definition in execution flow manifest:

{

method_1, method_2, method_3, method_4 {

execution_flow: sequential;

}

method_2, method_3 {

execution_flow: concurrent;

}

}