function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;

  const adjacencyList = Array.from({ length: n + 1 }, () => Array(n + 1));

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (r === c) continue;
      if (isConnected[r][c] === 1) {
        adjacencyList[r + 1].push(c + 1);
      }
    }
  }

  const visited = new Array(n + 1).fill(0);

  const dfs = (city: number) => {
    if (visited[city] === 1) return;
    visited[city] = 1;
    for (let neigh of adjacencyList[city]) {
      if (visited[neigh] === 0) {
        dfs(neigh);
      }
    }
  };

  let num = 0;

  for (let i = 1; i <= n; i++) {
    if (visited[i] === 0) {
      num++;
      dfs(i);
    }
  }

  return num;
}

function findCircleNum2(isConnected: number[][]): number {
  const n = isConnected.length;

  const adjacencyList = Array.from({ length: n + 1 }, () => Array(n + 1));

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (r === c) continue;
      if (isConnected[r][c] === 1) {
        adjacencyList[r + 1].push(c + 1);
      }
    }
  }

  const visited = new Array(n + 1).fill(0);

  const dfs = (city: number) => {
    const stack = [city];
    visited[city] = 1;
    while (stack.length) {
      const node = stack.pop();
      for (let neigh of adjacencyList[node]) {
        if (visited[neigh] === 0) {
          visited[neigh] = 1;
          stack.push(neigh);
        }
      }
    }
  };

  let num = 0;

  for (let i = 1; i <= n; i++) {
    if (visited[i] === 0) {
      num++;
      dfs(i);
    }
  }

  return num;
}

function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const visited = new Array(n).fill(false);

  const dfs = (city: number) => {
    visited[city] = true;
    const row = isConnected[city];
    for (let i = 0; i < n; i++) {
      if (!visited[i] && row[i] === 1) {
        dfs(i);
      }
    }
  };

  let province = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      province++;
      dfs(i);
    }
  }

  return province;
}

// Time: O(n^2)
// Space: O(n)
