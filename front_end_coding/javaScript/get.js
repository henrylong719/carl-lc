const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};
const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

function get(object, path, defaultValue) {
  const elements = path.split('.');
  let result = object;
  for (let ele of elements) {
    if (result[ele] === undefined) {
      return defaultValue || undefined;
    }
    result = result[ele];
  }
  return result;
}

console.log(get(john, 'profile.name.firstName')); // 'John'
console.log(get(john, 'profile.gender')); // 'Male'
console.log(get(jane, 'profile.name.firstName')); // undefined
console.log(get({ a: [{ b: { c: 3 } }] }, 'a.0.b.c'));
