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

    constructor() {
        this.items = [];
    }

    push = (item) => {
        return this.items.push(item);
    };

    pop = () => {
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

const stack = new Stack();

// Stacks are used to check the correctness of expressions with balanced parentheses or brackets. Each opening symbol is pushed onto the stack, and when a closing symbol is encountered, it is popped off.
// Algorithmic Problems (DFS):

// const str = '{[()]}';

// const isBalanced = (str) => {
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === '{' || str[i] === '[' || str[i] === '('){
//             stack.addiItemAtTheTop(str[i]);
//         } else {
//             if(stack.isEmpty()){
//                 return false;
//             }
//             let last = stack.removeFromTheTop();
//             if(!isMatchingPair(last, str[i])){
//                 return false;
//             }
//         }
//     }
//     return stack.isEmpty();
// }
    
// const isMatchingPair = (opening, closing) => {
//     return (opening === '{' && closing === '}') ||
//            (opening === '[' && closing === ']') ||
//            (opening === '(' && closing === ')');
// }
        
// console.log(isBalanced(str));
        
// Binary to  Decimal converter

// const binaryConverter = (num) => {
//     let rem; 
//     let binaryString = '';

//     while(num > 0){
//         rem = Math.floor(num % 2);
//         binaryString = rem + binaryString;
//         num = Math.floor(num / 2);
//     }   

//     while(!stack.isEmpty()){
//         binaryString += stack.removeFromTheTop();
//     }

//     console.log(binaryString);
//     return binaryString;

// }

// console.log('Binary to Decimal converter 10', binaryConverter(10));
// console.log('Binary to Decimal converter 233', binaryConverter(233));
// console.log('Binary to Decimal converter 1000', binaryConverter(1000));
        
// In algorithms like Depth-First Search (DFS), a stack can be used to keep track of the vertices or nodes to visit. Nodes are pushed onto the stack, and the algorithm explores as deeply as possible before backtracking.
// Parsing and Compilers:
        
        
// Stacks play a crucial role in parsing and compiling source code. They are used to manage the symbols and variables encountered during lexical and syntactic analysis.
// Memory Management:
        
        
// Stacks are used for managing memory in a computer's call stack. Local variables and function call information are stored on the stack during program execution.
// Backtracking Algorithms:
        
        
// Backtracking algorithms, like the N-Queens problem, often use stacks to keep track of the current state and backtrack when necessary.
// Undo/Redo Operations in Software:
        
// Stacks can be used to evaluate expressions in postfix or prefix notation. Operators and operands are pushed onto the stack, and operations are performed when operators are encountered.
// Undo Mechanism in Editors:
        
// Many text editors and graphic design tools use stacks to implement an "undo" mechanism. Each action is pushed onto the stack, and the user can undo actions by popping them off the stack.
// Browser History:
        
// The back and forward buttons in web browsers can be implemented using a stack. Each visited page is pushed onto the stack, allowing users to navigate backward and forward.
// Balancing Parentheses and Brackets:
        
// Besides text editors, stacks are used in various software applications to implement undo and redo functionalities.
// Expression Conversion (Infix to Postfix):   
        
// Stacks can be used to convert infix expressions to postfix form. Operators are pushed and popped based on their precedence.
// Task Management in Operating Systems:

// In operating systems, stacks are used for managing tasks and processes. Each task's state is stored on a stack.
// These examples illustrate the versatility of stacks in various domains. They are a fundamental tool in computer science and play a crucial role in solving a wide range of problems.
