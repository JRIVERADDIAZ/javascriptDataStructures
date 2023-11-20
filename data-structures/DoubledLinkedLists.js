    class DoubledLinkedList{

    Node = (element) => {
        this.element;
        this.next;
        this.prev;
        };

     length = 0;
     head = null;
     tail = null;

     // add a new element to the end of the list
     insert = (position, element) => {
            if (position >= 0 && position <= this.length) {
                let node = new Node(element),
                    current = this.head,
                    previous,
                    index = 0;

                if (position === 0) {
                    if (!this.head) {
                        this.head = node;
                        this.tail = node;
                    } else {
                        node.next = current;
                        current.prev = node;
                        this.head = node;
                    }
                } else if (position === this.length) {
                    current = this.tail;
                    current.next = node;
                    node.prev = current;
                    this.tail = node;
                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }
                    node.next = current;
                    previous.next = node;

                    current.prev = node;
                    node.prev = previous;
                }
                this.length++;
                return true;
            } else {
                return false;
            }
        };

     // remove an element at a specific position

        remove = (position) => {
            // Verifica valores fuera de rango
            if (position > -1 && position < this.length) {
                let current = this.head,
                    previous,
                    index = 0;

                if (position === 0) {
                    this.head = current.next;

                    // Si solo hay un elemento, actualiza la cola
                    if (this.length === 1) {
                        this.tail = null;
                    } else {
                        this.head.prev = null;
                    }
                } else if (position === this.length - 1) {
                    current = this.tail;
                    this.tail = current.prev;
                    this.tail.next = null;
                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }

                    // Enlaza el anterior con el siguiente de current, omitiendo current para eliminarlo
                    previous.next = current.next;
                    current.next.prev = previous;
                }

                this.length--;
                return current.value; // Corregido de "current.element" a "current.value"
            } else {
                return null;
            }
        };


    }