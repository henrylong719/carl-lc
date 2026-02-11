function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  let count = 0;
  for (const f of fruits) {
    let valid = false;
    for (let i = 0; i < baskets.length; i++) {
      const b = baskets[i];
      if (b >= f) {
        valid = true;
        baskets[i] = 0;
        break;
      }
    }
    if (!valid) count++;
  }

  return count;
}

// Time: O(m*n)
// Space: O(1)
