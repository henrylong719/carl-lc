function maxSubarray(arr: number[]): number[] {
  let current = 0;

  const getMaxSubArr = (arr: number[]) => {
    let maxSum = -Infinity;

    arr.reduce((acc, cur) => {
      acc += cur;
      maxSum = Math.max(maxSum, acc);
      return acc > 0 ? acc : 0;
    }, 0);

    return maxSum;
  };

  const getMaxSubSeq = (arr: number[]) => {
    arr.sort((a: number, b: number) => a - b);
    return arr[-1] < 0
      ? arr[-1]
      : arr.filter((ele) => ele >= 0).reduce((acc, cur) => acc + cur);
  };

  return [getMaxSubArr(arr), getMaxSubSeq(arr)];
}

console.log(maxSubarray([-1, 2, 3, -4, 5, 10]));
