function createPhoneNumber(arr: number[]) {
  const firstPart = arr.slice(0, 3);

  const secondPart = arr.slice(3, 6);

  const thirdPart = arr.slice(6);

  return (
    '(' +
    firstPart.join('') +
    ') ' +
    secondPart.join('') +
    '-' +
    thirdPart.join('')
  );
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
