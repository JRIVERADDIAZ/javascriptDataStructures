/*
class Dictionary {
    constructor() {
        this.items = {};
    }

    has(key) {
        return key in this.items;
    }

    set(key, value) {
        this.items[key] = value;
    }

    remove(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }

    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    values() {
        return Object.values(this.items);
    }

    keys() {
        return Object.keys(this.items);
    }

    getItems() {
        return this.items;
    }

    size() {
        return Object.keys(this.items).length;
    }

    clear() {
        this.items = {};
    }
}

class Queue {

    constructor() {
        this.items = [];
    }

    enqueue = function (element) {
      return this.items.push(element);
    };

    dequeue = function () {
        return this.items.shift();
    };

    front = function () {
        return this.items[0];
    };

    isEmpty = function () {
        return this.items.length === 0;
    };

}

class Graph {
    constructor() {
        this.vertices = [];
        this.adjList = new Dictionary();
    }

    initializeColor() {
        const color = {};
        for (let i = 0; i < this.vertices.length; i++) {
            color[this.vertices[i]] = 'white';
        }
        return color;
    }

    addVertex(v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        if (this.adjList.has(v) && this.adjList.has(w)) {
            this.adjList.get(v).push(w);
            this.adjList.get(w).push(v);
        } else {
            throw new Error("Vertices do not exist");
        }
    }

    toString() {
        const s = this.vertices.map(vertex => {
            const neighbors = this.adjList.get(vertex);
            return `${vertex} -> ${neighbors.join(' ')}`;
        }).join('\n');
        return s;
    }



    bfs(v, callback) {

        const color = this.initializeColor();
        const queue = [];
        queue.push(v);

        while (queue.length) {

            const u = queue.shift();
            const neighbors = this.adjList.get(u);
            color[u] = 'grey';

            for (let i = 0; i < neighbors.length; i++) {
                const w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.push(w);
                }
            }

            color[u] = 'black';

            if (callback) {
                callback(u);
            }
        }

    }

    bfs = (v) => {
        var neighbors = [];
        var vertices = [];
        var adjList = new Dictionary();
        var color = this.initializeColor(),
            queue = new Queue(),
            d = [],          // Array to store distances from the starting vertex
            pred = [];       // Array to store predecessors in the BFS traversal

        queue.enqueue(v);

        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;    // Initialize distances to 0
            pred[vertices[i]] = null;  // Initialize predecessors to null
        }

        while (!queue.isEmpty()) {
            // Dequeue a vertex from the queue
            var u = queue.dequeue();

            // Get the neighbors of the current vertex u from the adjacency list
            neighbors = adjList.get(u);

            // Mark the current vertex as visited (color it grey)
            color[u] = 'grey';

            // Explore the neighbors of the current vertex u
            for (i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];

                // If the neighbor has not been visited (color white)
                if (color[w] === 'white') {
                    // Mark the neighbor as visited (color it grey)
                    color[w] = 'grey';

                    // Update the distance from the starting vertex to the neighbor
                    d[w] = d[u] + 1;

                    // Set the predecessor of the neighbor
                    pred[w] = u;

                    // Enqueue the neighbor for further exploration
                    queue.enqueue(w);
                }
            }

            // Mark the current vertex as completely visited (color it black)
            color[u] = 'black';
        }
        return {
            distances: d,
            predecessors: pred
        };
    };

}

let graph = new Graph();
let myVertices = ['A','B','C','D','E','F','G','H','I'];
for (let i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');


function printNode(value){ //{16}
    console.log('Visited vertex: ' + value); //{17}
}

var shortestPathA = graph.bfs(myVertices[0]);
console.log(shortestPathA);
*/






