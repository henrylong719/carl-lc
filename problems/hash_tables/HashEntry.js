'use strict';
module.exports = class HashEntry {
  constructor(key, data) {
    this.key = key;
    // data to be stored
    this.value = data;
    // reference to new entry
    this.next = null;
  }
};
