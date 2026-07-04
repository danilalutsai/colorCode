function Person(nameValue) {
  this.name = nameValue
}

function PersonFactory(nameValue) {
  return { name: nameValue }
}

// Person.prototype
// obj instanceof Person -> true
// We return nothing here so if we don't type new for initialization of inctance 
// we get an error
const person1 = new Person('Danila')

// Object.prototype
// obj instanceof PersonFactory -> false
// In factory function we do not need to pass new keyword, but we can optional
const person2 = PersonFactory('Nikita')

function createPerson(nameValue) {
  return {
    name: nameValue,
    talk() {
      return `I am ${this.name}.`
    }
  }
}

const me = createPerson('Danila')
const you = createPerson('Nikita')

console.log(me.talk())

me.talk = function() {
  return `Yo, my name is ${this.name}.`
}

// Important things to see:
// 1. me.talk() and you.talk() are two different functions in the memory
// 2. We copy twice same function declaring object
// 3. If we need to modify this function we need to change it in every instance separately, 
  // we don't really use inheritance hierarcy
console.log(me.talk())
console.log(you.talk())
console.log(me)


