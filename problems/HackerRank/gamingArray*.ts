function gamingArray(arr: number[]): string {
  let flag = true;
  let maxIndex = undefined;
  const _arr = [...arr] as any;

  while (maxIndex !== 0) {
    maxIndex = findMaxIndex(_arr, maxIndex || _arr.length);
    _arr[maxIndex] = undefined;
    flag = !flag;
  }

  return flag ? 'ANDY' : 'BOB';
}

function findMaxIndex(arr: number[], length: number) {
  let max = 0;

  for (let i = 1; i < length; i++) {
    if (arr[i] > arr[max]) {
      max = i;
    }
  }
  return max;
}

function gamingArray2(arr: number[]): string {
  let max = 0;
  let counter = 0;

  for (let ele of arr) {
    if (ele > max) {
      max = ele;
      counter++;
    }
  }

  return counter % 2 === 0 ? 'ANDY' : 'BOB';
}

console.log(
  gamingArray([
    89644, 17506, 4432, 22750, 3565, 71526, 64287, 29748, 79224, 82710, 62105,
    60082, 8903, 6167, 39579, 41112, 84407, 88392, 44651, 78310, 90948, 7811,
    95123, 6219, 8846, 77311, 33393, 34124, 56531, 41635, 88998, 80137, 11395,
    84689, 75359, 95471, 17311, 97977, 83875, 8808, 74105, 83483, 72018, 4880,
    96434, 59384, 86542, 75875, 60180, 17942, 61123, 40794, 3435, 26256, 55865,
    22589, 95394, 24489, 18761, 55707, 86941, 43041, 64087, 14425, 12810, 51299,
    44832, 43887, 85737, 30339, 67341, 3365, 57079, 49873, 71282, 17916, 36274,
    46478, 31480, 69431, 27996, 61581, 54078, 58596, 81289, 85086, 3974, 57368,
    21018, 37285, 73439, 91187, 5966, 33799, 13540, 1116,
  ])
);
