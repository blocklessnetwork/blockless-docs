# **Execution Node Ranking Algorithm**

The Elo rating system, developed by Hungarian-born American physicist Arpad Elo, has been widely used for ranking players in two-player games such as chess. It is a relative skill-based rating system that measures the likelihood of a player winning a game against another player. In this research paper, we aim to expand on the Elo rating system and discuss its potential application for ranking computers based on their attributes and outcomes of computing.

## Adapting Elo's System for Computer Ranking in Blockless:

To effectively apply the Elo rating system to rank computers, it is essential to understand the key components of the system and adapt them accordingly to suit the context of computer performance. The following steps are proposed:

1. **Defining attributes and outcomes of computing:** The first step involves identifying the relevant attributes and outcomes of computing that can be used to compare and rank computers. These may include factors such as processing power, memory capacity, energy efficiency, and overall performance in benchmark tests.
2. **Pairwise comparison:** Like the original Elo rating system, the adapted method will require pairwise comparison of computers. To achieve this, a set of standardized tasks or benchmarks should be defined, which can be used to compare the performance of two computers in a head-to-head contest.
3. **Performance expectation and updating ratings:** Following the Elo rating system's principles, each computer's performance expectation is calculated based on their current ratings. After the head-to-head comparison, the ratings are updated according to the actual outcome of the comparison, taking into account the performance expectation.

The ranking process should be iterative, with computers continuously compared in different combinations. This will help to refine their ratings and ensure that the ranking remains up to date as new models and technologies emerge.

## Advantages of Applying Elo's System to Computer Ranking:

1. **Dynamic ranking**: The Elo rating system is inherently dynamic, which makes it suitable for ranking computers that are constantly evolving in terms of technology and performance. The system can easily adapt to the introduction of new models and changing performance levels.
2. **Objective comparison**: The pairwise comparison approach allows for a more objective comparison between computers, as it directly measures their performance in head-to-head contests. This can help to reduce the influence of subjective factors and marketing claims on the ranking process.
3. **Customizable criteria**: The Elo rating system can be customized to suit specific needs, by incorporating additional attributes and outcomes of computing or weighting them differently. This allows for a tailored ranking system that can address the specific requirements of different users or industries.
4. **Versatility**: The Elo rating system can be applied to rank computers across various segments and categories, from personal computers to high-performance computing clusters. This versatility makes it a valuable tool for evaluating and comparing computing performance across a wide range of applications. Integrating Completeness of Computing, Time of Response, and Machine Attributes in the Algorithm

$$
RNew_A=RCurrent_A+K×(ActualScore_A-(1/(1+10^( (RCurrent_B-RCurrent_A)/400))))
$$

## Adapting the Total Points Algorithm for Evaluating Computing Performance:

The given algorithm is a generic scoring system used to compute the total points based on various factors. In this section, we will adapt the algorithm to evaluate computing performance considering the completeness of computing, time of response, and machine attributes matching compute requests. We will also discuss the algorithm's applicability in the context of computing performance assessment.

The adapted algorithm for evaluating computing performance can be represented as follows:

$Total_Points=0$
$Total_Points=Total_Points+Position_P oints(P)$
$Total_Points=Total_Points+(S*Stage_W in_P oints)$
$Total_Points=Total_Points+Laps_Led_Points(L)$
$Total_Points=Total_Points+Playoff_Points$

where:

- $Completeness_Points(C)$ represents the points awarded for the completeness of computing tasks.
- $Response_Time_Points(T)$ represents the points awarded based on the time of response.
- $Attribute_Match_Points(A)$ represents the points awarded for the machine attributes that match compute requests.
- $Bonus_Points$  represents additional points based on other relevant factors.

## Algorithm Application to Computing Performance Assessment:

The adapted algorithm allows for the evaluation of computing performance using a comprehensive scoring system. The various components of the algorithm are explained:

1. **Completeness of Computing** $(C)$: This factor measures the extent to which a computer can perform a given set of tasks. The algorithm assigns points based on the percentage of tasks completed successfully. A higher percentage of task completion results in more points, indicating better performance.
2. **Time of Response** $(T)$: The time of response is a crucial factor in assessing the performance of a computer. The algorithm assigns points inversely proportional to the time taken to complete tasks, with faster response times receiving higher points. This rewards computers that can deliver results more quickly.
3. **Machine Attributes Matching Compute Requests** $(A)$: In addition to the completeness of computing and response time, the algorithm also considers the relevance of the computer's attributes to the specific compute requests. Points are awarded for each attribute that matches the compute request requirements, with a higher total indicating a better-suited computer for the given tasks.
4. **Bonus Points:** The algorithm may include additional bonus points based on other relevant factors that influence computing performance. These factors can be tailored to specific use cases or industries, allowing the algorithm to be customized as needed.

# **Execution Node Ranking Flow Overview**

This diagram shows how the Elo ranking of Execution Nodes is updated based on their results.

![Untitled](/docs/protocol/nodes/Untitled.png)

The process of updating the Elo ranking involves several steps that can be objectively described.

Firstly, the tasks are grouped into a map, with each task associated with its respective results. This enables the tracking of the different types of tasks performed and their outcomes.

Secondly, the results are reduced into another map, with each result linked to the computer that executed it. This step determines which computer performed each task and how well they performed it.

To calculate the Elo ranking for each computer, the results for each computer are retrieved, and the average performance score is calculated.

If a computer has not performed any tasks, its Elo ranking is not decreased. This is because the lack of tasks performed does not necessarily indicate a weaker performer but a lack of opportunity to perform tasks.

Once the average performance score for each computer is calculated, it is used to update the Elo ranking. The update involves a mathematical formula that considers the expected performance of a computer based on the Elo rankings of the other computers and compares it to the actual performance. The difference between the expected performance and the actual performance is used to update the Elo ranking for each computer.

Finally, the updated Elo ranking for each computer is returned, allowing for the determination of the better-performing computer and by how much.