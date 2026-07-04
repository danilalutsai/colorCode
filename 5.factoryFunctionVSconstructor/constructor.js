function Person(nameValue) {
  this.name = nameValue
}

// Now ben is an instance of type class Person
// It means that now ben is inheriting from Person
const ben = new Person('Ben')
const sam = new Person('Sam')

// Person.prototype is an object now that inherits from Object.prototype
// Any instance that is created with new Person will inherit methods from Person.prototype
Person.prototype.talk = function() {
  return `Hello, I am ${this.name}.`
}

Object.prototype.greet = function() {
  return `Greetings!`
}

// We can asign greet method(function) to ben as ben is an instance of Person
// And Person is an instance of Object we inherit this method from Object.prototype
console.log(ben.greet())

// As a is an object because it is an empty string it also inherits from Object.prototype
// We don't want this behaviour so this is just an example of prototype inheritance
const a = ""
console.log(a.greet())
