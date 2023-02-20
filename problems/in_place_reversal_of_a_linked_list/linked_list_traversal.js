// Template for traversing a linked list

export default function traverseLinkedList(head) {
  let current = head,
    nxt = null;

  while (current != null) {
    nxt = current.next;
    current = nxt;
  }
}
