import { SinglyLinkedListNode, printNodes } from './reverseLinkedList';
function hasCycle(head: SinglyLinkedListNode) {
  let pre = head;
  let cur = head;

  while (cur) {
    pre = pre?.next as SinglyLinkedListNode;
    cur = cur?.next?.next as SinglyLinkedListNode;
    if (pre == cur) {
      return 1;
    }
  }

  return 0;
}

const node1 = new SinglyLinkedListNode(1);
const node2 = new SinglyLinkedListNode(2);
const node3 = new SinglyLinkedListNode(3);
const node4 = new SinglyLinkedListNode(4);

const node5 = new SinglyLinkedListNode(2);
const node6 = new SinglyLinkedListNode(3);
const node7 = new SinglyLinkedListNode(4);
const node8 = new SinglyLinkedListNode(8);
const node9 = new SinglyLinkedListNode(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;

node4.next = node5;

node5.next = node2;

console.log(hasCycle(node1));
