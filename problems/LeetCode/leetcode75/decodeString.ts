function decodeString(s: string): string {
  const countStack: number[] = [];
  const strStack: string[] = [];

  let count = 0;
  let curr = '';

  for (const ch of s) {
    if (ch >= '0' && ch <= '9') {
      count = count * 10 + ch.charCodeAt(0) - '0'.charCodeAt(0);
    } else if (ch === '[') {
      countStack.push(count);
      strStack.push(curr);
      count = 0;
      curr = '';
    } else if (ch === ']') {
      const repeat = countStack.pop()!;
      const prev = strStack.pop()!;
      curr = prev + curr.repeat(repeat);
    } else {
      curr += ch;
    }
  }

  return curr;
}

// Time: O(n + outputLenght) because you must actually build the oupput)
// Space: O(n) stack + output
