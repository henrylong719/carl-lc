var obj = {
  name: 'Tom',
};

var info = function (a, b, c) {
  return this.name + ' likes to eat ' + a + ' ' + b + ' and ' + c;
};

//creates a bound function that has same body and parameters
var bound = info.bind(obj, 'Pasta');
console.log(bound('Donuts', 'Chips', 'Cake')); //calling the bound function later
