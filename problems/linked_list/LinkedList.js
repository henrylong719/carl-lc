'use strict';
const Node = require('./Node.js');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  //Insertion At Head
  insertAtHead(newData) {
    let tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this; //returning the updated list
  }

  isEmpty() {
    return this.head == null;
  }

  //function to print the linked list
  printList() {
    if (this.isEmpty()) {
      console.log('Empty List');
      return false;
    } else {
      let temp = this.head;
      while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(' -> ');
        temp = temp.nextElement;
      }
      console.log('null');
      return true;
    }
  }

  getHead() {
    return this.head;
  }
  getListStr() {
    if (this.isEmpty()) {
      console.log('Empty List');
      return 'null';
    } else {
      let st = '';
      let temp = this.head;
      while (temp != null) {
        st += String(temp.data);
        st += ' -> ';
        temp = temp.nextElement;
      }
      st += 'null';
      return st;
    }
  }
  insertAtTail(newData) {
    //Creating a new Node with data as newData
    let node = new Node(newData);

    //check for case when list is empty
    if (this.isEmpty()) {
      //Needs to Insert the new node at Head
      this.head = node;
      return this;
    }

    //Start from head
    let currentNode = this.head;

    //Iterate to the last element
    while (currentNode.nextElement != null) {
      currentNode = currentNode.nextElement;
    }

    //Make new node the nextElement of last node of list
    currentNode.nextElement = node;
    return this;
  }
  search(value) {
    //Start from the first element
    let currentNode = this.head;

    //Traverse the list until you find the value or reach the end
    while (currentNode != null) {
      if (currentNode.data == value) {
        return true; //value found
      }
      currentNode = currentNode.nextElement;
    }
    return false; //value not found
  }
  deleteAtHead() {
    //if list is empty, do nothing
    if (this.isEmpty()) {
      return this;
    }
    //Get the head and first element of the list
    let firstElement = this.head;

    //If list is not empty, link head to the nextElement of firstElement
    this.head = firstElement.nextElement;

    return this;
  }
};
