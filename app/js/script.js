let animal = {
    eats: true,
    sleep: true
};
let rabbit = {
    jumps: true,
    eats: false
};
rabbit.__proto__ = animal;
console.log(rabbit.eats); // false, взято з rabbit

// let skill = { // Написать метод который вернет строку вида "html - 5"
//     name: 'html',
//     level: 5,
//     language: function() {
//         return this.name + " - " + this.level;
//     }
// }

// // Создайте объект calculator с методами:
// // - sum () возвращает сумму двух значений
// // - mul () возвращает произведение этих двух значений
// // - инициализировать объект через функцию-конструктор
// function Calculator(){ //
//     this.sum = function(a, b){
//         return a + b;
//     };
//     this.mul = function(a, b){
//         return a * b;
//     };
// }
// let calculator1 = new Calculator();
// let calculator2 = new Calculator();
// console.log(calculator1.sum(155, 989));
// console.log(calculator2.mul(144, 767));
// let calculator = {
//     sum: function(a, b){
//         return a + b;
//     },
//     mul: function(a, b){
//         return a * b;
//     }
// }


// let object = {
//     name: "Stepan", 
//     age: 23, 
//     group: "F2",
//     getFullInfo: function(){
//         console.log(this.name + " " + this.age);
//     }
// };
// object.getFullInfo();

// function Student(name, age, group){
//     this.name = name;
//     this.age = age;
//     this.group = group;
// }

// let alex = new Student("Alex",17,"F3");
// let ivan = new Student("Ivan",18,"F3");
// console.log(alex.age + " " + ivan.age);
// let students = [{name: "Ivan ", age: 25, group: "F1"},
//                 {name: "Vasia ", age: 24, group: "F2"},
//                 {name: "Oleg ", age: 23, group: "F1"},
//                 {name: "Stepan ", age: 26, group: "F2"}
// ];

// for (let item of students){
//     if(item.group == "F1"){
//         console.log(item.group);
//     }
// //    for (let key in item){
// //        if (key == "group"){
// //            if (item[key] == "F1"){
// //             console.log(item[key]);
// //            }
// //        }
// //    }
// }



// let i = 0;
// let j = 1;
// i = j;
// j = 2;
// // console.log(i);
// // console.log(j);

// let obj1 = {name: "Stepan", age: 24};
// delete obj1.name;
// if ("name" in obj1) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// let obj2 = {};

// for (let key in obj1) {
//    obj2[key] = obj1[key];
// }

// let object3 = Object.assign({},obj2);

// for (let key in object3) {
//     console.log(object3[key]);
// }

// let object4 = JSON.stringify(object3); // в строку 
// console.log(object4);
// object4 = JSON.parse(object4); // из строки в объект
// console.log(object4);


// obj1.name = "Alex";

// console.log(obj1);
// console.log(obj2);


// let arr = [{
//     'first name': "Ivan",
//     age: 30,
//     title: "Junior Dev"
// }, {
//     'first name': "Alex",
//     age: 30,
//     title: "Middle Dev"
// }, {
//     'first name': "Anna",
//     age: 30,
//     title: "Senior Dev"
// }];
// console.log(arr[0]["first name"]+ " " +arr[0].title+ " " +arr[0].age);

// let user = {
//     'first name': "Ivan",
//     age: 30,
//     title: "Junior Dev"
// }

// arr.push(user);
// console.log(arr[3]);

// console.log(user.age);
// let arg = 'first name';
// console.log(user[arg]);