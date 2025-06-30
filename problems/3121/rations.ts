function rations(towns: number[]): number {
  if (towns.length <= 0) {
    return 0;
  }

  let cost = 0;
  let min = towns[0];

  for (let i = 0; i < towns.length - 1; i++) {
    let currCost = towns[i];
    if (currCost < min) {
      min = currCost;
    }
    cost += min;
  }

  return cost;
}

console.log(rations([50, 20, 40, 30, 10, 60]));
