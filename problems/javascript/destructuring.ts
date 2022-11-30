function display() {
  const exampleObject = { collection: [{ name: 'Kelly' }, { name: 'Anna' }] };

  const {
    collection: [, { name: secondObject }],
  } = exampleObject;

  console.log(secondObject);
}

display();

function removeFirstTwo(list: number[]) {
  let updatedList = list.slice(2);
  return updatedList;
}

function removeFirstTwoUsingDestructuring(list: number[]) {
  const [, , ...arr] = list;
  return arr;
}

console.log(removeFirstTwoUsingDestructuring([1, 2, 3, 4, 5, 6]));

function returnNthCat(n: number) {
  const state = {
    cats: [
      { catId: 1, name: 'tom' },
      { catId: 2, name: 'tiggy' },
      { catId: 3, name: 'leo' },
      { catId: 4, name: 'nixie' },
    ],
    curpage: 3,
  };

  const { cats: arr } = state;
  return arr[n].name;
}

function returnNthCatUsingDestructuring(n: number) {
  const state = {
    cats: [
      { catId: 1, name: 'tom' },
      { catId: 2, name: 'tiggy' },
      { catId: 3, name: 'leo' },
      { catId: 4, name: 'nixie' },
    ],
    curpage: 3,
  };

  const {
    cats: {
      [n]: { catId: thisCatId, name: thisCatName },
    },
  } = state;

  return thisCatName;
}
console.log(returnNthCatUsingDestructuring(2));
export {};

// const arr = [1, 2, 3, 4, 5, 5];

// console.log({ ...arr });
