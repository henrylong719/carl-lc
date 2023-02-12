export function circularArrayLoop(numbers: number[]) {
  if (numbers.length <= 1) return false;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) continue;

    let slow = i;
    let fast = getNext(numbers, i);

    // make sure they are in the same direction
    while (numbers[slow] * numbers[fast] > 0) {
      if (slow === fast) {
        // // avoid situation like [-1,2]
        if (slow === getNext(numbers, slow)) {
          break;
        }
        return true;
      }

      if (numbers[fast] * numbers[getNext(numbers, fast)] < 0) break;

      slow = getNext(numbers, slow);
      fast = getNext(numbers, getNext(numbers, fast));
    }
  }

  return false;
}

function getNext(numbers: number[], index: number) {
  let next = (index + numbers[index]) % numbers.length;
  if (next >= 0) {
    return next;
  } else {
    return next + numbers.length;
  }
}
