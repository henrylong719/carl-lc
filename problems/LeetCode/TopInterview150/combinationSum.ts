function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];

  const backtrack = (idx: number, sum: number, comb: number[]) => {
    if (sum === target) {
      ans.push([...comb]);
      return;
    }

    if (idx >= candidates.length || sum > target) {
      return;
    }

    // choose to keep use the current element
    comb.push(candidates[idx]);
    backtrack(idx, sum + candidates[idx], comb);
    comb.pop();
    backtrack(idx + 1, sum, comb);
  };

  backtrack(0, 0, []);
  return ans;
}

// Time: O(2^n)
// Space O(t/d), t is the target, d is the samllest candidate, represent the depth of the recusion
