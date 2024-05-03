function climbingLeaderboard(ranked: number[], player: number[]): number[] {
  // remove repetitive numbers
  const ranks = Array.from(new Set(ranked));

  let result = [] as any;
  let start = 0;
  let last = ranks[ranks.length - 1];

  for (let i = player.length - 1; i >= 0; i--) {
    const score = player[i];

    if (player[i + 1] && score === player[i + 1]) {
      result.push(result[result.length - 1]);
      continue;
    }

    for (let j = start; j < ranks.length; j++) {
      const rank = ranks[j];
      if (score >= rank) {
        result.push(j + 1);
        start = j + 1;
        break;
      }
      if (rank === last) {
        result.push(ranks.length + 1);
      }
    }
  }

  return result.reverse();
}

console.log(climbingLeaderboard([100, 50, 40, 20, 10], [5, 5, 5, 25, 50, 120]));
