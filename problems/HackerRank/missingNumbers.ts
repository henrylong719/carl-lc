function missingNumbers(arr: number[], brr: number[]): number[] {
  arr.sort((a, b) => a - b);
  brr.sort((a, b) => a - b);

  let set = new Set();
  let counter = 0;

  for (let i = 0; i < brr.length; i++) {
    if (arr[counter] !== brr[i]) {
      set.add(brr[i]);
      continue;
    }
    counter++;
  }

  return Array.from(set.values()) as number[];
}

console.log(missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]));
