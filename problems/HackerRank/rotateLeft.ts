function rotateLeft(d: number, arr: number[]): number[] {
  return [...arr.slice(d), ...arr.slice(0, d)];
}

console.log(rotateLeft(4, [1, 2, 3, 4, 5]));
