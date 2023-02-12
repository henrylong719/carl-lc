// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// how to know which one is the starting node of the cycle

export function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow!.next;

    if (fast === slow) {
      // move fast pointer to the beginning of the list
      fast = head;
      while (fast !== slow) {
        fast = fast!.next;
        slow = slow!.next;
      }
      // meeting point is the node where the cycle begins. I
      return fast;
    }
  }
  return null;
}
