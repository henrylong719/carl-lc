### *[283. Move Zeroes](https://leetcode.com/problems/move-zeroes/) (26/12)

```typescript

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

```



### * [1732. Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude/) (26/12)

```typescript

function largestAltitude(gain: number[]): number {
  const prefix = new Array(gain.length + 1).fill(0);

  for (let i = 1; i <= gain.length; i++) {
    prefix[i] = prefix[i - 1] + gain[i - 1];
  }

  return Math.max(...prefix);
}

// Time O(n)
// Space O(n)

```





