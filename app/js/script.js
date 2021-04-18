// $(".my-circle").click(function() {
//   $(".background").toggleClass("dark");
// });

// function checkAge(age) {
//     return (age > 18) ? true : confirm("Родители разрешили?");
// }
// console.log(checkAge(17));

// let user = {
//     name: "John",
//     surname: "Smith"
// };
// user.name = "Pete";
// delete user.name;


// let schedule = {age: 54};
// function isEpmty(obj) {
//     for (let key in obj) {
//       // если тело цикла начнет выполняться - значит в объекте есть свойства
//       return false;
//     }
//     return true;
//   }
// console.log(isEpmty(schedule));


// let salaries = { //Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let sum = 0;
// countSum(salaries);
// function countSum(obj) {
//     for (let key in obj) {
//         sum += obj[key];
//     }
// } 
// console.log(sum);


// let menu = { //Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// function multiplyNumeric(obj) {
//       for (let key in obj) {
//           if (typeof obj[key] == "number") {
//             obj[key] *= 2;
//           }
//       }
//   }
// multiplyNumeric(menu);
// console.log(menu);


// // Напишите функцию-конструктор Accumulator(startingValue).
// // Объект, который она создаёт, должен уметь следующее:
// // Хранить «текущее значение» в свойстве value. 
// // Начальное значение устанавливается в аргументе конструктора startingValue.
// // Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// // Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), 
// // с учётом начального значения startingValue.
// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function(){
//         this.value += +prompt("Сколько нужно добавить?", 0);
//     };
// };

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений


// let user = {
//     name: "John",
//     money: 1000,
  
//     [Symbol.toPrimitive](hint) {
//       alert(`hint: ${hint}`);
//       return hint == "string" ? `{name: "${this.name}"}` : this.money;
//     }
//   };
  
//   // демонстрация результатов преобразований:
//   alert(user); // hint: string -> {name: "John"}
//   alert(+user); // hint: number -> 1000
//   alert(user + 500); // hint: default -> 1500


// let login = prompt("Введите логин");
// if (login == "Админ") {
//     let password = prompt("Введите пароль");
//     if (password == "Я главный") {
//         alert("Здравствуйте");
//     }else if (password == null) {
//         alert("Отменено");
//     }else {
//         alert("Неверный пароль");
//     }
// }else if (login == null) {
//     alert("Отменено");
// }else {
//     alert("Я вас не знаю");
// }


// let user = {
//     name: "John",
//     lastname: "Sean",
//     money: 1000,
  
//     [Symbol.toPrimitive](hint) {
//       alert(`hint: ${hint}`);
//       return hint == "string" ? `{name: "${this.name}"}` : this.money;
//     }
//   };
  
//   // демонстрация результатов преобразований:
//   alert(user); // hint: string -> {name: "John"}
//   alert(+user); // hint: number -> 1000
//   alert(user + 500); // hint: default -> 1500


// let user = {
//     name: "John",
//     money: 1000,
  
//     // для хинта равного "string"
//     toString() {
//       return `{name: "${this.name}"}`;
//     },
  
//     // для хинта равного "number" или "default"
//     valueOf() {
//       return this.money;
//     }
  
//   };
  
//   alert(user); // toString -> {name: "John"}
//   alert(+user); // valueOf -> 1000
//   alert(user + 500); // valueOf -> 1500


let display = document.getElementById("display");
let button = document.getElementById("button");
let counter = document.getElementById("counter");

let clicks = 0;

let seconds = 5000;

button.onclick = function() {
    clicks++;
    counter.innerText = clicks;

    setInterval( function() {
        button.onclick = null;
        display.innerText = "Game Over";
        clearTimeout(timer);
    }, seconds);

    timer = SetTimeout(function() {
        display.innerText = 5000-100;
    }, 100);
}

// const interval = setInterval(() => {
//     const delta = Date.now() - startTime;
//     display.textContent = formatTime(TIMEOUT) - delta;
//   }, 100);

// function formatTime(ms) {
//     return Number.parseFloat(ms / 1000).toFixed(2);
//   }