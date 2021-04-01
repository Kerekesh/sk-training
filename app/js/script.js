// let array = [1, 2, 3];
// array.push(4);

// let matrix = [
//     [1,2,3,5,9,45645], 
//     [4,5,6,656], 
//     [7,8,9]
// ];

// let sum = 0;

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//         sum+=matrix[i][j];
//     }
// }
// console.log(sum);


// let arr = new Array(1,2,3);
// let mas = [];
// let alt = new Array(5);
// console.log(alt.length);

// let sum = 0;

// for (let i = array.length-1; i >= 0; i--) {
//     // sum+=array[i];
//     console.log(array[i]);
// }
// // console.log(sum);

// let checking = prompt();
// let arr = [];
// if (checking) {
//     arr+=checking;
//     arr+=prompt();
// } else {
//     checking = false;
// }
// console.log(arr);

// let users = [];
// let str;
// for (let i = 0; 1; i++) {
//     str = prompt("Input your name");
//     if (str == null) {
//         alert(users);
//         break;
//     } else {
//         users.push(str);
//     }
// }

let str = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, totam.",
    words = str.split(' '),
    tmp = words[8];
    
for (let i = 0; i < tmp.length; i++) {
    if (tmp[i] != ',' && tmp[i] != '.') {
        console.log(tmp[i]);
    }
}
console.log(words.join());
// console.log(words[7]);