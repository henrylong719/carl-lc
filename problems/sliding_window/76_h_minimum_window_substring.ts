function minWindow(s: string, t: string): string {
  // Input: String="aabdec", Pattern="abc"
  // Output: "abdec"

  // Input: String="aabdec", Pattern="abac"
  // Output: "aabdec"

  if (s.length < t.length) return '';

  let windowStart = 0;
  let frequencyMap = {} as any;
  let letterCounter = 0;

  for (let i = 0; i < t.length; i++) {
    let char = t[i];

    if (!(char in frequencyMap)) {
      frequencyMap[char] = 0;
    }
    frequencyMap[char]++;
  }

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {}

  return '';
}

console.log(minWindow('abdbca', 'abc'));
