function intersection(nums1: number[], nums2: number[]): number[] {
  const num1Set = new Set(nums1);
  const num2Set = new Set(nums2);
  const res = [];

  for (const num of num1Set) {
    if (num2Set.has(num)) res.push(num);
  }
  return res;
}

// Time: O(n)
// Space: O(n)
