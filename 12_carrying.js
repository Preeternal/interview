const  funcA = (x, y) => x + y; // 2 + 3 = 5
const  funcB = (x) => -x; // -5
const  funcC = (x) => 5 * x; // -25

const composeFunc = (...functions) => (...args) => {
  let accumulator = [...args]; 
  
  functions?.forEach((func, index) => {
    accumulator = index === functions.length - 1 ? func(...accumulator) : [func(...accumulator)];
  })

  return accumulator;
}

const myFunc = composeFunc(funcA, funcB, funcC); // -25

console.log('myFunc', myFunc(2, 3));

const composeFunc2 = (...functions) => (...args) => 
  functions.reduce(
    (accumulator, func, index, arr) =>  
      index === arr.length - 1 ? func(...accumulator) : [func(...accumulator)],
    args
  );


const myFunc2 = composeFunc2(funcA, funcB, funcC);

console.log('myFunc2', myFunc2(2, 3)); // -25
