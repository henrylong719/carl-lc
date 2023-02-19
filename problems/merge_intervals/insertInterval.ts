/*
 *
 *
 * [[1,2],[3,4],[5,8],[9,15]] , [2,5]
 * [[1,6],[8,9],[10,15],[16,18]] , [9,10]
 * [[1,2],[3,4],[5,8],[9,15]] , [16,17]
 * [[1,4],[5,6],[7,8],[9,10]] , [1,5]
 * [[1,3],[4,6],[7,8],[9,10]] , [1,10]
 * [[1,2],[3,4],[5,6],[7,8],[9,10]] , [3,5]
 *
 *
 */

export function insertInterval(
  existingIntervals: number[][],
  newInterval: number[]
) {
  existingIntervals.push(newInterval);

  const _interval = existingIntervals.sort((a, b) => a[0] - b[0]);

  const result = [_interval[0]];

  for (let i = 1; i < _interval.length; i++) {
    let resultLast = result[result.length - 1];

    const curStart = _interval[i][0];

    if (curStart <= resultLast[1]) {
      resultLast[1] = Math.max(resultLast[1], _interval[i][1]);
    } else {
      result.push(_interval[i]);
    }
  }

  return result;
}

console.log(
  'intervals',
  insertInterval(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
