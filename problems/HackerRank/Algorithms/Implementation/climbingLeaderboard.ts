// function climbingLeaderboard3(ranked: number[], player: number[]): number[] {
//   let uniqueRanks = Array.from(new Set(ranked));

//   let pos = 0;
//   let ans = new Array(player.length).fill(1);

//   for (let i = uniqueRanks.length - 1; i >= 0; i--) {
//     while (player[pos] < uniqueRanks[i] && pos < player.length) {
//       ans[pos] = i + 2;
//       pos++;
//     }
//   }
//   return ans;
// }

// to be fixed
// function binarySearch(arr: number[], target: number) {
//   let l = 0;
//   let r = arr.length - 1;

//   while (l <= r) {
//     let mid = Math.floor((r + l) / 2);

//     if (target > arr[mid]) {
//       l = mid + 1;
//     } else if (target <= arr[mid]) {
//       r = mid - 1;
//     }
//   }

//   return l;
// }

// function climbingLeaderboard3(ranked: number[], player: number[]): number[] {
//   let ans = [];
//   for (let i = 0; i < player.length; i++) {
//     let positon = binarySearch(ranked, player[i]);

//     ans.push(ranked.length - positon);
//   }

//   return ans;
// }

// console.log(climbingLeaderboard3([100, 90, 90, 80], [70, 80, 105]));
