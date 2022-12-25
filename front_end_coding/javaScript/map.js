Array.prototype.myMap = function (callbackFn, thisArg) {
  const len = this.length;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    if (Object.hasOwn(this, i)) {
      result[i] = callbackFn.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

console.log([1, 2, undefined, 4].myMap((x) => x));
