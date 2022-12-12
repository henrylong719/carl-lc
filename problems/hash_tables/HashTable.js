'use strict';
const HashEntry = require('./HashEntry.js');

module.exports = class HashTable {
  //Constructor
  constructor() {
    //Size of the HashTable
    this.slots = 10;
    //Current entries in the table
    //Used while resizing the table when half of the table gets filled
    this.size = 0;
    //Array of HashEntry objects (by deafult all null)
    this.bucket = [];
    for (var i = 0; i < this.slots; i++) {
      this.bucket[i] = null;
    }
    this.threshold = 0.6;
  }
  //Helper Functions
  get_size() {
    return this.size;
  }
  //Hash Function
  getIndex(key) {
    let index = key % this.slots;
    return index;
  }
  isEmpty() {
    return this.get_size() == 0;
  }

  insert(key, value) {
    //Find the node with the given key
    let b_Index = this.getIndex(key);
    if (this.bucket[b_Index] == null) {
      this.bucket[b_Index] = new HashEntry(key, value);
      console.log(String(key) + ', ' + String(value) + ' - inserted.');
    } else {
      let head = this.bucket[b_Index];
      while (head != null) {
        if (head.key == key) {
          head.value = value;
          break;
        } else if (head.next == null) {
          head.next = new HashEntry(key, value);
          console.log(String(key) + ', ' + String(value) + ' - inserted.');
          break;
        }
        head = head.next;
      }
    }

    this.size += 1;
    let load_factor = Number(this.size) / Number(this.slots);
    //Checks if 60% of the entries in table are filled, threshold = 0.6
    if (load_factor >= this.threshold) {
      this.resize();
    }
  }

  //Return a value for a given key
  search(key) {
    //Find the node with the given key
    let b_Index = this.getIndex(key);
    let head = this.bucket[b_Index];
    //Search key in the slots
    if (head != null) {
      while (head != null) {
        if (head.key == key) {
          return head.value;
        }
        head = head.next;
      }
    }
    //If key not found
    console.log('Key not found');
    return null;
  }

  //Remove a value based on a key
  deleteVal(key) {
    //Find index
    let b_Index = this.getIndex(key);
    let head = this.bucket[b_Index];
    //If key exists at first slot
    if (head.key == key) {
      this.bucket[b_Index] = head.next;
      console.log('Key deleted');
      this.size -= 1;
      return this;
    }
    //Find the key in slots
    let prev = null;
    while (head != null) {
      //If key exists
      if (head.key == key) {
        prev.next = head.next;
        console.log('Key deleted');
        this.size -= 1;
        return this;
      }
      //Else keep moving in chain
      prev = head;
      head = head.next;
    }
    //If key does not exist
    console.log('Key not found');
    return null;
  }

  resize() {
    let new_slots = this.slots * 2;
    let new_bucket = [];
    for (var n = 0; n < new_slots; n++) {
      new_bucket[n] = null;
    }
    this.slots = new_slots;
    // rehash all items into new slots
    for (var i = 0; i < this.bucket.length; i++) {
      let head = this.bucket[i];
      while (head != null) {
        let new_index = this.getIndex(head.key);
        if (new_bucket[new_index] == null) {
          new_bucket[new_index] = new HashEntry(head.key, head.value);
        } else {
          let node = new_bucket[new_index];
          while (node != null) {
            if (node.key == head.key) {
              node.value = head.value;
              node = null;
            } else if (node.next == null) {
              node.next = new HashEntry(head.key, head.value);
              node = null;
            } else {
              node = node.next;
            }
          }
        }
        head = head.next;
      }
    }
    this.bucket = new_bucket;
  }
};
