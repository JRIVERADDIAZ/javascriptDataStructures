class Node {

    constructor(value) {

        this.value = value;
        this.next = null;

    }
}

class LinkedList {

    constructor() {

        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    /* 10,2,4,3,8,3 */

    // Agrega un nuevo elemento al final de la lista.

    append = (item) => {

        let node = new Node(item);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;

        console.log('append', this.head);

    };

    // Agrega un nuevo elemento al inicio de la lista.

    prepend = (item) => {

        let node = new Node(item);
        let current = this.head;

        if (!current) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = current;
            this.head = node;
        }


        // console.log('prepend', this.head);

    }

    // Inserta un elemento en una posición específica.

    insert = (position, item) => {

        if (position >= 0 && position <= this.length) {
            // Si la posición es válida.
            let node = new Node(item),
                current = this.head,
                previous,
                index = 0;

            if (position === 0) {
                node.next = current;
                this.head = node;

                if (this.length === 0) {
                    // Si la lista estaba vacía, actualiza también la cola.
                    this.tail = node;
                }

            } else {

                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node;

                if (position === this.length) {
                    // Si se está insertando al final, actualiza también la cola.
                    this.tail = node;
                }
            }

            this.length++;

            return true;

        } else {

            return false;

        }
    };

    // Elimina un elemento de una posición específica en la lista.

    remove = (value) => {

        let current = this.head;
        let previous = null;

        // Special case: Removing the head of the linked list
        if (current && current.value === value) {
            this.head = current.next;
            this.length--;

            // If the head is the only node, update the tail as well
            if (this.length === 0) {
                this.tail = null;
            }

            return;
        }

        // General case: Removing a node other than the head
        while (current && current.value !== value) {
            previous = current;
            current = current.next;
        }

        // If the value was not found in the linked list
        if (!current) {
            console.log(`Value ${value} not found in the linked list.`);
            return;
        }

        // Update the next pointer of the previous node to skip the current node
        previous.next = current.next;
        this.length--;

        // If the removed node was the tail, update the tail
        if (current === this.tail) {
            this.tail = previous;
        }
    };


    runTraverseLinkedList = () => {

        let current = this.head;
        let index = 0;

        while (current) {
            console.log(`index: ${index} value: ${current.value}`);
            current = current.next;
            index++;
        }

    }

    // Devuelve el ultimo nodo de la lista.

    getLastNode = () => {
        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        return current.value;
    }

    // Devuelve el primer nodo de la lista.

    getFirstNode = () => {
        let current = this.head;
        return current.value;
    }

    // Devuelbe el elemento al medio de la lista

    getMiddlenNode = () => {
        let current = this.head;
        let MiddleList = Math.floor(this.length / 2);
        let index = 0;

        while (index++ < MiddleList) {
            current = current.next;
        }

        return current.value;
    }

    // Convierte la lista enlazada a una cadena de texto.

    toString = () => {
        let current = this.head,
            string = '';

        while (current) {
            let head = this.indexOf(current.value);
            if (head === 0) { string += 'head -> ' }
            string += current.value + (current.next ? ' -> ' : ` -> tail -> ${this.tail.value}`);
            current = current.next;
        }

        return string;
    };

    // Devuelbe el indice del elemento que se le pasa como parametro.

    indexOf = (item) => {
        let current = this.head;
        let index = 0;

        while (current) {
            if (item === current.value) { // Corregido de "current.item" a "current.value"
                return index;
            }

            index++;
            current = current.next;
        }

        return -1;
    }

    // isEmpty receives no parameters and returns true if the list does not contain any elements and false if the size of the list is bigger than 0

    isEmpty = () => {
        return this.length === 0;
    }

    // size return the length of the list equal to the number of elements that the list contains}

    size = () => {
        return this.length;
    }

    // getHead returns the head of the list

    getHead = () => {
        return this.head;
    }

    // getTail returns the tail of the list

    getTail = () => {
        console.log(this.tail.value);
    }

    // printCurrents prints the currents values of the list

    printCurrents = () => {
        let current = this.head;
        let index = 0;
        while (current) {
            console.log(`index: ${index} value: ${current.value}`);
            current = current.next;
            index++;
        }
    }

    // Print in reverse order

    printInReverse = () => {

        let current = this.head;
        let index = 0;

        // Find the length of the linked list
        while (current) {
            current = current.next;
            index++;
        }

        // Reset current to the head of the linked list
        current = this.head;

        // Traverse the linked list in reverse order and print values
        while (index--) {
            console.log(`index: ${index} value: ${current.value}`);
            current = current.next;
        }

    }

    // Reverse the list

    reverseList = () => {

        console.log('current', this.head);

        let current = this.head;
        let previous = null;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this.head = previous;

        console.log('reversed', this.head);

    }

    // Remove duplicates
    // keep here for reference

    removeDuplicates = () => {

        let current = this.head;
        let duplicates = {};
        let previous = null;

        while (current) {
            
            previous = current.value;
            current = current.next;

            if (duplicates[previous]) {

                this.remove(previous);

            } else {

                duplicates[previous] = true;

            }

            console.log('duplicates', duplicates);

        }

        console.log('removeDuplicates', this.head);

    }

    // Compare two lists

    compareLists = () => {



    }

    // Merge two lists

    mergeLists = () => {
    }

    // Get Node Value   

    getNodeValue = () => {
    }

    // Delete duplicate-value nodes from a sorted linked list

    deleteDuplicateValueNodes = () => {
    }

    // Cycle Detection

    hasCycle = () => {
    }

    // Find Merge Point of Two Lists

    findMergeNode = () => {
    }



}

let list = new LinkedList();

//  console.log(' prepend ')

list.prepend(10);
list.prepend(2);
list.prepend(4);
list.prepend(3);
list.prepend(8);
list.prepend(8);
list.prepend(3);
list.prepend(3);
list.prepend(4);

// list.removeDuplicates();

// console.log(' append ')


// list.append(10);
// list.append(2);
// list.append(4);
// list.append(3);
// list.append(8);
// list.append(3);

// Remove duplicates
/*
 
head: Node { 
    value: 1, 
    next: Node { value: 2, next: [Node] } },
    Node {
        value: 2,
        next: Node { value: 3, next: Node { value: 4, next: [Node] } }
    },  
    Node {
        value: 3,
        next: Node { value: 4, next: Node { value: 8, next: [Node] } }
    },
    Node {  
        value: 4,
        next: Node { value: 8, next: Node { value: 3, next: [Node] } }
    },
    Node {
        value: 8,
        next: Node { value: 3, next: Node { value: 8, next: [Node] } }
    },
}, 
tail: Node { value: 8, next: null }

*/
