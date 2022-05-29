// Problem 1: Given the head of a LinkedList with a cycle, find the length of the cycle.

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function find_cycle_length(head: ListNode) {
  let fast = head;
  let slow = head;

  while (head !== null && head.next !== null) {
    fast = fast.next?.next as ListNode;
    slow = slow.next as ListNode;

    if (fast === slow) {
      // fast pointer catches the slow pointer
      return calculate_cycle_length(slow);
    }
  }

  return 0;
}

function calculate_cycle_length(slow: ListNode) {
  let current = slow;
  let cycle_length = 0;

  while (true) {
    current = current.next as ListNode;
    cycle_length++;

    if (current.next === slow) {
      return cycle_length;
    }
  }
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);
