function human(n) {
  const name = n

  function sayHi() {
    console.log(`Hi, I am ${name}`)
  }

  function howYouFeel() {
    console.log(`${name} is feeling good`)
  }

  sayHi()
  howYouFeel()

  return {
    sayHi,
    howYouFeel
  }
}

const danila = human("Danila")
const nikita = human("Nikita")

// As we return an object in our function we can interact with them directly
// Closures remember the outer function scope even after creation time
danila.sayHi()
nikita.howYouFeel()
