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

// Here is where we have data privacy
console.log(me.nameValue) // undefined
