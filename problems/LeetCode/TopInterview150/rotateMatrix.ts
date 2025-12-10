function rotate(matrix: number[][]): void {
  const n = matrix.length;
  const nums = [];

  for (let col = 0; col < n; col++) {
    for (let row = n - 1; row >= 0; row--) {
      nums.push(matrix[row][col]);
    }
  }

  let idx = 0;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      matrix[row][col] = nums[idx];
      idx++;
    }
  }
}

// Time complexity O(n^2)
// Space complexity O(n^2)

function rotate2(matrix: number[][]): void {
  const n = matrix.length;

  // get transpose matrix;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < row; col++) {
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
    }
  }

  // reverse each row
  for (let row = 0; row < n; row++) {
    matrix[row].reverse();
  }
}

// Time complexity O(n^2)
// Space complexity O(1)
