function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const str = String(x);

  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }

  return true;
}

// Time: O(n)
// Space: O(1)

function isPalindrome2(x: number): boolean {
  if (x < 0) return false;

  let d = digits(x) - 1;

  let half = Math.floor(d / 2);

  while (d > half) {
    const lead = Math.floor(x / Math.pow(10, d));
    const end = x % 10;

    console.log('lead', lead);
    console.log('end', end);

    if (lead !== end) return false;
    x = Math.floor(x / 10);
    // d--;
  }
  return true;
}

function digits(x: number): number {
  let n = 0;

  while (x > 0) {
    x = Math.floor(x / 10);
    n++;
  }

  return n;
}

console.log(isPalindrome2(1001));
