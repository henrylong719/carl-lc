### \*\* [133. Clone Graph](https://leetcode.com/problems/clone-graph/) (23/12)

```typescript

function cloneGraph2(node: _Node | null): _Node | null {
  if (!node) return node;

  const map = new Map<_Node, _Node>();
  map.set(node, new _Node(node.val));

  const stack = [node];

  while (stack.length) {
    const cur = stack.pop();
    const curClone = map.get(cur);

    for (const nei of cur.neighbors) {
      if (!map.has(nei)) {
        const neiClone = new _Node(nei.val);
        map.set(nei, neiClone);
        stack.push(nei);
      }
      curClone.neighbors.push(map.get(nei));
    }
  }

  return map.get(node);
}

// Time O(V+E)
// Space O(V)
```

### \*\*\* [207. Course Schedule](https://leetcode.com/problems/course-schedule/) (23/12)

```typescript
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const preMap = {} as Record<number, number[]>;

  for (let i = 0; i < numCourses; i++) {
    preMap[i] = [];
  }

  for (const [cor, pre] of prerequisites) {
    preMap[cor].push(pre);
  }

  const cycle = new Set();

  const dfs = (cor: number) => {
    if (preMap[cor].length === 0) return true;
    if (cycle.has(cor)) return false;

    cycle.add(cor);

    for (let pre of preMap[cor]) {
      if (!dfs(pre)) return false;
    }
    cycle.delete(cor);
    preMap[cor] = [];
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
}

// Time O(V + E)
// Space O(V + E) for graph + O(V) recursion stack in worst case
```

### \*\*\* [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) (23/12)

```typescript
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const preqMap = [];

  for (let i = 0; i < numCourses; i++) {
    preqMap[i] = [];
  }

  for (const [cor, pre] of prerequisites) {
    preqMap[cor].push(pre);
  }

  const ans = [];
  const cycle = new Set<number>();
  const seen = new Set<number>();

  const dfs = (cor: number) => {
    if (seen.has(cor)) return true;

    if (cycle.has(cor)) return false;

    cycle.add(cor);

    for (const pre of preqMap[cor]) {
      if (!dfs(pre)) return false;
    }

    cycle.delete(cor);
    seen.add(cor);
    ans.push(cor);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }

  return ans;
}

// Time O(V + E)
// Space O(V + E) for graph + O(V) recursion stack in worst case
```

### \*[1768. Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/) (24/12)

```typescript
function mergeAlternately(word1: string, word2: string): string {
  if (!word1) return word2;
  if (!word2) return word1;

  let arr = new Array(word1.length + word2.length);
  let ptr = 0;

  for (let i = 0; i < word1.length; i++) {
    arr[ptr] = word1[i];
    ptr += 2;
  }

  ptr = 1;

  for (let i = 0; i < word2.length; i++) {
    arr[ptr] = word2[i];
    ptr += 2;
  }

  return arr.join('');
}

function mergeAlternately(word1: string, word2: string): string {
  if (!word1 || !word2) return word1 || word2;

  const merged = [];

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) {
      merged.push(word1[i]);
    }

    if (i < word2.length) {
      merged.push(word2[i]);
    }
  }

  return merged.join('');
}

// Time O(m+n)
// Space O(m+n)
```

### \*\*\* [1071. Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/) (24/12)

```typescript
function gcdOfStrings(str1: string, str2: string): string {
  const len1 = str1.length;
  const len2 = str2.length;

  const isDivisor = (l: number) => {
    if (len1 % l !== 0 || len2 % l !== 0) return false;

    let t1 = len1 / l;
    let t2 = len2 / l;

    let prefix = str1.slice(0, l);

    if (prefix.repeat(t1) === str1 && prefix.repeat(t2) === str2) {
      return true;
    }

    return false;
  };

  for (let i = Math.min(len1, len2); i > 0; i--) {
    if (isDivisor(i)) {
      return str1.slice(0, i);
    }
  }

  return '';
}

// Time: O(min(m,n) * (m+n)
// Space: O(n+m) .repeat

function gcdOfStrings(str1: string, str2: string): string {
  let len1 = str1.length;
  let len2 = str2.length;

  const isDivisor = (l: number) => {
    if (len1 % l !== 0 || len2 % l !== 0) return false;

    const prefix = str1.slice(0, l);

    for (let i = 0; i < str1.length; i += prefix.length) {
      if (!str1.startsWith(prefix, i)) return false;
    }

    for (let i = 0; i < str2.length; i += prefix.length) {
      if (!str2.startsWith(prefix, i)) return false;
    }

    return true;
  };

  for (let i = Math.min(len1, len2); i > 0; i--) {
    if (isDivisor(i)) return str1.slice(0, i);
  }

  return '';
}

// Time: O(min(m,n) * (m+n)
// Space: O(k) for prefix
```

### \*\*\*[399. Evaluate Division](https://leetcode.com/problems/evaluate-division/) (24/12)

```typescript
function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][],
): number[] {
  const graph = new Map<string, [string, number][]>();

  const buildEdges = (from: string, to: string, weight: number) => {
    if (!graph.has(from)) graph.set(from, []);
    graph.get(from).push([to, weight]);
  };

  for (let i = 0; i < equations.length; i++) {
    const [from, to] = equations[i];
    const val = values[i];

    buildEdges(from, to, val);
    buildEdges(to, from, 1 / val);
  }

  const bfs = (start, end) => {
    if (!graph.has(start) || !graph.has(end)) {
      return -1;
    }

    const queue = [[start, 1]];
    const visited = new Set();

    let idx = 0;

    while (idx < queue.length) {
      const [cur, dist] = queue[idx++];

      if (cur === end) return dist;

      for (let [nei, w] of graph.get(cur)) {
        if (!visited.has(nei)) {
          visited.add(nei);
          queue.push([nei, dist * w]);
        }
      }
    }
    return -1;
  };

  let ans = [];

  for (let i = 0; i < queries.length; i++) {
    ans.push(bfs(queries[i][0], queries[i][1]));
  }

  return ans;
}
```

### \*\*\*[433. Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/) (24/12)

```typescript
function minMutation(
  startGene: string,
  endGene: string,
  bank: string[],
): number {
  const bankSet = new Set(bank);

  if (!bankSet.has(endGene)) return -1;

  const choices = ['A', 'C', 'G', 'T'];
  const queue = [[startGene, 0]] as [string, number][];
  const visisted = new Set();
  visisted.add(startGene);

  while (queue.length) {
    const [cur, step] = queue.shift();

    if (cur === endGene) return step;

    let arr = cur.split('');

    for (let i = 0; i < arr.length; i++) {
      let original = arr[i];

      for (let char of choices) {
        arr[i] = char;
        let gene = arr.join('');
        if (!visisted.has(gene) && bankSet.has(gene)) {
          visisted.add(gene);
          queue.push([gene, step + 1]);
        }
      }
      arr[i] = original;
    }
  }

  return -1;
}

// Time: Bank.length * Gene.length * 4
// Space: queue
```

### [1431. Kids With the Greatest Number of Candies](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/) (25/12)

```typescript
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);

  const ans = [];

  for (const candy of candies) {
    ans.push(candy + extraCandies >= max);
  }

  return ans;
}

// TIme: O(n)
// Space: O(n)
```

