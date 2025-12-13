function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let dummy = new ListNode();
  dummy.next = head;
  let leftPre = dummy;

  for (let i = 0; i < left - 1; i++) {
    leftPre = head;
    head = head.next;
  }

  let pre = null;

  // reverse nodes between left and right
  for (let i = 0; i <= right - left; i++) {
    let nxt = head.next;
    head.next = pre;
    pre = head;
    head = nxt;
  }

  leftPre.next.next = head;
  leftPre.next = pre;

  return dummy.next;
}

// Time complexity: O(n)
// Space complexity: O(1)
