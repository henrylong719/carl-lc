// https://www.hackerrank.com/challenges/three-month-preparation-kit-sum-vs-xor/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-six

function sumXor(n: number): number {
  if (n === 0) return 1;
  let zeroCount = 0;

  const binary = n.toString(2);

  for (let char of binary) {
    if (char === '0') {
      zeroCount++;
    }
  }

  return Math.pow(2, zeroCount);
}

console.log(sumXor(0));
