function isHappy(n: number): boolean {
  const visit = new Set();
  while (!visit.has(n)) {
    visit.add(n);
    n = getSquareSum(n);
    if (n === 1) {
      return true;
    }
  }
  return false;
}

/*
Complexity
Time complexity: O(logn)
In the isHappy function, the sum of the squares of each digit is calculated to generate the next number. 
Repeating this operation will eventually cause the sequence to converge within a certain range. Specifically, 
no matter how large the starting number is, 
continuously calculating the sum of the squares will always cause the sequence to converge to a single-digit or two-digit number.

Due to this convergence, the number of iterations in the while loop is bounded within a certain range. 
Specifically, the number of iterations until the sequence converges to a single-digit or two-digit number is limited, 
and this is the constant k. Therefore, the number of iterations is bounded by a constant, making the time complexity O(k).

Since O(k) is a small constant, the time complexity can be simplified from O(k∗logn) to O(logn). 
Here, O(logn) represents the time to calculate the sum of the squares of each digit.

Space complexity: O(k)
k is the number of unique numbers encountered and stored in the visit set before a cycle is detected or the number 1 is found.
*/

// Time complexity: O(log(n))
// Space complexity: O(log(n))

function isHappy2(n: number): boolean {
  let fast = n;
  let slow = n;

  while (true) {
    fast = getSquareSum(fast);
    slow = getSquareSum(getSquareSum(slow));
    if (fast === slow) {
      break;
    }
  }

  return slow === 1;
}

/*

Time

Same reasoning:

Each loop does a constant number of getSquareSum calls → O(log n) per iteration.

Number of iterations until cycle is again bounded by a constant.

So overall: Time complexity: O(log n) (or O(1) with fixed-width ints).

Space

Only a few variables: fast, slow, and locals inside getSquareSum.

No Set, no extra data structures.

Space complexity: O(1).

*/

// Time complexity: O(log(n))
// Space complexity: O(1)

function getSquareSum(n: number) {
  let ans = 0;
  while (n !== 0) {
    const remainder = n % 10;
    ans += Math.pow(remainder, 2);
    n = Math.floor(n / 10);
  }
  return ans;
}

// Number of iterations = number of digits of n.

/*

If n is a positive integer:

Numbers from 1 to 9 → 1 digit

10 to 99 → 2 digits

100 to 999 → 3 digits

…

10^(k-1) to 10^k - 1 → k digits

So if n has k digits, it lies roughly around 10^(k-1) to 10^k.

10^(k-1) ≤ n < 10^k

k-1 ≤ log10(n) < k

number of digits = Θ(log n)

*/
