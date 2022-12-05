/**
 * In this problem, you need to implement a factory ToyFactory that can create a toy duck and a toy car object
 * using either the ToyDuck or ToyCar function constructor.
 *
 * A ToyDuck object should have the following properties:
 * color
 * price
 *
 * A ToyCar object should have the following properties:
 * color
 * price
 * name
 *
 *
 * Sample input:
 *
 * var toyFactory = new ToyFactory();
 * var car = toyFactory.createToy({
 *           toyType : "car",
 *           color: "blue",
 *           price : 12,
 *           name : "honda"
 * })
 *
 * Sample output:
 * ToyCar { color: 'blue', price: 12, name: 'honda' }
 *
 */

// use JavaScript class
class ToyFactory {
  constructor() {
    this.createToy = function ({ toyType, color, price, name }) {
      let toy;
      if (toyType === 'car') {
        toy = new ToyCar(color, price, name);
      } else {
        toy = new ToyDuck(color, price);
      }
      return toy;
    };
  }
}

//define the ToyDuck class
class ToyDuck {
  constructor(color, price) {
    this.color = color;
    this.price = price;
    console.log(`ToyDuck { color: '${color}', price: '${price}'}`);
  }
}

//define the ToyCar class
class ToyCar {
  constructor(color, price, name) {
    this.color = color;
    this.price = price;
    this.name = name;
    console.log(
      `ToyCar { color: '${color}', price: '${price}', name: '${name}' }`
    );
  }
}

// use JavaScript function

// function ToyFactory() {
//   this.toy = ToyDuck;
//   this.createToy = function (toyChosen) {
//     if (toyChosen.toyType == 'duck') {
//       this.toy = ToyDuck;
//     } else if (toyChosen.toyType == 'car') {
//       this.toy = ToyCar;
//     }
//     return new this.toy(toyChosen);
//   };
// }

// function ToyDuck(toyObj) {
//   this.color = toyObj.color;
//   this.price = toyObj.price;
// }

// function ToyCar(toyObj) {
//   this.color = toyObj.color;
//   this.price = toyObj.price;
//   this.name = toyObj.name;
// }

var toyFactory = new ToyFactory();
var car = toyFactory.createToy({
  toyType: 'car',
  color: 'blue',
  price: 12,
  name: 'honda',
});
