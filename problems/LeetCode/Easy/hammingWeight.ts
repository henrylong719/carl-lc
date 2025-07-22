function hammingWeight(n: number): number {
  let count = 0;

  while (n !== 0) {
    let bit = n % 2;
    if (bit == 1) {
      count++;
    }

    n = Math.floor(n / 2);
  }

  return count;
}
