function twoSum(nums: number[], target: number): number[] {
  let table = {} as any;

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];

    if (target - nums[i] in table) {
      return [table[target - value], i];
    }

    table[value] = i;
  }

  return [-1, -1];
}
