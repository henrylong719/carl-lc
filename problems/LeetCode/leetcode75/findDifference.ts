function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const ans = [[], []] as number[][];

  for (let num of set1) {
    if (!set2.has(num)) ans[0].push(num);
  }

  for (let num of set2) {
    if (!set1.has(num)) ans[1].push(num);
  }

  return ans;
}

// Time: O(n)
// Space: O(n)
