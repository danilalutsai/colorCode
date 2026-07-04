// The keyword this === current execution context

// This referres to a global object Node or Browser itself if it is not pointing to nothing
// console.log(this) // {} - an empty object. In browser - window

function talk() {
  // There is a rule mostly true: 
  // Whoevers is on the left side of function invocation of this.
  return this
}

const person = {
  name: 'Danila',
  // talk: talk, // talk is a simplified version of talk: talk or name for name: name
  talk
}

// This what is inside talk function becomes me
console.log(person.talk()) // So it returns full me object as output

console.log(talk()) // The output is global window object
// It's same as
// console.log(window.talk())

// Reuse the function for multiple objects
function talking() {
  return `I am ${this.name} ${this.surname ? ' ' + this.surname : ''}`
}

const me = {
  name: 'Danila',
  surname: 'Lutsai',
  talking
}

const you = {
  name: 'Nikita',
  talking
}

console.log(me.talking())
console.log(you.talking())
