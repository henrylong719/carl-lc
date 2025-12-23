function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const preqMap = [];

  for (let i = 0; i < numCourses; i++) {
    preqMap[i] = [];
  }

  for (const [cor, pre] of prerequisites) {
    preqMap[cor].push(pre);
  }

  const ans = [];
  const cycle = new Set<number>();
  const seen = new Set<number>();

  const dfs = (cor: number) => {
    if (seen.has(cor)) return true;

    if (cycle.has(cor)) return false;

    cycle.add(cor);

    for (const pre of preqMap[cor]) {
      if (!dfs(pre)) return false;
    }

    cycle.delete(cor);
    seen.add(cor);
    ans.push(cor);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }

  return ans;
}

// Time O(V + E)
// Space O(V + E) for graph + O(V) recursion stack in worst case
