// Converting callback functions to arrow functions

setTimeout(function() {
  return 'hello'
}, 1000)

setTimeout(() => {
  return 'hello'
}, 1000)
