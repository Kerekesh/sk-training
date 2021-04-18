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

// let elems = document.getElementsByTagName("li");
// console.log(elems);


// // ● найти элемент с классом list
// // ● найти другой li и изменить в нем текст
// // ● сделать текст в div красным

// let list = document.querySelector('.list');
// let secondListItem = list.lastElementChild;
// secondListItem.innerText = "CSS3";
// box.style.color = "red";


// // ● к чекбоксах добавить атрибут checked
// // ● если пункт имеет класс "text" то удалить его и наоборот

// let ckeckbox = document.querySelector("#checkbox");
// checkbox.setAttribute("checked", "");
// checkbox.classList.toggle("text");
// console.log(checkbox);


// // ● добавить в список 5 элементов li с текстом от 1 до 5

// let list = document.querySelector(".list");

// for (let i = 1; i <= 5; i++) {
//     let newLi = document.createElement("li");
//     newLi.innerHTML = i;
//     list.appendChild(newLi);
// }