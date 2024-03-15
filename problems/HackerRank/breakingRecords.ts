function breakingRecords(scores: number[]): number[] {
  let max = scores[0];
  let min = scores[0];
  let maxCount = 0;
  let minCount = 0;

  for (let i = 1; i < scores.length; i++) {
    const score = scores[i];
    if (score < min) {
      min = score;
      minCount++;
    }

    if (score > max) {
      max = score;
      maxCount++;
    }
  }

  return [maxCount, minCount];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
