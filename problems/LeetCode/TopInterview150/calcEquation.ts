function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][],
): number[] {
  const graph = new Map<string, [string, number][]>();

  const buildEdges = (from: string, to: string, weight: number) => {
    if (!graph.has(from)) graph.set(from, []);
    graph.get(from).push([to, weight]);
  };

  for (let i = 0; i < equations.length; i++) {
    const [from, to] = equations[i];
    const val = values[i];

    buildEdges(from, to, val);
    buildEdges(to, from, 1 / val);
  }

  const bfs = (start, end) => {
    if (!graph.has(start) || !graph.has(end)) {
      return -1;
    }

    const queue = [[start, 1]];
    const visited = new Set();

    let idx = 0;

    while (idx < queue.length) {
      const [cur, dist] = queue[idx++];

      if (cur === end) return dist;

      for (let [nei, w] of graph.get(cur)) {
        if (!visited.has(nei)) {
          visited.add(nei);
          queue.push([nei, dist * w]);
        }
      }
    }
    return -1;
  };

  let ans = [];

  for (let i = 0; i < queries.length; i++) {
    ans.push(bfs(queries[i][0], queries[i][1]));
  }

  return ans;
}
