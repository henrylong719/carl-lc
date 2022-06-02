class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return true;
  }

  // find the middle value
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next as ListNode;
    fast = fast.next.next as ListNode;
  }

  // slow is the middle value

  let reversedNode = reverseNodeList(slow) as ListNode;

  while (head !== null && reversedNode !== null) {
    if (head.val !== reversedNode.val) {
      return false;
    }

    head = head.next;
    reversedNode = reversedNode.next as ListNode;
  }

  if (head === null || reversedNode === null) {
    return true;
  }

  return false;
}

function reverseNodeList(current: ListNode) {
  let pre = null;

  while (current !== null) {
    let next = current.next;
    current.next = pre;
    pre = current;
    current = next as ListNode;
  }

  return pre;
}

const head1 = new ListNode(1);
head1.next = new ListNode(2);

console.log(isPalindrome(head1));
