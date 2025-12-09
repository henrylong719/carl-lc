function evalRPN(tokens: string[]): number {
  const stack = [];
  const operators = ['+', '-', '*', '/'];

  for (let s of tokens) {
    if (s === '+') {
      stack.push(stack.pop() + stack.pop());
    } else if (s === '-') {
      const second = stack.pop();
      const first = stack.pop();
      stack.push(first - second);
    } else if (s === '*') {
      const second = stack.pop();
      const first = stack.pop();
      stack.push(first * second);
    } else if (s === '/') {
      const second = stack.pop();
      const first = stack.pop();
      stack.push(parseInt(String(first / second)));
    } else {
      stack.push(parseInt(s));
    }
  }

  return stack[0];
}
