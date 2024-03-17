// 1 2 3
// 4 5 6
// 7 8 9

function diagonalDifference(arr: number[][]): number {
  // const leftToRightDiag = arr[0][0] + arr[1][1] + arr[2][2];
  // const rightToLeftDiag = arr[0][2] + arr[1][1] + arr[2][0];

  let leftToRightDiag = 0;
  let rightToLeftDiag = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        leftToRightDiag += arr[i][i];
      }

      if (i + j === arr.length - 1) {
        rightToLeftDiag += arr[i][j];
      }
    }
  }

  return Math.abs(leftToRightDiag - rightToLeftDiag);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
