// 1. Anonymouse functions
// Needs to be assign to a variable, if not we get an error
const anonymous = function() {
  return undefined
}

// 2. Callback functions
// Function which you pass into other function as a parameter
function func(callback) {
  return callback()
}

// 3. Named functions
function named() {
  return undefined
}

// 4. Object Methods
const me = {
  sayHello: function() {}
}

// 5. Generator functions
