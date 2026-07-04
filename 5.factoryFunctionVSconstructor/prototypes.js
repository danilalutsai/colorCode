const you = {}
console.log(Object.prototype === you.__proto__)

// NEVER USE THIS METHOD TO REASSIGN A FUNCTION TO OUT INSTANCE OF OBJECT CLASS IT'S JUST AN EXAMPLE
// After assigning speak to prototype of Object now in instances we have __proto__: speak()
//
// Object.prototype.speak = function() {
//   return 'Oh Kheelooo!'
// }

// console.log(me.speak()) // Oh Kheelooo
// console.log(me)

const myCoolProto = {
  talk() {
    return `Hello, my name is ${this.name}`
  }
}

function createPerson(nameValue) {
  // First argument is a prototype object
  // Second argument is a property object
  return Object.create(myCoolProto, {

    // We use nameValue to attach it as a value to a name property 
    // inside our new Object we are creating
    name: {
      value: nameValue,
    }
  })
}

const me = createPerson('Sina')
// talk() function now is inside prototype object
console.log(me)
console.log(me.talk()) // Hello, my name is Sina
console.log(me.__proto__.talk)
