# Undirected graph bridge detection via DFS

#### What does it do
The algorithm finds bridges in a graph, which are edges that, if removed, would divide the graph into separate parts. It explores the graph, marking each vertex with the earliest reachable vertex and checking if any connection is the only link to a part of the graph.

#### How does it do it
The algorithm assigns discovery times during a depth-first search and updates the lowest reachable times for each vertex. If a vertex's lowest reachable time is only accessible via its direct parent, the connecting edge is identified as a bridge.

#### History of the algorithm
The algorithm was introduced by Robert Tarjan in 1974. One of the earliest important uses was in the optimization of computer networks and the design of reliable network systems.

#### Class diagram
<img width="400" alt="Screenshot 2024-05-02 at 21 40 31" src="https://github.com/ZirixCZ/undirected-graph-bridge-detection-dfs/assets/49836430/ac9e5ae9-714c-4a31-af80-cb00bcc01e2e">
