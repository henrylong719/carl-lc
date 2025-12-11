class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let numL1 = '';
  let numL2 = '';

  let cur = l1;

  while (cur) {
    numL1 += String(cur.val);
    cur = cur.next;
  }

  cur = l2;
  while (cur) {
    numL2 += String(cur.val);
    cur = cur.next;
  }

  let num1 = !!numL1
    ? BigInt(Number(numL1.split('').reverse().join('')))
    : BigInt(0);
  let num2 = !!numL2
    ? BigInt(Number(numL2.split('').reverse().join('')))
    : BigInt(0);

  let sum = String(num1 + num2);

  console.log('sum', sum);

  let newNode = new ListNode(Number(sum[sum.length - 1]));
  cur = newNode;

  for (let i = sum.length - 2; i >= 0; i--) {
    cur.next = new ListNode(Number(sum[i]));
    cur = cur.next;
  }

  return newNode;
}

function arrayToLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

const head2 = addTwoNumbers(
  arrayToLinkedList([
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1,
  ]),
  arrayToLinkedList([5, 6, 4])
);

function traverseList(head: ListNode | null): void {
  let current = head;

  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

// traverseList(head2);

function addTwoNumbers2(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode();
  let newNode = new ListNode();
  dummy.next = newNode;

  let cur1 = l1;
  let cur2 = l2;

  let carry = 0;

  while (cur1 && cur2) {
    let sum = cur1.val + cur2.val + carry;

    carry = sum >= 10 ? 1 : 0;

    if (carry) {
      sum = sum - 10;
    }

    cur1 = cur1.next;
    cur2 = cur2.next;

    newNode.val = sum;
    if (carry || cur1 || cur2) {
      newNode.next = new ListNode();
      newNode = newNode.next;
    }
  }

  while (cur1) {
    let sum = cur1.val + carry;

    carry = sum >= 10 ? 1 : 0;

    if (carry) {
      sum = sum - 10;
    }

    newNode.val = sum;
    cur1 = cur1.next;

    if (carry || cur1) {
      newNode.next = new ListNode();
      newNode = newNode.next;
    }
  }

  while (cur2) {
    let sum = cur2.val + carry;

    carry = sum >= 10 ? 1 : 0;

    if (carry) {
      sum = sum - 10;
    }

    newNode.val = sum;
    cur2 = cur2.next;
    if (carry || cur2) {
      newNode.next = new ListNode();
      newNode = newNode.next;
    }
  }

  if (carry !== 0) {
    newNode.val = carry;
  }

  return dummy.next;
}
function addTwoNumbers3(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode();
  let newNode = dummy;

  let cur1 = l1;
  let cur2 = l2;
  let carry = 0;

  while (cur1 || cur2 || carry) {
    let sum = (cur1?.val ?? 0) + (cur2?.val ?? 0) + carry;

    carry = sum >= 10 ? 1 : 0;

    if (carry) {
      sum = sum - 10;
    }

    cur1 = cur1 ? cur1.next : null;
    cur2 = cur2 ? cur2.next : null;

    newNode.next = new ListNode(sum);
    newNode = newNode.next;
  }

  return dummy.next;
}

function addTwoNumbers4(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let total = 0;
  let carry = 0;

  let dummy = new ListNode();
  let newNode = dummy;

  while (l1 || l2 || carry) {
    total = carry;

    if (l1) {
      total += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      total += l2.val;
      l2 = l2.next;
    }

    let num = total % 10;
    carry = Math.floor(total / 10);

    newNode.next = new ListNode(num);
    newNode = newNode.next;
  }

  return dummy.next;
}
