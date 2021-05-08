// let arr = ["Иван", "Fox", "junior", "23"];
// let [firstName, lastName, ...info] = arr;
// console.log(firstName + " " + lastName);
// firstName = "Alex";
// console.log(firstName);

// let obj = {name: "Иван", lastName: "Fox"};

// let {name, lastName} = obj;

// console.log(info);

// let log = function(a, b, c) {
//   console.log(a, b, c);
// }

// log(...arr);

// let log2 = function(a, b, ...rest) {
//   console.log(a, b, rest);
//   rest[1000] = 1;
//   console.log(rest);
// }
// log2("Иван", "Fox", "junior", "23");


// let inc = function(x) {
//   return x+1;
// };

// let inc2 = x => x+1;
// let inc3 = () => 1;
// let sum = (a, b) => a + b;

// console.log(sum(1, 2));


// let returnResult = (a, b = 2) => a % b;
// console.log(returnResult(5));


// let arr = ["Иван", "Fox", "junior", "23"];
// let [firstName, lastName, ...info] = arr;
// let str = `Имя: ${firstName}, Фамилия: ${lastName}`;
// console.log(str);

// let map = new Map();
// map.set("1", "First string");
// map.set(2, "Second string");
// map.set(true, "Third string");

// console.log(map.get("1"));
// console.log(map.get(2));
// console.log(map.get(true));
// console.log(map.size);


let recipeMap = new Map ([
  [ "Огурец", 500],
  [ "Помидор", 350],
  [ "Лук", 50]
]);
console.log(recipeMap);

for (const item of recipeMap.keys()) {
  console.log(item);
}
for (const item of recipeMap.values()) {
  console.log(item);
}
for (const item of recipeMap.entries()) {
  console.log(item);
}