// let i = 1;

// function getPriceProduct(name, price, sale = 0.1) { // иницилизация параметров
//     return price - price * sale;
// }

// console.log(getPriceProduct('product', 100, 0.2));


// askMe('Согласны?', showOk, showNo); // Можно вызывать в любом месте

// function askMe(question, yes, no) { // Callbeck functions
//     if (confirm(question)) {         // Declaration function
//         yes();                          
//     }   else {
//         no();
//     }
// }

// let askMeNextGeneration = function(question, yes, no) { // Expession function
//     if (confirm(question)) {         
//         yes();
//     }   else {
//         no();
//     }
// }
// askMeNextGeneration('Согласны?', showOk, showNo); // Нужно вызывать после инициализации функции

// function showOk() {
//     console.log('ok');
// }
// function showNo() {
//     console.log('no');
// }

// let sum = (a, b) => a + b; // Стрелочные функции (Expression)

// console.log(sum(1, 2))

// let isNumber = function(firstNum, secondNum) {
//     let res;
//     if (firstNum > secondNum) {
//         res = firstNum;
//     } else if (firstNum < secondNum) {
//         res = secondNum;
//     } else {
//         res = firstNum;
//     } 
//     return res;
//     // return (n1 > n2) ? n1 : n2;
// }
// console.log(isNumber(60,50));

// new Number();
// console.log(Number(false)); //преобразует Булевое значение

let random = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min; //Формула случайного целого числа

let rnd = random(1, 1000);

if (rnd % 2) {
    console.log('Четное');
} else {
    console.log('Нечетное');
}