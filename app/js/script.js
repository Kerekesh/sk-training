// function showHelloWorld() {
//     alert(this.innerHTML);
// };

// // btn.onclick = function() {
// //     alert('Hello world 3');
// // };

let evnt = "click";
btn.addEventListener(evnt, showValue);

function showValue(){
    console.log(event);
    if(event.altKey) {
        console.log('Alt pressed');
    } else {
        console.log('Don`t pressed');
    }
    console.log(event.type);
}
