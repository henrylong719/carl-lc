function canCompleteCircuit(gas: number[], cost: number[]): number {
  // make sure solution exists
  if (
    gas.reduce((acc, cur) => (acc += cur)) <
    cost.reduce((acc, cur) => (acc += cur))
  ) {
    return -1;
  }

  let start = 0;
  let currentGas = 0;

  // If you start from station A and stuck at B, then you can't get to B from
  // any station between A and B.
  for (let i = 0; i < gas.length; i++) {
    currentGas += gas[i] - cost[i];

    if (currentGas < 0) {
      currentGas = 0;
      start = i + 1;
    }
  }

  return start;
}
