// Given an integer array nums and an integer k,
// return true if there are two distinct indices i and j in the array
// such that nums[i] == nums[j] and abs(i - j) <= k.

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let charMap = {} as any;

  // loop nums
  for (let i = 0; i < nums.length; i++) {
    let char = nums[i];

    // check if the charcter already in the hash map
    if (!(char in charMap)) {
      // not, add it and its postion
      charMap[char] = i;
    } else {
      // ums[i] == nums[j] and abs(i - j) <= k. reurn true
      if (i - charMap[char] <= k) {
        return true;
      } else {
        // record current posion
        charMap[char] = i;
      }
    }
  }
  return false;
}
