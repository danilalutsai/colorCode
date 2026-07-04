// Classes are syntactic sugar in Javascript
// They are really underneath a functions that creates an Object based element

// When we declare a function in a class or class based function
// Underneath it creates 
function Person() {}

Person.prototype.talk = function() {
  return 'Talking'
}
console.log(Person.talk) // Undefined
console.log(Person.prototype.talk()) // Talking

const me = new Person()
console.log(me.talk()) // Talking
console.log(me) // Person {} -> Prototype Object -> talk(f) 

// Instead of adding talk function to it prototype method we can declare it with this keyword
function Person() {
  this.talk = function() {
    return 'Screaming'
  }
}

const you = new Person()
console.log(you.talk()) // Screaming

// Now the talk function is directly in the Person because this refers to the parent object itself
// If you include a function or anything with this keyword inside constructor it becoming property of the object 
// Not its method as if we declare it with prototype
// And most importantly the function or whatever you wrote with this gets copied directly 
// Into that instance (a child object)
console.log(you) // Person (talk(f)) -> __proto__ -> Object

