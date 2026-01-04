function predictPartyVictory(senate: string): string {
  const n = senate.length;

  const rQ: number[] = [];
  const dQ: number[] = [];

  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') {
      rQ.push(i);
      continue;
    }
    dQ.push(i);
  }

  let rHead = 0;
  let dHead = 0;

  while (rHead < rQ.length && dHead < dQ.length) {
    const r = rQ[rHead++];
    const d = dQ[dHead++];

    if (r < d) {
      rQ.push(r + n);
    } else {
      dQ.push(d + n);
    }
  }

  return rHead < rQ.length ? 'Radiant' : 'Dire';
}

// O(n) (each senator is popped/pushed a limited number of times)
// O(n)
