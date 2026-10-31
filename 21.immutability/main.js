const a = {id: 1}
a.id = 2
a.name = "Danila"
a.talk = fn()
Object.freeze(a)

console.log(a)

let b = {id: 2}
b = {id: 3}

console.log(b)

// You can't do it this way
a = {id: 2} // X

console.log(a)

// React example 
const state = { count: 0}

function setState(update) {
  state = {
    ...state,
    ...update,
  }

  log(state)
  render()
}

function render() { log(state) }
setState({ count: 1 })

