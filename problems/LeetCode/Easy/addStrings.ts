function addStrings(num1: string, num2: string): string {
  let carry = 0;
  let res = [];
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = 0;
    sum += carry;

    if (i >= 0) {
      sum += Number(num1[i]);
      i--;
    }

    if (j >= 0) {
      sum += Number(num2[j]);
      j--;
    }

    res.push(String(sum % 10));
    carry = Math.floor(sum / 10);
  }

  return res.reverse().join('');
}

// Time: O(n)
// Space: O(n)

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const next = new Map<number, number>();
  const stack: number[] = [];

  for (const num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      next.set(stack.pop()!, num);
    }
    stack.push(num);
  }

  return nums1.map((num) => next.get(num) ?? -1);
}

// Time: O(num1.length + num2.length)
// Space: O(num2.length)
