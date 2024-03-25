function twoArrays(k: number, A: number[], B: number[]): string {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    const sum = A[i] + B[i];
    if (sum < k) {
      return 'NO';
    }
  }

  return 'YES';
}

console.log(twoArrays(5, [1, 2, 3, 4, 3], [3, 5, 1, 2, 9, 0]));
