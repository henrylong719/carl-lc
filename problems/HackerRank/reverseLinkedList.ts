export class SinglyLinkedListNode {
  data: number;
  next: SinglyLinkedListNode | null;

  constructor(nodeData: number) {
    this.data = nodeData;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: SinglyLinkedListNode | null;
  tail: SinglyLinkedListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData: number): void {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail!.next = node;
    }

    this.tail = node;
  }

  printlist() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }
}

export function printNodes(
  node: SinglyLinkedListNode | DoublyLinkedListNode | null
) {
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}

function reverse1(llist: SinglyLinkedListNode): SinglyLinkedListNode {
  let preNode = null;
  let curNode = llist as any;

  while (curNode !== null) {
    let nextNode = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = nextNode;
  }

  return preNode as SinglyLinkedListNode;
}