### \*[345. Reverse Vowels of a String](https://leetcode.com/problems/reverse-vowels-of-a-string/) (25/12)

```typescript
function reverseVowels(s: string): string {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let l = 0;
  let r = s.length - 1;

  const arr = s.split('');

  while (l < r) {
    while (l < r && !vowels.has(arr[l])) l++;
    while (l < r && !vowels.has(arr[r])) r--;

    if (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
  return arr.join('');
}

// Time O(n)
// Space O(n)
```

### \*\*\*[127. Word Ladder](https://leetcode.com/problems/word-ladder/) (25/12)

```typescript
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
```

### \*\* [909. Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/) (25/12)

`rowIdx`

```typescript

function snakesAndLadders(board: number[][]): number {
  let flat = [0];

  const n = board.length;
  const target = Math.pow(n, 2);

  let idx = 1;

  for (let r = board.length - 1; r >= 0; r--) {
    const rowIdx = n - r;
    const reverseRow = rowIdx % 2 === 0;

    if (reverseRow) {
      for (let c = n - 1; c >= 0; c--) flat[idx++] = board[r][c];
    } else {
      for (let c = 0; c < n; c++) flat[idx++] = board[r][c];
    }
  }

  const bfs = () => {
    // [positon, steps]
    const queue = [[1, 0]];

    let q = 0;

    // we start from position 1
    const visited = new Set([1]);

    while (q < queue.length) {
      const [curr, step] = queue[q++];

      if (curr === target) return step;

      for (let i = 1; i <= 6; i++) {
        const nextPos = curr + i;
        if (nextPos > target) break;

        let next = nextPos;

        if (flat[nextPos] !== -1) {
          next = flat[nextPos];
        }

        if (!visited.has(next)) {
          visited.add(next);
          queue.push([next, step + 1]);
        }
      }
    }

    return -1;
  };

  return bfs();
}

// Time O(n^2)
// Space O(n^2)
```



### *[283. Move Zeroes](https://leetcode.com/problems/move-zeroes/) (26/12)

```typescript

function moveZeroes(nums: number[]): void {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx++] = nums[i];
    }
  }

  for (let i = idx; i < nums.length; i++) {
    nums[i] = 0;
  }
}

function moveZeroes2(nums: number[]): void {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
}

// Time: O(n)
// Space: O(1)

```



### * [1732. Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude/) (26/12)

```typescript

function largestAltitude(gain: number[]): number {
  const prefix = new Array(gain.length + 1).fill(0);

  for (let i = 1; i <= gain.length; i++) {
    prefix[i] = prefix[i - 1] + gain[i - 1];
  }

  return Math.max(...prefix);
}

// Time O(n)
// Space O(n)

```





### *** [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) (26/12)

```typescript

class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEndOfWord: boolean = false;
}

class Trie {
  private root = new TrieNode();

  // Time O(L), Space: O(L)
  insert(word: string): void {
    let node = this.root;

    for (let char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }

    node.isEndOfWord = true;
  }

  // Time O(L), Space: O(1)
  search(word: string): boolean {
    let node = this.root;

    for (let char of word) {
      const next = node.children.get(char);
      if (!next) return false;
      node = next;
    }

    return node.isEndOfWord;
  }

  // Time O(L), Space: O(1)
  startsWith(prefix: string): boolean {
    let node = this.root;

    for (let char of prefix) {
      const next = node.children.get(char);
      if (!next) return false;
      node = next;
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class TrieNode {
  children: (TrieNode | null)[];
  isEndOfWord: boolean;

  constructor() {
    this.children = new Array(26).fill(null);
    this.isEndOfWord = false;
  }
}

class Trie {
  private root = new TrieNode();

  private idx(char: string): number {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  insert(word: string): void {
    let node = this.root;

    for (let char of word) {
      const key = this.idx(char);

      if (node.children[key] === null) {
        node.children[key] = new TrieNode();
      }

      node = node.children[key];
    }

    node.isEndOfWord = true;
  }

  search(word: string): boolean {
    let node = this.root;
    for (let char of word) {
      const key = this.idx(char);

      let next = node.children[key];
      if (next === null) return false;
      node = next;
    }

    return node.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (let char of prefix) {
      const key = this.idx(char);

      let next = node.children[key];
      if (next === null) return false;
      node = next;
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

```





### *** [211. Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) (26/12)

```typescript
class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEndOfWord: boolean = false;
}

class WordDictionary {
  private root = new TrieNode();

  addWord(word: string): void {
    let node = this.root;

    for (let char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }

      node = node.children.get(char)!;
    }

    node.isEndOfWord = true;
  }

  // Time O(L)
  // Space O(L)

  search(word: string): boolean {
    const dfs = (i: number, node: TrieNode) => {
      if (i === word.length) return node.isEndOfWord;

      const char = word[i];

      if (char !== '.') {
        const next = node.children.get(char);
        if (!next) return false;
        return dfs(i + 1, next);
      }

      for (let child of node.children.values()) {
        if (dfs(i + 1, child)) return true;
      }

      return false;
    };

    return dfs(0, this.root);
  }
  
  // iterative dfs
   search(word: string): boolean {

        const stack: [TrieNode, number][] = [[this.root, 0]];

        while (stack.length) {

            const [node, i] = stack.pop();

            if (i === word.length) {
                if (node.isEndOfWord) return true;
            }

            if (word[i] !== '.') {
                const next = node.children.get(word[i]);
                if (!next) continue;
                stack.push([next, i+1]);
            } else {
                for (let child of node.children.values()) {
                    stack.push([child, i+1]);
                }
            }
        }

        return false;
    }

  // Time:
  // No . : O(L)
  //
  // With .: Worst case O(26^k * L) k: number of "."

  // Example:
  // b..
  // 3 * 26 * 26
  // a.b.c
  // 5 * 26^2
}

```



### * [724. Find Pivot Index](https://leetcode.com/problems/find-pivot-index/) (28/12)

`Notice the difference between this one and 1732 Find the Highest Altitude`

```typescript

function pivotIndex(nums: number[]): number {

    const n = nums.length;

    const prefix = new Array(n).fill(0);
    const postfix = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + nums[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        postfix[i] = postfix[i + 1] + nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        if (prefix[i] === postfix[i]) return i;
    }

    return -1;
};

function pivotIndex(nums: number[]): number {

    const n = nums.length;
    const postfix = new Array(n).fill(0);

    for (let i = n - 2; i >= 0; i--) {
        postfix[i] = postfix[i + 1] + nums[i + 1];
    }

    let pre = 0;

    for (let i = 0; i < n; i++) {
        if (pre === postfix[i]) return i;
        pre += nums[i];
    }

    return -1;
};


// Time O(n)
// Space O(n)

```



### [2215. Find the Difference of Two Arrays](https://leetcode.com/problems/find-the-difference-of-two-arrays/) (28/12)

```typescript

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const ans = [[], []] as number[][];

  for (let num of set1) {
    if (!set2.has(num)) ans[0].push(num);
  }

  for (let num of set2) {
    if (!set1.has(num)) ans[1].push(num);
  }

  return ans;
}

// Time: O(n)
// Space: O(n)

```



