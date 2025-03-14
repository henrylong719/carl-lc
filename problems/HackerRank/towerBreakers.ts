function towerBreakers(n: number, m: number): number {
  if (m === 1 || n % 2 === 0) return 2;
  return 1;
}

console.log(towerBreakers(1, 4));
