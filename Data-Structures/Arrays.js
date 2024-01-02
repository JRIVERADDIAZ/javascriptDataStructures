// let arr = [
//    /*    0  1  2  3  4  5  */
//    /*0*/[1, 1, 1, 0, 0, 0],
//    /*1*/[0, 1, 0, 0, 0, 0],
//    /*2*/[1, 1, 1, 0, 0, 0],
//    /*3*/[0, 0, 2, 4, 4, 0],
//    /*4*/[0, 0, 0, 2, 0, 0],
//    /*5*/[0, 0, 1, 2, 4, 0]
// ]

//  hourGlassSum 

//  There are  hourglasses in .
//   An hourglass sum is the sum of 
//   an hourglass' values. 
//   Calculate the hourglass sum for every hourglass in,
//    then print the maximum hourglass sum. The array will always be .

const hourGlassSum = (arr) => {

    for (let i = 1; i < arr.length - 1; i++) {
        for (let j = 1; j < arr[i].length - 1; j++) {

            const a = arr[i - 1][j - 1];
            const b = arr[i - 1][j];
            const c = arr[i - 1][j + 1];
            const d = arr[i][j];
            const e = arr[i + 1][j - 1];
            const f = arr[i + 1][j];
            const g = arr[i + 1][j + 1];

            console.log(`
                     ${a} ${b} ${c}
                       ${d}
                     ${e} ${f} ${g}
             `);
        }
    }

}

// hourGlassSum(arr)


// 1. Matrix Transposition
// Write a function that takes a square matrix (2D array) as input and returns the transposed matrix. The transposed matrix is obtained by swapping the rows and columns.

const transposeMatrix1 = (arr) => {

    console.log('matrix to transpose');
    arr.forEach((i) => console.log(i));

    let newMatrix = [[], [], []]

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - 1; j++) {

            const a = arr[i][j - 1];
            const b = arr[i][j]
            const c = arr[i][j + 1]

            newMatrix[0].push(a)
            newMatrix[1].push(b)
            newMatrix[2].push(c)

        }
    }

    console.log('matrix transposed');
    newMatrix.forEach((i) => console.log(i))

    return newMatrix

}

function transposeMatrix(matrix) {

    const rows = matrix.length;
    const columns = matrix[0].length;

    //   Initialize an empty matrix to store the transposed values
    const transposedMatrix = Array.from({ length: columns }, () => []);

    // Iterate through the original matrix and populate the transposed matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {

            transposedMatrix[j][i] = matrix[i][j];

        }
    }

    transposedMatrix.forEach((i) => console.log(i))

    return transposedMatrix;
}

// 2. Spiral Matrix

// Create a function that generates a spiral matrix of size N x N.
//  The values in the matrix should start from 1 and increment in a spiral order
//   (clockwise or counterclockwise).

const spiralMatrix = (n) => {


    let matrix = Array.from({ length: n }, () => []);

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {

        // Top Row
        for (let i = startColumn; i <= endColumn; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }

        startRow++;

        // Right Column
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endColumn] = counter;
            counter++;
        }

        endColumn--;

        // Bottom Row
        for (let i = endColumn; i >= startColumn; i--) {
            matrix[endRow][i] = counter;
            counter++;
        }

        endRow--;

        // Start Column
        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startColumn] = counter;
            counter++;
        }

        startColumn++;

    }

    matrix.forEach((i) => console.log(i))

    return matrix;

}

// spiralMatrix(9)

// 3. Diagonal Sum

// Write a function that calculates the sum of elements in the main diagonal of a 
// square matrix. The main diagonal consists of elements where the row index is equal 
// to the column index.

const diagonalSum = (arr) => {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i][i];
        sum += element
    }
    console.log(sum);
    return sum;

}

// diagonalSum(arr)

// 4. Matrix Rotation

// Implement a function that rotates a square matrix (90 degrees, 180 degrees, or 
// 270 degrees). The rotation direction can be clockwise or counterclockwise, and the function 
// should return the rotated matrix.

let squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function rotateMatrix(matrix, degrees, direction) {
    const n = matrix.length;

    // Helper function to transpose the matrix in-place
    function transpose() {
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
    }

    // Helper function to reverse rows or columns based on direction
    function reverseRowsOrCols() {
        if (direction === 'clockwise') {
            for (let i = 0; i < n; i++) {
                matrix[i].reverse();
            }
        } else if (direction === 'counterclockwise') {
            matrix.reverse();
        }
    }

    // Perform the rotation based on degrees
    const rotations = (degrees % 360) / 90;
    for (let i = 0; i < rotations; i++) {
        transpose();
        reverseRowsOrCols();
    }
    console.log(matrix);
    return matrix;
}

// rotateMatrix(squareMatrix, 90, 'clockwise')

// 5. Sparse Matrix Representation

// Design a class to represent a sparse matrix. A sparse matrix is a matrix that contains 
// mostly zero values. Implement methods for matrix addition, multiplication, and conversion between 
// sparse and dense representations.

class SparseMatrix {

    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];
    }

    // Add a non-zero element to the matrix
    addElement(row, col, value) {
        if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
            this.data.push({ row, col, value });
        } else {
            console.error("Invalid row or column index.");
        }
    }

    // Convert the sparse matrix to a dense matrix (2D array)
    toDenseMatrix() {
        const denseMatrix = Array.from({ length: this.rows }, () =>
            Array.from({ length: this.cols }, () => 0)
        );

        for (const entry of this.data) {
            denseMatrix[entry.row][entry.col] = entry.value;
        }

        return denseMatrix;
    }

    // Display the sparse matrix
    display() {
        console.log("Sparse Matrix:");

        for (let i = 0; i < this.rows; i++) {
            let rowString = "";
            for (let j = 0; j < this.cols; j++) {
                const entry = this.data.find((el) => el.row === i && el.col === j);
                rowString += entry ? `${entry.value}\t` : `0\t`;
            }
            console.log(rowString);
        }
    }
}

// // Example usage:
// const sparseMatrix = new SparseMatrix(3, 3);

// sparseMatrix.addElement(0, 0, 1);
// sparseMatrix.addElement(1, 1, 2);
// sparseMatrix.addElement(2, 2, 3);

// sparseMatrix.display();

// const denseMatrix = sparseMatrix.toDenseMatrix();
// console.log("\nDense Matrix:");
// console.log(denseMatrix);

let arrString = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

let arrString2 = [
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['g', 'h', 'f', 'j', 'k', 'l']
]

let arrString3 = [
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['g', 'h', 'f', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'f', 'q', 'r']
]

let arrString4 = [
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['g', 'h', 'f', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'f', 'q', 'r'],
    ['s', 't', 'u', 'f', 'w', 'x'],
    ['y', 'z', 'a', 'f', 'c', 'v'],
    ['b', 'c', 'd', 'f', 'e', 'f']
]


const findItem = (array) => {

    let counter = 0

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {

            let element = array[i][j]

            if (element === 'f') {
                counter++
                console.log(counter, element);
            }

        }
    }

}

// findItem(arrString4)

let produts = ['apple', 'orange', 'pear', 'carrots', 'beans', 'peas', 'cookies', 'cake', 'muffins', 'chicken', 'steak', 'pork']

const dynamicSearch = (array, string) => {

    let results = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element.includes(string)) {
            results.push(element)
        }

    }

    console.log('results', results);
    return results;

}

let sumArr = [1, 2, 3, 4, 5, 6]

// dynamicSearch(produts, 'c')

const sumArray = (array) => {

    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    console.log('sum', sum);

}

// sumArray(sumArr)


