function Person() {
  this.age = 12
}

const me = new Person()
Person.age = 40

// It's still 12 because we created an instance of the property with constuctor keyword this
// And it created a child object of class Person with property age = 12
// We modified blueprint age property but didn't modify the instance age itself


console.log(me.age) // 12
