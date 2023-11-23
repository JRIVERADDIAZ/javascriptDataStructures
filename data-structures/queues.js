

/*
* There are many possible queueing disciplines, the most common of which include FIFO, priority, and LIFO.  
* A FIFO (first-in-first-out) Queue, which is illustrated below, removes items in the same order 
* they were added, much in the same way a queue (or a line-up) works when checking out at a cash 
* register in a grocery store. This is the most common kind of Queue so the qualifier FIFO is often omitted. 
* In other texts, the add(x) and remove() operations on a FIFO Queue are often called enqueue(x) and dequeue(),
* respectively. 
 */

class Queues {

    items = [];
    constructor(items) {
        this.items = items;
    }

    enqueue = function (element) {
        items.push(element);
    };

    dequeue = function () {
        return items.shift();
    };

    front = function () {
        return items[0];
    };

}



/*
 * 
 */