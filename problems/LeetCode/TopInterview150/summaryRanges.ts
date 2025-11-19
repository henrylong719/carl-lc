function summaryRanges(nums: number[]): string[] {
  let idx = 0;
  let ans = [];

  while (idx < nums.length) {
    const num = nums[idx];
    let count = 1;

    while (num + count === nums[idx + count]) {
      count++;
    }

    if (count === 1) {
      ans.push(String(num));
    } else {
      ans.push(String(num) + '->' + String(num + count - 1));
    }

    idx += count;
  }

  return ans;
}

function summaryRanges2(nums: number[]): string[] {
  let i = 0;
  let ans = [];

  while (i < nums.length) {
    const start = nums[i];

    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      i++;
    }

    const end = nums[i];

    if (start === end) {
      ans.push(`${start}`);
    } else {
      ans.push(`${start}->${end}`);
    }
    i++;
  }

  return ans;
}

// Time compleixty: O(n)
// Space complexity: O(1) or O(n) inclusing output
