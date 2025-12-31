function permute(nums: number[]): number[][] {
  const ans: number[][] = [];

  const backtrack = (prem: Set<number>) => {
    if (prem.size === nums.length) {
      ans.push([...prem]);
      return;
    }

    for (const num of nums) {
      if (prem.has(num)) continue;
      prem.add(num);
      backtrack(prem);
      prem.delete(num);
    }
  };

  backtrack(new Set());
  return ans;
}

function permute(nums: number[]): number[][] {
  const n: number = nums.length;
  const path: boolean[] = new Array(n).fill(false);
  const ans: number[][] = [];

  const backtrack = (prem: number[]) => {
    if (prem.length === n) {
      ans.push([...prem]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (path[i]) continue;
      path[i] = true;
      prem.push(nums[i]);
      backtrack(prem);
      path[i] = false;
      prem.pop();
    }
  };

  backtrack([]);
  return ans;
}

// Time:
// generate n! premutations
// each time you hit a full permutation, you copy perm into ans: O(n)
// O(n*n!)

// Space:
// O(n*n!)
