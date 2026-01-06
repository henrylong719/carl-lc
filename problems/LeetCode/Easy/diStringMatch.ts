function diStringMatch(s: string): number[] {
  let low = 0;
  let high = s.length;
  let res = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I') {
      res.push(low);
      low++;
    } else {
      res.push(high);
      high--;
    }
  }
  res.push(high);
  return res;
}

// Time: O(n)
// Space: O(1)
