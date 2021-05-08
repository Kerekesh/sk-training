// const animal = {
//   name: "Animal",
//   age: 5,
//   hasTail: true
// }

// class Animal {

// static type = "ANIMAL";

//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }

//   voice() {
//     console.log("Im Animal")
//   }
// }

// // const animal = new Animal({
// //   name: "Animal",
// //   age: 5,
// //   hasTail: true
// // });

// class Cat extends Animal {
//   static type = "CAT";

//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }

//   voice() {
//     super.voice();
//     console.log("I am Cat");
//   }

//   get ageInfo() {
//     return this.age * 7;
//   }
//   set ageInfo(newAge) {
//     this.age = newAge
//   }
// }

// const cat = new Cat({
//   name: 'Cat',
//   age: 7,
//   hasTail: true,
//   color: "black"
// });


// const person = Object.create({
//   calculateAge() {
//     console.log("Age", new Date().getFullYear() - this.birthYear)
//   }
// }, {
//   name: {
//     value: "Stepan",
//     enumerable: true
//   },
//   birthYear: {
//     value: 1997,
//     enumerable: false // по умолчанию 
//   },
//   age: {
//     get(){
//       return new Date().getFullYear() - this.birthYear
//     },
//     set(value){
//       console.log("Set age", value)
//     }
//   }
// });

// person.name = "Michael"; 
// console.log(person);

// class User {
//   constructor(name) {
//     this.name = name; // вызывают сеттер
//   }
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     if (value.length < 4) {
//       alert("имя короткое");
//       return;
//     }
//     this._name = value;
//   }
// }
// let user = new User("John");
// alert(user.name); // John
// user = new User(""); // имя короткое


// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi(){
//     console.log("Hi from " + this.name);
//   }
// }
// // let user = new User("Alex");

// // user.sayHi();

// class Admin extends User {
//   sayHi(){
//     super.sayHi();
//     console.log("By from " + this.name);
//   }
// };
// let admin = new Admin("Serhii");
// console.log(admin.sayHi());




// function Animal(name) {
//   this.name = name;
//   this.speed = 0;
// }

// function Rabbit(name) {
//   this.eats = true;
//   this.name = name;
//   this.speed = 0;
// }

// Rabbit.prototype = Object.create(Animal.prototype); //Возьми прототип Анимал и на основе него создай объект и присвой Реббиту
// Rabbit.prototype.constructor = Rabbit;


// let obj = new Rabbit("T-Rex");

// for (let item in obj) {
//   console.log(item + " = " + obj.hasOwnProperty(item) )
// }
// console.log(typeof obj.name);

// String.prototype.repeat = function(times) {
//   return new Array(times+1).join(this);
// };

// console.log("Stepan".repeat(5));

