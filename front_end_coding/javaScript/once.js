function once(func) {
  let isRun = false;
  let value;

  return function (...args) {
    if (!isRun) {
      value = func.bind(this, args);
      return value;
    }
    return value;
  };
}

let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const incrementByOnce = once(incrementBy);
incrementByOnce(2); // i is now 3; The function returns 3.
incrementByOnce(3); // i is still 3; The function returns the result of the first invocation, which is 3.
i = 4;
incrementByOnce(2); // i is still 4 as it is not modified. The function returns the result of the first invocation, which is 3.
