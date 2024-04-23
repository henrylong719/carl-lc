function superDigit(n: string, k: number): number {
  let sum = 0;

  for (let char of n) {
    sum += Number(char);
  }

  sum *= k;

  if (sum <= 9) return sum;

  return superDigit(String(sum), 1);
}

console.log(superDigit('9875', 4));
