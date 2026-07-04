// Converting named functions into arrow functions
function sayHello() {
  return 'hello'
}

const sayHello = () => {
  return 'hello'
}

const sayHelloArg = (name) => {
  return `hello ${name}`
}

const sayHelloArgNoBrackets = name => {
  return `hello ${name}`
}

const sayHelloArgs = (firstName, lastName) => {
  return `hello ${firstName} ${lastName}`
}

const sayHelloArgNoBracketsNoReturn = name => `hello ${name}`
