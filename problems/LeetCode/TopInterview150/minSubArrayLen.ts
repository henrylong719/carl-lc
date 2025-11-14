function minSubArrayLen(target: number, nums: number[]): number {
  let windowStart = 0;
  let ans = Infinity;

  let count = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    count += nums[windowEnd];

    while (count >= target) {
      ans = Math.min(ans, windowEnd - windowStart + 1);
      count -= nums[windowStart];
      windowStart++;
    }
  }

  return ans === Infinity ? 0 : ans;
}

// Time complexity: O(n)
// Space complexity: O(1)

function minSubArrayLen2(target: number, nums: number[]): number {
  const n = nums.length;
  let ans = Infinity;

  const prefix = new Array(n + 1).fill(0);

  for (let i = 1; i < prefix.length; i++) {
    prefix[i] = nums[i - 1] + prefix[i - 1];
  }

  function lowerBound(target: number) {
    let low = 0;
    let high = prefix.length - 1;
    let ans = prefix.length;

    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);

      if (prefix[mid] >= target) {
        high = mid - 1;
        ans = mid;
      } else {
        low = mid + 1;
      }
    }

    return ans;
  }

  for (let i = 0; i < nums.length; i++) {
    const targetNum = prefix[i] + target;
    const l = lowerBound(targetNum);

    if (l < prefix.length) {
      ans = Math.min(ans, l - i);
    }
  }

  return ans === Infinity ? 0 : ans;
}

// Time complexity: O(nlog(n))
// Space complexity: O(n)
