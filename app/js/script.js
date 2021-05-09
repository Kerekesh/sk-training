const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".value");

buttons.forEach(button => {
    button.addEventListener("click", getValue);
});

function getValue(e) {
    if (e.target.innerHTML === 'AC') {
        display.innerHTML = '0';
    } else if (e.target.innerHTML === '=') {
        display.innerHTML = eval(display.innerHTML);
    } else if (display.innerHTML === '0') {
        display.innerHTML = e.target.innerHTML;
    } else if (e.target.innerHTML === '%') {
        display.innerHTML = eval(display.innerHTML / 100 );
    } else if (e.target.innerHTML === '±') {
        num = parseInt(display.innerHTML);
        if(num > 0){    
            display.prepend("-");
         }
         else if(num < 0){
             display.innerText.replace('-', '');
         }
         else if(num == 0){
            display.innerHTML;
         } 
    }else {
        display.innerHTML += e.target.innerHTML;
    }
};














// let numbers = document.getElementsByClassName("number");
// let result = 0;

// for (let i = 0; i < numbers.length; i++) {
//   numbers[i].addEventListener("click", getValue);
// }

// function getValue() {
//   display.innerHTML += this.innerHTML;
//   result = display.innerHTML;
//   parseInt(result);
// }

// let operators = document.getElementsByClassName("operator");

// for (let i = 0; i < operators.length; i++) {
//   operators[i].addEventListener("click", addOperator);
// }

// function addOperator() {
//   display.innerHTML += this.innerHTML;
// }

// let equal = document.querySelector(".equal");

// equal.addEventListener("click", getResult);

// function getResult() {
//   console.log(display.innerHTML);
//   display.innerHTML = Number(display.innerHTML);
// }