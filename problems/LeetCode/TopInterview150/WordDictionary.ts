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
