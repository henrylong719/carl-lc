function limit(func, n) {
  let limitNumber = n;
  let value;

  return function (...args) {
    if (limitNumber > 0) {
      value = func.apply(this, args);
      limitNumber = limitNumber - 1;
      return value;
    }

    return value;
  };
}
