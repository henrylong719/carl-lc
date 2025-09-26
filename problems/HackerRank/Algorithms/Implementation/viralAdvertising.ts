function viralAdvertising(n: number): number {
  let shared = 5;
  let liked = 0;
  let cumulative = 0;

  while (n > 0) {
    liked = Math.floor(shared / 2);
    cumulative += liked;
    shared = liked * 3;
    n--;
  }
  return cumulative;
}
