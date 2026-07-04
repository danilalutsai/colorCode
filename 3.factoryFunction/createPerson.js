function createPerson(name) {
  return {
    talk() {
      console.log(`Hey, my name is ${name}`);
    }
  }

}

const daniel = createPerson('Daniel');
const lisa = createPerson('Lisa');

daniel.talk();
lisa.talk();

