//Function Declaration
console.log(sum(1,41)); //42

function sum(a,b) {
  return a+b;
}

console.log(i); //undefined
var i = 42;
console.log(i); //42

// console.log(j); //ReferenceError: Cannot access 'j' before initialization
const j = 42;
console.log(j); //42

//Function Expression
// console.log(sum2(1,41)); //sum2 is not a function
var sum2 = function(a,b) {
  return a+b;
}
console.log(sum2(1,41)); //42