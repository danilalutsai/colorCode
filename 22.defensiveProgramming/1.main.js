function getUser(id) {
  if (!id) {
    throw new Error("The Id is required")
  }
  console.log("do the fetch")
}

getUser(10)

function getLength(str) {
  if (typeof str !== "string") {
    throw new Error("Expected a string")
  }
  console.log(str.length)
}

getLength("string")

function parseAge(ageString) {
  const age = Number(ageString)
  if (isNaN(age) || age < 0) {
    throw new Error("parseAge: Invalid age")
  }
  console.log(age)
}

parseAge("12")

function greet(nameVal = "stranger") {
  console.log( `Hello, ${nameVal.toUpperCase()}`)
}

greet("Danila")
greet()

function getCity(user) {
  // Optional chaning checks for the validity of each element
  console.log(user?.address?.city || "Unknown")
}

const user = {
  address: {
    // city: "Milano",
  }
}

getCity(user)

const arrayNumbers = [1, 2, 3, 4]
const myArray = arrayNumbers
const yourArray = arrayNumbers

function addItem(array, item) {
  // array.push(item)
  // console.log(array)
  // return array
  return console.log([...array, item])
}

addItem(myArray, 5) // [1, 2, 3, 4, 5]
console.log(yourArray) // [1, 2, 3, 4]

// If we want to create ummutable object use freeze straight away, but it only
// works up to one level of nested
const config = Object.freeze({
  version: "1.1.0",
  theme: "light",
})

// config.theme = "dark"
console.log(config.theme) // light

async function fetchUser(url) {
  return await fetch(url)
}

// Use timeout in API calls so if the server doesn't respond in a given time it
// stops the execution and continue your code without freezing the whole app
async function fetchWithTimeout(url, timeout = 3000) {
  const controller = new AbortController()
  const timer = setTimeout(() => {
    controller.abort()
  }, timeout)

  return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(time))
}

fetchUser("http://some-link.com")
fetchWithTimeout("http://some-link.com")

// Wrap the dangerous code in try catch
function parseJSON(str) {
  try {
    return JSON.parse(str)
  } catch (error) {
    console.error(error.message)
  }
}

parseJSON("{not-valid-json")

function handleStatus(status) {
  switch (status) {
    case "success":
    case "pending":
    case "failed":
      updateUI(status)
      break
    default:
      throw new Error(`Unknown status: ${status}`)
  }
}

handleStatus("success")
