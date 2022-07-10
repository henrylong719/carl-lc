// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function has_cycle(head: ListNode | null) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    // fast pointer is one step before slow pointer
    fast = fast.next.next;
    slow = slow!.next;

    // two pointer in the same position
    while (slow === fast) {
      // found the cycle
      return true;
    }
  }
  return false;
}
