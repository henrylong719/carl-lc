function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  if (source === destination) return true;

  const graph = [];

  // build adjacency list
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (const [src, dest] of edges) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const visited = new Array(n).fill(false);
  visited[source] = true;
  const stack = [source];

  while (stack.length) {
    const node = stack.pop();
    if (node === destination) return true;

    for (let dest of graph[node]) {
      if (!visited[dest]) {
        visited[dest] = true;
        stack.push(dest);
      }
    }
  }
  return false;
}

// Time: O(m+n)
// Space: O(m+n)

function validPath2(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  if (source === destination) return true;

  const graph = [];

  // build adjacency list
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (const [src, dest] of edges) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const visited: boolean[] = new Array(n).fill(false);
  visited[source] = true;

  const dfs = (node: number) => {
    if (node === destination) return true;
    for (const nei of graph[node]) {
      if (!visited[nei]) {
        visited[nei] = true;
        if (dfs(nei)) return true;
      }
    }

    return false;
  };

  return dfs(source);
}
