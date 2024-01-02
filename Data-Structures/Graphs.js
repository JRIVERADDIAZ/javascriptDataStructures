
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

    BFS = (v) => {

        let color = this.initializeColor();

        let queue = new Queue(),
            d = [],
            pred = [];

        queue.enqueue(v);

        for (let i = 0; i < this.vertices.length; i++) {
            d[this.vertices[i]] = 0;
            pred[this.vertices[i]] = null;
        }

        while (!queue.isEmpty()) {
            let u = queue.dequeue(),
                neighbors = this.adjList.get(u);
            color[u] = 'grey';
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }


        return {
            distances: d,
            predecessors: pred
        };

    }

    dfsVisit = (u, color, callback) => {
        color[u] = 'grey';
        if (callback) {
            callback(u);
        }
        let neighbors = this.adjList.get(u);
        for (let i = 0; i < neighbors.length; i++) {
            let w = neighbors[i];
            if (color[w] === 'white') {
                this.dfsVisit(w, color, callback);
            }
        }
        color[u] = 'black';
    }

    DFS = (callback) => {

        let color = this.initializeColor();

        for (let i = 0; i < this.vertices.length; i++) {
            if (color[this.vertices[i]] === 'white') {
                this.   dfsVisit(this.vertices[i], color, callback);
            }
        }
    }


}

let graph = new Graph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
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


function printNode(value) {
    console.log('Visited vertex: ' + value);
}

var shortestPathA = graph.BFS(myVertices[0]);


var fromVertex = myVertices[0];

for (var i = 1; i < myVertices.length; i++) {

    var toVertex = myVertices[i],
        path = new Stack();

    for (var v = toVertex; v !== fromVertex;
        v = shortestPathA.predecessors[v]) {
        path.push(v);
    }

    path.push(fromVertex);
    var s = path.pop();

    while (!path.isEmpty()) {
        s += ' - ' + path.pop();
    }

    //   console.log(s); log the paths in order to reach the last vertex of the graph from the first vertex

}

graph.DFS(printNode);