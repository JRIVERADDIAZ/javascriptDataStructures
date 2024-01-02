

/*
* There are many possible queueing disciplines, the most common of which include FIFO, priority, and LIFO.  
* A FIFO (First-In First-Out) Queue, which is illustrated below, removes items in the same order 
* they were added, much in the same way a queue (or a line-up) works when checking out at a cash 
* register in a grocery store. This is the most common kind of Queue so the qualifier FIFO is often omitted. 
* In other texts, the add(x) and remove() operations on a FIFO Queue are often called enqueue(x) and dequeue(),
* respectively. 
 */

class Queues {

    constructor() {
        this.items = [];
    }

    enqueue = function (element) {
        return this.items.push(element);
    }

    dequeue = function () {
        return this.items.shift();
    };

    front = function () {
        return this.items[0];
    };

    isEmpty = function () {
        if (this.items.length == 0) {
            return true;
        }
    };

    size = function () {
        return this.items.length;
    };

    print = function () {
        console.log(this.items);
        return this.items.toString();
    };

    clear = function () {
        let newItems = [];
        this.items = newItems;
        return this.items;
    };

    hotPotato = (nameList, num) => {
        let queue = new Queues();

        for (let i = 0; i < nameList.length; i++) {
            queue.enqueue(nameList[i]);
        }

        let eliminated = '';

        while (queue.size() > 1) {
            for (let i = 0; i < num; i++) {
                queue.enqueue(queue.dequeue());
            }
            eliminated = queue.dequeue();
            console.log('eliminated', eliminated);
        }

        return queue.dequeue();
    };

}

// let queue = new Queues();

// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

// for (let i = 0; i < data.length; i++) {
//     queue.enqueue(data[i])
// }

// queue.dequeue();

// queue.print();

//  console.log(queue.dequeue(), 'dequeue');
//  console.log(queue.front(), 'front');
//  console.log(queue.isEmpty(), 'isEmpty');
//  console.log(queue.size(), 'size');
//  console.log(queue.clear(), 'clear');


// Example priority queue

function PriorityQueue() {

    let items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority);
        let added = false;

        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            items.push(queueElement);
        }
    };

    this.print = function () {
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`);
        }
    };


}

// let priorityQueue = new PriorityQueue();

// priorityQueue.enqueue("John", 2);
// priorityQueue.enqueue("Jack", 1);
// priorityQueue.enqueue("Camila", 1);
// priorityQueue.print();

// HOT POTATOE

//  let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
//  let winner = hotPotato(names, 7);



// Given an array, you are asked to perform a number of
// queries and divide the array into what are called, beautiful subsequences.

// The array  has length . A function  is defined to be a minimal possible , 
// such that it's possible to divide array  into  beautiful subsequences. 
// Note that each element of an array should belong to exactly one subsequence, 
// and subsequence does not necessarily need to be consecutive.



function QueueHandler(input) {

    let stack1 = [];
    let stack2 = [];

    const enqueue = function (element, stacks) {
        return stacks.push(element);
    };

    const dequeue = function (stacks) {
        if (stacks.length === 0) {
            return null; // If both stacks are empty, the queue is empty
        }

        if (stacks[1].length === 0) {
            // If stack2 is empty, transfer elements from stack1 to stack2
            while (stacks[0].length > 0) {
                stacks[1].push(stacks[0].pop());
            }
        }

        return stacks[1].pop();
    };

    const front = function (stacks) {
        if (stacks.length === 0) {
            return null; // If both stacks are empty, the queue is empty
        }

        if (stacks[1].length === 0) {
            // If stack2 is empty, transfer elements from stack1 to stack2
            while (stacks[0].length > 0) {
                stacks[1].push(stacks[0].pop());
            }
        }

        return stacks[1][stacks[1].length - 1];
    };

    const print = function (stacks) {
        console.log(stacks);
        return stacks.toString();
    };

    console.log([input]);

    let inputArray = input.split('\n').slice(1); // Split input into an array of tasks

    console.log(inputArray);

    for (let i = 0; i < inputArray.length; i++) {

        let task = inputArray[i].split(' ');

        console.log('task', task);

        if (task[0] === '1') {
            // Enqueue
            enqueue(parseInt(task[1]), stack1);
        } else if (task[0] === '2') {
            // Dequeue
            dequeue([stack1, stack2]);
        } else if (task[0] === '3') {
            // Print the front element
            console.log(front([stack1, stack2]));
        }

    }

}

// const input = "10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2";
// QueueHandler(input);



// You are given a square grid with some cells open (.) and some blocked (X). 
// Your playing piece can move along any row or column until it reaches the edge of the grid or a blocked cell. 
// Given a grid, a start and a goal, determine the minmum number of moves to get to the goal.
/*  

      y
    x . . . 
      . x . 
      . . .
*/

let grid = ['...', '.x.', '...'];
let startX = 0;
let startY = 0;
let goalX = 0;
let goalY = 2;

const minimumMoves = (grid, startX, startY, goalX, goalY) => {

    const n = grid.length;

    const visited = new Array(n).fill(null).map(() => new Array(n).fill(false));

    const queue = [];

    queue.push({ x: startX, y: startY, moves: 0 });

    while (queue.length > 0) {

        const { x, y, moves } = queue.shift();

        if (x === goalX && y === goalY) {
            return moves;
        }

        // Explore horizontally (row)
        for (let i = x + 1; i < n; i++) {
            if (grid[i][y] === "X") {
                break;
            }
            if (!visited[i][y]) {
                visited[i][y] = true;
                queue.push({ x: i, y, moves: moves + 1 });
            }
        }

        for (let i = x - 1; i >= 0; i--) {
            if (grid[i][y] === "X") {
                break;
            }
            if (!visited[i][y]) {
                visited[i][y] = true;
                queue.push({ x: i, y, moves: moves + 1 });
            }
        }

        // Explore vertically (column)
        for (let j = y + 1; j < n; j++) {
            if (grid[x][j] === "X") {
                break;
            }
            if (!visited[x][j]) {
                visited[x][j] = true;
                queue.push({ x, y: j, moves: moves + 1 });
            }
        }

        for (let j = y - 1; j >= 0; j--) {
            if (grid[x][j] === "X") {
                break;
            }
            if (!visited[x][j]) {
                visited[x][j] = true;
                queue.push({ x, y: j, moves: moves + 1 });
            }
        }
   
    }

    return -1; // No path found

}

// let way = minimumMoves(grid, startX, startY, goalX, goalY);
// console.log('way', way, 'moves');