### *[1207. Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/) (28/12)

```typescript

function uniqueOccurrences(arr: number[]): boolean {
  const map: Map<number, number> = new Map();

  for (let num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const seen = new Set();

  for (const count of map.values()) {
    if (seen.has(count)) return false;
    seen.add(count);
  }

  return true;
}

// Time: O(n)
// Space: O(n)

```



### *[933. Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/) (28/12)

```typescript

class RecentCounter {
  private head: number = 0;
  private queue: number[] = [];

  ping(t: number): number {
    this.queue.push(t);

    const limit = t - 3000;

    while (this.queue[this.head] < limit) this.head++;

    // cleanup to prevent memory growth
    if (this.head > 1024 && this.head * 2 > this.queue.length) {
      this.queue = this.queue.slice(this.head);
      this.head = 0;
    }

    return this.queue.length - this.head;
  }
}

// Time
// per pint(t): amortized O(1)
// Across N pings, O(N) total work

// Space
// O(N)

```



### [872. Leaf-Similar Trees](https://leetcode.com/problems/leaf-similar-trees/) (30/12)

```typescript


function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const leaves1 = [] as number[];
  const leaves2 = [] as number[];

  const dfs = (node: TreeNode | null, leaves: number[]) => {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      leaves.push(node.val);
    }

    dfs(node.left, leaves);
    dfs(node.right, leaves);
  };

  dfs(root1, leaves1);
  dfs(root2, leaves2);

  if (leaves1.length !== leaves2.length) return false;

  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) return false;
  }

  return true;
}

// Time O(n+m)
// Space O(n+m)

```



### *[443. String Compression](https://leetcode.com/problems/string-compression/) (30/12)



```typescript

function compress(chars: string[]): number {
  if (!chars.length) return 0;

  let idx = 0;
  let ansStr = '';

  while (idx < chars.length) {
    let head = chars[idx];
    let count = 1;

    while (idx + count < chars.length && chars[idx + count] === head) {
      count++;
    }

    ansStr += count > 1 ? head + String(count) : head;
    idx += count;
  }

  for (let i = 0; i < chars.length; i++) {
    chars[i] = ansStr[i];
  }

  return ansStr.length;
}

// Time: O(n)
// Space: O(n)

function compress2(chars: string[]): number {
  let read = 0;
  let write = 0;

  while (read < chars.length) {
    const ch = chars[read];
    let start = read;

    while (read < chars.length && chars[read] === ch) read++;

    chars[write++] = ch;

    const count = read - start;

    if (count > 1) {
      const s = String(count);
      for (let i = 0; i < s.length; i++) {
        chars[write++] = s[i];
      }
    }
  }

  return write;
}

// Time: O(n)
// Space: O(1)

```



### [1929. Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/) (30/12)

```typescript

function getConcatenation(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array(2 * n);

  for (let i = 0; i < n; i++) {
    const v = nums[i];
    ans[i] = v;
    ans[i + n] = v;
  }

  return ans;
}

// beter approach, no resizing/growth overhead during the loop, doesn't mutate the input
// Time O(n)
// Space O(n)
```



### *[705. Design HashSet](https://leetcode.com/problems/design-hashset/) (30/12)



```typescript
class MyHashSet {
  private set: (number | null)[] = [];

  // O(n)
  add(key: number): void {
    if (this.set.indexOf(key) !== -1) return;
    this.set.push(key);
  }

  // O(n)
  remove(key: number): void {
    const idx = this.set.indexOf(key);

    if (idx === -1) return;

    const n = this.set.length;

    for (let i = idx; i < n - 1; i++) {
      this.set[i] = this.set[i + 1];
    }

    this.set.pop();
  }

   // O(n)
  contains(key: number): boolean {
    const idx = this.set.indexOf(key);
    if (idx === -1) return false;
    return true;
  }
}

// Space O(n)

class MyHashSet {
  // 1_000_001 here not 1_000_000 !!!
  private set = new Uint8Array(1_000_001);

  add(key: number): void {
    this.set[key] = 1;
  }

  remove(key: number): void {
    this.set[key] = 0;
  }

  contains(key: number): boolean {
    return this.set[key] === 1;
  }
}

// Space O(1e6)


class MyHashSet {
  private set: (number | null)[] = [];

  add(key: number): void {
    if (this.set.indexOf(key) !== -1) return;
    this.set.push(key);
  }

  remove(key: number): void {
    const idx = this.set.indexOf(key);

    if (idx === -1) return;

    const n = this.set.length;

    for (let i = idx; i < n - 1; i++) {
      this.set[i] = this.set[i + 1];
    }

    this.set.pop();
  }

  contains(key: number): boolean {
    const idx = this.set.indexOf(key);
    if (idx === -1) return false;
    return true;
  }
}

class MyHashSet {
  // 1_000_001 here not 1_000_000 !!!
  private set = new Uint8Array(1_000_001);

  add(key: number): void {
    this.set[key] = 1;
  }

  remove(key: number): void {
    this.set[key] = 0;
  }

  contains(key: number): boolean {
    return this.set[key] === 1;
  }
}

class Node {
  key: number = -1;
  next: Node | null = null;

  constructor(key = -1, next = null) {
    this.key = key;
    this.next = next;
  }
}

class MyHashSet {
  private map = new Array(10_000).fill(null).map(() => new Node());

  // average O(1), O(n) worse case
  add(key: number): void {
    const hashedKey = this.hash(key);
    let cur = this.map[hashedKey];

    while (cur.next) {
      if (cur.next.key === key) return;
      cur = cur.next;
    }
    cur.next = new Node(key);
  }

  // average O(1), O(n) worse case
  remove(key: number): void {
    const hashedKey = this.hash(key);
    let cur = this.map[hashedKey];

    while (cur.next) {
      if (cur.next.key === key) {
        cur.next = cur.next.next;
        return;
      }
      cur = cur.next;
    }
  }

  // average O(1), O(n) worse case
  contains(key: number): boolean {
    const hashedKey = this.hash(key);
    let cur = this.map[hashedKey];

    while (cur.next) {
      if (cur.next.key === key) {
        return true;
      }
      cur = cur.next;
    }

    return false;
  }

  hash(key: number): number {
    return key % this.map.length;
  }
}

// Space: O(m+n)
// m: number of bucket
// n: number of unique key


```



### ***[17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) (30/12)



```typescript

function letterCombinations(digits: string): string[] {
  const mapping = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];

  const ans: string[] = [];

  const backtrack = (idx: number, str: string) => {
    if (str.length === digits.length) {
      ans.push(str);
      return;
    }

    const digit = Number(digits[idx]);
    const comb = mapping[digit];

    for (const letter of comb) {
      backtrack(idx + 1, str + letter);
    }
  };

  backtrack(0, '');
  return ans;
}

// Time: O(n*4^n) or O(n*3^n)
// 4^n: combination, n: string concatenation
// Space: O(n)

```



### *[706. Design HashMap](https://leetcode.com/problems/design-hashmap/) (31/12)

