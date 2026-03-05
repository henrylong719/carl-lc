function minLength(s: string): number {
  const stack = [];
  for (const char of s) {
    stack.push(char);
    while (stack.length >= 2) {
      const sub = stack[stack.length - 2] + stack[stack.length - 1];
      if (sub === 'AB' || sub === 'CD') {
        stack.pop();
        stack.pop();
      } else {
        break;
      }
    }
  }
  return stack.length;
}
