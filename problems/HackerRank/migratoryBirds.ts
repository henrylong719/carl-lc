function migratoryBirds(arr: number[]): number {
  let result = 1;

  let counter = [0, 0, 0, 0, 0] as number[];

  for (let ele of arr) {
    counter[ele - 1] += 1;
  }

  let max = counter[0];

  for (let i = 0; i < counter.length; i++) {
    if (counter[i] > max) {
      max = counter[i];
      result = i + 1;
    }
  }

  return result;
}

console.log(migratoryBirds([1, 1, 2, 2, 3]));
