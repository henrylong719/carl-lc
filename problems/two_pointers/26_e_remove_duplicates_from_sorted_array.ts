function removeDuplicates(nums: number[]): number {
  let nextDuplicate = 1;

  let i = 0;

  while (i < nums.length) {
    if (nums[nextDuplicate - 1] !== nums[i]) {
      nums[nextDuplicate] = nums[i];
      nextDuplicate++;
    }

    i++;
  }

  return nextDuplicate;
}

console.log(removeDuplicates([2, 2, 2, 11]));
