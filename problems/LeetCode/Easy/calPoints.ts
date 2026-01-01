function calPoints(operations: string[]): number {
  const stack: number[] = [];

  for (const char of operations) {
    const len = stack.length;
    if (Number.isInteger(Number(char))) {
      stack.push(Number(char));
    } else if (char === '+') {
      const first = stack[len - 1];
      const second = stack[len - 2];
      stack.push(first + second);
    } else if (char === 'D') {
      const last = stack[len - 1];
      stack.push(2 * last);
    } else if (char === 'C') {
      stack.pop();
    }
  }

  return stack.reduce((acc, cur) => acc + cur, 0);
}

// Time O(n)
// Space O(n)
