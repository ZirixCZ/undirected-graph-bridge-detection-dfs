"use strict";
class Graph {
    constructor(num) {
        this.distance = 0;
        this.numberOfNodes = num;
        this.adj2DArray = new Array(num).fill(0).map(() => []);
    }
    addEdge(parent, child) {
        this.adj2DArray[parent].push(child);
        this.adj2DArray[child].push(parent);
    }
    findBridges(node, visitedNodes, discoveryTimes, lowestTimeToReach, parent) {
        visitedNodes[node] = true;
        discoveryTimes[node] = ++this.distance;
        lowestTimeToReach[node] = ++this.distance;
        for (let childNode of this.adj2DArray[node]) {
            if (!visitedNodes[childNode]) {
                parent[childNode] = node;
                this.findBridges(childNode, visitedNodes, discoveryTimes, lowestTimeToReach, parent);
                // Tady je ta důležitá část, kde se porovnávají časy a vyhodnocuje se, jestli je to most
                lowestTimeToReach[node] = Math.min(lowestTimeToReach[node], lowestTimeToReach[childNode]);
                // Basically jestli je čas, za který se jde dostat do childa větší než čas
                // za který se dostanu do parenta, tak je to most, jelikož to znamená, že
                // se do childa nedostanu jinak než přes parenta
                if (lowestTimeToReach[childNode] > discoveryTimes[node]) {
                    console.log(`${node} ${childNode}\n`);
                }
            }
            else if (childNode !== parent[node]) {
                lowestTimeToReach[node] = Math.min(lowestTimeToReach[node], discoveryTimes[childNode]);
            }
        }
    }
    main() {
        let visitedNodes = new Array(this.numberOfNodes).fill(false);
        let discoveryTimes = new Array(this.numberOfNodes).fill(0);
        let lowestTimeToReach = new Array(this.numberOfNodes).fill(0);
        let parent = new Array(this.numberOfNodes).fill(-1);
        for (let node = 0; node < this.numberOfNodes; node++) {
            if (!visitedNodes[node]) {
                this.findBridges(node, visitedNodes, discoveryTimes, lowestTimeToReach, parent);
            }
        }
    }
}
console.log("Bridges in a graph \n");
let graph = new Graph(5);
graph.addEdge(1, 0);
graph.addEdge(0, 2);
graph.addEdge(2, 1);
graph.addEdge(0, 3);
graph.addEdge(3, 4);
graph.main();
