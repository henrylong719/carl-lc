function backspaceCompare(s: string, t: string): boolean {
  let sResultStr = '';
  let tResultStr = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '#') {
      sResultStr += s[i];
    } else {
      sResultStr = sResultStr.slice(0, -1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] !== '#') {
      tResultStr += t[i];
    } else {
      tResultStr = tResultStr.slice(0, -1);
    }
  }

  console.log(sResultStr);
  console.log(tResultStr);

  return sResultStr === tResultStr;
}

console.log(backspaceCompare('xp#', 'xyz##'));
