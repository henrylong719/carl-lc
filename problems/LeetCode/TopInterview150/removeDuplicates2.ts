function removeDuplicates2(nums: number[]): number {
  if (nums.length === 0) return 0;

  let cur = nums[0];
  let count = 1;
  let nextElement = 1;
  let LIMIT = 2;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === cur) {
      count++;
      if (count <= LIMIT) {
        nums[nextElement] = nums[i];
        nextElement++;
      }
      continue;
    }

    count = 1;
    cur = nums[i];
    nums[nextElement] = nums[i];
    nextElement++;
  }
  return nextElement;
}

removeDuplicates2([0, 0, 1, 1, 1, 1, 2, 3, 3]);
