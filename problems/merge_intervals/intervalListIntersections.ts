/*
 *
 *
 * [[1,4],[5,6],[7,8],[9,15]] , [[2,4],[5,7],[9,15]]
 * [[1,3],[4,6],[8,10],[11,15]] , [[2,3],[10,15]]
 * [[1,2],[4,6],[7,8],[9,10]] , [[3,6],[7,8],[9,10]]
 * [[1,3],[5,6],[7,8],[9,10],[12,15]] , [[2,4],[7,10]]
 * [[1,2]] , [[1,2]]
 *
 *
 * [[1,4],[5,6],[7,8],[9,15]]
 * [[2,4],[5,7],[9,15]]
 *
 *
 */

import { Interval } from './interval';

export function intervalsIntersection(
  intervalListA: number[][],
  intervalListB: number[][]
) {
  const intersections = [];

  // counter for intervalListA and intervalListB
  let i = 0;
  let j = 0;

  // loop two arrays
  while (i < intervalListA.length && j < intervalListB.length) {
    // get intersect start and end time
    const start = Math.max(intervalListA[i][0], intervalListB[j][0]);
    const end = Math.min(intervalListA[i][1], intervalListB[j][1]);

    // make sure it's a valid interval
    if (start <= end) {
      intersections.push([start, end]);
    }

    if (intervalListA[i][1] < intervalListB[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return intersections;
}
