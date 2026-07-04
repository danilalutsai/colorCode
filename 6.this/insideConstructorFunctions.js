// Constructor automatically creates a bunding of created object and this keyword
function Person(n) {
  this.name = n
  this.talk = function() {
    console.log(this)
  }
}

const me = new Person('Danila')
me.talk()
