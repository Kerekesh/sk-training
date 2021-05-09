let buttons = document.querySelectorAll("#buttonContainer button");

buttons.forEach(button => {
  button.addEventListener("click", function(event) {
    let operator = this.innerText,
        num1 = n1.value, 
        num2 = n2.value;
    result.innerHTML = eval(num1 + operator + num2); // eval is evil =)
  });
});








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







