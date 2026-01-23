function findPoisonedDuration(timeSeries: number[], duration: number): number {
  if (duration === 0) return 0;

  let seconds = 0;

  for (let i = 1; i < timeSeries.length; i++) {
    const curr = timeSeries[i];
    const prev = timeSeries[i - 1];

    if (curr > duration + prev) {
      seconds += duration;
    } else {
      seconds += curr - prev;
    }
  }

  seconds += duration;
  return seconds;
}

// Time: O(n)
// Space: O(1)
