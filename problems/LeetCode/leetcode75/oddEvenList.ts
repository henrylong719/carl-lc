function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
}

// Time: O(n)
// Space: O(1)
