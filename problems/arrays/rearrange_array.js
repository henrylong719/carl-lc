function reArrange(arr) {
  const negativeArr = [];
  const positiveArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeArr.push(arr[i]);
    } else {
      positiveArr.push(arr[i]);
    }
  }

  return [...negativeArr, ...positiveArr];
}

console.log(reArrange([10, -1, 20, 4, 5, -9, -6]));
