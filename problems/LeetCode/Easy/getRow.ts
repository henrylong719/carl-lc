function getRow(rowIndex: number): number[] {
  let dp = [] as any;

  for (let i = 0; i <= rowIndex; i++) {
    const row = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      row[j] = dp[j - 1] + dp[j];
    }
    dp = [...row];
  }

  return dp;
}

console.log(getRow(3));
