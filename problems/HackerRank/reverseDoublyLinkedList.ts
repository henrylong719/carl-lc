class DoublyLinkedListNode {
  data: number;
  next: DoublyLinkedListNode | null;
  prev: DoublyLinkedListNode | null;

  constructor(nodeData: number) {
    this.data = nodeData;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: DoublyLinkedListNode | null;
  tail: DoublyLinkedListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData: number): void {
    let node = new DoublyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
  }
}

function reverse(llist: DoublyLinkedListNode): DoublyLinkedListNode {
  let cur = llist as any;
  let pre = null;

  while (cur !== null) {
    let next = cur.next;
    cur.next = pre;
    cur.prev = next;
    pre = cur;
    cur = next;
  }

  return pre as DoublyLinkedListNode;
}
