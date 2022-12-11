'use strict';
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data ; Node nextElement;}
// function findMid(list) {
//   let listLength = 0;
//   let midNode = null;
//   let node = list.getHead();

//   while (node !== null) {
//     listLength++;
//     node = node.nextElement();
//   }

//   let mid = listLength / 2;

//   if (!Number.isInteger(mid)) {
//     mid = mid + 1;
//   }

//   midNode = list.getHead();

//   while (mid > 1) {
//     midNode = midNode.nextElement();
//     mid--;
//   }

//   //Write your code here
//   // You have to return the middle node itself not its value

//   return midNode;
// }

// fast slow pointer

function findMid(list) {
  let midNode = null;

  let fastPointer = list.getHead();
  let slowPointer = list.getHead();

  if (list.isEmpty()) {
    return null;
  }

  if (slowPointer.nextElement === null) {
    return slowPointer;
  }

  while (
    slowPointer.nextElement !== null &&
    fastPointer.nextElement !== null &&
    fastPointer.nextElement.nextElement !== null
  ) {
    slowPointer = slowPointer.nextElement;
    fastPointer = fastPointer.nextElement.nextElement;
  }

  return slowPointer;
}
