function canVisitAllRooms(rooms: number[][]): boolean {
  const stack = [0];
  const visited = new Set();

  while (stack.length) {
    const room = stack.pop();

    if (visited.has(room)) continue;

    visited.add(room);

    if (visited.size === rooms.length) {
      return true;
    }

    stack.push(...rooms[room as number]);
  }

  return visited.size === rooms.length;
}

function canVisitAllRooms2(rooms: number[][]): boolean {
  const visited = new Array(rooms.length).fill(false);

  const dfs = (room: number) => {
    visited[room] = true;
    for (const r of rooms[room]) {
      if (!visited[r]) dfs(r);
    }
  };

  dfs(0);

  for (let r of visited) {
    if (!r) return false;
  }

  return true;
}

// Time: O(N+E)
// N: number of rooms, E: number of keys across all rooms sum(rooms[i].length)

// Space: O(N)
