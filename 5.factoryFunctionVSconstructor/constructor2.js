function Person(nameValue) {
  this.name = nameValue
}

const ben = new Person('Ben')

Person.prototype.talk = function() {
  return `Hey, my name is ${this.name}.`
}

console.log(ben.talk()) // Hey, my name is Ben.

Person.prototype.talk = function() {
  return `Hello, I am ${this.name}.`
}

console.log(ben.talk()) // Hello, I am Ben.

// By default factory functions don't give us this capability to 
// change methods globally referring to Objects prototypes
//
// This is the correct method of inheritance
