let buttons = document.querySelectorAll("#buttonContainer button");

buttons.forEach(button => {
  button.addEventListener("click", function(event) {
    let operator = this.innerText,
        num1 = n1.value, 
        num2 = n2.value;
    result.innerHTML = eval(num1 + operator + num2); // eval is evil =)
  });
});