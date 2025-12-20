function isValid(s: string): boolean {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];

  for (let char of s) {
    if (Object.keys(map).includes(char)) {
      stack.push(char);
      continue;
    }

    const lastEle = stack.pop();

    if (char !== map[lastEle as keyof typeof map]) {
      return false;
    }
  }

  return stack.length === 0;

  // test
}
