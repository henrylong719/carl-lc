function combine(n: number, k: number): number[][] {
  const candidates: number[] = [];
  for (let i = 1; i <= n; i++) candidates.push(i);

  const ans: number[][] = [];

  const backtrack = (idx: number, comb: number[]) => {
    if (comb.length === k) {
      ans.push(comb);
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      backtrack(i + 1, [...comb, candidates[i]]);
    }
  };

  backtrack(0, []);

  return ans;
}

// Time
// O ((n in k) * k)

// each time you hit a full combination you copy comb into the answer with ans.push([...comb]), which costs O(k)

// ans stores (n in k) arrays, each of length k
// Space
// O ((n in k) * k)

function combine(n: number, k: number): number[][] {
  const comb: number[] = [];
  const ans: number[][] = [];

  const backtrack = (start: number) => {
    if (comb.length === k) {
      ans.push([...comb]);
      return;
    }

    for (let i = start; i <= n; i++) {
      comb.push(i);
      backtrack(i + 1);
      comb.pop();
    }
  };

  backtrack(1);
  return ans;
}

console.log(combine(4, 2));

// Time
// O ((n) * k)
//     k

// Space
// ans stores (n in k) arrays, each of length k
// O ((n) * k)
//     k
