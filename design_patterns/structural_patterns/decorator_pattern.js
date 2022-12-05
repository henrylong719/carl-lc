class SuperHero {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
}

function SuperHeroWithSword(superHero) {
  superHero.sword = true;

  superHero.hasSword = function () {
    console.log(
      `${superHero.name}'s power is ${superHero.power}, and he also has a sword now.`
    );
    return `${superHero.name}'s power is ${superHero.power}, and he also has a sword now.`;
  };
  return superHero;
}

function SuperHeroWithSuperSpeed(superHero) {
  superHero.superSpeed = true;

  superHero.hasSuperSpeed = function () {
    console.log(
      `${superHero.name}'s power is ${superHero.power}, and he also has the super speed now.`
    );
    return `${superHero.name}'s power is ${superHero.power}, and he also has the super speed now.`;
  };

  return superHero;
}

function SuperHeroWithSpeedandSword(superHero) {
  superHero.sword = true;
  superHero.superSpeed = true;

  superHero.hasSpeedAndSword = function () {
    console.log(
      `${superHero.name}'s power is ${superHero.power}, and he also has both super speed and a sword now.`
    );
    return `${superHero.name}'s power is ${superHero.power}, and he also has both super speed and a sword now.`;
  };

  return superHero;
}

var superhero1 = new SuperHero('Fire Man', 'Fire');
SuperHeroWithSword(superhero1);
console.log(superhero1.hasSword());
SuperHeroWithSuperSpeed(superhero1);
console.log(superhero1.hasSuperSpeed());
var superhero2 = new SuperHero('Ice Man', 'Ice');
SuperHeroWithSpeedandSword(superhero2);
console.log(superhero2.hasSpeedAndSword());
