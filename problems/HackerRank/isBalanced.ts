function isBalanced(s: string): string {
  if (s.length === 1) return 'NO';

  let obj = {
    '(': ')',
    '[': ']',
    '{': '}',
  } as any;

  let frontBrac = '([{';
  let backBrac = ')]}';

  let stack = [];

  for (let char of s) {
    if (frontBrac.includes(char)) {
      stack.push(obj[char]);
      continue;
    }

    if (backBrac.includes(char)) {
      const brac = stack.pop();
      if (char !== brac) {
        return 'NO';
      }
    }
  }

  if (stack.length) return 'NO';
  return 'YES';
}

console.log(
  isBalanced('){[]()})}}]{}[}}})}{]{](]](()][{))])(}]}))(}[}{{)}{[[}[]')
);
