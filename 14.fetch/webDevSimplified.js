const makeRequest = async function(location) {
  console.log(`Making request to ${location}`)

  if (location === "Google") {
    return "Google says hi"
  }
  
  throw new Error("We can only talk to Google")
}

const processRequest = async function(response) {
  console.log("Processing response")

  return `Extra information + ${response}`
}

// makeRequest("Facebook")
//   .then(response => {
//   console.log("Response received")
//   return processRequest(response)
// })
//   .then(processedResponse => {
//     console.log(processedResponse)
//   })
//   .catch(err => {
//     console.log(err.message)
//   })

const asyncedResponse = async function(location) {
  try {
    const response = await makeRequest(location)
    console.log("Response received")

    const processedResponse = await processRequest(response)
    console.log(processedResponse)
  } catch (err) {
    console.log(err.message)
  }
}

asyncedResponse("Google")