```typescript

class Node {
  key: number = -1;
  value: number = -1;
  next: Node = null;

  constructor(key: number = -1, value: number = -1, next: Node = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class MyHashMap {
  private map: Node[];

  constructor() {
    this.map = new Array(10_000).fill(null).map(() => new Node());
  }

  // average O(1), O(n) worse case
  put(key: number, value: number): void {
    const hashedKey = this.hash(key);

    let cur = this.map[hashedKey];

    while (cur.next) {
      if (cur.next.key === key) {
        cur.next.value = value;
        return;
      }
      cur = cur.next;
    }

    cur.next = new Node(key, value);
  }

  // average O(1), O(n) worse case
  get(key: number): number {
    const hashedKey = this.hash(key);
    let cur = this.map[hashedKey];

    while (cur.next) {
      if (cur.next.key === key) {
        return cur.next.value;
      }
      cur = cur.next;
    }

    return -1;
  }

  // average O(1), O(n) worse case
  remove(key: number): void {
    const hashedKey = this.hash(key);
    let cur = this.map[hashedKey];

    while (cur.next) {
      if (cur.next.key === key) {
        cur.next = cur.next.next;
        return;
      }
      cur = cur.next;
    }
  }

  hash(key: number): number {
    return key % this.map.length;
  }
}

// Space: O(m+n)
// m: number of bucket
// n: number of unique key

```



### ***[334. Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/) (31/12)

```typescript

function increasingTriplet(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;

  for (let num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }

  return false;
}

// Time O(n)
// Space O(1)

```



### * [1679. Max Number of K-Sum Pairs](https://leetcode.com/problems/max-number-of-k-sum-pairs/) (31/12)

```typescript

function maxOperations(nums: number[], k: number): number {
  const sorted = nums.sort((a, b) => a - b);

  let l = 0;
  let r = sorted.length - 1;
  let ans = 0;

  while (l < r) {
    const sum = sorted[l] + sorted[r];

    if (sum == k) {
      ans++;
      l++;
      r--;
    } else if (sum > k) {
      r--;
    } else {
      l++;
    }
  }

  return ans;
}

// Time: O(nlog(n))
// Space: O(1)

function maxOperations(nums: number[], k: number): number {
  const map: Record<number, number> = {};
  let ans = 0;

  for (let num of nums) {
    const need = k - num;
    if (need in map && map[need] > 0) {
      ans++;
      map[need] -= 1;
      continue;
    }

    map[num] = (map[num] ?? 0) + 1;
  }

  return ans;
}

// Time: O(n))
// Space: O(n)

```



### **[46. Permutations](https://leetcode.com/problems/permutations/) (31/12)

```typescript

function permute(nums: number[]): number[][] {
  const ans: number[][] = [];

  const backtrack = (prem: Set<number>) => {
    if (prem.size === nums.length) {
      ans.push([...prem]);
      return;
    }

    for (const num of nums) {
      if (prem.has(num)) continue;
      prem.add(num);
      backtrack(prem);
      prem.delete(num);
    }
  };

  backtrack(new Set());
  return ans;
}

function permute(nums: number[]): number[][] {
  const n: number = nums.length;
  const path: boolean[] = new Array(n).fill(false);
  const ans: number[][] = [];

  const backtrack = (prem: number[]) => {
    if (prem.length === n) {
      ans.push([...prem]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (path[i]) continue;
      path[i] = true;
      prem.push(nums[i]);
      backtrack(prem);
      path[i] = false;
      prem.pop();
    }
  };

  backtrack([]);
  return ans;
}

// Time:
// generate n! premutations
// each time you hit a full permutation, you copy perm into ans: O(n)
// O(n*n!)

// Space:
// O(n*n!)

```



### ***[39. Combination Sum](https://leetcode.com/problems/combination-sum/) (31/12)

```typescript

function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];

  const backtrack = (idx: number, sum: number, comb: number[]) => {
    if (sum === target) {
      ans.push([...comb]);
      return;
    }

    if (idx >= candidates.length || sum > target) {
      return;
    }

    // choose to keep use the current element
    comb.push(candidates[idx]);
    backtrack(idx, sum + candidates[idx], comb);
    comb.pop();
    backtrack(idx + 1, sum, comb);
  };

  backtrack(0, 0, []);
  return ans;
}

// Time: O(2^n)
// Space O(t/d), t is the target, d is the samllest candidate, represent the depth of the recusion

```



### *[682. Baseball Game](https://leetcode.com/problems/baseball-game/) (1/1)

```typescript

function calPoints(operations: string[]): number {
  const stack: number[] = [];

  for (const char of operations) {
    const len = stack.length;
    if (Number.isInteger(Number(char))) {
      stack.push(Number(char));
    } else if (char === '+') {
      const first = stack[len - 1];
      const second = stack[len - 2];
      stack.push(first + second);
    } else if (char === 'D') {
      const last = stack[len - 1];
      stack.push(2 * last);
    } else if (char === 'C') {
      stack.pop();
    }
  }

  return stack.reduce((acc, cur) => acc + cur, 0);
}

// Time O(n)
// Space O(n)

```



### **[225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/) 1/1

```typescript

class MyStack {
  private q1: number[] = [];
  private q2: number[] = [];

  // O(n)
  push(x: number): void {
    this.q2.push(x);

    while (this.q1.length) {
      this.q2.push(this.q1.shift()!);
    }

    [this.q1, this.q2] = [this.q2, this.q1];
  }

  // O(1)
  pop(): number {
    return this.q1.shift()!;
  }

  // O(1)
  top(): number {
    return this.q1[0];
  }

  // O(1)
  empty(): boolean {
    return this.q1.length === 0;
  }
}

class MyStack {
  private q: number[] = [];

  // O(n)
  push(x: number): void {
    this.q.push(x);

    // rotate everything before x to the back
    for (let i = 0; i < this.q.length - 1; i++) {
      this.q.push(this.q.shift()!);
    }
  }

  // O(1)
  pop(): number {
    return this.q.shift()!;
  }

  // O(1)
  top(): number {
    return this.q[0];
  }

  // O(1)
  empty(): boolean {
    return this.q.length === 0;
  }
}

```



### **[232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) (1/1)

```typescript
class MyQueue {
  private input: number[] = [];
  private output: number[] = [];

  push(x: number): void {
    this.input.push(x);
  }

  pop(): number {
    this.peek();
    return this.output.pop();
  }

  // Peek()
  // Amortized O(1), worst-case O(n)
  // If output is empty, you move all elements from input to output (that’s O(n)), otherwise it’s O(1).
  // Across a sequence of operations, each element is moved at most once from input to output,
  // so average cost is O(1).

  peek(): number {
    if (!this.output.length) {
      while (this.input.length) {
        this.output.push(this.input.pop());
      }
    }
    return this.output[this.output.length - 1];
  }

  empty(): boolean {
    return !this.input.length && !this.output.length;
  }
}

```



### [1456. Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) (1/1)

```typescript

function maxVowels(s: string, k: number): number {
  const vowelLetters = new Set(['a', 'e', 'i', 'o', 'u']);

  let start = 0;
  let max = 0;
  let vowels = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (vowelLetters.has(char)) vowels++;

    if (end - start === k - 1) {
      max = Math.max(max, vowels);
      if (vowelLetters.has(s[start])) vowels--;
      start++;
    }
  }

  return max;
}

// Time: O(n)
// Space: O(1)

```



### *** [1493. Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/) (1/1)

