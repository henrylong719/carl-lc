/*
 *
 *
 * [[[1,2],[5,6]],[[1,3]],[[4,10]]]
 * [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
 * [[[2,3],[7,9]],[[1,4],[6,7]]]
 * [[[3,5],[8,10]],[[4,6],[9,12]],[[5,6],[8,10]]]
 * [[[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]],[[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]],[[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]],[[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]]]
 * [[[1,3],[6,9],[10,11]],[[3,4],[7,12]],[[1,3],[7,10]],[[1,4]],[[7,10],[11,12]]]
 * [[[1,2],[3,4],[5,6],[7,8]],[[2,3],[4,5],[6,8]]]
 *
 *
 *
 * [[1,2],[5,6]]
 */

export function employeeFreeTime(schedule: any[]) {
  // get all employee working time
  const sortedSchedule = schedule
    .reduce((pre, cur) => pre.concat(cur), [])
    .sort((a: any, b: any) => a[0] - b[0]);

  console.log('sortedSchedule', sortedSchedule);

  let employeesAllWorkingTime = [sortedSchedule[0]];

  for (let i = 1; i < sortedSchedule.length; i++) {
    let preInterval =
      employeesAllWorkingTime[employeesAllWorkingTime.length - 1];

    let curStart = sortedSchedule[i][0];

    if (curStart <= preInterval[1]) {
      preInterval[1] = Math.max(preInterval[1], sortedSchedule[i][1]);
    } else {
      employeesAllWorkingTime.push(sortedSchedule[i]);
    }
  }

  console.log('employeesAllWorkingTime', employeesAllWorkingTime);

  // find the gap between employ all working time

  const result = [];

  for (let i = 0; i < employeesAllWorkingTime.length; i++) {
    let curEnd = employeesAllWorkingTime[i][1];
    let nextStart;

    if (!!employeesAllWorkingTime[i + 1]) {
      nextStart = employeesAllWorkingTime[i + 1][0];
    }

    if (!!curEnd && !!nextStart) {
      result.push([curEnd, nextStart]);
    }
  }

  console.log('result', result);

  return result;
}

export function employeeFreeTimeBetterSolution(schedule: any[]): any[] {
  const sortedSchedule = schedule.flat().sort((a, b) => a[0] - b[0]);
  const result: any[] = [];

  let preEnd = sortedSchedule[0][1];

  sortedSchedule.forEach((schedule) => {
    if (schedule[0] > preEnd) {
      result.push([preEnd, schedule[0]]);
    }

    preEnd = Math.max(preEnd, schedule[1]);
  });

  return result;
}

employeeFreeTimeBetterSolution([
  [
    [1, 2],
    [5, 6],
  ],
  [[1, 3]],
  [[4, 10]],
]);
