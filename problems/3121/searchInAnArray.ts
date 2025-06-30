const searchInArray = (arr: number[][], target: number): number[] | null => {
  let n = arr.length;

  let row = 0;
  let col = n - 1;

  let curr = arr[row][col];

  while (row < n && col >= 0) {
    const curr = arr[row][col];
    if (curr === target) {
      return [row, col];
    }

    if (curr > target) {
      col--;
    } else {
      row++;
    }
  }

  return null;
};

let array = [
  [2, 3, 6, 8],
  [4, 5, 7, 10],
  [6, 8, 9, 13],
  [9, 11, 12, 15],
];

console.log(searchInArray(array, 9));
