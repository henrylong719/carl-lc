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
