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

// true
console.log(balancedParentheses('{ [ ] ( ) }'));

// false
console.log(balancedParentheses('{ [ ( ] ) }'));

export {};