```typescript
function longestSubarray(nums: number[]): number {
  let lastZero = -1;
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      left = lastZero + 1;
      lastZero = right;
    }

    maxLength = Math.max(maxLength, right - left);
  }

  return maxLength;
}

// Time O(n)
// Space O(1)

```



### ***[543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) (2/1)

```typescript

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  const height = (node: TreeNode | null): number => {
    if (!node) return 0;

    const left = height(node.left);
    const right = height(node.right);

    diameter = Math.max(diameter, left + right);

    return 1 + Math.max(left, right);
  };

  height(root);
  return diameter;
}

// Time: O(n)
// Space: O(h)

```



### *** [1657. Determine if Two Strings Are Close](https://leetcode.com/problems/determine-if-two-strings-are-close/) (2/1)

```typescript
function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const counter1 = new Array(26).fill(0);
  const counter2 = new Array(26).fill(0);

  const idx = (char: string) => {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  };

  const n = word1.length;

  for (let i = 0; i < n; i++) {
    const char1 = word1[i];
    const char2 = word2[i];

    counter1[idx(char1)]++;
    counter2[idx(char2)]++;
  }

  // make sure they have same key
  for (let i = 0; i < 26; i++) {
    if (counter1[i] > 0 && counter2[i] === 0) return false;
  }

  counter1.sort((a, b) => a - b);
  counter2.sort((a, b) => a - b);

  for (let i = 0; i < 26; i++) {
    if (counter1[i] !== counter2[i]) return false;
  }

  return true;
}

// Time O(n + 26 log 26) ≈ O(n)
// Space O(26) ≈ O(1)

function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();

  for (let i = 0; i < word1.length; i++) {
    const c1 = word1[i];
    const c2 = word2[i];
    map1.set(c1, (map1.get(c1) ?? 0) + 1);
    map2.set(c2, (map2.get(c2) ?? 0) + 1);
  }

  // Same set of characters
  if (map1.size !== map2.size) return false;
  for (const k of map1.keys()) {
    if (!map2.has(k)) return false;
  }

  // Same multiset of frequencies
  const freq1 = Array.from(map1.values()).sort((a, b) => a - b);
  const freq2 = Array.from(map2.values()).sort((a, b) => a - b);

  for (let i = 0; i < freq1.length; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }
  return true;
}

// Time: O(n+ klogk) -> O(n)
// Space O(k) -> O(1)


```



### **[2352. Equal Row and Column Pairs](https://leetcode.com/problems/equal-row-and-column-pairs/) (2/1)

```typescript

function equalPairs(grid: number[][]): number {

    const n = grid.length;
    
    const rowsCount = new Map<string, number>();

    for (let r = 0; r < n; r++) {
        const rows = grid[r].join('#');
        rowsCount.set(rows, (rowsCount.get(rows) ?? 0) + 1);
    }

    let ans = 0;

    for (let c = 0; c < grid[0].length; c++) {

        const cols = [];
        for (let r = 0; r < n; r++) cols.push(grid[r][c]);

        const key = cols.join('#');
        ans += rowsCount.get(key) ?? 0;
    }

    return ans;
    
};

// Time: O(n^2)
// Space: O(n^2) - n rows, each stored as a length-n key string
```



### [2390. Removing Stars From a String](https://leetcode.com/problems/removing-stars-from-a-string/) (2/1)

```typescript

function removeStars(s: string): string {
  const stack: string[] = [];

  for (let char of s) {
    if (char === '*') {
      stack.pop();
      continue;
    }
    stack.push(char);
  }

  return stack.join('');
}

// Time: O(n)
// Space: O(n)

```



### ***[22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)(2/1)

```typescript

function generateParenthesis(n: number): string[] {
  const ans: string[] = [];

  const backtrack = (open: number, close: number, str: string) => {
    if (str.length === 2 * n) {
      console.log('str', str);

      ans.push(str);
      return;
    }

    if (open < n) {
      backtrack(open + 1, close, str + '(');
    }

    if (close < open) {
      backtrack(open, close + 1, str + ')');
    }
  };

  backtrack(0, 0, '');
  return ans;
}

generateParenthesis(3);
// Time: O(2^(2n) * n)
// Space: O(n) recursion depth (not counting the output list)

```



### ***[79. Word Search](https://leetcode.com/problems/word-search/) (2/1)

```typescript
function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;

  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const inBounds = (r: number, c: number) => {
    return r >= 0 && c >= 0 && r < rows && c < cols;
  };

  const dfs = (r: number, c: number, i: number) => {
    if (board[r][c] !== word[i]) return false;
    if (i === word.length - 1) return true;

    const saved = board[r][c];
    board[r][c] = '#';

    for (let dir of dirs) {
      const nr = r + dir[0];
      const nc = c + dir[1];

      if (!inBounds(nr, nc)) continue;
      if (board[nr][nc] === '#') continue;
      if (dfs(nr, nc, i + 1)) {
        board[r][c] = saved;
        return true;
      }
    }
    board[r][c] = saved;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] !== word[0]) continue;
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
}

// Time: O(m*n * 3^(l-1))
// Space: O(L) recursion depth

function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;
  const L = word.length;
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const inBound = (r: number, c: number) => {
    return r >= 0 && c >= 0 && r < rows && c < cols;
  };

  // frequency check
  const need = new Map<string, number>();

  for (const char of word) {
    need.set(char, (need.get(char) ?? 0) + 1);
  }

  const have = new Map<string, number>();

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const char = board[r][c];
      have.set(char, (have.get(char) ?? 0) + 1);
    }
  }

  for (const [key, val] of need) {
    if ((have.get(key) ?? 0) < val) return false;
  }

  const firstCharCount = have.get(word[0])!;
  const lastCharCount = have.get(word[L - 1])!;

  if (lastCharCount < firstCharCount) {
    word = word.split('').reverse().join('');
  }

  const dfs = (r: number, c: number, i: number) => {
    if (board[r][c] !== word[i]) return false;
    if (i === L - 1) return true;

    const saved = board[r][c];
    board[r][c] = '#';

    const next = word[i + 1];

    for (const dir of dirs) {
      const nr = r + dir[0];
      const nc = c + dir[1];

      if (!inBound(nr, nc) || board[nr][nc] !== next) continue;
      if (dfs(nr, nc, i + 1)) {
        board[r][c] = saved;
        return true;
      }
    }

    board[r][c] = saved;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] !== word[0]) continue;
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
}

// Time: O(m*n * 3^(l-1))
// Space: O(L) + O(U) - O(L) recursion depth, plus maps for up to U unique characters.


```



### **[735. Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) (4/1)

```typescript

function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (let i = 0; i < asteroids.length; i++) {
    const cur = asteroids[i];
    const last = stack[stack.length - 1];

    if (!stack.length || last < 0 || cur > 0) {
      stack.push(cur);
    } else if (-cur === last) {
      stack.pop();
    } else if (-cur > last) {
      stack.pop();
      i--;
    }
  }

  return stack;
}

// Time complexity: O(n) (amortized)
// Space: O(n)

```



### ***[649. Dota2 Senate](https://leetcode.com/problems/dota2-senate/) (4/1)

