function weightedUniformStrings(s: string, queries: number[]): string[] {
  // 1. find all weight
  // 2. determine if query element in the weight array

  // abbcccdddd
  let weightArr = [s[0].charCodeAt(0) - 96] as number[];

  for (let windowEnd = 1; windowEnd < s.length; windowEnd++) {
    const charWeight = s[windowEnd].charCodeAt(0) - 96;
    let windowStart = windowEnd - 1;
    // add a new element
    if (s[windowEnd] !== s[windowStart]) {
      weightArr.push(charWeight);
    }

    // not record for now if it's uniform string
    if (s[windowEnd] === s[windowEnd + 1]) {
      continue;
    }

    // record uniform string
    let uniformStringWeight = charWeight;
    while (s[windowEnd] === s[windowStart]) {
      uniformStringWeight += charWeight;
      weightArr.push(uniformStringWeight);
      windowStart--;
    }
  }

  const result = queries.map((query) => {
    if (weightArr.includes(query)) {
      return 'Yes';
    }
    return 'No';
  });

  return result;
}

console.log(weightedUniformStrings('abbcccdddd', [1, 7, 5, 4, 15]));

// 97;
// console.log('a'.charCodeAt(0));
