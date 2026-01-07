function balancedStringSplit(s: string): number {
  let R: number = 0;
  let L: number = 0;
  let res = 0;

  for (let char of s) {
    if (char === 'R') {
      R++;
    } else if (char === 'L') {
      L++;
    }

    if (R === L) {
      res++;
    }
  }

  return res;
}
