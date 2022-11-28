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

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 6, 7, 8];

console.log(mergeArrays(arr1, arr2));

export {};
