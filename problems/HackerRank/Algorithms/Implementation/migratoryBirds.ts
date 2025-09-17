function migratoryBirds(arr: number[]): number {
  const counter = Array(6).fill(0);

  for (let a of arr) {
    counter[a] += 1;
  }

  let maxId = 0;
  let id = -1;

  for (let i = 0; i < counter.length; i++) {
    if (counter[i] > maxId) {
      maxId = counter[i];
      id = i;
    }
  }
  return id;
}

console.log(migratoryBirds([1, 1, 2, 2, 3]));
