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
console.log(me.talk()); // Now is wrong the function because it prints My name is San
