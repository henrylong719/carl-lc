function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const valid = (i: number) => {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      return true;
    }
    return false;
  };

  for (let i = 0; i < flowerbed.length; i++) {
    if (valid(i)) {
      flowerbed[i] = 1;
      n--;
    }

    if (n <= 0) return true;
  }

  return false;
}
