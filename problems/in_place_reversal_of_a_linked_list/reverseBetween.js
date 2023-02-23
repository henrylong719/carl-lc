import LinkedList from './linked_list.js';
import LinkedListNode from './linked_list_node.js';
import traverseLinkedList from './linked_list_traversal.js';
import reverseLinkedList from './linked_list_reversal.js';

/*
 * [1,2,3,4,5,4,3,2,1]     1, 9
 * [1,2,3,4,5]   2,4
 * [103,7,10,-9,105,67,31,63]   1,8
 * [-499,399,-299,199,-99,9]    3,5
 * [7,-9,2,-10,1,-8,6]   2,5
 * [-10,-20,-30,-40,-50,-60,-70,-80,-90]   1,8
 */

export function reverseBetween(head, left, right) {
  if (!head || !head.next) return head;

  let counter = 0;
  let listNode = head.next;
  let signalNode = head;
  let reverseNode = head;

  while (listNode !== null) {
    counter++;

    if (counter < left) {
      listNode = listNode.next;
      signalNode = signalNode.next;
      reverseNode = reverseNode.next;
    }

    // start reversing
    if (counter >= left && counter < right) {
      let temp = listNode;
      listNode = listNode.next;
      temp.next = reverseNode;
      reverseNode = temp;
    }

    // stop reversing
    if (counter === right) {
      let temp = listNode;
      listNode = listNode.next;
      reverseNode.next = signalNode;
      signalNode.next = temp;
    }

    if (counter > right) {
      listNode = listNode.next;
    }
  }
  return reverseNode;
}
