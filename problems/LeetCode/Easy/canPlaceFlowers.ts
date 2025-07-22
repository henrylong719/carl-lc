function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const _flowerbed = [...flowerbed];

  for (let i = 0; i < flowerbed.length; i++) {
    if (isValid(_flowerbed, i)) {
      _flowerbed[i] = 1;
      n--;
    }
  }
  return n <= 0 ? true : false;
}

function isValid(flowerbed: number[], p: number) {
  if (
    (p === 0 || flowerbed[p - 1] === 0) &&
    flowerbed[p] === 0 &&
    (flowerbed[p + 1] === 0 || p === flowerbed.length - 1)
  ) {
    return true;
  }

  return false;
}
