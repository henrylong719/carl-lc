function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const preMap = {} as Record<number, number[]>;

  for (let i = 0; i < numCourses; i++) {
    preMap[i] = [];
  }

  for (const [cor, pre] of prerequisites) {
    preMap[cor].push(pre);
  }

  const cycle = new Set();

  const dfs = (cor: number) => {
    if (preMap[cor].length === 0) return true;
    if (cycle.has(cor)) return false;

    cycle.add(cor);

    for (let pre of preMap[cor]) {
      if (!dfs(pre)) return false;
    }
    cycle.delete(cor);
    preMap[cor] = [];
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
}

// Time O(V + E)
// Space O(V + E) for graph + O(V) recursion stack in worst case
