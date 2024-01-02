class BinarySearch {
    constructor(arr) {
        this.arr = arr;
    }

    binarySearch = (item) => {
        
        let low = 0;
        let high = this.arr.length - 1;
        let mid;
        let element;

        while (low <= high) {
            mid = Math.floor((low + high) / 2);
            element = this.arr[mid];
            if (element < item) {
                low = mid + 1;
            } else if (element > item) {
                high = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }

}

quickSort.quickSort()
console.log(quickSort.arr);

let binarySearch = new BinarySearch(quickSort.arr);

console.log(binarySearch.binarySearch(3));
