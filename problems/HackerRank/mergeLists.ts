import { SinglyLinkedListNode, printNodes } from './reverseLinkedList';

function mergeLists(head1: SinglyLinkedListNode, head2: SinglyLinkedListNode) {
  // headA 1 -> 3 -> 7 -> NULL
  // headB 1 -> 2 -> NULL
  // 1 -> 1 -> 3 -> 2 -> 7 -> NULL

  // good 1
  let merged = new SinglyLinkedListNode(0);
  let cur = merged;

  while (head1?.data && !!head2.data && cur) {
    if (head1.data <= head2?.data) {
      cur.next = head1;
      head1 = head1.next as SinglyLinkedListNode;
    }

    if (head1?.data > head2?.data) {
      cur.next = head2;
      head2 = head2.next as SinglyLinkedListNode;
    }

    cur = cur.next as SinglyLinkedListNode;
  }

  // good 2
  cur.next = !!head1 ? head1 : head2;

  return merged.next;
}

const node1 = new SinglyLinkedListNode(1);
const node2 = new SinglyLinkedListNode(2);
const node3 = new SinglyLinkedListNode(3);
// const node4 = new SinglyLinkedListNode(4);

const node5 = new SinglyLinkedListNode(2);
const node6 = new SinglyLinkedListNode(3);
const node7 = new SinglyLinkedListNode(4);
// const node8 = new SinglyLinkedListNode(8);
// const node9 = new SinglyLinkedListNode(9);

node1.next = node2;
node2.next = node3;
// node3.next = node4;

node5.next = node6;
node6.next = node7;
// node7.next = node8;
// node8.next = node9;

const mergedHead = mergeLists(node1, node5);

printNodes(mergedHead);
