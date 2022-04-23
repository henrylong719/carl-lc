function searchRange(nums: number[], target: number): number[] {
  let leftIndex = findLeftIndex(nums, target);
  let rightIndex = findRightIndex(nums, target);

  return [leftIndex, rightIndex];
}

function findLeftIndex(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let index = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) >> 1);

    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    if (nums[mid] === target) index = mid;
  }

  return index;
}

function findRightIndex(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let index = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) >> 1);

    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    if (nums[mid] === target) index = mid;
  }
  return index;
}
