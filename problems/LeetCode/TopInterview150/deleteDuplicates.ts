function deleteDuplicates(head: ListNode | null): ListNode | null {
  const map = new Map<number, number>();

  let cur = head;

  while (cur) {
    const count = (map.get(cur.val) ?? 0) + 1;
    map.set(cur.val, count);
    cur = cur.next;
  }

  let dummy = new ListNode();
  cur = dummy;

  for (const [key, value] of map) {
    if (value > 1) {
      continue;
    }

    cur.next = new ListNode(key);
    cur = cur.next;
  }

  return dummy.next;
}

// Time complexity: O(n)
// Space complexity: O(n)

function deleteDuplicates2(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(0, head);
  let cur = dummy;
  let pre = null;

  while (head) {
    // find the node with value differ from pre and next
    while (
      head &&
      (head.val === pre || (head.next && head.val === head.next.val))
    ) {
      pre = head.val;
      head = head.next;
    }

    cur.next = head;
    cur = cur.next;

    // in the linked list, if we change the main variable inside the loop, we
    // need to make sure the variable is not null
    if (head) {
      head = head.next;
    }
  }

  return dummy.next;
}

function deleteDuplicates3(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(0, head);
  let cur = dummy;

  while (cur.next && cur.next.next) {
    let val = cur.next.val;

    if (val === cur.next.next.val) {
      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
}

// Time complexity: O(n)
// Space complexity: O(1)
