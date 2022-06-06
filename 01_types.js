// null, undefined, boolean, number, string, object, symbol

console.log(typeof null) //object
console.log(typeof undefined) //undefined
console.log(typeof true) //boolean
console.log(typeof 123); //number
console.log(typeof '123'); //string
console.log(typeof new Array()); //object
console.log(typeof Symbol('123')) //symbol

console.log(typeof NaN); //number
console.log(typeof function() {}) //function

console.log(Boolean('')); //false
console.log(Boolean(' ')); //true
console.log(Boolean(0)); //false
console.log(Boolean('0')); //true
console.log(Boolean([])); //true

console.log(1+'2'); //12
console.log(''+1+0); //10
console.log(''-1+0); //-1
console.log('3'*'8'); //24
console.log(1+2+'$'); //3$
console.log('$'+1+2); //$12
console.log('2'-1); //1
console.log('$2'-1); //Nan
console.log(null+1); //1

// == & ===
console.log('2' == 2); //true
console.log('2' === 2); //false
console.log(undefined == null); //true
console.log(undefined === null); //false

console.log(false == ''); //true;
console.log(false == []); //true;
console.log(false == {}); //false

console.log('' == 0); //true;
console.log('' == []); //true;
console.log('' == {}); //false

console.log(0 == []); //true
console.log(0 === {}); //false
console.log(0 == null); //false
