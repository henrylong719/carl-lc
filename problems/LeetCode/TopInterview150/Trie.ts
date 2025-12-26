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
