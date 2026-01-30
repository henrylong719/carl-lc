function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => b - a);
  const pro1 = nums[0] * nums[1] * nums[2];
  const pro2 = nums[nums.length - 1] * nums[nums.length - 2] * nums[0];

  return Math.max(pro1, pro2);
}

// Time: O(nlog(n))
// Space: O(1)

function maximumProduct(nums: number[]): number {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;

  let min1 = Infinity;
  let min2 = Infinity;

  for (const num of nums) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }

    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
}

// Time: O(n)
// Space: O(1)