```typescript

function predictPartyVictory(senate: string): string {
  const n = senate.length;

  const rQ: number[] = [];
  const dQ: number[] = [];

  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') {
      rQ.push(i);
      continue;
    }
    dQ.push(i);
  }

  let rHead = 0;
  let dHead = 0;

  while (rHead < rQ.length && dHead < dQ.length) {
    const r = rQ[rHead++];
    const d = dQ[dHead++];

    if (r < d) {
      rQ.push(r + n);
    } else {
      dQ.push(d + n);
    }
  }

  return rHead < rQ.length ? 'Radiant' : 'Dire';
}

// O(n) (each senator is popped/pushed a limited number of times)
// O(n)

```



### ** [108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) (4/1)

```typescript
function sortedArrayToBST(nums: number[]): TreeNode | null {
  const dfs = (l: number, r: number) => {
    if (l > r) {
      return null;
    }

    const mid = Math.floor((l + r) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = dfs(l, mid - 1);
    node.right = dfs(mid + 1, r);

    return node;
  };

  return dfs(0, nums.length - 1);
}

// Time: O(n)
// Space: O(logn)


```



### ***[148. Sort List](https://leetcode.com/problems/sort-list/) (4/1)

```typescript


function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let prev = null;
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null;

    const l1 = sortList(head);
    const l2 = sortList(slow);

    return merge(l1, l2);
};

function merge(l1: ListNode, l2: ListNode): ListNode {

    const dummy = new ListNode();
    let cur = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }

    if (l1) {
        cur.next = l1;
    }

    if (l2) {
        cur.next = l2;
    }

    return dummy.next;
}


// Time: O(nlog(n))
// Space: nlog(n) ecursion depth is log n

```



### ***[427. Construct Quad Tree](https://leetcode.com/problems/construct-quad-tree/) (4/1)

```typescript

function construct(grid: number[][]): _Node | null {
  const n = grid.length;

  const isUniform = (r0: number, c0: number, len: number) => {
    let num = grid[r0][c0];
    for (let r = r0; r < r0 + len; r++) {
      for (let c = c0; c < c0 + len; c++) {
        if (grid[r][c] !== num) return -1;
      }
    }
    return num;
  };

  const build = (r0: number, c0: number, len: number) => {
    const num = isUniform(r0, c0, len);

    if (num !== -1) {
      return new _Node(num === 1, true, null, null, null, null);
    }

    len = Math.floor(len / 2);

    const tl = build(r0, c0, len);
    const tr = build(r0, c0 + len, len);
    const bl = build(r0 + len, c0, len);
    const br = build(r0 + len, c0 + len, len);

    const node = new _Node(true, false, tl, tr, bl, br);
    return node;
  };

  return build(0, 0, n);
}

// Time: n^2 log(n)
// Space: log(n)

```



### ***[53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) (5/1)

```typescript

function maxSubArray(nums: number[]): number {
  const dp = new Array(nums.length).fill(0);

  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }

  return Math.max(...dp);
}

// Time: O(n)
// Space: O(n)

function maxSubArray3(nums: number[]): number {
  let cur = nums[0];
  let best = nums[0];

  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(cur + nums[i], nums[i]);
    best = Math.max(best, cur);
  }

  return best;
}
// Time: O(n)
// Space: O(1)

function maxSubArray2(nums: number[]): number {
  let ans = nums[0];
  let total = 0;

  for (const num of nums) {
    if (total < 0) {
      total = 0;
    }

    total += num;

    ans = Math.max(total, ans);
  }

  return ans;
}

// Time: O(n)
// Space: O(1)

```



### *[35. Search Insert Position](https://leetcode.com/problems/search-insert-position/) (5/1)

```typescript
function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// Time: O(log(n))
// Space: O(1)


```



### *[2095. Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/) (5/1)

```typescript
function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = slow.next;

  return head;
}
// Time: O(n)
// Space: O(1)


```



### **[328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/) (5/1)

```typescript

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
}

// Time: O(n)
// Space: O(1)

```



### *[2130. Maximum Twin Sum of a Linked List](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/) (5/1)

```typescript
function pairSum(head: ListNode | null): number {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half
  let prev: ListNode | null = null;
  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  let p1: ListNode | null = head;
  let p2: ListNode | null = prev;
  let max = -Infinity;

  while (p1 && p2) {
    max = Math.max(p1.val + p2.val, max);
    p1 = p1.next;
    p2 = p2.next;
  }

  return max;
}

// Time: O(n)
// Space: O(1)


```



### **[437. Path Sum III](https://leetcode.com/problems/path-sum-iii/) (6/1)

`node.val` might be 0

`hint`

use prefixSum

```typescript

function pathSum(root: TreeNode | null, targetSum: number): number {
  const sum = (node: TreeNode | null, target: number): number => {
    if (!node) return 0;

    target -= node.val;

    let res = target == 0 ? 1 : 0;

    res += sum(node.left, target);
    res += sum(node.right, target);

    return res;
  };

  const dfs = (node: TreeNode): number => {
    if (!node) return 0;

    let res = sum(node, targetSum);

    res += dfs(node.left);
    res += dfs(node.right);

    return res;
  };

  return dfs(root);
}

// Time: O(n^2)
// Space: O(h)

function pathSum2(root: TreeNode | null, targetSum: number): number {
  const prefixCount = new Map<number, number>();
  prefixCount.set(0, 1);

  const dfs = (node: TreeNode | null, currentSum: number) => {
    if (!node) return 0;

    currentSum += node.val;

    const need = currentSum - targetSum;

    let ans = prefixCount.get(need) ?? 0;

    prefixCount.set(currentSum, (prefixCount.get(currentSum) ?? 0) + 1);

    ans += dfs(node.left, currentSum);
    ans += dfs(node.right, currentSum);

    prefixCount.set(currentSum, (prefixCount.get(currentSum) ?? 0) - 1);

    return ans;
  };

  return dfs(root, 0);
}

// Time: O(n)
// Space: o(h)

```



### *** [1372. Longest ZigZag Path in a Binary Tree](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/) (6/1)

```typescript

function longestZigZag(root: TreeNode | null): number {
  let ans = 0;

  const dfs = (node: TreeNode | null, leftLen: number, rightLen: number) => {
    if (!node) return;

    ans = Math.max(ans, leftLen, rightLen);

    dfs(node.left, rightLen + 1, 0);
    dfs(node.right, 0, leftLen + 1);
  };

  dfs(root, 0, 0);
  return ans;
}

// Time(O(n))
// Space (O(h))

```



### *** [942. DI String Match](https://leetcode.com/problems/di-string-match/) (6/1)

```typescript

function diStringMatch(s: string): number[] {
  let low = 0;
  let high = s.length;
  let res = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I') {
      res.push(low);
      low++;
    } else {
      res.push(high);
      high--;
    }
  }
  res.push(high);
  return res;
}

// Time: O(n)
// Space: O(1)

```

### **[74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) (7/1)

```typescript

function searchMatrix(matrix: number[][], target: number): boolean {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let r = 0;
  let c = cols - 1;

  while (r < rows && c >= 0) {
    const val = matrix[r][c];

    if (val === target) {
      return true;
    }

    if (val > target) {
      c--;
    } else {
      r++;
    }
  }

  return false;
}

// Time: O(M+N)
// Space: O(1)

function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let lo = 0;
  let hi = rows * cols - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    const r = Math.floor(mid / cols);
    const c = mid % cols;

    const val = matrix[r][c];

    if (val === target) return true;

    if (val < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return false;
}

// Time O(log(m+n))
// Space O(1)

```



