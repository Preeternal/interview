function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.voice = function() {
  console.log(`Cat ${this.name} says meow`)
}

// const cat = new Cat('Tom', 'gray');
// cat.voice();
// console.log(Cat.prototype); //{ voice: [Function (anonymous)] }
// console.log(cat); //Cat { name: 'Tom', color: 'gray' }
// console.log(cat.__proto__ === Cat.prototype); //true
// console.log(cat.constructor); //[Function: Cat]

// function Person() {};
// Person.prototype.legs = 2;
// Person.prototype.skin = 'white';

// const person = new Person();
// person.name = 'Johnny';

// console.log('skin' in person); //true
// console.log(person.hasOwnProperty('skin')); //false

//Object.create()
const proto = {year: 2022};
const myYear = Object.create(proto);
console.log(myYear.year); //2022
console.log(myYear.hasOwnProperty('year')); //false
console.log(myYear.__proto__ === proto); //true