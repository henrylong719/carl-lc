function addBinary(a: string, b: string): string {
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  let res = '';

  while (i >= 0 || j >= 0 || carry > 0) {
    let total = carry;

    if (i >= 0) total += parseInt(a[i]);
    if (j >= 0) total += parseInt(b[j]);

    res = (total % 2) + res;
    carry = Math.floor(total / 2);

    i--;
    j--;
  }

  return res;
}

// Time: O(n)
// Space: O(1)
