function getWays(n: number, c: number[]): number {
  let result = 0;

  for (let ele of c) {
    if (ele > n) {
      continue;
    }

    if (ele === n) {
      result++;
    }
  }

  return result;
}
