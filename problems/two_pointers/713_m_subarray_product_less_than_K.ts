// [2, 5, 3, 10], target=30

function numSubarrayProductLessThanK(nums: number[], k: number): number[] {
  let resultArr = [] as any[];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) {
      resultArr.push([nums[i]]);
      let currentProduct = nums[i];
      let tmpArr = [];

      tmpArr.push(nums[i]);
      let signal = false;
      for (let j = i + 1; j < nums.length; j++) {
        currentProduct = currentProduct * nums[j];

        console.log(currentProduct);
        if (currentProduct < k) {
          tmpArr.push(nums[j]);
          signal = true;
        } else {
          break;
        }
      }
      signal && resultArr.push(tmpArr);
    }
  }

  return resultArr;
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
