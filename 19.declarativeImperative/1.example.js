import React from 'react'
// In the declarative mode we focus on what and in imperative we focus on how

// Data manipulation
const array = [1, 2, 3, 4, 5]
const dobles = []

for (let i = 0; i < array.length; i++) {
  dobles.push(array[i] * 2)
}

console.log(dobles)

const doblesMap = array.map(number => number * 2)

console.log(doblesMap)

const names = ["Danila", "Nikita", "Samuel"]
const elements = names.map((name) => {
  return <li>{name}</li>
})

console.log(elements)

const button = document.createElement("button")

button.textContent = "Click me"

button.addEventListener("click", () => {
  console.log("Clicked")
})

document.body.appendChild(button)
