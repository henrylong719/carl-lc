function miniMaxSum(arr: number[]): void {
  // Write your code here
  const sortedArray = arr.sort();
  let minSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      minSum += arr[i];
    }
    if (i !== 0) {
      maxSum += arr[i];
    }
  }
  console.log(minSum, maxSum);
}
