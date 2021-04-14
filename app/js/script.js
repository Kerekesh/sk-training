// let cnt = document.body.childNodes.length;

// for (let i = 0; i < cnt; i++) {
//     console.log(document.body.childNodes[i]);
// }

// let body = document.body;

// let count = body.children.length;
// console.log(count);

// for(let i=0; i < count;i++){
//   console.log(body.children[i].nodeName);
//   console.log(body.children[i].previousElementSibling);
//   if(body.children[i].children.length > 0){
//     for(let j=0; j < body.children[i].children.length; j++){
//       console.log(body.children[i].children[j].nodeName);
//     }
//   } else{
//     console.log("Дочерних елементов нет");
//   }
// }

// let body = document.body;

// let count = body.children.length;

// for (let i = 0; i < count; i++) {
//     if (body.children[i].nodeName == 'UL') {
//         console.log(body.children[i].nodeName);

//         if (body.children[i].children.length > 0) {
//             for (let j = 0; j < body.children[i].children.length; j++) {
//                 if (j == 1) {
//                     console.log(body.children[i].children[j].innerHTML);
//                     break;
//                 }
//             }
//         }
//     }
// }


// console.log(document.getElementById('box').innerHTML);
// box.innerHTML = "HelloWorld";
// box.style.backgroundColor = "red";
// console.log(box);

let elems = document.getElementsByTagName("li");
console.log(elems);