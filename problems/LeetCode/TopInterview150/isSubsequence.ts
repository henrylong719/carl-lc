function isSubsequence(s: string, t: string): boolean {
  let idx = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[idx]) {
      idx++;
    }
  }

  return idx === s.length;
}

function isSubsequence2(s: string, t: string): boolean {
  let sp = 0;
  let tp = 0;

  while (sp < s.length && tp < t.length) {
    if (s[sp] === t[tp]) {
      sp++;
    }
    tp++;
  }

  return sp === s.length;
}

// Time complexity: O(n)
// Space complexity: O(1)

function maxOperations(nums: number[], k: number): number {
  const map = new Map<number, number>();
  let count: number = 0;

  for (let num of nums) {
    const need = k - num;
    const needCount = map.get(need);

    if (needCount !== undefined && needCount > 0) {
      map.set(need, needCount - 1);
      count++;
      continue;
    }

    map.set(num, (map.get(num) ?? 0) + 1);
  }

  return count;
}
