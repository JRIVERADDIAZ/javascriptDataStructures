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
    };

    // Elimina un elemento de una posición específica en la lista.
    remove = (position) => {
        if (position >= 0 && position < this.length) {
            let current = this.head,
                previous,
                index = 0;

            if (position === 0) {
                this.head = current.next;
                if (position === this.length - 1) {
                    // Si se está eliminando el último elemento, actualiza también la cola.
                    this.tail = null;
                }
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                if (position === this.length - 1) {
                    // Si se está eliminando el último elemento, actualiza también la cola.
                    this.tail = previous;
                }
            }

            this.length--;
            return current.value;
        } else {
            return null;
        }
    };

    // Inserta un elemento en una posición específica.
    insert = (position, item) => {
        if (position >= 0 && position <= this.length) {
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

    // Convierte la lista enlazada a una cadena de texto.
    toString = () => {
        let current = this.head,
            string = '';

        while (current) {
            string += current.value + (current.next ? '->' : '-> tail');
            current = current.next;
        }

        return string;
    };

    // The index of that we will implement is the indexof method, the index of method
    // receives a value of an element and returns the position of that element in the list
    // if the element is not in the list, it returns -1

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

    //

}

let list = new LinkedList();

list.append(1);
list.append(2);
// list.insert(1, 3); // Inserta el valor 3 en la posición 1
// list.remove(0);   // Elimina el elemento en la posición 0


console.log(list.toString());
console.log(list.indexOf(2))