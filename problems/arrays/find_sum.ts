let arr = [1, 21, 3, 14, 5, 60, 7, 6];
let value = 81;
// output: [21,60]

function findSum(arr: number[], value: number) {
  const sortedArr = arr.sort((a, b) => a - b);

  let i = 0;
  let j = sortedArr.length - 1;

  while (i < j) {
    const left = sortedArr[i];
    const right = sortedArr[j];
    const currentSum = left + right;

    if (currentSum === value) {
      return [left, right];
    }

    if (currentSum < value) {
      i++;
    } else {
      j--;
    }
  }

  // not finding result
  return false;
}

console.log(findSum(arr, value));
