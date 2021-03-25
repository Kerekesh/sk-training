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


// let getRandomRange = (min, max) => Math.round(Math.random() * (max - min + 1)) + min, //Формула случайного целого числа
//     randomNumber = getRandomRange(1, 100),
//     checkNumber = (() => (randomNumber % 2) ?
//         console.log('Нечетное' + ' (' + randomNumber + ')') :
//         console.log('Четное' + ' (' + randomNumber + ')'))();



// let elem = document.getElementById("elem");
// let int = setInterval(function(){
//     let myDate = new Date();
//     elem.innerHTML = myDate;
// },1000);


let str = "lorem ipsum is simply dummy";
console.log(str.replace(str, "Lorem Ipsum Is Simply Dummy"));

