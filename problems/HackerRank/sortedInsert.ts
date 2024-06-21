import { DoublyLinkedListNode } from './reverseDoublyLinkedList';

function sortedInsert(
  llist: DoublyLinkedListNode,
  data: number
): DoublyLinkedListNode {
  let list = llist;
  let cur = llist;

  while (!!cur) {
    // data is in the head
    if (data <= list.data) {
      const node = new DoublyLinkedListNode(data);
      node.next = list;
      list.prev = node;
      list = list.prev;
      break;
    }

    // data is in the middle
    if (data >= cur.data && cur?.next && data < cur?.next?.data) {
      const node = new DoublyLinkedListNode(data);
      node.next = cur.next;
      node.prev = cur;
      cur.next.prev = node;
      cur.next = node;
      break;
    }

    // data is in the end
    if (data >= cur.data && !cur?.next) {
      const node = new DoublyLinkedListNode(data);
      node.prev = cur;
      cur.next = node;
      break;
    }

    cur = cur.next as DoublyLinkedListNode;
  }

  return list;
}
