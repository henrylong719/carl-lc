function minRemoveToMakeValid(s: string): string {
  const pos: number[] = [];
  const res: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(') {
      pos.push(res.length);
      res.push(char);
    } else if (char === ')') {
      if (pos.length === 0) continue;
      pos.pop();
      res.push(char);
    } else {
      res.push(char);
    }
  }

  while (pos.length) {
    const idx = pos.pop();
    res[idx] = '';
  }

  return res.join('');
}

// Time: O(n)
// Space: O(n)

function minRemoveToMakeValid(s: string): string {
  const t: string[] = [];
  let bal = 0;

  for (const char of s) {
    if (char === '(') {
      bal++;
      t.push(char);
    } else if (char === ')') {
      if (bal === 0) continue;
      bal--;
      t.push(char);
    } else {
      t.push(char);
    }
  }

  let res: string[] = [];

  for (let i = t.length - 1; i >= 0; i--) {
    const char = t[i];

    if (char === '(' && bal > 0) {
      bal--;
      continue;
    }
    res.push(char);
  }

  res = res.reverse();
  return res.join('');
}

// Time: O(n)
// Space: O(n)
