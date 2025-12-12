function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let listLen = 0;
  let cur = head;

  while (cur) {
    listLen++;
    cur = cur.next;
  }

  let dummy = new ListNode();
  dummy.next = head;
  let leftPre = dummy;

  for (let i = 0; i < listLen - n; i++) {
    leftPre = head;
    head = head.next;
  }

  leftPre.next = head.next;
  return dummy.next;
}

// Time complexity: O(n)
// Space complexity: O(1)

function removeNthRec(head: ListNode | null, n: number) {
  if (!head) {
    return head;
  }
  if (n === 0) {
    return head.next;
  }
  head.next = removeNthRec(head.next, n - 1);
  return head;
}

function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  let nodeCount = 0;

  let cur = head;

  while (cur) {
    nodeCount++;
    cur = cur.next;
  }

  return removeNthRec(head, nodeCount - n);
}

// Time complexity: O(n)
// Space complexity: O(n)

function removeNthFromEnd3(head: ListNode | null, n: number): ListNode | null {
  let ans = new ListNode(0, head);

  for (let i = 0; i < n; i++) {
    head = head.next;
  }

  let dummy = ans;

  while (head) {
    head = head.next;
    dummy = dummy.next;
  }

  dummy.next = dummy.next.next;

  return ans.next;
}

// Time complexity: O(n)
// Space complexity: O(1)
