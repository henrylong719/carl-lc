function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const wordListSet = new Set(wordList);
  if (!wordListSet.has(endWord)) return 0;

  const letters = 'abcdefghijklmnopqrstuvwxyz';

  const bfs = (word: string) => {
    const queue = [[word, 1]] as [string, number][];
    const visited = new Set([word]);
    let idx = 0;

    while (idx < queue.length) {
      const [w, s] = queue[idx++];
      if (w === endWord) return s;

      const arr = w.split('');

      for (let i = 0; i < arr.length; i++) {
        const original = arr[i];
        for (const can of letters) {
          if (can === original) continue;
          arr[i] = can;
          const str = arr.join('');
          if (wordListSet.has(str) && !visited.has(str)) {
            visited.add(str);
            queue.push([str, s + 1]);
          }
        }
        arr[i] = original;
      }
    }

    return 0;
  };

  return bfs(beginWord);
}

// Time O(m * n * 26)
// m: wordList.length
// n: beginWord.length

// O(m)

function ladderLength2(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const dict = new Set(wordList);
  if (!dict.has(endWord)) return 0;

  let begin = new Set<string>([beginWord]);
  let end = new Set<string>([endWord]);

  const visited = new Set<string>([beginWord, endWord]);
  const L = beginWord.length;
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  let steps = 1;

  while (begin.size && end.size) {
    // always expand smaller frontier
    if (begin.size > end.size) {
      const tmp = begin;
      begin = end;
      end = tmp;
    }

    const next = new Set<string>();

    for (const word of begin) {
      const arr = word.split('');

      for (let i = 0; i < L; i++) {
        const original = arr[i];

        for (let k = 0; k < 26; k++) {
          const ch = letters[k];
          if (ch === original) continue;

          arr[i] = ch;
          const candidate = arr.join('');

          if (end.has(candidate)) return steps + 1;

          if (dict.has(candidate) && !visited.has(candidate)) {
            visited.add(candidate);
            next.add(candidate);
          }
        }

        arr[i] = original;
      }
    }

    begin = next;
    steps++;
  }

  return 0;
}

// Time: O(N*L^2)
// N: number of words in wordLsit, L: word lengh
// For each visited word, we need to try up to L * 25 mutations, for each mutation, we need to build a new string
// via join

// per word O(L*26*L) = O(26*L^2)
// Space O(N)

// why bidirectional BFS is faster in practice: it usually visits far fewer than N nodes, but worst-case is still O(N)
