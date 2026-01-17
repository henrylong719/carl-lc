function fib(n: number): number {
  const cache: (number | undefined)[] = new Array(n + 1);

  const fibonacci = (k: number): number => {
    if (k === 0 || k === 1) return k;
    if (cache[k] !== undefined) return cache[k]!;
    cache[k] = fibonacci(k - 1) + fibonacci(k - 2);
    return cache[k]!;
  };

  return fibonacci(n);
}

// Time: O(n)
// Space: O(n)

function fib2(n: number): number {
  if (n === 0 || n === 1) return n;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

// Time: O(n)
// Space: O(1)
