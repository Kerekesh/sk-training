// //1. Если переменная больше нуля и меньше 5-ти, то выведите "Верно", в противном случае выведите "Неверно".

// let number = 4;
// if (number > 0 && number < 5) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// number > 0 && number < 5 ? console.log("Верно") : console.log("Неверно");


// // 2. Переменная num может принимать 4 значения: 1, 2, 3 или 4. 
// Если она имеет значение '1', то в переменную result запишем "зима", 
// если имеет значение "2" - "весна" и так далее. 
// Решите задачу через switch-case.

// function print(str) {
//     console.log(str);
//     // alert(str);
// }
// function getValidatedArg(num) {
//     if (typeof num != "number") {
//         num = parseInt(num);
//         print(`Неправильный тип + ${typeof num}`);
//     }
//     return num;
// }
// function getSelectedValue(num) {
//     let result;
//     num = getValidatedArg(num);
//     switch (num) {
//         case 1:
//             result = "Зима";
//             break;
//         case 2:
//             result = "Весна";
//             break;
//         case 3:
//             result = "Лето";
//             break;
//         case 4:
//             result = "Осень";
//             break;
//         default:
//             result = `Нет такого + ${num}`;
//     }
//     return result;
// }

// let num = prompt("Введите число от 1 до 4");
// print(getSelectedValue(num));


// // 3. Данная строка 'aaa bbb ccc ". Вырез с нее слово "bbb" 
// тремя различными способами (через substr, substring, slice).

// let str = 'aaa bbb ccc';
// let arg = 'bbb';

// function print(data){
//     console.log(data);
// }
// function cutSubStr(src, from, lenght){
//     src = src.substr(from, lenght);
//     return src;
// }
// function cutSubString(src, start, end){
//     src = src.substring(start, end);
//     return src;
// }
// function cutSlice(src, start, end){
//     src = src.slice(start, end);
//     return src;
// }
// print(cutSubStr(str, 4, 3));
// print(cutSubString(str, 4, 7));
// print(cutSlice(str, 4, 7));


// // 4. Данная строка 'I learn javascript! ". Найдите позицию подстроки "learn" и длину строки. Заменить javascript на html

// let str = 'I learn javascript!';

// function findSubstring(src, substring){
//     let position = src.indexOf(substring),
//         length = substring.length;
//     return `Позиция: ${position}, Длина: ${length}`;
// }
// function replaceStr(src, searchValue, replaceValue) {
//     return src = src.replace(searchValue, replaceValue);
// } 

// console.log(findSubstring(str, "learn"));
// console.log(replaceStr(str, "javascript", "html"));


// // 5. Проверьте, что строка начинается на http://

// let address = 'http://www.google.com.ua/',
//     arg =  'http://';

// function checkString(address, arg) {
//     return address.startsWith(arg);
// }

// console.log(checkString(address, arg));


// // 6. Сделайте функцию, принимает параметром число от 1 до 7, а возвращает день недели.

// // let date = new Date();
// // date = date.getDay();

// let num = prompt("Введите номер дня недели");
// function getWeekDay(num) {
//     let days = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
//     return days[num-1];
// }
// alert(getWeekDay(num));


// // 7. С помощью цикла for сформулируйте строку '-1-2-3-4-5-6-7-8-9- "и запишите ее в переменную str
// let str = "-";
// for (let i = 1; i < 100; i++) {
//     str += i + "-"; 
// }
// console.log(str);


// // 8. Выведите 10 случайных чисел с помощью цикла

// function getRandomInRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// for (let i = 1; i <= 10; i++) {
//     let num = getRandomInRange(1, 100);
//     console.log(num); 
// }


// // 9. Дан массив [ 'a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// let array = ['a', 'b', 'c'];
// array.push(1,2,3);
// console.log(array);


// // 10. Дан массив [1, 2, 3]. Добавьте ему на начало элементы 4, 5, 6.

// let array = [1, 2, 3];
// array.unshift(4,5,6);
// console.log(array);


// // 11. Дан массив [ 'js', 'css "," jq']. Выведите на экран последний элемент.

// let arr = ['js', 'css', 'jq'];
// alert(arr[arr.length - 1]);


// 13. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый элементы [1, 2, 10, 11, 5].
// 14. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третьей "333" и так далее.
// 15. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает
// значения, каким заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill ( 'x', 5) сделает массив [ 'x', 'x',
// 'x', 'x', 'x'].
// 16. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// 17. Заполните массив 10-й случайными числами от 1 до 10 с помощью цикла
// 18. Таблица умножения в цикле

// 19. Дан массив с числами. Или не используя метода reverse переверните его элементы в обратном порядке.
// 20. Дано двумерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива.
// 21. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его
// цифр.
// 22. Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для
// этого вспомогательную функцию isPositive (), которая параметром будет принимать число и возвращать true, если число
// положительное, и false - если отрицательное.
// 23. С помощью цикла вывести все трицифрови числа в которых сумма всех цифр равна - 9 Например: 2 + 4 + 3 = 9
// 24. С помощью цикла вывести пользователей как онлайн