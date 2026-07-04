// Benefits of arrow functions
//
// 1. Aesthetics
// Shorter especially with one line return statement
function arrow() {
  'hello'
} // undefined

const arrow1 = () => 'hello' // hello

console.log(arrow1())

// 2. Binding with THIS
const me = {
  name: 'Danila',
  talk() {
    return this // refers to me object itself
  },
  arrowTalk: () => {
    return this // refers to a global window/browser
  }
}

// NEVER USE ARROW FUNCTIONS INSIDE OBJECTS USING THIS BECAUSE IT DOESN'T STICK TO CURRENT OBJECT
const you = {
  name: 'Danila',
  talk: () => {
    return this.name // undefined - because this refers to the window object and it has not the name property
  }
}

console.log(me.talk())
console.log(me.arrowTalk())
console.log(you.talk())
