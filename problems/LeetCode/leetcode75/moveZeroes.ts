function moveZeroes(nums: number[]): void {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx++] = nums[i];
    }
  }

  for (let i = idx; i < nums.length; i++) {
    nums[i] = 0;
  }
}

function moveZeroes2(nums: number[]): void {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
}

// Time: O(n)
// Space: O(1)
