const makeRequest = async function(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`The response status: ${response.statusText}`)
    }
    const data = await response.json()
    console.log(`The pokemon data: it's name is ${data.name} and the id is ${data.id}`)
  } catch (error) {
    console.error(error.message)
  } finally {
    console.log("We proceded the url fetching")
  }
}

