// implement find sum using hash table
// arr = [1,21,3,14,5,60,7,6]
// value = 81
// arr = [21,60]

'use strict';
const HashEntry = require('./HashEntry.js');
const HashTable = require('./HashTable.js');

function findSum(arr, value) {
  let obj = {};

  for (let i of arr) {
    if (obj[value - i] !== undefined) {
      return [value - i, i];
    }
    obj[i] = 1;
  }
  return false;
}

function findSumTwo(arr, value) {
  let ht = new HashTable();

  for (let i of arr) {
    if (ht.search(value - i) !== null) {
      return [value - i, i];
    }
    ht.insert(value, 1);
  }
}

console.log(findSum([1, 21, 3, 14, 5, 60, 7, 6], 81));
