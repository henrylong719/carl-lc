/**
 *
 *
 * "AAAAACCCCCAAAAACCCCCC" , 8
 * "GGGGGGGGGGGGGGGGGGGGGGGGG" , 12
 * "TTTTTCCCCCCCTTTTTTCCCCCCCTTTTTTT" , 10
 * "AAAAAACCCCCCCAAAAAAAACCCCCCCTG" , 10
 * "ATATATATATATATAT" , 6
 *
 *
 */

export function findRepeatedSequences(s: string, k: number) {
  if (s.length < k) return [];

  let seen = new Map();
  let result = new Map();

  for (let i = 0; i < s.length; i++) {
    let cur = s.slice(i, i + k);

    if (seen.has(cur)) {
      result.set(cur, 1);
    }

    seen.set(cur, 1);
  }

  return Array.from(result.keys());
}

export function findRepeatedSequencesTwo(s: string, k: number) {
  if (s.length < k) return [];

  let seen = new Map();
  let result = new Set();

  for (let i = 0; i < s.length; i++) {
    let cur = s.slice(i, i + k);

    if (seen.has(cur)) {
      result.add(cur);
    }

    seen.set(cur, 1);
  }

  return Array.from(result.keys());
}

console.log(findRepeatedSequences('AAAAACCCCCAAAAACCCCCC', 8));
