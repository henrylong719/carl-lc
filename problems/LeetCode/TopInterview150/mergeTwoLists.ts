function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode();
  let cur = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }

  cur.next = list1 ? list1 : list2;

  return dummy.next;
}

// Time complexity: O(m+n)
// Space complexity: O(1)

function mergeTwoListsRec(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 || !list2) {
    return list1 ? list1 : list2;
  }

  if (list1.val > list2.val) {
    // let temp = list1;
    // list1 = list2;
    // list2 = temp;
    [list1, list2] = [list2, list1];
  }

  list1.next = mergeTwoLists(list1.next, list2);
  return list1;
}

// Time complexity: O(m+n)
// Space complexity: O(m+n)
