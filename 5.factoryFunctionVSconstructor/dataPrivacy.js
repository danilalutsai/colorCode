// This is an example of factory function
function createPerson(nameValue) {

  // We don't have to return nameValue as a part of an object created
  return {
    talk() {
      return `${nameValue}`
    }
  }
}

const me = createPerson('Danila')

console.log(me.talk()) // Danila

// Here is where we have data privacy is hidden if not in the proto
console.log(me.nameValue) // undefined

// In Javascript, any function can return a new object.
// When it's not a constructor function or Class,
// it's called a factory function
