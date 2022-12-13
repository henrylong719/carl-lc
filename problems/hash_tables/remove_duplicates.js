const LinkedList = require('../linked_list/LinkedList');
const Node = require('../linked_list/Node');
const HashEntry = require('./HashEntry.js');
const HashTable = require('./HashTable.js');

function removeDuplicates(list) {
  // let ht = new HashTable();

  let ht = new HashTable();
  let resultList = new LinkedList();
  let currentNode = list.getHead();

  while (!!currentNode) {
    if (ht.search(currentNode.data) !== null) {
      currentNode = currentNode.nextElement;
      continue;
    }
    resultList.insertAtTail(currentNode.data);
    ht.insert(currentNode.data, 1);
    currentNode = currentNode.nextElement;
  }

  //Write your code here

  return resultList; //return the updated list here
}
