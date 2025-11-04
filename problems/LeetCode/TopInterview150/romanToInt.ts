function romanToInt(s: string): number {
  const dic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  } as Record<string, number>;

  let num = 0;

  for (let i = 0; i < s.length; i++) {
    if (!!s[i + 1] && dic[s[i + 1]] > dic[s[i]]) {
      num += dic[s[i + 1]] - dic[s[i]];
      i++;
      continue;
    }
    num += dic[s[i]];
  }

  return num;
}
