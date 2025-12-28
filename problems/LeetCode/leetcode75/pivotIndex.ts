function pivotIndex(nums: number[]): number {
  const n = nums.length;
  const postfix = new Array(n).fill(0);

  for (let i = n - 2; i >= 0; i--) {
    postfix[i] = postfix[i + 1] + nums[i + 1];
  }

  let pre = 0;

  for (let i = 0; i < n; i++) {
    if (pre === postfix[i]) return i;
    pre += nums[i];
  }

  return -1;
}
