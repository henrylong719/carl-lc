function mergeArrays(arr1: number[], arr2: number[]) {
  const combinedArr = [...arr1, ...arr2];

  for (let i = 0; i < combinedArr.length - 1; i++) {
    for (let j = i + 1; j < combinedArr.length; j++) {
      // switch position
      if (combinedArr[i] > combinedArr[j]) {
        let temp = combinedArr[i];
        combinedArr[i] = combinedArr[j];
        combinedArr[j] = temp;
      }
    }
  }

  return combinedArr;
}
// time complexity: O(n * m) (n^2)

function mergeArraysTwo(arr1: number[], arr2: number[]) {
  // define an extra array and two pointer
  let merged = [];
  let i = 0;
  let j = 0;

  // loop and compare each element in two arrays until one of them is empty

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // get rest elements of the other array
  if (i <= arr1.length - 1) {
    arr1.splice(0, i);
    merged = merged.concat(arr1);
  } else if (j <= arr2.length - 1) {
    arr2.splice(0, j);
    merged = merged.concat(arr2);
  }

  return merged;
}

// time complexity: O(n + m)
// both the arrays are iterated over once.

function mergeArraysThree(arr1: number[], arr2: number[]) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

// time complexity: O(nlogn)

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 6, 7, 8];

console.log(mergeArraysThree(arr1, arr2));

export {};
