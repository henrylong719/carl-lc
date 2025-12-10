function setZeroes(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const dup_matrix = [];

  for (let row = 0; row < rows; row++) {
    dup_matrix[row] = [];
    for (let col = 0; col < cols; col++) {
      dup_matrix[row][col] = matrix[row][col];
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === 0 && dup_matrix[row][col] === 0) {
        for (let i = 0; i < cols; i++) {
          matrix[row][i] = 0;
        }
        for (let j = 0; j < rows; j++) {
          matrix[j][col] = 0;
        }
      }
    }
  }
}

// time complexity: O(m*n * (m+n))
// Space compleixty: O(m*n)

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes2(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let firstRowHasZero = false;
  let firstColHasZero = false;

  // check if first row has zero
  for (let col = 0; col < cols; col++) {
    if (matrix[0][col] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // check if first col has zero
  for (let row = 0; row < rows; row++) {
    if (matrix[row][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // Use first row and first col as marker
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

  // set marked rows to 0
  for (let row = 1; row < rows; row++) {
    if (matrix[row][0] === 0) {
      for (let col = 1; col < cols; col++) {
        matrix[row][col] = 0;
      }
    }
  }

  // set marked col to 0
  for (let col = 1; col < cols; col++) {
    if (matrix[0][col] === 0) {
      for (let row = 1; row < rows; row++) {
        matrix[row][col] = 0;
      }
    }
  }

  // update first row to 0 if it has 0
  if (firstRowHasZero) {
    for (let col = 0; col < cols; col++) {
      matrix[0][col] = 0;
    }
  }

  // update first col to 0 if it has 0
  if (firstColHasZero) {
    for (let row = 0; row < rows; row++) {
      matrix[row][0] = 0;
    }
  }
}

// Time complexity: O(m*n)
// Space complexity: O(1)
