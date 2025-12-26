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

