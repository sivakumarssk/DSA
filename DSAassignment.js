// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?



function findPairsWithSum(arr, targetSum) {
  const pairs = [];
  const seen = new Set();

  for (let num of arr) {
    const complement = targetSum - num;
    if (seen.has(complement)) {
      pairs.push([Math.min(num, complement), Math.max(num, complement)]);
    }
    seen.add(num);
  }

  return pairs;
}

// Example usage:
const nums = [3, 5, 2, 8, 6, 4, 1];
const target = 7;
const result1 = findPairsWithSum(nums, target);

if (result1.length > 0) {
  console.log(`Pairs with sum ${target}:`, result1);
} else {
  console.log("No pairs found.");
}



// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

function reverseArrayInPlace(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // Swap elements at start and end indices
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

// Example usage:
let myArray = [1, 2, 3, 4, 5];
console.log("Original Array:", myArray);

reverseArrayInPlace(myArray);
console.log("Reversed Array:", myArray);



// Q3. Write a program to check if two strings are a rotation of each other?

function areRotations(str1, str2) {
  // Check if both strings are of equal length and not empty
  if (str1.length !== str2.length || str1.length === 0) {
    return false;
  }

  const concatenated = str1 + str1;

  // Check if str2 is a substring of the concatenated string
  return concatenated.includes(str2);
}

// Example usage:
const string1 = "hello";
const string2 = "lohel";

if (areRotations(string1, string2)) {
  console.log(`${string1} and ${string2} are rotations of each other.`);
} else {
  console.log(`${string1} and ${string2} are not rotations of each other.`);
}



// Q4. Write a program to print the first non-repeated character from a string?

function firstNonRepeatedCharacter(str) {
  const charCount = {};

  // Count occurrences of each character in the string
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Find the first character with count 1 (non-repeated)
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Return null if no non-repeated character is found
  return null;
}

// Example usage:
const inputString = "aabbccdeeffg";
const result = firstNonRepeatedCharacter(inputString);

if (result !== null) {
  console.log(`The first non-repeated character in '${inputString}' is '${result}'.`);
} else {
  console.log(`There are no non-repeated characters in '${inputString}'.`);
}


// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    console.log(`Move disk 1 from rod ${source} to rod ${destination}`);
    return;
  }

  towerOfHanoi(n - 1, source, destination, auxiliary);
  console.log(`Move disk ${n} from rod ${source} to rod ${destination}`);
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

// Example usage:
const numDisks = 3;
const sourceRod = 'A';
const auxiliaryRod = 'B';
const destinationRod = 'C';

console.log(`Steps to solve Tower of Hanoi with ${numDisks} disks:`);
towerOfHanoi(numDisks, sourceRod, auxiliaryRod, destinationRod);



// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

function isOperator(character) {
  return ['+', '-', '*', '/'].includes(character);
}

function postfixToPrefix(postfixExpression) {
  const stack = [];

  for (let i = 0; i < postfixExpression.length; i++) {
    let symbol = postfixExpression[i];

    if (isOperator(symbol)) {
      let operand2 = stack.pop();
      let operand1 = stack.pop();
      let prefix = symbol + operand1 + operand2;
      stack.push(prefix);
    } else {
      stack.push(symbol);
    }
  }

  return stack.pop();
}

// Example usage:
const postfixExpr = '23*5+';
const prefixExpr = postfixToPrefix(postfixExpr);
console.log(`Postfix Expression: ${postfixExpr}`);
console.log(`Prefix Expression: ${prefixExpr}`);



// Q7. Write a program to convert prefix expression to infix expression.

function isOperator(character) {
  return ['+', '-', '*', '/'].includes(character);
}

function prefixToInfix(prefixExpression) {
  const stack = [];

  for (let i = prefixExpression.length - 1; i >= 0; i--) {
    let symbol = prefixExpression[i];

    if (isOperator(symbol)) {
      let operand1 = stack.pop();
      let operand2 = stack.pop();
      let infix = `(${operand1}${symbol}${operand2})`;
      stack.push(infix);
    } else {
      stack.push(symbol);
    }
  }

  return stack.pop();
}

// Example usage:
const prefixExpr1 = '+*235';
const infixExpr = prefixToInfix(prefixExpr1);
console.log(`Prefix Expression: ${prefixExpr1}`);
console.log(`Infix Expression: ${infixExpr}`);


// Q8. Write a program to check if all the brackets are closed in a given code snippet.

function areBracketsClosed(codeSnippet) {
  const stack = [];
  const openingBrackets = "({[";
  const closingBrackets = ")}]";

  for (let char of codeSnippet) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const correspondingOpening = openingBrackets[closingBrackets.indexOf(char)];
      if (stack.length === 0 || stack.pop() !== correspondingOpening) {
        return false;
      }
    }
  }

  return stack.length === 0; // All brackets should be closed
}

// Example usage:
const code1 = "{(a + b) * [c - d]}";
const code2 = "{(a + b) * [c - d]";
console.log(`Code 1: All brackets closed? ${areBracketsClosed(code1)}`);
console.log(`Code 2: All brackets closed? ${areBracketsClosed(code2)}`);


// Q9. Write a program to reverse a stack.

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    return !this.isEmpty() ? this.items[this.items.length - 1] : "No elements in the stack";
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function reverseStack(stack) {
  if (!stack.isEmpty()) {
    const temp = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, temp);
  }
}

function insertAtBottom(stack, item) {
  if (stack.isEmpty()) {
    stack.push(item);
  } else {
    const temp = stack.pop();
    insertAtBottom(stack, item);
    stack.push(temp);
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("Original Stack:");
while (!stack.isEmpty()) {
  console.log(stack.pop());
}

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

reverseStack(stack);

console.log("\nReversed Stack:");
while (!stack.isEmpty()) {
  console.log(stack.pop());
}


// Q10. Write a program to find the smallest number using a stack.

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // Stack to track minimum elements
  }

  push(value) {
    this.stack.push(value);
    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return "Stack is empty";
    }

    const popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return popped;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    if (this.minStack.length === 0) {
      return "Stack is empty";
    }
    return this.minStack[this.minStack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

// Example usage:
const minStack = new MinStack();
minStack.push(3);
minStack.push(5);
minStack.push(2);
minStack.push(1);

console.log("Smallest element in the stack:", minStack.getMin());
