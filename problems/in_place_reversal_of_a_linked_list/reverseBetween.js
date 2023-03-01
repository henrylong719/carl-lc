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
  let dummy = LinkedListNode(0, head);

  let leftPrev = dummy;
  let cur = head;

  // loop until cur is in "left"
  for (let i = 0; i < left - 1; i++) {
    leftPrev = cur;
    cur = cur.next;
  }

  let prev = null;

  // reverse the linked list from position "left" to position "right"
  for (let i = 0; i < right - left + 1; i++) {
    let tempNext = cur.next;
    cur.next = prev;
    prev = cur;
    cur = tempNext;
  }

  leftPrev.next.next = cur;
  leftPrev.next = prev;

  return dummy.next;
}
