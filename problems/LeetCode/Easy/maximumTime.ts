function maximumTime(time: string): string {
  const t = [...time];

  for (let i = 0; i < t.length; i++) {
    if (t[i] !== '?') continue;
    if (i === 0) {
      if (Number(t[1]) <= 3 || t[1] === '?') {
        t[i] = '2';
      } else {
        t[i] = '1';
      }
    } else if (i === 1) {
      if (t[0] === '2') {
        t[i] = '3';
      } else {
        t[i] = '9';
      }
    } else if (i === 3) {
      t[i] = '5';
    } else if (i === 4) {
      t[i] = '9';
    }
  }

  return t.join('');
}

// Time: O(n)
// Space: O(n)
