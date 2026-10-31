// Proxy is a Javascript object with customizable basic operations
const me = { name: "Danila", age: 28 }
let you = { name: "Nikita", age: 30, password: "***" }

const myProxy = new Proxy(me, {
  get(target, prop) {
    console.log(`Accessing prop, ${prop}`)

    return target[prop]
  }
})

console.log(myProxy.age)

you = new Proxy(you, {
  get(target, prop) {

    if (prop === "password") {
      throw new Error("Access denied")
    }

    return target[prop]
  }
})

you.name
you.password

you = new Proxy(you, {
  set(target, prop, value) {

    if (prop === "age" && value < 0) {
      throw new Error("Age must be a positive number")
    }

    return target[prop]
  }
})

you.age = -5

const proxyUser = new Proxy(user, {
  get(target, prop) {
    console.log(`Intercepted get: ${prop}`)
    return Reflect.get(target, prop)
  },
  set(target, prop, value) {
    console.log(`Intercepted set: ${prop} = ${value}`)
    return Reflect.set(target, prop, value)
  }
})
