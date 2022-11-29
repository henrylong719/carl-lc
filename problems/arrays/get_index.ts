function getIndex(arr: number[], number: number) {
  const sortedArr = [...arr, number].sort((a, b) => a - b);
  return sortedArr.findIndex((x) => x === number);
}

const getIndexTwo = (arr: number[], number: number) =>
  arr.reduce((counter, curr) => (number > curr ? ++counter : counter), 0);

console.log(getIndexTwo([5, 4, 1, 3], 2));

export {};
