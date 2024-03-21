function countingValleys(steps: number, path: string): number {
  //  8
  // UDDDUDUU
  // /\      _
  //  \    /
  //   \/\/
  // start from 0 and count the number of times coming back 0 (step is Up)

  let stepper = 0;
  let result = 0;

  for (let i = 0; i < steps; i++) {
    const step = path[i];
    step === 'U' ? stepper++ : stepper--;

    // go back to sea level
    if (stepper === 0 && i !== 0) {
      step === 'U' && result++;
    }
  }
  return result;
}

console.log(countingValleys(10, 'UDDDUDUUDU'));
