// function flatten(value) {
//   const result = [];

//   for (let i of value) {
//     if (Array.isArray(i)) {
//       result.push(...flatten(i));
//       continue;
//     }
//     result.push(i);
//   }

//   return result;
// }

// function flattenUsingReduce(value) {
//   return value.reduce(
//     (acc, cur) =>
//       acc.concat(Array.isArray(cur) ? flattenUsingReduce(cur) : cur),
//     []
//   );
// }

function flattenUsingFlat(value) {
  return value.flat(Infinity);
}

// Single-level arrays are unaffected
// flatten([1, 2, 3]); // [1, 2, 3]

// // Inner arrays are flattened into a single level
console.log(flattenUsingFlat([1, [2, 3]])); // [1, 2, 3]
// flatten([
//   [1, 2],
//   [3, 4],
// ]); // [1, 2, 3, 4]

// // Flattens recursively
console.log(flattenUsingFlat([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
