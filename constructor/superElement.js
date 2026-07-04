function SuperElement(type, content) {
  this.element = document.createElement(type);
  this.element.innerText = content;
  document.body.append(this.element);
  this.element.addEventListener('click', function() {
    console.log(this.element);
  });
}

const h1 = new SuperElement('h1', 'Helooo!');

// For each member of that array we create an element
const array = ['a', 'b', 'c'];

const myElements = array.map(function(item) {
  return new SuperElement('p', item);
})

console.log(myElements);

