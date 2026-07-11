const getData = async function(url) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`The response status is not ok. Status: ${response.status} ${response.statusText}`)
  }
  
  const data = response.json()
  return data
}

const getDataPromise = function(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject(new Error(
              `The response status is not ok. Status: ${response.status} ${response.statusText}`
              ))
        }

        return response.json()
      })
      .then((data) => {
        if (data !== undefined) {
          resolve(data)
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const getPokemon = async function(url) {
  try {
    console.log("Fetching data...")
    const pokemon = await getData(url)

    console.log(`The pokemon's name is ${pokemon.name}`)
  } catch (error) {
    console.error(error.message)
  }
}

// getPokemon("https://pokeapi.co/api/v2/pokemon/ditto")

const getPokemonPromise = function(url) {
  console.log("Fetching data...")

  getDataPromise(url)
    .then((pokemon) => { 
    console.log(`The pokemon's name is ${pokemon.name}`)})
    .catch((error) => {
    console.error(error.message)
    })
}

const runRequests = async function() {
  await getPokemon("https://pokeapi.co/api/v2/pokemon/ditto")
  await getPokemonPromise("https://pokeapi.co/api/v2/pokemon/ditto3")
}

runRequests()
