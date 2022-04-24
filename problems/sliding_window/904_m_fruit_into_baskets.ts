const fruits_into_baskets = function (fruits: number[]) {
  let maxLength = 0;
  let windowStart = 0;
  let fruitFrequency = {} as any;

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];

    if (!fruitFrequency[rightFruit]) {
      fruitFrequency[rightFruit] = 0;
    }

    fruitFrequency[rightFruit] += 1;

    // pick three kind of fruit already
    while (Object.keys(fruitFrequency).length > 2) {
      const leftFruit = fruits[windowStart];

      fruitFrequency[leftFruit]--;

      if (fruitFrequency[leftFruit] === 0) {
        delete fruitFrequency[leftFruit];
      }

      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

const Fruit = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
// Output: 3
// ['C', 'A', 'C']

const Fruit2 = ['A', 'B', 'C', 'B', 'B', 'C'];
// Output: 5
// ['B', 'C', 'B', 'B', 'C']

console.log(fruits_into_baskets(Fruit));
