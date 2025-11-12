function canJump(nums: number[]): boolean {
  let pos = nums.length - 1;
  let jump = true;

  while (pos !== 0 && jump) {
    jump = false;
    for (let i = pos - 1; i >= 0; i--) {
      if (nums[i] >= pos - i) {
        pos = i;
        jump = true;
      }
    }
  }

  return pos === 0;
}

function canJump1(nums: number[]): boolean {
  let goal = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= goal) {
      goal = i;
    }
  }

  return goal === 0;
}
