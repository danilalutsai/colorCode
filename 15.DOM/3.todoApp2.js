document.body.innerText = ""
const form = document.createElement("form")
document.body.appendChild(form)

const input = document.createElement("input")
input.placeholder = "To do"
form.appendChild(input)

const button = document.createElement("button")
button.innerText = "Add"
button.role = "Add"
form.appendChild(button)

const removeElement = element => {
  element.remove()
}

const ul = document.createElement("ul")
document.body.appendChild(ul)
form.onsubmit = event => {

  // Forms by default redirect you when you submit them
  // So we have to prevent this default behaviour
  event.preventDefault()
  const li = document.createElement("li")
  ul.appendChild(li)
  li.innerText = input.value
  li.onclick = removeElement.bind(null, li)
  input.value = ""
}

