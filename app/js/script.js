// let nameJS = prompt("Какое официальное название JavaScript?").toLowerCase();
// console.log(nameJS);
// Verification();
// function Verification() {
//     if (nameJS === "ecmascript" || nameJS === "ecma script") {
//         alert("Правильно");
//     } else {
//         alert("Не знаете? ECMAScript");
//     }
// }

// let num = prompt("Число?");
 
// if (num > 0) {
//     alert("1");
// } else if (num < 0) {
//     alert("-1");
// } else {
//     alert("0");
// }

let message = (login == 'Сотрудник') ? message = 'Привет' : (login == 'Директор') ? message = 'Здравствуйте' : (login == '') ? message = 'Нет логина' : message = ''; 

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
