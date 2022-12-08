'use strict';
const Stack = require('./stack.js');

// if the min element in the stack is poped, the the minValue recorder would not be useful
// class MinStack {
//   constructor() {
//     this.minStack = new Stack();
//     this.minValue = Number.MAX_VALUE;
//   }

//   pop() {
//     return this.minStack.pop();
//   }

//   push(value) {
//     if (value < this.minValue) {
//       this.minValue = value;
//     }
//     this.minStack.push(value);
//   }

//   min() {
//     return this.minValue;
//   }
// }

class MinStack {
  constructor() {
    this.minStack = new Stack();
    this.mainStack = new Stack();
  }

  pop() {
    this.minStack.pop();
    return this.mainStack.pop();
  }

  push(value) {
    if (value > this.minStack.getTop() && this.minStack.isEmpty() == false) {
      this.minStack.push(this.minStack.getTop());
    } else {
      this.minStack.push(value);
    }

    this.mainStack.push(value);
  }

  min() {
    return this.minStack.getTop();
  }
}

const stack = new MinStack();

stack.push(5);
stack.push(2);
stack.push(4);
stack.push(1);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

// console.log(stack.min());
