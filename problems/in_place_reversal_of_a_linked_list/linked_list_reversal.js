// Template for reversing a linked list

export default function reverseLinkedList(head) {
  let prev = null,
    curr = head;

  while (curr != null) {
    let nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }
  return prev;
}
