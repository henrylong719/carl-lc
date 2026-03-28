function pivotIndex2(nums: number[]): number {
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

  let leftTotal = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightTotal = totalSum - nums[i] - leftTotal;
    if (rightTotal === leftTotal) return i;
    leftTotal += nums[i];
  }

  return -1;
}

console.log(pivotIndex2([9]));
