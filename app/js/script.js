// function showHelloWorld() {
//     alert(this.innerHTML);
// };

// const { Dropdown } = require("bootstrap");

// // btn.onclick = function() {
// //     alert('Hello world 3');
// // };


// // добавить обработчик на кнопку, при нажатии на которую будет в консоль
// // выводиться текст с поля

// let evnt = "click";
// btn.addEventListener(evnt, showValue);

// function showValue(e){
//     console.log(e)
//     console.log(text.value)
//     if(e.altKey) { //проверка нажатия клавиши Alt
//         console.log('Alt pressed');
//     } else {
//         console.log('Alt don`t pressed');
//     }
// }


// ● написать обработчик на событие клик чтобы элемент перемещался на
// координаты клика
// ● сделать dropdown (выпадающий список)


// document.body.onclick = function(event) {
//     let box = document.getElementById("box");
//     box.style.left = event.clientX-50+"px";
//     box.style.top = event.clientY-50+"px";
// };


dropdown.addEventListener("click", showItems, false);
let toggle = document.querySelectorAll(".none");

function showItems(e) {
  for (let i = 0; i < toggle.length; i++) {
    toggle[i].classList.toggle("none");
  }
}