const LinkedList = require('././linked_list.js');
const LinkedListNode = require('./linked_list_node.js');

function reverse(head) {
  if (!head || !head.next) return head;

  let listNode = head.next;
  let reversedNode = head;
  reversedNode.next = null;

  while (listNode !== null) {
    let temp = listNode;
    listNode = temp.next;
    temp.next = reversedNode;
    reversedNode = temp;
  }

  return reversedNode;
}

// Driver code
function main() {
  let inputList = [1, 2, 3, 4, 5, 6, 7, 8];
  let linkedList = new LinkedList();
  linkedList.createLinkedList(inputList);

  console.log(
    'The original linked list: ',
    printListWithForwardArrow(linkedList.head)
  );
  let result = reverse(linkedList.head);
  console.log(
    '\nThe reversed linked list:  ',
    printListWithForwardArrow(result)
  );
}

main();
