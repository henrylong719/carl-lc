function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return head;

  // get the length of the list
  let len = 1;
  let tail = head;

  while (tail.next) {
    len += 1;
    tail = tail.next;
  }

  k = k % len;
  if (k === 0) return head;

  // get the node before the new head
  let cur = head;
  for (let i = 0; i < len - k - 1; i++) {
    cur = cur.next;
  }

  let newHead = cur.next;
  cur.next = null;
  tail.next = head;

  return newHead;
}

// Time complexity: O(n)
// Space complexity: O(1)
