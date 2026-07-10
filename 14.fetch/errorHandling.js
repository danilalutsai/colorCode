// I get an error fetching data from that link because I need to provide token
// to access it via headers
const url = 'https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9'

async function getData() {

  // First we need to create our request Object
  const request = new Request(url, {
    // First parameter is the url, and second parameter in {} brackets is all
    // the other staff that you want to provide
    headers: {
      'Authorization': 'value-of-the-token'
    }
  })

  // Now instead of passing the url to fetch we pass the request object
  try {
    const response = await fetch(request)
    const data = await response.json()

    if (!response.ok) {
      console.log(
        'Server error. Response status:', response.status,
        'Error message:', data.error.message
      )

    } else {
      console.log('Success:', data)
    }

  } catch (error) {
    console.log('Error:', error)
  }
}

// The error we get is a result of a successful call even we don't get the data
// we wanted. This means that the Promise we made was resolved instead of
// rejected. Because even if we get an error response we still get the response
// so the fetch call results successful. 

getData()
