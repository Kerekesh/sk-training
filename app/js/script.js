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

let buttons = document.querySelectorAll("#buttonContainer button");

buttons.forEach(element => {
  element.addEventListener("click", function(event) {

    function getEl(id) {
      let val = id.value;
      return val;
    } 
  
    let operator = this.innerText;
    
    let num1 = getEl(n1); 
    num1 = parseInt(num1);
    let num2 = getEl(n2);
    num2 = parseInt(num2);
  
    result.innerHTML = eval(num1 + operator + num2);
    
  });
});










