// Constructor is used for a blueprint of creating objects

// Creating object using a factory function
function Person(name) {
  this.name = name;
  this.talk = function() {
    return `Hello, I am ${this.name}.`
  }
}

// When you type new in Javascript it does 2 things for us:
// 1. It creates an object inside the function itself and call it this
// 2. And then returns this 
// That's the magic of constructor function that we wrote below
const sina = new Person('Sina');
const ben = new Person('Ben');

console.log(sina.talk());

