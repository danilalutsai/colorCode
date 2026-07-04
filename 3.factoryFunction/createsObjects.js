// A factory function is a function that returns an Object as a result.
const me = {
  name: "Danila",
  talk() {
    return `My name is ${this.name}!`;
  },
}

const ben = {
  name: "Ben",
  talk() {
    return `My name is ${this.name}!`;
  },
}

console.log(me.talk());
console.log(ben.talk());
console.log(me);
console.log(ben);
console.log(me.name);
console.log(me.talk());

me.name = 'San';
console.log(me.talk()); 

// Factory function cons
// 1. Simple - it is just a function
// 2. No duplicates
// 3. Data privacy

function personFactory(name) {
  return {
    name,
    talk() {
      return `Hello, I am ${name}`;
    }
  }
}

const me1 = personFactory('Danila');
console.log(me1.talk());
