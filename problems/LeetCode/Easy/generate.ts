function generate(numRows: number): number[][] {
  const dp: number[][] = Array.from({ length: numRows + 1 }, () =>
    Array(numRows + 1).fill(0)
  );

  dp[0][0] = 1;

  let ans = [];

  for (let i = 1; i <= numRows + 1; i++) {
    let arr = [];
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      arr.push(dp[i][j]);
    }
    ans.push(arr);
  }

  return ans;
}

function generate2(numRows: number) {
  const dp: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      row[j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }

    dp.push(row);
  }

  return dp;
}

console.log(generate2(4));
