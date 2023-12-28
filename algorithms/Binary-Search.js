
/*
 * 3 conditions for the binary search 
 *  match the value were loking for
*Match Found:

* If the middle element is equal to the target element, you've found a match. In this case, you can return the index of the middle
*  element as the result, indicating that the target has been found.
* Target Element is Greater:

* If the middle element is greater than the target element, this means the target element must be in the left half of the
* remaining search range, as the list is sorted in ascending order.
* Update the "high" pointer to be one less than the middle index. This effectively reduces the search range
* to the left half of the list. Continue the search within this reduced range.
* Target Element is Smaller:

* If the middle element is smaller than the target element, this indicates that the target element is in the right half of the remaining search range.
* Update the "low" pointer to be one more than the middle index, narrowing the search range to the right half of the list.
*
* Continue the search within this reduced range.
*
* para que se usa
* como se usa
*
*
* */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Element found, return its index
      } else if (arr[mid] < target) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }
  
    return -1; // Element not found in the array
  }
  
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
  const targetValue = 7;
  const result = binarySearch(sortedArray, targetValue);
  
  if (result !== -1) {
    console.log(`Element ${targetValue} found at index ${result}`);
  } else {
    console.log(`Element ${targetValue} not found in the array`);
  }