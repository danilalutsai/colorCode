"use strict";

const user = {
  firstname: "Danila",
  lastname: "Lutsai",
  address: {
    country: {
      city: "Tallinn",
      street: {
        streetName: "Kihnu",
        streetNumber: 12,
        flat: 122,
      },
    },
  },
};

// You can mutate values inside an object,
// but you cannot replace the object with another value
// when the variable is declared with const.
//
// const does not make an object immutable.
// It only prevents assigning a different value or reference
// to the same variable.

const spreadCopy = { ...user };
const clonedCopy = structuredClone(user);

spreadCopy.lastname = "Mihalkov";
spreadCopy.address.country.city = "Moscow";

clonedCopy.address.country.city = "St. Petersburg";

console.log("user:", user);
console.log("spreadCopy:", spreadCopy);
console.log("clonedCopy:", clonedCopy);

// Create an independent copy of the user object.
const frozenCopy = structuredClone(user);

// Object.freeze() freezes only the object passed to it.
Object.freeze(frozenCopy);

// This is still allowed because the nested street object
// has not been frozen.
frozenCopy.address.country.street.flat = 130;

console.log(frozenCopy.address.country.street.flat); // 130

// Freeze the nested street object.
Object.freeze(frozenCopy.address.country.street);

// This now causes an error in strict mode.
// frozenCopy.address.country.street.flat = 120;

console.log(frozenCopy.address.country.street.flat); // 130
