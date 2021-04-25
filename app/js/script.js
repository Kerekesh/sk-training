// $("#box").on("click", function(){
//   alert("Hello, world!");
// });


// $("#box").hover(function(){
//   $("#box").css("backgroundColor", "red");
// }, function(){
//   $("#box").css("backgroundColor", "darkcyan");
// });

// $(window).resize(function(event){
//   console.log(event);
// });

// $("#box").scroll(function(){
//   console.log("scroll");
// });


// $("#box").click(function(){
//   $("#box").animate({left: "100px"});
// });

// $.ajax({
//   type: 'GET',
//   dataType: 'json',
//   url: 'http://jsonplaceholder.typicode.com/posts/1',
//   success: function(data) {
//     $('#box').html(data);
//   }
// });


try {
  let i;
  console.log("show")
  // j;
  throw new SyntaxError("возникла синтаксическая ошибка");
  console.log("Нет ошибок")
} catch(error) {
  console.log(error.message +" "+ error.name +" "+ error.stack)
} finally {
  console.log("app is running");
}
console.log("script");