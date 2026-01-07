function searchMatrix(matrix: number[][], target: number): boolean {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let r = 0;
  let c = cols - 1;

  while (r < rows && c >= 0) {
    const val = matrix[r][c];

    if (val === target) {
      return true;
    }

    if (val > target) {
      c--;
    } else {
      r++;
    }
  }

  return false;
}

// Time: O(M+N)
// Space: O(1)

function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let lo = 0;
  let hi = rows * cols - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    const r = Math.floor(mid / cols);
    const c = mid % cols;

    const val = matrix[r][c];

    if (val === target) return true;

    if (val < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return false;
}

// Time O(log(m+n))
// Space O(1)
