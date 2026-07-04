function talk(lang, isPolite) {
  if (isPolite) {
    if (lang === 'en') {
      return `Hello, I am ${this.name}`
    } else if (lang === 'it') {
      return `Ciao bella, sono ${this.name}`
    }
  } else {
    if (lang === 'en') {
      return `I am ${this.name}`
    } else if (lang === 'it') {
      return `Io sono ${this.name}`
    }
  }
}

const me = {
  name: 'Danila',
  talk
}

const you = {
  name: 'Nikita',
  talk
}

// call takes as a first argument new value for THIS in our talk function 
// and as second parameter all other arguments from talk function
console.log(talk.call(me, 'en')) // I am Danila
console.log(talk.call(me, 'it')) // Io sono Danila
console.log(talk.call(me, 'it', true)) // Ciao bella, sono Danila

console.log(talk.call(you, 'en', true)) // Hello I am Nikita
console.log(talk.call(you, 'it', true)) // Ciao bella, sono Nikita

// Apply does the same thing but as the second parameter it takes 
// an array of arguments
console.log(talk.apply(you, ['it', false])) // Io sono Nikita
console.log(talk.apply(you, [])) // undefined, no arguments presented
