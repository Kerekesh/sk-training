const name = "https://api.github.com/users/kerekesh";

$.ajax({
  url: name,
  type: "GET",
  dataType: "json",
  success: function(res){
    console.log(res);
    for (const key in res) {
      $('#result').append(`<tr><td>${key}</td></tr>`);
    }
    // $('#result').append(`<div>${res.avatar_url}</div>`);
    // $('#result').append(`<div>${JSON.stringify(res)}</div>`);
  }
});

// console.log("start");

// // let timerId = setTimeout(function() {
// //   console.log("finish");
// // }, 5000);
// // clearTimeout(timerId);

// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve("done!"), 1000);
//   });

//   promise.then(
//     result => alert(result), // выведет "done!" через одну секунду
//     error => alert(error) // не будет запущена
//     );
    
//   console.log("finish");

// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });


// fetch('https://jsonplaceholder.typicode.com/todos/1') // 3 способ (современный)
//   .then(response => response.json())
//   .then(json => console.log(json));


// var xhr = new XMLHttpRequest();   // [Deprecation] // 2 способ
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', false);
// xhr.send();
// if (xhr.status != 200) {
//   // обробити помилку
//   alert('Помилка ' + xhr.status + ': ' + xhr.statusText);
// } else {
//   // вывести результат
//   // alert(xhr.responseText);
// }


// $.ajax({ // 1 способ
//   type: "GET",
//   cache:  false,
//   url: 'https://jsonplaceholder.typicode.com/todos/5',
//   success: function(data, textStatus, request){
//     console.log(data);
//     data = JSON.stringify(data);
//     // console.log(data);
//     data = JSON.parse(data);
//     // console.log(typeof data);
//     let result = "";
//     for (let i = 0; i < data.length; i++) {
//       result += `<tr>
//         <td>${data[i].userId}</td>
//         <td>${data[i].id}</td>
//         <td>${data[i].title}</td>
//         <td>${data[i].completed}</td> 
//       </tr>`; 
//     }
//     $("#result").append(`<table> ${result} </table>`);
//       // console.log(textStatus);
//       // console.log(request);
//   },
//   error: function(error){
//     console.log(error);
//   }
// });


// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //   .then(response => response.json())
// //   .then(json => console.log(json))