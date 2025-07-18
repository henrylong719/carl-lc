function fibonacciOld(n: number): number {
  if (n === 0 || n === 1) {
    return n;
  }

  return fibonacciOld(n - 1) + fibonacciOld(n - 2);
}

function fibonacci(n: number): number {
  return fibonacciDp(n, {});
}

function fibonacciDp(n: number, memo: Record<number, number>): number {
  if (n < 2) return n;
  if (memo[n] !== undefined) return memo[n];

  const a = fibonacciDp(n - 1, memo);
  const b = fibonacciDp(n - 2, memo);

  memo[n] = a + b;

  return memo[n];
}

function fibonacciDpIte(n: number): number {
  if (n < 2) return n;
  let f = [];

  f[0] = 0;
  f[1] = 1;

  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }

  return f[n];
}

function fibConst(n: number): number {
  if (n < 2) return n;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}

// 1548008755920
console.log(fibonacci(60));
console.log(fibonacciDpIte(60));
console.log(fibConst(60));
