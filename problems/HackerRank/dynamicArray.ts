function dynamicArray(n: number, queries: number[][]): number[] {
  const arr = Array.from({ length: n }, () => []) as any;

  const ans = [];
  let lastAnswer = 0;

  for (let i = 0; i < queries.length; i++) {
    let x = Number(queries[i][1]);
    let y = Number(queries[i][2]);
    let idx = (x ^ lastAnswer) % n;

    if (Number(queries[i][0]) === 1) {
      arr[idx].push(y);
    } else if (Number(queries[i][0]) === 2) {
      lastAnswer = arr[idx][y % arr[idx].length];
      ans.push(lastAnswer);
    }
  }
  return ans;
}

dynamicArray(3, [[12], [3]]);
