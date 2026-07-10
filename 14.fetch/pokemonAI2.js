const fetchData = async function(link) {
  const response = await fetch(link)

  if (!response.ok) {
    throw new Error(
      `Error fetching data. Status: ${response.status} ${response.statusText}`
    )
  }

  return await response.json()
}

const displayPokemon = function(pokemon) {
  console.log("Data received successfully")
  console.log(`
Pokemon's name is ${pokemon.name}
The ID is ${pokemon.id}
The height is ${pokemon.height}
`)
}

const getPokemon = async function(link) {
  try {
    console.log("Requesting pokemon data...")

    const pokemon = await fetchData(link)

    displayPokemon(pokemon)
  } catch (err) {
    console.error(`Could not receive Pokemon data: ${err.message}`)
  }
}

getPokemon("https://pokeapi.co/api/v2/pokemon/ditto")
