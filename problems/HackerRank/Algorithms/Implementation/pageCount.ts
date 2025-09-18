function pageCount(n: number, p: number): number {
  const pagesFromFront = Math.floor(p / 2);
  let pagesFromEnd = n;

  if (n % 2 == 0) {
    pagesFromEnd = Math.ceil((n - p) / 2);
  } else {
    pagesFromEnd = Math.floor((n - p) / 2);
  }

  return Math.min(pagesFromFront, pagesFromEnd);
}
