

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
        return this.items.toString();
    };

    clear = function () {
        let newItems = [];
        this.items = newItems;
        return this.items;
    };

}


// let queue = new Queues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// console.log(queue.enqueue(11), 'enqueue');
// console.log(queue.dequeue(), 'dequeue');
// console.log(queue.front(), 'front');
// console.log(queue.isEmpty(), 'isEmpty');
// console.log(queue.size(), 'size');
// console.log(queue.print(), 'print');
// console.log(queue.clear(), 'clear');


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

const hotPotato = (nameList, num) => {
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

// let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
// let winner = hotPotato(names, 7);