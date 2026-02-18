function countNegatives(grid: number[][]): number {
  function findFirstNegative(arr: number[]) {
    let l = 0;
    let h = arr.length;

    while (l < h) {
      const mid = l + Math.floor((h - l) / 2);

      if (arr[mid] >= 0) {
        l = mid + 1;
      } else {
        h = mid;
      }
    }

    return l;
  }

  let count = 0;

  for (const arr of grid) {
    const idx = findFirstNegative(arr);
    count += arr.length - idx;
  }

  return count;
}

// Time: O(mlogn)
// Space: O(1)

function countNegatives(grid: number[][]): number {
  let rows = grid.length;
  let cols = grid[0].length;
  let c = 0;
  let count = 0;

  for (let r = rows - 1; r >= 0; r--) {
    const arr = grid[r];

    while (arr[c] >= 0) {
      c++;
    }

    count += cols - c;
  }

  return count;
}

// Time: O(m + n)
// Space: O(1)
