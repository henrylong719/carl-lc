let arr = [1, 21, 3, 14, 5, 60, 7, 6];
let value = 81;
// output: [21,60]

// brutal solution
// time complexity x^2
function findSumBrutal(arr: number[], value: number) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === value) {
        return [arr[i], arr[j]];
      }
    }
  }

  return false;
}

// Moving indices
//Since most popular sorting functions take O(nlogn),
//let’s assume that the JavaScript sort() function takes the same. Then, in the worst-case scenario,
// the entire array iterated from opposite ends would take O(n). So this solution is in O(nlog(n))

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

export {};
