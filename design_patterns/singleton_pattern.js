/**
 *
 * In this challenge, you have to implement a configuration that uses the singleton pattern.
 * You are given a class ConfigureVals. Define it as follows:
 * It should have a constructor that defines the properties xpoint, ypoint, and shape.
 * The constructor should initialize xpoint, ypoint, and shape to 0, 0, and null if the values for these properties are not passed to the constructor.
 * Only a single instance of the class can be made by defining the function getConfiguration.
 *
 *
 * Sample input:
 * getConfiguration({ xpoint: 8, ypoint : 9, shape : rectangle }); //first call
 * getConfiguration({ xpoint : 2, ypoint : 4, shape : circle }); //second call
 *
 * Sample output:
 * ConfigureVals { xpoint: 8, ypoint: 9, shape: 'rectangle' }
 * ConfigureVals { xpoint: 8, ypoint: 9, shape: 'rectangle' }
 *
 */

let instance = null;

class ConfigureVals {
  constructor(initvalues) {
    this.xpoint = initvalues.xpoint || 0;
    this.ypoint = initvalues.ypoint || 0;
    this.shape = initvalues.shape || null;
  }

  static getConfiguration(initvalues) {
    if (!instance) {
      instance = new ConfigureVals(initvalues);
    }
    return instance;
  }
}

var configureObj1 = ConfigureVals.getConfiguration({
  xpoint: 8,
  ypoint: 9,
  shape: 'rectangle',
});
console.log(configureObj1);
var configureObj2 = ConfigureVals.getConfiguration({
  xpoint: 2,
  ypoint: 4,
  shape: 'circle',
});
console.log(configureObj2);
