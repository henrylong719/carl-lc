function pageCount(n: number, p: number): number {
  const startFromFrontPages = Math.floor(p / 2);
  const startFromBackPages =
    n % 2 == 0 ? Math.ceil((n - p) / 2) : Math.floor((n - p) / 2);

  return Math.min(startFromFrontPages, startFromBackPages);
}

console.log(pageCount(6, 3));
