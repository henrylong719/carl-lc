function jump(nums: number[]): number {
  let pos = nums.length - 1;
  let steps = 0;

  while (pos !== 0) {
    let farthest = pos;

    for (let i = pos - 1; i >= 0; i--) {
      if (nums[i] >= pos - i) {
        farthest = i;
      }
    }

    pos = farthest;
    steps++;
  }

  return steps;
}
