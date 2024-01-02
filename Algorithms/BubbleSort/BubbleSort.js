class BubbleSort {

    constructor(arr) {
        this.arr = arr
    }

    bubbleSort = () => {

        let length = this.arr.length

        let swap = (array, index1, index2) => {

            let temp = array[index1]
            array[index1] = array[index2]
            array[index2] = temp

        }

        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < length - 1; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    swap(this.arr, j, j + 1)
                }
            }
        }

    }
}

let sorter = new BubbleSort(array.arr) 
sorter.bubbleSort()
console.log(sorter.arr);