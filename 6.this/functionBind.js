function talk() {
  return `I am ${this.name}`
}

const me = {
  name: 'Danila',
  // In objects properties if it's a function we don't write () brackets after the function
  // We just reference the function as a propertie key:value because we don't want 
  // to execute the function inside objects properties declaration
  talk
}

// Bind is a function built in method so we can execute 
// it withour declaration after any function
// Any object we pass inside as an argument of bind 
// will be used as a value of this inside this talk function
// 
// It uses the value of me as this
const meTalk = talk.bind(me)
console.log(meTalk()) // I am Danila

console.log(talk.bind(me)() === talk.call(me))
