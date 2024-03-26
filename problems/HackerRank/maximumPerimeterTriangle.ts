function maximumPerimeterTriangle(sticks: number[]): number[] {
  let result = [] as number[];

  sticks.sort((a, b) => b - a);

  for (let i = 0; i < sticks.length - 2; i++) {
    const side1 = sticks[i];
    const side2 = sticks[i + 1];
    let side3 = sticks[i + 2];

    if (side1 < side2 + side3) {
      result = [side3, side2, side1];
      return result;
    }
  }

  return [-1];
}

console.log(maximumPerimeterTriangle([1, 3, 5, 6, 7, 10]));
