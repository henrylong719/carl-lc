function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const prefix = new Array(n).fill(1);
  const surfix = new Array(n).fill(1);

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    surfix[j] = surfix[j + 1] * nums[j + 1];
  }

  const ans = new Array(n).fill(1);

  for (let k = 0; k < nums.length; k++) {
    ans[k] = prefix[k] * surfix[k];
  }

  return ans;
}

// Time complexity: O(n)
// Space complexity: O(n)

function productExceptSelf2(nums: number[]): number[] {
  const n = nums.length;

  let ans = new Array(n).fill(1);

  // create prefix
  let cur = 1;
  for (let i = 0; i < n; i++) {
    ans[i] = ans[i] * cur;
    cur = cur * nums[i];
  }

  // multiply prefix ans suffix
  cur = 1;
  for (let j = n - 1; j >= 0; j--) {
    ans[j] = ans[j] * cur;
    cur = cur * nums[j];
  }

  return ans;
}

// Time complexity: O(n)
// Space complexity: O(1) (exclude output array)

console.log(productExceptSelf([1, 2, 3, 4]));
