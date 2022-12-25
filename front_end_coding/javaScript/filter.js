// Array.prototype.myFilter = function (callbackFn, thisArg) {
//   const result = [];
//   this.forEach((ele) => {
//     if (!!callbackFn(ele)) {
//       result.push(ele);
//     }
//   });
//   return result;
// };

Array.prototype.myFilter = function (callbackFn, thisArg) {
  const len = this.length;
  const result = [];

  for (let i = 0; i < len; i++) {
    const kValue = this[i];
    if (Object.hasOwn(i) && callbackFn.call(thisArg, kValue, i, this)) {
      result.push(kValue);
    }
  }
  return result;
};
