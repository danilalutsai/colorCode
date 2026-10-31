// Imperative aproach
const ul = document.createElement("ul")

const li = document.createElement("li")
li.textContent = "Item 1"
ul.appendChild(li)

const li2 = document.createElement("li")
li2.textContent = "Item 2"
ul.appendChild(li2)

document.body.appendChild(ul)

// Declarative aproach
const list = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`
document.body.innerHTML = list
