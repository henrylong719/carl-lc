function pairSum(head: ListNode | null): number {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half
  let prev: ListNode | null = null;
  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  let p1: ListNode | null = head;
  let p2: ListNode | null = prev;
  let max = -Infinity;

  while (p1 && p2) {
    max = Math.max(p1.val + p2.val, max);
    p1 = p1.next;
    p2 = p2.next;
  }

  return max;
}

// Time: O(n)
// Space: O(1)
