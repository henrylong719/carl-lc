function display() {
  const exampleObject = { collection: [{ name: 'Kelly' }, { name: 'Anna' }] };

  const {
    collection: [, { name: secondObject }],
  } = exampleObject;

  console.log(secondObject);
}

display();

export {};
