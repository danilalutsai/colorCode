// We create input element in our page
const input = document.createElement("input")

// Placeholder is what is written behind in input
input.placeholder = "To do"
document.body.appendChild(input)

const button = document.createElement("button")
button.innerText = "Add"
document.body.appendChild(button)

// First argument is a type, second is a function to perform and then options
// Each time we click the button the function performs
button.addEventListener("click", () => {
  const div = document.createElement("div")
  div.innerText = input.value
  document.body.appendChild(div)
  input.value = ""
})
