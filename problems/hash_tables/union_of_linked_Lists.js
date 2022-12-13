'use strict';
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const HashEntry = require('./HashEntry.js');
const HashTable = require('./HashTable.js');

//Access HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Create List => list = LinkedList()
//Node class { data ; Node nextElement;}
// Create Hash Table => let hashtable =  new HashTable()
// insert in hashtable => hashtable.insert(key, value)
// search in hashtable => hashtable.search(key)
// delete in hashtable => hashtable.delete(key)

//Returns a list containing the union of list1 and list2
// function union(list1, list2) {
//   // Write your code here
//   let currentList1Node = list2.getHead();
//   let previousList1Node = list2.getHead();
//   let ht = new HashTable();

//   while (!!currentList1Node) {
//     if (ht.search(currentList1Node.data) !== null) {
//       previousList1Node.nextElement = currentList1Node.nextElement;
//       currentList1Node = currentList1Node.nextElement;
//       continue;
//     }
//     ht.insert(currentList1Node.data, 1);
//     previousList1Node = currentList1Node;
//     currentList1Node = currentList1Node.nextElement;
//   }

//   let currentList2Node = list1.getHead();

//   while (!!currentList2Node) {
//     if (ht.search(currentList2Node.data) !== null) {
//       currentList2Node = currentList2Node.nextElement;
//       continue;
//     }
//     list1.insertAtTail(currentList2Node.data);
//     ht.insert(currentList2Node.data, 1);
//     currentList2Node = currentList2Node.nextElement;
//   }

//   return list1;
// }

function unionTwo(list1, list2) {
  let ht = new HashTable();

  let list1Current = list1.getHead();

  while (!!list1Current) {
    ht.insert(list1Current.data, 1);
    list1Current = list1Current.nextElement;
  }

  let list2Current = list2.getHead();

  while (!!list2Current) {
    if (ht.search(list2Current.data) === null) {
      list1.insertAtHead(list2Current.data);
    }
    list2Current = list2Current.nextElement;
  }

  return list1;
}
