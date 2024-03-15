/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  let counter = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const sum = ar[i] + ar[j];
      if (sum % k === 0) {
        counter++;
      }
    }
  }
  return counter;
}

console.log(divisibleSumPairs(7, 5, [1, 2, 3, 4, 5]));
