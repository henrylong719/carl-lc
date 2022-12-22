function uniqueArray(array) {
  const map = new Map();

  array.forEach((element) => {
    map.set(element, 1);
  });

  return [...map.keys()];
}

function uniqueArrayUsingSet(array) {
  let set = new Set();

  array.forEach((element) => {
    if (!set.has(element)) {
      set.add(element);
    }
  });

  return [...set];
}

function uniqueArrayUsingSetTwo(array) {
  return Array.from(new Set(array));
}

let obj = {};

console.log(obj);
