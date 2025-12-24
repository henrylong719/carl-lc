function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const preqArr = [];

  for (let i = 0; i < numCourses; i++) {
    preqArr[i] = [];
  }

  for (let [cor, preq] of prerequisites) {
    preqArr[cor].push(preq);
  }

  console.log('preqArr', preqArr);

  const loop = new Set<number>();

  const dfs = (cor: number) => {
    // base case

    if (preqArr[cor].length === 0) return true;
    if (loop.has(cor)) return false;

    loop.add(cor);

    for (const req of preqArr[cor]) {
      console.log('req', dfs[req]);

      if (!dfs[req]) return false;
    }

    preqArr[cor] = [];
    loop.delete(cor);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
}

console.log(canFinish(2, [[1, 0]]));
