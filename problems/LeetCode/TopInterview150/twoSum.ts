function twoSum(numbers: number[], target: number): number[] {
  let pl = 0;
  let pr = numbers.length - 1;

  while (pl < pr) {
    if (numbers[pl] + numbers[pr] === target) {
      return [pl + 1, pr + 1];
    }

    if (numbers[pl] + numbers[pr] < target) {
      pl++;
    } else {
      pr--;
    }
  }
  return [];
}

// Time complexity: O(n)
// Space complexity: O(1)
