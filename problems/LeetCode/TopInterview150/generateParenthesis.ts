function generateParenthesis(n: number): string[] {
  const ans: string[] = [];

  const backtrack = (open: number, close: number, str: string) => {
    if (str.length === 2 * n) {
      console.log('str', str);

      ans.push(str);
      return;
    }

    if (open < n) {
      backtrack(open + 1, close, str + '(');
    }

    if (close < open) {
      backtrack(open, close + 1, str + ')');
    }
  };

  backtrack(0, 0, '');
  return ans;
}

generateParenthesis(3);
// Time: O(2^(2n) * n)
// Space: O(n) recursion depth (not counting the output list)
