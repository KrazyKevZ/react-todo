// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Brie', 'Benj'];
// var groupB = ['Kevz'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Kevin', 25];
var personTwo = ['Brie', 13];
//Hi Kevin, you are 25

function greet (name, age) {
  console.log('Hi ' + name + ' , you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Kevin', ...names];
//Hi

final.forEach(function (name) {
  console.log('Hi ' + name);
});
