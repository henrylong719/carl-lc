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
