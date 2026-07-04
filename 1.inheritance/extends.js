// Idea of inheritance is extending behaviour and properties
class Person {
  talk() {
    return 'Talking'
  }
}

me = new Person()
me.talk() // Talking

class SuperHuman extends Person {
  fly() {
    return 'Flying'
  }
}

const you = new SuperHuman()

you.talk() // Talking
you.fly() // Flying

me.talk() // Talking
me.fly() // undefined

const person = {
  talk() {
    return 'Talking'
  }
}

// We create an object from an object and we pass all the behaviours
const he = Object.create(person)
he.talk() // Talking

const she = {}
// First parameter is instance and second where we want to inherit from
Object.setPrototypeOf(she, person) 
she.talk() // Talking
