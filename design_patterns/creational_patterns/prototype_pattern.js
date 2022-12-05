class Ninja {
  constructor(name) {
    this.name = name;
    this.points = 100;
  }

  kick(Ninja) {
    if (this.points <= 0 || Ninja.points <= 0) {
      return `Can't kick ${Ninja.name}`;
    }

    Ninja.points = Ninja.points - 50;
    return `${Ninja.name}'s points are ${Ninja.points}`;
  }

  punch(Ninja) {
    if (this.points <= 0 || Ninja.points <= 0) {
      return `Can't punch ${Ninja.name}`;
    }

    Ninja.points = Ninja.points - 20;
    return `${Ninja.name}'s points are ${Ninja.points}`;
  }
}

const Ninja = function (name) {
  this.name = name;
  this.points = 100;
};

Ninja.prototype.kick = function (otherNinja) {
  if (this.points <= 0 || otherNinja.points <= 0) {
    return `Can't kick ${otherNinja.name}`;
  }

  otherNinja.points -= 50;
  return `${otherNinja.name}'s points are ${otherNinja.points}`;
};

Ninja.prototype.punch = function (otherNinja) {
  if (this.points <= 0 || otherNinja.points <= 0) {
    return `Can't punch ${otherNinja.name}`;
  }

  otherNinja.points -= 20;
  return `${otherNinja.name}'s points are ${otherNinja.points}`;
};

var ninja1 = new Ninja('Ninja1');
var ninja2 = new Ninja('Ninja2');

console.log(ninja1.kick(ninja2));

console.log(ninja2.punch(ninja1));
console.log(ninja1.kick(ninja2));
console.log(ninja1.punch(ninja2));
console.log(ninja2.kick(ninja1));
