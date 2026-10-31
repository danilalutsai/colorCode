// If we take that expression z = variable and 1 = value
const z = 1

// There are different types of values. Primitives and Objects
// They act differently in important ways
const primitiveValues = ["Number", "Boolean", "String", "Null", "Undefined"]
const objectsValues = ["Object", "Array", "Function", "Date", "Regex", "..."]

// This variables have Primitive values so if we compare them we get true
// Under the hood Javascript just point the variable to the value without
// creating an Object in the memory
const a = 1
const b = 1
console.log(a === b ? true : false) // true

// This variables have Objects values so if we compare them we get false
// Javascript under the hood creates an Object with the values in the memory so
// this two Objects have a different place in the memory so they are different
// and points the variable to the location in the memory of this Object
const c = [1]
const d = [1]
console.log(c === d ? true : false) // false

const A = {"skill": "cooking"}
const B = {"skill": "cooking"}
console.log(A === B ? true : false) // false

// Where it really matters: 
const matters = ["Value comparison", "Copying"]

function incrementAge(age) {
  return age = age + 1
}

const myAge = 10

incrementAge(myAge)
console.log(myAge) // 10

function incrementUserAge(user) {
  user.age = user.age + 1
}

const me = {age: 10}

incrementUserAge(me)
console.log(me) // age: 11

let e = 1
let f = e
console.log(f) // 1
e = 8
console.log(f) // 1

let g = {name: "Danila"}

let h = {...g}
h.name = "Nikita"
console.log(h) // name: Nikita
console.log(g) // name: Nikita
g = {name: "Danila"}
console.log(g) // Danila
console.log(h) // Nikita

// The copying object with 3 dots only creates new reference up to first level
let g1 = {
  name: "Danila",
  stats: {
    height: 175,
  }
}

let g2 = {...g1}
g2.name = "Nikita"
g2.stats.height = 180
console.log(g1)
