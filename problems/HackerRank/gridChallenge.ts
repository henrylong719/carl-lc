function sortString(str: string) {
  return str.split('').sort();
}

function gridChallenge(grid: string[]): string {
  const sortedGrid = [] as any;

  // sort grid string
  for (let ele of grid) {
    sortedGrid.push(sortString(ele));
  }

  for (let i = 0; i < sortedGrid.length; i++) {
    for (let j = 0; j < sortedGrid[i].length - 1; j++) {
      if (sortedGrid[j + 1][i] < sortedGrid[j][i]) {
        return 'NO';
      }
    }
  }

  return 'YES';
}

console.log(gridChallenge(['adc', 'ade', 'efg']));
