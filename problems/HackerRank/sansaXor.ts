function sansaXor(arr: number[]): number {
  // [3,4,5]
  // 3 ^ 4 ^ 5 ^ (3 ^ 4) ^ (4 ^ 5) ^ (3 ^ 4 ^ 5)

  // 3 ^ (3 ^ 4) ^ (3 ^ 4 ^ 5) ^ 4 ^ (4 , 5) ^ 5

  // [4,5,7,5]
  // 4 ^ 5 ^ 7 ^ 5 ^ (4 ^ 5) ^ (5 ^ 7) ^ (7 ^ 5) ^ (4 ^ 5 ^ 7) ^ (5 ^ 7 ^ 5) ^ (4 ^ 5 ^ 7 ^ 5)
  // 4 ^ (4 ^ 5) ^ (4 ^ 5 ^ 7) ^ (4 ^ 5 ^ 7 ^ 5) ^ 5 ^  (5 ^ 7) ^ (5 ^ 7 ^ 5) ^ 7 ^ (7 ^ 5) ^ 5

  let result = 0;

  for (let windowStart = 0; windowStart < arr.length; windowStart++) {
    result ^= arr[windowStart];
    let windowEnd = windowStart + 1;
    let cur = arr[windowStart];

    while (windowEnd < arr.length) {
      cur ^= arr[windowEnd];
      result ^= cur;
      windowEnd++;
    }
  }

  return result;
}

function sansaXor2(arr: number[]): number {
  if (arr.length % 2 === 0) {
    // If the length of the array is even, the result will be 0.
    return 0;
  }

  // [3,4,5]
  // 3 ^ 4 ^ 5 ^ (3 ^ 4) ^ (4 ^ 5) ^ (3 ^ 4 ^ 5)
  // 3 ^ 5

  // 3 ^ (3 ^ 4) ^ (3 ^ 4 ^ 5) ^ 4 ^ (4 , 5) ^ 5

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 2 === 1) {
      // If the index is odd, the element appears odd number of times.
      // Add it to the result.
      result ^= arr[i];
    }
  }

  return result;
}

console.log(sansaXor2([3, 4, 5]));
