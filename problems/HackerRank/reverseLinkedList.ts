class SinglyLinkedListNode {
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

function printNodes(node: SinglyLinkedListNode | null) {
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}

function reverse(llist: SinglyLinkedListNode): SinglyLinkedListNode {
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

const node1 = new SinglyLinkedListNode(1);
const node2 = new SinglyLinkedListNode(2);
const node3 = new SinglyLinkedListNode(3);
const node4 = new SinglyLinkedListNode(4);
// const node5 = new SinglyLinkedListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
// node4.next = node5;

const node = reverse(node1);

printNodes(node);
