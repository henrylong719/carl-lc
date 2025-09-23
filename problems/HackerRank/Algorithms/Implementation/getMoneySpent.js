function getMoneySpent(keyboards, drives, b) {
  // ascending
  keyboards.sort((a, b) => a - b);

  // descending
  drives.sort((a, b) => b - a);

  let best = -1;
  let i = 0;
  let j = 0;

  while (i < keyboards.length && j < drives.length) {
    let sum = keyboards[i] + drives[j];

    if (sum > b) {
      j++;
    } else {
      if (sum > best) {
        best = sum;
      }
      i++;
    }
  }

  return best;
}
