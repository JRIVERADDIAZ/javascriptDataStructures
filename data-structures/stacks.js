/*

The Stacks 

A stacks follow  the LIFO (Last In First Out) principle, meaning that the last element added to the stack will be the first one removed.
like a deposit and withdraw from a bank account, the last one to deposit will be the first one to withdraw.
also like a stack of books, the last one to be placed on the stack will be the first one to be removed.

* push
* pop
* peek
* isEmpty
* clear
* size
*/


class Stack {

    constructor(){
        this.items = [];
    }

    addiItemAtTheTop = (item) => {
     return this.items.push(item);
    };

    removeFromTheTop = () => {
    return this.items.pop();
    };

    peek = () => {
        return this.items[this.items.length - 1];
    };

    isEmpty = () => {
        return this.items.length === 0;
    };

    clear = () => {
        this.items = [];
    };

}

/*
const stack = new Stack();
stack.addiItemAtTheTop(1);
stack.addiItemAtTheTop(2);
stack.addiItemAtTheTop(3);
stack.addiItemAtTheTop(4);

// console.log(stack.peek());

console.log(stack.removeFromTheTop());
console.log(stack.removeFromTheTop());

console.log(stack.items);

console.log(stack.isEmpty());

stack.clear();

console.log(stack.items);
*/

// const divideBy2 = (decNumber) => {
//     const remStack = new Stack(); // Step 1: Create a new stack to store remainders
//     let rem,
//         binaryString = '';

//     // Step 2: Convert decimal to binary using stack
//     while (decNumber > 0) {
//         rem = Math.floor(decNumber % 2); // Calculate the remainder when dividing by 2
//         remStack.addiItemAtTHeTop(rem); // Push the remainder onto the stack
//         decNumber = Math.floor(decNumber / 2); // Update the decimal number for the next iteration
//     }
//     console.log(remStack.items)
//     // Step 3: Pop elements from the stack to build the binary string
//     while (!remStack.isEmpty()) {
//         binaryString += remStack.removeFromTheTail().toString(); // Pop the remainder from the stack and append to the binary string
//     }
//     console.log(remStack.items)
//     return binaryString; // Return the binary representation
// };
