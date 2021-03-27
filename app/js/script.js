// $(".my-circle").click(function() {
//   $(".background").toggleClass("dark");
// });

function checkAge(age) {
    return (age > 18) ? true : confirm("Родители разрешили?");
}
console.log(checkAge(17));