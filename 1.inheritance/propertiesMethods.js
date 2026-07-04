function Person() {
  this.age = 12
}

const me = new Person()
Person.age = 40

// It's still 12 because we created an instance of the property with constuctor keyword this
// And it created a child object of class Person with property age = 12
// We modified blueprint age property but didn't modify the instance age itself


// Age 40 is remaining in __proto__ as age but Javascript finds first age as 
// property in me instance and returns first found item
console.log(me.age) // 12
console.log(Person.age) // Undefined 

// Properties - things I have
// Behaviour (methods) - things I do


