//Let
let a = 'var a';
let b = 'var b';

{
  a = 'new var a';
  let b = 'local var b'
  console.log('scope A', a);
  console.log('scope B', b);
}

console.log('A:', a);
console.log('B:', b);

//Const
const array = [1,2,3];
array.push(4);
array[0] = ''
console.log(array); //[ '', 2, 3, 4 ]