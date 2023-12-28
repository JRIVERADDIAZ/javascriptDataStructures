class HashTable {
 
    constructor() {
        this.table = [];
    }

    loseloseHashCode = (key) => {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        console.log('hash value: ' + hash % 37);
        return hash % 37;
    }

    valuePair = (key, value) => {
        let item = {};
        item[key] = value;
        return item;
    }

    put = (key, value) => {
        let position = this.loseloseHashCode(key);

        if (this.table[position] === undefined) {
            this.table[position] = this.valuePair();
        } else {
            let index = ++position;
            while (this.table[index] !== undefined) {
                index++;
            }
            this.table[index] = this.valuePair(key, value);
        }
    }

    remove = (key) => {
        let position = this.loseloseHashCode(key);

        if (this.table[position] !== undefined) {
            let current = this.table[position].getHead();

            while (current !== null) {
                if (current.element.key === key) {
                    this.table[position].remove(key);
                    if (this.table[position].isEmpty()) {
                        this.table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
        }

        return false;
    }

    get = (key) => {
        let position = this.loseloseHashCode(key);
        if (this.table[position] !== undefined) {
            if (this.table[position].key === key) {
                return this.table[position].value;
            } else {
                let index = ++position;
                while (this.table[index] === undefined || this.table[index].key !== key) {
                    index++;
                }
                if (this.table[index].key === key) {
                    return this.table[index].value;
                }
            }
        }
        return undefined;
    }

    print = () => {
        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i] !== undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    }
    
}

let map = new Map();

map.set('Gandalf', 'gandalf@email.com');
map.set('John', 'johnsnow@email.com');
map.set('Tyrion', 'tyrion@email.com');

console.log(map.has('Gandalf'));
//outputs true
console.log(map.size);
//outputs 3
console.log(map.keys()); //outputs ["Gandalf", "John", "Tyrion"]
console.log(map.values()); //outputs ["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
console.log(map.get('Tyrion'))  

