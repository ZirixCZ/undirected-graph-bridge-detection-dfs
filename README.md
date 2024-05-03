# Undirected graph bridge detection via DFS

#### What does it do
The algorithm finds bridges in a graph, which are edges that, if removed, would divide the graph into separate parts. It explores the graph, marking each vertex with the earliest reachable vertex and checking if any connection is the only link to a part of the graph.

#### How does it do it
The algorithm assigns discovery times during a depth-first search and updates the lowest reachable times for each vertex. If a vertex's lowest reachable time is only accessible via its direct parent, the connecting edge is identified as a bridge.

#### History of the algorithm
The algorithm was introduced by Robert Tarjan in 1974. One of the earliest important uses was in the optimization of computer networks and the design of reliable network systems.

#### Complexity
Time: O(V+E)

Space: O(V)

#### Code showcase
```ts
for (let childNode of this.adj2DArray[node]) {
      if (!visitedNodes[childNode]) {
        parent[childNode] = node;
        this.findBridges(
          childNode,
          visitedNodes,
          discoveryTimes,
          lowestTimeToReach,
          parent,
        );
        lowestTimeToReach[node] = Math.min(
          lowestTimeToReach[node],
          lowestTimeToReach[childNode],
        );
        if (lowestTimeToReach[childNode] > discoveryTimes[node]) {
          console.log(`${node} ${childNode}\n`);
        }
      } else if (childNode !== parent[node]) {
        lowestTimeToReach[node] = Math.min(
          lowestTimeToReach[node],
          discoveryTimes[childNode],
        );
      }
    }
```

#### Example of a graph with two bridges
![IMG_53DF86DF876C-1](https://github.com/ZirixCZ/undirected-graph-bridge-detection-dfs/assets/49836430/e23984ee-0d20-4310-9699-8fb110e2194a)

#### Class diagram
<img width="400" alt="Screenshot 2024-05-02 at 21 40 31" src="https://github.com/ZirixCZ/undirected-graph-bridge-detection-dfs/assets/49836430/ac9e5ae9-714c-4a31-af80-cb00bcc01e2e">
