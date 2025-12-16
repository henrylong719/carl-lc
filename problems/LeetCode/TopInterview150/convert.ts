function convert(s: string, numRows: number): string {
  // make sure numRows === 1
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  const rows: string[] = new Array(numRows).fill('');

  let idx = 0;
  // down: 1, up: -1
  let d = 1;

  for (let char of s) {
    rows[idx] += char;

    if (idx === 0) {
      d = 1;
    } else if (idx === numRows - 1) {
      d = -1;
    }

    idx += d;
  }

  return rows.join('');
}

function convert2(s: string, numRows: number): string {
  // consider edge cases first
  if (numRows === 1 || numRows >= s.length) return s;

  let arr = [];

  for (let i = 0; i < numRows; i++) {
    arr[i] = [];
    for (let j = 0; j < s.length; j++) {
      arr[i][j] = '';
    }
  }

  let row = 0;
  let col = 0;
  let isDown = true;

  for (const char of s) {
    arr[row][col] = char;

    if (row === 0) {
      isDown = true;
    }

    if (row === numRows - 1) {
      isDown = false;
    }

    if (isDown === true) {
      row = row + 1;
    } else {
      row = row - 1;
      // use this if not checking numRow in the top
      // row = Math.max(row - 1, 0);
      col = col + 1;
    }
  }

  let ans = '';

  for (let i = 0; i < numRows; i++) {
    ans += arr[i].join('');
  }

  return ans;
}
