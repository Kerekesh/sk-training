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

// document.body.onclick = function(event) {
//     let box = document.getElementById("box");
//     box.style.left = event.clientX-50+"px";
//     box.style.top = event.clientY-50+"px";
// };


// ● сделать dropdown (выпадающий список)

// dropdown.addEventListener("click", showItems, false);
// let toggle = document.querySelectorAll(".none");

// function showItems(e) {
//   for (let i = 0; i < toggle.length; i++) {
//     toggle[i].classList.toggle("none");
//   }
// }


// // ● подсвечивать ячейки таблицы при наведении

// table.addEventListener("mouseover", highlightCell);
// table.addEventListener("mouseout", removeHighlighting);

// function highlightCell(event){
//   if (event.target.tagName != "TD") return;

//   event.target.style.backgroundColor = "lime";
// }
// function removeHighlighting(event){
//   event.target.removeAttribute("style");
// }



// // ● при прокрутке страницы на 200px тоглить класс в header

// window.addEventListener("scroll", toggleClass);

// function toggleClass(){
//   for (let i = 0; i < document.body.clientHeight; i+=200) {
//     if (window.scrollY == i) {
//       header.classList.toggle("green");
//     }
//   }
// }


// // ● сделать проверку на ширину экрана, если меньше 768px то к элементу
// // добавить класс

// window.addEventListener("resize", addClass);

// function addClass(event) {
//   // console.log(event);
//   if (window.innerWidth < 768) {
//     header.classList.add("green");
//   } else {
//     header.classList.remove("green");
//   }
// }


// // ● сделать интуп (type = "text") в который можно вводить только цифры
// // (keyCode для чисел от 48 до 57 и от 96 до 105)

// keynumbers.addEventListener("keydown", function(event){
//   let key = event.which;
//   if (key < 48 || key > 57) {
//     event.preventDefault();
//   }
// })