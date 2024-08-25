function weightedUniformStrings(s: string, queries: number[]): string[] {
  let weightOjb = {} as any;
  let windowStart = 0;

  while (windowStart < s.length) {
    const charWeight = s[windowStart].charCodeAt(0) - 96;
    // add a new element
    weightOjb[charWeight] = 1;

    // record uniform string number
    let windowEnd = windowStart + 1;
    let weight = charWeight;
    while (s[windowStart] === s[windowEnd]) {
      weight += charWeight;
      weightOjb[weight] = 1;
      windowEnd++;
    }
    windowStart = windowEnd;
  }

  const result = queries.map((query) =>
    weightOjb.hasOwnProperty(query) ? 'Yes' : 'No'
  );

  return result;
}

console.log(weightedUniformStrings('aaabbbbcccddd', [5, 9, 7, 8, 12, 5]));

// 97;
// console.log('a'.charCodeAt(0));
