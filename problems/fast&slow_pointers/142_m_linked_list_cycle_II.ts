class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// how to know which one is the starting node of the cycle

function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow?.next as ListNode;

    // fast pointer catches the slow pointer
    if (fast === slow) {
      let slow = head;
      while (slow !== fast) {
        slow = slow?.next as ListNode;
        fast = fast?.next as ListNode;
      }
      return slow;
    }
  }

  return null;
}
