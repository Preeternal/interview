// const person = {
//   surname: 'B.Good',
//   knows: function(who, name) {
//     console.log(`${who} know ${name} ${this.surname}`)
//   }
// }
// const cash = {surname: 'Cash'};
// person.knows('You', 'Johnny'); //You know Johnny B.Good
// person.knows.call(cash, 'You', 'Johnny'); //You know Johnny Cash
// person.knows.apply(cash, ['You', 'Johnny']); //You know Johnny Cash
// person.knows.call(cash, ...['You', 'Johnny']); //You know Johnny Cash
// person.knows.bind(cash, 'You', 'Johnny')(); //You know Johnny Cash

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }

// const johnny = new Person('Johnny', 33);

// function logThis() {
//   console.log(this);
// }
// const obj = {num:42};
// logThis.apply(obj);

// const animal = {
//   legs: 4,
//   logThis: function() {
//     console.log(this);
//   }
// }
// animal.logThis();

function Cat(color) {
  this.color = color;
  console.log('This', this);
  (
    () => console.log('Arrow this', this)
  )()
}

const whiteCat = new Cat('white');