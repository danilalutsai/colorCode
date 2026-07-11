// DOM - Document Object Model
// Pure data representation on what we see in the browser
// Create, Read, Update, Delete
console.log({document})
document.onclick = () => {
  console.log("Hello world")
}

console.log({ b:document.body })
document.body.append("My new thingy...")

// We can't appendChild because it's a string and we can only append here an
// element
// document.body.appendChild("Another thingy...")
const myHeading = document.createElement("h1")
// We append h1 element to the html file
document.body.appendChild(myHeading)
myHeading.innerText = "I am your header"

// Never perform this operation as it cleans full document
document.body.innerHTML = ""
const heading = document.createElement("h1")
document.body.appendChild(heading)
heading.innerText = "Cucumber 🥒"

// Add dynamic date
const now = new Date()
heading.innerText = `${now.getHours()}`
heading.innerText = `${now.getHours()}:${now.getMinutes()}`
