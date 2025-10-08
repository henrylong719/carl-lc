function findDigits(n: number): number {
  let _n = n;
  let count = 0;

  while (_n > 0) {
    let digit = _n % 10;

    if (digit === 0) {
      _n = Math.floor(_n / 10);
      continue;
    }

    if (n % digit === 0) {
      count++;
    }

    _n = Math.floor(_n / 10);
  }

  return count;
}
