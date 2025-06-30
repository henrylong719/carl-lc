function deliveringPizzas(
  buildings: number[],
  deliveries: number[][]
): number[] {
  const pizzas = [] as number[];

  // sort buildings in non-descending order

  const sorted = [...buildings].sort((a, b) => a - b);

  for (let i = 0; i < deliveries.length; i++) {
    const left = deliveries[i][0];
    const right = deliveries[i][1];

    const low = lowerBound(sorted, left);
    const high = higherBound(sorted, right);

    pizzas.push(high - low);
  }

  return pizzas;
}

// Find the element which is equal or greater than the target
function lowerBound(buildings: number[], target: number) {
  const len = buildings.length;

  let left = 0;
  let right = len - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target <= buildings[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function higherBound(buildings: number[], target: number) {
  const len = buildings.length;

  let left = 0;
  let right = len - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target >= buildings[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

const buildings = [7, 4, 6, 2, 8];
const deliveries = [
  [1, 3],
  [5, 5],
  [1, 9],
  [8, 8],
  [2, 6],
];

console.log(deliveringPizzas(buildings, deliveries));
