function tribonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let a = 0;
  let b = 1;
  let c = 1;

  for (let i = 3; i <= n; i++) {
    let temp = a + b + c;
    a = b;
    b = c;
    c = temp;
  }
  return c;
}

// Time: O(n)
// Space: O(1)

function tribonacci(n: number): number {
  const cache = new Array(38).fill(0);

  const tribonacci = (num: number) => {
    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1;

    if (cache[num] !== 0) return cache[num];

    cache[num] =
      tribonacci(num - 3) + tribonacci(num - 2) + tribonacci(num - 1);

    return cache[num];
  };

  return tribonacci(n);
}

// Time: O(n)
// Space: O(n)
