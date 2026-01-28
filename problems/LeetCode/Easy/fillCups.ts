function fillCups(amount: number[]): number {
  let seconds = 0;

  while (amount[0] || amount[1] || amount[2]) {
    seconds++;
    amount.sort((a, b) => b - a);
    if (amount[0] > 0) amount[0]--;
    if (amount[1] > 0) amount[1]--;
  }
  return seconds;
}

// Time: O(n) * n(log(n))
// Space: O(1)

function fillCups(amount: number[]): number {
  const sum = amount[0] + amount[1] + amount[2];
  const mx = Math.max(amount[0], amount[1], amount[2]);
  return Math.max(mx, Math.ceil(sum / 2));
}

// Time: O(1)
// Space: O(1)
