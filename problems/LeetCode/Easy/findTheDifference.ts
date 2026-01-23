function findTheDifference(s: string, t: string): string {
  const sortedS = s.split('').sort();
  const sortedT = t.split('').sort();

  for (let i = 0; i < sortedS.length; i++) {
    if (sortedS[i] !== sortedT[i]) return sortedT[i];
  }
  return sortedT[sortedT.length - 1];
}

// Time: O(nlog(n))
// Space: O(n)

function findTheDifference2(s: string, t: string): string {
  const counterS = new Array(26).fill(0);
  const counterT = new Array(26).fill(0);

  for (const char of s) {
    const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
    counterS[idx]++;
  }

  for (const char of t) {
    const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
    counterT[idx]++;
  }

  for (let i = 0; i < 26; i++) {
    if (counterS[i] !== counterT[i]) {
      return String.fromCharCode(i + 'a'.charCodeAt(0));
    }
  }
}

function findTheDifference3(s: string, t: string): string {
  let charCodeSum = 0;

  for (const char of t) {
    charCodeSum += char.charCodeAt(0);
  }

  for (const char of s) {
    charCodeSum -= char.charCodeAt(0);
  }

  return String.fromCharCode(charCodeSum);
}

// Time: O(n)
// Space: O(1)
