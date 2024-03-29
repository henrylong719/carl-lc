/*
 *
 *
 * [[1,5],[3,7],[4,6]]
 * [[1,5],[4,6],[6,8],[11,15]]
 * [[3,7],[6,8],[10,12],[11,15]]
 * [[1,5]]
 * [[1,4],[4,5]]
 * [[1,9],[4,4],[3,8]]
 * [[1,2],[3,4],[8,8]]
 * [[1,5],[1,3]]
 * [[1,5],[6,9]]
 * [[0,0],[1,18],[1,3]]
 * [[0,1],[1,4],[7,10],[12,13],[18,20],[22,23]]
 *
 *
 */

export function mergeIntervalSolutionTwo(v: number[][]) {
  if (v.length === 0) return [];
  let result: number[][] = [];
  result.push(v[0]);
  for (let i = 1; i < v.length; i++) {
    let lastAddedInterval = result[result.length - 1];

    let preEnd = lastAddedInterval[1];

    let curStart = v[i][0];

    if (curStart <= preEnd) {
      lastAddedInterval[1] = Math.max(preEnd, v[i][1]);
    } else {
      result.push(v[i]);
    }
  }

  return result;
}

// not perfect solution
export function mergeIntervals(v: any) {
  let result: any = [v[0]];

  for (let i = 1; i < v.length; i++) {
    if (
      v[i][0] <= result[result.length - 1][1] &&
      v[i][1] >= result[result.length - 1][1]
    ) {
      // update result array
      result[result.length - 1][1] = v[i][1];
    } else if (v[i][0] > result[result.length - 1][1]) {
      result.push(v[i]);
    }
  }

  return result;
}

import { Interval } from './interval.js';

// not perfect solution
export function mergeIntervalsSolution(v: Interval[]) {
  let result = [v[0]];

  for (let i = 1; i < v.length; i++) {
    if (
      v[i].start <= result[result.length - 1].end &&
      v[i].end >= result[result.length - 1].end
    ) {
      // update result array
      result[result.length - 1].end = v[i].end;
    } else if (v[i].start > result[result.length - 1].end) {
      result.push(v[i]);
    }
  }

  return result;
}

export function mergeIntervalLeetCodeSolution(v: number[][]) {
  const _v = v.sort((a, b) => a[0] - b[0]);

  const result = [_v[0]];

  for (let i = 1; i < _v.length; i++) {
    let lastEnd = result[result.length - 1][1];

    const curStart = _v[i][0];

    if (curStart <= lastEnd) {
      // compare last end value and current end value and pick the bigger one
      result[result.length - 1][1] = Math.max(lastEnd, _v[i][1]);
    } else {
      // no overlapping intervals
      result.push(_v[i]);
    }
  }

  return result;
}

console.log(
  mergeIntervalLeetCodeSolution([
    [1, 5],
    [4, 6],
    [3, 7],
  ])
);
