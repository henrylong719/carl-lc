function twoSumII(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const currentSum = numbers[left] + numbers[right];

    if (currentSum === target) {
      return [left + 1, right + 1];
    }

    if (currentSum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
}
