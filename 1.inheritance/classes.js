// Inheritance can be done with or without classes
const me = {
  talk() {
    return 'Talking'
  }
}

me.talk() // Talking

const you = {
  talk() {
    return 'Talking'
  }
}

you.talk() // Talking

// Problem 1 - code duplication
// Problem 2 - if something wrong, we have to fix each time in every place

class Person {
  talk() {
    return 'Talking'
  }
}

const he = new Person()
const she = new Person()

he.talk() // Talking
she.talk() // Talking
