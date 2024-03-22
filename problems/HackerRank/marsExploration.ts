function marsExploration(s: string): number {
  let result = 0;
  let counter = 0;

  while (counter < s.length) {
    s[counter] !== 'S' && result++;
    s[counter + 1] !== 'O' && result++;
    s[counter + 2] !== 'S' && result++;

    counter += 3;
  }

  return result;
}

function marsExplorationTwo(s: string): number {
  let result = 0;
  for (let i = 0; i < s.length; i += 3) {
    s[i] !== 'S' && result++;
    s[i + 1] !== 'O' && result++;
    s[i + 2] !== 'S' && result++;
  }
  return result;
}

console.log(marsExplorationTwo('SOSSPSSQSSOR'));
