// // function Person(name, age) {
// //   this.name = name;
// //   this.age = age;
// // }

// // const jack = new Person('Jack', 25);
// // const henry = new Person('Henry', 28);

// // jack.gender = 'male';

// // Person.prototype.gender = null;

// // const hugh = new Person('Hugh', 20);

// // console.log(jack);
// // console.log(henry);

// // // although hugh is created with name and age
// // // initialized but the gender property would also
// // // be attached to it and assigned as null because
// // // of the above mentioned line of code (prototype)
// // console.log(hugh.gender);
// // console.log(henry.gender);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }
// }

// let jae = new Student('Jae', 31, 'two');

// console.log(Student.prototype);
// console.log(Student.__proto__);

// // console.log(jae);

// function logMsg(func) {
//   setTimeout(() => {
//     console.log('hey');
//     func();
//   }, 2000);
// }

// function zip() {
//   console.log('yooooo');
// }

// logMsg(zip);

let a = '';

console.log(...a);
