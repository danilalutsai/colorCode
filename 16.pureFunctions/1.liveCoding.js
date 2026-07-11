// To be pure function it has to follow 2 rules
// 1. Always returns the same output, for a given input
// 2. No side-effects

let nameValue
function salut() {
  return `Hello friend ${nameValue}`
}

console.log(salut())

let n = "Nikita"

// It first looks for local variables then for a global variables
function hello(n) {

  // output: Hello friend Danila
  return `Hello friend ${n}`
}

// The pure functions are: 
// Cleaner, Predictable, Consistent, Debuggable, Portable, Testable

console.log(hello("Danila"))

let result = hello("Greg")
if (result === "Hello friend Greg") {
  console.log("Pass")
} else {
  console.log("Fail")
}

// No side effects means that the function doesn't change anything
// Values, variables, states that are outside of it
let sheepCount = 0
function addSheep() {
  sheepCount++
}

addSheep()
addSheep()
addSheep()
console.log(sheepCount) // 3

// Every time I call this function I know exactly what to expect
// Whatever I am passing to it + 1
// The function doesn't change nothing outside the function it just increments
// whatever it passed to it by 1 
function addSheepCorrect(count) {
  return count + 1
}

sheepCount = addSheepCorrect(sheepCount)
sheepCount = addSheepCorrect(sheepCount)
sheepCount = addSheepCorrect(sheepCount)
console.log(sheepCount) // 6
