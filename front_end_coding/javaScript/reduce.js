Array.prototype.myReduce = function (callbackFn, initialValue) {
  const noInitialValue = initialValue === undefined;
  const len = this.length;

  if (noInitialValue && len === 0) {
    throw new TypeError('no initial value and array is empty');
  }

  const acc = noInitialValue ? this[0] : initialValue;
  const startingIndex = noInitialValue ? 1 : 0;

  for (let i = startingIndex; i < len; i++) {
    if (Object.hasOwn(this, i)) {
      acc = callbackFn(acc, this[i], i, this);
    }
  }

  return acc;
};
