/**
 *
 * sum(1)(); // 1
 * sum(1)(2)(); // 3
 * sum(1)(2)(-3)(); // 0
 *
 */

function sum(numberA) {
  return function (numberB) {
    return numberB === undefined ? numberA : sum(numberA + numberB);
  };
}

const addTwo = sum(2);
console.log(addTwo(3)());
console.log(addTwo(4)());
console.log(addTwo(3)(4)());

// console.log(sum(1)());
// console.log(sum(1)(2)());
// console.log(sum(1)(2)(-3)());
