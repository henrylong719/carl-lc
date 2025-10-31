function rotate(nums: number[], k: number): void {
  let _k = k % nums.length;

  let arr = [...nums.slice(-_k), ...nums.slice(0, nums.length - _k)];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = arr[i];
  }
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);

function reverse(nums: number[], l: number, r: number) {
  while (l < r) {
    let tmp = nums[l];
    nums[l] = nums[r];
    nums[r] = tmp;
    l++;
    r--;
  }
}

function rotate2(nums: number[], k: number): void {
  let n = nums.length;
  if (n === 0) return;

  let _k = k % n;
  if (_k === 0) return;

  reverse(nums, 0, n - 1);
  reverse(nums, 0, _k - 1);
  reverse(nums, _k, n - 1);
}
