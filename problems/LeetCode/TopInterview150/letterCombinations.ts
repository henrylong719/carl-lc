function letterCombinations(digits: string): string[] {
  const mapping = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];

  const ans: string[] = [];

  const backtrack = (idx: number, str: string) => {
    if (str.length === digits.length) {
      ans.push(str);
      return;
    }

    const digit = Number(digits[idx]);
    const comb = mapping[digit];

    for (const letter of comb) {
      backtrack(idx + 1, str + letter);
    }
  };

  backtrack(0, '');
  return ans;
}

// Time: O(n*4^n) or O(n*3^n)
// 4^n: combination, n: string concatenation
// Space: O(n)
