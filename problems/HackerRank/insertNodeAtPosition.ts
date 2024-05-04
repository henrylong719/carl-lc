import { SinglyLinkedListNode, printNodes } from './reverseLinkedList';

function insertNodeAtPosition(
  llist: SinglyLinkedListNode,
  data: number,
  position: number
): SinglyLinkedListNode {
  // 1 -> 2 -> 3
  // data = 4 position = 2
  // 1 -> 2 -> 4 -> 3
  // 16 -> 13 -> 7
  // data = 1 position = 2
  // 16 -> 13 -> 1 -> 7

  let counter = 1;
  let cur = llist as any;

  while (cur !== null) {
    let pre = cur;
    let next = cur.next;

    if (counter === position) {
      const node = new SinglyLinkedListNode(data);
      pre.next = node;
      node.next = next;
      return llist;
    }

    counter++;
    cur = cur.next;
  }

  return llist;
}

const node1 = new SinglyLinkedListNode(1);
const node2 = new SinglyLinkedListNode(2);
const node3 = new SinglyLinkedListNode(3);
// const node4 = new SinglyLinkedListNode(4);
// const node5 = new SinglyLinkedListNode(5);

node1.next = node2;
node2.next = node3;
// node3.next = node4;
// node4.next = node5;

insertNodeAtPosition(node1, 4, 2);

printNodes(node1);
