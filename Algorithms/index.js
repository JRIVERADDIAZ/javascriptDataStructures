class ArrayList {

    constructor() {
        this.arr = []
    }

    insert = (item) => {
        this.arr.push(item)
    }

    toString = () => {
        return this.arr.join()
    }

}

const createNonSortedArray = (size) => {
    let array = new ArrayList()
    for (let i = size; i > 0; i--) {
        array.insert(i)
    }
    return array
}


let array = createNonSortedArray(5)

console.log(array.toString());