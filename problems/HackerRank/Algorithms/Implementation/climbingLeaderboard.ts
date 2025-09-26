function climbingLeaderboard3(ranked: number[], player: number[]): number[] {
  let uniqueRanks = Array.from(new Set(ranked));

  let pos = 0;
  let ans = new Array(player.length).fill(1);

  for (let i = uniqueRanks.length - 1; i >= 0; i--) {
    while (player[pos] < uniqueRanks[i] && pos < player.length) {
      ans[pos] = i + 2;
      pos++;
    }
  }
  return ans;
}
