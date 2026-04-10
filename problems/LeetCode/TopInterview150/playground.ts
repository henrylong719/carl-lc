function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][],
): number[] {
  const map = new Map<string, any>();

  for (let i = 0; i < equations.length; i++) {
    const [src, end] = equations[i];
    const v = values[i];
    if (map.has(src)) {
      const exist = map.get(src);
      exist.push([end, v]);
      map.set(src, exist);
    } else {
      map.set(src, [[end, v]]);
    }

    if (map.has(end)) {
      const exist = map.get(end);
      exist.push([src, 1 / v]);
      map.set(end, exist);
    } else {
      map.set(end, [[src, 1 / v]]);
    }
  }

  console.log(map);

  return [];
}
calcEquation(
  [
    ['a', 'b'],
    ['b', 'c'],
  ],
  [2.0, 3.0],
  [
    ['a', 'c'],
    ['b', 'a'],
    ['a', 'e'],
    ['a', 'a'],
    ['x', 'x'],
  ],
);
