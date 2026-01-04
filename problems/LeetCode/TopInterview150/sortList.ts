function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  const l1 = sortList(head);
  const l2 = sortList(slow);

  return merge(l1, l2);
}

function merge(l1: ListNode, l2: ListNode): ListNode {
  const dummy = new ListNode();
  let cur = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }

  if (l1) {
    cur.next = l1;
  }

  if (l2) {
    cur.next = l2;
  }

  return dummy.next;
}

// Time: O(nlog(n))
// Space: nlog(n) ecursion depth is log n