### *[1005. Maximize Sum Of Array After K Negations ](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/)(7/1)

```typescript

function largestSumAfterKNegations(nums: number[], k: number): number {
  let sorted = nums.sort((a, b) => a - b);

  let i = 0;

  while (i < k) {
    if (sorted[i] === 0) break;

    if (sorted[i] < 0) {
      sorted[i] = -sorted[i];
      i++;
    } else {
      k = (k - i) % 2;
      if (k === 1) {
        sorted = nums.sort((a, b) => a - b);
        sorted[0] = -sorted[0];
      }
      break;
    }
  }

  return sorted.reduce((acc, cur) => acc + cur, 0);
}

function largestSumAfterKNegations(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length && k > 0 && nums[i] < 0; i++, k--) {
    nums[i] = -nums[i];
  }

  let minVal = Infinity;
  let res = 0;

  for (const num of nums) {
    res += num;
    if (num < minVal) minVal = num;
  }

  if (k % 2 !== 0) res -= 2 * minVal;
  return res;
}

// Time: O(nlog(n))
// Space: O(1)

```



### [1221. Split a String in Balanced Strings](https://leetcode.com/problems/split-a-string-in-balanced-strings/) (7/1)

```typescript

function balancedStringSplit(s: string): number {

    let R: number = 0;
    let L: number = 0;
    let res = 0;

    for (let char of s) {
        if (char === 'R') {
            R ++;
        } else if (char === 'L') {
            L ++;
        }

        if (R === L) {
            res ++;
        }
    }

    return res;
};

// Time: O(n)
// Space: O(1)
```



### *[1710. Maximum Units on a Truck](https://leetcode.com/problems/maximum-units-on-a-truck/) (7/1)

```typescript

function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let res = 0;

  for (let [box, units] of boxTypes) {
    if (truckSize >= box) {
      truckSize -= box;
      res += box * units;
    } else {
      res += truckSize * units;
      break;
    }
  }

  return res;
}

// Time: O(nlog(n))
// Space: O(1)

```



### ***[1217. Minimum Cost to Move Chips to The Same Position](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/) (8/1)

```typescript

function minCostToMoveChips(position: number[]): number {
  // count the number of elements in even positions
  // count the number of elemnts in odd positions
  let even = 0;
  let odd = 0;

  for (let num of position) {
    if (num % 2 === 0) {
      even++;
      continue;
    }
    odd++;
  }

  return Math.min(even, odd);
}

// Time: O(n)
// Space: O(1)

```



### ***[1403. Minimum Subsequence in Non-Increasing Order](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/) (8/1)

```typescript
function minSubsequence(nums: number[]): number[] {
  const total = nums.reduce((acc, x) => acc + x, 0);
  const arr = [...nums].sort((a, b) => b - a);

  let taken = 0;
  let res = [];

  for (const x of arr) {
    res.push(x);
    taken += x;
    if (taken > total / 2) break;
  }

  return res;
}

// Time: O(nlogn)
// Space: O(n)

```



### **[1013. Partition Array Into Three Parts With Equal Sum](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/) (11/1)

```typescript

function canThreePartsEqualSum(arr: number[]): boolean {
  const total = arr.reduce((acc, cur) => cur + acc);

  if (total % 3 !== 0) return false;

  const target = total / 3;

  let sum = 0;
  let parts = 0;

  // keep at least one elements for part 3
  for (let i = 0; i < arr.length - 1; i++) {
    const num = arr[i];
    sum += num;
    if (sum === target) {
      parts += 1;
      sum = 0;
      if (parts === 2) return true;
    }
  }

  return false;
}

// Time: O(n)
// Space: O(1)

```



### ** [162. Find Peak Element](https://leetcode.com/problems/find-peak-element/) (11/1)

```typescript

function findPeakElement(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] < nums[mid + 1]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}

// Time: O(log(n))
// Space: O(1)

```



### **[34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) (11/1)

```typescript

function searchRange(nums: number[], target: number): number[] {
  const start = bisectLeft(nums, target);

  if (start === nums.length || nums[start] !== target) return [-1, -1];

  const end = bisectLeft(nums, target + 1) - 1;
  return [start, end];
}

function bisectLeft(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length;

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}

function searchRange2(nums: number[], target: number): number[] {
  const start = lowerBound(nums, target);

  if (start === nums.length || nums[start] !== target) return [-1, -1];

  const end = higherBound(nums, target) - 1;
  return [start, end];
}

function lowerBound(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length;

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}

function higherBound(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length;

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] <= target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}

// Time: O(log(n))
// Space: O(1)

```



### ** [67. Add Binary](https://leetcode.com/problems/add-binary/) (12/1)

```typescript
function addBinary(a: string, b: string): string {
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  let res = '';

  while (i >= 0 || j >= 0 || carry > 0) {
    let total = carry;

    if (i >= 0) total += parseInt(a[i]);
    if (j >= 0) total += parseInt(b[j]);

    res = (total % 2) + res;
    carry = Math.floor(total / 2);

    i--;
    j--;
  }

  return res;
}

// Time: O(n)
// Space: O(1)


```



### *[136. Single Number](https://leetcode.com/problems/single-number/)(12/1)

```typescript
function singleNumber(nums: number[]): number {
  let res = 0;

  for (const num of nums) {
    res ^= num;
  }

  return res;
}

// Time: O(n)
// Space: O(1)

```



### **[9. Palindrome Number](https://leetcode.com/problems/palindrome-number/) (12/1)

```typescript

function isPalindrome(x: number): boolean {

    if (x < 0) return false;

    let xCopy = x;
    let reverse = 0;

    while (x > 0) {
        reverse = 10 * reverse + (x % 10);
        x = Math.floor(x / 10);
    }

    return xCopy === reverse;
};

// Time: O(n)
// Space: O(1)

```



### **[66. Plus One](https://leetcode.com/problems/plus-one/) (13/11)

```typescript

function plusOne(digits: number[]): number[] {
  let carry = 0;
  const res = [];

  for (let i = digits.length - 1; i >= 0; i--) {
    let total = digits[i] + carry;
    if (i === digits.length - 1) {
      total += 1;
    }

    if (total >= 10) {
      carry = 1;
      total = total - 10;
    } else {
      carry = 0;
    }
    res.push(total);
  }

  if (carry === 1) {
    res.push(1);
  }

  return res.reverse();
}

function plusOne2(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);

  return digits;
}

// Time: O(n)
// Space: O(1)

```



### **[69. Sqrt(x)](https://leetcode.com/problems/sqrtx/) (13/1)

```typescript

function mySqrt(x: number): number {
  let lo = 0;
  let hi = x;
  let res = 0;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    const product = mid * mid;

    if (product === x) return mid;

    if (product > x) {
      hi = mid - 1;
    } else {
      res = mid;
      lo = mid + 1;
    }
  }

  return res;
}

// Time: O(log(n))
// Space: O(1)

```



### **[841. Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/) (14/1)

