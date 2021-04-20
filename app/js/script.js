// JQuery

// $("#container").children().css('background-color', 'yellow');
// $('.item').eq(1).css('background-color', "green");

let n = $(".item").length;
console.log($(window).height());
// for (let i = 0; i < n; i++) {
//   if (i%2) {
//     $('.item').eq(i).css('background-color', "yellow");
//   } else {
//     $('.item').eq(i).css('background-color', "green");
//   }
// };


$(".item").each(function(index){
  if(index%2) {
    $(this).addClass("green");
    $(this).html("<strong>Hello world</strong>");
  } else {
    $(this).addClass("yellow");
  }

  if($(this).hasClass("box")) {
    $(this).removeClass("box");
  }

  console.log($(this).height(50));
});

console.log($(".item").parent());

$("#container").after("<p>End of Document</p>");


for (let i = 0; i < 5; i++) {
  $("#second-container").append(`<P>${i}</P>`);
}