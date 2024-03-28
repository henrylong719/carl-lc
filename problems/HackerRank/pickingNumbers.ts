function pickingNumbers(arr: number[]): number {
  let k = 1;
  // maxLength is 1 because k >= 0,
  // a single element, subarray will always
  // have absolute difference zero
  let maxLength = 1;

  // Check for all possible subarrays
  for (let i = 0; i < arr.length; i++) {
    // Initialization of minimum &
    // maximum of current subarray
    let minOfSub = arr[i];
    let maxOfSub = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      // Update the values for minimum & maximum
      if (arr[j] > maxOfSub) maxOfSub = arr[j];

      if (arr[j] < minOfSub) minOfSub = arr[j];

      // Check if current subarray satisfies
      // the given condition
      if (maxOfSub - minOfSub <= k) {
        let currLength = j - i + 1;

        // Update the value for maxLength
        if (maxLength < currLength) maxLength = currLength;
      }
    }
  }

  // Return the final result
  return maxLength;
}

// function pickingNumbers(a: number[]): number {
//   let frequency = new Array(100).fill(0);

//   for (let i = 0; i < a.length; i++) {
//     frequency[a[i]]++;
//   }

//   let max = 0;

//   for (let i = 0; i < frequency.length - 1; i++) {
//     max = Math.max(frequency[i] + frequency[i + 1], max);
//   }

//   return max;
// }

console.log(pickingNumbers([1, 3, 3, 4, 4, 5, 8]));
