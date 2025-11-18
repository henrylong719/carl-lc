function twoSum(nums: number[], target: number): number[] {
  const dic: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    // if it's string, using hasOwnProperty
    if (need in dic) {
      return [dic[need], i];
    }
    dic[nums[i]] = i;
  }

  return [];
}
