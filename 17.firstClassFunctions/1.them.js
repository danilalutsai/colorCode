// Benefits of first class functions

// 1. You can assign functions to variables
const whatTimeIsIt = function() {
  const now = new Date()
  console.log(`${now.getHours()}:${now.getMinutes()}`)
}

whatTimeIsIt()
// setTimeout(whatTimeIsIt(), 1000)
// setInterval(whatTimeIsIt(), 1000)

const doThings = function() {
  // Thing 1
  // Thing 2
  // Thing 3
  console.log("Things are done")
}

setTimeout(doThings, 1000)

// 2. Can be passed as arguments to other functions
function fun1(callback) {
  callback()
}

// fun1(fun2)

const array = [1, 2, 3, 4]
const elements = array.map(createElement)

function createElement(item) {
  return item
}

function squaredNumbers(number) {
  return number ** 2
}

console.log(squaredNumbers(10))

// 3. Functions can be returned from other functions
function greeter(language) {
  return function(name) {
  if (language === "EN") {
    console.log(`Hello ${name}`)
  } else if (language === "IT") {
    console.log(`Ciao ${name}`)
  }}
}

const englishGreeting = greeter("EN")
const italianGreeting = greeter("IT")

englishGreeting("Danila")
englishGreeting("Nikita")
italianGreeting("Nikita")
italianGreeting("Danila")

// 4. Functions can be curried
function printTotal(sign) {
  return function(amount) {
    return `${sign}${amount}`
  }
}

const usdTotal = printTotal("$")

console.log(usdTotal(46))
console.log(usdTotal(20))
console.log(usdTotal(1000))

// 5. Closures
// 6. Can be stored in data structures
// const myFunctions = [greet, anotherFunction, () => {}]
const add = (a, b) => a + b
const subtract = (a, b) => a - b

const operations = [add, subtract]

const operationsObject = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
}

operations[0](1,3)

// 7. Functions can be anonymous
