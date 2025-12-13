function partition(head: ListNode | null, x: number): ListNode | null {
  const less = [];
  const greaterEqual = [];

  for (let cur = head; cur !== null; cur = cur.next) {
    if (cur.val < x) {
      less.push(cur.val);
    } else {
      greaterEqual.push(cur.val);
    }
  }

  const combined = [...less, ...greaterEqual];

  let dummy = new ListNode();
  let cur = dummy;

  for (let val of combined) {
    cur.next = new ListNode(val);
    cur = cur.next;
  }

  return dummy.next;
}

function partition2(head: ListNode | null, x: number): ListNode | null {
  const sList = new ListNode();
  const bList = new ListNode();
  let small = sList;
  let big = bList;

  for (let cur = head; cur !== null; cur = cur.next) {
    if (cur.val < x) {
      small.next = new ListNode(cur.val);
      small = small.next;
    } else {
      big.next = new ListNode(cur.val);
      big = big.next;
    }
  }

  small.next = bList.next;
  big.next = null;

  return sList.next;
}

// Time compleixty: O(n)
// Space complexity: O(n)
