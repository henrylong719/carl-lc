// function getWays(n: number, c: number[]): number {
//   // Initialize an array called 'ways' of length 'n + 1' and fill it with 0s.
//   let ways = new Array(n + 1).fill(0);
//   // Set the number of ways to make change for the amount 0 to 1.
//   ways[0] = 1;

//   // Iterate through each coin denomination in the array 'c'.
//   // c = [8,3,1,2]
//   // n = 3
//   for (let coin of c) {
//     // For each coin denomination, iterate through each amount from 'coin' to 'n'.
//     for (let amount = coin; amount <= n; amount++) {
//       // Update the number of ways to make change for the current 'amount'
//       // by adding the number of ways to make change for 'amount - coin'
//       // (i.e., the current amount minus the current coin denomination).
//       ways[amount] += ways[amount - coin];
//     }
//   }

//   // Return the number of ways to make change for the target amount 'n'.
//   return ways[n];
// }

// getWays(3, [8, 3, 1, 2]);
