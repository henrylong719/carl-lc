function beautifulDays(i: number, j: number, k: number): number {
  let cnt = 0;

  for (let num = i; num <= j; num++) {
    let reversed_num = String(num).split('').reverse().join('');
    if (Math.abs(num - Number(reversed_num)) % k === 0) {
      cnt++;
    }
  }

  return cnt;
}
