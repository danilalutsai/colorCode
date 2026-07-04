// Converting construction functions into arrow functions
function Person(nameValue) {
  this.name = nameValue
}

const me = new Person('Danila')

// THIS OPTION IS INCORRECT WE CAN NOT USE IT LIKE THIS
// const ArrowPerson = (nameValue) => {
//   this.name = nameValue
// }

const you = {
  talk: function() {
    return 'hello'
  }
}

you.talk() // hello

const he = {
  talk: () => {
    return 'hello'
  }
}

// or

const she = {
  talk: () => 'hello'
}

he.talk() // hello
she.talk() // hello
