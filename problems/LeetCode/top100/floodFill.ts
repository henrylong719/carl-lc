function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];
  const ori = image[sr][sc];

  const withinBound = (r: number, c: number) => {
    return r >= 0 && c >= 0 && r < image.length && c < image[0].length;
  };

  const stack = [[sr, sc]];

  while (stack.length) {
    const [r, c] = stack.pop();

    if (image[r][c] === ori) image[r][c] = color;

    for (const [rd, cd] of directions) {
      const nr = r + rd;
      const nc = c + cd;
      if (
        withinBound(nr, nc) &&
        image[nr][nc] === ori &&
        image[nr][nc] !== color
      ) {
        stack.push([nr, nc]);
      }
    }
  }

  return image;
}

// Time: O(m*n)
// Space: O(m*n)

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const ori = image[sr][sc];

  if (ori === color) return image;

  const directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  const withinBound = (r: number, c: number) => {
    return r >= 0 && c >= 0 && r < image.length && c < image[0].length;
  };

  const dfs = (r, c) => {
    if (!withinBound(r, c) || image[r][c] !== ori || image[r][c] === color) {
      return;
    }

    image[r][c] = color;

    for (const [rd, cd] of directions) {
      dfs(r + rd, c + cd);
    }
  };

  dfs(sr, sc);

  return image;
}

// Time: O(m*n)
// Space: O(m*n)
