function dailyTemperatures(temperatures: number[]): number[] {
  const s: number[] = [];
  const res: number[] = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (s.length > 0 && temperatures[i] > temperatures[s[s.length - 1]]) {
      const idx = s.pop()!;
      res[idx] = i - idx;
    }
    s.push(i);
  }
  return res;
}

// Time: O(n)
// Space: O(n)
