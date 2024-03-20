function countingSort(arr: number[]): number[] {
  // [1,1,3,2,1]

  // [0,1,0,0]
  // [0,2,0,0]
  // [0,2,0,1]
  // [0,2,1,1]
  // [0,3,1,1]

  // [1,1,1,2,3]

  const array = Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];

    if (array[ele] !== 0) {
      array[ele]++;
      continue;
    }
    array[ele] = 1;
  }

  return array;

  const result = [] as number[];

  for (let i = 0; i < array.length; i++) {
    let ele = array[i];
    while (ele > 0) {
      result.push(i);
      ele--;
    }
  }

  return result;
}

console.log(countingSort([1, 1, 3, 2, 1]));
