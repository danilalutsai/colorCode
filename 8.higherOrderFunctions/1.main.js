// Higher order functions are the functions that accept as a parameter other function
// Or return a function
const doble = (n) => {
  return n * 2
}

console.log(doble(5))

const greetings = (nameValue) => {
  return `Hello ${nameValue}`
}

console.log(greetings("Danila"))

// The setTimeout function takes as a paremeter other function to perform it
setTimeout(() => {
  console.log(greetings("Nikita"))
}, 1000)

// Another example on higher order function is filter because it takes as a
// parameter other function
const newArray = [1, 2, 3]
let filterArray = newArray.filter(function(item) {
  return item % 2 !== 0
})
console.log(filterArray)

// Same with arrow type function
filterArray = newArray.filter((item) => item % 2 === 0)
console.log(filterArray)

const names = ["Sam", "Danila", "Nikita"]

let filterNames = names.filter((name) => {
  return name[0] === "D"
})

console.log(filterNames)

// Same logic using for loop
const filtered = []

for (let i = 0; i < names.length; i++) {
  if (names[i][0] === "N") {
    filtered.push(names[i])
  }
}

console.log(filtered)

// Using higher order function we reduce repetetive code such as for loops using
// filter method. Repeating code is almost always a red flag

console.log(names
  .filter(name => name[0] === "D")
  .filter(name => name.length >= 5)
  // .map(convertToElement)
)

// const convertToElement = (name) => {
//     const element = document.createElement("p")
//     element.innerText = name
//     return element
// }

// With this method each function performs only one operation
const isNotB = (name) => {
  return name[0] !== "B"
}

const isMinimum5 = (name) => {
  return name >= 5
}

const surnames = ["Bilish", "British", "Gomez"]
names
  .filter(isNotB)
  .filter(isMinimum5)

