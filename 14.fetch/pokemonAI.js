// We create asynchonous function
const fetchData = async function(link) {
  try {

    // Returning Promise with built in fetch function
    // Sends HTTP request to provided url
    const response = await fetch(link)

    // Check either the response is between 200 and 299 status
    if (!response.ok) {

      // Stops the function and creates rejected Promise
      throw new Error(
        `Request failed. Status: ${response.status} ${response.statusText}`
      )}

    // Converting JSON text into Javascript object
    // As .json method also return Promise we use await
    const data = await response.json()

    return data
  } catch (err) {
    console.error(err.message)
  }
}

// We receive the pokemon object
const displayPokemon = function(pokemon) {

  // We transform types array with types into readable string
  const types = pokemon.types
  .map((typeInfo) => typeInfo.type.name)
  .join(", ")

  // We transform types array with abilities into readable string
  const abilities = pokemon.abilities
  .map((abilityInfo) => abilityInfo.ability.name)
  .join(", ")

  console.log(`Pokemon information`)
  console.log(`Name: ${pokemon.name}`)
  console.log(`ID: ${pokemon.id}`)
  console.log(`Type: ${types}`)
  console.log(`Height: (${pokemon.height / 10} metres)`)
  console.log(`Weight: (${pokemon.weight / 10}) kilograms`)
  console.log(`Abilities: ${abilities}`)
}

// Request the data, wait for the result, display the data, handle errors
const getPokemon = async function(link) {
  try {
    console.log("Requesting pokemon data...")

    // Without await it would return Promise { <pending> }
    // But with await it returns actual Pokemon object
    const pokemon = await fetchData(link)

    console.log("Data received successfully.")
    
    // Displaying the pokemon data received
    displayPokemon(pokemon)

    // Catching the errors and handling them
  } catch (error) {
    console.error(`Could not receive Pokemon data: ${error.message}`)
  }
}


getPokemon("https://pokeapi.co/api/v2/pokemon/ditto5")
