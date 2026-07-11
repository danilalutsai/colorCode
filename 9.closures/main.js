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

danila.sayHi()
nikita.howYouFeel()
