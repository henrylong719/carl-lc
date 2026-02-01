function leastInterval(tasks: string[], n: number): number {
  const freq = new Array(26).fill(0);

  for (const t of tasks) {
    freq[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }

  const pq = new MaxPriorityQueue<number>();

  for (const f of freq) {
    if (f === 0) continue;
    pq.enqueue(f);
  }

  let time = 0;
  let head = 0;

  // [time, freq]
  const coolDown: Array<[number, number]> = [];

  while (!pq.isEmpty() || head < coolDown.length) {
    // bring availabe tasks back to pq
    while (head < coolDown.length && coolDown[head][0] <= time) {
      pq.enqueue(coolDown[head++][1]);
    }

    if (pq.isEmpty()) {
      time = coolDown[head][0];
      continue;
    }

    const cnt = pq.dequeue() as number;
    if (cnt - 1 > 0) {
      coolDown.push([time + n + 1, cnt - 1]);
    }
    time++;
  }

  return time;
}

// Time: O(Tlog(m))  m <= 26 -> O(n)
// Space: O(T+m)
