function curry(func) {
  function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, [...args]);
    }
    return function (...next) {
      return curried.apply(this, [...args, ...next]);
    };
  }

  return curried;
}

function addTwo(a, b) {
  return a + b;
}

const curriedAddTwo = curry(addTwo);

const alreadyAddedThree = curriedAddTwo(3);
console.log(alreadyAddedThree(4)); // 7

function multiplyThree(a, b, c) {
  return a * b * c;
}

const curriedMultiplyThree = curry(multiplyThree);
// console.log(curriedMultiplyThree(4)(5)(6)); // 120

// const containsFour = curriedMultiplyThree(4);
// const containsFourMulFive = containsFour(5);
// console.log(containsFourMulFive(6)); // 120
