function mergeArraysTwo(arr1: number[], arr2: number[]) {
  let merge = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merge.push(arr1[i]);
      i++;
    } else {
      merge.push(arr2[j]);
      j++;
    }
  }

  if (i <= arr1.length - 1) {
    arr1.splice(0, i);
    merge = merge.concat(arr1);
  } else if (j <= arr2.length - 1) {
    arr2.splice(0, j);
    merge = merge.concat(arr2);
  }

  return merge;
}

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 6, 7, 8];

console.log(mergeArraysTwo(arr1, arr2));

export {};

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
