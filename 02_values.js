// let a = 1;
// let b = a;
// b++;
// console.log('a', a, 'b', b); //a 1  b 2

let a = [1,2,3];
let b = a;
b.push(4);
console.log('a', a, 'b', b); //a [1,2,3,4]  b 2 [1,2,3,4]
let c = [1,2,3,4];
console.log(a === b); //true
console.log(a === c); //false