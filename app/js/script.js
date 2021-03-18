let a = 0;
let b = 2;
let c = 0;
let f = 12;


if (a != null) {
    console.log("ok was pressed");
    a = parseInt(prompt("Input yout digit", "0"));
    c = Evaluate(a, 1);
} else {
    console.log("cancel was pressed");
}
alert(c);

function Evaluate(a, b) {
    let c;
    if (a > 0 || a < 10) {
        c = a + b * 3;
    } else {
        c = a*2 + b*4;
    }
    return c;
}

// let a = 1;
// let n;
// n = prompt("?");
// n > 0 ? true : false;
// console.log(n);

// let n = prompt('?');
// switch (n) {
//     case '1':
//         console.log ('a');
//         break;
//     case '2':
//         console.log ('b');
//         break;
//     case '3':
//         console.log ('c');
//         break;
// }

// for (let i=0; i < 10; i++) {
//     let n=+i;
//         console.log(n);
//     }

// for (let i=9; i > 0; i--) {
//     console.log(i**2);
// }


// let i = 0;
// while (i = 3) {
//     alert(i);
//     i++;
// }