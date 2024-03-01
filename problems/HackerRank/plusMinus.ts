function plusMinus(arr: number[]): void {
  let posCounter = 0;
  let negCounter = 0;
  let zeroCounter = 0;
  let arrLength = arr.length;

  for (let i of arr) {
    if (i > 0) {
      posCounter++;
    } else if (i < 0) {
      negCounter++;
    } else {
      zeroCounter++;
    }
  }

  console.log((posCounter / arrLength).toFixed(6));
  console.log((negCounter / arrLength).toFixed(6));
  console.log((zeroCounter / arrLength).toFixed(6));
}
