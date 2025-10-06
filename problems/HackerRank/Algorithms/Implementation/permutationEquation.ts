function permutationEquation(p: number[]): number[] {
  const n = p.length;
  const pos = new Array<number>(n + 1);

  for (let i = 0; i < p.length; i++) {
    pos[p[i]] = i + 1;
  }

  let ans = [];

  for (let j = 1; j < pos.length; j++) {
    ans.push(pos[pos[j]]);
  }

  return ans;
}
