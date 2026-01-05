function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = slow.next;

  return head;
}
// Time: O(n)
// Space: O(1)
