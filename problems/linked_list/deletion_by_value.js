'use strict';
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

// LinkedList.prototype.deleteVal = function (value) {
//   let deleted = false;
//   let currentNode = this.head;
//   let previousNode = null;

//   while (currentNode !== null) {
//     if (currentNode.data === value) {
//       if (previousNode !== null) {
//         previousNode.nextElement = currentNode.nextElement;
//         deleted = true;
//         return deleted;
//       }
//       this.head = currentNode.nextElement;
//     }
//     previousNode = currentNode;
//     currentNode = currentNode.nextElement;
//   }

//   //Write code here
//   return deleted;
// };

// LinkedList = 3->2->1->0
// integer = 1
// solution 2
LinkedList.prototype.deleteVal = function (value) {
  let currentNode = this.head;

  if (this.isEmpty()) {
    return false;
  }

  if (currentNode.data === value) {
    this.head = currentNode.nextElement;
    return true;
  }

  while (currentNode.nextElement !== null) {
    if (currentNode.nextElement.data === value) {
      currentNode.nextElement = currentNode.nextElement.nextElement;
      return true;
    }
    currentNode = currentNode.nextElement;
  }

  return false;
};
