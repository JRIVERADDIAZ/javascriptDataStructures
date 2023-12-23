//creatig new arrays 

// let allDaysOfTheWeek = new Array();
// let allDaysOfTheWeek = new Array(7);
// let allDaysOfTheWeek = Object.freeze(new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',
//    'Thursday', 'Friday', 'Saturday'));


/*
   let daysOfTheWeek = (day) => {
    for (let i = 0; i < allDaysOfTheWeek.length; i++) {
        if (allDaysOfTheWeek[i] === day) console.log('exist');
    }
}
*/

// daysOfTheWeek('Monday')

// fibbonacci series using Arrays DS

/* 
let fibo = [];
fibo[1] = 1;
fibo[2] = 2;

for(var i = 3; i < 20; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
}

for(var j = 1; j < fibo.length; j++) {
    console.log(fibo[j]);
}   
*/

/*
let numbers = new Array();

const addNUmber = (element) => {
    numbers.unshift(element);
    console.log('beggining added', numbers);
}

const removeNumber = (element) => {
    numbers.splice(element, 1);
    console.log('removed', numbers);
}

const searchNumber = (element) => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === element) {
            console.log('found')
            return true
        };
    }
    console.log('not found');
    return false;
}

const removeAt = (index) => {
    numbers.splice(index, 1)
    console.log('removed', numbers);
}

const insertAt = (element, index) => {
    numbers.splice(index, 0, element)
    console.log('inserted', numbers);
}   
 */


// Multiple pointers pattern

var averageTempDay1 = new Array(72, 75, 79, 79, 81, 81);
var averageTempDay2 = new Array(81, 79, 75, 75, 73, 72);

let averageTemp = new Array(averageTempDay1, averageTempDay2);

// //day 1
// console.log(averageTemp[0], 'averageTempDay1');
// console.log(averageTemp[0][0]);
// console.log(averageTemp[0][1]);
// console.log(averageTemp[0][2]);
// console.log(averageTemp[0][3]);
// console.log(averageTemp[0][4]);
// console.log(averageTemp[0][5]);
// //day 2
// console.log(averageTemp[1], 'averageTempDay2');
// console.log(averageTemp[1][0]);
// console.log(averageTemp[1][1]);
// console.log(averageTemp[1][2]);
// console.log(averageTemp[1][3]);
// console.log(averageTemp[1][4]);
// console.log(averageTemp[1][5]);

// Traverse multidinmensional array

// const traverseMatrix = (myMatrix) => {
//     for (let i = 0; i < myMatrix.length; i++) {
//         for (let j = 0; j < myMatrix[i].length; j++) {
//             console.log(myMatrix[i][j]);
//         }
//     }
// }

traverseMatrix(averageTemp);    



