function balancedSums(arr: number[]): string {
  let totalSum = arr.reduce((acc, cur) => acc + cur);

  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rightSum = totalSum - leftSum - arr[i];

    if (rightSum === leftSum) return 'YES';

    leftSum += arr[i];
  }

  return 'NO';
}