```typescript
function canVisitAllRooms(rooms: number[][]): boolean {
  const stack = [0];
  const visited = new Set();

  while (stack.length) {
    const room = stack.pop();

    if (visited.has(room)) continue;

    visited.add(room);

    if (visited.size === rooms.length) {
      return true;
    }

    stack.push(...rooms[room as number]);
  }

  return visited.size === rooms.length;
}

function canVisitAllRooms2(rooms: number[][]): boolean {
  const visited = new Array(rooms.length).fill(false);

  const dfs = (room: number) => {
    visited[room] = true;
    for (const r of rooms[room]) {
      if (!visited[r]) dfs(r);
    }
  };

  dfs(0);

  for (let r of visited) {
    if (!r) return false;
  }

  return true;
}

// Time: O(N+E)
// N: number of rooms, E: number of keys across all rooms sum(rooms[i].length)

// Space: O(N)
```



### **[70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) (14/1)

```typescript
function climbStairs(n: number): number {
  const dp = new Array(45).fill(null);
  const fib = (n: number): number => {
    if (n <= 1) return 1;
    if (dp[n]) return dp[n];
    dp[n] = fib(n - 1) + fib(n - 2);
    return dp[n];
  };
  return fib(n);
}

// Time: O(n)
// Space: O(n)

function climbStairs2(n: number): number {
  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
// Time: O(n)
// Space: O(n)

function climbStairs3(n: number): number {
  if (n <= 1) return 1;

  let a = 1;
  let b = 1;
  let c = 0;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

// Time: O(n)
// Space: O(1)


```



### ***[139. Word Break](https://leetcode.com/problems/word-break/) (14/1)

```typescript
function wordBreak(s: string, wordDict: string[]): boolean {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (const word of wordDict) {
      const start = i - word.length;
      if (
        start >= 0 &&
        dp[start] &&
        s.slice(start, start + word.length) === word
      ) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

// Time: O(m * n)
// Space: O(n)


```



### ***[300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)(14/1)

```typescript

function lengthOfLIS(nums: number[]): number {
  const dp = new Array(nums.length).fill(0);
  dp[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
  }
  return Math.max(...dp);
}

// Time: O(n^2)
// Space: O(n)

function lengthOfLIS2(nums: number[]): number {
  const res = [];

  const binarySearch = (arr: number[], target: number) => {
    let lo = 0;
    let hi = arr.length - 1;
    while (lo <= hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] > target) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
    return lo;
  };

  for (const num of nums) {
    if (!res.length || res[res.length - 1] < num) {
      res.push(num);
    } else {
      const idx = binarySearch(res, num);
      res[idx] = num;
    }
  }
  return res.length;
}

// Time: O(nlog(n))
// Space: O(n)

```



### **[2239. Find Closest Number to Zero](https://leetcode.com/problems/find-closest-number-to-zero/) (14/1)

```typescript
function findClosestNumber(nums: number[]): number {
  let best = nums[0];

  for (const x of nums) {
    const ax = Math.abs(x);
    const ab = Math.abs(best);

    if (ax < ab || (ax <= ab && x > best)) {
      best = x;
    }
  }

  return best;
}

// Time: O(n)
// Space: O(1)

```



### [367. Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/) (15/1)

```typescript

function isPerfectSquare(num: number): boolean {
  let lo = 1;
  let hi = num;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const prod = mid * mid;
    if (prod === num) return true;

    if (prod < num) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return false;
}

// Time: O(log(n))
// Space: O(1)

```



### **[322. Coin Change](https://leetcode.com/problems/coin-change/) (15/1)

```typescript
function coinChange(coins: number[], amount: number): number {
  const INF = amount + 1;
  const dp = new Array(amount + 1).fill(INF);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
  }
  return dp[amount] == INF ? -1 : dp[amount];
}

// Simpler transitions. Same complexity, often faster in practice.
function coinChange2(coins: number[], amount: number): number {
  const INF = amount + 1;

  const dp = new Array(amount + 1).fill(INF);
  dp[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
    }
  }

  return dp[amount] === INF ? -1 : dp[amount];
}
// Time: O(n*amount)
// Space: O(amount)

```



### **[322. Coin Change](https://leetcode.com/problems/coin-change/) (15/1)

```typescript
function coinChange(coins: number[], amount: number): number {
  const INF = amount + 1;
  const dp = new Array(amount + 1).fill(INF);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
  }
  return dp[amount] == INF ? -1 : dp[amount];
}

// Simpler transitions. Same complexity, often faster in practice.
function coinChange2(coins: number[], amount: number): number {
  const INF = amount + 1;

  const dp = new Array(amount + 1).fill(INF);
  dp[0] = 0;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
    }
  }

  return dp[amount] === INF ? -1 : dp[amount];
}

function coinChangeBfs(coins: number[], amount: number): number {
  if (amount === 0) return 0;

  coins = coins.filter((coin) => coin <= amount);
  if (coins.length === 0) return -1;

  const visited = new Array(amount + 1).fill(false);
  visited[0] = true;
  let step = 0;
  let queue = [0];

  while (queue.length) {
    step++;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const cur = queue.shift()!;
      for (const coin of coins) {
        const next = cur + coin;
        if (next === amount) return step;
        if (next > amount) continue;

        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }
  }
  return -1;
}
// Time: O(n*amount)
// Space: O(amount)


```



### **[198. House Robber](https://leetcode.com/problems/house-robber/) (15/1)

```typescript
function rob(nums: number[]): number {
  const n = nums.length;

  if (n === 1) return nums[0];

  const dp = new Array(n);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[n - 1];
}

// Time:O(n)
// Space: O(n)

function rob2(nums: number[]): number {
  const n = nums.length;

  let prev = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    const temp = Math.max(prev + nums[i], max);
    prev = max;
    max = temp;
  }

  return max;
}

// Time:O(n)
// Space: O(1)


```



### **[1046. Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) (16/1)

```typescript

function lastStoneWeight(stones: number[]): number {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);

    const a = stones.pop()!;
    const b = stones.pop()!;

    const diff = a - b;
    if (diff !== 0) stones.push(diff);
  }

  return stones.pop() ?? 0;
}

// Time: O(n^2log(n))
// Space: O(1)

```



### **[1971. Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/) (16/1)

```typescript

function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  if (source === destination) return true;

  const graph = [];

  // build adjacency list
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (const [src, dest] of edges) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const visited = new Array(n).fill(false);
  visited[source] = true;
  const stack = [source];

  while (stack.length) {
    const node = stack.pop();
    if (node === destination) return true;

    for (let dest of graph[node]) {
      if (!visited[dest]) {
        visited[dest] = true;
        stack.push(dest);
      }
    }
  }
  return false;
}

// Time: O(m+n)
// Space: O(m+n)

function validPath2(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  if (source === destination) return true;

  const graph = [];

  // build adjacency list
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (const [src, dest] of edges) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const visited: boolean[] = new Array(n).fill(false);
  visited[source] = true;

  const dfs = (node: number) => {
    if (node === destination) return true;
    for (const nei of graph[node]) {
      if (!visited[nei]) {
        visited[nei] = true;
        if (dfs(nei)) return true;
      }
    }

    return false;
  };

  return dfs(source);
}

```

