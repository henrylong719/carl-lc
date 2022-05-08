// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]

function sortedSquares(nums: number[]): number[] {
  let resultArr = Array(nums.length).fill(0);
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let value = nums.length - 1;

  while (leftPointer < rightPointer) {
    const leftValue = nums[leftPointer] * nums[leftPointer];
    const rightValue = nums[rightPointer] * nums[rightPointer];

    if (leftValue > rightValue) {
      resultArr[value] = leftValue;
      leftPointer++;
    } else {
      resultArr[value] = rightValue;
      rightPointer--;
    }

    value--;
  }

  return resultArr;
}

console.log(sortedSquares([-2, -1, 0, 2, 3]));
