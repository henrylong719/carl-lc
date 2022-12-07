function maxMin(arr) {
  let left = 0;
  let right = arr.length - 1;
  let maxMinResult = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      maxMinResult.push(arr[right]);
      right--;
      continue;
    }
    maxMinResult.push(arr[left]);
    left++;
  }

  return maxMinResult;
}

console.log(maxMin([1, 2, 3, 4, 5, 6]));
// arr = [5,1,4,2,3]
