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
