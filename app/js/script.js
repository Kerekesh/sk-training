// // JQuery

// // $("#container").children().css('background-color', 'yellow');
// // $('.item').eq(1).css('background-color', "green");

// let n = $(".item").length;
// console.log($(window).height());
// // for (let i = 0; i < n; i++) {
// //   if (i%2) {
// //     $('.item').eq(i).css('background-color', "yellow");
// //   } else {
// //     $('.item').eq(i).css('background-color', "green");
// //   }
// // };


// $(".item").each(function(index){
//   if(index%2) {
//     $(this).addClass("green");
//     $(this).html("<strong>Hello world</strong>");
//   } else {
//     $(this).addClass("yellow");
//   }

//   if($(this).hasClass("box")) {
//     $(this).removeClass("box");
//   }

//   console.log($(this).height(50));
// });

// console.log($(".item").parent());

// $("#container").after("<p>End of Document</p>");



// // динамично добавить 5 нумерованных строк (не через <ol> </ ol>)

// for (let i = 0; i < 5; i++) {
//   $("#second-container").append(`<p>${i}</p>`);
// }

// $("#show-modal").on("click", function() {
//   $(this).add
// });


// // сделать анимацию загрузки прогрессбара

// let val = 0;
// let loading;
// $("#button").on("click", startLoading);
// function startLoading() {
//   $("#button").off("click");
//   loading = setInterval(function(){
//     $("#progress").attr("value", val+=1)
//     $("#display").text(val+"%");
//     if (val == 100) {
//       clearInterval(loading);
//     }
//   }, 50);
// };


// сделать анимацию загрузки прогрессбара

$("#progress").animate(position);


 
 