function Person(n) {
  this.name = n
  this.talk = function() {
    console.log(this)
  }

  setTimeout(function() {
    console.log(this) // window object
  }, 1000)

  setTimeout(function() {
    console.log(this)
  }.bind(this), 2000) // refers to the object itself

  setTimeout(() => {
    console.log(this)
  }, 3000) // refers to an object as it is an arrow function it works different
}

const me = new Person('Danila')
