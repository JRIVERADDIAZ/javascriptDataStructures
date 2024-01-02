class QuickSort {
    
    constructor(arr) {
        this.arr = arr;
    }

    partition = (array, left, right) => {
        let pivot = array[Math.floor((right + left) / 2)];
        let i = left;
        let j = right;

        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }
            while (array[j] > pivot) {
                j--;
            }
            if (i <= j) {
                this.swap(array, i, j);
                i++;
                j--;
            }
        }
        return i;
    }

    swap = (array, index1, index2) => {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    quick = (arr, left, right) => {
        let index;

        if (arr.length > 1) {
            index = this.partition(arr, left, right);
            if (left < index - 1) {
                this.quick(arr, left, index - 1);
            }
            if (index < right) {
                this.quick(arr, index, right);
            }
        }
    }

    quickSort = () => {

        this.quick(this.arr, 0, this.arr.length - 1);

    }

}

const sorter = new ArrayList();

sorter.arr = array.arr;

let quickSort = new QuickSort(sorter.arr);
