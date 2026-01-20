function minReorder(n: number, connections: number[][]): number {
  const adjancencyList = Array.from({ length: n }, () => new Set());
  const undirected = Array.from({ length: n }, () => Array());

  for (let i = 0; i < connections.length; i++) {
    const [src, end] = connections[i];
    undirected[src].push(end);
    undirected[end].push(src);
    adjancencyList[src].add(end);
  }

  let res = 0;
  let visited = new Array(n).fill(false);

  const dfs = (city: number) => {
    visited[city] = true;
    for (const neigh of undirected[city]) {
      if (visited[neigh]) continue;
      if (!adjancencyList[neigh].has(city)) res++;
      dfs(neigh);
    }
  };

  dfs(0);
  return res;
}

function minReorder2(n: number, connections: number[][]): number {
  const graph = Array.from({ length: n }, () => []);

  for (let i = 0; i < connections.length; i++) {
    const [src, end] = connections[i];
    graph[src].push([end, 1]);
    graph[end].push([src, 0]);
  }

  let res = 0;
  let visited = new Array(n).fill(false);

  const dfs = (city: number) => {
    visited[city] = true;

    for (const [neigh, cost] of graph[city]) {
      if (visited[neigh]) continue;
      res += cost;
      dfs(neigh);
    }
  };

  dfs(0);
  return res;
}

console.log(
  minReorder2(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ]),
);

// Time: O(n)
// Space: O(n)
