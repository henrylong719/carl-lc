function designerPdfViewer(h: number[], word: string): number {
  const heights = [];

  for (let char of word) {
    const code = char.charCodeAt(0);
    const pos = code - 97;
    heights.push(h[pos]);
  }

  const maxHeight = Math.max(...heights);

  return maxHeight * word.length;
}
