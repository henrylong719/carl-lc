function countSegments(s: string): number {
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ' && (s[i + 1] === ' ' || i + 1 === s.length)) {
      res++;
    }
  }

  return res;
}

function countSegments2(s: string): number {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ' && (i == 0 || s[i - 1] === ' ')) {
      count++;
    }
  }
  return count;
}

// Time: O(n)
// Space: O(1)
