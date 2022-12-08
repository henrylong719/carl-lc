'use strict';

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

console.log(findBin(3));
