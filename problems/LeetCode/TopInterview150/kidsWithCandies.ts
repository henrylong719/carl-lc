function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);

  const ans = [];

  for (const candy of candies) {
    ans.push(candy + extraCandies >= max);
  }

  return ans;
}
