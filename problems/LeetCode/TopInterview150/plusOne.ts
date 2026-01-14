function plusOne(digits: number[]): number[] {
  let carry = 0;
  const res = [];

  for (let i = digits.length - 1; i >= 0; i--) {
    let total = digits[i] + carry;
    if (i === digits.length - 1) {
      total += 1;
    }

    if (total >= 10) {
      carry = 1;
      total = total - 10;
    } else {
      carry = 0;
    }
    res.push(total);
  }

  if (carry === 1) {
    res.push(1);
  }

  return res.reverse();
}

function plusOne2(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);

  return digits;
}

// Time: O(n)
// Space: O(1)
