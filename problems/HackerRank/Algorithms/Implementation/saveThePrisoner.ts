function saveThePrisoner(n: number, m: number, s: number): number {
  return ((s - 1 + m - 1) % n) + 1;
}
