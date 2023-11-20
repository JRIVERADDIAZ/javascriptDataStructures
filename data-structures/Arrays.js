let arr = [1, 2, 3, 4, 5];
const showData = (arr) => {

    if (arr.length === 0) {
        console.log('Array is empty');
        return;
    }

    let lastElement = arr.pop();
    console.log(lastElement);

    showData(arr);
}

const addData = (arr, item) => {
    const arrEnd = arr.length;
    arr[arrEnd] = item;
    return arr;
}

const removeData = (arr) => {
// remove from the top

    if (arr.length === 0) {
        console.log('Array is empty');
        return;
    }

    arr.shift();
    return arr;
};

const insertInSpecificArrayIndex = (arr, item, index) => {

    for (let i = arr.length; i >= index; i--) {
        arr[i] = arr[i - 1];
    }



};

// showData(arr);
// console.log(addData(arr, 1));
// console.log(removeData(arr));
