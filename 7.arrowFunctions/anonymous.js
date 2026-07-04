// Converting anonymous functions into arrow functions
const anonymous = function() {
  return 'hello'
}

const arrow = () => {
  return 'hello'
}

const arrowArg = (name) => {
  return `hello ${name}`
}

const arrowArgNoBrackets = name => {
  return `hello ${name}`
}

const arrowArgNoBracketsNoSingleReturn = name => `hello ${name}`

const arrowArgs = (firstName, lastName) => {
  return `hello ${firstName} ${lastName}`
}
