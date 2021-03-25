// let now = new Date();
// now.setFullYear(2020);
// console.log(now.getFullYear());


// let delim = "and";

// let str = "\"first\""; // Экранирование
// console.log(typeof str);

// let str2 = "second";

// let str3 = str +" "+delim+" "+ str2;
// console.log(str3);

// let str4 = `${str} ${delim} ${str2}`; // Интерполяция
// console.log(str4);

// String(0); // Приведение данных к строке

// console.log(str[1]); // Обращение к номеру елемента строки

// console.log(str.charCodeAt(0));

// let S = str.toUpperCase()
// console.log(S);                // Приведение к региструі
// console.log(S.toLowerCase());

// str = "   Please locate to locate occurs!   ";
// str.trim(); //Удаляет пробелы и табы с двух сторон
// console.log(str.indexOf("locate")); //Под каким номером находится строка (с нуля)
// console.log(str.lastIndexOf("locate")); // проверка на наличие с конца
// str.includes("locate"); // Проверяет наличие и возвращает Boolean

// console.log(str.substring(20, 26)) // Копирует строку, указываем начало и конец
// console.log(str.substr(20, 10)) // Копирует строку, указываем начало и количество символов
// console.log(str.slice(20, 10)) // Тот же substring, но может работать с отрицательными значениями с конца строки (последний символ -1)

// console.log(str.replace("locate","loc")) // 


let str = "lorem ipsum is simply dummy",
    string = str[0].toUpperCase() + str.substring(1), // "Lorem ipsum is simply dummy"
    flag = false,
    result = "";
    
for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
        // console.log(" ")
        result += " ";
        flag = true;
    } else {
        if (flag == true){
            // console.log(string[i].toUpperCase());
            flag = false;
            result += string[i].toUpperCase();
        } else {
            // console.log(string[i]);
            result += string[i];
        }
    }
}
console.log(result);
