'use strict';
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

LinkedList.prototype.deleteVal = function (value) {
  let deleted = false;
  let currentNode = this.head;
  let previousNode = null;

  while (currentNode !== null) {
    if (currentNode.data === value) {
      if (previousNode !== null) {
        previousNode.nextElement = currentNode.nextElement;
        deleted = true;
        return deleted;
      }
      this.head = currentNode.nextElement;
    }
    previousNode = currentNode;
    currentNode = currentNode.nextElement;
  }

  //Write code here
  return deleted;
};
