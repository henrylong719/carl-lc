function minDistance(word1: string, word2: string): number {
  let dp = new Array(word1.length + 1).fill(Infinity);

  for (let r = 0; r < word1.length + 1; r++) {
    dp[r] = new Array(word2.length + 1).fill(Infinity);
  }

  for (let c = 0; c < word2.length + 1; c++) {
    dp[word1.length][c] = word2.length - c;
  }

  for (let r = 0; r < word1.length + 1; r++) {
    dp[r][word2.length] = word1.length - r;
  }

  for (let i = word1.length - 1; i >= 0; i--) {
    for (let j = word2.length - 1; j >= 0; j--) {
      if (word1[i] === word2[j]) {
        dp[i][j] = dp[i + 1][j + 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i + 1][j + 1], dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }
  return dp[0][0];
}

// Time: O(m*n)
// Space: O(m*n)
