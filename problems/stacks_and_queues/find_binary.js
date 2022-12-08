'use strict';

const Queue = require('./queue');

// const Queue = require('./queue');

function findBin(number) {
  let counter = 1;
  // const queue = new Queue();
  const result = [];

  while (counter <= number) {
    // queue.enqueue(counter);

    const binary = dec2bin(counter);

    result.push(binary);

    counter++;
  }

  return result;
}

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

function fundBinUsingQueue(number) {
  let result = [];
  let queue = new Queue();
  let s1 = '';
  let s2 = '';

  queue.enqueue('1');

  for (let i = 0; i < number; i++) {
    result[i] = queue.dequeue();

    s1 = result[i] + '0';
    s2 = result[i] + '1';

    queue.enqueue(s1);
    queue.enqueue(s2);
  }

  return result;
}

console.log(fundBinUsingQueue(8));
