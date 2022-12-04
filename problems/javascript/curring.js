function multiply(a, b, c) {
  return a * b * c;
}

function currying(func) {
  function curriedfunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedfunc(...args, ...next);
      };
    }
  }
  return curriedfunc;
}

let curried = currying(multiply);

// console.log(curried(2, 3, 4, 5, 6));

console.log(curried(2)(3)(4)); //24
console.log(curried(2, 3)(4)); //24

// console.log(curried(2, 3)(4));
