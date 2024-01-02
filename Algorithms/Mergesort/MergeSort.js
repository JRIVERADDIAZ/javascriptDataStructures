class MergeSort {

    constructor(arr) {
        this.arr = arr
    }

    mergeSort = (arr) => {
        let length = arr.length;

        if (length <= 1) {
            return arr;
        }

        let mid = Math.floor(length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid, length);

        // Recursive calls to mergeSort for the left and right halves
        let sortedLeft = this.mergeSort(left);
        let sortedRight = this.mergeSort(right);

        // Merge the sorted left and right halves
        return this.merge(sortedLeft, sortedRight);
    };

    merge = (left, right) => {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        // Compare elements from left and right arrays and merge them in sorted order
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        // Concatenate any remaining elements from both arrays (if any)
        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    };

}

// Example usage:
const sorter = new MergeSort(array.arr);
const sortedArray = sorter.mergeSort(array.arr);
console.log(sortedArray);
