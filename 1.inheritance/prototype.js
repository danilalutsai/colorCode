class Person {
  talk() {
    return 'Talking'
  }
}

const me = new Person()
const you = new Person()

me.talk() // Talking
you.talk() // Talking

// me and you inherit talk() function from __proto__ of class Person
// me is an instance of Person while Person is an instance of Object class.
me.age = 12 // Person { age:12 } -> __proto__ -> talk()

console.log(Person)
// class Person {
//   talk() {
//     return 'Talking'
//   }
// }

console.log(Person.prototype)
console.log(Person.prototype === me.__proto__) // true
console.log(me.__proto__.talk) // our talk function declares

// If we want to change Person talk function we type:
Person.prototype.talk = function() {
  return 'Screaming'
}
console.log(Person.prototype.talk) // We recieve our talk function
console.log(Person.talk) // We can't access function directly it returns undefined
console.log(me.talk()) // Screaming
