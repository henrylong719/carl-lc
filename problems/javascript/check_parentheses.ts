function balancedParentheses(str: string) {
  let strArr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;

    if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
      strArr.push(str[i]);
      continue;
    }

    const leftParentheses = strArr.pop() as string;

    if (str[i] === '}') {
      if (leftParentheses !== '{') {
        return false;
      }
    } else if (str[i] === ']') {
      if (leftParentheses !== '[') {
        return false;
      }
    } else if (str[i] === ')') {
      if (leftParentheses !== '(') {
        return false;
      }
    }
  }

  return strArr.length === 0;
}

// time complexity O(n)
function balancedParenthesesTwo(str: string) {
  let stack = [];
  let map = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;

    if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
      stack.push(str[i]);
      continue;
    }

    const lastEle = stack.pop() as string;

    if (str[i] !== map[lastEle as keyof typeof map]) return false;
  }

  if (stack.length !== 0) return false;
  return true;
}

// true
console.log(balancedParenthesesTwo('{ [ ] ( ) }'));

// false
console.log(balancedParenthesesTwo('{ [ ( ] ) }'));

export {};
