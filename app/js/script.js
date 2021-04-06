// let str = 'Lorem ipsuma is simply dummy loreman';
// let arr = str.split (' ');
// for (let i = 0; i < arr.length; i++){  
//   if(arr[i].length >= 5) {
//     console.log(arr[i]);
//   }    
// }


// let str = 'Lorem ipsuma is simply dummy loreman';
// let arr = str.split (' ');

// function compareNum(a, b) { //Компоратор чисел по возрастанию
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// let arr = [30, 1551, 1, 2, 10, 50, 5, 23, 'lorem'];
// arr.sort(compareNum); //сортирует по Юникоду

// console.log(arr.reverse()); // Меняет последовательность на обратный

// let newArr = arr.concat(array, arrayN) //Обьединяет массив с пдругим массивом


// let arr = [];

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
// }

// function randomNumber(number) {
//     for (let i = 0; i <= number; i++) {
//         arr[i] = getRandomInt(1, 1000);
//     }
//     console.log(arr);
// }

// let arg = prompt("input your number", "0");
// if (arg != null) {
//     randomNumber(10);
//     searchElement(arg);
// } else {
//     console.log("cancel was pressed");
// }

// function searchElement(arg) {
//     let res = arr.indexOf(+arg);
//     if (res == -1) {
//         console.log(`Нет числа ${arg} в масиве`);
//     } else {
//         console.log(`число: ${arg}, позиция: ${res}`);
//     }
// }


// let array = ['html', 'css', 'javascript'];
// array.forEach(function(item, i, array) {
//     alert(i + ": " + item + " массив")
// });

// let arr = ['html', 'css', 'javascript'];
// let nameLengths = arr.map((name) => name.length);
// console.log(nameLengths);


// let array = [1, 9, 22, 7, 6]; //дано массив [1, 9, 22, 7, 6] добавить число 8 после 22
// array.splice(3, 0, 8);
// console.log(array);


// let string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit fugit praesentium repellendus odit officia tempore ipsam nostrum nobis quod facere.';
// let array = string.split(' ');

// let longestWord = "";
// array.forEach(function(item, i, array) {
//     if (item.length > longestWord.length) {
//         longestWord = item;
//     }
// });
// console.log(longestWord);


let numbers = [8, 6, 12, 10];
let squareOfNum = numbers.map(function(num){
    return num**2;
});
console.log(squareOfNum);